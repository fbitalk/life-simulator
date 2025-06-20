// events/starting.js - 开局事件文件

// 默认用户初始属性
const DEFAULT_PLAYER_ATTRIBUTES = {
    money: 50,
    health: 70,
    intelligence: 70,
    social: 70,
    luck: 70
};

// 所有开局事件
const STARTING_EVENTS = {
    // 普通开局
    "normal_birth_rich": {
        title: "富贵人生",
        description: "{user}出生在一个富裕的家庭，父母都是成功的企业家。",
        weight: 15, // 权重影响触发概率
        priority: 0, // 普通开局事件优先级
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "享受富贵生活",
                result: "{user}在优越的环境中开始了人生。",
                effects: { money: +50, health: +10, intelligence: 0, social: +20, luck: -10 },
                add_tags: ["富二代", "开局:富贵人生"]
            }
        ]
    },
    "normal_birth_ordinary": {
        title: "平凡的开始",
        description: "{user}出生在一个普通的工薪家庭，父母勤劳善良。",
        weight: 40,
        priority: 0,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "健康成长",
                result: "{user}在父母的关爱下开始成长。",
                effects: { money: 0, health: +10, intelligence: 0, social: 0, luck: 0 },
                add_tags: ["开局:平凡人生"]
            }
        ]
    },
    "normal_birth_poor": {
        title: "贫寒出身",
        description: "{user}出生在一个贫困的家庭，但父母对{user}充满爱意。",
        weight: 20,
        priority: 0,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "坚强成长",
                result: "虽然物质条件匮乏，但{user}学会了坚强。",
                effects: { money: -30, health: 0, intelligence: +10, social: -10, luck: +10 },
                add_tags: ["穷人的孩子早当家", "开局:贫寒出身"]
            }
        ]
    },
    "normal_birth_scholar": {
        title: "书香门第",
        description: "{user}出生在一个知识分子家庭，父母都是大学教授。",
        weight: 15,
        priority: 0,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "接受熏陶",
                result: "{user}从小就在书香环境中成长。",
                effects: { money: +10, health: 0, intelligence: +20, social: +10, luck: -10 },
                add_tags: ["书香门第", "开局:书香门第"]
            }
        ]
    },
    "normal_birth_rural": {
        title: "农村娃",
        description: "{user}出生在一个朴实的农村家庭。",
        weight: 10,
        priority: 0,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "田园生活",
                result: "{user}在田园风光中开始了人生。",
                effects: { money: -20, health: +20, intelligence: -10, social: 0, luck: 0 },
                add_tags: ["农村娃", "开局:农村娃"]
            }
        ]
    },
    
    // 特殊开局
    "special_toilet_birth": {
        title: "特殊的降生",
        description: "在密不通风，烟雾弥漫的黑网吧里，一名少女神色慌张地跑进了厕所，关上了厕所门。隔了没多久，厕所里咚的一声，一个小生命掉进了厕坑里。这位未婚妈妈拉起裤子，洗洗干净身子，走出了厕所……最后这个婴儿被网吧老板发现，收留了。取名为{user}。",
        weight: 5,
        priority: 10, // 特殊开局优先级较高
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [],
        continue_event: "toilet_birth_aftermath",
        effects: { money: -40, health: -10, intelligence: 0, social: -30, luck: +20 },
        add_tags: ["苦命儿", "网吧养大", "开局:网吧出生"]
    },
    "toilet_birth_aftermath": {
        title: "网吧童年",
        description: "网吧老板是个粗糙但心地善良的中年男人。{user}就这样在网吧的角落里慢慢长大...",
        priority: 50, // 连续事件优先级高
        trigger_conditions: {
            required_tags: ["网吧养大"],
            age_range: [0, 0]
        },
        options: [
            {
                text: "继续",
                result: "{user}在网吧的环境中开始了不寻常的童年。虽然环境恶劣，但也锻炼了{user}的生存能力。",
                effects: { health: 5, social: 5 },
                add_tags: ["街头智慧"]
            }
        ]
    },
    "special_gourd_birth": {
        title: "葫芦出世",
        description: "{user}用力把葫芦撑破，来到了这个世界。{user}一出生，就会说话，会走路。并且拥有特殊能力...",
        weight: 3,
        priority: 10,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "力大无穷",
                result: "{user}拥有了超人般的力量！",
                effects: { money: 0, health: +30, intelligence: +10, social: 0, luck: +10 },
                add_tags: ["葫芦娃", "天生神力", "大力士", "开局:葫芦出世"]
            },
            {
                text: "会喷火",
                result: "{user}能够喷出炙热的火焰！",
                effects: { money: 0, health: +20, intelligence: +10, social: 0, luck: +10 },
                add_tags: ["葫芦娃", "天生神力", "火娃", "开局:葫芦出世"]
            },
            {
                text: "会喷水",
                result: "{user}能够喷出强力的水流！",
                effects: { money: 0, health: +10, intelligence: +10, social: 0, luck: +10 },
                add_tags: ["葫芦娃", "天生神力", "水娃", "开局:葫芦出世"]
            },
            {
                text: "有千里眼顺风耳",
                result: "{user}拥有超凡的感知能力！",
                effects: { money: 0, health: 0, intelligence: +20, social: +10, luck: +10 },
                add_tags: ["葫芦娃", "天生神力", "千里眼", "顺风耳", "开局:葫芦出世"]
            },
            {
                text: "会隐身",
                result: "{user}能够随意隐形！",
                effects: { money: 0, health: 0, intelligence: 0, social: -10, luck: +20 },
                add_tags: ["葫芦娃", "天生神力", "隐身娃", "开局:葫芦出世"]
            },
            {
                text: "机智冷静",
                result: "{user}拥有超越年龄的智慧！",
                effects: { money: 0, health: 0, intelligence: +30, social: 0, luck: +10 },
                add_tags: ["葫芦娃", "天生神力", "智慧娃", "开局:葫芦出世"]
            }
        ]
    },
    "special_vegetative_birth": {
        title: "特殊的生命",
        description: "{user}一出生就不会动，没有眼球，没有鼻子。唯一有的就是听力和意识。医生都说这孩子活不长，但{user}的意识却异常清晰...",
        weight: 2,
        priority: 10,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [],
        continue_event: "vegetative_miracle",
        effects: { money: -20, health: -50, intelligence: +20, social: -60, luck: -20 },
        add_tags: ["残疾", "坚强意志", "开局:特殊生命"]
    },
    "vegetative_miracle": {
        title: "意识觉醒",
        description: "虽然身体无法动弹，但{user}的意识却异常活跃。在黑暗中，{user}开始感知这个世界...",
        priority: 50,
        trigger_conditions: {
            required_tags: ["残疾"],
            age_range: [0, 0]
        },
        options: [
            {
                text: "努力感知",
                result: "通过不断努力，{user}的听力变得异常敏锐，甚至能通过声音'看见'世界。",
                effects: { intelligence: 20, luck: 10 },
                add_tags: ["超级听力"],
                continue_event: "vegetative_breakthrough"
            }
        ]
    },
    "vegetative_breakthrough": {
        title: "奇迹发生",
        description: "在{user}3岁时，一位神秘的医生来到医院，声称能治疗{user}的病症...",
        priority: 50,
        trigger_conditions: {
            required_tags: ["残疾", "超级听力"],
            age_range: [3, 3]
        },
        options: [
            {
                text: "接受治疗",
                result: "经过神秘医生的治疗，{user}竟然能够控制部分身体了！虽然还很虚弱，但这已经是医学奇迹。",
                effects: { health: 30, luck: 20 },
                add_tags: ["医学奇迹", "坚强斗士"],
                remove_tags: ["残疾"]
            },
            {
                text: "拒绝治疗",
                result: "{user}的家人担心风险，拒绝了治疗。但{user}的意志力让所有人惊叹。",
                effects: { intelligence: 30, social: 10 },
                add_tags: ["钢铁意志"]
            }
        ]
    },
    "special_golden_armor_birth": {
        title: "神秘的托付",
        description: "在一个深夜，一位女子在回家的路上。突然路边闪出一个浑身穿着金色铠甲的人，那人将怀里抱着的婴儿交给了女子，并要求将其抚养成人。这个婴儿就是{user}。",
        weight: 1,
        priority: 10,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [],
        continue_event: "golden_armor_prophecy",
        effects: { money: +30, health: +20, intelligence: +15, social: +10, luck: +30 },
        add_tags: ["神秘身世", "天选之子", "开局:神秘托付"]
    },
    "golden_armor_prophecy": {
        title: "神秘预言",
        description: "养母在整理{user}的襁褓时，发现了一张金色的纸条，上面写着神秘的文字...",
        priority: 50,
        trigger_conditions: {
            required_tags: ["天选之子"],
            age_range: [0, 0]
        },
        options: [
            {
                text: "仔细研读",
                result: "纸条上写着：'此子天降，将在18岁时觉醒神圣之力，守护人间正义。'养母决定好好培养{user}。",
                effects: { luck: 30, intelligence: 10 },
                add_tags: ["神圣预言", "守护者血脉"]
            }
        ]
    },
    "prophecy_fulfillment": {
        title: "预言应验",
        description: "{user}18岁了，传说中的神圣之力即将觉醒...",
        priority: 50,
        trigger_conditions: {
            required_tags: ["神圣预言"],
            age_range: [18, 18]
        },
        options: [
            {
                text: "接受命运",
                result: "金色的光芒笼罩着{user}，神圣之力觉醒了！",
                effects: { health: 30, intelligence: 20, social: 20, luck: 30 },
                add_tags: ["圣战士", "英雄"],
                continue_event: "hero_path_begin"
            },
            {
                text: "抗拒命运",
                result: "{user}拒绝了命运的安排，选择做一个普通人。",
                effects: { intelligence: 15, social: 10 },
                add_tags: ["命运反抗者"]
            }
        ]
    },
    "special_dead_baby_birth": {
        title: "死婴重生",
        description: "在某医院产房里，有一个妈妈生产时遇到意外。婴儿的头卡在洞口里出不来。时间太久了之后，这个婴儿窒息而死。在一片悲痛的哭声中，婴儿的小尸体被丢进了医院的垃圾桶。",
        weight: 1,
        priority: 10,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [],
        continue_event: "dead_baby_awakening",
        effects: { money: -30, health: -30, intelligence: 0, social: -40, luck: +20 },
        add_tags: ["死婴", "神秘身世", "开局:死婴重生"]
    },
    "dead_baby_awakening": {
        title: "死而复生",
        description: "被丢进垃圾桶的死婴竟然还有意识，这个死婴偷偷睁开眼，看房间的人走了之后，悄悄地爬了出来，逃离了这个医院。",
        priority: 50,
        trigger_conditions: {
            required_tags: ["死婴"],
            age_range: [0, 0]
        },
        options: [
            {
                text: "继续",
                result: "小小的身体里蕴含着顽强的生命力。",
                effects: { health: 10, luck: 10 },
                continue_event: "dead_baby_found"
            }
        ]
    },
    "dead_baby_found": {
        title: "被发现",
        description: "死婴跑到了医院门口，就被人发现了，人们看到的只是一个普通的婴儿被丢弃了。最后，这个婴儿被孤儿院收养了，取名为{user}。",
        priority: 50,
        trigger_conditions: {
            required_tags: ["死婴"],
            age_range: [0, 0]
        },
        options: [
            {
                text: "继续",
                result: "{user}在孤儿院开始了新的生活。",
                effects: { social: 5 },
                add_tags: ["孤儿院"],
                continue_event: "dead_baby_poverty"
            }
        ]
    },
    "dead_baby_poverty": {
        title: "贫困生活",
        description: "{user}的财富已经没多少了，他已经是一个穷人了。",
        priority: 50,
        trigger_conditions: {
            required_tags: ["死婴"],
            age_range: [1, 1]
        },
        options: [
            {
                text: "坚强面对",
                result: "虽然贫困，但{user}展现出了惊人的生存意志。",
                effects: { money: -20, intelligence: 10 },
                add_tags: ["贫困"]
            }
        ]
    },
    "special_lawyer_birth": {
        title: "律师世家",
        description: "{user}的老爹是业界有名的律师，{user}从一出生，就在争吵辩论的环境下成长。",
        weight: 8,
        priority: 0,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "继承辩论天赋",
                result: "{user}从小就展现出了超凡的口才和逻辑能力。",
                effects: { money: +30, health: +5, intelligence: +20, social: +25, luck: -10 },
                add_tags: ["高情商", "辩论家", "开局:律师世家"]
            }
        ]
    },
    "special_internet_cafe_birth": {
        title: "网吧世家",
        description: "{user}出生在一个经营网吧生意的家庭。",
        weight: 10,
        priority: 0,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "在网络中成长",
                result: "{user}从小就在网络的世界里长大。",
                effects: { money: +10, health: 0, intelligence: +5, social: +15, luck: 0 },
                add_tags: ["交网友", "网络达人", "开局:网吧世家"]
            }
        ]
    },
    "special_chef_birth": {
        title: "美食世家",
        description: "{user}出生在一个厨师家庭，老爸是做快餐的，老妈是卖牛杂的。",
        weight: 12,
        priority: 0,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "品尝美食",
                result: "{user}从小就在各种美食的香味中长大。",
                effects: { money: 0, health: +15, intelligence: 0, social: +5, luck: -5 },
                add_tags: ["厨师家庭", "美食家", "开局:美食世家"]
            }
        ]
    },
    "special_wings_birth": {
        title: "天使降临",
        description: "{user}生下来，肩胛骨就异常的发达，并且长出了两个翅膀。",
        weight: 2,
        priority: 10,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "接受天赋",
                result: "{user}是一个特殊的孩子，拥有飞翔的能力。",
                effects: { money: -10, health: +20, intelligence: +10, social: -10, luck: +15 },
                add_tags: ["长翅膀", "天使之翼", "特殊能力", "飞行能力", "开局:天使降临"]
            }
        ]
    },
    "special_hell_difficulty_birth": {
        title: "地狱开局",
        description: "{user}出生在一个处于战争动乱的贫困国家，战火摧毁着一切，民不聊生。{user}开启了他地狱难度的人生。",
        weight: 3,
        priority: 10,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [],
        continue_event: "hell_poverty",
        effects: { money: -45, health: -20, intelligence: -10, social: -30, luck: -40 },
        add_tags: ["地狱难度", "战争孤儿", "开局:地狱难度"]
    },
    "hell_poverty": {
        title: "极度贫困",
        description: "{user}的财富已经没多少了，他已经是一个穷人了。",
        priority: 50,
        trigger_conditions: {
            required_tags: ["地狱难度"],
            age_range: [1, 1]
        },
        options: [
            {
                text: "艰难生存",
                result: "在战火中，{user}学会了如何在极端环境下生存。",
                effects: { money: -10, health: -10, intelligence: 15 },
                add_tags: ["极度贫困", "生存专家"]
            }
        ]
    },
    "special_amnesia_birth": {
        title: "失忆之谜",
        description: "{user}醒来了，发现他失忆了。除了自己的名字，什么都记不起来了。",
        weight: 5,
        priority: 0,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "接受现实",
                result: "{user}决定重新开始，探索自己的身世。",
                effects: { money: -10, health: 0, intelligence: +5, social: -20, luck: -10 },
                add_tags: ["失忆", "神秘过去", "开局:失忆之谜"]
            }
        ]
    },
    "special_birth_event": {
        title: "特殊出生",
        description: "{user}出生在一个不寻常的环境中...",
        weight: 5,
        priority: 0,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "接受命运",
                result: "{user}天生就有着不同寻常的气质。",
                effects: { money: 0, health: +5, intelligence: +5, social: 0, luck: +5 },
                add_tags: ["命运之子", "开局:特殊出生"]
            },
            {
                text: "哭泣抗议",
                result: "{user}的哭声响彻整个房间。",
                effects: { money: 0, health: +3, social: -2, luck: 0 }
            }
        ]
    },
    "special_tanuki_encounter": {
        title: "神秘的狸猫",
        description: "在{user}的婴儿床边，出现了一只狸猫。它说自己来自未来，要送给{user}一件礼物...",
        weight: 3,
        priority: 10,
        trigger_conditions: {
            age_range: [0, 0]
        },
        options: [
            {
                text: "竹蜻蜓",
                result: "狸猫送给{user}一个神奇的竹蜻蜓，装在头上就能自由飞翔！",
                effects: { money: 0, health: 0, intelligence: 0, social: 0, luck: +20 },
                add_tags: ["狸猫朋友", "飞行能力", "开局:神秘狸猫"]
            },
            {
                text: "如意门",
                result: "狸猫送给{user}一扇神奇的门，可以通向任何地方！",
                effects: { money: 0, health: 0, intelligence: 0, social: 0, luck: +20 },
                add_tags: ["狸猫朋友", "如意门", "开局:神秘狸猫"]
            },
            {
                text: "记忆面包",
                result: "狸猫送给{user}一种特殊的面包，吃了能增强记忆力！",
                effects: { money: 0, health: 0, intelligence: +20, social: 0, luck: 0 },
                add_tags: ["狸猫朋友", "记忆超群", "开局:神秘狸猫"]
            }
        ]
    }
};

// 暴露到全局
window.STARTING_EVENTS = STARTING_EVENTS;
window.DEFAULT_PLAYER_ATTRIBUTES = DEFAULT_PLAYER_ATTRIBUTES;