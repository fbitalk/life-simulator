# 人生模拟器代码激进重构实现计划

> **For agentic workers:** 使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现。步骤使用 checkbox (`- [ ]`) 语法跟踪。

**目标:** 将 1463 行 God Class (game.js) 和 4266 行 CSS 拆分为模块化的 ES Module 架构，消除全局变量依赖。

**架构:** ES Modules + 职责分离。GameController 编排流程，PlayerState 管理数据，EventRenderer 处理 DOM，DeathSystem 纯计算，LifeArchive 管理持久化。CSS 拆分为 6 个主题化文件。

**技术栈:** Vanilla JavaScript ES6+ (ES Modules), CSS Custom Properties, Electron 28

---

### Task 0: 准备工作——创建新目录结构

**文件:**
- 创建: `js/core/`, `js/data/`, `js/ui/` 目录

- [ ] **Step 1: 创建新目录**

```bash
mkdir -p js/core js/data js/ui
```

- [ ] **Step 2: 移动现有文件到新位置**

```bash
# 复制 constants.js 和 DataManager.js 到 data/ (暂时保留原文件)
cp js/modules/constants.js js/data/constants.js
cp js/modules/DataManager.js js/data/DataManager.js
```

- [ ] **Step 3: 备份当前 style.css**

```bash
cp css/style.css css/style.css.bak
```

- [ ] **Step 4: 验证——在浏览器打开 index.html，确认游戏正常运行**

- [ ] **Step 5: 提交**

```bash
git add js/core/ js/data/ js/ui/ css/style.css.bak
git commit -m "chore: 创建新目录结构，备份 CSS

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 1: 提取 PlayerState 模块

**文件:**
- 创建: `js/core/PlayerState.js`
- 修改: `js/game.js` (不改——此阶段只写新文件，不改变现有代码，通过手动测试验证后在下阶段关联)

- [ ] **Step 1: 创建 PlayerState.js**

```javascript
// js/core/PlayerState.js
import { ATTRIBUTES, DEFAULT_ATTRIBUTES, ATTRIBUTE_THRESHOLDS } from '../data/constants.js';

export class PlayerState {
    constructor() {
        this.name = "";
        this.gender = "";
        this.age = 0;
        this.attributes = { ...DEFAULT_ATTRIBUTES };
        this.tags = [];
        this.background = "";
        this.history = [];
    }

    initPlayer({ name, gender }) {
        this.name = name;
        this.gender = gender;
        this.age = 0;
        this.attributes = { ...DEFAULT_ATTRIBUTES };
        this.tags = [];
        this.background = "";
        this.history = [];
    }

    getAttribute(attr) {
        return this.attributes[attr] || 0;
    }

    hasTag(tag) {
        return this.tags.includes(tag);
    }

    get isDead() {
        return this.attributes[ATTRIBUTES.HEALTH] <= 0;
    }

    modifyAttributes(effects) {
        if (!effects) return { dead: false };
        for (const [attr, value] of Object.entries(effects)) {
            this.attributes[attr] = (this.attributes[attr] || 0) + value;
            if (attr === ATTRIBUTES.HEALTH) {
                this.attributes[attr] = Math.max(0, Math.min(100, this.attributes[attr]));
                if (this.attributes[attr] <= 0) {
                    return { dead: true, reason: "突发心脏病而死", type: "health" };
                }
            }
        }
        return { dead: false };
    }

    setAttributes(fixed) {
        if (!fixed) return { dead: false };
        for (const [attr, value] of Object.entries(fixed)) {
            this.attributes[attr] = value;
            if (attr === ATTRIBUTES.HEALTH) {
                this.attributes[attr] = Math.max(0, Math.min(100, this.attributes[attr]));
                if (this.attributes[attr] <= 0) {
                    return { dead: true, reason: "突发心脏病而死", type: "health" };
                }
            }
        }
        return { dead: false };
    }

    addTag(tag) {
        if (!this.tags.includes(tag)) {
            this.tags.push(tag);
            return true;
        }
        return false;
    }

    removeTag(tag) {
        const index = this.tags.indexOf(tag);
        if (index !== -1) {
            this.tags.splice(index, 1);
            return true;
        }
        return false;
    }

    removeTags(tags) {
        this.tags = this.tags.filter(t => !tags.includes(t));
    }

    incrementAge() {
        this.age++;
    }

    checkThresholds() {
        const added = [];
        const removed = [];

        for (const [attr, thresholds] of Object.entries(ATTRIBUTE_THRESHOLDS)) {
            const value = this.attributes[attr] || 0;

            if (thresholds.HIGH) {
                if (value >= thresholds.HIGH.value) {
                    if (!this.tags.includes(thresholds.HIGH.tag)) {
                        this.tags.push(thresholds.HIGH.tag);
                        added.push(thresholds.HIGH.tag);
                    }
                } else if (this.tags.includes(thresholds.HIGH.tag)) {
                    this.tags = this.tags.filter(t => t !== thresholds.HIGH.tag);
                    removed.push(thresholds.HIGH.tag);
                }
            }

            if (thresholds.LOW) {
                if (value <= thresholds.LOW.value) {
                    if (!this.tags.includes(thresholds.LOW.tag)) {
                        this.tags.push(thresholds.LOW.tag);
                        added.push(thresholds.LOW.tag);
                    }
                } else if (this.tags.includes(thresholds.LOW.tag)) {
                    this.tags = this.tags.filter(t => t !== thresholds.LOW.tag);
                    removed.push(thresholds.LOW.tag);
                }
            }
        }

        return { added, removed };
    }

    addHistory(entry) {
        this.history.push(entry);
    }

    getTriggeredEventIds() {
        return this.history.map(e => e.eventId);
    }
}
```

- [ ] **Step 2: 创建简单的 Node.js 测试脚本验证 PlayerState 逻辑**

```javascript
// test/PlayerState.test.js (手动引入模块)
// 在浏览器控制台运行：import { PlayerState } from './js/core/PlayerState.js'
// 或直接在浏览器中打开测试页
```

由于项目无测试框架，此阶段通过在浏览器控制台中 `import()` 动态加载模块手动验证：
1. `const { PlayerState } = await import('./js/core/PlayerState.js')`
2. 创建实例，测试 initPlayer、modifyAttributes、checkThresholds

- [ ] **Step 3: 验证——浏览器控制台执行，确认：**
  - `new PlayerState()` 创建默认状态
  - `initPlayer({name: "测试", gender: "male"})` 正确初始化
  - `modifyAttributes({health: -60})` 返回 `{dead: true, ...}`
  - `modifyAttributes({money: 120})` + `checkThresholds()` 返回 `{added: ["富有"]}`

- [ ] **Step 4: 提交**

```bash
git add js/core/PlayerState.js
git commit -m "feat: 提取 PlayerState 模块——玩家状态管理的纯数据类

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 2: 提取 DeathSystem 模块

**文件:**
- 创建: `js/core/DeathSystem.js`

- [ ] **Step 1: 创建 DeathSystem.js**

