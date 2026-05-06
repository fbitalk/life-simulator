/**
 * 人生模拟器游戏核心类
 */
class LifeSimulatorGame {
    constructor() {
        // 玩家数据
        this.player = {
            name: "",
            gender: "",
            age: 0,
            attributes: { ...DEFAULT_ATTRIBUTES },
            tags: [],
            background: "",
            history: [] // 历史记录
        };

        // 游戏状态
        this.currentEvent = null;
        this.isGameOver = false;
        this.deathReason = "";
        this.deathType = "";
        this.theme = dataManager.getTheme();

        // 初始化游戏
        this.init();
    }

    /**
     * 初始化游戏
     */
    init() {
        // 初始化主题
        this.initTheme();

        // 加载保存的黑色标签
        this.persistentTags = dataManager.getPersistentTags();
        console.log(`已加载${this.persistentTags.length}个黑色标签`);

        // 绑定UI事件
        this.bindEvents();

        console.log("游戏已初始化");
    }

    /**
     * 绑定UI事件
     */
    bindEvents() {
        // Theme Toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Main Menu Buttons
        document.getElementById('btnNewLife')?.addEventListener('click', () => this.showCharacterCreation());
        document.getElementById('btnReplay')?.addEventListener('click', () => this.showReplayScreen());
        document.getElementById('btnAchievements')?.addEventListener('click', () => this.showAchievements());
        document.getElementById('btnClearTags')?.addEventListener('click', () => this.clearPersistentTags());
        document.getElementById('btnResetGame')?.addEventListener('click', () => this.confirmResetGame());

        // Character Creation
        document.getElementById('btnBackFromCreation')?.addEventListener('click', () => this.backToMainMenu());
        document.getElementById('startLifeBtn')?.addEventListener('click', () => this.startNewLife());

        // Gender Selection
        const genderCards = document.querySelectorAll('.gender-card');
        genderCards.forEach(card => {
            card.addEventListener('click', () => {
                genderCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.player.gender = card.dataset.gender;
                this.validateStartButton();
            });
        });

        // Name Input
        const nameInput = document.getElementById('playerName');
        if (nameInput) {
            nameInput.addEventListener('input', () => {
                this.player.name = nameInput.value.trim();
                this.validateStartButton();
            });
        }

        // Achievements
        document.getElementById('btnBackFromAchievements')?.addEventListener('click', () => this.backToMainMenu());

        // Replay Screen
        document.getElementById('btnBackFromReplay')?.addEventListener('click', () => this.backToMainMenu());

        // Life Details
        document.getElementById('btnBackFromDetails')?.addEventListener('click', () => this.backToReplayScreen());
        document.getElementById('btnBackFromDetailsBottom')?.addEventListener('click', () => this.backToReplayScreen());

        // Game Over Buttons
        document.getElementById('btnReturnToMenu')?.addEventListener('click', () => this.backToMainMenu());
        document.getElementById('btnNewLifeGameOver')?.addEventListener('click', () => this.restartGame()); // Reuse restartGame which shows character creation
        document.getElementById('btnBurial')?.addEventListener('click', () => this.saveLife());

        // Start Screen (if visible)
        document.getElementById('btnStartGame')?.addEventListener('click', () => this.startNewLife());
    }

    initTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateThemeIcon();
    }

    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        dataManager.saveTheme(this.theme);
        document.documentElement.setAttribute('data-theme', this.theme);
        this.updateThemeIcon();
    }

    updateThemeIcon() {
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.textContent = this.theme === 'light' ? '🌓' : '🌕';
        }
    }

    /**
     * 验证开始按钮状态
     */
    validateStartButton() {
        const startButton = document.getElementById('startLifeBtn');
        if (startButton) {
            startButton.disabled = !this.player.gender || !this.player.name;
        }
    }

    /**
     * 开始新的人生
     */
    startNewLife() {
        // 重置玩家基本信息
        // 重置玩家基本信息
        this.player.age = 0; // 从0岁开始
        this.player.attributes = { ...DEFAULT_ATTRIBUTES };
        this.player.tags = [...(this.persistentTags || [])]; // 保留黑色标签

        // 添加性别标签
        if (this.player.gender === "male") {
            this.player.tags.push("男性");
            // 检查性别标签类型并显示相应效果
            this.showTagEffect("男性", 'normal');
        } else if (this.player.gender === "female") {
            this.player.tags.push("女性");
            // 检查性别标签类型并显示相应效果
            this.showTagEffect("女性", 'normal');
        }

        // 检查持久性标签并显示相应效果
        if (this.persistentTags && this.persistentTags.length > 0) {
            this.persistentTags.forEach(tag => {
                if (this.isBlackTag(tag)) {
                    this.showTagEffect(tag, 'black');
                }
            });
        }

        this.player.history = [];
        this.isGameOver = false;
        this.deathReason = "";

        // 显示游戏界面
        document.getElementById('characterCreation').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'block';

        // 清空事件历史区域
        const eventHistory = document.getElementById('eventHistory');
        if (eventHistory) {
            eventHistory.innerHTML = '';
        }

        // 更新UI
        this.updatePlayerInfo();

        // 触发开局事件
        this.triggerStartEvent();
    }

    /**
     * 触发开局事件
     */
    triggerStartEvent() {
        // 获取开局事件 (0岁) - 现在由 Gender Tag 触发
        // 直接调用 getEventForPlayer，它会根据当前标签（包含Gender）查找事件
        const startEvent = eventManager.getEventForPlayer(this.player);
        this.currentEvent = startEvent;

        // 显示事件
        this.displayEvent(startEvent);
    }

    /**
     * 更新玩家信息显示
     */
    updatePlayerInfo() {
        // 更新名字和年龄
        document.getElementById('playerNameDisplay').textContent = this.player.name;
        document.getElementById('ageDisplay').textContent = `${this.player.age}岁`;

        // 更新背景信息
        if (this.player.background) {
            document.getElementById('backgroundDisplay').textContent = this.player.background;
        }

        // 更新标签
        this.updateTagsDisplay();
    }

    /**
     * 更新标签显示
     */
    updateTagsDisplay() {
        const tagsContainer = document.getElementById('tagsContainer');
        tagsContainer.innerHTML = '';

        // 创建一个标签对象数组，包含标签类型和添加时间信息
        const tagObjects = this.player.tags.map((tag, index) => {
            const type = this.getTagType(tag);

            return {
                text: tag,
                type: type,
                // 使用随机数来作为同种颜色内的排序依据
                random: Math.random()
            };
        });

        // 按照颜色排序（黑、紫、红、粉、普通），同种颜色内部随机排序
        tagObjects.sort((a, b) => {
            // 首先按颜色类型排序
            const typeOrder = {
                'black': 1,
                'purple': 2,
                'red': 3,
                'pink': 4,
                'golden': 5,
                'normal': 6
            };

            // 不同颜色按照顺序排
            if (typeOrder[a.type] !== typeOrder[b.type]) {
                return typeOrder[a.type] - typeOrder[b.type];
            }

            // 同种颜色随机排序
            return a.random - b.random;
        });

        // 为每个排序后的标签创建元素
        const fragment = document.createDocumentFragment();
        tagObjects.forEach(tagObj => {
            const tagEl = document.createElement('div');
            tagEl.className = 'tag';

            // 设置标签样式类
            if (tagObj.type !== 'normal') {
                tagEl.classList.add(tagObj.type);
            }

            tagEl.textContent = tagObj.text;
            fragment.appendChild(tagEl);
        });
        tagsContainer.appendChild(fragment);
    }

    /**
     * 检查标签类型
     */
    isBlackTag(tag) {
        return this.checkTagType(tag, 'black');
    }

    isRedTag(tag) {
        return this.checkTagType(tag, 'red');
    }

    isPurpleTag(tag) {
        return this.checkTagType(tag, 'purple');
    }

    isPinkTag(tag) {
        return this.checkTagType(tag, 'pink');
    }

    isGoldenTag(tag) {
        return this.checkTagType(tag, 'golden');
    }

    /**
     * 检查标签类型
     * @param {String} tag - 标签名
     * @param {String} type - 类型名
     * @returns {Boolean} 是否为该类型
     */
    checkTagType(tag, type) {
        const events = eventManager.allEvents[type];
        return events && events[tag] && events[tag][`is_${type}`];
    }

    /**
     * 显示事件
     * @param {Object} event - 事件对象
     */
    /**
     * 应用事件效果（记录历史、属性变化、标签变更）
     * @param {Object} event - 事件对象
     * @param {Number} optionIndex - 选项索引
     * @param {Object} result - 结果对象
     */
    applyEventEffects(event, optionIndex, result) {
        const finalResult = {
            result: result.result || event.description || '',
            effects: event.effects || result.effects || {}
        };
        this.recordHistory(event, optionIndex, finalResult);

        if (event.effects) {
            this.applyEffects(event.effects);
        }

        if (event.add_tags && Array.isArray(event.add_tags)) {
            event.add_tags.forEach(tag => {
                if (\!this.player.tags.includes(tag)) {
                    this.player.tags.push(tag);
                    this.showTagEffect(tag, 'add');
                }
            });
        }

        if (event.remove_tags && Array.isArray(event.remove_tags)) {
            event.remove_tags.forEach(tag => {
                const index = this.player.tags.indexOf(tag);
                if (index \!== -1) {
                    this.player.tags.splice(index, 1);
                    this.showTagEffect(tag, 'remove');
                }
            });
        }

        this.updateTagsDisplay();
    }


    /**
     * 渲染标签元素到容器中（排序并按颜色分类）
     * @param {Array} tags - 标签列表
     * @param {HTMLElement} container - 目标容器
     */
    renderTagElements(tags, container) {
        container.innerHTML = '';
        const fragment = document.createDocumentFragment();

        const tagObjects = tags.map(tag => ({
            text: tag,
            type: this.getTagType(tag),
            random: Math.random()
        }));

        const typeOrder = { 'black': 1, 'purple': 2, 'red': 3, 'pink': 4, 'golden': 5, 'normal': 6 };

        tagObjects.sort((a, b) => {
            if (typeOrder[a.type] \!== typeOrder[b.type]) return typeOrder[a.type] - typeOrder[b.type];
            return a.random - b.random;
        });

        tagObjects.forEach(tagObj => {
            const tagEl = document.createElement('span');
            tagEl.className = 'tag';
            if (tagObj.type \!== 'normal') tagEl.classList.add(tagObj.type);
            tagEl.textContent = tagObj.text;
            fragment.appendChild(tagEl);
        });

        container.appendChild(fragment);
    }


    displayEvent(event) {
        // 检查是否是需要自动跳过的默认事件
        if (event.auto_skip) {
            console.log("自动跳过默认事件，进入下一年");
            // 记录历史
            const autoResult = {
                result: event.description ? event.description.replace(/{user}/g, this.player.name) : "平静无波的一年",
                effects: {}
            };
            this.recordHistory(event, 0, autoResult);

            // 直接进入下一年
            setTimeout(() => {
                this.progressToNextYear();
            }, 100); // 短暂延迟，让UI有时间更新
            return;
        }

        // 清空事件容器
        const eventContainer = document.getElementById('eventContainer');
        eventContainer.innerHTML = '';

        // 创建事件卡片
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        // 标题容器（固定在顶部）
        const titleContainer = document.createElement('div');
        titleContainer.className = 'event-title-container';

        // 事件标题
        const title = document.createElement('h2');
        title.className = 'event-title';
        title.textContent = event.title;
        titleContainer.appendChild(title);
        eventCard.appendChild(titleContainer);

        // 创建可滚动内容区域
        const contentScroll = document.createElement('div');
        contentScroll.className = 'event-content-scroll';

        // 事件描述
        const description = document.createElement('p');
        description.className = 'event-description';
        if (event.description) {
            description.textContent = event.description.replace(/{user}/g, this.player.name);
        } else {
            description.textContent = "没有描述";
            console.warn("事件缺少描述:", event);
        }
        contentScroll.appendChild(description);

        // 事件选项
        const options = document.createElement('div');
        options.className = 'event-options';

        // 判断是否有选项、是否有连续事件
        const hasOptions = event.options && Array.isArray(event.options) && event.options.length > 0;
        const hasContinueEvent = event.continue_event && typeof event.continue_event === 'string';

        // 选项部分的代码保持不变
        if (hasOptions) {
            event.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-btn';

                // 检查是否为条件选项，添加特殊样式
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

                button.addEventListener('click', () => this.handleOptionSelect(option, index));
                options.appendChild(button);
            });
        } else if (hasContinueEvent) {
            // 如果没有选项但有后续事件，添加一个"继续"按钮
            const button = document.createElement('button');
            button.className = 'option-btn';

            const icon = document.createElement('span');
            icon.className = 'option-icon';
            icon.textContent = '➡️';

            const content = document.createElement('span');
            content.className = 'option-content';
            content.textContent = "继续";

            button.appendChild(icon);
            button.appendChild(content);

            button.addEventListener('click', () => {
                // 应用事件效果
                const autoResult = {
                    result: event.description ? event.description.replace(/{user}/g, this.player.name) : "",
                    effects: event.effects || {}
                };
                this.applyEventEffects(event, 0, autoResult);

                // 获取并显示后续事件
                const nextEvent = eventManager.getContinuationEvent(event.continue_event);
                if (nextEvent) {
                    this.currentEvent = nextEvent;
                    this.displayEvent(nextEvent);
                } else {
                    console.error(`无法找到后续事件: ${event.continue_event}`);
                    this.progressToNextYear();
                }
            });
            options.appendChild(button);
        } else {
            console.warn("事件既没有选项也没有后续事件:", event);
            // 添加一个默认的继续按钮
            const button = document.createElement('button');
            button.className = 'option-btn';

            const icon = document.createElement('span');
            icon.className = 'option-icon';
            icon.textContent = '➡️';

            const content = document.createElement('span');
            content.className = 'option-content';
            content.textContent = "继续";

            button.appendChild(icon);
            button.appendChild(content);

            button.addEventListener('click', () => {
                // 应用事件效果
                const autoResult = {
                    result: event.description ? event.description.replace(/{user}/g, this.player.name) : "继续前进",
                    effects: event.effects || {}
                };
                this.applyEventEffects(event, 0, autoResult);

                // 进入下一年
                this.progressToNextYear();
            });
            options.appendChild(button);
        }

        // 将选项添加到可滚动内容区域
        contentScroll.appendChild(options);

        // 将可滚动内容添加到卡片
        eventCard.appendChild(contentScroll);
        eventContainer.appendChild(eventCard);
    }


    /**
     * 显示事件结果
     * @param {Object} result - 结果对象
     */
    displayResult(result) {
        // 创建结果并添加到事件历史中
        const resultText = result.result ? result.result.replace(/{user}/g, this.player.name) : "无结果描述";
        this.addEventToHistory(resultText);

        // 检查是否有后续事件
        if (result.continue_event) {
            const nextEvent = eventManager.getContinuationEvent(result.continue_event);
            if (nextEvent) {
                this.currentEvent = nextEvent;
                this.displayEvent(nextEvent);
            } else {
                console.error(`无法找到后续事件: ${result.continue_event}`);
                this.progressToNextYear();
            }
        } else {
            this.progressToNextYear();
        }
    }

    /**
     * 添加事件到历史记录区
     * @param {String} resultText - 结果文本
     */
    addEventToHistory(resultText) {
        const historyContainer = document.getElementById('eventHistory');
        const currentEvent = this.currentEvent;

        // 创建新的历史事件元素
        const historyEvent = document.createElement('div');
        historyEvent.className = 'history-event';

        // 创建事件头部（包含标题和年龄）
        const eventHeader = document.createElement('div');
        eventHeader.className = 'history-event-header';

        // 添加事件标题
        const titleSpan = document.createElement('div');
        titleSpan.className = 'history-event-title';
        titleSpan.textContent = currentEvent ? currentEvent.title : '事件';

        // 添加年龄标记
        const ageSpan = document.createElement('div');
        ageSpan.className = 'history-age';
        ageSpan.textContent = `${this.player.age}岁`;

        // 添加标题和年龄到头部
        eventHeader.appendChild(titleSpan);
        eventHeader.appendChild(ageSpan);

        // 添加事件结果文本
        const resultContent = document.createElement('div');
        resultContent.className = 'history-event-content';
        resultContent.textContent = resultText;

        // 组装历史事件
        historyEvent.appendChild(eventHeader);
        historyEvent.appendChild(resultContent);

        // 添加到历史容器的底部（这样最新的在底部）
        historyContainer.appendChild(historyEvent);

        // 滚动到底部以显示最新事件
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }

    /**
     * 处理选项选择
     * @param {Object} option - 选项对象
     * @param {Number} optionIndex - 选项索引
     */
    handleOptionSelect(option, optionIndex) {
        // 处理选项结果
        const result = eventManager.processOptionResult(option, this.player);

        // 将death_flag转换为risk:1处理
        // 注意：现在我们检查 result.death_flag 而不是 option.death_flag，以支持条件性死亡
        if (result.death_flag || option.death_flag) {
            // 如果选项有指定的死亡原因，使用它；否则使用结果文本
            const deathReason = result.death_reason || option.death_reason || result.result.replace(/{user}/g, this.player.name);

            // 添加结果到事件历史
            this.addEventToHistory(result.result.replace(/{user}/g, this.player.name));

            // 记录历史
            this.recordHistory(this.currentEvent, optionIndex, result);

            // 处理死亡
            this.handleDeath(deathReason, "risk");
            return;
        }

        // 检查是否有risk标记，如果有且触发死亡
        // 同样检查 result.risk，优先使用 conditional result 中的 risk
        const risk = result.risk !== undefined ? result.risk : option.risk;

        if (risk && Math.random() < risk) {
            // 如果选项有指定的死亡原因，使用它；否则使用结果文本
            const deathReason = result.death_reason || option.death_reason || result.result.replace(/{user}/g, this.player.name);

            // 添加结果到事件历史
            this.addEventToHistory(result.result.replace(/{user}/g, this.player.name));

            // 记录历史
            this.recordHistory(this.currentEvent, optionIndex, result);

            // 处理死亡
            this.handleDeath(deathReason, "risk");
            return;
        }

        // 应用结果影响
        this.applyEffects(result.effects);

        // 应用直接设置属性
        this.applySetAttributes(result.set_attributes);

        // 如果游戏已结束，不继续处理
        if (this.isGameOver) return;

        // 添加/移除标签
        if (result.add_tags && result.add_tags.length > 0) {
            result.add_tags.forEach(tag => {
                if (!this.player.tags.includes(tag)) {
                    this.player.tags.push(tag);

                    // 检查并解锁成就
                    const achievement = achievementManager.checkAndUnlockByTag(tag);
                    if (achievement) {
                        console.log(`成就解锁: ${achievement.name}`);
                    }

                    // check tag type and show effect
                    const tagType = this.getTagType(tag);
                    if (tagType === 'golden') {
                        this.showGoldenAchievementEffect(tag);
                    } else {
                        this.showTagEffect(tag, tagType);
                    }
                }
            });

            // 更新标签显示
            this.updateTagsDisplay();

            // 获得新标签时，滚动到顶部
            const tagsScrollContainer = document.querySelector('.tags-scroll-container');
            if (tagsScrollContainer) {
                tagsScrollContainer.scrollTop = 0;
            }
        }

        if (result.remove_tags && result.remove_tags.length > 0) {
            // 从玩家标签中移除
            this.player.tags = this.player.tags.filter(tag => !result.remove_tags.includes(tag));

            // 如果移除的是黑色标签，也从persistentTags中移除
            if (this.persistentTags && this.persistentTags.length > 0) {
                for (const tag of result.remove_tags) {
                    if (this.isBlackTag(tag) && this.persistentTags.includes(tag)) {
                        this.persistentTags = this.persistentTags.filter(t => t !== tag);
                    }
                }
            }

            // 更新标签显示
            this.updateTagsDisplay();
        }

        // 记录历史
        this.recordHistory(this.currentEvent, optionIndex, result);

        // 显示结果
        this.displayResult(result);
    }

    /**
     * 显示标签获得效果
     * @param {String} tag - 标签名称
     * @param {String} type - 标签类型 (red, black, purple, pink)
     */
    showTagEffect(tag, type) {
        // 创建标签效果元素
        const effectElement = document.createElement('div');
        effectElement.className = `${type}-tag-effect`;

        // 创建内容容器
        const contentElement = document.createElement('div');
        contentElement.className = `${type}-tag-content`;

        // 添加标签图标和文本
        contentElement.innerHTML = `
            <div style="font-size: 24px; margin-bottom: 10px;">✨</div>
            <div style="font-size: 18px; margin-bottom: 5px;">获得新标签</div>
            <div style="font-size: 24px; font-weight: bold;">${tag}</div>
        `;

        // 添加到效果元素
        effectElement.appendChild(contentElement);

        // 添加到页面
        document.body.appendChild(effectElement);

        // 动画结束后移除元素
        setTimeout(() => {
            document.body.removeChild(effectElement);
        }, 1500);
    }

    /**
     * 获取属性显示名称
     * @param {String} attr - 属性名
     * @returns {String} 显示名称
     */
    getAttributeDisplayName(attr) {
        const displayNames = {
            [ATTRIBUTES.HEALTH]: "健康",
            [ATTRIBUTES.MONEY]: "金钱",
            [ATTRIBUTES.SOCIAL]: "社交",
            [ATTRIBUTES.INTELLIGENCE]: "智力",
            [ATTRIBUTES.LUCK]: "幸运",
            [ATTRIBUTES.MYSTERY]: "神秘",
            [ATTRIBUTES.SAN]: "理智"
        };

        return displayNames[attr] || attr;
    }

    /**
     * 应用效果
     * @param {Object} effects - 效果对象
     */
    applyEffects(effects) {
        if (!effects) return;

        // 遍历所有效果
        for (const [attr, value] of Object.entries(effects)) {
            // 检查属性是否被紫色标签固定
            if (!this.isAttributeFixed(attr)) {
                // 更新属性值
                this.player.attributes[attr] = (this.player.attributes[attr] || 0) + value;

                // 限制属性范围
                if (attr === ATTRIBUTES.HEALTH) {
                    this.player.attributes[attr] = Math.max(GAME_CONFIG.MIN_HEALTH,
                        Math.min(GAME_CONFIG.MAX_HEALTH, this.player.attributes[attr]));

                    // 检查是否死亡
                    if (this.player.attributes[attr] <= 0) {
                        this.handleDeath("突发心脏病而死", "health");
                        return;
                    }
                }
            }
        }

        // 根据属性值更新标签
        this.updateAttributeTags();
    }

    /**
     * 直接设置属性值（而非增减）
     * @param {Object} setAttributes - 要设置的属性及其目标值
     */
    applySetAttributes(setAttributes) {
        if (!setAttributes) return;

        for (const [attr, value] of Object.entries(setAttributes)) {
            // 检查属性是否被紫色标签固定
            if (!this.isAttributeFixed(attr)) {
                // 直接设置属性值
                this.player.attributes[attr] = value;

                // 限制属性范围
                if (attr === ATTRIBUTES.HEALTH) {
                    this.player.attributes[attr] = Math.max(GAME_CONFIG.MIN_HEALTH,
                        Math.min(GAME_CONFIG.MAX_HEALTH, this.player.attributes[attr]));

                    // 检查是否死亡
                    if (this.player.attributes[attr] <= 0) {
                        this.handleDeath("突发心脏病而死", "health");
                        return;
                    }
                }
            }
        }

        // 根据属性值更新标签
        this.updateAttributeTags();
    }

    /**
     * 检查属性是否被紫色标签固定
     * @param {String} attr - 属性名
     * @returns {Boolean} 是否被固定
     */
    isAttributeFixed(attr) {
        // 检查所有紫色标签
        for (const tag of this.player.tags) {
            if (this.isPurpleTag(tag)) {
                const purpleTag = eventManager.allEvents.purple[tag];
                if (purpleTag && purpleTag.fixed_attributes && purpleTag.fixed_attributes[attr] !== undefined) {
                    // 属性被固定，直接设置为固定值
                    this.player.attributes[attr] = purpleTag.fixed_attributes[attr];
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * 更新属性标签
     */
    updateAttributeTags() {
        // 记录新添加的标签
        let newTags = [];

        // 遍历所有属性阈值设置
        for (const [attr, thresholds] of Object.entries(ATTRIBUTE_THRESHOLDS)) {
            // 高阈值标签
            if (thresholds.HIGH && this.player.attributes[attr] >= thresholds.HIGH.value) {
                if (!this.player.tags.includes(thresholds.HIGH.tag)) {
                    this.player.tags.push(thresholds.HIGH.tag);
                    newTags.push(thresholds.HIGH.tag);
                }
            } else if (thresholds.HIGH && this.player.tags.includes(thresholds.HIGH.tag)) {
                // 移除不再满足的高阈值标签
                this.player.tags = this.player.tags.filter(tag => tag !== thresholds.HIGH.tag);
            }

            // 低阈值标签
            if (thresholds.LOW && this.player.attributes[attr] <= thresholds.LOW.value) {
                if (!this.player.tags.includes(thresholds.LOW.tag)) {
                    this.player.tags.push(thresholds.LOW.tag);
                    newTags.push(thresholds.LOW.tag);
                }
            } else if (thresholds.LOW && this.player.tags.includes(thresholds.LOW.tag)) {
                // 移除不再满足的低阈值标签
                this.player.tags = this.player.tags.filter(tag => tag !== thresholds.LOW.tag);
            }
        }

        // 为新添加的标签显示颜色效果
        for (const tag of newTags) {
            // 检查标签类型并显示相应效果
            const tagType = this.getTagType(tag);
            if (tagType === 'golden') {
                this.showGoldenAchievementEffect(tag);
            } else {
                this.showTagEffect(tag, tagType);
            }
        }
    }

    /**
     * 进入下一年
     */
    progressToNextYear() {
        if (this.isGameOver) return;

        // 年龄增加
        this.player.age++;

        // 更新年龄段标签
        this.updateAgeGroupTag();

        // 60岁后健康下降
        if (this.player.age >= GAME_CONFIG.YEARLY_HEALTH_DECREASE_AGE) {
            this.applyEffects({ [ATTRIBUTES.HEALTH]: -GAME_CONFIG.YEARLY_HEALTH_DECREASE_VALUE });
        }

        // 如果由于健康下降导致游戏结束，不继续执行
        if (this.isGameOver) return;

        // 80岁后进行死亡检定
        if (this.player.age >= GAME_CONFIG.DEATH_CHECK_AGE) {
            if (this.rollDeathCheck()) {
                this.handleDeath("自然老死", "age");
                return;
            }
        }

        // 更新UI显示
        this.updatePlayerInfo();

        // 获取下一个事件
        const nextEvent = eventManager.getEventForPlayer(this.player);
        this.currentEvent = nextEvent;

        // 显示事件
        this.displayEvent(nextEvent);
    }

    /**
     * 更新年龄段标签
     */
    updateAgeGroupTag() {
        // 获取当前年龄段
        const currentAgeGroup = getAgeGroup(this.player.age);

        // 只有大于0岁才会有年龄段标签 (0岁只有初始标签)
        if (this.player.age <= 0) return;

        // 检查是否已经有该年龄段标签
        const hasAgeGroupTag = this.player.tags.includes(currentAgeGroup);

        // 移除所有年龄段标签
        Object.values(AGE_GROUPS).forEach(group => {
            if (this.player.tags.includes(group.name) && group.name !== currentAgeGroup) {
                this.player.tags = this.player.tags.filter(tag => tag !== group.name);
            }
        });

        // 添加当前年龄段标签
        if (!hasAgeGroupTag) {
            this.player.tags.push(currentAgeGroup);

            // 检查标签类型并显示相应效果
            const ageGroupType = this.getTagType(currentAgeGroup);
            if (ageGroupType === 'golden') {
                this.showGoldenAchievementEffect(currentAgeGroup);
            } else {
                this.showTagEffect(currentAgeGroup, ageGroupType);
            }
        }
    }

    /**
     * 进行死亡检定
     * @returns {Boolean} 是否通过检定（false表示存活）
     */
    rollDeathCheck() {
        // 只有当年龄大于等于80且健康小于30时才进行死亡检定
        // 这个方法现在只返回true/false，并不负责计算概率细节，
        // 因为题目要求"只有当...时，才会触发...死亡结果是自然老死"
        // 这意味着只要满足条件，就应该有极大概率或者必然死亡？
        // 或者仍然计算概率？
        // 根据"触发"一词，以及通常的游戏逻辑，这里应该仍然是一个检定。
        // 但为了符合描述"才会触发，因此而死的死亡结果是自然老死"，
        // 我们保留一个概率计算，但前提条件必须满足。

        if (this.player.age < 80 || this.player.attributes[ATTRIBUTES.HEALTH] >= 30) {
            return false;
        }

        // 满足条件：80岁以上 且 健康<30

        // 基础死亡概率
        let deathProbability = 0.2; // 20% 基础概率

        // 年龄越大概率越大
        deathProbability += (this.player.age - 80) * 0.05;

        // 健康越低概率越大
        deathProbability += (30 - this.player.attributes[ATTRIBUTES.HEALTH]) * 0.02;

        // 幸运值降低概率
        const luckFactor = this.player.attributes[ATTRIBUTES.LUCK] / 200;
        deathProbability -= luckFactor;

        // 随机判定
        return Math.random() < deathProbability;
    }

    /**
     * 处理玩家死亡
     * @param {String} reason - 死亡原因
     * @param {String} type - 死亡类型 (risk/health/age)
     */
    handleDeath(reason, type) {
        this.isGameOver = true;
        this.deathReason = reason;
        this.deathType = type;

        // 显示死亡遮罩
        const deathOverlay = document.getElementById('deathOverlay');
        const deathMessage = document.getElementById('deathMessage');
        deathMessage.textContent = `你${reason}`;
        deathOverlay.style.display = 'flex';

        document.getElementById('deathContinueBtn').onclick = () => {
            deathOverlay.style.display = 'none';
            this.showGameOver();
        };
    }

    /**
     * 显示游戏结束界面
     */
    showGameOver() {
        // 隐藏游戏界面，显示结束界面
        document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('gameoverScreen').style.display = 'block';

        // 更新结束界面信息
        document.getElementById('finalAge').textContent = `${this.player.age}岁`;
        document.getElementById('deathReason').textContent = `死因：${this.deathReason}`;

        // 显示最终标签
        const finalTagsContainer = document.getElementById('finalTags');
        finalTagsContainer.innerHTML = '';

        // 创建标签对象数组，按照颜色排序（黑、紫、红、粉、金、普通）
        const tagObjects = this.player.tags.map((tag, index) => {
            const type = this.getTagType(tag);

            return {
                text: tag,
                type: type,
                // 使用随机数来作为同种颜色内的排序依据
                random: Math.random()
            };
        });

        // 按照颜色排序
        tagObjects.sort((a, b) => {
            // 首先按颜色类型排序
            const typeOrder = {
                'black': 1,
                'purple': 2,
                'red': 3,
                'pink': 4,
                'golden': 5,
                'normal': 6
            };

            // 不同颜色按照顺序排
            if (typeOrder[a.type] !== typeOrder[b.type]) {
                return typeOrder[a.type] - typeOrder[b.type];
            }

            // 同种颜色随机排序
            return a.random - b.random;
        });

        // 添加标签到容器
        const fragment = document.createDocumentFragment();
        tagObjects.forEach(tagObj => {
            const tagEl = document.createElement('div');
            tagEl.className = 'tag';

            if (tagObj.type !== 'normal') {
                tagEl.classList.add(tagObj.type);
            }

            tagEl.textContent = tagObj.text;
            fragment.appendChild(tagEl);
        });
        finalTagsContainer.appendChild(fragment);

        // 显示人生历史
        this.showLifeHistory();

        // 保存黑色标签（轮回记忆）
        this.savePersistentTags();
    }

    /**
     * 显示人生历史
     */
    showLifeHistory() {
        const historyList = document.getElementById('historyList');
        historyList.innerHTML = '';

        // 为每一个历史事件创建条目
        const fragment = document.createDocumentFragment();
        this.player.history.forEach(entry => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';

            // 创建事件头部
            const eventHeader = document.createElement('div');
            eventHeader.className = 'history-event-header';

            // 添加事件标题
            const titleSpan = document.createElement('div');
            titleSpan.className = 'history-event-title';
            titleSpan.textContent = entry.eventTitle;

            // 添加年龄标记
            const ageSpan = document.createElement('div');
            ageSpan.className = 'history-age';
            ageSpan.textContent = `${entry.age}岁`;

            // 添加标题和年龄到头部
            eventHeader.appendChild(titleSpan);
            eventHeader.appendChild(ageSpan);

            // 添加事件结果内容
            const resultContent = document.createElement('div');
            resultContent.className = 'history-event-content';
            resultContent.textContent = entry.result;

            // 组装历史事件
            historyItem.appendChild(eventHeader);
            historyItem.appendChild(resultContent);

            fragment.appendChild(historyItem);
        });
        historyList.appendChild(fragment);
    }

    /**
     * 记录历史
     * @param {Object} event - 事件对象
     * @param {Number} optionIndex - 选择的选项索引
     * @param {Object} result - 结果对象
     */
    recordHistory(event, optionIndex, result) {
        this.player.history.push({
            age: this.player.age,
            eventId: event.id,
            eventTitle: event.title,
            optionIndex: optionIndex,
            result: result.result.replace(/{user}/g, this.player.name)
        });
    }

    /**
     * 保存持久标签（黑色标签）
     */
    savePersistentTags() {
        // 筛选当前人生结束时仍然存在的黑色标签
        const blackTags = this.player.tags.filter(tag => this.isBlackTag(tag));

        if (blackTags.length > 0) {
            dataManager.savePersistentTags(blackTags);
            this.persistentTags = blackTags;
        } else {
            // 如果没有黑色标签，确保persistentTags为空数组
            dataManager.savePersistentTags([]);
            this.persistentTags = [];
        }
    }

    /**
     * 加载持久标签 (已在init中通过DataManager处理，此处保留为空或移除)
     */
    loadPersistentTags() {
        this.persistentTags = dataManager.getPersistentTags();
    }

    /**
     * 保存当前人生记录
     */
    saveCurrentLife() {
        const savedLives = this.getSavedLives();

        // 创建新的保存记录
        const lifeRecord = {
            id: Date.now(), // 使用时间戳作为唯一ID
            name: this.player.name,
            gender: this.player.gender,
            age: this.player.age,
            background: this.player.background,
            deathReason: this.deathReason,
            tags: this.player.tags,
            history: this.player.history,
            savedDate: new Date().toISOString()
        };

        // 添加到保存列表
        savedLives.push(lifeRecord);

        // 保存到后端
        dataManager.saveLife(lifeRecord);

        return lifeRecord;
    }

    /**
     * 获取已保存的人生记录
     * @returns {Array} 人生记录列表
     */
    getSavedLives() {
        return dataManager.getSavedLives();
    }

    /**
     * 显示金色成就获得特效
     * @param {String} achievement - 成就名称
     */
    showGoldenAchievementEffect(achievement) {
        // 获取成就特效容器
        const effectContainer = document.getElementById('goldenAchievementEffect');

        // 创建特效元素
        const effect = document.createElement('div');
        effect.className = 'golden-achievement-notification';
        effect.innerHTML = `
            <div class="achievement-icon">🏆</div>
            <div class="achievement-text">获得成就：${achievement}</div>
        `;

        // 添加到容器
        effectContainer.appendChild(effect);

        // 添加显示类
        setTimeout(() => {
            effect.classList.add('show');
        }, 100);

        // 移除特效
        setTimeout(() => {
            effect.classList.remove('show');
            setTimeout(() => {
                effectContainer.removeChild(effect);
            }, 500);
        }, 3000);
    }


    // UI Navigation Methods
    showCharacterCreation() {
        document.getElementById('mainMenu').style.display = 'none';
        document.getElementById('characterCreation').style.display = 'block';
    }

    showReplayScreen() {
        document.getElementById('mainMenu').style.display = 'none';
        document.getElementById('replayScreen').style.display = 'block';
        document.getElementById('lifeDetailsScreen').style.display = 'none';
        this.renderSavedLives();
    }

    showAchievements() {
        document.getElementById('mainMenu').style.display = 'none';
        const achievementsScreen = document.getElementById('achievementsScreen');
        achievementsScreen.style.display = 'flex';
        if (typeof achievementManager !== 'undefined' &&
            typeof achievementManager.renderAchievements === 'function') {
            achievementManager.renderAchievements();
        }
    }

    backToMainMenu() {
        document.getElementById('mainMenu').style.display = 'block';
        document.getElementById('characterCreation').style.display = 'none';
        document.getElementById('replayScreen').style.display = 'none';
        document.getElementById('achievementsScreen').style.display = 'none';
        document.getElementById('lifeDetailsScreen').style.display = 'none';
        document.getElementById('gameoverScreen').style.display = 'none';
    }

    backToReplayScreen() {
        document.getElementById('replayScreen').style.display = 'block';
        document.getElementById('lifeDetailsScreen').style.display = 'none';
    }

    async clearPersistentTags() {
        const confirmed = await showConfirm("你确定要清除所有累积的黑色记忆吗？这将重置你的轮回优势。", "🧼");
        if (confirmed) {
            dataManager.clearPersistentTags();
            this.persistentTags = [];
            await showModal("所有黑色记忆已清除。", "✅");
        }
    }

    async confirmResetGame() {
        const confirmed = await showConfirm("确定要重置游戏吗？这将清除所有保存的数据、成就和记忆！", "🔄");
        if (confirmed) {
            dataManager.clearAllData();
            await showModal("游戏已重置！", "✅");
            location.reload();
        }
    }

    restartGame() {
        document.getElementById('gameoverScreen').style.display = 'none';
        document.getElementById('characterCreation').style.display = 'block';
    }

    async saveLife() {
        const savedLife = this.saveCurrentLife();
        await showModal("下葬成功", "🪦");
    }

    renderSavedLives() {
        const savedLives = this.getSavedLives();
        const container = document.getElementById('savedLivesList');
        container.innerHTML = '';

        if (savedLives.length === 0) {
            container.innerHTML = '<p class="no-saves">没有保存的人生记录</p>';
            return;
        }

        // 按保存时间降序排序
        savedLives.sort((a, b) => new Date(b.savedDate) - new Date(a.savedDate));

        // 为每个保存的人生创建卡片
        const fragment = document.createDocumentFragment();
        savedLives.forEach(life => {
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

            // 改进按钮点击处理
            viewButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showLifeDetails(life);
                return false;
            });

            card.appendChild(header);
            card.appendChild(date);
            card.appendChild(viewButton);

            // 让整个卡片也可点击
            card.addEventListener('click', (e) => {
                if (e.target === viewButton || viewButton.contains(e.target)) return;
                this.showLifeDetails(life);
            });

            fragment.appendChild(card);
        });
        container.appendChild(fragment);
    }

    showLifeDetails(life) {
        try {
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

                    const tagType = this.getTagType(tag);
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
        } catch (error) {
            console.error('显示人生详情时发生错误:', error);
        }
    }
}