/**
 * 事件管理器
 * 负责事件的筛选、随机选择和触发
 */
class EventManager {
    constructor() {
        // 收集所有可用事件
        this.allEvents = {
            start: {},  // 开局事件
            common: {}, // 普通标签事件
            red: {},    // 红色标签事件
            black: {},  // 黑色标签事件
            purple: {}, // 紫色标签事件
            pink: {},   // 粉色标签事件
            golden: {}, // 金色标签事件
            age: {},    // 年龄段事件
            attribute: {}, // 属性标签事件
            male: {},   // 男性特有事件
            female: {}  // 女性特有事件
        };
        
        // 加载所有事件
        this.loadEvents();
    }
    
    /**
     * 加载所有事件
     */
    loadEvents() {
        // 从各个文件加载事件定义
        if (typeof startEvents !== 'undefined') {
            this.allEvents.start = startEvents;
        }
        
        if (typeof commonEvents !== 'undefined') {
            this.allEvents.common = commonEvents;
        }
        
        if (typeof redEvents !== 'undefined') {
            this.allEvents.red = redEvents;
        }
        
        if (typeof blackEvents !== 'undefined') {
            this.allEvents.black = blackEvents;
        }
        
        if (typeof purpleEvents !== 'undefined') {
            this.allEvents.purple = purpleEvents;
        }
        
        if (typeof pinkEvents !== 'undefined') {
            this.allEvents.pink = pinkEvents;
        }
        
        if (typeof goldEvents !== 'undefined') {
            this.allEvents.golden = goldEvents;
        }
        
        if (typeof ageEvents !== 'undefined') {
            this.allEvents.age = ageEvents;
        }
        
        if (typeof maleEvents !== 'undefined') {
            this.allEvents.male = maleEvents;
        }
        
        if (typeof femaleEvents !== 'undefined') {
            this.allEvents.female = femaleEvents;
        }
        if (typeof attributeEvents !== 'undefined') {
            this.allEvents.attribute = attributeEvents;
        }
        console.log("事件管理器已加载所有事件");
    }
    
    /**
     * 获取开局事件
     * @returns {Object} 随机选择的开局事件
     */
    getStartEvent() {
        // 筛选有效的开局事件
        const validEvents = Object.entries(this.allEvents.start || {});
        
        if (validEvents.length === 0) {
            return this.createDefaultEvent("出生", "你出生了。", [{
                text: "哇哇哇",
                result: "你来到了这个世界。",
                effects: {},
                add_tags: ["普通出生"]
            }]);
        }
        
        // 随机选择一个开局事件
        const [eventId, event] = this.getRandomEvent(validEvents);
        return { id: eventId, ...event };
    }
    
    /**
     * 根据玩家当前状态获取合适的事件
     * @param {Object} player - 玩家对象
     * @returns {Object} 筛选后的事件对象
     */
    getEventForPlayer(player) {
        // 收集所有与玩家标签相关的事件
        let candidateEvents = [];
        
        // 检查玩家的所有标签，查找相关事件
        for (const tag of player.tags) {
            // 根据标签类型查找不同类别的事件
            let tagEvents = this.getEventsByTag(tag, player);
            if (tagEvents.length > 0) {
                candidateEvents = candidateEvents.concat(tagEvents);
            }
        }
        
        // 注：不再通过性别直接查找事件，而是通过"男性"或"女性"标签触发
        
        // 检查年龄段标签
        const ageGroup = getAgeGroup(player.age);
        const ageEvents = this.getEventsByAgeGroup(ageGroup, player);
        candidateEvents = candidateEvents.concat(ageEvents);
        
        // 获取玩家已经触发过的事件ID列表
        const triggeredEventIds = player.history.map(entry => entry.eventId);
        
        // 排除已经触发过的事件，默认事件除外
        candidateEvents = candidateEvents.filter(([eventId, event]) => {
            // 如果是默认事件或者有特殊标记允许重复触发，则不排除
            const isDefaultEvent = eventId.includes('default') || event.allowRepeat;
            // 如果不在已触发事件列表中或者是默认事件，则保留
            return !triggeredEventIds.includes(eventId) || isDefaultEvent;
        });
        
        // 如果没有找到任何合适的事件，返回默认事件，并标记为自动跳过
        if (candidateEvents.length === 0) {
            return this.createDefaultEvent("平静的一年", 
                `${player.age}岁这一年，你的生活平静无波。`, 
                [{ text: "继续前进", result: "时光流逝...", effects: {} }],
                true); // 添加auto_skip参数标记
        }
        
        // 根据优先级分组事件
        const eventsByPriority = this.groupEventsByPriority(candidateEvents);
        
        // 获取最高优先级
        const highestPriority = Math.max(...Object.keys(eventsByPriority).map(Number));
        
        // 从最高优先级的事件中随机选择一个
        const selectedEvent = this.getRandomEvent(eventsByPriority[highestPriority]);
        return { id: selectedEvent[0], ...selectedEvent[1] };
    }
    