```javascript
// js/core/DeathSystem.js
import { ATTRIBUTES, GAME_CONFIG } from '../data/constants.js';

export class DeathSystem {
    checkHealth(health) {
        if (health <= 0) {
            return { dead: true, reason: "突发心脏病而死", type: "health" };
        }
        return null;
    }

    rollOldAgeDeath(age, health, luck) {
        if (age < GAME_CONFIG.DEATH_CHECK_AGE || health >= 30) {
            return null;
        }

        let probability = 0.2;
        probability += (age - 80) * 0.05;
        probability += (30 - health) * 0.02;
        probability -= (luck || 50) / 200;

        if (Math.random() < probability) {
            return { dead: true, reason: "自然老死", type: "age" };
        }
        return null;
    }

    shouldAutoKill(option) {
        const risk = option.risk;
        if (risk === undefined) return false;
        if (risk >= 1) return true;
        return Math.random() < risk;
    }
}
```

- [ ] **Step 2: 浏览器控制台验证**

```javascript
const { DeathSystem } = await import('./js/core/DeathSystem.js');
const ds = new DeathSystem();
// 验证健康死亡
console.assert(ds.checkHealth(0) !== null, '0 health should die');
console.assert(ds.checkHealth(10) === null, '10 health should not die');
// 验证老年死亡（年轻不会触发）
console.assert(ds.rollOldAgeDeath(20, 50, 50) === null, 'young should not trigger');
// 验证风险死亡
console.assert(ds.shouldAutoKill({risk: 1}) === true, 'risk 1 should kill');
```

- [ ] **Step 3: 提交**

```bash
git add js/core/DeathSystem.js
git commit -m "feat: 提取 DeathSystem 模块——纯计算的死亡判定逻辑

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 3: 提取 EventRenderer 模块

**文件:**
- 创建: `js/core/EventRenderer.js`

这是最大最复杂的提取——将 game.js 中所有 DOM 创建方法搬入 EventRenderer。

- [ ] **Step 1: 创建 EventRenderer.js（骨架 + 核心方法）**

```javascript
// js/core/EventRenderer.js
import { getAgeGroup, AGE_GROUPS } from '../data/constants.js';
import { getTagType } from '../data/tagUtils.js';  // 见下方说明

export class EventRenderer {
    constructor() {
        this.onTagEffect = null;  // 标签特效回调，由 GameController 注入
        this.onGoldenEffect = null;
    }

    /**
     * 渲染标签元素（公共方法，被多处调用）
     */
    renderTags(tags, container) {
        container.innerHTML = '';
        const fragment = document.createDocumentFragment();

        const tagObjects = tags.map(tag => ({
            text: tag,
            type: getTagType(tag),
            random: Math.random()
        }));

        const typeOrder = { 'black': 1, 'purple': 2, 'red': 3, 'pink': 4, 'golden': 5, 'normal': 6 };
        tagObjects.sort((a, b) => {
            if (typeOrder[a.type] !== typeOrder[b.type]) return typeOrder[a.type] - typeOrder[b.type];
            return a.random - b.random;
        });

        tagObjects.forEach(tagObj => {
            const tagEl = document.createElement('div');
            tagEl.className = 'tag';
            if (tagObj.type !== 'normal') tagEl.classList.add(tagObj.type);
            tagEl.textContent = tagObj.text;
            fragment.appendChild(tagEl);
        });

        container.appendChild(fragment);
    }

    /**
     * 显示事件（原 game.js displayEvent 方法）
     */
    displayEvent(event, playerName, onOptionSelect) {
        if (event.auto_skip) {
            return { autoSkipped: true, message: event.description ? event.description.replace(/{user}/g, playerName) : "平静无波的一年" };
        }

        const eventContainer = document.getElementById('eventContainer');
        eventContainer.innerHTML = '';

        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        // 标题
        const titleContainer = document.createElement('div');
        titleContainer.className = 'event-title-container';
        const title = document.createElement('h2');
        title.className = 'event-title';
        title.textContent = event.title;
        titleContainer.appendChild(title);
        eventCard.appendChild(titleContainer);

        // 可滚动内容
        const contentScroll = document.createElement('div');
        contentScroll.className = 'event-content-scroll';

        // 描述
        const description = document.createElement('p');
        description.className = 'event-description';
        description.textContent = event.description
            ? event.description.replace(/{user}/g, playerName)
            : "没有描述";
        contentScroll.appendChild(description);

        // 选项
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'event-options';

        const hasOptions = event.options && Array.isArray(event.options) && event.options.length > 0;
        const hasContinueEvent = event.continue_event && typeof event.continue_event === 'string';

        if (hasOptions) {
            event.options.forEach((option, index) => {
                const button = this._createOptionButton(option, index, onOptionSelect);
                optionsContainer.appendChild(button);
            });
        } else {
            // 默认继续按钮
            const button = this._createContinueButton(hasContinueEvent ? '➡️' : '➡️',
                hasContinueEvent ? "继续" : "继续",
                () => {
                    const store = document.getElementById('eventContainer');
                    store.dataset.continueClicked = 'true';
                    if (onOptionSelect) onOptionSelect({ isContinue: true, event }, 0);
                });
            optionsContainer.appendChild(button);
        }

        contentScroll.appendChild(optionsContainer);
        eventCard.appendChild(contentScroll);
        eventContainer.appendChild(eventCard);

        return { autoSkipped: false };
    }

    _createOptionButton(option, index, onSelect) {
        const button = document.createElement('button');
        button.className = 'option-btn';
        if (option.conditional_results && option.conditional_results.length > 0) {
            button.classList.add('option-conditional');
        }

        const icon = document.createElement('span');
        icon.className = 'option-icon';
        icon.textContent = option.icon || '🔘';

        const content = document.createElement('span');
        content.className = 'option-content';
        content.textContent = option.text;

        button.appendChild(icon);
        button.appendChild(content);
        button.addEventListener('click', () => onSelect(option, index));
        return button;
    }

    _createContinueButton(iconText, label, onClick) {
        const button = document.createElement('button');
        button.className = 'option-btn';
        const icon = document.createElement('span');
        icon.className = 'option-icon';
        icon.textContent = iconText;
        const content = document.createElement('span');
        content.className = 'option-content';
        content.textContent = label;
        button.appendChild(icon);
        button.appendChild(content);
        button.addEventListener('click', onClick);
        return button;
    }

    /**
     * 显示事件结果
     */
    displayResult(result, playerName, onNext) {
        const eventContainer = document.getElementById('eventContainer');
        eventContainer.innerHTML = '';

        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';

        // 添加事件历史条目
        this.addEventToHistory(result.result.replace(/{user}/g, playerName));

        const resultText = document.createElement('p');
        resultText.textContent = result.result.replace(/{user}/g, playerName);
        resultCard.appendChild(resultText);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'next-event-btn';
        nextBtn.textContent = '→';
        nextBtn.addEventListener('click', onNext);
        resultCard.appendChild(nextBtn);

        eventContainer.appendChild(resultCard);
    }

    /**
     * 添加事件到历史显示
     */
    addEventToHistory(resultText) {
        const historyContainer = document.getElementById('eventHistory');
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.textContent = resultText;
        historyContainer.appendChild(historyItem);
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }

