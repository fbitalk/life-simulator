
// 年龄段事件文件
// 包含所有仅在拥有特定年龄段标签时触发的事件
const ageEvents = {
    "幼儿": {
        "events": {
            "learn_walk": {
                "title": "学会走路",
                "description": "{user}____的时候突然学会了走路。",
                "trigger_conditions": {
                    "age_range": [
                        1,
                        1
                    ]
                },
                "options": [
                    {
                        "text": "闯祸了被人追着打",
                        "result": "{user}刚学会走路就到处闯祸，被邻居追着满街跑。",
                        "effects": {
                            "health": 10
                        }
                    },
                    {
                        "text": "爬行",
                        "result": "爬行也是一种运动方式。"
                    },
                    {
                        "text": "吃脚趾",
                        "result": "{user}经常抱着脚趾啃。",
                        "effects": {
                            "money": 20
                        }
                    },
                    {
                        "text": "和狗抢东西吃",
                        "result": "{user}和家里的狗狗成了好朋友，经常一起分享食物。",
                        "effects": {
                            "social": 10
                        }
                    },
                    {
                        "text": "跟鸡学习",
                        "result": "{user}观察院子里的鸡，学会了独特的走路方式。",
                        "effects": {
                            "luck": 10
                        }
                    },
                    {
                        "text": "在某站看攻略",
                        "result": "{user}竟然会用平板看走路教程，真是个天才宝宝！",
                        "effects": {
                            "social": 10
                        }
                    },
                    {
                        "text": "走路还用学？",
                        "result": "{user}天生就会走路。",
                        "effects": {
                            "intelligence": 10
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false,
                "allow_repeat": false
            },
            "ye1y1": {
                "title": "学说话",
                "description": "{user}开始牙牙学语，{user}说的第一个单词是:",
                "trigger_conditions": {
                    "age_range": [
                        1,
                        1
                    ]
                },
                "options": [
                    {
                        "text": "爸爸",
                        "result": "{user}说的第一个单词是:爸爸"
                    },
                    {
                        "text": "妈妈",
                        "result": "{user}说的第一个单词是:妈妈"
                    },
                    {
                        "text": "杀",
                        "result": "{user}说的第一个单词是:杀"
                    },
                    {
                        "text": "卧槽",
                        "result": "{user}的学习角度和同龄人不同"
                    }
                ],
                "priority": 0,
                "is_continue": false,
                "allow_repeat": false
            },
            "ye1": {
                "title": "大灰狼来了",
                "description": "有一天有一只人模样的狼敲门，说是{user}的外婆，{user}独自在家，{user}____",
                "trigger_conditions": {
                    "age_range": [
                        2,
                        2
                    ]
                },
                "options": [
                    {
                        "text": "打电话报警",
                        "result": "{user}打电话报警"
                    },
                    {
                        "text": "沏茶、迎客",
                        "result": "{user}天真地打开门迎接'外婆'...",
                        "risk": 1.0,
                        "death_reason": "{user}{user}兴冲冲地打开门，满脸期待：“外婆您来啦！”   门外站着一只毛茸茸的大灰狼，咧嘴一笑：“不，是美团外卖——你点的‘狼吞虎咽’套餐到了！”   话音未落，一口把{user}打包带走，连汤都不剩。"
                    },
                    {
                        "text": "装作不在家",
                        "result": "{user}装作不在家"
                    },
                    {
                        "text": "隔着门唱起了歌：小兔子乖乖",
                        "result": "{user}唱起了儿歌，'外婆'听到后知道孩子有警惕心，悻悻离开。"
                    },
                    {
                        "text": "识破骗局",
                        "result": "{user}识破骗局"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "ye2": {
                "title": "卖火柴的小女孩来了",
                "description": "有一天，有一个小女孩举着一个广告牌来敲{user}家的门。{user}一打开门，她就开始喋喋不休地推销她的火柴：'防风防水防雷,燃烧自己点亮别人,生活小超人,一支火柴可以点一包烟'{user}____",
                "trigger_conditions": {
                    "age_range": [
                        2,
                        2
                    ]
                },
                "options": [
                    {
                        "text": "打电话报警",
                        "result": "{user}觉得很可疑，赶紧打电话报了警。"
                    },
                    {
                        "text": "买一包火柴",
                        "result": "{user}用零花钱买了一包火柴。小女孩很高兴，送了{user}一盒特别的彩色火柴作为礼物。"
                    },
                    {
                        "text": "买一箱",
                        "result": "{user}买一整箱,小女孩一年的业绩都完成了。"
                    },
                    {
                        "text": "摊摊手，说来盘昆特牌吧",
                        "result": "{user}邀请小女孩玩牌。出乎意料的是，小女孩竟然是昆特牌高手，两人玩得不亦乐乎。"
                    },
                    {
                        "text": "摔门",
                        "result": "{user}直接关上了门。听到门外小女孩失落的叹息。"
                    },
                    {
                        "text": "沏茶，迎客",
                        "result": "{user}礼貌地邀请小女孩进来喝茶休息。小女孩感动地说这是她卖火柴以来受到的最好的待遇。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "ye3y1": {
                "title": "第一天上幼儿园",
                "description": "到了上幼儿园的年龄，父母带{user}去报到,{user}:",
                "trigger_conditions": {
                    "age_range": [
                        3,
                        3
                    ]
                },
                "options": [
                    {
                        "text": "高兴地入园",
                        "result": "{user}对新环境很好奇，很快就适应了幼儿园生活，结交了新朋友。"
                    },
                    {
                        "text": "哭闹不止",
                        "result": "{user}不愿意离开父母，第一天哭了很久。"
                    },
                    {
                        "text": "观察周围",
                        "result": "{user}安静地观察着新环境和其他孩子，慢慢适应。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "toddler_daily_life": {
                "title": "幼儿日常",
                "description": "{user}____",
                "trigger_conditions": {
                    "age_range": [
                        4,
                        5
                    ]
                },
                "options": [
                    {
                        "text": "喜欢看电视",
                        "result": "{user}最喜欢看动画片和儿童节目。",
                        "effects": {
                            "intelligence": 5,
                            "san": 5
                        }
                    },
                    {
                        "text": "对玩具非常着迷",
                        "result": "{user}对各种玩具爱不释手，家里堆满了玩具。",
                        "effects": {
                            "intelligence": 5,
                            "social": 5
                        }
                    },
                    {
                        "text": "喜欢玩耍",
                        "result": "{user}喜欢和小伙伴们一起玩耍，性格开朗活泼。",
                        "effects": {
                            "social": 10,
                            "health": 5
                        },
                        "add_tags": [
                            "活泼"
                        ]
                    },
                    {
                        "text": "喜欢玩平板电脑",
                        "result": "{user}对电子产品很感兴趣，玩平板电脑时非常专注。",
                        "effects": {
                            "intelligence": 10,
                            "san": -5
                        }
                    },
                    {
                        "text": "经常安静地呆着",
                        "result": "{user}喜欢一个人安静地呆着。",
                        "effects": {
                            "san": 10
                        }
                    },
                    {
                        "text": "喜欢撒币",
                        "result": "{user}看到什么都想买。",
                        "effects": {
                            "money": -10,
                            "social": 5
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "ye45y1": {
                "title": "陌生的大狸猫",
                "description": "有一天，{user}的抽屉里爬出一只巨大的狸猫，说是{user}孙子从未来派它来帮助{user}。{user}独自在家，{user}___",
                "trigger_conditions": {
                    "age_range": [
                        4,
                        5
                    ]
                },
                "options": [
                    {
                        "text": "打电话报警",
                        "result": "{user}慌张地拨打了报警电话，但警察到达后什么也没找到，狸猫早已消失不见。{user}被当作恶作剧处理。"
                    },
                    {
                        "text": "泡茶，迎客",
                        "result": "{user}礼貌地为狸猫泡了茶。狸猫很感动，送给了{user}一个神奇的道具作为礼物，并承诺会在关键时刻帮助{user}。",
                        "add_tags": [
                            "神奇道具"
                        ],
                        "continue_event": "tanuki_gift_choice"
                    },
                    {
                        "text": "挥挥手，说来盘昆特牌吧",
                        "result": "{user}提议玩昆特牌。狸猫大笑，原来它也是昆特牌高手！一场激烈的对决后，{user}技艺大增。",
                        "add_tags": [
                            "狸猫朋友"
                        ]
                    },
                    {
                        "text": "装作不在家",
                        "result": "{user}躲在角落装作不在家。狸猫摇摇头离开了，留下一句话：'勇气不足的人无法改变命运。"
                    },
                    {
                        "text": "我不认识什么叮当",
                        "result": "{user}困惑地表示不认识任何叫'叮当'的人。狸猫解释说可能时间线有误。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "tanuki_gift_choice": {
                "title": "狸猫的礼物",
                "description": "狸猫拿出了几样神奇的道具，让{user}选择一样作为礼物...",
                "trigger_conditions": {},
                "options": [
                    {
                        "text": "记忆面包",
                        "result": "{user}选择了记忆面包。从此学习变得轻松许多，但也变得有些依赖这种捷径。",
                        "add_tags": [
                            "记忆超群"
                        ],
                        "remove_tags": [
                            "神奇道具"
                        ]
                    },
                    {
                        "text": "竹蜻蜓",
                        "result": "{user}选择了竹蜻蜓。据说能够让{user}自由飞翔，但不知道怎么用。",
                        "add_tags": [
                            "竹蜻蜓"
                        ],
                        "remove_tags": [
                            "神奇道具"
                        ]
                    },
                    {
                        "text": "如意门",
                        "result": "{user}选择了如意门。据说能够瞬间到达任何地方，但不知道怎么用。",
                        "add_tags": [
                            "如意门"
                        ],
                        "remove_tags": [
                            "神奇道具"
                        ]
                    },
                    {
                        "text": "什么都不要，保持平凡",
                        "result": "{user}礼貌地拒绝了礼物，表示平凡的生活就很好。狸猫朝{user}神秘一笑，祝福{user}一生平安。"
                    }
                ],
                "priority": 0,
                "is_continue": true
            },
            "toddler_early_talents": {
                "title": "从小就...",
                "description": "{user}从小就展现出一些与众不同的特质。",
                "trigger_conditions": {
                    "age_range": [
                        4,
                        5
                    ]
                },
                "options": [
                    {
                        "text": "和小动物说话",
                        "result": "{user}发现自己似乎有和小动物沟通的潜能。",
                        "continue_event": "toddler_animal_talk_choice"
                    },
                    {
                        "text": "身体折起来",
                        "result": "{user}的身体异常柔韧，身体可以折起来。",
                        "add_tags": [
                            "身体协调"
                        ]
                    },
                    {
                        "text": "过目不忘",
                        "result": "{user}展现出惊人的记忆力，很多事情看过一遍就能记住。",
                        "effects": {
                            "intelligence": 5
                        },
                        "add_tags": [
                            "记忆超群"
                        ]
                    },
                    {
                        "text": "会说粗口",
                        "result": "{user}小小年纪就学会了各种粗口，并运用自如。",
                        "add_tags": [
                            "高情商"
                        ]
                    },
                    {
                        "text": "酗酒",
                        "result": "{user}不知从哪里学会了喝酒，并对此产生了兴趣，身体也因此变差了。",
                        "effects": {
                            "health": -10
                        }
                    },
                    {
                        "text": "会彪歌",
                        "result": "{user}学会了彪歌，并对此产生了兴趣。",
                        "effects": {
                            "intelligence": 5
                        },
                        "add_tags": [
                            "音乐:1"
                        ]
                    },
                    {
                        "text": "会素描",
                        "result": "{user}学会了素描，并对此产生了兴趣。",
                        "effects": {
                            "intelligence": 5
                        },
                        "add_tags": [
                            "绘画:1"
                        ]
                    },
                    {
                        "text": "目的性很强",
                        "result": "{user}目的性很强，经常做一些让父母头疼的事情。",
                        "effects": {
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "会吹口哨",
                        "result": "{user}学会了吹口哨，并对此产生了兴趣。",
                        "effects": {
                            "intelligence": 5
                        },
                        "add_tags": [
                            "音乐：1"
                        ],
                        "continue_event": "toddler_music_talent"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "toddler_animal_talk_choice": {
                "title": "与谁对话？",
                "description": "{user}发现自己能和特定动物讲话，会是谁呢？",
                "is_continue": true,
                "options": [
                    {
                        "text": "海豚",
                        "result": "{user}发现自己能听懂海豚的歌声，并从中感受到音乐的魅力。",
                        "add_tags": [
                            "音乐"
                        ]
                    },
                    {
                        "text": "鸡",
                        "result": "{user}和鸡你一言我一语，竟然领悟了神秘的'坤学'。",
                        "add_tags": [
                            "坤学"
                        ]
                    },
                    {
                        "text": "四维蜈蚣",
                        "result": "{user}与一只来自高维度的蜈蚣进行了深奥的交流，获得了量子启蒙。",
                        "effects": {
                            "intelligence": 10
                        },
                        "add_tags": [
                            "四次元"
                        ]
                    },
                    {
                        "text": "狗",
                        "result": "{user}能和狗狗无障碍交流，成为了远近闻名的'狗之友'。",
                        "effects": {
                            "social": 5
                        },
                        "add_tags": [
                            "汪星人"
                        ]
                    },
                    {
                        "text": "蛇",
                        "result": "{user}与蛇对话，似乎觉醒了某种古老的巫师血脉。",
                        "add_tags": [
                            "巫师血脉"
                        ]
                    },
                    {
                        "text": "笛卡尔鸭",
                        "result": "{user}和一只会思考的鸭子讨论哲学，脑洞大开。",
                        "add_tags": [
                            "哲学"
                        ]
                    }
                ],
                "priority": 0,
                "trigger_conditions": {}
            },
            "toddler_music_talent": {
                "title": "音乐天赋",
                "description": "{user}很喜欢搞音乐，他的目标是____",
                "is_continue": true,
                "options": [
                    {
                        "text": "当一名歌手",
                        "result": "{user}每天都在唱歌，梦想成为一名歌手。",
                        "effects": {
                            "social": 5,
                            "san": 5
                        },
                        "add_tags": [
                            "音乐：1"
                        ]
                    },
                    {
                        "text": "当一名舞者",
                        "result": "{user}喜欢跳舞，动作灵活，节奏感很强。",
                        "effects": {
                            "health": 5,
                            "social": 5
                        }
                    },
                    {
                        "text": "成为MC石头",
                        "result": "{user}喜欢模仿MC石头的风格，rap说得有模有样。",
                        "effects": {
                            "social": 5,
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "吹口哨",
                        "result": "{user}学会了吹口哨，常常用口哨表达心情。",
                        "effects": {
                            "san": 5
                        }
                    }
                ],
                "priority": 0,
                "trigger_conditions": {}
            }
        },
        "description": "1-5岁"
    },
    "少年": {
        "events": {
            "black_notebook": {
                "title": "黑色的笔记本",
                "description": "{user}放学在学校草坪上捡到一个黑色的笔记本，封面烫着“DEADNOTE”的金字。",
                "trigger_conditions": {
                    "age_range": [
                        7,
                        15
                    ]
                },
                "options": [
                    {
                        "text": "写上最近欺负自己人的名字",
                        "result": "{user}在纸上写下了那个让自己不爽的名字，突然一阵冷风吹过。",
                        "effects": {
                            "san": -1
                        }
                    },
                    {
                        "text": "在小本子上涂鸦",
                        "result": "{user}直接把小本子画花了，毫无心理压力。",
                        "effects": {
                            "san": 2
                        }
                    },
                    {
                        "text": "拿回家做草稿本",
                        "result": "其实这种笔记本质量还不错，就是有点吓人。",
                        "effects": {
                            "intelligence": 1
                        }
                    },
                    {
                        "text": "总之先写上自己的名字吧",
                        "result": "你在本子上写了自己的名字，随后什么也没有发生...暂时。",
                        "effects": {
                            "mystery": 1
                        }
                    },
                    {
                        "text": "上交国家",
                        "result": "你选择将本子交给老师或相关部门，很快忘记了此事。",
                        "effects": {
                            "social": 2
                        }
                    },
                    {
                        "text": "还是不要碰比较好",
                        "result": "{user}果断放弃，远离未知，平安是福。",
                        "effects": {
                            "luck": 1
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "internet_habit": {
                "title": "互联网",
                "description": "{user}上网的时候，都是在__",
                "trigger_conditions": {
                    "age_range": [
                        7,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "刷微博",
                        "result": "{user}每天都要刷微博，获取各种八卦和新鲜事。",
                        "effects": {
                            "san": 2
                        }
                    },
                    {
                        "text": "刷朋友圈",
                        "result": "{user}喜欢在朋友圈分享和看别人的动态。",
                        "effects": {
                            "social": 2
                        }
                    },
                    {
                        "text": "逛某宝",
                        "result": "{user}在某宝无限流连，购物车越加越多。",
                        "effects": {
                            "money": -200,
                            "san": 2
                        }
                    },
                    {
                        "text": "游戏",
                        "result": "{user}沉迷网游无法自拔，快乐提升了，但作业堆积如山。",
                        "effects": {
                            "san": 5,
                            "intelligence": -2
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "sony_psp": {
                "title": "索尼大法好",
                "description": "看到别人的孩子有PSP玩，{user}考虑是不是也买一个PSP。{user}最后决定__",
                "trigger_conditions": {
                    "age_range": [
                        7,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "花钱买一个",
                        "result": "{user}用自己的零花钱买了一个PSP，玩得很开心。",
                        "effects": {
                            "money": -500,
                            "san": 5
                        }
                    },
                    {
                        "text": "买买买，为信仰充值。",
                        "result": "{user}坚定信仰，为快乐充值。",
                        "effects": {
                            "money": -800,
                            "san": 10
                        }
                    },
                    {
                        "text": "不买，好好学习才是王道！",
                        "result": "{user}忍住了诱惑，把精力放在了学习上。",
                        "effects": {
                            "intelligence": 8
                        }
                    },
                    {
                        "text": "偷",
                        "result": "{user}选择了不正当方式，结果被发现，挨了一顿教育。",
                        "effects": {
                            "luck": -5,
                            "san": -10
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false,
                "allow_repeat": false
            },
            "elementary_school": {
                "title": "小学入学",
                "description": "{user}到了上小学的年龄，成为了祖国的花朵。",
                "trigger_conditions": {
                    "age_range": [
                        6,
                        6
                    ]
                },
                "options": [
                    {
                        "text": "下一个事件",
                        "result": "{user}开始上学。",
                        "effects": {
                            "intelligence": 10
                        },
                        "add_tags": [
                            "学生"
                        ]
                    }
                ],
                "priority": 10,
                "is_continue": false,
                "allow_repeat": false
            },
            "childhood_dream": {
                "title": "梦想",
                "description": "{user}从小就有梦想，它是__",
                "trigger_conditions": {
                    "age_range": [
                        7,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "成为警察",
                        "result": "{user}立志成为一名守护正义的警察。",
                        "effects": {
                            "intelligence": 5,
                            "social": 5
                        },
                        "add_tags": [
                            "梦想：警察"
                        ]
                    },
                    {
                        "text": "成为医生",
                        "result": "{user}想成为救死扶伤的医生。",
                        "effects": {
                            "intelligence": 10
                        },
                        "add_tags": [
                            "梦想：医生"
                        ]
                    },
                    {
                        "text": "发财",
                        "result": "{user}的目标非常朴实：搞钱，搞很多钱。",
                        "effects": {
                            "luck": 10
                        },
                        "add_tags": [
                            "梦想：富有"
                        ]
                    },
                    {
                        "text": "有一个精彩的人生",
                        "result": "{user}向往波澜壮阔、自由自在的人生。",
                        "effects": {
                            "san": 10
                        },
                        "add_tags": [
                            "梦想：精彩人生"
                        ]
                    },
                    {
                        "text": "长命百岁",
                        "result": "{user}觉得活着就是最大的胜利。",
                        "effects": {
                            "health": 10
                        },
                        "add_tags": [
                            "梦想：长寿"
                        ]
                    },
                    {
                        "text": "拯救世界",
                        "result": "{user}相信自己是天选之子，有拯救世界的使命。",
                        "effects": {
                            "mystery": 10
                        },
                        "add_tags": [
                            "梦想：救世主"
                        ]
                    },
                    {
                        "text": "当一名宇航员",
                        "result": "{user}渴望飞向星辰大海。",
                        "effects": {
                            "intelligence": 8,
                            "mystery": 5
                        },
                        "add_tags": [
                            "梦想：宇航员"
                        ]
                    },
                    {
                        "text": "当一名爸爸",
                        "result": "{user}想要一个温馨的家庭。",
                        "effects": {
                            "social": 5
                        },
                        "add_tags": [
                            "梦想：父亲"
                        ]
                    },
                    {
                        "text": "当一名妈妈",
                        "result": "{user}憧憬着母爱的光辉。",
                        "effects": {
                            "social": 5
                        },
                        "add_tags": [
                            "梦想：母亲"
                        ]
                    },
                    {
                        "text": "卖猪肉",
                        "result": "{user}觉得卖猪肉是个实惠又稳定的行当。",
                        "effects": {
                            "money": 10
                        },
                        "add_tags": [
                            "梦想：肉贩"
                        ]
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "homework": {
                "title": "繁重的作业",
                "description": "今天的作业特别多，你想出去玩。",
                "trigger_conditions": {
                    "age_range": [
                        7,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "先写作业",
                        "result": "虽然累，但完成了任务。",
                        "effects": {
                            "intelligence": 3,
                            "san": -2
                        }
                    },
                    {
                        "text": "先玩再说",
                        "result": "第二天被老师批评了。",
                        "effects": {
                            "social": -2,
                            "san": 5,
                            "intelligence": -1
                        }
                    }
                ]
            },
            "the_note_event": {
                "title": "纸条",
                "description": "一天，{user}在自己的抽屉上看到一张纸条。纸条让{user}晚上去学校附近的公园。{user}——",
                "trigger_conditions": {
                    "age_range": [
                        7,
                        15
                    ]
                },
                "options": [
                    {
                        "text": "撕碎纸条",
                        "result": "{user}撕碎了纸条，断绝了所有的好奇心。"
                    },
                    {
                        "text": "把纸条扔掉",
                        "result": "{user}把纸条扔进了垃圾桶，继续过着平静的生活。"
                    },
                    {
                        "text": "无视",
                        "result": "{user}由于完全不在意，直接无视了纸条的存在。"
                    },
                    {
                        "text": "上交老师",
                        "result": "{user}把纸条交给了老师。老师表扬了{user}的警惕性。"
                    },
                    {
                        "text": "应邀",
                        "result": "{user}怀揣着好奇心，决定在晚上前往公园..."
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "inadvertent_tortoise_death": {
                "title": "无心之过",
                "description": "{user}把朋友的乌龟踩死了。{user}__",
                "trigger_conditions": {
                    "age_range": [
                        7,
                        15
                    ]
                },
                "options": [
                    {
                        "text": "吟一首诗送给朋友",
                        "result": "{user}当场吟诵了一首《龟虽寿》，场面尴尬得足以扣出一座城堡。朋友气得当场和你绝交了。",
                        "effects": {
                            "intelligence": 5,
                            "social": -20,
                            "san": -5
                        }
                    },
                    {
                        "text": "买一个一模一样的",
                        "result": "{user}赶紧去花鸟市场买了个长得差不多的乌龟还了回去。朋友由于太迟钝，竟然完全没发现换了龟。",
                        "effects": {
                            "money": -5,
                            "social": 5,
                            "luck": 5
                        }
                    },
                    {
                        "text": "推卸责任",
                        "result": "{user}坚持说是乌龟自己想不开碰瓷。朋友很伤心，虽然没法反驳，但你们的关系出现了裂痕。",
                        "effects": {
                            "social": -10,
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "使用道具“原谅帽”",
                        "result": "{user}给朋友戴上了一顶绿莹莹的原谅帽。神迹发生了，朋友不仅原谅了你，还大度地请你吃了顿火锅。",
                        "effects": {
                            "social": 15,
                            "mystery": 10,
                            "luck": 10
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "birthday_9_event": {
                "title": "生日",
                "description": "{user} 9 岁生日到了，{user}想要什么生日礼物？",
                "trigger_conditions": {
                    "age_range": [
                        9,
                        9
                    ]
                },
                "options": [
                    {
                        "text": "电动遥控玩具",
                        "result": "那是男孩子的最爱，你如愿以偿得到了它。"
                    },
                    {
                        "text": "蛋糕就好了",
                        "result": "你非常容易满足，全家人开心地分享了蛋糕。"
                    },
                    {
                        "text": "游戏机",
                        "result": "从此你的人生开启了电子游戏的大门。"
                    },
                    {
                        "text": "BB弹枪",
                        "result": "有了它，你感觉自己就是街区里最威风的人。"
                    },
                    {
                        "text": "只要有很多朋友来庆祝就够了",
                        "result": "热闹的派对让你感受到了友情的力量。"
                    },
                    {
                        "text": "二次元手办",
                        "result": "你开始进入了奇妙的宅文化世界。"
                    },
                    {
                        "text": "贪婪玩约",
                        "result": "你想要更多...结果什么也没得到，还被大人教育了一顿。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "strange_uncle_encounter": {
                "title": "怪叔叔",
                "description": "一个怪叔叔跟{user}说：“叔叔给你糖吃，跟叔叔去玩好不好？”{user}__",
                "trigger_conditions": {
                    "age_range": [
                        4,
                        10
                    ]
                },
                "options": [
                    {
                        "text": "跟他走",
                        "result": "{user}拿了怪叔叔的糖，跟叔叔去玩。",
                        "continue_event": "being_kidnapped"
                    },
                    {
                        "text": "拒绝",
                        "result": "{user}拒绝了怪叔叔，怪叔叔灰溜溜地走了。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "being_kidnapped": {
                "title": "被拐卖",
                "description": "{user}拿了怪叔叔的糖，跟叔叔去玩。怪叔叔把{user}扛起来，进了一个小黑屋。{user}进了小黑屋后，被打了麻醉，然后就昏睡过去了。等到{user}醒来，他发现自己的四肢都给截断了，被丢在路边乞讨。",
                "is_continue": true,
                "options": [
                    {
                        "text": "下一事件",
                        "result": "{user}的生活陷入了绝望...",
                        "continue_event": "begging_bad_luck_death"
                    }
                ]
            },
            "begging_bad_luck_death": {
                "title": "乞讨：坏运气",
                "description": "{user}在路边乞讨一年，这一年不好混了，每天都只有几毛钱的收入。每天到了深夜，他的钱会被乞丐后台没收，如果钱太少了，{user}就会被运到小黑屋里鞭打。{user}在一次被鞭打中，终于死掉了。{user}保持着微笑死去，因为死亡对于{user}来说是一种解脱。",
                "is_continue": true,
                "options": [
                    {
                        "text": "重入轮回",
                        "risk": 1.0,
                        "death_reason": "{user}在被拐卖的非人折磨中，终于迎来了生命的终点。对他而言，这或许是唯一的解脱。"
                    }
                ]
            },
            "tv_fan_event": {
                "title": "电视迷",
                "description": "打开电视，{user}最喜欢看《__》了。",
                "trigger_conditions": {
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "走进科学",
                        "result": "{user}看完之后，总觉得这个世界充满了未解之谜。"
                    },
                    {
                        "text": "钢笔画技法",
                        "result": "{user}拿起笔，也想画上两笔。"
                    },
                    {
                        "text": "吸氧羊",
                        "result": "{user}看得很投入，虽然这剧名听起来有点怪。"
                    },
                    {
                        "text": "神探夏洛克",
                        "result": "{user}觉得破案真是帅爆了。"
                    },
                    {
                        "text": "全民健身操",
                        "result": "{user}跟着电视里的节奏跳了起来。"
                    },
                    {
                        "text": "彩虹小马",
                        "result": "{user}发现友谊就是魔法。"
                    },
                    {
                        "text": "中国比惨王",
                        "result": "{user}觉得自己的生活其实还挺幸福的。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "snack_preference_event": {
                "title": "零食",
                "description": "{user} 最爱吃的零食是__",
                "trigger_conditions": {
                    "age_range": [
                        6,
                        12
                    ]
                },
                "options": [
                    {
                        "text": "辣条",
                        "result": "{user}最爱吃辣条，那种麻辣鲜香的味道让他回味无穷。"
                    },
                    {
                        "text": "爆炸糖",
                        "result": "{user}喜欢爆炸糖在嘴里噼里啪啦弹跳的感觉，非常刺激。"
                    },
                    {
                        "text": "棉花糖",
                        "result": "{user}觉得棉花糖软绵绵、甜滋滋的，像吃云朵一样。"
                    },
                    {
                        "text": "自己的臭脚",
                        "result": "{user}居然觉得自己的臭脚有种迷人的香味，经常旁若无人地啃起来。"
                    },
                    {
                        "text": "济公丹",
                        "result": "{user}管这种黑乎乎的小丸子叫“济公丹”，觉得能包治百病。"
                    },
                    {
                        "text": "大白兔糖",
                        "result": "{user}最爱大白兔奶糖，连那层糯米纸都要仔细舔干净。"
                    },
                    {
                        "text": "牛杂",
                        "result": "{user}放学后总要去路边摊买一碗牛杂，那是童年最奢华的享受。"
                    },
                    {
                        "text": "三色冰淇淋",
                        "result": "{user}纠结于先吃哪种颜色，最后发现混在一起吃最美味。"
                    },
                    {
                        "text": "五仁月饼",
                        "result": "{user}是少数能领略五仁月饼魅力的人，觉得里面的坚果非常有嚼劲。"
                    },
                    {
                        "text": "调味料",
                        "result": "{user}口味独特，居然直接偷吃厨房里的调味料，被咸得够呛。"
                    },
                    {
                        "text": "暗物质",
                        "result": "{user}在实验室后院发现了一种“暗物质”，吃完后感觉身体开启了某种神秘进化。"
                    },
                    {
                        "text": "脑残炫彩牛肉面",
                        "result": "{user}被这种花里胡哨的牛肉面吸引了，吃完后智力似乎受到了微妙冲击。"
                    },
                    {
                        "text": "山椒",
                        "result": "{user}挑战极限吃下山椒，被辣得满地找牙。"
                    },
                    {
                        "text": "荷兰水",
                        "result": "{user}最爱喝这种充满气泡的“荷兰水”，打个嗝感觉通体舒畅。"
                    },
                    {
                        "text": "美味风蛇",
                        "result": "{user}吃下了美味风蛇，身体发生了奇妙的变化，变成了一个海盗！"
                    },
                    {
                        "text": "转基因薯片",
                        "result": "{user}吃下了转基因薯片，感觉每一口都在挑战生物学常识。"
                    },
                    {
                        "text": "野味",
                        "result": "{user}居然去尝试野味，这种危险的行为让他生了一场大病。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "coser_encounter": {
                "title": "coser",
                "description": "{user}在大街上看到了一个cos洛天依的coser。{user}决定__",
                "trigger_conditions": {
                    "age_range": [
                        12,
                        20
                    ]
                },
                "options": [
                    {
                        "text": "上前勾搭",
                        "result": "{user}走上前去，试图与那位coser攀谈。",
                        "continue_event": "coser_anomaly"
                    },
                    {
                        "text": "拍照发朋友圈",
                        "result": "{user}拍了张美美的照片发了朋友圈，收获了一堆点赞。"
                    },
                    {
                        "text": "不理睬",
                        "result": "{user}淡定地走开了。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "coser_anomaly": {
                "title": "异样",
                "description": "{user}走上前去，与那位coser攀谈。聊天的过程中，{user}似乎注意到这位coser的裙子似乎被什么东西顶起来了。{user}__",
                "is_continue": true,
                "options": [
                    {
                        "text": "帮他整好裙子",
                        "result": "{user}热心地伸手去帮对方整理裙子，结果在那位“小姐姐”惊愕的目光中，摸到了某种及其坚硬且具有生命力的“物理支撑杆”……"
                    },
                    {
                        "text": "赶紧逃跑",
                        "result": "{user}敏锐地察觉到了某种哲学的气息，头也不回地跑了。"
                    }
                ]
            },
            "giant_husky_encounter": {
                "title": "巨型哈士奇遭遇",
                "description": "{user}在路上遇到了一个几百斤重的巨型哈士奇，这哈士奇看起来好像饿极了，两只小眼睛盯着{user}一动不动。空气中弥漫着紧张的气氛。",
                "trigger_conditions": {
                    "age_range": [
                        8,
                        8
                    ],
                    "excluded_tags": [
                        "体弱多病"
                    ]
                },
                "options": [
                    {
                        "text": "哈士奇好可爱，我要去摸摸",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "luck": 80
                                    }
                                },
                                "result": "奇迹般地，这只巨型哈士奇竟然很温顺！它让你摸了摸，还舔了舔你的手。原来它只是想要一些关爱。",
                                "effects": {
                                    "social": 10,
                                    "luck": 5
                                },
                                "add_tags": [
                                    "动物朋友",
                                    "勇敢者"
                                ]
                            },
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "luck": 50
                                    }
                                },
                                "result": "哈士奇被你的善意打动了，但它还是很饿。它轻轻推了推你，示意你给它找些食物。",
                                "effects": {
                                    "social": 5,
                                    "money": -10
                                },
                                "add_tags": [
                                    "善良"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "哈士奇误解了你的意图，一口咬向了你！幸好只是轻伤，但你被吓得不轻。",
                                "effects": {
                                    "health": -20,
                                    "san": -10
                                }
                            }
                        ]
                    },
                    {
                        "text": "为避免被袭击，躺地上装死",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "intelligence": 70
                                    }
                                },
                                "result": "你的策略很聪明！哈士奇闻了闻你，发现你'没有威胁'后就失去了兴趣，转身离开了。",
                                "effects": {
                                    "san": 5
                                },
                                "add_tags": [
                                    "机智应对"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你装死的技术还需要提高...哈士奇用鼻子蹭了蹭你，然后开始舔你的脸。虽然没有危险，但场面很尴尬。",
                                "effects": {
                                    "social": -5,
                                    "san": -5
                                }
                            }
                        ]
                    },
                    {
                        "text": "拔腿就跑",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "health": 70
                                    }
                                },
                                "result": "你的身体素质不错！成功跑过了笨重的巨型哈士奇，安全脱险。",
                                "effects": {
                                    "health": 5
                                },
                                "add_tags": [
                                    "逃跑高手"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你跑得气喘吁吁，但还是被哈士奇追上了。幸好它只是想和你玩耍，不过你已经筋疲力尽了。",
                                "effects": {
                                    "health": -10,
                                    "social": 5
                                }
                            }
                        ]
                    },
                    {
                        "text": "无视，继续前行",
                        "result": "你表现出了令人敬佩的冷静。哈士奇看到你毫不在意，反而对你失去了兴趣，自己走开了。",
                        "effects": {
                            "san": 10
                        },
                        "add_tags": [
                            "淡定"
                        ]
                    },
                    {
                        "text": "喷火！",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "required_tags": [
                                        "神秘体质"
                                    ]
                                },
                                "result": "不可思议！你真的喷出了火焰！哈士奇被吓跑了，而你发现了自己隐藏的超能力。",
                                "effects": {
                                    "mystery": 20,
                                    "san": -5
                                },
                                "add_tags": [
                                    "火焰掌控者",
                                    "超能力者"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你张大嘴巴试图喷火，但什么也没发生。哈士奇歪着头看着你做出奇怪的表情，场面十分尴尬。",
                                "effects": {
                                    "san": -10,
                                    "social": -5
                                }
                            }
                        ]
                    },
                    {
                        "text": "隐身逃跑",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "mystery": 80
                                    }
                                },
                                "result": "你的身影逐渐变得透明！哈士奇困惑地四处嗅探，最终放弃寻找。你成功隐身脱险！",
                                "effects": {
                                    "mystery": 10,
                                    "luck": 10
                                },
                                "add_tags": [
                                    "隐身术师",
                                    "神秘存在"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你闭上眼睛，心想'我隐身了'，但哈士奇依然能清楚地看到你。它甚至用爪子戳了剖你。",
                                "effects": {
                                    "san": -5,
                                    "social": -5
                                }
                            }
                        ]
                    },
                    {
                        "text": "使用风火轮逃跑",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "mystery": 60,
                                        "luck": 70
                                    }
                                },
                                "result": "脚下突然出现了燃烧的轮子！你像哪吒一样踩着风火轮飞速逃离，哈士奇只能望着你的背影发呆。",
                                "effects": {
                                    "mystery": 15,
                                    "social": 20
                                },
                                "add_tags": [
                                    "风火轮使者",
                                    "传说中的存在"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你在原地蹦跳，试图召唤风火轮，但只是踩到了一块石头差点摔倒。哈士奇看起来很困惑。",
                                "effects": {
                                    "health": -5,
                                    "san": -5
                                }
                            }
                        ]
                    },
                    {
                        "text": "飞行逃跑",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "mystery": 90
                                    }
                                },
                                "result": "你的身体轻盈地飞上了天空！从空中俯视，那只巨型哈士奇变得如蚂蚁般渺小。",
                                "effects": {
                                    "mystery": 20,
                                    "san": 5
                                },
                                "add_tags": [
                                    "飞行能力者",
                                    "天空的主人"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你拼命挥舞手臂想要飞起来，但重力无情地把你拉向地面。哈士奇觉得你的动作很有趣。",
                                "effects": {
                                    "health": -5,
                                    "social": -10
                                }
                            }
                        ]
                    },
                    {
                        "text": "与其对话",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "mystery": 50,
                                        "social": 70
                                    }
                                },
                                "result": "令人惊讶的是，哈士奇竟然回应了你！它用低沉的声音说：'人类，我只是在寻找回家的路。'你们进行了一场奇妙的对话。",
                                "effects": {
                                    "mystery": 15,
                                    "social": 15,
                                    "san": -5
                                },
                                "add_tags": [
                                    "动物语言者",
                                    "奇遇体验者"
                                ]
                            },
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "social": 60
                                    }
                                },
                                "result": "虽然哈士奇不会说话，但你温和的语调似乎安抚了它。它渐渐放松下来，甚至允许你接近。",
                                "effects": {
                                    "social": 10
                                },
                                "add_tags": [
                                    "动物沟通师"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你试图和哈士奇交流，但它只是歪着头看着你，然后打了个大哈欠。看来对话失败了。",
                                "effects": {
                                    "san": -5
                                }
                            }
                        ]
                    }
                ]
            },
            "childhood_hobby": {
                "title": "儿时爱好",
                "description": "你对某项活动产生了浓厚的兴趣。",
                "trigger_conditions": {
                    "age_range": [
                        7,
                        10
                    ]
                },
                "options": [
                    {
                        "text": "喜欢阅读",
                        "result": "你沉迷于各种书籍，知识面不断扩大。",
                        "effects": {
                            "intelligence": 15,
                            "social": -5
                        },
                        "add_tags": [
                            "书虫"
                        ]
                    },
                    {
                        "text": "热爱运动",
                        "result": "你喜欢各种体育活动，身体素质不断提高。",
                        "effects": {
                            "health": 15,
                            "intelligence": 5
                        },
                        "add_tags": [
                            "运动健将"
                        ]
                    },
                    {
                        "text": "痴迷游戏",
                        "result": "你对电子游戏产生了浓厚兴趣。",
                        "effects": {
                            "intelligence": 5,
                            "health": -5,
                            "social": -5
                        },
                        "add_tags": [
                            "游戏迷"
                        ]
                    },
                    {
                        "text": "学习才艺",
                        "result": "你开始学习一门艺术才能，如钢琴、绘画等。",
                        "effects": {
                            "intelligence": 10,
                            "social": 5
                        },
                        "add_tags": [
                            "艺术细胞"
                        ]
                    }
                ]
            }
        },
        "description": "7-12岁"
    },
    "青少年": {
        "events": {
            "rebellion": {
                "title": "叛逆期",
                "description": "你看什么都不顺眼，总想和父母对着干。",
                "trigger_conditions": {
                    "age_range": [
                        13,
                        16
                    ]
                },
                "options": [
                    {
                        "text": "顶撞父母",
                        "result": "由于你的冲动，家庭气氛很紧张。",
                        "effects": {
                            "social": -5,
                            "san": -5
                        },
                        "add_tags": [
                            "叛逆"
                        ]
                    },
                    {
                        "text": "自我调节",
                        "result": "你尝试去跑步发泄情绪。",
                        "effects": {
                            "health": 5,
                            "san": 5
                        }
                    }
                ]
            },
            "truth_belief_choice": {
                "title": "真理的信奉",
                "description": "在人生的某个重要时刻，{user}需要选择一个作为自己人生信条的真理。这个选择将深刻影响你的世界观和人生道路。",
                "trigger_conditions": {
                    "age_range": [
                        16,
                        16
                    ],
                    "min_attributes": {
                        "intelligence": 40
                    }
                },
                "options": [
                    {
                        "text": "站得越高，看得越远",
                        "result": "你选择了这个充满哲理的真理。从此你更加注重提升自己的高度和视野，无论是知识层面还是社会地位。",
                        "effects": {
                            "intelligence": 10,
                            "social": 10
                        },
                        "add_tags": [
                            "高瞻远瞩",
                            "哲学思考者"
                        ]
                    },
                    {
                        "text": "婚姻是爱情的坟墓",
                        "result": "你对婚姻制度产生了深深的怀疑。这种观念让你在感情问题上更加谨慎，但也可能让你错过一些美好的感情。",
                        "effects": {
                            "intelligence": 5,
                            "social": -10,
                            "san": -5
                        },
                        "add_tags": [
                            "感情怀疑论者",
                            "独身主义者"
                        ]
                    },
                    {
                        "text": "人是会思考的芦苇",
                        "result": "你被帕斯卡的这句名言深深打动。你认识到人类虽然渺小脆弱，但思考的能力让人类拥有了独特的尊严 and 价值。",
                        "effects": {
                            "intelligence": 15,
                            "san": 10
                        },
                        "add_tags": [
                            "人文主义者",
                            "深度思考者"
                        ]
                    },
                    {
                        "text": "上海自来水来自海上",
                        "result": "你选择了这个有趣的回文句作为人生真理。虽然别人觉得奇怪，但你从中领悟到了循环和对称的美学原理。",
                        "effects": {
                            "luck": 10,
                            "social": -5,
                            "mystery": 5
                        },
                        "add_tags": [
                            "语言艺术家",
                            "独特品味"
                        ]
                    },
                    {
                        "text": "Allah Akbar (真主至大)",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "min_attributes": {
                                        "san": 70
                                    }
                                },
                                "result": "你选择了伊斯兰教的这句颂词作为信条。这给了你内心的平静和精神支撑，你开始更加虔诚地生活。",
                                "effects": {
                                    "san": 15,
                                    "social": 5
                                },
                                "add_tags": [
                                    "宗教信仰者",
                                    "虔诚之人"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "你选择了这句话，但对其深层含义理解不够深刻。不过这仍然给了你一些精神慰藉。",
                                "effects": {
                                    "san": 10
                                },
                                "add_tags": [
                                    "精神寻求者"
                                ]
                            }
                        ]
                    }
                ]
            },
            "school_bully": {
                "title": "校园霸凌",
                "description": "有同学在欺负一个比较内向的同学，{user}看到了这一幕。",
                "trigger_conditions": {
                    "age_range": [
                        13,
                        18
                    ],
                    "excluded_tags": [
                        "恶霸"
                    ]
                },
                "options": [
                    {
                        "text": "挺身而出",
                        "result": "{user}勇敢地站出来制止了霸凌行为，赢得了大家的尊重。",
                        "effects": {
                            "social": 20,
                            "health": -8,
                            "intelligence": 5
                        },
                        "add_tags": [
                            "正义感",
                            "勇敢"
                        ],
                        "remove_tags": [
                            "胆小"
                        ]
                    },
                    {
                        "text": "上前嘲讽",
                        "risk": 1,
                        "result": "{user}上前嘲讽了被霸凌的同学，被一堆人围殴致死。"
                    },
                    {
                        "text": "告诉老师",
                        "result": "{user}选择告诉老师，老师及时制止了霸凌。",
                        "effects": {
                            "social": -5,
                            "intelligence": 8
                        }
                    },
                    {
                        "text": "默默离开",
                        "result": "{user}选择默默离开现场。",
                        "effects": {
                            "health": -3,
                            "luck": -5
                        },
                        "remove_tags": [
                            "勇敢"
                        ]
                    }
                ]
            },
            "puberty_changes": {
                "title": "青春期变化",
                "description": "你的身体开始发生青春期变化，情绪也变得波动。",
                "trigger_conditions": {
                    "age_range": [
                        13,
                        15
                    ]
                },
                "options": [
                    {
                        "text": "平静接受",
                        "result": "你理性地接受这些变化，并主动了解相关知识。",
                        "effects": {
                            "intelligence": 5,
                            "san": 5
                        },
                        "add_tags": [
                            "成熟"
                        ]
                    },
                    {
                        "text": "情绪不稳",
                        "result": "你因为这些变化而情绪波动很大，经常与家人发生争执。",
                        "effects": {
                            "social": -5,
                            "san": -5
                        },
                        "add_tags": [
                            "叛逆期"
                        ]
                    }
                ]
            },
            "first_love": {
                "title": "初恋",
                "description": "班上有一位同学对你表现出特别的关注。",
                "trigger_conditions": {
                    "age_range": [
                        14,
                        18
                    ]
                },
                "options": [
                    {
                        "text": "接受对方的好感",
                        "result": "你们开始了青涩的恋爱关系，体验着初恋的甜蜜与烦恼。",
                        "effects": {
                            "social": 10,
                            "intelligence": -5
                        },
                        "add_tags": [
                            "初恋"
                        ]
                    },
                    {
                        "text": "专注学业，婉拒对方",
                        "result": "你决定将精力集中在学业上，礼貌地拒绝了对方。",
                        "effects": {
                            "intelligence": 10,
                            "social": -5
                        }
                    }
                ]
            }
        },
        "description": "13-18岁"
    },
    "青年": {
        "events": {
            "college_admission": {
                "title": "大学生活",
                "description": "你进入了大学，自由的生活在向你招手。",
                "priority": 10,
                "trigger_conditions": {
                    "age_range": [
                        19,
                        19
                    ]
                },
                "options": [
                    {
                        "text": "沉迷学习",
                        "result": "图书馆是你的第二个家。",
                        "effects": {
                            "intelligence": 10,
                            "social": -5
                        },
                        "add_tags": [
                            "学霸"
                        ]
                    },
                    {
                        "text": "社团活动",
                        "result": "你认识了很多朋友。",
                        "effects": {
                            "social": 10,
                            "intelligence": 1
                        },
                        "add_tags": [
                            "现充"
                        ]
                    }
                ]
            },
            "first_job": {
                "title": "求职季",
                "description": "毕业了，要找工作了。",
                "priority": 10,
                "trigger_conditions": {
                    "age_range": [
                        23,
                        23
                    ]
                },
                "options": [
                    {
                        "text": "大厂996",
                        "result": "工资很高，但头发掉得很快。",
                        "effects": {
                            "money": 20,
                            "health": -10,
                            "san": -10
                        },
                        "add_tags": [
                            "社畜"
                        ]
                    },
                    {
                        "text": "考公上岸",
                        "result": "虽然工资一般，但十分稳定。",
                        "effects": {
                            "money": 5,
                            "san": 5,
                            "social": 5
                        },
                        "add_tags": [
                            "公务员"
                        ]
                    }
                ]
            },
            "car_accident": {
                "title": "车祸瞬间",
                "description": "你正在坐出租车玩手机，突然，发生了车祸你...",
                "trigger_conditions": {
                    "age_range": [
                        19,
                        25
                    ]
                },
                "options": [
                    {
                        "text": "拍照发朋友圈",
                        "result": "前方发生车祸，你掏出手机准备拍照发朋友圈。"
                    },
                    {
                        "text": "我要回去！我的外卖还没到！",
                        "result": "前方发生车祸，你大声要求司机掉头回去。"
                    },
                    {
                        "text": "啥都不做",
                        "result": "你正在坐出租车玩手机，发生了车祸，你被卡车撞死。",
                        "add_tags": [
                            "异世界：魔界"
                        ],
                        "continue_event": "isekai_arrival"
                    },
                    {
                        "text": "这一定是梦，让我捏自己一下",
                        "result": "你用力捏了自己一下，疼得大叫。就在这时，一辆卡车撞向了出租车。",
                        "risk": 1,
                        "death_reason": "验证现实的代价"
                    },
                    {
                        "text": "寒冰附体",
                        "result": "你不知为何喊出了“寒冰附体”，但什么也没发生。"
                    },
                    {
                        "text": "芭比Q了家人们",
                        "result": "你喊了一声“芭比Q了家人们”，然后被卡车撞死了。",
                        "risk": 1,
                        "death_reason": "最后的遗言竟是网络流行语"
                    }
                ]
            },
            "wrong_number_president": {
                "title": "打错电话",
                "description": "{user}有一次打错电话，打给了美国总统。",
                "trigger_conditions": {
                    "age_range": [
                        20,
                        25
                    ]
                },
                "options": [
                    {
                        "text": "立马挂电话",
                        "result": "{user}慌忙挂断了电话，心跳加速。",
                        "effects": {
                            "social": -5
                        }
                    },
                    {
                        "text": "向总统问好",
                        "result": "{user}礼貌地向总统问好，对方也友好回应。",
                        "effects": {
                            "social": 10,
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "问总统吃了没",
                        "result": "{user}关心地问总统吃饭了没，把总统逗笑了。",
                        "effects": {
                            "social": 15,
                            "luck": 5
                        },
                        "add_tags": [
                            "幽默"
                        ]
                    },
                    {
                        "text": "约出来吃宵夜",
                        "result": "{user}大胆地约总统吃宵夜，对方婉拒但称称赞了{user}的勇气。",
                        "effects": {
                            "social": 8,
                            "luck": 8
                        },
                        "add_tags": [
                            "胆大"
                        ]
                    },
                    {
                        "text": "反映社会问题",
                        "result": "{user}认真地向总统反映了一些社会问题，得到了重视。",
                        "effects": {
                            "intelligence": 15,
                            "social": 10
                        },
                        "add_tags": [
                            "社会责任感"
                        ]
                    },
                    {
                        "text": "装成中国移动推销",
                        "result": "{user}装成客服推销套餐，把总统都整懵了。",
                        "effects": {
                            "social": 5,
                            "luck": 10
                        },
                        "add_tags": [
                            "恶作剧大师"
                        ]
                    },
                    {
                        "text": "求个国家职位",
                        "result": "{user}打错了电话，打给了美国总统。{user}将计就计，竟然向总统说：'给我个国家的职务做做吧。'",
                        "effects": {
                            "luck": 20
                        },
                        "continue_event": "president_job_offer"
                    }
                ]
            },
            "president_job_offer": {
                "title": "总统的回应",
                "description": "电话里沉默了一下，接着有翻书的声音。没过多久，电话里头的总统说：'好的，铲屎官的职位现在空缺，{user}，你就做吧。'",
                "is_continue": true,
                "options": [
                    {
                        "text": "接受任命",
                        "result": "美国总统赋予{user}所谓'铲屎官'职位。",
                        "effects": {
                            "social": 20,
                            "luck": 15
                        },
                        "add_tags": [
                            "阿美丽卡:铲屎官"
                        ],
                        "continue_event": "mysterious_package"
                    }
                ]
            },
            "mysterious_package": {
                "title": "神秘包裹",
                "description": "没多久，{user}收到一副墨镜，和一条铁棒状的仪器，这个仪器有一个按钮，按下这个按钮后，会发出闪光。任何人看到这个闪光，都会忘记30分钟前发生的所有事情。",
                "is_continue": true,
                "options": [
                    {
                        "text": "收下装备",
                        "result": "{user}成为了最年轻的特工！",
                        "effects": {
                            "intelligence": 20,
                            "social": 15,
                            "luck": 20
                        },
                        "add_tags": []
                    }
                ]
            },
            "heroic_rescue_adult": {
                "title": "英雄时刻",
                "description": "大楼着火了，{user}听到里面有人呼救！",
                "trigger_conditions": {
                    "age_range": [
                        19,
                        50
                    ],
                    "excluded_tags": [
                        "残疾"
                    ]
                },
                "options": [
                    {
                        "text": "冲进火场救人",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "any_of": [
                                        {
                                            "tags": [
                                                "消防员"
                                            ]
                                        },
                                        {
                                            "attributes": {
                                                "health": 80,
                                                "intelligence": 70
                                            },
                                            "all_required": true
                                        }
                                    ]
                                },
                                "result": "{user}成功救出了被困人员，成为了真正的英雄！",
                                "effects": {
                                    "social": 40,
                                    "health": -20,
                                    "luck": 30
                                },
                                "add_tags": [
                                    "英雄"
                                ]
                            },
                            {
                                "conditions": {
                                    "tags": [
                                        "警察"
                                    ]
                                },
                                "result": "{user}专业地组织撤离，最大程度减少了伤亡。",
                                "effects": {
                                    "social": 30,
                                    "intelligence": 10
                                },
                                "add_tags": [
                                    "专业救援"
                                ]
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "{user}勇敢地冲了进去，但被浓烟呛得不轻...",
                                "effects": {
                                    "health": -40,
                                    "social": 15
                                },
                                "risk": 0.3
                            }
                        ]
                    },
                    {
                        "text": "呼叫消防队",
                        "result": "{user}及时呼叫了消防队，协助疏散人群。",
                        "effects": {
                            "social": 10,
                            "intelligence": 5
                        }
                    }
                ]
            },
            "earthquake_in_toilet": {
                "title": "地震",
                "description": "{user}所在的城市发生了12级地震，{user}正在上厕所！",
                "trigger_conditions": {
                    "age_range": [
                        19,
                        40
                    ]
                },
                "options": [
                    {
                        "text": "拉起裤子就跑！",
                        "result": "{user}光着屁股冲出了大楼，虽然社死，但捡回了一条命。",
                        "effects": {
                            "health": 10,
                            "social": -50
                        }
                    },
                    {
                        "text": "拿纸擦屁股！",
                        "result": "当你擦完屁股准备起身时，整座建筑已经化为废墟。你被压在了马桶盖下面。",
                        "risk": 0.9,
                        "death_reason": "追求极致的洁净而错失逃生时刻"
                    },
                    {
                        "text": "拿纸擦嘴！",
                        "result": "极度慌乱中你做出了离奇的举动。这大概是你在人世间出的最后一次洋相。",
                        "risk": 1.0,
                        "death_reason": "被地震夺走生命，顺便丢了面子"
                    },
                    {
                        "text": "拍照发朋友圈",
                        "result": "动态发布成功！配文：12级地震直播中，家人们反手给个关注！然后就没有然后了。",
                        "risk": 1.0,
                        "death_reason": "为了流量献出了生命"
                    },
                    {
                        "text": "并没有慌",
                        "result": "{user}安稳地坐在马桶上，既然是12级地震，反正也跑不掉，不如体面一点。",
                        "risk": 1.0,
                        "death_reason": "在12级地震中选择了极其体面的死法"
                    },
                    {
                        "text": "并没有慌",
                        "result": "{user}甚至还拿出了手机玩了一局消消乐，直到永远安静下来。",
                        "risk": 1.0,
                        "death_reason": "大心脏，但命不够硬"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "haircut_scam": {
                "title": "理发",
                "description": "{user}有一天去理发，理发店不断向{user}推荐一些项目，说这些项目现在在搞活动，都是免费的。{user}__",
                "trigger_conditions": {
                    "age_range": [
                        20,
                        35
                    ]
                },
                "options": [
                    {
                        "text": "心动",
                        "result": "{user}心动了，决定尝试一下这些“免费”项目。",
                        "continue_event": "haircut_bill"
                    },
                    {
                        "text": "拒绝",
                        "result": "{user}坚决地拒绝了推销，理发师只好默默地给{user}剪完了头发。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "haircut_bill": {
                "title": "天价消费清单",
                "description": "等理发店帮{user}做完这些嫩肤，提取，提发际线，提取鬓角三部位等美容项目后，{user}照了照镜子，发现自己像个喜剧电影里的丑角……理发店递给{user}一张消费清单，总费用高达4万块。理发店说这些美容项目是免费的，这4万块只是服务费。{user}只能__",
                "is_continue": true,
                "options": [
                    {
                        "text": "乖乖给钱",
                        "result": "{user}自认倒霉，忍痛付了4万块，存款瞬间清空。",
                        "effects": {
                            "money": -100,
                            "san": -30
                        }
                    },
                    {
                        "text": "报警",
                        "result": "警察叔叔来了以后，认定理发店存在消费欺诈，理发店只好作罢。",
                        "effects": {
                            "intelligence": 10,
                            "social": 5
                        }
                    },
                    {
                        "text": "向新闻爆料",
                        "result": "{user}联系了媒体，这起“天价理发”事件成了当天的头条，理发店被迫关门并道歉。",
                        "effects": {
                            "social": 20,
                            "luck": 10
                        }
                    },
                    {
                        "text": "使用任意门逃跑",
                        "result": "{user}反手掏出一个任意门，瞬间消失在理发店。理发师们都傻眼了。",
                        "effects": {
                            "mystery": 50,
                            "luck": 20
                        }
                    },
                    {
                        "text": "隐身逃跑",
                        "result": "{user}屏住呼吸进入隐身状态，在众人的注视下淡定地走了出去，顺便还顺走了一瓶洗发水。",
                        "effects": {
                            "mystery": 30,
                            "luck": 15
                        }
                    }
                ]
            },
            "vanguard_watch_recruitment": {
                "title": "先锋守望组织",
                "description": "一个名为“先锋守望”的组织拉着大横幅在大街上招聘了。“加入我们，为未来而战！在人类陷入空前危机之时，来自全球各个国家的特种精英们，为了结束战争，重铸秩序而团结在了一起。那就是我们先锋守望组织，你愿意与我们共同抗争吗？只需缴纳198元，你就可以当世界的英雄！”{user}__",
                "trigger_conditions": {
                    "age_range": [
                        20,
                        35
                    ]
                },
                "options": [
                    {
                        "text": "交钱加入！",
                        "result": "{user}交了198元加入了组织。虽然感觉哪里怪怪的，但想到自己即将成为拯救世界的英雄，心里还是美滋滋的。",
                        "effects": {
                            "money": -5,
                            "social": 10,
                            "san": 5
                        },
                        "add_tags": [
                            "先锋守望成员"
                        ]
                    },
                    {
                        "text": "没兴趣",
                        "result": "{user}觉得这听起来像个骗局，头也不回地走了。",
                        "effects": {
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "拍照发朋友圈",
                        "result": "{user}拍了张横幅的照片发了朋友圈。配词：现在的专业骗子越来越有创意了哈哈。",
                        "effects": {
                            "social": 5
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "carp_on_shore": {
                "title": "鲤鱼",
                "description": "{user}在湖边散步，看到有一条红鲤鱼跳出了岸边，非常生猛。",
                "trigger_conditions": {
                    "age_range": [
                        18,
                        40
                    ]
                },
                "options": [
                    {
                        "text": "捡回家吃了",
                        "result": "{user}把鲤鱼带回家，做成了一顿美味的红烧鲤鱼。味道鲜美，但心里总觉得哪里怪怪的。",
                        "effects": {
                            "health": 5,
                            "money": 5,
                            "san": -5
                        }
                    },
                    {
                        "text": "放回水里",
                        "result": "{user}将红鲤鱼放回湖中。鲤鱼在水中轻快地游走，似乎在回头向你致谢。你感到内心十分平静。",
                        "effects": {
                            "san": 10,
                            "luck": 5
                        }
                    },
                    {
                        "text": "无视",
                        "result": "{user}看了一眼，继续自己的散步。大自然的事情就交给大自然吧。",
                        "effects": {
                            "intelligence": 2
                        }
                    },
                    {
                        "text": "某个奸商放生的吧",
                        "result": "{user}冷言冷语地走开了，这种商业化的放生活动见多了。",
                        "effects": {
                            "intelligence": 5,
                            "social": -2
                        }
                    },
                    {
                        "text": "投掷精灵球",
                        "result": "{user}中二病发作，掏出一个精灵球扔了过去。可惜现实中没有捕获特效，球掉进水里找不到了。",
                        "effects": {
                            "money": -5,
                            "san": 5,
                            "mystery": 5
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "cinema_fan_war": {
                "title": "看电影",
                "description": "{user}在电影院里看电影，突然观众分成了两边互相对骂。左边的观众大喊“为了国王的荣誉！”、“为了联盟！”，而右边的观众大喊“为了部落的荣耀！”、“为了女王！”……见此情形，{user}大喊__",
                "trigger_conditions": {
                    "age_range": [
                        18,
                        30
                    ]
                },
                "options": [
                    {
                        "text": "愿圣光与你同在",
                        "result": "你加入了联盟阵营，左边的观众向你投来友好的目光。"
                    },
                    {
                        "text": "力量与农药",
                        "result": "听到这个谐音梗，全场瞬间安静了三秒，随后爆发出哄堂大笑。"
                    },
                    {
                        "text": "大地母亲在忽悠着你",
                        "result": "你这个蹩脚的冷笑话成功缓和了现场紧绷的气氛。"
                    },
                    {
                        "text": "为了辛多拉的荣耀",
                        "result": "虽然你把“辛多雷”喊成了“辛多拉”，但血精灵粉丝们还是勉强拉你入伙了。"
                    },
                    {
                        "text": "天哪你真高",
                        "result": "你模仿NPC的语气，让周围的人都愣了一下，尴尬地坐下了。"
                    },
                    {
                        "text": "我们的祖先在忽悠着你",
                        "result": "萨满祭司粉丝们听到这话，差点想给你套个嗜血/英勇。"
                    },
                    {
                        "text": "德玛西亚！！",
                        "result": "{user}报错了片场。极其愤怒的两派粉丝决定先放下恩怨，合力把你给揍死了。",
                        "risk": 1.0,
                        "death_reason": "在魔兽电影院大喊德玛西亚"
                    },
                    {
                        "text": "CN DOTA， BEST DOTA!",
                        "result": "你试图在RPG场子里带DOTA的节奏。结果被愤怒的观众用爆米花桶砸晕过去...",
                        "effects": {
                            "health": -20,
                            "san": -10
                        }
                    },
                    {
                        "text": "Ceeeeeeeeeb!",
                        "result": "你的长音引起了几位DOTA老兵的共鸣，但很快就被魔兽粉丝的怒吼淹没了。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "mysterious_sms_scam": {
                "title": "神秘短信",
                "description": "有一天，{user}收到一条未知号码的消息：您好，我叫{user}，我从20年后穿越而来。在我的年代，经过核毁灭的地球已经由电脑“天网”统治，我是人类抵抗军首领，此次回来的任务是摧毁“天网”总部，但是在穿越途中，程序失控，我掉到了中国，没有路费去“天网”总部，距离太远了，如果您愿意援助一下我，给我一点路费的话，我会让你做人类抵抗军的总司令！谢谢！{user}看完消息，选择——。",
                "trigger_conditions": {
                    "age_range": [
                        20,
                        50
                    ]
                },
                "options": [
                    {
                        "text": "无视这个人",
                        "result": "{user}觉得这种短信太离谱了，直接拉黑并反手一个举报。",
                        "effects": {
                            "intelligence": 5
                        }
                    },
                    {
                        "text": "打钱给这个人",
                        "result": "{user}竟然真的打钱过去准备当“总司令”了。等了半天，对方再也没回复。恭喜你，成为了抵抗军首领——在梦里。",
                        "effects": {
                            "money": -10,
                            "intelligence": -10,
                            "san": -5
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "bus_virtue_trap": {
                "title": "美德",
                "description": "{user}坐公交车，发现有一个老人抱着小孩没有座位坐。{user}__",
                "trigger_conditions": {
                    "age_range": [
                        18,
                        50
                    ]
                },
                "options": [
                    {
                        "text": "帮老人抱住小孩",
                        "result": "{user}想帮老人忙，上前去把老人怀里的小孩揽过来……老人一愣，立马大叫抢小孩啦快报警！{user}跳进黄河也洗不清，被判2年监禁。",
                        "effects": {
                            "social": -30,
                            "san": -20
                        },
                        "add_tags": [
                            "有期徒刑"
                        ]
                    },
                    {
                        "text": "让座",
                        "result": "{user}起身将座位让给了老人。老人连声道谢，周围的乘客也投来了赞许的目光。",
                        "effects": {
                            "social": 10,
                            "san": 5
                        }
                    },
                    {
                        "text": "并不理睬",
                        "result": "{user}戴上耳机假装睡觉，只要我看不见，道德就绑架不了我。",
                        "effects": {
                            "social": -5
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "emergency_toilet_choice": {
                "title": "人有三急",
                "description": "{user}在一个陌生的地方，突然人有三急。附近怎么找都没有厕所。最后，{user}发现了一个无人售卖店，他走进去，把门关好，挂上停止营业的牌子，在里面拉起了屎。一阵斯里哔啦之后，{user}发现商店里面并没有纸巾卖，只有报纸和书这种纸类，{user}看了看，选了__擦干净屁股，跑了。",
                "trigger_conditions": {
                    "age_range": [
                        18,
                        50
                    ]
                },
                "options": [
                    {
                        "text": "《人民日报》",
                        "result": "{user}使用了这张厚实的报纸。擦拭的过程极其庄重，感觉灵魂得到了升华。",
                        "effects": {
                            "intelligence": 5,
                            "san": -5
                        }
                    },
                    {
                        "text": "《环球体育》",
                        "result": "纸张分量十足。擦完后，{user}感觉下半身充满了爆发力。",
                        "effects": {
                            "health": 5
                        }
                    },
                    {
                        "text": "《法制晚报》",
                        "result": "用法律的武器武装到了菊花。{user}在做的每一秒都感到内心的审判。",
                        "effects": {
                            "intelligence": 10,
                            "san": -10
                        }
                    },
                    {
                        "text": "《丑陋的中国人》",
                        "result": "{user}一边擦一边陷入了深深的自我解构与民族性反思中。",
                        "effects": {
                            "intelligence": 15,
                            "san": -15
                        }
                    },
                    {
                        "text": "《独唱团》",
                        "result": "纸张带着一股愤青的干涩。{user}觉得自己此刻的举动充满了文学叛逆感。",
                        "effects": {
                            "social": 5,
                            "san": 5
                        }
                    },
                    {
                        "text": "《c++ primer》",
                        "result": "纸张实在是太硬了！{user}在磨损痛苦中被迫记住了几个复杂的语法点。",
                        "effects": {
                            "intelligence": 20,
                            "health": -10
                        }
                    },
                    {
                        "text": "《在那只有白魔法的日子里》",
                        "result": "一瞬间，{user}仿佛感觉到了圣光的治愈。虽然只是心理作用。",
                        "effects": {
                            "mystery": 10,
                            "health": 10
                        }
                    },
                    {
                        "text": "《临时工》",
                        "result": "擦完后，{user}觉得即便被抓到，也可以把锅甩给临时工。",
                        "effects": {
                            "social": -10,
                            "luck": 10
                        }
                    },
                    {
                        "text": "《如何如傻逼相处》",
                        "result": "在与屁股的深度磨合中，{user}终于悟出了与这操蛋世界相处的终极奥义。",
                        "effects": {
                            "social": 15,
                            "intelligence": 5
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "on_tv_interview": {
                "title": "上电视",
                "description": "{user}走在街上，突然有一个话筒怼到他面前，有一个新闻记者走到{user}面前，问：“你幸福吗？”{user}回答：——",
                "trigger_conditions": {
                    "age_range": [
                        18,
                        60
                    ]
                },
                "options": [
                    {
                        "text": "幸福",
                        "result": "{user}对着镜头露出了灿烂的笑容，这段正能量采访登上了当晚的高清频道。",
                        "effects": {
                            "social": 10,
                            "san": 5
                        }
                    },
                    {
                        "text": "不幸福",
                        "result": "{user}对着镜头大倒苦水，结果新闻播出时这段被掐掉了。",
                        "effects": {
                            "san": -5
                        }
                    },
                    {
                        "text": "不开心",
                        "result": "{user}一脸郁闷地吐露心声，记者尴尬地收回了话筒。",
                        "effects": {
                            "san": -2
                        }
                    },
                    {
                        "text": "我姓曾",
                        "result": "经典名场面出现！{user}机智地回答：“我姓曾。”这个神回复迅速火遍全网，{user}成为了鬼畜区的常客。",
                        "effects": {
                            "social": 30,
                            "luck": 15,
                            "san": 10
                        },
                        "add_tags": [
                            "网络红人"
                        ]
                    },
                    {
                        "text": "跟记者讲道理",
                        "result": "{user}从哲学、经济学、社会学角度长篇大论分析了幸福，记者听得哈欠连连。",
                        "effects": {
                            "intelligence": 15,
                            "social": -5
                        }
                    },
                    {
                        "text": "装傻",
                        "result": "{user}眼神迷离并开始胡言乱语。记者以为遇到了特殊人员，赶紧礼貌地告辞了。",
                        "effects": {
                            "social": -10,
                            "intelligence": -5
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "immortal_spicy_strip_request": {
                "title": "仙人的请求",
                "description": "突然间{user}面前出现了一位身穿红袍的仙人向你索要一包辣条。",
                "trigger_conditions": {
                    "age_range": [
                        18,
                        40
                    ]
                },
                "options": [
                    {
                        "text": "灌汤包",
                        "result": "{user}递过去一个灌汤包，仙人一脸嫌弃地拒绝了。"
                    },
                    {
                        "text": "洞爷湖牌辣条",
                        "result": "{user}拿出了珍藏的洞爷湖牌辣条。",
                        "continue_event": "immortal_gift_dragonball"
                    },
                    {
                        "text": "不理睬",
                        "result": "{user}觉得遇到了神经病，快步走开了。"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "immortal_gift_dragonball": {
                "title": "仙人的答谢",
                "description": "突然间{user}面前出现了一位身穿红袍的仙人向你索要一包辣条。{user}拿出了辣条，用火机点燃辣条，烧给仙人吃……仙人吃完，送了一个黄色的玻璃球给{user}作为答谢。这个黄色的玻璃球非常精致，玻璃球里面还有一颗红色的星星。",
                "is_continue": true,
                "options": [
                    {
                        "text": "收下玻璃球",
                        "result": "{user}将玻璃球小心地收了起来，心中充满好奇。",
                        "continue_event": "dragon_ball_reveal"
                    }
                ]
            },
            "dragon_ball_reveal": {
                "title": "龙珠",
                "description": "{user}翻查资料，得知这个黄色玻璃球是一颗龙珠。传说只要集齐7颗龙珠，就可以召唤神龙出现，来满足{user}的一个愿望。{user}——",
                "is_continue": true,
                "options": [
                    {
                        "text": "着手收集龙珠",
                        "result": "{user}决定踏上寻找龙珠的旅程，这听起来太酷了！",
                        "effects": {
                            "intelligence": 5,
                            "mystery": 10,
                            "luck": 5
                        },
                        "add_tags": [
                            "龙珠收集者"
                        ]
                    },
                    {
                        "text": "没有兴趣",
                        "result": "{user}把玻璃球随手扔在了柜子里吃灰。",
                        "effects": {
                            "san": 5
                        }
                    },
                    {
                        "text": "不相信这种传言",
                        "result": "{user}认为这只是商家的营销手段，并对此吃之以鼻。",
                        "effects": {
                            "intelligence": 10
                        }
                    }
                ]
            },
            "typhoon_warning": {
                "title": "台风",
                "description": "{user}走在路上，突然刮起了大风，{user}拿出了雨伞。这时在旁边的一位老者对{user}说：“你们年轻人啊,不要见得风便是雨。”{user}__",
                "trigger_conditions": {
                    "age_range": [
                        18,
                        40
                    ]
                },
                "options": [
                    {
                        "text": "收回雨伞",
                        "result": "{user}听从老者的劝告，收回了雨伞。结果下一秒暴雨倾盆，{user}被淋成了落汤鸡。",
                        "effects": {
                            "health": -10,
                            "san": -5
                        }
                    },
                    {
                        "text": "以香港记者的速度逃跑",
                        "result": "{user}跑得比谁都快，在暴雨落下前成功躲进室内。老者看着你的背影叹道：这年轻人，跑得快也是一种本事。",
                        "effects": {
                            "health": 5,
                            "luck": 5
                        }
                    },
                    {
                        "text": "念两句诗",
                        "result": "{user}诗兴大发，念了两句诗。老者露出欣慰的笑容，觉得现在的年轻人还算有点底蕴。",
                        "effects": {
                            "intelligence": 10,
                            "san": 5
                        }
                    },
                    {
                        "text": "下雨天音乐与巧克力更配哟",
                        "result": "{user}在风雨中想起了这句广告词，不仅心情变好了，还真的从兜里摸出一块巧克力吃了起来。",
                        "effects": {
                            "san": 10
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false
            }
        },
        "description": "19-40岁"
    },
    "中年": {
        "events": {
            "career_crossroads": {
                "title": "职业十字路口",
                "description": "工作多年后，你面临职业发展的重要选择。",
                "trigger_conditions": {
                    "age_range": [
                        35,
                        45
                    ]
                },
                "options": [
                    {
                        "text": "尝试转行",
                        "result": "你决定走出舒适区，尝试一个全新的领域。",
                        "effects": {
                            "money": -10,
                            "intelligence": 10,
                            "social": 5
                        },
                        "add_tags": [
                            "勇于尝试"
                        ]
                    },
                    {
                        "text": "追求晋升",
                        "result": "你专注于在现有领域爬升更高的职位。",
                        "effects": {
                            "money": 15,
                            "health": -5
                        },
                        "add_tags": [
                            "事业心"
                        ]
                    },
                    {
                        "text": "维持现状",
                        "result": "你对现在的生活感到满意，选择保持稳定。",
                        "effects": {
                            "san": 10,
                            "health": 5
                        },
                        "add_tags": [
                            "安于现状"
                        ]
                    }
                ]
            },
            "mid_life_crisis": {
                "title": "中年危机",
                "description": "随着年龄增长，你开始反思自己的人生选择和意义。",
                "trigger_conditions": {
                    "age_range": [
                        40,
                        50
                    ]
                },
                "options": [
                    {
                        "text": "重新审视生活目标",
                        "result": "你花时间思考真正对自己重要的事物，调整了生活方向。",
                        "effects": {
                            "san": 15,
                            "social": -5,
                            "intelligence": 5
                        },
                        "add_tags": [
                            "觉悟"
                        ]
                    },
                    {
                        "text": "冲动消费或行为",
                        "result": "你通过大量消费或冲动行为来缓解焦虑。",
                        "effects": {
                            "money": -20,
                            "health": -5,
                            "san": 5
                        },
                        "add_tags": [
                            "冲动"
                        ]
                    }
                ]
            },
            "complex_investment": {
                "title": "复杂投资决策",
                "description": "一个高风险高回报的投资机会出现了。",
                "trigger_conditions": {
                    "age_range": [
                        25,
                        60
                    ],
                    "min_attributes": {
                        "money": 80
                    }
                },
                "options": [
                    {
                        "text": "全部投入",
                        "conditional_results": [
                            {
                                "conditions": {
                                    "tags": [
                                        "企业家"
                                    ],
                                    "attributes": {
                                        "intelligence": 85,
                                        "luck": 70
                                    },
                                    "all_required": true
                                },
                                "result": "{user}的判断完全正确，投资获得了巨大成功！",
                                "effects": {
                                    "money": 200,
                                    "intelligence": 15
                                },
                                "add_tags": [
                                    "投资大亨"
                                ],
                                "continue_event": "business_empire"
                            },
                            {
                                "conditions": {
                                    "any_of": [
                                        {
                                            "tags": [
                                                "富二代"
                                            ]
                                        },
                                        {
                                            "attributes": {
                                                "luck": 90
                                            }
                                        }
                                    ]
                                },
                                "result": "凭借运气或资源，{user}的投资获得了不错的回报。",
                                "effects": {
                                    "money": 80,
                                    "social": 10
                                }
                            },
                            {
                                "conditions": {
                                    "not": {
                                        "tags": [
                                            "投资失败",
                                            "破产"
                                        ]
                                    },
                                    "attributes": {
                                        "intelligence": 70
                                    }
                                },
                                "result": "{user}的投资有一定收益，但没有预期那么好。",
                                "effects": {
                                    "money": 30
                                }
                            },
                            {
                                "conditions": {
                                    "default": true
                                },
                                "result": "投资失败了，{user}损失惨重...",
                                "effects": {
                                    "money": -60,
                                    "health": -15
                                },
                                "add_tags": [
                                    "投资失败"
                                ]
                            }
                        ]
                    },
                    {
                        "text": "谨慎观望",
                        "result": "{user}选择了观望，错过了机会。",
                        "effects": {
                            "intelligence": 5
                        }
                    }
                ]
            }
        },
        "description": "40-60岁"
    },
    "老年": {
        "events": {
            "retirement": {
                "title": "退休生活",
                "description": "你正式从工作岗位退休，开始了新的生活阶段。",
                "trigger_conditions": {
                    "age_range": [
                        60,
                        65
                    ]
                },
                "options": [
                    {
                        "text": "培养新爱好",
                        "result": "你开始尝试以前没时间做的事情，如绘画、旅行等。",
                        "effects": {
                            "health": 5,
                            "san": 10
                        },
                        "add_tags": [
                            "乐退族"
                        ]
                    },
                    {
                        "text": "含饴弄孙",
                        "result": "你把大部分时间花在陪伴孙辈上，享受天伦之乐。",
                        "effects": {
                            "social": 10,
                            "san": 5
                        },
                        "add_tags": [
                            "慈祥长辈"
                        ]
                    },
                    {
                        "text": "继续发挥余热",
                        "result": "你以顾问或志愿者的身份继续为社会贡献自己的经验。",
                        "effects": {
                            "social": 10,
                            "intelligence": 5,
                            "health": -5
                        },
                        "add_tags": [
                            "老骥伏枥"
                        ]
                    }
                ]
            },
            "old_man_talk_choice": {
                "title": "问卷调查",
                "description": "{user}在公园里散步，遇到了一个老人，老人说：“年轻人，你愿意帮我一个帮忙吗？然后递给{user}一张问卷。”",
                "trigger_conditions": {
                    "age_range": [
                        80,
                        100
                    ],
                    "excluded_tags": [
                        "不解之谜"
                    ]
                },
                "options": [
                    {
                        "text": "接受问卷",
                        "result": "{user}答应了老人的请求，老人非常高兴。",
                        "continue_event": "author_survey"
                    },
                    {
                        "text": "无视",
                        "result": "{user}对传单不理睬"
                    }
                ],
                "priority": 0,
                "is_continue": false
            },
            "author_survey": {
                "title": "作者调查",
                "description": "{user}接过问卷，发现是作者的调查问卷。{user}开始填写问卷,通通填十分，直到最后，有一个对作者说的话，{user}填了_。",
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
                        "text": "打广告打到这，傻逼吧",
                        "result": "{user}对游戏作者破口大骂。",
                        "effects": {
                            "social": -10,
                            "intelligence": -10
                        },
                        "add_tags": [
                            "地狱模式",
                            "不解之谜"
                        ]
                    },
                    {
                        "text": "抱歉，我不会写中文",
                        "result": "{user}表示自己不会中文，老人讪讪地离开了。"
                    }
                ],
                "priority": 0,
                "trigger_conditions": {}
            },
            "health_crisis": {
                "title": "健康危机",
                "description": "你开始面临严重的健康问题。",
                "trigger_conditions": {
                    "age_range": [
                        70,
                        90
                    ],
                    "max_attributes": {
                        "health": 40
                    }
                },
                "options": [
                    {
                        "text": "积极治疗",
                        "result": "你选择接受积极的医疗干预，虽然过程痛苦但有希望恢复。",
                        "effects": {
                            "health": 10,
                            "money": -20
                        }
                    },
                    {
                        "text": "淡然面对",
                        "result": "你接受生命的自然规律，专注于提高剩余时间的生活质量。",
                        "effects": {
                            "san": 15
                        },
                        "add_tags": [
                            "豁达"
                        ]
                    }
                ]
            },
            "life_reflection": {
                "title": "人生回顾",
                "description": "在晚年，你开始回顾自己的一生。",
                "trigger_conditions": {
                    "age_range": [
                        80,
                        100
                    ]
                },
                "options": [
                    {
                        "text": "满足与感恩",
                        "result": "你对自己的人生感到满足，心中充满感恩。",
                        "effects": {
                            "san": 20,
                            "luck": 10
                        },
                        "add_tags": [
                            "知足常乐"
                        ]
                    },
                    {
                        "text": "遗憾与思索",
                        "result": "你思考着人生中的遗憾和未完成的梦想。",
                        "effects": {
                            "san": -5,
                            "intelligence": 10
                        },
                        "add_tags": [
                            "深思熟虑"
                        ]
                    }
                ]
            }
        },
        "description": "60-110岁"
    },
    "超人": {
        "events": {
            "miracle": {
                "title": "生命奇迹",
                "description": "你已经活得比绝大多数人都久了。",
                "options": [
                    {
                        "text": "接受采访",
                        "result": "大家都在询问你长寿的秘诀。",
                        "effects": {
                            "money": 5,
                            "social": 10
                        }
                    }
                ],
                "priority": 0,
                "is_continue": false,
                "trigger_conditions": {
                    "age_range": [
                        100,
                        200
                    ]
                }
            }
        },
        "description": "110岁以上"
    }
};

window.ageEvents = ageEvents;
