
// 黑色标签事件 (轮回记忆)
const blackEvents = {
    "穿越者": {
        "is_black": true,
        "events": {
            "future_knowledge": {
                "title": "未来的记忆",
                "description": "你脑海中闪过一些不属于这个时代的画面。",
                "options": [
                    {
                        "text": "利用知识",
                        "result": "你做出了惊人的发明。",
                        "effects": {
                            "money": 100,
                            "intelligence": 20
                        },
                        "add_tags": [
                            "发明家"
                        ]
                    }
                ]
            }
        }
    },
    "测试标签": {
        "events": {
            "test_event": {
                "title": "新事件",
                "description": "事件描述",
                "trigger_conditions": {
                    "age_range": [
                        0,
                        100
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
        "is_black": true
    },
    "前世记忆": {
        "is_black": true,
        "description": "保留着前世的记忆片段",
        "events": {
            "memory_flash": {
                "title": "记忆闪回",
                "description": "某个场景突然触发了你前世的记忆片段，你感到一阵恍惚。",
                "trigger_conditions": {
                    "age_range": [
                        5,
                        80
                    ]
                },
                "options": [
                    {
                        "text": "努力回忆更多",
                        "result": "你尝试深入探索这段记忆，一些更加清晰的画面浮现在脑海中。",
                        "effects": {
                            "intelligence": 5,
                            "san": -10,
                            "mystery": 15
                        },
                        "add_tags": [
                            "灵异体质"
                        ]
                    },
                    {
                        "text": "忽略这种感觉",
                        "result": "你选择忽略这种奇怪的感觉，继续专注于当前的生活。",
                        "effects": {
                            "san": 5
                        }
                    },
                    {
                        "text": "寻求专业帮助",
                        "result": "你去咨询了一位研究前世记忆的专家。",
                        "effects": {
                            "money": -15,
                            "intelligence": 10,
                            "mystery": 10
                        },
                        "continue_event": "past_life_research"
                    }
                ]
            },
            "past_life_research": {
                "title": "前世探索",
                "description": "专家带你进行了一次催眠回溯，尝试让你更清晰地看到前世的场景。",
                "options": [
                    {
                        "text": "完全配合",
                        "result": "在催眠状态下，你看到了前世的完整画面，这些记忆将永远改变你对人生的看法。",
                        "effects": {
                            "intelligence": 20,
                            "san": -5,
                            "mystery": 30
                        },
                        "add_tags": [
                            "轮回者"
                        ]
                    },
                    {
                        "text": "中途退出",
                        "result": "回溯过程中你感到极度不适，选择中断了催眠。某些记忆碎片却更加清晰了。",
                        "effects": {
                            "intelligence": 5,
                            "mystery": 10
                        }
                    }
                ]
            },
            "deja_vu": {
                "title": "似曾相识",
                "description": "你在一个从未去过的地方，却有强烈的熟悉感，仿佛曾经在前世来过。",
                "trigger_conditions": {
                    "age_range": [
                        10,
                        80
                    ]
                },
                "options": [
                    {
                        "text": "跟随直觉",
                        "result": "你跟随内心的指引，找到了一个隐藏多年的秘密。",
                        "effects": {
                            "luck": 15,
                            "mystery": 20
                        },
                        "add_tags": [
                            "直觉敏锐"
                        ]
                    },
                    {
                        "text": "记录下来",
                        "result": "你详细记录了这种感觉和相关细节，或许将来能找到答案。",
                        "effects": {
                            "intelligence": 8,
                            "mystery": 5
                        }
                    }
                ]
            }
        }
    },
    "诅咒血脉": {
        "is_black": true,
        "description": "携带着无法摆脱的诅咒",
        "events": {
            "curse_manifestation": {
                "title": "诅咒显现",
                "description": "你开始经历一些无法解释的怪异现象，似乎是诅咒的影响。",
                "trigger_conditions": {
                    "age_range": [
                        13,
                        70
                    ]
                },
                "options": [
                    {
                        "text": "寻找驱魔师",
                        "result": "你找到一位古老家族的驱魔师，他试图为你净化诅咒。",
                        "effects": {
                            "money": -30,
                            "mystery": 10
                        },
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "luck": 80
                                    }
                                },
                                "result": "经过神秘仪式，诅咒似乎被暂时抑制了！",
                                "effects": {
                                    "health": 20,
                                    "san": 15
                                },
                                "add_tags": [
                                    "暂时解脱"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "仪式完成后，你感觉没有太大变化。诅咒依然存在。",
                                "effects": {}
                            }
                        ]
                    },
                    {
                        "text": "研究古籍",
                        "result": "你开始研究古老的神秘学文献，寻找关于诅咒的知识。",
                        "effects": {
                            "intelligence": 15,
                            "san": -10,
                            "mystery": 20
                        },
                        "add_tags": [
                            "神秘学者"
                        ]
                    },
                    {
                        "text": "接受命运",
                        "result": "你选择接受这个诅咒，并尝试与它共存。",
                        "effects": {
                            "san": 10,
                            "mystery": 5
                        },
                        "add_tags": [
                            "逆境适应"
                        ]
                    }
                ]
            },
            "curse_worsens": {
                "title": "诅咒加重",
                "description": "随着年龄增长，诅咒的影响变得更加明显和具有破坏性。",
                "trigger_conditions": {
                    "age_range": [
                        30,
                        80
                    ],
                    "required_tags": [
                        "诅咒血脉"
                    ]
                },
                "options": [
                    {
                        "text": "寻找古老神器",
                        "result": "传说中有一件神器可以镇压诅咒，你开始了寻找之旅。",
                        "effects": {
                            "money": -50,
                            "health": -10,
                            "mystery": 25
                        },
                        "continue_event": "artifact_quest"
                    },
                    {
                        "text": "接受命运",
                        "result": "你深深叹了口气，接受了这个无法改变的宿命。",
                        "effects": {
                            "san": -15
                        }
                    }
                ]
            },
            "artifact_quest": {
                "title": "寻找神器",
                "description": "经过长途跋涉，你终于找到了传说中能够镇压诅咒的神器。",
                "options": [
                    {
                        "text": "使用神器",
                        "result": "你按照古籍上的描述使用了神器，一道刺眼的光芒闪过...",
                        "effects": {
                            "health": -20,
                            "mystery": 30
                        },
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "luck": 70,
                                        "mystery": 50
                                    }
                                },
                                "result": "神器的力量成功压制了诅咒！虽然没有完全消除，但影响大大减弱了。",
                                "effects": {
                                    "health": 30,
                                    "san": 25
                                },
                                "add_tags": [
                                    "诅咒镇压"
                                ],
                                "remove_tags": [
                                    "诅咒血脉"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "神器似乎没有传说中那么强大，诅咒依然存在，但你获得了一些有用的知识。",
                                "effects": {
                                    "intelligence": 10,
                                    "mystery": 10
                                }
                            }
                        ]
                    },
                    {
                        "text": "研究神器",
                        "result": "你决定先研究神器的本质，而不是贸然使用它。",
                        "effects": {
                            "intelligence": 20,
                            "mystery": 15
                        },
                        "add_tags": [
                            "谨慎"
                        ]
                    }
                ]
            }
        }
    },
    "不解之谜": {
        "is_black": true,
        "description": "充满着不详的气息，这一点是个不友好的标签",
        "events": {
            "mystery_event": {
                "title": "思维边界",
                "description": "不安和恐惧吞没了你。",
                "trigger_conditions": {
                    "age_range": [
                        1,
                        666
                    ],
                    "max_attributes": {
                        "intelligence": 50
                    }
                },
                "options": [
                    {
                        "text": "继续",
                        "result": "{user}继续前进。",
                        "effects": {
                            "health": -10,
                            "san": -10
                        }
                    }
                ],
                "allow_repeat": true,
                "priority": 0,
                "is_continue": false
            },
            "young_man_talk_choice": {
                "title": "作者调查",
                "description": "你看到一个年轻人，你感觉似曾相识，走上去，年轻人递给你一张问卷。",
                "trigger_conditions": {
                    "age_range": [
                        80,
                        100
                    ],
                    "min_attributes": {
                        "money": 1000
                    },
                    "required_tags": [
                        "不解之谜"
                    ]
                },
                "options": [
                    {
                        "text": "继续",
                        "result": "你答应了年轻人的请求，年轻人非常高兴。",
                        "continue_event": "author_survey_2"
                    },
                    {
                        "text": "无视",
                        "result": "{user}不理睬年轻人"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "author_survey_2": {
                "title": "作者调查",
                "description": "{user}接过问卷，发现是作者的调查问卷。{user}开始填写问卷,通通填十分满意，直到最后，有一个对作者说的话，{user}填了_。",
                "is_continue": true,
                "options": [
                    {
                        "text": "十分满意",
                        "result": "{user}填写了问卷，非常满意。",
                        "effects": {
                            "social": 10,
                            "intelligence": 10
                        }
                    },
                    {
                        "text": "不满意",
                        "result": "{user}填写了问卷，非常不满意。",
                        "effects": {
                            "social": -10,
                            "intelligence": -10
                        }
                    },
                    {
                        "text": "太无聊了",
                        "result": "{user}填写了问卷，非常不满意。",
                        "effects": {
                            "social": -10,
                            "intelligence": -10
                        }
                    },
                    {
                        "text": "傻逼小广告",
                        "result": "{user}对发传单破口大骂。",
                        "effects": {
                            "social": -10,
                            "intelligence": -10
                        },
                        "add_tags": [
                            "地狱模式"
                        ]
                    },
                    {
                        "text": "不错",
                        "result": "{user}对游戏作者大加赞赏。",
                        "effects": {
                            "health": 10,
                            "san": 10
                        },
                        "remove_tags": [
                            "不解之谜"
                        ]
                    }
                ],
                "priority": 0,
                "trigger_conditions": {}
            }
        }
    },
    "时间旅行者": {
        "is_black": true,
        "description": "来自未来的时间旅行者",
        "events": {
            "future_knowledge": {
                "title": "未来记忆",
                "description": "你突然回忆起一些尚未发生的事件，这些未来的知识让你感到困惑和恐惧。",
                "trigger_conditions": {
                    "age_range": [
                        15,
                        70
                    ]
                },
                "options": [
                    {
                        "text": "记录预见",
                        "result": "你开始详细记录这些未来的记忆，建立了一个时间线预测系统。",
                        "effects": {
                            "intelligence": 20,
                            "san": -10,
                            "mystery": 25
                        },
                        "add_tags": [
                            "预言家"
                        ]
                    },
                    {
                        "text": "尝试改变未来",
                        "result": "你主动尝试改变一些预见中的事件，看是否能扭转命运。",
                        "effects": {
                            "luck": -10,
                            "mystery": 15
                        },
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "intelligence": 80
                                    }
                                },
                                "result": "经过精心策划，你成功改变了一个小事件！这证明未来并非完全注定。",
                                "effects": {
                                    "san": 20,
                                    "mystery": 20
                                },
                                "add_tags": [
                                    "命运编织者"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "无论你如何尝试，事件似乎总是以接近预见的方式发生，仿佛命运无法改变。",
                                "effects": {
                                    "san": -15
                                },
                                "add_tags": [
                                    "宿命论者"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "寻求同伴",
                        "result": "你开始寻找可能和你有相同经历的其他时间旅行者。",
                        "effects": {
                            "social": -10,
                            "mystery": 20
                        },
                        "continue_event": "time_travelers_meeting"
                    }
                ]
            },
            "time_travelers_meeting": {
                "title": "同伴相逢",
                "description": "在一个隐秘的论坛上，你联系到了其他声称是时间旅行者的人。",
                "options": [
                    {
                        "text": "分享信息",
                        "result": "你们交换了各自的记忆和经历，拼凑出了更完整的未来图景。",
                        "effects": {
                            "intelligence": 15,
                            "social": 10,
                            "mystery": 30
                        },
                        "add_tags": [
                            "时间守护者"
                        ]
                    },
                    {
                        "text": "保持警惕",
                        "result": "你不确定这些人是否可信，选择了有限度地交流。",
                        "effects": {
                            "intelligence": 5,
                            "mystery": 10
                        }
                    }
                ]
            },
            "temporal_anomaly": {
                "title": "时间异常",
                "description": "你经历了一次奇怪的时间异常，几个小时的记忆完全空白。",
                "trigger_conditions": {
                    "age_range": [
                        20,
                        80
                    ],
                    "required_tags": [
                        "时间旅行者"
                    ]
                },
                "options": [
                    {
                        "text": "冥想回忆",
                        "result": "通过深度冥想，你隐约看到了自己在那段时间里穿越到了过去。",
                        "effects": {
                            "san": -10,
                            "mystery": 25
                        },
                        "add_tags": [
                            "时空游离者"
                        ]
                    },
                    {
                        "text": "寻求医疗帮助",
                        "result": "医生无法解释你的症状，但给你开了一些稳定神经的药物。",
                        "effects": {
                            "money": -15,
                            "health": 5
                        },
                        "add_tags": [
                            "被诊断者"
                        ]
                    }
                ]
            }
        }
    }
};

window.blackEvents = blackEvents;
