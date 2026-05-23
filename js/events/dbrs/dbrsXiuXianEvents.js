// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 修仙/异能
// 事件数: 29
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
    '修仙': { color: 'purple', fixed_attributes: { health: 99 }, immortal: true },
    '修佛': { color: 'purple', fixed_attributes: { health: 99 }, immortal: true },
    '冰魔法': { color: 'purple' },
    '鬼修': { color: 'purple', fixed_attributes: { health: 99 }, immortal: true },
});

export const dbrsXiuXianEvents = {
    '会喷火': {
        events: {
        'dbrs_667': {
            title: '意气用事',
            description: '{user}在课堂中与老师发生口角，一气之下，喷火把他的老师烧死了。{user}被开除了，并抓进了监狱。',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['会喷火'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '{user}在课堂中与老师发生口角，一气之下，喷火把他的老师'
        }
            ]
        },
        'dbrs_669': {
            title: '喷火烧菜',
            description: '餐厅为{user}做了一个特殊的火炉，让{user}可以用自己喷火的烧菜，为餐厅省下了一大笔煤气费用。',
            priority: 10,
            trigger_conditions: { age_range: [16, 120], required_tags: ['会喷火'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1014': {
            title: '英勇杀敌',
            description: '在卫国战争中，{user}不需要配枪。他凭借着自己的喷火能力在前线英勇杀敌，立下汗马功劳。',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['会喷火'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1292': {
            title: '不死葫芦娃',
            description: '{user}在高速公路上遭遇了车祸，因为{user}有天生的刀枪不入的身体，车都撞散了，{user}一点事儿都没有。',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['会喷火'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1299': {
            title: '喷火表演',
            description: '{user}在校园祭中表演喷火，收获了大量的粉丝。',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['会喷火'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        },
        'dbrs_1311': {
            title: '二腿使徒',
            description: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}___',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['会喷火'] },
            options: [
        {
            text: '喷火杀死他',
            result: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}蹬地一跃，便到使徒面前。他深吸一口气，然后向着使徒两腿的连接处喷起了刚阳之火，火焰的温度极高，乃呈青绿色。烈火把使徒两腿的连接处融化了，两条腿软软地躺在了地上，使徒被消灭了！'
        },
        {
            text: '登上初号机!',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '修仙': {
        events: {
        'dbrs_1098': {
            title: '修仙道路',
            description: '{user}是一位修仙者，他要___。',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['修仙'] },
            options: [
        {
            text: '修佛',
            result: '你做出了选择。',
            add_tags: ['修佛'],
            remove_tags: ['修仙']
        },
        {
            text: '鬼修',
            result: '你做出了选择。',
            add_tags: ['鬼修'],
            remove_tags: ['修仙']
        }
            ]
        }
        }
    },
    '修佛': {
        events: {
        'dbrs_1099': {
            title: '修佛道路',
            description: '{user}目标是修炼成佛，他才刚刚入门。每天他都要睡觉12小时，以吸收大地灵气。一年过去了，{user}似乎修得了一点成果。',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['修佛'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['修佛：筑基'],
            remove_tags: ['修佛']
        }
            ]
        }
        }
    },
    '修佛：净根': {
        events: {
        'dbrs_1102': {
            title: '修佛',
            description: '{user}按照修佛的相关教程指示，{user}到了这个阶段，需要每天睡觉24小时，就能无比接近成佛。{user}使用安眠药，麻药，毒品等催眠自己，7*24小时地睡觉。就这样睡了1个星期，{user}的身体各器官衰竭，{user}再也没有醒来……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['修佛：净根'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        }
        }
    },
    '修佛：灵动': {
        events: {
        'dbrs_1101': {
            title: '修佛',
            description: '{user}已经深陷修佛道路。{user}大量服用安眠药，每天睡觉20小时，以吸收大地灵气。一年过去了，{user}已经感觉到身体飘飘然，似乎离成佛又近一步。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['修佛：灵动'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['修佛：净根'],
            remove_tags: ['修佛：灵动']
        }
            ]
        }
        }
    },
    '修佛：筑基': {
        events: {
        'dbrs_1100': {
            title: '修仙道路',
            description: '{user}在修佛之路上更进一步。每天睡觉16小时，以吸收大地灵气。一年过去了，{user}似乎又有进步。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['修佛：筑基'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['修佛：灵动'],
            remove_tags: ['修佛：筑基']
        },
        {
            text: '放弃',
            result: '{user}受不了每天睡觉，终于放弃了修佛之路。',
            remove_tags: ['修佛：筑基']
        }
            ]
        }
        }
    },
    '冥想家': {
        events: {
        'dbrs_1097': {
            title: '冥想家',
            description: '{user}是一位冥想家，他走的道路是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['冥想家'] },
            options: [
        {
            text: '思考哲学',
            result: '你做出了选择。',
            add_tags: ['哲学家'],
            remove_tags: ['冥想家']
        },
        {
            text: '修仙养性',
            result: '你做出了选择。',
            add_tags: ['修仙'],
            remove_tags: ['冥想家']
        }
            ]
        }
        }
    },
    '冰魔法': {
        events: {
        'dbrs_785': {
            title: '魔法能力',
            description: '{user}已经{age}岁了，她与生俱来的魔法能量越来越强大，她不能驾驭这股能量。{user}随意的一个动作，都有可能向周围的人发动攻击。{user}很害怕，她选择___',
            priority: 10,
            trigger_conditions: { age_range: [1, 10], required_tags: ['冰魔法', '女性'] },
            options: [
        {
            text: '戴手套',
            result: '你做出了选择。',
            add_tags: ['戴手套'],
            remove_tags: ['冰魔法']
        },
        {
            text: '剁双手',
            result: '你做出了选择。',
            add_tags: ['剁双手'],
            remove_tags: ['冰魔法']
        },
        {
            text: '并不害怕',
            result: '{user}已经{age}岁了，她与生俱来的魔法能量越来越强大，她不能驾驭这股能量。{user}随意的一个动作，都有可能向周围的人发动攻击。但{user}并不害怕。'
        }
            ]
        },
        'dbrs_786': {
            title: '失控',
            description: '在大街上有人向{user}问路，{user}指路的时候，一束冰针失控顺着手指飞出，贯穿了10几个路人。{user}因为故意伤人致死，被抓进了监狱。',
            priority: 10,
            trigger_conditions: { age_range: [6, 120], required_tags: ['冰魔法'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_787': {
            title: '失控',
            description: '{user}去温泉度假村玩。在温泉中，她对着温泉水打了个喷嚏，等她反应过来时，温泉水早已经结成了冰，{user}被冻住了。冰块比金属还坚硬，救援人员花了2天的时间才把冰凿开，把{user}已经冻硬的尸体抬了出去……',
            priority: 10,
            trigger_conditions: { age_range: [6, 120], required_tags: ['冰魔法'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_788': {
            title: '魔法能力',
            description: '{user}不能用手去拿杯子喝水，不然杯子里的水就会变成冰块。',
            priority: 10,
            trigger_conditions: { age_range: [3, 120], required_tags: ['冰魔法'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '小偷': {
        events: {
        'dbrs_225': {
            title: '潜行小偷',
            description: '{user}天生会隐形，他觉得这个技能运用在盗窃上面简直太妙了。{user}决定去偷一点厉害的东西___',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['小偷', '隐身'] },
            options: [
        {
            text: '偷金店里面的昂贵首饰。',
            result: '{user}开启隐身，进首饰店，抢了很多昂贵首饰。店员看着这些首饰漂浮着离开商店，目瞪口呆。',
            effects: { money: 10 }
        },
        {
            text: '偷偷进入希望国的51区',
            result: '{user}天生会隐形，因为好奇所以他偷偷进入希望国的51禁区，在那里，他惊讶地发现在禁区里生活的都不是人，是类人的生物，它们还能看到{user}，拉响了警报，把{user}抓了起来……从此再也没有人见到过{user}。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '到中南河里面偷机密文件',
            result: '{user}会隐身，他胆大包天地进入了国家禁区中南河，偷取了一些国家机密文件。',
            remove_tags: ['小偷']
        }
            ]
        }
        }
    },
    '狐狸的粥': {
        events: {
        'dbrs_1266': {
            title: '道士的警告',
            description: '有一天，一位道士路过{user}家门口，对{user}说：“你家里妖气好重！”{user}端出粥，道士说：“这粥可吃不得！这是狐狸精做的！”{user}不以为然，他觉得他的朋友肯定是一位好妖精。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['狐狸的粥'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '狩魔猎人': {
        events: {
        'dbrs_683': {
            title: '狩魔猎人能力',
            description: '拥有了短暂的狩魔猎人能力，{user}一下子就找到了魔王的大本营。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['狩魔猎人'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['狩魔猎人']
        }
            ]
        }
        }
    },
    '获得永灵刀': {
        events: {
        'dbrs_520': {
            title: '永灵刀',
            description: '放了1个星期，已经发臭的猪肉，用永灵刀切片之后，就变成了新鲜猪肉。{user}被这个刀的神秘力量震慑住了。',
            priority: 5,
            trigger_conditions: { age_range: [20, 120], required_tags: ['获得永灵刀'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '长翅膀': {
        events: {
        'dbrs_1081': {
            title: '骄傲的翅膀',
            description: '{user}有一对天使的翅膀，{user}一直很骄傲。{user}用它来___',
            priority: 10,
            trigger_conditions: { age_range: [1, 20], required_tags: ['长翅膀'] },
            options: [
        {
            text: '翱翔天际',
            result: '{user}从山崖跳落，尝试飞行。{user}虽然有一双傲人的翅膀，但是{user}却不知道怎么去用，结果跌落山崖……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '练习飞行',
            result: '你做出了选择。',
            add_tags: ['会飞']
        },
        {
            text: '拍照发朋友圈',
            result: '你做出了选择。',
            add_tags: ['交网友']
        }
            ]
        },
        'dbrs_1082': {
            title: '鸟人=NAME=',
            description: '因为{user}异于常人，{user}的同学都叫他做鸟人……{user}___',
            priority: 10,
            trigger_conditions: { age_range: [5, 23], required_tags: ['长翅膀'] },
            options: [
        {
            text: '喜欢这个昵称',
            result: '因为{user}异于常人，{user}的同学都叫他做鸟人……{user}喜欢同学这样叫他，{user}的翅膀令他骄傲。',
            add_tags: ['鸟人']
        },
        {
            text: '讨厌这个昵称',
            result: '因为{user}异于常人，{user}的同学都叫他做鸟人……{user}讨厌这个昵称，“鸟人”意思听起来不像是会飞的人。',
            add_tags: ['鸟人']
        }
            ]
        }
        }
    },
    '隐身': {
        events: {
        'dbrs_87': {
            title: '旷课',
            description: '{user}被老师记了很多次旷课,因为{user}被自己的课桌挡住了,老师看不到他。',
            priority: 10,
            trigger_conditions: { age_range: [4, 17], required_tags: ['隐身'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_225': {
            title: '潜行小偷',
            description: '{user}天生会隐形，他觉得这个技能运用在盗窃上面简直太妙了。{user}决定去偷一点厉害的东西___',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['小偷', '隐身'] },
            options: [
        {
            text: '偷金店里面的昂贵首饰。',
            result: '{user}开启隐身，进首饰店，抢了很多昂贵首饰。店员看着这些首饰漂浮着离开商店，目瞪口呆。',
            effects: { money: 10 }
        },
        {
            text: '偷偷进入希望国的51区',
            result: '{user}天生会隐形，因为好奇所以他偷偷进入希望国的51禁区，在那里，他惊讶地发现在禁区里生活的都不是人，是类人的生物，它们还能看到{user}，拉响了警报，把{user}抓了起来……从此再也没有人见到过{user}。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '到中南河里面偷机密文件',
            result: '{user}会隐身，他胆大包天地进入了国家禁区中南河，偷取了一些国家机密文件。',
            remove_tags: ['小偷']
        }
            ]
        },
        'dbrs_456': {
            title: '心脏病发',
            description: '{user}在逛公园的时候，他的老毛病——心脏病犯了。{user}倒在了地上，无意识地隐形了，路过的人都没看到{user}。直到死，都没人来救他。',
            priority: 10,
            trigger_conditions: { age_range: [45, 120], required_tags: ['隐身'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        }
        }
    },
    '鬼修': {
        events: {
        'dbrs_1103': {
            title: '鬼修',
            description: '{user}选择鬼修，是因为鬼修最另类，最有个性。{user}刚刚入门，每天看三小时恐怖片。持续看了一年，{user}似乎有所收获。',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['鬼修'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['鬼修：采阴'],
            remove_tags: ['鬼修']
        }
            ]
        }
        }
    },
    '鬼修：嗜魂': {
        events: {
        'dbrs_1105': {
            title: '鬼修',
            description: '{user}到了{age}岁，他每天看十小时恐怖片。他觉得自己已经又习惯了这个强度的修行，是时候进行下一阶段的修行。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['鬼修：嗜魂'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['鬼修：夺体'],
            remove_tags: ['鬼修：嗜魂']
        }
            ]
        }
        }
    },
    '鬼修：夺体': {
        events: {
        'dbrs_1107': {
            title: '鬼片鉴赏家',
            description: '这几年修炼下来，{user}阅片无数，成为了一个鬼片鉴赏家。{user}的修炼却在此遇到了瓶颈，似乎不能再得到什么修为，{user}为此闷闷不乐。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['鬼修：夺体'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '鬼修：采阴': {
        events: {
        'dbrs_1104': {
            title: '鬼修',
            description: '{user}在鬼修的道路上更进一步，每天看六小时恐怖片。就这样又过了一年，{user}又悟到了新的境界。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['鬼修：采阴'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['鬼修：嗜魂'],
            remove_tags: ['鬼修：采阴']
        }
            ]
        }
        }
    },
    '龙珠收集者': {
        events: {
        'dbrs_892': {
            title: '龙珠雷达',
            description: '{user}为了寻找龙珠，{user}制作了一个龙珠雷达。有了这个雷达，一公里内有龙珠出现的话，这个雷达就会有反应。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['龙珠收集者'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
};