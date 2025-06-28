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
        
        // 初始化游戏
        this.init();
    }
    
    /**
     * 初始化游戏
     */
    init() {
        // 加载保存的黑色标签
        this.loadPersistentTags();
        
        // 绑定UI事件
        this.bindEvents();
        
        console.log("游戏已初始化");
    }
    
    /**
     * 绑定UI事件
     */
    bindEvents() {
        // 监听性别选择
        const genderCards = document.querySelectorAll('.gender-card');
        genderCards.forEach(card => {
            card.addEventListener('click', () => {
                genderCards.forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.player.gender = card.dataset.gender;
                this.validateStartButton();
            });
        });
        
        // 监听名字输入
        const nameInput = document.getElementById('playerName');
        if (nameInput) {
            nameInput.addEventListener('input', () => {
                this.player.name = nameInput.value.trim();
                this.validateStartButton();
            });
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
        this.player.age = 0;
        this.player.attributes = { ...DEFAULT_ATTRIBUTES };
        this.player.tags = [...(this.persistentTags || [])]; // 保留黑色标签
        
        // 添加性别标签
        if (this.player.gender === "male") {
            this.player.tags.push("男性");
            // 检查性别标签类型并显示相应效果
            if (this.isRedTag("男性")) {
                this.showTagEffect("男性", 'red');
            } else if (this.isBlackTag("男性")) {
                this.showTagEffect("男性", 'black');
            } else if (this.isPurpleTag("男性")) {
                this.showTagEffect("男性", 'purple');
            } else if (this.isPinkTag("男性")) {
                this.showTagEffect("男性", 'pink');
            }
        } else if (this.player.gender === "female") {
            this.player.tags.push("女性");
            // 检查性别标签类型并显示相应效果
            if (this.isRedTag("女性")) {
                this.showTagEffect("女性", 'red');
            } else if (this.isBlackTag("女性")) {
                this.showTagEffect("女性", 'black');
            } else if (this.isPurpleTag("女性")) {
                this.showTagEffect("女性", 'purple');
            } else if (this.isPinkTag("女性")) {
                this.showTagEffect("女性", 'pink');
            }
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
        
        // 更新UI
        this.updatePlayerInfo();
        
        // 触发开局事件
        this.triggerStartEvent();
    }
    
    /**
     * 触发开局事件
     */
    triggerStartEvent() {
        // 获取开局事件
        const startEvent = eventManager.getStartEvent();
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
        
        // 为每个标签创建元素
        this.player.tags.forEach(tag => {
            const tagEl = document.createElement('div');
            tagEl.className = 'tag';
            
            // 根据标签类型设置样式
            if (this.isBlackTag(tag)) {
                tagEl.classList.add('black');
            } else if (this.isRedTag(tag)) {
                tagEl.classList.add('red');
            } else if (this.isPurpleTag(tag)) {
                tagEl.classList.add('purple');
            } else if (this.isPinkTag(tag)) {
                tagEl.classList.add('pink');
            } else if (this.isGoldenTag(tag)) {
                tagEl.classList.add('golden');
            }
            
            tagEl.textContent = tag;
            tagsContainer.appendChild(tagEl);
        });
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
        
        // 事件标题
        const title = document.createElement('h2');
        title.className = 'event-title';
        title.textContent = event.title;
        eventCard.appendChild(title);
        
        // 事件描述
        const description = document.createElement('p');
        description.className = 'event-description';
        if (event.description) {
            description.textContent = event.description.replace(/{user}/g, this.player.name);
        } else {
            description.textContent = "没有描述";
            console.warn("事件缺少描述:", event);
        }
        eventCard.appendChild(description);
        
        // 事件选项
        const options = document.createElement('div');
        options.className = 'event-options';
        
        // 判断是否有选项、是否有连续事件
        const hasOptions = event.options && Array.isArray(event.options) && event.options.length > 0;
        const hasContinueEvent = !!event.continue_event;
        
        // 为每个选项创建按钮
        if (hasOptions) {
            event.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.className = 'option-btn';
                
                // 创建选项图标
                const icon = document.createElement('span');
                icon.className = 'option-icon';
                
                // 根据选项内容选择合适的图标
                const iconText = this.getOptionIcon(option.text);
                icon.textContent = iconText;
                
                // 创建选项内容容器
                const content = document.createElement('span');
                content.className = 'option-content';
                content.textContent = option.text;
                
                // 添加图标和内容到按钮
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
                // 记录历史
                const autoResult = {
                    result: event.description ? event.description.replace(/{user}/g, this.player.name) : "",
                    effects: event.effects || {}
                };
                this.recordHistory(event, 0, autoResult);
                
                // 应用事件效果
                if (event.effects) {
                    this.applyEffects(event.effects);
                }
                
                // 处理标签添加和移除
                if (event.add_tags && Array.isArray(event.add_tags)) {
                    event.add_tags.forEach(tag => {
                        if (!this.player.tags.includes(tag)) {
                            this.player.tags.push(tag);
                            this.showTagEffect(tag, 'add');
                        }
                    });
                }
                
                if (event.remove_tags && Array.isArray(event.remove_tags)) {
                    event.remove_tags.forEach(tag => {
                        const index = this.player.tags.indexOf(tag);
                        if (index !== -1) {
                            this.player.tags.splice(index, 1);
                            this.showTagEffect(tag, 'remove');
                        }
                    });
                }
                
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
            
            button.addEventListener('click', () => this.progressToNextYear());
            options.appendChild(button);
        }
        
        eventCard.appendChild(options);
        eventContainer.appendChild(eventCard);
    }
    
    /**
     * 根据选项文本获取合适的图标
     * @param {String} optionText - 选项文本
     * @returns {String} 图标文本
     */
    getOptionIcon(optionText) {
        // 根据关键词匹配图标
        const iconMap = {
            '学习': '📚',
            '读书': '📖',
            '工作': '💼',
            '打工': '🛠️',
            '运动': '🏃',
            '锻炼': '💪',
            '健身': '🏋️',
            '游戏': '🎮',
            '玩耍': '🎯',
            '旅行': '🧳',
            '旅游': '🏝️',
            '恋爱': '❤️',
            '表白': '💌',
            '告白': '💘',
            '结婚': '💍',
            '婚礼': '👰',
            '购买': '🛒',
            '买': '💰',
            '卖': '💵',
            '交朋友': '👥',
            '社交': '🗣️',
            '聚会': '🎉',
            '派对': '🎊',
            '思考': '🤔',
            '冥想': '🧘',
            '休息': '😴',
            '睡觉': '💤',
            '吃饭': '🍽️',
            '美食': '🍲',
            '喝酒': '🍺',
            '饮料': '🥤',
            '拒绝': '❌',
            '接受': '✅',
            '同意': '👍',
            '反对': '👎',
            '战斗': '⚔️',
            '战争': '🛡️',
            '和平': '☮️',
            '医疗': '🏥',
            '治疗': '💉',
            '药物': '💊',
            '音乐': '🎵',
            '唱歌': '🎤',
            '跳舞': '💃',
            '艺术': '🎨',
            '绘画': '🖌️',
            '科学': '🔬',
            '研究': '🔭',
            '实验': '⚗️',
            '编程': '💻',
            '计算机': '🖥️',
            '手机': '📱',
            '投资': '📈',
            '股票': '📊',
            '赌博': '🎲',
            '冒险': '🧗',
            '探险': '🗺️',
            '逃跑': '🏃',
            '躲避': '🙈',
            '哭泣': '😢',
            '笑': '😄',
            '开心': '😊',
            '悲伤': '😔',
            '愤怒': '😡',
            '恐惧': '😱',
            '惊讶': '😲',
            '继续': '➡️',
            '下一步': '⏭️',
            '返回': '⬅️',
            '等待': '⏳',
            '观察': '👀',
            '看': '👁️',
            '听': '👂',
            '说话': '💬',
            '沉默': '🤐',
            '祈祷': '🙏',
            '魔法': '✨',
            '超能力': '🔮',
            '神秘': '🌌',
            '宇宙': '🌠',
            '自然': '🌿',
            '动物': '🐾',
            '植物': '🌱',
            '海洋': '🌊',
            '山脉': '🏔️',
            '城市': '🏙️',
            '乡村': '🏡',
            '家庭': '👨‍👩‍👧‍👦',
            '朋友': '👫',
            '敌人': '👤',
            '老师': '👨‍🏫',
            '学生': '👨‍🎓',
            '医生': '👨‍⚕️',
            '警察': '👮',
            '军人': '💂',
            '艺术家': '👨‍🎨',
            '科学家': '👨‍🔬',
            '工程师': '👨‍💻',
            '厨师': '👨‍🍳',
            '运动员': '🏅',
            '政治家': '👔',
            '商人': '💼'
        };
        
        // 默认图标
        let icon = '🔹';
        
        // 查找关键词
        for (const [keyword, emoji] of Object.entries(iconMap)) {
            if (optionText.includes(keyword)) {
                icon = emoji;
                break;
            }
        }
        
        return icon;
    }
    
    /**
     * 显示选项结果
     * @param {Object} result - 结果对象
     */
    displayResult(result) {

        const eventContainer = document.getElementById('eventContainer');
        eventContainer.innerHTML = '';
        
        // 创建结果卡片
        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';
        
        // 结果文本
        const resultText = document.createElement('p');
        resultText.className = 'result-text';
        // 替换结果中的{user}为玩家名字，添加错误处理
        if (result.result) {
            resultText.textContent = result.result.replace(/{user}/g, this.player.name);
        } else {
            resultText.textContent = "无结果描述";
            console.warn("结果缺少描述：", result);
        }
        resultCard.appendChild(resultText);
        
        // 添加"下一个事件"按钮
        const nextButton = document.createElement('button');
        nextButton.className = 'next-event-btn';
        nextButton.textContent = '下一个事件';
        nextButton.addEventListener('click', () => {
            // 检查是否有连续事件
            if (result.continue_event) {
                const nextEvent = eventManager.getContinuationEvent(result.continue_event);
                this.currentEvent = nextEvent;
                this.displayEvent(nextEvent);
            } else {
                this.progressToNextYear();
            }
        });
        resultCard.appendChild(nextButton);
        
        eventContainer.appendChild(resultCard);
    }
    
    /**
     * 处理选项选择
     * @param {Object} option - 选项对象
     * @param {Number} optionIndex - 选项索引
     */
    handleOptionSelect(option, optionIndex) {
        // 处理选项结果
        const result = eventManager.processOptionResult(option, this.player);
        
        // 检查是否有risk标记，如果有且触发死亡
        if (option.risk && Math.random() < option.risk) {
            // 如果选项有指定的死亡描述，使用它；否则使用结果文本
            const deathReason = option.death_desc || result.result.replace(/{user}/g, this.player.name);
            this.handleDeath(deathReason, "risk");
            
            // 记录历史
            this.recordHistory(this.currentEvent, optionIndex, result);
            return;
        }
        
        // 应用结果影响
        this.applyEffects(result.effects);
        
        // 如果游戏已结束，不继续处理
        if (this.isGameOver) return;
        
        // 添加/移除标签
        if (result.add_tags && result.add_tags.length > 0) {
            result.add_tags.forEach(tag => {
                if (!this.player.tags.includes(tag)) {
                    this.player.tags.push(tag);
                    
                    // 检查标签类型并显示相应效果
                    if (this.isRedTag(tag)) {
                        this.showTagEffect(tag, 'red');
                    } else if (this.isBlackTag(tag)) {
                        this.showTagEffect(tag, 'black');
                    } else if (this.isPurpleTag(tag)) {
                        this.showTagEffect(tag, 'purple');
                    } else if (this.isPinkTag(tag)) {
                        this.showTagEffect(tag, 'pink');
                    } else if (this.isGoldenTag(tag)) {
                        this.showGoldenAchievementEffect(tag);
                    }
                }
            });
        }
        
        if (result.remove_tags && result.remove_tags.length > 0) {
            this.player.tags = this.player.tags.filter(tag => !result.remove_tags.includes(tag));
        }
        
        // 记录历史
        this.recordHistory(this.currentEvent, optionIndex, result);
        
        // 更新标签显示
        this.updateTagsDisplay();
        
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
            if (this.isRedTag(tag)) {
                this.showTagEffect(tag, 'red');
            } else if (this.isBlackTag(tag)) {
                this.showTagEffect(tag, 'black');
            } else if (this.isPurpleTag(tag)) {
                this.showTagEffect(tag, 'purple');
            } else if (this.isPinkTag(tag)) {
                this.showTagEffect(tag, 'pink');
            } else if (this.isGoldenTag(tag)) {
                this.showGoldenAchievementEffect(tag);
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
        
        // 检查是否已经有该年龄段标签
        const hasAgeGroupTag = this.player.tags.includes(currentAgeGroup);
        
        // 移除所有年龄段标签
        Object.values(AGE_GROUPS).forEach(group => {
            if (this.player.tags.includes(group.name)) {
                this.player.tags = this.player.tags.filter(tag => tag !== group.name);
            }
        });
        
        // 添加当前年龄段标签
        this.player.tags.push(currentAgeGroup);
        
        // 如果是新添加的年龄段标签，检查标签类型并显示相应效果
        if (!hasAgeGroupTag) {
            // 检查标签类型并显示相应效果
            if (this.isRedTag(currentAgeGroup)) {
                this.showTagEffect(currentAgeGroup, 'red');
            } else if (this.isBlackTag(currentAgeGroup)) {
                this.showTagEffect(currentAgeGroup, 'black');
            } else if (this.isPurpleTag(currentAgeGroup)) {
                this.showTagEffect(currentAgeGroup, 'purple');
            } else if (this.isPinkTag(currentAgeGroup)) {
                this.showTagEffect(currentAgeGroup, 'pink');
            } else if (this.isGoldenTag(currentAgeGroup)) {
                this.showGoldenAchievementEffect(currentAgeGroup);
            }
        }
    }
    
    /**
     * 进行死亡检定
     * @returns {Boolean} 是否通过检定（false表示存活）
     */
    rollDeathCheck() {
        // 基础死亡概率随年龄增加
        let deathProbability = (this.player.age - GAME_CONFIG.DEATH_CHECK_AGE) / 100;
        
        // 健康值低会增加死亡概率
        if (this.player.attributes[ATTRIBUTES.HEALTH] < 30) {
            deathProbability += (30 - this.player.attributes[ATTRIBUTES.HEALTH]) / 100;
        }
        
        // 幸运值会降低死亡概率
        const luckFactor = this.player.attributes[ATTRIBUTES.LUCK] / 200;
        deathProbability -= luckFactor;
        
        // 确保概率范围在0-1之间
        deathProbability = Math.max(0, Math.min(1, deathProbability));
        
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
        this.deathType = type; // 记录死亡类型
        
        // 显示游戏结束界面
        setTimeout(() => {
            this.showGameOver();
        }, 2000);
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
        
        // 根据死亡类型显示对应的死亡原因
        const deathReasonElement = document.getElementById('deathReason');
        if (this.deathType === "risk") {
            // 风险选项死亡，直接显示选项结果
            deathReasonElement.textContent = `死因：${this.deathReason}`;
        } else if (this.deathType === "health") {
            // 健康值为0死亡，显示固定文本
            deathReasonElement.textContent = `死因：${this.deathReason}`;
        } else if (this.deathType === "age") {
            // 死亡检定死亡，显示自然老死
            deathReasonElement.textContent = `死因：${this.deathReason}`;
        } else {
            // 其他情况
            deathReasonElement.textContent = `死因：${this.deathReason}`;
        }
        
        // 显示最终标签
        const finalTagsContainer = document.getElementById('finalTags');
        finalTagsContainer.innerHTML = '';
        
        this.player.tags.forEach(tag => {
            const tagEl = document.createElement('div');
            tagEl.className = 'tag';
            
            if (this.isBlackTag(tag)) {
                tagEl.classList.add('black');
            } else if (this.isRedTag(tag)) {
                tagEl.classList.add('red');
            } else if (this.isPurpleTag(tag)) {
                tagEl.classList.add('purple');
            } else if (this.isPinkTag(tag)) {
                tagEl.classList.add('pink');
            } else if (this.isGoldenTag(tag)) {
                tagEl.classList.add('golden');
            }
            
            tagEl.textContent = tag;
            finalTagsContainer.appendChild(tagEl);
        });
        
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
        this.player.history.forEach(entry => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            
            const ageSpan = document.createElement('span');
            ageSpan.className = 'history-age';
            ageSpan.textContent = `${entry.age}岁：`;
            
            const eventSpan = document.createElement('span');
            eventSpan.textContent = `${entry.eventTitle} - ${entry.result}`;
            
            historyItem.appendChild(ageSpan);
            historyItem.appendChild(eventSpan);
            historyList.appendChild(historyItem);
        });
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
        // 筛选所有黑色标签
        const blackTags = this.player.tags.filter(tag => this.isBlackTag(tag));
        
        if (blackTags.length > 0) {
            localStorage.setItem('persistentBlackTags', JSON.stringify(blackTags));
            this.persistentTags = blackTags;
        }
    }
    
    /**
     * 加载持久标签
     */
    loadPersistentTags() {
        const savedTags = localStorage.getItem('persistentBlackTags');
        if (savedTags) {
            try {
                this.persistentTags = JSON.parse(savedTags);
            } catch (e) {
                console.error("加载持久标签失败", e);
                this.persistentTags = [];
            }
        } else {
            this.persistentTags = [];
        }
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
        
        // 保存到本地存储
        localStorage.setItem('savedLives', JSON.stringify(savedLives));
        
        return lifeRecord;
    }
    
    /**
     * 获取已保存的人生记录
     * @returns {Array} 人生记录列表
     */
    getSavedLives() {
        const saved = localStorage.getItem('savedLives');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("解析保存的人生记录失败", e);
                return [];
            }
        }
        return [];
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
}

