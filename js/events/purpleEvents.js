
// 紫色标签事件 (固定属性/特殊能力)
const purpleEvents = {
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
    "testttt": {
        "events": {
            "texsw": {
                "title": "新事件",
                "description": "事件描述",
                "trigger_conditions": {
                    "age_range": [
                        0,
                        666
                    ]
                },
                "options": [
                    {
                        "text": "选项1",
                        "result": "结果描述",
                        "effects": {}
                    }
                ]
            }
        },
        "is_purple": true,
        "description": "",
        "fixed_attributes": {
            "luck": 100
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

window.purpleEvents = purpleEvents;
