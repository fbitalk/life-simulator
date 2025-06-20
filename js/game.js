// game.js - 修复版本

// 使用已存在的游戏常量，不重新声明
// const GAME_CONSTANTS = window.GAME_CONSTANTS;

// 游戏状态管理
class LifeSimulatorGame {
    constructor() {
        // 初始化事件管理器
        if (typeof eventManager !== 'undefined') {
            eventManager.initializeEventIndex();
        }
        
        this.gameState = 'menu'; // menu, creating, playing, gameover
        this.player = null;
        this.currentEvent = null;
        this.currentEventId = null;
        this.eventResult = null;
        this.gameHistory = [];
        this.deathReason = '';
        this.showResult = false;
        
        // 角色创建相关
        this.selectedGender = null;
        this.playerName = '';
        
        // 添加错误处理相关属性 - 移到前面，以便loadSavedLives可以使用
        this.errorHandlers = {
            showError: (message) => {
                console.error(message);
                alert(message);
            },
            logError: (error, context) => {
                console.error(`Error in ${context}:`, error);
            }
        };
        
        // 保存的人生记录
        this.savedLives = this.loadSavedLives();
        
        // 初始化UI相关功能
        this.initializeUI();
        
        // 初始化事件监听器
        this.initEventListeners();
    }
    
    // 初始化UI相关功能
    initializeUI() {
        // 创建背景动画
        this.createBackgroundAnimation();
        
        // 创建主题选择器
        this.createThemeSelector();
    }
    
    // 创建背景动画元素
    createBackgroundAnimation() {
        const bgAnimation = document.createElement('div');
        bgAnimation.classList.add('bg-animation');
        document.body.appendChild(bgAnimation);
        
        // 添加浮动形状
        for (let i = 0; i < 10; i++) {
            const shape = document.createElement('div');
            shape.classList.add('floating-shape');
            
            // 随机大小和位置
            const size = Math.random() * 200 + 50;
            shape.style.width = `${size}px`;
            shape.style.height = `${size}px`;
            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;
            
            // 随机动画延迟
            shape.style.animationDelay = `${Math.random() * 10}s`;
            
            bgAnimation.appendChild(shape);
        }
    }
    
    // 创建主题选择器
    createThemeSelector() {
        // 检查是否已经存在主题选择器
        if (document.querySelector('.theme-selector')) {
            return;
        }
        
        // 创建主题选择器容器
        const themeSelector = document.createElement('div');
        themeSelector.classList.add('theme-selector');
        
        // 创建主题切换按钮
        const themeToggle = document.createElement('div');
        themeToggle.classList.add('theme-toggle');
        themeToggle.innerHTML = '<i class="fas fa-palette"></i>';
        themeSelector.appendChild(themeToggle);
        
        // 创建主题选项容器
        const themeOptions = document.createElement('div');
        themeOptions.classList.add('theme-options');
        
        // 添加主题选项
        const themes = [
            { name: '默认', value: 'default' },
            { name: '暗黑', value: 'dark' },
            { name: '明亮', value: 'light' },
            { name: '复古', value: 'retro' },
            { name: '未来', value: 'future' }
        ];
        
        themes.forEach(theme => {
            const option = document.createElement('div');
            option.classList.add('theme-option');
            option.textContent = theme.name;
            option.setAttribute('data-theme', theme.value);
            
            option.addEventListener('click', () => {
                this.applyTheme(theme.value);
                themeOptions.classList.remove('show');
            });
            
            themeOptions.appendChild(option);
        });
        
        themeSelector.appendChild(themeOptions);
        
        // 添加切换事件
        themeToggle.addEventListener('click', () => {
            themeOptions.classList.toggle('show');
        });
        
        // 添加到页面
        document.body.appendChild(themeSelector);
        
        // 应用存储的主题
        const savedTheme = localStorage.getItem('theme') || 'default';
        this.applyTheme(savedTheme);
    }
    
    // 应用主题
    applyTheme(theme) {
        // 移除所有主题类
        document.body.classList.remove('theme-default', 'theme-dark', 'theme-light', 'theme-retro', 'theme-future');
        
        // 添加选择的主题类
        document.body.classList.add(`theme-${theme}`);
        
        // 保存主题设置
        localStorage.setItem('theme', theme);
    }
    