    /**
     * 显示游戏结束界面
     */
    showGameOver(state, archive, callbacks) {
        document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('gameoverScreen').style.display = 'block';
        document.getElementById('finalAge').textContent = `${state.age}岁`;
        document.getElementById('deathReason').textContent = `死因：${state.deathReason}`;

        // 渲染最终标签
        const finalTagsContainer = document.getElementById('finalTags');
        finalTagsContainer.innerHTML = '';
        this.renderTags(state.tags, finalTagsContainer);

        // 显示历史
        const historyList = document.getElementById('historyList');
        historyList.innerHTML = '';
        const fragment = document.createDocumentFragment();
        state.history.forEach(entry => {
            const item = document.createElement('div');
            item.className = 'history-item';

            const header = document.createElement('div');
            header.className = 'history-event-header';

            const titleSpan = document.createElement('div');
            titleSpan.className = 'history-event-title';
            titleSpan.textContent = entry.eventTitle;

            const ageSpan = document.createElement('div');
            ageSpan.className = 'history-age';
            ageSpan.textContent = `${entry.age}岁`;

            header.appendChild(titleSpan);
            header.appendChild(ageSpan);

            const resultContent = document.createElement('div');
            resultContent.className = 'history-event-content';
            resultContent.textContent = entry.result;

            item.appendChild(header);
            item.appendChild(resultContent);
            fragment.appendChild(item);
        });
        historyList.appendChild(fragment);

        // 绑定按钮
        document.getElementById('btnReturnToMenu').onclick = callbacks.onReturnToMenu;
        document.getElementById('btnNewLifeGameOver').onclick = callbacks.onNewLife;
        document.getElementById('btnBurial').onclick = callbacks.onBurial;
    }

    /**
     * 渲染墓地中保存的人生列表
     */
    renderSavedLives(lives, onViewDetails) {
        const container = document.getElementById('savedLivesList');
        container.innerHTML = '';

        if (lives.length === 0) {
            container.innerHTML = '<p class="no-saves">没有保存的人生记录</p>';
            return;
        }

        lives.sort((a, b) => new Date(b.savedDate) - new Date(a.savedDate));

        const fragment = document.createDocumentFragment();
        lives.forEach(life => {
            const card = document.createElement('div');
            card.className = 'saved-life-card';

            const header = document.createElement('div');
            header.className = 'saved-life-header';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'saved-life-name';
            nameSpan.textContent = life.name;

            const ageSpan = document.createElement('span');
            ageSpan.className = 'saved-life-age';
            ageSpan.textContent = `${life.age}岁`;

            header.appendChild(nameSpan);
            header.appendChild(ageSpan);

            const date = document.createElement('div');
            date.className = 'saved-life-date';
            date.textContent = new Date(life.savedDate).toLocaleString();

            const viewButton = document.createElement('button');
            viewButton.className = 'btn';
            viewButton.textContent = '查看详情';
            viewButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                onViewDetails(life);
            });

            card.appendChild(header);
            card.appendChild(date);
            card.appendChild(viewButton);
            card.addEventListener('click', (e) => {
                if (e.target === viewButton || viewButton.contains(e.target)) return;
                onViewDetails(life);
            });

            fragment.appendChild(card);
        });
        container.appendChild(fragment);
    }

    /**
     * 显示人生详情
     */
    showLifeDetails(life) {
        document.getElementById('replayScreen').style.display = 'none';
        document.getElementById('lifeDetailsScreen').style.display = 'block';

        document.getElementById('lifeDetailsName').textContent = life.name;
        document.getElementById('lifeDetailsGender').textContent = life.gender === 'male' ? '男' : '女';
        document.getElementById('lifeDetailsAge').textContent = `${life.age}岁`;
        document.getElementById('lifeDetailsBackground').textContent = life.background || '普通人家';
        document.getElementById('lifeDetailsDeathReason').textContent = life.deathReason;

        const tagsContainer = document.getElementById('lifeDetailsTags');
        tagsContainer.innerHTML = '';
        if (life.tags && life.tags.length > 0) {
            const fragment = document.createDocumentFragment();
            life.tags.forEach(tag => {
                const tagEl = document.createElement('div');
                tagEl.className = 'tag';
                const tagType = getTagType(tag);
                if (tagType !== 'normal') tagEl.classList.add(tagType);
                tagEl.textContent = tag;
                fragment.appendChild(tagEl);
            });
            tagsContainer.appendChild(fragment);
        } else {
            tagsContainer.innerHTML = '<span class="no-tags">无标签</span>';
        }

        const historyList = document.getElementById('lifeDetailsHistoryList');
        historyList.innerHTML = '';
        if (life.history && life.history.length > 0) {
            const fragment = document.createDocumentFragment();
            life.history.forEach(entry => {
                const item = document.createElement('div');
                item.className = 'history-item';

                const eventHeader = document.createElement('div');
                eventHeader.className = 'history-event-header';

                const titleSpan = document.createElement('div');
                titleSpan.className = 'history-event-title';
                titleSpan.textContent = entry.eventTitle;

                const ageSpan = document.createElement('div');
                ageSpan.className = 'history-age';
                ageSpan.textContent = `${entry.age}岁`;

                eventHeader.appendChild(titleSpan);
                eventHeader.appendChild(ageSpan);

                const resultContent = document.createElement('div');
                resultContent.className = 'history-event-content';
                resultContent.textContent = entry.result;

                item.appendChild(eventHeader);
                item.appendChild(resultContent);
                fragment.appendChild(item);
            });
            historyList.appendChild(fragment);
        } else {
            historyList.innerHTML = '<p class="no-history">没有历史记录</p>';
        }
    }

    /**
     * 金色成就特效
     */
    showGoldenAchievementEffect(achievement) {
        const effectContainer = document.getElementById('goldenAchievementEffect');
        const effect = document.createElement('div');
        effect.className = 'golden-achievement-notification';
        effect.innerHTML = `
            <div class="achievement-icon">🏆</div>
            <div class="achievement-text">获得成就：${achievement}</div>
        `;
        effectContainer.appendChild(effect);
        setTimeout(() => effect.classList.add('show'), 100);
        setTimeout(() => {
            effect.classList.remove('show');
            setTimeout(() => effectContainer.removeChild(effect), 500);
        }, 3000);
    }
}
```

- [ ] **Step 2: 创建 tagUtils.js 辅助模块**

```javascript
// js/data/tagUtils.js
// 标签类型识别工具——从 game.js 的 isBlackTag/isRedTag/getTagType 提取

const PURPLE_TAGS = new Set([]);  // 运行时通过 eventManager 动态填充
const BLACK_TAGS = new Set([]);   // 同上
const RED_TAGS = new Set([]);     // 同上
const PINK_TAGS = new Set([]);    // 同上
const GOLDEN_TAGS = new Set([]);  // 同上

