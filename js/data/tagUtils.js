// js/data/tagUtils.js
// 标签类型识别工具——从 game.js 的 isBlackTag/isRedTag/getTagType 提取
import { getTagInfo } from './tagRegistry.js';

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

/**
 * 获取标签颜色类型。
 * 优先查 tagRegistry（新架构），再查从事件文件提取的集合（旧架构兼容）。
 */
export function getTagType(tag) {
    const info = getTagInfo(tag);
    if (info && info.color && info.color !== 'normal') return info.color;
    if (BLACK_TAGS.has(tag)) return 'black';
    if (PURPLE_TAGS.has(tag)) return 'purple';
    if (RED_TAGS.has(tag)) return 'red';
    if (PINK_TAGS.has(tag)) return 'pink';
    if (GOLDEN_TAGS.has(tag)) return 'golden';
    return 'normal';
}

export function isBlackTag(tag) { return getTagType(tag) === 'black'; }
export function isRedTag(tag) { return getTagType(tag) === 'red'; }
export function isPurpleTag(tag) { return getTagType(tag) === 'purple'; }
export function isPinkTag(tag) { return getTagType(tag) === 'pink'; }
export function isGoldenTag(tag) { return getTagType(tag) === 'golden'; }
