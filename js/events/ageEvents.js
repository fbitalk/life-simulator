// ageEvents.js - 年龄段相关事件

/**
 * 年龄段事件定义
 * 按照不同年龄段分类
 */
const ageEvents = {
    // 幼儿期 (1-5岁)
    "幼儿": {
        "first_words": {
            "title": "学说话",
            "description": "你开始牙牙学语，父母兴奋地记录下你说的第一个单词。",
            "trigger_conditions": {
                "age_range": [1, 1]
            },
            "options": [
                {
                    "text": "叫爸爸/妈妈",
                    "result": "你的第一个单词是'爸爸'或'妈妈'，让父母非常开心。",
                    "effects": { "social": 5 },
                    "add_tags": ["早熟"]
                },
                {
                    "text": "说一些意外的词",
                    "result": "你说的第一个词出人意料，让家人惊讶不已。",
                    "effects": { "intelligence": 5 },
                    "add_tags": ["创造力"]
                }
            ]
        },
        "kindergarten_first_day": {
            "title": "第一天上幼儿园",
            "description": "到了上幼儿园的年龄，父母带你去报到。",
            "trigger_conditions": {
                "age_range": [3, 3]
            },
            "options": [
                {
                    "text": "高兴地入园",
                    "result": "你对新环境很好奇，很快就适应了幼儿园生活，结交了新朋友。",
                    "effects": { "social": 10 },
                    "add_tags": []
                },
                {
                    "text": "哭闹不止",
                    "result": "你不愿意离开父母，第一天哭了很久。",
                    "effects": { "social": -5 },
                    "add_tags": []
                },
                {
                    "text": "观察周围",
                    "result": "你安静地观察着新环境和其他孩子，慢慢适应。",
                    "effects": { "intelligence": 5 },
                    "add_tags": ["观察力"]
                }
            ]
        },
        "learning_to_walk": {
            "title": "学会走路",
            "description": "{user}____的时候突然学会了走路。",
            "trigger_conditions": {
                "age_range": [1, 1]
            },
            "options": [
                {
                    "text": "闯祸了被人追着打",
                    "result": "{user}刚学会走路就到处闯祸，被邻居追着满街跑。",
                    "effects": { "health": -5, "social": 10 },
                    "add_tags": ["勇敢"]
                },
                {
                    "text": "吃脚趾",
                    "result": "{user}发现了脚趾这个神奇的玩具，经常抱着啃。",
                    "effects": { "health": 5, "intelligence": -5 },
                    "add_tags": []
                },
                {
                    "text": "和狗抢东西吃",
                    "result": "{user}和家里的狗狗成了好朋友，经常一起分享食物。",
                    "effects": { "health": -3, "social": 8 },
                    "add_tags": []
                },
                {
                    "text": "跟鸡学习",
                    "result": "{user}观察院子里的鸡，学会了独特的走路方式。",
                    "effects": { "intelligence": 5, "social": 5 },
                    "add_tags": ["观察力"]
                },
                {
                    "text": "在某站看攻略",
                    "result": "{user}竟然会用平板看走路教程，真是个天才宝宝！",
                    "effects": { "intelligence": 15 },
                    "add_tags": ["交网友"]
                },
                {
                    "text": "走路还用学？",
                    "result": "{user}天生就会走路，把大人们都惊呆了。",
                    "effects": { "health": 10, "luck": 10 },
                    "add_tags": ["身体协调"]
                }
            ]
        },


        "wolf_at_door": {
            "title": "大灰狼来了",
            "description": "有一天有一只人模样的狼敲门，说是{user}的外婆，{user}独自在家，{user}____",
            "trigger_conditions": {
                "age_range": [2, 2]
            },
            "options": [
                {
                    "text": "打电话报警",
                    "result": "{user}机智地打电话报警，警察及时赶到抓住了坏人。",
                    "effects": { "intelligence": 15, "social": 10 },
                    "add_tags": ["勇敢"]
                },
                {
                    "text": "沏茶、迎客",
                    "result": "{user}天真地打开门迎接'外婆'...",
                    "effects": { "health": -100 },
                    "risk": 1.0
                },
                {
                    "text": "装作不在家",
                    "result": "{user}屏住呼吸，一动不动，'外婆'最终离开了。",
                    "effects": { "intelligence": 10, "luck": 5 },
                    "add_tags": ["谨慎"]
                },
                {
                    "text": "隔着门唱起了歌：小兔子乖乖",
                    "result": "{user}唱起了儿歌，'外婆'听到后知道孩子有警惕心，悻悻离开。",
                    "effects": { "intelligence": 8, "social": 8 },
                    "add_tags": ["音乐：1"]
                },
                {
                    "text": "识破骗局",
                    "result": "{user}识破骗局，'外婆'悻悻离开。",
                    "effects": { "intelligence": 8, "social": 8 },
                    "add_tags": ["勇敢"]
                }
            ]
        },

        "strange_tanuki_encounter": {
            "title": "陌生的大狸猫",
            "description": "有一天，{user}的抽屉里爬出一只巨大的狸猫，说是{user}孙子从未来派它来帮助{user}。{user}独自在家，{user}___",
            "trigger_conditions": {
                "age_range": [4, 4],  // 适合幼儿阶段
                "not_tags": []
            },
            "options": [
                {
                    "text": "打电话报警",
                    "result": "{user}慌张地拨打了报警电话，但警察到达后什么也没找到，狸猫早已消失不见。{user}被当作恶作剧处理。",
                    "effects": {
                        "social": -10,
                        "luck": -5,
                        "intelligence": 5  // 学会了理性思考
                    },
                    "add_tags": ["谨慎"]
                },
                {
                    "text": "泡茶，迎客",
                    "result": "{user}礼貌地为狸猫泡了茶。狸猫很感动，送给了{user}一个神奇的道具作为礼物，并承诺会在关键时刻帮助{user}。",
                    "effects": {
                        "luck": 20,
                        "social": 15,
                        "intelligence": 10
                    },
                    "add_tags": ["神奇道具"],
                    "continue_event": "tanuki_gift_choice"
                },
                {
                    "text": "挥挥手，说来盘昆特牌吧",
                    "result": "{user}提议玩昆特牌。狸猫大笑，原来它也是昆特牌高手！一场激烈的对决后，{user}技艺大增。",
                    "effects": {
                        "intelligence": 15,
                        "social": 10,
                        "luck": 5
                    },
                    "add_tags": ["狸猫朋友"]
                },
                {
                    "text": "装作不在家",
                    "result": "{user}躲在角落装作不在家。狸猫摇摇头离开了，留下一句话：'勇气不足的人无法改变命运。'",
                    "effects": {
                        "social": -5,
                        "luck": -10,
                        "health": -5  // 错过了机会
                    },
                    "add_tags": []
                },
                {
                    "text": "我不认识什么叮当",
                    "result": "{user}困惑地表示不认识任何叫'叮当'的人。狸猫解释说可能时间线有误。",
                    "effects": {
                        "intelligence": 12,
                        "luck": 8,
                        "social": 5
                    },
                    "add_tags": []
                }
            ]
        },

        "matchgirl_at_door": {
            "title": "卖火柴的小女孩来了",
            "description": "有一天，有一个小女孩举着一个广告牌来敲{user}家的门。{user}一打开门，她就开始喋喋不休地推销她的火柴：'防风防水防雷,燃烧自己点亮别人,生活小超人,一支火柴可以点一包烟'{user}____",
            "trigger_conditions": {
                "age_range": [2, 2]
            },
            "options": [
                {
                    "text": "打电话报警",
                    "result": "{user}觉得很可疑，赶紧打电话报了警。",
                    "effects": { "intelligence": 15, "social": -5 },
                    "add_tags": ["勇敢"]
                },
                {
                    "text": "买一包火柴",
                    "result": "{user}用零花钱买了一包火柴。小女孩很高兴，送了{user}一盒特别的彩色火柴作为礼物。",
                    "effects": { "luck": 10, "money": -5, "social": 5 },
                    "add_tags": ["善良"]
                },
                {
                    "text": "买一箱",
                    "result": "{user}买一整箱。",
                    "effects": { "social": 15, "money": -10 },
                    "add_tags": []
                },
                {
                    "text": "摊摊手，说来盘昆特牌吧",
                    "result": "{user}邀请小女孩玩牌。出乎意料的是，小女孩竟然是昆特牌高手，两人玩得不亦乐乎。",
                    "effects": { "intelligence": 10, "social": 20 },
                    "add_tags": ["昆特牌"]
                },
                {
                    "text": "摔门",
                    "result": "{user}直接关上了门。听到门外小女孩失落的叹息。",
                    "effects": { "social": -10, "san": -5 },
                    "add_tags": []
                },
                {
                    "text": "沏茶，迎客",
                    "result": "{user}礼貌地邀请小女孩进来喝茶休息。小女孩感动地说这是她卖火柴以来受到的最好的待遇",
                    "effects": { "social": 25, "luck": 5 },
                    "add_tags": ["勇敢"]
                }
            ]
        },

        "tanuki_gift_choice": {
            "title": "狸猫的礼物",
            "description": "狸猫拿出了几样神奇的道具，让{user}选择一样作为礼物...",
            "is_continue": true,
            "options": [
                {
                    "text": "记忆面包",
                    "result": "{user}选择了记忆面包。从此学习变得轻松许多，但也变得有些依赖这种捷径。",
                    "effects": {
                        "intelligence": 25,
                        "social": -5  // 有些脱离现实
                    },
                    "add_tags": ["记忆超群"],
                    "remove_tags": ["神奇道具"]
                },
                {
                    "text": "竹蜻蜓",
                    "result": "{user}选择了竹蜻蜓。据说能够让{user}自由飞翔，但不知道怎么用。",
                    "effects": {
                        "luck": 15,
                        "social": 10,
                        "health": 10
                    },
                    "add_tags": ["竹蜻蜓"],
                    "remove_tags": ["神奇道具"]
                },
                {
                    "text": "如意门",
                    "result": "{user}选择了如意门。据说能够瞬间到达任何地方，但不知道怎么用。",
                    "effects": {
                        "intelligence": 15,
                        "social": 20,
                        "luck": 10
                    },
                    "add_tags": ["如意门"],
                    "remove_tags": ["神奇道具"]
                },
                {
                    "text": "什么都不要，保持平凡",
                    "result": "{user}礼貌地拒绝了礼物，表示平凡的生活就很好。狸猫朝{user}神秘一笑，祝福{user}一生平安。",
                    "effects": {
                        "health": 15,
                        "social": 15,
                        "luck": 10
                    },
                    "add_tags": [],
                    "remove_tags": []
                }
            ]
        },
        "toddler_early_talents": {
            "title": "从小就...",
            "description": "{user}从小就展现出一些与众不同的特质。",
            "trigger_conditions": { "age_range": [4, 4] },
            "options": [
                {
                    "text": "和小动物说话",
                    "result": "{user}发现自己似乎有和小动物沟通的潜能。",
                    "effects": {},
                    "add_tags": [],
                    "continue_event": "toddler_animal_talk_choice"
                },
                {
                    "text": "身体折起来",
                    "result": "{user}的身体异常柔韧，身体可以折起来。",
                    "effects": {},
                    "add_tags": ["身体协调"]
                },
                {
                    "text": "过目不忘",
                    "result": "{user}展现出惊人的记忆力，很多事情看过一遍就能记住。",
                    "effects": { "intelligence": 5 },
                    "add_tags": ["记忆超群"]
                },
                {
                    "text": "会说粗口",
                    "result": "{user}小小年纪就学会了各种粗口，并运用自如。",
                    "effects": {},
                    "add_tags": ["高情商"]
                },
                {
                    "text": "酗酒",
                    "result": "{user}不知从哪里学会了喝酒，并对此产生了兴趣，身体也因此变差了。",
                    "effects": { "health": -10 },
                    "add_tags": ["多病"]
                },
                {
                    "text": "会彪歌",
                    "result": "{user}学会了彪歌，并对此产生了兴趣。",
                    "effects": { "intelligence": 5 },
                    "add_tags": ["音乐：1"]
                },
                {
                    "text": "会素描",
                    "result": "{user}学会了素描，并对此产生了兴趣。",
                    "effects": { "intelligence": 5 },
                    "add_tags": ["绘画：1"]
                },
                {
                    "text": "目的性很强",
                    "result": "{user}目的性很强，经常做一些让父母头疼的事情。",
                    "effects": { "intelligence": 5 },
                    "add_tags": []
                },
                {
                    "text": "会吹口哨",
                    "result": "{user}学会了吹口哨，并对此产生了兴趣。",
                    "effects": { "intelligence": 5 },
                    "add_tags": ["音乐：1"],
                    "continue_event": "toddler_music_talent"
                }

            ]
        },
        
        "toddler_animal_talk_choice": {
            "title": "与谁对话？",
            "description": "{user}发现自己能和特定动物讲话，会是谁呢？",
            "is_continue": true,
            "options": [
                {
                    "text": "海豚",
                    "result": "{user}发现自己能听懂海豚的歌声，并从中感受到音乐的魅力。",
                    "effects": {},
                    "add_tags": ["音乐"]
                },
                {
                    "text": "鸡",
                    "result": "{user}和鸡你一言我一语，竟然领悟了神秘的'坤学'。",
                    "effects": {},
                    "add_tags": ["坤学"]
                },
                {
                    "text": "四维蜈蚣",
                    "result": "{user}与一只来自高维度的蜈蚣进行了深奥的交流，获得了量子启蒙。",
                    "effects": { "intelligence": 10 },
                    "add_tags": ["四次元"]
                },
                {
                    "text": "狗",
                    "result": "{user}能和狗狗无障碍交流，成为了远近闻名的'狗之友'。",
                    "effects": { "social": 5 },
                    "add_tags": ["汪星人"]
                },
                {
                    "text": "蛇",
                    "result": "{user}与蛇对话，似乎觉醒了某种古老的巫师血脉。",
                    "effects": { "luck": 5 },
                    "add_tags": ["巫师血脉"]
                },
                {
                    "text": "笛卡尔鸭",
                    "result": "{user}和一只会思考的鸭子讨论哲学，脑洞大开。",
                    "effects": { "intelligence": 5 },
                    "add_tags": ["哲学"]
                }
            ]
        },
        "toddler_music_talent": {
            "title": "音乐天赋",
            "description": "{user}很喜欢搞音乐，他的目标是____",
            "is_continue": true,
            "options": [
                {
                    "text": "当一名歌手",
                    "result": "{user}每天都在唱歌，梦想成为一名歌手。",
                    "effects": { "social": 5, "san": 5 },
                    "add_tags": ["音乐：1"]
                },
                {
                    "text": "当一名舞者",
                    "result": "{user}喜欢跳舞，动作灵活，节奏感很强。",
                    "effects": { "health": 5, "social": 5 },
                    "add_tags": []
                },
                {
                    "text": "成为MC石头",
                    "result": "{user}喜欢模仿MC石头的风格，rap说得有模有样。",
                    "effects": { "intelligence": 5, "social": 5 },
                    "add_tags": []
                },
                {
                    "text": "吹口哨",
                    "result": "{user}学会了吹口哨，常常用口哨表达心情。",
                    "effects": { "san": 5 },
                    "add_tags": []
                }
            ]
        },
        "toddler_daily_life": {
            "title": "幼儿日常",
            "description": "{user}____",
            "trigger_conditions": {
                "age_range": [3, 3]
            },
            "options": [
                {
                    "text": "喜欢看电视",
                    "result": "{user}最喜欢看动画片和儿童节目。",
                    "effects": { "intelligence": 5, "san": 5 },
                    "add_tags": []
                },
                {
                    "text": "对玩具非常着迷",
                    "result": "{user}对各种玩具爱不释手，家里堆满了玩具。",
                    "effects": { "intelligence": 5, "social": 5 },
                    "add_tags": []
                },
                {
                    "text": "喜欢玩耍",
                    "result": "{user}喜欢和小伙伴们一起玩耍，性格开朗活泼。",
                    "effects": { "social": 10, "health": 5 },
                    "add_tags": ["活泼"]
                },
                {
                    "text": "喜欢玩平板电脑",
                    "result": "{user}对电子产品很感兴趣，玩平板电脑时非常专注。",
                    "effects": { "intelligence": 10, "san": -5 },
                    "add_tags": []
                },
                {
                    "text": "经常安静地呆着",
                    "result": "{user}喜欢一个人安静地呆着。",
                    "effects": { "san": 10 },
                    "add_tags": []
                },
                {
                    "text": "喜欢撒币",
                    "result": "{user}看到什么都想买。",
                    "effects": { "money": -10, "social": 5 },
                    "add_tags": []
                }
            ]
        },
        "elementary_school": {
            "title": "小学入学",
            "description": "你到了上小学的年龄，成为了祖国的花朵。",
            "trigger_conditions": {
                "age_range": [5, 5]
            },
            "options": [
                {
                    "text": "下一个事件",
                    "result": "你开始上学。",
                    "effects": { "intelligence": 10 },
                    "add_tags": ["学生"]
                },
            ]
        },

    },

    // 少年期 (6-12岁)
    "少年": {
        "giant_husky_encounter": {
            "title": "巨型哈士奇遭遇",
            "description": "{user}在路上遇到了一个几百斤重的巨型哈士奇，这哈士奇看起来好像饿极了，两只小眼睛盯着{user}一动不动。空气中弥漫着紧张的气氛。",
            "trigger_conditions": {
                "age_range": [8, 8],
                "excluded_tags": ["体弱多病"] // 排除体弱者，避免选择过于危险
            },
            "options": [
                {
                    "text": "哈士奇好可爱，我要去摸摸",
                    "conditional_results": [
                        {
                            "conditions": { "min_attributes": { "luck": 80 } },
                            "result": "奇迹般地，这只巨型哈士奇竟然很温顺！它让你摸了摸，还舔了舔你的手。原来它只是想要一些关爱。",
                            "effects": { "social": 10, "luck": 5 },
                            "add_tags": ["动物朋友", "勇敢者"]
                        },
                        {
                            "conditions": { "min_attributes": { "luck": 50 } },
                            "result": "哈士奇被你的善意打动了，但它还是很饿。它轻轻推了推你，示意你给它找些食物。",
                            "effects": { "social": 5, "money": -10 },
                            "add_tags": ["善良"]
                        },
                        {
                            "conditions": { "default": true },
                            "result": "哈士奇误解了你的意图，一口咬向了你！幸好只是轻伤，但你被吓得不轻。",
                            "effects": { "health": -20, "san": -10 }
                        }
                    ]
                },
                {
                    "text": "为避免被袭击，躺地上装死",
                    "conditional_results": [
                        {
                            "conditions": { "min_attributes": { "intelligence": 70 } },
                            "result": "你的策略很聪明！哈士奇闻了闻你，发现你'没有威胁'后就失去了兴趣，转身离开了。",
                            "effects": { "san": 5 },
                            "add_tags": ["机智应对"]
                        },
                        {
                            "conditions": { "default": true },
                            "result": "你装死的技术还需要提高...哈士奇用鼻子蹭了蹭你，然后开始舔你的脸。虽然没有危险，但场面很尴尬。",
                            "effects": { "social": -5, "san": -5 }
                        }
                    ]
                },
                {
                    "text": "拔腿就跑",
                    "conditional_results": [
                        {
                            "conditions": { "min_attributes": { "health": 70 } },
                            "result": "你的身体素质不错！成功跑过了笨重的巨型哈士奇，安全脱险。",
                            "effects": { "health": 5 },
                            "add_tags": ["逃跑高手"]
                        },
                        {
                            "conditions": { "default": true },
                            "result": "你跑得气喘吁吁，但还是被哈士奇追上了。幸好它只是想和你玩耍，不过你已经筋疲力尽了。",
                            "effects": { "health": -10, "social": 5 }
                        }
                    ]
                },
                {
                    "text": "无视，继续前行",
                    "result": "你表现出了令人敬佩的冷静。哈士奇看到你毫不在意，反而对你失去了兴趣，自己走开了。",
                    "effects": { "san": 10 },
                    "add_tags": ["淡定"]
                },
                {
                    "text": "喷火！",
                    "conditional_results": [
                        {
                            "conditions": { "required_tags": ["神秘体质"] },
                            "result": "不可思议！你真的喷出了火焰！哈士奇被吓跑了，而你发现了自己隐藏的超能力。",
                            "effects": { "mystery": 20, "san": -5 },
                            "add_tags": ["火焰掌控者", "超能力者"]
                        },
                        {
                            "conditions": { "default": true },
                            "result": "你张大嘴巴试图喷火，但什么也没发生。哈士奇歪着头看着你做出奇怪的表情，场面十分尴尬。",
                            "effects": { "san": -10, "social": -5 }
                        }
                    ]
                },
                {
                    "text": "隐身逃跑",
                    "conditional_results": [
                        {
                            "conditions": { "min_attributes": { "mystery": 80 } },
                            "result": "你的身影逐渐变得透明！哈士奇困惑地四处嗅探，最终放弃寻找。你成功隐身脱险！",
                            "effects": { "mystery": 10, "luck": 10 },
                            "add_tags": ["隐身术师", "神秘存在"]
                        },
                        {
                            "conditions": { "default": true },
                            "result": "你闭上眼睛，心想'我隐身了'，但哈士奇依然能清楚地看到你。它甚至用爪子戳了戳你。",
                            "effects": { "san": -5, "social": -5 }
                        }
                    ]
                },
                {
                    "text": "使用风火轮逃跑",
                    "conditional_results": [
                        {
                            "conditions": { "min_attributes": { "mystery": 60, "luck": 70 } },
                            "result": "脚下突然出现了燃烧的轮子！你像哪吒一样踩着风火轮飞速逃离，哈士奇只能望着你的背影发呆。",
                            "effects": { "mystery": 15, "social": 20 },
                            "add_tags": ["风火轮使者", "传说中的存在"]
                        },
                        {
                            "conditions": { "default": true },
                            "result": "你在原地蹦跳，试图召唤风火轮，但只是踩到了一块石头差点摔倒。哈士奇看起来很困惑。",
                            "effects": { "health": -5, "san": -5 }
                        }
                    ]
                },
                {
                    "text": "飞行逃跑",
                    "conditional_results": [
                        {
                            "conditions": { "min_attributes": { "mystery": 90 } },
                            "result": "你的身体轻盈地飞上了天空！从空中俯视，那只巨型哈士奇变得如蚂蚁般渺小。",
                            "effects": { "mystery": 20, "san": 5 },
                            "add_tags": ["飞行能力者", "天空的主人"]
                        },
                        {
                            "conditions": { "default": true },
                            "result": "你拼命挥舞手臂想要飞起来，但重力无情地把你拉向地面。哈士奇觉得你的动作很有趣。",
                            "effects": { "health": -5, "social": -10 }
                        }
                    ]
                },
                {
                    "text": "与其对话",
                    "conditional_results": [
                        {
                            "conditions": { "min_attributes": { "mystery": 50, "social": 70 } },
                            "result": "令人惊讶的是，哈士奇竟然回应了你！它用低沉的声音说：'人类，我只是在寻找回家的路。'你们进行了一场奇妙的对话。",
                            "effects": { "mystery": 15, "social": 15, "san": -5 },
                            "add_tags": ["动物语言者", "奇遇体验者"]
                        },
                        {
                            "conditions": { "min_attributes": { "social": 60 } },
                            "result": "虽然哈士奇不会说话，但你温和的语调似乎安抚了它。它渐渐放松下来，甚至允许你接近。",
                            "effects": { "social": 10 },
                            "add_tags": ["动物沟通师"]
                        },
                        {
                            "conditions": { "default": true },
                            "result": "你试图和哈士奇交流，但它只是歪着头看着你，然后打了个大哈欠。看来对话失败了。",
                            "effects": { "san": -5 }
                        }
                    ]
                }
            ]
        },
        "truth_belief_choice": {
            "title": "真理的信奉",
            "description": "在人生的某个重要时刻，{user}需要选择一个作为自己人生信条的真理。这个选择将深刻影响你的世界观和人生道路。",
            "trigger_conditions": {
                "age_range": [16, 16],
                "min_attributes": { "intelligence": 40 }
            },
            "options": [
                {
                    "text": "站得越高，看得越远",
                    "result": "你选择了这个充满哲理的真理。从此你更加注重提升自己的高度和视野，无论是知识层面还是社会地位。",
                    "effects": { "intelligence": 10, "social": 10 },
                    "add_tags": ["高瞻远瞩", "哲学思考者"]
                },
                {
                    "text": "婚姻是爱情的坟墓",
                    "result": "你对婚姻制度产生了深深的怀疑。这种观念让你在感情问题上更加谨慎，但也可能让你错过一些美好的感情。",
                    "effects": { "intelligence": 5, "social": -10, "san": -5 },
                    "add_tags": ["感情怀疑论者", "独身主义者"]
                },
                {
                    "text": "人是会思考的芦苇",
                    "result": "你被帕斯卡的这句名言深深打动。你认识到人类虽然渺小脆弱，但思考的能力让人类拥有了独特的尊严和价值。",
                    "effects": { "intelligence": 15, "san": 10 },
                    "add_tags": ["人文主义者", "深度思考者"]
                },
                {
                    "text": "上海自来水来自海上",
                    "result": "你选择了这个有趣的回文句作为人生真理。虽然别人觉得奇怪，但你从中领悟到了循环和对称的美学原理。",
                    "effects": { "luck": 10, "social": -5, "mystery": 5 },
                    "add_tags": ["语言艺术家", "独特品味"]
                },
                {
                    "text": "Allah Akbar (真主至大)",
                    "conditional_results": [
                        {
                            "conditions": { "min_attributes": { "san": 70 } },
                            "result": "你选择了伊斯兰教的这句颂词作为信条。这给了你内心的平静和精神支撑，你开始更加虔诚地生活。",
                            "effects": { "san": 15, "social": 5 },
                            "add_tags": ["宗教信仰者", "虔诚之人"]
                        },
                        {
                            "conditions": { "default": true },
                            "result": "你选择了这句话，但对其深层含义理解不够深刻。不过这仍然给了你一些精神慰藉。",
                            "effects": { "san": 10 },
                            "add_tags": ["精神寻求者"]
                        }
                    ]
                }
            ]
        },
        "childhood_hobby": {
            "title": "儿时爱好",
            "description": "你对某项活动产生了浓厚的兴趣。",
            "trigger_conditions": {
                "age_range": [7, 10]
            },
            "options": [
                {
                    "text": "喜欢阅读",
                    "result": "你沉迷于各种书籍，知识面不断扩大。",
                    "effects": { "intelligence": 15, "social": -5 },
                    "add_tags": ["书虫"]
                },
                {
                    "text": "热爱运动",
                    "result": "你喜欢各种体育活动，身体素质不断提高。",
                    "effects": { "health": 15, "intelligence": 5 },
                    "add_tags": ["运动健将"]
                },
                {
                    "text": "痴迷游戏",
                    "result": "你对电子游戏产生了浓厚兴趣。",
                    "effects": { "intelligence": 5, "health": -5, "social": -5 },
                    "add_tags": ["游戏迷"]
                },
                {
                    "text": "学习才艺",
                    "result": "你开始学习一门艺术才能，如钢琴、绘画等。",
                    "effects": { "intelligence": 10, "social": 5 },
                    "add_tags": ["艺术细胞"]
                }
            ]
        },
        "school_bully": {
            "title": "校园霸凌",
            "description": "有同学在欺负一个比较内向的同学，{user}看到了这一幕。",
            "trigger_conditions": { "age_range": [13, 18], "excluded_tags": ["恶霸"] },
            "options": [
                {
                    "text": "挺身而出",
                    "result": "{user}勇敢地站出来制止了霸凌行为，赢得了大家的尊重。",
                    "effects": { "social": 20, "health": -8, "intelligence": 5 },
                    "add_tags": ["正义感", "勇敢"],
                    "remove_tags": ["胆小"]
                },
                {
                    "text": "上前嘲讽",
                    "risk": 1,
                    "result": "{user}上前嘲讽了被霸凌的同学，被一堆人围殴致死。",
                    "risk": 1,
                },
                {
                    "text": "告诉老师",
                    "result": "{user}选择告诉老师，老师及时制止了霸凌。",
                    "effects": { "social": -5, "intelligence": 8 }
                },
                {
                    "text": "默默离开",
                    "result": "{user}选择默默离开现场。",
                    "effects": { "health": -3, "luck": -5 },
                    "remove_tags": ["勇敢"]
                }
            ]
        }
    },

    // 青少年 (13-18岁)
    "青少年": {
        "puberty_changes": {
            "title": "青春期变化",
            "description": "你的身体开始发生青春期变化，情绪也变得波动。",
            "trigger_conditions": {
                "age_range": [13, 15]
            },
            "options": [
                {
                    "text": "平静接受",
                    "result": "你理性地接受这些变化，并主动了解相关知识。",
                    "effects": { "intelligence": 5, "san": 5 },
                    "add_tags": ["成熟"]
                },
                {
                    "text": "情绪不稳",
                    "result": "你因为这些变化而情绪波动很大，经常与家人发生争执。",
                    "effects": { "social": -5, "san": -5 },
                    "add_tags": ["叛逆期"]
                }
            ]
        },
        "high_school_entrance": {
            "title": "升入高中",
            "description": "你参加了中考，即将进入一所新的高中。",
            "trigger_conditions": {
                "age_range": [15, 15]
            },
            "options": [
                {
                    "text": "进入重点高中",
                    "conditional_results": [
                        {
                            "conditions": { "min_attributes": { "intelligence": 70 } },
                            "result": "凭借出色的成绩，你成功考入了重点高中。",
                            "effects": { "intelligence": 10, "social": 5 },
                            "add_tags": []
                        },
                        {
                            "conditions": { "default": true },
                            "result": "尽管努力，但成绩不够理想，未能进入重点高中。",
                            "effects": { "intelligence": 5 },
                            "add_tags": []
                        }
                    ]
                },
                {
                    "text": "选择职业高中",
                    "result": "你对技能培训更感兴趣，选择了一所职业高中。",
                    "effects": { "intelligence": 5, "money": 5 },
                    "add_tags": ["实用主义"]
                }
            ]
        },
        "first_love": {
            "title": "初恋",
            "description": "班上有一位同学对你表现出特别的关注。",
            "trigger_conditions": {
                "age_range": [14, 18]
            },
            "options": [
                {
                    "text": "接受对方的好感",
                    "result": "你们开始了青涩的恋爱关系，体验着初恋的甜蜜与烦恼。",
                    "effects": { "social": 10, "intelligence": -5 },
                    "add_tags": ["初恋"]
                },
                {
                    "text": "专注学业，婉拒对方",
                    "result": "你决定将精力集中在学业上，礼貌地拒绝了对方。",
                    "effects": { "intelligence": 10, "social": -5 }
                }
            ]
        },


    },

    // 青年期 (19-30岁)
    "青年": {
        "car_accident": {
            "title": "车祸瞬间",
            "description": "你正在坐出租车玩手机，突然，发生了车祸你...",
            "trigger_conditions": {
                "age_range": [19, 25]
            },
            "options": [
                {
                    "text": "拍照发朋友圈",
                    "result": "前方发生车祸，你掏出手机准备拍照发朋友圈。",
               
                },
                {
                    "text": "我要回去！我的外卖还没到！",
                    "result": "前方发生车祸，你大声要求司机掉头回去。",
                },
                {
                    "text": "啥都不做",
                    "result": "你正在坐出租车玩手机，发生了车祸，你被卡车撞死。",
                    "add_tags": ["异世界：魔界"],
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
                    "result": "你不知为何喊出了“寒冰附体”，但什么也没发生。",
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
                "age_range": [20, 25]
            },
            "options": [
                {
                    "text": "立马挂电话",
                    "result": "{user}慌忙挂断了电话，心跳加速。",
                    "effects": { "social": -5 }
                },
                {
                    "text": "向总统问好",
                    "result": "{user}礼貌地向总统问好，对方也友好回应。",
                    "effects": { "social": 10, "intelligence": 5 }
                },
                {
                    "text": "问总统吃了没",
                    "result": "{user}关心地问总统吃饭了没，把总统逗笑了。",
                    "effects": { "social": 15, "luck": 5 },
                    "add_tags": ["幽默"]
                },
                {
                    text: "约出来吃宵夜",
                    "result": "{user}大胆地约总统吃宵夜，对方婉拒但称赞了{user}的勇气。",
                    "effects": { "social": 8, "luck": 8 },
                    "add_tags": ["胆大"]
                },
                {
                    "text": "反映社会问题",
                    "result": "{user}认真地向总统反映了一些社会问题，得到了重视。",
                    "effects": { "intelligence": 15, "social": 10 },
                    "add_tags": ["社会责任感"]
                },
                {
                    "text": "装成中国移动推销",
                    "result": "{user}装成客服推销套餐，把总统都整懵了。",
                    "effects": { "social": 5, "luck": 10 },
                    "add_tags": ["恶作剧大师"]
                },
                {
                    "text": "求个国家职位",
                    "result": "{user}打错了电话，打给了美国总统。{user}将计就计，竟然向总统说：'给我个国家的职务做做吧。'",
                    "effects": { "luck": 20 },
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
                    "effects": { "social": 20, "luck": 15 },
                    "add_tags": ["阿美丽卡:铲屎官"],
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
                    "effects": { "intelligence": 20, "social": 15, "luck": 20 },
                    "add_tags": []
                }
            ]
        },
        "heroic_rescue_adult": {
            "title": "英雄时刻",
            "description": "大楼着火了，{user}听到里面有人呼救！",
            "trigger_conditions": {
                "age_range": [19, 50],
                "excluded_tags": ["残疾"]
            },
            "options": [
                {
                    "text": "冲进火场救人",
                    "conditional_results": [
                        {
                            "conditions": {
                                "any_of": [
                                    { "tags": ["消防员"] },
                                    {
                                        "attributes": { "health": 80, "intelligence": 70 },
                                        "all_required": true
                                    }
                                ]
                            },
                            "result": "{user}成功救出了被困人员，成为了真正的英雄！",
                            "effects": { "social": 40, "health": -20, "luck": 30 },
                            "add_tags": ["英雄"],
                        },
                        {
                            "conditions": {
                                "tags": ["警察"]
                            },
                            "result": "{user}专业地组织撤离，最大程度减少了伤亡。",
                            "effects": { "social": 30, "intelligence": 10 },
                            "add_tags": ["专业救援"]
                        },
                        {
                            "conditions": { "default": true },
                            "result": "{user}勇敢地冲了进去，但被浓烟呛得不轻...",
                            "effects": { "health": -40, "social": 15 },
                            "risk": 0.3
                        }
                    ]
                },
                {
                    "text": "呼叫消防队",
                    "result": "{user}及时呼叫了消防队，协助疏散人群。",
                    "effects": { "social": 10, "intelligence": 5 }
                }
            ]
        },
        "complex_investment": {
            "title": "复杂投资决策",
            "description": "一个高风险高回报的投资机会出现了。",
            "trigger_conditions": {
                "age_range": [25, 60],
                "min_attributes": { "money": 80 }
            },
            "options": [
                {
                    "text": "全部投入",
                    "conditional_results": [
                        {
                            "conditions": {
                                "tags": ["企业家"],
                                "attributes": { "intelligence": 85, "luck": 70 },
                                "all_required": true
                            },
                            "result": "{user}的判断完全正确，投资获得了巨大成功！",
                            "effects": { "money": 200, "intelligence": 15 },
                            "add_tags": ["投资大亨"],
                            "continue_event": "business_empire"
                        },
                        {
                            "conditions": {
                                "any_of": [
                                    { "tags": ["富二代"] },
                                    { "attributes": { "luck": 90 } }
                                ]
                            },
                            "result": "凭借运气或资源，{user}的投资获得了不错的回报。",
                            "effects": { "money": 80, "social": 10 }
                        },
                        {
                            "conditions": {
                                "not": { "tags": ["投资失败", "破产"] },
                                "attributes": { "intelligence": 70 }
                            },
                            "result": "{user}的投资有一定收益，但没有预期那么好。",
                            "effects": { "money": 30 }
                        },
                        {
                            "conditions": { "default": true },
                            "result": "投资失败了，{user}损失惨重...",
                            "effects": { "money": -60, "health": -15 },
                            "add_tags": ["投资失败"]
                        }
                    ]
                },
                {
                    "text": "谨慎观望",
                    "result": "{user}选择了观望，错过了机会。",
                    "effects": { "intelligence": 5 }
                }
            ]
        }
    },

    // 中年期 (31-60岁)
    "中年": {
        "career_crossroads": {
            "title": "职业十字路口",
            "description": "工作多年后，你面临职业发展的重要选择。",
            "trigger_conditions": {
                "age_range": [35, 45]
            },
            "options": [
                {
                    "text": "尝试转行",
                    "result": "你决定走出舒适区，尝试一个全新的领域。",
                    "effects": { "money": -10, "intelligence": 10, "social": 5 },
                    "add_tags": ["勇于尝试"]
                },
                {
                    "text": "追求晋升",
                    "result": "你专注于在现有领域爬升更高的职位。",
                    "effects": { "money": 15, "health": -5 },
                    "add_tags": ["事业心"]
                },
                {
                    "text": "维持现状",
                    "result": "你对现在的生活感到满意，选择保持稳定。",
                    "effects": { "san": 10, "health": 5 },
                    "add_tags": ["安于现状"]
                }
            ]
        },
        "mid_life_crisis": {
            "title": "中年危机",
            "description": "随着年龄增长，你开始反思自己的人生选择和意义。",
            "trigger_conditions": {
                "age_range": [40, 50]
            },
            "options": [
                {
                    "text": "重新审视生活目标",
                    "result": "你花时间思考真正对自己重要的事物，调整了生活方向。",
                    "effects": { "san": 15, "social": -5, "intelligence": 5 },
                    "add_tags": ["觉悟"]
                },
                {
                    "text": "冲动消费或行为",
                    "result": "你通过大量消费或冲动行为来缓解焦虑。",
                    "effects": { "money": -20, "health": -5, "san": 5 },
                    "add_tags": ["冲动"]
                }
            ]
        }
    },
    // 老年期 (61岁-110岁)
    "老年": {
        "retirement": {
            "title": "退休生活",
            "description": "你正式从工作岗位退休，开始了新的生活阶段。",
            "trigger_conditions": {
                "age_range": [60, 65]
            },
            "options": [
                {
                    "text": "培养新爱好",
                    "result": "你开始尝试以前没时间做的事情，如绘画、旅行等。",
                    "effects": { "health": 5, "san": 10 },
                    "add_tags": ["乐退族"]
                },
                {
                    "text": "含饴弄孙",
                    "result": "你把大部分时间花在陪伴孙辈上，享受天伦之乐。",
                    "effects": { "social": 10, "san": 5 },
                    "add_tags": ["慈祥长辈"]
                },
                {
                    "text": "继续发挥余热",
                    "result": "你以顾问或志愿者的身份继续为社会贡献自己的经验。",
                    "effects": { "social": 10, "intelligence": 5, "health": -5 },
                    "add_tags": ["老骥伏枥"]
                }
            ]
        },
        "old_man_talk_choice": {
            "title": "问卷调查",
            "description": "{user}在公园里散步，遇到了一个老人，老人说：“年轻人，你愿意帮我一个忙吗？然后递给{user}一张问卷。”",
            "trigger_conditions": {
                "age_range": [80, 100],
                "not_tags": ["不解之谜"]
            },
            "options": [
                {
                    "text": "继续",
                    "result": "你答应了老人的请求，老人非常高兴。",
                    "effects": {},
                    "continue_event": "author_survey"
                }
            ]   
        },
        "author_survey": {
            "title": "作者调查",
            "description": "{user}接过问卷，发现是作者的调查问卷。{user}开始填写问卷,通通填十分满意，直到最后，有一个对作者说的话，{user}填了_。",
            "is_continue": true,    
            "options": [
                {
                    "text": "游戏太好玩了，我十分满意",
                    "result": "{user}填写了问卷，非常满意。",
                    "effects": { "social": 10, "intelligence": 10 },
                },
                {
                    "text": "游戏太难了，不满意",
                    "result": "{user}填写了问卷，非常不满意。",
                    "effects": { "social": -10, "intelligence": -10 },
                },
                {
                    "text": "游戏太无聊了，我十分不满意",
                    "result": "{user}填写了问卷，非常不满意。",
                    "effects": { "social": -10, "intelligence": -10 },
                },
                {
                    "text": "这个游戏作者是个傻逼吧",
                    "result": "{user}对游戏作者破口大骂。",
                    "effects": { "social": -10, "intelligence": -10 },
                    "add_tags": ["地狱模式", "不解之谜"]
                }
                
            ]
        },
        "health_crisis": {
            "title": "健康危机",
            "description": "你开始面临严重的健康问题。",
            "trigger_conditions": {
                "age_range": [70, 90],
                "max_attributes": { "health": 40 }
            },
            "options": [
                {
                    "text": "积极治疗",
                    "result": "你选择接受积极的医疗干预，虽然过程痛苦但有希望恢复。",
                    "effects": { "health": 10, "money": -20 }
                },
                {
                    "text": "淡然面对",
                    "result": "你接受生命的自然规律，专注于提高剩余时间的生活质量。",
                    "effects": { "san": 15 },
                    "add_tags": ["豁达"]
                }
            ]
        },
        "life_reflection": {
            "title": "人生回顾",
            "description": "在晚年，你开始回顾自己的一生。",
            "trigger_conditions": {
                "age_range": [80, 100]
            },
            "options": [
                {
                    "text": "满足与感恩",
                    "result": "你对自己的人生感到满足，心中充满感恩。",
                    "effects": { "san": 20, "luck": 10 },
                    "add_tags": ["知足常乐"]
                },
                {
                    "text": "遗憾与思索",
                    "result": "你思考着人生中的遗憾和未完成的梦想。",
                    "effects": { "san": -5, "intelligence": 10 },
                    "add_tags": ["深思熟虑"]
                }
            ]
        }
    },
    // 超人期 (110岁以上)
    "超人": {
    },
        
};

// 暴露到全局
window.ageEvents = ageEvents;