    // 优化的标签渲染函数
    renderTags(container, tags) {
        // 使用 uiUtils 如果存在
        if (typeof uiUtils !== 'undefined' && uiUtils.renderTags) {
            uiUtils.renderTags(container, tags);
            return;
        }
        
        // 否则使用内置实现
        const fragment = document.createDocumentFragment();
        
        tags.forEach(tag => {
            const tagElement = document.createElement('div');
            tagElement.className = 'tag';
            
            // 检查标签类型
            let displayText = `#${tag}`;
            
            // 检查标签定义
            if (typeof eventManager !== 'undefined' && eventManager.tag_definitions) {
                // 提取标签基本名称
                const tagNameOnly = tag;
                // 尝试从标签定义中获取
                const tagDef = this.getTagDefinition(tagNameOnly);
                
                // 应用特殊样式
                if (tagDef?.is_red) {
                    tagElement.classList.add('red');
                }
                
                if (tagDef?.is_blue) {
                    tagElement.classList.add('blue');
                }
            }
            
            tagElement.textContent = displayText;
            fragment.appendChild(tagElement);
        });
        
        // 清空并填充容器
        container.innerHTML = '';
        container.appendChild(fragment);
    }
    
    // 辅助函数：从各种可能的来源获取标签定义
    getTagDefinition(tagName) {
        if (!tagName) return null;
        
        // 从 eventManager 获取
        if (typeof eventManager !== 'undefined') {
            // 尝试从对象属性获取
            if (eventManager.tag_definitions && eventManager.tag_definitions[tagName]) {
                return eventManager.tag_definitions[tagName];
            }
            
            // 尝试从 Map 对象获取
            if (eventManager.tag_definitions && eventManager.tag_definitions.get) {
                return eventManager.tag_definitions.get(tagName);
            }
        }
        
        // 从全局TAG_DEFINITIONS获取（如果存在）
        if (typeof TAG_DEFINITIONS !== 'undefined') {
            // 尝试从 Map 对象获取
            if (TAG_DEFINITIONS.get) {
                return TAG_DEFINITIONS.get(tagName);
            }
            
            // 尝试从对象属性获取
            if (TAG_DEFINITIONS[tagName]) {
                return TAG_DEFINITIONS[tagName];
            }
        }
        
        return null;
    }

    // 加载保存的人生记录
    loadSavedLives() {
        try {
            // 使用 storageUtils 如果存在
            if (typeof storageUtils !== 'undefined') {
                return storageUtils.load(
                    window.GAME_CONSTANTS.STORAGE_KEYS.SAVED_LIVES, 
                    []
                );
            }
            
            // 否则使用内置实现
            const savedData = localStorage.getItem(window.GAME_CONSTANTS.STORAGE_KEYS.SAVED_LIVES);
            if (!savedData) return [];
            
            const lives = JSON.parse(savedData);
            return Array.isArray(lives) ? lives : [];
        } catch (error) {
            this.errorHandlers.logError(error, "loadSavedLives");
            return [];
        }
    }

    // 保存人生记录
    saveLifeRecord() {
        try {
            const record = {
                id: Date.now(),
                name: this.player.name,
                gender: this.player.gender,
                age: this.player.age,
                background: this.player.background.name || this.player.background,
                tags: this.player.tags,
                deathReason: this.deathReason,
                history: this.gameHistory,
                date: new Date().toLocaleDateString()
            };

            this.savedLives.push(record);
            
            // 使用 storageUtils 如果存在
            if (typeof storageUtils !== 'undefined') {
                storageUtils.save(
                    window.GAME_CONSTANTS.STORAGE_KEYS.SAVED_LIVES, 
                    this.savedLives
                );
                return record;
            }
            
            // 否则使用内置实现
            localStorage.setItem(window.GAME_CONSTANTS.STORAGE_KEYS.SAVED_LIVES, JSON.stringify(this.savedLives));
            return record;
        } catch (error) {
            this.errorHandlers.logError(error, "saveLifeRecord");
            this.errorHandlers.showError(window.GAME_CONSTANTS.ERROR_MESSAGES.SAVE_FAILED);
        }
    }

