// js/data/tagRegistry.js
// 标签注册中心——统一管理标签的颜色、固定属性、特殊效果
// 实现了"标签颜色作为通用属性"的架构设计

const registry = {};

/**
 * 注册单个标签的属性
 * @param {string} tagName - 标签名
 * @param {Object} properties - { color?, fixed_attributes?, immortal?, description? }
 *   - color: 'normal' | 'red' | 'black' | 'purple' | 'pink' | 'golden'
 *   - fixed_attributes: { attr: value, ... } — 锁定某些属性值为固定值（类似紫色标签效果）
 *   - immortal: boolean — 是否免疫60岁健康衰减和80岁死亡检定
 */
export function registerTag(tagName, properties) {
    if (!registry[tagName]) {
        registry[tagName] = { color: 'normal', ...properties };
    } else {
        Object.assign(registry[tagName], properties);
    }
}

/**
 * 批量注册标签
 * @param {Object} tagDefinitions - { tagName: properties, ... }
 */
export function registerTags(tagDefinitions) {
    for (const [tagName, props] of Object.entries(tagDefinitions)) {
        registerTag(tagName, props);
    }
}

/**
 * 获取标签的完整属性信息
 */
export function getTagInfo(tagName) {
    return registry[tagName] || null;
}

/**
 * 获取标签颜色类型
 */
export function getTagColor(tagName) {
    const info = registry[tagName];
    return info ? info.color : null;
}

/**
 * 获取标签的固定属性映射（紫色标签效果）
 */
export function getFixedAttributes(tagName) {
    const info = registry[tagName];
    return info && info.fixed_attributes ? info.fixed_attributes : null;
}

/**
 * 检查标签是否赋予永生（免于衰老死亡）
 */
export function isImmortalTag(tagName) {
    const info = registry[tagName];
    return info && info.immortal === true;
}

/**
 * 获取所有已注册的标签名
 */
export function getAllRegisteredTags() {
    return Object.keys(registry);
}