    /**
     * 根据标签获取相关事件
     * @param {String} tag - 标签名称
     * @param {Object} player - 玩家对象
     * @returns {Array} 满足条件的事件列表 [eventId, event]
     */
    getEventsByTag(tag, player) {
        let result = [];
        
        // 检查普通标签事件
        if (this.allEvents.common[tag] && this.allEvents.common[tag].events) {
            Object.entries(this.allEvents.common[tag].events).forEach(([eventId, event]) => {
                // 排除标记为连续事件的事件
                if (!event.is_continue && this.checkEventConditions(event, player)) {
                    result.push([eventId, event]);
                }
            });
        }
        
        // 检查红色标签事件
        if (this.allEvents.red[tag] && this.allEvents.red[tag].events) {
            Object.entries(this.allEvents.red[tag].events).forEach(([eventId, event]) => {
                // 排除标记为连续事件的事件
                if (!event.is_continue && this.checkEventConditions(event, player)) {
                    result.push([eventId, event]);
                }
            });
        }
        
        // 检查黑色标签事件
        if (this.allEvents.black[tag] && this.allEvents.black[tag].events) {
            Object.entries(this.allEvents.black[tag].events).forEach(([eventId, event]) => {
                // 排除标记为连续事件的事件
                if (!event.is_continue && this.checkEventConditions(event, player)) {
                    result.push([eventId, event]);
                }
            });
        }
        
        // 检查紫色标签事件
        if (this.allEvents.purple[tag] && this.allEvents.purple[tag].events) {
            Object.entries(this.allEvents.purple[tag].events).forEach(([eventId, event]) => {
                // 排除标记为连续事件的事件
                if (!event.is_continue && this.checkEventConditions(event, player)) {
                    result.push([eventId, event]);
                }
            });
        }
        
        // 检查粉色标签事件
        if (this.allEvents.pink[tag] && this.allEvents.pink[tag].events) {
            Object.entries(this.allEvents.pink[tag].events).forEach(([eventId, event]) => {
                // 排除标记为连续事件的事件
                if (!event.is_continue && this.checkEventConditions(event, player)) {
                    result.push([eventId, event]);
                }
            });
        }
        
        // 检查男性标签事件
        if (tag === "男性" && this.allEvents.male) {
            Object.entries(this.allEvents.male).forEach(([eventId, event]) => {
                // 排除标记为连续事件的事件
                if (!event.is_continue && this.checkEventConditions(event, player)) {
                    result.push([eventId, event]);
                }
            });
        }
        
        // 检查女性标签事件
        if (tag === "女性" && this.allEvents.female) {
            Object.entries(this.allEvents.female).forEach(([eventId, event]) => {
                // 排除标记为连续事件的事件
                if (!event.is_continue && this.checkEventConditions(event, player)) {
                    result.push([eventId, event]);
                }
            });
        }
        
        return result;
    }
    
    /**
     * 根据年龄段获取事件
     * @param {String} ageGroup - 年龄段名称
     * @param {Object} player - 玩家对象
     * @returns {Array} 满足条件的事件列表 [eventId, event]
     */
    getEventsByAgeGroup(ageGroup, player) {
        let result = [];
        
        if (this.allEvents.age[ageGroup]) {
            Object.entries(this.allEvents.age[ageGroup]).forEach(([eventId, event]) => {
                // 排除标记为连续事件的事件
                if (!event.is_continue && this.checkEventConditions(event, player)) {
                    result.push([eventId, event]);
                }
            });
        }
        
        return result;
    }
    
