
// 普通标签事件 (绿色标签，含属性标签)
const commonEvents = {
    "富有": {
        "events": {
            "rich_party": {
                "title": "豪门聚会",
                "description": "家里举办了一场盛大的晚宴。",
                "options": [
                    {
                        "text": "结交名流",
                        "result": "你认识了不少有用的人。",
                        "effects": {
                            "social": 10,
                            "money": -5
                        }
                    }
                ]
            }
        }
    },
    "聪明": {
        "events": {
            "math_contest": {
                "title": "数学竞赛",
                "description": "老师推荐你去参加数学竞赛。",
                "options": [
                    {
                        "text": "参加",
                        "result": "即使题目很难，你也游刃有余。",
                        "effects": {
                            "intelligence": 5,
                            "social": 2,
                            "san": -2
                        },
                        "add_tags": [
                            "数学天才"
                        ]
                    }
                ]
            }
        }
    },
    "乖宝宝": {
        "events": {
            "teacher_praise": {
                "title": "老师的表扬",
                "description": "因为表现乖巧，老师当众表扬了你。",
                "options": [
                    {
                        "text": "害羞",
                        "result": "同学们都投来羡慕的目光。",
                        "effects": {
                            "social": 5,
                            "san": 5
                        }
                    }
                ]
            }
        }
    },
    "穷人的孩子早当家": {
        "description": "因为家庭条件不好，从小就要帮忙分担家务 or 打工。",
        "events": {
            "help_parents_work": {
                "title": "帮父母工作",
                "description": "父母工作很辛苦，但收入有限，你想帮他们分担一些。",
                "priority": 10,
                "trigger_conditions": {
                    "age_range": [
                        8,
                        16
                    ]
                },
                "options": [
                    {
                        "text": "利用课余时间打零工",
                        "result": "你找了一份发传单的工作，虽然辛苦，但能够贴补家用。",
                        "effects": {
                            "money": 5,
                            "health": -5,
                            "intelligence": -5,
                            "social": 5
                        },
                        "add_tags": [
                            "勤劳"
                        ]
                    },
                    {
                        "text": "专注学业，争取考上好大学改变命运",
                        "result": "你决定现在专心学习，将来考上好大学，彻底改变家庭状况。",
                        "effects": {
                            "intelligence": 10,
                            "health": -3
                        },
                        "add_tags": [
                            "学霸"
                        ]
                    },
                    {
                        "text": "偷偷去网吧赚钱",
                        "result": "你开始帮网吧老板跑腿，结交了一些社会人士。",
                        "effects": {
                            "money": 3,
                            "health": -3,
                            "intelligence": -5,
                            "social": 10
                        },
                        "add_tags": [
                            "街头智慧"
                        ]
                    }
                ]
            },
            "frugal_living": {
                "title": "节俭生活",
                "description": "家里的经济状况不好，你学会了节省花销。",
                "trigger_conditions": {
                    "age_range": [
                        7,
                        18
                    ]
                },
                "options": [
                    {
                        "text": "学会精打细算",
                        "result": "你开始计划每一分钱的花销，甚至帮家里记账。",
                        "effects": {
                            "intelligence": 5,
                            "social": -5
                        },
                        "add_tags": [
                            "精明"
                        ]
                    },
                    {
                        "text": "寻找免费娱乐",
                        "result": "你发现了很多不花钱也能玩得开心的方式，比如在图书馆看书。",
                        "effects": {
                            "intelligence": 8,
                            "health": 3
                        },
                        "add_tags": [
                            "爱读书"
                        ]
                    }
                ]
            }
        }
    },
    "学霸": {
        "description": "在学业上表现出色的人",
        "events": {
            "academic_competition": {
                "title": "学科竞赛",
                "description": "老师推荐你参加一个重要的学科竞赛。",
                "trigger_conditions": {
                    "age_range": [
                        10,
                        18
                    ],
                    "min_attributes": {
                        "intelligence": 70
                    }
                },
                "options": [
                    {
                        "text": "全力准备比赛",
                        "result": "你日以继夜地复习备战，最终在比赛中获得了优异的成绩。",
                        "effects": {
                            "intelligence": 10,
                            "health": -5
                        },
                        "add_tags": [
                            "竞赛获奖者"
                        ]
                    },
                    {
                        "text": "婉拒参赛",
                        "result": "你决定专注于学校课程，没有参加竞赛。",
                        "effects": {
                            "intelligence": 3
                        },
                        "remove_tags": [
                            "学霸"
                        ]
                    }
                ]
            },
            "peer_study": {
                "title": "同学求助",
                "description": "有同学向你请教学习问题。",
                "is_continue": true,
                "options": [
                    {
                        "text": "耐心教导",
                        "result": "你花时间帮助同学解决问题，自己的理解也更深入了。",
                        "effects": {
                            "intelligence": 5,
                            "social": 8
                        },
                        "add_tags": [
                            "乐于助人"
                        ]
                    },
                    {
                        "text": "敷衍了事",
                        "result": "你随便应付了几句，同学们对你的印象变差了。",
                        "effects": {
                            "social": -10
                        }
                    },
                    {
                        "text": "收费辅导",
                        "result": "你提出收费帮助同学，开始了小型家教业务。",
                        "effects": {
                            "money": 10,
                            "intelligence": 3,
                            "social": -5
                        },
                        "add_tags": [
                            "精明商人"
                        ]
                    }
                ]
            }
        }
    },
    "富二代": {
        "description": "出生于富裕家庭的孩子",
        "events": {
            "luxury_trip": {
                "title": "奢华旅行",
                "description": "父母计划带你去一个昂贵的度假胜地。",
                "trigger_conditions": {
                    "age_range": [
                        8,
                        20
                    ]
                },
                "options": [
                    {
                        "text": "享受旅行",
                        "result": "你在豪华度假村度过了一段美好时光，结交了一些有钱人家的孩子。",
                        "effects": {
                            "health": 5,
                            "social": 10,
                            "money": -10
                        },
                        "add_tags": [
                            "见多识广"
                        ]
                    },
                    {
                        "text": "建议做慈善",
                        "result": "你提议家人不要过度消费，而是将一部分钱捐给慈善机构。",
                        "effects": {
                            "social": 5,
                            "luck": 5,
                            "money": -5
                        },
                        "add_tags": [
                            "善心人士"
                        ]
                    }
                ]
            },
            "rich_kid_bullying": {
                "title": "富家子弟的烦恼",
                "description": "有同学因为嫉妒你的家境而在背后说闲话。",
                "trigger_conditions": {
                    "age_range": [
                        8,
                        18
                    ]
                },
                "options": [
                    {
                        "text": "低调处理",
                        "result": "你选择不与他们计较，保持低调。",
                        "effects": {
                            "social": -5,
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "挥金如土展示实力",
                        "result": "你大手笔消费，请全班吃饭，让那些人闭嘴。",
                        "effects": {
                            "money": -20,
                            "social": 10
                        },
                        "add_tags": [
                            "挥霍无度"
                        ]
                    },
                    {
                        "text": "与他们对质",
                        "result": "你直接找到那些说闲话的人，当面对质，结果发生了争执。",
                        "effects": {
                            "health": -5,
                            "social": -10
                        },
                        "add_tags": [
                            "火爆脾气"
                        ]
                    }
                ]
            }
        }
    },
    "书香门第": {
        "description": "来自知识分子家庭",
        "events": {
            "family_education": {
                "title": "家庭教育",
                "description": "每天晚上，父母都会辅导你学习，讨论各种知识。",
                "trigger_conditions": {
                    "age_range": [
                        7,
                        15
                    ]
                },
                "options": [
                    {
                        "text": "专心学习",
                        "result": "你珍惜这些学习时光，知识储备比同龄人丰富很多。",
                        "effects": {
                            "intelligence": 15,
                            "social": -5
                        },
                        "add_tags": [
                            "知识渊博"
                        ]
                    },
                    {
                        "text": "反抗家长安排",
                        "result": "你开始厌倦每天被逼着学习，与父母产生了一些矛盾。",
                        "effects": {
                            "intelligence": 5,
                            "health": 5,
                            "social": -10
                        },
                        "add_tags": [
                            "叛逆"
                        ]
                    }
                ]
            }
        }
    },
    "学生": {
        "description": "喜欢做作业的孩子",
        "events": {
            "middle_school": {
                "title": "步入初中",
                "description": "学业压力变大了，但这也是青春的开始。",
                "priority": 10,
                "trigger_conditions": {
                    "age_range": [
                        12,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "努力奋斗",
                        "result": "为了考上好高中而努力。",
                        "effects": {
                            "intelligence": 8,
                            "san": -5
                        }
                    },
                    {
                        "text": "享受青春",
                        "result": "{user}的学习态度是年轻就该放手去玩。"
                    }
                ],
                "is_continue": false,
                "allow_repeat": false
            },
            "classroom_physics_wings": {
                "title": "课堂：物理课",
                "description": "高三毕业了，他考上了国内的一所大学，而她则选择了出国。不得不面对的离别。在北京机场，两人深情相拥，依依不舍。他默默注视着载她的飞机越飞越高、越飞越远……忽然，他发现飞机航行方向由西向东，且地磁场磁感线方向由南向北，问：飞机左翼势能高还是右翼势能高？",
                "trigger_conditions": {
                    "age_range": [
                        15,
                        22
                    ],
                    "required_tags": [
                        "学生"
                    ]
                },
                "options": [
                    {
                        "text": "不懂",
                        "result": "{user}仰天长叹，物理还是太难了。"
                    },
                    {
                        "text": "一样",
                        "result": "你相信物理是公平的，无论左翼还是右翼都一样高。"
                    },
                    {
                        "text": "左",
                        "result": "你给出了标准答案，物理老师欣慰地点了点头。",
                        "effects": {
                            "intelligence": 6
                        }
                    },
                    {
                        "text": "右",
                        "result": "自信地选择了右翼，结果被物理老师请去黑板推公式。",
                        "effects": {
                            "san": -3
                        }
                    },
                    {
                        "text": "这个得看缘分",
                        "result": "你发现世界万物都离不开玄学。"
                    },
                    {
                        "text": "这个男的是注孤生吧",
                        "result": "感叹这个物理故事，原来考学才是人生主线。"
                    }
                ],
                "priority": 0,
                "is_continue": false,
                "allow_repeat": false
            },
            "classroom_math_error": {
                "title": "课堂：算术课",
                "description": "小华买了1支铅笔、2块橡皮、2个练习本，付了1元钱，售货员找给他5分钱。小华看了看1支铅笔的价钱是8分，请问售货员是否算错账了？",
                "trigger_conditions": {
                    "age_range": [
                        6,
                        12
                    ],
                    "required_tags": [
                        "学生"
                    ]
                },
                "options": [
                    {
                        "text": "条件不足此题无解",
                        "result": "你果断选择了放弃，这题是真的搞不懂。"
                    },
                    {
                        "text": "虽不明但觉错",
                        "result": "凭第六感觉得不对劲，但又说不上来哪错。"
                    },
                    {
                        "text": "我不屑做这种题目",
                        "result": "以下犯上，直接被老师请出了教室。",
                        "effects": {
                            "san": 2
                        }
                    },
                    {
                        "text": "明显算错了，一支铅笔都要2元了，小华真是",
                        "result": "你果断揭穿了坑娃的售货员，成了班上的小英雄。",
                        "effects": {
                            "social": 5,
                            "intelligence": 3
                        }
                    },
                    {
                        "text": "我觉得没错",
                        "result": "或许真没错？反正老师也算不明白。"
                    },
                    {
                        "text": "并不能证明算错",
                        "result": "严谨地说，需要再给出练习本或橡皮的单价。"
                    },
                    {
                        "text": "算错了，我一眼就看出来了",
                        "result": "数学天赋爆棚，获得大家崇拜的目光。",
                        "effects": {
                            "intelligence": 8
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false,
                "allow_repeat": false
            },
            "classroom_dance_class": {
                "title": "课堂：舞蹈课",
                "description": "舞蹈课上播放__的歌的时候，{user}就跳得很起劲。",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "黑乐谱",
                        "result": "{user}跳起了神秘的舞蹈。"
                    },
                    {
                        "text": "儿歌",
                        "result": "{user}跳起了可爱的舞蹈。"
                    },
                    {
                        "text": "爵士",
                        "result": "{user}跳起了优雅的爵士。"
                    },
                    {
                        "text": "流行歌",
                        "result": "{user}跳起了动感的流行舞。"
                    },
                    {
                        "text": "《义勇军进行曲》",
                        "result": "{user}肃然起敬。"
                    },
                    {
                        "text": "毒药",
                        "result": "{user}跳起了魔性的舞蹈。"
                    },
                    {
                        "text": "无法天女主题曲",
                        "result": "{user}华丽变身。"
                    },
                    {
                        "text": "PPAP",
                        "result": "{user}：I have a pen, I have an apple..."
                    },
                    {
                        "text": "烤面筋",
                        "result": "{user}：香香的口味，你吃过没？"
                    },
                    {
                        "text": "逐梦演艺圈",
                        "result": "{user}：圈圈圈圈圈圈圈圈..."
                    },
                    {
                        "text": "《Lost Rivers》",
                        "result": "{user}跳起了让人无法直视的舞蹈。"
                    },
                    {
                        "text": "《Tunak Tunak Tun》",
                        "result": "Tunak Tunak Tun Da Da Da..."
                    }
                ]
            },
            "classroom_english_pronunciation": {
                "title": "课堂：英语课",
                "description": "与 Unit three 发音最相似的是__",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "要捏碎",
                        "result": "{user}选择了“要捏碎”，老师陷入了深刻的自我怀疑。"
                    },
                    {
                        "text": "有滴树",
                        "result": "{user}选择了“有滴树”，发音确实有那么几分神似。"
                    },
                    {
                        "text": "油腻水",
                        "result": "{user}选择了“油腻水”，这发音听起来确实很油腻。"
                    },
                    {
                        "text": "怎么还没下课啊",
                        "result": "{user}的心思已经完全不在课堂上了。"
                    }
                ]
            },
            "classroom_chemistry_fire": {
                "title": "课堂：化学课",
                "description": "化学课上，烧杯里的化学试剂忽然燃烧了起来，{user}__",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        12,
                        18
                    ]
                },
                "options": [
                    {
                        "text": "拍照并发微博",
                        "result": "{user}发了条微博，获得了不少点赞，但也收到了学校的处分。"
                    },
                    {
                        "text": "寻找灭火器",
                        "result": "{user}成功找到了灭火器并将火扑灭，成为了班级英雄。"
                    },
                    {
                        "text": "把试剂倒掉",
                        "result": "{user}试图倒掉试剂，结果差点烧到自己，引火烧身。"
                    },
                    {
                        "text": "翻书找灭火方法",
                        "result": "{user}还在慢悠悠翻书的时候，火已经被老师扑灭了。"
                    }
                ]
            },
            "classroom_chinese_doodle": {
                "title": "课堂：语文课",
                "description": "在无聊的语文课上，{user}在书上写着什么，原来他__",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        18
                    ]
                },
                "options": [
                    {
                        "text": "把孔子涂鸦成了皮卡丘",
                        "result": "{user}的创作让周围的同学惊叹不已，但也因此被罚站了。"
                    },
                    {
                        "text": "给杜甫加上非主流头发",
                        "result": "{user}展示了艺术天分，杜甫看起来更有个性和时尚了。"
                    },
                    {
                        "text": "在划重点",
                        "result": "{user}在认真学习，老师感到了莫大的欣慰。"
                    }
                ]
            },
            "classroom_math_rhythm": {
                "title": "课堂：数学课",
                "description": "根据节奏，写出乘法公式。（叮叮叮~叮叮叮 = 3X2）；（啊啊~啊啊 = 2 x 2）；（啊~嗯~哦~~CUM~CUM~噢~ = ? ）",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        18
                    ]
                },
                "options": [
                    {
                        "text": "1x1x1x1x1x1...",
                        "result": "{user}填上了这个公式，数学老师表示虽然节奏是对的，但数学逻辑已经离家出走了。"
                    },
                    {
                        "text": "ooxxooxxooxxooxxoo",
                        "result": "全班陷入了死一般的寂静，随后爆发出一阵不可言喻的哄笑声，{user}被请出了教室。"
                    },
                    {
                        "text": "1+1=3",
                        "result": "{user}给出了最简洁的答案，但这显然不是数学公式，而是某种生理公式。"
                    }
                ]
            },
            "school_recess_games": {
                "title": "课间游戏",
                "description": "{user}在学习之余，课间时间最喜欢和同学玩__",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        15
                    ]
                },
                "options": [
                    {
                        "text": "沙子",
                        "result": "{user}蹲在操场边玩沙子，捏出了各种城堡，虽然弄得脏兮兮的但很快乐。",
                        "effects": {
                            "san": 5,
                            "health": -2
                        }
                    },
                    {
                        "text": "过家家",
                        "result": "{user}和同学们玩起了过家家，扮演慈祥的家长，提前体验了生活的琐碎。",
                        "effects": {
                            "social": 5,
                            "san": 5
                        }
                    },
                    {
                        "text": "捡石子",
                        "result": "{user}在花坛边捡了半天石子，玩起了抓石子游戏，锻炼了手眼协调能力。",
                        "effects": {
                            "intelligence": 2,
                            "luck": 2
                        }
                    },
                    {
                        "text": "躲猫猫",
                        "result": "{user}找了个谁都发现不了的地方躲了起来，由于躲得太深，直到放学老师才在储藏间找到你。",
                        "effects": {
                            "san": 5,
                            "social": -2
                        }
                    },
                    {
                        "text": "国王游戏",
                        "result": "{user}在小圈子里玩起了国王游戏，体验到了掌控他人“命运”的快感。",
                        "effects": {
                            "social": 10,
                            "san": 5
                        }
                    },
                    {
                        "text": "相互殴打的游戏",
                        "result": "{user}和伙伴们玩起了“暴力”互动，虽然身上有些淤青，但这就是童年的友谊。",
                        "effects": {
                            "health": -5,
                            "social": 5
                        }
                    },
                    {
                        "text": "独自玩手机",
                        "result": "{user}躲在角落偷偷玩手机，虽然避开了人群，但视力评价又下降了。",
                        "effects": {
                            "social": -10,
                            "intelligence": 5,
                            "health": -5
                        }
                    },
                    {
                        "text": "权力的游戏",
                        "result": "{user}在班级内部搞起了纵横捭阖，小小年纪就深谙社交政治之道。",
                        "effects": {
                            "social": 15,
                            "intelligence": 10,
                            "san": -5
                        }
                    }
                ]
            },
            "school_transportation": {
                "title": "上学交通",
                "description": "{user}是通过__去学校上学的。",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        18
                    ]
                },
                "options": [
                    {
                        "text": "骑单车",
                        "result": "{user}骑着单车去上学，风儿吹过脸庞，感觉很自由。"
                    },
                    {
                        "text": "坐公交车",
                        "result": "{user}每天挤公交车上学，在晃晃悠悠中开启新的一天。"
                    },
                    {
                        "text": "坐计程车",
                        "result": "{user}家里条件不错，每天打车上学，从不担心迟到。"
                    },
                    {
                        "text": "步行",
                        "result": "{user}走路上学，顺便看看路边的风景。"
                    },
                    {
                        "text": "跑步",
                        "result": "{user}把上学当成锻炼，每天跑着去学校，身体素质棒棒哒。"
                    },
                    {
                        "text": "踩平行车",
                        "result": "{user}踩着平行车滑行在街头，回头率百分百。"
                    },
                    {
                        "text": "坐直升机",
                        "result": "{user}家里有矿，每天直升机接送，全校师生都惊呆了。"
                    }
                ]
            },
            "elementary_homework_nightmare": {
                "title": "作业地狱",
                "description": "数学作业：一课一练P5-P90页。语文作业：抄写李白古诗3000首。英语作业：写一篇5万字的英文议论文......这些就是{user}每天都要应付的作业量。{user}____",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "熬夜做作业",
                        "result": "{user}熬夜做作业，最终累倒了...",
                        "effects": {
                            "health": -100
                        },
                        "risk": 1.0,
                        "death_reason": "死于过度劳累的作业堆中"
                    },
                    {
                        "text": "第二天抄同学的",
                        "result": "{user}第二天抄同学的。",
                        "effects": {
                            "intelligence": -5,
                            "social": 5
                        }
                    },
                    {
                        "text": "尽量做",
                        "result": "{user}努力完成作业，虽然很辛苦但学到了知识。",
                        "effects": {
                            "intelligence": 10,
                            "health": -5
                        }
                    },
                    {
                        "text": "作业见鬼去吧",
                        "result": "{user}把作业扔到一边，痛快地玩去了。",
                        "effects": {
                            "health": 10,
                            "social": 5
                        }
                    }
                ]
            },
            "elementary_sports_day": {
                "title": "运动会",
                "description": "学校举办了一年一度的运动会。",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "参加短跑",
                        "result": "{user}在短跑比赛中取得了好成绩。",
                        "effects": {
                            "health": 8,
                            "social": 5
                        }
                    },
                    {
                        "text": "参加接力赛",
                        "result": "{user}和同学们一起参加接力赛，培养了团队精神。",
                        "effects": {
                            "health": 5,
                            "social": 8
                        }
                    },
                    {
                        "text": "当啦啦队",
                        "result": "{user}选择当啦啦队，为同学们加油助威。",
                        "effects": {
                            "social": 10
                        }
                    }
                ]
            },
            "elementary_art_class": {
                "title": "美术课",
                "description": "美术课上，老师让同学们自由画画。",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "画一幅风景画",
                        "result": "{user}画了一幅漂亮的风景画，展现了艺术天赋。",
                        "effects": {
                            "intelligence": 5
                        },
                        "add_tags": [
                            "艺术细胞"
                        ]
                    },
                    {
                        "text": "画一幅人物画",
                        "result": "{user}画了一幅生动的人物画，展现了观察力。",
                        "effects": {
                            "intelligence": 5
                        },
                        "add_tags": [
                            "观察力强"
                        ]
                    },
                    {
                        "text": "画一幅抽象画",
                        "result": "{user}画了一幅充满想象力的抽象画，展现了创造力。",
                        "effects": {
                            "intelligence": 6
                        },
                        "add_tags": [
                            "创造力"
                        ]
                    }
                ]
            },
            "elementary_english_class": {
                "title": "外教询问",
                "description": "外教课上，老师向{user}打招呼：'How are you?'，{user}回答：",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "Hi, Bro!",
                        "result": "{user}的回答很新潮，外教笑了。",
                        "effects": {
                            "social": 5
                        }
                    },
                    {
                        "text": "Error 404 not found",
                        "result": "{user}的回答让外教摸不着头脑，但展现了幽默感。",
                        "effects": {
                            "intelligence": 3
                        },
                        "add_tags": [
                            "计算机思维"
                        ]
                    },
                    {
                        "text": "Good good study, day day up",
                        "result": "{user}的回答非常中式，外教努力理解中，学习成绩下降了。",
                        "effects": {
                            "intelligence": -2,
                            "social": 2
                        }
                    },
                    {
                        "text": "42",
                        "result": "{user}的回答充满了哲学意味，外教陷入了沉思。",
                        "effects": {
                            "intelligence": 8
                        },
                        "add_tags": [
                            "四次元"
                        ]
                    },
                    {
                        "text": "You are very handsome",
                        "result": "{user}的回答让外教心花怒放，学习成绩提升了。",
                        "effects": {
                            "social": 5,
                            "intelligence": 2
                        }
                    },
                    {
                        "text": "I am fine, thank you. And you?",
                        "result": "{user}的回答标准而有礼貌。",
                        "effects": {
                            "intelligence": 5
                        }
                    }
                ]
            },
            "elementary_english_fill_blank": {
                "title": "英语课：填空",
                "description": "英语老师出题：Please fill in the blank： 'I _____ an apple yesterday.' {user}填写的答案是：",
                "trigger_conditions": {
                    "age_range": [
                        6,
                        12
                    ],
                    "required_tags": [
                        "学生"
                    ]
                },
                "options": [
                    {
                        "text": "eat",
                        "result": "{user}填了eat，时态不对哦。",
                        "effects": {
                            "intelligence": 2
                        }
                    },
                    {
                        "text": "ate",
                        "result": "{user}答对了！过去式用得很好。",
                        "effects": {
                            "intelligence": 10
                        }
                    },
                    {
                        "text": "eating",
                        "result": "{user}填了eating，语法错误。",
                        "effects": {
                            "intelligence": 1
                        }
                    },
                    {
                        "text": "am",
                        "result": "{user}完全没理解结构。",
                        "effects": {
                            "intelligence": -2
                        }
                    },
                    {
                        "text": "吃了",
                        "result": "{user}用中文回答了英文题，老师很无语。",
                        "effects": {
                            "social": 5,
                            "intelligence": -5
                        }
                    },
                    {
                        "text": "apple",
                        "result": "{user}填了两个苹果，老师陷入了沉思。",
                        "effects": {
                            "intelligence": -3
                        }
                    }
                ]
            },
            "elementary_pe_running": {
                "title": "体育课：跑步",
                "description": "体育老师让全班同学跑800米，{user}的选择是：",
                "trigger_conditions": {
                    "age_range": [
                        6,
                        12
                    ],
                    "required_tags": [
                        "学生"
                    ]
                },
                "options": [
                    {
                        "text": "认真跑完全程",
                        "result": "{user}坚持跑完了全程，虽然很累但是很有成就感。",
                        "effects": {
                            "health": 10,
                            "san": 5
                        }
                    },
                    {
                        "text": "偷偷走一半",
                        "result": "{user}偷偷走了一半的路程，没被老师发现。",
                        "effects": {
                            "health": 2
                        },
                        "add_tags": [
                            "小滑头"
                        ]
                    },
                    {
                        "text": "装病逃跑",
                        "result": "{user}装病逃过了跑步，去树荫下休息了。",
                        "effects": {
                            "health": -2,
                            "san": 10
                        }
                    },
                    {
                        "text": "和同学比赛",
                        "result": "{user}和好朋友一起比赛，跑得更起劲了。",
                        "effects": {
                            "health": 12,
                            "social": 5
                        }
                    }
                ]
            },
            "elementary_music_singing": {
                "title": "音乐课：唱歌",
                "description": "音乐老师让同学们轮流唱歌，轮到{user}了：",
                "trigger_conditions": {
                    "age_range": [
                        6,
                        12
                    ],
                    "required_tags": [
                        "学生"
                    ]
                },
                "options": [
                    {
                        "text": "唱《小星星》",
                        "result": "{user}唱了一首《小星星》，声音清脆悦耳。",
                        "effects": {
                            "social": 5,
                            "san": 5
                        }
                    },
                    {
                        "text": "唱《两只老虎》",
                        "result": "{user}唱了一首《两只老虎》，全班同学都跟着一起唱。",
                        "effects": {
                            "social": 10
                        }
                    },
                    {
                        "text": "假装嗓子疼",
                        "result": "{user}找了个借口逃避唱歌。",
                        "effects": {
                            "social": -5
                        }
                    },
                    {
                        "text": "唱一首自创歌曲",
                        "result": "{user}唱了一首自己编的歌，虽然跑调但很有创意。",
                        "effects": {
                            "intelligence": 5,
                            "social": 5
                        }
                    },
                    {
                        "text": "唱《孤勇者》",
                        "result": "{user}唱了一首《孤勇者》，全班小孩都沸腾了。",
                        "effects": {
                            "social": 15,
                            "san": 5
                        }
                    }
                ]
            },
            "elementary_math_problem": {
                "title": "数学课：煮苹果",
                "description": "数学老师提问：煮一个苹果需要3分钟，煮三个苹果需要多少分钟？{user}回答：",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "1+1=3",
                        "result": "{user}的答案石破天惊。老师决定让你去走廊站着。",
                        "effects": {
                            "intelligence": -10,
                            "social": 5
                        }
                    },
                    {
                        "text": "条件不足，此题无解",
                        "result": "{user}的回答非常严谨。老师愣住了。",
                        "effects": {
                            "intelligence": 15
                        }
                    },
                    {
                        "text": "9分钟",
                        "result": "{user}的回答中规中矩，但其实可以一起煮。",
                        "effects": {
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "3分钟",
                        "result": "{user}回答3分钟，因为可以一锅煮。老师称赞你聪明。",
                        "effects": {
                            "intelligence": 12
                        }
                    }
                ]
            },
            "elementary_math_apple_count": {
                "title": "数学课：数苹果",
                "description": "数学老师又问：小明有10个苹果，吃了3个，还剩几个？{user}回答：",
                "trigger_conditions": {
                    "age_range": [
                        6,
                        12
                    ],
                    "required_tags": [
                        "学生"
                    ]
                },
                "options": [
                    {
                        "text": "7个",
                        "result": "{user}回答7个。正确！",
                        "effects": {
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "不知道，我不喜欢苹果",
                        "result": "{user}的回答让老师哭笑不得。",
                        "effects": {
                            "social": 5
                        }
                    },
                    {
                        "text": "10个，他只是咬了几口",
                        "result": "{user}的回答很有创意，老师居然觉得很有道理。",
                        "effects": {
                            "intelligence": 8
                        }
                    }
                ]
            },
            "elementary_art_drawing": {
                "title": "美术课：画画",
                "description": "美术老师让大家画一幅“我的梦想”，{user}画的是：",
                "trigger_conditions": {
                    "age_range": [
                        6,
                        12
                    ],
                    "required_tags": [
                        "学生"
                    ]
                },
                "options": [
                    {
                        "text": "画一只猪",
                        "result": "{user}画了一只猪。老师问为什么要画猪，你说想过简单的生活。",
                        "effects": {
                            "san": 10
                        }
                    },
                    {
                        "text": "画一个超级英雄",
                        "result": "{user}画了一个拯救世界的超级英雄。",
                        "effects": {
                            "social": 5,
                            "intelligence": 2
                        }
                    },
                    {
                        "text": "画一个科学家",
                        "result": "{user}画了一个在实验室做实验的科学家。",
                        "effects": {
                            "intelligence": 10
                        }
                    },
                    {
                        "text": "画一个老师",
                        "result": "{user}画了一个站在讲台上的老师，并且十分的丑陋。被老师没收了画。",
                        "effects": {
                            "social": -10,
                            "intelligence": 2
                        }
                    },
                    {
                        "text": "画一个蛋糕",
                        "result": "{user}画了一个巨大的蛋糕，看来是个吃货。",
                        "effects": {
                            "health": 2,
                            "san": 5
                        }
                    }
                ]
            },
            "elementary_science_experiment": {
                "title": "自然课：实验",
                "description": "自然课上，老师让大家做一个小实验，{user}的选择是：",
                "trigger_conditions": {
                    "age_range": [
                        6,
                        12
                    ],
                    "required_tags": [
                        "学生"
                    ]
                },
                "options": [
                    {
                        "text": "做水变色的实验",
                        "result": "{user}用食用色素让水变色，实验很成功。",
                        "effects": {
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "做气球吹大的实验",
                        "result": "{user}用醋和小苏打让气球变大，实验很有趣。",
                        "effects": {
                            "intelligence": 8
                        }
                    },
                    {
                        "text": "做磁铁实验",
                        "result": "{user}用磁铁吸引各种物品，发现了磁性的奥秘。",
                        "effects": {
                            "intelligence": 10
                        }
                    },
                    {
                        "text": "做植物生长实验",
                        "result": "{user}种了一颗豆子，观察它的生长过程。",
                        "effects": {
                            "intelligence": 5,
                            "san": 5
                        }
                    },
                    {
                        "text": "偷偷玩手机",
                        "result": "{user}没有认真做实验，而是偷偷玩起了手机。被老师罚站一节课。",
                        "effects": {
                            "intelligence": -5,
                            "social": 5
                        }
                    }
                ]
            },
            "math_olympiad_animals": {
                "title": "数学课：奥数",
                "description": "猪、猫、鸡、兔、牛这几种动物，最与众不同的是哪一个？为什么？{user}认为是——",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "牛，只有牛有角",
                        "result": "你选择了牛，理由是只有牛有角。老师点头称赞你的观察力。",
                        "effects": {
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "猫，只有猫不在十二生肖里",
                        "result": "你选择了猫，理由是只有猫不在十二生肖里。老师说你很有文化常识。",
                        "effects": {
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "猪，只有猪不清真",
                        "result": "你选择了猪，理由是只有猪不清真。老师笑了，说你很有生活经验。",
                        "effects": {
                            "social": 5
                        }
                    },
                    {
                        "text": "猫，只有猫不能吃",
                        "result": "你选择了猫，理由是只有猫不能吃。老师说你很有同情心。",
                        "effects": {
                            "san": 5
                        }
                    },
                    {
                        "text": "鸡，只有鸡是卵生的",
                        "result": "你选择了鸡，理由是只有鸡是卵生的。老师夸你有生物常识。",
                        "effects": {
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "鸡，只有鸡是两条腿",
                        "result": "你选择了鸡，理由是只有鸡是两条腿。老师说你很会数数。",
                        "effects": {
                            "intelligence": 3
                        }
                    },
                    {
                        "text": "兔，只有兔会跳",
                        "result": "你选择了兔，理由是只有兔会跳。老师说你很有想象力。",
                        "effects": {
                            "san": 5
                        },
                        "add_tags": [
                            "创作力"
                        ]
                    },
                    {
                        "text": "猪，只有猪有猪鼻子",
                        "result": "你选择了猪，理由是只有猪有猪鼻子。老师笑着说你很幽默。",
                        "effects": {
                            "social": 5
                        }
                    },
                    {
                        "text": "我没见过这些动物",
                        "result": "你说你没见过 these 动物，老师一时语塞，决定下课。",
                        "effects": {
                            "san": 5
                        }
                    }
                ]
            },
            "classroom_math_class": {
                "title": "课堂：数学课",
                "description": "申国的山区，是上坡路比较多还是下坡路比较多？",
                "trigger_conditions": {
                    "required_tags": [
                        "学生"
                    ],
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "什么破题目",
                        "result": "{user}觉得这题目很无聊，老师让你下课后留下来思考。",
                        "effects": {
                            "san": -5
                        }
                    },
                    {
                        "text": "数学课老是做脑筋急转弯题目真的好吗？",
                        "result": "{user}质疑老师的出题方式，老师让你写一篇反思。",
                        "effects": {
                            "intelligence": 3,
                            "san": -3
                        }
                    },
                    {
                        "text": "条件不足，此题无解",
                        "result": "{user}认真分析后认为条件不足，老师点头称赞你的严谨。",
                        "effects": {
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "一样多",
                        "result": "{user}回答一样多，老师说你很有哲学思维。",
                        "effects": {
                            "san": 5
                        }
                    }
                ]
            },
            "gaokao_arrival": {
                "title": "高考来临",
                "description": "{user}与同学们瑟瑟发抖地走进考场。",
                "priority": 10,
                "trigger_conditions": {
                    "age_range": [
                        18,
                        18
                    ],
                    "required_tags": [
                        "学生"
                    ]
                },
                "options": [
                    {
                        "text": "参加高考",
                        "result": "{user}深吸一口气，走进了考场。",
                        "effects": {
                            "san": -5
                        },
                        "add_tags": [
                            "高考"
                        ],
                        "remove_tags": [
                            "学生"
                        ],
                        "continue_event": [
                            "gkyw3",
                            "gkyw1",
                            "gkyw2"
                        ]
                    },
                    {
                        "text": "放弃高考",
                        "result": "{user}不参加高考",
                        "effects": {
                            "social": -20,
                            "intelligence": -10
                        },
                        "remove_tags": [
                            "学生"
                        ],
                        "continue_event": "job_hunting"
                    }
                ],
                "is_continue": false,
                "allow_repeat": false
            },
            "brcz": {
                "title": "升入高中",
                "description": "{user} 迈着自信的步伐跨入校门，却发现书包的重量已经暗示了一切。",
                "priority": 10,
                "is_continue": false,
                "allow_repeat": false,
                "trigger_conditions": {
                    "age_range": [
                        15,
                        15
                    ]
                },
                "options": []
            },
            "job_hunting": {
                "title": "找工作",
                "description": "毕业在即，{user}在招聘市场寻找心仪的工作。",
                "is_continue": true,
                "options": [
                    {
                        "text": "医生",
                        "result": "{user}找了一份医生工作，开始了救死扶伤的职业生涯。",
                        "effects": {
                            "money": 25,
                            "social": 15,
                            "intelligence": 10,
                            "health": -5
                        },
                        "add_tags": [
                            "医生"
                        ]
                    },
                    {
                        "text": "程序员",
                        "result": "{user}成为了一名程序员，开始了编写代码的职业生涯。",
                        "effects": {
                            "money": 20,
                            "intelligence": 15,
                            "health": -5,
                            "san": -5
                        },
                        "add_tags": [
                            "程序员",
                            "高收入"
                        ]
                    },
                    {
                        "text": "律师",
                        "result": "{user}成为了一名律师，开始了维护法律正义的职业生涯。",
                        "effects": {
                            "money": 25,
                            "intelligence": 15,
                            "social": 10,
                            "san": -5
                        },
                        "add_tags": [
                            "律师",
                            "高收入"
                        ]
                    },
                    {
                        "text": "教师",
                        "result": "{user}成为了一名教师，开始了教书育人的职业生涯。",
                        "effects": {
                            "money": 12,
                            "intelligence": 10,
                            "social": 10
                        },
                        "add_tags": [
                            "教师"
                        ]
                    },
                    {
                        "text": "公务员",
                        "result": "{user}通过考试成为了一名公务员，开始了稳定的职业生涯。",
                        "effects": {
                            "money": 15,
                            "social": 10,
                            "san": 5
                        },
                        "add_tags": [
                            "公务员"
                        ]
                    },
                    {
                        "text": "参军",
                        "result": "{user}选择参军，开始了保家卫国的军旅生涯。",
                        "effects": {
                            "money": 10,
                            "health": 15,
                            "social": 5
                        },
                        "add_tags": [
                            "军人"
                        ]
                    },
                    {
                        "text": "翻译",
                        "result": "{user}成为了一名翻译，凭借语言能力在国际交流中发挥作用。",
                        "effects": {
                            "money": 15,
                            "intelligence": 10,
                            "social": 8
                        },
                        "add_tags": [
                            "翻译"
                        ]
                    },
                    {
                        "text": "外贸",
                        "result": "{user}进入外贸行业，负责国际贸易相关工作。",
                        "effects": {
                            "money": 18,
                            "social": 10,
                            "intelligence": 8
                        },
                        "add_tags": [
                            "外贸"
                        ]
                    },
                    {
                        "text": "创业",
                        "result": "{user}决定创业，开始了自己的创业之路。",
                        "effects": {
                            "money": -10,
                            "intelligence": 10,
                            "social": 10,
                            "luck": -10
                        },
                        "add_tags": [
                            "创业者"
                        ]
                    },
                    {
                        "text": "更多工作...",
                        "result": "{user}继续浏览招聘信息。",
                        "continue_event": "job_hunting_more"
                    }
                ]
            },
            "job_hunting_more": {
                "title": "更多工作",
                "description": "{user}翻到了下一页招聘启事。",
                "is_continue": true,
                "options": [
                    {
                        "text": "私家侦探",
                        "result": "{user}成为了一名私家侦探，专门调查各种疑难案件。",
                        "effects": {
                            "money": 18,
                            "intelligence": 10,
                            "social": 5
                        },
                        "add_tags": [
                            "侦探"
                        ]
                    },
                    {
                        "text": "导游",
                        "result": "{user}成为了一名导游，带领游客探索各地的风景名胜。",
                        "effects": {
                            "money": 12,
                            "social": 15,
                            "intelligence": 8
                        },
                        "add_tags": [
                            "导游"
                        ]
                    },
                    {
                        "text": "交警",
                        "result": "{user}成为了一名交警，维护城市的交通秩序。",
                        "effects": {
                            "money": 12,
                            "health": 5,
                            "social": 10
                        },
                        "add_tags": [
                            "交警"
                        ]
                    },
                    {
                        "text": "保镖",
                        "result": "{user}成为了一名保镖，负责保护重要人物的安全。",
                        "effects": {
                            "money": 15,
                            "health": 10,
                            "social": 5
                        },
                        "add_tags": [
                            "保镖"
                        ]
                    },
                    {
                        "text": "厨师",
                        "result": "{user}成为了一名厨师，用美食满足人们的味蕾。",
                        "effects": {
                            "money": 15,
                            "health": 3,
                            "social": 8
                        },
                        "add_tags": [
                            "厨师"
                        ]
                    },
                    {
                        "text": "文员",
                        "result": "{user}找到了一份文员工作，负责处理日常文书和行政事务。",
                        "effects": {
                            "money": 10,
                            "intelligence": 5
                        },
                        "add_tags": [
                            "白领"
                        ]
                    },
                    {
                        "text": "工厂打工",
                        "result": "{user}在工厂找到了一份工作，每天重复着相同的工作。",
                        "effects": {
                            "money": 10,
                            "health": -5,
                            "san": -5
                        },
                        "add_tags": [
                            "工厂工人"
                        ]
                    },
                    {
                        "text": "送餐员/快递员",
                        "result": "{user}成为了一名送餐员/快递员，每天穿梭在城市的各个角落。",
                        "effects": {
                            "money": 8,
                            "health": 5,
                            "social": 5
                        },
                        "add_tags": [
                            "快递员"
                        ]
                    },
                    {
                        "text": "搬砖工人",
                        "result": "{user}找了一份搬砖工人的工作，虽然辛苦但锻炼了身体。",
                        "effects": {
                            "money": 8,
                            "health": 10,
                            "intelligence": -5
                        },
                        "add_tags": [
                            "搬砖工人"
                        ]
                    },
                    {
                        "text": "更多工作...",
                        "result": "{user}点击了下一页。",
                        "continue_event": "job_hunting_last"
                    }
                ]
            },
            "job_hunting_last": {
                "title": "其他机会",
                "description": "还有一些其他的岗位正在招人。",
                "is_continue": true,
                "options": [
                    {
                        "text": "环卫",
                        "result": "{user}成为了一名环卫工人，为城市的清洁做出贡献。",
                        "effects": {
                            "money": 5,
                            "health": 5,
                            "social": -5
                        },
                        "add_tags": [
                            "环卫工人"
                        ]
                    },
                    {
                        "text": "派传单",
                        "result": "{user}找了一份派传单的工作，每天在街头派发宣传单。",
                        "effects": {
                            "money": 5,
                            "health": 5,
                            "social": 3
                        },
                        "add_tags": [
                            "临时工"
                        ]
                    },
                    {
                        "text": "餐馆打杂",
                        "result": "{user}在餐馆找到了一份打杂的工作，负责洗碗、清洁等工作。",
                        "effects": {
                            "money": 6,
                            "health": 3
                        },
                        "add_tags": [
                            "服务业"
                        ]
                    },
                    {
                        "text": "婚姻中介",
                        "result": "{user}成为了一名婚姻中介，帮助单身人士寻找伴侣。",
                        "effects": {
                            "money": 12,
                            "social": 15
                        },
                        "add_tags": [
                            "婚姻中介"
                        ]
                    },
                    {
                        "text": "极限运动员",
                        "result": "{user}成为了一名极限运动员，挑战各种极限项目。",
                        "effects": {
                            "money": 15,
                            "health": 15,
                            "social": 10,
                            "luck": -10
                        },
                        "add_tags": [
                            "极限运动员"
                        ]
                    },
                    {
                        "text": "留校科研",
                        "result": "{user}选择留在学校继续科研工作，追求学术成就。",
                        "effects": {
                            "money": 8,
                            "intelligence": 15,
                            "social": 5
                        },
                        "add_tags": [
                            "研究员"
                        ]
                    },
                    {
                        "text": "服务员",
                        "result": "{user}找到了一份服务员的工作，在餐厅或酒店为客人提供服务。",
                        "effects": {
                            "money": 7,
                            "social": 8
                        },
                        "add_tags": [
                            "服务业"
                        ]
                    },
                    {
                        "text": "返回第一页",
                        "result": "{user}回到了招聘市场的入口。",
                        "continue_event": "job_hunting"
                    }
                ]
            }
        }
    }
};

window.commonEvents = commonEvents;