    // 开始游戏
    startGame() {
        try {
            // 检查 STARTING_EVENTS 是否存在
            if (!window.STARTING_EVENTS) {
                console.error('STARTING_EVENTS not found');
                alert('游戏数据加载失败，请刷新页面');
                return;
            }

            // 初始化玩家基础属性 - 使用默认属性
            const baseAttributes = window.DEFAULT_PLAYER_ATTRIBUTES || {
                money: 50,
                health: 70,
                intelligence: 70,
                social: 70,
                luck: 70
            };
            
            this.player = {
                name: this.playerName,
                gender: this.selectedGender,
                age: 0,
                background: { 
                    name: "初入人生", 
                    description: `${this.playerName}来到了这个世界。` 
                },
                ...baseAttributes,
                tags: [this.selectedGender === 'male' ? '男性' : '女性'],
                alive: true
            };
            
            this.gameState = 'playing';
            this.gameHistory = [`0岁: 出生`];
            
            // 从开局事件中随机选择一个作为第一个事件
            const availableStartEvents = [];
            
            if (window.STARTING_EVENTS) {
                Object.entries(window.STARTING_EVENTS).forEach(([id, event]) => {
                    // 跳过连续事件（它们应该只通过前置事件触发）
                    if (eventManager && eventManager.isContinueEvent && eventManager.isContinueEvent(id)) {
                        return;
                    }
                    
                    // 检查事件条件是否满足
                    if (eventManager && eventManager.checkEventConditions(event, id, this.player)) {
                        // 考虑事件权重
                        const weight = event.weight || 10;
                        for (let i = 0; i < weight; i++) {
                            availableStartEvents.push([id, event]);
                        }
                    }
                });
            }
            
            // 如果有可用的开局事件，随机选择一个
            if (availableStartEvents.length > 0) {
                const randomIndex = Math.floor(Math.random() * availableStartEvents.length);
                const [eventId, selectedEvent] = availableStartEvents[randomIndex];
                
                console.log(`选择开局事件: ${eventId}`);
                
                // 标记为已触发（除非是连续事件）
                if (eventManager && !eventManager.isContinueEvent(eventId)) {
                    eventManager.markEventAsTriggered(eventId);
                }
                
                // 设置为当前事件
                this.currentEvent = this.formatEvent({ id: eventId, event: selectedEvent });
            } else {
                // 如果没有可用的开局事件，使用默认事件
                this.currentEvent = {
                    title: "初入人生",
                    description: `${this.playerName}来到了这个世界。`,
                    options: [{
                        text: "开始人生",
                        result: "新的人生开始了...",
                        effects: {}
                    }]
                };
            }
            
            this.showResult = false;
            this.eventResult = null;
            
            this.updateDisplay();
            
        } catch (error) {
            console.error('Error in startGame:', error);
            alert("游戏启动失败，请刷新页面重试");
        }
    }

    // 生成事件
    generateEvent() {
        // 如果有后续事件，优先处理
        if (this.currentEvent && this.currentEvent.continue_event) {
            const continueEventId = this.currentEvent.continue_event;
            const continueEvent = eventManager.getContinueEvent(continueEventId);
            
            if (continueEvent) {
                console.log(`Processing continue event: ${continueEventId}`);
                // 连续事件不会标记为已触发，因为它们只能通过前置事件触发
                this.currentEvent = this.formatEvent({ id: continueEventId, event: continueEvent });
                this.showResult = false;
                this.eventResult = null;
                this.updateDisplay();
                return;
            }
        }
        
        // 确定年龄段
        const ageGroup = this.getAgeGroup();

        let eventFound = false;
        let availableEvents = [];
        
        if (typeof eventManager !== 'undefined') {
            // 1. 首先检查玩家是否有红色标签
            const redTags = this.getPlayerRedTags();
            
            // 先获取红色标签事件
            const redTagEvents = redTags.length > 0 ? eventManager.getRedTagEvents(this.player) : [];
            
            if (redTagEvents.length > 0) {
                // 如果有红色标签事件，优先处理
                console.log('找到红色标签事件，优先触发');
                availableEvents = redTagEvents;
            } else {
                // 无论是否有红色标签，只要没有满足条件的红色标签事件，就获取常规事件
                console.log('获取常规事件');
                const regularEvents = eventManager.getAvailableEvents(this.player, ageGroup);
                availableEvents = availableEvents.concat(regularEvents);
            }
            
            console.log(`总共找到 ${availableEvents.length} 个可用事件`);
            
            // 选择事件
            const selectedEvent = this.selectEventByPriority(availableEvents);
            
            if (selectedEvent) {
                const [eventId, event] = selectedEvent;
                
                console.log(`选择事件: ${eventId}, 优先级: ${event.priority || 0}`);
                
                // 标记为已触发（除非是连续事件）
                if (!eventManager.isContinueEvent(eventId)) {
                    eventManager.markEventAsTriggered(eventId);
                }
                
                this.currentEvent = this.formatEvent({ id: eventId, event });
                eventFound = true;
            }
        }
        
        // 如果没有找到事件，显示无事发生
        if (!eventFound) {
            this.currentEvent = this.createDefaultEvent();
        }
        
        this.showResult = false;
        this.eventResult = null;
        this.updateDisplay();
    }
    
    // 创建默认事件 - 新增辅助方法
    createDefaultEvent() {
        console.log('未找到事件，使用默认平静的一年事件');
        return {
            title: "平静的一年",
            description: `${this.player.name}度过了平静的一年，没有发生特别的事情。`,
            options: [
                {
                    text: "继续",
                    result: "时光静静流逝...",
                    effects: {}
                }
            ]
        };
    }
    
    // 获取玩家红色标签 - 新增辅助方法
    getPlayerRedTags() {
        if (!this.player || !this.player.tags) return [];
        
        return this.player.tags.filter(tag => {
            const tagDef = eventManager.tag_definitions[tag] || eventManager.tag_definitions.get?.(tag);
            return tagDef && tagDef.is_red;
        });
    }
    