export function initTagSets(eventManager) {
    // 从 eventManager.allEvents 中提取各颜色标签名
    for (const cat of ['red', 'black', 'purple', 'pink', 'golden']) {
        const data = eventManager.allEvents[cat];
        if (!data) continue;
        for (const tagName of Object.keys(data)) {
            if (cat === 'red') RED_TAGS.add(tagName);
            else if (cat === 'black') BLACK_TAGS.add(tagName);
            else if (cat === 'purple') PURPLE_TAGS.add(tagName);
            else if (cat === 'pink') PINK_TAGS.add(tagName);
            else if (cat === 'golden') GOLDEN_TAGS.add(tagName);
        }
    }
}

export function getTagType(tag) {
    if (BLACK_TAGS.has(tag)) return 'black';
    if (PURPLE_TAGS.has(tag)) return 'purple';
    if (RED_TAGS.has(tag)) return 'red';
    if (PINK_TAGS.has(tag)) return 'pink';
    if (GOLDEN_TAGS.has(tag)) return 'golden';
    return 'normal';
}

export function isBlackTag(tag) { return BLACK_TAGS.has(tag); }
```

- [ ] **Step 3: 验证——在浏览器中手动测试 EventRenderer 的方法**

由于 EventRenderer 需要 DOM 环境，在浏览器中加载 index.html 后测试：
```javascript
const { EventRenderer } = await import('./js/core/EventRenderer.js');
const renderer = new EventRenderer();
// 测试 renderTags
const testContainer = document.createElement('div');
renderer.renderTags(['富有', '贫困'], testContainer);
console.assert(testContainer.children.length === 2, '应渲染2个标签');
```

- [ ] **Step 4: 提交**

```bash
git add js/core/EventRenderer.js js/data/tagUtils.js
git commit -m "feat: 提取 EventRenderer 模块——集中管理所有 DOM 创建逻辑

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 4: 提取 UI 辅助模块（LifeArchive, ModalManager, ThemeManager, MobileAdapter）

**文件:**
- 创建: `js/core/LifeArchive.js`
- 创建: `js/ui/ModalManager.js`
- 创建: `js/ui/ThemeManager.js`
- 创建: `js/ui/MobileAdapter.js`

- [ ] **Step 1: 创建 LifeArchive.js**

```javascript
// js/core/LifeArchive.js
import { isBlackTag } from '../data/tagUtils.js';

export class LifeArchive {
    constructor(dataManager) {
        this.dataManager = dataManager;
    }

    recordHistory(player, event, optionIndex, result) {
        player.history.push({
            age: player.age,
            eventId: event.id,
            eventTitle: event.title,
            optionIndex: optionIndex,
            result: result.result.replace(/{user}/g, player.name)
        });
    }

    savePersistentTags(playerTags) {
        const blackTags = playerTags.filter(tag => isBlackTag(tag));
        this.dataManager.savePersistentTags(blackTags);
        return blackTags;
    }

    loadPersistentTags() {
        return this.dataManager.getPersistentTags();
    }

    saveCurrentLife(player, deathReason) {
        const lifeRecord = {
            id: Date.now(),
            name: player.name,
            gender: player.gender,
            age: player.age,
            background: player.background,
            deathReason: deathReason,
            tags: [...player.tags],
            history: [...player.history],
            savedDate: new Date().toISOString()
        };
        this.dataManager.saveLife(lifeRecord);
        return lifeRecord;
    }

    getSavedLives() {
        return this.dataManager.getSavedLives();
    }
}
```

- [ ] **Step 2: 创建 ModalManager.js**

```javascript
// js/ui/ModalManager.js
export class ModalManager {
    showAlert(message, icon = '⚠️') {
        return new Promise((resolve) => {
            document.getElementById('customModalIcon').textContent = icon;
            document.getElementById('customModalMessage').textContent = message;
            document.getElementById('customModalButtons').innerHTML = `
                <button class="modal-btn-confirm" id="modalConfirmBtn">确定</button>
            `;
            document.getElementById('customModalOverlay').style.display = 'flex';
            document.getElementById('modalConfirmBtn').onclick = () => {
                document.getElementById('customModalOverlay').style.display = 'none';
                resolve(true);
            };
        });
    }

    showConfirm(message, icon = '❓') {
        return new Promise((resolve) => {
            document.getElementById('customModalIcon').textContent = icon;
            document.getElementById('customModalMessage').textContent = message;
            document.getElementById('customModalButtons').innerHTML = `
                <button class="modal-btn-cancel" id="modalCancelBtn">取消</button>
                <button class="modal-btn-confirm" id="modalConfirmBtn">确定</button>
            `;
            document.getElementById('customModalOverlay').style.display = 'flex';
            document.getElementById('modalConfirmBtn').onclick = () => {
                document.getElementById('customModalOverlay').style.display = 'none';
                resolve(true);
            };
            document.getElementById('modalCancelBtn').onclick = () => {
                document.getElementById('customModalOverlay').style.display = 'none';
                resolve(false);
            };
            document.getElementById('customModalOverlay').onclick = (e) => {
                if (e.target === e.currentTarget) {
                    document.getElementById('customModalOverlay').style.display = 'none';
                    resolve(false);
                }
            };
        });
    }
}
```

- [ ] **Step 3: 创建 ThemeManager.js**

```javascript
// js/ui/ThemeManager.js
export class ThemeManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
    }

    init() {
        const theme = this.dataManager.getTheme();
        document.documentElement.setAttribute('data-theme', theme);
        this._updateIcon(theme);
    }

    toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        this.dataManager.saveTheme(next);
        this._updateIcon(next);
    }

    _updateIcon(theme) {
        const icon = document.getElementById('themeIcon');
        if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}
```

- [ ] **Step 4: 创建 MobileAdapter.js**

```javascript
// js/ui/MobileAdapter.js
export class MobileAdapter {
    init() {
        this._detectAndApply();
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => this._detectAndApply(), 150);
        });
    }

    _detectAndApply() {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            || window.innerWidth <= 768;

        if (isMobile) {
            document.body.classList.add('mobile-device');
            if (window.innerHeight > window.innerWidth) {
                document.body.classList.add('portrait');
                document.body.classList.remove('landscape');
            } else {
                document.body.classList.add('landscape');
                document.body.classList.remove('portrait');
            }
            this._optimizeTouch();
        } else {
            document.body.classList.add('desktop-device');
            document.body.classList.remove('mobile-device', 'portrait', 'landscape');
        }
    }

    _optimizeTouch() {
        document.addEventListener('touchstart', () => {}, { passive: true });
    }
}
```

- [ ] **Step 5: 验证——浏览器中测试各模块独立功能**

- [ ] **Step 6: 提交**

