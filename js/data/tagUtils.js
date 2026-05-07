// js/data/tagUtils.js
// 标签类型识别工具——从 game.js 的 isBlackTag/isRedTag/getTagType 提取

const PURPLE_TAGS = new Set([]);
const BLACK_TAGS = new Set([]);
const RED_TAGS = new Set([]);
const PINK_TAGS = new Set([]);
const GOLDEN_TAGS = new Set([]);

/**
 * 从 eventManager.allEvents 中提取各颜色标签名，填充到集合中。
 * 由 GameController 在 EventManager 初始化后调用。
 */
export function initTagSets(eventManager) {
    const colorMap = {
        'red': RED_TAGS,
        'black': BLACK_TAGS,
        'purple': PURPLE_TAGS,
        'pink': PINK_TAGS,
        'golden': GOLDEN_TAGS
    };

    for (const [cat, tagSet] of Object.entries(colorMap)) {
        const data = eventManager.allEvents[cat];
        if (!data) continue;
        for (const tagName of Object.keys(data)) {
            tagSet.add(tagName);
        }
    }
}

export function getTagType(tag) {
    if (BLACK_TAGS.has(tag)) return 'black';
    if (PURPLE_TAGS.has(tag)) return 'purple';
    if (RED_TAGS.has(tag)) return 'red';
    if (PINK_TAGS.has(tag)) return 'pink';
    if (GOLDEN_TAGS.has(tag)) return 'golden';
    return 'normal';
}

export function isBlackTag(tag) { return BLACK_TAGS.has(tag); }
export function isRedTag(tag) { return RED_TAGS.has(tag); }
export function isPurpleTag(tag) { return PURPLE_TAGS.has(tag); }
export function isPinkTag(tag) { return PINK_TAGS.has(tag); }
export function isGoldenTag(tag) { return GOLDEN_TAGS.has(tag); }