    // 按优先级选择事件 - 新增辅助方法
    selectEventByPriority(availableEvents) {
        if (!availableEvents || availableEvents.length === 0) return null;
        
        // 按优先级排序
        availableEvents.sort((a, b) => {
            const priorityA = a[1].priority || 0;
            const priorityB = b[1].priority || 0;
            return priorityB - priorityA;
        });
        
        // 获取最高优先级
        const maxPriority = availableEvents[0][1].priority || 0;
        
        // 如果有设置了优先级的事件，只从最高优先级中选择
        const highPriorityEvents = availableEvents.filter(e => 
            (e[1].priority || 0) === maxPriority
        );
        
        // 从高优先级事件中随机选择一个
        return highPriorityEvents[Math.floor(Math.random() * highPriorityEvents.length)];
    }
    
    // 获取年龄段 - 新增辅助方法
    getAgeGroup() {
        if (this.player.age === 0) {
            return 'newborn';
        } else if (this.player.age >= 1 && this.player.age <= 5) {
            return 'toddler';
        } else if (this.player.age >= 6 && this.player.age <= 12) {
            return 'childhood';
        } else if (this.player.age >= 13 && this.player.age <= 18) {
            return 'teenager';
        } else if (this.player.age >= 19 && this.player.age <= 30) {
            return 'adult';
        } else if (this.player.age >= 31 && this.player.age <= 50) {
            return 'middleAge';
        } else if (this.player.age >= 51) {
            return 'elderly';
        }
        return null;
    }
    
    // 格式化事件对象 - 新增辅助方法
    formatEvent(selected) {
        return {
            id: selected.id,
            title: selected.event.title,
            description: selected.event.description.replace(/{user}/g, this.player.name),
            options: selected.event.options.map(option => ({
                ...option,
                text: option.text,
                result: option.result ? option.result.replace(/{user}/g, this.player.name) : option.result
            }))
        };
    }

    // 检查事件条件
    checkEventConditions(event, eventId) {
        // 使用 eventManager 的检查方法
        if (eventManager.checkEventConditions) {
            return eventManager.checkEventConditions(event, eventId, this.player);
        }
        
        // 备用检查逻辑
        // 检查是否已触发
        if (eventManager.isEventTriggered && eventManager.isEventTriggered(eventId)) {
            console.log(`Event ${eventId} already triggered`);
            return false;
        }
        if (!event.trigger_conditions) return true;
        const conditions = event.trigger_conditions;
        // 检查年龄范围
        if (conditions.age_range && 
            (this.player.age < conditions.age_range[0] || 
             this.player.age > conditions.age_range[1])) {
            return false;
        }
        // 检查必需标签
        if (conditions.required_tags && conditions.required_tags.length > 0) {
            const hasAllTags = conditions.required_tags.every(tag => 
                this.player.tags.includes(tag)
            );
            if (!hasAllTags) return false;
        }
        // 检查排除标签
        if (conditions.excluded_tags && conditions.excluded_tags.length > 0) {
            const hasExcludedTag = conditions.excluded_tags.some(tag => 
                this.player.tags.includes(tag)
            );
            if (hasExcludedTag) return false;
        }
        // 检查属性要求
        if (conditions.min_attributes) {
            for (const [attr, minValue] of Object.entries(conditions.min_attributes)) {
                if (this.player[attr] < minValue) return false;
            }
        }
        return true;
    }

    // 选择选项
    selectOption(optionIndex) {
        if (!this.currentEvent || !this.currentEvent.options || 
            optionIndex >= this.currentEvent.options.length) {
            return;
        }

        const option = this.currentEvent.options[optionIndex];
        
        // 检查是否有连续事件
        if (option.continue_event) {
            this.currentEvent.continue_event = option.continue_event;
        }
        
        let result = option.result || "你做出了选择";

        // 处理条件结果
        if (option.conditional_results && Array.isArray(option.conditional_results)) {
            for (const condResult of option.conditional_results) {
                if (this.checkConditions(condResult.conditions)) {
                    result = condResult.result || result;
                    if (condResult.effects) option.effects = condResult.effects;
                    if (condResult.add_tags) option.add_tags = condResult.add_tags;
                    if (condResult.remove_tags) option.remove_tags = condResult.remove_tags;
                    if (condResult.continue_event) {
                        this.currentEvent.continue_event = condResult.continue_event;
                    }
                    break;
                }
            }
        }
        
        // 应用效果
        if (option.effects) {
            this.applyEffects(option.effects);
        }
        
        // 处理标签效果
        if (option.add_tags && Array.isArray(option.add_tags)) {
            // 添加标签
            option.add_tags.forEach(tag => {
                if (!this.player.tags.includes(tag)) {
                    this.player.tags.push(tag);
                }
            });
        }
        if (option.remove_tags && Array.isArray(option.remove_tags)) {
            // 移除标签
            option.remove_tags.forEach(tag => {
                const index = this.player.tags.indexOf(tag);
                if (index !== -1) {
                    this.player.tags.splice(index, 1);
                }
            });
        }

        // 保存结果
        this.eventResult = result;
        this.showResult = true;
        this.updateDisplay();
    }
    
