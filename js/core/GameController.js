// js/core/GameController.js
// 游戏主控制器——流程编排，组装所有模块
import { PlayerState } from './PlayerState.js';
import { EventRenderer } from './EventRenderer.js';
import { DeathSystem } from './DeathSystem.js';
import { LifeArchive } from './LifeArchive.js';
import { EventManager } from './eventManager.js';
import { ModalManager } from '../ui/ModalManager.js';
import { ThemeManager } from '../ui/ThemeManager.js';
import { MobileAdapter } from '../ui/MobileAdapter.js';
import { ATTRIBUTES, GAME_CONFIG, getAgeGroup, AGE_GROUPS } from '../data/constants.js';
import { dataManager } from '../data/DataManager.js';
import { initTagSets, getTagType, isBlackTag, isPurpleTag } from '../data/tagUtils.js';
import { getTagInfo, getFixedAttributes, isImmortalTag } from '../data/tagRegistry.js';
import { achievementManager } from '../achievements.js';

export class GameController {
    constructor() {
        // 组装所有模块
        this.player = new PlayerState();
        this.renderer = new EventRenderer();
        this.death = new DeathSystem();
        this.eventManager = new EventManager();
        this.modal = new ModalManager();
        this.theme = new ThemeManager(dataManager);
        this.mobile = new MobileAdapter();
        this.archive = new LifeArchive(dataManager);

        // 初始化标签类型集合（从事件数据中提取颜色标签名）
        initTagSets(this.eventManager);

        // 游戏状态
        this.currentEvent = null;
        this.isGameOver = false;
        this.deathReason = '';
        this.deathType = '';
        this.persistentTags = dataManager.getPersistentTags();

        this._init();
    }

    _init() {
        this.theme.init();
        this.mobile.init();
        this._bindEvents();
        this._showScreen('mainMenu');
    }

    // ==================== 事件绑定 ====================

