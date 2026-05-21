// js/core/eventManager.js
// 事件管理器——负责事件的筛选、随机选择和触发
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
import { registerAllDbrsEvents } from '../events/dbrs/index.js';

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
            attribute: {},
            dbrs: {}
        };
        registerAllDbrsEvents(this);
    }

    /**
     * 注册 dbrs 事件（从故事线文件导入）
     * 深度合并——同一标签下的事件会合并而非覆盖
     * @param {Object} eventsData - 事件数据对象 { "TagName": { events: {...} }, ... }
     */
    registerDbrsEvents(eventsData) {
        for (const [tag, tagData] of Object.entries(eventsData)) {
            if (!this.allEvents.dbrs[tag]) {
                this.allEvents.dbrs[tag] = { events: {} };
            }
            if (tagData.events) {
                Object.assign(this.allEvents.dbrs[tag].events, tagData.events);
            }
            // 合并标签级别的属性（如 fixed_attributes, is_color 等）
            for (const [key, val] of Object.entries(tagData)) {
                if (key !== 'events') {
                    this.allEvents.dbrs[tag][key] = val;
                }
            }
        }
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
        const categories = ['common', 'red', 'black', 'purple', 'pink', 'golden', 'male', 'female', 'attribute', 'age', 'dbrs'];
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
        const categories = ['common', 'red', 'black', 'purple', 'pink', 'golden', 'male', 'female', 'attribute', 'age', 'dbrs'];
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
