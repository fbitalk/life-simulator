// 紫色标签事件 (固定属性/特殊能力)
export const purpleEvents = {
    "钢铁之躯": {
        "fixed_attributes": {
            "health": 100
        },
        "is_purple": true,
        "events": {
            "gym_accident": {
                "title": "健身房意外",
                "description": "杠铃砸下来了，但你毫发无伤。",
                "options": [
                    {
                        "text": "假装受伤",
                        "result": "为了不被当成怪物。",
                        "effects": {
                            "social": 2
                        }
                    }
                ]
            }
        }
    },
    "命运之子": {
        "events": {},
        "description": "你似乎受到了命运的眷顾。",
        "is_purple": true,
        "fixed_attributes": {
            "luck": 80
        }
    },
    "地狱模式": {
        "events": {},
        "description": "大幅提升游戏难度。",
        "is_purple": true,
        "fixed_attributes": {
            "luck": 10
        }
    }
};