    // 检查条件 - 只检查标签条件，不再检查属性条件
    checkConditions(conditions) {
        if (!conditions) return true;
        
        // 默认结果的条件
        if (conditions.default === true) return true;
        
        // 检查标签
        if (conditions.tags && Array.isArray(conditions.tags) && conditions.tags.length > 0) {
            const hasAllTags = conditions.tags.every(tag => this.player.tags.includes(tag));
            if (!hasAllTags) return false;
        }
        
        // 检查"任一"条件
        if (conditions.any_of && Array.isArray(conditions.any_of) && conditions.any_of.length > 0) {
            const meetsAnyCondition = conditions.any_of.some(condSet => {
                if (condSet.tags) {
                    return condSet.tags.some(tag => this.player.tags.includes(tag));
                }
                return false;
            });
            
            if (!meetsAnyCondition) return false;
        }
        
        // 检查"非"条件
        if (conditions.not) {
            if (conditions.not.tags) {
                const hasExcludedTag = conditions.not.tags.some(tag => this.player.tags.includes(tag));
                if (hasExcludedTag) return false;
            }
        }
        
        return true;
    }

    // 更新显示
    updateDisplay() {
        if (this.gameState !== 'playing' || !this.player) return;
        
        document.getElementById('playerNameDisplay').textContent = this.playerName;
        document.getElementById('ageDisplay').textContent = `${this.player.age}岁`;
        document.getElementById('backgroundDisplay').textContent = this.player.background.name;
        
        const tagsContainer = document.getElementById('tagsContainer');
        this.renderTags(tagsContainer, this.getDisplayTags());
        
        const eventContainer = document.getElementById('eventContainer');
        eventContainer.innerHTML = '';
        
        if (this.showResult && this.eventResult) {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'result-display';
            resultDiv.innerHTML = `
                <div class="result-text">${this.eventResult || "继续"}</div>
                <button class="btn continue-btn" onclick="game.nextEventLogic()">
                    进入下一年
                </button>
            `;
            eventContainer.appendChild(resultDiv);
        } else if (this.currentEvent) {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card';
            let optionsHTML = '';
            this.currentEvent.options.forEach((option, index) => {
                optionsHTML += `
                    <button class="option-btn" onclick="game.selectOption(${index})">
                        ${option.text}
                    </button>
                `;
            });
 
            eventCard.innerHTML = `
                <div class="event-title">${this.currentEvent.title}</div>
                <div class="event-description">${this.currentEvent.description}</div>
                <div class="options-container">${optionsHTML}</div>
            `;
            eventContainer.appendChild(eventCard);
        }
    }
 
    // 获取显示标签
    getDisplayTags() {
        if (!this.player) return [];
        
        let displayTags = [...this.player.tags];
        
        // 根据属性动态生成标签
        if (this.player.health >= 90) displayTags.push("健康");
        else if (this.player.health <= 30) displayTags.push("体弱多病");
 
        if (this.player.money >= 100) displayTags.push("富有");
        else if (this.player.money <= 20) displayTags.push("贫困");
 
        if (this.player.intelligence >= 80) displayTags.push("聪明");
        if (this.player.social >= 80) displayTags.push("外向");
        if (this.player.luck >= 80) displayTags.push("幸运");
        
        return [...new Set(displayTags)];
    }
 
    // 游戏结束
    endGame(reason = null) {
        if (this.gameState === 'gameover') return;
        
        this.gameState = 'gameover';
        
        if (reason) {
            this.deathReason = reason;
        }
        
        // 解锁年龄相关成就
        if (typeof achievementManager !== 'undefined') {
            achievementManager.checkAgeAchievements(this.player.age);
            
            // 检查特殊成就
            achievementManager.checkSpecialAchievements(this.player.tags, this.deathReason);
            
            // 更新UI显示
            if (typeof achievementManager.renderAchievements === 'function') {
                achievementManager.renderAchievements();
            }
        }
        
        // 更新游戏结束UI
        this.updateGameoverUI();
        
        // 保存游戏数据
        this.saveGameData();
    }
    