    _bindEvents() {
        // 主题切换
        document.getElementById('themeToggle')?.addEventListener('click', () => this.theme.toggle());

        // 主菜单按钮
        document.getElementById('btnNewLife')?.addEventListener('click', () => this._showScreen('characterCreation'));
        document.getElementById('btnReplay')?.addEventListener('click', () => this._showReplayScreen());
        document.getElementById('btnAchievements')?.addEventListener('click', () => this._showAchievements());
        document.getElementById('btnClearTags')?.addEventListener('click', () => this._clearPersistentTags());
        document.getElementById('btnResetGame')?.addEventListener('click', () => this._confirmResetGame());

        // 角色创建界面
        document.getElementById('btnBackFromCreation')?.addEventListener('click', () => this._showScreen('mainMenu'));
        document.getElementById('startLifeBtn')?.addEventListener('click', () => this._startNewLife());

        // 性别选择卡片
        document.querySelectorAll('.gender-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.gender-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.player.gender = card.dataset.gender;
                this._validateStartButton();
            });
        });

        // 姓名输入
        document.getElementById('playerName')?.addEventListener('input', () => this._validateStartButton());

        // 墓地 / 成就返回
        document.getElementById('btnBackFromReplay')?.addEventListener('click', () => this._showScreen('mainMenu'));
        document.getElementById('btnBackFromAchievements')?.addEventListener('click', () => this._showScreen('mainMenu'));
        document.getElementById('btnBackFromDetails')?.addEventListener('click', () => this._showReplayScreen());
        document.getElementById('btnBackFromDetailsBottom')?.addEventListener('click', () => this._showReplayScreen());
    }

    _validateStartButton() {
        const btn = document.getElementById('startLifeBtn');
        const name = document.getElementById('playerName').value.trim();
        btn.disabled = !(name && this.player.gender);
    }

    // ==================== 游戏流程 ====================

    _startNewLife() {
        const name = document.getElementById('playerName').value.trim();
        const gender = this.player.gender;
        if (!name || !gender) return;

        this.player.initPlayer({ name, gender });
        this.isGameOver = false;
        this.deathReason = '';
        this.deathType = '';

        // 应用轮回记忆（黑色标签）
        if (this.persistentTags.length > 0) {
            this.persistentTags.forEach(tag => this.player.addTag(tag));
        }

        // 应用紫色标签固定属性
        this._updateFixedAttributes();

        // 进入游戏界面
        this._showScreen('gameScreen');

        // 添加开局标签（dbrs 出生事件依赖"未出生"标签触发）
        this.player.addTag('未出生');
        this.player.addTag('dbrs通用');

        // 触发开局事件
        if (this.player.gender === 'male') this.player.addTag('男性');
        if (this.player.gender === 'female') this.player.addTag('女性');

        this._updatePlayerInfo();
        this._updateTagsDisplay();

        const startEvent = this.eventManager.getEventForPlayer(this.player);
        if (startEvent) {
            this.currentEvent = startEvent;
            const displayResult = this.renderer.displayEvent(startEvent, this.player.name,
                (opt, idx) => this._handleOptionSelect(opt, idx));

            // 处理开局即 auto_skip 的情况（无匹配事件时的默认事件）
            if (displayResult.autoSkipped) {
                this.renderer.addEventToHistory(displayResult.message, this.player.age);
                this.archive.recordHistory(this.player, startEvent, 0, {
                    result: displayResult.message, effects: {}
                });
                this._progressToNextYear();
            }
        } else {
            this._progressToNextYear();
        }
    }

    _handleOptionSelect(option, index) {
        // 处理继续按钮（无选项事件的默认按钮）
        if (option.isContinue) {
            if (option.event && option.event.continue_event) {
                const nextEvent = this.eventManager.getContinuationEvent(option.event.continue_event);
                if (nextEvent) {
                    this.currentEvent = nextEvent;
                    this.renderer.displayEvent(nextEvent, this.player.name,
                        (opt, idx) => this._handleOptionSelect(opt, idx));
                    return;
                }
            }
            this._progressToNextYear();
            return;
        }

        const result = this.eventManager.processOptionResult(option, this.player);

        // 处理死亡标记
        const deathFlag = result.death_flag || option.death_flag;
        if (deathFlag) {
            const reason = (result.death_reason || option.death_reason
                || result.result || '未知原因')
                .replace(/{user}/g, this.player.name)
                .replace(/=NAME=/g, this.player.name)
                .replace(/{age}/g, this.player.age)
                .replace(/=AGE=/g, this.player.age);
            this.renderer.addEventToHistory(result.result.replace(/{user}/g, this.player.name), this.player.age);
            this.archive.recordHistory(this.player, this.currentEvent, index, result);
            this._handleDeath(reason, "risk");
            return;
        }

        // 处理风险死亡
        const risk = result.risk !== undefined ? result.risk : option.risk;
        if (risk && Math.random() < risk) {
            const reason = result.death_reason || option.death_reason
                || result.result.replace(/{user}/g, this.player.name);
            this.renderer.addEventToHistory(result.result.replace(/{user}/g, this.player.name), this.player.age);
            this.archive.recordHistory(this.player, this.currentEvent, index, result);
            this._handleDeath(reason, "risk");
            return;
        }

        // 应用效果变更（增量，如 +10 健康）
        const effectsResult = this.player.modifyAttributes(result.effects || {});
        if (effectsResult.dead) {
            this.renderer.addEventToHistory(result.result.replace(/{user}/g, this.player.name), this.player.age);
            this.archive.recordHistory(this.player, this.currentEvent, index, result);
            this._handleDeath(effectsResult.reason, effectsResult.type);
            return;
        }

        // 应用设置变更（绝对值，如将金钱设为100）
        const setResult = this.player.setAttributes(result.set_attributes || {});
        if (setResult.dead) {
            this.renderer.addEventToHistory(result.result.replace(/{user}/g, this.player.name), this.player.age);
            this.archive.recordHistory(this.player, this.currentEvent, index, result);
            this._handleDeath(setResult.reason, setResult.type);
            return;
        }

        // 处理标签变更
        if (result.add_tags && result.add_tags.length > 0) {
            result.add_tags.forEach(tag => {
                if (this.player.addTag(tag)) {
                    achievementManager.checkAndUnlockByTag(tag);
                    const tagType = getTagType(tag);
                    if (tagType === 'golden') {
                        this.renderer.showGoldenAchievementEffect(tag);
                    }
                }
            });
            this._updateTagsDisplay();
        }

        if (result.remove_tags && result.remove_tags.length > 0) {
            this.player.removeTags(result.remove_tags);
            // 同步清理被移除的黑色标签记忆
            for (const tag of result.remove_tags) {
                if (isBlackTag(tag) && this.persistentTags.includes(tag)) {
                    this.persistentTags = this.persistentTags.filter(t => t !== tag);
                }
            }
            this._updateTagsDisplay();
        }

        // 更新紫色标签固定属性（标签可能已变化）
        this._updateFixedAttributes();

        // 检查阈值标签（属性变化可能导致标签增减）
        const { added } = this.player.checkThresholds();
        added.forEach(tag => {
            const type = getTagType(tag);
            if (type === 'golden') this.renderer.showGoldenAchievementEffect(tag);
        });

        // 记录人生历史
        this.archive.recordHistory(this.player, this.currentEvent, index, result);

        // 结果文本
        const resultText = result.result.replace(/{user}/g, this.player.name);

        // 连续事件：显示结果卡片，通过"→"按钮推进到后续事件
        if (result.continue_event) {
            this.renderer.displayResult(result, this.player.name, this.player.age, () => {
                const nextEvent = this.eventManager.getContinuationEvent(result.continue_event);
                if (nextEvent) {
                    this.currentEvent = nextEvent;
                    const displayResult = this.renderer.displayEvent(nextEvent, this.player.name,
                        (opt, idx) => this._handleOptionSelect(opt, idx));
                    if (displayResult.autoSkipped) {
                        this.renderer.addEventToHistory(displayResult.message, this.player.age);
                        this.archive.recordHistory(this.player, nextEvent, 0, {
                            result: displayResult.message, effects: {}
                        });
                        this._progressToNextYear();
                    }
                } else {
                    this._progressToNextYear();
                }
            });
            return;
        }

        // 非连续事件：结果直接显示在上方历史区，自动进入下一年
        this.renderer.addEventToHistory(resultText, this.player.age);
        this._progressToNextYear();
    }

    _progressToNextYear() {
        if (this.isGameOver) return;

        this.player.incrementAge();
        this._updateAgeGroupTag();

        // 永生标签绕过衰老和死亡检定
        const immortal = this.player.tags.some(t => isImmortalTag(t));

        // 60岁后健康每年下降（由常量控制值）
        if (!immortal && this.player.age >= GAME_CONFIG.YEARLY_HEALTH_DECREASE_AGE) {
            const result = this.player.modifyAttributes({
                [ATTRIBUTES.HEALTH]: -GAME_CONFIG.YEARLY_HEALTH_DECREASE_VALUE
            });
            if (result.dead) { this._handleDeath(result.reason, result.type); return; }
        }

        // 80岁后每年进行死亡检定
        if (!immortal && this.player.age >= GAME_CONFIG.DEATH_CHECK_AGE) {
            const deathResult = this.death.rollOldAgeDeath(
                this.player.age,
                this.player.getAttribute(ATTRIBUTES.HEALTH),
                this.player.getAttribute(ATTRIBUTES.LUCK)
            );
            if (deathResult) { this._handleDeath(deathResult.reason, deathResult.type); return; }
        }

        // 阈值检查（属性可能因年龄衰减而变化）
        const { added } = this.player.checkThresholds();
        added.forEach(tag => {
            const type = getTagType(tag);
            if (type === 'golden') this.renderer.showGoldenAchievementEffect(tag);
        });

        // 更新 UI
        this._updatePlayerInfo();
        this._updateTagsDisplay();

        // 获取下一年的事件
        const nextEvent = this.eventManager.getEventForPlayer(this.player);
        this.currentEvent = nextEvent;

        // 无匹配事件时自动跳过（默认"平静的一年"）
        if (nextEvent.auto_skip) {
            const autoResult = {
                result: nextEvent.description
                    ? nextEvent.description.replace(/{user}/g, this.player.name)
                    : "平静无波的一年",
                effects: {}
            };
            this.archive.recordHistory(this.player, nextEvent, 0, autoResult);
            // 异步推进，避免同步递归和DOM更新冲突
            setTimeout(() => this._progressToNextYear(), 100);
            return;
        }

        this.renderer.displayEvent(nextEvent, this.player.name,
            (opt, idx) => this._handleOptionSelect(opt, idx));
    }

    // ==================== 标签与属性 ====================

    _updateAgeGroupTag() {
        if (this.player.age <= 0) return;
        const currentGroup = getAgeGroup(this.player.age);

        // 移除所有不再匹配的年龄组标签
        for (const group of Object.values(AGE_GROUPS)) {
            if (this.player.hasTag(group.name) && group.name !== currentGroup) {
                this.player.removeTag(group.name);
            }
        }

        // 添加当前年龄组标签
        if (!this.player.hasTag(currentGroup)) {
            this.player.addTag(currentGroup);
        }
    }

    _updateFixedAttributes() {
        const fixedMap = {};
        for (const tag of this.player.tags) {
            // 优先从 tagRegistry 查询固定属性
            const registryAttrs = getFixedAttributes(tag);
            if (registryAttrs) {
                Object.assign(fixedMap, registryAttrs);
            }
            // 兼容旧的紫色标签（从 purpleEvents 文件定义的固定属性）
            if (isPurpleTag(tag)) {
                const purpleData = this.eventManager.allEvents.purple && this.eventManager.allEvents.purple[tag];
                if (purpleData && purpleData.fixed_attributes) {
                    Object.assign(fixedMap, purpleData.fixed_attributes);
                }
            }
        }
        this.player.setFixedAttributesMap(fixedMap);
    }

    // ==================== 死亡处理 ====================

    _handleDeath(reason, type) {
        this.isGameOver = true;
        this.deathReason = reason;
        this.deathType = type;

        const overlay = document.getElementById('deathOverlay');
        document.getElementById('deathMessage').textContent = `你${reason}`;
        overlay.style.display = 'flex';

        document.getElementById('deathContinueBtn').onclick = () => {
            overlay.style.display = 'none';
            this._showGameOver();
        };
    }

    _showGameOver() {
        this.renderer.showGameOver(
            {
                age: this.player.age,
                deathReason: this.deathReason,
                tags: this.player.tags,
                history: this.player.history
            },
            this.archive,
            {
                onReturnToMenu: () => this._showScreen('mainMenu'),
                onNewLife: () => this._showScreen('characterCreation'),
                onBurial: async () => {
                    this.archive.savePersistentTags(this.player.tags);
                    this.archive.saveCurrentLife(this.player, this.deathReason);
                    await this.modal.showAlert("下葬成功", "🪦");
                }
            }
        );
    }

    // ==================== UI 工具方法 ====================

    _updatePlayerInfo() {
        document.getElementById('playerNameDisplay').textContent = this.player.name;
        document.getElementById('ageDisplay').textContent = `${this.player.age}岁`;
    }

    _updateTagsDisplay() {
        const container = document.getElementById('tagsContainer');
        this.renderer.renderTags(this.player.tags, container);
    }

    _showScreen(screenId) {
        const screens = [
            'mainMenu', 'characterCreation', 'gameScreen', 'gameoverScreen',
            'achievementsScreen', 'replayScreen', 'lifeDetailsScreen', 'startScreen'
        ];
        screens.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        const target = document.getElementById(screenId);
        if (target) {
            target.style.display = 'flex';
        }
    }

    _showReplayScreen() {
        this._showScreen('replayScreen');
        const savedLives = this.archive.getSavedLives();
        this.renderer.renderSavedLives(savedLives, (life) => {
            this.renderer.showLifeDetails(life);
        });
    }

    _showAchievements() {
        this._showScreen('achievementsScreen');
        if (typeof achievementManager.renderAchievements === 'function') {
            achievementManager.renderAchievements();
        }
    }

    async _clearPersistentTags() {
        const confirmed = await this.modal.showConfirm(
            "确定要清除所有累积的黑色记忆吗？这将重置你的轮回优势。", "🧼");
        if (confirmed) {
            dataManager.clearPersistentTags();
            this.persistentTags = [];
            await this.modal.showAlert("所有黑色记忆已清除。", "✅");
        }
    }

    async _confirmResetGame() {
        const confirmed = await this.modal.showConfirm(
            "确定要重置游戏吗？这将清除所有保存数据、成就和记忆！", "🔄");
        if (confirmed) {
            dataManager.clearAllData();
            await this.modal.showAlert("游戏已重置！", "✅");
            location.reload();
        }
    }
}
