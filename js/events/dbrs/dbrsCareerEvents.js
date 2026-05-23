// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 工作/职业
// 事件数: 29
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
    '主席好朋友': {
        events: {
        'dbrs_266': {
            title: '朋友的特权',
            description: '{user}被送到了监狱没多久，就与监狱长沟通了一下，监狱长变得对{user}恭恭敬敬，没过几天，{user}就被放出去了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['主席好朋友'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_290': {
            title: '军队：渠道',
            description: '{user}被上级邀请，到某个军区的高级办公室上班。一份安全舒适的工作。',
            priority: 5,
            trigger_conditions: { age_range: [20, 55], required_tags: ['主席好朋友'] },
            options: [
        {
            text: '答应',
            result: '{user}花了点钱，获得了某个军区的办公室职位，收入丰厚，安全舒适。'
        },
        {
            text: '并不需要',
            result: '{user}被告知，可以通过一些渠道，在部队获得安全舒适的工作。{user}没有理会。'
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
    '出名的傀儡': {
        events: {
        'dbrs_1338': {
            title: '3D全息演唱会',
            description: '{user}的开发团队为{user}举办了一场演唱会，采用3D全息投影技术，让{user}可以站在舞台中央，一边唱歌一边跳舞。{user}在几万人的注视下表演了6个小时。{user}表演时心情毫无波动，只是跟随设定来舞蹈，跟随歌词来唱歌，他也不会感觉到劳累。看着现场这么多人在对着自己开心地欢呼，{user}麻木的心突然感觉到了无比的孤独。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['出名的傀儡'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1337': {
            title: '周边：手办',
            description: '{user}的虚拟形象的手办发布了。这个形象是一位穿着水手服的少女，青色的长发扎成两条长鞭一直垂到脚边。这个手办一经推出，5分钟内就被抢购一空，大家都很喜欢。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['出名的傀儡'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['出名的傀儡']
        }
            ]
        },
        'dbrs_1620': {
            title: '歌姬',
            description: '{user}成为了名声大噪的歌姬后，他的开发者觉得唱歌比下围棋还要赚钱。{user}被抽离了所有的下棋功能，专门成为了一个无情的唱歌机器。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['出名的傀儡'] },
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
    '好导游': {
        events: {
        'dbrs_521': {
            title: '底线',
            description: '{user}的基本工资只有300。{user}又从来不在自己的旅游团里安插购物点。单靠300元的工资维持生活。',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['好导游'] },
            options: [
        {
            text: '坚持',
            result: '你做出了选择。'
        },
        {
            text: '还是安插一点购物点吧（越过底线）',
            result: '{user}的基本工资只有300。{user}又从来不在自己的旅游团里安插购物点。单靠300元的工资维持生活，非常困难，{user}终于熬不住了，去他娘的职业操守，{user}开始向自己的旅行团不断安插购物点。他突然的转变，使一些老团友非常不满，再也不参{user}的团，慢慢的{user}根本不够人组旅行团了。{user}只好狼狈辞职。'
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
    '开办琴校': {
        events: {
        'dbrs_1136': {
            title: '慕名而来',
            description: '因为{user}也算是十分有名，很快就有不少的人慕名前来他开的琴校学琴。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['开办琴校'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['琴校老师'],
            remove_tags: ['开办琴校']
        }
            ]
        }
        }
    },
    '戴手套': {
        events: {
        'dbrs_789': {
            title: '胆结石',
            description: '{user}在一次体检中被查出有胆结石，结石有拳头这么大，但{user}表示不痛不痒。医生建议手术开刀切除，{user}决定___',
            priority: 5,
            trigger_conditions: { age_range: [10, 20], required_tags: ['戴手套'] },
            options: [
        {
            text: '不用理会',
            result: '你做出了选择。'
        },
        {
            text: '手术切除',
            result: '{user}在一次体检中被查出有胆结石，开刀切除后，从胆管里拿出一块鸡蛋大小的透明的冰块……'
        }
            ]
        },
        'dbrs_790': {
            title: '车祸',
            description: '{user} 在高速公路上遭遇了车祸。{user}立即释放了技能：寒冰护体。一个厚厚的冰蛋包住了{user}免受一切伤害。',
            priority: 5,
            trigger_conditions: { age_range: [200, 200], required_tags: ['戴手套'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['车祸阴影']
        }
            ]
        },
        'dbrs_1294': {
            title: '车祸',
            description: '{user} 在高速公路上遭遇了车祸。{user}立即释放了技能：寒冰护体。一个厚厚的冰蛋包住了{user}免受了一切伤害。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['戴手套'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1302': {
            title: '冰雕展览',
            description: '在校园祭时，{user}在学校找了片空地，独自开办了一个冰雕展览馆，展览馆是一个冰做成的城堡，虽然是夏天但是却不会融化。这个展览让{user}赚足了眼球。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['戴手套'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        },
        'dbrs_1314': {
            title: '二腿使徒',
            description: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['戴手套'] },
            options: [
        {
            text: '冰封它！',
            result: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}跑到使徒面前，脱下了手套。{user}用两只手在地上一摁，一条冰柱便从地面伸出，{user}站上冰柱，升到半空。{user}在使徒面前用两只手比划了一下，使徒立即被冰封了。使徒被冰封后很快就窒息了，被消灭了。'
        },
        {
            text: '登上逗比战士！',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1667': {
            title: '怀才不遇',
            description: '{user}强大的魔法能力没地方施展。{user}想了想，决定___。',
            priority: 5,
            trigger_conditions: { age_range: [20, 120], required_tags: ['戴手套'] },
            options: [
        {
            text: '造冰建一座自己的城堡',
            result: '你做出了选择。',
            add_tags: ['冰城堡']
        },
        {
            text: '制作冰块，批发',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1668': {
            title: '冰块生意',
            description: '{user}运用自己的魔法能力，能无成本快速制造出大量的冰块。他租了一个仓库，用魔法将仓库降温，仓库成了一个巨大的冰箱，用来储存冰块。他把冰块批发卖给___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['戴手套'] },
            options: [
        {
            text: '饮料店',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '奶茶店',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '菜肉市场',
            result: '你做出了选择。'
        },
        {
            text: '黑社会',
            result: '你做出了选择。',
            effects: { money: 5 }
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
    '神射手': {
        events: {
        'dbrs_287': {
            title: '神枪手',
            description: '{user}是部队里的神射手，上级经常会叫{user}使用大炮来送快递。',
            priority: 5,
            trigger_conditions: { age_range: [20, 55], required_tags: ['神射手'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '神枪手': {
        events: {
        'dbrs_296': {
            title: '军人：分岔路',
            description: '{user}收到了特种部队SWAT的加入邀请。',
            priority: 5,
            trigger_conditions: { age_range: [20, 55], required_tags: ['神枪手'] },
            options: [
        {
            text: '加入',
            result: '{user}收到了特种部队SWAT的加入邀请。{user}欣然接受，离开了部队。'
        },
        {
            text: '拒绝',
            result: '{user}收到了特种部队SWAT的加入邀请。{user}不舍得部队里的基友，拒绝了SWAT。'
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