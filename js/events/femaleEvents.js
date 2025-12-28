
// 女性事件文件
// 包含所有仅在拥有"女性"标签时触发的事件
const femaleEvents = {
    // 标签: 女性
    "女性": {
        "events": {
            // --- 0岁开局事件 ---
            "start_female_1": {
                "title": "出生：富裕之家",
                "description": "{user}出生在一个富裕的家庭，房间里堆满了粉色的玩偶。",

                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "微笑",
                        "result": "你的笑容融化了所有人的心。",
                        "effects": {
                            "health": 10,
                            "money": 50,
                            "social": 10
                        },
                        "add_tags": ["富家千金"]
                    }
                ]
            },
            "start_female_2": {
                "title": "出生：书香门第",
                "description": "{user}出生在一个知识分子家庭，屋里飘着墨香。",

                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "安静观察",
                        "result": "爷爷说你将来一定是个才女。",
                        "effects": {
                            "intelligence": 15,
                            "social": -5
                        },
                        "add_tags": ["书香世家"]
                    }
                ]
            },
            "start_female_3": {
                "title": "出生：普通家庭",
                "description": "{user}出生了，是一个健康的女孩。父母喜极而泣。",

                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "啼哭",
                        "result": "哭声嘹亮，证明你很健康。",
                        "effects": {
                            "health": 8,
                            "social": 2
                        }
                    }
                ]
            },
            "special_toilet_birth": {
                "title": "特殊的降生",
                "description": "在密不通风，烟雾弥漫的黑网吧里，一名少女神色慌张地跑进了厕所，关上了厕所门。隔了没多久，厕所里咚的一声，一个小生命掉进了厕坑里。这位未婚妈妈拉起裤子，洗洗干净身子，走出了厕所……最后这个婴儿被网吧老板发现，收留了。取名为{user}。",
                "priority": 0,
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "继续",
                        "result": "{user}在网吧的环境中开始了不寻常的童年。虽然环境恶劣，但也锻炼了{user}的生存能力。",
                        "effects": { "money": -40, "health": -10, "intelligence": 0, "social": -30, "luck": +20 },
                        "add_tags": ["开局:网吧出生"],
                        "continue_event": "toilet_birth_aftermath"
                    }
                ]
            },
            "toilet_birth_aftermath": {
                "title": "网吧童年",
                "description": "网吧老板是个粗糙但心地善良的中年男人。{user}就这样在网吧的角落里慢慢长大...",
                "is_continue": true,
                "options": [
                    {
                        "text": "继续",
                        "result": "{user}在网吧的环境中开始了不寻常的童年。虽然环境恶劣，但也锻炼了{user}的生存能力。",
                        "effects": { "health": 5, "social": 5 },
                        "add_tags": ["街头智慧"]
                    }
                ]
            },

            "special_gourd_birth": {
                "title": "葫芦出世",
                "description": "{user}用力把葫芦撑破，来到了这个世界。{user}一出生，就会说话，会走路。并且拥有特殊能力...",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "力大无穷",
                        "result": "{user}拥有了超人般的力量！",
                        "effects": { "money": 0, "health": 30, "intelligence": 10, "social": 0, "luck": 10 },
                        "add_tags": ["葫芦娃", "天生神力", "大力士", "开局:葫芦出世"]
                    },
                    {
                        "text": "会喷火",
                        "result": "{user}能够喷出炙热的火焰！",
                        "effects": { "money": 0, "health": 20, "intelligence": 10, "social": 0, "luck": 10 },
                        "add_tags": ["葫芦娃", "天生神力", "火娃", "开局:葫芦出世"]
                    },
                    {
                        "text": "会喷水",
                        "result": "{user}能够喷出强力的水流！",
                        "effects": { "money": 0, "health": 10, "intelligence": 10, "social": 0, "luck": 10 },
                        "add_tags": ["葫芦娃", "天生神力", "水娃", "开局:葫芦出世"]
                    },
                    {
                        "text": "有千里眼顺风耳",
                        "result": "{user}拥有超凡的感知能力！",
                        "effects": { "money": 0, "health": 0, "intelligence": 20, "social": 10, "luck": 10 },
                        "add_tags": ["葫芦娃", "天生神力", "千里眼", "顺风耳", "开局:葫芦出世"]
                    },
                    {
                        "text": "会隐身",
                        "result": "{user}能够随意隐形！",
                        "effects": { "money": 0, "health": 0, "intelligence": 0, "social": -10, "luck": 20 },
                        "add_tags": ["葫芦娃", "天生神力", "隐身娃", "开局:葫芦出世"]
                    },
                    {
                        "text": "机智冷静",
                        "result": "{user}拥有超越年龄的智慧！",
                        "effects": { "money": 0, "health": 0, "intelligence": 30, "social": 0, "luck": 10 },
                        "add_tags": ["葫芦娃", "天生神力", "智慧娃", "开局:葫芦出世"]
                    }
                ]
            },
            "special_vegetative_birth": {
                "title": "特殊的生命",
                "description": "{user}一出生就不会动，没有眼球，没有鼻子.唯一有的就是听力和意识.医生都说这孩子活不长，但{user}的意识却异常清晰...",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [],
                "continue_event": "vegetative_miracle"
            },
            "vegetative_miracle": {
                "title": "意识觉醒",
                "description": "虽然身体无法动弹，但{user}的意识却异常活跃。在黑暗中，{user}开始感知这个世界...",
                "is_continue": true,
                "options": [
                    {
                        "text": "努力感知",
                        "result": "通过不断努力，{user}的听力变得异常敏锐，甚至能通过声音'看见'世界。",
                        "effects": { "intelligence": 20, "luck": 10 },
                        "add_tags": ["超级听力"],
                        "continue_event": "vegetative_breakthrough"
                    }
                ]
            },
            "vegetative_breakthrough": {
                "title": "奇迹发生",
                "description": "在{user}3岁时，一位神秘的医生来到医院，声称能治疗{user}的病症...",
                "is_continue": true,
                "options": [
                    {
                        "text": "接受治疗",
                        "result": "经过神秘医生的治疗，{user}竟然能够控制部分身体了！虽然还很虚弱，但这已经是医学奇迹。",
                        "effects": { "health": 30, "luck": 20 },
                        "add_tags": ["医学奇迹"],
                        "remove_tags": ["残疾"]
                    },
                    {
                        "text": "拒绝治疗",
                        "result": "{user}的家人担心风险，拒绝了治疗。但{user}的意志力让所有人惊叹。",
                        "effects": { "intelligence": 30, "social": 10 },
                        "add_tags": ["钢铁意志"]
                    }
                ]
            },
            "special_golden_armor_birth": {
                "title": "神秘的托付",
                "description": "在一个深夜，一位女子在回家的路上。突然路边闪出一个浑身穿着金色铠甲的人，那人将怀里抱着的婴儿交给了女子，并要求将其抚养成人。这个婴儿就是{user}。",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "继续",
                        "result": "养母决定好好培养{user}。",
                        "effects": { "money": 30, "health": 20, "intelligence": 15, "social": 10, "luck": 30 },
                        "add_tags": ["神秘身世", "天选之子", "开局:神秘托付"],
                        "continue_event": "golden_armor_prophecy"
                    }
                ]
            },
            "golden_armor_prophecy": {
                "title": "神秘预言",
                "description": "养母在整理{user}的襁褓时，发现了一张金色的纸条，上面写着神秘的文字...",
                "is_continue": true,
                "options": [
                    {
                        "text": "仔细研读",
                        "result": "纸条上写着：'此子天降，将在18岁时觉醒神圣之力，守护人间正义。'养母决定好好培养{user}。",
                        "effects": { "luck": 30, "intelligence": 10 },
                        "add_tags": ["神圣预言", "守护者血脉"]
                    }
                ]
            },
            "special_dead_baby_birth": {
                "title": "死婴重生",
                "description": "在某医院产房里，有一个妈妈生产时遇到意外。婴儿的头卡在洞口里出不来。时间太久了之后，这个婴儿窒息而死。在一片悲痛的哭声中，婴儿的小尸体被丢进了医院的垃圾桶。",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "继续",
                        "result": "小小的身体里蕴含着顽强的生命力。",
                        "effects": { "money": -30, "health": -30, "intelligence": 0, "social": -40, "luck": 20 },
                        "add_tags": ["死婴", "神秘身世", "开局:死婴重生"],
                        "continue_event": "dead_baby_awakening"
                    }
                ]
            },
            "dead_baby_awakening": {
                "title": "死而复生",
                "description": "被丢进垃圾桶的死婴竟然还有意识，这个死婴偷偷睁开眼，看房间的人走了之后，悄悄地爬了出来，逃离了这个医院。",
                "is_continue": true,
                "options": [
                    {
                        "text": "继续",
                        "result": "小小的身体里蕴含着顽强的生命力。",
                        "effects": { "health": 10, "luck": 10 },
                        "continue_event": "dead_baby_found"
                    }
                ]
            },
            "dead_baby_found": {
                "title": "被发现",
                "description": "死婴跑到了医院门口，就被人发现了，人们看到的只是一个普通的婴儿被丢弃了。最后，这个婴儿被孤儿院收养了，取名为{user}。",
                "is_continue": true,
                "options": [
                    {
                        "text": "继续",
                        "result": "{user}在孤儿院开始了新的生活。",
                        "effects": { "social": 5 },
                        "add_tags": ["孤儿院"],
                        "continue_event": "dead_baby_poverty"
                    }
                ]
            },
            "dead_baby_poverty": {
                "title": "贫困生活",
                "description": "{user}的财富已经没多少了，他已经是一个穷人了。",
                "is_continue": true,
                "options": [
                    {
                        "text": "坚强面对",
                        "result": "虽然贫困，但{user}展现出了惊人的生存意志。",
                        "effects": { "money": -20, "intelligence": 10 },
                        "add_tags": ["贫困"]
                    }
                ]
            },
            "special_lawyer_birth": {
                "title": "律师世家",
                "description": "{user}的老爹是业界有名的律师，{user}从一出生，就在争吵辩论的环境下成长。",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "继承辩论天赋",
                        "result": "{user}从小就展现出了超凡的口才和逻辑能力。",
                        "effects": { "money": 30, "health": 5, "intelligence": 20, "social": 25, "luck": -10 },
                        "add_tags": ["高情商", "辩论家", "开局:律师世家"]
                    }
                ]
            },
            "special_internet_cafe_birth": {
                "title": "网吧世家",
                "description": "{user}出生在一个经营网吧生意的家庭。",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "在网络中成长",
                        "result": "{user}从小就在网络的世界里长大。",
                        "effects": { "money": 10, "health": 0, "intelligence": 5, "social": 15, "luck": 0 },
                        "add_tags": ["交网友", "网络达人", "开局:网吧世家"]
                    }
                ]
            },
            "special_chef_birth": {
                "title": "美食世家",
                "description": "{user}出生在一个厨师家庭，老爸是做快餐的，老妈是卖牛杂的。",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "品尝美食",
                        "result": "{user}从小就在各种美食的香味中长大。",
                        "effects": { "money": 0, "health": 15, "intelligence": 0, "social": 5, "luck": -5 },
                        "add_tags": ["厨师家庭", "美食家", "开局:美食世家"]
                    }
                ]
            },
            "special_wings_birth": {
                "title": "天使降临",
                "description": "{user}生下来，肩胛骨就异常的发达，并且长出了两个翅膀。",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "接受天赋",
                        "result": "{user}是一个特殊的孩子，拥有飞翔的能力。",
                        "effects": { "money": -10, "health": 20, "intelligence": 10, "social": -10, "luck": 15 },
                        "add_tags": ["长翅膀", "天使之翼", "特殊能力", "飞行能力", "开局:天使降临"]
                    }
                ]
            },
            "special_hell_difficulty_birth": {
                "title": "地狱开局",
                "description": "{user}出生在一个处于战争动乱的贫困国家，战火摧毁着一切，民不聊生。{user}开启了他地狱难度的人生。",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "继续",
                        "result": "在战火中，{user}学会了如何在极端环境下生存。",
                        "effects": { "money": -45, "health": -20, "intelligence": -10, "social": -30, "luck": -40 },
                        "add_tags": ["地狱难度", "战争孤儿", "开局:地狱难度"],
                        "continue_event": "hell_poverty"
                    }
                ]
            },
            "hell_poverty": {
                "title": "极度贫困",
                "description": "{user}的财富已经没多少了，他已经是一个穷人了。",
                "is_continue": true,
                "options": [
                    {
                        "text": "艰难生存",
                        "result": "在战火中，{user}学会了如何在极端环境下生存。",
                        "effects": { "money": -10, "health": -10, "intelligence": 15 },
                        "add_tags": ["极度贫困", "生存专家"]
                    }
                ]
            },
            "special_amnesia_birth": {
                "title": "失忆之谜",
                "description": "{user}醒来了，发现他失忆了.除了自己的名字，什么都记不起来了。",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "接受现实",
                        "result": "{user}决定重新开始，探索自己的身世。",
                        "effects": { "money": -10, "health": 0, "intelligence": 5, "social": -20, "luck": -10 },
                        "add_tags": ["失忆", "神秘过去", "开局:失忆之谜"]
                    }
                ]
            },
            "special_birth_event": {
                "title": "特殊出生",
                "description": "{user}出生在一个不寻常的环境中...",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "接受命运",
                        "result": "{user}天生就有着不同寻常的气质。",
                        "effects": { "money": 0, "health": 5, "intelligence": 5, "social": 0, "luck": 5 },
                        "add_tags": ["命运之子", "开局:特殊出生"]
                    },
                    {
                        "text": "哭泣抗议",
                        "result": "{user}的哭声响彻整个房间。",
                        "effects": { "money": 0, "health": 3, "social": -2, "luck": 0 }
                    }
                ]
            },
            "special_tanuki_encounter": {
                "title": "神秘的狸猫",
                "description": "在{user}的婴儿床边，出现了一只狸猫.它说自己来自未来，要送给{user}一件礼物...",
                "trigger_conditions": {
                    "age_range": [0, 0]
                },
                "options": [
                    {
                        "text": "竹蜻蜓",
                        "result": "狸猫送给{user}一个神奇的竹蜻蜓，装在头上就能自由飞翔！",
                        "effects": { "money": 0, "health": 0, "intelligence": 0, "social": 0, "luck": 20 },
                        "add_tags": ["狸猫朋友", "飞行能力", "开局:神秘狸猫"]
                    },
                    {
                        "text": "如意门",
                        "result": "狸猫送给{user}一扇神奇的门，可以通向任何地方！",
                        "effects": { "money": 0, "health": 0, "intelligence": 0, "social": 0, "luck": 20 },
                        "add_tags": ["狸猫朋友", "如意门", "开局:神秘狸猫"]
                    },
                    {
                        "text": "记忆面包",
                        "result": "狸猫送给{user}一种特殊的面包，吃了能增强记忆力！",
                        "effects": { "money": 0, "health": 0, "intelligence": 20, "social": 0, "luck": 0 },
                        "add_tags": ["狸猫朋友", "记忆超群", "开局:神秘狸猫"]
                    }
                ]
            },

            "female_puberty": {
                "title": "少女心事",
                "description": "十三四岁，正是豆蔻年华。你发现自己有了不想告诉父母的小秘密。",

                "trigger_conditions": {
                    "age_range": [13, 16]
                },
                "options": [
                    {
                        "text": "写日记",
                        "result": "记录下点点滴滴，内心感到平静。",
                        "effects": { "intelligence": 5, "san": 10, "social": -2 },
                        "add_tags": ["文静"]
                    },
                    {
                        "text": "和闺蜜逛街",
                        "result": "买了可爱的小饰品，心情大好。",
                        "effects": { "social": 8, "money": -5, "san": 5 }
                    }
                ]
            },
            "female_career_choice": {
                "title": "职业岔路",
                "description": "面对职场，你是否感受到了某些无形的压力？",

                "trigger_conditions": {
                    "age_range": [22, 30]
                },
                "options": [
                    {
                        "text": "成为女强人",
                        "result": "你决心要在职场闯出一片天。",
                        "effects": { "money": 10, "social": 5, "health": -5 },
                        "add_tags": ["女强人"]
                    },
                    {
                        "text": "追求稳定",
                        "result": "你选择了一份相对轻松的工作，更多照顾生活。",
                        "effects": { "san": 10, "money": 0, "health": 5 }
                    }
                ]
            }
        }
    }
};

// 导出
window.femaleEvents = femaleEvents;
