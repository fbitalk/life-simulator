// modules/tagUtils.js - 标签处理工具函数

const tagUtils = {
    /**
     * 检查条件是否满足
     * @param {Object} player - 玩家对象
     * @param {Object} condition - 条件对象
     * @returns {boolean} 条件是否满足
     */
    checkCondition(player, condition) {
        // 检查 tags 条件
        if (condition.tags && !condition.tags.every(tag => player.tags.includes(tag))) {
            return false;
        }
        
        // 检查 attributes 条件
        if (condition.attributes) {
            for (const [attr, value] of Object.entries(condition.attributes)) {
                if (player[attr] < value) return false;
            }
        }
        
        // 检查 any_of 条件
        if (condition.any_of) {
            if (!condition.any_of.some(cond => this.checkCondition(player, cond))) {
                return false;
            }
        }
        
        // 检查 not 条件
        if (condition.not) {
            if (this.checkCondition(player, condition.not)) {
                return false;
            }
        }
        
        return true;
    },
    
    /**
     * 获取标签定义
     * @param {string} tagName - 标签名称
     * @returns {Object|null} 标签定义对象或 null
     */
    getTagDefinition(tagName) {
        if (!window.eventManager || !window.eventManager.tag_definitions) {
            console.error('Tag definitions not available');
            return null;
        }
        return window.eventManager.tag_definitions.get(tagName);
    },
    
    /**
     * 获取动态标签的当前值
     * @param {Object} player - 玩家对象
     * @param {string} tagPrefix - 标签前缀
     * @returns {number} 标签值，没有找到则返回 0
     */
    getDynamicTagValue(player, tagPrefix) {
        const tag = player.tags.find(t => t.startsWith(tagPrefix));
        if (!tag) return 0;
        
        const parts = tag.split(':');
        if (parts.length < 2) return 0;
        
        return parseInt(parts[1]) || 0;
    }
};

// 暴露给全局
window.tagUtils = tagUtils;