    /**
     * 检查事件触发条件是否满足
     * @param {Object} event - 事件对象
     * @param {Object} player - 玩家对象
     * @returns {Boolean} 是否满足触发条件
     */
    checkEventConditions(event, player) {
        if (!event.trigger_conditions) {
            return true; // 没有条件就视为满足
        }
        
        const conditions = event.trigger_conditions;
        
        // 检查年龄范围
        if (conditions.age_range) {
            const [min, max] = conditions.age_range;
            if (player.age < min || player.age > max) {
                return false;
            }
        }
        
        // 检查最低属性要求
        if (conditions.min_attributes) {
            for (const [attr, value] of Object.entries(conditions.min_attributes)) {
                if ((player.attributes[attr] || 0) < value) {
                    return false;
                }
            }
        }
        
        // 检查最高属性限制
        if (conditions.max_attributes) {
            for (const [attr, value] of Object.entries(conditions.max_attributes)) {
                if ((player.attributes[attr] || 0) > value) {
                    return false;
                }
            }
        }
        
        // 检查必需的标签
        if (conditions.required_tags) {
            for (const tag of conditions.required_tags) {
                if (!player.tags.includes(tag)) {
                    return false;
                }
            }
        }
        
        // 检查排除的标签
        if (conditions.excluded_tags) {
            for (const tag of conditions.excluded_tags) {
                if (player.tags.includes(tag)) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    /**
     * 根据优先级对事件进行分组
     * @param {Array} events - 事件列表
     * @returns {Object} 按优先级分组的事件
     */
    groupEventsByPriority(events) {
        const eventsByPriority = {};
        
        events.forEach(([eventId, event]) => {
            const priority = event.priority || 0; // 默认优先级为0
            
            if (!eventsByPriority[priority]) {
                eventsByPriority[priority] = [];
            }
            
            eventsByPriority[priority].push([eventId, event]);
        });
        
        return eventsByPriority;
    }
    
    /**
     * 处理选项的条件结果
     * @param {Object} option - 选项对象
     * @param {Object} player - 玩家对象
     * @returns {Object} 处理后的结果对象
     */
    processOptionResult(option, player) {
        // 如果有条件结果，检查条件
        if (option.conditional_results && option.conditional_results.length > 0) {
            for (const condResult of option.conditional_results) {
                if (condResult.conditions.default || this.checkEventConditions({ 
                    trigger_conditions: condResult.conditions 
                }, player)) {
                    // 返回第一个满足条件的结果
                    return {
                        result: condResult.result,
                        effects: condResult.effects || {},
                        add_tags: condResult.add_tags || [],
                        remove_tags: condResult.remove_tags || [],
                        continue_event: condResult.continue_event
                    };
                }
            }
        }
        
        // 没有条件或没有满足条件的结果，返回基本选项
        return {
            result: option.result,
            effects: option.effects || {},
            add_tags: option.add_tags || [],
            remove_tags: option.remove_tags || [],
            continue_event: option.continue_event
        };
    }
    
    /**
     * 从事件列表中随机选择一个
     * @param {Array} events - 事件列表 [eventId, event]
     * @returns {Array} 选择的事件 [eventId, event]
     */
    getRandomEvent(events) {
        if (!events || events.length === 0) {
            return null;
        }
        
        // 计算总权重
        const totalWeight = events.reduce((sum, [_, event]) => {
            return sum + (event.weight || 1); // 默认权重为1
        }, 0);
        
        // 随机选择一个事件
        let randomWeight = Math.random() * totalWeight;
        let currentWeight = 0;
        
        for (const event of events) {
            currentWeight += event[1].weight || 1;
            if (randomWeight < currentWeight) {
                return event;
            }
        }
        
        // 如果没有选到，返回第一个事件
        return events[0];
    }
    
    /**
     * 创建默认事件
     * @param {String} title - 事件标题
     * @param {String} description - 事件描述
     * @param {Array} options - 事件选项
     * @param {Boolean} auto_skip - 是否自动跳过
     * @returns {Object} 事件对象
     */
    createDefaultEvent(title, description, options, auto_skip = false) {
        return {
            title,
            description,
            options,
            is_default_event: true, // 添加标识，表示这是一个默认事件
            auto_skip
        };
    }
    
    /**
     * 获取连续事件
     * @param {String} eventId - 事件ID
     * @returns {Object} 事件对象
     */
    getContinuationEvent(eventId) {
        // 查找所有事件集合中的指定ID事件
        for (const category of Object.values(this.allEvents)) {
            if (typeof category === 'object') {
                // 如果是一级对象（如男/女性事件）
                if (category[eventId]) {
                    return { id: eventId, ...category[eventId] };
                }
                
                // 搜索二级对象（如标签事件）
                for (const tagEvents of Object.values(category)) {
                    if (tagEvents && tagEvents.events && tagEvents.events[eventId]) {
                        return { id: eventId, ...tagEvents.events[eventId] };
                    }
                }
            }
        }
        
        // 如果找不到连续事件，返回一个默认事件
        return this.createDefaultEvent("意外情况", 
            "系统找不到指定的后续事件，这可能是一个错误。", 
            [{ text: "继续", result: "你继续前进...", effects: {} }]);
    }
}

// 创建事件管理器全局实例
const eventManager = new EventManager(); 