```bash
git add js/core/LifeArchive.js js/ui/ModalManager.js js/ui/ThemeManager.js js/ui/MobileAdapter.js
git commit -m "feat: 提取 UI 辅助模块——LifeArchive, ModalManager, ThemeManager, MobileAdapter

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 5: 改造 EventManager + 事件文件为 ES Modules

**文件:**
- 修改: `js/events/*.js` (9个事件文件，添加 export)
- 创建: `js/core/eventManager.js` (新位置，import 事件文件)

- [ ] **Step 1: 批量修改事件文件——添加 export**

对每个事件文件，将 `const xxxEvents = {` 改为 `export const xxxEvents = {`。

```bash
# 批量替换
for f in js/events/*.js; do
    # 跳过 startEvents.js（空文件，将被删除）
    if [ "$(basename "$f")" = "startEvents.js" ]; then continue; fi
    sed -i 's/^const \([a-zA-Z]*Events\) =/export const \1 =/' "$f"
done
```

手动检查每个文件确保替换正确。

- [ ] **Step 2: 创建新的 js/core/eventManager.js**

```javascript
// js/core/eventManager.js
import { startEvents } from '../events/startEvents.js';
import { commonEvents } from '../events/commonEvents.js';
import { redEvents } from '../events/redEvents.js';
import { blackEvents } from '../events/blackEvents.js';
import { purpleEvents } from '../events/purpleEvents.js';
import { pinkEvents } from '../events/pinkEvents.js';
import { goldEvents } from '../events/goldEvents.js';
import { maleEvents } from '../events/maleEvents.js';
import { femaleEvents } from '../events/femaleEvents.js';
import { ageEvents } from '../events/ageEvents.js';

export class EventManager {
    constructor() {
        this.allEvents = {
            start: startEvents || {},
            common: commonEvents || {},
            red: redEvents || {},
            black: blackEvents || {},
            purple: purpleEvents || {},
            pink: pinkEvents || {},
            golden: goldEvents || {},
            age: ageEvents || {},
            male: maleEvents || {},
            female: femaleEvents || {},
            attribute: {}
        };
    }

    getEventForPlayer(player) {
        let candidateEvents = [];
        for (const tag of player.tags) {
            const tagEvents = this._getEventsByTag(tag, player);
            if (tagEvents.length > 0) {
                candidateEvents = candidateEvents.concat(tagEvents);
            }
        }

        const triggeredIds = player.history.map(entry => entry.eventId);
        candidateEvents = candidateEvents.filter(([eventId, event]) => {
            const isRepeatable = eventId.includes('default') || event.allow_repeat || event.allowRepeat;
            return !triggeredIds.includes(eventId) || isRepeatable;
        });

        if (candidateEvents.length === 0) {
            return this._createDefaultEvent("平静的一年",
                `${player.age}岁这一年，你的生活平静无波。`,
                [{ text: "继续前进", result: "时光流逝...", effects: {} }],
                true);
        }

        const grouped = this._groupByPriority(candidateEvents);
        const highest = Math.max(...Object.keys(grouped).map(Number));
        const selected = this._randomPick(grouped[highest]);
        return { id: selected[0], ...selected[1] };
    }

    _getEventsByTag(tag, player) {
        const result = [];
        const categories = ['common', 'red', 'black', 'purple', 'pink', 'golden', 'male', 'female', 'attribute', 'age'];
        for (const cat of categories) {
            const data = this.allEvents[cat];
            if (data && data[tag] && data[tag].events) {
                for (const [eventId, event] of Object.entries(data[tag].events)) {
                    if (!event.is_continue && this._checkConditions(event, player)) {
                        result.push([eventId, event]);
                    }
                }
            }
        }
        return result;
    }

    _checkConditions(event, player) {
        const c = event.trigger_conditions;
        if (!c) return true;
        if (c.age_range && (player.age < c.age_range[0] || player.age > c.age_range[1])) return false;
        if (c.min_attributes) {
            for (const [attr, val] of Object.entries(c.min_attributes)) {
                if ((player.attributes[attr] || 0) < val) return false;
            }
        }
        if (c.max_attributes) {
            for (const [attr, val] of Object.entries(c.max_attributes)) {
                if ((player.attributes[attr] || 0) > val) return false;
            }
        }
        if (c.min_temp !== undefined && (player.attributes.temp || 0) < c.min_temp) return false;
        if (c.max_temp !== undefined && (player.attributes.temp || 0) > c.max_temp) return false;
        if (c.required_tags) {
            for (const tag of c.required_tags) {
                if (!player.tags.includes(tag)) return false;
            }
        }
        if (c.excluded_tags) {
            for (const tag of c.excluded_tags) {
                if (player.tags.includes(tag)) return false;
            }
        }
        return true;
    }

    _groupByPriority(events) {
        const grouped = {};
        for (const [id, event] of events) {
            const prio = event.priority || 0;
            if (!grouped[prio]) grouped[prio] = [];
            grouped[prio].push([id, event]);
        }
        return grouped;
    }

    _randomPick(events) {
        return events[Math.floor(Math.random() * events.length)];
    }

    _createDefaultEvent(title, description, options, autoSkip = false) {
        return { title, description, options, is_default_event: true, auto_skip: autoSkip };
    }

    processOptionResult(option, player) {
        if (option.conditional_results && option.conditional_results.length > 0) {
            for (const cr of option.conditional_results) {
                if (cr.conditions.default || this._checkConditions({ trigger_conditions: cr.conditions }, player)) {
                    return {
                        result: cr.result,
                        effects: cr.effects || {},
                        set_attributes: cr.set_attributes || {},
                        add_tags: cr.add_tags || [],
                        remove_tags: cr.remove_tags || [],
                        continue_event: this._resolveContinue(cr.continue_event),
                        risk: cr.risk, death_flag: cr.death_flag, death_reason: cr.death_reason
                    };
                }
            }
        }
        return {
            result: option.result,
            effects: option.effects || {},
            set_attributes: option.set_attributes || {},
            add_tags: option.add_tags || [],
            remove_tags: option.remove_tags || [],
            continue_event: this._resolveContinue(option.continue_event),
            risk: option.risk, death_flag: option.death_flag, death_reason: option.death_reason
        };
    }

    _resolveContinue(ce) {
        if (!ce) return undefined;
        if (Array.isArray(ce)) return ce[Math.floor(Math.random() * ce.length)];
        return ce;
    }

    getContinuationEvent(eventId) {
        const categories = ['common', 'red', 'black', 'purple', 'pink', 'golden', 'male', 'female', 'attribute', 'age'];
        for (const cat of categories) {
            const data = this.allEvents[cat];
            if (!data) continue;
            for (const tagEvents of Object.values(data)) {
                if (tagEvents && tagEvents.events && tagEvents.events[eventId]) {
                    return { id: eventId, ...tagEvents.events[eventId] };
                }
            }
        }
        return this._createDefaultEvent("意外情况", "系统找不到指定的后续事件。",
            [{ text: "继续", result: "你继续前进...", effects: {} }]);
    }
}
```

- [ ] **Step 3: 改造 achievements.js——添加 export**

```bash
# 将 const achievementManager = { 改为 export const achievementManager = {
sed -i 's/^const achievementManager =/export const achievementManager =/' js/achievements.js
```

验证文件末尾没有 `window.achievementManager = ...` 等全局赋值。

- [ ] **Step 4: 改造 constants.js——确认所有常量都有 export**

```javascript
// js/data/constants.js (在现有内容基础上，确保所有顶层声明有 export)
export const ATTRIBUTES = { ... };
export const DEFAULT_ATTRIBUTES = { ... };
export const ATTRIBUTE_THRESHOLDS = { ... };
export const AGE_GROUPS = { ... };
export function getAgeGroup(age) { ... }
export const TAG_TYPES = { ... };
export const GAME_CONFIG = { ... };
```

```bash
# 批量添加 export
cd js/data
sed -i 's/^const /export const /g' constants.js
sed -i 's/^function /export function /g' constants.js
cd ../..
```

- [ ] **Step 5: 改造 DataManager.js——添加 export**

```bash
# 将 window.dataManager 的赋值改为 export
# 原: window.dataManager = new DataManager();
# 改: export const dataManager = new DataManager();
```

手动编辑 `js/data/DataManager.js`：
查找 `window.dataManager = new DataManager();` 替换为 `export const dataManager = new DataManager();`
查找 `class DataManager` 替换为 `export class DataManager`

- [ ] **Step 6: 验证——浏览器测试，确认 import 不报错**

在浏览器中测试（需要临时的 type="module" 脚本标签）：
```javascript
// 验证事件导入
const { commonEvents } = await import('./js/events/commonEvents.js');
console.assert(typeof commonEvents === 'object', 'commonEvents should be object');
// 验证 EventManager
const { EventManager } = await import('./js/core/eventManager.js');
const em = new EventManager();
console.assert(em.allEvents.common !== undefined, 'should have common events');
```

- [ ] **Step 7: 提交**

```bash
git add js/events/*.js js/core/eventManager.js js/achievements.js js/data/constants.js js/data/DataManager.js
git commit -m "feat: 事件文件和 EventManager 改为 ES Modules 导出/导入

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 6: 组装 GameController + 创建 main.js 入口

这是整个重构的核心——将 game.js 剩余的编排逻辑写为 GameController，创建 main.js 入口，修改 index.html。

**文件:**
- 创建: `js/core/GameController.js`
- 创建: `js/main.js`
- 修改: `index.html` （替换脚本标签）
- 删除（暂不移除引用，保留备份）: 旧的 `js/game.js`, `js/eventManager.js`, `js/ui-effects.js`

- [ ] **Step 1: 创建 GameController.js**

```javascript
// js/core/GameController.js
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
import { initTagSets, getTagType, isBlackTag } from '../data/tagUtils.js';
import { achievementManager } from '../achievements.js';

export class GameController {
    constructor() {
        this.player = new PlayerState();
        this.renderer = new EventRenderer();
        this.death = new DeathSystem();
        this.eventManager = new EventManager();
        this.modal = new ModalManager();
        this.theme = new ThemeManager(dataManager);
        this.mobile = new MobileAdapter();

        // 初始化事件管理器后填充标签类型集合
        initTagSets(this.eventManager);

        this.archive = new LifeArchive(dataManager);

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
        console.log('游戏已初始化');
    }

    _bindEvents() {
        document.getElementById('themeToggle')?.addEventListener('click', () => this.theme.toggle());
        document.getElementById('btnNewLife')?.addEventListener('click', () => this._showScreen('characterCreation'));
        document.getElementById('btnReplay')?.addEventListener('click', () => this._showReplayScreen());
        document.getElementById('btnAchievements')?.addEventListener('click', () => this._showAchievements());
        document.getElementById('btnClearTags')?.addEventListener('click', () => this._clearPersistentTags());
        document.getElementById('btnResetGame')?.addEventListener('click', () => this._confirmResetGame());
        document.getElementById('btnBackFromCreation')?.addEventListener('click', () => this._showScreen('mainMenu'));
        document.getElementById('startLifeBtn')?.addEventListener('click', () => this._startNewLife());

        // 性别选择
        document.querySelectorAll('.gender-card').forEach(card => {
            card.addEventListener('click', () => {
                document.querySelectorAll('.gender-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.player.gender = card.dataset.gender;
                this._validateStartButton();
            });
        });

        document.getElementById('playerName')?.addEventListener('input', () => this._validateStartButton());

        // 墓地返回
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

    _startNewLife() {
        const name = document.getElementById('playerName').value.trim();
        const gender = this.player.gender;
        if (!name || !gender) return;

        this.player.initPlayer({ name, gender });
        this.isGameOver = false;
        this.deathReason = '';
        this.deathType = '';

        // 应用黑色标签（轮回记忆）
        if (this.persistentTags.length > 0) {
            this.persistentTags.forEach(tag => this.player.addTag(tag));
        }

        // 进入游戏
        this._showScreen('gameScreen');
        this._updatePlayerInfo();
        this._updateTagsDisplay();

        // 触发开局事件
        this._triggerStartEvent();
    }

    _triggerStartEvent() {
        // 根据性别添加对应标签
        if (this.player.gender === 'male') this.player.addTag('男性');
        if (this.player.gender === 'female') this.player.addTag('女性');

        // 开局背景（从年龄事件中获取）
        const startEvent = this.eventManager.getEventForPlayer(this.player);
        if (startEvent) {
            this.currentEvent = startEvent;
            this.renderer.displayEvent(startEvent, this.player.name, (option, index) => {
                this._handleOptionSelect(option, index);
            });
        } else {
            this._progressToNextYear();
        }
    }

    _handleOptionSelect(option, index) {
        if (option.isContinue) {
            // 继续按钮——查找后续事件
            const nextEvent = this.eventManager.getContinuationEvent(option.event.continue_event);
            if (nextEvent && nextEvent.id !== option.event.id) {
                this.currentEvent = nextEvent;
                this.renderer.displayEvent(nextEvent, this.player.name, (opt, idx) => this._handleOptionSelect(opt, idx));
            } else {
                this._progressToNextYear();
            }
            return;
        }

        const result = this.eventManager.processOptionResult(option, this.player);

        // 处理死亡
        if (result.death_flag || option.death_flag) {
            const reason = result.death_reason || option.death_reason || result.result.replace(/{user}/g, this.player.name);
            this._handleDeath(reason, "risk");
            return;
        }

        // 处理风险死亡
        const risk = result.risk !== undefined ? result.risk : option.risk;
        if (risk && Math.random() < risk) {
            const reason = result.death_reason || option.death_reason || result.result.replace(/{user}/g, this.player.name);
            this._handleDeath(reason, "risk");
            return;
        }

        // 应用效果
        const { dead, reason, type } = this.player.modifyAttributes(result.effects || {});
        if (dead) { this._handleDeath(reason, type); return; }

        const setDead = this.player.setAttributes(result.set_attributes || {});
        if (setDead.dead) { this._handleDeath(setDead.reason, setDead.type); return; }

        // 处理标签
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
            // 同时移除持久黑标签
            for (const tag of result.remove_tags) {
                if (isBlackTag(tag) && this.persistentTags.includes(tag)) {
                    this.persistentTags = this.persistentTags.filter(t => t !== tag);
                }
            }
            this._updateTagsDisplay();
        }

        // 记录历史
        this.archive.recordHistory(this.player, this.currentEvent, index, result);

        // 显示结果
        this.renderer.displayResult(result, this.player.name, () => {
            // 处理继续事件
            if (result.continue_event) {
                const nextEvent = this.eventManager.getContinuationEvent(result.continue_event);
                if (nextEvent) {
                    this.currentEvent = nextEvent;
                    this.renderer.displayEvent(nextEvent, this.player.name, (opt, idx) => this._handleOptionSelect(opt, idx));
                    return;
                }
            }
            this._progressToNextYear();
        });
    }

    _progressToNextYear() {
        if (this.isGameOver) return;

        this.player.incrementAge();
        this._updateAgeGroupTag();

        // 60岁后健康下降
        if (this.player.age >= GAME_CONFIG.YEARLY_HEALTH_DECREASE_AGE) {
            const { dead, reason, type } = this.player.modifyAttributes({
                [ATTRIBUTES.HEALTH]: -GAME_CONFIG.YEARLY_HEALTH_DECREASE_VALUE
            });
            if (dead) { this._handleDeath(reason, type); return; }
        }

        // 80岁后死亡检定
        if (this.player.age >= GAME_CONFIG.DEATH_CHECK_AGE) {
            const deathResult = this.death.rollOldAgeDeath(
                this.player.age,
                this.player.attributes[ATTRIBUTES.HEALTH],
                this.player.attributes[ATTRIBUTES.LUCK]
            );
            if (deathResult) { this._handleDeath(deathResult.reason, deathResult.type); return; }
        }

        this._updatePlayerInfo();

        const nextEvent = this.eventManager.getEventForPlayer(this.player);
        this.currentEvent = nextEvent;

        // 处理自动跳过的事件
        if (nextEvent.auto_skip) {
            const autoResult = {
                result: nextEvent.description ? nextEvent.description.replace(/{user}/g, this.player.name) : "平静无波的一年",
                effects: {}
            };
            this.archive.recordHistory(this.player, nextEvent, 0, autoResult);
            setTimeout(() => this._progressToNextYear(), 100);
            return;
        }

        this.renderer.displayEvent(nextEvent, this.player.name, (opt, idx) => this._handleOptionSelect(opt, idx));
    }

    _updateAgeGroupTag() {
        if (this.player.age <= 0) return;
        const currentGroup = getAgeGroup(this.player.age);
        const hasTag = this.player.hasTag(currentGroup);

        for (const group of Object.values(AGE_GROUPS)) {
            if (this.player.hasTag(group.name) && group.name !== currentGroup) {
                this.player.removeTag(group.name);
            }
        }

        if (!hasTag) {
            this.player.addTag(currentGroup);
        }
    }

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
                    this.archive.saveCurrentLife(this.player, this.deathReason);
                    this.archive.savePersistentTags(this.player.tags);
                    await this.modal.showAlert("下葬成功", "🪦");
                }
            }
        );
    }

    _updatePlayerInfo() {
        document.getElementById('playerNameDisplay').textContent = this.player.name;
        document.getElementById('ageDisplay').textContent = `${this.player.age}岁`;
    }

    _updateTagsDisplay() {
        const container = document.getElementById('tagsContainer');
        this.renderer.renderTags(this.player.tags, container);
        // 阈值检查 + 标签特效
        const { added } = this.player.checkThresholds();
        added.forEach(tag => {
            const type = getTagType(tag);
            if (type === 'golden') this.renderer.showGoldenAchievementEffect(tag);
        });
    }

    _showScreen(screenId) {
        const screens = ['mainMenu', 'characterCreation', 'gameScreen', 'gameoverScreen',
            'achievementsScreen', 'replayScreen', 'lifeDetailsScreen'];
        screens.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.style.display = 'none';
        });
        const target = document.getElementById(screenId);
        if (target) target.style.display = screenId === 'achievementsScreen' ? 'flex' : 'block';
    }

    _showReplayScreen() {
        this._showScreen('replayScreen');
        this.renderer.renderSavedLives(this.archive.getSavedLives(), (life) => {
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
        const confirmed = await this.modal.showConfirm("确定要清除所有累积的黑色记忆吗？", "🧼");
        if (confirmed) {
            dataManager.clearPersistentTags();
            this.persistentTags = [];
            await this.modal.showAlert("所有黑色记忆已清除。", "✅");
        }
    }

    async _confirmResetGame() {
        const confirmed = await this.modal.showConfirm("确定要重置游戏吗？这将清除所有保存数据、成就和记忆！", "🔄");
        if (confirmed) {
            dataManager.clearAllData();
            await this.modal.showAlert("游戏已重置！", "✅");
            location.reload();
        }
    }
}
```

- [ ] **Step 2: 创建 main.js**

```javascript
// js/main.js
import { GameController } from './core/GameController.js';

document.addEventListener('DOMContentLoaded', () => {
    window.game = new GameController();
});
```

- [ ] **Step 3: 修改 index.html**

移除旧的 15 行 `<script>` 标签（从 `<script src="js/modules/DataManager.js">` 到 `<script src="js/ui-effects.js">`），以及内联的 `<script>` 块（DOMContentLoaded 初始化），替换为：

```html
<script type="module" src="js/main.js"></script>
```

具体操作：
```bash
# 手动编辑 index.html，删除以下行：
# 行 232-247: 所有 <script src="..."> 标签
# 行 249-266: 内联 <script> DOMContentLoaded 块
# 在相同位置插入: <script type="module" src="js/main.js"></script>
```

- [ ] **Step 4: 完整功能验证**

逐项检查：
1. 页面加载——确认主菜单显示，无 console 错误
2. 创建新人生（男/女）——角色创建流程正常
3. 游戏循环——至少经历 5 个事件
4. 标签系统——标签正确显示和排序
5. 死亡结局——健康归零或风险死亡触发
6. 墓地——保存和查看历史人生
7. 成就——解锁和显示
8. 主题切换——深色/浅色模式
9. 黑色标签跨轮回——开始第二个人生时继承
10. 移动端布局——Chrome DevTools 模拟 375x667

- [ ] **Step 5: 提交**

```bash
git add js/core/GameController.js js/main.js index.html
git commit -m "feat: 组装 GameController + main.js 入口，完成 JS 架构重构

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 7: CSS 拆分

**文件:**
- 创建: `css/base.css`, `css/layout.css`, `css/components.css`, `css/animations.css`, `css/themes.css`, `css/mobile.css`
- 删除: `css/style.css` (替换为 import 链接)
- 修改: `index.html`

- [ ] **Step 1: 创建 css/base.css——CSS 变量、reset、字体**

从 style.css 中提取 `:root` 变量定义、`body` 规则、`.game-title` 等基础样式。

写入 `css/base.css`：
```css
/* === CSS 变量 === */
:root {
    --color-primary: #667eea;
    --color-primary-dark: #5a6fd6;
    --color-bg: #f0f4ff;
    --color-bg-dark: #1a1a2e;
    --color-surface: #ffffff;
    --color-surface-dark: #16213e;
    --color-text: #333333;
    --color-text-dark: #e0e0e0;
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --shadow-card: 0 4px 15px rgba(0,0,0,0.1);
    --shadow-hover: 0 8px 25px rgba(0,0,0,0.15);
    --shadow-modal: 0 20px 60px rgba(0,0,0,0.3);
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --font-family: 'Microsoft YaHei', 'PingFang SC', sans-serif;
}

