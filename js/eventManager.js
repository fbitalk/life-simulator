// eventManager.js - 修复版事件管理系统

// 直接使用全局变量，不声明
const tagDefinitions = window.TAG_DEFINITIONS || {};
const tagEvents = window.TAG_EVENTS || {};
// 使用已存在的 ageEvents，不重新声明
// const ageEvents = window.ageEvents;
const startEvents = window.STARTING_EVENTS || {};

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

        // 添加开局标签事件
        if (window.STARTING_TAG_EVENTS) {
            Object.entries(window.STARTING_TAG_EVENTS).forEach(([id, event]) => {
                this.eventIndex.set(id, event);
            });
            console.log(`Loaded ${Object.keys(window.STARTING_TAG_EVENTS).length} starting tag events`);
        }
        
        this.lazyLoadedGroups.add('starting');
    },

    // 按需加载特定年龄段的事件
    loadAgeGroupEvents(ageGroup) {
        if (!ageGroup || this.lazyLoadedGroups.has(`age_${ageGroup}`)) return;
        
        if (this.ageEvents && this.ageEvents[ageGroup]) {
            Object.entries(this.ageEvents[ageGroup]).forEach(([id, event]) => {
                this.eventIndex.set(id, event);
            });
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

    // 获取可用事件（跳过后续事件的随机触发）
    getAvailableEvents(player, ageGroup) {
        const availableEvents = [];
        
        // 按需加载特定年龄段的事件
        this.loadAgeGroupEvents(ageGroup);
        
        // 检查年龄段事件
        if (this.ageEvents && this.ageEvents[ageGroup]) {
            Object.entries(this.ageEvents[ageGroup]).forEach(([eventId, event]) => {
                // 跳过已触发的事件
                if (this.isEventTriggered(eventId)) return;
                
                // 跳过后续事件（它们应该只通过前置事件触发）
                if (this.isContinueEvent(eventId)) {
                    return;
                }
                
                // 检查触发条件
                if (this.checkEventConditions(event, eventId, player)) {
                    availableEvents.push([eventId, event]);
                }
            });
        }
        
        // 检查标签事件 
        for (const tag of player.tags) {
            const tagEventsObj = this.getTagEvents(tag);
            Object.entries(tagEventsObj).forEach(([eventId, event]) => {
                // 跳过已触发的事件
                if (this.isEventTriggered(eventId)) return;
                
                // 跳过后续事件（它们应该只通过前置事件触发）
                if (this.isContinueEvent(eventId)) {
                    return;
                }
                
                // 检查触发条件
                if (this.checkEventConditions(event, eventId, player)) {
                    availableEvents.push([eventId, event]);
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
        
        if (window.STARTING_TAG_EVENTS && window.STARTING_TAG_EVENTS[eventId]) {
            const event = window.STARTING_TAG_EVENTS[eventId];
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
                        events[eventId] = event;
                    }
                });
            }
            
            // 处理独占事件
            if (tagDef.exclusive_events) {
                tagDef.exclusive_events.forEach(eventId => {
                    const event = this.getEvent(eventId);
                    if (event) {
                        events[eventId] = event;
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
        
        // 检查年龄范围
        if (conditions.age_range && 
            (player.age < conditions.age_range[0] || 
             player.age > conditions.age_range[1])) {
            return false;
        }
        
        // 检查必需标签
        if (conditions.required_tags && conditions.required_tags.length > 0) {
            const hasAllTags = conditions.required_tags.every(tag => 
                player.tags.includes(tag)
            );
            if (!hasAllTags) {
                return false;
            }
        }
        
        // 检查排除标签
        if (conditions.excluded_tags && conditions.excluded_tags.length > 0) {
            const hasExcludedTag = conditions.excluded_tags.some(tag => 
                player.tags.includes(tag)
            );
            if (hasExcludedTag) {
                return false;
            }
        }
        
        // 检查属性要求
        if (conditions.min_attributes) {
            for (const [attr, minValue] of Object.entries(conditions.min_attributes)) {
                if (player[attr] < minValue) {
                    return false;
                }
            }
        }
        
        return true;
    },
    
    /**
     * 更新动态标签
     * @param {Object} player - 玩家对象
     * @param {string} tagPrefix - 标签前缀，如 "音乐天赋:"
     * @param {number} change - 变化值，正数为增加，负数为减少
     * @param {string} resultText - 返回给玩家的文本，可包含 {user} 占位符
     * @param {number[]} [range] - 可选的标签值范围限制 [min, max]
     * @returns {Object} 标准的事件结果对象
     */
    updateDynamicTag(player, tagPrefix, change, resultText, range = [-10, 10]) {
        // 使用 tagUtils 如果存在
        if (window.tagUtils && window.tagUtils.updateDynamicTag) {
            return window.tagUtils.updateDynamicTag(player, tagPrefix, change, resultText, range);
        }
        
        // 否则使用内置实现
        // 根据前缀查找标签定义和实际标签名
        let tagName = null;
        const tagDefs = this.tag_definitions || {};
        
        // 确保标签前缀格式一致（以冒号结尾）
        const formattedTagPrefix = tagPrefix.endsWith(':') ? tagPrefix : `${tagPrefix}:`;
        
        // 去掉前缀的冒号获取基本标签名
        const baseTagName = formattedTagPrefix.replace(/\s*:\s*$/, '');
        
        // 查找前缀对应的标签名
        for (const [name, def] of Object.entries(tagDefs)) {
            if (def && def.prefix === formattedTagPrefix) {
                tagName = name;
                break;
            }
        }
        
        // 如果未找到标签定义，则使用前缀作为标签名
        if (!tagName) {
            tagName = baseTagName;
        }
        
        // 查找现有标签
        const existingTag = player.tags.find(tag => tag.startsWith(`${tagName}:`) || tag === tagName);
        
        // 获取当前值
        let currentValue = 0;
        if (existingTag) {
            const parts = existingTag.split(":");
            if (parts.length > 1) {
                currentValue = parseInt(parts[1]) || 0;
            }
        }
        
        // 计算新值并限制范围
        const newValue = Math.max(range[0], Math.min(range[1], currentValue + change));
        
        // 过滤掉现有标签并创建新标签列表
        const newTags = player.tags.filter(tag => !(tag === tagName || tag.startsWith(`${tagName}:`)));
        newTags.push(`${tagName}:${newValue}`);
        
        // 返回标准事件结果对象
        return {
            result: resultText,
            effects: {},
            add_tags: newTags,
            remove_tags: existingTag ? [existingTag] : []
        };
    }
};

// 初始化事件索引
eventManager.initializeEventIndex();

// 暴露到全局
window.eventManager = eventManager;