// 游戏常量定义

// 属性相关常量
const ATTRIBUTES = {
    HEALTH: 'health',       // 健康
    MONEY: 'money',         // 金钱
    SOCIAL: 'social',       // 社交
    INTELLIGENCE: 'intelligence', // 智力
    LUCK: 'luck',           // 幸运
    MYSTERY: 'mystery',      // 神秘
    SAN: 'san',              // 理智
    TEMP: 'temp'             // 临时属性（用于连续事件）
};

// 属性默认值
const DEFAULT_ATTRIBUTES = {
    [ATTRIBUTES.HEALTH]: 50,
    [ATTRIBUTES.MONEY]: 50,
    [ATTRIBUTES.SOCIAL]: 50,
    [ATTRIBUTES.INTELLIGENCE]: 50,
    [ATTRIBUTES.LUCK]: 50,
    [ATTRIBUTES.MYSTERY]: 50,
    [ATTRIBUTES.SAN]: 50,
    [ATTRIBUTES.TEMP]: 0  // 临时属性初始为0
};

// 属性阈值 - 当属性达到这些值时获得对应标签
const ATTRIBUTE_THRESHOLDS = {
    [ATTRIBUTES.HEALTH]: {
        HIGH: { value: 90, tag: "健康" },
        LOW: { value: 30, tag: "体弱多病" }
    },
    [ATTRIBUTES.MONEY]: {
        HIGH: { value: 100, tag: "富有" },
        LOW: { value: 20, tag: "贫困" }
    },
    [ATTRIBUTES.INTELLIGENCE]: {
        HIGH: { value: 80, tag: "聪明" }
    },
    [ATTRIBUTES.SOCIAL]: {
        HIGH: { value: 80, tag: "外向" }
    },
    [ATTRIBUTES.LUCK]: {
        HIGH: { value: 80, tag: "幸运" }
    },
    [ATTRIBUTES.MYSTERY]: {
        HIGH: { value: 90, tag: "高相性" }
    },
    [ATTRIBUTES.SAN]: {
        LOW: { value: 20, tag: "理智过低" }
    }
};

// 年龄段定义
const AGE_GROUPS = {
    INFANT: { name: "幼儿", min: 1, max: 5 },
    CHILD: { name: "少年", min: 6, max: 12 },
    TEENAGER: { name: "青少年", min: 13, max: 18 },
    YOUNG_ADULT: { name: "青年", min: 19, max: 30 },
    ADULT: { name: "中年", min: 31, max: 60 },
    ELDER: { name: "老年", min: 61, max: 110 },
    SUPERHEAR: { name: "超人", min: 111, max: Infinity }
};

// 根据年龄获取年龄段
function getAgeGroup(age) {
    for (const group of Object.values(AGE_GROUPS)) {
        if (age >= group.min && age <= group.max) {
            return group.name;
        }
    }
    return AGE_GROUPS.SUPERHEAR.name; // 默认返回最老的年龄段
}

// 标签类型
const TAG_TYPES = {
    NORMAL: 'normal',     // 普通标签
    RED: 'red',           // 红色标签
    BLACK: 'black',       // 黑色标签（轮回记忆）
    PURPLE: 'purple',     // 紫色标签（固定属性）
    GOLDEN: 'golden',     // 金色标签（成就）
    PINK: 'pink',         // 粉色标签
    AGE: 'age',           // 年龄标签
    ATTRIBUTE: 'attribute' // 属性标签
};

// 游戏默认配置
const GAME_CONFIG = {
    MAX_HEALTH: 100,
    MIN_HEALTH: 0,
    YEARLY_HEALTH_DECREASE_AGE: 60, // 60岁后健康每年下降
    YEARLY_HEALTH_DECREASE_VALUE: 2, // 下降值
    DEATH_CHECK_AGE: 80, // 80岁后每年进行死亡检定
}; 