    // 更新游戏结束UI
    updateGameoverUI() {
        // 基本信息
        document.getElementById('finalAge').innerText = this.player.age;
        document.getElementById('deathReason').innerText = this.deathReason;
        
        // 标签
        const finalTagsContainer = document.getElementById('finalTags');
        finalTagsContainer.innerHTML = '';
        
        this.player.tags.forEach(tag => {
            const tagElement = document.createElement('span');
            tagElement.classList.add('tag');
            tagElement.innerText = tag;
            
            // 添加特殊标签样式
            if (tag.includes('金')) {
                tagElement.classList.add('golden');
            } else if (tag.includes('红')) {
                tagElement.classList.add('red');
            }
            
            finalTagsContainer.appendChild(tagElement);
        });
        
        // 历史记录
        const historyContainer = document.getElementById('historyList');
        historyContainer.innerHTML = '';
        
        this.gameHistory.forEach(event => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('history-item');
            historyItem.innerText = event;
            historyContainer.appendChild(historyItem);
        });
    }

    // 重新开始
    restart() {
        this.gameState = 'menu';
        this.player = null;
        this.currentEvent = null;
        this.currentEventId = null;
        this.eventResult = null;
        this.gameHistory = [];
        this.deathReason = '';
        this.showResult = false;
        this.selectedGender = null;
        this.playerName = '';
        this.nextEventId = null;
    }
 
    // 显示金色成就
    showGoldenAchievement(achievement) {
        const effectContainer = document.getElementById('goldenAchievementEffect');
        if (!effectContainer) return;
 
        const effectDiv = document.createElement('div');
        effectDiv.className = 'golden-achievement-effect';
        effectDiv.innerHTML = `
            <div class="golden-achievement-content">
                <div class="golden-achievement-title">🎉 获得成就！</div>
                <div class="golden-achievement-desc">${achievement.name}</div>
            </div>
        `;
        
        effectContainer.appendChild(effectDiv);
        
        setTimeout(() => {
            effectDiv.remove();
        }, 1500);
    }

    // 下一个事件逻辑
    nextEventLogic() {
        // 如果已经显示结果，点击后进入下一个事件
        if (this.showResult) {
            this.showResult = false;
            this.processNextEvent();
            return;
        }
        
        // 没有显示结果时，选择第一个选项
        if (this.currentEvent && this.currentEvent.options && this.currentEvent.options.length > 0) {
            this.selectOption(0);
        }
    }
    
    // 处理下一个事件
    processNextEvent() {
        // 如果有连续事件，直接处理连续事件而不增加年龄
        if (this.currentEvent && this.currentEvent.continue_event) {
            console.log('处理连续事件，不增加年龄');
            this.generateEvent();
            return;
        }
        
        // 如果没有连续事件，则正常进入下一年
        this.player.age++;
        console.log(`进入下一年，当前年龄: ${this.player.age}`);
        
        // 死亡检查 - 简单按年龄概率
        if (this.player.age >= 60) {
            // 60岁以上，每年有逐渐增加的死亡概率
            const deathChance = (this.player.age - 60) * 0.02;
            if (Math.random() < deathChance) {
                this.endGame(`${this.player.name}安详地离开了人世，享年${this.player.age}岁。`);
                return;
            }
        }
        
        // 特定年龄段的标签更新
        this.updateAgeTags();
        
        // 生成新的事件
        this.generateEvent();
    }

    // 更新年龄相关标签
    updateAgeTags() {
        // 获取当前年龄段
        const currentAgeGroup = this.getAgeGroup();
        
        // 所有可能的年龄段
        const allAgeGroups = ['newborn', 'toddler', 'childhood', 'teenager', 'adult', 'middleAge', 'elderly'];
        
        // 移除所有其他年龄段标签
        allAgeGroups.forEach(ageGroup => {
            if (ageGroup !== currentAgeGroup) {
                const index = this.player.tags.indexOf(ageGroup);
                if (index !== -1) {
                    this.player.tags.splice(index, 1);
                }
            }
        });
        
        // 添加当前年龄段标签
        if (!this.player.tags.includes(currentAgeGroup)) {
            this.player.tags.push(currentAgeGroup);
        }
        
        // 特殊年龄阶段处理
        if (this.player.age === 18) {
            // 成年
            if (!this.player.tags.includes('adult_milestone')) {
                this.player.tags.push('adult_milestone');
            }
        } else if (this.player.age === 60) {
            // 退休年龄
            if (!this.player.tags.includes('retirement_age')) {
                this.player.tags.push('retirement_age');
            }
        }
    }

    // 初始化事件监听器
    initEventListeners() {
        // 性别选择卡片的点击事件
        document.querySelectorAll('.gender-card').forEach(card => {
            card.addEventListener('click', () => {
                const gender = card.getAttribute('data-gender');
                this.selectedGender = gender;
                
                // 更新UI
                document.querySelectorAll('.gender-card').forEach(c => {
                    c.classList.remove('selected');
                });
                card.classList.add('selected');
                
                // 更新开始按钮状态
                updateStartButton();
            });
        });
        
        // 名字输入框的输入事件
        const nameInput = document.getElementById('playerName');
        if (nameInput) {
            nameInput.addEventListener('input', () => {
                this.playerName = nameInput.value.trim();
                updateStartButton();
            });
        }
    }

    // 应用效果
    applyEffects(effects) {
        if (!effects || !this.player) return;
        
        // 处理属性变化
        for (const [attr, value] of Object.entries(effects)) {
            if (attr === 'add_tags' && Array.isArray(value)) {
                // 添加标签
                value.forEach(tag => {
                    if (!this.player.tags.includes(tag)) {
                        this.player.tags.push(tag);
                    }
                });
            } else if (attr === 'remove_tags' && Array.isArray(value)) {
                // 移除标签
                value.forEach(tag => {
                    const index = this.player.tags.indexOf(tag);
                    if (index !== -1) {
                        this.player.tags.splice(index, 1);
                    }
                });
            } else if (attr === 'death') {
                // 处理死亡
                this.player.alive = false;
                const reason = typeof value === 'string' ? value : '未知原因';
                this.endGame(reason);
            } else if (attr === 'next_event') {
                // 处理下一个事件 - 这个已经在selectOption中处理了
                continue;
            } else if (typeof this.player[attr] === 'number' && typeof value === 'number') {
                // 处理数值属性
                this.player[attr] += value;
            } else {
                // 直接赋值
                this.player[attr] = value;
            }
        }
        
        // 记录事件到历史
        if (this.currentEvent && this.currentEvent.title) {
            this.gameHistory.push(`${this.player.age}岁: ${this.currentEvent.title}`);
        }
    }

    // 保存游戏数据
    saveGameData() {
        // 保存游戏记录
        this.saveLifeRecord();
        
        // 这里可以添加其他需要保存的游戏数据
    }
}
 
