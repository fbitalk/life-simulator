// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 工作/职业
// 事件数: 13
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
});

export const dbrsCareerEvents = {
    'AB站会员': {
        events: {
        'dbrs_59': {
            title: '看片',
            description: '{user}在公众场合用手机看小电影的时候不小心开外放了。周围都安静了下来，剩下{user}手机里忘情的呻吟声回荡在耳边……',
            priority: 5,
            trigger_conditions: { age_range: [7, 120], required_tags: ['AB站会员'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_107': {
            title: 'AB站',
            description: '{user}逛AB站，最喜欢___区',
            priority: 5,
            trigger_conditions: { age_range: [7, 120], required_tags: ['AB站会员'] },
            options: [
        {
            text: '音乐',
            result: '你做出了选择。',
            add_tags: ['音乐', '音乐能力']
        },
        {
            text: '舞蹈',
            result: '你做出了选择。',
            add_tags: ['舞蹈']
        },
        {
            text: '游戏',
            result: '你做出了选择。'
        },
        {
            text: '文章',
            result: '你做出了选择。'
        },
        {
            text: '鬼畜',
            result: '{user}逛AB站，最喜欢鬼畜区了。蓝蓝路蓝蓝路吔屎啦蓝蓝路区'
        }
            ]
        },
        'dbrs_363': {
            title: '真·开脑洞',
            description: '{user}边走路边看视频刷弹幕，情到深时，一头撞到了电灯柱上，顿时头破血流，进了医院缝了几针。',
            priority: 5,
            trigger_conditions: { age_range: [20, 45], required_tags: ['AB站会员'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_482': {
            title: '近视眼',
            description: '{user}经常对着手机看视频，视力越来越差了。必须佩带眼镜。',
            priority: 5,
            trigger_conditions: { age_range: [18, 35], required_tags: ['AB站会员'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['近视眼']
        }
            ]
        }
        }
    },
    '倒血霉的渔夫': {
        events: {
        'dbrs_1000': {
            title: '十八英尺的大鱼',
            description: '{user}几年没有捞到半条鱼了，但是他没有放弃。终于在一天捞到一条非常巨大的大鱼。{user}与大鱼搏斗了几天，终于把它钓上来了，是一条十八英尺的大鱼。',
            priority: 5,
            trigger_conditions: { age_range: [50, 120], required_tags: ['倒血霉的渔夫'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['倒血霉的渔夫']
        }
            ]
        },
        'dbrs_1001': {
            title: '孤独的渔夫',
            description: '{user}几年没有捞到半条鱼了，没人与他出海，也没有渔人和他一起谈话。每当年轻的渔人笑他一无所获，老渔人便会同情地看着他。',
            priority: 5,
            trigger_conditions: { age_range: [50, 120], required_tags: ['倒血霉的渔夫'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_999': {
            title: '倒霉的渔夫',
            description: '{user}真是倒霉到家了，一年复一年，还是没有捞到半条鱼。{user}活生生饿死在渔船上。',
            priority: 10,
            trigger_conditions: { age_range: [50, 120], required_tags: ['倒血霉的渔夫', '贫穷'] },
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
    '厨师家庭': {
        events: {
        'dbrs_1436': {
            title: '校园祭：牛杂档',
            description: '在校园祭里，{user}把家里老妈的牛杂车推到学校里，开起了牛杂档。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['厨师家庭'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '小科学家': {
        events: {
        'dbrs_299': {
            title: '战争：秘密武器',
            description: '{user}因为有知识文化，被上级调派到一个叫晨光部队的特殊部队参加战斗，使用的武器是球状闪电，这个武器非常先进，100%命中率，可筛选性破坏。给了敌国致命的打击，直接导致敌国无条件投降。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['小科学家'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_457': {
            title: '神秘邀请函',
            description: '{user}收到一个非常奇怪的组织的邀请函。这个组织名叫SCP基金会。邀请{user}加入组织，去研究一个超自然课题。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [18, 35], required_tags: ['小科学家'] },
            options: [
        {
            text: '应邀加入',
            result: '你做出了选择。'
        },
        {
            text: '撕掉邀请函',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '歌手': {
        events: {
        'dbrs_201': {
            title: '校园歌手',
            description: '{user}喜欢唱歌，他在学校举办的校园歌手活动里倾情演唱了《___》。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['歌手'] },
            options: [
        {
            text: '我的滑板靴',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '倍儿爽',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: 'MY WAY粤语版',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: 'MY WAY国语版',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        },
        'dbrs_764': {
            title: '告白',
            description: '会玩音乐的人比较受欢迎，{user}在练歌的时候，有一个人跑进来向他求爱。',
            priority: 5,
            trigger_conditions: { age_range: [5, 25], required_tags: ['歌手'] },
            options: [
        {
            text: '接受这个人',
            result: '{user}因为会玩音乐，交到了对象。',
            add_tags: ['恋爱中']
        },
        {
            text: '拒绝',
            result: '会玩音乐的人比较受欢迎，{user}在学校厕所偷偷练歌的时候，有一个人跑进来向他求爱。{user}拒绝了这个人，这个人拖着2行泪水跑向远方。'
        },
        {
            text: '继续唱歌，无视这个人',
            result: '会玩音乐的人比较受欢迎，{user}在学校厕所偷偷练歌的时候，有一个人跑进来向他求爱。但{user}根本不想理他，继续放声唱歌。'
        },
        {
            text: '塞他进厕所',
            result: '{user}无缘无故把一个同学塞进了厕所，如此恶劣的校园暴力简直不可饶恕，{user}被抓进了监狱。'
        }
            ]
        }
        }
    },
    '贫穷': {
        events: {
        'dbrs_999': {
            title: '倒霉的渔夫',
            description: '{user}真是倒霉到家了，一年复一年，还是没有捞到半条鱼。{user}活生生饿死在渔船上。',
            priority: 10,
            trigger_conditions: { age_range: [50, 120], required_tags: ['倒血霉的渔夫', '贫穷'] },
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
    '赢得厨师比赛': {
        events: {
        'dbrs_163': {
            title: '快递',
            description: '{user}的快递到了，快递小哥似乎搬这个东西搬得很吃力，快递员来拍门了。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [20, 120], required_tags: ['赢得厨师比赛'] },
            options: [
        {
            text: '开门去拿',
            result: '快递到了，{user}开门去拿，原来是上次比赛赢回来的奖品。一个神秘厨具“永灵刀”。',
            add_tags: ['获得永灵刀'],
            remove_tags: ['赢得厨师比赛']
        },
        {
            text: '感觉不对路，假装不在家',
            result: '{user}的快递到了，快递小哥在门外等了半个小时，{user}竟然不来拿快递，给了门一个中指走人了。',
            remove_tags: ['赢得厨师比赛']
        },
        {
            text: '偷偷从窗外溜出去',
            result: '{user}的快递到了，快递小哥在门外等了半个小时，{user}竟然不来拿快递，给了门一个中指走人了。',
            remove_tags: ['赢得厨师比赛']
        }
            ]
        }
        }
    },
};