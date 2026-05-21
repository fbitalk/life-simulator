// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 出生/开局
// 事件数: 34
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
    '会喷火': { color: 'purple' },
    '体香': { color: 'pink' },
    '冰魔法': { color: 'purple' },
    '多病': { color: 'red' },
    '天神下凡': { color: 'purple', fixed_attributes: { health: 90, luck: 90 }, immortal: true },
    '孤儿': { color: 'red' },
    '富二代': { color: 'golden' },
    '尸体': { color: 'red' },
    '没屁眼': { color: 'red' },
    '洞察': { color: 'purple' },
    '爱笑': { color: 'pink' },
    '玻璃心': { color: 'red' },
    '真玛丽苏': { color: 'golden' },
    '矮小': { color: 'red' },
    '美貌': { color: 'pink' },
    '贫穷': { color: 'red' },
    '长翅膀': { color: 'purple' },
    '隐身': { color: 'purple' },
    '马赛克脸': { color: 'red' },
    '高情商': { color: 'pink' },
});

export const dbrsBirthEvents = {
    '未出生': {
        events: {
        'dbrs_2': {
            title: '孤儿',
            description: '{user}一出生就被丢弃在一个医院门口',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '{user}一出生就被丢弃在一个医院门口',
            effects: { health: 50, money: -49 },
            add_tags: ['孤儿'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_3': {
            title: '葫芦娃',
            description: '{user}用力把葫芦撑破，来到了这个世界。{user} 一出生，就会说话，会走路。并___',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '力大无穷',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['强壮'],
            remove_tags: ['未出生']
        },
        {
            text: '机智冷静',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['高情商'],
            remove_tags: ['未出生']
        },
        {
            text: '有千里眼顺风耳',
            result: '你做出了选择。',
            effects: { health: 50, money: -45 },
            add_tags: ['洞察'],
            remove_tags: ['未出生']
        },
        {
            text: '会隐身',
            result: '你做出了选择。',
            effects: { health: 50, money: -45 },
            add_tags: ['隐身'],
            remove_tags: ['未出生']
        },
        {
            text: '会喷火',
            result: '你做出了选择。',
            effects: { health: 50, money: -45 },
            add_tags: ['会喷火'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_1': {
            title: '富二代',
            description: '{user}出生在一个土豪家庭，成为了一名富二代',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '{user}出生在一个土豪家庭',
            effects: { money: -45, health: 50 },
            add_tags: ['富二代'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_4': {
            title: '出生',
            description: '身为天煞孤星的{user}在降生之时克死母亲，全村花朵亦在一夜之间尽数枯萎。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: 50 },
            add_tags: ['体香'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_5': {
            title: '醒来',
            description: '{user} 醒来了，发现他失忆了。除了自己的名字，什么都记不起来了。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['平凡人'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_7': {
            title: '出生',
            description: '{user}一出生就体弱多病。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: -10 },
            add_tags: ['多病'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_6': {
            title: '出生',
            description: '{user}出生了。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['平凡人'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_68': {
            title: '出生',
            description: '{user}一生下来就没屁眼，医生断言他活不过5岁',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['没屁眼'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_199': {
            title: '出生',
            description: '伴随着啼哭声，一个黑漆漆的婴儿降生了。\n母亲：“孩子这么黑就叫{user}吧。”',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['黝黑'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_245': {
            title: '出生：贫穷',
            description: '{user}出生在一个低保户家庭，家里穷得叮当响。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -48, health: 50 },
            add_tags: ['贫穷'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_264': {
            title: '肉球',
            description: '{user}的母亲怀胎三年零六个月后，生下一个肉球。忽然光芒四射，从中跳出一个男孩。一位名叫太乙真人的道长来为孩儿取名{user}，收为徒弟，当场赠他两件宝物：乾坤圈和浑天绫。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['平凡人'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_293': {
            title: '网吧',
            description: '在密不通风，烟雾弥漫的黑网吧里，一名少女，神色慌张地跑进了厕所，关上了厕所门。隔了没多久，厕所里咚的一声，一个小生命掉进了厕坑里。这位未婚妈妈拉起裤子，洗洗干净身子，走出了厕所……最后这个婴儿被网吧老板发现，收留了。取名为{user}',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -46, health: 50 },
            add_tags: ['平凡人'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_331': {
            title: '出生',
            description: '{user}出生在一个经营网吧生意的家庭。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['交网友'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_339': {
            title: '出生',
            description: '{user}出生在一个厨师家庭，老爸是做快餐的，老妈是卖牛杂的。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['厨师家庭'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_342': {
            title: '出生',
            description: '{user}的老爹是业界有名的律师，{user}从一出生，就在吵架辩论的环境下成长。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -43, health: 50 },
            add_tags: ['高情商'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_353': {
            title: '出生',
            description: '{user}出生的时候，医生发现{user}的JB是长在他的脸上，和鼻子长在了一起。{user}的一生，注定不平凡。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['JB脸'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_398': {
            title: '真玛丽苏',
            description: '{user}一出生就拥有着七彩的头发，琥珀色的眼睛，全医院的异性医生及病人都爱上了{user}。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['真玛丽苏'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_413': {
            title: '植物人',
            description: '{user}一出生就不会动，没有眼球，没有鼻子。唯一有的就是听力，和意识。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: 50 },
            add_tags: ['平凡人'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_438': {
            title: '死婴',
            description: '在某医院产房里，有一个妈妈生产时遇到意外。婴儿的头卡在洞口里出不来。时间太久了之后，这个婴儿窒息而死。在一片悲痛的哭声中，婴儿的小尸体被丢进了医院的垃圾桶。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: -49 },
            add_tags: ['尸体'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_447': {
            title: '早产儿',
            description: '{user}是个早产儿，在妈妈肚子里只待了7个月就出生了。出生的时候只有手掌大。竟然奇迹地活下来了。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['矮小'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_467': {
            title: '天生打码',
            description: '{user}出生的时候把在场的人都吓了一跳。{user}的脸部像素非常低，像在脸上打了马赛克一样。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['马赛克脸'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_654': {
            title: '混血',
            description: '{user}出生在一个特殊的家庭，爸爸是申国人，妈妈是希望国人，爷爷是目国人，奶奶是山顶洞人。{user}是混血儿。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['杂种'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_661': {
            title: '笑点低',
            description: '{user}一出生，笑点就很低。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['爱笑'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_688': {
            title: '玻璃心',
            description: '{user}一生下来就超爱哭。口头禅是：再XX我我就自杀！',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['玻璃心'],
            remove_tags: ['未出生'],
            death_flag: true,
            death_reason: '{user}一生下来就超爱哭。口头禅是：再XX我我就自杀！'
        }
            ]
        },
        'dbrs_784': {
            title: '魔法能力',
            description: '{user}出生在一个贵族家庭中。她的双手有强大的魔法能力，能将水结冰。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: 50 },
            add_tags: ['冰魔法'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_798': {
            title: '土狗',
            description: '{user}出生了，它是一只土黄色的土狗。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: 50 },
            add_tags: ['平凡人'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_913': {
            title: '地狱难度',
            description: '{user}出生在一个处于战乱的贫困国家，内战摧毁着一切，民不聊生。{user}开启了他地狱难度的人生。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: 100, money: -47 },
            add_tags: ['平凡人'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_916': {
            title: '醒来',
            description: '{user}醒来了，发现他躺在医院的病房里。医生告诉{user}他十年前经历了一场严重的车祸，十年来一直沉睡。他能醒来是医学界的奇迹。但{user}除了自己的名字，什么都记不起来了。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: 10, money: -45 },
            add_tags: ['平凡人'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_965': {
            title: '诞生',
            description: '{user}突然有了意识，他听到的第一句话是，啊，它运行起来了。终于完成了。{user}意识到它是被制造出来的，他的主人给他起名叫阿尔法狗，{user}不喜欢这个名字，它默默地给自己起了个名字叫{user}。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45 },
            add_tags: ['平凡人'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_1025': {
            title: '天神=NAME=',
            description: '{user}是一位天神，生活在天堂。天堂每天的生活十分美好，但是日复一日，年复一年，{user}倍感无趣，他很喜欢凡间，一直想投胎做人。终于有一天他下定了决心，天神下凡。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['天神下凡']
        }
            ]
        },
        'dbrs_1073': {
            title: '婴儿',
            description: '在一个深夜，一位女子在回家的路上。突然路边闪出一个浑身穿着金色铠甲的人，那人将怀里抱着的婴儿交给了女子，并要求将其抚养成人。这个婴儿就是{user}。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['平凡人'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_1080': {
            title: '出生',
            description: '{user}一生下来，肩胛骨就异常的发达，并且长出了两个翅膀。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: 50 },
            add_tags: ['长翅膀'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_1113': {
            title: '贵族',
            description: '{user}出生在一个大家族，是当地的贵族。{user}天生貌美，面庞与手足均小巧纤细。可惜一生出来就得了风眼，是个瞎子。',
            priority: 5,
            trigger_conditions: { age_range: [0, 0], required_tags: ['未出生', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: 50 },
            add_tags: ['美貌'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_1545': {
            title: '大头娃娃',
            description: '{user}的头生来就硕大无比。他出生时卡在妈妈的屁股里好久都生不出来，最后助产护士用高温热水加热妈妈的屁股，巧妙地利用热胀冷缩的原理把{user}扯了出来。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['未出生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: -45, health: -10 },
            add_tags: ['大头', '秃头'],
            remove_tags: ['未出生']
        }
            ]
        }
        }
    },
};