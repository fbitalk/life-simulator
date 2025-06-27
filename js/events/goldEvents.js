// goldEvents.js - 金色标签事件（成就解锁）

const goldEvents = {
    // 富豪标签事件
    "亿万富翁": {
        "is_golden": true,
        "description": "拥有过亿财富的超级富豪",
        "achievement": {
            "id": "billionaire",
            "name": "亿万富翁",
            "description": "财富值超过100，并持续保持5年以上",
            "icon": "💰"
        },
        "events": {
            "luxury_life": {
                "title": "奢华人生",
                "description": "作为亿万富翁，你可以选择如何使用你的巨额财富。",
                "priority": 20,
                "trigger_conditions": {
                    "required_tags": ["亿万富翁"]
                },
                "options": [
                    {
                        "text": "慈善捐赠",
                        "result": "你决定将大量财富用于慈善事业，帮助那些需要帮助的人。",
                        "effects": { "money": -20, "social": 20, "san": 10 },
                        "add_tags": ["慈善家", "社会公益"]
                    },
                    {
                        "text": "享受奢华",
                        "result": "你购买了游艇、私人飞机和豪宅，尽情享受财富带来的奢华生活。",
                        "effects": { "money": -15, "social": 10, "health": -5 },
                        "add_tags": ["奢侈生活"]
                    },
                    {
                        "text": "投资事业",
                        "result": "你将财富投入到更多的商业项目中，进一步扩大你的商业帝国。",
                        "effects": { "money": 15, "intelligence": 10, "health": -10 },
                        "add_tags": ["商业帝国"]
                    }
                ]
            }
        }
    },
    
    // 学术成就标签事件
    "诺贝尔奖获得者": {
        "is_golden": true,
        "description": "获得诺贝尔奖的顶尖科学家",
        "achievement": {
            "id": "nobel_prize",
            "name": "诺贝尔奖",
            "description": "智力值超过90，并在科研领域做出突破性贡献",
            "icon": "🧠"
        },
        "events": {
            "nobel_ceremony": {
                "title": "诺贝尔颁奖典礼",
                "description": "你被邀请前往瑞典斯德哥尔摩参加诺贝尔颁奖典礼。",
                "priority": 40,
                "trigger_conditions": {
                    "required_tags": ["诺贝尔奖获得者"]
                },
                "options": [
                    {
                        "text": "发表感人演讲",
                        "result": "你的演讲感动了在场的所有人，被媒体广泛报道。",
                        "effects": { "social": 20, "intelligence": 10, "mystery": 5 },
                        "add_tags": ["演说家"]
                    },
                    {
                        "text": "分享研究成果",
                        "result": "你详细介绍了自己的研究成果及其对人类的意义。",
                        "effects": { "intelligence": 15, "social": 15 },
                        "add_tags": ["科普使者"]
                    }
                ]
            },
            "research_breakthrough": {
                "title": "研究新突破",
                "description": "获奖后，你继续在自己的领域深耕，有了新的突破性发现。",
                "priority": 30,
                "trigger_conditions": {
                    "required_tags": ["诺贝尔奖获得者"],
                    "age_range": [50, 90]
                },
                "options": [
                    {
                        "text": "发表重磅论文",
                        "result": "你的新研究再次震惊了学术界，巩固了你的科学家地位。",
                        "effects": { "intelligence": 10, "social": 10, "mystery": 10 },
                        "add_tags": ["学术泰斗"]
                    },
                    {
                        "text": "培养年轻科学家",
                        "result": "你将精力投入到下一代科学家的培养中，传承你的知识。",
                        "effects": { "intelligence": 5, "social": 15, "san": 10 },
                        "add_tags": ["良师"]
                    }
                ]
            }
        }
    },
    
    // 长寿成就标签事件
    "百岁老人": {
        "is_golden": true,
        "description": "健康活过100岁的长寿者",
        "achievement": {
            "id": "centenarian",
            "name": "百岁老人",
            "description": "活到100岁以上",
            "icon": "👴"
        },
        "events": {
            "centennial_celebration": {
                "title": "百岁庆典",
                "description": "今天是你的100岁生日，家人为你举办了盛大的庆祝活动。",
                "priority": 50,
                "trigger_conditions": {
                    "required_tags": ["百岁老人"]
                },
                "options": [
                    {
                        "text": "分享长寿秘诀",
                        "result": "你向大家分享了自己的长寿秘诀，记者们争相报道。",
                        "effects": { "social": 20, "san": 10 },
                        "add_tags": ["传奇老人"]
                    },
                    {
                        "text": "与家人共度时光",
                        "result": "你选择与子孙后代安静地庆祝，享受天伦之乐。",
                        "effects": { "san": 20, "health": 5 },
                        "add_tags": ["天伦之乐"]
                    }
                ]
            }
        }
    },
    
    // 神秘成就标签事件
    "超自然能力者": {
        "is_golden": true,
        "description": "拥有无法解释的超自然能力的特殊个体",
        "achievement": {
            "id": "supernatural",
            "name": "超自然能力",
            "description": "神秘值达到95以上，并经历特定超自然事件",
            "icon": "✨"
        },
        "events": {
            "power_mastery": {
                "title": "能力掌控",
                "description": "经过长时间的修行，你终于完全掌握了自己的超自然能力。",
                "priority": 35,
                "trigger_conditions": {
                    "required_tags": ["超自然能力者"]
                },
                "options": [
                    {
                        "text": "秘密使用",
                        "result": "你决定隐藏自己的能力，在暗中帮助他人。",
                        "effects": { "mystery": 20, "san": 10, "social": -5 },
                        "add_tags": ["隐世高人"]
                    },
                    {
                        "text": "公开展示",
                        "result": "你决定向世界展示自己的能力，引起了轰动。",
                        "effects": { "mystery": 10, "social": 20, "money": 20, "san": -10 },
                        "add_tags": ["超能力明星"]
                    },
                    {
                        "text": "寻找同类",
                        "result": "你开始寻找与你拥有类似能力的人，组成了一个秘密组织。",
                        "effects": { "mystery": 15, "social": 10, "san": 5 },
                        "add_tags": ["异能组织"]
                    }
                ]
            }
        }
    }
};

// 导出金色标签事件
window.goldEvents = goldEvents; 