/* === Reset === */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
    font-family: var(--font-family);
    background: var(--color-bg);
    color: var(--color-text);
    min-height: 100vh;
    overflow-x: hidden;
}

/* === 通用工具类 === */
.game-title {
    font-size: 2.5rem;
    color: var(--color-primary);
    text-align: center;
    margin-bottom: var(--space-md);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}
```

完整提取需要在 style.css 中识别所有基础样式规则（body, html, 通用选择器等）。

- [ ] **Step 2: 创建 css/layout.css——容器、屏幕级布局**

从 style.css 提取：`.game-container`, `.main-menu`, `.character-creation`, `.game-screen`, `.event-interface`, `.start-screen`, `.gameover-screen`, `.achievements-screen`, `.replay-screen`, `.life-details-screen` 的布局规则。

- [ ] **Step 3: 创建 css/components.css——按钮、卡片、标签、模态弹窗、成就卡片**

从 style.css 提取所有组件样式：`.menu-btn`, `.btn`, `.back-btn`, `.tag`, `.option-btn`, `.event-card`, `.result-card`, `.achievement-card`, `.saved-life-card`, `.gender-card`, `.name-input`, `.custom-modal`, `.death-overlay` 等。

将所有硬编码的颜色/间距/阴影替换为 CSS 变量引用。示例：
```css
.menu-btn {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
    background: var(--color-surface);
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-md);
    color: var(--color-text);
    cursor: pointer;
    transition: all var(--transition-normal);
    box-shadow: var(--shadow-card);
}
.menu-btn:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}
```

- [ ] **Step 4: 创建 css/animations.css——统一动画**

合并 style.css 中 49 个 keyframes 为 6 个通用动画：

```css
/* 浮动动画 */
@keyframes float-x {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(var(--float-distance, 20px)); }
}
@keyframes float-y {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(var(--float-distance, -20px)); }
}

