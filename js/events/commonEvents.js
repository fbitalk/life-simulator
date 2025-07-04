// commonEvents.js - 普通标签事件

/**
 * 普通标签事件定义
 */
const commonEvents = {
    "穷人的孩子早当家": {
        "description": "因为家庭条件不好，从小就要帮忙分担家务或打工。",
        "events": {
            "help_parents_work": {
                "title": "帮父母工作",
                "description": "父母工作很辛苦，但收入有限，你想帮他们分担一些。",
                "priority": 10,
                "trigger_conditions": {
                    "age_range": [8, 16]
                },
                "options": [
                    {
                        "text": "利用课余时间打零工",
                        "result": "你找了一份发传单的工作，虽然辛苦，但能够贴补家用。",
                        "effects": { "money": 5, "health": -5, "intelligence": -5, "social": 5 },
                        "add_tags": ["勤劳"]
                    },
                    {
                        "text": "专注学业，争取考上好大学改变命运",
                        "result": "你决定现在专心学习，将来考上好大学，彻底改变家庭状况。",
                        "effects": { "intelligence": 10, "health": -3 },
                        "add_tags": ["学霸"]
                    },
                    {
                        "text": "偷偷去网吧赚钱",
                        "result": "你开始帮网吧老板跑腿，结交了一些社会人士。",
                        "effects": { "money": 3, "health": -3, "intelligence": -5, "social": 10 },
                        "add_tags": ["街头智慧"]
                    }
                ]
            },
            "frugal_living": {
                "title": "节俭生活",
                "description": "家里的经济状况不好，你学会了节省花销。",
                "trigger_conditions": {
                    "age_range": [7, 18]
                },
                "options": [
                    {
                        "text": "学会精打细算",
                        "result": "你开始计划每一分钱的花销，甚至帮家里记账。",
                        "effects": { "intelligence": 5, "social": -5 },
                        "add_tags": ["精明"]
                    },
                    {
                        "text": "寻找免费娱乐",
                        "result": "你发现了很多不花钱也能玩得开心的方式，比如在图书馆看书。",
                        "effects": { "intelligence": 8, "health": 3 },
                        "add_tags": ["爱读书"]
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
                    "age_range": [10, 18],
                    "min_attributes": { "intelligence": 70 }
                },
                "options": [
                    {
                        "text": "全力准备比赛",
                        "result": "你日以继夜地复习备战，最终在比赛中获得了优异的成绩。",
                        "effects": { "intelligence": 10, "health": -5 },
                        "add_tags": ["竞赛获奖者"]
                    },
                    {
                        "text": "婉拒参赛",
                        "result": "你决定专注于学校课程，没有参加竞赛。",
                        "effects": { "intelligence": 3 },
                        "remove_tags": ["学霸"]
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
                        "effects": { "intelligence": 5, "social": 8 },
                        "add_tags": ["乐于助人"]
                    },
                    {
                        "text": "敷衍了事",
                        "result": "你随便应付了几句，同学们对你的印象变差了。",
                        "effects": { "social": -10 }
                    },
                    {
                        "text": "收费辅导",
                        "result": "你提出收费帮助同学，开始了小型家教业务。",
                        "effects": { "money": 10, "intelligence": 3, "social": -5 },
                        "add_tags": ["精明商人"]
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
                    "age_range": [8, 20]
                },
                "options": [
                    {
                        "text": "享受旅行",
                        "result": "你在豪华度假村度过了一段美好时光，结交了一些有钱人家的孩子。",
                        "effects": { "health": 5, "social": 10, "money": -10 },
                        "add_tags": ["见多识广"]
                    },
                    {
                        "text": "建议做慈善",
                        "result": "你提议家人不要过度消费，而是将一部分钱捐给慈善机构。",
                        "effects": { "social": 5, "luck": 5, "money": -5 },
                        "add_tags": ["善心人士"]
                    }
                ]
            },
            "rich_kid_bullying": {
                "title": "富家子弟的烦恼",
                "description": "有同学因为嫉妒你的家境而在背后说闲话。",
                "trigger_conditions": {
                    "age_range": [8, 18]
                },
                "options": [
                    {
                        "text": "低调处理",
                        "result": "你选择不与他们计较，保持低调。",
                        "effects": { "social": -5, "intelligence": 5 }
                    },
                    {
                        "text": "挥金如土展示实力",
                        "result": "你大手笔消费，请全班吃饭，让那些人闭嘴。",
                        "effects": { "money": -20, "social": 10 },
                        "add_tags": ["挥霍无度"]
                    },
                    {
                        "text": "与他们对质",
                        "result": "你直接找到那些说闲话的人，当面对质，结果发生了争执。",
                        "effects": { "health": -5, "social": -10 },
                        "add_tags": ["火爆脾气"]
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
                    "age_range": [7, 15]
                },
                "options": [
                    {
                        "text": "专心学习",
                        "result": "你珍惜这些学习时光，知识储备比同龄人丰富很多。",
                        "effects": { "intelligence": 15, "social": -5 },
                        "add_tags": ["知识渊博"]
                    },
                    {
                        "text": "反抗家长安排",
                        "result": "你开始厌倦每天被逼着学习，与父母产生了一些矛盾。",
                        "effects": { "intelligence": 5, "health": 5, "social": -10 },
                        "add_tags": ["叛逆"]
                    }
                ]
            }
        }
    },
    
    "叛逆": {
        "description": "不愿遵循常规，喜欢挑战权威",
        "events": {
            "school_rebel": {
                "title": "学校反抗",
                "description": "你对学校的一些规定感到不满。",
                "trigger_conditions": {
                    "age_range": [13, 18]
                },
                "options": [
                    {
                        "text": "公开挑战老师",
                        "result": "你在课堂上质疑老师的观点，引起了轰动。",
                        "conditional_results": [
                            {
                                "conditions": { "min_attributes": { "intelligence": 80 } },
                                "result": "由于你的论点有理有据，老师虽然不悦但不得不承认你说得有道理。",
                                "effects": { "intelligence": 10, "social": 5 },
                                "add_tags": ["独立思考"]
                            },
                            {
                                "conditions": { "default": true },
                                "result": "你的挑战被老师轻松击败，让你很难堪。",
                                "effects": { "intelligence": 5, "social": -10 },
                                "add_tags": ["惹事生非"]
                            }
                        ]
                    },
                    {
                        "text": "偷偷违反校规",
                        "result": "你开始在不被发现的情况下做一些违反校规的小事。",
                        "effects": { "health": 5, "social": 5, "luck": -5 },
                        "add_tags": ["小恶魔"]
                    }
                ]
            }
        }
    },
    "学生": {
        "description": "喜欢做作业的孩子",
        "events": {
            "elementary_homework_nightmare": {
                "title": "作业地狱",
                "description": "数学作业：一课一练P5-P90页。语文作业：抄写李白古诗3000首。英语作业：写一篇5万字的英文议论文......这些就是{user}每天都要应付的作业量。{user}____",
                "trigger_conditions": {
                    "required_tags": ["学生"],
                    "age_range": [6, 12]
                },
                "options": [
                    {
                        "text": "熬夜做作业",
                        "result": "{user}熬夜做作业，最终累倒了...",
                        "effects": { "health": -100 },
                        "risk": 1.0
                    },
                    {
                        "text": "第二天抄同学的",
                        "result": "{user}二天抄同学的。",
                        "effects": { "intelligence": -5, "social": 5 },             
                    },
                    {
                        "text": "尽量做",
                        "result": "{user}努力完成作业，虽然很辛苦但学到了知识。",
                        "effects": { "intelligence": 10, "health": -5 },
                    },
                    {
                        "text": "作业见鬼去吧",
                        "result": "{user}把作业扔到一边，痛快地玩去了。",
                        "effects": { "health": 10, "social": 5 },
                       
                    }
                ]
            },
            "elementary_sports_day": {
                "title": "运动会",
                "description": "学校举办了一年一度的运动会。",
                "trigger_conditions": {
                    "required_tags": ["学生"],
                    "age_range": [6, 12]
                },
                "options": [
                    {
                        "text": "参加短跑",
                        "result": "{user}在短跑比赛中取得了好成绩。",
                        "effects": { "health": 8, "social": 5 },
                        "add_tags": []
                    },
                    {
                        "text": "参加接力赛",
                        "result": "{user}和同学们一起参加接力赛，培养了团队精神。",
                        "effects": { "health": 5, "social": 8 },
                        "add_tags": []
                    },
                    {
                        "text": "当啦啦队",
                        "result": "{user}选择当啦啦队，为同学们加油助威。",
                        "effects": { "social": 10 },
                        "add_tags": []
                    }
                ]
            },
            
            "elementary_art_class": {
                "title": "美术课",
                "description": "美术课上，老师让同学们自由画画。",
                "trigger_conditions": {
                    "required_tags": ["学生"],
                    "age_range": [6, 12]
                },
                "options": [
                    {
                        "text": "画一幅风景画",
                        "result": "{user}画了一幅漂亮的风景画，展现了艺术天赋。",
                        "effects": { "intelligence": 5 },
                        "add_tags": ["艺术细胞"]
                    },
                    {
                        "text": "画一幅人物画",
                        "result": "{user}画了一幅生动的人物画，展现了观察力。",
                        "effects": { "intelligence": 5 },
                        "add_tags": ["观察力强"]
                    },
                    {
                        "text": "画一幅抽象画",
                        "result": "{user}画了一幅充满想象力的抽象画，展现了创造力。",
                        "effects": { "intelligence": 6 },
                        "add_tags": ["创造力"]
                    }
                ]
            },
            "elementary_english_class": {
                "title": "外教询问",
                "description": "外教课上，老师向{user}打招呼：'How are you?'，{user}回答：",
                "trigger_conditions": {
                    "required_tags": ["学生"],
                    "age_range": [6, 12]
                },
                "options": [
                    {
                        "text": "Hi, Bro!",
                        "result": "{user}的回答很新潮，外教笑了。",
                        "effects": {},
                       
                    },
                    {
                        "text": "Error 404 not found",
                        "result": "{user}的回答让外教摸不着头脑，但展现了幽默感。",
                        "effects": {},
                        "add_tags": ["计算机思维"]
                    },
                    {
                        "text": "Good good study, day day up",
                        "result": "{user}的回答非常中式，外教努力理解中，学习成绩下降了。",
                        "effects": {},
                        "add_tags": []
                    },
                    {
                        "text": "42",
                        "result": "{user}的回答充满了哲学意味，外教陷入了沉思。",
                        "effects": {},
                        "add_tags": ["四次元"]
                    },
                    {
                        "text": "You are very handsome",
                        "result": "{user}的回答让外教心花怒放，学习成绩提升了。",
                        "effects": {},
                        "add_tags": []
                    },
                    {
                        "text": "I am fine, thank you. And you?",
                        "result": "{user}的回答标准而有礼貌。",
                        "effects": {},
                   
                    }
                ]
            },
            
            "elementary_english_fill_blank": {
                "title": "英语课：填空",
                "description": "英语老师出题：Please fill in the blank: 'I _____ an apple yesterday.' {user}填写的答案是：",
                "trigger_conditions": { 
                    "age_range": [6, 12], 
                    "required_tags": ["学生"] 
                },
                "options": [
                    { 
                        "text": "eat", 
                        "result": "{user}的答案是eat。", 
                        "effects": {},
                        "add_tags": []
                    },
                    { 
                        "text": "ate", 
                        "result": "{user}的答案是ate。", 
                        "effects": {},
                        "add_tags": []
                    },
                    { 
                        "text": "eating", 
                        "result": "{user}的答案是eating。", 
                        "effects": {},
                        "add_tags": []
                    },
                    { 
                        "text": "am", 
                        "result": "{user}的答案是am。", 
                        "effects": {},
                        "add_tags": []
                    },
                    { 
                        "text": "吃了", 
                        "result": "{user}用中文回答了英文题。", 
                        "effects": {},
                        "add_tags": []
                    },
                    { 
                        "text": "apple", 
                        "result": "{user}似乎没理解题目。", 
                        "effects": {},
                        "add_tags": []
                    },
                    { 
                        "text": "yesterday", 
                        "result": "{user}的答案是yesterday。", 
                        "effects": {},
                        "add_tags": []
                    },
                    { 
                        "text": "我不吃苹果", 
                        "result": "{user}的回答是：我不吃苹果。", 
                        "effects": {}, 
                        "add_tags": [] 
                    }
                ]
            },
            
            "elementary_pe_running": {
                "title": "体育课：跑步",
                "description": "体育老师让全班同学跑800米，{user}的选择是：",
                "trigger_conditions": { 
                    "age_range": [6, 12], 
                    "required_tags": ["学生"] 
                },
                "options": [
                    {
                        "text": "认真跑完全程",
                        "result": "{user}坚持跑完了全程，虽然很累但是很有成就感。",
                        "effects": {},
                       
                    },
                    {
                        "text": "偷偷走一半",
                        "result": "{user}偷偷走了一半的路程，没被老师发现。",
                        "effects": {},
                        "add_tags": ["小滑头"]
                    },
                    {
                        "text": "装病逃跑",
                        "result": "{user}装病逃过了跑步。",
                        "effects": {},
                        
                    },
                    {
                        "text": "和同学比赛",
                        "result": "{user}和好朋友一起比赛，跑得更起劲了。",
                        "effects": {},
                       
                    }
                ]
            },
            
            "elementary_music_singing": {
                "title": "音乐课：唱歌",
                "description": "音乐老师让同学们轮流唱歌，轮到{user}了：",
                "trigger_conditions": { 
                    "age_range": [6, 12], 
                    "required_tags": ["学生"] 
                },
                "options": [
                    {
                        "text": "唱《小星星》",
                        "result": "{user}唱了一首《小星星》，声音清脆悦耳。",
                        "effects": {},
                        
                    },
                    {
                        "text": "唱《两只老虎》",
                        "result": "{user}唱了一首《两只老虎》，全班同学都跟着一起唱。",
                        "effects": {},
                       
                    },
                    {
                        "text": "假装嗓子疼",
                        "result": "{user}找了个借口逃避唱歌。",
                        "effects": {},
                       
                    },
                    {
                        "text": "唱一首自创歌曲",
                        "result": "{user}唱了一首自己编的歌，虽然跑调但很有创意。",
                        "effects": {},
                        
                    },
                    {
                        "text": "唱《孤勇者》",
                        "result": "{user}唱了一首《孤勇者》，展现了不错的歌唱实力。",
                        "effects": {},
                        
                    }
                ]
            },
            
            "elementary_math_problem": {
                "title": "数学课：煮苹果",
                "description": "数学老师提问：煮一个苹果需要3分钟，煮三个苹果需要多少分钟？{user}回答：",
                "trigger_conditions": {
                    "required_tags": ["学生"],
                    "age_range": [6, 12]
                },
                "options": [
                    {
                        "text": "1+1=3",
                        "result": "{user}的答案石破天惊。",
                        "effects": {},
                    },
                    {
                        "text": "条件不足，此题无解",
                        "result": "{user}的回答非常严谨。",
                        "effects": {},
                        
                    },
                    {
                        "text": "9分钟",
                        "result": "{user}的回答中规中矩。",
                        "effects": {},
                        
                    },
                    {
                        "text": "3分钟",
                        "result": "{user}的回答显示了灵活的思维。",
                        "effects": {},
                        
                    }
                ]
            },
            
            "elementary_math_apple_count": {
                "title": "数学课：数苹果",
                "description": "数学老师又问：小明有10个苹果，吃了3个，还剩几个？{user}回答：",
                "trigger_conditions": { 
                    "age_range": [6, 12], 
                    "required_tags": ["学生"] 
                },
                "options": [
                    {
                        "text"  : "7个",
                        "result": "{user}回答7个。",
                        "effects": {},
                    },
                    {
                        "text": "不知道，我不喜欢苹果",
                        "result": "{user}的回答让老师哭笑不得。",
                        "effects": {},
                        "add_tags": []
                    },
                    {
                        "text": "10个，他只是咬了几口",
                        "result": "{user}的回答很有创意。",
                        "effects": {},
                        "add_tags": []
                    }
                ]
            },
            
            "elementary_foreign_teacher_greeting": {
                "title": "外教询问",
                "description": "外教课上，老师向{user}打招呼：'How are you?'，{user}回答：",
                "trigger_conditions": { 
                    "age_range": [6, 12], 
                    "required_tags": ["学生"] 
                },
                "options": [
                    {
                        "text": "Hi, Bro!",
                        "result": "{user}的回答很新潮，外教笑了。",
                        "effects": {},
                        
                    },
                    {
                        "text": "Error 404 not found",
                        "result": "{user}的回答让外教摸不着头脑，。",
                        "effects": {},
                        "add_tags": ["计算机思维"]
                    },
                    {
                        "text": "I'm fine, thank you. And you?",
                        "result": "{user}标准的回答让外教满意地点了点头。",
                        "effects": {},
                        
                    }
                    
                ]
            },      
            "elementary_art_drawing": {
                "title": "美术课：画画",
                "description": "美术老师让大家画一幅我的梦想，{user}画的是：",
                "trigger_conditions": { 
                    "age_range": [6, 12], 
                    "required_tags": ["学生"] 
                },
                "options": [
                    {
                        "text": "画一只猪",
                        "result": "{user}画了一只猪。",
                        "effects": {},
                       
                    },
                    {
                        "text": "画一个超级英雄",
                        "result": "{user}画了一个拯救世界的超级英雄。",
                        "effects": {},
                       
                    },
                    {
                        "text": "画一个科学家",
                        "result": "{user}画了一个在实验室做实验的科学家。",
                        "effects": {},
                        
                        
                    },
                    {
                        "text": "画一个老师",
                        "result": "{user}画了一个站在讲台上的老师，并且十分的丑陋。",
                        "effects": {},
                        
                    },
                    {
                        "text": "画一个蛋糕",
                        "result": "{user}画了一个巨大的蛋糕，看来是个吃货。",
                        "effects": {},
                       
                    }
                ]
            },
            
            "elementary_science_experiment": {
                "title": "自然课：实验",
                "description": "自然课上，老师让大家做一个小实验，{user}的选择是：",
                "trigger_conditions": { 
                    "age_range": [6, 12], 
                    "required_tags": ["学生"] 
                },
                "options": [
                    {
                        "text": "做水变色的实验",
                        "result": "{user}用食用色素让水变色，实验很成功。",
                        "effects": {},
                        
                    },
                    {
                        "text": "做气球吹大的实验",
                        "result": "{user}用醋和小苏打让气球变大，实验很有趣。",
                        "effects": {},
                      
                    },
                    {
                        "text": "做磁铁实验",
                        "result": "{user}用磁铁吸引各种物品，发现了磁性的奥秘。",
                        "effects": {},
                       
                    },
                    {
                        "text": "做植物生长实验",
                        "result": "{user}种了一颗豆子，观察它的生长过程。",
                        "effects": {},
                        
                    },
                    {
                        "text": "偷偷玩手机",
                        "result": "{user}没有认真做实验，而是偷偷玩起了手机。",
                        "effects": {},
                        
                    }
                ]
            },
            "math_olympiad_animals": {
                "title": "数学课：奥数",
                "description": "猪、猫、鸡、兔、牛这几种动物，最与众不同的是哪一个？为什么？吕葆中认为是——",
                "trigger_conditions": {
                    "required_tags": ["学生"],
                    "age_range": [6, 12]
                },
                "options": [
                    {
                        "text": "牛，只有牛有角",
                        "result": "你选择了牛，理由是只有牛有角。老师点头称赞你的观察力。",
                        "effects": { "intelligence": 5 },
                        "add_tags": []
                    },
                    {
                        "text": "猫，只有猫不在十二生肖里",
                        "result": "你选择了猫，理由是只有猫不在十二生肖里。老师说你很有文化常识。",
                        "effects": { "intelligence": 5 },
                        "add_tags": []
                    },
                    {
                        "text": "猪，只有猪不清真",
                        "result": "你选择了猪，理由是只有猪不清真。老师笑了，说你很有生活经验。",
                        "effects": { "social": 5 },
                        "add_tags": []
                    },
                    {
                        "text": "猫，只有猫不能吃",
                        "result": "你选择了猫，理由是只有猫不能吃。老师说你很有同情心。",
                        "effects": { "san": 5 },
                        "add_tags": []
                    },
                    {
                        "text": "鸡，只有鸡是卵生的",
                        "result": "你选择了鸡，理由是只有鸡是卵生的。老师夸你有生物常识。",
                        "effects": { "intelligence": 5 },
                        "add_tags": []
                    },
                    {
                        "text": "鸡，只有鸡是两条腿",
                        "result": "你选择了鸡，理由是只有鸡是两条腿。老师说你很会数数。",
                        "effects": { "intelligence": 3 },
                        "add_tags": []
                    },
                    {
                        "text": "兔，只有兔会跳",
                        "result": "你选择了兔，理由是只有兔会跳。老师说你很有想象力。",
                        "effects": { "san": 5 },
                        "add_tags": ["创作力"]
                    },
                    {
                        "text": "猪，只有猪有猪鼻子",
                        "result": "你选择了猪，理由是只有猪有猪鼻子。老师笑着说你很幽默。",
                        "effects": { "social": 5 },
                        "add_tags": []
                    },
                    {
                        "text": "我没见过这些动物",
                        "result": "你说你没见过这些动物，老师一时语塞，决定下课。",
                        "effects": { "san": 5 },
                        "add_tags": []
                    }
                ]
            },
            "classroom_math_class": {
                "title": "课堂：数学课",
                "description": "申国的山区，是上坡路比较多还是下坡路比较多？",
                "trigger_conditions": {
                    "required_tags": ["学生"],
                    "age_range": [6, 12]
                },
                "options": [
                    {
                        "text": "什么破题目",
                        "result": "{user}觉得这题目很无聊，老师让你下课后留下来思考。",
                        "effects": { "san": -5 },
                        "add_tags": []
                    },
                    {
                        "text": "数学课老是做脑筋急转弯题目真的好吗？",
                        "result": "{user}质疑老师的出题方式，老师让你写一篇反思。",
                        "effects": { "intelligence": 3, "san": -3 },
                        "add_tags": []
                    },
                    {
                        "text": "条件不足，此题无解",
                        "result": "{user}认真分析后认为条件不足，老师点头称赞你的严谨。",
                        "effects": { "intelligence": 5 },
                        "add_tags": []
                    },
                    {
                        "text": "一样多",
                        "result": "{user}回答一样多，老师说你很有哲学思维。",
                        "effects": { "san": 5 },
                        "add_tags": []
                    }
                ]
            },
            "gaokao_arrival": {
                "title": "高考来临",
                "description": "{user}与同学们瑟瑟发抖地走进考场。",
                "priority": 50,
                "trigger_conditions": {
                    "age_range": [18, 18],
                    "required_tags": ["学生"]
                },
                "options": [
                    {
                        "text": "参加高考",
                        "result": "{user}深吸一口气，走进了考场。",
                        "effects": { "san": -5 },
                        "add_tags": ["高考"],
                        "remove_tags": ["学生"],
                        "continue_event": "gaokao_chinese"
                    },
                    {
                        "text": "放弃高考",
                        "result": "{user}不参加高考",
                        "effects": { "social": -20, "intelligence": -10 },
                        "add_tags": [],
                        "remove_tags": ["学生"],
                        "continue_event": "job_hunting"
                    }
                ]
            },
            "job_hunting": {
                "title": "找工作",
                "description": "毕业在即，{user}需要找一份工作。",
                "is_continue": true,
                "options": [
                    {
                        "text": "医生",
                        "result": "{user}找了一份医生工作，开始了救死扶伤的职业生涯。",
                        "effects": { "money": 25, "social": 15, "intelligence": 10, "health": -5 },
                        "add_tags": ["医生", ],
                        "remove_tags": []
                    },
                    {
                        "text": "搬砖工人",
                        "result": "{user}找了一份搬砖工人的工作，虽然辛苦但锻炼了身体。",
                        "effects": { "money": 8, "health": 10, "intelligence": -5 },
                        "add_tags": ["搬砖工人"],
                        "remove_tags": []
                    },
                    {
                        "text": "工厂打工",
                        "result": "{user}在工厂找到了一份工作，每天重复着相同的工作。",
                        "effects": { "money": 10, "health": -5, "san": -5 },
                        "add_tags": ["工厂工人"],
                        "remove_tags": []
                    },
                    {
                        "text": "环卫",
                        "result": "{user}成为了一名环卫工人，为城市的清洁做出贡献。",
                        "effects": { "money": 5, "health": 5, "social": -5 },
                        "add_tags": ["环卫工人"],
                        "remove_tags": []
                    },
                    {
                        "text": "保镖",
                        "result": "{user}成为了一名保镖，负责保护重要人物的安全。",
                        "effects": { "money": 15, "health": 10, "social": 5 },
                        "add_tags": ["保镖"],
                        "remove_tags": []
                    },
                    {
                        "text": "送餐员/快递员",
                        "result": "{user}成为了一名送餐员/快递员，每天穿梭在城市的各个角落。",
                        "effects": { "money": 8, "health": 5, "social": 5 },
                        "add_tags": ["快递员"],
                        "remove_tags": []
                    },
                    {
                        "text": "抛光工人",
                        "result": "{user}成为了一名抛光工人，负责打磨各种产品表面。",
                        "effects": { "money": 7, "health": -5 },
                        "add_tags": ["工厂工人"],
                        "remove_tags": []
                    },
                    {
                        "text": "派传单",
                        "result": "{user}找了一份派传单的工作，每天在街头派发宣传单。",
                        "effects": { "money": 5, "health": 5, "social": 3 },
                        "add_tags": ["临时工"],
                        "remove_tags": []
                    },
                    {
                        "text": "餐馆打杂",
                        "result": "{user}在餐馆找到了一份打杂的工作，负责洗碗、清洁等工作。",
                        "effects": { "money": 6, "health": 3 },
                        "add_tags": ["服务业"],
                        "remove_tags": []
                    },
                    {
                        "text": "交警",
                        "result": "{user}成为了一名交警，维护城市的交通秩序。",
                        "effects": { "money": 12, "health": 5, "social": 10 },
                        "add_tags": ["交警"],
                        "remove_tags": []
                    },
                    {
                        "text": "厨师",
                        "result": "{user}成为了一名厨师，用美食满足人们的味蕾。",
                        "effects": { "money": 15, "health": 3, "social": 8 },
                        "add_tags": ["厨师"],
                        "remove_tags": []
                    },
                    {
                        "text": "文员",
                        "result": "{user}找到了一份文员工作，负责处理日常文书和行政事务。",
                        "effects": { "money": 10, "intelligence": 5 },
                        "add_tags": ["白领"],
                        "remove_tags": []
                    },
                    {
                        "text": "教师",
                        "result": "{user}成为了一名教师，开始了教书育人的职业生涯。",
                        "effects": { "money": 12, "intelligence": 10, "social": 10 },
                        "add_tags": ["教师"],
                        "remove_tags": []
                    },
                    {
                        "text": "私家侦探",
                        "result": "{user}成为了一名私家侦探，专门调查各种疑难案件。",
                        "effects": { "money": 18, "intelligence": 10, "social": 5 },
                        "add_tags": ["侦探"],
                        "remove_tags": []
                    },
                    {
                        "text": "程序员",
                        "result": "{user}成为了一名程序员，开始了编写代码的职业生涯。",
                        "effects": { "money": 20, "intelligence": 15, "health": -5, "san": -5 },
                        "add_tags": ["程序员", "高收入"],
                        "remove_tags": []
                    },
                    {
                        "text": "导游",
                        "result": "{user}成为了一名导游，带领游客探索各地的风景名胜。",
                        "effects": { "money": 12, "social": 15, "intelligence": 8 },
                        "add_tags": ["导游"],
                        "remove_tags": []
                    },
                    {
                        "text": "公务员",
                        "result": "{user}通过考试成为了一名公务员，开始了稳定的职业生涯。",
                        "effects": { "money": 15, "social": 10, "san": 5 },
                        "add_tags": ["公务员"],
                        "remove_tags": []
                    },
                    {
                        "text": "参军",
                        "result": "{user}选择参军，开始了保家卫国的军旅生涯。",
                        "effects": { "money": 10, "health": 15, "social": 5 },
                        "add_tags": ["军人"],
                        "remove_tags": []
                    },
                    {
                        "text": "翻译",
                        "result": "{user}成为了一名翻译，凭借语言能力在国际交流中发挥作用。",
                        "effects": { "money": 15, "intelligence": 10, "social": 8 },
                        "add_tags": ["翻译"],
                        "remove_tags": []
                    },
                    {
                        "text": "外贸",
                        "result": "{user}进入外贸行业，负责国际贸易相关工作。",
                        "effects": { "money": 18, "social": 10, "intelligence": 8 },
                        "add_tags": ["外贸"],
                        "remove_tags": []
                    },
                    {
                        "text": "婚姻中介",
                        "result": "{user}成为了一名婚姻中介，帮助单身人士寻找伴侣。",
                        "effects": { "money": 12, "social": 15 },
                        "add_tags": ["婚姻中介"],
                        "remove_tags": []
                    },
                    {
                        "text": "律师",
                        "result": "{user}成为了一名律师，开始了维护法律正义的职业生涯。",
                        "effects": { "money": 25, "intelligence": 15, "social": 10, "san": -5 },
                        "add_tags": ["律师", "高收入"],
                        "remove_tags": []
                    },
                    {
                        "text": "打字员",
                        "result": "{user}找到了一份打字员的工作，每天与键盘为伴。",
                        "effects": { "money": 8, "intelligence": 3, "health": -3 },
                        "add_tags": ["文职工作"],
                        "remove_tags": []
                    },
                    {
                        "text": "极限运动员",
                        "result": "{user}成为了一名极限运动员，挑战各种极限项目。",
                        "effects": { "money": 15, "health": 15, "social": 10, "luck": -10 },
                        "add_tags": ["极限运动员"],
                        "remove_tags": []
                    },
                    {
                        "text": "创业",
                        "result": "{user}决定创业，开始了自己的创业之路。",
                        "effects": { "money": -10, "intelligence": 10, "social": 10, "luck": -10 },
                        "add_tags": [],
                        "remove_tags": []
                    },
                    {
                        "text": "留校科研",
                        "result": "{user}选择留在学校继续科研工作，追求学术成就。",
                        "effects": { "money": 8, "intelligence": 15, "social": 5 },
                        "add_tags": ["研究员"],
                        "remove_tags": []
                    },
                    {
                        "text": "服务员",
                        "result": "{user}找到了一份服务员的工作，在餐厅或酒店为客人提供服务。",
                        "effects": { "money": 7, "social": 8 },
                        "add_tags": ["服务业"],
                        "remove_tags": []
                    }
                ]
            }
        }
    }
}

// 导出标签事件
window.commonEvents = commonEvents;