// === 全局实例和函数 ===
 
// 使用window.game而不是const game确保全局可用
window.game = new LifeSimulatorGame();
 
// 显示屏幕
function showScreen(screenId) {
   // 隐藏所有界面
   document.getElementById('mainMenu').style.display = 'none';
   document.getElementById('characterCreation').style.display = 'none';
   document.getElementById('achievementsScreen').style.display = 'none';
   document.getElementById('replayScreen').style.display = 'none';
   document.getElementById('startScreen').style.display = 'none';
   document.getElementById('gameScreen').style.display = 'none';
   document.getElementById('gameoverScreen').style.display = 'none';
   
   // 显示目标界面
   const targetScreen = document.getElementById(screenId);
   if (targetScreen) {
       targetScreen.style.display = 'block';
   } else {
       console.error(`Screen with ID "${screenId}" not found`);
   }
}
 
// 将函数暴露到全局作用域
window.showCharacterCreation = function() {
   // 重置状态
   game.selectedGender = null;
   game.playerName = '';
   
   // 清空输入框
   const nameInput = document.getElementById('playerName');
   if (nameInput) {
       nameInput.value = '';
   }
   
   // 清除性别选择
   document.querySelectorAll('.gender-card').forEach(card => {
       card.classList.remove('selected');
   });
   
   // 禁用开始按钮
   const startBtn = document.getElementById('startLifeBtn');
   if (startBtn) {
       startBtn.disabled = true;
   }
   
   // 显示界面
   showScreen('characterCreation');
};
 
// 显示成就
function showAchievements() {
   if (typeof achievementManager !== 'undefined') {
       achievementManager.renderAchievements();
   }
   showScreen('achievementsScreen');
}
 
// 显示回放屏幕
function showReplayScreen() {
   renderSavedLives();
   showScreen('replayScreen');
}
 
// 返回主菜单
function backToMainMenu() {
   showScreen('mainMenu');
}
 
// 更新开始按钮
function updateStartButton() {
   const nameInput = document.getElementById('playerName');
   const startBtn = document.getElementById('startLifeBtn');
   
   if (!nameInput || !startBtn) {
       console.error('Required elements not found');
       return;
   }
   
   game.playerName = nameInput.value.trim();
   
   // 只有当性别和名字都有值时才启用按钮
   startBtn.disabled = !(game.selectedGender && game.playerName);
}
 
// 开始新人生
function startNewLife() {
   if (!game.selectedGender || !game.playerName) return;
   game.startGame();
   showScreen('gameScreen');
}
 
// 重新开始游戏
function restartGame() {
   game.restart();
   showScreen('mainMenu');
}
 
// 保存人生
function saveLife() {
   const lifeRecord = game.saveLifeRecord();
   if (lifeRecord) {
       alert(`${game.player.name} (${game.player.age}岁) 的人生已保存！`);
   }
   restartGame();
}
 
// 确认重置游戏
function confirmResetGame() {
   if (confirm("您确定要重置所有游戏数据吗？\n这将清除所有已解锁的成就和保存的人生记录。\n此操作不可撤销！")) {
       resetGameData();
   }
}
 
