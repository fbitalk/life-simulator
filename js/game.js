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
                
                // 播放错误音效
                if (typeof audioManager !== 'undefined') {
                    audioManager.playError();
                }
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
        
        // 创建音效控制
        this.createSoundControl();
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
                
                // 播放点击音效
                if (typeof audioManager !== 'undefined') {
                    audioManager.playClick();
                }
            });
            
            themeOptions.appendChild(option);
        });
        
        themeSelector.appendChild(themeOptions);
        
        // 添加切换事件
        themeToggle.addEventListener('click', () => {
            themeOptions.classList.toggle('show');
            
            // 播放点击音效
            if (typeof audioManager !== 'undefined') {
                audioManager.playClick();
            }
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
    
    // 创建音效控制
    createSoundControl() {
        // 检查是否已经存在音效控制
        if (document.querySelector('.sound-control')) {
            return;
        }
        
        // 创建音效控制容器
        const soundControl = document.createElement('div');
        soundControl.classList.add('sound-control');
        
        // 获取当前音效状态
        const soundEnabled = typeof audioManager !== 'undefined' ? audioManager.enabled : true;
        
        // 创建音效切换按钮
        const soundToggle = document.createElement('div');
        soundToggle.classList.add('sound-toggle');
        soundToggle.innerHTML = soundEnabled ? 
            '<i class="fas fa-volume-up"></i>' : 
            '<i class="fas fa-volume-mute"></i>';
        
        // 添加切换事件
        soundToggle.addEventListener('click', () => {
            if (typeof audioManager !== 'undefined') {
                const newState = !audioManager.enabled;
                audioManager.setEnabled(newState);
                
                soundToggle.innerHTML = newState ? 
                    '<i class="fas fa-volume-up"></i>' : 
                    '<i class="fas fa-volume-mute"></i>';
                
                // 如果开启了音效，播放点击音效
                if (newState) {
                    audioManager.playClick();
                }
            }
        });
        
        soundControl.appendChild(soundToggle);
        
        // 添加到页面
        document.body.appendChild(soundControl);
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
            
            // 检查是否是动态标签
            if (typeof eventManager !== 'undefined' && eventManager.tag_definitions) {
                // 提取标签基本名称（不含数值）
                const tagNameOnly = tag.split(':')[0];
                // 尝试从多种格式的标签定义中获取
                const tagDef = this.getTagDefinition(tagNameOnly);
                
                // 如果是动态标签，格式化显示
                if (tagDef?.is_dynamic) {
                    const parts = tag.split(':');
                    if (parts.length > 1) {
                        displayText = `#${parts[0]}:${parts[1]}`;
                    }
                }
                
                // 应用特殊样式
                if (tagDef?.is_red) {
                    tagElement.classList.add('red');
                }
            }
            
            // 检查成就系统
            if (typeof achievementManager !== 'undefined') {
                const achievement = achievementManager.getAchievementByTag(tag);
                if (achievement?.golden) tagElement.classList.add('golden');
            }
            
            tagElement.textContent = displayText;
            fragment.appendChild(tagElement);
        });
        
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

            // 从 STARTING_EVENTS 中随机选择一个开局事件
            const startEventKeys = Object.keys(window.STARTING_EVENTS);
            
            // 根据权重选择事件
            const weightedEvents = [];
            startEventKeys.forEach(key => {
                const event = window.STARTING_EVENTS[key];
                const weight = event.weight || 10;
                for (let i = 0; i < weight; i++) {
                    weightedEvents.push(key);
                }
            });
            
            const selectedEventKey = weightedEvents[Math.floor(Math.random() * weightedEvents.length)];
            const startEvent = window.STARTING_EVENTS[selectedEventKey];
            
            // 初始化玩家基础属性
            const baseAttributes = startEvent.effects || {
                money: 50,
                health: 80,
                intelligence: 70,
                social: 70,
                luck: 70
            };
            
            this.player = {
                name: this.playerName,
                gender: this.selectedGender,
                age: 0,
                background: { 
                    name: startEvent.title, 
                    description: startEvent.description.replace(/{user}/g, this.playerName) 
                },
                ...baseAttributes,
                tags: [this.selectedGender === 'male' ? '男性' : '女性'],
                alive: true
            };
            
            // 添加开局标签
            if (startEvent.add_tags) {
                this.player.tags.push(...startEvent.add_tags);
            }
            
            this.gameState = 'playing';
            this.gameHistory = [`0岁: ${startEvent.title}`];
            
            // 设置当前事件
            if (startEvent.options && startEvent.options.length > 0) {
                this.currentEvent = {
                    title: startEvent.title,
                    description: startEvent.description.replace(/{user}/g, this.playerName),
                    options: startEvent.options.map(option => ({
                        ...option,
                        text: option.text,
                        result: option.result ? option.result.replace(/{user}/g, this.playerName) : option.result
                    }))
                };
            } else {
                // 如果没有选项，使用默认选项
                this.currentEvent = {
                    title: startEvent.title,
                    description: startEvent.description.replace(/{user}/g, this.playerName),
                    options: [{
                        text: "开始人生",
                        result: "新的人生开始了...",
                        effects: {}
                    }]
                };
            }
            
            // 检查是否有后续事件
            if (startEvent.continue_event) {
                this.currentEventId = selectedEventKey;
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
        console.log(`Generating event for age ${this.player.age}, tags: ${this.player.tags.join(', ')}`);
        
        // 获取当前年龄段
        let ageGroup = null;
        if (this.player.age >= 1 && this.player.age <= 5) {
            ageGroup = 'toddler';
        } else if (this.player.age >= 6 && this.player.age <= 12) {
            ageGroup = 'childhood';
        } else if (this.player.age >= 13 && this.player.age <= 18) {
            ageGroup = 'teenager';
        } else if (this.player.age >= 19 && this.player.age <= 30) {
            ageGroup = 'adult';
        } else if (this.player.age >= 31 && this.player.age <= 50) {
            ageGroup = 'middleAge';
        } else if (this.player.age >= 51) {
            ageGroup = 'elderly';
        }

        let eventFound = false;
        
        if (typeof eventManager !== 'undefined') {
            // 使用Set优化标签查询
            const playerTagsSet = new Set(this.player.tags);
            const availableEvents = [];
            const processedEvents = new Set(); // 避免重复处理同一事件
            
            // 1. 先检查红色标签 - 如果有红色标签，只处理其独占事件
            const redTags = this.player.tags.filter(tag => {
                const tagDef = eventManager.tag_definitions && 
                               (eventManager.tag_definitions[tag] || eventManager.tag_definitions.get?.(tag));
                return tagDef && tagDef.is_red;
            });
            
            if (redTags.length > 0) {
                console.log('Found red tags, only processing exclusive events');
                // 对于每个红色标签，只处理其独占事件
                for (const redTag of redTags) {
                    const tagDef = eventManager.tag_definitions && 
                                   (eventManager.tag_definitions[redTag] || eventManager.tag_definitions.get?.(redTag));
                    
                    if (tagDef && tagDef.exclusive_events) {
                        for (const eventId of tagDef.exclusive_events) {
                            if (processedEvents.has(eventId)) continue;
                            
                            const event = eventManager.getEvent ? eventManager.getEvent(eventId) : null;
                            if (event && this.checkEventConditions(event, eventId)) {
                                availableEvents.push({ id: eventId, event, priority: 10 }); // 最高优先级
                                processedEvents.add(eventId);
                            }
                        }
                    }
                }
                
                // 如果找到了红色标签的独占事件，直接从中选择，不再处理其他事件
                if (availableEvents.length > 0) {
                    // 直接选择
                    const selected = availableEvents[Math.floor(Math.random() * availableEvents.length)];
                    if (eventManager.markEventAsTriggered) {
                        eventManager.markEventAsTriggered(selected.id);
                    }
                    this.currentEvent = this.formatEvent(selected);
                    eventFound = true;
                    this.showResult = false;
                    this.eventResult = null;
                    this.updateDisplay();
                    return;
                }
            }
            
            // 2. 检查普通标签的独占和优先事件
            console.log('Checking tag events...');
            // 先收集所有独占事件和优先事件
            const exclusiveEvents = [];
            const priorityEvents = [];
            
            this.player.tags.forEach(tag => {
                const tagDef = eventManager.tag_definitions && 
                               (eventManager.tag_definitions[tag] || eventManager.tag_definitions.get?.(tag));
                
                if (tagDef) {
                    // 收集独占事件
                    if (tagDef.exclusive_events) {
                        tagDef.exclusive_events.forEach(eventId => {
                            if (!processedEvents.has(eventId)) {
                                exclusiveEvents.push(eventId);
                                processedEvents.add(eventId);
                            }
                        });
                    }
                    
                    // 收集优先事件
                    if (tagDef.priority_events) {
                        tagDef.priority_events.forEach(eventId => {
                            if (!processedEvents.has(eventId)) {
                                priorityEvents.push(eventId);
                                processedEvents.add(eventId);
                            }
                        });
                    }
                }
                
                // 检查标签事件
                const tagEvents = eventManager.getTagEvents ? eventManager.getTagEvents(tag) : {};
                Object.entries(tagEvents).forEach(([eventId, event]) => {
                    if (processedEvents.has(eventId)) return;
                    
                    if (this.checkEventConditions(event, eventId)) {
                        availableEvents.push({ id: eventId, event, priority: 2 });
                        processedEvents.add(eventId);
                    }
                });
            });
            
            // 处理收集到的独占事件
            for (const eventId of exclusiveEvents) {
                const event = eventManager.getEvent ? eventManager.getEvent(eventId) : null;
                if (event && this.checkEventConditions(event, eventId)) {
                    availableEvents.push({ id: eventId, event, priority: 3 });
                }
            }
            
            // 处理收集到的优先事件
            for (const eventId of priorityEvents) {
                const event = eventManager.getEvent ? eventManager.getEvent(eventId) : null;
                if (event && this.checkEventConditions(event, eventId)) {
                    availableEvents.push({ id: eventId, event, priority: 2 });
                }
            }
            
            // 3. 检查年龄段事件
            console.log(`Checking age group events for ${ageGroup}...`);
            if (ageGroup) {
                const ageGroupEvents = eventManager.ageEvents && eventManager.ageEvents[ageGroup] || {};
                Object.entries(ageGroupEvents).forEach(([eventId, event]) => {
                    if (processedEvents.has(eventId)) return;
                    
                    if (this.checkEventConditions(event, eventId)) {
                        availableEvents.push({ id: eventId, event, priority: 1 });
                        processedEvents.add(eventId);
                    }
                });
            }
            
            console.log(`Total available events: ${availableEvents.length}`);
            
            // 4. 选择事件
            if (availableEvents.length > 0) {
                // 按优先级排序
                availableEvents.sort((a, b) => b.priority - a.priority);
                // 如果有高优先级事件，只从高优先级中选择
                const maxPriority = availableEvents[0].priority;
                const highPriorityEvents = availableEvents.filter(e => e.priority === maxPriority);
                const selected = highPriorityEvents[Math.floor(Math.random() * highPriorityEvents.length)];
                
                console.log(`Selected event: ${selected.id}`);
                
                if (eventManager.markEventAsTriggered) {
                    eventManager.markEventAsTriggered(selected.id);
                }
                this.currentEvent = this.formatEvent(selected);
                eventFound = true;
            }
        }
        
        // 如果没有找到事件，显示无事发生
        if (!eventFound) {
            console.log('No event found, using default peaceful year event');
            this.currentEvent = {
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
        
        this.showResult = false;
        this.eventResult = null;
        this.updateDisplay();
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
        if (!this.currentEvent || this.showResult) return;
        
        // 播放点击音效
        if (typeof audioManager !== 'undefined') {
            audioManager.playClick();
        }
        
        // 添加选择效果
        const optionButtons = document.querySelectorAll('.option-btn');
        if (optionButtons[optionIndex]) {
            optionButtons[optionIndex].classList.add('option-selected');
        }
        
        // 处理选项结果
        const result = this.currentEvent.options[optionIndex];
        this.eventResult = result;
        this.showResult = true;
        
        // 更新结果显示
        document.getElementById('resultText').innerText = result.result;
        document.getElementById('resultDisplay').style.display = 'block';
        
        // 添加结果显示动画
        if (typeof uiEffects !== 'undefined') {
            const resultDisplay = document.getElementById('resultDisplay');
            uiEffects.fadeIn(resultDisplay);
        }
        
        // 处理结果效果
        this.processEventResult(result);
        
        // 检查成就
        this.checkAchievements();
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
                <div class="result-text">${this.eventResult.result}</div>
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
 
        if (this.player.intelligence >= 90) displayTags.push("聪明");
        if (this.player.social >= 90) displayTags.push("社交达人");
        if (this.player.luck >= 90) displayTags.push("幸运");
        
        return [...new Set(displayTags)];
    }
 
    // 游戏结束
    endGame(reason = null) {
        // 设置死亡原因
        if (reason) {
            this.deathReason = reason;
        } else if (!this.deathReason) {
            this.deathReason = '寿终正寝';
        }
        
        // 保存游戏记录
        this.saveGameRecord();
        
        // 获取当前屏幕和游戏结束屏幕
        const currentScreen = this.getCurrentScreenElement();
        const gameoverScreen = document.getElementById('gameoverScreen');
        
        // 使用UI效果管理器进行页面过渡
        if (typeof uiEffects !== 'undefined') {
            uiEffects.pageTransition(currentScreen, gameoverScreen, () => {
                this.gameState = 'gameover';
                this.updateGameoverUI();
            });
        } else {
            currentScreen.style.display = 'none';
            gameoverScreen.style.display = 'block';
            this.gameState = 'gameover';
            this.updateGameoverUI();
        }
        
        // 播放游戏结束音效
        if (typeof audioManager !== 'undefined') {
            audioManager.play('gameover');
        }
    }
    
    // 更新游戏结束UI
    updateGameoverUI() {
        // 基本信息
        document.getElementById('finalName').innerText = this.player.name;
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
        const historyContainer = document.getElementById('historyContainer');
        historyContainer.innerHTML = '';
        
        this.gameHistory.forEach(event => {
            const historyItem = document.createElement('div');
            historyItem.classList.add('history-item');
            historyItem.innerText = event;
            historyContainer.appendChild(historyItem);
        });
        
        // 添加游戏结束动画效果
        if (typeof uiEffects !== 'undefined') {
            // 创建结束动画
            const animationContainer = document.createElement('div');
            animationContainer.classList.add('gameover-animation');
            document.body.appendChild(animationContainer);
            
            // 动画结束后移除
            setTimeout(() => {
                animationContainer.remove();
            }, 3000);
            
            // 为最终年龄添加数字递增动画
            const finalAgeElement = document.getElementById('finalAge');
            const targetAge = this.player.age;
            let currentDisplayAge = 0;
            
            const ageInterval = setInterval(() => {
                currentDisplayAge++;
                finalAgeElement.innerText = currentDisplayAge;
                
                if (currentDisplayAge >= targetAge) {
                    clearInterval(ageInterval);
                }
            }, 30);
            
            // 为结束屏幕元素添加渐入动画
            const elementsToAnimate = [
                document.getElementById('finalName').parentElement,
                document.getElementById('finalAge').parentElement,
                document.getElementById('deathReason').parentElement,
                finalTagsContainer,
                historyContainer
            ];
            
            elementsToAnimate.forEach((element, index) => {
                if (element) {
                    setTimeout(() => {
                        element.style.opacity = '0';
                        element.style.transform = 'translateY(20px)';
                        element.style.transition = 'all 0.5s ease';
                        
                        setTimeout(() => {
                            element.style.opacity = '1';
                            element.style.transform = 'translateY(0)';
                        }, 50);
                    }, index * 300);
                }
            });
        }
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
        // 播放点击音效
        if (typeof audioManager !== 'undefined') {
            audioManager.playClick();
        }
        
        // 添加淡出动画
        if (typeof uiEffects !== 'undefined') {
            const resultDisplay = document.querySelector('.result-display');
            
            uiEffects.fadeOut(resultDisplay, () => {
                this.processNextEvent();
            });
        } else {
            this.processNextEvent();
        }
    }
    
    // 处理下一个事件
    processNextEvent() {
        this.showResult = false;
        
        // 年龄增长
        this.player.age++;
        
        // 检查是否需要添加小学生标签（4-5岁时）
        if (this.player.age === 4 || this.player.age === 5) {
            if (!this.player.tags.includes('小学生')) {
                console.log('Checking for school start event...');
                // 检查是否有开始上学的事件
                const schoolStartEvent = eventManager.getEvent ? eventManager.getEvent('start_school') : null;
                if (schoolStartEvent && this.checkEventConditions(schoolStartEvent, 'start_school')) {
                    console.log('Triggering school start event');
                    this.currentEvent = {
                        id: 'start_school',
                        title: schoolStartEvent.title,
                        description: schoolStartEvent.description.replace(/{user}/g, this.player.name),
                        options: schoolStartEvent.options.map(option => ({
                            ...option,
                            text: option.text,
                            result: option.result ? option.result.replace(/{user}/g, this.player.name) : option.result
                        }))
                    };
                    
                    // 播放过渡音效
                    if (typeof audioManager !== 'undefined') {
                        audioManager.playTransition();
                    }
                    
                    this.updateDisplay();
                    return;
                }
            }
        }
        
        // 检查成就解锁 - 年龄相关
        if (typeof achievementManager !== 'undefined') {
            // 检查百岁成就
            if (this.player.age >= 100) {
                achievementManager.unlockAchievement('centenarian');
            }
            // 检查青少年成就
            if (this.player.age === 13) {
                achievementManager.unlockAchievement('teenager');
            }
            // 检查成年成就
            if (this.player.age === 18) {
                achievementManager.unlockAchievement('adult');
            }
        }
        
        // 检查是否有继续事件
        if (this.nextEventId) {
            const nextEvent = eventManager.getEvent ? eventManager.getEvent(this.nextEventId) : null;
            if (nextEvent) {
                console.log(`Continuing to event: ${this.nextEventId}`);
                if (eventManager.markEventAsTriggered) {
                    eventManager.markEventAsTriggered(this.nextEventId);
                }
                this.currentEvent = {
                    id: this.nextEventId,
                    title: nextEvent.title,
                    description: nextEvent.description.replace(/{user}/g, this.player.name),
                    options: nextEvent.options.map(option => ({
                        ...option,
                        text: option.text,
                        result: option.result ? option.result.replace(/{user}/g, this.player.name) : option.result
                    }))
                };
                this.nextEventId = null;
                
                // 播放过渡音效
                if (typeof audioManager !== 'undefined') {
                    audioManager.playTransition();
                }
                
                this.updateDisplay();
                return;
            } else {
                console.error(`Next event not found: ${this.nextEventId}`);
                this.nextEventId = null;
            }
        }
        
        // 常规生成随机事件
        this.generateEvent();
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