
// 红色标签事件 (特殊状态)
const redEvents = {
    "体弱多病": {
        "is_red": true,
        "events": {
            "hospital_visit": {
                "title": "医院常客",
                "description": "又到了去医院检查的日子。",
                "options": [
                    {
                        "text": "配合治疗",
                        "result": "病情稍微稳定了一些。",
                        "effects": {
                            "money": -10,
                            "health": 2
                        }
                    }
                ]
            }
        }
    },
    "贫困": {
        "is_red": true,
        "events": {
            "poverty_struggle": {
                "title": "贫困交加",
                "description": "家里已经揭不开锅了。",
                "options": [
                    {
                        "text": "去干重体力活",
                        "result": "你换取了一些微薄的报酬。",
                        "effects": {
                            "money": 3,
                            "health": -10
                        }
                    }
                ]
            }
        }
    },
    "叛逆": {
        "is_red": true,
        "events": {
            "school_rebel": {
                "title": "学校反抗",
                "description": "你对学校的一些规定感到不满。",
                "trigger_conditions": {
                    "age_range": [
                        13,
                        18
                    ]
                },
                "options": [
                    {
                        "text": "带头罢课",
                        "result": "你带头罢课，引起了很大的轰动，但也被重罚了。",
                        "effects": {
                            "social": 15,
                            "intelligence": -10,
                            "san": -10
                        },
                        "add_tags": [
                            "不良少年"
                        ]
                    },
                    {
                        "text": "默默抵制",
                        "result": "你用自己的方式沉默地抵制着那些不合理的规定。",
                        "effects": {
                            "intelligence": 5,
                            "san": 5
                        }
                    }
                ]
            },
            "run_away": {
                "title": "离家出走",
                "description": "和父母大吵一架后，你冲出了家门。",
                "options": [
                    {
                        "text": "去网吧",
                        "result": "你在网吧待了一整晚。",
                        "effects": {
                            "money": -5,
                            "health": -5,
                            "intelligence": -2
                        }
                    },
                    {
                        "text": "回家认错",
                        "result": "饥寒交迫的你还是回去了。",
                        "effects": {
                            "san": -5
                        }
                    }
                ]
            }
        }
    },
    "瘾君子": {
        "is_red": true,
        "events": {
            "addiction_shiver": {
                "title": "毒瘾发作",
                "description": "{user}感觉浑身有蚂蚁在爬，精神萎靡不振。",
                "options": [
                    {
                        "text": "寻找毒品",
                        "result": "{user}费尽心思搞到了那玩意，瞬间得到了解脱，但身体更虚弱了。",
                        "effects": {
                            "money": -50,
                            "health": -20,
                            "san": 10
                        }
                    },
                    {
                        "text": "强行戒毒",
                        "result": "{user}痛苦地把自己关在房间里，由于强制戒毒引发急性心衰...",
                        "effects": {
                            "health": -100
                        },
                        "risk": 0.8,
                        "death_reason": "死于极其痛苦的戒毒反应"
                    }
                ]
            }
        }
    },
    "异世界：魔界": {
        "is_red": true,
        "description": "你来到了魔界，这里充满了危险和未知。",
        "events": {
            "isekai_arrival": {
                "title": "异世界降临",
                "description": "你睁开眼发现自己在一个典型的剑与魔法世界...",
                "is_continue": true,
                "options": [
                    {
                        "text": "检查自己的属性面板",
                        "result": "发现自己各项属性都是5（满分100），典型废柴主角。",
                        "effects": {},
                        "continue_event": "village_encounter"
                    },
                    {
                        "text": "尝试召唤异世界手机",
                        "result": "真的召唤出来了，但只能玩贪吃蛇。",
                        "continue_event": "village_encounter"
                    },
                    {
                        "text": "做100个俯卧撑",
                        "result": "做了3个就累倒了，被路过的史莱姆嘲笑。",
                        "effects": {
                            "health": -5,
                            "social": -10
                        },
                        "continue_event": "village_encounter"
                    },
                    {
                        "text": "大声宣布“我要建立大东亚共荣圈”",
                        "result": "周围路过的村民听到了你奇怪的宣言，认为你是邪恶的恶魔崇拜者。",
                        "risk": 1,
                        "death_reason": "被愤怒的村民当作恶魔崇拜者处决"
                    }
                ]
            },
            "village_encounter": {
                "title": "初遇村庄",
                "description": "你来到最近的村庄，村民们围了上来。村长颤抖着说：“勇者大人，魔王的手下正在附近作恶...”",
                "is_continue": true,
                "options": [
                    {
                        "text": "先氪个648再说",
                        "result": "你掏出不存在的钱包做氪金动作，村民们被你的奇怪仪式吓到，纷纷掏出金币。他们以为这是勇者的特殊祈祷方式。你意外获得了大量金币和“氪金勇者”的称号。",
                        "effects": {
                            "money": 50,
                            "social": 20
                        },
                        "add_tags": [
                            "氪金勇者"
                        ],
                        "continue_event": "magic_academy"
                    },
                    {
                        "text": "这是主线任务还是支线任务？",
                        "result": "村长一脸懵逼，旁边的年轻村民小声说：“爷爷，勇者问这个任务给多少经验值。”村长恍然大悟，承诺完成任务后传授祖传剑法。",
                        "continue_event": "tavern_encounter"
                    },
                    {
                        "text": "有没有新手村任务？比如杀10只史莱姆？",
                        "result": "村长欣慰地点头：“不愧是勇者，连新手试炼都知道。”他指向村外：“那里有史莱姆，不过...它们最近进化了。”你出门遇到的是肌肉史莱姆，被一拳打飞。",
                        "risk": 1,
                        "death_reason": "被肌肉史莱姆一拳打死"
                    },
                    {
                        "text": "我需要先刷级，有没有四倍经验活动？",
                        "result": "一个路过的商人听到后眼睛一亮：“勇者大人，我这里有经验加倍药水，买一送一，现在购买还送限定皮肤！”你陷入了异世界的氪金陷阱。",
                        "effects": {
                            "money": -20
                        },
                        "continue_event": "tavern_encounter"
                    }
                ]
            },
            "magic_academy": {
                "title": "魔法学院",
                "description": "为了学习对抗魔王的力量，你来到了王国魔法学院。教务主任看着你说：“勇者，你需要选择你的主修魔法...”",
                "is_continue": true,
                "options": [
                    {
                        "text": "我全都要！",
                        "result": "你贪心地想学所有魔法。教务主任叹气：“又来一个，上一个这么说的人现在还在图书馆看书呢，已经看了300年了。”你坚持己见，结果真的被困在图书馆。",
                        "risk": 1,
                        "death_reason": "知识的海洋把你淹死了"
                    },
                    {
                        "text": "我要学影流之主的技能",
                        "result": "教务主任困惑地翻书：“影流...没听过啊。”你当场表演了一个影分身，全学院轰动。你被聘为特聘教授，专门教授“来自异世界的禁术”。",
                        "effects": {
                            "intelligence": 30,
                            "social": 20
                        },
                        "add_tags": [
                            "影分身"
                        ],
                        "continue_event": "tavern_encounter"
                    },
                    {
                        "text": "先把技能点加在被动技能上",
                        "result": "教务主任恍然大悟：“原来如此！难怪历代勇者都失败了，他们都加主动技能去了！”",
                        "effects": {
                            "intelligence": 20
                        },
                        "add_tags": [
                            "被动怪"
                        ],
                        "continue_event": "tavern_encounter"
                    }
                ]
            },
            "tavern_encounter": {
                "title": "酒馆奇遇",
                "description": "你在冒险者酒馆休息，各路英雄豪杰都在这里。一个神秘人走过来说：“听说你要讨伐魔王？”",
                "is_continue": true,
                "options": [
                    {
                        "text": "你是来发布任务的NPC吗",
                        "result": "神秘人愣了一下，然后熟练地说：“是的勇者，我有一个任务要拜托你...等等，我为什么要配合你？”原来他是魔王派来的间谍，被你的meta发言搞混乱了。他愤怒的杀了你。",
                        "risk": 1,
                        "death_reason": "被魔王间谍杀死"
                    },
                    {
                        "text": "要先摇人",
                        "result": "酒馆里的冒险者们面面相觑。一个法师说：“我们有传音魔法阵。”你提议建立“勇者讨伐队”群组，还设置了群规和管理员，异世界第一个社交网络诞生了。",
                        "effects": {
                            "social": 30
                        },
                        "continue_event": "princess_request"
                    },
                    {
                        "text": "唱歌",
                        "result": "你唱起：“系内～系内～洗净一切害怕”，整个酒馆突然安静，然后所有人开始大合唱。原来这是一首古老的战歌，能够提升士气。你意外发现了精神类buff魔法的正确使用方式。",
                        "effects": {
                            "social": 20,
                            "san": 20
                        },
                        "continue_event": "princess_request"
                    },
                    {
                        "text": "点一份华莱士",
                        "result": "服务员微笑着说：“我们有华莱士，就在魔界第三街。”你决定先去魔界考察一下，结果被毒死，原来他是加盟商。",
                        "risk": 1,
                        "death_reason": "食物中毒"
                    },
                    {
                        "text": "要来把黑暗游戏吗",
                        "result": "你掏出一副卡牌。所有人都露出了狂热的表情。原来这个世界的战斗都是通过打牌决定的。",
                        "add_tags": [
                            "黑暗牌"
                        ],
                        "continue_event": "princess_request"
                    },
                    {
                        "text": "我宣布，这里是阿尔法酒馆！",
                        "result": "你中二病发作，所有人都被你的气势震慑。一个老冒险者站起来：“年轻人，你让我想起了30年前的自己。”他决定告诉你隐秘信息。",
                        "continue_event": "sage_tower"
                    }
                ]
            },
            "princess_request": {
                "title": "公主的请求",
                "description": "你被召见到王宫，美丽的公主含泪说：“勇者，请救救我的王国...”",
                "is_continue": true,
                "options": [
                    {
                        "text": "拒绝PUA",
                        "result": "公主震惊：“你怎么知道？！”原来公主是穿越者，她已经在这里生活了10年。",
                        "effects": {
                            "social": 10,
                            "san": 10
                        },
                        "continue_event": "dragon_valley"
                    },
                    {
                        "text": "我可以，但是要加钱",
                        "result": "国王大怒：“放肆！”公主却说：“父王，这很合理。专业的事要给专业的价格。”你获得了丰厚报酬。",
                        "effects": {
                            "money": 50,
                            "social": -10
                        },
                        "continue_event": "dragon_valley"
                    },
                    {
                        "text": "让我先看看你的属性面板",
                        "result": "你认真地打量公主，突然一个界面弹出。震惊！公主的隐藏属性是魔王的女儿！正当你要说出真相时，公主一个眼神，你化为了石头。",
                        "risk": 1,
                        "death_reason": "被公主变成了石头"
                    },
                    {
                        "text": "不如公主你来当魔王吧",
                        "result": "公主若有所思：“有道理，既然无法打败魔王，那就取代他！”",
                        "effects": {
                            "social": 10,
                            "intelligence": 10
                        },
                        "continue_event": "dragon_valley"
                    },
                    {
                        "text": "前面的区域，以后再来探索吧",
                        "result": "公主突然笑了：“旅行者？是你吗？”",
                        "effects": {
                            "social": 5
                        },
                        "continue_event": "dragon_valley"
                    }
                ]
            },
            "dragon_valley": {
                "title": "巨龙之谷",
                "description": "传说中的巨龙守护着前往魔王城的必经之路。巨龙盘踞在金山上，对你说：“又来一个送死的...”",
                "is_continue": true,
                "options": [
                    {
                        "text": "你这金币能扫码转账吗？",
                        "result": "巨龙愣住了：“什么扫码？”你解释了电子支付的便利，巨龙陷入沉思，最后决定让你通过，还赠送了一小袋金币让你研发“龙族支付”。",
                        "effects": {
                            "money": 30,
                            "social": 10
                        },
                        "continue_event": "elf_forest"
                    },
                    {
                        "text": "你就是传说中的坤坤吗",
                        "result": "巨龙大怒：“我是威严的龙！不是坤”",
                        "risk": 1,
                        "death_reason": "因为一个梗激怒了巨龙"
                    },
                    {
                        "text": "我们做朋友吧",
                        "result": "巨龙惊讶地看着你，从没有人提出过这样的请求。你真诚的态度打动了它，你们成为了朋友，它允许你通过山谷。",
                        "effects": {
                            "social": 20
                        },
                        "continue_event": "elf_forest"
                    },
                    {
                        "text": "你这是违章建筑",
                        "result": "巨龙傻眼了，它活了一千年第一次听说要许可证。它陷入了身份危机，让你通过了山谷。",
                        "effects": {
                            "intelligence": 10
                        },
                        "continue_event": "elf_forest"
                    },
                    {
                        "text": "来让我康康你的牙齿",
                        "result": "你突然化身牙医，专业地检查起巨龙的口腔。巨龙被你的专业震慑，乖乖配合。检查后你开了处方，巨龙感激地送你一颗龙之泪。",
                        "effects": {
                            "intelligence": 15,
                            "social": 10
                        },
                        "continue_event": "elf_forest"
                    },
                    {
                        "text": "你知道吗，其实我是你失散多年的...",
                        "result": "巨龙激动：“我的什么？！”你：“你的债主。”巨龙翻了个白眼，正要喷火，突然想起好像真的欠过一个人类的钱。",
                        "risk": 1,
                        "death_reason": "被愧疚的巨龙误杀"
                    }
                ]
            },
            "elf_forest": {
                "title": "精灵森林",
                "description": "你进入了神秘的精灵森林，精灵女王优雅地出现：“人类，说出你的来意...”",
                "is_continue": true,
                "options": [
                    {
                        "text": "阿姨你好！",
                        "result": "精灵女王的表情瞬间凝固，周围的精灵们倒吸一口凉气。“我...我已经3000岁了...”她哭着跑开。精灵长老叹气：“恭喜你，成为了第一个把女王气哭的人类。”",
                        "add_tags": [
                            "气哭女王"
                        ],
                        "continue_event": "dark_lord_general"
                    },
                    {
                        "text": "我想学你们的美颜术",
                        "result": "精灵们面面相觑：“美颜术？”你解释了现代的美颜软件，精灵们非常好奇，交换了几个皮肤保养的秘方给你。",
                        "effects": {
                            "health": 10,
                            "social": 5
                        },
                        "continue_event": "dark_lord_general"
                    },
                    {
                        "text": "请问WiFi密码是多少？",
                        "result": "精灵女王优雅地回答：“风之低语，树之细语，密码是NatureIsBeautiful123。”什么？精灵森林真的有WiFi？",
                        "effects": {
                            "intelligence": 5
                        },
                        "continue_event": "dark_lord_general"
                    },
                    {
                        "text": "开始尬舞",
                        "result": "你看这个面它又长又宽，整个森林陷入诡异的寂静，然后所有精灵开始不由自主地跟着你扭动。这个魔性的舞蹈唤醒了沉睡的森林之神。",
                        "risk": 1,
                        "death_reason": "被森林之神认定为邪教头子"
                    },
                    {
                        "text": "其实我是来相亲的",
                        "result": "精灵女王愣了一下，然后露出了姨母笑：“小伙子挺直接啊，但你太小了。”",
                        "effects": {
                            "social": -5
                        },
                        "continue_event": "dark_lord_general"
                    }
                ]
            },
            "sage_tower": {
                "title": "贤者之塔",
                "description": "老冒险者带你来到传说中的贤者塔中，据说贤者他知晓一切。你爬上999层台阶，贤者问：“你想知道什么？”",
                "is_continue": true,
                "options": [
                    {
                        "text": "明天的彩票号码",
                        "result": "贤者叹气：“第8749个问这个问题的人...这个世界没有彩票！”",
                        "continue_event": "dark_lord_general"
                    },
                    {
                        "text": "如何一键通关？",
                        "result": "贤者神秘一笑：“↑↑↓↓←→←→BA。”你试了一下，什么都没发生.贤者大笑：“哈哈哈，骗你的！这里不是游戏！”",
                        "continue_event": "dark_lord_general"
                    },
                    {
                        "text": "你知道42的含义吗？",
                        "result": "贤者震惊地站起来：“你...怎么可能”。",
                        "add_tags": [
                            "终极秘密"
                        ],
                        "continue_event": "dark_lord_general"
                    },
                    {
                        "text": "能教我变身赛亚人吗？",
                        "result": "贤者沉思片刻：“理论上可以，但需要极度的愤怒。”他开始疯狂吐槽你，你越听越气，头发真的开始变金。成功了！但能量消耗太大。",
                        "risk": 1,
                        "death_reason": "能量过载而死"
                    },
                    {
                        "text": "如何在异世界暴富？",
                        "result": "贤者拿出一本厚厚的书：“《异世界经济学》，售价9999金币。”你：“...这就是暴富的方法？”贤者：“没错，卖成功学。”",
                        "effects": {
                            "intelligence": 10
                        },
                        "continue_event": "dark_lord_general"
                    }
                ]
            },
            "dark_lord_general": {
                "title": "遇见魔王军干部",
                "description": "在迷宫深处，你们遭遇了魔王军的首席干部...",
                "is_continue": true,
                "options": [
                    {
                        "text": "尝试用“嘴遁”说服对方",
                        "result": "干部被你的话感动，决定弃暗投明。",
                        "effects": {
                            "social": 20
                        },
                        "continue_event": "final_battle"
                    },
                    {
                        "text": "大喊“我要成为魔王！”",
                        "result": "干部困惑了，开始怀疑人生，你乘机逃跑。",
                        "continue_event": "final_battle"
                    },
                    {
                        "text": "挑战对方进行“决斗游戏”",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "required_tags": [
                                        "黑暗牌"
                                    ]
                                },
                                "result": "你使用卡牌对战战胜了魔王军干部。",
                                "effects": {
                                    "intelligence": 15
                                },
                                "continue_event": "final_battle"
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "干部拿出一副专业牌组，你被秒杀了。",
                                "risk": 1,
                                "death_reason": "在卡牌对决中被秒杀"
                            }
                        ]
                    },
                    {
                        "text": "询问魔王军是否有“五险一金”",
                        "result": "干部开始抱怨魔王军的工作待遇，并表示今天不上班了。",
                        "continue_event": "final_battle"
                    },
                    {
                        "text": "使用“影分身之术”",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "required_tags": [
                                        "影分身"
                                    ]
                                },
                                "result": "你使用了影分身，创造了视觉错觉，趁机逃跑。",
                                "continue_event": "final_battle"
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你想使用影分身，但失败了，干部一剑刺穿了你。",
                                "risk": 1,
                                "death_reason": "技能使用失败"
                            }
                        ]
                    },
                    {
                        "text": "直接说“我就是魔王”",
                        "result": "真正的魔王听到了，瞬间出现杀死了你。",
                        "risk": 1,
                        "death_reason": "冒充魔王被真魔王杀死"
                    }
                ]
            },
            "final_battle": {
                "title": "最终决战",
                "description": "你终于见到了魔王。他坐在王座上，散发着强大的威压：“勇者，你终于来了...”",
                "is_continue": true,
                "options": [
                    {
                        "text": "不打了，我们合作吧",
                        "result": "魔王愣住：“合作？”，魔王一个响指，你就灰飞烟灭了",
                        "risk": 1,
                        "death_reason": "被魔王秒杀"
                    },
                    {
                        "text": "魔王，你的时代过去了，现在流行元宇宙",
                        "result": "魔王一个响指，你就灰飞烟灭了",
                        "risk": 1,
                        "death_reason": "被魔王秒杀"
                    },
                    {
                        "text": "来啊，互相伤害啊！",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "required_tags": [
                                        "被动怪"
                                    ]
                                },
                                "result": "你和魔王开始了激烈的肉身互搏。双方你来我往，越来越狠。最后魔王被你的被动技能硬生生的耗死了。",
                                "effects": {
                                    "health": -30,
                                    "san": 20
                                },
                                "add_tags": [
                                    "战胜魔王"
                                ],
                                "remove_tags": [
                                    "异世界：魔界"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "魔王一个响指，你就灰飞烟灭了。",
                                "risk": 1,
                                "death_reason": "被魔王秒杀"
                            }
                        ]
                    },
                    {
                        "text": "其实我是你失散多年的儿子",
                        "result": "魔王震惊：“不可能！我没有...等等，300年前那个人类女子...”经过DNA（魔法）检测，你真的有魔王血统。",
                        "risk": 1,
                        "death_reason": "被亲情感动而死"
                    },
                    {
                        "text": "不如我们打牌决定胜负",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "required_tags": [
                                        "黑暗牌"
                                    ]
                                },
                                "result": "魔王眼睛一亮：“正合我意！”",
                                "continue_event": "card_battle"
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "魔王冷笑一声：“就凭你那三脚猫的牌技？”他挥了挥手，一道黑光袭来...{user}应声倒下",
                                "risk": 1,
                                "death_reason": "被魔王秒杀"
                            }
                        ]
                    },
                    {
                        "text": "魔王，让我们一起创造一个更美好的世界吧！",
                        "result": "你真诚地伸出手。魔王被你的真诚打动，原来他也厌倦了破坏。你们联手改革，异世界进入了和平繁荣的新时代。",
                        "effects": {
                            "social": 50,
                            "san": 30
                        },
                        "add_tags": [
                            "真·勇者"
                        ],
                        "remove_tags": [
                            "异世界：魔界"
                        ]
                    }
                ]
            },
            "card_battle": {
                "title": "卡牌对战",
                "description": "魔王拿出他珍藏的卡组，你必须选择一种卡组与之对战...",
                "is_continue": true,
                "options": [
                    {
                        "text": "过牌卡组",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "money": 80
                                    }
                                },
                                "result": "你使用了豪华过牌卡组，靠着强大的资源优势战胜了魔王！",
                                "effects": {
                                    "money": -20,
                                    "social": 30
                                },
                                "add_tags": [
                                    "卡牌大师",
                                    "战胜魔王"
                                ],
                                "remove_tags": [
                                    "异世界：魔界"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你的资源不足，卡组无法发挥威力，被魔王击败了。",
                                "risk": 1,
                                "death_reason": "在卡牌决斗中失败"
                            }
                        ]
                    },
                    {
                        "text": "运势卡组",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "luck": 80
                                    }
                                },
                                "result": "你的运气简直爆棚！连抽五张关键牌，魔王目瞪口呆，认输了！",
                                "effects": {
                                    "luck": -10,
                                    "social": 30
                                },
                                "add_tags": [
                                    "欧皇",
                                    "战胜魔王"
                                ],
                                "remove_tags": [
                                    "异世界：魔界"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你的运气不够好，抽不到关键卡，被魔王击败了。",
                                "risk": 1,
                                "death_reason": "在卡牌决斗中失败"
                            }
                        ]
                    },
                    {
                        "text": "快攻卡组",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "health": 80
                                    }
                                },
                                "result": "你的反应速度超快，快攻节奏完美，魔王还没反应过来就被你击败了！",
                                "effects": {
                                    "health": -10,
                                    "social": 30
                                },
                                "add_tags": [
                                    "速度之王",
                                    "战胜魔王"
                                ],
                                "remove_tags": [
                                    "异世界：魔界"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你的体力不支，反应变慢，魔王轻松挡住了你的进攻，并反败为胜。",
                                "risk": 1,
                                "death_reason": "在卡牌决斗中失败"
                            }
                        ]
                    },
                    {
                        "text": "自制卡组",
                        "result": "你拿出自制卡组，魔王看了一眼就笑了：“这种业余卡组也敢挑战我？”三个回合后，你惨败。",
                        "risk": 1,
                        "death_reason": "在卡牌决斗中惨败"
                    }
                ]
            }
        }
    },
    "社恐": {
        "is_red": true,
        "description": "严重的社交恐惧症，难以与人正常交往",
        "events": {
            "social_invitation": {
                "title": "社交邀请",
                "description": "你收到了一个重要的社交活动邀请，但你感到极度不安和恐惧。",
                "options": [
                    {
                        "text": "勉强参加",
                        "result": "你冒着巨大的心理压力参加了活动，虽然全程紧张，但迈出了重要一步。",
                        "effects": {
                            "social": 5,
                            "san": -10
                        },
                        "add_tags": [
                            "勇敢尝试"
                        ]
                    },
                    {
                        "text": "寻求专业心理咨询",
                        "result": "你决定解决根本问题，开始接受心理治疗。",
                        "effects": {
                            "money": -20,
                            "san": 15
                        },
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "money": 50
                                    }
                                },
                                "result": "经过一段时间的专业治疗，你的社交恐惧症状得到了显著改善！",
                                "effects": {
                                    "social": 20,
                                    "san": 20
                                },
                                "remove_tags": [
                                    "社恐"
                                ],
                                "add_tags": [
                                    "治愈之路"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "由于经济原因，你中断了治疗，但已经学到了一些应对技巧。",
                                "effects": {
                                    "social": 5,
                                    "san": 5
                                }
                            }
                        ]
                    },
                    {
                        "text": "拒绝邀请",
                        "result": "你找借口拒绝了邀请，虽然逃避了不安，但感到更加孤独。",
                        "effects": {
                            "social": -10,
                            "san": -5
                        }
                    }
                ]
            }
        }
    },
    "高考": {
        "is_red": true,
        "description": "开始高考",
        "events": {
            "gaokao_chinese": {
                "title": "高考语文",
                "description": "第一科是语文，{user}坐在考场上，看着试卷上的作文题目。",
                "is_continue": true,
                "options": [
                    {
                        "text": "认真答题",
                        "result": "{user}仔细审题，认真作答，发挥出了平时的水平。",
                        "effects": {
                            "intelligence": 5,
                            "san": 3
                        },
                        "continue_event": "gaokao_math"
                    },
                    {
                        "text": "紧张过度",
                        "result": "{user}因为过度紧张，答题时出现了不少失误。",
                        "effects": {
                            "intelligence": -5,
                            "san": -10
                        },
                        "continue_event": "gaokao_math"
                    },
                    {
                        "text": "提前交卷",
                        "result": "{user}觉得题目太简单，提前交卷离开了考场。",
                        "effects": {
                            "intelligence": -3,
                            "san": 5
                        },
                        "continue_event": "gaokao_math"
                    }
                ]
            },
            "gaokao_math": {
                "title": "高考数学",
                "description": "已知M(-2,0),N(2,0),|PM|-|PN|=4,则动点P的轨迹是",
                "is_continue": true,
                "options": [
                    {
                        "text": "双曲线",
                        "result": "{user}认为动点P的轨迹是双曲线。",
                        "effects": {
                            "intelligence": 8,
                            "san": 5
                        },
                        "continue_event": "gaokao_english"
                    },
                    {
                        "text": "双曲线左支",
                        "result": "{user}认为动点P的轨迹是双曲线左支。",
                        "effects": {
                            "intelligence": 3,
                            "san": -5
                        },
                        "continue_event": "gaokao_english"
                    },
                    {
                        "text": "双曲线右支",
                        "result": "{user}认为动点P的轨迹是双曲线右支。",
                        "effects": {
                            "intelligence": 3,
                            "san": -5
                        },
                        "continue_event": "gaokao_english"
                    },
                    {
                        "text": "椭圆",
                        "result": "{user}认为动点P的轨迹是椭圆。",
                        "effects": {
                            "intelligence": -3,
                            "san": -8
                        },
                        "continue_event": "gaokao_english"
                    },
                    {
                        "text": "射线",
                        "result": "{user}认为动点P的轨迹是射线。",
                        "effects": {
                            "intelligence": -3,
                            "san": -8
                        },
                        "continue_event": "gaokao_english"
                    }
                ]
            },
            "gaokao_english": {
                "title": "高考英语",
                "description": "Jack was ______ in the lab when the power cut occurred.",
                "is_continue": true,
                "options": [
                    {
                        "text": "works",
                        "result": "Jack was works in the lab when the power cut occurred.",
                        "effects": {
                            "intelligence": -5,
                            "san": -3
                        },
                        "continue_event": "gaokao_science"
                    },
                    {
                        "text": "has worked",
                        "result": "Jack was has worked in the lab when the power cut occurred.",
                        "effects": {
                            "intelligence": -2,
                            "san": -3
                        },
                        "continue_event": "gaokao_science"
                    },
                    {
                        "text": "working",
                        "result": "Jack was working in the lab when the power cut occurred.",
                        "effects": {
                            "intelligence": 8,
                            "san": 5
                        },
                        "continue_event": "gaokao_science"
                    }
                ]
            },
            "gaokao_science": {
                "title": "高考理科综合",
                "description": "最后一科是理科综合，{user}翻开试卷，看到了一道物理题：一个质量为m的小球从高度为h的斜面顶端由静止释放，滑到斜面底端时的速度为v，则小球从斜面顶端到底端所用的时间t为？",
                "is_continue": true,
                "options": [
                    {
                        "text": "t = 2h/v",
                        "result": "{user}选择了t = 2h/v这个答案。",
                        "effects": {
                            "intelligence": 8,
                            "san": 5
                        },
                        "continue_event": "gaokao_result"
                    },
                    {
                        "text": "t = h/v",
                        "result": "{user}选择了t = h/v这个答案。",
                        "effects": {
                            "intelligence": -3,
                            "san": -5
                        },
                        "continue_event": "gaokao_result"
                    },
                    {
                        "text": "t = v/h",
                        "result": "{user}选择了t = v/h这个答案。",
                        "effects": {
                            "intelligence": -5,
                            "san": -8
                        },
                        "continue_event": "gaokao_result"
                    },
                    {
                        "text": "t = 2v/h",
                        "result": "{user}选择了t = 2v/h这个答案。",
                        "effects": {
                            "intelligence": -5,
                            "san": -8
                        },
                        "continue_event": "gaokao_result"
                    }
                ]
            },
            "gaokao_result": {
                "title": "高考成绩",
                "description": "高考成绩终于公布了，{user}在高考中取得了傲人的成绩，他考上了理想的大学。",
                "is_continue": true,
                "options": [
                    {
                        "text": "继续",
                        "result": "{user}开始了他的大学生活。",
                        "effects": {
                            "intelligence": 10,
                            "social": 5,
                            "san": 10
                        },
                        "add_tags": [
                            "学霸"
                        ],
                        "remove_tags": [
                            "高考"
                        ]
                    }
                ]
            },
            "gkyw1": {
                "title": "gkyw1",
                "description": "功能测试",
                "priority": 0,
                "is_continue": true,
                "allow_repeat": false,
                "trigger_conditions": {
                    "age_range": [
                        0,
                        666
                    ]
                },
                "options": [
                    {
                        "text": "test",
                        "result": "test",
                        "continue_event": "gaokao_math"
                    }
                ]
            },
            "gkyw2": {
                "title": "test",
                "description": "功能测试",
                "priority": 0,
                "is_continue": true,
                "allow_repeat": false,
                "trigger_conditions": {
                    "age_range": [
                        0,
                        666
                    ]
                },
                "options": [
                    {
                        "text": "test",
                        "result": "test",
                        "continue_event": "gaokao_math"
                    }
                ]
            }
        }
    }
};

window.redEvents = redEvents;
