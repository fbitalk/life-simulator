// modules/conditionChecker.js - 条件检查器

import { GAME_CONSTANTS } from './constants.js';

export class ConditionChecker {
    constructor(player) {
        this.player = player;
        // 使用Set优化标签查询性能
        this.tagSet = new Set(player.getAllTags());
        // 缓存常用的计算结果
        this.attributeCache = new Map();
    }
    
    // 检查年龄范围
    checkAgeRange(minAge, maxAge) {
        return this.player.age >= minAge && this.player.age <= maxAge;
    }
    
    // 检查必需标签 - 使用Set.has提高性能
    checkRequiredTags(requiredTags) {
        if (!requiredTags || requiredTags.length === 0) return true;
        
        // 对于单个标签，直接检查而不使用every
        if (requiredTags.length === 1) {
            return this.tagSet.has(requiredTags[0]);
        }
        
        // 对于多个标签，使用every检查
        return requiredTags.every(tag => this.tagSet.has(tag));
    }
    
    // 检查排除标签 - 使用Set.has提高性能
    checkExcludedTags(excludedTags) {
        if (!excludedTags || excludedTags.length === 0) return true;
        
        // 对于单个标签，直接检查而不使用some
        if (excludedTags.length === 1) {
            return !this.tagSet.has(excludedTags[0]);
        }
        
        // 对于多个标签，使用some检查
        return !excludedTags.some(tag => this.tagSet.has(tag));
    }
    
    // 检查属性要求 - 使用缓存减少getAttribute调用
    checkAttributeRequirements(requirements) {
        if (!requirements) return true;
        
        return Object.entries(requirements).every(([attr, value]) => {
            // 检查缓存
            if (!this.attributeCache.has(attr)) {
                this.attributeCache.set(attr, this.player.getAttribute(attr));
            }
            
            const currentValue = this.attributeCache.get(attr);
            return currentValue >= value;
        });
    }
    
    // 优化的检查事件条件函数
    checkEventConditions(conditions) {
        if (!conditions) return true;
        
        // 1. 先检查年龄范围 - 这是最快的检查
        if (conditions.age_range) {
            if (!this.checkAgeRange(conditions.age_range[0], conditions.age_range[1])) {
                return false;
            }
        }
        
        // 2. 然后检查排除标签 - 通常数量较少且只要有一个就可以排除
        if (conditions.excluded_tags && conditions.excluded_tags.length > 0) {
            if (!this.checkExcludedTags(conditions.excluded_tags)) {
                return false;
            }
        }
        
        // 3. 再检查必需标签 - 需要全部匹配
        if (conditions.required_tags && conditions.required_tags.length > 0) {
            if (!this.checkRequiredTags(conditions.required_tags)) {
                return false;
            }
        }
        
        // 4. 最后检查属性要求 - 可能涉及更多计算
        if (!this.checkAttributeRequirements(conditions.min_attributes)) {
            return false;
        }
        
        return true;
    }
    
    // 检查标签条件
    checkTagConditions(tag, conditions) {
        if (!conditions) return true;
        
        // 检查标签是否存在
        if (!this.tagSet.has(tag)) {
            return false;
        }
        
        // 检查标签特定条件
        if (conditions.tag_specific) {
            const tagConditions = conditions.tag_specific[tag];
            if (tagConditions && !this.checkEventConditions(tagConditions)) {
                return false;
            }
        }
        
        return true;
    }
    
    // 检查组合条件
    checkCombinedConditions(conditions) {
        if (!conditions) return true;
        
        // 检查所有条件
        return conditions.every(condition => this.checkEventConditions(condition));
    }
    
    // 清除缓存 - 在玩家属性变化时调用
    clearCache() {
        this.attributeCache.clear();
    }
    
    // 更新标签集合 - 在玩家标签变化时调用
    updateTagSet(tags) {
        this.tagSet = new Set(tags);
    }
} 