// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 恋爱/婚姻
// 事件数: 30
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
    '玻璃心': { color: 'red' },
});

export const dbrsLoveEvents = {
    'JB脸': {
        events: {
        'dbrs_355': {
            title: '初吻',
            description: '{user}和女友初吻时候，鼻子突然变大。顶住了彼此的脸，非常尴尬。',
            priority: 5,
            trigger_conditions: { age_range: [18, 38], required_tags: ['JB脸', '恋爱'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '功能障碍': {
        events: {
        'dbrs_338': {
            title: '床上功能障碍',
            description: '{user}患有床上功能障碍，他的对象忍受不了这个，离开了{user}。',
            priority: 5,
            trigger_conditions: { age_range: [18, 50], required_tags: ['功能障碍', '恋爱'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        }
        }
    },
    '口臭': {
        events: {
        'dbrs_73': {
            title: '亲嘴',
            description: '{user}和伴侣第一次亲亲，是在一个舒适的星期天。{user}把嘴凑到伴侣嘴唇边，轻轻地碰了一下。然后伴侣突然扭过头去吐个不停……吐完就跑了，隔天他们分手了。',
            priority: 5,
            trigger_conditions: { age_range: [8, 30], required_tags: ['恋爱', '口臭'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['玻璃心'],
            remove_tags: ['恋爱']
        }
            ]
        }
        }
    },
    '小马': {
        events: {
        'dbrs_574': {
            title: '性癖',
            description: '{user}最喜欢私下舔妻子的脚丫。',
            priority: 5,
            trigger_conditions: { age_range: [20, 60], required_tags: ['结婚', '小马'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_575': {
            title: '性癖',
            description: '{user}最喜欢私下舔妻子的脚丫。',
            priority: 5,
            trigger_conditions: { age_range: [20, 60], required_tags: ['结婚', '小马'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_576': {
            title: '性癖',
            description: '{user}最喜欢私下舔妻子的脚丫。',
            priority: 5,
            trigger_conditions: { age_range: [20, 60], required_tags: ['结婚', '小马'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_577': {
            title: '性癖',
            description: '{user}最喜欢私下舔妻子的脚丫。',
            priority: 5,
            trigger_conditions: { age_range: [20, 60], required_tags: ['结婚', '小马', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '强壮': {
        events: {
        'dbrs_180': {
            title: '鸡肉玩具',
            description: '{user}和女友看电视的时候，女友最爱捧着{user}的肱二头肌把玩了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['强壮', '恋爱', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1009': {
            title: '恋爱与宽容',
            description: '男朋友做了错事，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['强壮', '恋爱', '女性'] },
            options: [
        {
            text: '用小拳拳打他',
            result: '{user}的男朋友被{user}用小拳拳打到进了医院，最后死了。{user}因恶意杀人，被抓紧了监狱。',
            remove_tags: ['恋爱'],
            death_flag: true,
            death_reason: '=NAME=的男朋友被=NAME=用小拳拳打到进了医院，最后死了。=NAME=因恶意杀人，被抓紧了监狱。'
        },
        {
            text: '拿出搓衣板',
            result: '男朋友做了错事，{user}拿出搓衣板，对着男朋友笑笑……'
        },
        {
            text: '拿出键盘',
            result: '男朋友做了错事，{user}拿出键盘，让男朋友跪在上面，电脑打出了一个字，男朋友就会被鞭打一下。'
        },
        {
            text: '立即原谅他',
            result: '男朋友做了错事，{user}立即就原谅了他。{user}的宽容与大度让她的男朋友流下了泪。并承诺以后不会再犯错。'
        }
            ]
        }
        }
    },
    '恋爱': {
        events: {
        'dbrs_73': {
            title: '亲嘴',
            description: '{user}和伴侣第一次亲亲，是在一个舒适的星期天。{user}把嘴凑到伴侣嘴唇边，轻轻地碰了一下。然后伴侣突然扭过头去吐个不停……吐完就跑了，隔天他们分手了。',
            priority: 5,
            trigger_conditions: { age_range: [8, 30], required_tags: ['恋爱', '口臭'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['玻璃心'],
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_180': {
            title: '鸡肉玩具',
            description: '{user}和女友看电视的时候，女友最爱捧着{user}的肱二头肌把玩了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['强壮', '恋爱', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_506': {
            title: '被甩',
            description: '{user}在一次和女友逛街的时候，没有给女友买她喜欢的包包。女友非常生气，丢下一句：“你的臭钱比我还要重要，你去跟你的钱谈恋爱去吧！”然后就走了。',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['恋爱', '抠门', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_239': {
            title: '和自己恋爱',
            description: '{user}的男朋友受不了和她约会时，她都照镜子。终于跟她提出了分手……',
            priority: 5,
            trigger_conditions: { age_range: [19, 19], required_tags: ['自恋', '恋爱', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_338': {
            title: '床上功能障碍',
            description: '{user}患有床上功能障碍，他的对象忍受不了这个，离开了{user}。',
            priority: 5,
            trigger_conditions: { age_range: [18, 50], required_tags: ['功能障碍', '恋爱'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_355': {
            title: '初吻',
            description: '{user}和女友初吻时候，鼻子突然变大。顶住了彼此的脸，非常尴尬。',
            priority: 5,
            trigger_conditions: { age_range: [18, 38], required_tags: ['JB脸', '恋爱'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_400': {
            title: '羊癫疯',
            description: '{user}在和对象一起逛街。突然{user}全身抽搐，口吐白沫。对象搀扶{user}时，还被{user}狠狠地打了一拳。{user}就这样躺在地上，过了好久才恢复正常。',
            priority: 5,
            trigger_conditions: { age_range: [20, 30], required_tags: ['羊癫疯', '恋爱'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_509': {
            title: '被甩',
            description: '{user}在一次和女友逛街的时候，没有给女友买她喜欢的包包。女友非常生气，丢下一句：“你的臭钱比我还要重要，你去跟你的钱谈恋爱去吧！”然后就走了。',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['恋爱', '抠门', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_627': {
            title: '谎话连篇的男友',
            description: '以前{user}的男朋友总说他更喜欢{user}胖胖的样子，在{user}与男友分手的那一刻，她知道那些都是谎话。',
            priority: 5,
            trigger_conditions: { age_range: [10, 70], required_tags: ['恋爱', '肥胖', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_1009': {
            title: '恋爱与宽容',
            description: '男朋友做了错事，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['强壮', '恋爱', '女性'] },
            options: [
        {
            text: '用小拳拳打他',
            result: '{user}的男朋友被{user}用小拳拳打到进了医院，最后死了。{user}因恶意杀人，被抓紧了监狱。',
            remove_tags: ['恋爱'],
            death_flag: true,
            death_reason: '=NAME=的男朋友被=NAME=用小拳拳打到进了医院，最后死了。=NAME=因恶意杀人，被抓紧了监狱。'
        },
        {
            text: '拿出搓衣板',
            result: '男朋友做了错事，{user}拿出搓衣板，对着男朋友笑笑……'
        },
        {
            text: '拿出键盘',
            result: '男朋友做了错事，{user}拿出键盘，让男朋友跪在上面，电脑打出了一个字，男朋友就会被鞭打一下。'
        },
        {
            text: '立即原谅他',
            result: '男朋友做了错事，{user}立即就原谅了他。{user}的宽容与大度让她的男朋友流下了泪。并承诺以后不会再犯错。'
        }
            ]
        },
        'dbrs_1168': {
            title: '绝命家暴',
            description: '{user}在外面有外遇的事情让老公知道了，{user}惨遭家暴。{user}被吊在天花板风扇上，老公打开风扇，让{user}旋转起来。此等酷刑，实在令人心悸。最惨的是扇叶承受不住{user}的重量断开了，{user}重重地跌落在地上，瞬间死亡。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['恋爱', '结婚', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}在外面有外遇的事情让老公知道了，{user}惨遭'
        }
            ]
        },
        'dbrs_1224': {
            title: '昆学分享',
            description: '{user}有一次把女朋友带到了昆学部。与社员们一同分享昆学之道。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['昆学部', '恋爱', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '抠门': {
        events: {
        'dbrs_506': {
            title: '被甩',
            description: '{user}在一次和女友逛街的时候，没有给女友买她喜欢的包包。女友非常生气，丢下一句：“你的臭钱比我还要重要，你去跟你的钱谈恋爱去吧！”然后就走了。',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['恋爱', '抠门', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_509': {
            title: '被甩',
            description: '{user}在一次和女友逛街的时候，没有给女友买她喜欢的包包。女友非常生气，丢下一句：“你的臭钱比我还要重要，你去跟你的钱谈恋爱去吧！”然后就走了。',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['恋爱', '抠门', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        }
        }
    },
    '昆学部': {
        events: {
        'dbrs_1224': {
            title: '昆学分享',
            description: '{user}有一次把女朋友带到了昆学部。与社员们一同分享昆学之道。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['昆学部', '恋爱', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '爱之病': {
        events: {
        'dbrs_376': {
            title: '爱之病',
            description: '因为{user}的爱之病，{user}的伴侣弃他而去。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爱之病', '结婚'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['玻璃心'],
            remove_tags: ['结婚']
        }
            ]
        }
        }
    },
    '结婚': {
        events: {
        'dbrs_67': {
            title: '爱情专一',
            description: '请不要随意玩弄女生，她们只有一颗心，很脆弱，要玩就玩她们的奶子吧，有两个呢。',
            priority: 5,
            trigger_conditions: { age_range: [6, 120], required_tags: ['结婚', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_376': {
            title: '爱之病',
            description: '因为{user}的爱之病，{user}的伴侣弃他而去。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爱之病', '结婚'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['玻璃心'],
            remove_tags: ['结婚']
        }
            ]
        },
        'dbrs_574': {
            title: '性癖',
            description: '{user}最喜欢私下舔妻子的脚丫。',
            priority: 5,
            trigger_conditions: { age_range: [20, 60], required_tags: ['结婚', '小马'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_575': {
            title: '性癖',
            description: '{user}最喜欢私下舔妻子的脚丫。',
            priority: 5,
            trigger_conditions: { age_range: [20, 60], required_tags: ['结婚', '小马'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_576': {
            title: '性癖',
            description: '{user}最喜欢私下舔妻子的脚丫。',
            priority: 5,
            trigger_conditions: { age_range: [20, 60], required_tags: ['结婚', '小马'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_512': {
            title: '怀孕',
            description: '在和丈夫经过一系列荒淫无度的生活后，{user}发现自己怀孕了。',
            priority: 5,
            trigger_conditions: { age_range: [20, 120], required_tags: ['结婚', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_577': {
            title: '性癖',
            description: '{user}最喜欢私下舔妻子的脚丫。',
            priority: 5,
            trigger_conditions: { age_range: [20, 60], required_tags: ['结婚', '小马', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_589': {
            title: '衣柜藏人',
            description: '一天，{user}回到家中，打开衣柜换衣服，发现隔壁老王在衣柜里。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [45, 48], required_tags: ['结婚', '男性'] },
            options: [
        {
            text: '想不到老王是小偷，连衣服都偷',
            result: '一天，{user}回到家中，打开衣柜换衣服，发现隔壁老王在衣柜里。{user}把老王赶走，心想老王家里也不算困难，为什么要来偷自己的衣服呢？'
        },
        {
            text: '询问老王为什么会在衣柜里',
            result: '一天，{user}回到家中，打开衣柜换衣服，发现隔壁老王在衣柜里。{user}询问老王为什么会在衣柜里，老王说在参观{user}的衣柜。{user}相信了老王所说的话。'
        },
        {
            text: '邀请他在家吃饭',
            result: '你做出了选择。'
        },
        {
            text: '卧槽我要打死他',
            result: '一天，{user}回到家中，打开衣柜换衣服，发现隔壁老王在衣柜里……{user}一下子就知道了不得了的事情，愤怒之情涌上心头。{user}把老王拖出来毒打了一顿，然后把他拖到厕所里，头摁到屎坑里吃屎。老王吃着吃着受不了死掉了。{user}因为杀人，被抓进了监狱。'
        },
        {
            text: '祝福老王，并离婚',
            result: '一天，{user}回到家中，打开衣柜换衣服，发现隔壁老王在衣柜里……{user}欣喜若狂，抓起老王的手说：“祝你幸福。”然后扯着自己的老婆去签了离婚协议。终于摆脱了婚姻的囚笼。',
            remove_tags: ['结婚']
        },
        {
            text: '当然是选择原谅他啦',
            result: '一天，{user}回到家中，打开衣柜换衣服，发现隔壁老王在衣柜里…{user}温怒，有礼貌地请走了老王。并原谅了老婆。'
        }
            ]
        },
        'dbrs_741': {
            title: '妻子与养女',
            description: '{user}的妻子不喜欢这个捡回来的女儿薇尔希，要求{user}把她送到孤儿院去。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['结婚', '男性'] },
            options: [
        {
            text: '与妻子离婚',
            result: '{user}与妻子因为养女的事情闹不和，最后离婚了。',
            remove_tags: ['结婚']
        },
        {
            text: '把养女送到孤儿院',
            result: '{user}的妻子不想要这个养女，{user}无奈只能把薇尔希送到了孤儿院。',
            remove_tags: ['与薇尔希相处愉快']
        }
            ]
        },
        'dbrs_742': {
            title: '妻子与养女',
            description: '{user}的妻子很喜欢这个捡回来的女儿薇尔希。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['结婚', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['结婚并收养女儿']
        }
            ]
        },
        'dbrs_838': {
            title: '丧尸',
            description: '因为{user}变得好丑，他的伴侣跟他分手了……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['结婚'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['结婚']
        }
            ]
        },
        'dbrs_955': {
            title: '陌生人',
            description: '有一天，{user}发现自己家里多了一个陌生人，这个人跟他年纪差不多。{user}说：___',
            priority: 5,
            trigger_conditions: { age_range: [50, 150], required_tags: ['老人痴呆', '结婚', '男性'] },
            options: [
        {
            text: '我不认识你，滚出去',
            result: '你做出了选择。'
        },
        {
            text: '看样子你是我老婆。',
            result: '你做出了选择。'
        },
        {
            text: '报警',
            result: '有一天，{user}发现自己家里多了一个陌生人，这个人跟他年纪差不多。{user}立马报警，警察过来了解情况后，无情地将{user}绑起来关进了大牢。'
        }
            ]
        },
        'dbrs_956': {
            title: '陌生人',
            description: '有一天，{user}发现自己家里多了一个老头，这个人{user}不认识。{user}说：___',
            priority: 5,
            trigger_conditions: { age_range: [50, 150], required_tags: ['老人痴呆', '结婚', '女性'] },
            options: [
        {
            text: '你快藏好，我老公快回家了',
            result: '你做出了选择。'
        },
        {
            text: '你好像是我的老伴',
            result: '你做出了选择。'
        },
        {
            text: '报警',
            result: '{user}立马报警，警察过来了解情况后，无情地将{user}绑起来关进了大牢。'
        }
            ]
        },
        'dbrs_995': {
            title: '后代',
            description: '{user}与妻子经过一系列荒淫无度的生活后，妻子终于怀孕了，并生下了一个健康的孩子。',
            priority: 5,
            trigger_conditions: { age_range: [15, 120], required_tags: ['结婚', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1018': {
            title: '家庭晚餐',
            description: '有一天，{user}一家结婚纪念日，做了丰富的晚餐。他们吃的是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['结婚', '女性'] },
            options: [
        {
            text: '煲仔饭',
            result: '你做出了选择。',
            add_tags: ['亡儿']
        },
        {
            text: '煲仔饭',
            result: '你做出了选择。'
        },
        {
            text: '老婆饼',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '老公饼',
            result: '你做出了选择。',
            remove_tags: ['结婚']
        },
        {
            text: '夫妻肺片',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            remove_tags: ['结婚'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1019': {
            title: '家庭晚餐',
            description: '有一天，{user}一家结婚纪念日，做了丰富的晚餐。他们吃的是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['结婚', '男性'] },
            options: [
        {
            text: '煲仔饭',
            result: '你做出了选择。',
            add_tags: ['亡儿']
        },
        {
            text: '煲仔饭',
            result: '你做出了选择。'
        },
        {
            text: '老婆饼',
            result: '你做出了选择。',
            remove_tags: ['结婚']
        },
        {
            text: '老公饼',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '夫妻肺片',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            remove_tags: ['结婚'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1085': {
            title: '修罗场',
            description: '{user}在外面勾搭小三的事情败露了。小三与大老婆在争吵，还拳脚相向。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['结婚', '男性'] },
            options: [
        {
            text: '上前和稀泥',
            result: '{user}在外面勾搭小三的事情败露了。小三与大老婆在争吵，还拳脚相向。{user}上前和稀泥，被两个女人打成重伤。{user}倒地后还被重重的踩了几下，最终重伤不治……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '使用四维口袋',
            result: '{user}在外面勾搭小三的事情败露了。小三与大老婆在争吵，还拳脚相向。{user}赶紧从四维口袋里找出一个绿色的道具，是一顶帽子。{user}拿帽子往老婆头上一扣，他的老婆心情立马平静了，脸上慢慢出现了笑容。老婆对{user}说：“我原谅你”'
        }
            ]
        },
        'dbrs_1167': {
            title: '破壁',
            description: '{user}结婚后，他心中的冰山融化了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['结婚'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1168': {
            title: '绝命家暴',
            description: '{user}在外面有外遇的事情让老公知道了，{user}惨遭家暴。{user}被吊在天花板风扇上，老公打开风扇，让{user}旋转起来。此等酷刑，实在令人心悸。最惨的是扇叶承受不住{user}的重量断开了，{user}重重地跌落在地上，瞬间死亡。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['恋爱', '结婚', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}在外面有外遇的事情让老公知道了，{user}惨遭'
        }
            ]
        }
        }
    },
    '羊癫疯': {
        events: {
        'dbrs_400': {
            title: '羊癫疯',
            description: '{user}在和对象一起逛街。突然{user}全身抽搐，口吐白沫。对象搀扶{user}时，还被{user}狠狠地打了一拳。{user}就这样躺在地上，过了好久才恢复正常。',
            priority: 5,
            trigger_conditions: { age_range: [20, 30], required_tags: ['羊癫疯', '恋爱'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        }
        }
    },
    '老人痴呆': {
        events: {
        'dbrs_955': {
            title: '陌生人',
            description: '有一天，{user}发现自己家里多了一个陌生人，这个人跟他年纪差不多。{user}说：___',
            priority: 5,
            trigger_conditions: { age_range: [50, 150], required_tags: ['老人痴呆', '结婚', '男性'] },
            options: [
        {
            text: '我不认识你，滚出去',
            result: '你做出了选择。'
        },
        {
            text: '看样子你是我老婆。',
            result: '你做出了选择。'
        },
        {
            text: '报警',
            result: '有一天，{user}发现自己家里多了一个陌生人，这个人跟他年纪差不多。{user}立马报警，警察过来了解情况后，无情地将{user}绑起来关进了大牢。'
        }
            ]
        },
        'dbrs_956': {
            title: '陌生人',
            description: '有一天，{user}发现自己家里多了一个老头，这个人{user}不认识。{user}说：___',
            priority: 5,
            trigger_conditions: { age_range: [50, 150], required_tags: ['老人痴呆', '结婚', '女性'] },
            options: [
        {
            text: '你快藏好，我老公快回家了',
            result: '你做出了选择。'
        },
        {
            text: '你好像是我的老伴',
            result: '你做出了选择。'
        },
        {
            text: '报警',
            result: '{user}立马报警，警察过来了解情况后，无情地将{user}绑起来关进了大牢。'
        }
            ]
        }
        }
    },
    '肥胖': {
        events: {
        'dbrs_627': {
            title: '谎话连篇的男友',
            description: '以前{user}的男朋友总说他更喜欢{user}胖胖的样子，在{user}与男友分手的那一刻，她知道那些都是谎话。',
            priority: 5,
            trigger_conditions: { age_range: [10, 70], required_tags: ['恋爱', '肥胖', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        }
        }
    },
    '自恋': {
        events: {
        'dbrs_239': {
            title: '和自己恋爱',
            description: '{user}的男朋友受不了和她约会时，她都照镜子。终于跟她提出了分手……',
            priority: 5,
            trigger_conditions: { age_range: [19, 19], required_tags: ['自恋', '恋爱', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        }
        }
    },
};