// 游戏功能函数
function startNewLife() {
    if (!window.game) {
        window.game = new LifeSimulatorGame();
    }
    
    window.game.startNewLife();
}

function restartGame() {
    document.getElementById('gameoverScreen').style.display = 'none';
    document.getElementById('characterCreation').style.display = 'block';
}

function saveLife() {
    if (window.game) {
        const savedLife = window.game.saveCurrentLife();
        alert(`你的人生已保存！`);
    }
}

function renderSavedLives() {
    if (!window.game) return;
    
    const savedLives = window.game.getSavedLives();
    const container = document.getElementById('savedLivesList');
    container.innerHTML = '';
    
    if (savedLives.length === 0) {
        container.innerHTML = '<p class="no-saves">没有保存的人生记录</p>';
        return;
    }
    
    // 按保存时间降序排序
    savedLives.sort((a, b) => new Date(b.savedDate) - new Date(a.savedDate));
    
    // 为每个保存的人生创建卡片
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
        viewButton.addEventListener('click', () => showLifeDetails(life));
        
        card.appendChild(header);
        card.appendChild(date);
        card.appendChild(viewButton);
        container.appendChild(card);
    });
}

function showLifeDetails(life) {
    // 显示模态框
    const modal = document.getElementById('replayDetailsModal');
    modal.style.display = 'block';
    
    // 填充数据
    document.getElementById('replayModalName').textContent = life.name;
    document.getElementById('replayModalGender').textContent = life.gender === 'male' ? '男' : '女';
    document.getElementById('replayModalAge').textContent = `${life.age}岁`;
    document.getElementById('replayModalBackground').textContent = life.background || '普通人家';
    document.getElementById('replayModalDeathReason').textContent = life.deathReason;
    
    // 显示标签
    const tagsContainer = document.getElementById('replayModalTags');
    tagsContainer.innerHTML = '';
    
    if (life.tags && life.tags.length > 0) {
        life.tags.forEach(tag => {
            const tagEl = document.createElement('div');
            tagEl.className = 'tag';
            
            // 尝试使用window.game对象来判断标签类型
            if (window.game) {
                if (window.game.isBlackTag(tag)) {
                    tagEl.classList.add('black');
                } else if (window.game.isRedTag(tag)) {
                    tagEl.classList.add('red');
                } else if (window.game.isPurpleTag(tag)) {
                    tagEl.classList.add('purple');
                } else if (window.game.isPinkTag(tag)) {
                    tagEl.classList.add('pink');
                } else if (window.game.isGoldenTag(tag)) {
                    tagEl.classList.add('golden');
                }
            }
            
            tagEl.textContent = tag;
            tagsContainer.appendChild(tagEl);
        });
    } else {
        tagsContainer.innerHTML = '<span class="no-tags">无标签</span>';
    }
    
    // 显示历史记录
    const historyList = document.getElementById('replayModalHistoryList');
    historyList.innerHTML = '';
    
    if (life.history && life.history.length > 0) {
        life.history.forEach(entry => {
            const item = document.createElement('div');
            item.className = 'history-item';
            
            const ageSpan = document.createElement('span');
            ageSpan.className = 'history-age';
            ageSpan.textContent = `${entry.age}岁：`;
            
            const contentSpan = document.createElement('span');
            contentSpan.textContent = `${entry.eventTitle} - ${entry.result}`;
            
            item.appendChild(ageSpan);
            item.appendChild(contentSpan);
            historyList.appendChild(item);
        });
    } else {
        historyList.innerHTML = '<p class="no-history">没有历史记录</p>';
    }
}

function hideLifeDetailsModal() {
    const modal = document.getElementById('replayDetailsModal');
    modal.style.display = 'none';
}

function confirmResetGame() {
    if (confirm("确定要重置游戏吗？这将清除所有保存的数据、成就和记忆！")) {
        localStorage.clear();
        alert("游戏已重置！");
        location.reload();
    }
}

// 点击模态框外部关闭
window.addEventListener('click', (event) => {
    const modal = document.getElementById('replayDetailsModal');
    if (event.target === modal) {
        hideLifeDetailsModal();
    }
}); 