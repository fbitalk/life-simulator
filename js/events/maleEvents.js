// 男性事件文件

const maleEvents = {
    // 男性事件，通过标签触发
    "sports_team": {
        "title": "校队选拔",
        "description": "学校的体育队正在招募新成员。",
        "trigger_conditions": {
            "age_range": [12, 18],
            "required_tags": ["男性"]
        },
        "options": [
            {
                "text": "参加足球队",
                "conditional_results": [
                    {
                        "conditions": { "min_attributes": { "health": 70 } },
                        "result": "你的身体素质和技术表现出色，成功入选校队。",
                        "effects": { "social": 15, "health": 10 },
                        "add_tags": ["足球队员"]
                    },
                    {
                        "conditions": { "default": true },
                        "result": "虽然你很努力，但遗憾没有被选中。不过这次经历增强了你的体魄。",
                        "effects": { "health": 5, "san": -5 }
                    }
                ]
            },
            {
                "text": "参加篮球队",
                "conditional_results": [
                    {
                        "conditions": { "min_attributes": { "health": 65 } },
                        "result": "你的身高和灵活性给教练留下了深刻印象，被选入篮球队。",
                        "effects": { "social": 15, "health": 10 },
                        "add_tags": ["篮球队员"]
                    },
                    {
                        "conditions": { "default": true },
                        "result": "你没能入选，但这次尝试提高了你的篮球技能。",
                        "effects": { "health": 5, "san": -5 }
                    }
                ]
            },
            {
                "text": "不参加，专注学习",
                "result": "你决定将更多时间投入到学业中。",
                "effects": { "intelligence": 10, "health": -5 },
                "add_tags": ["学霸"]
            }
        ]
    },
    "first_shave": {
        "title": "初次剃须",
        "description": "你发现自己的胡子开始明显生长，是时候学习如何剃须了。",
        "trigger_conditions": {
            "age_range": [14, 17],
            "required_tags": ["男性"]
        },
        "options": [
            {
                "text": "请教父亲",
                "result": "父亲耐心地教你如何正确剃须，这是一次很好的父子交流。",
                "effects": { "social": 5 },
                "add_tags": ["父子情"]
            },
            {
                "text": "自己摸索",
                "result": "你通过视频教程学习如何剃须，虽然第一次有些磕磕绊绊。",
                "effects": { "intelligence": 5 },
                "add_tags": ["自学能力"]
            },
            {
                "text": "尝试蓄胡子",
                "result": "你决定尝试蓄胡子，看看是否适合自己的形象。",
                "effects": { "social": 5 },
                "add_tags": ["胡子造型"]
            }
        ]
    },
    "military_service": {
        "title": "服兵役",
        "description": "按照国家规定，你需要考虑是否参加兵役。",
        "trigger_conditions": {
            "age_range": [18, 22],
            "required_tags": ["男性"]
        },
        "options": [
            {
                "text": "积极参军",
                "result": "你决定服兵役，这段军旅生涯将锻炼你的身心。",
                "effects": { "health": 20, "intelligence": 10, "social": 5, "san": 10 },
                "add_tags": ["军人"]
            },
            {
                "text": "申请缓服",
                "result": "因为学业或其他原因，你申请了缓服。",
                "effects": {}
            },
            {
                "text": "逃避兵役",
                "conditional_results": [
                    {
                        "conditions": { "max_attributes": { "luck": 30 } },
                        "result": "你试图逃避兵役，但被抓到并受到了处罚。",
                        "effects": { "social": -20, "money": -20, "san": -10 },
                        "add_tags": ["劣迹"]
                    },
                    {
                        "conditions": { "default": true },
                        "result": "你暂时逃过了兵役，但心里总有些不安。",
                        "effects": { "social": -5, "san": -5 }
                    }
                ]
            }
        ]
    },
    "fatherhood": {
        "title": "为人父",
        "description": "你的伴侣生下了你们的孩子，你正式成为了一名父亲。",
        "trigger_conditions": {
            "age_range": [22, 45],
            "required_tags": ["男性", "已婚"]
        },
        "options": [
            {
                "text": "全力支持家庭",
                "result": "你决定更加努力工作，为家庭提供稳定的支持。",
                "effects": { "money": 10, "health": -5, "social": -5, "san": 10 },
                "add_tags": ["父亲", "顶梁柱"]
            },
            {
                "text": "平衡工作与家庭",
                "result": "你努力在工作和家庭之间找到平衡，参与育儿。",
                "effects": { "money": 5, "health": -5, "social": 10, "san": 5 },
                "add_tags": ["父亲", "暖爸"]
            }
        ]
    }
};

// 导出男性特有事件
window.maleEvents = maleEvents;