// 重置游戏数据
function resetGameData() {
   localStorage.removeItem('unlockedAchievements');
   if (typeof achievementManager !== 'undefined') {
       achievementManager.init();
   }

   localStorage.removeItem('savedLives');
   game.savedLives = [];

   alert("游戏数据已重置。\n所有成就和保存的人生记录已被清除。");

   if (document.getElementById('achievementsScreen').style.display === 'block') {
       showAchievements();
   }
   if (document.getElementById('replayScreen').style.display === 'block') {
       showReplayScreen();
   }
}
 
// 渲染保存的人生
function renderSavedLives() {
   const container = document.getElementById('savedLivesList');
   container.innerHTML = '';
   
   if (game.savedLives.length === 0) {
       container.innerHTML = '<p style="text-align: center; color: #999; margin-top: 20px;">还没有保存的人生记录</p>';
       return;
   }
   
   game.savedLives.forEach(life => {
       const lifeDiv = document.createElement('div');
       lifeDiv.className = 'saved-life-item';
       lifeDiv.onclick = () => showLifeDetailsModal(life);
       
       const displayTags = life.tags || [];
       const tagsHTML = displayTags.slice(0, 5).map(tag => {
           return `<div class="tag">#${tag}</div>`;
       }).join('');
       
       lifeDiv.innerHTML = `
           <div class="saved-life-info">
               <div class="saved-life-name">${life.gender === 'male' ? '👦' : '👧'} ${life.name}</div>
               <div class="saved-life-age">${life.age}岁 · ${life.date}</div>
           </div>
           <div class="saved-life-tags">
               ${tagsHTML}
               ${displayTags.length > 5 ? `<div class="tag">+${displayTags.length - 5}</div>` : ''}
           </div>
       `;
       container.appendChild(lifeDiv);
   });
}
 
// 显示人生详情模态框
function showLifeDetailsModal(lifeRecord) {
   document.getElementById('replayModalTitle').textContent = `人生回顾 - ${lifeRecord.name}`;
   document.getElementById('replayModalName').textContent = lifeRecord.name;
   document.getElementById('replayModalGender').textContent = lifeRecord.gender === 'male' ? '男性' : '女性';
   document.getElementById('replayModalAge').textContent = `${lifeRecord.age}岁`;
   document.getElementById('replayModalBackground').textContent = lifeRecord.background;
   document.getElementById('replayModalDeathReason').textContent = lifeRecord.deathReason || '未记录';

   const tagsContainer = document.getElementById('replayModalTags');
   tagsContainer.innerHTML = '';
   const displayTags = lifeRecord.tags || [];
   if (displayTags.length > 0) {
       displayTags.forEach(tag => {
           const tagElement = document.createElement('div');
           tagElement.className = 'tag';
           tagElement.textContent = `#${tag}`;
           tagsContainer.appendChild(tagElement);
       });
   } else {
       tagsContainer.textContent = '无特殊标签';
   }

   const historyList = document.getElementById('replayModalHistoryList');
   historyList.innerHTML = '';
   const history = lifeRecord.history || [];
   if (history.length > 0) {
       history.forEach(item => {
           const historyItem = document.createElement('div');
           historyItem.className = 'history-item';
           historyItem.textContent = item;
           historyList.appendChild(historyItem);
       });
   } else {
       historyList.innerHTML = '<p style="text-align:center; color:#888;">无事件记录。</p>';
   }
   
   document.getElementById('replayDetailsModal').style.display = 'flex';
}
 
// 隐藏人生详情模态框
function hideLifeDetailsModal() {
   document.getElementById('replayDetailsModal').style.display = 'none';
}
 
// === 初始化和事件监听 ===
 
window.addEventListener('DOMContentLoaded', () => {
   // 初始化时隐藏所有界面
   document.getElementById('characterCreation').style.display = 'none';
   document.getElementById('achievementsScreen').style.display = 'none';
   document.getElementById('replayScreen').style.display = 'none';
   document.getElementById('startScreen').style.display = 'none';
   document.getElementById('gameScreen').style.display = 'none';
   document.getElementById('gameoverScreen').style.display = 'none';
   
   // 只显示主菜单
   document.getElementById('mainMenu').style.display = 'block';
   
   // 绑定名字输入事件
   const playerNameInput = document.getElementById('playerName');
   if (playerNameInput) {
       playerNameInput.addEventListener('input', updateStartButton);
   }
   
   // 初始化成就系统
   if (typeof achievementManager !== 'undefined') {
       achievementManager.init();
   }
   
   // 不要在这里调用 updateStartButton()，因为此时还没有选择性别和输入名字
});
 
// 点击模态框外部关闭
window.addEventListener('click', (event) => {
   const modal = document.getElementById('replayDetailsModal');
   if (event.target === modal) {
       hideLifeDetailsModal();
   }
});