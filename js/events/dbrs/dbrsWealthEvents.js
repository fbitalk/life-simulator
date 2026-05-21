// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 财富/经济
// 事件数: 14
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
});

export const dbrsWealthEvents = {
    'RMB玩家': {
        events: {
        'dbrs_1407': {
            title: '贪婪玩约：攻城大战',
            description: '{user}今天去攻城，几百人同屏战斗，整个屏幕都是刀光剑影、黑血飞溅和魔法光芒。打到激动的时候，{user}还情不自禁地鬼叫出声。{user}是攻城战里的主力，他挥舞着自己的高级武器，把一个个敌人砍成两段。杀戮的快感让{user}的手一阵阵抽搐。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['RMB玩家'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1413': {
            title: '贪婪玩约：游戏的真谛',
            description: '{user}充值后，发现了这个游戏的真谛，就是变强，然后成为全服第一。想要变强，要么充值，要么氪命。{user}开始一发不可收拾，把全部家产都冲进了游戏，终于成为了全服第一！但好景不长，2天后又出现了一个更强的玩家，夺取了{user}的全服第一。{user}完全泄气了，仰天长叹后，他删除了《贪婪玩约》，退出了他的江湖。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['RMB玩家'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['RMB玩家']
        }
            ]
        }
        }
    },
    '原创：大师': {
        events: {
        'dbrs_1089': {
            title: '一贫如洗的作家',
            description: '{user}是一位有名的作家了，但是他还是一贫如洗。他___做了原创作家。',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['贫穷', '原创：大师'] },
            options: [
        {
            text: '后悔',
            result: '你做出了选择。'
        },
        {
            text: '不后悔',
            result: '{user}是一位有名的作家了，但是他还是一贫如洗。但{user}从不后悔做原创作家。'
        }
            ]
        }
        }
    },
    '土豪': {
        events: {
        'dbrs_265': {
            title: '挥金如土',
            description: '挥金如土自得乐，不思一朝家财尽。在{user}无节操的挥霍下，家里的存款已经见底。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['土豪', '败家'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            set_attributes: { money: 0 }
        }
            ]
        },
        'dbrs_289': {
            title: '军队：渠道',
            description: '{user}被告知，可以通过一些渠道，在部队获得安全舒适的工作。',
            priority: 5,
            trigger_conditions: { age_range: [20, 55], required_tags: ['土豪'] },
            options: [
        {
            text: '花点钱',
            result: '{user}花了点钱，获得了某个军区的办公室职位，收入丰厚，安全舒适。'
        },
        {
            text: '并不需要',
            result: '{user}被告知，可以通过一些渠道，在部队获得安全舒适的工作。{user}没有理会。'
        }
            ]
        },
        'dbrs_403': {
            title: '人怕出名，树怕大',
            description: '人怕出名，树怕大。{user}已经是有名的土豪，大家都知道他喜欢挥洒钱财。一些不法分子也盯上了{user}，这些不法分子雇佣了一个光头名叫“杀手四七”来暗杀{user}，抢夺钱财。杀手四七，干脆利落地把{user}杀死了，甚至没有让{user}品尝痛苦。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['败家', '土豪'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '人怕出名，树怕大。{user}已经是有名的土豪，大家都知道他'
        }
            ]
        },
        'dbrs_477': {
            title: '土豪的穿衣',
            description: '{user}穿的衣服是45万一件的越南真丝上衣，裤子是8千一条的Adidos开裆裤。',
            priority: 5,
            trigger_conditions: { age_range: [1, 5], required_tags: ['土豪'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_505': {
            title: '追求者',
            description: '不知道怎的，{user}在学校非常受异性欢迎，同学排着队去追求{user}。',
            priority: 5,
            trigger_conditions: { age_range: [7, 20], required_tags: ['土豪'] },
            options: [
        {
            text: '从中选择一个自己最喜欢的',
            result: '{user}在学校非常受异性欢迎，同学排着队去追求{user}，{user}从中挑选了一个自己喜欢的做对象。'
        },
        {
            text: '并不想理这些人',
            result: '{user}在学校非常受异性欢迎，同学排着队去追求{user}。{user}揉揉太阳穴，很不耐烦地挥挥手，示意这些人快点滚开。'
        }
            ]
        },
        'dbrs_510': {
            title: '钱不可外露',
            description: '{user}过着挥霍无度的生活，他身边的人都知道{user}非常有钱。其中有一些不法分子对{user}动起了歪念头，为了抢夺{user}的钱财，绑架了他。{user}的所有财产被洗劫一空后，{user}还被撕票。',
            priority: 5,
            trigger_conditions: { age_range: [10, 120], required_tags: ['土豪', '败家'] },
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
        'dbrs_522': {
            title: '名导游',
            description: '{user}家财万贯，做导游只是体验生活，体验社会。顺便旅旅游。他的旅行团从来不会有安插购物点，有时候{user}还会免费请旅客吃饭，无端端添加丰富又好玩的日程。慢慢的，{user}导游的旅行团越来越多人了，人们都争先恐后地参加。',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['土豪'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_523': {
            title: '请团友购物',
            description: '{user}带团的时候，发现有一个可爱的小团友(22岁)站在一家珠宝首饰商店的橱窗前，对着里面的金银首饰两眼发光流口水。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['土豪', '男性'] },
            options: [
        {
            text: '帮她买',
            result: '{user}带团的时候，发现有一个可爱的小团友(22岁)站在一家珠宝首饰商店的橱窗前，对着里面的金银首饰两眼发光流口水。{user}慷慨地带这位团友进店，购买了这个首饰。小团友非常感动，抱住{user}热泪盈眶，大喊导游我爱你，非你不嫁。于是{user}就和这个小团友闪婚了……'
        },
        {
            text: '无视',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_724': {
            title: '申国比惨王：取消资格',
            description: '因为家境太过富裕，{user}直接给《申国比惨王》的官方取消了参赛的资格。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['土豪'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '败家': {
        events: {
        'dbrs_265': {
            title: '挥金如土',
            description: '挥金如土自得乐，不思一朝家财尽。在{user}无节操的挥霍下，家里的存款已经见底。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['土豪', '败家'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            set_attributes: { money: 0 }
        }
            ]
        },
        'dbrs_403': {
            title: '人怕出名，树怕大',
            description: '人怕出名，树怕大。{user}已经是有名的土豪，大家都知道他喜欢挥洒钱财。一些不法分子也盯上了{user}，这些不法分子雇佣了一个光头名叫“杀手四七”来暗杀{user}，抢夺钱财。杀手四七，干脆利落地把{user}杀死了，甚至没有让{user}品尝痛苦。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['败家', '土豪'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '人怕出名，树怕大。{user}已经是有名的土豪，大家都知道他'
        }
            ]
        },
        'dbrs_510': {
            title: '钱不可外露',
            description: '{user}过着挥霍无度的生活，他身边的人都知道{user}非常有钱。其中有一些不法分子对{user}动起了歪念头，为了抢夺{user}的钱财，绑架了他。{user}的所有财产被洗劫一空后，{user}还被撕票。',
            priority: 5,
            trigger_conditions: { age_range: [10, 120], required_tags: ['土豪', '败家'] },
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
    '贫穷': {
        events: {
        'dbrs_276': {
            title: '贫穷',
            description: '{user}家里非常穷，___',
            priority: 10,
            trigger_conditions: { age_range: [15, 120], required_tags: ['贫穷'] },
            options: [
        {
            text: '偷接别人家的电线、水管。省下水电费钱。',
            result: '{user}家里非常穷，{user}画了一晚上设计图，设计了一个线路偷接邻居的电线和水管，省下了一点生活费。',
            add_tags: ['工程师']
        },
        {
            text: '衣服都是补丁',
            result: '你做出了选择。',
            add_tags: ['形象：邋遢']
        }
            ]
        },
        'dbrs_277': {
            title: '义务教育万岁',
            description: '这个国家有20年义务教育，{user}不用花一分钱就可以去学校读书。赞美祖国，赞美义务教育。是它给了穷苦人民一个学文化的机会。',
            priority: 10,
            trigger_conditions: { age_range: [3, 15], required_tags: ['贫穷'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1089': {
            title: '一贫如洗的作家',
            description: '{user}是一位有名的作家了，但是他还是一贫如洗。他___做了原创作家。',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['贫穷', '原创：大师'] },
            options: [
        {
            text: '后悔',
            result: '你做出了选择。'
        },
        {
            text: '不后悔',
            result: '{user}是一位有名的作家了，但是他还是一贫如洗。但{user}从不后悔做原创作家。'
        }
            ]
        }
        }
    },
};