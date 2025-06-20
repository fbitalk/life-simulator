// eventManager.js - 修复版事件管理系统

// 直接使用全局变量，不声明
const tagDefinitions = window.TAG_DEFINITIONS || {};
const tagEvents = window.TAG_EVENTS || {};
// 使用已存在的 ageEvents，不重新声明
// const ageEvents = window.ageEvents;
const startEvents = window.STARTING_EVENTS || {};

// 定义事件优先级常量
const EVENT_PRIORITIES = {
    DEFAULT: 0,
    TAG_PRIORITY: 50,
    STARTING_TAG: 50,
    EXCLUSIVE_EVENT: 80,
    RED_TAG_EVENT: 90,
    RED_EXCLUSIVE_EVENT: 100
};

const eventManager = {
    // 直接暴露事件数据
    ageEvents: window.ageEvents,
    tagEvents,
    startEvents,
    
    // 添加新属性
    triggered_events: new Set(), // 追踪已触发的事件
    eventIndex: new Map(), // 事件索引
    continueEventsList: new Set(), // 追踪所有后续事件
    lazyLoadedGroups: new Set(), // 追踪已加载的事件组
    cachedTagEvents: new Map(), // 标签事件缓存

    // 错误处理
    errorHandlers: {
        showError: (message) => {
            console.error(message);
            // 可以在这里添加UI显示错误的逻辑
        },
        logError: (error, context) => {
            console.error(`Error in ${context}:`, error);
            // 可以在这里添加错误上报逻辑
        }
    },

    // 使用导入的标签定义
    tag_definitions: tagDefinitions,

    // 初始化事件索引 - 只加载必要的事件
    initializeEventIndex() {
        try {
            // 清空索引
            this.eventIndex.clear();
            this.continueEventsList.clear();
            this.lazyLoadedGroups.clear();
            this.cachedTagEvents.clear();
            
            // 只预加载开局事件
            this.loadStartingEvents();
            
            console.log('Event index initialized with starting events');
            console.log(`Starting events in index: ${this.eventIndex.size}`);
            
            // 收集所有后续事件ID
            this.collectContinueEvents();
            
        } catch (error) {
            this.errorHandlers.logError(error, 'initializeEventIndex');
            throw error;
        }
    },

    // 加载开局事件
    loadStartingEvents() {
        if (this.lazyLoadedGroups.has('starting')) return;
        
        // 添加开局事件
        if (window.STARTING_EVENTS) {
            Object.entries(window.STARTING_EVENTS).forEach(([id, event]) => {
                this.eventIndex.set(id, event);
            });
            console.log(`Loaded ${Object.keys(window.STARTING_EVENTS).length} starting events`);
        }
        
        this.lazyLoadedGroups.add('starting');
    },

    // 按需加载特定年龄段的事件
    loadAgeGroupEvents(ageGroup) {
        if (!ageGroup || this.lazyLoadedGroups.has(`age_${ageGroup}`)) return;
        
        if (this.ageEvents && this.ageEvents[ageGroup]) {
            // 特别关注childhood年龄段
            if (ageGroup === 'childhood') {
                console.log('加载小学阶段事件:');
                const eventCount = Object.keys(this.ageEvents[ageGroup]).length;
                console.log(`找到 ${eventCount} 个小学阶段事件`);
                
                // 输出每个事件的标题和触发条件
                Object.entries(this.ageEvents[ageGroup]).forEach(([id, event]) => {
                    console.log(`- 事件: ${id}, 标题: ${event.title}`);
                    if (event.trigger_conditions && event.trigger_conditions.required_tags) {
                        console.log(`  所需标签: ${event.trigger_conditions.required_tags.join(', ')}`);
                    }
                    this.eventIndex.set(id, event);
                });
            } else {
                Object.entries(this.ageEvents[ageGroup]).forEach(([id, event]) => {
                    this.eventIndex.set(id, event);
                });
            }
            
            console.log(`Loaded age events for ${ageGroup}`);
            this.lazyLoadedGroups.add(`age_${ageGroup}`);
        }
    },

    // 收集所有作为后续事件的事件ID
    collectContinueEvents() {
        // 检查所有事件
        this.eventIndex.forEach((event, id) => {
            // 检查事件本身是否有continue_event属性
            if (event.continue_event) {
                this.continueEventsList.add(event.continue_event);
            }
            
            // 检查事件的选项是否有continue_event属性
            if (event.options && Array.isArray(event.options)) {
                event.options.forEach(option => {
                    if (option.continue_event) {
                        this.continueEventsList.add(option.continue_event);
                    }
                    
                    // 检查条件结果中的continue_event
                    if (option.conditional_results && Array.isArray(option.conditional_results)) {
                        option.conditional_results.forEach(result => {
                            if (result.continue_event) {
                                this.continueEventsList.add(result.continue_event);
                            }
                        });
                    }
                });
            }
        });
        
        console.log(`Collected ${this.continueEventsList.size} continue events`);
    },

    // 检查事件是否为后续事件
    isContinueEvent(eventId) {
        return this.continueEventsList.has(eventId);
    },

    // 收集单个事件 - 新增辅助方法
    collectEventIfAvailable(eventId, event, player, availableEvents) {
        // 跳过已触发的事件
        if (this.isEventTriggered(eventId)) return;
        
        // 跳过后续事件（它们应该只通过前置事件触发）
        if (this.isContinueEvent(eventId)) return;
        
        // 检查触发条件
        if (this.checkEventConditions(event, eventId, player)) {
            // 设置优先级，默认为0
            const priority = event.priority || EVENT_PRIORITIES.DEFAULT;
            availableEvents.push([eventId, { ...event, priority }]);
        }
    },

    // 处理加权事件 - 新增辅助方法
    collectWeightedEvent(eventId, event, player, availableEvents) {
        // 跳过已触发的事件
        if (this.isEventTriggered(eventId)) return;
        
        // 跳过后续事件（它们应该只通过前置事件触发）
        if (this.isContinueEvent(eventId)) return;
        
        // 检查触发条件
        if (this.checkEventConditions(event, eventId, player)) {
            // 计算权重，用于随机选择
            const weight = event.weight || 10;
            // 设置优先级，默认为0
            const priority = event.priority || EVENT_PRIORITIES.DEFAULT;
            
            // 添加事件
            for (let i = 0; i < weight; i++) {
                availableEvents.push([eventId, { ...event, priority }]);
            }
        }
    },

    // 获取可用事件（跳过后续事件的随机触发）
    getAvailableEvents(player, ageGroup) {
        const availableEvents = [];
        
        // 按需加载特定年龄段的事件
        this.loadAgeGroupEvents(ageGroup);
        
        // 如果是0岁，加载开局事件
        if (player.age === 0) {
            this.loadStartingEvents();
            
            // 添加开局事件到可用事件列表
            Object.entries(this.startEvents).forEach(([eventId, event]) => {
                this.collectWeightedEvent(eventId, event, player, availableEvents);
            });
        }
        
        // 检查年龄段事件
        if (this.ageEvents && this.ageEvents[ageGroup]) {
            Object.entries(this.ageEvents[ageGroup]).forEach(([eventId, event]) => {
                this.collectEventIfAvailable(eventId, event, player, availableEvents);
            });
        }
        
        // 检查标签事件 
        for (const tag of player.tags) {
            const tagEventsObj = this.getTagEvents(tag);
            Object.entries(tagEventsObj).forEach(([eventId, event]) => {
                this.collectEventIfAvailable(eventId, event, player, availableEvents);
            });
        }
        
        return availableEvents;
    },

    // 获取所有红色标签事件
    getRedTagEvents(player) {
        const availableEvents = [];
        
        // 查找所有红色标签
        const redTags = player.tags.filter(tag => {
            const tagDef = this.tag_definitions[tag] || this.tag_definitions.get?.(tag);
            return tagDef && tagDef.is_red;
        });
        
        // 获取每个红色标签的独占事件
        for (const tag of redTags) {
            const tagDef = this.tag_definitions[tag] || this.tag_definitions.get?.(tag);
            
            if (tagDef && tagDef.exclusive_events) {
                for (const eventId of tagDef.exclusive_events) {
                    const event = this.getEvent(eventId);
                    if (event && this.checkEventConditions(event, eventId, player)) {
                        // 红色标签事件具有最高优先级
                        availableEvents.push([eventId, { ...event, priority: EVENT_PRIORITIES.RED_EXCLUSIVE_EVENT }]);
                    }
                }
            }
            
            // 收集标签事件
            const tagEvents = this.getTagEvents(tag);
            Object.entries(tagEvents).forEach(([eventId, event]) => {
                if (this.checkEventConditions(event, eventId, player)) {
                    // 红色标签的普通事件也具有较高优先级
                    availableEvents.push([eventId, { ...event, priority: EVENT_PRIORITIES.RED_TAG_EVENT }]);
                }
            });
        }
        
        return availableEvents;
    },

    // 获取事件
    getEvent(eventId) {
        // 尝试从已加载事件中获取
        const event = this.eventIndex.get(eventId);
        if (event) return event;
        
        // 尝试从各种来源加载事件
        if (window.STARTING_EVENTS && window.STARTING_EVENTS[eventId]) {
            const event = window.STARTING_EVENTS[eventId];
            this.eventIndex.set(eventId, event);
            return event;
        }
        
        if (window.TAG_EVENTS && window.TAG_EVENTS[eventId]) {
            const event = window.TAG_EVENTS[eventId];
            this.eventIndex.set(eventId, event);
            return event;
        }
        
        // 在所有年龄段事件中搜索
        if (this.ageEvents) {
            for (const ageGroup in this.ageEvents) {
                if (this.ageEvents[ageGroup] && this.ageEvents[ageGroup][eventId]) {
                    const event = this.ageEvents[ageGroup][eventId];
                    this.eventIndex.set(eventId, event);
                    return event;
                }
            }
        }
        
        console.warn(`Event not found: ${eventId}`);
        return null;
    },

    // 检查事件是否已触发
    isEventTriggered(eventId) {
        return this.triggered_events.has(eventId);
    },

    // 标记事件为已触发
    markEventAsTriggered(eventId) {
        this.triggered_events.add(eventId);
        console.log(`Event marked as triggered: ${eventId}`);
    },

    // 获取特定年龄段的事件
    getAgeEvents(ageGroup) {
        return this.ageEvents[ageGroup] || {};
    },

    // 获取特定年龄的事件
    getAgeEvent(age) {
        // 确定年龄段
        let ageGroup = null;
        if (age >= 1 && age <= 5) {
            ageGroup = 'toddler';
        } else if (age >= 6 && age <= 12) {
            ageGroup = 'childhood';
        } else if (age >= 13 && age <= 18) {
            ageGroup = 'teenager';
        } else if (age >= 19 && age <= 30) {
            ageGroup = 'adult';
        } else if (age >= 31 && age <= 50) {
            ageGroup = 'middleAge';
        } else if (age >= 51) {
            ageGroup = 'elderly';
        }

        // 如果没有对应的年龄段，返回null
        if (!ageGroup || !this.ageEvents || !this.ageEvents[ageGroup]) {
            return null;
        }

        // 查找特定年龄的事件
        for (const [eventId, event] of Object.entries(this.ageEvents[ageGroup])) {
            if (event.trigger_conditions && 
                event.trigger_conditions.specific_age === age) {
                return event;
            }
        }

        return null;
    },

    // 获取开局事件
    getStartEvents() {
        this.loadStartingEvents();
        return this.startEvents;
    },

    // 获取标签相关事件（改进版）
    getTagEvents(tag) {
        // 检查缓存
        if (this.cachedTagEvents.has(tag)) {
            return this.cachedTagEvents.get(tag);
        }
        
        const events = {};
        
        // 1. 从 TAG_EVENTS 中直接查找与该标签相关的事件
        if (window.TAG_EVENTS) {
            Object.entries(window.TAG_EVENTS).forEach(([eventId, event]) => {
                if (event.trigger_conditions && 
                    event.trigger_conditions.required_tags && 
                    event.trigger_conditions.required_tags.includes(tag)) {
                    events[eventId] = event;
                    // 同时将事件添加到索引中
                    this.eventIndex.set(eventId, event);
                }
            });
        }
        
        // 2. 从标签定义中获取指定的事件
        const tagDef = this.tag_definitions[tag] || this.tag_definitions.get?.(tag);
        if (tagDef) {
            // 处理优先事件
            if (tagDef.priority_events) {
                tagDef.priority_events.forEach(eventId => {
                    const event = this.getEvent(eventId);
                    if (event) {
                        // 为优先事件设置更高优先级
                        events[eventId] = { ...event, priority: EVENT_PRIORITIES.TAG_PRIORITY };
                    }
                });
            }
            
            // 处理独占事件
            if (tagDef.exclusive_events) {
                tagDef.exclusive_events.forEach(eventId => {
                    const event = this.getEvent(eventId);
                    if (event) {
                        // 为独占事件设置最高优先级
                        events[eventId] = { ...event, priority: EVENT_PRIORITIES.EXCLUSIVE_EVENT };
                    }
                });
            }
        }

        // 将结果保存到缓存
        this.cachedTagEvents.set(tag, events);
        return events;
    },

    // 检查事件条件
    checkEventConditions(event, eventId, player) {
        if (!event || !event.trigger_conditions) return true;
        
        const conditions = event.trigger_conditions;
        let isChildhoodEvent = false;
        
        // 检查是否为小学生相关事件
        if (conditions.required_tags && 
            conditions.required_tags.includes("小学生")) {
            isChildhoodEvent = true;
            console.log(`检查小学生事件条件: ${eventId}, 玩家标签: ${player.tags.join(', ')}`);
        }
        
        // 检查年龄范围
        if (!this.checkAgeRange(conditions, player.age)) {
            if (isChildhoodEvent) {
                console.log(`小学生事件(${eventId})年龄不符: 需要${conditions.age_range[0]}-${conditions.age_range[1]}岁, 当前${player.age}岁`);
            }
            return false;
        }
        
        // 检查必需标签
        if (!this.checkRequiredTags(conditions, player.tags)) {
            if (isChildhoodEvent) {
                const missingTags = this.getMissingTags(conditions, player.tags);
                console.log(`小学生事件(${eventId})标签不符: 缺少标签 ${missingTags.join(', ')}`);
            }
            return false;
        }
        
        // 检查排除标签
        if (!this.checkExcludedTags(conditions, player.tags)) {
            if (isChildhoodEvent) {
                const conflictTags = this.getConflictTags(conditions, player.tags);
                console.log(`小学生事件(${eventId})标签冲突: 存在排除标签 ${conflictTags.join(', ')}`);
            }
            return false;
        }
        
        // 检查属性要求
        if (!this.checkAttributes(conditions, player)) {
            if (isChildhoodEvent) {
                console.log(`小学生事件(${eventId})属性不足`);
            }
            return false;
        }
        
        if (isChildhoodEvent) {
            console.log(`小学生事件(${eventId})条件满足，可以触发`);
        }
        return true;
    },
    
    // 检查年龄范围 - 新增辅助方法
    checkAgeRange(conditions, playerAge) {
        if (!conditions.age_range) return true;
        return playerAge >= conditions.age_range[0] && playerAge <= conditions.age_range[1];
    },
    
    // 检查必需标签 - 新增辅助方法
    checkRequiredTags(conditions, playerTags) {
        if (!conditions.required_tags || !conditions.required_tags.length) return true;
        return conditions.required_tags.every(tag => playerTags.includes(tag));
    },
    
    // 获取缺失的标签 - 新增辅助方法
    getMissingTags(conditions, playerTags) {
        if (!conditions.required_tags) return [];
        return conditions.required_tags.filter(tag => !playerTags.includes(tag));
    },
    
    // 检查排除标签 - 新增辅助方法
    checkExcludedTags(conditions, playerTags) {
        if (!conditions.excluded_tags || !conditions.excluded_tags.length) return true;
        return !conditions.excluded_tags.some(tag => playerTags.includes(tag));
    },
    
    // 获取冲突标签 - 新增辅助方法
    getConflictTags(conditions, playerTags) {
        if (!conditions.excluded_tags) return [];
        return conditions.excluded_tags.filter(tag => playerTags.includes(tag));
    },
    
    // 检查属性要求 - 新增辅助方法
    checkAttributes(conditions, player) {
        if (!conditions.min_attributes) return true;
        for (const [attr, minValue] of Object.entries(conditions.min_attributes)) {
            if (player[attr] < minValue) return false;
        }
        return true;
    },
    
    /**
     * 匹配事件选择结果
     * @param {Array} choices - 事件选择数组
     * @param {string} choice - 玩家选择
     * @returns {Object|null} 匹配的选择项或null
     */
    matchEventChoice(choices, choice) {
        if (!choices || !choice) return null;
        
        // 精确匹配
        const exactMatch = choices.find(c => c.text === choice);
        if (exactMatch) return exactMatch;
        
        // 包含匹配（如果没有精确匹配）
        const includeMatch = choices.find(c => c.text.includes(choice) || choice.includes(c.text));
        if (includeMatch) return includeMatch;
        
        return null;
    },
    
    /**
     * 获取标签定义
     * @param {string} tag - 标签名
     * @returns {Object|null} 标签定义对象
     */
    getTagDefinition(tag) {
        return this.tag_definitions.get(tag) || null;
    },
    
    /**
     * 获取连续事件
     * 连续事件无触发要求，只能通过前置事件触发
     * @param {string} eventId - 连续事件的ID
     * @returns {Object} 连续事件对象
     */
    getContinueEvent(eventId) {
        if (!eventId) return null;
        
        // 获取事件
        const event = this.getEvent(eventId);
        if (!event) return null;
        
        return event;
    }
};

// 初始化事件索引
eventManager.initializeEventIndex();

// 暴露到全局
window.eventManager = eventManager;