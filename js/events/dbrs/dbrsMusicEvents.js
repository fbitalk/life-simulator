// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 音乐/舞蹈
// 事件数: 47
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
    '多病': { color: 'red' },
});

export const dbrsMusicEvents = {
    'MC石头': {
        events: {
        'dbrs_879': {
            title: '音乐修炼',
            description: '{user}经过了3年的长时间音乐修炼，自己闭门造车搞了一套风格独特的摇滚风格出来，他觉得自己要引领潮流了。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['MC石头'] },
            options: [
        {
            text: '开始筹办个人演唱会！',
            result: '你做出了选择。'
        },
        {
            text: '对自己失去信心',
            result: '{user}经过了3年的长时间音乐修炼，长时间的闭门造车让{user}对自己的理念产生了怀疑，最终{user}放弃了自己的音乐生涯。',
            remove_tags: ['MC石头']
        }
            ]
        },
        'dbrs_880': {
            title: '个人线上演唱会',
            description: '{user}在一个叫缺B乐的视频网站上，开起了他自己的个人线上演唱会。他对所有的观众说___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['MC石头'] },
            options: [
        {
            text: '我的摇滚很低调',
            result: '{user}在一个叫缺B乐的视频网站上，开起了他自己的个人线上演唱会。他对所有的观众说：不是人人都能活得低调，可以低调的基础就是随时高调。'
        }
            ]
        },
        'dbrs_884': {
            title: '个人线上演唱会',
            description: '{user}在一个叫缺B乐的视频网站上，开起了他自己的个人线上演唱会。他对所有的观众___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['MC石头'] },
            options: [
        {
            text: '赞美自己的音乐',
            result: '{user}在一个叫缺B乐的视频网站上，开起了他自己的个人线上演唱会。他对所有的观众说：我本无意与众不同，怎奈品味出众'
        }
            ]
        },
        'dbrs_883': {
            title: '个人线上演唱会',
            description: '{user}在一个叫缺B乐的视频网站上，开起了他自己的个人线上演唱会。他对所有的观众说___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['MC石头'] },
            options: [
        {
            text: '知识就是力量',
            result: '{user}在一个叫缺B乐的视频网站上，开起了他自己的个人线上演唱会。他对所有的观众说：知识就像内裤，看不见，却很重要。'
        }
            ]
        },
        'dbrs_885': {
            title: '个人线上演唱会',
            description: '{user}在一个叫缺B乐的视频网站上，开起了他自己的个人线上演唱会。他对所有的观众___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['MC石头'] },
            options: [
        {
            text: '公布自己的联系方式',
            result: '{user}在一个叫缺B乐的视频网站上，开起了他自己的个人线上演唱会。他对所有的观众公布他的联系方式：我的唯一扣扣号码是337845818，请记住唯一的联系扣扣337845818，其他都是狗屁。'
        }
            ]
        },
        'dbrs_886': {
            title: '个人线上演唱会',
            description: '{user}在一个叫缺B乐的视频网站上，开了个人线上演唱会。然后他就收获了大批粉丝，粉丝们感叹说：我这一生就记住了2个扣扣号，一个是自己的，一个是337845818。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['MC石头'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['宇宙最强DJ'],
            remove_tags: ['MC石头']
        }
            ]
        }
        }
    },
    '三味弦': {
        events: {
        'dbrs_1117': {
            title: '作曲',
            description: '{user}不但会弹奏三味弦，他还弹古筝。同时{user}还会作曲，他在{age}岁的那年，创作了《___》',
            priority: 5,
            trigger_conditions: { age_range: [5, 23], required_tags: ['三味弦', '女性'] },
            options: [
        {
            text: '六枝花',
            result: '你做出了选择。'
        },
        {
            text: '春莺啼',
            result: '你做出了选择。'
        },
        {
            text: '梅花三弄',
            result: '你做出了选择。'
        },
        {
            text: '弥三郎節',
            result: '你做出了选择。'
        },
        {
            text: '雪',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1115': {
            title: '荡漾在音乐的海洋中',
            description: '{user}自从入门了三味弦，他就沉迷其中。似乎打开了新世界大门，{user}快乐地在音乐的海洋中荡漾。',
            priority: 5,
            trigger_conditions: { age_range: [200, 200], required_tags: ['三味弦', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1119': {
            title: '能干的仆人',
            description: '​{user}的这位贴身仆人随叫随到，穿衣穿鞋都给{user}照顾得无微不至。这个贴身仆人还每天扛着沉重的琴，出门带路，带{user}去琴校上课。到了琴校，{user}跟随老师练琴，他就在旁边坐好旁听。',
            priority: 5,
            trigger_conditions: { age_range: [5, 23], required_tags: ['贴身仆人', '三味弦', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['能干的仆人'],
            remove_tags: ['贴身仆人']
        }
            ]
        },
        'dbrs_1116': {
            title: '三味弦天赋',
            description: '{user}很有天分，而且很刻苦。{user}在{age}岁的时候，就已经达到三味弦八级。',
            priority: 5,
            trigger_conditions: { age_range: [5, 23], required_tags: ['三味弦', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1120': {
            title: '出色的=NAME=',
            description: '{user}在琴校上课时，经常被老师点名，让{user}与其合奏一曲。这时，其他学生只能自己练习，他们对老师的偏心稍有微词，但不敢说，因为{user}是老师的得意门徒。',
            priority: 5,
            trigger_conditions: { age_range: [5, 23], required_tags: ['三味弦', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1122': {
            title: '奇怪的声音',
            description: '不知从何时起，每到夜深人静的时候，{user}就会隐约听到三味弦的声音，风雨不改。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [15, 25], required_tags: ['能干的仆人', '三味弦', '女性'] },
            options: [
        {
            text: '调查',
            result: '不知从何时起，每到夜深人静的时候，{user}就会隐约听到三味弦的声音，{user}起初没在意，但是这个声音无论刮风下雨，甚至是在冬天的大雪天气，都不会停歇，{user}好奇是什么人在弹琴。有一个晚上，下着小雪，{user}又听到了这个琴声，这次他决定一查究竟。他悄悄地打开门，朝着声音的方向小声地问：“是谁在弹琴？”'
        },
        {
            text: '不理睬',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '乐器': {
        events: {
        'dbrs_718': {
            title: '搞乐器',
            description: '{user}最会玩的乐器是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['乐器'] },
            options: [
        {
            text: '钢琴',
            result: '你做出了选择。',
            add_tags: ['钢琴']
        },
        {
            text: '架子鼓',
            result: '你做出了选择。',
            add_tags: ['架子鼓']
        },
        {
            text: '口哨',
            result: '你做出了选择。',
            add_tags: ['口哨手'],
            remove_tags: ['吹口哨高手']
        }
            ]
        },
        'dbrs_759': {
            title: '口哨手',
            description: '{user}口哨技术高超，而且懂音乐。他决定___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['吹口哨高手', '乐器'] },
            options: [
        {
            text: '当一名口哨音乐家',
            result: '你做出了选择。',
            add_tags: ['口哨手'],
            remove_tags: ['乐器']
        },
        {
            text: '别逗了',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '健身操': {
        events: {
        'dbrs_1494': {
            title: '健身操舞者',
            description: '{user}是一名健身操舞者，他___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['健身操', '舞蹈'] },
            options: [
        {
            text: '跟随电视健身操练舞',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '买健身操专业的书籍练舞',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '自个儿研究健身操身法',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        }
        }
    },
    '口哨手': {
        events: {
        'dbrs_761': {
            title: '交响乐晚会',
            description: '一著名的乐队要演出一场大型交响乐晚会，当晚，乐队中一名萧笛手发生了车祸，缺席了。乐队经理在网上招聘临时萧笛手。',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['口哨手'] },
            options: [
        {
            text: '我会口哨，应聘！',
            result: '一著名的乐队要演出一场大型交响乐晚会，当晚，乐队中一名萧笛手发生了车祸，缺席了。乐队经理通过互联网找到了会吹口哨的{user}顶替。最后晚会非常成功，{user}的口哨声完美模拟了萧的音色。因为太过出色，{user}在观众的强烈要求之下，还独奏了一段口哨表演。',
            add_tags: ['音乐能力']
        },
        {
            text: '没有兴趣',
            result: '一著名的乐队要演出一场大型交响乐晚会，当晚，乐队中一名萧笛手发生了车祸，缺席了。乐队经理在网上招聘临时萧笛手。{user}对此没有兴趣。'
        }
            ]
        },
        'dbrs_760': {
            title: '电热壶广告',
            description: '一个电热壶品牌找到{user}，要求{user}在他们的电热壶广告上吹口哨。广告是电热壶加热的水沸腾后，{user}要用最大的声音去吹口哨。',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['口哨手'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        },
        'dbrs_1303': {
            title: '个人口哨演唱会',
            description: '{user}在校园祭中开了一场个人口哨演唱会，现场座无虚席，非常火爆。中途还飞来几十只鸟来为{user}打CALL。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['口哨手'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['音乐能力', '校园祭']
        }
            ]
        },
        'dbrs_1331': {
            title: '小猪学口哨',
            description: '{user}是一名专业口哨手。有一天有一只粉红色的小猪来找到{user}，这只小猪有一个梦想就是学会口哨，它想让{user}教他吹口哨。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['口哨手'] },
            options: [
        {
            text: '答应',
            result: '{user}是一名专业口哨手。有一天有一只粉红色的小猪来找到{user}，这只小猪有一个梦想就是学会口哨，它想让{user}教他吹口哨。{user}答应了。'
        },
        {
            text: '拒绝',
            result: '{user}是一名专业口哨手。有一天有一只粉红色的小猪来找到{user}，这只小猪有一个梦想就是学会口哨，它想让{user}教他吹口哨。{user}拒绝了它。'
        },
        {
            text: '嘲笑他',
            result: '{user}是一名专业口哨手。有一天有一只粉红色的小猪来找到{user}，这只小猪有一个梦想就是学会口哨，它想让{user}教他吹口哨。{user}拒绝了它，并嘲笑它“长得像个哨子却不会吹口哨”。'
        }
            ]
        }
        }
    },
    '吹口哨高手': {
        events: {
        'dbrs_757': {
            title: '口哨爱好者',
            description: '{user}是个口哨爱好者，他经常___。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['吹口哨高手'] },
            options: [
        {
            text: '在公交车上吹',
            result: '你做出了选择。'
        },
        {
            text: '通宵吹口哨',
            result: '你做出了选择。',
            add_tags: ['多病']
        },
        {
            text: '对着路人吹',
            result: '{user}经常对着路人吹口哨。常在河边走，哪有不湿鞋。终于有一次{user}的嘴巴被路人打成了重伤，再也吹不了口哨。',
            remove_tags: ['吹口哨高手']
        }
            ]
        },
        'dbrs_759': {
            title: '口哨手',
            description: '{user}口哨技术高超，而且懂音乐。他决定___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['吹口哨高手', '乐器'] },
            options: [
        {
            text: '当一名口哨音乐家',
            result: '你做出了选择。',
            add_tags: ['口哨手'],
            remove_tags: ['乐器']
        },
        {
            text: '别逗了',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_758': {
            title: '口哨歌',
            description: '{user}是个口哨爱好者，他经常吹___的曲子。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['吹口哨高手'] },
            options: [
        {
            text: '黑色星期五',
            result: '{user}是个口哨爱好者，他经常吹的曲子是黑色星期五。他一边吹一边在思考人类的存在究竟有什么意义，他没找出究竟有什么意义。渐渐的{user}变得越来越忧郁，不久后就自杀了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=是个口哨爱好者，他经常吹的曲子是黑色星期五。他一边吹一边在思考人类的存在究竟有什么意义，他没找出究竟有什么意义。渐渐的=NAME=变得越来越忧郁，不久后就自杀了。'
        },
        {
            text: 'vitas',
            result: '{user}是个口哨爱好者，他经常吹vitas的曲子。有一次吹到一段超高音，{user}太过激动，吹出了一口老血后，{user}摊在地上，与世长辞。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: 'myLittleAirport',
            result: '{user}是个口哨爱好者，他经常吹myLittleAirport的曲子。他喜欢逗乐的节奏。'
        },
        {
            text: '背多分',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '唱歌模块': {
        events: {
        'dbrs_1336': {
            title: '出名的傀儡',
            description: '{user}的《Melt》、《卑怯戦隊うろたんだー》、《世界第一公主殿下》、《最初的声音》、《恋爱中的{user}》陆续在网络中流行。{user}的开发者从中获得了巨大的利润，他们开始策划一系列有关{user}的周边和活动。而{user}虽然是演唱者，他也只是跟着程序和写好的歌词演唱，一直不懂歌词的意思，对{user}而言，他只是一个受人操控的傀儡。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['唱歌模块'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['出名的傀儡']
        }
            ]
        }
        }
    },
    '宅舞': {
        events: {
        'dbrs_1304': {
            title: '舞者=NAME=',
            description: '{user}是一名舞者，他穿着短裙丝袜，放着___的歌，在大街上跳宅舞。并录制放到网站上。',
            priority: 5,
            trigger_conditions: { age_range: [8, 120], required_tags: ['宅舞'] },
            options: [
        {
            text: '星间飞行',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '极乐净土',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '病名为爱',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '夏恋花火',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        },
        'dbrs_1305': {
            title: '宅舞演出',
            description: '在校园祭的体育馆里，{user}演出了一场宅舞。第一次在这么多观众中跳舞，{user}很紧张，有一些动作做得有点过了，走光了，现场观众都在呐喊：白色的，白色的，白色的……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['宅舞'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        },
        'dbrs_1498': {
            title: '跳宅舞',
            description: '{user}是一名宅舞舞者，他带着相机出门，选了一个风景不错的地方，拍起了宅舞视频，他跳的舞是《___》',
            priority: 5,
            trigger_conditions: { age_range: [8, 120], required_tags: ['宅舞', '舞蹈'] },
            options: [
        {
            text: '沙漠骆驼',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '爱情买卖',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '忐忑',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '星星点灯',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        }
        }
    },
    '宇宙最强DJ': {
        events: {
        'dbrs_887': {
            title: '个人主义后摇风格',
            description: '{user}的摇滚音乐，收到粉丝大量的好评。知名音乐人周懂评论：{user}的音乐或许已经引领了一个新的潮流。个人主义后摇风格。',
            priority: 5,
            trigger_conditions: { age_range: [20, 120], required_tags: ['宇宙最强DJ'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '尬舞': {
        events: {
        'dbrs_1497': {
            title: '尬舞训练',
            description: '{user}是一名跳尬舞的，他___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['尬舞', '舞蹈'] },
            options: [
        {
            text: '走上街头尬舞',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '在公共汽车上尬舞',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '在地铁上尬舞',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        }
        }
    },
    '广场舞': {
        events: {
        'dbrs_1493': {
            title: '练舞',
            description: '每到傍晚时分，{user}都会走去一个广场，和一帮师奶一起练广场舞。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['广场舞', '舞蹈'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        }
        }
    },
    '架子鼓': {
        events: {
        'dbrs_719': {
            title: '鼓手',
            description: '{user}是一名鼓手，他主要钻研___风格。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['架子鼓'] },
            options: [
        {
            text: '爵士',
            result: '你做出了选择。'
        },
        {
            text: '摇滚',
            result: '你做出了选择。'
        },
        {
            text: '申国',
            result: '你做出了选择。'
        },
        {
            text: '慢摇',
            result: '你做出了选择。'
        },
        {
            text: '乡村',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_765': {
            title: '告白',
            description: '会玩音乐的人比较受欢迎，{user}在练鼓的时候，有一个人跑进来向他求爱。',
            priority: 5,
            trigger_conditions: { age_range: [5, 25], required_tags: ['架子鼓'] },
            options: [
        {
            text: '用鼓棒敲走他',
            result: '会玩音乐的人比较受欢迎，{user}在学校厕所偷偷练鼓的时候，有一个人跑进来向他求爱。{user}被打扰了，恼火的他举起鼓棒就敲这个人。'
        },
        {
            text: '答应他',
            result: '会玩音乐的人比较受欢迎，就算{user}藏在学校厕所偷偷练鼓，都能找到一个对象。',
            add_tags: ['恋爱中']
        }
            ]
        },
        'dbrs_844': {
            title: '鼓手之路',
            description: '{user}梦想是成为一名鼓手，他首先___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['架子鼓'] },
            options: [
        {
            text: '染了一个炫酷的杀马特发型',
            result: '你做出了选择。',
            add_tags: ['杀马特']
        },
        {
            text: '去找了一个有名的架子鼓老师',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '爆裂鼓手': {
        events: {
        'dbrs_845': {
            title: '爆裂鼓手',
            description: '弗莱彻是{user}的架子鼓老师，他是个偏执狂。为了让{user}进步更快，弗莱彻老师每天都会毒打{user}。{user}在这种残暴的虐待式教育下，架子鼓技术越来越强。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爆裂鼓手'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['多病', '音乐能力']
        }
            ]
        }
        }
    },
    '能干的仆人': {
        events: {
        'dbrs_1122': {
            title: '奇怪的声音',
            description: '不知从何时起，每到夜深人静的时候，{user}就会隐约听到三味弦的声音，风雨不改。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [15, 25], required_tags: ['能干的仆人', '三味弦', '女性'] },
            options: [
        {
            text: '调查',
            result: '不知从何时起，每到夜深人静的时候，{user}就会隐约听到三味弦的声音，{user}起初没在意，但是这个声音无论刮风下雨，甚至是在冬天的大雪天气，都不会停歇，{user}好奇是什么人在弹琴。有一个晚上，下着小雪，{user}又听到了这个琴声，这次他决定一查究竟。他悄悄地打开门，朝着声音的方向小声地问：“是谁在弹琴？”'
        },
        {
            text: '不理睬',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '舞蹈': {
        events: {
        'dbrs_1493': {
            title: '练舞',
            description: '每到傍晚时分，{user}都会走去一个广场，和一帮师奶一起练广场舞。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['广场舞', '舞蹈'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        },
        'dbrs_1494': {
            title: '健身操舞者',
            description: '{user}是一名健身操舞者，他___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['健身操', '舞蹈'] },
            options: [
        {
            text: '跟随电视健身操练舞',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '买健身操专业的书籍练舞',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '自个儿研究健身操身法',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        },
        'dbrs_1495': {
            title: '街舞',
            description: '{user}是一名跳街舞的，他___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['街舞', '舞蹈'] },
            options: [
        {
            text: '练习托马斯踢腿',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '练习大风车',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '练习埃及手',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        },
        'dbrs_1496': {
            title: '芭蕾舞训练',
            description: '{user}是一名跳芭蕾舞的，他每天都要进行___练习',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['芭蕾舞', '舞蹈'] },
            options: [
        {
            text: '压腿、踢腿、下腰',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '把杆',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '脱把',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        },
        'dbrs_1497': {
            title: '尬舞训练',
            description: '{user}是一名跳尬舞的，他___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['尬舞', '舞蹈'] },
            options: [
        {
            text: '走上街头尬舞',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '在公共汽车上尬舞',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '在地铁上尬舞',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        },
        'dbrs_1498': {
            title: '跳宅舞',
            description: '{user}是一名宅舞舞者，他带着相机出门，选了一个风景不错的地方，拍起了宅舞视频，他跳的舞是《___》',
            priority: 5,
            trigger_conditions: { age_range: [8, 120], required_tags: ['宅舞', '舞蹈'] },
            options: [
        {
            text: '沙漠骆驼',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '爱情买卖',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '忐忑',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '星星点灯',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        }
        }
    },
    '芭蕾舞': {
        events: {
        'dbrs_1496': {
            title: '芭蕾舞训练',
            description: '{user}是一名跳芭蕾舞的，他每天都要进行___练习',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['芭蕾舞', '舞蹈'] },
            options: [
        {
            text: '压腿、踢腿、下腰',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '把杆',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '脱把',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        }
        }
    },
    '街舞': {
        events: {
        'dbrs_1495': {
            title: '街舞',
            description: '{user}是一名跳街舞的，他___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['街舞', '舞蹈'] },
            options: [
        {
            text: '练习托马斯踢腿',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '练习大风车',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '练习埃及手',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        }
        }
    },
    '贴身仆人': {
        events: {
        'dbrs_1119': {
            title: '能干的仆人',
            description: '​{user}的这位贴身仆人随叫随到，穿衣穿鞋都给{user}照顾得无微不至。这个贴身仆人还每天扛着沉重的琴，出门带路，带{user}去琴校上课。到了琴校，{user}跟随老师练琴，他就在旁边坐好旁听。',
            priority: 5,
            trigger_conditions: { age_range: [5, 23], required_tags: ['贴身仆人', '三味弦', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['能干的仆人'],
            remove_tags: ['贴身仆人']
        }
            ]
        }
        }
    },
    '轻音部': {
        events: {
        'dbrs_1197': {
            title: '校园祭:演唱会',
            description: '{user}与轻音部的团友们在校园祭的歌唱舞台中演唱了一首《硬邦邦的时间》。现场座无虚席，热闹非凡。这首歌从此成为了校园流行曲。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['轻音部'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        },
        'dbrs_1237': {
            title: '轻音部',
            description: '{user}每天放学，就到轻音部喝茶，吃点心，与社员百合。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['轻音部', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1236': {
            title: '轻音部',
            description: '{user}加入轻音部后，发现社员都是萌萌的女生。每天的社团活动就是喝茶吃点心聊天搞百合。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['轻音部', '男性'] },
            options: [
        {
            text: '还是退部吧',
            result: '你做出了选择。',
            remove_tags: ['轻音部']
        },
        {
            text: '加入其中',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1239': {
            title: '轻音部:创作歌曲',
            description: '在轻音部中，{user}与社员们创作了一首《___》',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['轻音部', '女性'] },
            options: [
        {
            text: '给我一双烤翅',
            result: '你做出了选择。'
        },
        {
            text: '我的恋爱是文字夹',
            result: '你做出了选择。'
        },
        {
            text: '硬邦邦的时间',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1238': {
            title: '轻音部：音乐训练',
            description: '{user}在轻音部中，边吃甜品，边___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['轻音部', '女性'] },
            options: [
        {
            text: '聊天',
            result: '你做出了选择。'
        },
        {
            text: '做手指柔韧性练习',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '深呼吸练习肺活量',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '喝茶',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1240': {
            title: '轻音部：创作',
            description: '在轻音部中，{user}与社员们创作了一首《___》',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['轻音部', '女性'] },
            options: [
        {
            text: '咖哩之后是阿三',
            result: '你做出了选择。'
        },
        {
            text: '毛笔与鼻毛',
            result: '你做出了选择。'
        },
        {
            text: 'Dont say lazy',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1241': {
            title: '轻音部：创作',
            description: '在轻音部中，{user}与社员们创作了一首《___》',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['轻音部', '女性'] },
            options: [
        {
            text: 'Listen',
            result: '你做出了选择。'
        },
        {
            text: 'NO Thank You!',
            result: '你做出了选择。'
        },
        {
            text: '我和你',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '音乐': {
        events: {
        'dbrs_24': {
            title: '课堂:算术课',
            description: '{user}在算术课上音乐细胞发作，开始___',
            priority: 5,
            trigger_conditions: { age_range: [4, 10], required_tags: ['音乐'] },
            options: [
        {
            text: '唱圆周率之歌',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '用算盘弹奏卡农',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        },
        {
            text: '跟上老师的节奏跺脚',
            result: '你做出了选择。',
            add_tags: ['音乐能力']
        }
            ]
        },
        'dbrs_723': {
            title: '申国比惨王',
            description: '《申国比惨王》，是一场大型励志专业音乐与身世评论节目。只要有梦想的人，都可以上台歌唱。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [25, 120], required_tags: ['音乐'] },
            options: [
        {
            text: '参加！',
            result: '《申国比惨王》，是一场大型励志专业音乐与身世评论节目。只要有梦想的人，都可以上台歌唱。{user}报名参加了。'
        },
        {
            text: '不感兴趣',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_717': {
            title: '音乐天赋',
            description: '{user}很喜欢搞音乐，他的目标是___',
            priority: 5,
            trigger_conditions: { age_range: [2000, 2000], required_tags: ['音乐'] },
            options: [
        {
            text: '当一名歌手',
            result: '你做出了选择。',
            add_tags: ['歌手']
        },
        {
            text: '当一名舞者',
            result: '你做出了选择。',
            add_tags: ['舞蹈']
        },
        {
            text: '喜欢鼓捣乐器',
            result: '{user}很喜欢鼓捣乐器',
            add_tags: ['乐器']
        },
        {
            text: '成为MC石头',
            result: '{user}想成为申国最好的MC，他给自己起名为{user}MC石头。还专门注册了一个扣扣号。',
            add_tags: ['MC石头']
        },
        {
            text: '吹口哨',
            result: '你做出了选择。',
            add_tags: ['口哨手'],
            remove_tags: ['吹口哨高手']
        }
            ]
        },
        'dbrs_811': {
            title: '音乐鉴赏',
            description: '申国国家电视台13频道播放的动物世界，主题曲名字叫《___》',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['音乐'] },
            options: [
        {
            text: 'Animal is our friend',
            result: '{user}喜欢音乐，但对音乐不太了解。'
        },
        {
            text: 'Just blue',
            result: '{user}非常了解音乐，音乐界有关的大小事件，他都知道。',
            add_tags: ['音乐能力']
        },
        {
            text: 'Battle Finale',
            result: '{user}喜欢音乐，但对音乐不太了解。'
        },
        {
            text: 'Animal World',
            result: '{user}喜欢音乐，但对音乐不太了解。'
        }
            ]
        },
        'dbrs_1490': {
            title: '女生搭话',
            description: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [15, 50], required_tags: ['音乐', '男性'] },
            options: [
        {
            text: '演唱《掀起你的盖头来》',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}清唱了一首民谣《掀起你的盖头来》。唱完，这位女生礼貌性地鼓掌，然后就走了。',
            add_tags: ['音乐能力']
        },
        {
            text: '演唱《燃烧你的维生素C》',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}清唱了一首流行曲《燃烧你的维生素C》。唱完，这位女生被{user}的才华感动，激动地拍手。',
            add_tags: ['音乐能力']
        },
        {
            text: '表演街舞《第五元素》',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}拿出随身音箱放在地上，播放《第五元素》，然后在原地跳起了街舞。弹跳倒立，抓地踢腿，好不潇洒。女生非常高兴，笑着边拍手边跨{user}牛逼。',
            add_tags: ['音乐能力']
        },
        {
            text: '表演街舞《最炫民族风》',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}拿出随身音箱放在地上，调到最大声播放《最炫民族风》，然后在原地跳起了街舞。没跳多久，{user}发现女生已经走远了……',
            add_tags: ['音乐能力']
        },
        {
            text: '留QQ号',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}拿出纸笔，写下了一个QQ号，跟女生说：“记住我的唯一扣扣号，精彩喊麦，全在这里。”'
        },
        {
            text: '现场跳健身操',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}脱下裤子，露出高叉的内裤，开始跳起了健身操。这个女生被{user}变态的举动吓跑了。',
            add_tags: ['音乐能力']
        },
        {
            text: '弹奏《夜的钢琴曲》',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}拿出随身电子琴，给这个女生表演了一曲《夜的钢琴曲》。女生被成功催眠，{user}趁机逃跑。',
            add_tags: ['音乐能力']
        },
        {
            text: '弹奏《献给爱丽丝》',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}拿出随身电子琴，给这个女生表演了一曲《献给爱丽丝》。女生被感动得悄然泪下。',
            add_tags: ['音乐能力']
        },
        {
            text: '演奏《Snare Lifeoff》',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}只能拿出随身的架子鼓，现场演奏了一曲《Snare Lifeoff》。曲毕，女生礼貌性地鼓掌，然后走了。',
            add_tags: ['音乐能力']
        },
        {
            text: '表演说唱《被唐伯虎迫害的日子》',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}只能拿出一双筷子、几个杯子代替架子鼓，开始表演说唱《被唐伯虎迫害的日子》。这位女生被{user}的演出逗得哈哈大笑，拍手叫好。',
            add_tags: ['音乐能力']
        },
        {
            text: '口哨吹《命中注定》',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}用口哨吹了一首《命中注定》。这位女生似乎被{user}的口哨深深地打动了，一个劲地鼓掌。',
            add_tags: ['音乐能力']
        },
        {
            text: '口哨吹《地藏王菩薩超度心咒》',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}用口哨吹了一首《地藏王菩薩超度心咒》。这位女生捂着耳朵逃跑了……',
            add_tags: ['音乐能力']
        },
        {
            text: '拒绝表演',
            result: '有一天，有一位女生羞答答地找{user}搭话，让懂音乐的{user}给他表演一个节目。{user}拒绝了这个要求。'
        }
            ]
        },
        'dbrs_1492': {
            title: '男生搭话',
            description: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [15, 50], required_tags: ['音乐', '女性'] },
            options: [
        {
            text: '演唱《掀起你的盖头来》',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}清唱了一首民谣《掀起你的盖头来》。唱完，这位男生礼貌性地鼓掌，然后就走了。',
            add_tags: ['音乐能力']
        },
        {
            text: '演唱《燃烧你的维生素C》',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}清唱了一首流行曲《燃烧你的维生素C》。唱完，这位男生被{user}的才华感动，激动地拍手。',
            add_tags: ['音乐能力']
        },
        {
            text: '表演街舞《第五元素》',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}拿出随身音箱放在地上，播放《第五元素》，然后在原地跳起了街舞。弹跳倒立，抓地踢腿，好不潇洒。这位男生看呆了，似乎被{user}的帅气震撼到。',
            add_tags: ['音乐能力']
        },
        {
            text: '表演街舞《最炫民族风》',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}拿出随身音箱放在地上，调到最大声播放《最炫民族风》，然后在原地跳起了街舞。没跳多久，{user}发现男生已经走远了……',
            add_tags: ['音乐能力']
        },
        {
            text: '留QQ号',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}拿出纸笔，写下了一个QQ号，跟男生说：“记住我的唯一扣扣号，精彩摇滚，全在这里。”'
        },
        {
            text: '弹奏《夜的钢琴曲》',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}拿出随身电子琴，给这个男生表演了一曲《夜的钢琴曲》。这个男生被成功催眠，{user}趁机逃跑。',
            add_tags: ['音乐能力']
        },
        {
            text: '弹奏《献给爱丽丝》',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}拿出随身电子琴，给这个男生表演了一曲《献给爱丽丝》。男生被感动得悄然泪下。',
            add_tags: ['音乐能力']
        },
        {
            text: '演奏《Snare Lifeoff》',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}只能拿出随身的架子鼓，现场演奏了一曲《Snare Lifeoff》。曲毕，男生大声叫好。',
            add_tags: ['音乐能力']
        },
        {
            text: '表演说唱《被唐伯虎迫害的日子》',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}只能拿出一双筷子、几个杯子代替架子鼓，开始表演说唱《被唐伯虎迫害的日子》。这位男生被{user}的演出逗得哈哈大笑，拍手叫好。',
            add_tags: ['音乐能力']
        },
        {
            text: '口哨吹《命中注定》',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}用口哨吹了一首《命中注定》。这位男生似乎被{user}的口哨深深地打动了，一个劲地鼓掌。',
            add_tags: ['音乐能力']
        },
        {
            text: '口哨吹《地藏王菩薩超度心咒》',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}用口哨吹了一首《地藏王菩薩超度心咒》。这位男生捂着耳朵逃跑了……',
            add_tags: ['音乐能力']
        },
        {
            text: '拒绝表演',
            result: '有一天，有一位男生勇敢地找{user}搭话，说非常欣赏懂音乐的女生，让懂音乐的{user}给他表演一个节目。{user}拒绝了这个要求。'
        }
            ]
        }
        }
    },
};