/* 淡入 */
@keyframes fade-in {
    from { opacity: 0; transform: translateY(var(--fade-offset, 10px)); }
    to { opacity: 1; transform: translateY(0); }
}

/* 缩放 */
@keyframes scale-in {
    from { transform: scale(0); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}
@keyframes scale-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(var(--pulse-scale, 1.05)); }
}

/* 旋转 */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

/* 闪光/发光 */
@keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
}
@keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 var(--glow-size, 10px) var(--glow-color, var(--color-primary)); }
    50% { box-shadow: 0 0 calc(var(--glow-size, 10px) * 2) var(--glow-color, var(--color-primary)); }
}

/* Ripple */
@keyframes ripple {
    to { transform: scale(4); opacity: 0; }
}
```

- [ ] **Step 5: 创建 css/themes.css——暗色主题变量覆盖**

```css
[data-theme="dark"] {
    --color-bg: var(--color-bg-dark);
    --color-surface: var(--color-surface-dark);
    --color-text: var(--color-text-dark);
    --shadow-card: 0 4px 15px rgba(0,0,0,0.3);
    --shadow-hover: 0 8px 25px rgba(0,0,0,0.4);
}
```

仅变量覆盖即可——所有组件自动适配。不需要为每个选择器写 `[data-theme="dark"]` 覆盖。

- [ ] **Step 6: 创建 css/mobile.css——移动端响应式**

从 style.css 提取所有 `@media (max-width: 768px)` 规则，集中到此文件。

- [ ] **Step 7: 修改 index.html——替换 CSS 引用**

```html
<!-- 替换 <link rel="stylesheet" href="css/style.css"> 为: -->
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/animations.css">
<link rel="stylesheet" href="css/themes.css">
<link rel="stylesheet" href="css/mobile.css">
```

- [ ] **Step 8: 逐屏视觉验证**

在浏览器中检查每个屏幕的视觉效果是否与重构前一致：
- 主菜单（背景动画、按钮排版）
- 角色创建（性别卡片、姓名输入）
- 游戏界面（事件卡片、标签、历史面板、玩家信息栏）
- 游戏结束（标签展示、历史回顾）
- 墓地（人生卡片列表）
- 成就（网格布局）
- 深色模式（所有屏幕）
- 移动端（375px 宽度）

- [ ] **Step 9: 提交**

```bash
git add css/base.css css/layout.css css/components.css css/animations.css css/themes.css css/mobile.css index.html
git commit -m "feat: CSS 拆分为 6 个主题化文件，建立变量体系，合并动画

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

