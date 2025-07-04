// purpleEvents.js - 紫色标签事件（稀有的特殊能力）

const purpleEvents = {
    // 天选之人标签事件
    "天选之人": {
        "is_purple": true,
        "description": "你似乎受到了命运的眷顾。",
        // 紫色标签可以有固定属性的效果
        "fixed_attributes": {
            "luck": 80 // 幸运值被永久锁定在80，不受事件影响，直到标签消失
        },
        "events": {
            "fateful_encounter": {
                "title": "命运的邂逅",
                "description": "你偶然遇到了一位改变你一生的贵人。",
                "priority": 30,
                "trigger_conditions": {
                    "required_tags": ["天选之人"],
                    "age_range": [18, 30]
                },
                "options": [
                    {
                        "text": "把握机会",
                        "result": "这次相遇为你打开了新世界的大门。",
                        "effects": { "social": 20, "money": 50 },
                        "add_tags": ["得遇贵人"]
                    },
                    {
                        "text": "保持警惕",
                        "result": "尽管对方看起来很善良，你还是保持了距离。有时过度谨慎会错失良机。",
                        "effects": { "social": -10 }
                    }
                ]
            }
        }
    },
    "地狱模式": {
        "is_purple": true,
        "description": "你拥有常人无法想象的特殊能力。",
        "fixed_attributes": {
            "lucky": 10 // 幸运属性固定为高值
        },
        "events": {
            "border_of_mind": {
                "title": "思维边境",
                "description": "你感到极度不安和恐惧。",
                "trigger_conditions": {
                    "min_attributes": { "intelligence": 75 }
                },
                "options": [
                    {
                        "text": "继续",
                        "result": "你继续前进，但感到极度不安和恐惧。",
                        "effects": { "san": -10, "intelligence": -10 }
                    }
                ]
            }
        },
        "allow_repeat": true,
    },

    // 超能力者标签事件
    "超能力者": {
        "is_purple": true,
        "description": "你拥有常人无法想象的特殊能力。",
        "fixed_attributes": {
            "mystery": 90 // 神秘属性固定为高值
        },
        "events": {
            "power_manifestation": {
                "title": "能力觉醒",
                "description": "今天，你的超能力突然有了新的突破。",
                "priority": 25,
                "trigger_conditions": {
                    "required_tags": ["超能力者"]
                },
                "options": [
                    {
                        "text": "尝试控制新能力",
                        "result": "经过一番努力，你成功地掌握了这种新能力。",
                        "effects": { "intelligence": 20, "san": -10 },
                        "add_tags": ["能力精通"]
                    },
                    {
                        "text": "寻找同类的帮助",
                        "result": "你联系到了其他超能力者，他们帮助你理解并掌握了新能力。",
                        "effects": { "social": 15, "mystery": 10 },
                        "add_tags": ["超能力社区"]
                    }
                ]
            }
        }
    }
};

// 导出紫色标签事件
window.purpleEvents = purpleEvents;
