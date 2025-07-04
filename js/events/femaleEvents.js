// 女性事件文件
const femaleTagEvents = {};
window.femaleTagEvents = femaleTagEvents;

// femaleEvents.js - 女性角色特有事件

const femaleEvents = {
    // 女性事件，通过标签触发
    "first_makeup": {
        "title": "初次化妆",
        "description": "你开始对化妆感兴趣，并尝试第一次自己化妆。",
        "trigger_conditions": {
            "age_range": [12, 16],
            "required_tags": ["女性"]
        },
        "options": [
            {
                "text": "简单清新风格",
                "result": "你选择了淡雅的妆容，给人清新自然的感觉。",
                "effects": { "social": 5 },
                "add_tags": ["清新风格"]
            },
            {
                "text": "大胆尝试",
                "result": "你尝试了一些大胆的妆容，虽然不够完美，但这是一个开始。",
                "effects": { "social": 0, "intelligence": 5 },
                "add_tags": ["勇于尝试"]
            },
            {
                "text": "向朋友学习",
                "result": "你请朋友教你化妆技巧，学到了不少知识。",
                "effects": { "social": 10, "intelligence": 5 },
                "add_tags": ["好学"]
            }
        ]
    },
    "womens_group": {
        "title": "女性社团",
        "description": "学校里有一个女性权益社团正在招募新成员。",
        "trigger_conditions": {
            "age_range": [16, 22],
            "required_tags": ["女性"]
        },
        "options": [
            {
                "text": "积极加入",
                "result": "你成为了社团的活跃成员，参与了许多有意义的活动。",
                "effects": { "social": 15, "intelligence": 10 },
                "add_tags": ["女权主义者"]
            },
            {
                "text": "偶尔参与",
                "result": "你对社团的活动有一定兴趣，偶尔参加一些活动。",
                "effects": { "social": 5, "intelligence": 5 }
            },
            {
                "text": "不感兴趣",
                "result": "你认为这不是你的兴趣所在，选择了其他发展方向。",
                "effects": {}
            }
        ]
    },
    "pregnancy": {
        "title": "怀孕",
        "description": "你怀孕了，这将是人生中一个重要的转变。",
        "trigger_conditions": {
            "age_range": [20, 40],
            "required_tags": ["女性", "已婚"]
        },
        "options": [
            {
                "text": "精心护理",
                "result": "你在怀孕期间特别注意身体健康和心理状态。",
                "effects": { "health": -10, "money": -20 },
                "add_tags": ["准妈妈"],
                "continue_event": "childbirth"
            },
            {
                "text": "继续工作",
                "result": "你决定在怀孕期间继续工作，尽管这有些辛苦。",
                "effects": { "money": 10, "health": -20, "san": -5 },
                "add_tags": ["职场妈妈"],
                "continue_event": "childbirth"
            }
        ]
    },
    "childbirth": {
        "title": "生产",
        "description": "经过十月怀胎，到了分娩的日子。",
        "options": [
            {
                "text": "顺产",
                "conditional_results": [
                    {
                        "conditions": { "min_attributes": { "health": 60, "luck": 50 } },
                        "result": "一切顺利，你生下了一个健康的宝宝。",
                        "effects": { "health": -10, "san": 20 },
                        "add_tags": ["母亲"],
                        "remove_tags": ["准妈妈"]
                    },
                    {
                        "conditions": { "default": true },
                        "result": "生产过程有些困难，但最终还是成功了。",
                        "effects": { "health": -20, "san": 15 },
                        "add_tags": ["母亲"],
                        "remove_tags": ["准妈妈"]
                    }
                ]
            },
            {
                "text": "剖腹产",
                "result": "医生建议进行剖腹产手术，手术很成功。",
                "effects": { "health": -15, "money": -20, "san": 15 },
                "add_tags": ["母亲"],
                "remove_tags": ["准妈妈"]
            }
        ]
    }
};

// 导出女性特有事件
window.femaleEvents = femaleEvents;