### Task 8: 清理——移除旧文件

**文件:**
- 删除: `js/game.js`, `js/eventManager.js` (旧位置), `js/ui-effects.js`, `js/modules/` 目录
- 删除: `css/style.css`, `css/style.css.bak`

- [ ] **Step 1: 确认新代码已稳定运行，然后移除旧文件**

```bash
# 删除旧的 JS 文件（保留备份到 Git）
rm js/game.js
rm js/eventManager.js
rm js/ui-effects.js
rm -rf js/modules/

# 删除旧 CSS
rm css/style.css
rm css/style.css.bak
```

- [ ] **Step 2: 最终全面验证**

完整验证清单逐项检查（同 Task 6 Step 4）。

- [ ] **Step 3: 提交**

```bash
git add -u
git commit -m "chore: 移除旧文件，完成激进重构

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
```

---

## 验证矩阵

| 功能 | 验证步骤 | 预期结果 |
|------|---------|----------|
| 新人生（男） | 主菜单 → 新的人生 → 选择男性 → 输入名字 → 开始 | 显示游戏界面，标签含"男性" |
| 新人生（女） | 同上选择女性 | 标签含"女性" |
| 事件循环 | 连续点击选项 5 次 | 每点一次显示新事件/结果 |
| 属性标签 | 触发金钱+50事件 → 财富≥100 | 标签出现"富有" |
| 低属性标签 | 健康下降至≤30 | 标签出现"体弱多病" |
| 健康死亡 | 连续选损健康选项至0 | 死亡遮罩 → 游戏结束 |
| 老年死亡 | 年龄改至85，健康<30 → 继续 | 触发死亡检定 |
| 墓地保存 | 死亡 → 游戏结束 → 下葬 | 提示"下葬成功" |
| 墓地查看 | 主菜单 → 墓地 | 显示刚才保存的人生 |
| 成就解锁 | 触发含成就标签事件 | 金色成就特效 |
| 主题切换 | 点击☀️/🌙按钮 | 亮/暗主题切换 |
| 移动端 | Chrome DevTools iPhone SE | 布局不错乱 |
| 黑标签继承 | 第1条命获得黑标签 → 死亡 → 第2条命 | 黑标签出现在新人生中 |

---

## 回滚策略

8 个阶段对应 8 个 commit。如果某阶段出现问题：
1. `git revert <commit>` 回退该阶段
2. 修复后在浏览器验证
3. 重新提交

不会出现不可逆的情况——每个阶段都是增量式的，旧文件在最后阶段才删除。
