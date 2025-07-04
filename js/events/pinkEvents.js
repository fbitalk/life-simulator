// 粉色事件文件

const pinkEvents = {
    // 初恋标签事件
    "初恋": {
        "is_pink": true,
        "description": "你正经历着人生中的第一段恋情。",
        "events": {
            "first_date": {
                "title": "初次约会",
                "description": "你和初恋对象计划了一次正式的约会。",
                "priority": 10,
                "trigger_conditions": {
                    "required_tags": ["初恋"],
                    "age_range": [14, 18]
                },
                "options": [
                    {
                        "text": "带对方去看电影",
                        "result": "你们一起看了一部浪漫电影，气氛很美好。",
                        "effects": { "social": 5, "money": -5 },
                        "add_tags": ["浪漫主义"]
                    },
                    {
                        "text": "去公园散步",
                        "result": "你们在公园度过了一个愉快的下午，感情更加亲密了。",
                        "effects": { "health": 5, "social": 5 }
                    },
                    {
                        "text": "准备一份小礼物",
                        "result": "你精心准备的礼物让对方非常感动。",
                        "effects": { "money": -10, "social": 10 },
                        "add_tags": ["体贴"]
                    }
                ]
            },
            "relationship_test": {
                "title": "感情考验",
                "description": "你们的恋情遇到了一些小挑战。",
                "priority": 15,
                "trigger_conditions": {
                    "required_tags": ["初恋"],
                    "age_range": [15, 19]
                },
                "options": [
                    {
                        "text": "坦诚沟通",
                        "result": "通过坦诚的交流，你们成功地解决了问题。",
                        "effects": { "social": 10, "intelligence": 5 },
                        "add_tags": ["沟通达人"]
                    },
                    {
                        "text": "争吵后和好",
                        "result": "一场争吵后，你们重新认识到彼此的重要性。",
                        "effects": { "social": -5, "san": -5 }
                    },
                    {
                        "text": "分手",
                        "result": "你们决定结束这段关系，这是一次成长的经历。",
                        "effects": { "social": -10, "san": -15 },
                        "remove_tags": ["初恋"],
                        "add_tags": ["失恋经历"]
                    }
                ]
            }
        }
    },
    
    // 热恋标签事件
    "热恋": {
        "is_pink": true,
        "description": "你正沉浸在甜蜜的爱情中。",
        "events": {
            "romantic_surprise": {
                "title": "爱的惊喜",
                "description": "你的伴侣为你准备了一个特别的惊喜。",
                "priority": 20,
                "trigger_conditions": {
                    "required_tags": ["热恋"],
                    "age_range": [18, 35]
                },
                "options": [
                    {
                        "text": "欣然接受",
                        "result": "这个惊喜让你非常感动，你们的感情更加深厚。",
                        "effects": { "social": 15, "san": 10 },
                        "add_tags": ["幸福"]
                    },
                    {
                        "text": "回赠惊喜",
                        "result": "你决定也为对方准备一个惊喜作为回应。",
                        "effects": { "money": -10, "social": 10, "san": 5 }
                    }
                ]
            },
            "meet_parents": {
                "title": "见家长",
                "description": "到了见对方父母的时候了。",
                "priority": 20,
                "trigger_conditions": {
                    "required_tags": ["热恋"],
                    "age_range": [20, 35]
                },
                "options": [
                    {
                        "text": "精心准备",
                        "result": "你的礼貌和诚意给对方父母留下了好印象。",
                        "effects": { "social": 10, "intelligence": 5 },
                        "add_tags": ["未来姻亲"]
                    },
                    {
                        "text": "自然表现",
                        "result": "你决定做真实的自己，虽然有些紧张但总体还好。",
                        "effects": { "social": 5 }
                    },
                    {
                        "text": "感到压力",
                        "result": "见家长的压力让你表现得很糟糕，这给你们的关系带来了一些阴影。",
                        "effects": { "social": -10, "san": -10 }
                    }
                ]
            }
        }
    },
    
    // 已婚标签事件
    "已婚": {
        "is_pink": true,
        "description": "你已经步入婚姻生活。",
        "events": {
            "anniversary": {
                "title": "结婚纪念日",
                "description": "今天是你们的结婚纪念日。",
                "priority": 25,
                "trigger_conditions": {
                    "required_tags": ["已婚"],
                    "age_range": [22, 80]
                },
                "options": [
                    {
                        "text": "浪漫庆祝",
                        "result": "你精心安排了一个浪漫的庆祝活动，伴侣非常感动。",
                        "effects": { "money": -20, "social": 15, "san": 10 },
                        "add_tags": ["恩爱"]
                    },
                    {
                        "text": "简单纪念",
                        "result": "你们一起吃了顿饭，回忆过去的美好时光。",
                        "effects": { "money": -5, "social": 5, "san": 5 }
                    },
                    {
                        "text": "忘记纪念日",
                        "result": "你忘记了这个重要的日子，伴侣有些失望。",
                        "effects": { "social": -15, "san": -5 }
                    }
                ]
            },
            "marriage_crisis": {
                "title": "婚姻危机",
                "description": "你的婚姻面临一些挑战和困难。",
                "priority": 30,
                "trigger_conditions": {
                    "required_tags": ["已婚"],
                    "age_range": [25, 60]
                },
                "options": [
                    {
                        "text": "共同面对",
                        "result": "你们决定一起面对困难，这使你们的关系更加牢固。",
                        "effects": { "social": 10, "san": 5 },
                        "add_tags": ["患难与共"]
                    },
                    {
                        "text": "寻求婚姻咨询",
                        "result": "专业的婚姻咨询帮助你们找到了问题的根源。",
                        "effects": { "money": -10, "social": 15, "intelligence": 5 }
                    },
                    {
                        "text": "考虑分离",
                        "result": "你们决定暂时分开一段时间，重新思考这段关系。",
                        "effects": { "social": -15, "san": -15 }
                    }
                ]
            }
        }
    }
};

// 导出粉色标签事件
window.pinkEvents = pinkEvents;
