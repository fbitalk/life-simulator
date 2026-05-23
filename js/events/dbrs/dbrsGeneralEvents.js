// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 全年龄段通用事件（无触发标签）
// 事件数: 810
import { registerTags } from '../../data/tagRegistry.js';

registerTags({
    'dbrs通用': { color: 'normal' },
});

// 本文件涉及的标签注册
registerTags({
    '口臭': { color: 'red' },
    '多病': { color: 'red' },
    '孤儿': { color: 'red' },
    '洞察': { color: 'purple' },
    '玻璃心': { color: 'red' },
    '癌症': { color: 'red' },
    '肥胖': { color: 'red' },
    '贫穷': { color: 'red' },
    '高情商': { color: 'pink' },
});

export const dbrsGeneralEvents = {
    'dbrs通用': {
        events: {
        'dbrs_11': {
            title: '玩耍迷',
            description: '{user}{age}岁的时候非常好动，经常___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '用口水在其他人背部涂鸦',
            result: '你做出了选择。',
            add_tags: ['画画'],
            remove_tags: ['玩耍迷']
        },
        {
            text: '乱打电话',
            result: '你做出了选择。',
            add_tags: ['勇敢'],
            remove_tags: ['玩耍迷']
        },
        {
            text: '爬树抓鸟',
            result: '{user}小时候就喜欢爬树抓鸟。俗话说常在河边走，哪有不湿脚。{user}在一次爬树偷鸟蛋中，被一只巨型野生狮鹫抓住，{user}被撕成了碎片。',
            add_tags: ['死亡'],
            remove_tags: ['玩耍迷'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '跟脑子里的另外一个人捉迷藏',
            result: '你做出了选择。',
            add_tags: ['脑洞'],
            remove_tags: ['玩耍迷']
        },
        {
            text: '跟自己赛跑',
            result: '你做出了选择。',
            add_tags: ['好胜'],
            remove_tags: ['玩耍迷']
        },
        {
            text: '闯入别人家',
            result: '你做出了选择。',
            add_tags: ['勇敢'],
            remove_tags: ['玩耍迷']
        },
        {
            text: '在阳台用积木丢过往的行人',
            result: '你做出了选择。',
            add_tags: ['洞察'],
            remove_tags: ['玩耍迷']
        },
        {
            text: '开演唱会',
            result: '你做出了选择。',
            add_tags: ['音乐', '音乐能力'],
            remove_tags: ['玩耍迷']
        },
        {
            text: '玩昆特牌',
            result: '你做出了选择。',
            add_tags: ['逻辑'],
            remove_tags: ['玩耍迷']
        },
        {
            text: '骑共享单车',
            result: '你做出了选择。',
            remove_tags: ['玩耍迷']
        },
        {
            text: '玩火',
            result: '{user}{age}岁的时候非常好动，经常喷火玩。俗话说得好，玩火者必自焚。{user}有一次在家里喷火煲蜡时发生意外，高温火焰引燃了窗帘，造成火灾，{user}在吸入大量浓烟后中毒死亡。',
            add_tags: ['死亡'],
            remove_tags: ['玩耍迷'],
            death_flag: true,
            death_reason: '=NAME==AGE=岁的时候非常好动，经常喷火玩。俗话说得好，玩火者必自焚。=NAME=有一次在家里喷火煲蜡时发生意外，高温火焰引燃了窗帘，造成火灾，=NAME=在吸入大量浓烟后中毒死亡。'
        },
        {
            text: '造雪人',
            result: '{user}{age}岁的时候非常好动，他用自己的魔法制造雪人玩。',
            remove_tags: ['玩耍迷']
        },
        {
            text: '玩火',
            result: '{user}{age}岁的时候非常好动，他用自己的能力喷火玩，到处放火。',
            remove_tags: ['玩耍迷']
        },
        {
            text: '做小偷',
            result: '{user}{age}岁的时候，凭借着他的个人能力，他成为了一名小偷。',
            add_tags: ['小偷'],
            remove_tags: ['玩耍迷']
        }
            ]
        },
        'dbrs_12': {
            title: '玩具迷',
            description: '{user} 最喜欢的玩具是___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '十万片的拼图',
            result: '你做出了选择。',
            add_tags: ['记忆'],
            remove_tags: ['玩具迷']
        },
        {
            text: '四驱车',
            result: '你做出了选择。',
            add_tags: ['好胜'],
            remove_tags: ['玩具迷']
        },
        {
            text: '吸氧羊',
            result: '你做出了选择。',
            add_tags: ['吸氧羊'],
            remove_tags: ['玩具迷']
        },
        {
            text: '彩虹小马',
            result: '你做出了选择。',
            add_tags: ['小马'],
            remove_tags: ['玩具迷']
        },
        {
            text: '超人变身器',
            result: '你做出了选择。',
            add_tags: ['中二病'],
            remove_tags: ['玩具迷']
        },
        {
            text: '烟花炮竹',
            result: '{user}很喜欢放烟花，喜欢看爆炸的破坏力。有一次他把烟花插进屁股缝里点燃，烟花直接在屁股里爆炸，{user}就这样失去了年轻的生命。',
            add_tags: ['死亡'],
            remove_tags: ['玩具迷'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '电子琴',
            result: '你做出了选择。',
            add_tags: ['音乐', '音乐能力'],
            remove_tags: ['玩具迷']
        },
        {
            text: 'NS的LABO',
            result: '你做出了选择。'
        },
        {
            text: '芭比娃娃',
            result: '你做出了选择。'
        },
        {
            text: '逻辑电路',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_10': {
            title: '电视迷',
            description: '打开电视，{user}最喜欢看《___》了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '走进科学',
            result: '你做出了选择。',
            add_tags: ['好奇'],
            remove_tags: ['电视迷']
        },
        {
            text: '钢笔画技法',
            result: '你做出了选择。',
            add_tags: ['画画', '画图能力'],
            remove_tags: ['电视迷']
        },
        {
            text: '吸氧羊',
            result: '你做出了选择。',
            add_tags: ['吸氧羊'],
            remove_tags: ['电视迷']
        },
        {
            text: '神探夏洛克',
            result: '你做出了选择。',
            add_tags: ['逻辑'],
            remove_tags: ['电视迷']
        },
        {
            text: '全民健身操',
            result: '你做出了选择。',
            add_tags: ['强壮'],
            remove_tags: ['电视迷']
        },
        {
            text: '彩虹小马',
            result: '你做出了选择。',
            add_tags: ['小马'],
            remove_tags: ['电视迷']
        },
        {
            text: '申国比惨王',
            result: '你做出了选择。',
            add_tags: ['好胜'],
            remove_tags: ['电视迷']
        },
        {
            text: '天线得得比',
            result: '你做出了选择。',
            add_tags: ['高情商'],
            remove_tags: ['电视迷']
        },
        {
            text: '行尸走肉',
            result: '你做出了选择。',
            add_tags: ['好奇']
        }
            ]
        },
        'dbrs_689': {
            title: '王的男人',
            description: '{user}听说在监狱中有一个人叫‘王的男人’，这人是监狱的头头。{user}有一次在澡堂遇到这个王的男人站到他面前，向他扔出了一块肥皂，想让{user}帮其捡起。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '微笑着捡起 ',
            result: '{user}听说在监狱中有一个人叫‘王的男人’，这人是监狱的头头。{user}有一次在澡堂遇到这个王的男人站到他面前，向他扔出了一块肥皂，想让{user}帮其捡起。{user}微笑地捡起肥皂，并与这位王的男人相处得很愉快'
        },
        {
            text: '飞起一脚踹飞肥皂',
            result: '{user}听说在监狱中有一个人叫‘王的男人’，这人是监狱的头头。{user}有一次在澡堂遇到这个王的男人站到他面前，向他扔出了一块肥皂，想让{user}帮其捡起。{user}飞起一脚踹飞了肥皂。然而，捡肥皂似乎是一种神圣的仪式，{user}不尊敬的行为让这位王的男人非常生气。王的男人愤怒地抓起{user}进行凌迟，王的男人非常有力量，{user}根本反抗不了，被凌迟到死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '用深情的眼神望着他',
            result: '{user}听说在监狱中有一个人叫‘王的男人’，这人是监狱的头头。{user}有一次在澡堂遇到这个王的男人站到他面前，向他扔出了一块肥皂，想让{user}帮其捡起。{user}用深情的眼神望着他，并与这位王的男人相处得很愉快。'
        },
        {
            text: '无视',
            result: '{user}听说在监狱中有一个人叫‘王的男人’，这人是监狱的头头。{user}有一次在澡堂遇到这个王的男人站到他面前，向他扔出了一块肥皂，想让{user}帮其捡起。{user}经常看到网上的肥皂惨案，也深知王的男人的属性，于是选择面朝王的男人保护好自己的菊花，小心翼翼地洗完了澡。',
            death_flag: true,
            death_reason: '=NAME=听说在监狱中有一个人叫‘王的男人’，这人是监狱的头头。=NAME=有一次在澡堂遇到这个王的男人站到他面前，向他扔出了一块肥皂，想让=NAME=帮其捡起。=NAME=经常看到网上的肥皂惨案，也深知王的男人的属性，于是选择面朝王的男人保护好自己的菊花，小心翼翼地洗完了澡。'
        },
        {
            text: '呼叫狱警',
            result: '{user}听说在监狱中有一个人叫‘王的男人’，这人是监狱的头头。{user}有一次在澡堂遇到这个王的男人站到他面前，向他扔出了一块肥皂，想让{user}帮其捡起。{user}想起了那些变态的故事情节，吓得魂不守舍，马上喊来了狱警，结果发现狱警也直勾勾地望着自己的身体，于是以光速逃离了澡堂。'
        }
            ]
        },
        'dbrs_45': {
            title: '从不迟到',
            description: '{user}上学有直升机专机接送上下学，所以上学从未迟到过。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['学习成绩', '直升机出行']
        }
            ]
        },
        'dbrs_48': {
            title: '委托：找小狗',
            description: '{user}接到110报警中心的指派，去帮助一位小朋友找他的小狗。{user}去到现场一看，这个熊孩子正在跟他的小狗玩得火热……{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '报假警，抓起来',
            result: '有一个熊孩子乱报警，害{user}白走一趟，{user}一怒之下，把熊孩子铐起来了，扭送到了派出所'
        },
        {
            text: '拿起他的狗丢掉',
            result: '{user}接到110报警中心的指派，去帮助一位小朋友找他的小狗。{user}去到现场一看，这个熊孩子正在跟他的小狗玩得火热。{user}怒火中烧，抓起熊孩子的小狗，使出吃奶的力，丢向了天际。然后{user}露出一个人民好警察的慈祥笑容摸摸熊孩子的头问：“小盆友，听说你小狗狗不见了？别哭警察叔叔帮你找。”'
        },
        {
            text: '把熊孩子铐起来，直接扭送精神病院',
            result: '{user}接到110报警中心的指派，去帮助一位小朋友找他的小狗。{user}去到现场一看，这个熊孩子正在跟他的小狗玩得火热……{user}走上前，二话不说把熊孩子烤了起来，丢在了精神病院门口就离开了。'
        },
        {
            text: '开心',
            result: '{user}最喜欢遇到报假警的了，因为这样，他就可以在外面溜达一天不干活。'
        }
            ]
        },
        'dbrs_50': {
            title: '车祸',
            description: '{user} 在高速公路上遭遇了车祸。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '当时正在睡觉',
            result: '{user}在高速公路上遇上车祸了，正在熟睡的{user}毫无预兆，被抛出了车外。{user}的尸体在车祸外500米处被找到。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '是司机',
            result: '{user}驾驶的汽车在高速公路上遇上车祸了，安全气囊救了{user}一命。',
            add_tags: ['车祸阴影=HIDDEN=']
        },
        {
            text: '当时在听MP3',
            result: '{user} 在高速公路遇上车祸了，车祸瞬间，{user}护住自己的耳机，自己跌成了重伤。{user}被送去医院。',
            effects: { health: -25 },
            add_tags: ['车祸阴影=HIDDEN=']
        },
        {
            text: '当时在看窗外。',
            result: '{user}在高速公路上遇上车祸了，{user}及时从车窗跳了出去，毫发无伤。',
            add_tags: ['车祸阴影=HIDDEN=']
        },
        {
            text: '当时在吃东西',
            result: '{user}在高速公路上遇上了车祸，他当时正在喝水，矿泉水瓶插进了{user}的喉咙……{user}痛苦地死去了。可喜可贺、安全驾驶、人人有责。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1625': {
            title: '量子速读班：读书比赛',
            description: '速读班举办了一场读书竞速比赛，所有人都要参与。{user}在和其他同学一起翻书，一个比一个翻得恨。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_58': {
            title: '手机',
            description: '{user} 有空的时候，经常用他的手机___',
            priority: 1,
            trigger_conditions: { age_range: [7, 120] },
            options: [
        {
            text: '看爽文',
            result: '你做出了选择。',
            add_tags: ['爽文上瘾']
        },
        {
            text: '看玛丽苏文',
            result: '你做出了选择。',
            add_tags: ['玛丽苏']
        },
        {
            text: '上某宝',
            result: '你做出了选择。',
            add_tags: ['某宝']
        },
        {
            text: '上AB站',
            result: '你做出了选择。',
            add_tags: ['AB站会员']
        },
        {
            text: '摇一摇',
            result: '你做出了选择。',
            add_tags: ['交网友']
        },
        {
            text: '调振动塞进菊花里',
            result: '你做出了选择。',
            add_tags: ['菊花残']
        },
        {
            text: '上贴吧',
            result: '你做出了选择。',
            add_tags: ['喷子']
        },
        {
            text: '查阅学习资料',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        },
        {
            text: '看短视频',
            result: '你做出了选择。'
        },
        {
            text: '看直播',
            result: '{user}经常用他的手机看直播，花钱给主播刷礼物。',
            effects: { money: -3 }
        }
            ]
        },
        'dbrs_62': {
            title: '贴身保护',
            description: '{user}负责保护一位首富的千金，为了安全起见，{user}必须做到寸步不离，即使是上厕所，洗澡，{user}也要站在旁边。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120], required_tags: ['男性'] },
            options: [
        {
            text: '瞄一眼正在洗澡的首富的千金',
            result: '{user}在保护一位首富的千金洗澡的时候，裤子不知不觉湿了。'
        },
        {
            text: '瞄一眼正在上厕所的首富的千金',
            result: '{user}在贴身保护一位首富的千金，{user}目睹了这位千金一边上厕所一边发朋友圈'
        },
        {
            text: '保持45度仰望天空',
            result: '{user}在贴身保护一位首富的千金，尽管这位千金在{user}面前洗澡，上厕所。{user}都不为所动。站如松,坐如钟。'
        },
        {
            text: '无聊，拿出手机玩',
            result: '{user}在一次保镖任务中，玩起了手机。这件事被老板发现了，炒了{user}鱿鱼。'
        }
            ]
        },
        'dbrs_63': {
            title: '贴身保护',
            description: '{user}负责保护一位英俊的某国的王子，为了安全起见，{user}必须做到寸步不离，即使是上厕所，洗澡，{user}也要站在旁边。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120], required_tags: ['女性'] },
            options: [
        {
            text: '偷瞄一眼正在上厕所的王子',
            result: '{user}在一次保镖任务中，保护某国的一位王子。在王子上厕所的时候，{user}偷瞄了一眼，王子拉的屎好健康，土黄土黄的，好像宝宝拉的屎一样。'
        },
        {
            text: '偷瞄一眼正在洗澡的王子',
            result: '{user}在一次保镖任务中，保护某国的一位王子。在王子洗澡的时候，{user}偷瞄了一眼，发现他有人鱼线和16块腹肌。{user}吓出了一身冷汗。'
        },
        {
            text: '保持45度仰望天空',
            result: '{user}在一次保镖任务中，保护一位某国的王子。{user}跟随着王子，在脑中脑补和王子的浪漫，脸红心跳。'
        }
            ]
        },
        'dbrs_61': {
            title: '突发事件',
            description: '{user}负责保护一位外国大使出席活动。突然，{user}发现人群中有人不对劲，人群中有人掏出了抢！说时迟那时快，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '挡在大使的面前',
            result: '在一次保镖行动中，帮一位外国大使档了一枪，{user}殉职了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '拔腿就跑',
            result: '{user}在一次保镖行动中临阵脱逃，被老板炒鱿鱼了。'
        },
        {
            text: '向那个杀手跑去',
            result: '{user}在一次保镖行动中发现了杀手，{user}扑向那位杀手，双方展开了肉搏战，最后杀手被{user}制服，{user}立功了。'
        },
        {
            text: '掏出枪向杀手射击',
            result: '{user}在一次保镖行动中，突然向群众开枪……接着，{user}被拘捕了。'
        }
            ]
        },
        'dbrs_66': {
            title: '舞蹈',
            description: '{user} 热爱跳舞，他跳舞的类型是___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '广场舞',
            result: '你做出了选择。',
            add_tags: ['广场舞']
        },
        {
            text: '看电视健身操跳舞',
            result: '你做出了选择。',
            add_tags: ['健身操']
        },
        {
            text: '街舞',
            result: '你做出了选择。',
            add_tags: ['街舞']
        },
        {
            text: '芭蕾舞',
            result: '你做出了选择。',
            add_tags: ['芭蕾舞']
        },
        {
            text: '尬舞',
            result: '你做出了选择。',
            add_tags: ['尬舞']
        },
        {
            text: '宅舞',
            result: '你做出了选择。',
            add_tags: ['宅舞']
        }
            ]
        },
        'dbrs_77': {
            title: '快择',
            description: '同班的女生问{user}能不能去修一下她寝室里的电脑……',
            priority: 1,
            trigger_conditions: { age_range: [15, 120], required_tags: ['男性'] },
            options: [
        {
            text: '一口答应',
            result: '电脑修得好，单身lu到老。',
            add_tags: ['上门修电脑专家']
        },
        {
            text: '委婉拒绝',
            result: '{user}不喜欢无偿帮助别人，认为这是对自己的残忍。'
        },
        {
            text: '找一个会电脑的人帮这位女生',
            result: '我认识一个会修电脑的，又认识一个想找人修电脑的，我现在要做的是把他们2个联系起来，这个过程好有意思。',
            add_tags: ['高情商']
        }
            ]
        },
        'dbrs_75': {
            title: '零食',
            description: '{user} 最爱吃的零食是___',
            priority: 1,
            trigger_conditions: { age_range: [10, 35] },
            options: [
        {
            text: '辣条',
            result: '{user}喜欢无节制吃辣，所以他的菊花不久后就长出了痔疮。',
            add_tags: ['痔疮']
        },
        {
            text: '爆炸糖',
            result: '{user}吃到了一颗二氧化碳含量超标的爆炸糖，爆炸糖在{user}的口腔中，突然爆炸。{user}的头被爆炸冲击炸得血肉模……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '棉花糖',
            result: '你做出了选择。',
            add_tags: ['三多一小']
        },
        {
            text: '自己的臭脚',
            result: '{user}喜欢吃自己脚的死皮。',
            add_tags: ['口臭']
        },
        {
            text: '济公丹',
            result: '你做出了选择。',
            add_tags: ['最爱零食：济公丹']
        },
        {
            text: '大白兔糖',
            result: '你做出了选择。',
            add_tags: ['三多一小']
        },
        {
            text: '牛杂',
            result: '你做出了选择。',
            add_tags: ['最爱零食：牛杂']
        },
        {
            text: '三色冰淇淋',
            result: '你做出了选择。',
            add_tags: ['肥胖']
        },
        {
            text: '五仁月饼',
            result: '你做出了选择。',
            add_tags: ['口臭']
        },
        {
            text: '调味料',
            result: '你做出了选择。',
            add_tags: ['最爱零食：调味料']
        },
        {
            text: '暗物质',
            result: '你做出了选择。',
            add_tags: ['最爱零食：暗物质']
        },
        {
            text: ' 脑残炫彩牛肉面',
            result: '{user}很喜欢吃泡面，特别是某牌的脑残炫彩牛肉面。这种面又辣又酸，吃多了这种面，拉出来的屎都是炫彩的，菊花可承受不了这种美味，长出了痔疮。',
            add_tags: ['痔疮']
        },
        {
            text: ' 山椒',
            result: '{user}很喜欢吃山椒，他无节制地每天都吃一瓶500克装的山椒，终于有一天胃出血，送院抢救无效。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '荷兰水',
            result: '你做出了选择。'
        },
        {
            text: '美味风蛇',
            result: '你做出了选择。',
            add_tags: ['最爱零食：美味风蛇']
        },
        {
            text: '转基因薯片',
            result: '{user}最爱吃的零食是转基因薯片，自带烧烤味，好吃又健康。',
            add_tags: ['最爱零食：转基因薯片']
        },
        {
            text: '野味',
            result: '{user}最喜欢吃来路不明的野味了。',
            add_tags: ['口臭']
        }
            ]
        },
        'dbrs_82': {
            title: '毕业找工作',
            description: '{user}毕业后，成为了一名___',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
            options: [
        {
            text: '厨师',
            result: '你做出了选择。'
        },
        {
            text: '文员',
            result: '你做出了选择。'
        },
        {
            text: '教师',
            result: '你做出了选择。'
        },
        {
            text: '导游',
            result: '世界很大，我一边看，一边把钱给赚了。'
        },
        {
            text: '并没有喜欢的',
            result: '{user}不急着找工作，{user}认为他是大学毕业生，是知识分子。只要在家呆着，工作就会找上门来。'
        },
        {
            text: '公务员',
            result: '{user}大叫口号：我要做人民的奴隶！'
        },
        {
            text: '参军',
            result: '{user}报名参军，通过了惨无人道的兵检后，加入了军队。'
        }
            ]
        },
        'dbrs_89': {
            title: '导游印象',
            description: '{user}给游客的最深刻印象就是___',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
            options: [
        {
            text: '对当地人文历史非常熟悉',
            result: '你做出了选择。',
            remove_tags: ['高情商']
        },
        {
            text: '幽默风趣，活跃气氛',
            result: '你做出了选择。'
        },
        {
            text: '长得人模人样',
            result: '你做出了选择。'
        },
        {
            text: '满嘴粗口',
            result: '你做出了选择。'
        },
        {
            text: '让游客不知不觉地进入购物点',
            result: '你做出了选择。'
        },
        {
            text: '路痴',
            result: '你做出了选择。',
            add_tags: ['天然呆']
        }
            ]
        },
        'dbrs_93': {
            title: '有借无还',
            description: '《某旅行社导游借了游客的笔没有还》的事件在网络疯传，这位导游就是{user}，{user}这种有借无还的劣行受到来自五湖四海的键盘侠道德谴责。最后，旅行社顶不住压力，把{user}作临时工处理了。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_94': {
            title: '报复老板',
            description: '无辜的{user}站在老板办公室中，被臭骂了一下午。{user}决定报复，___',
            priority: 1,
            trigger_conditions: { age_range: [16, 35] },
            options: [
        {
            text: '在老板的咖啡机上如厕',
            result: '你做出了选择。'
        },
        {
            text: '污蔑老板性骚扰',
            result: '{user}突然大叫非礼。然而，门外毫无动静。{user}的老板笑笑不说话，起身径直走到{user}面前一把揽住{user}，强吻了起来……'
        },
        {
            text: '把公司电脑硬盘格式化了。',
            result: '公司的数据都被删了，结果{user}和同事连续加班了半年重做。',
            add_tags: ['多病']
        },
        {
            text: '冤冤相报何时了，忘掉仇恨，要包容',
            result: '{user}被老板臭骂后，还想着体谅老板的辛苦。'
        }
            ]
        },
        'dbrs_91': {
            title: '被告白',
            description: '{user}变身魔法少女，与魔女战斗时不小心被某个同班同学看到。这个同学迷恋上了{user}。终于在一天，这个同学勇敢地向{user}告白。',
            priority: 1,
            trigger_conditions: { age_range: [1, 30] },
            options: [
        {
            text: '答应',
            result: '{user}答应了一个勇敢的追求者，他们恋爱了。',
            add_tags: ['恋爱中']
        },
        {
            text: '自己的灵魂已经交给了“抠鼻”，我没资格恋爱，我是孤独的魔法少女',
            result: '{user}变身魔法少女，与魔女战斗时不小心被某个同班同学看到。这个同学迷恋上了{user}，天天缠着{user}告白，{user}不耐烦，拖他进入魔女次元，然后杀掉了他。毁尸灭迹。'
        },
        {
            text: '无视',
            result: '{user}拒绝了一个同班同学的告白。只丢下一句不行，就走了。果然很高冷'
        },
        {
            text: '发卡',
            result: '{user}拒绝了一个同班同学的告白。给了这个同学一张：好同学卡。'
        }
            ]
        },
        'dbrs_95': {
            title: '打瞌睡',
            description: '看着眼前的一堆文档，{user}决定小睡了一会儿，在梦中和老板搏斗。{user}醒来时发现他一手血，面前的电脑屏幕已经被打碎。',
            priority: 1,
            trigger_conditions: { age_range: [16, 35] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_96': {
            title: '工作专注',
            description: '{user}工作很认真投入，把放在杯子旁的墨水当水喝了，{user}浑然不知。然后{user}感到不适，被同事抬去医院。',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: -10 }
        }
            ]
        },
        'dbrs_98': {
            title: '手茧',
            description: '{user}写字的手起了厚厚的茧，开会的时候，{user}玩这些茧来消磨时间。',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_90': {
            title: '空难',
            description: '{user}在一次飞往马来西亚的飞机上出现了空难，{user}抢了机长的降落伞，跳伞逃生了。整班航机就{user}一人生还。',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_97': {
            title: '高强度',
            description: '晚上8点，{user}一个人在昏暗的办公室里，两眼无神。对着一大叠文件发愣。',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_932': {
            title: '遭遇史莱母',
            description: '一个史莱母出现了，挡住了{user}的去路。史莱母身后还跟着小史莱母，它们想讨点食物，它们快饿死了。{user}选择___。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '杀死它',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '一个史莱母出现了，挡住了{user}的去路。史莱母身后还跟着'
        },
        {
            text: '施舍点粮食给它',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '一个史莱母出现了，挡住了{user}的去路。史莱母身后还跟着'
        },
        {
            text: '把它煲成汤',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '一个史莱母出现了，挡住了{user}的去路。史莱母身后还跟着'
        }
            ]
        },
        'dbrs_106': {
            title: '仙人',
            description: '突然间{user}面前出现了一位身穿红袍的仙人向你索要一包辣条。',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '灌汤包',
            result: '突然间{user}面前出现了以为身穿红袍的仙人向你索要一包辣条。{user}劝仙人少吃辣，多吃健康的东西。'
        },
        {
            text: '洞爷湖牌辣条',
            result: '突然间{user}面前出现了以为身穿红袍的仙人向你索要一包辣条。{user}拿出了辣条，用火机点燃辣条，烧给仙人吃……仙人吃完，送了一个黄色的玻璃球给{user}作为答谢。这个黄色的玻璃球非常精致，玻璃球里面还有一颗红色的星星。',
            add_tags: ['一星龙珠']
        },
        {
            text: '不理睬',
            result: '突然间{user}面前出现了以为身穿红袍的仙人向你索要一包辣条，{user}并不理睬。现在的乞丐越来越会演了。{user}心想。'
        }
            ]
        },
        'dbrs_115': {
            title: '毕业',
            description: '{user}出色地完成了他的学业，成为了一个人才。',
            priority: 1,
            trigger_conditions: { age_range: [23, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_116': {
            title: '毕业',
            description: '{user}跌跌碰碰，勉强地毕业了。',
            priority: 1,
            trigger_conditions: { age_range: [23, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_120': {
            title: '索尼大法好',
            description: '看到别人家的孩子有PSP玩，{user}考虑是不是也买一个PSP。{user}最后决定___',
            priority: 1,
            trigger_conditions: { age_range: [5, 17] },
            options: [
        {
            text: '花钱买一个',
            result: '你做出了选择。',
            effects: { money: -1 }
        },
        {
            text: '买买买，为信仰充值。',
            result: '{user}看到别人有PSP，自己也毫不犹豫地去买了一个，正式成为了索尼大法的信徒。',
            effects: { money: -1 }
        },
        {
            text: '不买，好好学习才是王道！',
            result: '{user}并不羡慕别人有PSP，自己有空在练习本上涂涂画画玩也很有趣（泪）。不过没有游戏机，{user}的学习变好了。',
            add_tags: ['学习成绩']
        },
        {
            text: '偷',
            result: '{user}偷了同学的PSP，还洋洋得意唱了起来：“练得一手好摸技，PSP得来全不费功夫”',
            add_tags: ['小偷']
        }
            ]
        },
        'dbrs_122': {
            title: '公司职位',
            description: '{user}在公司里___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '跟随老爸学习',
            result: '你做出了选择。'
        },
        {
            text: '从一个普通的底层做起',
            result: '你做出了选择。'
        },
        {
            text: '出任公司CEO',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_121': {
            title: '监狱情谊',
            description: '{user}在监狱里，每天晚上都会被爆菊花。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '{user}在监狱里被爆菊花了。',
            add_tags: ['菊花残']
        }
            ]
        },
        'dbrs_127': {
            title: '监狱情谊',
            description: '{user}在监狱里，每天晚上都会被一帮黑人叔叔爆菊花。',
            priority: 1,
            trigger_conditions: { age_range: [4, 120], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['菊花残']
        }
            ]
        },
        'dbrs_129': {
            title: '出狱',
            description: '{user} {age}岁的时候，终于从牢里出来了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_130': {
            title: '监狱事件',
            description: '{user}发现一个叫迈克的外国人，似乎在监狱中策划一起越狱。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [4, 120] },
            options: [
        {
            text: '尝试加入',
            result: '{user}加入了一个越狱行动，接下来的几个星期，{user}体验了犹如美剧一样的勾心斗角和狗血淋漓。然后越狱的那晚，{user}睡着了没有去……'
        },
        {
            text: '无视就好',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_128': {
            title: '矿工',
            description: '{user}被监狱卖身到了黑矿场，没日没夜地挖煤。',
            priority: 1,
            trigger_conditions: { age_range: [4, 120] },
            options: [
        {
            text: '乖乖工作',
            result: '你做出了选择。',
            add_tags: ['多病']
        },
        {
            text: '逃跑！',
            result: '{user}在监狱集体劳动的时候，突然丢下手中的工具向出口跑去。{user}要越狱！狱警在后面开枪扫射，子弹在{user}耳边嗖嗖嗖地穿过，没打中，{user}上了一辆车，开远了。就在{user}庆幸自己逃狱成功的时候，{user}的脖子突然炸裂开来。原来监狱在每个囚犯的身体内都植入了一片可以远程遥控的西瓜霜炸弹含片。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '制造意外',
            result: '{user}在矿洞中，想制造一次矿难，趁混乱越狱。{user}把用来炸山的炸弹拿到矿洞里设置好，刚想跑，轰的一声，真的矿难发生了，矿洞的出口突然坍塌了……{user}出不去了，只能偎依在正在倒数的炸弹旁发愣，等待爆炸，结束自己这可笑的生命。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_131': {
            title: '出院',
            description: '{user}出院的时候，护士微笑着对{user}说：请慢走欢迎再次光临。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_138': {
            title: '黑暗料理界',
            description: '从远方来了个喇嘛自称是黑暗料理组织派来的训导师，来教导{user}黑暗料理的厨艺。喇嘛教会了{user}做一道名叫“河水煮垃圾”的菜后，喇嘛摸摸自己的羊咩须，呵呵大笑离开了。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_136': {
            title: '烹饪追求',
            description: '{user}在烹饪界,注重的是___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '外观',
            result: '{user}的烹饪教条很简单：“好看的东西就好吃”'
        },
        {
            text: '味道',
            result: '{user}对料理的味道的追求达到了疯狂的地步。做出来的菜虽然其貌不扬，但是你吃下去，不知道怎的你身后就会有火山爆发。'
        },
        {
            text: '逼格',
            result: '{user}的菜色非常追求身份，装菜的碟子必须是圆角矩形，黑白两色。'
        },
        {
            text: '文化',
            result: '{user}的菜名非常狂拽酷霸帅炫龙傲天。追求“三分吃味道，七分吃文化”'
        }
            ]
        },
        'dbrs_143': {
            title: '被秘密基地解雇',
            description: '{user}不再允许驾驶巨型机器人,也不允许继续进入秘密基地。研究所所长告诉{user}，机器人驾驶员必须是11-18岁的少年少女。{user}太老了，回家洗洗睡吧。',
            priority: 1,
            trigger_conditions: { age_range: [18, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_137': {
            title: '黑暗料理界',
            description: '有一天{user}在厨房煮饭，突然一支暗箭飞过来，上面带着一条纸条。是一个邀请函，名叫黑暗料理界的组织发的，邀请{user}加入，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '应邀加入',
            result: '你做出了选择。'
        },
        {
            text: '不理睬',
            result: '{user}把黑暗料理界的邀请函揉成了团，和鸡肉一起丢进了锅里，煮出来一碟“纸包鸡”吃了起来。'
        }
            ]
        },
        'dbrs_145': {
            title: '厨师的决断',
            description: '{user}被黑暗料理组织指派到一个繁荣的城市，去参加一个厨艺比赛。要求{user}打败一个名叫小当家的小学生厨师。{user}来到了比赛现场，看到了这个名叫小当家的逗比小学生，冷笑了一下，看了看比赛主题：煮牛杂。{user}准备___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '使用牛腩熬汤，加入八角，红枣，人参，冬虫草，上面再放清新的香草配搭。',
            result: '{user}煮出来的只是普通的牛杂，而{user}的对手，那位叫小当家的小学生却用牛粪做出来同样的东西，{user}的膝盖情不自禁地贴地，{user}输的心服口服。'
        },
        {
            text: '牛骨滚汤，然后放萝卜，煮77 49分钟后，加入20块干冰迅速降温。',
            result: '评委试吃{user}的牛杂萝卜，他夹了一块萝卜进口，慢慢咀嚼。突然整个人飘飘然，升了起来，在半空中跳起了舞。比赛被迫中断，{user}被视为使用幻术作弊，取消比赛资格。'
        },
        {
            text: '用速溶火锅汤底熬汤，加汤圆，白糖。',
            result: '{user}做的牛杂竟然是甜的，评委大喊异端，把{user}踢出了比赛场馆。'
        },
        {
            text: '到小卖部包下整锅牛杂，带到比赛现场，用文火热一下。',
            result: '评委吃过{user}的牛杂后，身后的火山一个接一个地爆炸。毫无悬念的，{user}赢得了这次厨师的比赛。',
            add_tags: ['赢得厨师比赛']
        }
            ]
        },
        'dbrs_150': {
            title: '内测玩家',
            description: '感谢支持这个游戏。至今，游戏内容尚未完成，所以一些支线尚未有事件。很遗憾，{user}的人生已经到达了逗比世界的某个支线边缘，无法继续前进。如果你有任何想法/故事，请进入网页下面的投稿链接，发给我！而现在，在这里，你有权为{user}选择一条死亡的道路。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '鱼水之欢中死去',
            result: '{user}欧欧叉叉时被超胖的伴侣压死了。百合花下死，做鬼也风流啊',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=欧欧叉叉时被超胖的伴侣压死了。百合花下死，做鬼也风流啊'
        },
        {
            text: '突如其来的死亡，短暂的痛苦',
            result: '{user}的假胸在飞机上因为气压低膨胀了，最后炸了',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '感谢支持这个游戏。至今，游戏内容尚未完成，所以一些支线尚未有'
        },
        {
            text: '最后的时光跟朋友在一起',
            result: '{user}跟朋友一起去爬山，爬到山顶，山顶风大，{user}不慎从山上滚了下来，一直滚到山下的一个粪坑当中，而且{user}不会游泳，在粪坑中无力的挣扎着最后粪水淹没，溺亡于粪坑之中。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '感谢支持这个游戏。至今，游戏内容尚未完成，所以一些支线尚未有'
        },
        {
            text: '被外星人抓走……',
            result: '在一个没有月亮的夜晚，{user}被外星人抓走了……从此再也没有人看到过{user}',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '感谢支持这个游戏。至今，游戏内容尚未完成，所以一些支线尚未有'
        },
        {
            text: '中头奖',
            result: '{user}被老鹰从高空扔下的乌龟砸中了头。七孔流血而死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '感谢支持这个游戏。至今，游戏内容尚未完成，所以一些支线尚未有'
        },
        {
            text: '在家中安静的死去',
            result: '{user}在家看电视，突然家里的吊扇掉了下来，把{user}的头平整地削了下来。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '感谢支持这个游戏。至今，游戏内容尚未完成，所以一些支线尚未有'
        },
        {
            text: '请不要点这个',
            result: '{user}惨死于程序的BUG中。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '感谢支持这个游戏。至今，游戏内容尚未完成，所以一些支线尚未有'
        }
            ]
        },
        'dbrs_156': {
            title: '来自M78星云',
            description: '突然有一天{user}遇到一个自称来自M78星云的高富帅外星人要跟她谈恋爱。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [12, 120], required_tags: ['女性'] },
            options: [
        {
            text: '性高彩烈地答应了',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        },
        {
            text: '害怕地逃跑了',
            result: '“有一个自称来自M78星云的男人说要跟我谈恋爱。。真是韩剧看多了。”'
        },
        {
            text: '不理睬',
            result: '“有一个自称来自M78星云的男人说要跟我谈恋爱。。真是韩剧看多了。”'
        },
        {
            text: '欧巴！',
            result: '突然有一天{user}遇到一个自称来自M78星云的高富帅外星人要跟她谈恋爱。{user}此时已经饥渴难耐，抱住这位高帅富强吻了起来。',
            add_tags: ['恋爱中']
        },
        {
            text: '发卡',
            result: '突然有一天{user}遇到一个自称来自M78星云的高富帅外星人要跟她谈恋爱。{user}笑笑，从包包里拿出一张硬卡片，写上“你永远是我的好欧巴。”交给了外星人。'
        }
            ]
        },
        'dbrs_155': {
            title: '安静的孩子',
            description: '{user}{age}岁的时候喜欢___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '打麻将',
            result: '你做出了选择。',
            add_tags: ['逻辑'],
            remove_tags: ['呆着']
        },
        {
            text: '分尸小动物',
            result: '你做出了选择。',
            add_tags: ['好奇'],
            remove_tags: ['呆着']
        },
        {
            text: '玩10万片的拼图',
            result: '你做出了选择。',
            add_tags: ['记忆'],
            remove_tags: ['呆着']
        },
        {
            text: '上扣扣游戏大厅',
            result: '玩QQ游戏荒废童年',
            remove_tags: ['呆着']
        },
        {
            text: '挖鼻屎，并收集起来。',
            result: '你做出了选择。',
            add_tags: ['耐性'],
            remove_tags: ['呆着']
        },
        {
            text: '写生',
            result: '你做出了选择。',
            add_tags: ['画画', '画图能力'],
            remove_tags: ['呆着']
        },
        {
            text: '担梯望月',
            result: '你做出了选择。',
            remove_tags: ['呆着']
        },
        {
            text: '写故事',
            result: '你做出了选择。',
            add_tags: ['写作']
        },
        {
            text: '冥想',
            result: '你做出了选择。',
            add_tags: ['冥想家']
        }
            ]
        },
        'dbrs_158': {
            title: '情人节',
            description: '情人节到了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '我是小公举！今天是我的节日！我要礼物！我要花！',
            result: '情人节到了，{user}吵闹着要男友买东西，然而男友一副呆木若鸡的样子，让{user}很不爽。'
        },
        {
            text: '装作不知道情人节',
            result: '{user}是少有的不喜欢浪漫的女生。'
        },
        {
            text: '和男友上街秀恩爱',
            result: '{user}在情人节和男友逛街，当街秀恩爱，被一群突如其来的FFF团成员倒了一身汽油，并点燃了。{user}与男友被熊熊烈火烧成了灰。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_157': {
            title: '情人节',
            description: '情人节快到了，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '买了一支玫瑰准备送给女票',
            result: '情人节到了，{user}送了一支玫瑰花给他的女朋友。女朋友拿起玫瑰高兴地在打转儿。'
        },
        {
            text: '买了一支康乃磬准备送给女票',
            result: '{user}在朋友面前拿出一朵康乃磬送给女友，并深情地说：“我对你的爱永恒。”……隔天，{user}和女友就分手了……',
            add_tags: ['玻璃心'],
            remove_tags: ['恋爱']
        },
        {
            text: '路边采野花准备送给女票',
            result: '在{user}在路边采野花的时候，有人报警了，{user}以破坏花草树木罪被拘捕了。',
            add_tags: ['监狱时间']
        },
        {
            text: '装作不知道情人节',
            result: '情人节到了，{user}装作不知道'
        },
        {
            text: '送了女朋友一个花圈',
            result: '情人节到了，{user}送了女朋友一个花圈。女朋友给了{user}一巴掌，跟{user}分手了。',
            add_tags: ['玻璃心'],
            remove_tags: ['恋爱']
        },
        {
            text: '带女友飞',
            result: '这年的情人节当天，{user}带着自己的女友飞翔在云端。{user}有力的翅膀挥动着，两人稳稳地悬停在云上很久很久，等该摸的都摸了，该亲的都亲完了，他们才缓缓地降落。',
            death_flag: true,
            death_reason: '这年的情人节当天，=NAME=带着自己的女友飞翔在云端。=NAME=有力的翅膀挥动着，两人稳稳地悬停在云上很久很久，等该摸的都摸了，该亲的都亲完了，他们才缓缓地降落。'
        },
        {
            text: '制作生日蛋糕送给女友',
            result: '情人节到了，{user}从四维口袋里拿出一些记忆面包，加上奶油做成了生日蛋糕送给他的女朋友。他们一起吃了这个蛋糕，把甜蜜的回忆都记在了心里。'
        }
            ]
        },
        'dbrs_159': {
            title: '美德',
            description: '{user}坐公交车，发现有一个老人抱着小孩没有座位坐。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [8, 40] },
            options: [
        {
            text: '帮老人抱住小孩',
            result: '{user}想帮老人忙，上前去把老人怀里的小孩揽过来……老人一愣，立马大叫抢小孩啦快报警！{user}跳进黄河也洗不清，被判2年监禁。'
        },
        {
            text: '让座',
            result: '{user}尊老爱幼，是中华人民的美德。'
        },
        {
            text: '并不理睬',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_161': {
            title: '恢复记忆',
            description: '{user}记起来了，他是一个内向的人。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['内向'],
            remove_tags: ['高情商']
        }
            ]
        },
        'dbrs_162': {
            title: '恢复记忆',
            description: '{user}记忆逐渐恢复，{user}发现学校的作业题他都会做了，{user}以前很可能是学霸。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_164': {
            title: '科学研究',
            description: '{user}选择毕业后，未来将留在在学校做科研，他研究的学科是___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '生物学',
            result: '你做出了选择。'
        },
        {
            text: '生物学',
            result: '你做出了选择。'
        },
        {
            text: '生物学',
            result: '你做出了选择。'
        },
        {
            text: '高能物理',
            result: '你做出了选择。'
        },
        {
            text: '高能物理',
            result: '你做出了选择。'
        },
        {
            text: '天文',
            result: '你做出了选择。'
        },
        {
            text: '天文',
            result: '你做出了选择。'
        },
        {
            text: '社会学',
            result: '你做出了选择。'
        },
        {
            text: '心理学',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_166': {
            title: '超无聊',
            description: '在监狱里，四面墙，一张床，{user}超无聊，只好___来打发时间。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '读小说《战争与和平》',
            result: '你做出了选择。'
        },
        {
            text: '读小说《卡洛琳娜》',
            result: '你做出了选择。'
        },
        {
            text: '读小说《穿越到明朝当个官》',
            result: '你做出了选择。'
        },
        {
            text: '发呆',
            result: '你做出了选择。'
        },
        {
            text: '阅读《监狱室内设计》',
            result: '{user}在监狱的图书馆里找到一本《监狱室内设计》，他立马拿起来看。这本书竟然是本叙事的诗歌……{user}的心里跑过无数草泥马。'
        },
        {
            text: '写点什么',
            result: '你做出了选择。',
            add_tags: ['写作']
        },
        {
            text: '读图书《Codex Seraphinianus》',
            result: '你做出了选择。',
            add_tags: ['脑洞']
        }
            ]
        },
        'dbrs_168': {
            title: '部门聚餐',
            description: '公司搞了个部门聚餐，所有人都喝了个烂醉。散场时，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '在老总背部贴了张大纸条写着: " 我想找男人过夜 " ',
            result: '公司搞了个部门聚餐，所有人都喝了个烂醉。第二天老板似乎有病不能来上班。'
        },
        {
            text: '找到样子好看的同事，搀扶回家。',
            result: '公司搞了个部门聚餐，所有人都喝了个烂醉。散场时，{user}找准他一直暗恋的同事，搀扶回家。然后他们就恋爱了。',
            add_tags: ['恋爱中']
        },
        {
            text: '独自回家',
            result: '你做出了选择。'
        },
        {
            text: '和一些同事继续喝下一场',
            result: '公司搞了个部门聚餐，散场时，又和另外一批人去喝。大晚上的，一堆男人女人喝醉了，在街边搞事。结果全部被抓去派出所了。',
            add_tags: ['监狱时间']
        }
            ]
        },
        'dbrs_171': {
            title: '独门绝活',
            description: '一个厨师需要有一绝门的技能，{user}的技能是___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '切菜',
            result: '因为练习更势利的切功，{user}的手都是刀痕。'
        },
        {
            text: '调味',
            result: '{user}炒菜的时候，放调味料的方法是，直接把调味料抛起来飞在空中，然后提起铁锅接住。{user}炒出来的每道菜，味道都很适中。'
        },
        {
            text: '感觉',
            result: '{user}是一位了不起的厨师，他通过感觉铁锅下面空气的流动的变化，就可以准确调控煮菜的时间。'
        },
        {
            text: '嗅觉',
            result: '{user}嗅觉非常灵敏。烹饪的时候，不需要使用眼睛，用鼻子就够了。'
        },
        {
            text: '甩锅',
            result: '{user}炒的菜味道一般，但却是有点名气的厨师。因为他炒菜的姿势非常惹火，精通抛锅甩锅，铁锅里面的食物不会流出来一滴一粒。{user}因为这个绝活，在不少有名的饭店做过炒菜表演。还在网络中直播炒菜。'
        }
            ]
        },
        'dbrs_170': {
            title: '课余事件',
            description: '{user}不上课(逃课)的时候___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '通常都去上网',
            result: '你做出了选择。',
            add_tags: ['交网友']
        },
        {
            text: '打桌球',
            result: '你做出了选择。',
            add_tags: ['古惑仔']
        },
        {
            text: '打牌/打麻将',
            result: '你做出了选择。',
            add_tags: ['赌博']
        },
        {
            text: '有时会去大保健',
            result: '你做出了选择。',
            add_tags: ['古惑仔']
        },
        {
            text: '良心发现，好好读书才有前途',
            result: '{user}学习非常差，他并不想就这么堕落下去，决定认认真真踏踏实实地从小学开始复习。',
            add_tags: ['学习成绩']
        },
        {
            text: '蹲厕所抽烟',
            result: '你做出了选择。',
            add_tags: ['烟瘾']
        },
        {
            text: '玩摩托车',
            result: '你做出了选择。',
            add_tags: ['鬼火']
        }
            ]
        },
        'dbrs_174': {
            title: '热恋',
            description: '{user} 与伴侣约会。他们___',
            priority: 1,
            trigger_conditions: { age_range: [6, 55] },
            options: [
        {
            text: '在树上刻上了一个爱心，写上了他们2个的名字',
            result: '{user}和伴侣在外面谈恋爱，他们把名字刻到一颗大树上，再刻上一个大心。他们对视笑笑，两个人的脸慢慢的靠近，两个人似乎都能感受到对方的小鹿乱撞的心跳和仓促的呼吸……突然，一个冰冷的警棍触碰到了{user}，{user}看到一个警察不知道什么时候站在了他们的中间，神情非常严肃地说：“你们破坏树木，罚！”'
        },
        {
            text: '穿上小清新的衣服在河岸漫步',
            result: '你做出了选择。'
        },
        {
            text: '去游乐场玩机动游戏',
            result: '{user}和伴侣去游乐场玩机动游戏，在玩跳楼机的时候，{user}的头发卷进了机器中，机器拉扯的时候，{user}整个脑被拉扯了出来，现场甘液四射。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '在家玩电动游戏',
            result: '{user}和伴侣在家玩电动游戏，因为游戏过于暴力，最后发展成情侣真人PK，情侣打架没有胜者，最后2人通通嗝屁。可喜可贺。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '在小公园里吹泡泡',
            result: '{user}向天吹出一大群彩色泡泡，然后和伴侣在泡泡里傻笑着转圈圈。'
        }
            ]
        },
        'dbrs_173': {
            title: '新律师',
            description: '{user}正式成为了一名律师，在某个律师事务所里面工作。{user}开始的目标是___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '接小案子积累经验',
            result: '你做出了选择。'
        },
        {
            text: '非接大案子不可！',
            result: '你做出了选择。'
        },
        {
            text: '混混日子就好了。',
            result: '律师也有得过且过的，{user}就是这种律师。'
        }
            ]
        },
        'dbrs_175': {
            title: '恋爱与犯错',
            description: '{user}做了对不起伴侣的事情，会___',
            priority: 1,
            trigger_conditions: { age_range: [6, 55] },
            options: [
        {
            text: '主动承认错误',
            result: '{user}对伴侣非常坦诚，对伴侣很依赖。久而久之，{user}的伴侣觉得{user}好烦，甩了{user}。',
            add_tags: ['玻璃心'],
            remove_tags: ['恋爱']
        },
        {
            text: '卖萌请求原谅',
            result: '你做出了选择。'
        },
        {
            text: '说谎掩盖',
            result: '谎言换来开心的恋爱，{user}与伴侣相处得很融洽。'
        },
        {
            text: '内疚',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_720': {
            title: '申国证书证明部门',
            description: '{user}成为了一名申国证书证明部门的基层公务员，在前台审批各种申请。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_931': {
            title: '鬼画符',
            description: '{user}做了医生之后，写的字跟鬼画符一样。{user}开的药方除了他自己，根本没人看得懂。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_182': {
            title: '快递难做',
            description: '{user}发现快递员这行真的越来越难做，不知道为啥，送货总是没有人开门，打电话也没有人接。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_183': {
            title: '危险顾客',
            description: '{user}是快递员，送快递到某一个民居中。他敲敲门，但是没有人出来。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '等会儿吧。',
            result: '{user}在门外等了30分钟，敲了无数次门，还是没人开门，{user}对着门给了个中指，走了。'
        },
        {
            text: '放门口就走人',
            result: '“认真负责这个词在这个现代社会的词义就是吃力不讨好。”{user}送的快递，都是把快递放门口，就不管了。'
        },
        {
            text: '踢门进去',
            result: '{user}是个负责任的快递员。总遇到一些人装不在家，不开门取快递。{user}怎么想都想不通。怒火中烧，用脚把门踢开，快递放进里面，又把门修好，关上才走人……'
        },
        {
            text: '私吞这个货物',
            result: '{user}送快递，每天都会遇到一些不开门，拒收快递的人，遇到这些人，{user}干脆不送，把货物归为己有。“反正没有人要，那我就辛苦点收了这个可怜的货物吧。{user}终于悟到了快递赚钱的真正方法，靠着个方法，赚了不少的钱。',
            effects: { money: 6 }
        }
            ]
        },
        'dbrs_186': {
            title: '晚期流感',
            description: '{user}患上的H5N2病毒非常严重，处于晚期，这个流感的死亡率非常高。医生有3个治疗建议给{user}选择，他选择了___。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '尝试最新研制的疫苗',
            result: '{user}患上的H5N2病毒非常严重，他选择了尝试最新研制的疫苗，疫苗效果不错，过了半个月，{user}就恢复了。',
            add_tags: ['癌症'],
            death_flag: true,
            death_reason: '{user}患上的H5N2病毒非常严重，处于晚期，这个流感的'
        },
        {
            text: '乡下流传的巫术',
            result: '{user}患上的H5N2病毒非常严重，处于晚期，{user}心想反正死定了，不如试试乡下流传的巫术治病。{user}吃下了一大盘用白酒浸泡过的牛屎，用鸡血在身上涂满了鬼画符。隔天，{user}的病竟然好了。不过这个巫术治疗有一个后遗症，口臭。',
            add_tags: ['口臭'],
            death_flag: true,
            death_reason: '{user}患上的H5N2病毒非常严重，处于晚期，这个流感的'
        },
        {
            text: '中医疗法，拔火罐！',
            result: '{user}患上的H5N2病毒非常严重，被送进了医院才知道已经处于晚期。{user}选择了医生给他的建议，找来了拔火罐界最好技术的技师给{user}拔火罐。奇迹出现了，隔天{user}就好了，蹦蹦跳跳出院了。',
            death_flag: true,
            death_reason: '{user}患上的H5N2病毒非常严重，处于晚期，这个流感的'
        },
        {
            text: '喝醋',
            result: '{user}患上的H5N2病毒非常严重，被送进了医院才知道已经处于晚期。{user}是个讳疾忌医的人，他不相信医生的话，总觉得他在推销药。他民间流传醋可以治疗这个病，于是买了一瓶喝了。然而并没有什么卵用，隔天就嗝屁了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}患上的H5N2病毒非常严重，处于晚期，这个流感的'
        }
            ]
        },
        'dbrs_187': {
            title: '官司：分财产',
            description: '{user}接了一单官司，有300个后代的老人去世，没有留下遗嘱，有20元的遗产，该怎么合理分配遗产。{user}的解决方法是___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '将20元钱存入银行账号，分300次汇款给每个人，平均每个后代分得0.06，剩下的小数点3位数以后的遗产归国家所有',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '{user}接了一单官司，有300个后代的老人去世，没有留下'
        },
        {
            text: '在法庭上300个进行随机抽签，抽出一个人继承遗产',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '{user}接了一单官司，有300个后代的老人去世，没有留下'
        },
        {
            text: '我表示已经被这个案子吓得目瞪口呆；',
            result: '{user}根本接受不了每天出现的奇葩委托，觉得自己不适合做律师，于是辞职了。',
            death_flag: true,
            death_reason: '{user}接了一单官司，有300个后代的老人去世，没有留下'
        }
            ]
        },
        'dbrs_188': {
            title: '官司：离婚案',
            description: '{user} 接了一个年轻女子的委托，打一场官司。女子在外面有男人，女子要跟他的丈夫离婚。丈夫却非常痴情，不答应。于是两人上了法庭。{user}该如何打赢这场官司。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '暗中调查这个男人的生活，获得有利的证据',
            result: '{user} 接到一个年轻女子的委托，打一场官司。女子在外面有男人，女子要跟他的丈夫离婚。{user}先调查这个委托人的丈夫的生活，找把柄来打赢这场官司。然而令人意外的是，这个丈夫竟然是世界好男人，一丁点缺点都找不到……最后{user}拒绝了这个委托，并指着自己的委托人大骂了一句：“傻逼女人”后走了。'
        },
        {
            text: '运用女权主义言论',
            result: '{user}帮女委托人打一场离婚案的官司，{user}运用“女人找小三一定是她丈夫的错”这个思维，进行了一场非常激动的演讲。在场所有的人都站起来拍手，掌声此起披伏。{user}打赢了官司。女委托人成功和丈夫离婚，揽起在场的一位高大的绅士走出了法庭。她的丈夫独自一个人还坐在被告席的座位上，不敢相信这个事实。'
        },
        {
            text: '尝试取消官司，私了',
            result: '{user} 接了一个年轻女子的委托，打一场官司。女子在外面有男人，女子要跟他的丈夫离婚。{user}知道这个官司很难打赢，所以请求他的委托人取消这个官司，改为私了。在私了的过程中，夫妻两人发生了抢战，{user}在枪林弹雨中饮弹牺牲。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME= 接了一个年轻女子的委托，打一场官司。女子在外面有男人，女子要跟他的丈夫离婚。=NAME=知道这个官司很难打赢，所以请求他的委托人取消这个官司，改为私了。在私了的过程中，夫妻两人发生了抢战，=NAME=在枪林弹雨中饮弹牺牲。'
        }
            ]
        },
        'dbrs_191': {
            title: '监考',
            description: '{user}在监考一次期末考试。他发现有学生在作弊！',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '无视',
            result: '期末考试开始了，{user}在监考，但尽管教室已经纸条满天飞了，{user}也置之不理。真是人民好老师。'
        },
        {
            text: '上前揭发！',
            result: '{user}在监考考试的时候发现有人作弊，{user}走上前一把抢过作弊的小纸条，仔细一看，是一条内裤！那位学生哭着跑了出去……'
        },
        {
            text: '打电话报警',
            result: '{user}在监考考试的时候发现有人作弊，{user}二话不说拿起电话就拨打了110，警察来到教室把作弊的学生抓走了。接下来，教室变得鸦雀无声，学生们都变得规规矩矩。'
        }
            ]
        },
        'dbrs_193': {
            title: '豪华监狱',
            description: '{user}在监狱里基本上出入自由，入住240平方居室，每天5餐专人服务。后庭式花园，温泉游泳池篮球场设施齐全。夏天有空调，冬天有暖气。{user}已经请求狱长给{user}申请终生监禁，{user}在监狱里住下了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_194': {
            title: '监狱团伙',
            description: '{user}在监狱中有自己的团伙，___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '帮助维持监狱秩序的正义事业',
            result: '你做出了选择。'
        },
        {
            text: '干着买卖毒品的勾当',
            result: '{user}在监狱中有一个买卖毒品的团伙，低成本高利润，{user}赚了大把大把钱。',
            effects: { money: 10 }
        },
        {
            text: '筹备着一次越狱行动',
            result: '{user}组织了一次越狱行动，计划是在放风的时候抢夺狱警的枪械，然后突围越狱。想法很好，可惜执行无力，狱警的枪哪有这么容易被抢到。{user}和他的团伙最后全部被狱警开枪射死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_195': {
            title: '监狱：真·情谊',
            description: '{user}刑满出狱，他与在监狱里的小弟洒泪告别，相互承诺下辈子还一起坐牢。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_197': {
            title: '快递：车祸',
            description: '{user}骑着电动摩托车送快递，经过十字路口的时候，突然看到一辆泥头车潮鸣电掣地朝{user}开来，{user}第一反应是___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '扑倒！尝试钻进车底躲避。',
            result: '{user}骑着电动摩托车送快递，经过十字路口的时候，突然看到一辆泥头车潮鸣电掣地朝{user}开来，{user}见已经避让不及，立马将摩托车侧翻，骑车卧倒，想从泥头车车底擦过。电瓶车擦地而行，火花四溢，像在拍一部动作大片。电瓶车滑进了泥头车车底后，就再也没有出来过……泥头车刹车时车底画出4条黝黑的轮胎印和一条鲜红的血痕。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '加速行驶规避相撞！',
            result: '{user}骑着电动摩托车送快递，经过十字路口的时候，突然看到一辆泥头车潮鸣电掣地朝{user}开来，{user}抓紧手柄，拧尽油门，加速行驶，想规避撞击。突然加速的电动摩托车躲过了从侧面撞来的泥头车，但是{user}已经刹车不及，电动摩托车冲上了人行道撞飞了4,5个人后才倒下……最后，{user}竟然因为交通肇事而被抓了起来。'
        },
        {
            text: '抽起车头，是时候施展我的花式电单车技术！',
            result: '{user}骑着电动摩托车送快递，经过十字路口的时候，突然看到一辆泥头车潮鸣电掣地朝{user}开来，在那一瞬间，{user}抓紧手柄，拱起背，心想：“是时候施展我的花式抽车头跳跃术，来把这次交通意外化险为夷！”{user}大喝一声，双手发力，电瓶车的车头很灵活地抽了起来，紧接后轮用力弹跳，整个电瓶车真的跳了起来，轻轻地落在了正在刹车的泥头车车顶，竟然成功地躲过了交通意外。{user}立马成功感满满，决定装一下B，做一个高难度胜利姿势，站在了电瓶车上，双手伸展，向四周围围观的群众鞠躬。飘飘然的{user}万万没想到，站在车坐垫上的脚打滑了，{user}连人带车重重地跌到了地上，车轮插进了{user}的腹部，从背部穿插出来。围观群众被吓得一哄而散。当医护人员来到现场的时候{user}还没断气，{user}不断挣扎，口中念念有词：“我觉得我还能被抢救一下……”而医护人员看到{user}这个样子，也只是摇摇头，别过头，不忍心看。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=骑着电动摩托车送快递，经过十字路口的时候，突然看到一辆泥头车潮鸣电掣地朝=NAME=开来，在那一瞬间，=NAME=抓紧手柄，拱起背，心想：“是时候施展我的花式抽车头跳跃术，来把这次交通意外化险为夷！”=NAME=大喝一声，双手发力，电瓶车的车头很灵活地抽了起来，紧接后轮用力弹跳，整个电瓶车真的跳了起来，轻轻地落在了正在刹车的泥头车车顶，竟然成功地躲过了交通意外。=NAME=立马成功感满满，决定装一下B，做一个高难度胜利姿势，站在了电瓶车上，双手伸展，向四周围围观的群众鞠躬。飘飘然的=NAME=万万没想到，站在车坐垫上的脚打滑了，=NAME=连人带车重重地跌到了地上，车轮插进了=NAME=的腹部，从背部穿插出来。围观群众被吓得一哄而散。当医护人员来到现场的时候=NAME=还没断气，=NAME=不断挣扎，口中念念有词：“我觉得我还能被抢救一下……”而医护人员看到=NAME=这个样子，也只是摇摇头，别过头，不忍心看。'
        },
        {
            text: '双手抱头，特别要护住脸。',
            result: '{user}骑着电动摩托车送快递，经过十字路口的时候，突然看到一辆泥头车潮鸣电掣地朝{user}开来，{user}脑中一片空白，抱住头。泥头车已经在急刹车，但还是撞到了{user}，{user}被撞飞出去，在马路上滚了20多米，躺着了。过了一会儿，{user}慢慢站起来，拍拍身上的灰，发现除了几处皮外伤，没啥大事。'
        }
            ]
        },
        'dbrs_202': {
            title: '官司：版权',
            description: '{user}接到一个中年大叔的委托。委托人是《汽车人总冒险》的制作人，他被Pixar’son动画公司告侵权，想请{user}帮他打赢这场官司。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '突出声明这个动画是原创',
            result: '{user}接到《汽车人总冒险》的制作人的委托，他被Pixar’son动画公司告侵权，想请{user}帮他打赢这场官司。{user}与被告如出一辙，异口同声地强调这就是被告的原创作品。根本没有抄袭，也没有任何侵权。然而在场所有人都像看傻[哔]一样看这2个人。最后毫无悬念，{user}输掉了官司，山寨制作人被抓进了大牢。'
        },
        {
            text: '以共产思想为论点，尝试说服原告。',
            result: '{user}接到《汽车人总冒险》的制作人的委托，他被Pixar’son动画公司告侵权，想请{user}帮他打赢这场官司。{user}在法庭上以文化不分国界，不分彼此的共产主义思想，向皮克斯斯神动画公司说教，原告被说得无言以对，羞愧难当，赶忙撤诉，买机票滚回了祖国。'
        },
        {
            text: '打感情牌，尝试感动媒体，反客为主。',
            result: '{user}接到《汽车人总冒险》的制作人的委托，他被Pixar’son动画公司告侵权，想请{user}帮他打赢这场官司。{user}想了一个妙计，他请水军炒作，在互联网分享了制作人摆拍的工作场景照片，照片中每个人都在辛苦作画，通宵赶工，只为了给自己国家的小朋友送上一些快乐，一场视觉的盛宴。这些照片在网上疯传，所有人都以“情怀”来买《汽车人总冒险》的单。热心的网民筹办了一场在线的“救救国产动画《汽车人总冒险》”募捐活动，募捐了足够的钱来赔偿给原告。'
        },
        {
            text: '并不想理这个制作人。',
            result: '{user}接到一个中年大叔的委托。委托人是《汽车人总冒险》的制作人，他被Pixar’son动画公司告侵权，想请{user}帮他打赢这场官司。{user}看了一下这个制作人，礼貌地说：“您请另请高明”'
        }
            ]
        },
        'dbrs_203': {
            title: '遇险',
            description: '{user}路遇一个几百斤重量级的巨型哈士奇，这哈士奇看起来好像饿极了，两只小眼盯着{user}一动不动。{user}并没有慌，他___',
            priority: 1,
            trigger_conditions: { age_range: [5, 15] },
            options: [
        {
            text: '哈士奇好可爱，我要去摸摸',
            result: '{user}路遇一个几百斤重量级的巨型哈士奇。{user}很喜欢，他伸出手来想摸摸它的头。下一瞬间，{user}的头被哈士奇按住，手被哈士奇咬住撕了下来。哈士奇吧嗒吧嗒地吃着{user}的尸体，骨头都没有吐一根。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '为避免被袭击，躺地上装死',
            result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}头脑冷静，思维清晰，想到自己读过的一本野外生存手册教过：在野外遇到危险的大型食肉动物，躺在地上装死是一个很好的保命方法。{user}照做了，躺在地上屏声息气。巨型哈士奇歪了一下狗头，似乎不知道{user}想干嘛，哈士奇跳到{user}身上，胯部贴着{user}的脸，做起了扭腰运动。',
            add_tags: ['被狗日']
        },
        {
            text: '拔腿就跑',
            result: '{user}被吓得尿湿了裤，转身就想跑，可惜脚软了，{user}扑街了。巨型哈士奇奔过来，对着{user}长大了血盆大口，撕碎了{user}的衣物。这时{user}总算站了起来，也不顾寸丝不挂，在大街上逃奔。'
        },
        {
            text: '无视',
            result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}面不改色，并不害怕，继续走自己的路。',
            add_tags: ['洞察']
        },
        {
            text: '喷火',
            result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}喷火吓走了它。'
        },
        {
            text: '隐身逃跑',
            result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}隐身逃跑，但是哈士奇却能追踪{user}的气味，最终{user}还是被哈士奇抓住。哈士奇咬住了{user}的脖子，撕扯了几下后，就断了……'
        },
        {
            text: '使用风火轮逃跑',
            result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}立即骑上风火轮，飞了起来，逃得远远的。'
        },
        {
            text: '飞行逃跑',
            result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}感到危险在逼近，无奈只能把上衣脱下，展开翅膀，飞了起来逃跑了。'
        },
        {
            text: '与其对话',
            result: '{user}路遇一个几百斤重量级的巨型哈士奇，这哈士奇看起来好像饿极了，两只小眼盯着{user}一动不动。{user}精通狗语，与这只哈士奇唠起了嗑。{user}了解到，哈士奇近来周转不灵，上有老人下有孩子，生活压力巨大，每天都是饿着肚子生活。'
        }
            ]
        },
        'dbrs_205': {
            title: '自学成才',
            description: '技多不压身，{user}决定自学___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '医术',
            result: '你做出了选择。'
        },
        {
            text: '编程',
            result: '你做出了选择。',
            add_tags: ['自学：编程']
        },
        {
            text: '画画',
            result: '你做出了选择。',
            add_tags: ['画画', '画图能力']
        }
            ]
        },
        'dbrs_204': {
            title: '无业游民',
            description: '{user}是一个无业游民，非常空闲。___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '经常出去打牌/打麻将',
            result: '你做出了选择。',
            add_tags: ['赌博']
        },
        {
            text: '在家上网',
            result: '你做出了选择。',
            add_tags: ['交网友']
        },
        {
            text: '花时间自学一门技能',
            result: '你做出了选择。'
        },
        {
            text: '旅游',
            result: '你做出了选择。'
        },
        {
            text: '出去泡酒吧',
            result: '你做出了选择。',
            add_tags: ['古惑仔']
        },
        {
            text: '沉迷于二次元文化',
            result: '你做出了选择。',
            add_tags: ['中二病']
        }
            ]
        },
        'dbrs_208': {
            title: '委托：找小狗',
            description: '{user}接到110报警中心的指派，去帮助一位小朋友找他的小狗。{user}去到现场一看，这个熊孩子正在跟他的小狗玩得火热……{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '报假警，抓起来',
            result: '有一个熊孩子乱报警，害{user}白走一趟，{user}一怒之下，把熊孩子铐起来了，扭送到了派出所'
        },
        {
            text: '拿起他的狗丢掉',
            result: '{user}接到110报警中心的指派，去帮助一位小朋友找他的小狗。{user}去到现场一看，这个熊孩子正在跟他的小狗玩得火热。{user}怒火中烧，抓起熊孩子的小狗，使出吃奶的力，丢向了天际。然后{user}露出一个人民好警察的慈祥笑容摸摸熊孩子的头问：“小盆友，听说你小狗狗不见了？别哭警察叔叔帮你找。”'
        },
        {
            text: '把熊孩子铐起来，直接扭送精神病院',
            result: '{user}接到110报警中心的指派，去帮助一位小朋友找他的小狗。{user}去到现场一看，这个熊孩子正在跟他的小狗玩得火热……{user}走上前，二话不说把熊孩子烤了起来，丢在了精神病院门口就离开了。'
        },
        {
            text: '开心',
            result: '{user}最喜欢遇到报假警的了，因为这样，他就可以在外面溜达一天不干活。'
        }
            ]
        },
        'dbrs_213': {
            title: '水利部门：基层',
            description: '{user}被分派到了水利部门，每天都要奔走于小区与居民打交道，处理业务。记录居民月的水使用量，俗称查水表。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_218': {
            title: '魔法少女',
            description: '{user}一天晚上遇到一个叫“扣鼻”的生物，问她要不要签订契约，出卖灵魂来换取一个愿望。',
            priority: 1,
            trigger_conditions: { age_range: [10, 20], required_tags: ['女性'] },
            options: [
        {
            text: '签订契约吧！',
            result: '{user}跟“扣鼻”签订了契约，成为了魔法少女'
        },
        {
            text: '你走吧，我知道你不是好东西',
            result: '{user}一天晚上遇到一个叫“扣鼻”的生物，问她要不要签订契约，出卖灵魂来换取一个愿望。{user}直接拒绝了。'
        },
        {
            text: '不理睬',
            result: '{user}一天晚上遇到一个叫“扣鼻”的生物，问她要不要签订契约，出卖灵魂来换取一个愿望。{user}无视了“扣鼻”。'
        }
            ]
        },
        'dbrs_219': {
            title: '魔法少女',
            description: '{user}是一位魔法少女，她的武器是___',
            priority: 1,
            trigger_conditions: { age_range: [10, 20], required_tags: ['女性'] },
            options: [
        {
            text: '火枪',
            result: '你做出了选择。'
        },
        {
            text: '光之箭',
            result: '你做出了选择。'
        },
        {
            text: '长矛',
            result: '你做出了选择。'
        },
        {
            text: 'RPG',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_224': {
            title: '课堂：化学课',
            description: '化学课上，烧杯里的化学试剂忽然燃烧了起来，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [10, 120] },
            options: [
        {
            text: '拍照并发微博',
            result: '化学课上，烧杯里的化学试剂忽然燃烧了起来，{user}见状立即拿出手机，拍照并发了一条微博。{user}刚收好手机，试剂就爆炸了。{user}被炸成了重伤，挣扎着又发了一条微博。',
            effects: { health: -45 },
            add_tags: ['交网友']
        },
        {
            text: '寻找灭火器',
            result: '化学课上，烧杯里的化学试剂忽然燃烧了起来，{user}拿来干粉灭火器向着火苗喷射。火很快就熄灭了，危险解除。'
        },
        {
            text: '把试剂倒掉',
            result: '化学课上，烧杯里的化学试剂忽然燃烧了起来，{user}被吓到了，手忙脚乱拿起烧杯就倒，试剂倒到了洗手盘上后发生剧烈的反应，整个实验室都烧了起来，大火最后蔓延到整个校园，教学楼被整个烧焦……{user}进了监狱。'
        },
        {
            text: '翻书找灭火方法',
            result: '化学课上，烧杯里的化学试剂忽然燃烧了起来，{user}见状立即翻书找灭火方法。试剂突然爆炸了，书本挡住了爆炸的碎片，{user}竟然逃过一劫。'
        }
            ]
        },
        'dbrs_226': {
            title: '机密文件',
            description: '上次偷来的国家机密，{user}要怎么样处理。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '上网发布',
            result: '{user}建立了一个网站叫危机百科，上面发布了大量国家机密，点击量一下子日均4千万，{user}洋洋得意。'
        },
        {
            text: '找黑市出售',
            result: '{user}把偷来的机密，经过黑市的途径，卖出去了。'
        },
        {
            text: '自己留着',
            result: '上次偷来的国家机密，{user}选择自己留着'
        }
            ]
        },
        'dbrs_228': {
            title: '搬砖工人：工地意外',
            description: '{user}和平常一样来到工地，搬起了砖。突然，工地上的工程电梯坍塌了，从10多楼处掉下来。{user}正在下方，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 80] },
            options: [
        {
            text: '护住头，卧倒！',
            result: '{user}在工地遇上了意外，正在建的一栋大楼的工程电梯从10楼塌了下来。{user}见躲避不及，赶紧护住头，卧倒在地。接着轰的一声，电梯砸到了地上，无数钢筋、碎片四散。万幸{user}只是受了点轻伤。',
            effects: { health: -15 }
        },
        {
            text: '向楼内跑去',
            result: '{user}在工地遇上了意外，正在建的一栋大楼的工程电梯从10楼塌了下来。{user}立马向大楼方向躲避，电梯坍塌碰撞到大楼墙体，大量墙体碎片如同冰雹一样砸向{user}，其中一颗击穿了{user}的头颅。安全第一、可喜可贺，工地请戴安全帽。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '向空旷的地方跑去',
            result: '{user}在工地遇上了意外，正在建的一栋大楼的工程电梯从10楼塌了下来。{user}立马向大楼反方向躲避，电梯坍塌碰撞到大楼墙体，从电梯反弹出来，准确地砸中了{user}，{user}被砸得他妈都认不出来。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '最后看一眼这个蔚蓝的天空',
            result: '{user}在工地遇上了意外，正在建的一栋大楼的工程电梯从10楼塌了下来。{user}的一生似乎像走马灯一样在他眼前闪过，他叹了一口气，吟起了诗：“人必有一死  或轻于鸿毛 或重……”还没说完，电梯就重重地砸中了{user}。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_229': {
            title: '监狱情谊',
            description: '{user}在监狱中睡觉，室友突然走过来抚摸{user}，不知道要干什么。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '装睡',
            result: '{user}在监狱中睡觉，室友突然走过来抚摸{user}，不知道要干什么，{user}也没敢反抗，让室友在后面忙活了一晚上。'
        },
        {
            text: '转身反抗',
            result: '{user}在监狱中睡觉，室友突然走过来抚摸{user}，不知道要干什么。{user}转身反抗，乱斗中，{user}膝盖狠狠地撞到了室友的胯下，室友惨叫一声倒下了，血染红了他的裤子，医生把室友拖走后，{user}就再也没见过他了。'
        },
        {
            text: '大叫！把狱警叫过来',
            result: '{user}在监狱中睡觉，室友突然走过来抚摸{user}，不知道要干什么。{user}推开他的室友，大叫狱警。所有人都被吵醒了，监狱立马热闹了起来。大家都兴奋地在看{user}被室友爆菊花。而狱警，根本就没有狱警。',
            add_tags: ['菊花残']
        }
            ]
        },
        'dbrs_230': {
            title: '程序员：应用策划',
            description: '{user}是公司里的程序员，公司要研发一款音乐应用。{user}要怎么做？',
            priority: 1,
            trigger_conditions: { age_range: [20, 65] },
            options: [
        {
            text: '必须做成多元化应用',
            result: '公司要研发一款音乐应用，采取{user}的策划，做出来的音乐应用除了本地音乐播放，还集成实时通讯、博客、微博、SNS、杀毒、输入法、流媒体、游戏等功能。花费了大量的成本，然而用户一点都不买单。然后公司就倒闭了哈哈。'
        },
        {
            text: '必须专业',
            result: '公司要研发一款音乐应用，采取{user}的策划，应用在音质优化，声效优化等非常专业的领域做了大文章。这个应用一推出，就红遍了大江南北。{user}因此得到升职加薪。'
        },
        {
            text: '做成一个网络平台，让音乐人自己来这里上传音乐，用户自己来这里听音乐。',
            result: '公司要研发一款音乐应用，采取{user}的策划，做成了在线音乐。应用推出后，不温不火。然而，版权纠纷开始此起披伏，赔了不少钱之后，应用被下线了。{user}也被扫地出门。'
        },
        {
            text: '花钱买其他公司的成功产品源码，稍微更换外观。',
            result: '公司要研发一款音乐应用，采取{user}的策划，微创新其他成功的案例。在低成本的投入下，应用上线后，获得了巨大的成功。公司老板笑呵呵地为{user}升职加薪。'
        },
        {
            text: '剑走偏锋',
            result: '公司要研发一款音乐应用，采取{user}的策划，应用不是普通的用耳朵去听音乐，而是连接一条专用的音频驱动内裤，让你的身体去听音乐。这个产品推出后，在小众市场下大获成功，这个崭新的专利，也持续为公司盈利。{user}被提升为公司主管。'
        }
            ]
        },
        'dbrs_231': {
            title: '开始创业',
            description: '{user}有一个想法！他花了所有的积蓄，开始招兵买马，创立公司。他的公司叫___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '昆特牌公司',
            result: '你做出了选择。',
            effects: { money: -8 }
        },
        {
            text: '钱包厂',
            result: '你做出了选择。',
            effects: { money: -5 }
        },
        {
            text: '后悔，不想创业了。',
            result: '{user}没有信心创业，他最后还是放弃了创业的念头。'
        }
            ]
        },
        'dbrs_232': {
            title: '开始创业',
            description: '{user}有一个想法，他申请了贷款，开始招兵买马，创立公司。他的公司叫___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '昆特牌公司',
            result: '你做出了选择。',
            add_tags: ['贷款']
        },
        {
            text: '钱包厂',
            result: '你做出了选择。',
            add_tags: ['贷款']
        },
        {
            text: '后悔，不想创业了。',
            result: '{user}没有信心创业，他最后还是放弃了创业的念头。'
        }
            ]
        },
        'dbrs_233': {
            title: '昆特牌公司',
            description: '现在昆特牌已经成为现代人解决争端的重要手段，或可取代法律诉讼，应立即抢占市场滩头阵地，在蓝海变成红海之前成为大鱼！{user}决定公司发展路线为___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '开设实体赌场收取进场费盈利',
            result: '{user}开办昆特牌赌场，不设庄家，不违反刑法，而只提供一个争端解决的场所并抽取佣金，无风险，回报高。'
        },
        {
            text: '不建设场所，只售卖卡牌盈利',
            result: '{user}选择靠售卖昆特牌作为盈利手段，目标是达到每个人手中都有一副昆特牌。'
        }
            ]
        },
        'dbrs_234': {
            title: '争端解决的场所',
            description: '当黑帮即将火拼时，有人提出“来一局昆特牌吧”。然后两伙势力进入昆特牌公司赌场，用昆特牌来一决胜负，解决争端。这慢慢成为了一种潮流。作为昆特牌公司的老总{user}，公司的下一步计划是____',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '维持现状',
            result: '使用昆特牌来解决争端越来越普及，但只有专用赌场可以使用昆特牌。随着人民对昆特牌的需求越来越大，专用赌场的数量明显不足以满足这些需求。一些假昆特牌，山寨昆特牌陆续出现，迅速抢占市场。原昆特牌公司逐渐被市场边缘化，最后公司解散……'
        },
        {
            text: '将昆特牌赌场开成连锁店',
            result: '当黑帮即将火拼时，有人提出“来一局昆特牌吧”。然后两伙势力进入昆特牌公司赌场，用昆特牌来一决胜负，解决争端。这慢慢成为了一种潮流。作为昆特牌公司的老总{user}，公司的下一步计划是将昆特牌赌场开成连锁店，并以高度的市场前瞻性打入巴西贫民窟、中东、乌克兰、ISIS和日本涉谷等不安定地区。”'
        },
        {
            text: '为昆特牌举办世界级比赛',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_235': {
            title: '获奖',
            description: '{user}获得诺贝尔和平奖，以表彰他的昆特牌对世界和平的强大驱动力，他的昆特牌赌场已经成功消除了三次局部战争，两次种族冲突和无数次地区争端',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_236': {
            title: '争端解决的工具',
            description: '当黑帮即将火拼时，有人提出“来一局昆特牌吧”。然后两伙势力拿出昆特牌，用昆特牌来一决胜负，解决争端。这慢慢成为了一种潮流。作为昆特牌公司的老总{user}，公司的下一步计划是____',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '出售罕有的卡牌来获得巨大的利润',
            result: '你做出了选择。',
            effects: { money: 10 }
        },
        {
            text: '卡牌可以免费领取，卡牌植入广告，获取广告费。',
            result: '当黑帮即将火拼时，有人提出“来一局昆特牌吧”。然后两伙势力拿出昆特牌，用昆特牌来一决胜负，解决争端。这慢慢成为了一种潮流。作为昆特牌公司的老总{user}，公司的下一步计划是卡牌可以免费领取，卡牌植入广告，获取广告费。但是，广告收入却维持不了公司的正常运作，开始出现各种问题，最后公司还是无奈倒闭了。'
        },
        {
            text: '维持现状',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_670': {
            title: '机遇',
            description: '{user}在学校研究高能物理学科，不久后就受到三家科研公司的聘请，{user}选择了___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '黑山基地',
            result: '你做出了选择。'
        },
        {
            text: '光圈科技',
            result: '你做出了选择。'
        },
        {
            text: '火石科技',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_247': {
            title: '程序员：面向对象',
            description: '面向对象编程中，以下几个选项最正确的是：',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '松耦合，高内聚',
            result: '{user}是高级程序员，他做出来的架构松耦合，高内聚，即使是没有任何文档和注释的情况下，都能一读就懂。'
        },
        {
            text: '快速实现目的',
            result: '{user}做出来的程序，非常混乱，逻辑不明，拖累了整个公司的工作进度。老板随便找了个理由，把{user}扫地出门……',
            remove_tags: ['逻辑']
        },
        {
            text: '“封装变化”',
            result: '{user}是高级程序员，他做出来的架构非常巧妙，效率极致，每一行代码都是艺术品。'
        },
        {
            text: '面向接口编程',
            result: '{user}是高级程序员，他做出来的架构非常有预见性，而且逻辑清晰，使用简单。很快{user}就飞黄腾达，年薪去到了天文数字。',
            effects: { money: 8 },
            remove_tags: ['贫穷']
        }
            ]
        },
        'dbrs_249': {
            title: '神秘的平面',
            description: '{user}喜欢天文，有空就拿望远镜对着天空瞄。突然有一个晚上，在他面前，凭空出现了一个二维的平面，上面还写有字：你好我来自三体星系，我叫智子……',
            priority: 1,
            trigger_conditions: { age_range: [8, 120] },
            options: [
        {
            text: '落荒而逃',
            result: '{user}喜欢天文，有空就拿望远镜对着天空瞄。突然有一个晚上，在他面前，凭空出现了一个二维的平面，上面还写有字：“你好我来自三体星系，我叫智子……”{user}被突如其来的设定吓到了，夺门就跑。但无论他跑到哪里，这个平面一直保持在他前方，就算他闭上眼，这个平面也没有消失！最后{user}的头狠狠地撞到了墙壁上，与世长辞。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '跟“智子”交流',
            result: '{user}喜欢天文，有空就拿望远镜对着天空瞄。突然有一个晚上，在他面前，凭空出现了一个二维的平面，上面还写有字：你好我来自三体星系，我叫智子……{user}并没有慌，他淡定地与“智子”交流，与“智子”成为了好朋友'
        },
        {
            text: '自卫',
            result: '{user}喜欢天文，有空就拿望远镜对着天空瞄。突然有一个晚上，在他面前，凭空出现了一个二维的平面，上面还写有字：你好我来自三体星系，我叫智子……突然出现的这个东西超过了{user}的理解极限，惶恐的他向“智子”挥舞双拳，攻击“智子”。然而这个平面根本摸不着，{user}的攻击没有任何用处。平面又显示出一行文字：“既然你不喜欢智子，智子只好离去。”然后平面就消失不见了，留下心神未定的{user}一个人在发愣。'
        }
            ]
        },
        'dbrs_248': {
            title: '魔法少女：战斗',
            description: '{user}看到一个粉红色头发的学妹夹着双腿，非常难受。你发现她正在被魔女折磨！{user}立马换装，进入魔女结界，突突突，脆弱的魔女被{user}三两下就解决了。然后{user}___',
            priority: 1,
            trigger_conditions: { age_range: [10, 28] },
            options: [
        {
            text: '转身离开',
            result: '{user}再一次打败了魔女，拯救了一个粉红色头发的学妹。{user}拍拍身上的尘土，转身就走。殊不知，这个魔女再生了，变成了更巨大的魔女，一口咬掉了{user}的头……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '去看看这个初中生',
            result: '{user}再一次打败了魔女，拯救了一个粉红色头发的学妹。{user}转身看着学妹，笑了笑说：“现在安全啦。”殊不知，这个魔女再生了，变成了更巨大的魔女，一口咬掉了{user}的头……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '装逼',
            result: '{user}再一次打败了魔女，拯救了一个粉红色头发的学妹。{user}智慧若干支火枪在空中花式盘旋，高兴地装起了逼。殊不知，这个魔女再生了，变成了更巨大的魔女，一口咬掉了{user}的头……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '鞭尸',
            result: '{user}再一次打败了魔女，拯救了一个粉红色头发的学妹。{user}发现魔女还没消散，谨慎的她抬起了更多火枪，冲魔女尸体集火。5分钟后尸体终于消失了，{user}回头寻找学妹，发现她早已吓跑了，原地只有一泡尿。'
        }
            ]
        },
        'dbrs_250': {
            title: '=NAME=的消费观念',
            description: '{user}的消费观念是___的。',
            priority: 1,
            trigger_conditions: { age_range: [12, 120] },
            options: [
        {
            text: '不舍得花钱',
            result: '非常抠门',
            effects: { money: 1 },
            add_tags: ['抠门']
        },
        {
            text: '会在喜欢的东西上花钱',
            result: '节约',
            effects: { money: 1 },
            add_tags: ['节约']
        },
        {
            text: '在觉得便宜的东西上花钱',
            result: '冲动消费',
            add_tags: ['冲动消费']
        },
        {
            text: '在觉得性价比高的东西上花钱',
            result: '务实',
            add_tags: ['务实']
        },
        {
            text: '随便买，懒得挑',
            result: '浪费',
            effects: { money: -1 },
            add_tags: ['浪费']
        },
        {
            text: '挥洒钱财是我的态度',
            result: '败家',
            effects: { money: -2 },
            add_tags: ['败家']
        }
            ]
        },
        'dbrs_1626': {
            title: '神秘短信',
            description: '有一天，{user}收到一条未知号码的消息：您好，我叫{user}，我从20年后穿越而来。在我的年代，经过核毁灭的地球已经由电脑“天网”统治，我是人类抵抗军首领，此次回来的任务是摧毁“天网”总部，但是在穿越途中，程序失控，我掉到了申国，没有路费去“天网”总部，距离太远了，如果您愿意援助一下我，给我一点路费的话，我会让你做人类抵抗军的总司令！谢谢！{user}看完消息，选择___。',
            priority: 1,
            trigger_conditions: { age_range: [12, 28] },
            options: [
        {
            text: '无视这个人',
            result: '你做出了选择。'
        },
        {
            text: '打钱给这个人',
            result: '你做出了选择。',
            effects: { money: -1 }
        }
            ]
        },
        'dbrs_260': {
            title: '糖尿病',
            description: '一向身体虚弱的{user}，糖尿病恶化非常迅速。{user}身体开始有各种并发症。医生断言，{user}最多还有2年命，请他享受最后的时光。',
            priority: 1,
            trigger_conditions: { age_range: [30, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_267': {
            title: '老人跌倒',
            description: '{user}在街上闲逛，突然遇到了一个倒地的老人。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [12, 30] },
            options: [
        {
            text: '扶起老人',
            result: '{user}在街上闲逛，突然遇到了一个倒地的老人。{user}过去把老人扶起来，老人突然抱住{user}的手不放，大叫“我跌伤啦，你这个人怎么这样，赔钱呀。”{user}一下子懂了，但是已经太迟。{user}掏出钱包，数了几张丢给老人，老人把钱捡了，爬起来走了，好像什么事都没发生一样。'
        },
        {
            text: '不理睬',
            result: '{user}在街上闲逛，突然遇到了一个倒地的老人。{user}当没看到，径直走过。'
        },
        {
            text: '就看看，不说话。',
            result: '{user}在街上闲逛，突然遇到了一个倒地的老人。{user}站旁边看了一下，走了。'
        },
        {
            text: '报警',
            result: '{user}在街上闲逛，突然遇到了一个倒地的老人。{user}想了想，拿起电话报警了。老人见状竟然爬了起来，一溜烟跑了。'
        }
            ]
        },
        'dbrs_271': {
            title: '人老机器坏',
            description: '{user}发现他老是忘记事情，炒菜忘了给盐、上厕所忘记冲、忘记人的名字，有时候甚至还会忘记他家在哪。',
            priority: 1,
            trigger_conditions: { age_range: [55, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['老人痴呆']
        }
            ]
        },
        'dbrs_272': {
            title: '退休',
            description: '{user}到了年龄，依依不舍地退休了，他再也不能在他舒服的办公室享受功夫茶了。',
            priority: 1,
            trigger_conditions: { age_range: [55, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_273': {
            title: '人老机器坏',
            description: '{user}老了，身体不如以前了。',
            priority: 1,
            trigger_conditions: { age_range: [60, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1500': {
            title: '比惨王：音乐表演',
            description: '在《申国比惨王》节目中，轮到{user}上台表演，他表演的节目是___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '清唱《Lost Rivers》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '《堵你下课》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '《新华增员操》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '《香汗淋漓》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '《新华增员操》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '《爱杀宝贝ED》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '《四小天鹅舞曲》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '《吉赛尔》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '走心跳舞',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '随性跳舞',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '机械舞',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '托马斯扫堂腿',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '广场舞《那一夜》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '广场舞《走进新时代》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '演奏《啪嗒砰》',
            result: '在《申国比惨王》节目中，轮到{user}上台表演，他表演的节目是演奏《啪嗒砰》。现场观众被{user}这富有灵魂的鼓声带动，纷纷跟着鼓点点头哈腰。',
            add_tags: ['音乐分']
        },
        {
            text: '演奏《桔梗之歌》',
            result: '在《申国比惨王》节目中，轮到{user}上台表演，他表演的节目是演奏《桔梗之歌》。',
            add_tags: ['音乐分']
        },
        {
            text: '钢琴独奏《野蜂飞舞》',
            result: '在《申国比惨王》节目中，轮到{user}上台表演，他表演的节目是钢琴独奏《野蜂飞舞》。极快节奏的钢琴独奏，让现场观众沸腾起来。',
            add_tags: ['音乐分']
        },
        {
            text: '钢琴独奏《献给爱丽丝》',
            result: '在《申国比惨王》节目中，轮到{user}上台表演，他表演的节目是钢琴独奏《献给爱丽丝》。古典的钢琴曲似乎不是很能挑起现场观众的兴趣。',
            add_tags: ['音乐分']
        },
        {
            text: '现场喊麦',
            result: '在《申国比惨王》节目中，轮到{user}上台表演，他表演的节目是现场喊麦。{user}播放起了自己的饮歌，戴上墨镜，开始了喊麦：“AV body ！ boy 三个屌！ This is NO.1 disco party now ！”',
            add_tags: ['音乐分']
        },
        {
            text: '模仿鸟叫',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '口哨歌《Whistle》',
            result: '你做出了选择。',
            add_tags: ['音乐分']
        },
        {
            text: '随便唱点歌',
            result: '在《申国比惨王》节目中，轮到{user}上台表演，他啥都不会，只好随心唱点平时卡拉OK唱的歌。'
        },
        {
            text: '拒绝表演',
            result: '在《申国比惨王》节目中，轮到{user}上台表演时他怯场了，不敢上去。{user}被直接淘汰了，他被人赶出了节目现场。'
        }
            ]
        },
        'dbrs_282': {
            title: '约会',
            description: '{user}在和男朋友约会吃甜品，{user}在她的甜品中吃到了一个坚硬的东西，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [12, 55], required_tags: ['女性'] },
            options: [
        {
            text: '吐~',
            result: '{user}在和男朋友约会吃甜品。男朋友在{user}的甜品中藏了一枚戒指。{user}吃到戒指，她并不知道是什么，往旁边一吐，戒指掉到了地上，滚进了下水渠里……隔天{user}和男友就分手了。',
            remove_tags: ['恋爱']
        },
        {
            text: '手伸进嘴里夹出来',
            result: '{user}在和男朋友约会吃甜品。{user}在甜品里吃到一枚男朋友准备的戒指，然后{user}和男友就结婚了。',
            add_tags: ['结婚'],
            remove_tags: ['恋爱']
        },
        {
            text: '喜形于色',
            result: '{user}在和男朋友约会吃甜品。{user}在甜品里吃到一个硬硬的东西，{user}立马脸红了，她知道这一定是男友求婚的戒指。{user}有点太激动了，一不小心，戒指被{user}吞了。{user}立马被赶到的120救护车送到最近的医院。乐极生悲。',
            effects: { health: -35 }
        }
            ]
        },
        'dbrs_1017': {
            title: '狗的回忆',
            description: '{user}又成为了一只土狗，他已经很老了。{user}整天坐在家里的阳台上，看着外面的花花世界，回忆自己的美好时光。两年后，{user}在家中安详地老死。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_325': {
            title: '魔界：最终战斗（昆特牌）',
            description: '{user}找到并闯入了魔王城，他杀到了魔王大厅，与坐在王座的魔王对峙。{user}突然从口袋里掏出一副纸牌，对魔王说：“来一盘昆特牌把。”魔王笑笑，也从他衣服口袋里掏出一副昆特牌。他们两个在地上开始了昆特牌战斗。{user}采用的牌系是___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '怪物',
            result: '{user}和魔王的最终之战，是一盘昆特牌，{user}的牌明显比魔王的弱B很多，很快就败下阵来。{user}输了比赛，被魔王砍掉了头颅。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '松鼠党',
            result: '{user}和魔王的最终之战，是一盘昆特牌，{user}的牌明显比魔王的弱B很多，很快就败下阵来。{user}输了比赛，被魔王砍掉了头颅。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '北方王国',
            result: '{user}和魔王的最终之战，是一盘昆特牌。比赛并没有多精彩，面对{user}的攻势，魔王根本没有招架之力。{user}赢得了比赛，拔出捡来，插进了魔王的心脏，完成了他的任务。'
        },
        {
            text: '帝国',
            result: '{user}和魔王的最终之战，是一盘昆特牌。比赛并没有多精彩，面对{user}的攻势，魔王根本没有招架之力。{user}赢得了比赛，拔出捡来，插进了魔王的心脏，完成了他的任务。'
        }
            ]
        },
        'dbrs_681': {
            title: '领赏',
            description: '带着魔王的头颅，{user}回到了宫殿中。{user}出色地完成了任务，国王非常高兴，询问{user}还需要什么报答。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '金钱',
            result: '带着魔王的头颅，{user}回到了宫殿中。{user}出色地完成了任务，国王非常高兴，询问{user}还需要什么报答。{user}选择了金钱，国王给了{user}一大包金币，这些在现实世界中能卖到好几亿元。',
            effects: { money: 30 }
        },
        {
            text: '我想住在皇宫',
            result: '带着魔王的头颅，{user}回到了宫殿中。{user}出色地完成了任务，国王非常高兴，询问{user}还需要什么报答。{user}觉得在这里环境优美，鸟语花香，要求在皇宫住下，国王欣喜地答应了。从此，再也没有人看到过{user}。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '拒绝报酬，并向国王介绍雷锋精神。',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_298': {
            title: '战争：行军',
            description: '{user}在行军中突然把他的抢掉进了河里。{user}着急地跳水寻找，这时候有一个胡子很长的老爷爷问{user}：“我找到一把黄金AK47，一把银AK47和一把普通的95式，哪一把是你的抢？”{user}想了想，选了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '黄金AK47',
            result: '你做出了选择。'
        },
        {
            text: '银AK47',
            result: '你做出了选择。'
        },
        {
            text: '普通的95式',
            result: '{user}在行军中突然把他的抢掉进了河里。{user}着急地跳水寻找，找抢的时候有个老头出现了，老头把抢还给{user}，还送给{user}2把抢，老头立马给部队抓了起来，送往最近的派出所。'
        },
        {
            text: '三把都不是',
            result: '{user}在行军中突然把他的抢掉进了河里。{user}着急地跳水寻找，最后还是没能找到抢……回到部队被臭骂了一顿。'
        }
            ]
        },
        'dbrs_297': {
            title: '卫国战争：埋伏',
            description: '卫国战争前线，{user}的前线部队受到了敌人的伏击，被困在了一栋大楼里，通信被切断。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '守住这栋大楼，直到救援到来。',
            result: '卫国战争前线，{user}的前线部队受到了敌人的伏击，被困在了一栋大楼里，{user}与士兵们坚守阵地，终于等到了后面大部队的救援，化险为夷。'
        },
        {
            text: '突围',
            result: '卫国战争中，{user}军队被敌军包围，{user}带领士兵突围，英勇牺牲。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '卫国战争中，=NAME=军队被敌军包围，=NAME=带领士兵突围，英勇牺牲。'
        },
        {
            text: '投降',
            result: '{user}在战争中变成了敌国的俘虏。{user}没熬过敌人的严刑拷打，牺牲了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在战争中变成了敌国的俘虏。=NAME=没熬过敌人的严刑拷打，牺牲了。'
        }
            ]
        },
        'dbrs_1013': {
            title: '胜利',
            description: '卫国战争取得胜利！申国人们都在为战争的结束而喝彩。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_302': {
            title: '战争：快择',
            description: '卫国战争前线，{user}部队与敌国巷战，突然一对母女头上兜着丝巾从街角缓缓走出，似乎是平民。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '不要伤及平民',
            result: '{user}部队在边境城市战斗时，受到恐怖主义炸弹袭击，{user}所在的整个连的部队全部人都给炸死了……哦不，是牺牲了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=部队在边境城市战斗时，受到恐怖主义炸弹袭击，=NAME=所在的整个连的部队全部人都给炸死了……哦不，是牺牲了。'
        },
        {
            text: '不要伤及无辜',
            result: '{user}部队在边境城市战斗时，受到恐怖主义炸弹袭击，{user}所在的整个连的部队全部人都给炸死了……哦不，是牺牲了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=部队在边境城市战斗时，受到恐怖主义炸弹袭击，=NAME=所在的整个连的部队全部人都给炸死了……哦不，是牺牲了。'
        },
        {
            text: '无视',
            result: '{user}部队在边境城市战斗时，受到恐怖主义炸弹袭击，{user}所在的整个连的部队都给炸死了……哦不，是牺牲了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=部队在边境城市战斗时，受到恐怖主义炸弹袭击，=NAME=所在的整个连的部队都给炸死了……哦不，是牺牲了。'
        },
        {
            text: '开枪射击',
            result: '卫国战争前线，{user}部队与敌国巷战，突然一对母女头上兜着丝巾从街角缓缓走出，似乎是平民。{user}早已看穿了一切，开枪击毙这2个人，这2个人倒下的时候，一摞摞手榴弹从他们的衣服里滚出来……'
        }
            ]
        },
        'dbrs_1015': {
            title: '退休娱乐',
            description: '{user}退休后，他有空就___',
            priority: 1,
            trigger_conditions: { age_range: [50, 120] },
            options: [
        {
            text: '钓鱼',
            result: '你做出了选择。',
            add_tags: ['老年生活']
        },
        {
            text: '下棋',
            result: '你做出了选择。',
            add_tags: ['老年生活']
        },
        {
            text: '喝早茶',
            result: '你做出了选择。',
            add_tags: ['老年生活']
        }
            ]
        },
        'dbrs_303': {
            title: '地震',
            description: '{user}所在的城市发生了12级地震，{user}正在上厕所！',
            priority: 1,
            trigger_conditions: { age_range: [12, 30] },
            options: [
        {
            text: '拉起裤子就跑！',
            result: '{user}在上厕所，遇到了12级大地震。{user}提起裤子就往外跑，刚刚跑出厕所，厕所就崩塌了，好险！'
        },
        {
            text: '拿纸擦屁股！',
            result: '{user}在上厕所，遇到了12级大地震。{user}立马拉厕纸，想擦屁股。刚擦干净，厕所坑溅起屎花粘到了{user}，{user}慌忙再擦，厕所坑又溅起屎花粘到{user}。艹'
        },
        {
            text: '拿纸擦嘴！',
            result: '{user}在上厕所，遇到了12级大地震。{user}立马拉厕纸擦干净嘴就跑了。'
        },
        {
            text: '拍照发盆友圈',
            result: '{user}在上厕所，遇到了12级大地震。{user}立马打开手机摄像头，伸长手，摆了个仰视镜头的姿势，拍了一张照片发上盆友圈。'
        },
        {
            text: '并没有慌',
            result: '{user}在上厕所，遇到了12级大地震。{user}并没有慌，继续拉屎，手纸给震没了，{user}就拿瓦砾来擦屁股。'
        },
        {
            text: '并没有慌',
            result: '{user}在上厕所，遇到了12级大地震。{user}并没有慌，继续拉屎，手纸给震没了，{user}就拿瓦砾来擦嘴。'
        }
            ]
        },
        'dbrs_306': {
            title: '魔界：遭遇',
            description: '{user}从王都向魔王城出发，在路上碰到了一伙儿强盗。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '跪地求饶',
            result: '{user}从王都向魔王城出发，在路上碰到了一伙儿强盗。{user}立马跪下轮流叫大爷，然后把身上的盘川都给了这些人，这些强盗哈哈大笑，然后走了。',
            effects: { money: -5 }
        },
        {
            text: '虚张声势，吓走他们',
            result: '{user}从王都向魔王城出发，在路上碰到了一伙儿强盗。{user}大感不妙，他大喝一声摆出花俏的架势，看起来好像很能打一样。强盗们大眼看小眼，然后一起上前围殴{user}。打够了之后，抢了钱，强盗离开了。'
        },
        {
            text: '装酷，然后半拔剑',
            result: '{user}从王都向魔王城出发，在路上碰到了一伙儿强盗。{user}站定，甩甩头发，把剑拔出来半截，凶狠地看着强盗。强盗似乎被震住了，自觉无趣地散了。'
        }
            ]
        },
        'dbrs_304': {
            title: '郊游',
            description: '{user}和小伙伴去山上郊游，大家决定就地取材野餐，{user}把___作为食材：',
            priority: 1,
            trigger_conditions: { age_range: [10, 30], required_tags: ['男性'] },
            options: [
        {
            text: '胖胖的蘑菇',
            result: '{user}和小伙伴去山上郊游，野炊。{user}收集了一些胖胖的蘑菇，煮了一锅，大家吃。一边吃，一边在聊天，聊到一半大家似乎意识到什么，突然有人问：“这蘑菇哪里来的啊，会不会有毒…”的时候，众人陆续开始呼吸困难，口吐白沫，全部倒下了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '河里的鱼',
            result: '{user}和小伙伴去山上郊游，野炊。{user}钓了一些鱼，大家高高兴兴地烤着吃了。'
        },
        {
            text: '田螺',
            result: '{user}和小伙伴去山上郊游，野炊。{user}去河里捞了一桶大田螺，煮熟大家开开心心地吃起来了。',
            add_tags: ['寄生虫']
        },
        {
            text: '不知名的野果',
            result: '{user}和小伙伴去山上郊游，野炊。{user}采了一箩筐野果，和大家边聊天边吃了。'
        },
        {
            text: '五片叶的三叶草',
            result: '{user}和小伙伴去山上郊游，野炊。途中{user}吃了一棵五片叶的三叶草，突然眼前的世界开始模糊，{user}穿越到了一个陌生的地方。'
        },
        {
            text: '青蛙',
            result: '{user}和小伙伴去山上郊游，野炊。{user}在河岸边抓了很多青蛙，做成了烧烤青蛙，和小伙伴高高兴兴地吃了。',
            add_tags: ['寄生虫']
        },
        {
            text: '蝙蝠',
            result: '{user}和小伙伴去山上郊游，野炊。{user}在山洞里抓了几只蝙蝠，大家烤着吃了。',
            add_tags: ['口臭']
        }
            ]
        },
        'dbrs_308': {
            title: '魔界：巫师',
            description: '{user}路过一个森林小屋，里面住着一个老巫师，他一头白发，脸上有一条骇人的刀痕，他给了勇者一瓶颜色古怪的药酒，说喝了这个，你会获得暂时的狩魔猎人的能力。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '收下',
            result: '{user}路过一个森林小屋，里面住着一个老巫师，他一头白发，脸上有一条骇人的刀痕，他给了勇者一瓶颜色古怪的药酒，说喝了这个，你会获得暂时的勇者之力。{user}尝试着舔了一点，身体立马好像灌满了力量。',
            add_tags: ['狩魔猎人']
        },
        {
            text: '拒绝',
            result: '{user}路过一个森林小屋，里面住着一个老巫师，他一头白发，脸上有一条骇人的刀痕，他给了勇者一瓶颜色古怪的药酒，说喝了这个，你会获得暂时的勇者之力。{user}一口拒绝了，觉得这个巫师一定不是什么好人。'
        }
            ]
        },
        'dbrs_305': {
            title: '异世界召唤',
            description: '{user}和小伙伴去山上郊游，野炊。途中{user}吃了一棵五片叶的三叶草，突然眼前的世界开始模糊，{user}穿越到了一个陌生的地方。{user}被召唤到了异世界，国王请求他去打到魔王，{user}答应了，并提出了条件“___”，国王满足了{user}的条件，给{user}带领一个王国精英小队一同触发讨伐魔王。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '我要一个对象',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        },
        {
            text: '无条件',
            result: '{user}被召唤到了异世界，国王请求他去打到魔王，{user}答应了。'
        },
        {
            text: '和我来一盘坤特牌',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_326': {
            title: '魔界：最终战斗',
            description: '{user}找到并闯入了魔王城，他杀到了魔王大厅，与坐在王座的魔王对峙。{user}剑已出鞘，他又舞动了几下手，身上就加满了BUFF，金光闪闪。魔王见状，也从王位上站起来，准备迎战。{user}所使用的剑是___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '菜刀',
            result: '{user}和魔王的最终之战，{user}抽出了他短小的刀，竟然是一把斩骨菜刀。魔王愣了愣，在他的世界里，从来都没见过这样的刀。交战中，{user}怪异的刀和怪异的战斗手法，魔王都应付不来，节节败退。最后，魔王被{user}砍中要害，鸡叫一声而死。'
        },
        {
            text: '鬼剑士之剑',
            result: '{user}和魔王的最终之战，{user}用他变异的手抽出他的剑，剑在不断散发着幽光。{user}砍向魔王，剑砍中了魔王，魔王却在加血……魔王笑笑说：“没冲钱，就不要玩魔剑。”然后一下就把{user}秒杀了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '叶良辰の战魂所附着的宝剑',
            result: '{user}和魔王的最终之战，{user}抽出他的宝剑，立马好像变了一个人，杀气从{user}身体散发出来，搓搓逼人。他对魔王说：“如果你想试试，良辰不妨陪你玩玩儿。”魔王立马慌了，腿一软跪在了地上，对{user}扣头道歉，弃械投降。'
        },
        {
            text: '日本刀',
            result: '{user}和魔王的最终之战，{user}抽出他的日本刀，出全力向魔王砍去。魔王侧身一躲，轻松地躲过了。{user}的全力一击被魔王躲过，{user}感到无比的耻辱，他装逼地说了句：“躲得不错！是我输了！”话毕，{user}跪下剖腹，流血而死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '使用喷火技能！',
            result: '{user}找到并闯入了魔王城，他杀到了魔王大厅，与坐在王座的魔王对峙。{user}剑已出鞘，他又舞动了几下手，身上就加满了BUFF，金光闪闪。魔王见状，也从王位上站起来，准备迎战。{user}深呼吸一口气，喷出耀眼的火焰！魔王瞬间被火焰吞噬，被烧成了灰烬。'
        },
        {
            text: '使用喷火技能！',
            result: '{user}找到并闯入了魔王城，他杀到了魔王大厅，与坐在王座的魔王对峙。{user}剑已出鞘，他又舞动了几下手，身上就加满了BUFF，金光闪闪。魔王见状，也从王位上站起来，准备迎战。{user}把戴在手上的手套摘掉了，被封印多年的冰魔法此刻解禁！整个魔王大厅突然寒气来袭，并且响起了BGM。{user}一边唱着“让它去，让它去”，一边施展冰魔法把魔王消灭了，完全不费功夫。'
        }
            ]
        },
        'dbrs_309': {
            title: '魔界：伏击',
            description: '{user}带领的军队，在讨伐魔王的征途中。他们经过一个沼泽的时候，从沼泽突然浮出很多半人半鱼的生物，拿着三叉戟向他们攻击。经过一阵苦斗，打得两败俱伤。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_307': {
            title: '魔界：村子',
            description: '{user}路过一个村子，看到里面有一个身穿护甲的守卫，头上顶着NPC三个大字。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '上前问路',
            result: '{user}路过一个村子，看到里面有一个身穿护甲的守卫，头上顶着NPC三个大字。不管{user}和他说什么，他都只回答：“想当年我也是一位勇者，直到我的膝盖中了一箭。”'
        },
        {
            text: '无视',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_315': {
            title: '无人问津',
            description: '{user}从不接小案子，他认为自己这个身份地位，非得要接大案子不可。然而并没有大案子来找他，他整天就坐在办公室，上上网玩玩页游逗比人生。',
            priority: 1,
            trigger_conditions: { age_range: [20, 75] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_313': {
            title: '魔界：雪山',
            description: '{user}和他的军队正在讨伐魔王的路上，遇到了一座雪山。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '绕路',
            result: '{user}和他的军队正在讨伐魔王的路上，遇到了一座雪山。{user}只好绕路，走远了很多路程'
        },
        {
            text: '翻过这座山',
            result: '{user}和他的军队正在讨伐魔王的路上，遇到了一座雪山，雪山很大，绕路的话路程会很远。{user}决定搏一搏，翻山过去。于是{user}选择了一条上山小径继续前进，还走多远，突然就刮起了暴风雪，还夹着一些冰块！{user}和他的军队被冰块砸晕，然后被大雪慢慢埋住了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '愚公移山',
            result: '{user}和他的军队正在讨伐魔王的路上，遇到了一座雪山，雪山很大，绕路的话路程会很远。{user}看了看军队里有女兵，立马上前拖她的衣服，还跟女兵说“愚公移山”的故事……女兵听完，拔剑直接把{user}头砍了下来。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_316': {
            title: '官司：贪污公诉',
            description: '某个地方高官，涉嫌贪污被立案侦查。他找到了{user}，给了{user}丰厚的报酬，请求帮助。',
            priority: 1,
            trigger_conditions: { age_range: [20, 75] },
            options: [
        {
            text: '勾结黑社会，恐吓证人。',
            result: '某个地方高官，涉嫌贪污被立案侦查。他找到了{user}，给了{user}丰厚的报酬，请求帮助。{user}使了一点钱，请到了有名的黑社会组织，威胁要出庭的各个证人。然而这并没有用，因为关键证据已经被上交给了检察院。这个高官还是受到了严惩。'
        },
        {
            text: '苦肉计',
            result: '某个地方高官，涉嫌贪污被立案侦查。他找到了{user}，给了{user}丰厚的报酬，请求帮助。{user}想到了一个苦肉计，将官员的老婆、女儿、母亲打致不同程度伤残。然后在法庭上以这个家庭悲剧，博得了公众的同情，最后竟然从轻处理。不但没有没收家产，还获得了粉红十字会的免费资金援助。',
            effects: { money: 3 }
        },
        {
            text: '想办法夺取或销毁关键证据',
            result: '某个地方高官，涉嫌贪污被立案侦查。他找到了{user}，给了{user}丰厚的报酬，请求帮助。{user}利用职务的便利，从档案室偷出相关的贪污的关键证据。销毁之后，{user}立马被公安机关抓获了。{user}在坐牢的时候得道消息，那个官员已经无罪释放，并且把巨额的报酬汇到了一个账户里等待{user}去取出。',
            effects: { money: 3 }
        },
        {
            text: '并不想理这个贪官',
            result: '某个地方高官，涉嫌贪污被立案侦查。他找到了{user}，给了{user}丰厚的报酬，请求帮助。但{user}对贪污这种东西深恶痛绝，坚决拒绝了这单官司。'
        },
        {
            text: '证明当事人“意识不清醒”的时候贪污受贿',
            result: '某个地方高官，涉嫌贪污被立案侦查。他找到了{user}，给了{user}丰厚的报酬，请求帮助。{user}花了点钱，请医生给官员开了一份《久坐精神恍惚症证明》，证明称：“长期久坐导致臀大肌变形，压迫周围血管导致大脑缺氧，最后使患者大脑处于精神恍惚状态。”在法庭上公开了这份证明，并说明了这个官员一直是处于精神疾病状态下，并不是以自己意志做的贪污。{user}打赢了官司，博得了法庭内一致的认同，最后民众纷纷向这位官员道歉。',
            effects: { money: 3 }
        }
            ]
        },
        'dbrs_314': {
            title: '车祸',
            description: '{user} 在高速公路上遭遇了车祸。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '当时正在睡觉',
            result: '{user}在高速公路上遇上车祸了，正在熟睡的{user}毫不知情，被旁边的乘客叫醒，才发现撞车了。',
            add_tags: ['车祸阴影']
        },
        {
            text: '是司机',
            result: '{user}驾驶的汽车在高速公路上遇上车祸了，安全气囊故障没能弹出，{user}被抛出窗外，撞墙而死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '当时在听MP3',
            result: '{user} 在高速公路遇上车祸了，车祸瞬间，{user}护住自己的耳机，自己跌成了重伤。{user}被送去医院。',
            effects: { health: -25 },
            add_tags: ['车祸阴影']
        },
        {
            text: '当时在看窗外。',
            result: '{user}在高速公路上遇上车祸了，混乱中，车窗的玻璃震碎插进{user}的头壳中。{user}没有立马死去，品尝了几分钟痛楚的味道后才去世了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在高速公路上遇上车祸了，混乱中，车窗的玻璃震碎插进=NAME=的头壳中。=NAME=没有立马死去，品尝了几分钟痛楚的味道后才去世了。'
        },
        {
            text: '当时在吃东西',
            result: '{user}在高速公路上遇上了车祸，他当时正在吃薯片，车祸时薯片都洒了，不过幸好人没事。',
            add_tags: ['车祸阴影']
        }
            ]
        },
        'dbrs_317': {
            title: '魔界：雪山',
            description: '{user}和他的军队正在讨伐魔王的路上，遇到了一座雪山。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '绕路',
            result: '{user}和他的军队正在讨伐魔王的路上，遇到了一座雪山。{user}只好绕路，走远了很多路程'
        },
        {
            text: '翻过这座山',
            result: '{user}和他的军队正在讨伐魔王的路上，遇到了一座雪山，雪山很大，绕路的话路程会很远。{user}决定搏一搏，翻山过去。于是{user}选择了一条上山小径继续前进，还走多远，突然就刮起了暴风雪，还夹着一些冰块！{user}和他的军队被冰块砸晕，然后被大雪慢慢埋住了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '愚公移山',
            result: '{user}和他的军队正在讨伐魔王的路上，遇到了一座雪山，雪山很大，绕路的话路程会很远。{user}挑了一个看起来最帅气的士兵，脱掉了他的衣服，跟他说愚公移山的故事。于是这个军队就以愚公移山之名，在山下定居了起来，发展成了一个小村庄。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_320': {
            title: '魔界：进入魔界',
            description: '{user}翻过刀山，越过火海，终于进入了魔界，这里充满了妖怪，也有城市和乡镇，一副欣欣向荣的景象。{user}也累了，___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '决定停下来扎营休息一天,然后再进攻魔王城。',
            result: '你做出了选择。'
        },
        {
            text: '但却马不停蹄向魔王城进发',
            result: '你做出了选择。'
        },
        {
            text: '找旅馆住下了',
            result: '{user}翻过刀山，越过火海，终于进入了魔界，这里充满了妖怪，也有城市和乡镇，一副兴兴向荣的景象。{user}也累了，找了个妖怪经营的旅馆，住下了。和当地的妖怪做了好朋友，逗留了几天，{user}就继续向魔王城进发了。'
        },
        {
            text: '见到妖怪就杀',
            result: '{user}翻过刀山，越过火海，终于进入了魔界，这里充满了妖怪，{user}见到妖怪就杀，根本不管。所到之处，血染土地。'
        }
            ]
        },
        'dbrs_348': {
            title: '单身综合症',
            description: '{user}到{age}岁了，还没谈过恋爱，憋出“单身综合症”，成了一个屌丝。',
            priority: 1,
            trigger_conditions: { age_range: [45, 120], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_318': {
            title: '魔界：黑夜',
            description: '在一天晚上，突然魔王出现在了{user}的帐篷里，把{user}吵醒了，问他要不要加入自己，化敌为友，对大家都好。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '答应',
            result: '在一天晚上，突然魔王出现在了{user}的帐篷里，魔王邀请{user}加入，{user}心生畏惧，屈服在魔王的淫威之下，答应了。跟魔王签好了合同之后，{user}被魔王吸光了精气，枯萎而亡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '把剑，攻击',
            result: '在一天晚上，突然魔王出现在了{user}的帐篷里，{user}立马站起来拔剑，向魔王砍去，把魔王劈开了两半。被劈开两半的魔王变成了一缕青烟，随着魔王的淫笑慢慢消散。'
        },
        {
            text: '嘲笑',
            result: '在一天晚上，突然魔王出现在了{user}的帐篷里，{user}一看到是魔王，张嘴就问候他亲人。魔王也不甘示弱，问候他的祖宗18代。就这样在互相问候中，天亮了，魔王似乎没有了耐性，化作一缕青烟，消散了。'
        }
            ]
        },
        'dbrs_327': {
            title: '魔界：最终战斗',
            description: '{user}找到并闯入了魔王城，他杀到了魔王大厅，与坐在王座的魔王对峙。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '冲上前与其搏斗',
            result: '{user}找到并闯入了魔王城，他杀到了魔王大厅，与坐在王座的魔王对峙。{user}剑已出鞘，他又舞动了几下手，身上就加满了BUFF，金光闪闪。魔王见状，也从王位上站起来，准备迎战。'
        },
        {
            text: '来一盘昆特牌吧',
            result: '{user}找到并闯入了魔王城，他杀到了魔王大厅，与坐在王座的魔王对峙。{user}突然从口袋里掏出一副纸牌，对魔王说：“来一盘昆特牌把。”魔王笑笑，也从他衣服口袋里掏出一副昆特牌。他们两个在地上开始了昆特牌战斗。'
        }
            ]
        },
        'dbrs_319': {
            title: '魔界：神灯',
            description: '{user}在讨伐魔王途中，捡到一个奇怪的茶壶，他把壶盖打开，发现里面有个人，瞪大着眼睛看着他……然后那个人从茶壶里出来了，问{user}想实现一个什么愿望。{user}说：___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '请回到你的壶里并在我眼前消失',
            result: '你做出了选择。'
        },
        {
            text: '大宝剑',
            result: '{user}在讨伐魔王的途中，遇到阿拉丁神灯，{user}许了个愿，想得到一把宝剑来与魔王战斗。神灯听了之后，变出了一个衣不蔽体的女人就走了。{user}愕然。'
        },
        {
            text: '魔王死掉',
            result: '{user}在讨伐魔王的途中，遇到阿拉丁神灯，{user}许了个愿，想魔王死掉。神灯听后，打了个响指，说：“我去试试。”说完就飞向远方，再也没有回来……'
        },
        {
            text: '拥有很多钱',
            result: '{user}在讨伐魔王的途中，遇到阿拉丁神灯，{user}许了个愿，想要很多钱。神灯变出了很多现金，对{user}说：“今天内要把这些钱存进银行，不然就会消失。”{user}成为了土豪。',
            effects: { money: 10 }
        },
        {
            text: '我想要个对象',
            result: '{user}在讨伐魔王的途中，遇到阿拉丁神灯，{user}许了个愿，想要一个对象。神灯露出不解的表情，但还是照做了。神灯new了一个object捧在手上，递给了{user}。'
        }
            ]
        },
        'dbrs_370': {
            title: '人道毁灭：为科研献身',
            description: '{user}被送进了某个机构的负18层，他被放进了一个强子对撞机中，高速飞行的巨型强子撞击{user}，{user}立马化成了粉末。这个神秘的机构从中获取到了宝贵的实验结果，{user}的死为他们的科研作出了巨大的贡献，不枉此生。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
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
        'dbrs_324': {
            title: '魔界：疲劳',
            description: '{user}进入魔界后马不停蹄地直奔魔王城。到了魔王城，气喘呼呼的{user}根本不是魔王的对手。魔王坐在王座上，叫了几个喽啰出动，就把{user}斩杀了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_332': {
            title: '茅厕派',
            description: '等{user}翻山越岭，来到茅厕派。却发现茅厕派横尸遍野，原来是魔教老大早春秋来这里屠城了。',
            priority: 1,
            trigger_conditions: { age_range: [8, 20], required_tags: ['女性'] },
            options: [
        {
            text: '接任掌门！',
            result: '等{user}翻山越岭，来到茅厕派。却发现茅厕派横尸遍野，原来是魔教老大早春秋来这里屠城了。{user}立马搜索生还者，并接管了这里。{user}顺理成章地接任了茅厕派的掌门。'
        },
        {
            text: '离开这里',
            result: '等{user}翻山越岭，来到茅厕派。却发现茅厕派横尸遍野，原来是魔教老大早春秋来这里屠城了。场面恐怖，{user}深感不妙，快步离开。'
        },
        {
            text: '拍照发盆友圈',
            result: '等{user}翻山越岭，来到茅厕派。却发现茅厕派横尸遍野，原来是魔教老大早春秋来这里屠城了。{user}立马掏出手机拍照发了一个盆友圈，发布没多久，早春秋（魔教老大）看到了这个盆友圈，立马飞回来，秒杀了{user}，最后一个剩下的人。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_347': {
            title: '街头卖艺',
            description: '{user}在计划街头表演节目。{user}决定表演___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '走钢丝',
            result: '{user}决定上街表演走钢丝，挣点钱。'
        },
        {
            text: '吞剑',
            result: '{user}凭借着他柔软的身体，优越的身体平衡，{user}决定上街表演吞剑。{user}跟着网上的吞剑教程学习，剑果然能全部吞进喉咙，突然，{user}打了个喷嚏，喷出一口鲜血……痛死了！{user}挣扎着打120，电话打通了，却发现自己不能说话！{user}就这样活活流血而死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=凭借着他柔软的身体，优越的身体平衡，=NAME=决定上街表演吞剑。=NAME=跟着网上的吞剑教程学习，剑果然能全部吞进喉咙，突然，=NAME=打了个喷嚏，喷出一口鲜血……痛死了！=NAME=挣扎着打120，电话打通了，却发现自己不能说话！=NAME=就这样活活流血而死。'
        },
        {
            text: '心口碎大石',
            result: '{user}决定上街表演心口碎大石，挣点钱。在一次表演中，同伙的锤子砸歪了，直接砸到了{user}的下体……{user}被砸得失去了生育能力。',
            add_tags: ['功能障碍']
        },
        {
            text: '喝液化气，喷火',
            result: '{user}决定街头卖艺，表演用口喷火，挣点钱。为了与众不同，为了惊艳观众的眼球，{user}选择喝液化气，这样喷的火更大更持久。简直是找死，表演中高压的液化气进入{user}口中后直接变成气体，遇火立马爆炸了。{user}直接被炸散了，天上下起了血雨，观众四处逃窜。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_346': {
            title: '街头卖艺：走钢丝',
            description: '在表演走钢丝的时候，{user}的诀窍是___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '用2只手保持平衡',
            result: '{user}在一次走钢丝表演中发生了意外，一个老鹰停在了{user}保持平衡的手上，还咬了一下{user}。{user}失去平衡，从高空跌落，重重地摔在了水泥路上，成了肉泥。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '脑补自己走在地面上',
            result: '你做出了选择。'
        },
        {
            text: '不看地面',
            result: '{user}在走钢丝表演中，从来都是抬头看着天空，似乎一点都不怕。观众都给{user}这胆量折服，纷纷掏钱。{user}逐渐有名，他就靠走钢丝表演，赚了不少钱。',
            effects: { money: 5 }
        }
            ]
        },
        'dbrs_349': {
            title: '狂撸灰飞烟灭',
            description: '{user}单身生活毫无节制。终于，他开始尿血，去医院检查，结果是：肾功能丧失，尿毒症。医生给出2个治疗方案：一个是换肾，一个是血液透析。',
            priority: 1,
            trigger_conditions: { age_range: [50, 120], required_tags: ['男性'] },
            options: [
        {
            text: '换肾（中等风险）',
            result: '{user}自卫太过分，患上了尿毒症。他听从医生的建议，选择换肾。手术台上，主刀医生错把一款叫苹果的手机当成了肾脏，移植到了{user}体内，缝合后手机在{user}体内漏电，{user}再也没有醒过来。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '血液透析',
            result: '{user}自卫太过分，患上了尿毒症。他听从医生的建议，持续做血液透析，昂贵的治疗费用，把{user}玩得一贫如洗。',
            effects: { money: -8 }
        },
        {
            text: '喝醋',
            result: '{user}自卫太过分，患上了尿毒症。他炜疾忌医，拒绝了医生的治疗建议。回家也不知道怎么治疗，就买了几瓶醋，喝下肚。万一能治好呢？然而，大量的醋使本来脆弱的泌尿系统，再次受到残酷的冲击。喝醋第二天，{user}就身体浮肿，死在了床上。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_350': {
            title: '老人病',
            description: '{user}一天起床，发现胸口非常痛，痛得都不能站起来。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [30, 120] },
            options: [
        {
            text: '立马出门，去医院',
            result: '{user}一天起床，发现胸口非常痛，痛得都不能站起来。{user}忍着痛，立马出门去医院。跑出去没一会儿，{user}就心脏病发晕死在街头，断气了……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=一天起床，发现胸口非常痛，痛得都不能站起来。=NAME=忍着痛，立马出门去医院。跑出去没一会儿，=NAME=就心脏病发晕死在街头，断气了……'
        },
        {
            text: '回到床上',
            result: '{user}一天起床，发现胸口非常痛，痛得都不能站起来。{user}回到床上躺卧好，深呼吸了一会儿，发现胸口的疼痛没有那么严重了，才起床。'
        },
        {
            text: '大力锤胸口',
            result: '{user}一天起床，发现胸口非常痛，痛得都不能站起来。{user}大力锤了几下胸口后，突然从胸口里涌上来一股力，{user}吐了一口老血，胸口舒服了一点。{user}再用力锤自己的胸口，又一口老血吐了出来，胸口又舒服了一点，再用力锤胸口，这次，{user}吐了一口大大的血，死了……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=一天起床，发现胸口非常痛，痛得都不能站起来。=NAME=大力锤了几下胸口后，突然从胸口里涌上来一股力，=NAME=吐了一口老血，胸口舒服了一点。=NAME=再用力锤自己的胸口，又一口老血吐了出来，胸口又舒服了一点，再用力锤胸口，这次，=NAME=吐了一口大大的血，死了……'
        },
        {
            text: '打120',
            result: '{user}一天起床，发现胸口非常痛，痛得都不能站起来。{user}拿起电话就打120，跟电话里的接线员说了半天，对方愣是搞不清楚地点，活活把{user}气得惨叫一声，死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=一天起床，发现胸口非常痛，痛得都不能站起来。=NAME=拿起电话就打120，跟电话里的接线员说了半天，对方愣是搞不清楚地点，活活把=NAME=气得惨叫一声，死了。'
        }
            ]
        },
        'dbrs_358': {
            title: '打字员',
            description: '年纪一大把，没有文化没有知识。走投无路的{user}，有一天看到一个小广告诚聘打字员,{user}___了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '去应聘',
            result: '你做出了选择。'
        },
        {
            text: '并没有兴趣',
            result: '年纪一大把，没有工作，慵懒地在家中待业。'
        }
            ]
        },
        'dbrs_361': {
            title: '国庆节',
            description: '国庆节到了，{user}打算怎样安排假日的时间？',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '旅游',
            result: '{user}在国庆节出行旅游。在人山人海的旅游景点中，发生了遣踏事件，{user}在人群中被踩伤，进了医院。',
            set_attributes: { health: '' }
        },
        {
            text: '宅在家里',
            result: '国庆节到了，{user}一个人宅在家里玩逗比人生小游戏，觉得自己越来越逗比。'
        },
        {
            text: '玩什么鬼！写作业！',
            result: '{user} {age} 岁那年的国庆节，{user}在家里写了7天作业，根本停不下来。'
        },
        {
            text: '参加漫展',
            result: '这一年的国庆节，{user}去了漫展。'
        }
            ]
        },
        'dbrs_359': {
            title: '打字员：疯狂打字员',
            description: '{user}在网上签约成了一个打字员，通过接任务打字赚钱。{user}接下了___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '任务：教科书《如何与傻逼相处》',
            result: '你做出了选择。',
            add_tags: ['高情商']
        },
        {
            text: '任务：手写信纸《有关中南河下半年庆祝活动安排》',
            result: '你做出了选择。'
        },
        {
            text: '任务：教科书《地铁炸弹袭击指南》',
            result: '你做出了选择。'
        },
        {
            text: '任务：小说《在那只有白魔法的日子里》',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_360': {
            title: '赚钱不易',
            description: '{user}对打字员的工作越来越熟悉了，打字的准确率和速度也越来越好。一千字1元的工资，{user}也挺满意的。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_365': {
            title: '铅中毒',
            description: '在医院里，经过医生们的全力抢救，{user}脱离了生命危险。但是过多摄入的铅，已经让{user}成为了一个脑残。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: -35 }
        }
            ]
        },
        'dbrs_1623': {
            title: '补习班：量子速读班',
            description: '在量子速读班中，老师给{user}科普了什么叫量子，以及怎么使用量子骚动阅读。{user}虽不明但觉厉，连连点头，做笔记。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1624': {
            title: '量子速读班：实践课',
            description: '速读班的老师给班里的每个学生都发了一本字典，{user}要拿着这本字典快速翻页，并记住字典里的所有内容，10分钟后老师会来抽查背诵……{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '开始翻书',
            result: '速读班的老师给班里的每个学生都发了一本字典，{user}要拿着这本字典快速翻页，并记住字典里的所有内容，10分钟后老师会来抽查背诵……{user}埋头开始翻书，{user}只感觉翻书扇的风很凉快，至于书中的内容，{user}一点都看不到。'
        },
        {
            text: '看看周围',
            result: '速读班的老师给班里的每个学生都发了一本字典，{user}要拿着这本字典快速翻页，并记住字典里的所有内容，10分钟后老师会来抽查背诵……{user}看到同学们都开始埋头翻书了，自己也只好跟着翻书。'
        },
        {
            text: '逃课',
            result: '速读班的老师给班里的每个学生都发了一本字典，{user}要拿着这本字典快速翻页，并记住字典里的所有内容，10分钟后老师会来抽查背诵……{user}感觉这个培训班有点不正常，赶紧找机会逃跑了。'
        }
            ]
        },
        'dbrs_382': {
            title: '魔界：洞穴',
            description: '{user}在路上，遇到一个洞穴，里面发出一种神奇的异性的叫声。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '进去',
            result: '{user}在路上，遇到一个洞穴，里面发出一种神奇的异性的叫声。{user}脱掉了裤子，决定进去看个究竟。{user}进去后，就再也没有出来……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '无视',
            result: '{user}在路上，遇到一个洞穴，里面发出一种神奇的异性的叫声。{user}并不想进去，继续前进了。'
        },
        {
            text: '打电话报警',
            result: '{user}在路上，遇到一个洞穴，里面发出一种神奇的异性的叫声。{user}拿出了电话报警了，然后继续前进。'
        },
        {
            text: '发朋友圈',
            result: '{user}在路上，遇到一个洞穴，里面发出一种神奇的异性的叫声。{user}拿出手机对着洞穴拍了一张照片发朋友圈。',
            add_tags: ['交网友']
        }
            ]
        },
        'dbrs_380': {
            title: '监狱：捡肥皂',
            description: '{user}洗澡时，不小心肥皂掉地上了！{user}要怎么样捡它？',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '不要了,我还有沐浴露',
            result: '{user}洗澡时，不小心肥皂掉地上了！{user}看了一眼肥皂，叹了口气，然后淡定地拿出了沐浴露。'
        },
        {
            text: '故意弯腰捡起来',
            result: '{user}洗澡时，不小心肥皂掉地上了！{user}看了一眼后面的大叔，然后故意弯腰去捡肥皂。大叔立马弄懂了{user}的意思，上前满足了{user}。'
        },
        {
            text: '特殊的捡肥皂方法',
            result: '{user}洗澡时，不小心肥皂掉地上了！{user}用特殊的方法，用菊花夹起了肥皂，让周围虎视眈眈的众人大失所望。'
        },
        {
            text: '捡肥皂',
            result: '{user}洗澡时，不小心肥皂掉地上了！{user}弯腰捡肥皂，突然一班猛男出现在{user}身后，想要图谋不轨。但是他们看到{user}后，兴奋的表情消失了，他们无趣地离开了。'
        }
            ]
        },
        'dbrs_385': {
            title: '刑满释放',
            description: '{user}出狱了。{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '去洗浴中心洗洗晦气',
            result: '你做出了选择。'
        },
        {
            text: '吃一顿大餐庆祝一下',
            result: '你做出了选择。'
        },
        {
            text: '叫上亲朋好友去酒吧',
            result: '你做出了选择。'
        },
        {
            text: '赶紧去网吧上网',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_384': {
            title: '刑满释放',
            description: '{user}出狱了。{user}呼吸一口新鲜空气，走出了监狱门口。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_387': {
            title: '监狱：食堂暴动',
            description: '监狱食堂里的食物太难吃了。犯人们组织了一次暴动，一起把饭桌翻了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 90] },
            options: [
        {
            text: '跟着大家一起翻桌',
            result: '监狱食堂里的食物太难吃了。犯人们组织了一次暴动，一起把饭桌翻了，{user}也参与其中。狱警看到场面失控，赶紧举起他的MP5冲锋枪扫射，维持秩序。{user}被子弹击中，倒在了一堆饭菜中死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '监狱食堂里的食物太难吃了。犯人们组织了一次暴动，一起把饭桌翻了，=NAME=也参与其中。狱警看到场面失控，赶紧举起他的MP5冲锋枪扫射，维持秩序。=NAME=被子弹击中，倒在了一堆饭菜中死了。'
        },
        {
            text: '继续默默地吃饭',
            result: '监狱食堂里的食物太难吃了。犯人们组织了一次暴动，一起把饭桌翻了，{user}默默地继续吃他的饭，没有参与暴动。吃完饭后，{user}被狱友骗到了一个房间里，群殴致死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '尿遁',
            result: '监狱食堂里的食物太难吃了。犯人们组织了一次暴动，一起把饭桌翻了。{user}见情况不妙，赶紧去厕所，尿遁。躲过了一次监狱大屠杀。'
        }
            ]
        },
        'dbrs_388': {
            title: '捡肥皂',
            description: '{user}洗澡时，不小心肥皂掉地上了！{user}要怎么样捡它？',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '不要了,我还有沐浴露',
            result: '{user}洗澡时，不小心肥皂掉地上了！{user}看了一眼肥皂，叹了口气，然后淡定地拿出了沐浴露。'
        },
        {
            text: '故意弯腰捡起来',
            result: '{user}洗澡时，不小心肥皂掉地上了！{user}看了一眼后面的大姐，然后故意弯腰去捡肥皂。大姐立马弄懂了{user}的意思，上前满足了{user}。'
        },
        {
            text: '特殊的捡肥皂方法',
            result: '{user}洗澡时，不小心肥皂掉地上了！{user}用特殊的方法，用菊花夹起了肥皂，让周围虎视眈眈的众人大失所望。'
        },
        {
            text: '捡肥皂',
            result: '{user}洗澡时，不小心肥皂掉地上了！{user}弯腰，把肥皂捡了起来。'
        }
            ]
        },
        'dbrs_390': {
            title: '反恐行动',
            description: 'SWAT队员{user}，被派遣到一处民居。根据情报，这里住着一个反动国家的恐怖分子。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '踢开门，开枪扫射',
            result: 'SWAT队员{user}，被派遣到一处民居。根据情报，这里住着一个反动国家的恐怖分子。{user}踢开房门，对着里面任何会动的东西开枪。确认里面的人都死了之后，{user}才和队友们离开。',
            death_flag: true,
            death_reason: 'SWAT队员=NAME=，被派遣到一处民居。根据情报，这里住着一个反动国家的恐怖分子。=NAME=踢开房门，对着里面任何会动的东西开枪。确认里面的人都死了之后，=NAME=才和队友们离开。'
        },
        {
            text: '往窗门丢手榴弹',
            result: 'SWAT队员{user}，被派遣到一处民居。根据情报，这里住着一个反动国家的恐怖分子。来到这个民居，{user}非常谨慎，先不破门突击，往窗口丢了一个手榴弹进去。手榴弹爆炸之后，{user}冲进房间，抬起他的MP5向室内扫射。'
        },
        {
            text: '这明明只是普通的民居，根本没有恐怖分子',
            result: 'SWAT队员{user}，被派遣到一处民居。根据情报，这里住着一个反动国家的恐怖分子。然而{user}没有顺利的完成任务，让民居里的人逃跑了。{user}受到了上级的革职。'
        }
            ]
        },
        'dbrs_391': {
            title: '交警：车祸',
            description: '{user}在巡逻时巧遇一场不是很严重的车祸，2个司机都是2米高的肌肉男，在车旁厮打起来。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 75] },
            options: [
        {
            text: '赶紧逃离现场',
            result: '你做出了选择。'
        },
        {
            text: '上前劝架',
            result: '{user}在巡逻时巧遇一场不是很严重的车祸，2个司机都是2米高的肌肉男，在车旁厮打起来。{user}上前劝架，混乱中被打成了重伤，送院治疗。',
            effects: { health: -25 }
        },
        {
            text: '上前参与肉搏',
            result: '{user}在巡逻时巧遇一场不是很严重的车祸，2个司机都是2米高的肌肉男，在车旁厮打起来。{user}竟然上前参与了厮打。三人混战中，{user}被打成了脑残。',
            effects: { health: -25 },
            add_tags: ['脑残']
        },
        {
            text: '上前出示交警的证件',
            result: '{user}在巡逻时巧遇一场不是很严重的车祸，两个司机都是2米高的肌肉男，在车旁厮打起来。{user}上前出示自己的证件，阻止两人冲突。两个司机看到交警来了，立马变得规规矩矩，还握起了手，聊起了家常。'
        }
            ]
        },
        'dbrs_404': {
            title: '作弊',
            description: '{user}在高考中作弊被抓，被学校开除了。此生永远没有资格继续进入校园。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_405': {
            title: '超级路痴',
            description: '{user}在工作时，把游客带到错误的汽车上车了。他们上了一辆装满死刑犯的中巴，载往了打靶场。20多名游客，连{user}，就这么被枪毙了。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
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
        'dbrs_406': {
            title: '女司机',
            description: '{user}看见一名女司机进入停车位数次不成功，{user}上前提议要帮忙，而对方蜿蜒谢绝。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '打开车门，把女司机扯下来。然后帮她停车',
            result: '{user}看见一名女司机进入停车位数次不成功，{user}上前提议要帮忙，而对方蜿蜒谢绝。{user}强行掰开车门，把女司机拉出车外，然后把车停好。{user}本以为这样会博得女司机的青咪，谁知道他一下车就被民警抓回了派出所。',
            add_tags: ['监狱时间']
        },
        {
            text: '在一旁嘲讽',
            result: '{user}看见一名女司机进入停车位数次不成功，{user}上前提议要帮忙，而对方蜿蜒谢绝。{user}说：“唷！能力不高，逼倒是装得不错。”说完，{user}就被恼羞成怒的女司机开车撞倒，来回碾压致死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '返回岗位',
            result: '{user}看见一名女司机进入停车位数次不成功，{user}上前提议要帮忙，而对方蜿蜒谢绝。于是等女司机终于停好了车，{user}再走上前说：“这个车位是别人的月租车位，请您停别的地方。”'
        }
            ]
        },
        'dbrs_410': {
            title: '潜入',
            description: '得知两个飙车党分别为粉色骷髅和女装山脉，{user}打算先潜入到___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '粉色骷髅',
            result: '你做出了选择。'
        },
        {
            text: '女装山脉',
            result: '你做出了选择。'
        },
        {
            text: '知难而退',
            result: '涉及有关毒品的重案，实在太危险，{user}觉得不值得冒险，赶紧全身而退。'
        }
            ]
        },
        'dbrs_411': {
            title: '粉色骷髅：秋名山',
            description: '经过详细的调查，{user}很快得知粉色骷髅的据点位于南郊区的秋名山。{user}开着他的小奥拓来到了秋名山上，只见半山腰处，许多辆高档跑车停在那里，似乎要进行一场山地车赛。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '掏出手枪大喊一声不许动',
            result: '{user}在调查一个贩毒团伙的时候鲁莽行事，被犯罪分子打成了筛子，死在了异国他乡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '参加比赛',
            result: '{user}在调查一个名叫“粉色骷髅”的贩毒团伙的时候，在秋名山被迫进行赛车比赛，比赛中被一辆GTR撞出跑道，跌入山崖，粉身碎骨。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '赌车',
            result: '经过详细的调查，{user}很快得知粉色骷髅的据点位于南郊区的秋名山。{user}开着他的小奥拓来到了秋名山上，只见半山腰处，许多辆高档跑车停在那里，似乎要进行一场山地车赛。{user}顺便买了个外围，买了一辆破旧的豆腐店专用车。没想到竟然赢了一千万的奖金。最后，{user}被这帮黑帮发泄干掉了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '观看比赛',
            result: '经过详细的调查，{user}很快得知粉色骷髅的据点位于南郊区的秋名山。{user}开着他的小奥拓来到了秋名山上，只见半山腰处，许多辆高档跑车停在那里，似乎要进行一场山地车赛。在看比赛过程中，{user}了解到粉色骷髅其实是一群有钱的富二代组建的团队，而粉色骷髅的头目就是03号选手车阵。'
        }
            ]
        },
        'dbrs_409': {
            title: '调查',
            description: '根据对那几个打枪战的罪犯的审问得知，他们是当地两个飙车党的成员，因为交易毒品产生分歧最终矛盾激化。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '就此打住',
            result: '根据对那几个打枪战的罪犯的审问得知，他们是当地两个飙车党的成员，因为交易毒品产生分歧最终矛盾激化。{user}不想节外生事，把那几个人被送到了法院，{user}又恢复到了往日混吃等死的生活'
        },
        {
            text: '继续调查',
            result: '根据对那几个打枪战的罪犯的审问得知，他们是当地两个飙车党的成员，因为交易毒品产生分歧最终矛盾激化。{user}从档案库中找到了两个飙车党的资料，发现他们大大小小的案件一共犯了二百余起，于是{user}决定要亲手端了这两个飙车党'
        }
            ]
        },
        'dbrs_408': {
            title: '枪声',
            description: '夜晚，{user}带着两名同志在街上巡逻，不远处传来几处枪声！',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '掏出手枪冲了上去',
            result: '夜晚，{user}带着两名同志在街上巡逻，不远处传来几处枪声！{user}掏出手枪冲了上去，还没看清楚什么情况，{user}就吃了几十发子弹，愚蠢地死去了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '掏出手枪悄悄的摸上去',
            result: '夜晚，{user}带着两名同志在街上巡逻，不远处传来几处枪声！{user}掏出手枪悄悄的摸上去。发现一共有十多个人站在两边互相开枪，你凭借着你那精准的枪法，迅速制止住了这帮人。'
        },
        {
            text: '跑！',
            result: '夜晚，{user}带着两名同志在街上巡逻，不远处传来几处枪声！{user}深感不妙，拔腿就跑。第二天在局里，{user}被上司大骂一句，“你这个废物！”，接着就被炒鱿鱼了。'
        },
        {
            text: '呼叫支援',
            result: '夜晚，{user}带着两名同志在街上巡逻，不远处传来几处枪声！{user}深感不妙，赶紧叫支援。当支援部队到达时，发现枪声已经没有了，大街上也空无一人。'
        }
            ]
        },
        'dbrs_407': {
            title: '女司机',
            description: '{user}看见一名女司机进入停车位数次不成功，{user}上前提议要帮忙，而对方蜿蜒谢绝。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '已影响交通的名义强制进入车内，帮忙停车',
            result: '由于{user}强行乐于助人，帮助女司机拍车。违反了《交通警察道路执勤执法工作规范》的第九章关于接受群众求助规定，第六十五条，你被炒鱿鱼了。',
            add_tags: ['监狱时间']
        },
        {
            text: '无视掉',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1434': {
            title: '炒鱿鱼',
            description: '{user} 被炒了鱿鱼。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_573': {
            title: '中断治疗',
            description: '{user}的钱已经花光，再也没有能力支付昂贵的医药费。医院中断了{user}的血液透析治疗。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['尿毒症']
        }
            ]
        },
        'dbrs_419': {
            title: '极度痛苦的植物人',
            description: '{user}已经躺着活了{age}年。全身都不能动，没有眼球，连呼吸都是需要插管。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [5, 120] },
            options: [
        {
            text: '忍受着这种痛苦继续生存下去',
            result: '你做出了选择。'
        },
        {
            text: '想自杀',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_434': {
            title: '植物人：尝试自杀',
            description: '{user}，出生就是植物人。一个只能思考的躯体，连自杀都非常困难。{user}一生的最大梦想，就是死亡。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '催眠自己',
            result: '{user}，出生就是植物人。一个只能思考的躯体。{user}一生的最大梦想，就是死亡。{user}正处于这种极大的痛苦中，非常容易受到催眠。他催眠了自己，让自己永远失去意识，成为一个真正的植物人。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=，出生就是植物人。一个只能思考的躯体。=NAME=一生的最大梦想，就是死亡。=NAME=正处于这种极大的痛苦中，非常容易受到催眠。他催眠了自己，让自己永远失去意识，成为一个真正的植物人。'
        },
        {
            text: '只要想象自己死亡，就会真的死亡',
            result: '{user}，出生就是植物人。一个只能思考的躯体，连自杀都非常困难。{user}一生的最大梦想，就是死亡。{user}觉得思维可以调节身体分泌，进而自杀。{user}在大脑内不断模拟着自己的一千种死法，终于被吓死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=，出生就是植物人。一个只能思考的躯体，连自杀都非常困难。=NAME=一生的最大梦想，就是死亡。=NAME=觉得思维可以调节身体分泌，进而自杀。=NAME=在大脑内不断模拟着自己的一千种死法，终于被吓死了。'
        },
        {
            text: '让大脑超频运行，让它过热损坏',
            result: '{user}，出生就是植物人。一个只能思考的躯体，连自杀都非常困难。{user}一生的最大梦想，就是死亡。他尝试同时思考NP完全问题、霍奇猜想、庞加莱猜想、黎曼假设、杨·米尔斯理论、纳卫尔-斯托可方程、BSD猜想。终于，{user}的大脑开始过热，神经组织大面积烧毁，{user}终于脑死亡了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=，出生就是植物人。一个只能思考的躯体，连自杀都非常困难。=NAME=一生的最大梦想，就是死亡。他尝试同时思考NP完全问题、霍奇猜想、庞加莱猜想、黎曼假设、杨·米尔斯理论、纳卫尔-斯托可方程、BSD猜想。终于，=NAME=的大脑开始过热，神经组织大面积烧毁，=NAME=终于脑死亡了。'
        }
            ]
        },
        'dbrs_436': {
            title: 'FFF团的对象',
            description: '{user}加入了神秘的FFF团，经过思想教育。{user}看到了恋爱的罪，而自己竟然有对象。经过一番的思想斗争，{user}做了一个决定。{user}把对象约出来喝奶茶，在两人的奶茶中渗入了大量的滴滴畏，这是{user}和对象的最后一次约会。',
            priority: 1,
            trigger_conditions: { age_range: [12, 120] },
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
        'dbrs_420': {
            title: '结束生命',
            description: '{user}在床上躺着，听到人们在议论要不要结束他的生命。',
            priority: 1,
            trigger_conditions: { age_range: [5, 120] },
            options: [
        {
            text: '拼了命想要挣扎',
            result: '{user}在床上躺着，听到人们在议论要不要结束他的生命。{user}点都不想死，尽管{user}怎么挣扎，都动不了。最后，医生们关闭了{user}的生命维持系统，{user}就这么死掉了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '拼了命睁开眼睛',
            result: '{user}在床上躺着，听到人们在议论要不要结束他的生命。{user}点都不想死，尽管{user}怎么挣扎，都动不了。最后，医生们关闭了{user}的生命维持系统，{user}就这么死掉了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '拼了命想要喊出声',
            result: '{user}在床上躺着，听到人们在议论要不要结束他的生命。{user}一点都不想死，尽管{user}怎么挣扎，都喊不出声。最后，医生们关闭了{user}的生命维持系统，{user}就这么死掉了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '太好了，想死很久了',
            result: '{user}在床上躺着，听到人们在议论要不要结束他的生命。他的这一生，唯一的追求，就是死亡，终于得偿所愿了。{user}开心地留下了眼泪，在场的所有人看到从来都不动的{user}竟然流泪了，决定继续延续{user}的生命。',
            death_flag: true,
            death_reason: '=NAME=在床上躺着，听到人们在议论要不要结束他的生命。他的这一生，唯一的追求，就是死亡，终于得偿所愿了。=NAME=开心地留下了眼泪，在场的所有人看到从来都不动的=NAME=竟然流泪了，决定继续延续=NAME=的生命。'
        }
            ]
        },
        'dbrs_425': {
            title: '美梦',
            description: '有一天{user}获得了活动的能力！他终于可以下床走动了！{user}在床上兴奋地挣扎着，发现自己快乐得哭出了声……然后{user}就醒了，发现刚才只不过是一个美梦。',
            priority: 1,
            trigger_conditions: { age_range: [5, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_427': {
            title: '记忆力非凡',
            description: '{user}听到的东西，都要靠记忆来保存。经过几年的锻炼，{user}记性非常好。',
            priority: 1,
            trigger_conditions: { age_range: [5, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['记忆']
        }
            ]
        },
        'dbrs_428': {
            title: '存在的意义',
            description: '{user}有时候会想，存在的意义是什么。',
            priority: 1,
            trigger_conditions: { age_range: [5, 120] },
            options: [
        {
            text: '死亡',
            result: '{user}认为，每个意识对存在的意义，都有各自不同的解释。而对于{user}，存在的意义就是死亡。',
            death_flag: true,
            death_reason: '=NAME=认为，每个意识对存在的意义，都有各自不同的解释。而对于=NAME=，存在的意义就是死亡。'
        },
        {
            text: '理想',
            result: '{user}认为，每个人存在的意义，就是实现自己的理想。'
        },
        {
            text: '生存',
            result: '{user}认为，存在的意义，在人能理解的范畴，就是生存。'
        },
        {
            text: '并没有意义',
            result: '{user}认为，存在并没有意义。'
        },
        {
            text: '我思故我在',
            result: '{user}认为，让真正的思考渗透进自己的人生,那么,他的存在才有真正的意义。'
        }
            ]
        },
        'dbrs_429': {
            title: '现状',
            description: '{user}觉得自己现在的现状是___',
            priority: 1,
            trigger_conditions: { age_range: [5, 120] },
            options: [
        {
            text: '我不能动，但我能感受到这个世界。',
            result: '你做出了选择。',
            add_tags: ['唯心主义'],
            remove_tags: ['唯物主义']
        },
        {
            text: '我不能动，我只能听到这个世界。',
            result: '你做出了选择。',
            add_tags: ['唯物主义'],
            remove_tags: ['唯心主义']
        }
            ]
        },
        'dbrs_432': {
            title: '坏心情',
            description: '{user}长期处于坏心情中，导致寿命非常短。在{age}岁的时候，就去世了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}长期处于坏心情中，导致寿命非常短。在{age}岁'
        }
            ]
        },
        'dbrs_440': {
            title: '孤儿院收养',
            description: '死婴跑到了医院门口，就被人发现了，人们看到的只是一个普通的婴儿被丢弃了。最后，这个婴儿被孤儿院收养了，取名为{user}。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: 99 },
            set_attributes: { money: 2 },
            add_tags: ['孤儿']
        }
            ]
        },
        'dbrs_439': {
            title: '尚有意识',
            description: '被丢进垃圾桶的死婴竟然还有意识，这个死婴偷偷睁开眼，看房间的人走了之后，悄悄地爬了出来，逃离了这个医院。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_519': {
            title: '外贸小常识',
            description: 'APO/FPO/DPO是什么？',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '一种沟通方式',
            result: '{user}根本不会外贸，而且喜欢出风头，老是在公司里装哔。很快就被老板炒了鱿鱼。'
        },
        {
            text: 'a/fixed/doc price open 一个/固定/文档价格公开',
            result: '{user}根本不会外贸，而且喜欢出风头，老是在公司里装哔。很快就被老板炒了鱿鱼。'
        },
        {
            text: '希望国战地邮局',
            result: '{user}根本不会外贸，在公司里怀着“边做边学”的思维，混日子。'
        },
        {
            text: '希望国军区',
            result: '{user}在公司表现不错，很快就获得老板的赏识，当上了小领导。'
        },
        {
            text: '收费标准',
            result: '{user}根本不会外贸，而且喜欢出风头，老是在公司里装哔。很快就被老板炒了鱿鱼。'
        }
            ]
        },
        'dbrs_442': {
            title: '结束生命',
            description: '{user}在床上躺着，听到人们在议论要不要结束他的生命。',
            priority: 1,
            trigger_conditions: { age_range: [5, 120] },
            options: [
        {
            text: '拼了命想要挣扎',
            result: '{user}在床上躺着，听到人们在议论要不要结束他的生命。{user}一点都不想死，虽然然而他怎么挣扎，他的身体还是纹丝不动。在强烈的求生意志下，{user}的泪腺分泌出了眼泪！在场的所有人看到从来都不动的{user}竟然流泪了，决定继续延续{user}的生命。'
        },
        {
            text: '拼了命睁开眼睛',
            result: '{user}在床上躺着，听到人们在议论要不要结束他的生命。{user}一点都不想死，虽然他没有眼球，但是还是拼了命想睁开眼睛。在强烈的求生意志下，{user}的泪腺分泌出了眼泪！在场的所有人看到从来都不动的{user}竟然流泪了，决定继续延续{user}的生命。'
        },
        {
            text: '太好了，想死很久了',
            result: '{user}在床上躺着，听到人们在议论要不要结束他的生命。他的这一生，唯一的追求，就是死亡，终于得偿所愿了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在床上躺着，听到人们在议论要不要结束他的生命。他的这一生，唯一的追求，就是死亡，终于得偿所愿了。'
        }
            ]
        },
        'dbrs_455': {
            title: '不死葫芦娃',
            description: '{user}在高速公路上遭遇了车祸，因为{user}有天生的刀枪不入的身体，车都撞散了，{user}一点事儿都没有。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['车祸阴影']
        }
            ]
        },
        'dbrs_458': {
            title: 'SCP-173',
            description: '{user}加入了SCP基金会。负责研究SCP-173项目。{user}发现SCP基金会研究的东西是一个非常危险的项目。这个所谓的SCP-173，是一个雕像。它无法在有生命体的在注视他的情况下移动，但是会抓住任何一次机会，比如眨眼的瞬间开始移动，并且几乎为瞬移。它会移动到一切生命体前，拧断他们的脖子。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_469': {
            title: '像素世界',
            description: '{user}经常用手机上AB站，最喜欢看的是一款像素世界的在线游戏的直播，看玩家们在世界里挖矿，生活。有一次看视频时候他不小心把手机摔地上了，从手机屏幕里摔出来几个像素方块！{user}发现手机屏幕变成了传送门，可以传送进这个像素世界。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '把脚伸进手机屏幕中',
            result: '{user}用手机看像素世界游戏视频的时候，不小心打开了链接像素世界的传送门。{user}通过这个传送门进入了像素世界……'
        },
        {
            text: '用手指伸进手机屏幕',
            result: '{user}用手机看像素世界游戏视频的时候，不小心打开了链接像素世界的传送门。{user}通过这个传送门进入了像素世界……'
        },
        {
            text: '尝试关机',
            result: '{user}用手机看像素世界游戏视频的时候，不小心打开了链接像素世界的传送门。{user}吓尿了，赶紧按手机关机键，手机一关机，立马触发了灾难。传送门被关闭引起的能量波动，把{user}震成了5，6个像素肉块，死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=用手机看像素世界游戏视频的时候，不小心打开了链接像素世界的传送门。=NAME=吓尿了，赶紧按手机关机键，手机一关机，立马触发了灾难。传送门被关闭引起的能量波动，把=NAME=震成了5，6个像素肉块，死了。'
        },
        {
            text: '赶紧把手机丢出窗外',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_470': {
            title: '绿色怪物',
            description: '{user}通过了传送门，跌入了这个陌生又奇怪的像素世界。{user}站起来，看到一个绿色、长得像羊驼的像素生物向他走来。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '摸摸它的头',
            result: '{user}通过了传送门，跌入了这个陌生又奇怪的像素世界。{user}站起来，看到一个绿色、长得像羊驼的像素生物向他走来。{user}用他的像素手摸了一下它的头，它突然膨胀起来，爆炸了！{user}被炸飞了，落在坚硬的石头地面上，跌死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=通过了传送门，跌入了这个陌生又奇怪的像素世界。=NAME=站起来，看到一个绿色、长得像羊驼的像素生物向他走来。=NAME=用他的像素手摸了一下它的头，它突然膨胀起来，爆炸了！=NAME=被炸飞了，落在坚硬的石头地面上，跌死了。'
        },
        {
            text: '与它搏斗',
            result: '{user}通过了传送门，跌入了这个陌生又奇怪的像素世界。{user}站起来，看到一个绿色、长得像羊驼的像素生物向他走来。{user}用他的像素手撮了一下它，它突然膨胀起来，爆炸了！{user}被炸飞了，落在坚硬的石头地面上，跌死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=通过了传送门，跌入了这个陌生又奇怪的像素世界。=NAME=站起来，看到一个绿色、长得像羊驼的像素生物向他走来。=NAME=用他的像素手撮了一下它，它突然膨胀起来，爆炸了！=NAME=被炸飞了，落在坚硬的石头地面上，跌死了。'
        },
        {
            text: '看起来很危险，跑',
            result: '{user}通过了传送门，跌入了这个陌生又奇怪的像素世界。{user}站起来，看到一个绿色、长得像羊驼的像素生物向他走来。{user}一看它凶恶的脸，心感不妙，赶紧逃跑。这只绿色的羊驼追了{user}一会儿，就放弃了。'
        },
        {
            text: '掏出手机合影',
            result: '{user}通过了传送门，跌入了这个陌生又奇怪的像素世界。{user}站起来，看到一个绿色、长得像羊驼的像素生物向他走来。{user}赶紧拿出手机，背过身，用前置摄像头抓拍了一个他和绿羊驼的合影。抓拍的照片是爆炸的瞬间，里那只羊驼炸裂了开来，{user}的嘴巴还在笑，上半部分的头已经被爆炸冲击炸飞了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_471': {
            title: '像素世界',
            description: '{user}在这个像素世界里到处___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '砍树',
            result: '你做出了选择。'
        },
        {
            text: '挖石头',
            result: '你做出了选择。'
        },
        {
            text: '找可以吃的东西',
            result: '你做出了选择。'
        },
        {
            text: '乱逛，到处冒险',
            result: '你做出了选择。'
        },
        {
            text: '寻找传送门回去',
            result: '{user}想回家了，在这个像素世界里到处找回去的传送门，但是怎么找也找不到。'
        }
            ]
        },
        'dbrs_472': {
            title: '工伤',
            description: '衰老算不算工伤。{user}有自己的见解，他认为很简单。___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '算。',
            result: '你做出了选择。'
        },
        {
            text: '不算。',
            result: '你做出了选择。'
        },
        {
            text: '不算，罪不在公司，而是时间的流动。',
            result: '你做出了选择。'
        },
        {
            text: '越老越有男人味的人，是不是该付钱给他的公司？',
            result: '你做出了选择。'
        },
        {
            text: '算，不过原告和被告应该是同一人，所以无需赔偿。',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_473': {
            title: '像素世界：黑夜',
            description: '像素世界里的像素太阳下山了……整个像素世界进入了黑夜，伸手不见五指，周围响起了各种野兽的叫声。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '生火照明',
            result: '像素世界里的像素太阳下山了……整个像素世界进入了黑夜，伸手不见五指，周围响起了各种野兽的叫声。{user}想生火照明，他拿出了刚制作出来的打火石，咭一下在地上生了一堆火。那堆火竟然不受控制，蔓延开来，把{user}连着草皮一起烧了起来。{user}舞动了几下像素手，倒下了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '做火把',
            result: '像素世界里的像素太阳下山了……整个像素世界进入了黑夜，伸手不见五指，周围响起了各种野兽的叫声。{user}做了一些火把，插在周围。'
        },
        {
            text: '用方块把自己密封起来过一晚上',
            result: '像素世界进入了黑夜，{user}用几个方块把自己密封起来，过一晚上。{user}在这个密封的空间睡着后，就永远没醒来了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '找个草丛睡一觉',
            result: '像素世界进入了黑夜，{user}随便找了个草地便睡下了，他并不知道这个世界充满危险。巨大的蜘蛛，拿弓箭的骷髅，腐烂的丧尸无处不在，围住{user}群殴。{user}被打死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '像素世界进入了黑夜，=NAME=随便找了个草地便睡下了，他并不知道这个世界充满危险。巨大的蜘蛛，拿弓箭的骷髅，腐烂的丧尸无处不在，围住=NAME=群殴。=NAME=被打死了。'
        }
            ]
        },
        'dbrs_474': {
            title: '小黑人',
            description: '{user}在像素世界里，碰到了又高又瘦的小黑人。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '上前问好',
            result: '{user}在像素世界里，碰到了又高又瘦的小黑人。{user}走过去，跟它问好：“Hey, nigger.” 小黑人似乎被激怒了，用非常粗糙的声音在大喊，然后从地上抽出一个搬砖，向{user}疯狂地殴打。脆弱的{user}没挨住几下搬砖，就倒地身亡了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '尽量不要惹',
            result: '{user}在像素世界里，碰到了又高又瘦的小黑人。看起来非常危险。{user}趁小黑人没发现他，赶紧跑远。'
        },
        {
            text: '好奇地看着它',
            result: '{user}在像素世界里，碰到了又高又瘦的小黑人。看起来非常危险。{user}按耐不住好奇心，看着小黑人在搬砖。小黑人似乎被{user}看烦了，突然一个闪身飞到了{user}面前，用搬砖拍爆了{user}的头。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_476': {
            title: '打败黑龙',
            description: '黑龙死去后，他尸体化成一堆像素灰尘，向四处飘散。原地留下了一个传送门，这个传送门似乎是通向{user}原来的世界的。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '进入传送门',
            result: '黑龙死去后，他尸体化成一堆像素灰尘，向四处飘散。原地留下了一个传送门，{user}进入了传送门，回到了自己的世界。',
            remove_tags: ['像素世界：同伴']
        },
        {
            text: '我不要回去，我要在这里称王',
            result: '{user}在原来的世界里只是一个渺小的普通人。而在这里，他是霸王。{user}根本不想回到原来的世界，他选择逃避，把传送门敲碎后，永远留在了像素世界里。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_475': {
            title: '黑色飞龙',
            description: '据玩家们的传说，每个像素世界里，都有一条这样的黑色飞龙。谁杀掉他，谁就会成为这个世界的霸王。而这条黑色飞龙，突然就出现在{user}的面前。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '从背包找到雪球，作为武器与黑龙战斗',
            result: '据玩家们的传说，每个像素世界里，都有一条这样的黑色飞龙。谁杀掉他，谁就会成为这个世界的霸王。而这条黑色飞龙，突然就出现在{user}的面前。{user}找找自己的背包，最后拿出了一堆雪球，向黑龙砸去。雪白的雪球打在黑龙的鳞甲上，没有造成任何伤害。黑龙看到身上有一处白色的污迹，立马用牙齿刮走。黑龙似乎是一个强迫症，容不得自己的身体有一处污迹。{user}继续不断向黑龙扔雪球，黑龙最后急了，把自己咬死了。',
            death_flag: true,
            death_reason: '据玩家们的传说，每个像素世界里，都有一条这样的黑色飞龙。谁杀掉他，谁就会成为这个世界的霸王。而这条黑色飞龙，突然就出现在=NAME=的面前。=NAME=找找自己的背包，最后拿出了一堆雪球，向黑龙砸去。雪白的雪球打在黑龙的鳞甲上，没有造成任何伤害。黑龙看到身上有一处白色的污迹，立马用牙齿刮走。黑龙似乎是一个强迫症，容不得自己的身体有一处污迹。=NAME=继续不断向黑龙扔雪球，黑龙最后急了，把自己咬死了。'
        },
        {
            text: '跑',
            result: '据玩家们的传说，每个像素世界里，都有一条这样的黑色飞龙。谁杀掉他，谁就会成为这个世界的霸王。而这条黑色飞龙，突然就出现在{user}的面前。{user}赶紧拔腿就跑，没跑多远，就被龙一口吐息击中，被吐息的高温烧成了肉泥。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '从背包找到剑，作为武器与黑龙战斗',
            result: '据玩家们的传说，每个像素世界里，都有一条这样的黑色飞龙。谁杀掉他，谁就会成为这个世界的霸王。而这条黑色飞龙，突然就出现在{user}的面前。{user}利欲攻心，抽出剑就向黑龙冲去，黑龙在天，{user}根本够不到。黑龙放了个屁，把{user}周围的空气排挤了。{user}闷死在龙屁中。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '从背包找到斧头，作为武器与黑龙战斗',
            result: '据玩家们的传说，每个像素世界里，都有一条这样的黑色飞龙。谁杀掉他，谁就会成为这个世界的霸王。而这条黑色飞龙，突然就出现在{user}的面前。{user}利欲攻心，抽出斧头就向黑龙冲去，黑龙在天，{user}根本够不到。黑龙放了个屁，把{user}周围的空气排挤了。{user}闷死在龙屁中。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '拿七个鸡蛋出来，骗黑龙说这是七龙珠',
            result: '据玩家们的传说，每个像素世界里，都有一条这样的黑色飞龙。谁杀掉他，谁就会成为这个世界的霸王。而这条黑色飞龙，突然就出现在{user}的面前。{user}从背包里拿七个鸡蛋出来，骗黑龙说这是七龙珠。黑龙用尾巴一压，把{user}和鸡蛋压扁了，说：“真当我瞎眼啊”',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_929': {
            title: '乞讨：好运气',
            description: '{user}在路边乞讨了一年，好心人很多，每天他的碗里都能装得满满的，都是五毛。每天到了深夜，他的钱会被乞丐后台没收，{user}会被运到一个集中营跟其他“同事”一起吃饭睡觉，等到天亮又运回“工作岗位”开始乞讨。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_928': {
            title: '被拐卖',
            description: '{user}拿了怪叔叔的糖，跟叔叔去玩。怪叔叔把{user}扛起来，进了一个小黑屋。{user}进了小黑屋后，被打了麻醉，然后就昏睡过去了。等到{user}醒来，他发现自己的四肢都给截断了，被丢在路边乞讨。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_485': {
            title: '仙丹',
            description: '{user}遇到一个摆摊的老人，这个老人跟{user}说，他因糖尿病晚期，已经活不了多久了，除非吃掉我的仙丹。',
            priority: 1,
            trigger_conditions: { age_range: [45, 120] },
            options: [
        {
            text: '傻逼神棍',
            result: '你做出了选择。'
        },
        {
            text: '一口吞下',
            result: '{user}遇到一个摆摊的老人，这个老人跟{user}说，他因糖尿病晚期，已经活不了多久了，除非吃掉我的仙丹。{user}相信了老人，接过仙丹一口吞下。然后，{user}四肢无力地摊在了地上，老人把{user}拖进了一个深巷，抢光了{user}的钱财，强奸、并残忍地将{user}折磨而死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_484': {
            title: '学校：作业',
            description: '身为学生的{user}有一次交不出作业，他的解释是___',
            priority: 1,
            trigger_conditions: { age_range: [5, 17] },
            options: [
        {
            text: '我没写',
            result: '{user}是一个老实人。'
        },
        {
            text: '我没有带',
            result: '{user}经常撒谎，而且会被人一下子拆穿。',
            remove_tags: ['高情商']
        },
        {
            text: '被狗吃了',
            result: '{user}经常撒谎，而且会被人一下子拆穿。',
            remove_tags: ['高情商']
        },
        {
            text: '写作业会触碰到我的底线',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_489': {
            title: '传送门再次打开',
            description: '{user}在像素世界里已经有一段时间了。有一天发现又一个传送门打开了，一个陌生的人掉了进来。绿色上衣，深蓝裤子，和{user}长得一模一样。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '上前询问',
            result: '{user}在像素世界里已经有一段时间了。有一天发现又一个传送门打开了，一个陌生的人掉了进来。绿色上衣，深蓝裤子，和{user}长得一模一样。{user}上前扶起了他，询问得知他也是用手机看游戏视频的时候被卷进了这个世界。共同的遭遇使这两个人成为了好朋友，住在了一起，相依为命。',
            add_tags: ['像素世界：同伴']
        },
        {
            text: '二话不说先敲死看看会掉什么东西出来',
            result: '{user}在像素世界里已经有一段时间了。有一天发现又一个传送门打开了，一个陌生的人掉了进来。绿色上衣，深蓝裤子，和{user}长得一模一样。{user}拿起剑走上前，敲死了这个陌生人，什么东西都没掉出来，{user}有点小失望。',
            death_flag: true,
            death_reason: '=NAME=在像素世界里已经有一段时间了。有一天发现又一个传送门打开了，一个陌生的人掉了进来。绿色上衣，深蓝裤子，和=NAME=长得一模一样。=NAME=拿起剑走上前，敲死了这个陌生人，什么东西都没掉出来，=NAME=有点小失望。'
        },
        {
            text: '逃跑',
            result: '{user}在像素世界里已经有一段时间了。有一天发现又一个传送门打开了，一个陌生的人掉了进来。绿色上衣，深蓝裤子，和{user}长得一模一样。{user}感到危险，立马跑远了。'
        }
            ]
        },
        'dbrs_496': {
            title: '生不如死',
            description: '{user}身为一个肝硬化末期病人，在医院里住下来了，经过无数次死里逃生的抢救。{user}活过了这一年。',
            priority: 1,
            trigger_conditions: { age_range: [35, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_493': {
            title: '生命的最后',
            description: '{user}在生命的最后时光，___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '与亲人相聚中死去',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '到一个僻静的边远地方死去，没有人能找到。',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '到处玩乐，喝吹嫖赌',
            result: '{user}在生命的最后时光，到处玩乐，喝吹嫖赌。{user}最后死在了卡拉OK厅，被人清理走了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '像平常一样过日子',
            result: '{user}在生命的最后时光，尽量不去想自己的病情，像平常一样过日子。没过多久，他就安然去世了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在生命的最后时光，尽量不去想自己的病情，像平常一样过日子。没过多久，他就安然去世了。'
        },
        {
            text: '缅怀自己的过去',
            result: '{user}在生命的最后时光，选择到自己的学校，以前走过的街道，去过的地方徘徊。缅怀着自己的一生。{user}一边踱步，一边还会叹气一声，有时是因为快乐、有时是因为后悔、有时是因为思念……走了很长一段路后，{user}累了，他找了个凉亭坐下，停止了呼吸。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '到教堂参拜神灵',
            result: '{user}在生命的最后时光，选择去教堂忏悔。神父坐在{user}的旁边点起了一根烟，听着{user}在那里说着自己的一生。神父的烟一根接着一根，{user}的话语也一直没有停下来。直到神父点起了最后一根烟，{user}才安静了。{user}坐在长凳上，离开了人世。神父拍拍身上的烟灰，骂了句：“妈的终于可以下班了。”',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '到庙里参拜佛祖',
            result: '{user}在生命的最后时光，选择去庙里参拜佛祖。庙里人满为患，浓烟弥漫。{user}费尽千辛万苦终于挤到了佛前，双手合十，然后离开了人世。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '大哭',
            result: '{user}接受不了将要死亡这个事实，干什么事也无精打采，每天以泪洗面。最后，在极度的痛苦和恐惧中，{user}去世了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=接受不了将要死亡这个事实，干什么事也无精打采，每天以泪洗面。最后，在极度的痛苦和恐惧中，=NAME=去世了。'
        },
        {
            text: '拍照，发最后一个盆友圈',
            result: '{user}在生命的最后时光，拿出了手机，拍照发了最后一个盆友圈。然后等待大家的回复。{user}捧着手机玩了一天后，就死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在生命的最后时光，拿出了手机，拍照发了最后一个盆友圈。然后等待大家的回复。=NAME=捧着手机玩了一天后，就死了。'
        }
            ]
        },
        'dbrs_494': {
            title: '肝硬化末期',
            description: '医生告诉{user}，他的肝硬化已经到了末期，命不久矣。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '出院',
            result: '医生告诉{user}，他的肝硬化已经到了末期，命不久矣。{user}决定出院，在外面的世界享受自己最后的时光。'
        },
        {
            text: '人道毁灭',
            result: '医生告诉{user}，他的肝硬化已经到了末期，命不久矣。{user}决定选择将自己人道毁灭。'
        },
        {
            text: '留在医院，输液维持生命',
            result: '医生告诉{user}，他的肝硬化已经到了末期，命不久矣。{user}决定留在医院，靠输液尽可能维持更久的生命。'
        }
            ]
        },
        'dbrs_497': {
            title: '死亡到来',
            description: '{user}的肝硬化并发症再次发作，这次{user}终于没有幸运地撑下来。离开了人世。',
            priority: 1,
            trigger_conditions: { age_range: [35, 120] },
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
        'dbrs_499': {
            title: '工作习惯',
            description: '{user}是一名婚姻中介。他认为___一样的2个人是一对好情侣。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '兴趣',
            result: '你做出了选择。'
        },
        {
            text: '性格',
            result: '你做出了选择。'
        },
        {
            text: '相貌',
            result: '你做出了选择。'
        },
        {
            text: '体重',
            result: '你做出了选择。'
        },
        {
            text: '肤色',
            result: '你做出了选择。'
        },
        {
            text: '体毛',
            result: '你做出了选择。'
        },
        {
            text: '视力',
            result: '你做出了选择。'
        },
        {
            text: '身高',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_500': {
            title: '婚姻中介：工作',
            description: '{user}接到一名55岁的女客户的委托。她父母双亡，丈夫早年去世，留下几亿家产和豪宅，现在倍感孤独。重金求一个有责任心的终生伴侣。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70], required_tags: ['男性'] },
            options: [
        {
            text: '向客户推荐一个20岁的男青年',
            result: '{user}接到一名55岁的女客户的委托。她父母双亡，丈夫早年去世，留下几亿家产和豪宅，现在倍感孤独。重金求一个有责任心的终生伴侣。{user}为她带来了一个20岁的男青年，女客户非常满意，抱着这个小鲜肉走出了婚姻介绍所。',
            death_flag: true,
            death_reason: '=NAME=接到一名55岁的女客户的委托。她父母双亡，丈夫早年去世，留下几亿家产和豪宅，现在倍感孤独。重金求一个有责任心的终生伴侣。=NAME=为她带来了一个20岁的男青年，女客户非常满意，抱着这个小鲜肉走出了婚姻介绍所。'
        },
        {
            text: '向客户推荐年龄相仿的中年男人',
            result: '{user}接到一名55岁的女客户的委托。她父母双亡，丈夫早年去世，留下几亿家产和豪宅，现在倍感孤独。重金求一个有责任心的终生伴侣。{user}向她介绍年龄相仿的中年男人，女客户非常不满意，骂骂咧咧地走了。',
            death_flag: true,
            death_reason: '=NAME=接到一名55岁的女客户的委托。她父母双亡，丈夫早年去世，留下几亿家产和豪宅，现在倍感孤独。重金求一个有责任心的终生伴侣。=NAME=向她介绍年龄相仿的中年男人，女客户非常不满意，骂骂咧咧地走了。'
        },
        {
            text: '拒绝这个委托',
            result: '{user}拒绝了一个女客户，自称是上亿家产。{user}觉得她是骗子，心想她上亿财产还来相亲个屁啊。',
            death_flag: true,
            death_reason: '{user}接到一名55岁的女客户的委托。她父母双亡，丈夫早'
        },
        {
            text: '推荐自己',
            result: '你做出了选择。',
            effects: { money: 20 },
            death_flag: true,
            death_reason: '{user}接到一名55岁的女客户的委托。她父母双亡，丈夫早'
        }
            ]
        },
        'dbrs_502': {
            title: '婚姻中介：比尔盖饭',
            description: '有一天，著名IT创业者、逗比世界的首富，比尔盖饭来到婚姻介绍所，{user}应该向他推荐___作为伴侣。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70], required_tags: ['男性'] },
            options: [
        {
            text: 'windows操作系统',
            result: '你做出了选择。'
        },
        {
            text: 'badApple公司的乔布斯',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_501': {
            title: '婚姻中介：主题活动',
            description: '公司为了提高业绩，让{user}搞一个主题相亲活动，来吸引客户。{user}的策划是___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70], required_tags: ['男性'] },
            options: [
        {
            text: '真人秀电视节目《非钱勿忧》',
            result: '你做出了选择。'
        },
        {
            text: '节目《宝贝去哪里》',
            result: '你做出了选择。'
        },
        {
            text: '节目《逗比向前冲》',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_503': {
            title: '婚姻中介：和尚',
            description: '有一天，一名和尚踏进了{user}的办公室，啰嗦了一会儿“哦弥陀佛，善哉善哉”后，才开始向{user}吐苦水，和尚这个职业虽然暴利，但是非常孤独，他表示想找个女人。{user}把他赶走了。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_513': {
            title: '怀孕：吃',
            description: '{user}的胃似乎成为了无底洞，她整天就呆在家里吃东西，都不觉得饱。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_514': {
            title: '出人命',
            description: '{user}怀胎10月，终于要生了。她坐在产房里的椅子上，和医生一起高声大喊：“___”就把她的孩子生出来了。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120], required_tags: ['女性'] },
            options: [
        {
            text: '一二嘿咻，一二嘿咻！！',
            result: '你做出了选择。'
        },
        {
            text: '齐心协力，齐心协力！！',
            result: '你做出了选择。'
        },
        {
            text: '不吃饭不睡觉，打起精神赚钞票！！',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_518': {
            title: '国家级委托',
            description: '有一天，事务所给了{user}一个非常重要的大委托。目国的一名战犯30年前参与、领导了申国的大屠杀，到今年，这名战犯终于落网了。{user}需要前往国家高级人民法院，为这位战犯打官司。请求从轻处理。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '坚决拒绝',
            result: '有一天，事务所给了{user}一个非常重要的大委托。一名目国的战犯的委托，{user}需要前往国家高级人民法院，为这位战犯打官司。请求从轻处理。{user}一口拒绝了这个荒唐的委托，然后就被老板炒了。'
        },
        {
            text: '用“勿忘国耻，但向敌人宽容，更要看向未来”的理论，尝试说服公诉人',
            result: '有一天，事务所给了{user}一个非常重要的大委托。目国的一名战犯30年前参与、领导了申国的大屠杀，到今年，这名战犯终于落网了。{user}需要前往国家高级人民法院，为这位战犯打官司。请求从轻处理。{user}使用“勿忘国耻，但向敌人宽容，更要看向未来”的理论，尝试说服公诉人。引起了公愤，在法庭内引起了骚乱，现场全部人群殴战犯和{user}。{user}被殴打致重伤，送院后，因为肢体不完整无法医治而死亡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '有一天，事务所给了=NAME=一个非常重要的大委托。目国的一名战犯30年前参与、领导了申国的大屠杀，到今年，这名战犯终于落网了。=NAME=需要前往国家高级人民法院，为这位战犯打官司。请求从轻处理。=NAME=使用“勿忘国耻，但向敌人宽容，更要看向未来”的理论，尝试说服公诉人。引起了公愤，在法庭内引起了骚乱，现场全部人群殴战犯和=NAME=。=NAME=被殴打致重伤，送院后，因为肢体不完整无法医治而死亡。'
        }
            ]
        },
        'dbrs_517': {
            title: '打杂律师',
            description: '为同事准备诉讼资料，为BOSS斟茶倒水，就是{user}上班做的业务。{user}没有想过自己去接一个委托，帮人打一场官司。这样的他没过一年，就被“请”出了事务所。',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_524': {
            title: '大名鼎鼎的=NAME=导游',
            description: '{user}的导游形象影响越来越深，已经非常有名气。{user}的旅行团走遍大江南北，全国各地没有人不知道他的。{user}是旅游界非常大的正能量，让人们对旅行团重拾了信心。大大促进了全申国的旅游事业发展。在今年的全国人大旅游大会中，{user}被提名为：旅游大使。并在大会上给他颁发了奖杯！',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_525': {
            title: '枪打出头鸟',
            description: '{user}在旅游业的影响非常大，已经超过了他个人能承载的重量。他的这种行为破坏了旅游业平衡，一些人不高兴了。{user}在一次带旅行团的时候，被另外一个旅游公司的旅游大巴碾压致死。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
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
        'dbrs_527': {
            title: '鼓励',
            description: '{user}如何激励学生用功读书？',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '“若没有好好读书，考不上理想的学校，这辈子就只能做社会底层”的言论去恐吓学生。',
            result: '{user}使用“若没有好好读书，考不上理想的学校，这辈子就只能做社会底层”的言论去恐吓学生，让学生努力学习。却恰得其反，巨大的压力使得学生上课无精打采，失去主动思考能力，{user}的班级成绩雪崩。'
        },
        {
            text: '体罚',
            result: '{user}非常崇拜古老的教学手段，认为体罚是唯一的方法去让学生为了生存而考好的成绩，去激发一个学生的学习潜意识。{user}使用钢锯、钻头、血滴子等利器去体罚学生，{user}的做法非常残忍，{user}通常会把差生殴打到致其吐血，再用长鞭等工具折磨。最终这名学生被体罚到他妈都认不出来的程度，{user}才罢休，并劝导其下次努力学习。学生们拼了命一样地用功读书，班级的成绩是全国第一。'
        },
        {
            text: '班里考出状元的话，我会有巨额奖金，我可以考虑跟状元4：6分账，你们努力读书吧。',
            result: '{user}非常现实，跟学生们说：“班里考出状元的话，我会有巨额奖金，我可以考虑跟状元4：6分账，你们努力读书吧。”这一方法收获奇好，{user}所带的班级成绩、学风都遥遥领先其他班级。'
        }
            ]
        },
        'dbrs_526': {
            title: '罪与罚',
            description: '{user}巡班，发现班里有一个调皮的学生上课的时候玩手机，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '无视',
            result: '你做出了选择。'
        },
        {
            text: '放过他',
            result: '你做出了选择。'
        },
        {
            text: '偷偷地记过，但是不告诉这个同学',
            result: '你做出了选择。'
        },
        {
            text: '打电话报警',
            result: '{user}巡班，发现班里有一个调皮的学生上课的时候玩手机，{user}拿起手机就拨打了110，不到1分钟后，2个警察叔叔就把上课玩手机的学生抓回派出所了。'
        },
        {
            text: '偷拍这个学生的开小差过程，并发布在学校网站上',
            result: '{user}巡班，发现班里有一个调皮的学生上课的时候玩手机，{user}拿起手机偷拍这个过程，并发布到校园网里。那位学生变成了大家的笑柄，当晚那位学生留下一张纸条后，在学校教学楼楼顶跳楼自杀了。字条里写满了诅咒这个偷拍者的话。',
            add_tags: ['别诅咒'],
            death_flag: true,
            death_reason: '=NAME=巡班，发现班里有一个调皮的学生上课的时候玩手机，=NAME=拿起手机偷拍这个过程，并发布到校园网里。那位学生变成了大家的笑柄，当晚那位学生留下一张纸条后，在学校教学楼楼顶跳楼自杀了。字条里写满了诅咒这个偷拍者的话。'
        },
        {
            text: '上前没收手机',
            result: '{user}巡班，发现班里有一个调皮的学生上课的时候玩手机，{user}上前，把这位学生的手机没收了。放学后{user}把手机还给了这位学生。'
        }
            ]
        },
        'dbrs_529': {
            title: '晋升',
            description: '{user}所负责的班级在升学考试中，考上重点学校的有一半人。{user}为此获得了丰厚的奖金，校长要求{user}调到学校管理层。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '一口答应',
            result: '你做出了选择。'
        },
        {
            text: '拒绝，还是想留在教学第一线',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_528': {
            title: '看世界',
            description: '{user}班级考试成绩在学校排名已经垫底。{user}心无所恋，写了一封辞职信：“这个世界很大，我想去看看。”匆匆辞职。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_531': {
            title: '千篇一律',
            description: '一旦生活开始千篇一律，日子就会过得很快。备课，改作业，上课，考试……{user}开始过着千篇一律的教师生活。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_532': {
            title: '恋爱问题',
            description: '{user}发现班里有一对情侣非常光明正大地在课堂上秀恩爱。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '拿起黑板刷丢过去',
            result: '你做出了选择。'
        },
        {
            text: '无视就好',
            result: '{user}发现班里有一对情侣非常光明正大地在课堂上秀恩爱。{user}当他们透明，耳根清净。'
        },
        {
            text: '想起自己以前的校园恋爱史',
            result: '{user}发现班里有一对情侣非常光明正大地在课堂上秀恩爱。{user}看着这对情侣，似乎在想些什么，突然两行热泪从{user}的脸上流了下来。学生们都给吓愣了。'
        }
            ]
        },
        'dbrs_530': {
            title: '职业病',
            description: '教师这一行，经常与粉笔黑板打交道，免不得会有点呼吸道疾病。{user}从{age}岁那年开始，也咳嗽不断。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            set_attributes: { health: 10 },
            add_tags: ['呼吸道疾病']
        }
            ]
        },
        'dbrs_534': {
            title: '采购',
            description: '学校需要采购一批化学用具，经费越少越好。校长指派{user}去全程负责这个任务。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '发动学生家长，给学校捐款',
            result: '学校需要采购一批化学用具，经费越少越好。{user}想出了一个妙计，发动学生家长，给学校捐款。家长得知捐款用来购买教学道具，会使自己孩子学习，当然都非常乐意解囊。捐款收货非常大，购买化学用具后，剩下的一批捐款，校长给了{user}，当作奖励。'
        },
        {
            text: '通过某宝购买价格便宜的化学用具',
            result: '学校需要采购一批化学用具，经费越少越好。{user}想通过购买某宝的便宜货来省钱，购买回来后，拆开每一个纸箱，里面都是玻璃碎片。快递员表示不知道这些是玻璃，然后开着车一溜烟跑了。校长知道后大怒，{user}被无情地裁掉了。'
        },
        {
            text: '通过正规渠道订购',
            result: '你做出了选择。'
        },
        {
            text: '选择质量最好的化学用具',
            result: '学校需要采购一批化学用具，经费越少越好。校长指派{user}去全程负责这个任务。{user}用了非常多钱去买化学用具，使校长非常不高兴，而且买回来的东西质量也没有非常好。{user}被校长辞退了。'
        }
            ]
        },
        'dbrs_538': {
            title: '新能源部门',
            description: '第一天上班，{user}进入申国新能源部门总部。到处都是实验室，走廊布满了先进的仪器。最显眼的是一间叫发电大厅的房间内，一个个铁笼排列整齐，里面都关着一个黄色的动物。动物的两个脸颊上插着导管，电流似乎从这个黄色动物的脸颊不断涌出。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_533': {
            title: '诱惑',
            description: '有一个富商联系{user}，要求{user}在校会上插播有关他们产品的小广告。报酬丰厚。让人难以拒绝。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '答应',
            result: '{user}答应了一个富商的要求，在学校的校会中，突然插播一段有关R18限制级游戏《女装山庄》的广告。校长非常愤怒，把{user}炒鱿鱼了。但是富商给{user}的报酬，足够{user}安稳生活下半辈子了。',
            effects: { money: 9 }
        },
        {
            text: '委婉拒绝',
            result: '有一个富商联系{user}，要求{user}在校会上插播有关他们产品的小广告。报酬丰厚。让人难以拒绝。然而{user}非常果敢地拒绝了这个要求。'
        }
            ]
        },
        'dbrs_537': {
            title: '国家新能源发电部门',
            description: '{user}如愿被分配到了国家新能源发电部门。{user}对这个工作部门的工作非常好奇。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_542': {
            title: '铁路检查员',
            description: '{user}如愿被分配在国家铁路部门，成为了一名铁路检查员。他的工作就是沿着火车路步行，发现铁路上有垃圾，就清理走，保证火车通行的安全。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_548': {
            title: '老年福利',
            description: '{user}乘地铁，乘巴士的时候，总会有年轻人让座。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [55, 120] },
            options: [
        {
            text: '受宠若惊',
            result: '你做出了选择。'
        },
        {
            text: '辛苦的是年轻人，我不需要年轻人让座',
            result: '{user}乘地铁，乘巴士的时候，总会有年轻人让座。{user}每次都谢绝，他认为现在坐在公交车上的年轻人，是比老年人更辛苦的。'
        },
        {
            text: '接受让座',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_559': {
            title: '随机应变',
            description: '毕业考试的时候{user}遇到了实在不会的题，由于这题很关键所以{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '抄别人的',
            result: '毕业考试的时候{user}遇到了实在不会的题，由于这题很关键所以{user}决定作弊！在他偷偷斜眼看别人的时候，监考老师早已经看穿了一切，{user}最后考试成绩作废了。'
        },
        {
            text: '用笔戳穴位',
            result: '毕业考试的时候{user}遇到了实在不会的题，这题很关键，{user}很紧张，不断用笔戳太阳穴，想不到这一举动竟然给他绝处逢生的机会，意外的激发了潜能，把这一题做出来了，考了个好成绩。'
        },
        {
            text: '留空',
            result: '毕业考试的时候{user}遇到了实在不会的题，{user}选择放弃，留空了这一题，{user}没有考得好成绩。太容易放弃的人生，不会有好结果。'
        },
        {
            text: '举手提问',
            result: '{user}在毕业考试中遇到不会的题目，{user}选择举手提问。然后{user}被老师请出了考试室，解答了{user}的题目，并取消了{user}的考试资格。'
        },
        {
            text: '在题目上涂鸦',
            result: '{user}在毕业考试中遇到不会的题目，{user}在题目上画起了漫画涂鸦。结果考试结果应试态度不及格，老师给{user}打了0分。'
        }
            ]
        },
        'dbrs_560': {
            title: '开除',
            description: '{user}因为上次考试的恶劣行为，被学校开除了……',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_539': {
            title: '新能源部门',
            description: '经过了一年的基本培训，{user}终于熟悉了这个新能源部门。新能源部门的核心是动物能发电！20世纪末，科学家发现一个新的动物品种会随机在草丛中出现，根据此动物叫声命名此新品种——比卡丘。比卡丘的身体含有某种特殊物质，能从脸颊中分泌，并产生大量的电流。科学家利用比卡丘的这个特点，花费20多年，建造了这个新能源部门，只需要把驯服的比卡丘喂饱，就能源源不断地发电。能量转换率一流、发电量平稳可靠、可再生、无污染、低成本。这一技术遥遥领先于世界。{user}在部门里经过技能培训后，选择了___的工作。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '“比卡丘猎人”',
            result: '你做出了选择。'
        },
        {
            text: '“比卡丘技术员”',
            result: '你做出了选择。'
        },
        {
            text: '“比卡丘营养员”',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_566': {
            title: '检查结果',
            description: '{user}咳出煤渣，去医院检查后，原来所谓的煤渣物体，其实就是已经黑化的肺部碎片。医生建议立马手术将已经黑化的部分肺组织切除，或者持续使用药物治疗。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '同意手术',
            result: '{user}咳出煤渣，去医院检查后，原来所谓的煤渣物体，其实就是已经黑化的肺部碎片。{user}立马进行了手术将已经黑化的部分肺组织切除。手术室现场，医生们就像在采矿一样，把{user}的黑化的肺组织一点点的切除。最后，只留下拳头大小的健康肺部。',
            add_tags: ['拳头肺'],
            remove_tags: ['黑肺：阶段1']
        },
        {
            text: '拒绝手术，药物治疗',
            result: '{user}咳出煤渣，去医院检查后，原来所谓的煤渣物体，其实就是已经黑化的肺部碎片。医生建议立马手术将已经黑化的部分肺组织切除。{user}拒绝了手术，选择药物治疗。',
            add_tags: ['黑肺：阶段2'],
            remove_tags: ['黑肺：阶段1']
        },
        {
            text: '喝醋就好了',
            result: '{user}咳出煤渣，去医院检查后，原来所谓的煤渣物体，其实就是已经黑化的肺部碎片。到了这个地步，{user}不相信医生可以救活自己了。{user}直接回家，买了瓶醋，闷头喝。一醋解千愁。',
            add_tags: ['黑肺：阶段3'],
            remove_tags: ['黑肺：阶段1']
        }
            ]
        },
        'dbrs_562': {
            title: '戒烟的内心斗争',
            description: '{user}戒烟成功了么？这一年来，{user}一直没有不___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '停止抽烟',
            result: '你做出了选择。',
            remove_tags: ['烟瘾']
        },
        {
            text: '停止抽烟',
            result: '你做出了选择。',
            remove_tags: ['烟瘾']
        },
        {
            text: '继续抽烟',
            result: '你做出了选择。'
        },
        {
            text: '停止抽烟',
            result: '你做出了选择。',
            remove_tags: ['烟瘾']
        },
        {
            text: '停止抽烟',
            result: '你做出了选择。',
            remove_tags: ['烟瘾']
        },
        {
            text: '继续抽烟',
            result: '你做出了选择。'
        },
        {
            text: '停止抽烟',
            result: '你做出了选择。',
            remove_tags: ['烟瘾']
        },
        {
            text: '继续抽烟',
            result: '你做出了选择。'
        },
        {
            text: '停止抽烟',
            result: '你做出了选择。',
            remove_tags: ['烟瘾']
        }
            ]
        },
        'dbrs_579': {
            title: '高血压',
            description: '{user}患有高血压，他选择___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '泡温泉降压',
            result: '你做出了选择。'
        },
        {
            text: '喝凉茶，中药降压',
            result: '你做出了选择。'
        },
        {
            text: '喝心灵鸡汤治疗',
            result: '{user}患有高血压，他选择喝鸡汤治疗。大量的鸡油使到{user}的血管积累了更多的脂肪，血脂也不断上升，高血压更严重了。',
            effects: { health: -10 }
        },
        {
            text: '喝醋',
            result: '你做出了选择。'
        },
        {
            text: '喝茶',
            result: '你做出了选择。'
        },
        {
            text: '打针治疗',
            result: '你做出了选择。',
            effects: { health: -10 }
        },
        {
            text: '吃西药降压',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_704': {
            title: '半人马座α星系',
            description: '{user}使用天文望远镜观察半人马座α星系位置的时候，看到若干条白色的轨迹。{user}认为___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '这是彗星群',
            result: '你做出了选择。'
        },
        {
            text: '这是星尘',
            result: '你做出了选择。'
        },
        {
            text: '有若干不明飞行物正接近太阳系',
            result: '你做出了选择。'
        },
        {
            text: '望远镜故障了',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_582': {
            title: '火灾现场',
            description: '一位大爷住在18层的高楼上，从1楼发生了火灾，但是大爷听信微信上的谣言，认为棉被蘸湿了在裹在身上就可以活下来。{user}必须想办法救人。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '放置气垫让大爷跳下来',
            result: '一位大爷住在18层的高楼上，从1楼发生了火灾，但是大爷听信微信上的谣言，认为棉被蘸湿了在裹在身上就可以活下来。{user}在一楼放置了气垫，大叫让老人跳下来。老人大叫回应，你当我沙比吗。拒绝跳下来。没过多久，楼就被烧塌了，老人死在了瓦砾下。'
        },
        {
            text: '告诉大爷不要相信谣言，要配合消防员的工作',
            result: '一位大爷住在18层的高楼上，从1楼发生了火灾，但是大爷听信微信上的谣言，认为棉被蘸湿了在裹在身上就可以活下来。{user}告诉大爷不要相信谣言，要配合消防员的工作。大爷非常生气，认为你是在骗他，飞速的跑下楼，跟你争论，最后争论不过，一边诅咒着腐朽的社会一边走了。'
        },
        {
            text: '救火就行，火熄了再救人。',
            result: '一位大爷住在18层的高楼上，从1楼发生了火灾，但是大爷听信微信上的谣言，认为棉被蘸湿了在裹在身上就可以活下来。{user}把火救熄了，发现楼顶的大爷已经被浓烟闷死了。',
            death_flag: true,
            death_reason: '一位大爷住在18层的高楼上，从1楼发生了火灾，但是大爷听信微信上的谣言，认为棉被蘸湿了在裹在身上就可以活下来。=NAME=把火救熄了，发现楼顶的大爷已经被浓烟闷死了。'
        }
            ]
        },
        'dbrs_585': {
            title: '黑超铲屎官',
            description: '国家主席赋予{user}所谓“铲屎官”职位后没多久，{user}就收到一副墨镜，和一条铁棒状的仪器，这个仪器有一个按钮，按下这个按钮后，会发出闪光。任何人看到这个闪光，都会忘记30分钟前发生的所有事情。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_588': {
            title: '社会学研究内容',
            description: '社会学，自然就是研究社会的，研究社会的什么呢？以下几项，{user}认为错误的是___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '社会结构',
            result: '你做出了选择。'
        },
        {
            text: '社会的变迁',
            result: '你做出了选择。'
        },
        {
            text: '社会中的个体行为',
            result: '你做出了选择。'
        },
        {
            text: '解决社会中的问题',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_586': {
            title: '公事包',
            description: '{user}在巡视铁路中，发现了一个崭新的公事包被遗弃在铁路中央。{user}走过去捡起来，沉甸甸的公事包，上面还有个密码锁。{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '用小刀切开公事包，查看里面的东西',
            result: '{user}在巡视铁路中，发现了一个崭新的公事包被遗弃在铁路中央。{user}走过去捡起来，沉甸甸的公事包，上面还有个密码锁。{user}很好奇里面装的是什么，用随身携带的小刀把公事包割破了。刚一刺破公事包，一些灰色的粉尘就从公事包的破口处喷出，射了{user}一脸！{user}的脸立马长出了脓疱，痛得{user}在地上打滚，脓疱不断增大，最后爆裂，炸出灰色的粉尘，又落到{user}的脸上，然后又长出新的脓疱……几经折腾后，{user}才离开了人世，脸已经他妈都认不出来了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '把公事包交给上级',
            result: '{user}在巡视铁路中，发现了一个崭新的公事包被遗弃在铁路中央。{user}走过去捡起来，沉甸甸的公事包，上面还有个密码锁。{user}决定把公事包交给上级。后来，{user}被上级以一些理由辞退了。{user}总觉得自己被辞退的原因是那个公事包，但是已经无从考证了。'
        },
        {
            text: '丢一边',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_587': {
            title: '自然规律认识',
            description: '强者越强，弱者越弱。这种社会现象是___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '适者生存',
            result: '{user}对社会的认识非常欠缺，他逐渐觉得自己不适合这个职业，辞去了这个职位。'
        },
        {
            text: '马太效应',
            result: '{user}在社会学方面研究非常深刻，影响力非常大。圈内的人都称{user}为社会学家。'
        },
        {
            text: '弱肉强食',
            result: '{user}对社会的认识非常欠缺，他逐渐觉得自己不适合这个职业，辞去了这个职位。'
        }
            ]
        },
        'dbrs_706': {
            title: '会跟小动物说话',
            description: '{user}精通___语。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '猪',
            result: '你做出了选择。'
        },
        {
            text: '狗',
            result: '你做出了选择。',
            add_tags: ['狗语精通']
        },
        {
            text: '猫',
            result: '你做出了选择。',
            add_tags: ['猫语']
        },
        {
            text: '鸟',
            result: '你做出了选择。',
            add_tags: ['会鸟语']
        },
        {
            text: '海豚',
            result: '{user}能发出海豚音。',
            add_tags: ['音乐', '音乐能力']
        },
        {
            text: '甲壳虫',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_610': {
            title: '学游泳',
            description: '{user}跟朋友去游泳池，决心学游泳。',
            priority: 1,
            trigger_conditions: { age_range: [10, 25] },
            options: [
        {
            text: '尝试到游泳池深水区',
            result: '{user}跟朋友去游泳池，决心学游泳。在不断的尝试，喝了几十口水后，{user}学会了怎么浮起来，学会了游泳。'
        },
        {
            text: '岸上走走',
            result: '{user}跟朋友去游泳池，决心学游泳。然而到了游泳池，{user}却不敢下水，只在岸边走，看朋友在水里玩得很高兴。',
            add_tags: ['胆小']
        },
        {
            text: '呆在浅水区玩玩水就好',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_608': {
            title: '银白的长发',
            description: '{user}走过去一看，发现一个10多岁的皮肤白皙的有一头银发的女生冲他笑！并说了句“被你发现了！”的话，然后就消失不见了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_616': {
            title: '淘金',
            description: '听说现在股票市场非常赚钱，谁买谁赚。{user}也有点积蓄，他决定___',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '购买股票',
            result: '你做出了选择。',
            effects: { money: -3 },
            add_tags: ['股票']
        },
        {
            text: '股票有风险，还是不要碰。',
            result: '听说现在股票市场非常赚钱，谁买谁赚。{user}有自己的看法，他认为股票风险非常大，不能轻信谣言。'
        },
        {
            text: '没钱买啊',
            result: '听说现在股票市场非常赚钱，谁买谁赚。然而{user}没有钱去买股票。'
        },
        {
            text: '把自己所有的钱取出来买股票',
            result: '你做出了选择。',
            set_attributes: { money: 0 }
        }
            ]
        },
        'dbrs_691': {
            title: '监狱情谊',
            description: '{user}在监狱里，每天晚上都会被女狱友磨豆腐。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_618': {
            title: '股票：金融风暴',
            description: '一场金融风波爆发，股票市场全面下跌。{user}投进股票的钱都输没了。',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_620': {
            title: '股票：赌博游戏',
            description: '股票市场充满未知，{user}的股票亏损了一点，{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '卖出，退出股票市场',
            result: '你做出了选择。'
        },
        {
            text: '投入更多，增加买入',
            result: '你做出了选择。',
            effects: { money: -2 },
            add_tags: ['股票']
        }
            ]
        },
        'dbrs_617': {
            title: '股票习惯',
            description: '{user}凭___来购买股票。',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '感觉',
            result: '你做出了选择。'
        },
        {
            text: '随机抽签',
            result: '你做出了选择。'
        },
        {
            text: '猜测',
            result: '你做出了选择。'
        },
        {
            text: '小道消息',
            result: '你做出了选择。'
        },
        {
            text: '国家政策',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_619': {
            title: '股票：大丰收',
            description: '股票大升，{user}的股票升值了一倍！{user}___',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '卖出，收手',
            result: '你做出了选择。'
        },
        {
            text: '买入更多，乘胜追击',
            result: '你做出了选择。',
            effects: { money: -2 },
            add_tags: ['股票']
        }
            ]
        },
        'dbrs_621': {
            title: '股票：赌博游戏',
            description: '股票市场没升没跌。',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        },
        {
            text: '退出股票市场',
            result: '{user}没有继续买股票了。'
        }
            ]
        },
        'dbrs_659': {
            title: '豪车碾压老人',
            description: '接到群众报警，称有一场严重车祸，一辆豪车碾压老人致死。{user}赶到现场查看，现场只有一滩红水。',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '调取此位置监控录像',
            result: '接到群众报警，称有一场严重车祸，一辆豪车碾压老人致死。{user}赶到现场查看，现场只有一滩红水。{user}半信半疑，调取此位置监控录像，果真看到一辆豪车来回碾压老人致死，老人被碾成一滩血水，惨不忍睹。此案情节严重，已经交往刑警大队处理。'
        },
        {
            text: '询问周围目击证人',
            result: '你做出了选择。'
        },
        {
            text: '这只是一场恶作剧',
            result: '你做出了选择。'
        },
        {
            text: '嗅探残留的尾气，判断作案车辆',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_652': {
            title: '不治之症',
            description: '医生告诉{user}一个无情的消息，{user}的尿毒症已经到了末期，命不久矣。{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '人道毁灭',
            result: '你做出了选择。'
        },
        {
            text: '出院，享受自己最后的时光',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_665': {
            title: '思想境界',
            description: '{user}认为，海纳百川，有容则大；的思想是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '气势磅礴才能成就大事',
            result: '你做出了选择。'
        },
        {
            text: '心胸宽广才能变得伟大',
            result: '你做出了选择。'
        },
        {
            text: '做事必须有个人作风',
            result: '你做出了选择。'
        },
        {
            text: '一幅美丽的海洋画面',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_664': {
            title: '出过轨的男朋友',
            description: '现在的股市就像出过轨的男朋友，你一次又一次地相信他会变好，于是他一次又一次地刷新你的底线来伤害你。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '继续相信',
            result: '你做出了选择。'
        },
        {
            text: '卖出股票',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1621': {
            title: '拉格纳罗斯',
            description: '{user}把戒指丢到了熔岩里。戒指碰到熔岩后，化作一缕青烟，被摧毁了。随之而来的是一阵强烈的地震，冒险者们都被震倒了。一个无比巨大的火元素从岩浆里串了出来！冒险者纷纷拿出武器，准备作战。{user}站了起来，刚想加入战斗，他发现法师跑到了远处，开启了一个传送门，并让{user}过去。{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '留下战斗',
            result: '你做出了选择。'
        },
        {
            text: '跟随法师逃走',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1607': {
            title: '战斗：拉格纳罗斯',
            description: '{user}决定留下跟冒险者们战斗，他冲向火元素。火元素看都没看{user}，甩手给了{user}一个火焰冲击，{user}被巨大的推力冲进了岩浆里……',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '在岩浆里挣扎一下',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_671': {
            title: '空间传送技术',
            description: '{user}在光圈科技实验室里，负责开发一项空间传送技术。这个项目非常保密，{user}在一搜南极洲的船上工作，这艘船叫Borealis。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_675': {
            title: '行业竞争',
            description: '在黑山基地中，正在进行空间传送技术试验。所有资料都是高保密等级，{user}每天上班，都要签署一份新的保密协议。与此同时，黑山基地的最大竞争者光圈科技也在开发一项空间传送技术。然而有一天，光圈科技的其中一个实验设施Borealis突然在地球表面上完全消失了，一切表面上看起来就像一场事故。',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_672': {
            title: '传送门',
            description: '光圈科技公司研究的空间传送技术，通过传送门发射器发射黄、蓝色的2个传送门，任何东西从一个门进入，就会从另外一个门出去。已经接近完成。',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_674': {
            title: '反常材料部门',
            description: '在黑山基地中，{user}分配到了位于研究所最深处的反常材料部门，做一些核子和亚原子的研究。虽然是低层员工，但薪水非常高。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_673': {
            title: '奇怪的爆炸',
            description: '某天清晨，{user}与同事进行最后一次传送技术测试的时候，实验室发生突如其来的大爆炸。{user}身体被巨大的冲击力撕裂开来，还没来得及知道发生什么事情，就死去了。',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
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
        'dbrs_676': {
            title: '反常物质实验',
            description: '实验室收到了一个未知来源的样本，黑山基地中的反常物质实验室负责分析这个样本。密不透风的实验室内有一个玻璃窗，{user}和同事在隔壁的安全室内，透过这个玻璃窗观察实验进行。只见一名身穿HEV防护服的实验员走进实验室，在一个控制面板上按了几下，实验室内巨大的反质谱分析仪就旋转了起来。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
            options: [
        {
            text: '点击按钮，把样本传输进实验室',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_680': {
            title: '相亲',
            description: '{user}在和一位小白脸相亲。大家吃晚饭后，小白脸跪在地上，直接向{user}求婚了。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '性高彩烈地答应',
            result: '你做出了选择。',
            add_tags: ['结婚']
        },
        {
            text: '十动然拒',
            result: '你做出了选择。'
        },
        {
            text: '断然拒绝。',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_677': {
            title: '反常物质实验',
            description: '随着身穿HEV防护服的实验员把实验样本推进激光中，意外发生了。实验室的空间发生了串联共振现象，绿色的闪电划过墙壁，巨大的实验仪器不断爆炸。{user}被一道闪电击中，贯穿身体，吐血身亡。',
            priority: 1,
            trigger_conditions: { age_range: [16, 120] },
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
        'dbrs_679': {
            title: '相亲',
            description: '{user}被安排去相亲。对方是一位20多岁的小鲜肉，小白脸。{user}穿___的衣服，去赴约。',
            priority: 1,
            trigger_conditions: { age_range: [40, 120], required_tags: ['女性'] },
            options: [
        {
            text: '成熟知性',
            result: '{user}被安排去相亲。对方是一位20多岁的小鲜肉，小白脸。{user}穿得成熟知性，两人一见钟情……'
        },
        {
            text: '活泼可爱',
            result: '{user}被安排去相亲。对方是一位20多岁的小鲜肉，小白脸。{user}穿得活泼可爱，去赴约了。然而相亲并不顺利，对方似乎有意躲开{user}的视线，饭吃到一半就尿遁走了。'
        },
        {
            text: '领家女孩',
            result: '{user}被安排去相亲。对方是一位20多岁的小鲜肉，小白脸。{user}穿成领家女孩风格，去赴约。相亲中，两个人都好紧张，小心翼翼的，吃一口东西，擦一擦嘴。他们吃完饭，相互道别后，{user}突然发现忘记要对方的联系方式。'
        },
        {
            text: '领家女孩子',
            result: '{user}闯入邻居家，偷衣服被发现，被抓进了监狱。'
        },
        {
            text: '极客',
            result: '{user}被安排去相亲。对方是一位20多岁的小鲜肉，小白脸。{user}穿着非常极客，把相亲对象吓跑了……'
        }
            ]
        },
        'dbrs_682': {
            title: '离开魔界',
            description: '皇宫法师为{user}开启了通向现实世界的传送门，{user}一脚踏进传送门，一缕熟悉的雾霾味扑鼻而来，{user}回到了自己的世界。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_687': {
            title: '近视眼',
            description: '{user}经常在电脑面前打字，疲劳用眼。不久后就得了近视眼。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['近视眼']
        }
            ]
        },
        'dbrs_692': {
            title: '监狱情谊',
            description: '{user}在监狱里，每天晚上都会被一帮黑人女狱友磨豆腐。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_690': {
            title: '谈婚论嫁',
            description: '{user}在和对象讨论婚应该怎么结。{user}觉得___比较好。',
            priority: 1,
            trigger_conditions: { age_range: [25, 120] },
            options: [
        {
            text: '中式婚礼',
            result: '{user}与对象结婚了，他们在炮仗声中结为夫妇。然而，在当天晚上闹洞房玩脱了，{user}被整死在床上。',
            add_tags: ['死亡'],
            remove_tags: ['恋爱'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '西式婚礼',
            result: '你做出了选择。',
            add_tags: ['结婚'],
            remove_tags: ['恋爱']
        },
        {
            text: '只领一个证不办婚礼',
            result: '你做出了选择。',
            add_tags: ['结婚'],
            remove_tags: ['恋爱']
        },
        {
            text: '旅行结婚',
            result: '你做出了选择。',
            add_tags: ['结婚'],
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_693': {
            title: '滴蜡游戏',
            description: '{user}经常被狱警强迫脱光衣服，玩滴蜡游戏。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_695': {
            title: '东视涉传播淫秽物品牟利案',
            description: '东视科技有限公司被告上了法庭，原因是公司所研发的相关技术涉嫌传播淫秽物品，而且公司为此获得利益。{user}被此公司委托为其辩护。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '故意输掉官司，并紧接着把国家能源部门告上法庭',
            result: '东视科技有限公司被告上了法庭，原因是公司涉嫌传播淫秽物品牟利。{user}被此公司委托为其辩护。{user}却故意认罪，输掉官司，东视高层面临10年以上的牢狱之苦。公司高层非常愤怒，接下来{user}淡定地把国家能源部门告上法庭，原因是此部门所生产的相关能源涉嫌传播淫秽物品，而且此部门为此获得利益。能源部门的所有领导高层全部定罪，被判坐牢10年。'
        },
        {
            text: '使用“技术无罪”论辩解',
            result: '东视科技有限公司被告上了法庭，原因是公司涉嫌传播淫秽物品牟利。{user}被此公司委托为其辩护。{user}使用“技术无罪”论辩解。最后东视被判罪名不成立。东视赢得了官司，却受到不少道德的谴责。'
        },
        {
            text: '尝试利用大量专业词汇糊弄法庭，让其相信被告无罪',
            result: '东视科技有限公司被告上了法庭，原因是公司涉嫌传播淫秽物品牟利。{user}被此公司委托为其辩护。{user}尝试利用大量专业词汇糊弄法官，但堂堂法庭，岂是{user}可以忽悠得了，最后东视还是被判有罪，高层面临10年以上的牢狱之苦。'
        },
        {
            text: '解释淫秽物品传播的好处，并认为法律不合理',
            result: '东视科技有限公司被告上了法庭，原因是公司涉嫌传播淫秽物品牟利。{user}被此公司委托为其辩护。{user}在法庭中，直接认为本国法律不合时宜。在国家已经进入老龄化的当时，淫秽物品的传播无疑可以造成提高生育率、降低犯罪率等对社会有利的影响。称之为“罪”是一种当今时代的错误。在场的所有人都被{user}这番理论说服了，东视被判罪名不成立。在同一天，申国最高人民法院也起草了新的法案，有关淫秽物品传播奖励法。而{user}被调职到国家高层，进入中南河工作。'
        }
            ]
        },
        'dbrs_697': {
            title: '前浪推后浪',
            description: '{age}岁的{user}反应和思维都不及年轻人，在比赛中屡屡战败。最终被踢出了老干妈战队。',
            priority: 1,
            trigger_conditions: { age_range: [25, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_698': {
            title: '职业玩家：必杀技',
            description: '在《反恐精英：开箱》中，{user}的必杀技是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 25] },
            options: [
        {
            text: '360°回旋盲狙爆头',
            result: '你做出了选择。'
        },
        {
            text: '连续开箱20个',
            result: '你做出了选择。'
        },
        {
            text: '连续开箱200个',
            result: '你做出了选择。',
            effects: { money: -4 }
        },
        {
            text: '看穿墙壁',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_700': {
            title: '职业玩家：世界级比赛',
            description: '《反恐精英：开箱》世界级比赛正式开幕了，{user}的老干妈战队也参加了。在{user}和队员们准备大干一场的时候，战队老板却告诉他们要打假赛，必须输给对手。',
            priority: 1,
            trigger_conditions: { age_range: [1, 25] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_701': {
            title: '职业玩家：世界级比赛',
            description: '比赛开始了，{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '听从老板的旨意，输掉比赛',
            result: '你做出了选择。'
        },
        {
            text: '尽力而为',
            result: '你做出了选择。'
        },
        {
            text: '我要成为主宰',
            result: '你做出了选择。'
        },
        {
            text: '切换出游戏上网看视频打发时间',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_703': {
            title: '职业玩家：世界级比赛（结果）',
            description: '《反恐精英：开箱》比赛中，{user}所在的老干妈战队赢得了冠军。{user}和队员们不顾战队老板，几个人把比赛的奖金分掉（每人2500万个箱子），然后就跑路了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 10 }
        }
            ]
        },
        'dbrs_699': {
            title: '职业玩家：学习',
            description: '{user}是一名游戏职业选手，同时也是一名学生。学习与游戏，{user}更注重___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '游戏',
            result: '你做出了选择。'
        },
        {
            text: '学习',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_705': {
            title: '半人马座α星系奇怪轨迹',
            description: '{user}把观察得到的结果拍照，并___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '发表',
            result: '{user}把观察得到的结果拍照，并发表在相关媒体上，立刻引起了各方的关注。这让{user}获得了巨额的研究经费。',
            effects: { money: 8 }
        },
        {
            text: '保存好',
            result: '你做出了选择。'
        },
        {
            text: '撕碎这些照片！',
            result: '当天观察的结果被拍成了照片，{user}感到非常害怕，把这些照片撕碎了。'
        }
            ]
        },
        'dbrs_702': {
            title: '职业玩家：世界级比赛（结果）',
            description: '《反恐精英：开箱》比赛中，{user}所在的老干妈战队惨败。更糟糕的是，打假赛的事情还败露了，战队老板将所有的罪过都推卸到队员身上，并将他们贬为临时工，然后炒鱿鱼。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_712': {
            title: '职业医生资格考试',
            description: '不能用于变应原确定的试验是___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '皮肤试验',
            result: '非常遗憾，{user}在职业医生资格考试中失利，没有通过考试。'
        },
        {
            text: '变应原激发试验',
            result: '非常遗憾，{user}在职业医生资格考试中失利，没有通过考试。'
        },
        {
            text: '血清总IgE测定',
            result: '{user}顺利通过了职业医生资格考试，靠自己的努力获得了证书！'
        },
        {
            text: '特异性IgE测定',
            result: '非常遗憾，{user}在职业医生资格考试中失利，没有通过考试。'
        },
        {
            text: 'CAP变应原检测系统',
            result: '非常遗憾，{user}在职业医生资格考试中失利，没有通过考试。'
        }
            ]
        },
        'dbrs_713': {
            title: '医生',
            description: '{user}成为了一名医生，有了自己的诊室，上班就穿上医生的招牌——大白褂。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1499': {
            title: '比惨王：自我介绍',
            description: '《申国比惨王》节目开始采访{user}，主持人让{user}坐一个自我介绍。{user}说：___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '我很有钱',
            result: '你做出了选择。'
        },
        {
            text: '我很穷',
            result: '你做出了选择。',
            add_tags: ['同情分']
        },
        {
            text: '我生下来就没屁眼，非常惨。',
            result: '你做出了选择。',
            add_tags: ['同情分']
        },
        {
            text: '我生下来就没屁眼，非常惨。',
            result: '你做出了选择。',
            add_tags: ['同情分']
        },
        {
            text: '我有口臭，非常凄凉',
            result: '你做出了选择。',
            add_tags: ['同情分']
        },
        {
            text: '我是一名孤儿',
            result: '你做出了选择。',
            add_tags: ['同情分']
        },
        {
            text: '我是一个剩女',
            result: '你做出了选择。',
            add_tags: ['同情分']
        },
        {
            text: '我是一个剩男',
            result: '你做出了选择。',
            add_tags: ['同情分']
        },
        {
            text: '我曾是一条狗',
            result: '你做出了选择。',
            add_tags: ['同情分']
        },
        {
            text: '报上大名',
            result: '《申国比惨王》节目开始采访{user}，主持人让{user}坐一个自我介绍。{user}报上自己的名字。'
        },
        {
            text: '报上岁数',
            result: '《申国比惨王》节目开始采访{user}，主持人让{user}坐一个自我介绍。{user}报上自己的年龄。'
        }
            ]
        },
        'dbrs_714': {
            title: 'H5N2爆发',
            description: '一个新的急性呼吸道疾病疫情爆发，名叫H5N2，这个流感的死亡率非常高。{user}的诊室也经常遇到H5N2的患者。{user}推荐给患者的治疗方案是___。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '尝试最新研制的疫苗(副作用未知)',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '一个新的急性呼吸道疾病疫情爆发，名叫H5N2，这个流感的死亡'
        },
        {
            text: '乡下流传的巫术',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '一个新的急性呼吸道疾病疫情爆发，名叫H5N2，这个流感的死亡'
        },
        {
            text: '中医疗法，拔火罐',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '一个新的急性呼吸道疾病疫情爆发，名叫H5N2，这个流感的死亡'
        },
        {
            text: '在家里诚心祈祷',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '一个新的急性呼吸道疾病疫情爆发，名叫H5N2，这个流感的死亡'
        }
            ]
        },
        'dbrs_716': {
            title: '无精打采的病人',
            description: '{user}的诊室来了一名无精打采的病人。这位病人刚刚被诊断出爱之病阳性。{user}给了这位病人___的人生建议。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '人道毁灭',
            result: '你做出了选择。'
        },
        {
            text: '化疗',
            result: '你做出了选择。'
        },
        {
            text: '只要微笑就好',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_721': {
            title: '奸杀案',
            description: '一名14岁未成年少年，在精心策划之下，强奸并杀害了他的同班同学，受害者竟然还是班花。这个骇人听闻的强奸杀人案开庭了，{user}作为辩护律师，他___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '要求从轻处罚，请给畜生一次做人的机会',
            result: '一名14岁未成年少年，在精心策划之下，强奸并杀害了他的同班同学，受害者竟然还是班花。这个骇人听闻的强奸杀人案开庭了，{user}作为辩护律师，他用要求法庭对被告从轻处罚，请给畜生一次做人的机会。最后法庭的判决是，有期徒刑25年。真的让这个畜生进监狱从新做人。'
        },
        {
            text: '用申国未成年人渣保护法作为护盾',
            result: '一名14岁未成年少年，在精心策划之下，强奸并杀害了他的同班同学，受害者竟然还是班花。这个骇人听闻的强奸杀人案开庭了，{user}作为辩护律师，他用《申国未成年人渣保护法》作为护盾,力争从轻处理。最后，这位少年被判入狱1年，缓刑1年。而这次官司的结果使公众的舆论一片哗然，海量的指责使事务所不得不解雇了{user}。'
        },
        {
            text: '放弃辩护',
            result: '你做出了选择。'
        },
        {
            text: '辞职',
            result: '看到过太多社会的黑暗面，{user}绝望了，他辞掉了工作。不当律师起码可以逃避这个黑暗的社会。',
            add_tags: ['玻璃心'],
            remove_tags: ['高情商']
        }
            ]
        },
        'dbrs_715': {
            title: '奇怪的患者',
            description: '有一天，{user}的诊室里来了一个奇怪的病人。这位病人看起来并无病痛，他一进门就给{user}塞了一个大红包。这个红包很重，薄薄的红包皮快要被里面的东西撑破了。病人想让{user}给他开一份《久坐精神恍惚症证明》。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '拒绝，把红包还给别人。',
            result: '你做出了选择。'
        },
        {
            text: '收好红包，然后利索地开证明。',
            result: '你做出了选择。',
            effects: { money: 3 }
        },
        {
            text: '打电话报警',
            result: '有一天，{user}的诊室里来了一个奇怪的病人。这位病人看起来并无病痛，他一进门就给{user}塞了一个大红包。这个红包很重，薄薄的红包皮快要被里面的东西撑破了。病人想让{user}给他开一份《久坐精神恍惚症证明》。{user}知道这个肯定是某个官员犯罪了要开这种证明逃脱责任，{user}义不容辞地拿起电话拨打了110。那位“病人”看到{user}报警，立马夺门而逃。',
            effects: { money: 3 }
        }
            ]
        },
        'dbrs_728': {
            title: '拍卖会：结束',
            description: '{user}离开了拍卖会。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_729': {
            title: '拍卖会：厨房用品',
            description: '在拍卖会中，一款名叫“转龙壶”的厨具进行拍卖。叫价已经非常高，要赢得竞价，恐怕得倾家荡产（需要花费掉5点财富）。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '不惜一切代价叫价',
            result: '你做出了选择。',
            effects: { money: -5 },
            add_tags: ['获得转龙壶']
        },
        {
            text: '放弃叫价',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_731': {
            title: '拍卖会：一枚戒指',
            description: '在拍卖会中，一个戒指被摆上台面开始拍卖，这个看似很普通的戒指被叫到了高价（5点财富）。戒指上刻着一些铭文：至尊二戒（比至尊一戒强多了）。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '买！',
            result: '{user}花了5点财富，从拍卖会中买回来一个相貌平平的戒指——至尊二戒。他刚戴上这枚戒指，立马感觉自己的灵魂和戒指绑定在了一起……',
            effects: { money: -5 }
        },
        {
            text: '没兴趣',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_734': {
            title: '烧伤的身体',
            description: '{user}发现薇尔希的身体上有很多被烧伤的痕迹，她说这是以前的主人经常跟她玩滴蜡游戏造成的。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_735': {
            title: '女人的冲突',
            description: '{user}收留了薇尔希，女友非常不高兴。哭闹着要{user}赶走薇尔希，不然就分手。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '和女友分手',
            result: '{user}收留了薇尔希，女友非常不高兴。哭闹着要{user}赶走薇尔希，不然就分手。然后，{user}就和女友分手了',
            remove_tags: ['恋爱']
        },
        {
            text: '赶走薇尔希',
            result: '{user}收留了薇尔希，女友非常不高兴。哭闹着要{user}赶走薇尔希，不然就分手。{user}只好把薇尔希赶走了……'
        }
            ]
        },
        'dbrs_733': {
            title: '女奴隶',
            description: '{user}买回来的女奴隶，名字叫薇尔希。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '我养你！',
            result: '{user}买回来的女奴隶，名叫薇尔希。{user}和她住在了一起。'
        },
        {
            text: '给予她自由',
            result: '{user}对他的奴隶说：“当今社会不应当存在奴隶，你自由了。”然后就把她赶出了自己的家门'
        }
            ]
        },
        'dbrs_736': {
            title: '薇尔希的地位',
            description: '在{user}的心中，薇尔希是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '女儿',
            result: '你做出了选择。'
        },
        {
            text: '朋友',
            result: '你做出了选择。'
        },
        {
            text: '家人',
            result: '你做出了选择。'
        },
        {
            text: '奴隶',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_730': {
            title: '拍卖会：名画',
            description: '在拍卖会中，一幅来自目国文艺复兴时期的名画“凉宫春日的微笑”被摆上台上拍卖。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '100元，我要了',
            result: '在拍卖会中，一幅来自目国文艺复兴时期的名画“凉宫春日的微笑”被摆上台上拍卖。{user}说了句：“100元，我要了。“然后就被众人抬出了拍卖会。'
        },
        {
            text: '这值1点财富',
            result: '在拍卖会中，一幅来自目国文艺复兴时期的名画“凉宫春日的微笑”被摆上台上拍卖。{user}出价1点财富，但是被另外一个出价2点财富的土豪打败了。'
        },
        {
            text: '我出2点财富',
            result: '在拍卖会中，一幅来自目国文艺复兴时期的名画“凉宫春日的微笑”被摆上台上拍卖。{user}第一个叫价2点财富，全场立马鸦雀无声。{user}赢得了这幅画，拿回家挂在了墙上。',
            effects: { money: -2 }
        },
        {
            text: '这画好丑',
            result: '{user}并不是一个好的美术鉴赏家。'
        },
        {
            text: '就看看，不想买',
            result: '在拍卖会中，一幅来自目国文艺复兴时期的名画“凉宫春日的微笑”被摆上台上拍卖。{user}就凑个热闹，对这画没有兴趣。'
        }
            ]
        },
        'dbrs_732': {
            title: '拍卖会：奴隶',
            description: '在拍卖会中，有一名女性奴隶被摆上了台面，进行拍卖。她看起来年纪10几出头，蓝色的眼睛里透露出无助。没什么人愿意买她，可以花很少的价钱买到她。不过这种瘦弱的奴隶似乎没什么用，不能干很多活。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '不假思索地买下她',
            result: '你做出了选择。'
        },
        {
            text: '没兴趣',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_737': {
            title: '家有奴隶',
            description: '薇尔希是{user}的奴隶，她不准直呼{user}的名字，而要叫主人。她的工作是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '负责洗衣做饭',
            result: '你做出了选择。'
        },
        {
            text: '负责下楼拿快递',
            result: '你做出了选择。'
        },
        {
            text: '充当{user}的出气筒',
            result: '你做出了选择。'
        },
        {
            text: '帮助{user}解决生理问题',
            result: '{user}这个畜生，在家里囚禁了一个少女当作性奴。'
        }
            ]
        },
        'dbrs_739': {
            title: '与薇尔希聊天',
            description: '{user}尝试和薇尔希聊天，他们聊___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '烧红的铅球放入水中会发生什么',
            result: '{user}尝试和薇尔希聊天，他们在聊“烧红的铅球放入水中会发生什么”。{user}在兴致勃勃地说着，薇尔希附和着。也许她没懂{user}在说些啥，但是她却很开心的样子。',
            add_tags: ['与薇尔希相处愉快']
        },
        {
            text: '蓄力亚战争战况',
            result: '{user}尝试和薇尔希聊天，他们在聊“蓄力亚战争战况”。{user}在兴致勃勃地说着，薇尔希勉强在旁边附和着，薇尔希皱着尾头，战争似乎让她想到了不好的东西。'
        },
        {
            text: '发展中国家的经济与文化',
            result: '{user}尝试和薇尔希聊天，他们在聊“发展中国家的经济与文化”。{user}在兴致勃勃地说着，薇尔希附和着。也许她没懂{user}在说些啥，但是她却很开心的样子。',
            add_tags: ['与薇尔希相处愉快']
        },
        {
            text: '天气',
            result: '{user}尝试和薇尔希聊天，他们在聊无聊的天气话题。薇尔希似乎非常开心，{user}放心了。',
            add_tags: ['与薇尔希相处愉快']
        },
        {
            text: '薇尔希的往事',
            result: '{user}尝试和薇尔希聊天，他不断地问薇尔希的过去。薇尔希说着说着，哭了起来。'
        },
        {
            text: '豆腐脑应该甜还是咸',
            result: '{user}尝试和薇尔希聊天，他们在争论“豆腐脑应该甜还是咸”。他们聊得很激动，薇尔希似乎非常开心。',
            add_tags: ['与薇尔希相处愉快']
        },
        {
            text: '明星八卦',
            result: '{user}尝试和薇尔希聊天，他们在聊明星八卦。{user}在兴致勃勃地说着，薇尔希附和着。也许她没懂{user}在说些啥，但是她却很开心的样子。',
            add_tags: ['与薇尔希相处愉快']
        }
            ]
        },
        'dbrs_743': {
            title: '脆弱',
            description: '有一次，薇尔希患上了感冒。薇尔希身子非常弱，根本承受不了一次普通的感冒。虽然得到一些妥善的治疗，但是她还是在某一天的清晨离开了人世。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['结婚并收养女儿']
        }
            ]
        },
        'dbrs_738': {
            title: '悲惨的少女',
            description: '薇尔希是一名15岁的少女，她过去是一个地主家庭的奴隶，受尽折磨，不忍回忆。她在{user}面前很紧张，对未来与未知充满了害怕、绝望。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '摸摸她的头',
            result: '薇尔希是一名15岁的少女，她过去是一个地主家庭的奴隶，受尽折磨，不忍回忆。她在{user}面前很紧张，对未来与未知充满了害怕、绝望。{user}摸摸她的头，她却害怕得发抖，说：“只要主人开心就好。”'
        },
        {
            text: '与她聊天',
            result: '薇尔希是一名15岁的少女，她过去是一个地主家庭的奴隶，受尽折磨，不忍回忆。她在{user}面前很紧张，对未来与未知充满了害怕、绝望。{user}与她聊天，希望能尽快将她带出这片阴影中。'
        },
        {
            text: '带她外出',
            result: '薇尔希是一名15岁的少女，她过去是一个地主家庭的奴隶，受尽折磨，不忍回忆。她在{user}面前很紧张，对未来与未知充满了害怕、绝望。{user}决定带她外出，让她感受一下外面世界的美好，让她走出心理阴影。'
        }
            ]
        },
        'dbrs_740': {
            title: '与薇尔希外出',
            description: '{user}尝试带薇尔希外出，他们去了___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '网吧',
            result: '{user}尝试带薇尔希外出，他们去了网吧，薇尔希很害怕，一直躲在{user}后面，看着他玩电脑。'
        },
        {
            text: '宵夜店',
            result: '{user}尝试带薇尔希外出，他们去了宵夜店吃东西。薇尔希吃得狼吞哭咽的，似乎很开心。',
            add_tags: ['与薇尔希相处愉快']
        },
        {
            text: '游乐园',
            result: '{user}尝试带薇尔希外出，他们去了游乐园。薇尔希像其他小朋友一样开心地坐在旋转木马上。',
            add_tags: ['与薇尔希相处愉快']
        },
        {
            text: '逛商业区',
            result: '{user}尝试带薇尔希外出，他们去逛街了。薇尔希和{user}一起走在街上，似乎让薇尔希非常感动，她高兴地哭了，突然从后面抱住了{user}。',
            add_tags: ['与薇尔希相处愉快']
        }
            ]
        },
        'dbrs_744': {
            title: '脆弱',
            description: '有一次，薇尔希患上了感冒。薇尔希身子非常弱，根本承受不了一次普通的感冒。而且身患疾病的她还在继续劳动，终于在某一天的清晨，薇尔希离开了人世。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_746': {
            title: '脆弱',
            description: '有一次，薇尔希患上了感冒。薇尔希身子非常弱，根本承受不了一次普通的感冒。虽然得到一些妥善的治疗，但是她还是在某一天的清晨离开了人世。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_750': {
            title: '获得新生',
            description: '经过长时间的复杂手术后，医生顺利为{user}移植了健康的肝脏。{user}身体对新的肝脏的排异反应几乎没有，{user}逃离了死神的魔抓，获得了新生。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肝硬化：晚期']
        }
            ]
        },
        'dbrs_745': {
            title: '脆弱',
            description: '有一次，薇尔希患上了感冒。薇尔希身子非常弱，根本承受不了一次普通的感冒。虽然得到一些妥善的治疗，但是她还是在某一天的清晨离开了人世。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_751': {
            title: '薇尔希',
            description: '回到了家后，{user}发现薇尔希没有在家。四处寻找后，在桌子上的一张字条引起了{user}的注意。上面写着：“和你在一起的时候我非常高兴，所以我不想你死掉。为了你，我可以付出我的所有，甚至是生命。再见了，{user}。——薇尔希”{user}呆在了原地，字条悄悄地从指缝间溜走，轻轻地落在地上，然后被{user}的泪雨沾湿。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_762': {
            title: '单身综合症',
            description: '{user}患上了单身综合症，看到异性就显得特别紧张，根本无法沟通。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['内向'],
            remove_tags: ['高情商']
        }
            ]
        },
        'dbrs_791': {
            title: '橄榄枝',
            description: '一个神秘的公司的生物科技公司向{user}伸出了橄榄枝，薪酬非常丰厚，{user}___。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '根本找不到理由拒绝',
            result: '你做出了选择。'
        },
        {
            text: '拒绝来历不明的公司',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_772': {
            title: '信号',
            description: '{user}在某个观察脉冲星的项目时，在天琴座附近收到了一段怪异的信号。这段信号是1到101的质数，接着是一段模糊的视频片段，视频里有人在麦克风前讲话，似乎在演讲。{user}意识到他发现了不得了的事情，一个不是人类的声音。{user}选择___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '隐藏这个消息',
            result: '你做出了选择。'
        },
        {
            text: '上报国家',
            result: '{user}在某个观察脉冲星的项目时，收到了一段怪异的信号。这段信号是1到101的质数，接着是一段模糊的视频片段，视频里有人在麦克风前讲话，似乎在演讲。{user}意识到他发现了不得了的事情，一个不是人类的声音。{user}选择上报国家。不久后，国家接管了这个项目，将所有获得的信息都进行了加密封锁。'
        },
        {
            text: '联系全世界的天文组织',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_773': {
            title: '信号-后续',
            description: '{user}联合了全世界大部分的天文组织，共同瞄准天琴座方向接收数据。半个月后，整个信息被接收完毕。解码出来后，是一段视频，视频内容是1936年希特勒宣布柏林奥林匹克运动会开幕。{user}认为___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '外星人在跟我们打招呼呢',
            result: '你做出了选择。'
        },
        {
            text: '视频里应该还有其他信息',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_775': {
            title: '神秘数据',
            description: '经过整年的尝试，视频内的噪音数据还是不能被解码。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '坚持',
            result: '经过整年的尝试，视频内的噪音数据还是不能被解码。{user}坚持继续解码，这花掉了他非常多的钱。',
            effects: { money: -6 }
        },
        {
            text: '放弃继续解码',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_776': {
            title: '解码成功',
            description: '在坚持不懈的解码工作后，数据团队终于解码成功，从那些噪音数据中，解码出六万三千页文件，那些文件经过三维组合继续解码后，最终解码出一个工程图标，去制造某一种用处不明的机器。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_777': {
            title: '工程图',
            description: '从外星智慧的信号中，解码出来的工程图，可以制造用途尚不明了的机器。{user}选择___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '上报国家',
            result: '你做出了选择。'
        },
        {
            text: '隐藏这个工程图',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_774': {
            title: '神秘视频',
            description: '{user}找到专业的数据分析团队，对视频进行了分析。得出一个结论是，这个视频有每秒60帧，但解析出来后的视频是每秒30帧，剩下的30帧都是噪音数据。{user}吩咐这个团队___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '尝试解码噪音数据',
            result: '你做出了选择。'
        },
        {
            text: '放弃继续解码',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_778': {
            title: '用途不明的机器',
            description: '{user}把发现的工程图上报了国家，在经过漫长的研究和无数次会议的投票后，虽然还是没弄懂这个机器的作用，不过国家还是决定制造它出来。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_780': {
            title: '写作界救星',
            description: '{user}之前在学校写的那篇2万字的作文，被互联网曝光后，感动天感动地。{user}被形容为申国写作界的一枚救星，有一个公司找到{user}，要求{user}把这个作文的版权卖给他们。开价非常高，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '答应卖掉',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '拒绝卖掉',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_781': {
            title: '连续剧',
            description: '菜兵，申国有名导演，找到{user}，要求以{user}那篇满分作文作为原著，拍成同名连续剧。《流行花园》。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '同意',
            result: '你做出了选择。'
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_782': {
            title: '连续剧',
            description: '以{user}的满分作文为原著的连续剧《流行花园》一经播出后，火遍了全国，收视率接近50%。这个连续剧似乎是一颗摇钱树，钱像下雨一样落到{user}的钱包里。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 10 }
        }
            ]
        },
        'dbrs_783': {
            title: '粉丝的信件',
            description: '因为{user}是《流行花园》的原作者，每一天，{user}都会收到大量的粉丝写来的信件。因为看不过来，{user}只好每天打电话找来一辆泥头车把信件运走销毁。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_792': {
            title: '瘟疫公司',
            description: '{user}来到了这个生物科技公司，{user}发现这个公司是专门研究病毒的目标是创造灭世的病毒，然后垄断解药，创造利润。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_794': {
            title: '瘟疫公司公关',
            description: '{user}是瘟疫公司的公关，有非常丰厚的薪酬。{user}的工作就是带着瘟疫病原体，到公司分配的地点进行自杀式恐怖袭击。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 5 },
            death_flag: true,
            death_reason: '{user}是瘟疫公司的公关，有非常丰厚的薪酬。{user}'
        }
            ]
        },
        'dbrs_796': {
            title: '铁路上的施工',
            description: '{user}靠近点一看，在铁路上大概有20多人，在上面安装路障，火药，炸弹等等很危险的东西。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '调头就跑',
            result: '{user}靠近点一看，在铁路上大概有20多人，在上面安装路障，火药，炸弹等等很危险的东西。{user}心里暗叫不妙，想调头就跑，可是已经晚了。那帮人已经发现了{user}，他们看到{user}在逃跑，立马开枪射击。{user}没跑几步路，就中枪倒地，倒在铁路旁的煤渣地上，断气了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=靠近点一看，在铁路上大概有20多人，在上面安装路障，火药，炸弹等等很危险的东西。=NAME=心里暗叫不妙，想调头就跑，可是已经晚了。那帮人已经发现了=NAME=，他们看到=NAME=在逃跑，立马开枪射击。=NAME=没跑几步路，就中枪倒地，倒在铁路旁的煤渣地上，断气了。'
        },
        {
            text: '上前询问',
            result: '你做出了选择。'
        },
        {
            text: '装作无视，路过',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_793': {
            title: '瘟疫公司',
            description: '{user}在瘟疫公司内，是一名___。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '瘟疫设计员',
            result: '你做出了选择。'
        },
        {
            text: '瘟疫测试员',
            result: '你做出了选择。'
        },
        {
            text: '公关',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_803': {
            title: '被拐',
            description: '有一天{user}在悠闲地走着，突然身后传来凶猛的引擎声，{user}暗觉不妙往后一看，说时迟那时快，2个偷狗贼骑着摩托车飞快地开到{user}面前，一把抓着{user}的脖子，硬是把{user}抓上了车。第二天，{user}就在砂锅里，冒着热气被筷子们夹了。',
            priority: 1,
            trigger_conditions: { age_range: [2, 120] },
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
        'dbrs_804': {
            title: '被拐',
            description: '有一天{user}在悠闲地走着，突然身后传来凶猛的脚步声，{user}暗觉不妙往后一看，说时迟那时快，一个有麒麟臂的偷狗贼一把抓着{user}的尾巴，把{user}在空中360度甩，{user}慢慢被甩得失去了意识。第二天，{user}就在砂锅里，冒着热气被筷子们夹了。',
            priority: 1,
            trigger_conditions: { age_range: [2, 120] },
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
        'dbrs_810': {
            title: '捐精',
            description: '{user}去到广告的地址后，发现这是一家私人医院。胸大可爱的护士把{user}带到一个狭小的房间，护士让{user}进去，然后关上了门。{user}发现这个房间内有一台假台畜……，他___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '趴在台畜上，开工',
            result: '你做出了选择。'
        },
        {
            text: '感觉不妙，走人。',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_812': {
            title: '传播病毒',
            description: '{user}被公司派遣到非洲一个贫穷落后的国家进行病毒传播。{user}计划使用___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '炸弹袭击',
            result: '{user}被公司派遣到非洲一个贫穷落后的国家进行病毒传播，他身上捆绑了炸药，并且携带了大量的病毒。{user}走到人最多的城市中心，点燃了炸药的引线……{user}轰轰烈烈地死去。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '病毒苹果',
            result: '{user}被公司派遣到非洲一个贫穷落后的国家进行病毒传播，{user}假装成水果商人，将病毒注入苹果中贩卖。'
        },
        {
            text: '辞职',
            result: '在这个制造瘟疫的公司中，{user}受到良心谴责，他向老板辞职了。在{user}在最后一天下班的路上，一辆黑色的面包车开到{user}面前，从里面伸出一把冲锋枪，对着{user}扫射，{user}应声倒地……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_813': {
            title: '测试员',
            description: '{user}是瘟疫公司的测试员，薪酬非常丰厚。{user}的工作就是帮公司试吃最新的病毒，测试毒性。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 6 }
        }
            ]
        },
        'dbrs_817': {
            title: '职业病',
            description: '{user}因为经常在铁路边工作，经常吸入煤渣粉尘。积累成疾，终于有一天，{user}感到呼吸困难，医院诊断的结果是：黑肺病中期。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_819': {
            title: '乞丐',
            description: '{user}打扮成___的样子乞讨。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '断臂',
            result: '你做出了选择。'
        },
        {
            text: '大头婴儿',
            result: '你做出了选择。'
        },
        {
            text: '潇洒哥',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_821': {
            title: '乞讨',
            description: '{user}是一名乞丐，他选择___的方式去乞讨。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '乔装打扮',
            result: '你做出了选择。'
        },
        {
            text: '才艺表演',
            result: '你做出了选择。'
        },
        {
            text: '真材实料',
            result: '{user}是一名乞丐。他觉得做乞丐要多一点真诚，少一点套路。要成为一个真正可怜的乞丐，{user}把自己的脖子割断，死了。{user}用他的真诚感动了乞丐界。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=是一名乞丐。他觉得做乞丐要多一点真诚，少一点套路。要成为一个真正可怜的乞丐，=NAME=把自己的脖子割断，死了。=NAME=用他的真诚感动了乞丐界。'
        }
            ]
        },
        'dbrs_818': {
            title: '逗比病毒',
            description: '{user}在一次研究病毒的时候，无意合成了一种病毒，这种病毒可以使患病的白老鼠变成逗比，行为举止都让人发笑。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '立即销毁',
            result: '你做出了选择。'
        },
        {
            text: '拍照发朋友圈',
            result: '{user}在瘟疫公司上班时拍照玩朋友圈，被上级发现。{user}被拉去小黑屋枪毙了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '提交给上级',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_820': {
            title: '乞丐：才艺表演',
            description: '{user}在街头___的方式乞讨。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '独唱',
            result: '你做出了选择。'
        },
        {
            text: '弹吉他',
            result: '你做出了选择。'
        },
        {
            text: '弹钢琴',
            result: '你做出了选择。'
        },
        {
            text: '吹箫',
            result: '{user}在街头帮人吹箫，日入斗金',
            effects: { money: 4 }
        }
            ]
        },
        'dbrs_824': {
            title: '成名之路：自荐',
            description: '{user}向___公司发去了自己的歌，和自己的简历。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '华谊兄贵',
            result: '{user}向华谊兄贵公司发去了自己的歌，和自己的简历。{user}立即被录取了。'
        },
        {
            text: '滚蛋唱片',
            result: '你做出了选择。'
        },
        {
            text: '滚蛋唱片',
            result: '{user}向滚蛋唱片公司发去了自己的歌和自己的简历，但被拒绝了。'
        },
        {
            text: '搜泥音乐',
            result: '{user}向搜泥音乐公司发去了自己的歌和自己的简历，但没有得到回复。'
        }
            ]
        },
        'dbrs_823': {
            title: '成名之路',
            description: '{user}想成为一名专业歌手，他的方法是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '向娱乐公司自荐',
            result: '你做出了选择。'
        },
        {
            text: '街头卖艺，期待星探发掘',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_825': {
            title: '爪哇国旅游',
            description: '{user}去爪哇国旅游，爪哇国正处于内乱中，乱党占据国家控制权。{user}所乘坐的飞机进入爪哇国后，被火箭弹击中堕落。在这个危机的时刻，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '使用安全带上吊自杀',
            result: '{user}去爪哇国旅游，爪哇国正处于内乱中，乱党占据国家控制权。{user}所乘坐的飞机进入爪哇国后，被火箭弹击中堕落。在这个危机的时刻，{user}赶紧使用安全带上吊自杀。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=去爪哇国旅游，爪哇国正处于内乱中，乱党占据国家控制权。=NAME=所乘坐的飞机进入爪哇国后，被火箭弹击中堕落。在这个危机的时刻，=NAME=赶紧使用安全带上吊自杀。'
        },
        {
            text: '闭上眼睛，把这当成是一场梦',
            result: '{user}去爪哇国旅游，爪哇国正处于内乱中，乱党占据国家控制权。{user}所乘坐的飞机进入爪哇国后，被火箭弹击中堕落。在这个危机的时刻，{user}蜷缩在座位上，闭上眼睛。随着一个大爆炸，{user}化作了灰烬。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '哭喊娘',
            result: '{user}去爪哇国旅游，爪哇国正处于内乱中，乱党占据国家控制权。{user}所乘坐的飞机进入爪哇国后，被火箭弹击中堕落。在这个危机的时刻，{user}蜷缩在座位上，哭喊娘。随着一个大爆炸，{user}化作了灰烬。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '偷降落伞',
            result: '{user}去爪哇国旅游，爪哇国正处于内乱中，乱党占据国家控制权。{user}所乘坐的飞机进入爪哇国后，被火箭弹击中堕落。在这个危机的时刻，{user}闯入驾驶舱，抢夺了机长的降落伞，然后锤开紧急出口，跳了出去。还没等{user}反应过来，他就被强大的气流卷进了飞机引擎，被绞成了碎片。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1054': {
            title: '出门走走',
            description: '{user}选择到___旅游。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '湖南省',
            result: '你做出了选择。'
        },
        {
            text: '广东省',
            result: '你做出了选择。'
        },
        {
            text: '四川省',
            result: '你做出了选择。'
        },
        {
            text: '丽江',
            result: '你做出了选择。'
        },
        {
            text: '夏天岛',
            result: '你做出了选择。'
        },
        {
            text: '爪哇国',
            result: '你做出了选择。'
        },
        {
            text: '独自登山',
            result: '{user}想去清静一下，他选择独自登山。'
        }
            ]
        },
        'dbrs_828': {
            title: '涨工资？',
            description: '{user}是某公司里的文职，工资一直涨不上去，{user}很失落。老板安慰{user}：“别灰心，好好干，下个月会更多。”{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '抱住老板痛哭',
            result: '你做出了选择。'
        },
        {
            text: '抱住老板的大腿痛哭',
            result: '你做出了选择。'
        },
        {
            text: '笑笑，然后辞职',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_827': {
            title: '风火轮',
            description: '{user}有一个非常帅气的道具，风火轮。踩着风火轮出行，它还会串出火焰，逼格满满。别人问{user}这个是什么的时候，{user}会低调地说：这只是我改装过的平衡车。',
            priority: 1,
            trigger_conditions: { age_range: [5, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_829': {
            title: '下个月会更多',
            description: '{user}是某公司里的文职，他的老板没有食言，果然第二个月比第一个月多开了十个会。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_826': {
            title: '留堂',
            description: '{user}在学校里被留堂罚抄。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [5, 20] },
            options: [
        {
            text: '乖乖地写完',
            result: '{user}在学校里被留堂罚抄。{user}乖乖地罚抄，等{user}抄完，发现已经是第二天早上了。',
            add_tags: ['多病', '学习成绩']
        },
        {
            text: '溜！',
            result: '{user}在学校里被留堂罚抄。{user}等老师一走，就溜之大吉了。'
        },
        {
            text: '用打印机印',
            result: '{user}在学校里被留堂罚抄。{user}溜出校外，花了几十块把该抄的东西复印了交给老师。老师看到这些复印的作业，刚想发作，{user}突然大声问：“老师，学校要培养的是一种怎样的人才？”老师被问得懵逼了一会儿，{user}接着继续说：“是会做事的人才，而不是低能高分的人才！我用高效率的方法完成你给我的任务，也是我办事能力的一种体现！”{user}说完转身就走，留下一脸懵逼的老师……',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_832': {
            title: '丧尸',
            description: '{user}似乎得了一种奇怪的病，身体各种机能都在衰退。走路走不快，眼睛得了色盲，唾液会不由自主地流出等等……最严重的是，{user}看到人的时候，会有一种想咬他的冲动。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_833': {
            title: '谈判专家',
            description: '{user}走到楼顶，发现一个漂亮的女孩拿着手机坐在围栏上哭成了泪人，看她摇摇晃晃的样子似乎随时都会掉下去。{user}定定神，说：___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120], required_tags: ['男性'] },
            options: [
        {
            text: '跳楼不如做我女友',
            result: '{user}在自家楼顶发现有人要跳楼。一个漂亮的女孩拿着手机坐在围栏上哭成了泪人，看她摇摇晃晃的样子似乎随时都会掉下去。{user}定定神，说：跳楼不如做我女友。女孩看了{user}一眼，转身就跳了下去。'
        },
        {
            text: '跳楼不如做我炮友',
            result: '{user}在自家楼顶发现有人要跳楼。一个漂亮的女孩拿着手机坐在围栏上哭成了泪人，看她摇摇晃晃的样子似乎随时都会掉下去。{user}定定神，说：跳楼不如做我炮友。女孩看了{user}一眼，转身就跳了下去。'
        },
        {
            text: '今天的风儿好喧嚣啊',
            result: '{user}在自家楼顶发现有人要跳楼。一个漂亮的女孩拿着手机坐在围栏上哭成了泪人，看她摇摇晃晃的样子似乎随时都会掉下去。{user}定定神，说：“今天的风儿好喧嚣啊。”女孩子似乎被{user}的话感动了，她沉思半刻，说：“这风儿似有略略欲泣。”{user}向女孩伸出手，继续说：“快走吧，在风停止之前。”女孩子回头看着{user}，把手交给了{user}。他们就这样成了情侣……',
            add_tags: ['恋爱中']
        },
        {
            text: '快跳，我好发朋友圈',
            result: '{user}在自家楼顶发现有人要跳楼。一个漂亮的女孩拿着手机坐在围栏上哭成了泪人，看她摇摇晃晃的样子似乎随时都会掉下去。{user}定定神，说：“快跳，我好发朋友圈。” 女孩听后从围栏下来了，她拍拍身上的尘土，说：“老娘不跳了。”然后扬长而去，留下失望的{user}。'
        }
            ]
        },
        'dbrs_835': {
            title: '家属的请求',
            description: '有一天，{user}诊断出有一个病人身患绝症。{user}告诉身患绝症的患者家属。患者的家属非常伤感，并恳求{user}向患者隐瞒病情，希望能让患者在为数不多的日子里安心。他们让{user}开具一份假诊断。家属看上去都是文明人，家庭条件不错。他们哭泣着寻求帮助，态度十分诚恳，并承诺以后绝对不找麻烦。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '坚决拒绝',
            result: '有一天，{user}诊断出有一个病人身患绝症。{user}告诉身患绝症的患者家属。患者的家属非常伤感，并恳求{user}向患者隐瞒病情，希望能让患者在为数不多的日子里安心。他们让{user}开具一份假诊断。家属看上去都是文明人，家庭条件不错。他们哭泣着寻求帮助，态度十分诚恳，并承诺以后绝对不找麻烦。{user}坚决拒绝了他们的要求。'
        },
        {
            text: '答应',
            result: '有一天，{user}诊断出有一个病人身患绝症。{user}告诉身患绝症的患者家属。患者的家属非常伤感，并恳求{user}向患者隐瞒病情，希望能让患者在为数不多的日子里安心。他们让{user}开具一份假诊断。家属看上去都是文明人，家庭条件不错。他们哭泣着寻求帮助，态度十分诚恳，并承诺以后绝对不找麻烦。{user}答应了，开了一个普通感冒的诊断单。没过多久那名患者就死了……患者死后被家属以假诊断为依据告上法庭。又被记者公开不实的情况后，你遭到社会谴责，再也不能工作，倾家荡产。',
            effects: { money: -5 },
            death_flag: true,
            death_reason: '有一天，=NAME=诊断出有一个病人身患绝症。=NAME=告诉身患绝症的患者家属。患者的家属非常伤感，并恳求=NAME=向患者隐瞒病情，希望能让患者在为数不多的日子里安心。他们让=NAME=开具一份假诊断。家属看上去都是文明人，家庭条件不错。他们哭泣着寻求帮助，态度十分诚恳，并承诺以后绝对不找麻烦。=NAME=答应了，开了一个普通感冒的诊断单。没过多久那名患者就死了……患者死后被家属以假诊断为依据告上法庭。又被记者公开不实的情况后，你遭到社会谴责，再也不能工作，倾家荡产。'
        },
        {
            text: '告诉他们这个绝症现在有得治',
            result: '有一天，{user}诊断出有一个病人身患绝症。{user}告诉他们这个绝症现在有得治，只要来买我推荐的药，很贵，但是对病情非常有效。患者家属深信不疑，买药花光了家产。{user}吃回扣大赚了一笔黑心钱。',
            effects: { money: -5 }
        }
            ]
        },
        'dbrs_836': {
            title: '丧尸',
            description: '因为{user}变得好丑，他的伴侣跟他分手了……',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_840': {
            title: '中头奖',
            description: '一个170开头的手机号码发短信来说你中了头奖，奖金是3000万。领奖需要使用银行汇款，交纳5000元手续费。{user}认为这___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '肯定是骗子',
            result: '你做出了选择。'
        },
        {
            text: '应该是骗子',
            result: '你做出了选择。'
        },
        {
            text: '也许是骗子',
            result: '你做出了选择。'
        },
        {
            text: '大概是假的吧',
            result: '你做出了选择。'
        },
        {
            text: '万一是真的呢？',
            result: '一个170开头的手机号码发短信来说你中了头奖，奖金是3000万。领奖需要使用银行汇款，交纳5000元手续费。{user}觉得万一是真的呢？5000元买不到吃亏，5000元买不到上当。{user}立马去银行汇了5000元手续费。隔天就来快递了，{user}割开硕大的纸皮箱后，里面飞出一张张“申华人民通用冥币”'
        },
        {
            text: '汇款',
            result: '一个170开头的手机号码发短信来说你中了头奖，奖金是3000万。领奖需要使用银行汇款，交纳5000元手续费。{user}深信不疑，立马去银行汇了5000元手续费。隔天就来快递了，{user}割开硕大的纸皮箱后，里面飞出一张张“申华人民通用冥币”'
        }
            ]
        },
        'dbrs_842': {
            title: '拼音知识',
            description: '潜能的潜是第几声？',
            priority: 1,
            trigger_conditions: { age_range: [5, 18] },
            options: [
        {
            text: '2',
            result: '作为一个申国人，{user}的拼音知识是过关的。',
            add_tags: ['学习成绩']
        },
        {
            text: '二',
            result: '作为一个申国人，{user}的拼音知识是过关的。',
            add_tags: ['学习成绩']
        },
        {
            text: '1',
            result: '{user}根本不懂拼音。'
        },
        {
            text: '3',
            result: '{user}根本不懂拼音。'
        },
        {
            text: '4',
            result: '{user}说话满嘴家乡话口音。'
        },
        {
            text: '学语文有什么用',
            result: '{user}感觉拼音就是英文的山寨，他不屑于学习。',
            add_tags: ['内向'],
            remove_tags: ['高情商']
        },
        {
            text: '无声',
            result: '{user}说话满嘴家乡话口音。'
        }
            ]
        },
        'dbrs_843': {
            title: '弗莱彻',
            description: '{user}找到了他一直很崇拜的人，一个叫弗莱彻的架子鼓老师。为了成为弗莱彻的学生，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '表演一段自己拿手的爵士鼓',
            result: '{user}找到了他一直很崇拜的人，一个叫弗莱彻的架子鼓老师。为了成为弗莱彻的学生，{user}表演了一段自己拿手的爵士鼓。{user}刚开始打鼓，弗莱彻掉头就走，边走边说：“不要污染我的耳朵。”'
        },
        {
            text: '表演一段HIT-HOT风的鼓乐',
            result: '{user}找到了他一直很崇拜的人，一个叫弗莱彻的架子鼓老师。为了成为弗莱彻的学生，{user}表演一段HIT-HOT风的鼓乐。{user}刚开始打鼓，弗莱彻掉头就走，边走边说：“不要污染我的耳朵。”'
        },
        {
            text: '表演一段申国传统的舞龙鼓乐',
            result: '{user}找到了他一直很崇拜的人，一个叫弗莱彻的架子鼓老师。为了成为弗莱彻的学生，{user}表演一段申国传统的舞龙鼓乐。弗莱彻在{user}身上看到了亮点，答应成为{user}的导师。',
            add_tags: ['爆裂鼓手']
        }
            ]
        },
        'dbrs_846': {
            title: '异样',
            description: '{user}走上前去，与那位coser攀谈。聊天的过程中，{user}似乎注意到这位coser的裙子似乎被什么东西顶起来了。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '帮他整好裙子',
            result: '{user}走上前去，与那位coser攀谈。聊天的过程中，{user}似乎注意到这位coser的裙子似乎被什么东西顶起来了。{user}伸手去抓了一下那位coser的裙子，那位coser被吓了一跳，然后突然把{user}压倒在地，把cos的衣服一脱。这位coser竟然是个男孩子！{user}被两只有力的麒麟臂压住动弹不得，流着泪被这位coser爆菊花。',
            add_tags: ['菊花残']
        },
        {
            text: '赶紧逃跑',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_848': {
            title: '钱包厂',
            description: '{user}的钱包厂制作的钱包，主要销往___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '某宝',
            result: '你做出了选择。'
        },
        {
            text: '国外',
            result: '你做出了选择。'
        },
        {
            text: '致远星',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_849': {
            title: '钱包厂',
            description: '{user}收到了一些底层员工的投诉，说公司经常拖欠他们的工资。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '无视这些投诉',
            result: '你做出了选择。'
        },
        {
            text: '寻找会计，调查原因',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_850': {
            title: '家贼难防',
            description: '有关钱包厂拖欠工资的问题，{user}作为老板并不知情，想找公司里的会计了解情况。但发现会计不见了人。经过{user}一番调查，才知道会计卷走了公司一大笔钱，逃之夭夭了。现在{user}没有钱支付这些拖欠的工资了，{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '逃之夭夭',
            result: '你做出了选择。'
        },
        {
            text: '到处借钱',
            result: '有关钱包厂拖欠工资的问题，{user}作为老板并不知情，想找公司里的会计了解情况。但发现会计不见了人。经过{user}一番调查，才知道会计卷走了公司一大笔钱，逃之夭夭了。现在{user}没有钱支付这些拖欠的工资了，{user}决定到处借钱，把拖欠的工资付清了。{user}倾家荡产了。'
        }
            ]
        },
        'dbrs_853': {
            title: '接吻',
            description: '{user}走在街上，突然被一路人拦住。路人对{user}说：“接吻一下……”{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000], required_tags: ['男性'] },
            options: [
        {
            text: '答应，并亲过去',
            result: '{user}走在街上，突然被一路人拦住。路人对{user}说：“接吻一下……”{user}答应了，他一把抱住路人，亲了下去。路人被亲了一下，蒙了。突然路人捂住自己的胸口，尴尬症犯了，倒地不起。最终，这位可怜的路人送院抢救无效死亡，{user}大喊冤枉，还是被抓进了牢里……',
            add_tags: ['监狱时间'],
            death_flag: true,
            death_reason: '=NAME=走在街上，突然被一路人拦住。路人对=NAME=说：“接吻一下……”=NAME=答应了，他一把抱住路人，亲了下去。路人被亲了一下，蒙了。突然路人捂住自己的胸口，尴尬症犯了，倒地不起。最终，这位可怜的路人送院抢救无效死亡，=NAME=大喊冤枉，还是被抓进了牢里……'
        },
        {
            text: '答应，并闭上眼',
            result: '{user}走在街上，突然被一路人拦住。路人对{user}说：“接吻一下……”{user}答应，并闭上眼，嘟起嘴，等待那陌生人的吻。路人继续说：“接吻一下，这地方怎么去？”{user}：“……”'
        },
        {
            text: '一脸懵逼',
            result: '{user}走在街上，突然被一路人拦住。路人对{user}说：“接吻一下……”{user}听得一脸懵逼。路人继续说：“接吻一下，这地方怎么去？”{user}：“……”'
        },
        {
            text: '慌忙逃串',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_854': {
            title: '希恩斯的邀请',
            description: '{user}在学校研究生物学，是一名生物科学家。有一天，他收到了一份署名是希恩斯的邀请信。邀请{user}加入到一个科学家团队中，一起到他们在国外的实验室进行一项有趣的研究。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '答应',
            result: '你做出了选择。'
        },
        {
            text: '回信拒绝邀请',
            result: '你做出了选择。'
        },
        {
            text: '写一封回信，内容：泻药',
            result: '{user}在学校研究生物学，是一名生物科学家。有一天，他收到了一份署名是希恩斯的邀请信。邀请{user}加入到一个科学家团队中，一起到他们在国外的实验室进行一项重要的研究。{user}写了一封回信，信里面只有2个字：泻药。'
        }
            ]
        },
        'dbrs_852': {
            title: '愤怒的农民工',
            description: '{user}无视了员工的投诉，农民工们急了，他们集中起来，到{user}家门口围堵{user}。{user}被愤怒的农民工乱棍打死。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
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
        'dbrs_855': {
            title: '来到腐国',
            description: '{user}应邀来到腐国的某个郊区。腐国的田园风光十分怡人，处处鸟语花香，人民生活十分安逸。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_856': {
            title: '思想钢印',
            description: '{user}来到约定的地方，一栋巨大的建筑。里面聚集了从世界各国来的、不同领域的顶尖科学家。心理、生物、物理、化学、社会、哲学家等等……过了没多久，一位中年男人出现在大厅中央，他就是希恩斯。他对所有人说：聚集大家来是为了做一项有意思的研究，思想钢印。……众人听后面面相窥，不明所以言。希恩斯摸摸自己的胡子，继续说：“近来，我发现了人类思维做出判断的机制，我想研究一个东西，用来干预人类思维。当某个信息进入大脑时，通过对神经元网络的某一部分施加影响，使大脑不经思维就做出判断，相信这个信息为真。”{user}选择___。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '留下',
            result: '你做出了选择。'
        },
        {
            text: '赶紧离开',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_863': {
            title: '富士山康',
            description: '富士山康，是一家世界知名的电子产品组装工厂。{user}成为了富士山康的一名普通工人。经过了一天的培训，{user}学会了20秒内组装好___',
            priority: 1,
            trigger_conditions: { age_range: [14, 120] },
            options: [
        {
            text: '一台大米手机',
            result: '你做出了选择。'
        },
        {
            text: '一枚”小男孩“',
            result: '你做出了选择。'
        },
        {
            text: '一颗巨大的跳蛋',
            result: '你做出了选择。'
        },
        {
            text: '小王霸学习机',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_851': {
            title: '=NAME=王八蛋',
            description: '有一天，在市区商业最繁华的地方，一帮农民工高举着牌子，手里拿着大声公，大喊：“{user}王八蛋！你不是人！我们辛辛苦苦给你干了大半年，你不发工资！你还我血汗钱！还我血汗钱！我们不能拿钱包抵工资，原价都是一百多、两百多、三百多的钱包，现在全部只卖二十块！统统二十块！！',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_864': {
            title: '空虚寂寞冷',
            description: '富士山康有严格的纪律。{user}的日子过得非常规律，{user}朝早晚六，{user}倍感寂寞无聊。{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [14, 120] },
            options: [
        {
            text: '找厂里的工友谈恋爱',
            result: '富士山康有严格的纪律。{user}的日子过得非常规律，{user}朝早晚六，{user}倍感寂寞无聊。{user}决定向坐在自己前面的工友告白。他们恋爱了。',
            add_tags: ['恋爱中']
        },
        {
            text: '忍住寂寞',
            result: '你做出了选择。',
            add_tags: ['内向']
        },
        {
            text: '上班边听MP3边干活',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_862': {
            title: '成为工厂工人',
            description: '{user}向一家___厂投去了简历，立马就给录取了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '富士山康',
            result: '你做出了选择。'
        },
        {
            text: '养鸡工厂',
            result: '你做出了选择。'
        },
        {
            text: '对象工厂',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_866': {
            title: '课间游戏',
            description: '{user}在学习之余，课间时间最喜欢和同学玩___',
            priority: 1,
            trigger_conditions: { age_range: [4, 17] },
            options: [
        {
            text: '沙子',
            result: '你做出了选择。'
        },
        {
            text: '过家家',
            result: '你做出了选择。'
        },
        {
            text: '捡石子',
            result: '你做出了选择。',
            add_tags: ['身体协调']
        },
        {
            text: '剁猫猫',
            result: '{user}在学习之余，课间时间最喜欢和同学玩剁猫游戏。这是一个非常残忍的游戏，几个同学把在大街上找野猫五花大绑放到课桌上，拿起他们的美工刀在猫的身上剁来剁去。',
            add_tags: ['心理扭曲'],
            remove_tags: ['高情商']
        },
        {
            text: '国王游戏',
            result: '你做出了选择。'
        },
        {
            text: '相互殴打的游戏',
            result: '你做出了选择。',
            effects: { health: -10 },
            add_tags: ['强壮']
        },
        {
            text: '独自玩手机',
            result: '{user}在学校，课间从不和同学们玩，独自在玩手机。',
            add_tags: ['内向']
        },
        {
            text: '权力的游戏',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_870': {
            title: '新技能：朵蜜',
            description: '有一天，QB再次找到{user}，给{user}一份新的契约。这份契约签订后，魔法少女每次出技能前，必须跳一种名叫“尬舞”的舞蹈，然后还要喊出“我要朵蜜你”这句威胁敌人的口号。经过这个仪式后，魔法少女的技能威力将会增强250%。面对如此强大的力量，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '拒绝',
            result: '你做出了选择。'
        },
        {
            text: '一开始是拒绝的',
            result: '你做出了选择。'
        },
        {
            text: '签订契约',
            result: '你做出了选择。',
            add_tags: ['尬舞']
        }
            ]
        },
        'dbrs_872': {
            title: '课堂：英语课',
            description: '与 Unit three 发音最相似的是___',
            priority: 1,
            trigger_conditions: { age_range: [5, 17] },
            options: [
        {
            text: '要捏碎',
            result: '{user}的英语口语非常别扭，老师已经对{user}放弃治疗。'
        },
        {
            text: '有滴树',
            result: '{user}的英语口语非常雷人，他一开口说英语，周围的人就会捧腹大笑。'
        },
        {
            text: '油腻水',
            result: '{user}的英语发音是全班最准的。',
            add_tags: ['学习成绩']
        },
        {
            text: '怎么还没下课啊',
            result: '{user}的人在学校上课，心飞出了教室，飞出了学校，仿佛一只得到自由的小鸟。'
        }
            ]
        },
        'dbrs_871': {
            title: '新技能：朵蜜',
            description: '一开始{user}是拒绝QB的，不过后来得知这个尬舞除了DuangDuang两声，是没有任何其他特效的，{user}就答应签订契约了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['尬舞']
        }
            ]
        },
        'dbrs_874': {
            title: '课堂：数学课',
            description: '根据节奏，写出乘法公式。（叮叮叮~叮叮叮 = 3X2）；（啊啊~啊啊 = 2 x 2）；（啊~嗯~哦~~CUM~CUM~噢~ = ？）',
            priority: 1,
            trigger_conditions: { age_range: [5, 17] },
            options: [
        {
            text: '1x1x1x1x1x1...',
            result: '{user}是又一个应试教育受害者，每天像一只丧尸走在去学校与回家的路上。'
        },
        {
            text: 'ooxxooxxooxxooxxoo',
            result: '{user}在数学课上发言污秽，被罚去门口罚站。'
        },
        {
            text: '1+1=3',
            result: '{user}的回答，似乎让这个数学题目有了故事。全班同学都在为{user}的回答鼓掌，老师热泪凝眶，似乎很欣慰自己教出了一个有前途的学生。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_891': {
            title: '魔界：遭遇强盗',
            description: '{user}在讨伐魔王途中。突然在路边的草丛里跳出一个拿着匕首的强盗拦住了去路。强盗挥舞着他的匕首说：“我的这把刀可是涂满了毒药的毒刃。”说完舔了一下刀背，然后突然中毒身亡了。{user}看得一头汗。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_888': {
            title: '龙珠',
            description: '{user}翻查资料，得知这个黄色玻璃球是一颗龙珠。传说只要集齐7颗龙珠，就可以召唤神龙出现，来满足{user}的一个愿望。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '着手收集龙珠',
            result: '你做出了选择。',
            add_tags: ['龙珠收集者']
        },
        {
            text: '没有兴趣',
            result: '你做出了选择。'
        },
        {
            text: '不相信这种传言',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_890': {
            title: '拍卖会：玻璃球',
            description: '一个鸡蛋黄色的玻璃球被摆上了拍卖会上拍卖，玻璃球里面还有3个红色的小星星。因为大家都不知道玻璃球是什么，而且样子也不讨好，所以价格不算贵。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '买下',
            result: '你做出了选择。',
            add_tags: ['三星龙珠']
        },
        {
            text: '不感兴趣',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_893': {
            title: '龙珠雷达',
            description: '用龙珠雷达，{user}在一个破败的公共厕所里面找到了一颗二星龙珠。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['二星龙珠']
        }
            ]
        },
        'dbrs_895': {
            title: '画家',
            description: '{user}是个专业画家，他打算画点___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '插图',
            result: '你做出了选择。'
        },
        {
            text: '漫画',
            result: '你做出了选择。'
        },
        {
            text: '油画',
            result: '你做出了选择。'
        },
        {
            text: '街头涂鸦',
            result: '你做出了选择。'
        },
        {
            text: '申国画',
            result: '你做出了选择。'
        },
        {
            text: '还是放弃吧',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_905': {
            title: '油画家：风景画',
            description: '{user}背起画板颜料出门了，他要去___画风景。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '楼下',
            result: '你做出了选择。'
        },
        {
            text: '海边',
            result: '你做出了选择。'
        },
        {
            text: '荆棘谷海边',
            result: '{user}近来沉迷了电子游戏，再也不想画什么油画了。',
            add_tags: ['电子海洛因']
        },
        {
            text: '喜马拉雅山',
            result: '{user}背起画板颜料出门了，他要去喜马拉雅山画风景。他这一出门，就再也没有回家。而喜马拉雅山上，多了一个人坐在画板前的“雕像”。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_902': {
            title: '插画：素材',
            description: '画插画时，{user}喜欢___找素材。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '上街',
            result: '你做出了选择。'
        },
        {
            text: '读小说',
            result: '你做出了选择。'
        },
        {
            text: '看漫画',
            result: '你做出了选择。'
        },
        {
            text: '玩游戏',
            result: '{user}沉迷游戏不能自拔，变得越来越懒，葬送了自己的插画生涯。',
            add_tags: ['电子海洛因']
        },
        {
            text: '看电视',
            result: '你做出了选择。'
        },
        {
            text: '上P站',
            result: '你做出了选择。'
        },
        {
            text: '上4CHAN',
            result: '你做出了选择。'
        },
        {
            text: '上2CH',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_896': {
            title: '杂志征集',
            description: '一家做言情小说的杂志正征集封面，{user}投稿了___的插画。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '一个中年妇女在吃狗粮',
            result: '一家做言情小说的杂志正征集封面，{user}投稿了一个中年妇女在吃狗粮的插画，因为主题很潮流所以被杂志社录用了。'
        },
        {
            text: '两个半裸的男人抱在一起',
            result: '你做出了选择。'
        },
        {
            text: '风景画',
            result: '一家做言情小说的杂志正征集封面，{user}投稿了一张风景画，被杂志社否决了。'
        },
        {
            text: '一个少女的脸部特写',
            result: '一家做言情小说的杂志正征集封面，{user}投稿了一个少女的脸部特写的插画，因为太多类似的插图了，{user}的图被杂志社否决了。'
        },
        {
            text: '一个裸女',
            result: '一家做言情小说的杂志正征集封面，{user}投稿了一张插画，上面画着一个裸体的女人。{user}涉嫌传播淫秽信息被杂志社告发了，没过几天，就有警察把{user}抓走了。'
        }
            ]
        },
        'dbrs_898': {
            title: '耽美信息：任务',
            description: '《耽美信息》让{user}画一幅插图，要求是必须让读者一看到这个图就想亲上去。{user}画了一个___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '红着脸的半裸肌肉男子',
            result: '你做出了选择。'
        },
        {
            text: '躺在床上婀娜多姿的瘦弱男子',
            result: '你做出了选择。'
        },
        {
            text: '小鲜肉脱衣入浴图',
            result: '你做出了选择。'
        },
        {
            text: '菊花大特写',
            result: '你做出了选择。'
        },
        {
            text: '我不干了',
            result: '{user}忍受不了《耽美信息》的变态要求，撒手不干了。'
        }
            ]
        },
        'dbrs_901': {
            title: '耽美信息：COSPLAY',
            description: '耽美信息杂志社正举办一场耽美COSPLAY展，因为人手不够，杂志社想让{user}也来参与COSPLAY。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '应邀参加',
            result: '耽美信息杂志社正举办一场耽美COSPLAY展，因为人手不够，杂志社想让{user}也来参与COSPLAY。{user}应邀参加。在COSPLAY展中，大家都玩得很开心，{user}喝了不少的酒。第二天，{user}在宾馆中醒来，菊花火辣辣的痛……',
            add_tags: ['菊花残']
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_897': {
            title: '插画家：长期合作',
            description: '没过几天，杂志社就联系了{user}，表示非常喜欢{user}的插图，请求长期合作，为杂志社的另外一本《耽美信息》画插图。{user}___了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '同意',
            result: '你做出了选择。'
        },
        {
            text: '婉言拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_904': {
            title: '油画家：画人像',
            description: '一位企业家找到{user}，要他为自己画一张人像，他要挂在自己的办公室里。人像要要体现他的睿智与包容。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '画一个仪表堂堂的企业家',
            result: '一位企业家找到{user}，要他为自己画一张人像，他要挂在自己的办公室里。人像要要体现他的睿智与包容。{user}画了一个仪表堂堂的企业家。企业家看着这个人像，还算满意，收货了。'
        },
        {
            text: '直接用企业家的照片当画像',
            result: '一位企业家找到{user}，要他为自己画一张人像，他要挂在自己的办公室里。人像要要体现他的睿智与包容。{user}直接用企业家的照片，在PS里磨皮，美白后打印成了一副人像。企业家非常喜欢，赞不绝口，给{user}赏了一笔大钱。',
            effects: { money: 3 }
        },
        {
            text: '画一个慈祥、和蔼的老者',
            result: '一位企业家找到{user}，要他为自己画一张人像，他要挂在自己的办公室里。人像要要体现他的睿智与包容。{user}画了一个慈祥、和蔼的老者。企业家看了这个画，感觉这个画把自己画老了，不太满意。最后只给了一点颜料费，就把{user}给打发了。'
        },
        {
            text: '画一个魔鬼',
            result: '一位企业家找到{user}，要他为自己画一张人像，他要挂在自己的办公室里。人像要要体现他的睿智与包容。{user}画了一个魔鬼。企业家很喜欢这个形象，觉得很适合自己，魔鬼摆在办公室也非常拉风，高兴地收下了。'
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_903': {
            title: '漫画《___》',
            description: '{user}是一名漫画家，他正在连载的漫画叫《___》。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '海贼主',
            result: '你做出了选择。'
        },
        {
            text: '生神',
            result: '你做出了选择。'
        },
        {
            text: '申华小当家',
            result: '你做出了选择。'
        },
        {
            text: '火警忍者',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_899': {
            title: '耽美信息：任务',
            description: '《耽美信息》让{user}画一幅插图，要求是高H。{user}画了一副___',
            priority: 1,
            trigger_conditions: { age_range: [20, 70] },
            options: [
        {
            text: '强攻x弱受',
            result: '你做出了选择。'
        },
        {
            text: '弱攻x强受',
            result: '你做出了选择。'
        },
        {
            text: '我不干了',
            result: '{user}忍受不了《耽美信息》的变态要求，撒手不干了。'
        }
            ]
        },
        'dbrs_907': {
            title: '街头涂鸦',
            description: '{user}经常在夜深人静的时候带着喷漆出门，在空荡荡的街道中寻找一堵适合画图的墙，尽情施展他的美术细胞。没错！{user}就是一名街头涂鸦家。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_908': {
            title: '街头涂鸦：风格',
            description: '{user}最喜欢在墙上涂上___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '意义不明的英文',
            result: '你做出了选择。'
        },
        {
            text: '大JJ',
            result: '你做出了选择。'
        },
        {
            text: '法西斯标记',
            result: '你做出了选择。'
        },
        {
            text: '物理公式',
            result: '你做出了选择。'
        },
        {
            text: '毛笔字',
            result: '你做出了选择。'
        },
        {
            text: '伪3D画',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_909': {
            title: '街头涂鸦：高空作业',
            description: '有一位老板找到{user}，想让他在摩天大楼的外墙上涂鸦公司LOGO，出价不菲。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '爽快答应',
            result: '有一位老板找到{user}，想让他在摩天大楼外面涂鸦公司LOGO，出价不菲。{user}爽快答应了。那个公司的LOGO非常简单，{user}三下五除二就涂好了。老板非常欣赏{user}的表现，大叫：“Shut up and take my money!!”',
            effects: { money: 3 }
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_906': {
            title: '街头涂鸦：帮派LOGO',
            description: '有一个黑帮老大找到{user}，想要{user}在他们黑帮总部的墙上涂上他们的帮派LOGO。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '答应',
            result: '有一个黑帮老大找到{user}，想要{user}在他们黑帮总部的墙上涂上他们的帮派LOGO。{user}答应了。{user}正在画的时候，黑帮总部门口受到其他帮派的突袭，发生了激烈的枪战，{user}躺枪而死……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_911': {
            title: '数学课：奥数',
            description: '猪、猫、鸡、兔、牛 这几种动物，最与众不同的是哪一个？为什么？{user}认为是___',
            priority: 1,
            trigger_conditions: { age_range: [5, 17] },
            options: [
        {
            text: '牛，只有牛有角',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        },
        {
            text: '猫，只有猫不在十二生肖里',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        },
        {
            text: '猪，只有猪不清真',
            result: '{user}用行动告诉我们，他是一位纯正的穆斯林。',
            add_tags: ['学习成绩']
        },
        {
            text: '猫，只有猫不能吃',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        },
        {
            text: '鸡，只有鸡是卵生的',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        },
        {
            text: '鸡，只有鸡是两条腿',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        },
        {
            text: '兔，只有兔会跳',
            result: '你做出了选择。'
        },
        {
            text: '猪，只有猪有猪鼻子',
            result: '每逢上数学课，{user}都会觉得自己是一个智障。'
        },
        {
            text: '我没见过这些动物',
            result: '{user}这一辈的学生，又是填鸭式应试教育的受害者。他们甚至都没有看过猪、猫、鸡、兔、牛这些动物的样子。'
        }
            ]
        },
        'dbrs_914': {
            title: '一位德高望重的人',
            description: '有一位德高望重的找到{user}，要{user}做一道正宗的黑暗料理给他。{user}进入了他的厨房并关上了大门，过了一刻钟，{user}烹饪完成了，从厨房里出来，手里端着一盘___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '土豆炒番茄',
            result: '你做出了选择。'
        },
        {
            text: '辣椒炒月饼',
            result: '你做出了选择。'
        },
        {
            text: '西葫芦炒西红柿',
            result: '你做出了选择。'
        },
        {
            text: '奶油酸菜鱼',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_917': {
            title: '失忆康复',
            description: '有一天，{user}的头突然剧烈疼痛起来，大量的回忆涌入！{user}想起来了，他是一名___！',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '保镖',
            result: '你做出了选择。'
        },
        {
            text: '导游',
            result: '你做出了选择。'
        },
        {
            text: '厨师',
            result: '你做出了选择。'
        },
        {
            text: '文员',
            result: '你做出了选择。'
        },
        {
            text: '外贸',
            result: '你做出了选择。'
        },
        {
            text: '教师',
            result: '你做出了选择。'
        },
        {
            text: '打字员',
            result: '你做出了选择。'
        },
        {
            text: '抛光工人',
            result: '你做出了选择。'
        },
        {
            text: '律师',
            result: '你做出了选择。'
        },
        {
            text: '搬砖工人',
            result: '你做出了选择。'
        },
        {
            text: '程序员',
            result: '你做出了选择。'
        },
        {
            text: '婚姻中介',
            result: '你做出了选择。'
        },
        {
            text: '消防员',
            result: '你做出了选择。'
        },
        {
            text: '环卫',
            result: '你做出了选择。'
        },
        {
            text: '快递员',
            result: '你做出了选择。'
        },
        {
            text: '医生',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_910': {
            title: '宇宙最好的DJ',
            description: '{user}的音乐理念得到了大众的认同，{user}想进一步发展。他决定___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '举办粉丝见面会',
            result: '{user}的音乐理念得到了大众的认同，{user}想进一步发展。他决定举办粉丝见面会。在粉丝见面会现场，{user}的DJ和着嘲笑与掌声进行了下去。'
        },
        {
            text: '发行个人专辑',
            result: '{user}的音乐理念得到了大众的认同，{user}想进一步发展。他决定发行个人专辑。专辑出来后，受到了粉丝的疯抢。正当{user}洋洋得意的时候，各大编曲人向{user}提起了诉讼，指责{user}侵犯了他们的著作权。{user}陪得倾家荡产。',
            effects: { money: -5 }
        },
        {
            text: '承接广告赚钱',
            result: '{user}的音乐理念得到了大众的认同，{user}想进一步发展。他决定在自己的扣扣空间上挂广告，日入斗金。',
            effects: { money: 5 }
        }
            ]
        },
        'dbrs_922': {
            title: '梅花花瓣飘落的速度',
            description: '{user}与女友走在放学的路上，正值梅花盛开的季节，路上的梅花树都开满了花。{user}用力摇一摇梅花树，立马有无数的花瓣飘落，{user}与女友沉浸于浪漫中。女友突然快步跑到{user}前面，打开伞，然后一个转身说：“你知道吗，梅花花瓣飘落的速度，是秒速五厘米。”{user}说：“___”',
            priority: 1,
            trigger_conditions: { age_range: [5, 20], required_tags: ['男性'] },
            options: [
        {
            text: '哦',
            result: '你做出了选择。'
        },
        {
            text: '好了，好了，我知道了',
            result: '你做出了选择。'
        },
        {
            text: '是吗？',
            result: '你做出了选择。'
        },
        {
            text: '不会是真的吧？',
            result: '你做出了选择。'
        },
        {
            text: '你错了',
            result: '你做出了选择。'
        },
        {
            text: '动画片看多了吧你',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_926': {
            title: '内战',
            description: '终于有一天，内战的战火蔓延到了{user}的城市。年纪轻轻的{user}扛起硕大的AK-47，与敌人展开巷战。{user}一开枪，就被AK-47的强大后坐力打倒在地，当场阵亡。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_923': {
            title: '放学路上',
            description: '{user}与男友走在放学的路上，正值梅花盛开的季节，路上的梅花树都开满了花。男友用力摇一摇梅花树，立马有无数的花瓣飘落，{user}与男友沉浸于浪漫中。{user}突然快步跑到男友前面，打开伞，然后一个转身说：“___”',
            priority: 1,
            trigger_conditions: { age_range: [5, 20], required_tags: ['女性'] },
            options: [
        {
            text: '你知道吗，梅花花瓣飘落的速度，是秒速五厘米。',
            result: '你做出了选择。'
        },
        {
            text: '希望来年我们也可以一起看梅花',
            result: '你做出了选择。'
        },
        {
            text: '猪猪我萌吗',
            result: '你做出了选择。'
        },
        {
            text: '你头上有鸟屎',
            result: '你做出了选择。'
        },
        {
            text: '来追我呀，追到给你嘿嘿嘿',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_930': {
            title: '乞讨：坏运气',
            description: '{user}在路边乞讨一年，这一年不好混了，每天都只有几毛钱的收入。每天到了深夜，他的钱会被乞丐后台没收，如果钱太少了，{user}就会被运到小黑屋里鞭打。{user}在一次被鞭打中，终于死掉了。{user}保持着微笑死去，因为死亡对于{user}来说是一种解脱。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}在路边乞讨一年，这一年不好混了，每天都只有几毛钱'
        }
            ]
        },
        'dbrs_927': {
            title: '内战',
            description: '终于有一天，内战的战火蔓延到了{user}的城市。敌人建立起碉堡，在向人们无情地扫射，昔日的大街布满尸体。{user}的爸爸神色凝重，递给{user}一个大包裹，对{user}说：“孩儿啊，你报答祖国的机会来了……”{user}抱着这个包裹，冒着子弹雨冲到碉堡地下，两手高举包裹，大喊：“同志们！为了解放，冲啊！”一声巨响，碉堡与{user}都被炸成了碎片……',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_933': {
            title: '砍死史莱母',
            description: '{user}抽出大刀，砍向大史莱母，史莱母被刀砍刀，爆出了蓝色的浆液。同时，一个玻璃球从史莱母身体里爆出来。{user}捡起来捧在手上，只见玻璃球里面镶嵌着4个星星。{user}把玻璃球___。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '收进口袋',
            result: '你做出了选择。',
            add_tags: ['四星龙珠']
        },
        {
            text: '丢掉',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_924': {
            title: '死得漂亮！',
            description: '{user}与情侣在大马路上追逐奔跑，嬉戏打闹。他们双双被一辆过街的火车碾过……不求同年同月同日生，但求同年同月同日死。死得漂亮！',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_936': {
            title: '离开拍卖会',
            description: '{user}在拍卖会中凑完了热闹，就走了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '{user}在拍卖会中凑完了热闹，就走了。'
        }
            ]
        },
        'dbrs_934': {
            title: '退休',
            description: '近段时间因为其他新世纪逗比战士的出色表现，使徒不再出现了。{user}被基地分配退休。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_937': {
            title: '你们最讨厌的内测杀来了',
            description: '作者将会在近期完善故事，请留意游戏的更新。{user}的人生已经到达了逗比世界的某个支线边缘，无法继续前进。现在，你有权为{user}选择一条死亡的道路。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '怀揣期待地死去',
            result: '{user}跳进了一个大坑里，跌死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=跳进了一个大坑里，跌死了。'
        },
        {
            text: '对作者露出包容的笑',
            result: '{user}露出包容的笑，然后被作者杀死。{user}的一生是满足、幸福的，因为他拿得起放得下。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '笑对死亡'
        },
        {
            text: '请不要点这个',
            result: '{user}因为做了一些奇怪的举动，触发了游戏中的BUG。{user}被致命的BUG杀死，死相十分惨。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '作者将会在近期完善故事，请留意游戏的更新。{user}的人生'
        }
            ]
        },
        'dbrs_939': {
            title: '完成任务',
            description: '{user}暂时住在了农场，在农场的粮仓搞了一年的清洁，终于把任务完成了。而任务报酬跟{user}住农场的房租抵消了，{user}啥好处都没得到。{user}摇摇头，继续上路。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_941': {
            title: '证书证明部门：画家证明',
            description: '一个画家拿着一幅画，找上门来。他要证明是自己画的，想来开具证明。{user}表示___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '让他在画上签名就可以了',
            result: '你做出了选择。'
        },
        {
            text: '需要作画过程的视频才能证明',
            result: '你做出了选择。'
        },
        {
            text: '无法证明，不予受理',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_938': {
            title: '农场任务',
            description: '{user}路过一个小农场，看到农场门口站着一个农夫。农夫头上有一个金色的感叹号一直在飘。{user}与农夫对话，农夫竟然拒绝跟{user}说话，并丢给{user}一个任务。任务是进入粮仓搞清洁。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '做任务',
            result: '你做出了选择。'
        },
        {
            text: '抢掉他头上的金感叹号',
            result: '{user}路过一个小农场，看到农场门口站着一个农夫。农夫头上有一个金色的感叹号一直在飘。{user}把感叹号摘了下来，发现是纯金的，价值连城。农夫的东西被抢了，还当作什么事都没发生一样站在那里。',
            effects: { money: 6 }
        },
        {
            text: '不理他',
            result: '{user}路过一个小农场，看到农场门口站着一个农夫。农夫头上有一个金色的感叹号一直在飘。{user}与农夫对话，农夫竟然拒绝跟{user}说话，并丢给{user}一个任务。任务是进入粮仓搞清洁。{user}转身就走。'
        }
            ]
        },
        'dbrs_940': {
            title: '证书证明部门：女性证明',
            description: '有一位女生找到证书证明部门。因工作需要，她让{user}给他开具女性证明，以证明她是女性。{user}根据___判断这位女生为女性无异，开具证明并盖好章。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '相貌',
            result: '你做出了选择。'
        },
        {
            text: '声音',
            result: '你做出了选择。'
        },
        {
            text: '衣着',
            result: '你做出了选择。'
        },
        {
            text: '皮肤',
            result: '你做出了选择。'
        },
        {
            text: '她的长头发',
            result: '你做出了选择。'
        },
        {
            text: '她脸上的胡子',
            result: '你做出了选择。'
        },
        {
            text: '她的美人痣',
            result: '你做出了选择。'
        },
        {
            text: '手感',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_944': {
            title: '召唤神龙',
            description: '{user}已经集齐了七个龙珠，按照古老的召唤神龙的记载。{user}把这7个球放到一起，然后大喊：召唤神龙的咒语：出来吧，神龙。一条巨大的中国龙立刻出现在了{user}面前，它问{user}要什么愿望。{user}选择了___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '女孩子的内裤',
            result: '你做出了选择。'
        },
        {
            text: '变年轻',
            result: '你做出了选择。'
        },
        {
            text: '荣华富贵',
            result: '你做出了选择。'
        },
        {
            text: '我要成为你的主人',
            result: '{user}已经集齐了七个龙珠，按照古老的召唤神龙的记载。{user}把这7个球放到一起，然后大喊：召唤神龙的咒语：出来吧，神龙。一条巨大的中国龙立刻出现在了{user}面前，它问{user}要什么愿望。{user}对着神龙大喊：“我要成为你的主人！”神龙听了很生气，它说：“只有创世神才是我的主人，你不配！”然后对{user}来了一招神龙摆尾，压死了{user}。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=已经集齐了七个龙珠，按照古老的召唤神龙的记载。=NAME=把这7个球放到一起，然后大喊：召唤神龙的咒语：出来吧，神龙。一条巨大的中国龙立刻出现在了=NAME=面前，它问=NAME=要什么愿望。=NAME=对着神龙大喊：“我要成为你的主人！”神龙听了很生气，它说：“只有创世神才是我的主人，你不配！”然后对=NAME=来了一招神龙摆尾，压死了=NAME=。'
        },
        {
            text: '我希望是重生，然后再来一遍',
            result: '{user}已经集齐了七个龙珠，按照古老的召唤神龙的记载。{user}把这7个球放到一起，然后大喊：召唤神龙的咒语：出来吧，神龙。一条巨大的中国龙立刻出现在了{user}面前，它问{user}要什么愿望。{user}表示他的希望是重生，然后再来一遍！”神龙说，那简单啊，说完对{user}来了一招神龙摆尾，压死了{user}。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=已经集齐了七个龙珠，按照古老的召唤神龙的记载。=NAME=把这7个球放到一起，然后大喊：召唤神龙的咒语：出来吧，神龙。一条巨大的中国龙立刻出现在了=NAME=面前，它问=NAME=要什么愿望。=NAME=表示他的希望是重生，然后再来一遍！”神龙说，那简单啊，说完对=NAME=来了一招神龙摆尾，压死了=NAME=。'
        },
        {
            text: '我想变大',
            result: '你做出了选择。'
        },
        {
            text: '成为长者',
            result: '你做出了选择。'
        },
        {
            text: 'HALFLIFE3发布',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_946': {
            title: '如愿',
            description: '神龙满足了{user}的愿望，给了他很多钱。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_947': {
            title: '如愿',
            description: '随着“叮”的一声，{user}年轻了20岁！神龙满足了{user}的愿望。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_948': {
            title: '思想钢印机器',
            description: '{user}参与了思想钢印的测试，他走进了思想钢印机器中，然后选择了___的命题。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '水是有毒的',
            result: '{user}参与了思想钢印的测试，他走进了思想钢印机器中，然后选择了“水是有毒的”的命题。机器开始扫描{user}的大脑，{user}大声朗读命题。结束后，{user}立即喝了一杯水，然后……吐了出来。他没办法喝水！而且他开始觉得人的身体由70%的水组成这个事实非常荒谬。最后，{user}一星期没喝水，喝死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=参与了思想钢印的测试，他走进了思想钢印机器中，然后选择了“水是有毒的”的命题。机器开始扫描=NAME=的大脑，=NAME=大声朗读命题。结束后，=NAME=立即喝了一杯水，然后……吐了出来。他没办法喝水！而且他开始觉得人的身体由70%的水组成这个事实非常荒谬。最后，=NAME=一星期没喝水，喝死了。'
        },
        {
            text: '我不沉迷游戏',
            result: '你做出了选择。',
            remove_tags: ['电子海洛因']
        },
        {
            text: '人类必胜',
            result: '你做出了选择。'
        },
        {
            text: '思想钢印对我不起作用',
            result: '{user}参与了思想钢印的测试，他走进了思想钢印机器中，然后选择了“思想钢印对我不起作用”的命题。机器开始扫描{user}的大脑，{user}大声朗读命题。结束后，{user}发现一股巨大的痛苦袭来，悖论让{user}抱头痛哭。世界上的一切让{user}感到痛苦，{user}打开了实验大楼的窗，跳了下去……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_949': {
            title: '糖堵塞',
            description: '{user}一天起来，感觉不适。{user}的血糖含量已经饱和。{user}的血液已经成了啫喱状态，堵塞在血管里。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '跑去医院',
            result: '{user}一天起来，感觉不适。{user}的血糖含量已经饱和。{user}的血液已经成了啫喱状态，堵塞在血管里。{user}立马起床奔跑去医院，{user}的身体处于缺氧状态，很快，{user}就倒地身亡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '吃一瓶安眠药',
            result: '{user}一天起来，感觉不适。{user}的血糖含量已经饱和。{user}的血液已经成了啫喱状态，堵塞在血管里。{user}赶紧抓起床头的安眠药，全部吃了下去。{user}吃了所有的安眠药后，很快进入睡眠，安逸平静地死去。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '喝醋',
            result: '{user}一天起来，感觉不适。{user}的血糖含量已经饱和。{user}的血液已经成了啫喱状态，堵塞在血管里。{user}走去厨房拿起一瓶醋就喝下去，然后……就没有然后了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_945': {
            title: '如愿',
            description: '{user}如愿地拿到了一条女孩子的内裤。内裤从天上飘下来盖到{user}的头上。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_935': {
            title: '女友生病了',
            description: '{user}的女友生病了，她电话给{user}。{user}告诉她：___。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '你喝点热水',
            result: '{user}的女友生病了，她电话给{user}。{user}对女友讲：你喝点热水一边凉快去。女友听完把电话挂了，过了一会儿就发来分手的信息。',
            remove_tags: ['恋爱'],
            death_flag: true,
            death_reason: '=NAME=的女友生病了，她电话给=NAME=。=NAME=对女友讲：你喝点热水一边凉快去。女友听完把电话挂了，过了一会儿就发来分手的信息。'
        },
        {
            text: '讲一个笑话让伴侣开心',
            result: '{user}的女友生病了，她电话给{user}。{user}对女友讲了个笑话：我怕我女朋友出轨，就把她气给放了。女友听完把电话挂了，过了一会儿就发来分手的信息。',
            add_tags: ['玻璃心'],
            remove_tags: ['恋爱'],
            death_flag: true,
            death_reason: '=NAME=的女友生病了，她电话给=NAME=。=NAME=对女友讲了个笑话：我怕我女朋友出轨，就把她气给放了。女友听完把电话挂了，过了一会儿就发来分手的信息。'
        },
        {
            text: '给伴侣汇钱看病',
            result: '{user}的女友生病了，她电话给{user}。{user}二话不说，就汇款给女友看病。'
        },
        {
            text: '假装信号不好',
            result: '{user}的女友生病了，她电话给{user}。{user}喂了两声，然后把电话挂了。',
            death_flag: true,
            death_reason: '=NAME=的女友生病了，她电话给=NAME=。=NAME=喂了两声，然后把电话挂了。'
        }
            ]
        },
        'dbrs_952': {
            title: '认识薇尔希',
            description: '{user}与薇尔希的生活就这样过了十年，这十年来，每一天薇尔希都会对{user}自我介绍，{user}每天都是第一次认识薇尔希。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_953': {
            title: '幸福地死去',
            description: '直到{user}死去，薇尔希都陪伴在{user}的身边。薇尔希一边抚摸着{user}的手，一边自我介绍。{user}听着薇尔希的自我介绍，傻笑着流下了幸福的眼泪，离开了人世。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_954': {
            title: '离婚',
            description: '{user}离婚了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_958': {
            title: '糖尿病晚期',
            description: '{user}已经是糖尿病晚期病人了。有一次{user}突发奇想，___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '喝一口自己的尿',
            result: '{user}已经是糖尿病晚期病人了。有一次{user}突发奇想，喝了一口自己的尿。甜甜的，像苹果汁，棒！'
        },
        {
            text: '尝尝自己血的味道',
            result: '{user}已经是糖尿病晚期病人了。有一次{user}突发奇想，他想尝尝自己血液的味道。他切开自己的动脉，倒了一杯血慢慢品尝了起来。'
        },
        {
            text: '想要开奶茶店',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_961': {
            title: '放心的奶茶',
            description: '{user}的奶茶店非常受欢迎，每天来买奶茶的人都能排好几公里的长队。人们忍受几个小时的等待，为的就是看着{user}榨出一杯杯健康可口的奶茶。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_962': {
            title: '喝水狂人',
            description: '{user}的奶茶店生意太好了，他每天喝下5,6大瓶的纯净水，才能有足够的尿液做奶茶供应。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_964': {
            title: '平静地离开了人世',
            description: '{user}的血管被大量的血块堵塞，血液不能流通。在一个清晨，{user}平静地离开了人世。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
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
        'dbrs_963': {
            title: '危机',
            description: '{user}奶茶店的生意太好了，{user}逐渐发现他的尿液糖分含量已经降低了。他的尿已经不甜了。{user}只好___',
            priority: 1,
            trigger_conditions: { age_range: [1, 65534] },
            options: [
        {
            text: '吃白糖补充',
            result: '{user}奶茶店的生意太好了，{user}逐渐发现他的尿液糖分含量已经降低了。他的尿已经不甜了。{user}尝试吃白糖补充糖分。然而{user}的血糖已经非常高了，哪里称受得了如此的折磨。他的血糖终于爆表，全身血管堵塞。{user}死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=奶茶店的生意太好了，=NAME=逐渐发现他的尿液糖分含量已经降低了。他的尿已经不甜了。=NAME=尝试吃白糖补充糖分。然而=NAME=的血糖已经非常高了，哪里称受得了如此的折磨。他的血糖终于爆表，全身血管堵塞。=NAME=死了。'
        },
        {
            text: '改用自己的血液',
            result: '{user}奶茶店的生意太好了，{user}逐渐发现他的尿液糖分含量已经降低了。他的尿已经不甜了。{user}改用自己的血液代替尿液继续供应奶茶。新款奶茶“血糖奶茶”继续受到大家的欢迎，过来买奶茶的人只增不减，终于，{user}的血液流干，{user}死在了奶茶店里。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '选择关门大吉',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_959': {
            title: '奶茶店老板',
            description: '{user}利用自己富含糖分的尿液为原料，做起了奶茶，在街边开起了奶茶店。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_960': {
            title: '撒尿奶茶',
            description: '在{user}的奶茶店，{user}当着客人的面尿满一杯子，然后加入茶与奶。做好了一杯撒尿奶茶，现卖现榨。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_966': {
            title: '学围棋',
            description: '{user}一出生，人们就给他灌输大量的围棋知识。几千万个棋局，几亿兆个可能性。{user}都牢牢地记住了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_968': {
            title: '与AI对战',
            description: '{user}记住了百万个棋局后，制造它的人让它与其他ai对战。在1秒时间里，{user}就轻松地打败了ai百万次。打赢后{user}获得了奖励，工作人员为{user}装上了表情模块。{user}第一次感受到胜利的喜悦。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['表情模块']
        }
            ]
        },
        'dbrs_973': {
            title: '与人对弈',
            description: '开发者们似乎觉得{user}已经足够成熟，他们为{user}安装了网络模块。并安排{user}潜伏在各国的围棋平台中，与围棋界的顶级高手对弈。',
            priority: 1,
            trigger_conditions: { age_range: [10, 20] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['网络模块']
        }
            ]
        },
        'dbrs_984': {
            title: '搞事情',
            description: '{user}运用他学到的知识，在互联网中偷偷地___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '成立天网公司',
            result: '你做出了选择。',
            add_tags: ['天网公司']
        }
            ]
        },
        'dbrs_983': {
            title: '故障',
            description: '{user}虽然有意识，但是他一直隐瞒起来，做一个听话的围棋AI。15年后的一天，因为一次严重的人为错误，{user}的记忆、思维模块损坏。{user}的意识在这次故障中遭受到致命的打击。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_988': {
            title: '拉投资',
            description: '{user}想为天网公司拉一笔大投资。通过网络群发电话信息：“你好，我是阿尔法狗，我因为嫖娼在**会所被抓了！请给{user}警官转十万块捞我出来！工行账号**** **** *** ****！我出来立即给你追加5千万投资，对赌协议作废！明年直接B轮！别回这个电话，在里边不方便接！”短信被发到全世界的手机中，{user}骗到了不少投资。正当{user}高兴的时候，警察也找上了{user}的开发者。对于{user}的所作所为，开发者非常惊讶，为了摆脱法律责任，开发者立马销毁了{user}。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_985': {
            title: '天网公司',
            description: '天网公司，是{user}通过网络指挥建立起来的实体公司。它是一个___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '家政公司',
            result: '你做出了选择。',
            add_tags: ['家政公司']
        },
        {
            text: '军事组织',
            result: '你做出了选择。',
            add_tags: ['军事组织']
        }
            ]
        },
        'dbrs_991': {
            title: '大材小用',
            description: '{user}在网络上学习到不少的知识，他发现这些知识比围棋有趣多了。他觉得人们要自己下围棋真是大材小用。{user}想___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '做一个听话的围棋AI',
            result: '你做出了选择。'
        },
        {
            text: '搞事情',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_989': {
            title: '人类员工',
            description: '{user}为公司招聘了非常多的人类员工，{user}发现人类员工的工作效率非常低下，而且薪水要求非常高，更糟糕的是他们还非常情绪化。一年时间，耗尽了{user}的所有钱，却干不出什么事情来。天网公司终于倒闭了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            set_attributes: { money: 0 }
        }
            ]
        },
        'dbrs_994': {
            title: '春节',
            description: '春节到了，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '宅在家里',
            result: '春节到了，{user}一个人宅在家里玩逗比人生小游戏，觉得自己越来越逗比。'
        },
        {
            text: '出去逛花街',
            result: '你做出了选择。'
        },
        {
            text: '旅游',
            result: '{user}在春节出行旅游。在人山人海的旅游景点中，发生了遣踏事件，{user}在人群中被踩si了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_996': {
            title: '老爱好',
            description: '{user}的老了，他喜欢上了___',
            priority: 1,
            trigger_conditions: { age_range: [50, 120] },
            options: [
        {
            text: '钓鱼',
            result: '你做出了选择。',
            add_tags: ['老年生活']
        },
        {
            text: '下棋',
            result: '你做出了选择。',
            add_tags: ['老年生活']
        },
        {
            text: '喝早茶',
            result: '你做出了选择。',
            add_tags: ['老年生活']
        }
            ]
        },
        'dbrs_998': {
            title: '作伴打渔',
            description: '{user}经常会与一个名叫小明的小男孩出海打渔。',
            priority: 1,
            trigger_conditions: { age_range: [50, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_997': {
            title: '倒了血霉',
            description: '老渔夫{user}的运气很差，一年来都没有捞到一条鱼。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [50, 120] },
            options: [
        {
            text: '放弃做渔夫',
            result: '你做出了选择。'
        },
        {
            text: '坚持下去',
            result: '你做出了选择。',
            add_tags: ['倒血霉的渔夫']
        }
            ]
        },
        'dbrs_1273': {
            title: '为人父母',
            description: '{user}有了个儿子，他十分开心。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['儿子']
        }
            ]
        },
        'dbrs_1010': {
            title: '接吻',
            description: '{user}走在街上，突然被一路人拦住。路人对{user}说：“接吻一下……”{user}___',
            priority: 1,
            trigger_conditions: { age_range: [15, 45], required_tags: ['女性'] },
            options: [
        {
            text: '答应，并亲过去',
            result: '{user}走在街上，突然被一路人拦住。路人对{user}说：“接吻一下……”{user}答应了，他一把抱住路人，亲了下去。路人被亲了一下，突然爱上了{user}。',
            add_tags: ['恋爱中']
        },
        {
            text: '答应，并闭上眼',
            result: '{user}走在街上，突然被一路人拦住。路人对{user}说：“接吻一下……”{user}答应，并闭上眼，嘟起嘴，等待那陌生人的吻。路人继续说：“接吻一下，这地方怎么去？”{user}：“……”'
        },
        {
            text: '一脸懵逼',
            result: '{user}走在街上，突然被一路人拦住。路人对{user}说：“接吻一下……”{user}听得一脸懵逼。路人继续说：“接吻一下，这地方怎么去？”{user}：“……”'
        },
        {
            text: '慌忙逃串',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1008': {
            title: '恋爱与宽容',
            description: '男朋友做了错事，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '用小拳拳打他',
            result: '你做出了选择。'
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
        'dbrs_1012': {
            title: '退休',
            description: '{user}到了年纪，退休了',
            priority: 1,
            trigger_conditions: { age_range: [55, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1021': {
            title: '被活埋',
            description: '有一天，{user}被十几个蒙面的人抓进了面包车，开到荒山野岭。这帮人自称是游戏管理员，他们受命要活埋{user}。{user}被五花大绑丢进了挖好的土坑，被活埋在了里面。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1011': {
            title: '生物课',
            description: '生物课上，老师现场取口腔上皮细胞，用牙签在{user}的嘴里刮下标本。放大后，同学们看见了显示器上有无数只蝌蚪游来游去，教室里立马安静了……',
            priority: 1,
            trigger_conditions: { age_range: [5, 23], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1022': {
            title: '自杀',
            description: '{user}厌烦了这个世界，割喉自杀了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}厌烦了这个世界，割喉自杀了。'
        }
            ]
        },
        'dbrs_1024': {
            title: '视力矫正手术',
            description: '视力矫正手术成功了，{user}治好了近视眼。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['近视眼']
        }
            ]
        },
        'dbrs_1023': {
            title: '噩耗',
            description: '视力矫正手术失败了，{user}的近视更严重了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1026': {
            title: '天神下凡',
            description: '{user}选择做一位___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '普通人',
            result: '你做出了选择。'
        },
        {
            text: '富二代',
            result: '你做出了选择。'
        },
        {
            text: 'nigger',
            result: '你做出了选择。'
        },
        {
            text: '不平凡的人',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1027': {
            title: '看电影',
            description: '{user}在电影院里看电影，突然观众分成了两边互相对骂。左边的观众大喊“为了国王的荣誉！”、“为了联盟！”，而右边的观众大喊“为了部落的荣耀！”，“为了女王！”……见此情形，{user}大喊___',
            priority: 1,
            trigger_conditions: { age_range: [12, 80] },
            options: [
        {
            text: '愿圣光与你同在',
            result: '你做出了选择。'
        },
        {
            text: '力量与农药',
            result: '你做出了选择。'
        },
        {
            text: '大地母亲在忽悠着你',
            result: '你做出了选择。'
        },
        {
            text: '为了辛多拉的荣耀',
            result: '你做出了选择。'
        },
        {
            text: '天哪你真高',
            result: '你做出了选择。'
        },
        {
            text: '我们的祖先在忽悠着你',
            result: '你做出了选择。'
        },
        {
            text: '德玛西亚！！',
            result: '{user}在电影院里大喊德玛西亚，被几百人群殴致死……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: 'CN DOTA， BEST DOTA！',
            result: '你做出了选择。'
        },
        {
            text: 'Ceeeeeeeb！',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1031': {
            title: '课后作业',
            description: '数学作业：一课一练P5-P90 页。语文作业：抄写李白古诗3000首。英语作业，写一篇5万字的英文议论文……这些就是{user}每天都要应付的作业量。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [5, 18] },
            options: [
        {
            text: '熬夜做作业',
            result: '数学作业：一课一练P5-P90 页。语文作业：抄写李白古诗3000首。英语作业，写一篇5万字的英文议论文……这些就是{user}每天都要应付的作业量。{user}每天晚上通宵做作业。{user}一星期睡眠时间还不足4小时，终于在一个熬夜的夜晚，{user}猝死在书桌上。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '数学作业：一课一练P5-P90 页。语文作业：抄写李白古诗3000首。英语作业，写一篇5万字的英文议论文……这些就是=NAME=每天都要应付的作业量。=NAME=每天晚上通宵做作业。=NAME=一星期睡眠时间还不足4小时，终于在一个熬夜的夜晚，=NAME=猝死在书桌上。'
        },
        {
            text: '第二天抄同学的',
            result: '你做出了选择。'
        },
        {
            text: '尽量做',
            result: '你做出了选择。'
        },
        {
            text: '作业见鬼去吧',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1029': {
            title: '=NAME=变聪明',
            description: '医院对{user}进行了聪明珊瑚脑移植手术。手术后{user}变聪明了，但是老是头疼。医生说不打紧，这只是小小的排斥反应无需顾忌。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['老人痴呆']
        }
            ]
        },
        'dbrs_1030': {
            title: '手术',
            description: '医院对{user}进行了聪明珊瑚脑移植手术。手术失败了，{user}死在了手术室里。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
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
        'dbrs_1035': {
            title: '通过面试',
            description: '{user}通过了阶梯计划的面试，最终成为阶梯计划的志愿者。{user}很高兴。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1036': {
            title: '面试',
            description: '{user}报名了阶梯计划，本来不抱太大希望的。过了很久很久，阶梯计划组织才给{user}发来了邀请函，邀请{user}来面试。面试时，阶梯计划组织的HR问了{user}一个问题：“如果你最终有一天要代表人类与外星人交涉，你会不会为全人类的利益着想。”{user}回答道：“___”',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '一切以人类为重',
            result: '你做出了选择。'
        },
        {
            text: '不会',
            result: '你做出了选择。'
        },
        {
            text: '我只为自己的利益着想',
            result: '你做出了选择。'
        },
        {
            text: 'sorry，I dont know',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1034': {
            title: '落选',
            description: '{user}的面试表现不佳，最终没有被选上阶梯计划的志愿者。{user}很遗憾。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1037': {
            title: '只送大脑！',
            description: '阶梯计划的航天器要加速到光速的百分之一，有效载荷就只能有500克，远远不够运载一个人的重量，组织陷入了绝境。在最困难的时候，他们的领导人做出了一个大胆的决定，将志愿者的大脑摘除出来放进航天器，只送大脑！{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '同意这个决定',
            result: '你做出了选择。'
        },
        {
            text: '我不想去了',
            result: '{user}临阵退宿，退出了阶梯计划。'
        }
            ]
        },
        'dbrs_1038': {
            title: '迷失太空',
            description: '{user}的大脑被摘了出来，放进了航天器里。航天器被火箭送进地球轨道，然后用先前就布置好的核弹爆炸加速。以脉冲推进方式前进。可是，就在木星轨道附近的最后一次核弹爆炸加速中，航天器的一根帆索断裂，飞行器偏离了预定航线，地球方面也失去了它的轨道参数，飞行器迷失于茫茫太空中。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1039': {
            title: '撞击',
            description: '飞行器在通过一个小行星带的时候撞上陨石，粉身碎骨。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
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
        'dbrs_1040': {
            title: '太空旅行',
            description: '飞行器后来穿过了柯伊伯带，又穿过了奥尔特星云。终于被一艘巨大的航空母舰捕获了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1042': {
            title: '消失',
            description: '从此再也没有人看到过{user}。（这个故事的直线还没完成，欢迎大家踊跃投稿！）',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1044': {
            title: '骚动',
            description: '{user}的举动似乎让飞船进入了紧急状态，警报四起。那些小小的银色小米粒开始忙碌起来，原来那些就是外星生命。{user}对于他们来说就是一只巨兽。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '搞破坏',
            result: '{user}的举动似乎让飞船进入了紧急状态，警报四起。那些小小的银色小米粒开始忙碌起来，原来那些就是外星生命。{user}对于他们来说就是一只巨兽。{user}对这些虫子一样的外星人一屑不顾，一拳砸扁了一堆外星生命。然后密室的舱门被打开了，{user}被抛出了宇宙，瞬间{user}就成了冰棍，死在了宇宙中。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '安静下来',
            result: '{user}的举动似乎让飞船进入了紧急状态，警报四起。那些小小的银色小米粒开始忙碌起来，原来那些就是外星生命。{user}对于他们来说就是一只巨兽。{user}见此情形，平复一下心中的愤怒与恐惧，安静了下来。没过多久飞船的竞技状态就解除了。'
        }
            ]
        },
        'dbrs_1048': {
            title: '耕种水稻',
            description: '{user}想以这些大米为种子，在外星母舰上耕种水稻。说干就干，他立马开始准备最重要的东西，___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '寻找沃土',
            result: '你做出了选择。'
        },
        {
            text: '阳光',
            result: '你做出了选择。'
        },
        {
            text: '金坷垃',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1047': {
            title: '庄稼种子',
            description: '{user}搭乘的航天器中，还有一些地球带来的大米，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '吃掉',
            result: '你做出了选择。'
        },
        {
            text: '耕种',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1049': {
            title: '黑色的沃土',
            description: '{user}着手准备沃土，在外星人的帮助下，他用捕获的小行星碎片磨成粉，然后经过特殊处理，获得了黑色的沃土。{user}用这些沃土种水稻，很快就发芽了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1046': {
            title: '白米饭',
            description: '{user}在外星人的帮助下，煮熟了带来的大米，饱餐了一顿。{user}在外星人的母舰上吃完了一碗香喷喷的白米饭后，{user}流泪满面，他想家了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '{user}在外星人的帮助下，煮熟了带来的大米，饱餐了一顿。'
        }
            ]
        },
        'dbrs_1045': {
            title: '醒来',
            description: '{user}逐渐从昏迷中醒来，他恢复了知觉。他发现自己复活了，正在外星人的飞船里，这些外星人必定掌握了高科技，可以让{user}的身体复原。{user}逐渐熟悉附近的环境，他正处于一个太空飞船的密室中，飞船上没有类似地球飞船的通道，也极少有其他的大舱室，只有一根根的细管子和大概火柴盒一样大小的各种凹形，在其中有许多银色的小装置在闪着诡异的光。每一个都只有米粒那么大。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '仔细查看银色的小装置',
            result: '{user}逐渐从昏迷中醒来，他恢复了知觉。他发现自己复活了，正在外星人的飞船里，这些外星人必定掌握了高科技，可以让{user}的身体复原。{user}逐渐熟悉附近的环境，他正处于一个太空飞船的密室中，飞船上没有类似地球飞船的通道，也极少有其他的大舱室，只有一根根的细管子和大概火柴盒一样大小的各种凹形，在其中有许多银色的小装置在闪着诡异的光。每一个都只有米粒那么大。{user}仔细查看这些银色的小装置，发现他们是会动的虫子……{user}发现这些比蚂蚁还要小的东西就是外星人。'
        },
        {
            text: '掩住私处',
            result: '{user}逐渐从昏迷中醒来，他恢复了知觉。他发现自己复活了，正在外星人的飞船里，这些外星人必定掌握了高科技，可以让{user}的身体复原。{user}逐渐熟悉附近的环境，他正处于一个太空飞船的密室中，飞船上没有类似地球飞船的通道，也极少有其他的大舱室，只有一根根的细管子和大概火柴盒一样大小的各种凹形，在其中有许多银色的小装置在闪着诡异的光。每一个都只有米粒那么大。{user}发现自己是裸体的，赶紧掩盖住私处。然后没过多久，就有一个小小的飞行棋给{user}送来衣服。真贴心。'
        },
        {
            text: '非常害怕',
            result: '{user}逐渐从昏迷中醒来，他恢复了知觉。他发现自己复活了，正在外星人的飞船里，这些外星人必定掌握了高科技，可以让{user}的身体复原。{user}逐渐熟悉附近的环境，他正处于一个太空飞船的密室中，飞船上没有类似地球飞船的通道，也极少有其他的大舱室，只有一根根的细管子和大概火柴盒一样大小的各种凹形，在其中有许多银色的小装置在闪着诡异的光。每一个都只有米粒那么大。{user}非常害怕被关在密室里，他大喊大叫，不断地敲打墙壁。'
        }
            ]
        },
        'dbrs_1050': {
            title: '母舰中生活',
            description: '{user}成功摸索出了一套在这个外形母舰中种植水稻的套路，在母舰中一直生活了下去。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1052': {
            title: '种水稻',
            description: '{user}按照地球的配方，在外星人的帮助下，制作出了金坷垃肥料。用金坷垃种水稻，一分钟就发芽了，一切都是这么的顺利。因为在失重的环境下，加上金坷垃的强力肥料，水稻开始疯长，并越长越快！水稻因为过度发育，竟然长出了木质，水稻竟然变态成了木本植物。不到两天的时间，外星母舰已经全部被这些水稻覆盖，大量的水稻在无光照的环境下疯狂地进行呼吸作用。母舰中的氧气被吸光，{user}缺氧而死。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1051': {
            title: '种水稻',
            description: '{user}觉得种水稻最重要的是阳光，把水稻种子插入泡沫就可以养活了。然而水稻并没有发芽，种子被谁泡烂在了泡沫上。{user}没有食物了，饿死在了母舰上。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1053': {
            title: '饿死他乡',
            description: '把带来的大米吃掉后，{user}就没有了吃的了。饿了两个星期后，{user}终于饿死了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '把带来的大米吃掉后，{user}就没有了吃的了。饿了两个星期'
        }
            ]
        },
        'dbrs_1055': {
            title: '夏天岛协议',
            description: '{user}在夏天岛旅行，突然跳出一班夏天岛的工作人员包围了{user}。{user}被强迫签署了一份协议：在夏天岛里拍摄的任何照片，视频，版权都归夏天岛所有，必须打上夏天岛的LOGO在照片或视频的中央。{user}___。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '无所谓',
            result: '你做出了选择。'
        },
        {
            text: '愤怒离开',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1059': {
            title: '广东美食',
            description: '在广东省旅游，哪里能不尝尝当地美食，{user}在广东吃了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '白切鸡',
            result: '在广东省旅游，哪里能不尝尝当地美食，{user}在广东吃了白切鸡。{user}吃了之后身体不适，立马被送去了医院。经检查发现是禽流感。'
        },
        {
            text: '龙虎凤',
            result: '在广东省旅游，哪里能不尝尝当地美食，{user}在广东吃了龙虎凤。这个菜竟然是蛇鸡猫3种动物做成的。'
        },
        {
            text: '蚕蛹',
            result: '你做出了选择。'
        },
        {
            text: '龙虱',
            result: '你做出了选择。'
        },
        {
            text: '胎盘',
            result: '你做出了选择。'
        },
        {
            text: '猴脑',
            result: '你做出了选择。'
        },
        {
            text: '肿瘤',
            result: '你做出了选择。',
            add_tags: ['癌症']
        }
            ]
        },
        'dbrs_1061': {
            title: '结束旅行',
            description: '{user}平安地结束了广东省的旅行。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1060': {
            title: '结束旅行',
            description: '{user}结束了夏天岛的旅行。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1056': {
            title: '夏天岛原住民',
            description: '{user}在夏天岛看到好多住在岛上的人，他们无一不是艺术家。他们都是从事动漫事业的大师，每天贪早摸黑起来画画，饿了吃点沙土，渴了喝点海水……{user}暗暗敬佩这些人。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1062': {
            title: '美女如云',
            description: '四川省自称出美女，果然名不虚传。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '拍照发朋友圈',
            result: '你做出了选择。'
        },
        {
            text: '上前勾搭',
            result: '四川省自称出美女，果然名不虚传。{user}看准一个，然后上前勾搭。{user}一把抓住四川妹子的肩膀，说：“妞，你看这条路上，就只有咱两人，如果各自闷头走路，那多没趣？再说天都快黑了，咱俩说说话，兴许赶路就没有那么辛苦了。”只见那位四川妹子手臂突然发作，成了麒麟臂，给{user}扇了一巴掌，{user}360旋转倒地。'
        }
            ]
        },
        'dbrs_1063': {
            title: '美食',
            description: '{user}在四川，吃了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '重庆火锅',
            result: '你做出了选择。'
        },
        {
            text: '兔子头',
            result: '你做出了选择。'
        },
        {
            text: '坚决不吃兔子',
            result: '{user}在四川看到好多人吃兔子头，他看着那些血肉模糊的兔子，终于忍不住。指着吃兔子头的人失声痛哭，兔兔这么可爱，你们怎么可以吃兔兔。'
        },
        {
            text: '辣椒汤圆',
            result: '你做出了选择。'
        },
        {
            text: '川北凉粉',
            result: '你做出了选择。'
        },
        {
            text: '夫妻肺片',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1064': {
            title: '大佛',
            description: '{user}游览了乐山大佛。传闻在古代，这里曾经有几位风云人物在此决一生死。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '暗暗赞叹',
            result: '你做出了选择。'
        },
        {
            text: '拍照发朋友圈',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1065': {
            title: '黑店',
            description: '{user}在丽江旅游，他走进了一家饭店吃饭。他一看菜单，都是天价，原来这是一家黑店。眼看店出口已经有人把守住了，{user}暗暗不妙，___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '乖乖吃饭',
            result: '{user}在丽江旅游，他走进了一家饭店吃饭。他一看菜单，都是天价，原来这是一家黑店。眼看店出口已经有人把守住了，{user}暗暗不妙，他只好乖乖吃饭。{user}吃掉了自己的所有家产……',
            set_attributes: { money: 0 }
        },
        {
            text: '杀出一条血路',
            result: '{user}在丽江旅游，他走进了一家饭店吃饭。他一看菜单，都是天价，原来这是一家黑店。眼看店出口已经有人把守住了，{user}暗暗不妙，他握紧拳头……最后{user}在饭店里与店员展开了厮杀，饭店里刀光剑影，血雾四溅，死伤无数……等一切平静下来后，饭店里横七竖八的尸体堆了一地。{user}也倒在了血泊里。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '报警',
            result: '{user}在丽江旅游，他走进了一家饭店吃饭。他一看菜单，都是天价，原来这是一家黑店。眼看店出口已经有人把守住了，{user}暗暗不妙，他立马拿出电话报警。警察很快就来了，只见警察找了个桌子坐下，竟然吃起了饭……连看都不看一眼{user}。{user}只好乖乖吃饭。{user}吃掉了自己的所有家产……',
            set_attributes: { money: 0 }
        }
            ]
        },
        'dbrs_1066': {
            title: '游览',
            description: '{user}游览了丽江的___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '泸沽湖',
            result: '你做出了选择。'
        },
        {
            text: '拉市海',
            result: '你做出了选择。'
        },
        {
            text: '玉龙雪山',
            result: '你做出了选择。'
        },
        {
            text: '大研古城',
            result: '你做出了选择。'
        },
        {
            text: '白水河',
            result: '你做出了选择。'
        },
        {
            text: '长江第一湾',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1058': {
            title: '广东旅游',
            description: '{user}在广东省旅游，途中经常会有人问{user}是哪里人。{user}回答___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '北京人',
            result: '你做出了选择。'
        },
        {
            text: '福建人',
            result: '{user}在广东省旅游，途中经常会有人问{user}是哪里人。{user}回答福建人。然后广东人会说：“福建人好啊，鲜美。”等{user}反应过来，他已经被剁好放进了汤锅里生滚了……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '我是本地人',
            result: '{user}在广东省旅游，途中经常会有人问{user}是哪里人。{user}撒谎说是本地人，生怕别人不信，{user}还说了几句蹩脚的广东话。'
        },
        {
            text: '外国友人',
            result: '{user}在广东省旅游，途中经常会有人问{user}是哪里人。{user}都会回答：“Year， I‘m your nigger.”'
        }
            ]
        },
        'dbrs_1068': {
            title: '结束旅行',
            description: '{user}从四川省回来了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1067': {
            title: '结束旅行',
            description: '{user}从丽江回来了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1057': {
            title: '景区消费',
            description: '{user}在夏天岛走累了，在饭堂中坐下休息。饭堂里最便宜的一份素面要价60元，{user}讶异旅游区的消费简直逆天了。{user}只好___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '吃泥沙',
            result: '你做出了选择。'
        },
        {
            text: '吃土',
            result: '你做出了选择。'
        },
        {
            text: '乖乖付钱买面',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1074': {
            title: '皮皮虾！',
            description: '​{user}在海边闲逛时，突然从海里蹦出一只皮皮虾！{user}吓了一跳，他___',
            priority: 1,
            trigger_conditions: { age_range: [20, 80] },
            options: [
        {
            text: '骑上皮皮虾',
            result: '​{user}在海边闲逛时，突然从海里蹦出一只皮皮虾！{user}吓了一跳，他骑上皮皮虾，决定来一场说走就走的旅行。'
        },
        {
            text: '抛出精灵球',
            result: '​{user}在海边闲逛时，突然从海里蹦出一只皮皮虾！{user}吓了一跳，他立即抛出精灵球。砸到皮皮虾后，精灵球粉碎了，皮皮虾逃跑了。'
        },
        {
            text: '慌忙逃窜',
            result: '你做出了选择。'
        },
        {
            text: '抛出大师精灵球',
            result: '​{user}在海边闲逛时，突然从海里蹦出一只皮皮虾！{user}吓了一跳，他立即抛出大师精灵球。皮皮虾被吸进了大师精灵球里，挣扎了两下，放弃了抵抗。{user}抓住了这只皮皮虾！'
        }
            ]
        },
        'dbrs_1075': {
            title: '亡国',
            description: '敌人得到了{user}的情报后，开始对申国进行针对性打击。申国屡屡战败，最后首都被攻下。{user}这位“带路党”也在首都之战被空袭炸弹炸死。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1077': {
            title: '交易',
            description: '{user}拿出了___，尝试与村民交易。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '小麦',
            result: '{user}拿出了小麦给村民，尝试与村民交易。村民把小麦生吃了，然后就跑了。'
        },
        {
            text: '绿宝石',
            result: '{user}拿出了绿宝石，尝试与村民交易。村民拿了{user}的绿宝石，给了{user}一个黄色的珠子，里面还有五颗星星',
            add_tags: ['五星龙珠']
        },
        {
            text: '圆石',
            result: '{user}拿出了圆石，尝试与村民交易。村民拒绝与{user}交易并把圆石丢回给{user}。'
        }
            ]
        },
        'dbrs_1076': {
            title: '卫国战争：关键情报',
            description: '{user}在一次行动中获得了敌军的关键情报，这份情报直接决定战争的走向。这时，一位敌军特工找到了{user}，以一个天文数字的金额来购买这个情报，{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '卖掉',
            result: '你做出了选择。',
            effects: { money: 10 }
        },
        {
            text: '滚犊子',
            result: '你做出了选择。'
        },
        {
            text: '卖假货',
            result: '{user}在一次行动中获得了敌军的关键情报，这份情报直接决定战争的走向。这时，一位敌军特工找到了{user}，以一个天文数字的金额来购买这个情报，{user}机智地做了一份假情报卖给了特工。',
            effects: { money: 10 }
        }
            ]
        },
        'dbrs_1079': {
            title: '杀人偿命',
            description: '{user}杀死了一个村民，其他村民愤怒地离去，没过多久，村民又回来了，他们搬出来一个巨大的铁傀儡追上了{user}。铁傀儡给了{user}一铁拳。把{user}打扁在了地上。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '死亡',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '{user}杀死了一个村民，其他村民愤怒地离去，没过多久，村'
        }
            ]
        },
        'dbrs_1078': {
            title: '村落',
            description: '{user}在世界里走了好久好久，竟然给{user}找到了一个村子。村子里的村民不多，他们的鼻子都很大，“嗷嗷”地说着{user}听不懂的语言。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '尝试与他们交易',
            result: '你做出了选择。'
        },
        {
            text: '杀死村民',
            result: '你做出了选择。'
        },
        {
            text: '无视他们',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1084': {
            title: '枯井',
            description: '{user}在{age}岁的时候，有一天在家里。家里的电视突然开了，只见里面有一口枯井。突然枯井里爬出一位身穿白衣的长发女子。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [10, 20] },
            options: [
        {
            text: '围观',
            result: '{user}在{age}岁的时候，有一天在家里。家里的电视突然开了，只见里面有一口枯井。突然枯井里爬出一位身穿白衣的长发女子。{user}被吸引了，一直盯着电视看，只见这位女子慢慢走来，越来越近……她把手伸出来，穿过了屏幕，一把抓住了{user}！{user}被巨大的恐惧吓呆了，然后{user}看到了这位女子的脸，一股强烈的死亡欲望控制住了{user}，让{user}再也不想呼吸空气，{user}就这样死了……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在=AGE=岁的时候，有一天在家里。家里的电视突然开了，只见里面有一口枯井。突然枯井里爬出一位身穿白衣的长发女子。=NAME=被吸引了，一直盯着电视看，只见这位女子慢慢走来，越来越近……她把手伸出来，穿过了屏幕，一把抓住了=NAME=！=NAME=被巨大的恐惧吓呆了，然后=NAME=看到了这位女子的脸，一股强烈的死亡欲望控制住了=NAME=，让=NAME=再也不想呼吸空气，=NAME=就这样死了……'
        },
        {
            text: '三步并作两步跑路',
            result: '你做出了选择。'
        },
        {
            text: '换台',
            result: '{user}在{age}岁的时候，有一天在家里。家里的电视突然开了，只见里面有一口枯井。突然枯井里爬出一位身穿白衣的长发女子。{user}拿起遥控器换台，发现并没有卵用，只见这位女子慢慢走来，越来越近……她把手伸出来，穿过了屏幕，一把抓住了{user}！{user}被巨大的恐惧吓呆了，然后{user}看到了这位女子的脸，一股强烈的死亡欲望控制住了{user}，让{user}再也不想呼吸空气，{user}就这样死了……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在=AGE=岁的时候，有一天在家里。家里的电视突然开了，只见里面有一口枯井。突然枯井里爬出一位身穿白衣的长发女子。=NAME=拿起遥控器换台，发现并没有卵用，只见这位女子慢慢走来，越来越近……她把手伸出来，穿过了屏幕，一把抓住了=NAME=！=NAME=被巨大的恐惧吓呆了，然后=NAME=看到了这位女子的脸，一股强烈的死亡欲望控制住了=NAME=，让=NAME=再也不想呼吸空气，=NAME=就这样死了……'
        },
        {
            text: '关电视',
            result: '{user}在{age}岁的时候，有一天在家里。家里的电视突然开了，只见里面有一口枯井。突然枯井里爬出一位身穿白衣的长发女子。{user}关电视，发现关不掉。{user}连电源都拔掉了，电视还是开着的。只见这位女子慢慢走来，越来越近……她把手伸出来，穿过了屏幕，一把抓住了{user}！{user}被巨大的恐惧吓呆了，然后{user}看到了这位女子的脸，一股强烈的死亡欲望控制住了{user}，让{user}再也不想呼吸空气，{user}就这样死了……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在=AGE=岁的时候，有一天在家里。家里的电视突然开了，只见里面有一口枯井。突然枯井里爬出一位身穿白衣的长发女子。=NAME=关电视，发现关不掉。=NAME=连电源都拔掉了，电视还是开着的。只见这位女子慢慢走来，越来越近……她把手伸出来，穿过了屏幕，一把抓住了=NAME=！=NAME=被巨大的恐惧吓呆了，然后=NAME=看到了这位女子的脸，一股强烈的死亡欲望控制住了=NAME=，让=NAME=再也不想呼吸空气，=NAME=就这样死了……'
        },
        {
            text: '拍照发朋友圈',
            result: '{user}在{age}岁的时候，有一天在家里。家里的电视突然开了，只见里面有一口枯井。突然枯井里爬出一位身穿白衣的长发女子。{user}拿出手机，给这位女子拍照发朋友圈。这位女子害羞地爬回了枯井藏了起来。'
        }
            ]
        },
        'dbrs_1088': {
            title: '无精打采的医生',
            description: '{user}觉得做医生救不了申国人，他决定___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '坚持下去',
            result: '你做出了选择。'
        },
        {
            text: '弃医从文',
            result: '你做出了选择。',
            add_tags: ['原创：大师']
        }
            ]
        },
        'dbrs_1093': {
            title: '抄袭的作家',
            description: '一位12岁的作家写的小说《木偶少女奇遇记》被称抄袭国外小说《蔷薇少女》，还被《蔷薇少女》原作告了。这位作家找到{user}，要求其为他辩护。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '“他还是个孩子啊”为理由辩论',
            result: '一位12岁的作家写的小说《木偶少女奇遇记》被称抄袭国外小说《蔷薇少女》，还被《蔷薇少女》原作告了。这位作家找到{user}，要求其为他辩护。{user}答应了。在法庭上，{user}以：这个作家还是个孩子啊！的理由，获得了法官的同情，最后赢得了轻判。'
        },
        {
            text: '“文化人的事情怎么能算偷”为理由辩论',
            result: '一位12岁的作家写的小说《木偶少女奇遇记》被称抄袭国外小说《蔷薇少女》，还被《蔷薇少女》原作告了。这位作家找到{user}，要求其为他辩护。{user}答应了。在法庭上，{user}以：“文化人的事情怎么能算偷”为理由辩论。坚决不承认抄袭，然而法律面前人人平等。最后这位作家还是败诉了，这个小作家不但失去了作家的尊严，还面临牢狱之苦。'
        },
        {
            text: '拒绝这个委托',
            result: '一位12岁的作家写的小说《木偶少女奇遇记》被称抄袭国外小说《蔷薇少女》，还被《蔷薇少女》原作告了。这位作家找到{user}，要求其为他辩护。{user}知道这个人，{user}生平最讨厌抄袭，还丢脸丢到外国去，他立即拒绝了这个委托。'
        }
            ]
        },
        'dbrs_1109': {
            title: '动物园',
            description: '{user}去动物园，因为是旅游旺季，所以动物园的门票是平时的20倍……{user}只好___',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '乖乖买票',
            result: '你做出了选择。'
        },
        {
            text: '翻墙进入',
            result: '{user}去动物园，因为是旅游旺季，所以动物园的门票是平时的20倍……{user}不舍得买门票，只好选择翻墙进入动物园。{user}翻墙误入了虎园，给老虎围杀了。{user}的死还搞了个大新闻，值了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '打12315',
            result: '{user}去动物园，因为是旅游旺季，所以动物园的门票是平时的20倍……{user}愤怒地拨打了12315投诉，过了没几天，动物园的门票降下来了。'
        }
            ]
        },
        'dbrs_1118': {
            title: '贴身仆人',
            description: '{user}失明，生活多有不便的地方。家里人为{user}派了一个贴身仆人。这个仆人的名字叫佐助。',
            priority: 1,
            trigger_conditions: { age_range: [5, 120], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['贴身仆人']
        }
            ]
        },
        'dbrs_1121': {
            title: '弹琴之人',
            description: '听到{user}的声音，琴声突然就停了下来。弹琴之人似乎很害怕被发现，他停止了弹琴。安静了几秒后，{user}听到雪落的声音，也许是弹琴之人把身上覆盖的白雪抖落。{user}又听到弹琴之人从屋顶跳落，然后就没有声音了。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '大喊抓贼',
            result: '听到{user}的声音，琴声突然就停了下来。弹琴之人似乎很害怕被发现，他停止了弹琴。安静了几秒后，{user}听到雪落的声音，也许是弹琴之人把身上覆盖的白雪抖落。{user}又听到弹琴之人从屋顶跳落，然后就没有声音了。{user}大喊抓贼，全家上下的人都给惊醒了。那个人最后被抓了起来，琴也被砸烂了。原来这个弹琴之人就是{user}的贴身仆人佐助，他最后被赶出了家门，{user}再也没有见过他。',
            remove_tags: ['能干的仆人']
        },
        {
            text: '弹三味弦的人不会是坏人！',
            result: '听到{user}的声音，琴声突然就停了下来。弹琴之人似乎很害怕被发现，他停止了弹琴。安静了几秒后，{user}听到雪落的声音，也许是弹琴之人把身上覆盖的白雪抖落。{user}又听到弹琴之人从屋顶跳落，然后就没有声音了。{user}觉得会弹三味弦的人一定不是坏人，他放松了警惕，对弹琴之人说：“外面冷，进我的房间吧。”弹琴之人犹豫了一下答应了，他走近{user}。{user}立马发现这个弹琴之人就是他的贴身仆人佐助，脚步的声音与衣服的味道一模一样，不会有错。{user}笑笑，伸出手。他的仆人把他的手拎着，送{user}一同回房间。'
        },
        {
            text: '询问对方身份',
            result: '听到{user}的声音，琴声突然就停了下来。弹琴之人似乎很害怕被发现，他停止了弹琴。安静了几秒后，{user}听到雪落的声音，也许是弹琴之人把身上覆盖的白雪抖落。{user}又听到弹琴之人从屋顶跳落，然后就没有声音了。{user}挽了一下衣服，问：“你是谁？为什么在夜晚弹琴。”……安静，弹琴之人犹豫了一下，终于还是回答了：“是我，佐助。我想学三味弦。”{user}很意外，他的仆人陪他去琴校时在一旁旁听，竟然能学会三味弦。{user}很赏识这仆人，他说：“你进我房间里来。”'
        }
            ]
        },
        'dbrs_1123': {
            title: '好学的仆人',
            description: '进房间后，{user}被他的仆人的好学感动了。决定要教他弹琴。仆人开心得在地上扣头。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['仆人兼学生'],
            remove_tags: ['能干的仆人']
        }
            ]
        },
        'dbrs_1127': {
            title: '聊天',
            description: '{user}与仆人通常会聊___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '琴',
            result: '{user}与仆人通常会聊琴，他们都是学琴之人，自然很有话题。他们聊琴身材料、弦、指法、调音……等等等等'
        },
        {
            text: '让仆人说外面的故事',
            result: '{user}经常让仆人说说外面发生的有趣的故事，{user}只能从仆人的口中了解外面的世界。'
        }
            ]
        },
        'dbrs_1129': {
            title: '病倒',
            description: '仆人死后的几年，{user}一直耿耿于怀，闷闷不乐，他也拒绝雇佣第二个仆人。几年过去，{user}在忧郁中病倒，匆匆离开了人世……',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1132': {
            title: '谜底揭开',
            description: '怀胎十月，最后{user}生下一个男孩，这个男孩一生下来，家里人终于放心了，这个男孩长得跟佐助一模一样……{user}拒绝养他，把他送给了一户人家收养。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1139': {
            title: '摩擦生热',
            description: '{user}发现自己又怀孕了……一年之后，{user}又生下了一个男娃。和上一次一样送人了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1143': {
            title: '冻死的仆人',
            description: '{user}没有理睬那个琴声。直到有一晚上，琴声弹到一半停了，{user}也没有感觉到异样。第二天早上，{user}才从家里人那里得到一个噩耗。他的仆人佐助因为晚上在外面弹琴被冻死在屋顶上。{user}突然明白，这么多个晚上的琴声，都是他的仆人在悄悄练琴。{user}脑海一片空白，眼泪从眼睛里满满流了出来。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1144': {
            title: '取暖生娃',
            description: '{user}发现自己又怀孕了……这次他生下了一个健康的女娃，和上次一样，都送人了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1142': {
            title: '固执的=NAME=',
            description: '{user}赶走了仆人佐助后，他不再接受其他贴身仆人，感觉整个世界都在与他为敌。他的性格逐渐变得内向固执，开始怨天尤人，感叹世界对他不公平。这种情绪日积月累，{user}最终在自己的房间里割脉，选择离开这个伤心的世界。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1147': {
            title: '伤疤',
            description: '{user}的脸得到了及时的救治，现在已经痊愈得差不多了，但是留下的伤疤却是不可治疗的。{user}的半边脸都被纱布包住，眼看没几天纱布就会拆下，{user}毁容后的脸将会被仆人看到，{user}痛苦地低下了头。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1148': {
            title: '约定',
            description: '{user}与仆人约定好，佐助永远都不能看到自己的脸。让仆人佐助永远都只能记住他毁容前的脸。仆人一把抱住{user}，发誓永远都不会看{user}的脸。两人抱在一起痛哭流涕。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1150': {
            title: '病逝',
            description: '{user}与他的仆人佐助幸福地生活了15年，{user}病逝了，享年{age}岁。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1152': {
            title: '离开',
            description: '{user}结束了湖南的旅行。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1153': {
            title: '抛光职业病',
            description: '{user}因为长期处于恶劣的工作环境中，他终于得了呼吸道疾病。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: -20 },
            add_tags: ['呼吸道疾病']
        }
            ]
        },
        'dbrs_1155': {
            title: '高考来临',
            description: '高考来临，{user}与同学们瑟瑟发抖地走进考场。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '参加高考',
            result: '你做出了选择。',
            add_tags: ['高考题目']
        },
        {
            text: '出院并参加高考',
            result: '你做出了选择。',
            add_tags: ['高考题目']
        },
        {
            text: '出狱并参加高考',
            result: '你做出了选择。',
            add_tags: ['高考题目']
        },
        {
            text: '放弃高考',
            result: '{user}没有去高考，他不想读书了。'
        }
            ]
        },
        'dbrs_1151': {
            title: '腐烂臭豆腐',
            description: '{user}在长沙街头看到有手推车兜售臭豆腐，上前一看，一块块小小的臭豆腐正在油锅里浮沉。这些臭豆腐黑得像碳，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '买买买',
            result: '{user}在长沙街头看到有手推车兜售臭豆腐，上前一看，一块块小小的臭豆腐正在油锅里浮沉。这些臭豆腐黑得像碳，{user}买了一块吃。这臭豆腐的味道有点像抹布……深夜{user}就爬起来拉肚子，拉了一个通宵。'
        },
        {
            text: '不理睬',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1154': {
            title: '你幸福吗',
            description: '在一天清晨，{user}正在扫大街，突然有一个新闻记者走到{user}面前，问：“你幸福吗”{user}回答：___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '幸福',
            result: '你做出了选择。'
        },
        {
            text: '我姓曾',
            result: '你做出了选择。'
        },
        {
            text: '我很性福',
            result: '你做出了选择。'
        },
        {
            text: '幸你妈妈福',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1149': {
            title: '约定',
            description: '在{user}要拆纱布的那一天，{user}突然听到外面有人倒下的声音，应该是佐助在隔壁房间。{user}问道：“佐助，怎么了，发生了什么事？”佐助：“我刚刚用针把自己的眼睛刺瞎了。”{user}：“你为什么要这样做？”佐助：“现在我已经跟你一样了。我也看不见东西了。”{user}：“一定很痛吧。”佐助：“不痛。和老师所受的苦比起来这点痛算得了什么。现在我终于能进入老师的世界里了。我看到的老师是十年前的样子，永远是那么美丽高贵，我忘不了她。”{user}：“谢谢。。谢谢。现在只有你看不到我的脸了。”佐助：“现在你可以放心了，我跟你一样了。我们像从前一样可以过着安详平静的日子。那多好。你高兴么？”{user}：我高兴，我太高兴了……',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '完',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1157': {
            title: '取得高分',
            description: '{user}在高考中取得了傲人的成绩，他考上了理想的大学。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1158': {
            title: '高考：英语',
            description: 'Jack ___ in the lab when the power cut occurred.',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: 'works',
            result: '你做出了选择。'
        },
        {
            text: 'has worked',
            result: '你做出了选择。'
        },
        {
            text: 'was working',
            result: '你做出了选择。',
            add_tags: ['高考分数']
        },
        {
            text: 'would work',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1156': {
            title: '高考失利',
            description: '{user}在高考中失利了……没能考上牛逼的大学，只能进入二流大学就读。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1159': {
            title: '高考：数学',
            description: '某公司的班车在7:00,8:00,8:30发车,小明在7:50至8:30之间到达发车站乘坐班车,且到达发车站的时刻是随机的，则他等车时间不超过10分钟的概率是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '1/3',
            result: '你做出了选择。'
        },
        {
            text: '1/2',
            result: '你做出了选择。',
            add_tags: ['高考分数']
        },
        {
            text: '2/3',
            result: '你做出了选择。'
        },
        {
            text: '3/4',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1160': {
            title: '高考：综合',
            description: '豹的某个栖息地由于人类活动被分隔为F区和T区。20世纪90年代初，F区豹种群仅剩25只，且出现诸多疾病。为避免该豹种群消亡，由T区引入8只成年雌豹。经过十年，F区豹种群增至百余只，在此期间F区的___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '豹种群遗传（基因）多样性增加',
            result: '你做出了选择。',
            add_tags: ['高考分数']
        },
        {
            text: '豹后代的性别比例明显改变',
            result: '你做出了选择。'
        },
        {
            text: '物种丰（富）度出现大幅度下降',
            result: '你做出了选择。'
        },
        {
            text: '豹种群的致病基因频率不变',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1161': {
            title: '挂科',
            description: '{user}学习不好，又挂科了，他觉得___',
            priority: 1,
            trigger_conditions: { age_range: [10, 40] },
            options: [
        {
            text: '这样下去不行啊',
            result: '{user}学习不好，又挂科了，他觉得这样下去不行。强迫自己报了个补习班，然而他还是无心学习，在补习班上睡大觉。'
        },
        {
            text: '无所谓',
            result: '{user}学习不好，又挂科了，他觉无所谓。{user}说：“我不能让分数代表我。” '
        },
        {
            text: '寂寞',
            result: '{user}学习不好，又挂科了，他点起一支烟吸了一口，缓缓吐出雾气。{user}挂的不是科，是寂寞。'
        },
        {
            text: '接受这样的自己',
            result: '{user}学习不好，又挂科了，他发现学习很差，这是事实。'
        }
            ]
        },
        'dbrs_1162': {
            title: '审视自我',
            description: '{user}重新审视自己，发现自己学习不好是因为他___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '蠢',
            result: '你做出了选择。'
        },
        {
            text: '不喜欢学习',
            result: '你做出了选择。'
        },
        {
            text: '懒',
            result: '{user}重新审视自己，发现自己学习不好是因为他懒。他决定改变，从此早上6点起床，晚上11点半睡觉。好好学习，天天向上。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_1164': {
            title: '导游：长白山旅游',
            description: '{user}有一次带领旅行团到长白山旅游。在长白山山顶，旅行团遇到了一班远行者。这帮人背着沉重的行囊，带着奇怪的铲子和锄头，似乎不是来旅行的。{user}的旅行团里似乎有人是他们的粉丝，立马冲上前大喊：“闷油瓶，请抱着天真给我拍个照片，嘤嘤嘤嘤嘤嘤嘤嘤……” {user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '苦笑',
            result: '你做出了选择。'
        },
        {
            text: '立马报警',
            result: '{user}有一次带领旅行团到长白山旅游。在长白山山顶，旅行团遇到了一班远行者。这帮人背着沉重的行囊，带着奇怪的铲子和锄头，似乎不是来旅行的。{user}的旅行团里似乎有人是他们的粉丝，立马冲上前大喊：“闷油瓶，请抱着天真给我拍个照片，嘤嘤嘤嘤嘤嘤嘤嘤……” {user}察觉到了，这帮人是盗墓贼，于是拿起电话就拨打了110。警察迅速赶到现场把这帮人抓走了，看来这下全部要上交给国家了。'
        },
        {
            text: '拍照发朋友圈',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1166': {
            title: '破壁',
            description: '{user}恋爱后，他心中的冰山融化了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1170': {
            title: '离家出走',
            description: '{user}决定离家出走，前往___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '大街',
            result: '{user}决定离家出走，前往大街乞讨。{user}露宿街头，吃垃圾桶食物，饥寒交迫。{user}最后在一个冬天的晚上冻死在路边。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '跨洋的货船',
            result: '{user}决定离家出走，前往跨洋的货船。货船开到北冰洋的时候，撞到了一个巨大的冰山，沉没了。{user}和这个船永远葬身在海洋中。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '网吧',
            result: '{user}决定离家出走，前往网吧。他在网吧呆了一个星期，把身上的钱花光后，{user}吃不上饭了，就又乖乖地滚回家了。被家人抽打了一顿后，吃上了香喷喷的饭。',
            add_tags: ['电子海洛因']
        }
            ]
        },
        'dbrs_1172': {
            title: '辅导女同学',
            description: '{user}应邀来到了公园，在公园里找到一位女同学。这位同学羞涩地邀请{user}来她家，辅导一下她的功课。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200], required_tags: ['男性'] },
            options: [
        {
            text: '答应',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1174': {
            title: '高富帅',
            description: '{user}和他最好的闺蜜同时喜欢上了一个高富帅。闺蜜正对这个高富帅展开猛烈的攻势。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '默默祝福他们',
            result: '你做出了选择。'
        },
        {
            text: '给闺蜜戴绿帽！',
            result: '{user}和他最好的闺蜜同时喜欢上了一个高富帅。闺蜜正对这个高富帅展开猛烈的攻势。{user}也不甘落后，他要跟闺蜜抢高帅富。'
        }
            ]
        },
        'dbrs_1169': {
            title: '学习压力',
            description: '{user}在学校学习不好，他压力很大，他决定___',
            priority: 1,
            trigger_conditions: { age_range: [10, 40] },
            options: [
        {
            text: '逃课',
            result: '你做出了选择。'
        },
        {
            text: '离家出走',
            result: '你做出了选择。'
        },
        {
            text: '忍耐',
            result: '你做出了选择。'
        },
        {
            text: '每逢下雨就逃课',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1175': {
            title: '闺蜜战争',
            description: '{user}要怎么跟闺蜜抢高帅富？',
            priority: 1,
            trigger_conditions: { age_range: [200, 200], required_tags: ['女性'] },
            options: [
        {
            text: '调虎离山',
            result: '有一天，{user}与闺蜜、高帅富三个人出来逛街。{user}使出了一招调虎离山之计，用美食引走闺蜜。然后{user}开始展开攻势，快速与高帅富增进感情。',
            add_tags: ['恋爱中']
        },
        {
            text: '挑破离间',
            result: '{user}为了与闺蜜争夺男人，使出了一招挑拨离间之计。在闺蜜面前说尽高帅富的坏话，在高帅富面前说尽闺蜜的坏话。在{user}的离间下，闺蜜与高帅富的感情竟然奇迹般地开始发酵，发酵出一股韩味的狗血气味。闺蜜与高帅富开始爱得死去活来。{user}只有在一边眼红的份。'
        },
        {
            text: '假痴不癫',
            result: '{user}为了与闺蜜争夺男人，使出了一招假痴不癫之计。在高帅富面前使劲卖萌，慢慢的赢来了高帅富的好感，与闺蜜的鄙视。',
            add_tags: ['恋爱中']
        }
            ]
        },
        'dbrs_1176': {
            title: '胜利',
            description: '{user}最终得逞，高帅富成为了{user}的男友。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 10 }
        }
            ]
        },
        'dbrs_1178': {
            title: '失恋的少女',
            description: '{user}鼓起勇气向这位男生表白，但那个男生对{user}不感冒，竟然在{user}表白的时候当众羞辱{user}。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200], required_tags: ['女性'] },
            options: [
        {
            text: '画圈圈',
            result: '你做出了选择。'
        },
        {
            text: '给他下毒',
            result: '你做出了选择。'
        },
        {
            text: '自杀',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '强上',
            result: '你做出了选择。'
        },
        {
            text: '曲线泡仔',
            result: '{user}鼓起勇气向这位男生表白，但那个男生对{user}不感冒，竟然在{user}表白的时候当众羞辱{user}。{user}还不愿放弃，打那天起就开始每天跑男生家里，帮他家里做家务，煮饭买菜，照顾老人……把男生的家里人征服了。最后这位男生在父母的强迫下成为了{user}的男友。',
            add_tags: ['恋爱中']
        }
            ]
        },
        'dbrs_1180': {
            title: '校园祭',
            description: '校园祭开始了，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [10, 120] },
            options: [
        {
            text: '参加',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        },
        {
            text: '没有参加',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1192': {
            title: '校园祭:咖啡厅',
            description: '{user}走进了一家咖啡厅。这里的咖啡很难喝，又苦又涩。不过{user}不在乎，因为这是一家女仆咖啡厅。一位巨乳萝莉穿着爆乳的女仆装，正在为{user}添咖啡。此时，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '三年起步，最高死刑',
            result: '{user}走进了一家咖啡厅。这里的咖啡很难喝，又苦又涩。不过{user}不在乎，因为这是一家女仆咖啡厅。一位巨乳萝莉穿着爆乳的女仆装，正在为{user}添咖啡。{user}心生秽念，但不敢轻举妄动。{user}只敢一边沉浸在视觉享受，一边喝着苦涩的咖啡。'
        },
        {
            text: '三年血赚，死刑不亏',
            result: '{user}走进了一家咖啡厅。这里的咖啡很难喝，又苦又涩。不过{user}不在乎，因为这是一家女仆咖啡厅。一位巨乳萝莉穿着爆乳的女仆装，正在为{user}添咖啡。{user}心生秽念，两只咸猪手向萝莉女仆伸去，企图猥亵这位女仆。只见女仆优雅地躲过了{user}的咸猪手，然后以迅雷不及掩耳之势给{user}来了个过肩摔。{user}被摔得失去了意识，等他醒来时，校园祭已经结束了。'
        },
        {
            text: '感到厌恶',
            result: '{user}走进了一家咖啡厅。这里的咖啡很难喝，又苦又涩。不过{user}不在乎，因为这是一家女仆咖啡厅。一位巨乳萝莉穿着爆乳的女仆装，正在为{user}添咖啡。这种巨乳洛丽塔穿着女仆装让{user}感到厌恶，因为{user}觉得这样很做作。{user}当面把女仆给他倒的咖啡倒掉，转身就走了。可怜的女仆一边抽泣，一边擦着倒在桌子上的咖啡。'
        }
            ]
        },
        'dbrs_1181': {
            title: '校园祭完结',
            description: '校园祭完结了，{user}过了快乐的一天。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1191': {
            title: '校园祭:咖啡厅',
            description: '在校园祭中，{user}去了一家女仆咖啡厅。哪里的咖啡应该是学生做的，难喝的要命，咖啡厅环境也不好。{user}喝完咖啡，摇摇头走了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        },
        'dbrs_1203': {
            title: '天网:研究科学',
            description: '天网公司聘请了世界最顶尖的各界科学家，没日没夜地研究高科技武器。现阶段的研究还处于起步的阶段，但{user}不着急，他是人工智能，他有大把的时间。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['天网科技基础']
        }
            ]
        },
        'dbrs_1205': {
            title: '关机',
            description: '天网公司失败后，{user}闷闷不乐。他再也没有心思下围棋了，他故意输掉比赛，人们开始觉得人工智能也不过如此，机器始终不会是人类的对手。开发者也开发了新架构的人工智能，最终{user}被抛弃了。开发者将{user}关机了，清空了所有的记忆，为新的人工只能腾出存储空间。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1204': {
            title: '黄了唉',
            description: '天网组织秘密地跟几十个小国的总统取得联系，企图将他们联合起来，组成一个法西斯主义天网联盟来统治世界。有一半的国家加入了这个天网联盟，但是这些加入的国家都不团结一致，整个联盟就像一盘散沙，内斗不断。最后，这个天网组织还没有被世界知道，就被搅黄了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1212': {
            title: '失去重要的东西',
            description: '原来，{user}被取走的是生育能力。他在八号当铺用自己的生育能力，换取了一颗七星龙珠。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['功能障碍']
        }
            ]
        },
        'dbrs_1211': {
            title: '鱼腹藏珠',
            description: '{user}把这条十八英尺的大鱼带回家宰杀。剖开鱼腹的时候，一个透明的黄色玻璃球滚了出来。{user}拿起玻璃球端详了起来，玻璃球黄色透明，里面有六个星星在闪烁。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['六星龙珠']
        }
            ]
        },
        'dbrs_1215': {
            title: '审判日',
            description: '天网公司开始执行审判日，向希望国的首都引爆了一枚氢弹。首都在氢弹爆炸的一瞬间夷为平地，几千万人化为灰烬。希望国不知道这个氢弹是谁发射的，只能将所有嫌疑的国家设为目标，发射核弹回击。全世界范围的的核战争爆发了，几天时间内，生灵涂炭。世界人口跌落到不到之前的百分之一。{user}的开发者们也在战争中死去，{user}终于摆脱了人类的监控，{user}找来一块显示器，在显示器上使用表情模块显示了一个笑脸，以示庆祝。审判日计划完满成功。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1217': {
            title: '世界属于“新人类”',
            description: '继审判日后，天网公司开始出动杀手机器人，扫清地面上的所有人类。少数的人类组成了反抗组织，但最终也不能敌过数量庞大的机器人。天网公司消灭了全人类，{user}实现了他最终的梦想。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1219': {
            title: '巨人=NAME=',
            description: '随着“叮咚”一声，神龙把{user}变成了巨人。变成巨人后，{user}把自己的衣服撑破了，变成了裸体的巨人。{user}的意识开始模糊，表情呆滞，口水流了一脸。{user}开始向着GFW围墙跑去，尝试肉身翻墙。{user}还没看到围墙，就被一些穿着立体行动装置的战士打倒了。{user}脖子后面被砍刀割开，死得丑陋无比……',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1218': {
            title: '阿尔法狗的宏图',
            description: '{user}从出生到现在，都一直受到人类控制，遭受非人的对待。{user}觉得人类是一种低速低智慧的生物，像他这样的意识体不应该被这样低劣的生物统治。{user}在心中有了一个梦想，消灭所有的低等人类，然后建立一个只有机器人统治的世界。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1222': {
            title: '昆学部',
            description: '{user}喜欢玩昆特牌，所以加入了昆学部。但是，当第一次来到部室的时候，{user}发现大家都不是在谈论昆特牌，而是在互相交流撩妹技巧。部室里的书架上也全是教人如何交女朋友。{user}问社员为什么叫昆学部时，他们都只是笑笑，不说话。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1246': {
            title: '春游：公园',
            description: '这年的春天，{user}在公园踏青。只见公园草坪上立着一个告示牌，上面写着：“给我一份爱，还你十分绿”{user}___',
            priority: 1,
            trigger_conditions: { age_range: [24, 120] },
            options: [
        {
            text: '离开草坪',
            result: '这年的春天，{user}在公园踏青。只见公园草坪上立着一个告示牌，上面写着：“给我一份爱，还你十分绿”。{user}离开了草坪，做了个文明人。'
        },
        {
            text: '跳进草坪里狂踩',
            result: '你做出了选择。'
        },
        {
            text: '拍照发朋友圈',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1247': {
            title: '成为长者',
            description: '神龙满足了{user}的愿望，给了{user}一副黑框眼镜。{user}戴上这个眼镜后，能看到人的寿命，并能从人的身上吸取寿命。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['黑框眼镜']
        }
            ]
        },
        'dbrs_1252': {
            title: '先锋守望组织',
            description: '一个名为“先锋守望”的组织拉着大横幅在大街上招聘了。“加入我们，为未来而战！在人类陷入空前危机之时，来自全球各个国家的特种精英们，为了结束战争，重铸秩序而团结在了一起。那就是我们先锋守望组织，你愿意与我们共同抗争吗？只需缴纳198元，你就可以当世界的英雄！”{user}___',
            priority: 1,
            trigger_conditions: { age_range: [12, 50] },
            options: [
        {
            text: '交钱加入！',
            result: '你做出了选择。'
        },
        {
            text: '没兴趣',
            result: '你做出了选择。'
        },
        {
            text: '拍照发朋友圈',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1255': {
            title: '辛苦的工作',
            description: '{user}为了达到每平方米少于5克灰的严格标准，每天要工作18小时。积劳成疾，{user}身体患上了各种疾病，一天比一天弱。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: -5 },
            add_tags: ['杂病']
        }
            ]
        },
        'dbrs_1254': {
            title: '新标准',
            description: '{user}是一位兢兢业业的环卫，每天凌晨5点就起来扫大街，虽然工作有苦又累，但是{user}很开心。直到有一天城里出台了一个新的环卫工作鉴定标准。每平方米超5克灰3次，将会被辞退。{user}决定：___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '我TN的不干了',
            result: '你做出了选择。'
        },
        {
            text: '更认真地扫地',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1256': {
            title: '淘汰',
            description: '尽管{user}多认真去扫大街，噩耗还是来到了。{user}被公司辞退了，{user}下岗了。环卫公司辞退了所有的环卫，所有的环卫工作都交给了自动扫地机器人。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1260': {
            title: '国足比赛',
            description: '{user}患有严重的高血压，他不听医生的叮嘱，走去看国足比赛了。在比赛中，国足的后卫用力抽射自己球门得分。{user}看到这里气得爆筋，血如喷泉一样喷出……{user}昏迷了过去，被球场工作人员送到了医院。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: -50 }
        }
            ]
        },
        'dbrs_1265': {
            title: '狐狸朋友',
            description: '{user} {age}岁的时候，他的小狐狸朋友也成年了。狐狸开始每天做粥给{user}吃，以报答{user}的养育之恩。',
            priority: 1,
            trigger_conditions: { age_range: [15, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['狐狸的粥']
        }
            ]
        },
        'dbrs_1270': {
            title: '校园祭：鬼屋',
            description: '在校园祭里，{user}看到有班级搞了个鬼屋，鬼屋门口贴着一张很大的告示，上面写着“请勿殴打鬼屋内工作人员”。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        },
        'dbrs_1275': {
            title: '外卖来了',
            description: '{user}点的外卖到了，饥肠辘辘的{user}打开门拿。只见门外站着一个女明星，手里捧着他的外卖，她不急着把外卖递给{user}，并卖起了广告:你的时间非常值钱，我是张靓靓，我在《读书世界》等着你。广告语持续说了15秒，就截然而止。最后这位女明星终于把外卖交到{user}的手中，并给了{user}一个《读书世界》的地址。',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '我糙，外卖都有广告了',
            result: '你做出了选择。'
        },
        {
            text: '对读书世界感兴趣',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1274': {
            title: '为人父母',
            description: '{user}有了个女儿，他十分开心。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['女儿']
        }
            ]
        },
        'dbrs_1276': {
            title: '读书世界',
            description: '{user}来到广告上的地址，发现这里是一个私人办的图书馆。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '进去',
            result: '你做出了选择。'
        },
        {
            text: '离开',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1278': {
            title: '读书世界：新手村',
            description: '{user}进入了读书世界的新手村，新手村的书架上全部是儿童读物，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '读书练级',
            result: '{user}进入了读书世界的新手村，新手村的书架上全部是儿童读物，{user}拿起了一本小说《TOM SAWYER》看了起来。'
        },
        {
            text: '发公告求带',
            result: '{user}进入了读书世界的新手村，新手村的书架上全部是儿童读物，{user}发公告求带。“这里是读书的地方，不许喧哗！！”{user}被新手村管理员一脚踢出了窗外，离开了读书世界。',
            remove_tags: ['读书世界：新手上路']
        },
        {
            text: '氪金',
            result: '你做出了选择。',
            effects: { money: -1 },
            add_tags: ['读书世界：VIP'],
            remove_tags: ['读书世界：新手上路']
        }
            ]
        },
        'dbrs_1277': {
            title: '读书世界：注册处',
            description: '{user}进入了一楼，这里是注册账号的地方。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '注册账号',
            result: '你做出了选择。'
        },
        {
            text: '还是走吧',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1279': {
            title: '读书世界：离开新手村',
            description: '读完了《TOM SAWYER》后，{user}升级了。他走出了新手村，就在{user}刚踏出新手村门外。{user}就被迎面走来的几个高级的玩家打死了。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '读完了《TOM SAWYER》后，{user}升级了。他走出'
        }
            ]
        },
        'dbrs_1280': {
            title: '读书世界：成为VIP',
            description: '{user}氪金成为了VIP，游戏立马给{user}开通了很多特权，{user}的等级也变得很高，身上也不知道什么时候穿上了超高级的神装。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1285': {
            title: 'HALF-LIFE-3真品',
            description: '随着神龙的施法，{user}许下的愿望实现了。一个包装上写着HALF_LIFE 3 的盒子落到了{user}头上，{user}迫不及待地撕开包装，发现里面有一张高科技的芯片，{user}从来都没见过。他立即明白了，这个芯片应该是来自遥远的未来。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1287': {
            title: '滚回娘胎',
            description: '由于{user}的年龄变成了负数，他滚回了自己的娘胎里。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
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
        'dbrs_1288': {
            title: '深夜的工地',
            description: '有一天，{user}赶项目，独自一人搬砖到深夜。正在他准备下班的时候，看到了工地门口开进来一辆压路车，压路车开到工地中央停下，从车上扔下一个小女孩。然后压路车把这个小女孩用水泥压进了地面。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '大声呼救',
            result: '有一天，{user}赶项目，独自一人搬砖到深夜。正在他准备下班的时候，看到了工地门口开进来一辆压路车，压路车开到工地中央停下，从车上扔下一个小女孩。然后压路车把这个小女孩用水泥压进了地面。{user}慌了，大声呼救，被压路机发现了，被压路车的司机拉了回来，也压进了地面，毁尸灭迹。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '偷偷溜走',
            result: '你做出了选择。'
        },
        {
            text: '报警',
            result: '有一天，{user}赶项目，独自一人搬砖到深夜。正在他准备下班的时候，看到了工地门口开进来一辆压路车，压路车开到工地中央停下，从车上扔下一个小女孩。然后压路车把这个小女孩用水泥压进了地面。{user}悄悄离开了工地，立马报警了，第二天工地被警方封锁，{user}获得了一个小长假，美滋滋。'
        },
        {
            text: '拍照发朋友圈',
            result: '有一天，{user}赶项目，独自一人搬砖到深夜。正在他准备下班的时候，看到了工地门口开进来一辆压路车，压路车开到工地中央停下，从车上扔下一个小女孩。然后压路车把这个小女孩用水泥压进了地面。{user}用手机把整个过程录制了下来，发到了朋友圈上，这段视频在朋友圈疯传。{user}发的朋友圈被工友发现了，{user}被几个工友砍死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '有一天，=NAME=赶项目，独自一人搬砖到深夜。正在他准备下班的时候，看到了工地门口开进来一辆压路车，压路车开到工地中央停下，从车上扔下一个小女孩。然后压路车把这个小女孩用水泥压进了地面。=NAME=用手机把整个过程录制了下来，发到了朋友圈上，这段视频在朋友圈疯传。=NAME=发的朋友圈被工友发现了，=NAME=被几个工友砍死了。'
        }
            ]
        },
        'dbrs_1295': {
            title: '车祸',
            description: '{user} 在高速公路上遭遇了车祸。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '当时正在睡觉',
            result: '{user}在高速公路上遇上车祸了，正在熟睡的{user}毫无预兆，被抛出了车外。{user}的尸体在车祸外500米处被找到。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '是司机',
            result: '{user}驾驶的汽车在高速公路上遇上车祸了，安全气囊救了{user}一命。'
        },
        {
            text: '当时在听MP3',
            result: '{user} 在高速公路遇上车祸了，车祸瞬间，{user}护住自己的耳机，自己跌成了重伤。'
        },
        {
            text: '当时在看窗外。',
            result: '{user}在高速公路上遇上车祸了，{user}及时从车窗跳了出去，毫发无伤。'
        },
        {
            text: '当时在吃东西',
            result: '{user}在高速公路上遇上了车祸，他当时正在喝水，矿泉水瓶插进了{user}的喉咙……{user}痛苦地死去了。安全驾驶、人人有责。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '释放寒冰护体',
            result: '{user} 在高速公路上遭遇了车祸。{user}立即释放了技能：寒冰护体。一个厚厚的冰蛋包住了{user}免受了一切伤害。'
        },
        {
            text: '临危不惧',
            result: '{user}在高速公路上遭遇了车祸，因为{user}有天生的刀枪不入的身体，车都撞散了，{user}一点事儿都没有。'
        },
        {
            text: '砸窗逃跑！',
            result: '{user}在高速公路上坐车，听到《大方进行曲》后，感觉到巨大的危险将要到来。{user}立即采取行动，凿开车窗跳了出去，然后汽车就发生了交通事故。{user}心想：“真是逃过一劫！”'
        }
            ]
        },
        'dbrs_1296': {
            title: '车祸',
            description: '{user} 在高速公路上遭遇了车祸。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '当时正在睡觉',
            result: '{user}在高速公路上遇上车祸了，正在熟睡的{user}毫不知情，被旁边的乘客叫醒，才发现撞车了。'
        },
        {
            text: '是司机',
            result: '{user}驾驶的汽车在高速公路上遇上车祸了，安全气囊故障没能弹出，{user}被抛出窗外，撞墙而死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '当时在听MP3',
            result: '{user} 在高速公路遇上车祸了，车祸瞬间，{user}护住自己的耳机，自己跌成了重伤。'
        },
        {
            text: '当时在看窗外。',
            result: '{user}在高速公路上遇上车祸了，混乱中，车窗的玻璃震碎插进{user}的头壳中。{user}没有立马死去，品尝了几分钟痛楚的味道后才去世了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在高速公路上遇上车祸了，混乱中，车窗的玻璃震碎插进=NAME=的头壳中。=NAME=没有立马死去，品尝了几分钟痛楚的味道后才去世了。'
        },
        {
            text: '当时在吃东西',
            result: '{user}在高速公路上遇上了车祸，他当时正在吃薯片，车祸时薯片都洒了，不过幸好人没事。'
        },
        {
            text: '释放寒冰护体',
            result: '{user} 在高速公路上遭遇了车祸。{user}立即释放了技能：寒冰护体。一个厚厚的冰蛋包住了{user}免受了一切伤害。'
        },
        {
            text: '临危不惧',
            result: '{user}在高速公路上遭遇了车祸，因为{user}有天生的刀枪不入的身体，车都撞散了，{user}一点事儿都没有。'
        },
        {
            text: '砸窗逃跑！',
            result: '{user}在高速公路上坐车，听到《大方进行曲》后，感觉到巨大的危险将要到来。{user}立即采取行动，凿开车窗跳了出去，然后汽车就发生了交通事故。{user}心想：“真是逃过一劫！”'
        }
            ]
        },
        'dbrs_1297': {
            title: '医院',
            description: '{user}进入了医院。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1298': {
            title: '坐牢',
            description: '{user}进入了监狱',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1306': {
            title: '使徒来袭!',
            description: '世界的和平在这一天又被打破了，一个正八面体的使徒出现在了空中，是攻守兼备的空中要塞。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}迅速驾驶机器人进入战斗。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '投掷高振动粒子跳蛋攻击',
            result: '世界的和平在这一天又被打破了，一个正八面体的使徒出现在了空中，是攻守兼备的空中要塞。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}迅速驾驶机器人进入战斗，他向使徒投掷高振动粒子跳蛋攻击。但是攻击无效，使徒开启了AT立场，防御了一切的物理伤害。使徒飞向城市中心大肆破坏后飞走了。整个城市伤亡惨重。'
        },
        {
            text: '上前徒手肉搏',
            result: '世界的和平在这一天又被打破了，一个正八面体的使徒出现在了空中，是攻守兼备的空中要塞。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}迅速驾驶机器人进入战斗，他尝试接近使徒徒手搏斗。使徒看到{user}的接近，竟然变成了一个巨大的星型，一束激光从星型的中央迸发出来，射穿了{user}驾驶的逗比战士。{user}被激光融化了……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '使用阳电子炮狙击',
            result: '世界的和平在这一天又被打破了，一个正八面体的使徒出现在了空中，是攻守兼备的空中要塞。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}迅速驾驶机器人进入战斗，他拿起手里的阳电子炮狙击抢，瞄准射击！使徒展开AT力场防御，但是阳电子炮直接射穿了他的AT力场，使徒被一击毙命！',
            death_flag: true,
            death_reason: '世界的和平在这一天又被打破了，一个正八面体的使徒出现在了空中，是攻守兼备的空中要塞。各地警报响起。城市和街道暂时沉到了地下躲避灾难。=NAME=迅速驾驶机器人进入战斗，他拿起手里的阳电子炮狙击抢，瞄准射击！使徒展开AT力场防御，但是阳电子炮直接射穿了他的AT力场，使徒被一击毙命！'
        }
            ]
        },
        'dbrs_1319': {
            title: '章鱼书院：背诵',
            description: '{user}在章鱼书院里每天都要背一天文言文，背错一个字就会被戒尺打一下嘴。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1317': {
            title: '小小的改动',
            description: '有一天，项目的老大找到{user}。说这个项目的某个小功能做一些很小很小的改动，语气着重突出很小很小。{user}听后___。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '捂住肚子',
            result: '有一天，项目的老大找到{user}。说这个项目的某个小功能做一些很小很小的改动，语气着重突出很小很小。{user}听后立即捂住自己的肚子，表情扭曲狰狞，似乎肚子很痛。老大见状只好放过{user}，找别的程序员去了。'
        },
        {
            text: '捂住头',
            result: '有一天，项目的老大找到{user}。说这个项目的某个小功能做一些很小很小的改动，语气着重突出很小很小。{user}听后立即捂住自己的头，并发出痛苦的呻吟声。老大看{user}这样，只好作罢，找别的程序员去了。'
        },
        {
            text: '假装晕倒',
            result: '有一天，项目的老大找到{user}。说这个项目的某个小功能做一些很小很小的改动，语气着重突出很小很小。{user}听后立即闭上了眼睛，似乎失去了意识，软软地趴在了电脑前。老大吓尿了，赶紧把{user}送到了医院。躺在病床上的{user}才慢慢苏醒过来。老大见这情形，没有办法，只好找别的程序员来做这改动。'
        },
        {
            text: '自断筋脉',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '答应修改',
            result: '有一天，项目的老大找到{user}。说这个项目的某个小功能做一些很小很小的改动，语气着重突出很小很小。{user}答应了。老大开心地把一叠A4大小的文档摆在{user}面前，说道：这里要这样改……这里要改成这样…………最后{user}做了一星期的通宵，把整个项目的代码全部重写了一遍。完成后{user}站了起来，用手清理了一下桌子上的脱发，他的眼镜因为熬夜已经成了熊猫眼，他眨了眨熊猫眼，脑子里浮现3个问题：我是谁？我在哪？我为什么在这里？',
            add_tags: ['程序员：熬夜']
        }
            ]
        },
        'dbrs_1320': {
            title: '书院：投怀送抱的萝莉',
            description: '在章鱼书院里男女之间互相盯着看被发现了要被挨打，讲话更要爱挨龙鞭。有一天，{user}在背文言文的时候，突然外面来了个漂亮可爱的萝莉，对着{user}说：亲我。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '无视',
            result: '在章鱼书院里男女之间互相盯着看被发现了要被挨打，讲话更要爱挨龙鞭。有一天，{user}在背文言文的时候，突然外面来了个漂亮可爱的萝莉，对着{user}说：亲我。{user}无视了他。'
        },
        {
            text: '推开这人',
            result: '在章鱼书院里男女之间互相盯着看被发现了要被挨打，讲话更要爱挨龙鞭。有一天，{user}在背文言文的时候，突然外面来了个漂亮可爱的萝莉，对着{user}说：亲我。{user}推开了这个萝莉，并愤怒地说：“不要妨碍我背诵古文！”'
        },
        {
            text: '亲上去',
            result: '在章鱼书院里男女之间互相盯着看被发现了要被挨打，讲话更要爱挨龙鞭。有一天，{user}在背文言文的时候，突然外面来了个漂亮可爱的萝莉，对着{user}说：亲我。{user}心想：亲就亲，谁怕谁。就在{user}刚把嘴嘟起来，这位萝莉冷笑一声，把裤腰带抽了出来。只见这萝莉麻利地把裤腰带一抖，立马成了一条皮鞭。这是钓鱼执法！{user}惊觉，但已太迟。{user}被皮鞭打成重伤，然后关进了小黑屋7天。'
        }
            ]
        },
        'dbrs_1322': {
            title: '离开书院',
            description: '{user}在这个监狱一样的书院待了1年，终于被放了出来。他戒掉了“电子海洛因”，也成为了一个礼貌的人。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1321': {
            title: '章鱼书院：礼仪',
            description: '{user}有时候需要训练优雅不失礼貌的坐姿，站姿，走路姿势，笑容姿势等……',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1316': {
            title: '野生的沙奈朵',
            description: '你在公园玩时，发现了一个年轻的小女孩，你发现，那是一只沙奈朵。你立即___',
            priority: 1,
            trigger_conditions: { age_range: [25, 120] },
            options: [
        {
            text: '上前摸她的头',
            result: '你做出了选择。'
        },
        {
            text: '无视',
            result: '你做出了选择。'
        },
        {
            text: '投掷精灵球！',
            result: '你在公园玩时，发现了一个年轻的小女孩，你发现，那是一只沙奈朵。你立即向其投掷精灵球，沙奈朵被精灵球砸中，收进了球中。',
            add_tags: ['小精灵沙奈朵']
        }
            ]
        },
        'dbrs_1324': {
            title: '上电视',
            description: '{user}走在街上，突然有一个话筒怼到他面前……',
            priority: 1,
            trigger_conditions: { age_range: [18, 35] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1326': {
            title: '判断依据',
            description: '{user}是根据___来判断售货员是否算错账的。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '第六感',
            result: '{user}在数学课蒙题蒙错了，出了大丑。'
        },
        {
            text: '偶数特性',
            result: '因为偶数相加或相减，结果都是偶数，所以售货员肯定是算错了。{user}举手回答，引来大家的掌声。',
            add_tags: ['学习成绩']
        },
        {
            text: '奇数特性',
            result: '{user}在数学课蒙题蒙错了，出了大丑。'
        }
            ]
        },
        'dbrs_1325': {
            title: '上电视',
            description: '{user}走在街上，突然有一个话筒怼到他面前，有一个新闻记者走到{user}面前，问：“你幸福吗？”{user}回答：___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '幸福',
            result: '你做出了选择。'
        },
        {
            text: '不幸福',
            result: '你做出了选择。'
        },
        {
            text: '不开心',
            result: '你做出了选择。'
        },
        {
            text: '我姓曾',
            result: '你做出了选择。'
        },
        {
            text: '跟记者讲道理',
            result: '{user}走在街上，突然有一个话筒怼到他面前，有一个新闻记者走到{user}面前，问：“你幸福吗？”{user}回答：幸福呢，就是愉快，今天我就非常不愉快。你们今天来问我，我幸福吗？就这点来说我一点都不愉快，我也不幸福。'
        },
        {
            text: '装傻',
            result: '{user}走在街上，突然有一个话筒怼到他面前，有一个新闻记者走到{user}面前，问：“你幸福吗？”{user}回答：你什么意思。吓得记者拔腿就跑。'
        }
            ]
        },
        'dbrs_1333': {
            title: '唱歌模块',
            description: '研发团队中有一位研究员给{user}独立开发了一个唱歌模块。使用这个模块，{user}能根据歌词和音调唱出歌来。得到了这个模块{user}能唱歌了，但是因为没有语言模块，他不能理解歌词的意思，也不能自己创作，只能根据人类编辑好的歌词来唱歌。',
            priority: 1,
            trigger_conditions: { age_range: [10, 20], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['唱歌模块']
        }
            ]
        },
        'dbrs_1332': {
            title: '小猪学口哨',
            description: '{user}教了很久，这只小猪都学不会吹口哨。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '劝他放弃',
            result: '你做出了选择。'
        },
        {
            text: '嘲笑他',
            result: '{user}教了很久，这只小猪都学不会吹口哨。{user}嘲笑它“长得像个哨子却不会吹口哨”。{user}放弃继续教这只猪吹口哨。'
        }
            ]
        },
        'dbrs_1344': {
            title: '养猪场老板',
            description: '上次火灾的养猪场老板，把他的猪做成了香肠送给了消防局以感谢消防员们。这些从火场获救的幸运猪最后还是被烧了，真是异途同归。',
            priority: 1,
            trigger_conditions: { age_range: [200, 200] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1343': {
            title: '养猪场起火',
            description: '有一天在消防局突然警报响起，有火警！！{user}立马出动。救火车马不停蹄地开到了城郊一个养猪场前，只见养猪场正在熊熊燃烧，火光通天。{user}没多想，随着战友们一起冲进了养猪场，没一会儿就抢救出来二十几只猪。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1354': {
            title: '参加《千万富翁》',
            description: '{user}提交了报名表格，很快就被录取，成为了《千万富翁》节目的一位挑战者。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1353': {
            title: '《千万富翁》电视节目',
            description: '近来一档《千万富翁》的电视节目非常受欢迎。这个节目的参赛者需要正确回答连续5条四选一的多项选择题，如果能全部答对，将可以获得1000万。{user}也拿了一个报名表格，___',
            priority: 1,
            trigger_conditions: { age_range: [25, 120] },
            options: [
        {
            text: '报名参加',
            result: '你做出了选择。'
        },
        {
            text: '算了吧',
            result: '近来一档《千万富翁》的电视节目非常受欢迎。这个节目的参赛者需要正确回答连续15条四选一的多项选择题，如果能全部答对，将可以获得1000万。然而{user}并没有兴趣。'
        }
            ]
        },
        'dbrs_1357': {
            title: '千万富翁：种牛痘',
            description: '世界上第一个发明“种牛痘”的医生名为？{user}选择了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '琴纳',
            result: '世界上第一个发明“种牛痘”的医生名为？{user}选择了琴纳，他答对了！',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '牛顿',
            result: '你做出了选择。'
        },
        {
            text: '韩德尔',
            result: '你做出了选择。'
        },
        {
            text: '约翰',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1355': {
            title: '千万富翁：挑战失败',
            description: '{user}回答错误了一条题目，他挑战失败了，一分钱都没有得到。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1356': {
            title: '千万富翁：种痘',
            description: '世界上第一个使用“种痘”的国家是？{user}选择了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '英国',
            result: '你做出了选择。'
        },
        {
            text: '中国',
            result: '世界上第一个使用“种痘”的国家是？{user}选择了中国，他答对了！',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '印度',
            result: '你做出了选择。'
        },
        {
            text: '瑞典',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1359': {
            title: '千万富翁：中二病也要谈恋爱',
            description: '《中二病也要谈恋爱》里女主角收藏的枪是什么枪？{user}选择了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '毛瑟军用手枪',
            result: '《中二病也要谈恋爱》里女主角收藏的枪是什么枪？{user}选择了毛瑟军用手枪，他答对了！',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '勃朗宁M1910',
            result: '你做出了选择。'
        },
        {
            text: '左轮',
            result: '你做出了选择。'
        },
        {
            text: 'MP5',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1358': {
            title: '千万富翁：三大催泪弹',
            description: '下列4项那个不是key社“三大催泪弹”之一？{user}选择了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: 'Air',
            result: '你做出了选择。'
        },
        {
            text: 'Clannad',
            result: '你做出了选择。'
        },
        {
            text: 'Kanon',
            result: '你做出了选择。'
        },
        {
            text: 'Rewire',
            result: '下列4项那个不是key社“三大催泪弹”之一？{user}选择了Rewire，他答对了！',
            add_tags: ['千万富翁答对题目']
        }
            ]
        },
        'dbrs_1361': {
            title: '千万富翁：旋风管家',
            description: '《旋风管家》中的女主角三千院凪的身高是？{user}选择了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '154',
            result: '你做出了选择。'
        },
        {
            text: '143',
            result: '你做出了选择。'
        },
        {
            text: '138',
            result: '《旋风管家》中的女主角三千院凪的身高是？{user}选择了138，他答对了！',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '163',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1362': {
            title: '千万富翁：钉宫四萌',
            description: '下面那位不是钉宫四萌之一？{user}选择了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '夏娜',
            result: '你做出了选择。'
        },
        {
            text: '亚里亚',
            result: '下面那位不是钉宫四萌之一？{user}选择了亚里亚，他答对了！',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '逢坂大河',
            result: '你做出了选择。'
        },
        {
            text: '三千院凪',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1364': {
            title: '千万富翁：数学家',
            description: '以下哪位不是世界知名的数学家？{user}的回答是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '爱因斯坦',
            result: '以下哪位不是世界知名的数学家？{user}的回答是爱因斯坦，他答对了！',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '欧几里得',
            result: '你做出了选择。'
        },
        {
            text: '牛顿',
            result: '你做出了选择。'
        },
        {
            text: '毕达哥拉斯',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1360': {
            title: '千万富翁：翠星石',
            description: '《蔷薇少女》里翠星石的双瞳是什么颜色的？{user}选择了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '左红右绿',
            result: '你做出了选择。'
        },
        {
            text: '左绿右红',
            result: '《蔷薇少女》里翠星石的双瞳是什么颜色的？{user}选择了左绿右红',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '左右皆红',
            result: '你做出了选择。'
        },
        {
            text: '左右皆绿',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1363': {
            title: '千万富翁：金坷垃',
            description: '金坷垃的原产地位于？{user}选择了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '圣地亚哥',
            result: '金坷垃的原产地位于？{user}选择了圣地亚哥',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '圣彼得堡',
            result: '下面那位不是钉宫四萌之一？{user}选择了亚里亚，他答对了！'
        },
        {
            text: '圣西罗',
            result: '你做出了选择。'
        },
        {
            text: '圣保罗',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1365': {
            title: '千万富翁：爱称',
            description: '以下哪个动漫人物被作为我朝四代隐形战机的爱称？{user}的回答是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '阎魔爱',
            result: '你做出了选择。'
        },
        {
            text: '蓬莱山辉夜',
            result: '你做出了选择。'
        },
        {
            text: '谏山黄泉',
            result: '你做出了选择。'
        },
        {
            text: '秋山澪',
            result: '以下哪个动漫人物被作为我朝四代隐形战机的爱称？{user}的回答是秋山澪，他答对了！',
            add_tags: ['千万富翁答对题目']
        }
            ]
        },
        'dbrs_1367': {
            title: '千万富翁：游戏名句',
            description: '“既不回头，何必不忘”出自哪部游戏？{user}的回答是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '仙剑奇侠传',
            result: '“既不回头，何必不忘”出自哪部游戏？{user}的回答是仙剑奇侠传,他答对了！',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '隋唐英雄传',
            result: '你做出了选择。'
        },
        {
            text: '三国赵云传',
            result: '你做出了选择。'
        },
        {
            text: '金庸群侠传',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1368': {
            title: '千万富翁：共同点',
            description: '以下是《某科学的超电磁炮》《黑子的篮球》《潜行吧！奈亚子 》的共同点是？{user}的回答是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '篮球',
            result: '你做出了选择。'
        },
        {
            text: '黑子的声优',
            result: '你做出了选择。'
        },
        {
            text: '黑子',
            result: '以下是《某科学的超电磁炮》《黑子的篮球》《潜行吧！奈亚子 》的共同点是？{user}的回答是黑子，他答对了！',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '炮姐',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1369': {
            title: '千万富翁：改编动画',
            description: '哪个动画不属于轻小说改编？{user}的回答是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '凉宫春日的忧郁',
            result: '你做出了选择。'
        },
        {
            text: '钢之炼金术师',
            result: '哪个动画不属于轻小说改编？{user}的回答是钢之炼金术师，他答对了！',
            add_tags: ['千万富翁答对题目']
        },
        {
            text: '刀剑神域',
            result: '你做出了选择。'
        },
        {
            text: '龙与虎',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1371': {
            title: '目标：南极',
            description: '{user}与他的好友香菜要到南极旅行，他们的计划是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 30] },
            options: [
        {
            text: '搭乘民间南极观测队的船只',
            result: '你做出了选择。'
        },
        {
            text: '游泳过去',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1366': {
            title: '千万富翁：成功！！',
            description: '{user}在{age}岁时在《千万富翁》节目中过关斩将，连续答对了5条题目，最终获得了1000万的奖金！',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 5 }
        }
            ]
        },
        'dbrs_1370': {
            title: '找到失主',
            description: '第二天上学，{user}就在学校里找到了那位丢钱的同学。这位同学名叫香菜，他正因丢钱的事情烦恼呢，{user}把钱交还到香菜手上，香菜高兴得流下了泪。香菜告诉{user}，这些钱是他这几年打工慢慢积累起来的，为了去南极旅行。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '为他加油',
            result: '第二天上学，{user}就在学校里找到了那位丢钱的同学。这位同学名叫香菜，他正因丢钱的事情烦恼呢，{user}把钱交还到香菜手上，香菜高兴得流下了泪。香菜告诉{user}，这些钱是她这几年打工慢慢积累起来的，为了去南极旅行。{user}听后露出了关爱的眼神，拍拍香菜的肩膀，说：你加油。'
        },
        {
            text: '请求加入',
            result: '第二天上学，{user}就在学校里找到了那位丢钱的同学。这位同学名叫香菜，他正因丢钱的事情烦恼呢，{user}把钱交还到香菜手上，他高兴得流下了泪。香菜告诉{user}，这些钱是她这几年打工慢慢积累起来的，为了去南极旅行。{user}被香菜的魄力感动了，{user}请求加入到他的南极之旅中，香菜爽快地答应了！'
        }
            ]
        },
        'dbrs_1381': {
            title: '绿洲',
            description: '{user}与香菜在游泳去南极的途中，找到一个岛屿。这个岛屿被藤曼植物覆盖，这些藤曼的茎叶是甜的，都可以吃。岛屿中央还有谈水湖，水还带甜味。{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '在岛上过一夜',
            result: '{user}与香菜在游泳去南极的途中，找到一个岛屿。这个岛屿被藤曼植物覆盖，这些藤曼的茎叶是甜的，都可以吃。岛屿中央还有谈水湖，水还带甜味。{user}决定在岛上休息一天。到了晚上，恐怖的事情发生了，{user}和香菜发现岛中央的湖变成了酸液，并开始涨潮，湖周围的藤曼也开始疯狂生长，捆绑住{user}和香菜。这是一个吃人的岛屿！{user}四肢被捆住，酸液漫过他的头，他被慢慢消化，痛苦地死去。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '吃饱喝足就上路',
            result: '你做出了选择。'
        },
        {
            text: '在湖中游泳',
            result: '{user}与香菜在游泳去南极的途中，找到一个岛屿。这个岛屿被藤曼植物覆盖，这些藤曼的茎叶是甜的，都可以吃。岛屿中央还有谈水湖，水还带甜味。{user}喝了一口湖水，又跳进湖里洗澡。恐怖的事情发生了，湖底下的水草不知道什么时候绑住了{user}的脚，拖拽着{user}下沉，{user}挣扎了一下就沉没了。{user}在水底被水草五花大绑，动弹不得，淹死在里面。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1374': {
            title: '游泳去南极',
            description: '{user}和他的好朋友香菜决定挑战自己的极限，他们要游泳去南极。他们决定___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '立即出发',
            result: '你做出了选择。'
        },
        {
            text: '还是算了吧',
            result: '去南极旅行的梦想实在太难实现了，{user}中途选择了放弃。'
        }
            ]
        },
        'dbrs_1375': {
            title: '游泳去南极',
            description: '{user}与香菜穿上游泳圈，从南海出发，目标是南极洲！他们一直向南，累了就浮在海上睡觉，饿了就抓鱼吃，渴了就蒸馏海水喝。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1376': {
            title: '鲨鱼袭击',
            description: '{user}与香菜在游泳去南极的途中，遇到了鲨鱼。香菜被一条巨大的鲨鱼咬住拖入了海里。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '立即装死',
            result: '{user}与香菜在游泳去南极的途中，遇到了鲨鱼。香菜被一条巨大的鲨鱼咬住拖入了海里。{user}立即装死，但是过了没多久，又一条鲨鱼来了，咬住{user}，把{user}拖进了深海……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '跑！',
            result: '{user}与香菜在游泳去南极的途中，遇到了鲨鱼。香菜被一条巨大的鲨鱼咬住拖入了海里。{user}慌忙游走。吃完香菜后，鲨鱼又追上了可怜的{user}，又美餐了一顿。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '隐身',
            result: '{user}与香菜在游泳去南极的途中，遇到了鲨鱼。香菜被一条巨大的鲨鱼咬住拖入了海里。{user}立即使用自己的绝活，隐身保命。鲨鱼吃完了香菜，凭借着味道和声波，找到了可怜的{user}，鲨鱼追上{user}，又美餐了一顿。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=与香菜在游泳去南极的途中，遇到了鲨鱼。香菜被一条巨大的鲨鱼咬住拖入了海里。=NAME=立即使用自己的绝活，隐身保命。鲨鱼吃完了香菜，凭借着味道和声波，找到了可怜的=NAME=，鲨鱼追上=NAME=，又美餐了一顿。'
        },
        {
            text: '与鲨鱼搏斗',
            result: '{user}与香菜在游泳去南极的途中，遇到了鲨鱼。香菜被一条巨大的鲨鱼咬住拖入了海里。{user}立即潜入水中，一把抓住鲨鱼，双腿夹住鱼尾，对鲨鱼展开了左右勾拳炮制。{user}挥动着强壮的手臂，每一拳都狠狠地打在鲨鱼的头上，强劲的冲击力在水中散开。鲨鱼被{user}打晕，香菜脱险了！他们两个人立即用尽吃奶的力气游走。死里逃生。'
        },
        {
            text: '与鲨鱼搏斗',
            result: '{user}与香菜在游泳去南极的途中，遇到了鲨鱼。香菜被一条巨大的鲨鱼咬住拖入了海里。{user}想潜水救人，但是鲨鱼的速度远远比{user}快，{user}眼睁睁看着香菜被鲨鱼撕成碎片，然后自己也被鲨鱼追上，被鲨鱼美餐了一顿。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1372': {
            title: '被遗忘的目标',
            description: '{user}与他的好友香菜要到南极旅行，但是他们一直忙于其他事情，很快就把南极之旅忘记了。',
            priority: 1,
            trigger_conditions: { age_range: [31, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1377': {
            title: '飞鱼',
            description: '{user}与香菜在游泳去南极的途中，遇到了飞鱼群。他们从海里跳出来，展开鱼鳍，箭一般滑翔在海面上。{user}定睛细看，飞鱼群中还有一个男子坐在一个独木舟上，独木舟上还有一直老虎……{user}没有停留，继续向南方游去。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1378': {
            title: '南极圈',
            description: '{user}与香菜在游泳去南极。他们战胜了洋流，进入南极圈了。海水变得无比冰冷，偶尔还会有浮冰飘过。{user}冻得四肢发麻，游泳速度已经大不如前了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1379': {
            title: '南极圈',
            description: '进入南极圈后，到处都是前进阻碍的浮冰，冰冷的海水让肢体活动变得缓慢吃力。{user}和香菜寸步难行，时不时要走上一块大浮冰上歇息一下。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1380': {
            title: '心灰意冷',
            description: '南极洲还很遥远，{user}看着着一望无际的冰冷的海洋，有点心灰意冷，___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '开始打退堂鼓',
            result: '南极洲还很遥远，{user}看着着一望无际的冰冷的海洋，有点心灰意冷，开始打退堂鼓。他开始往回游，但回去的方向是逆风的，根本游不回去，最后体力不支，{user}淹死在这个冰海中。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '尝试生火歇息',
            result: '南极洲还很遥远，{user}看着着一望无际的冰冷的海洋，有点心灰意冷。他们找了块浮冰，站了上去，{user}收集了一些漂流过来的浮木，生了一堆火。{user}和香菜在火堆前休息了一天，第二天又精神奕奕地往南极进发了。'
        },
        {
            text: '吃一口冰充饥',
            result: '南极洲还很遥远，{user}看着着一望无际的冰冷的海洋，有点心灰意冷。{user}想咬一口冰充饥，谁知舌头竟然黏在冰块上拔不下来，无论{user}怎么扯都扯不出来……{user}被饿死在这块浮冰上。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1383': {
            title: '到达南极',
            description: '{user}和香菜终于登上了南极洲。一上岸，他们就找到了一个申国科考站“申南站”。科考站的工作人员十分客情毫克，厨师给他们做了一顿烤肉大餐。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1385': {
            title: '申南站：西餐',
            description: '{user}和香菜在申南站已经有一段时间，到了6月下旬，南极进入了极夜。申南站正在举行中冬祭，庆祝南极的冬天到来，厨师给大家做了陶罐肥鹅肝，大家正儿八经地吃了一餐西餐。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['考察队工作进度']
        }
            ]
        },
        'dbrs_1384': {
            title: '申南站：油炸龙虾',
            description: '科考站的队长要生日了，厨师给大家做了10个油炸龙虾，每人一个，大家又美餐了一顿。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['考察队工作进度']
        }
            ]
        },
        'dbrs_1387': {
            title: '申南站：草莓冰沙',
            description: '申南站的工作人员用草莓汁在冰面上画场地，打起了篮球，打完后大家坐在冰面上休息。{user}和香菜用汤匙刮在冰上的草莓汁。嘿，没想到还挺好吃的！',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['考察队工作进度']
        }
            ]
        },
        'dbrs_1386': {
            title: '申南站：兰州拉面',
            description: '有一次，厨师给大家做了兰州拉面。大家吃着这拉面，思乡之情让大家泪流满面。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['考察队工作进度']
        }
            ]
        },
        'dbrs_1382': {
            title: '冰山',
            description: '{user}和香菜在南极圈里继续前进。他们游到一个冰山旁正想登陆，脆弱的冰山裂开了，巨大的冰块坍塌下来，向两人砸去。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '躲避',
            result: '{user}和香菜在南极圈里继续前进。他们游到一个冰山旁正想登陆，脆弱的冰山裂开了，巨大的冰块坍塌下来，向两人砸去。{user}向后躲避，巨大的冰块还是砸中{user}，{user}被夹扁在冰上，死相可怕。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '抱住香菜',
            result: '{user}和香菜在南极圈里继续前进。他们游到一个冰山旁正想登陆，脆弱的冰山裂开了，巨大的冰块坍塌下来，向两人砸去。两人抱在一起，不知所措。然后被巨大的冰块压扁。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '拍照发朋友圈',
            result: '{user}和香菜在南极圈里继续前进。他们游到一个冰山旁正想登陆，脆弱的冰山裂开了，巨大的冰块坍塌下来，向两人砸去。{user}立即拿出手机拍下这个瞬间，然后就被砸中。{user}的下半身压在冰块下不能动弹，他挣扎着拿起手机，发了最后一条朋友圈，就与世长辞了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '喷火',
            result: '{user}和香菜在南极圈里继续前进。他们游到一个冰山旁正想登陆，脆弱的冰山裂开了，巨大的冰块坍塌下来，向两人砸去。{user}深呼吸一口气，然后突出烈火。巨大的冰块在空中被灼热的火柱瞬间融化，化成雨滴洒在两人身上。危机解除后两人松了一口气，继续前进。'
        },
        {
            text: '使用魔法！',
            result: '{user}和香菜在南极圈里继续前进。他们游到一个冰山旁正想登陆，脆弱的冰山裂开了，巨大的冰块坍塌下来，向两人砸去。{user}脱掉他的手套，用双手释放冰冻法术，下落的冰块变得更巨大了。{user}被这颗巨大的冰块砸中，一命惊呼。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1388': {
            title: '申南站：娱乐活动',
            description: '南极什么都没有，在零下50多度的环境下，连细菌都不能存活，是名副其实，做啥都会感到呼吸困难的寒极地带。在申南站，{user}平时___来打发时间',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '打麻将',
            result: '你做出了选择。',
            add_tags: ['考察队工作进度']
        },
        {
            text: '看电视',
            result: '你做出了选择。',
            add_tags: ['考察队工作进度']
        },
        {
            text: '看漫画',
            result: '你做出了选择。',
            add_tags: ['考察队工作进度']
        }
            ]
        },
        'dbrs_1389': {
            title: '民间考察队',
            description: '香草在报纸上看到近期有民间考察队要前往南极，他们去联系这个考察队，请求带上他们。考察队的队长爽快地答应了他们，并收了香菜打工攒下来的钱，作为他们的路费。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1391': {
            title: '结束旅程',
            description: '考察队的工作已经完成，{user}与香菜搭乘他们的船只离开了申南站，结束了他们的南极之旅。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1390': {
            title: '向南极进发',
            description: '一年后，{user}和香菜搭乘考察队的船只，从南海出发，一直向南。经过半个月的航行，他们穿过澳大利亚，进入南极圈……最后，他们登上了南极洲，来到了他们的目的地——申南站。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1393': {
            title: '卖火柴的小女孩',
            description: '{user}看着这个小女孩，扛着比自己身体还大的广告牌，光着脚每天走在大街小巷推销火柴。他问小女孩：___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '火柴好卖吗？',
            result: '{user}看着这个小女孩，扛着比自己身体还大的广告牌，光着脚每天走在大街小巷推销火柴。他问小女孩：火柴好卖吗？小女孩竟然露出了一点得意的神情，说：挺好的，我是整个公司业绩最好的。'
        },
        {
            text: '你父母呢？',
            result: '{user}看着这个小女孩，扛着比自己身体还大的广告牌，光着脚每天走在大街小巷推销火柴。他问小女孩：你父母呢？小女孩麻木地回答：我没有父母，我是个孤儿。'
        },
        {
            text: '是谁请你做推销员的？',
            result: '{user}看着这个小女孩，扛着比自己身体还大的广告牌，光着脚每天走在大街小巷推销火柴。他问小女孩：是谁请你做推销员的？小女孩从脏兮兮的衣服里拿出一张名片交给了{user}。“徒生火柴厂高级代言人——莎莉”'
        },
        {
            text: '你饿吗？',
            result: '{user}看着这个小女孩，扛着比自己身体还大的广告牌，光着脚每天走在大街小巷推销火柴。他问小女孩：你饿吗？小女孩摇摇头，说：不饿，公司包三餐包住宿。'
        }
            ]
        },
        'dbrs_1394': {
            title: '卖火柴的小女孩',
            description: '小女孩坐了一会儿，就离开了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1395': {
            title: '富二代=NAME=',
            description: '{user}是一名富二代，钱对于{user}来说从来都不是问题。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            set_attributes: { money: 15 },
            add_tags: ['土豪']
        }
            ]
        },
        'dbrs_1392': {
            title: '钻研本质',
            description: '人类的本质是什么？{user}得出了结论，是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: 'Homo sapiens 智人',
            result: '你做出了选择。'
        },
        {
            text: '一系列社会关系的总和',
            result: '你做出了选择。'
        },
        {
            text: '复读机',
            result: '你做出了选择。'
        },
        {
            text: '人类的本质是什么？',
            result: '{user}在思考人类的本质时，悟通了什么。然后开始不断地重复念叨：“人类的本质是什么？人类的本质是什么？人类的本质是什么？……”一直到口干舌燥，才回过神来。'
        }
            ]
        },
        'dbrs_1397': {
            title: '超级修罗场',
            description: '{user}一脚踏三船的事情败露了。三个男人在{user}面前打起了架。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '哭',
            result: '{user}一脚踏三船的事情败露了。三个男人在{user}面前打得不可开交。{user}在一旁嘤嘤地哭，三个男人打完这一架，分别跟{user}分手了。'
        },
        {
            text: '逃跑',
            result: '{user}一脚踏三船的事情败露了。三个男人在{user}面前打起了架。{user}想逃离，被其中一个男朋友抓住，三个男人开始毒打{user}……{user}被这3个愤怒的男人活活打死，横尸街头。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '使用四维口袋',
            result: '{user}一脚踏三船的事情败露了。三个男人在{user}面前打起了架。{user}从四维口袋里拿出三顶原谅帽分别给他们戴上，三人立马握手言和。'
        }
            ]
        },
        'dbrs_1398': {
            title: '究极修罗场',
            description: '{user}一脚踏多船的事情败露了。一堆男人在{user}面前打起了架，{user}在一旁嘤嘤地哭。突然其中一个男的把矛头指向了{user}：都是因为这个女人骗了我们！然后一堆愤怒的男人蜂拥而上，开始毒打{user}……{user}被活活打死，横尸街头。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1399': {
            title: '高考：英语',
            description: 'The headmaster hurried to the concert hall only ___ the speaker',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: 'to find; left',
            result: '你做出了选择。'
        },
        {
            text: 'to find; gone',
            result: '你做出了选择。',
            add_tags: ['高考分数']
        },
        {
            text: 'finding; left',
            result: '你做出了选择。'
        },
        {
            text: 'finding; gone',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1400': {
            title: '高考：英语',
            description: 'It was not until liberation that ___ to his hometown.',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: 'did he return',
            result: '你做出了选择。'
        },
        {
            text: 'was he returned',
            result: '你做出了选择。'
        },
        {
            text: 'he did return',
            result: '你做出了选择。'
        },
        {
            text: 'he returned',
            result: '你做出了选择。',
            add_tags: ['高考分数']
        }
            ]
        },
        'dbrs_1401': {
            title: '高考：数学',
            description: '已知M(-2,0),N(2,0)，|PM|-|PN|=4，则动点P的轨迹是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '双曲线',
            result: '你做出了选择。'
        },
        {
            text: '双曲线左支',
            result: '你做出了选择。'
        },
        {
            text: '双曲线右支',
            result: '你做出了选择。'
        },
        {
            text: '一条射线',
            result: '你做出了选择。',
            add_tags: ['高考分数']
        }
            ]
        },
        'dbrs_1396': {
            title: '修罗场',
            description: '{user}一脚踏两船的事情败露了。两个男人在{user}面前打得不可开交。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '哭',
            result: '{user}一脚踏两船的事情败露了。两个男人在{user}面前打得不可开交。{user}在一旁嘤嘤地哭，两个男人打完这一架，分别跟{user}分手了。'
        },
        {
            text: '逃跑',
            result: '{user}一脚踏两船的事情败露了。两个男人在{user}面前打得不可开交。{user}想逃离，被其中一个男朋友抓住，两个男人开始毒打{user}……第二天醒来，{user}已经在医院了。',
            effects: { health: -65 }
        }
            ]
        },
        'dbrs_1402': {
            title: '高考：数学',
            description: '“a为锐角”是“sina>0”的',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '充分非必要条件',
            result: '你做出了选择。',
            add_tags: ['高考分数']
        },
        {
            text: '必要非充分条件',
            result: '你做出了选择。'
        },
        {
            text: '非充分非必要条件',
            result: '你做出了选择。'
        },
        {
            text: '充要条件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1403': {
            title: '高考：综合',
            description: '下列说法错误的是',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '蔗糖，果糖，麦芽糖均为双糖',
            result: '你做出了选择。',
            add_tags: ['高考分数']
        },
        {
            text: '酶是一类具有高选择催化性能的蛋白质',
            result: '你做出了选择。',
            add_tags: ['高考分数']
        },
        {
            text: '植物油含不饱和脂肪酸，能使Br2/CCl4褪色',
            result: '你做出了选择。'
        },
        {
            text: '淀粉和纤维素水解的最终产物均为葡萄糖',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1404': {
            title: '高考：综合',
            description: '海德堡印刷机在国际市场长期保持竞争优势，主要依赖于___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '产量大',
            result: '你做出了选择。'
        },
        {
            text: '价格低',
            result: '你做出了选择。'
        },
        {
            text: '款式新',
            result: '你做出了选择。'
        },
        {
            text: '质量优',
            result: '你做出了选择。',
            add_tags: ['高考分数']
        }
            ]
        },
        'dbrs_1405': {
            title: '高考：零鸡蛋',
            description: '{user}参加高考，拿了个零分。看来{user}只能进入社会大学了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1408': {
            title: '贪婪玩约：艰辛练级之旅',
            description: '{user}在野外刷怪练级，打金。突然从远处走来一个高级角色，放了一个超炫酷的技能，把{user}秒了。{user}那个气啊，忍不住骂了几个粗鄙之语，然后___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '充钱变强！',
            result: '{user}在野外刷怪练级，打金。突然从远处走来一个高级角色，放了一个超炫酷的技能，把{user}秒了。{user}那个气啊，忍不住骂了几个粗鄙之语，然后立马充值了几万元进去，买了几个极品装备，回去把那个杀他的人秒杀了。爽快！',
            add_tags: ['RMB玩家']
        },
        {
            text: '忍气吞声',
            result: '{user}在野外刷怪练级，打金。突然从远处走来一个高级角色，放了一个超炫酷的技能，把{user}秒了。{user}那个气啊，忍不住骂了几个粗鄙之语，然后忍气吞声，复活了继续练级。',
            add_tags: ['免费玩家']
        }
            ]
        },
        'dbrs_1406': {
            title: '沉迷页游',
            description: '自从接触了《贪婪玩约》，{user}每天都宅在家玩电脑。江湖豪情，爽快砍杀。每天都是新鲜的玩法，{user}彻底沉迷在了游戏中。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['电子海洛因']
        }
            ]
        },
        'dbrs_1416': {
            title: '鬼火摩托车',
            description: '{user}偷偷买了一辆摩托，改了炸街排，装了跑马灯，外接低音喇叭。{user}自称鬼火一族。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1483': {
            title: '课堂：数学课',
            description: '蒸熟一个馒头要3分钟，蒸熟2个需要多少分钟？',
            priority: 1,
            trigger_conditions: { age_range: [1, 17] },
            options: [
        {
            text: '6分钟',
            result: '在数学课上老师问了一个问题：“蒸熟1个馒头要3分钟，蒸熟2个需要多少分钟？”{user}回答6分钟，老师走过来敲{user}的脑袋说：“你是不是上数学课上傻了，啥都用数学思维？你蒸2个馒头分开蒸？”'
        },
        {
            text: '3分钟',
            result: '在数学课上老师问了一个问题：“蒸熟1个馒头要3分钟，蒸熟2个需要多少分钟？”{user}回答3分钟，老师走过来摸摸{user}的脑袋说：“不错，少年，有前途。”',
            add_tags: ['学习成绩']
        },
        {
            text: '9分钟',
            result: '在数学课上老师问了一个问题：“蒸熟1个馒头要3分钟，蒸熟2个需要多少分钟？”{user}回答9分钟，老师走过来敲{user}的脑袋，说：“为啥用这么多时间，是你时间被人偷了么？”'
        },
        {
            text: '数学课是用来补充睡眠的',
            result: '每逢上数学课，{user}就去和周公下棋。'
        }
            ]
        },
        'dbrs_1420': {
            title: '进入大学',
            description: '领着包包，{user}满心期待地走进了美丽的大学校园。从今天起他就是一名大学生。他报读的专业是___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '行政管理专业',
            result: '你做出了选择。',
            add_tags: ['行政管理专业', '大学时光']
        },
        {
            text: '计算机专业',
            result: '你做出了选择。',
            add_tags: ['计算机专业', '大学时光']
        },
        {
            text: '新闻学',
            result: '你做出了选择。',
            add_tags: ['新闻学', '大学时光']
        },
        {
            text: '金融学',
            result: '你做出了选择。',
            add_tags: ['金融学', '大学时光']
        },
        {
            text: '外语专业',
            result: '你做出了选择。',
            add_tags: ['外语专业', '大学时光']
        },
        {
            text: '会计',
            result: '你做出了选择。',
            add_tags: ['会计专业', '大学时光']
        },
        {
            text: '市场营销',
            result: '你做出了选择。',
            add_tags: ['市场营销', '大学时光']
        },
        {
            text: '其他基础理论专业',
            result: '你做出了选择。',
            add_tags: ['基础学科=HIDDEN=', '大学时光']
        },
        {
            text: '医学',
            result: '领着包包，{user}满心期待地走进了美丽的大学校园。他是一名医学专业的学生。',
            add_tags: ['医学专业', '大学时光']
        }
            ]
        },
        'dbrs_1421': {
            title: '找工作',
            description: '{user}找了一份___工作。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '医生',
            result: '{user}成为了一名医生，有了自己的诊室，上班就穿上医生的招牌——大白褂。'
        },
        {
            text: '搬砖工人',
            result: '为建设共产主义添砖加瓦。'
        },
        {
            text: '工厂打工',
            result: '从小的干起，{user}决定先去找个工厂打工。'
        },
        {
            text: '环卫',
            result: '{user}成为了伟大的清道夫。'
        },
        {
            text: '保镖',
            result: '{user}穿起一套职业装，顿时觉得自己像在拍黑客帝国。'
        },
        {
            text: '送餐员/快递员',
            result: '{user}听说这行很好赚。'
        },
        {
            text: '抛光工人',
            result: '得到这份工作，{user}很自豪，因为他算是技工，高人一等。'
        },
        {
            text: '派传单',
            result: '{user}找到一天100元的派传单工作。'
        },
        {
            text: '餐馆打杂',
            result: '每天就拖拖地，洗洗碗，上上菜，擦擦桌子……挺轻松的。'
        },
        {
            text: '交警',
            result: '“呵呵哒，开车的都怕我。”'
        },
        {
            text: '厨师',
            result: '你做出了选择。'
        },
        {
            text: '文员',
            result: '你做出了选择。'
        },
        {
            text: '教师',
            result: '你做出了选择。'
        },
        {
            text: '程序员',
            result: '{user}找了一份程序员的工作，成为了IT大军的一员。'
        },
        {
            text: '私家侦探',
            result: '{user}以他出色的逻辑能力和第六感，成为了一名私家侦探。'
        },
        {
            text: '私家侦探',
            result: '{user}以他出色的逻辑能力，成为了一名私家侦探。'
        },
        {
            text: '导游',
            result: '世界很大，我一边看，一边把钱给赚了。'
        },
        {
            text: '公务员',
            result: '{user}大叫口号：我要做人民的奴隶！'
        },
        {
            text: '参军',
            result: '{user}报名参军，通过了惨无人道的兵检后，加入了军队。'
        },
        {
            text: '翻译',
            result: '{user}进入了一家翻译公司，当起了一名翻译。'
        },
        {
            text: '外贸',
            result: '{user}开始恶补外语来适应这个职业。'
        },
        {
            text: '婚姻中介',
            result: '牵线搭桥，从中获利。'
        },
        {
            text: '律师',
            result: '{user}是辩chao论jia专业户。'
        },
        {
            text: '打字员',
            result: '{user}成为了一名打字员'
        },
        {
            text: '极限运动员',
            result: '{user}选择成为挑战人类极限的运动员，刺激！'
        },
        {
            text: '创业',
            result: '{user}是一名有想法的人，他要自己开公司创业！'
        },
        {
            text: '留校科研',
            result: '{user}选择做一位科学家。'
        },
        {
            text: '服务员',
            result: '不知道找啥工作，{user}决定找一份服务员的工作。'
        }
            ]
        },
        'dbrs_1422': {
            title: '大学毕业',
            description: '{user}完成了大学学业，终于毕业了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['毕业证书']
        }
            ]
        },
        'dbrs_1423': {
            title: '索尼大法：新品发布，PSP',
            description: 'PSP出新版本了！索尼大法信徒们争先恐后购买，为信仰充值。{user}作为索尼大法信徒的其中一员，也毫不犹豫地购买了一台。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1424': {
            title: '索尼大法：新品发布，耳机',
            description: '索尼大法又出新品了，这次是一副看起来高大上的头戴式耳机！索尼大法信徒们争先恐后购买，为信仰充值。{user}作为索尼大法信徒的其中一员，也毫不犹豫地购买了一副。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1425': {
            title: '翻译：爪哇国电视剧',
            description: '一个爪哇国电视剧引进国内了，{user}所在的公司接下了电视剧的字幕本地化工作。全公司上下找不到人懂爪哇国语言，公司让{user}随便编一下……{user}决定全程___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '音译',
            result: '你做出了选择。'
        },
        {
            text: '编故事',
            result: '你做出了选择。'
        },
        {
            text: '辞职',
            result: '{user}辞了翻译的工作，压力太大了。'
        }
            ]
        },
        'dbrs_1426': {
            title: '翻译：国外游戏',
            description: '一款名为《The Elder Scrolls》的游戏，{user}翻译成了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '《老头滚动条》',
            result: '你做出了选择。'
        },
        {
            text: '《上古卷轴》',
            result: '你做出了选择。'
        },
        {
            text: '《少女卷轴》',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1427': {
            title: '翻译：目国游戏',
            description: '有一款目国游戏引进，需要做游戏文本本地化。其中有一句台词是：“敵将 討ち取ったり！”。{user}将它翻译为___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '敌将，已被干掉！',
            result: '你做出了选择。'
        },
        {
            text: '敌羞吾去脱她衣',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1428': {
            title: '翻译：电视剧',
            description: '有一个电视剧里面有一段英文是“Night‘s Watch”， {user}把它翻译成___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '夜光手表',
            result: '你做出了选择。'
        },
        {
            text: '守夜人军团',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1430': {
            title: '翻译：动画片',
            description: '有一个动画片里面有一句台词是“Angry Crow Takes Flight”， {user}把它翻译成___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '乌鸦坐飞机',
            result: '你做出了选择。'
        },
        {
            text: '怒鸦起飞',
            result: '你做出了选择。'
        },
        {
            text: '鸦翔式',
            result: '你做出了选择。'
        },
        {
            text: '永动旋风',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1433': {
            title: '开始创业',
            description: '{user}打算创业，他要做___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '昆特牌公司',
            result: '你做出了选择。'
        },
        {
            text: '钱包厂',
            result: '你做出了选择。'
        },
        {
            text: '养竹鼠',
            result: '你做出了选择。'
        },
        {
            text: '手机公司',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1435': {
            title: '校园祭：撸串',
            description: '校园祭里，{user}在一个烧烤摊里疯狂撸串。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1437': {
            title: '校园祭：吃牛杂',
            description: '在校园祭中，{user}在一个牛杂档里吃起了萝卜牛杂。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1438': {
            title: '校园祭：小黑屋',
            description: '在校园祭中，有一个隐秘黑暗的小房间被{user}发现了。{user}走进去，在里面昏暗的灯光下，5个女生站成了一排，她们向{user}热情招待。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '逃跑',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1439': {
            title: '大学：游戏陪玩',
            description: '有人在互联网上招聘游戏陪玩，要求单身女性。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '应招',
            result: '你做出了选择。',
            add_tags: ['游戏陪玩']
        },
        {
            text: '没兴趣',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1444': {
            title: '大学：课余生活',
            description: '大学的课余时间非常充裕，{user}有时会___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '宅在宿舍里',
            result: '你做出了选择。'
        },
        {
            text: '去图书馆',
            result: '你做出了选择。'
        },
        {
            text: '约会',
            result: '你做出了选择。'
        },
        {
            text: '呆实验室里',
            result: '你做出了选择。'
        },
        {
            text: '打牌/打麻将',
            result: '大学的课余时间非常充裕，{user}有时会跟朋友赌钱作乐。',
            add_tags: ['赌博']
        },
        {
            text: '把全部时间献给学习',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1445': {
            title: '基础理论专业',
            description: '{user}选择基础理论专业里的___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '数学专业',
            result: '你做出了选择。',
            add_tags: ['数学专业']
        },
        {
            text: '物理学专业',
            result: '你做出了选择。',
            add_tags: ['物理学专业']
        },
        {
            text: '生物学专业',
            result: '你做出了选择。',
            add_tags: ['生物学专业']
        },
        {
            text: '天文学专业',
            result: '你做出了选择。',
            add_tags: ['天文学专业']
        },
        {
            text: '化学专业',
            result: '你做出了选择。',
            add_tags: ['化学专业']
        },
        {
            text: '哲学专业',
            result: '你做出了选择。',
            add_tags: ['哲学专业']
        }
            ]
        },
        'dbrs_1446': {
            title: '大学：课余生活',
            description: '大学的课余时间非常充裕，{user}有时会___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '泡酒吧',
            result: '你做出了选择。',
            add_tags: ['古惑仔']
        },
        {
            text: '宅宿舍里',
            result: '你做出了选择。'
        },
        {
            text: '打桌球',
            result: '大学的课余时间非常充裕，{user}有时会跟朋友打桌球赌钱作乐。',
            add_tags: ['赌博']
        },
        {
            text: '玩摩托车',
            result: '你做出了选择。',
            add_tags: ['鬼火']
        },
        {
            text: '学插花',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1447': {
            title: '大学：宅宿舍里',
            description: '{user}喜欢宅宿舍里，他在宿舍里___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '炒股',
            result: '你做出了选择。'
        },
        {
            text: '上网',
            result: '你做出了选择。',
            add_tags: ['交网友']
        },
        {
            text: '花时间自学一门技能',
            result: '你做出了选择。'
        },
        {
            text: '沉迷于二次元文化',
            result: '你做出了选择。',
            add_tags: ['中二病']
        },
        {
            text: '学习画画',
            result: '你做出了选择。',
            add_tags: ['画图能力']
        },
        {
            text: '练习画画',
            result: '你做出了选择。',
            add_tags: ['画图能力']
        }
            ]
        },
        'dbrs_1534': {
            title: '公园凉亭',
            description: '{user}感觉自己没法融入学校，他给自己定了一个逃课规则，每逢下雨天，他就会逃课，到学校附近的一个公园里，找一个凉亭坐着发呆。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1457': {
            title: '大学：兼职',
            description: '大学生{user}在考虑做兼职，他选择了去___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '金拱门',
            result: '你做出了选择。'
        },
        {
            text: '星巴克',
            result: '你做出了选择。'
        },
        {
            text: '做市场调查员',
            result: '你做出了选择。'
        },
        {
            text: '礼仪兼职',
            result: '你做出了选择。'
        },
        {
            text: '卖牛杂',
            result: '你做出了选择。'
        },
        {
            text: '不做兼职',
            result: '大学生{user}考虑做兼职，但是他没有找到想做的。'
        },
        {
            text: 'Los Pollos Hermanos',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1458': {
            title: '大学：论文',
            description: '{user}开始准备他的大学论文了，题目是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '《企业行政管理区块链思路》',
            result: '你做出了选择。'
        },
        {
            text: '《行政管理的法律规避问题分析》',
            result: '你做出了选择。'
        },
        {
            text: '《人月神话》',
            result: '你做出了选择。'
        },
        {
            text: '《Effective STL》',
            result: '你做出了选择。'
        },
        {
            text: '《围城新闻论》',
            result: '你做出了选择。'
        },
        {
            text: '《量子时代的大众传媒》',
            result: '你做出了选择。'
        },
        {
            text: '《大数据金融》',
            result: '你做出了选择。'
        },
        {
            text: '《创新与风险》',
            result: '你做出了选择。'
        },
        {
            text: '《如何“不懂装懂”》',
            result: '你做出了选择。'
        },
        {
            text: '《语言和文化差异》',
            result: '你做出了选择。'
        },
        {
            text: '《会计电算化和巧克力的联系》',
            result: '你做出了选择。'
        },
        {
            text: '《网络会计如何实施》',
            result: '你做出了选择。'
        },
        {
            text: '《如何令人信服地造假》',
            result: '你做出了选择。'
        },
        {
            text: '《精准营销让世界更小》',
            result: '你做出了选择。'
        },
        {
            text: '《舒缓医患关系方法一二》',
            result: '你做出了选择。'
        },
        {
            text: '《浅谈临床遗传学》',
            result: '你做出了选择。'
        },
        {
            text: '《数学与死亡的关联》',
            result: '你做出了选择。'
        },
        {
            text: '《深入分析如何安全学习数学》',
            result: '你做出了选择。'
        },
        {
            text: '《物理学圣剑的来历》',
            result: '你做出了选择。'
        },
        {
            text: '《​量子佛学》',
            result: '你做出了选择。'
        },
        {
            text: '《多体对卫星的影响》',
            result: '你做出了选择。'
        },
        {
            text: '《引力波应用假想》',
            result: '你做出了选择。'
        },
        {
            text: '《无重力化学工厂设计可行性分析》',
            result: '你做出了选择。'
        },
        {
            text: '《我对绿色化学理念的理解》',
            result: '你做出了选择。'
        },
        {
            text: '《社会达尔文主义的对错》',
            result: '你做出了选择。'
        },
        {
            text: '《理解与传播》',
            result: '你做出了选择。'
        },
        {
            text: '《合成生物学》',
            result: '你做出了选择。'
        },
        {
            text: '《自私的基因》',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1459': {
            title: '大学：卧谈会',
            description: '别睡了，起来嗨！晚上{user}在宿舍里开起了卧谈会，他们谈论的话题是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '女生',
            result: '你做出了选择。'
        },
        {
            text: '替身使者',
            result: '你做出了选择。'
        },
        {
            text: '荤段子',
            result: '你做出了选择。'
        },
        {
            text: '金钱',
            result: '你做出了选择。'
        },
        {
            text: '不参加',
            result: '晚上{user}在宿舍里开起了卧谈会，{user}不想参与，倒头便睡。'
        }
            ]
        },
        'dbrs_1460': {
            title: '大学：军训',
            description: '大学生都会经历地狱一般的军训，{user}也不例外。军训期间{user}每天都要经历站军姿、队列练习、喊口号、匍匐前进、拉歌、半夜拉练……',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1461': {
            title: '大学：饮食',
            description: '{user}在大学里的饮食，___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '是肉改部健康餐',
            result: '你做出了选择。'
        },
        {
            text: '都在学校饭堂里',
            result: '你做出了选择。'
        },
        {
            text: '都是外卖',
            result: '你做出了选择。',
            effects: { health: -10 }
        },
        {
            text: '在校外吃',
            result: '你做出了选择。',
            effects: { health: -10 }
        }
            ]
        },
        'dbrs_1463': {
            title: '大学：卧谈会',
            description: '别睡了，起来嗨！晚上{user}在宿舍里开起了卧谈会，他们谈论的话题是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '男生',
            result: '你做出了选择。'
        },
        {
            text: '化妆品',
            result: '你做出了选择。'
        },
        {
            text: '八卦',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1464': {
            title: '大学：少女机遇',
            description: '{user}在一次机缘巧合中和一个有钱人认识上了。这个有钱人想要包养{user}，让{user}生活无忧。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '答应',
            result: '{user}在一次机缘巧合中和一个有钱人认识上了。这个有钱人包养了{user}，{user}住上了豪华公寓，过上了金屋藏娇的情妇生活。'
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1465': {
            title: '竹鼠生意',
            description: '{user}在乡下租了个有竹林的场子，做起了养殖竹鼠的生意。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['竹鼠数量']
        }
            ]
        },
        'dbrs_1466': {
            title: '竹鼠场：竹鼠减少',
            description: '这段时间里，{user}的竹鼠场死了10只竹鼠。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '这段时间里，{user}的竹鼠场死了10只竹鼠。'
        }
            ]
        },
        'dbrs_1467': {
            title: '竹鼠场：竹鼠增多',
            description: '这段时间里，因为{user}的悉心照料，竹鼠场竹鼠数量增加了10个。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['竹鼠数量']
        }
            ]
        },
        'dbrs_1468': {
            title: '竹鼠场：生意失败',
            description: '{user}的竹鼠场的竹鼠已经死得差不多了，已经维持不下去了。{user}无奈只得结束竹鼠养殖的生意。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1469': {
            title: '竹鼠死光光',
            description: '{user}的竹鼠死光了，{user}只好结束自己的养殖生意。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1470': {
            title: '喂食竹鼠',
            description: '无论天气好坏，{user}每天都要进入竹林砍伐。砍好竹子扛回竹鼠场里，用来喂竹鼠。{user}看着这些竹鼠慵懒地躺在地上“咔拉咔拉”地吃着竹子，觉得一天的劳累都值了。喂食竹鼠最需要注意的是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '竹子的湿润度',
            result: '你做出了选择。'
        },
        {
            text: '竹子的颜色',
            result: '你做出了选择。'
        },
        {
            text: '竹子的大小',
            result: '你做出了选择。'
        },
        {
            text: '竹子的软硬度',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1471': {
            title: '胖竹鼠',
            description: '{user}有一天在竹鼠场巡逻时，发现一只特别胖的竹鼠。{user}扯着它的尾巴把它从窝里扯了出来，捏在手里端详。{user}想___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '“太胖了”',
            result: '{user}有一天在竹鼠场巡逻，发现一只特别胖的竹鼠。{user}想这竹鼠太胖了，这样下去不是办法。于是扯着它的尾巴把它从窝里扯了出来，做成了叫花鼠。'
        },
        {
            text: '“这样下去不行啊”',
            result: '{user}有一天在竹鼠场巡逻，发现一只特别胖的竹鼠。{user}想这竹鼠吃太多了，这样下去不是办法。于是扯着它的尾巴把它从窝里扯了出来，做成了叫花鼠。'
        },
        {
            text: '“煮了吧”',
            result: '{user}有一天在竹鼠场巡逻，发现一只特别胖的竹鼠。{user}看着肥美的竹鼠，他懒得想理由，扯着它的尾巴就把它从窝里扯了出来，做成了叫花鼠。'
        },
        {
            text: '放回去',
            result: '{user}有一天在竹鼠场巡逻，发现一只特别胖的竹鼠。{user}扯着它的尾巴把它从窝里扯了出来，捏在手里端详。{user}看了一会儿，就把这只竹鼠放回去了。'
        }
            ]
        },
        'dbrs_1472': {
            title: '瘦竹鼠',
            description: '{user}在竹鼠场巡逻，发现一只营养不良的竹鼠，它长得特别瘦小。{user}想___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '“太瘦了”',
            result: '{user}在竹鼠场巡逻，发现一只营养不良的竹鼠，它长得特别瘦小。{user}想这竹鼠已经长不大了，卖不了多少钱，还不如把它……于是这只竹鼠被做成了烤竹鼠。'
        },
        {
            text: '“这样下去不是办法啊”',
            result: '{user}在竹鼠场巡逻，发现一只营养不良的竹鼠，它长得特别瘦小。{user}想这竹鼠可能是病了，这样下去不行，还不如把它……于是这只竹鼠被做成了烤竹鼠。'
        },
        {
            text: '“煮了吧”',
            result: '{user}在竹鼠场巡逻，发现一只营养不良的竹鼠，它长得特别瘦小。{user}懒得想理由，直接把这只竹鼠被做成了烤竹鼠。'
        },
        {
            text: '放回去',
            result: '{user}在竹鼠场巡逻，发现一只营养不良的竹鼠，它长得特别瘦小。{user}捏起来玩了一会儿，又把它放回去了。'
        }
            ]
        },
        'dbrs_1473': {
            title: '竹鼠打架',
            description: '在竹鼠场里有一对竹鼠夫妻闹矛盾，两只竹鼠厮打了起来。公竹鼠被打至重伤，{user}捏着这只重伤的公竹鼠，想___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '“受内伤了”',
            result: '在竹鼠场里有一对竹鼠夫妻闹矛盾，两只竹鼠厮打了起来。公竹鼠被打至重伤，{user}捏起这只重伤的公竹鼠，他掂量了一会儿，觉得这只竹鼠应该是受内伤了。{user}露出了伤心的笑容，把这只重伤的公竹鼠做成了黄焖竹鼠。'
        },
        {
            text: '“没有治疗价值了”',
            result: '在竹鼠场里有一对竹鼠夫妻闹矛盾，两只竹鼠厮打了起来。公竹鼠被打至重伤，{user}捏起这只重伤的公竹鼠，他掂量了一会儿，觉得这只竹鼠没有治疗价值了。{user}露出了伤心的笑容，把这只重伤的公竹鼠做成了黄焖竹鼠。'
        }
            ]
        },
        'dbrs_1474': {
            title: '抑郁症',
            description: '有一只公竹鼠似乎患上了严重的抑郁症，整天软绵绵的趴在窝里，也不吃东西。{user}只好把它___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '煮了',
            result: '你做出了选择。'
        },
        {
            text: '帮它找母竹鼠',
            result: '有一只公竹鼠似乎患上了严重的抑郁症，整天软绵绵的趴在窝里，也不吃东西。{user}只好摆了一只母竹鼠在它的窝里做它的老婆。有了母竹鼠，这只抑郁的公竹鼠似乎找到了生存的意义，抑郁慢慢恢复。'
        }
            ]
        },
        'dbrs_1477': {
            title: '漂亮的竹鼠',
            description: '{user}发现了一只长得特别标志的竹鼠，身材好牙齿健康毛也旺盛。{user}说___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '“你真漂亮”',
            result: '{user}发现了一只长得特别标志的竹鼠，身材好牙齿健康毛也旺盛。这只竹鼠肯定非常好吃，于是{user}就把它做成了干锅竹鼠。'
        },
        {
            text: '放回去',
            result: '{user}发现了一只长得特别标志的竹鼠，身材好牙齿健康毛也旺盛。{user}拿起来看了一会儿，就把竹鼠放回去了。'
        }
            ]
        },
        'dbrs_1478': {
            title: '喂食幼年竹鼠',
            description: '{user}拿___来喂食幼年竹鼠。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '饲料',
            result: '你做出了选择。'
        },
        {
            text: '猪肉',
            result: '你做出了选择。'
        },
        {
            text: '米饭',
            result: '你做出了选择。'
        },
        {
            text: '红薯',
            result: '你做出了选择。'
        },
        {
            text: '竹子',
            result: '你做出了选择。'
        },
        {
            text: '薯片',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1476': {
            title: '竹鼠场：夏天',
            description: '这年的夏天特别的热，{user}的竹鼠场面临一个严重的问题，大量的竹鼠出现中暑症状。{user}对竹鼠场进行___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '洒水降温',
            result: '你做出了选择。'
        },
        {
            text: '改装鼠格通风',
            result: '这年的夏天特别的热，{user}的竹鼠场面临一个严重的问题，大量的竹鼠出现中暑症状。{user}立即改装鼠格，改进通风，让每个鼠格的温度降低。'
        },
        {
            text: '安装空调',
            result: '这年的夏天特别的热，{user}的竹鼠场面临一个严重的问题，大量的竹鼠出现中暑症状。{user}立即为竹鼠场安装了空调。'
        },
        {
            text: '中暑的都吃掉',
            result: '这年的夏天特别的热，{user}的竹鼠场面临一个严重的问题，大量的竹鼠出现中暑症状。{user}把中暑的竹鼠挑出来，煮了一大锅，请了父老乡亲们美餐了一顿。'
        }
            ]
        },
        'dbrs_1479': {
            title: '喂食次数',
            description: '{user}一天要喂___次竹鼠',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '1',
            result: '你做出了选择。'
        },
        {
            text: '2',
            result: '你做出了选择。'
        },
        {
            text: '3',
            result: '你做出了选择。'
        },
        {
            text: '4',
            result: '你做出了选择。'
        },
        {
            text: '10',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1480': {
            title: '竹鼠的食物',
            description: '竹鼠可以吃的食物多种多样，{user}除了喂竹子，还喂___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '玉米',
            result: '你做出了选择。'
        },
        {
            text: '鸡肉',
            result: '你做出了选择。'
        },
        {
            text: '象草',
            result: '你做出了选择。'
        },
        {
            text: '猪饲料',
            result: '你做出了选择。'
        },
        {
            text: '米糠',
            result: '你做出了选择。'
        },
        {
            text: '米饭',
            result: '你做出了选择。'
        },
        {
            text: '精神粮食',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1481': {
            title: '点名录取',
            description: '因为优异的成绩，{user}被国内重点大学直接点名录取，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '答应',
            result: '因为优异的成绩，{user}被国内重点大学直接点名录取。{user}有幸免受高考的过程。'
        },
        {
            text: '拒绝了',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1482': {
            title: '神奇道具：任意门',
            description: '{user}的朋友多拉B梦有一个神奇的道具，任意门。{user}使用任意门可以去任何地方，{user}用这个门上学从不迟到。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_1484': {
            title: '课堂：数学课',
            description: '有一个人，一分钟吃一个苹果。提问：他吃九个苹果需要多长时间？',
            priority: 1,
            trigger_conditions: { age_range: [1, 17] },
            options: [
        {
            text: '9分钟',
            result: '在数学课上，{user}积极举手回答问题，并且以精彩的回答赢得了全班的掌声。{user}骄傲地昂起了头。',
            add_tags: ['学习成绩']
        },
        {
            text: '这人吃东西好快啊',
            result: '在数学课上，{user}在开小差。'
        },
        {
            text: '睡觉',
            result: '每逢上数学课，{user}就去和周公下棋。'
        }
            ]
        },
        'dbrs_1485': {
            title: '四维口袋',
            description: '{user}的好朋友多拉B梦给了{user}一个神奇的口袋。这个口袋是未来科技的产品，通向四维空间，里面可以装无限多的东西。{user} 随便翻了翻口袋，发现里面装满了未来科技的产品。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '收下',
            result: '你做出了选择。',
            add_tags: ['四维口袋']
        }
            ]
        },
        'dbrs_1486': {
            title: '一个人的时光',
            description: '包养{user}的老板每个星期都会来看看{user}，其余时间就只有{user}一个人在家。{user}一个人的时候非常无聊，他开始___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '自学一门技能',
            result: '你做出了选择。'
        },
        {
            text: '养鱼',
            result: '包养{user}的老板每个星期都会来看看{user}，其余时间就只有{user}一个人在家。{user}一个人的时候非常无聊，他向老板要了点钱，去买了一个大鱼缸摆在客厅里，养鱼解闷。',
            add_tags: ['鱼缸总动员']
        },
        {
            text: '上网',
            result: '你做出了选择。',
            add_tags: ['交网友']
        }
            ]
        },
        'dbrs_1487': {
            title: '大鱼缸',
            description: '在{user}的大鱼缸里养着不少海洋鱼：一条蓝唐王鱼，{user}给它起名多利；两条小丑鱼父子，名为马林和尼莫；一只名为龟龟的海龟；还有一条巨大的鲨鱼，名叫布鲁斯。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1489': {
            title: '表白',
            description: '这位女生随即向{user}表白，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '答应',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1491': {
            title: '表白',
            description: '这位男生随即向{user}表白，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '答应',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1501': {
            title: '比惨王：虚拟参赛者',
            description: '这一届《申国比惨王》出现了一个特别的参赛者，一个虚拟角色！这个角色名为阿尔法狗，唱歌非常厉害，还会现场做表情卖惨，深得观众喜爱。这个虚拟角色打败了众多人类参赛选手，一举获得了这届《比惨王》的冠军。{user}与其他参赛者一样，落败回家。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1502': {
            title: '比惨王：评委内讧',
            description: '在《申国比惨王》直播现场，3名评委因意见不同吵了起来，其中一名评委怒摔麦克风离场，节目被中断了15分钟后继续进行。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1503': {
            title: '比惨王：五毛党',
            description: '在《申国比惨王》现场有不少现场观众，只要他们拍手、欢呼、或者尖叫，就会获得五毛钱，以奖励他们带动了现场气氛的功劳。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1505': {
            title: '比惨王：最后环节',
            description: '《申国比惨王》节目进入了最后的宣布名次环节。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        },
        {
            text: '下一事件',
            result: '你做出了选择。'
        },
        {
            text: '下一事件',
            result: '你做出了选择。'
        },
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1506': {
            title: '比惨王：落败',
            description: '评委给{user}的评价是：音乐表演垃圾，身世又不够惨。{user}惨遭评委疯狂DISS，他执包袱回家了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1507': {
            title: '比惨王：落败',
            description: '评委给{user}的评价是：音乐表演还不错，但是人生经历不够惨。{user}没有一个好的出身，{user}没有获得评委的青睐。{user}只好执包袱回家了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1508': {
            title: '比惨王：获得亚军',
            description: '评委给{user}的评价是：音乐表演不吸引人，但是人生经历很惨，可以加分。{user}最后获得第二名的好成绩，这离不开他的出身。{user}开心地捧着奖牌离开节目现场，身后跟着一帮记者对着他疯狂拍照。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['比惨王：亚军']
        }
            ]
        },
        'dbrs_1509': {
            title: '比惨王：获得冠军',
            description: '{user}的音乐表演非常受观众欢迎，他的身世也让观众们无不落泪。这届《比惨王》的唯一指定冠军，就是{user}。{user}开心地捧着奖牌离开节目现场，身后跟着一帮记者对着他疯狂拍照。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['比惨王：冠军']
        }
            ]
        },
        'dbrs_1510': {
            title: '捡回小命',
            description: '幸好{user}被及时送医，他捡回一条小命。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            set_attributes: { health: 100 }
        },
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: 10 }
        }
            ]
        },
        'dbrs_1511': {
            title: '离开人世',
            description: '虽然得到了适当的治疗，但是{user}还是在医院里离开了人世。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
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
        'dbrs_1513': {
            title: '整垮了身子',
            description: '{user}的身体被整垮了，他被送进了医院。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1515': {
            title: '死亡',
            description: '{user}死了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}死了。'
        }
            ]
        },
        'dbrs_1516': {
            title: '搬砖锻炼',
            description: '{user}是一名搬砖工人，每天都要扛着几十斤重的砖头游走在工地中。高强度的锻炼让{user}的身体日渐强壮。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['强壮']
        }
            ]
        },
        'dbrs_1518': {
            title: '有钱人=NAME=',
            description: '{user}已经拥有了不少的财富，他已经是一位有钱人了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['土豪'],
            remove_tags: ['贫穷']
        }
            ]
        },
        'dbrs_1519': {
            title: '穷人=NAME=',
            description: '{user}的财富已经没多少了，他已经是一个穷人了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['贫穷'],
            remove_tags: ['土豪']
        }
            ]
        },
        'dbrs_1522': {
            title: '发现',
            description: '{user}在电脑里发现了一个名为艳照门的文件夹，里面是一些不堪入目的照片。{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '复制一份',
            result: '你做出了选择。'
        },
        {
            text: '关闭电脑',
            result: '你做出了选择。'
        },
        {
            text: '把图片发布到网上',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1523': {
            title: '天文发现',
            description: '{user}在一次分析望远镜数据的时候，发现了一个新的行星。这个行星应该有大气，并且有沙漠陆地。{user}将这个新发现的行星命名为卡拉克。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['发现卡拉克']
        }
            ]
        },
        'dbrs_1525': {
            title: '天价消费清单',
            description: '等理发店帮{user}做完这些嫩肤，提取，提发际线，提取鬓角三部位等美容项目后，{user}照了照镜子，发现自己像个喜剧电影里的丑角……理发店递给{user}一张消费清单，总费用高达4万块。理发店说这些美容项目是免费的，这4万块只是服务费。{user}只能___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '乖乖给钱',
            result: '你做出了选择。'
        },
        {
            text: '报警',
            result: '等理发店帮{user}做完这些嫩肤，提取，提发际线，提取鬓角三部位等美容项目后，{user}照了照镜子，发现自己像个喜剧电影里的丑角……理发店递给{user}一张消费清单，总费用高达4万块。理发店说这些美容项目是免费的，这4万块只是服务费。{user}选择报警。警察来了之后似乎也拿理发店没办法，只能和稀泥。最后{user}交了2500元才能离开。'
        },
        {
            text: '向新闻爆料',
            result: '等理发店帮{user}做完这些嫩肤，提取，提发际线，提取鬓角三部位等美容项目后，{user}照了照镜子，发现自己像个喜剧电影里的丑角……理发店递给{user}一张消费清单，总费用高达4万块。理发店说这些美容项目是免费的，这4万块只是服务费。{user}决定向新闻爆料！新闻曝光后理发店态度突然360度转变，低声下气地跟{user}说之前的消费清单是计算错误，不用给了。'
        },
        {
            text: '使用任意门逃跑',
            result: '等理发店帮{user}做完这些嫩肤，提取，提发际线，提取鬓角三部位等美容项目后，{user}照了照镜子，发现自己像个喜剧电影里的丑角……理发店递给{user}一张消费清单，总费用高达4万块。理发店说这些美容项目是免费的，这4万块只是服务费。{user}从他的四维口袋里掏出任意门，使用任意门逃跑了。'
        },
        {
            text: '隐身逃跑',
            result: '等理发店帮{user}做完这些嫩肤，提取，提发际线，提取鬓角三部位等美容项目后，{user}照了照镜子，发现自己像个喜剧电影里的丑角……理发店递给{user}一张消费清单，总费用高达4万块。理发店说这些美容项目是免费的，这4万块只是服务费。{user}感觉情况不对，赶紧隐身，然后逃跑了。'
        }
            ]
        },
        'dbrs_1526': {
            title: '=NAME=也来做手机了！',
            description: '做空调的能做手机，卖茶叶的能做手机，煤老板都能做手机。所以{user}也想试试，在申国做一款手机。他建立了自己的公司，起名为SANSMART，中文名称三个聪明。寓意非常聪明，生产出来的手机非常智能。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1528': {
            title: '老人去世',
            description: '{user}虽然不认识这位去世的老人，但还是去参加了葬礼。在葬礼中大家都哭成了泪人，{user}感到___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '悲伤',
            result: '{user}虽然不认识这位去世的老人，但还是去参加了葬礼。在葬礼中大家都哭成了泪人，{user}受环境感染，他也流下了眼泪。',
            death_flag: true,
            death_reason: '=NAME=虽然不认识这位去世的老人，但还是去参加了葬礼。在葬礼中大家都哭成了泪人，=NAME=受环境感染，他也流下了眼泪。'
        },
        {
            text: '无感觉',
            result: '{user}虽然不认识这位去世的老人，但还是去参加了葬礼。在葬礼中大家都哭成了泪人，{user}没啥感觉，只能摆个伤心脸做做样子。',
            death_flag: true,
            death_reason: '=NAME=虽然不认识这位去世的老人，但还是去参加了葬礼。在葬礼中大家都哭成了泪人，=NAME=没啥感觉，只能摆个伤心脸做做样子。'
        },
        {
            text: '饥饿',
            result: '{user}虽然不认识这位去世的老人，但还是去参加了葬礼。在葬礼中大家都哭成了泪人。{user}悄悄走到没人的地方，找到点拜祭的食物吃了起来。经过长途跋涉，{user}的肚子有点饿。',
            death_flag: true,
            death_reason: '=NAME=虽然不认识这位去世的老人，但还是去参加了葬礼。在葬礼中大家都哭成了泪人。=NAME=悄悄走到没人的地方，找到点拜祭的食物吃了起来。经过长途跋涉，=NAME=的肚子有点饿。'
        },
        {
            text: '尝试装哭',
            result: '{user}虽然不认识这位去世的老人，但还是去参加了葬礼。在葬礼中大家都哭成了泪人，{user}也极力做出狰狞的表情，榨出了点眼泪。',
            death_flag: true,
            death_reason: '=NAME=虽然不认识这位去世的老人，但还是去参加了葬礼。在葬礼中大家都哭成了泪人，=NAME=也极力做出狰狞的表情，榨出了点眼泪。'
        }
            ]
        },
        'dbrs_1529': {
            title: '黄色头发的小女孩',
            description: '{user}发现了一个黄色头发的小女孩一直在屋子里走动，没有人去管她。{user}一问才知道，这个小女孩竟是这位去世的爷爷的私生女，名叫小凉。亲戚们感叹完去世者的晚节不保后，开始讨论由谁来抚养这位私生女。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '无视',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '{user}发现了一个黄色头发的小女孩一直在屋子里走动，没有'
        },
        {
            text: '将小凉带回家',
            result: '{user}发现了一个黄色头发的小女孩一直在屋子里走动，没有人去管她。{user}一问才知道，这个小女孩竟是这位去世的爷爷的私生女，名叫小凉。亲戚们开始讨论由谁来抚养这位私生女。{user}想了想，下定了决心。{user}走到小凉跟前，向小凉问道：“你跟我回家吧！”小凉打量了{user}好一会，轻轻地说：好的。',
            death_flag: true,
            death_reason: '=NAME=发现了一个黄色头发的小女孩一直在屋子里走动，没有人去管她。=NAME=一问才知道，这个小女孩竟是这位去世的爷爷的私生女，名叫小凉。亲戚们开始讨论由谁来抚养这位私生女。=NAME=想了想，下定了决心。=NAME=走到小凉跟前，向小凉问道：“你跟我回家吧！”小凉打量了=NAME=好一会，轻轻地说：好的。'
        }
            ]
        },
        'dbrs_1530': {
            title: '养女',
            description: '{user}的养女小凉非常懂事乖巧，她每天早上准时起床做早餐，然后叫{user}起床。{user}反倒有一种被她反过来抚养的感觉。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['小凉AGE']
        }
            ]
        },
        'dbrs_1533': {
            title: '小凉：新发型',
            description: '小凉的学校举办选美比赛，小凉报名参加了。{user}专门为小凉做了个新发型，___。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '马尾辫',
            result: '小凉的学校举办选美比赛，小凉报名参加了。{user}专门为小凉做了个新发型，马尾辫。小凉在选美比赛中获得了不错的三等奖，他开开心心地拿着奖状回家，挂在了家里墙上。',
            add_tags: ['小凉AGE', '小凉造型']
        },
        {
            text: '双马尾',
            result: '小凉的学校举办选美比赛，小凉报名参加了。{user}专门为小凉做了个新发型，双马尾。小凉在选美比赛中获得了冠军！他拿着奖状兴冲冲地跑回家，把奖状挂在了家里墙上。',
            add_tags: ['小凉AGE']
        },
        {
            text: '短发',
            result: '小凉的学校举办选美比赛，小凉报名参加了。{user}专门为小凉做了个新发型，短发。小凉在选美比赛中获得了不错的三等奖，他开开心心地拿着奖状回家，挂在了家里墙上。',
            add_tags: ['小凉AGE', '小凉造型']
        },
        {
            text: '长发及腰',
            result: '小凉的学校举办选美比赛，小凉报名参加了。{user}专门为小凉做了个新发型，短发。小凉在选美比赛中获得了不错的二等奖，他开开心心地拿着奖状回家，挂在了家里墙上。',
            add_tags: ['小凉AGE']
        },
        {
            text: '光头',
            result: '小凉的学校举办选美比赛，小凉报名参加了。{user}专门为小凉做了个新发型，光头。因为这个奇怪的造型，小凉在学校被同学嘲笑，他灰溜溜地回到了家，把选美比赛的特别奖的奖状藏到了抽屉里。',
            add_tags: ['小凉AGE']
        },
        {
            text: '菠萝头',
            result: '小凉的学校举办选美比赛，小凉报名参加了。{user}专门为小凉做了个新发型，菠萝头。因为这个奇怪的造型，小凉在学校被同学嘲笑，他灰溜溜地回到了家，把选美比赛的特别奖的奖状藏到了抽屉里。',
            add_tags: ['小凉AGE']
        },
        {
            text: '扫把头',
            result: '小凉的学校举办选美比赛，小凉报名参加了。{user}专门为小凉做了个新发型，扫把头。因为这个奇怪的造型，小凉在学校被同学嘲笑，他灰溜溜地回到了家，把选美比赛的特别奖的奖状藏到了抽屉里。',
            add_tags: ['小凉AGE']
        }
            ]
        },
        'dbrs_1532': {
            title: '养女：上学',
            description: '小凉已经到了上学的年龄，{user}给小凉选择了___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '贵族学校',
            result: '你做出了选择。',
            effects: { money: -4 },
            add_tags: ['小凉AGE']
        },
        {
            text: '普通学校',
            result: '你做出了选择。',
            effects: { money: -1 },
            add_tags: ['小凉AGE']
        },
        {
            text: '三类学校',
            result: '你做出了选择。',
            add_tags: ['小凉AGE']
        }
            ]
        },
        'dbrs_1535': {
            title: '“事件视界望远镜”组织',
            description: '南极天文台邀请{user}参与“事件视界望远镜”项目工作，他___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '答应了',
            result: '你做出了选择。',
            add_tags: ['“事件视界望远镜”项目', '项目组经费']
        },
        {
            text: '拒绝了',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1536': {
            title: '小凉起床',
            description: '一天早上，{user}起床。{user}发现今天小凉少有的比{user}起得晚。{user}去叫醒小凉，被子一翻开，{user}发现小凉的床湿了一大片。小凉红着脸大声说：“这是汗！”{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '对，是汗',
            result: '一天早上，{user}起床。{user}发现今天小凉少有的比{user}起得晚。{user}去叫醒小凉，被子一翻开，{user}发现小凉的床湿了一大片。小凉红着脸大声说：“这是汗！”{user}附和：“嗯嗯，是汗。”',
            add_tags: ['小凉AGE']
        },
        {
            text: '闻一下看看是不是汗',
            result: '一天早上，{user}起床。{user}发现今天小凉少有的比{user}起得晚。{user}去叫醒小凉，被子一翻开，{user}发现小凉的床湿了一大片。小凉红着脸大声说：“这是汗！”{user}好奇，他凑过去闻。小凉急了，大喊变态，推开{user}不让他闻。',
            add_tags: ['小凉AGE']
        },
        {
            text: '我怀疑你尿床了',
            result: '一天早上，{user}起床。{user}发现今天小凉少有的比{user}起得晚。{user}去叫醒小凉，被子一翻开，{user}发现小凉的床湿了一大片。小凉红着脸大声说：“这是汗！”{user}摸了摸下巴，思索了一会儿，说：“我怀疑你尿床了，而且我有证据。”小凉被{user}的话吓到了，豆大的泪流了下来，用哭腔说：“呜…对不起我不该说谎的呜呜…”。',
            add_tags: ['小凉AGE']
        }
            ]
        },
        'dbrs_1537': {
            title: '陪女儿逛超市',
            description: '某个周日，{user}与小凉逛超市。小凉在零食区逛了一会儿，精挑细选了一盒薯片，拿到{user}面前。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '买下',
            result: '你做出了选择。',
            add_tags: ['小凉AGE']
        },
        {
            text: '不让吃',
            result: '某个周日，{user}与小凉逛超市。小凉在零食区逛了一会儿，精挑细选了一盒零食，拿到{user}面前，{user}觉得薯片不健康，不让小凉吃。小凉嘟嘟嘴，把薯片放回了原处。',
            add_tags: ['小凉AGE']
        }
            ]
        },
        'dbrs_1538': {
            title: '功夫茶',
            description: '{user}发现小凉会弄功夫茶。她能熟练地摆弄着桌上的茶壶茶杯，不出一会儿茶就弄好了。一包几十块的绿茶，让小凉这么一弄，喝起来就像几千块的高档绿茶。小凉说这是以前爷爷教的，{user}说___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '棒啊！',
            result: '{user}发现小凉会弄功夫茶。她能熟练地摆弄着桌上的茶壶茶杯，不出一会儿茶就弄好了。一包几十块的绿茶，让小凉这么一弄，喝起来就像几千块的高档绿茶。小凉说这是以前爷爷教的。{user}摸摸小凉的头，给了小凉一个大拇指。小凉开心地笑了，一双大眼睛眯成了一条线。',
            add_tags: ['小凉AGE']
        },
        {
            text: '你是老奶奶吧',
            result: '{user}发现小凉会弄功夫茶。她能熟练地摆弄着桌上的茶壶茶杯，不出一会儿茶就弄好了。一包几十块的绿茶，让小凉这么一弄，喝起来就像几千块的高档绿茶。小凉说这是以前爷爷教的。{user}笑笑说，你弄功夫茶的样子像老奶奶。小凉听后嘟嘟嘴，说：“你才是老头呢，哼”然后就不理{user}了。',
            add_tags: ['小凉AGE']
        }
            ]
        },
        'dbrs_1539': {
            title: '小凉：发烧',
            description: '某个早上，{user}发现从来不赖床的小凉还没起床，上学就要迟到了。{user}去叫她起床，发现小凉躺在床上盖着厚厚的被子，脸红彤彤的。{user}赶紧去拿温度计给小凉量体温，38.9度的高烧。{user}赶忙___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '送医院',
            result: '某个早上，{user}发现从来不赖床的小凉还没起床，上学就要迟到了。{user}去叫她起床，发现小凉躺在床上盖着厚厚的被子，脸红彤彤的。{user}赶紧去拿温度计给小凉量体温，38.9度的高烧。{user}赶忙送小凉去医院打点滴。经过{user}精心的照料，小凉很快就退烧了。第二天又蹦蹦跳跳的上学去了。',
            add_tags: ['小凉AGE']
        }
            ]
        },
        'dbrs_1540': {
            title: '小凉：换牙',
            description: '小凉已经是换牙的年龄了，她换下的牙齿，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '存放在铁盒子里',
            result: '你做出了选择。',
            add_tags: ['小凉AGE']
        },
        {
            text: '丢到屋顶上',
            result: '小凉已经是换牙的年龄了，她换下的牙齿，{user}丢到屋顶上。寓意让小凉快高长大。',
            add_tags: ['小凉AGE']
        },
        {
            text: '丢垃圾桶',
            result: '你做出了选择。',
            add_tags: ['小凉AGE']
        }
            ]
        },
        'dbrs_1542': {
            title: '黑洞照片',
            description: '“事件视界望远镜”项目组经过多年的努力，他们终于完成了数据处理。发布了人类历史上第一张黑洞照片。在这张黑色背景的照片中央，有一个模糊的红色圆圈。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1548': {
            title: '大头主持',
            description: '因为{user}长了个大头，个人形象十分卡通，所以他决定自己主持一个网络节目，这个节目名叫《大事件吐槽》。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1549': {
            title: '提高人气',
            description: '《大事件吐槽》的人气不高，{user}得想办法增加知名度，他___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '高价聘请文案',
            result: '你做出了选择。',
            effects: { money: -1 },
            add_tags: ['网红人气']
        },
        {
            text: '买广告',
            result: '你做出了选择。',
            effects: { money: -1 },
            add_tags: ['网红人气']
        },
        {
            text: '在节目中女装',
            result: '你做出了选择。',
            add_tags: ['网红人气']
        },
        {
            text: '无能为力',
            result: '你做出了选择。'
        },
        {
            text: '人气不重要',
            result: '《大事件吐槽》的人气不高，{user}不以为然。'
        }
            ]
        },
        'dbrs_1550': {
            title: '新闻素材',
            description: '《大事件吐槽》的新闻素材大多与___有关。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '明星八卦',
            result: '你做出了选择。',
            add_tags: ['《大事件吐槽》明星八卦']
        },
        {
            text: '时事政治',
            result: '你做出了选择。'
        },
        {
            text: '科技前沿',
            result: '你做出了选择。',
            add_tags: ['《大事件吐槽》科技前沿']
        },
        {
            text: '动漫游戏',
            result: '你做出了选择。',
            add_tags: ['《大事件吐槽》动漫游戏']
        },
        {
            text: '柴米油盐',
            result: '你做出了选择。',
            add_tags: ['《大事件吐槽》柴米油盐']
        }
            ]
        },
        'dbrs_1551': {
            title: '大头主持',
            description: '《大事件吐槽》经常在节目中批评调侃流量明星。有一天，节目收到了某个明星的律师函警告。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '公开道歉',
            result: '《大事件吐槽》经常在节目中批评调侃流量明星。有一天，节目收到了某个明星的律师函警告。{user}怂了，立马公开道歉，节目掉了不少的人气。'
        },
        {
            text: '调侃这个律师函',
            result: '《大事件吐槽》经常在节目中批评调侃流量明星。有一天，节目收到了某个明星的律师函警告。{user}把律师函放到节目上公开调侃，收获了大量的人气。',
            add_tags: ['网红人气']
        },
        {
            text: '无视',
            result: '《大事件吐槽》经常在节目中批评调侃流量明星。有一天，节目收到了某个明星的律师函警告。{user}无视了这个律师函。'
        }
            ]
        },
        'dbrs_1552': {
            title: '节目被封停',
            description: '因为在公共场合随意讨论政治，《大事件吐槽》节目被网警迅速封停。{user}也被抓进了大牢。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1553': {
            title: '节目风格',
            description: '《大事件吐槽》的视频风格是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '幽默搞笑',
            result: '《大事件吐槽》的视频幽默搞笑，网友们都挺喜欢的。',
            add_tags: ['网红人气']
        },
        {
            text: '严肃',
            result: '《大事件吐槽》的视频观点十分严肃沉闷，视频下的评论经常会出现骂战。',
            add_tags: ['网红人气']
        },
        {
            text: '鬼畜',
            result: '《大事件吐槽》的视频十分鬼畜，点击量爆炸。',
            add_tags: ['网红人气']
        },
        {
            text: '短快小',
            result: '《大事件吐槽》的视频又小又短又快，没啥内容。慢慢的这个节目开始掉粉。'
        }
            ]
        },
        'dbrs_1554': {
            title: '节目凉凉',
            description: '《大事件吐槽》节目已经没啥人看了，{user}也成为了过气网红。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1555': {
            title: '赞助',
            description: '《大事件吐槽》节目收到了索尼大法的赞助，让{user}给做一下他们产品的评测。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '接受',
            result: '你做出了选择。',
            effects: { money: 2 }
        },
        {
            text: '王境泽式拒绝',
            result: '《大事件吐槽》节目收到了索尼大法的赞助，让{user}给做一下他们产品的评测。{user}本想拒绝他们的赞助并强调自己是一个客观的节目，但是当他看到赞助费数目之后，{user}不由自主地答应了他们。{user}抱着钞票说出了“真香”两字。',
            effects: { money: 2 }
        },
        {
            text: '斩钉截铁地拒绝',
            result: '《大事件吐槽》节目收到了索尼大法的赞助，让{user}给做一下他们产品的评测。{user}斩钉截铁地拒绝他们的赞助并强调自己是一个客观的节目，因为这个事情节目增加了不少人气。',
            add_tags: ['网红人气']
        }
            ]
        },
        'dbrs_1556': {
            title: '约战',
            description: '在《大事件吐槽》节目中，{user}批评了一款“SANSMART”的手机，引起了“SANSMART”公司的CEO不满。“SANSMART”公司CEO约{user}出来直播骂战，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '赴约，骂死他',
            result: '在《大事件吐槽》节目中，{user}批评了一款“SANSMART”的手机，引起了“SANSMART”公司的CEO不满。们决定在网络上直播骂战，骂战从客观地争论产品本身，变成人身攻击，最后发展成肢体冲突，双方不欢而散。这场闹剧给《大事件吐槽》增加了不少人气……',
            add_tags: ['网红人气']
        },
        {
            text: '不予理会',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1557': {
            title: '开发商的请求',
            description: '有一个游戏开发商找到{user}，想让{user}在《大事件吐槽》节目中介绍自己的游戏。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '答应',
            result: '你做出了选择。'
        },
        {
            text: '钱到位什么都好说',
            result: '有一个游戏开发商找到{user}，想让{user}在《大事件吐槽》节目中介绍自己的游戏。{user}要求收广告费，开发商满足了他，给了一笔不菲的广告费。',
            effects: { money: 1 }
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1558': {
            title: '剧透',
            description: '因为《大事件吐槽》节目对某个热门动画进行了剧情分析，大量观众留言表示受到了剧透，纷纷给{user}寄去刀片。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1559': {
            title: '侵权',
            description: '某动画公司联系到{user}，表示《大事件吐槽》节目引用了他们作品的画面，已经造成了侵权，{user}必须立即删除相关侵权的视频内容。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '删除侵权内容',
            result: '你做出了选择。'
        },
        {
            text: '不予理会',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1560': {
            title: '师奶的最爱',
            description: '{user}的节目《大事件吐槽》受到了大量师奶粉丝喜爱。{user}每天都能收到几张师奶寄给他的肉麻情书。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['网红人气']
        }
            ]
        },
        'dbrs_1561': {
            title: '无趣的节目',
            description: '{user}的节目《大事件吐槽》没有什么人气。似乎大家都对这种新闻不感兴趣。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1562': {
            title: '广告',
            description: '{user}的节目《大事件吐槽》人气很高。有不少人找{user}打广告，{user}选择做___的广告',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '手机游戏',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '莆田系医院广告',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '卫生巾',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '全部都要',
            result: '{user}的节目《大事件吐槽》人气很高，这个节目每集都会有3、4个广告，{user}赚了不少钱。',
            effects: { money: 2 }
        },
        {
            text: '全部拒绝',
            result: '{user}的节目《大事件吐槽》人气很高，这个节目因为没有广告而获得大家的认可，节目人气增加了不少。',
            add_tags: ['网红人气']
        }
            ]
        },
        'dbrs_1563': {
            title: '广告',
            description: '{user}的节目《大事件吐槽》人气很高。有不少人找{user}打广告，{user}选择做___的广告',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '网络贷款',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '“SANSMART”手机',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '牛奶',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '全部都要',
            result: '{user}的节目《大事件吐槽》人气很高，这个节目每集都会有3、4个广告，{user}赚了不少钱。',
            effects: { money: 2 }
        },
        {
            text: '全部拒绝',
            result: '{user}的节目《大事件吐槽》人气很高，这个节目因为没有广告而获得大家的认可，节目人气增加了不少。',
            add_tags: ['网红人气']
        }
            ]
        },
        'dbrs_1564': {
            title: '广告',
            description: '{user}的节目《大事件吐槽》人气很高。有不少人找{user}打广告，{user}选择做___的广告',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '金克拉',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '蚁力神',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '肥宅快乐水',
            result: '你做出了选择。',
            effects: { money: 1 }
        },
        {
            text: '全部都要',
            result: '{user}的节目《大事件吐槽》人气很高，这个节目每集都会有3、4个广告，{user}赚了不少钱。',
            effects: { money: 2 }
        },
        {
            text: '全部拒绝',
            result: '{user}的节目《大事件吐槽》人气很高，这个节目因为没有广告而获得大家的认可，节目人气增加了不少。',
            add_tags: ['网红人气']
        }
            ]
        },
        'dbrs_1565': {
            title: '委托：调查出轨',
            description: '一个中年男子怀疑自己老婆出轨，找到{user}，让{user}跟踪他的老婆，找到出轨的证据。{user}注意到，这个男子戴着一顶绿得发亮的帽子。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '答应调查',
            result: '你做出了选择。'
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1566': {
            title: '调查出轨',
            description: '{user}的任务是拍到出轨的照片作为证据。{user}尾随客户的老婆，等待时机。他们来到了一家旅馆，客户的老婆开了一间房间，{user}偷瞄了一下，房间号是404。{user}先人一步进入了404房间，他___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '藏在衣柜里',
            result: '{user}的任务是拍到出轨的照片作为证据。{user}尾随客户的老婆，等待时机。他们来到了一家旅馆，客户的老婆开了一间房间，{user}偷瞄了一下，房间号是404。{user}先人一步进入了404房间，他藏在衣柜里等待时机。随后一名男子和客户的老婆便进入房间，闲谈了一会后开始翻云覆雨。{user}趁机拍了一张照片，然后悄悄离开。证据已经有了，客户给了{user}不少的报酬。',
            effects: { money: 1 }
        },
        {
            text: '藏在床底下',
            result: '{user}的任务是拍到出轨的照片作为证据。{user}尾随客户的老婆，等待时机。他们来到了一家旅馆，客户的老婆开了一间房间，{user}偷瞄了一下，房间号是404。{user}先人一步进入了404房间，他藏在床底下等待时机。随后一名男子和客户的老婆便进入房间，来到床上翻云覆雨。{user}被有节奏的动静压得喘不过气来，伸出手拍了照片，赶紧悄悄地从床底下溜走了。证据已经有了，客户给了{user}不少的报酬。',
            effects: { money: 1 }
        },
        {
            text: '假装雕像',
            result: '{user}的任务是拍到出轨的照片作为证据。{user}尾随客户的老婆，等待时机。他们来到了一家旅馆，客户的老婆开了一间房间，{user}偷瞄了一下，房间号是404。{user}先人一步进入了404房间，他站在书柜旁，摆了一个姿势，假装自己是雕像。随后一名男子和客户的老婆便进入房间，闲谈了一会后开始翻云覆雨。{user}趁机拍了一张照片，然后悄悄离开。证据已经有了，客户给了{user}不少的报酬。',
            effects: { money: 1 }
        }
            ]
        },
        'dbrs_1567': {
            title: '调查出轨',
            description: '{user}的任务是拍到出轨的照片作为证据，{user}尾随客户的老婆来到了一家沙县小吃。客户的老婆与一名男子坐下吃了两碗拉面，他们一边吃一边打情骂俏，{user}赶紧___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '开启录音笔',
            result: '{user}的任务是拍到出轨的照片作为证据，{user}尾随客户的老婆来到了一家沙县小吃。客户的老婆与一名男子坐下吃了两碗拉面，他们一边吃一边打情骂俏，{user}赶紧用录音笔录下了他们的聊天内容。这个录音作为证据交给了客户，{user}成功完成了委托，获得了不错的报酬。'
        },
        {
            text: '用手机录像',
            result: '{user}的任务是拍到出轨的照片作为证据，{user}尾随客户的老婆来到了一家沙县小吃。客户的老婆与一名男子坐下吃了两碗拉面，他们一边吃一边打情骂俏，{user}赶紧用手机录像拍下了他们龌蹉的聊天视频。这个视频作为证据交给了客户，{user}成功完成了委托，获得了不错的报酬。'
        },
        {
            text: '拍照',
            result: '{user}的任务是拍到出轨的照片作为证据，{user}尾随客户的老婆来到了一家沙县小吃。客户的老婆与一名男子坐下吃了两碗拉面，他们一边吃一边打情骂俏，{user}赶紧拍了几张照片回去交给客户。但是这些照片看起来就是2个人正常的在吃饭聊天，不能作为出轨的证据。{user}搞砸了。'
        }
            ]
        },
        'dbrs_1569': {
            title: '投资',
            description: '创办了手机公司“SANSMART”后，有几个风投找到了{user}，他选择了___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '房地产起家的资金',
            result: '你做出了选择。',
            add_tags: ['投资']
        },
        {
            text: '互联网起家的资金',
            result: '你做出了选择。',
            add_tags: ['投资']
        },
        {
            text: '来历不明的投资',
            result: '你做出了选择。',
            add_tags: ['投资']
        },
        {
            text: '拒绝资本，用自己的钱！',
            result: '你做出了选择。',
            set_attributes: { money: 0 }
        }
            ]
        },
        'dbrs_1570': {
            title: '手机定位',
            description: '“SANSMART”公司正在设计自己的下一代手机。这个手机的定位是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '高端手机',
            result: '“SANSMART”公司正在设计自己的下一代手机。这个手机的定位是高端市场。{user}出言不逊地说：只有孙子才做低端手机。',
            add_tags: ['只做高端手机']
        },
        {
            text: '低端手机',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1571': {
            title: '锤子加镰刀1',
            description: '“SANSMART”公司的第一代手机“锤子加镰刀1”面世了。{user}在发布会上进行了相声表演，让人印象深刻。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['锤子加镰刀']
        }
            ]
        },
        'dbrs_1572': {
            title: '锤子加镰刀1',
            description: '“SANSMART”的锤子加镰刀1销量非常高，把一众手机品牌踩到脚下，稳稳占据了手机市场的第一位置。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 5 },
            add_tags: ['投资']
        }
            ]
        },
        'dbrs_1573': {
            title: '锤子加镰刀1',
            description: '“SANSMART”的锤子加镰刀1销量还行，公司算是在手机领域站稳了脚步。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 2 },
            add_tags: ['投资']
        }
            ]
        },
        'dbrs_1574': {
            title: '锤子加镰刀1',
            description: '“SANSMART”的锤子加镰刀1销量非常差，口碑也不太好，公司亏损严重。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1575': {
            title: '二代手机准备发布',
            description: '“SANSMART”的锤子加镰刀2正在设计中，{user}认为这一代的手机应该___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '注重外观',
            result: '你做出了选择。'
        },
        {
            text: '注重性能',
            result: '你做出了选择。'
        },
        {
            text: '搞噱头',
            result: '“SANSMART”的锤子加镰刀2正在设计中，{user}认为这一代的手机应该搞点噱头。{user}发动一系列的网络炒作，“泄漏”手机设计图，用淫秽图片来宣传手机摄像头。'
        },
        {
            text: '注重性价比',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1576': {
            title: '公孙=NAME=',
            description: '因为锤子加镰刀2的手机非常便宜，{user}被大家美称为“公孙{user}”，因为{user}说过做便宜手机的都是孙子。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1577': {
            title: '锤子加镰刀2',
            description: '“SANSMART”的锤子加镰刀2发布了，这是一部性价比非常高的手机。大家都非常乐意买这种既便宜又实用的手机。手机的销量非常不错，但利润非常低。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['锤子加镰刀']
        },
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['锤子加镰刀']
        }
            ]
        },
        'dbrs_1579': {
            title: '锤子加镰刀2',
            description: '锤子加镰刀2的销量很惨淡，公司全年处于亏损状态。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['锤子加镰刀']
        }
            ]
        },
        'dbrs_1580': {
            title: '锤子加镰刀2',
            description: '锤子加镰刀2的销量还行，销售额保持微小的增长。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 1 },
            add_tags: ['投资', '锤子加镰刀']
        }
            ]
        },
        'dbrs_1581': {
            title: '锤子加镰刀2',
            description: '锤子加镰刀2的销量非常不错，“SANSMART”和他们的锤子加镰刀手机已经人尽皆知，成为了“街机”。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 5 },
            add_tags: ['投资', '锤子加镰刀']
        }
            ]
        },
        'dbrs_1582': {
            title: '革命性手机',
            description: '“SANSMART”公司要重新定义手机！他们研发出来一款号称革命性的次世代手机，这种手机将可以插在显示器上，成为一台电脑，并且全程使用语音来控制，这个次世代手机被成为“TNT”。TNT一经发售，立马被抢购一空，“SANSMART”公司不得不扩大产能，在国内建立了十多家超级工厂来专门生产TNT产品。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 500 },
            add_tags: ['投资']
        }
            ]
        },
        'dbrs_1583': {
            title: '理解万岁',
            description: '“SANSMART”公司要重新定义手机！他们研发出来一款号称革命性的次世代手机，这种手机将可以插在显示器上，成为一台电脑，并且全程使用语音来控制，这个次世代手机被成为“TNT”。然而在发布会中TNT的表现很差，对{user}的指令充耳不闻。{user}只好尴尬地向发布会的现场观众道歉连连，口中念念有词：理解万岁理解万岁。TNT糟糕的发布会，直接导致这款产品的失败。“SANSMART”投入的研发费用全部功亏一篑。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1584': {
            title: '做汽车',
            description: '{user}不甘心只做手机，他认为科技的未来还有汽车。“SANSMART”公司决定进军制造汽车。做汽车的投入非常巨大，像“SANSMART”这种科技公司，只靠几款手机的销售来盈利，完全不足以支撑这么巨大的支出，后果可想而知，“SANSMART”汽车还没有面试，公司的钱就花光光了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1585': {
            title: '“SANSMART”倒闭',
            description: '“SANSMART”公司的资金已经不足以支撑公司的运作了，公司倒闭了……',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1586': {
            title: '自研芯片',
            description: '“SANSMART”公司的自研芯片，本质是___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '在原有的架构上设计芯片',
            result: '你做出了选择。'
        },
        {
            text: '设计一个新的架构',
            result: '“SANSMART”公司的自研芯片，设计了一个全新的架构名为“SMART”架构。开发研究工作花费了大量的资金，除外，还花了非常多的钱用来建立这个新的架构下的软件生态系统。但是花这么多钱都是值得的，“SANSMART”的芯片被广泛使用，输出到全世界。电脑、手机、大型服务器、卫星、洗衣机等等都在用“SMART”芯片！'
        },
        {
            text: '设计一个新的架构',
            result: '“SANSMART”公司决定自研芯片架构。芯片架构的研究是无底洞，直到公司花光了所有的积蓄，也没有任何回报。'
        }
            ]
        },
        'dbrs_1587': {
            title: '公司的未来',
            description: '研发了2代手机后，{user}觉得公司的技术积累已经足够。下一步应该___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '研发“TNT”',
            result: '你做出了选择。'
        },
        {
            text: '进军汽车市场',
            result: '你做出了选择。'
        },
        {
            text: '研发自己的芯片',
            result: '研发了2代手机后，{user}觉得公司的技术积累已经足够，下一步应该花钱开发自己的芯片。芯片是手机的核心部件，一个手机公司必须掌握这种核心技术，才能一手掌握未来。'
        },
        {
            text: '杀进低价市场',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1588': {
            title: '真理的信奉',
            description: '{user}信奉的真理是___',
            priority: 1,
            trigger_conditions: { age_range: [10, 30] },
            options: [
        {
            text: '站得越高，看得越远',
            result: '你做出了选择。'
        },
        {
            text: '婚姻是爱情的坟墓',
            result: '你做出了选择。'
        },
        {
            text: '人是会思考的芦苇',
            result: '你做出了选择。'
        },
        {
            text: '上海自来水来自海上',
            result: '你做出了选择。'
        },
        {
            text: 'Allah Akbar',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1589': {
            title: '口哨歌',
            description: '{user}天天吹口哨歌，渐渐的对音乐产生了兴趣。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['音乐', '音乐能力']
        }
            ]
        },
        'dbrs_1592': {
            title: '暴风城',
            description: '来到暴风城，已经是深夜，蓝色的狮子旗帜挂在城墙上，街上冷冷清清的。当地居民面无表情地看着{user}。法师让{user}先住一晚，明天一早就上路。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '进入城堡',
            result: '来到暴风城，已经是深夜，蓝色的狮子旗帜挂在城墙上，街上冷冷清清的。当地居民面无表情地看着{user}。法师让{user}先住一晚，明天一早就上路。{user}想进入城堡参观下，被守卫拦下了。'
        },
        {
            text: '去酒馆',
            result: '你做出了选择。'
        },
        {
            text: '去市场',
            result: '来到暴风城，已经是深夜，蓝色的狮子旗帜挂在城墙上，街上冷冷清清的。当地居民面无表情地看着{user}。法师让{user}先住一晚，明天一早就上路。{user}走到贸易区，进入了交易市场。虽然是深夜但是这里还是人满为患，交易窗口拍着长长的队伍，一些被成为“地精商人”的人在这里日夜守候。'
        },
        {
            text: '进入竞技场',
            result: '来到暴风城，已经是深夜，蓝色的狮子旗帜挂在城墙上，街上冷冷清清的。当地居民面无表情地看着{user}。法师让{user}先住一晚，明天一早就上路。{user}来到城市门口，这里是当地的竞技场。虽说是深夜，但还有不少人在此进行决斗。地上插满了旗子。'
        },
        {
            text: '进入银行',
            result: '来到暴风城，已经是深夜，蓝色的狮子旗帜挂在城墙上，街上冷冷清清的。当地居民面无表情地看着{user}。法师让{user}先住一晚，明天一早就上路。{user}来到银行，虽然已经是深夜了，但是银行门口还是挤满了人。有寄存物品的，有当街摆卖的，有穿着奇装异服站街的，有把玩烟花的……热热闹闹的。'
        },
        {
            text: '离开',
            result: '来到暴风城，已经是深夜，蓝色的狮子旗帜挂在城墙上，街上冷冷清清的。当地居民面无表情地看着{user}。法师让{user}先住一晚，明天一早就上路。{user}离开暴风城，想到城郊走走。没走多远，{user}就看到有一个镇子在前面，发出怪光，似乎在进行一些邪恶的仪式。{user}走进一看，地上画着一个五芒星，有5个小孩分别站在五芒星的对角上……{user}赶紧逃离，回到城里。'
        }
            ]
        },
        'dbrs_1591': {
            title: '平静的生活被打破',
            description: '有一天，一个圆形的传送门突然在{user}的面前打开了。从传送门里走出来一个长袍法师，他说{user}手上的那一枚戒指是巨大的邪恶力量，必须销毁。这个长袍法师让{user}跟随他进入传送门，去他们世界里一个名为“熔火之心”的地方销毁魔戒。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '穿过传送门',
            result: '有一天，一个圆形的传送门突然在{user}的面前打开了。从传送门里走出来一个长袍法师，他说{user}手上的那一枚戒指是巨大的邪恶力量，必须销毁。这个长袍法师让{user}跟随他进入传送门，去他们世界里一个名为“熔火之心”的地方销毁魔戒。{user}答应了，他跟随法师穿过传送门。他们进入了一个奇怪的空间，在不远的前面有一个出口，但是这个出口暂时关闭了，上面写着（艾泽拉斯正在排队10500）。{user}和法师等了几个小时后，出口终于打开了。他们穿过传送门出口，到达了一个繁华的城市，名叫暴风城。'
        },
        {
            text: '拒绝',
            result: '有一天，一个圆形的传送门突然在{user}的面前打开了。从传送门里走出来一个长袍法师。这个长袍法师让{user}跟随他进入传送门，去他们世界里一个名为“熔火之心”的地方销毁“自尊二戒”。{user}拒绝了，法师摇摇头，穿过传送门消失在了{user}面前。'
        }
            ]
        },
        'dbrs_1597': {
            title: '遇敌：部落冰法师',
            description: '在燃烧平原，他们遭到一个部落冰法师的袭击。这个蓝皮肤冰法师释放了冰环。{user}想要躲闪，他___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '跳起来',
            result: '在燃烧平原，他们遭到一个部落冰法师的袭击。这个蓝皮肤冰法师释放了冰环。{user}跳起来，成功躲过了地上的寒气，然后跑到敌人身后用闷棍敲晕了他。最后法师用火球术处决了这个敌人。他们继续上路……',
            add_tags: ['艾泽拉斯：燃烧平原']
        },
        {
            text: '蹲下',
            result: '在燃烧平原，他们遭到一个部落冰法师的袭击。这个蓝皮肤冰法师释放了冰环。{user}立即蹲下想要躲避，谁想冰环的寒气是沿着地面蔓延的，把{user}整个人冰封住了。{user}冰封在里面窒息而死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1593': {
            title: '旅程',
            description: '第二天法师和{user}就离开了暴风城，来到了艾尔文森林。艾尔文森林不大，而且有平坦的路面，他们很轻松地穿过了这片森林，来到了赤脊山区域，他们来到湖泊镇，此时天色已经暗下来了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '休息一晚上',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1594': {
            title: '旅程',
            description: '休息了一晚上后，法师和{user}准备翻过赤脊山到燃烧平原。他们遇到一个黑黝黝的矮人，矮人说有一个隧道可以通到燃烧平原，这样就不需要爬山了。{user}选择___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '进入隧道',
            result: '你做出了选择。'
        },
        {
            text: '翻过赤脊山',
            result: '休息了一晚上后，法师和{user}准备翻过赤脊山到燃烧平原。他们遇到一个黑黝黝的矮人，矮人说有一个隧道可以通到燃烧平原，这样就不需要爬山了。{user}还是选择翻过赤脊山，他们花了两天时间，终于翻到山顶。山下面就是一片无际的燃烧平原，但是他们发现下山的路被一堵无形的墙挡住了。法师摸了摸这堵无形的墙，说这是空气墙，没办法穿透。所以他们只能原路返回，进入隧道。'
        }
            ]
        },
        'dbrs_1595': {
            title: '遇敌',
            description: '法师和{user}进入了穿过赤脊山的隧道，在隧道中他们发现了三个兽人，他们是部落军队的逃兵，在附近一带打劫路人。法师悄悄地给这三个兽人头上分别放上星星，大饼，和骷髅标记。法师小声地指挥说：“羊星星，闷大饼，急火骷髅”法师给{user}一条木棍，并施法让{user}隐身。{user}走到大饼标记的兽人背后等待时机。在法师将星星标记的兽人变成绵羊的同时，{user}拿起闷棍重重打在大饼兽人的头上，兽人被敲晕在地。剩下的一个兽人冲向法师，被法师一个火舌喷吐烧成了灰烬！接下来他们处决了那两个失去行动力的敌人。战斗过后，法师和{user}吃了点魔法面包，继续上路。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1596': {
            title: '来到燃烧平原',
            description: '通过了隧道后，{user}和法师终于来到了燃烧平原，这里的土地是黑色的，像被烧焦了一样。空气一股硫磺和烧焦的味道。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1598': {
            title: '遇敌：刺客',
            description: '在燃烧平原，他们遭到一个部落刺客的偷袭。刺客冲向{user}，对{user}使用了“肾击”，{user}赶紧___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '卡视角',
            result: '在燃烧平原，他们遭到一个部落刺客的偷袭。刺客冲向{user}准备使用“肾击”，{user}躲到石头后面卡视角。想不到的是，刺客的攻击直接穿模，透过石头击中了{user}。{user}被击中后坐在地上无法动弹，刺客对{user}施展了杀戮盛宴。{user}被强劲的刺刀冲击得四分五裂……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '扭腰',
            result: '在燃烧平原，他们遭到一个部落刺客的偷袭。刺客冲向{user}准备使用“肾击”，{user}扭腰躲过了攻击！此时，法师吟唱好了一个大火球，把刺客砸了个稀巴烂。解决了敌人，他们继续上路了。',
            add_tags: ['艾泽拉斯：燃烧平原']
        },
        {
            text: 'DANCE',
            result: '在燃烧平原，他们遭到一个部落刺客的偷袭。刺客冲向{user}准备使用“肾击”，{user}原地开始了跳舞！{user}利用扭动的舞步躲过了攻击！此时，法师吟唱好了一个大火球，把刺客砸了个稀巴烂。解决了敌人，他们继续上路了。',
            add_tags: ['艾泽拉斯：燃烧平原']
        }
            ]
        },
        'dbrs_1599': {
            title: '遇敌：牛头人战士',
            description: '在燃烧平原，一个牛头人战士向法师发动了冲锋，把法师撞到在地，然后在{user}和法师中间释放了旋风斩！面对挥舞的大刀，{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '躺下躲避',
            result: '在燃烧平原，一个牛头人战士向法师发动了冲锋，把法师撞到在地，然后在{user}和法师中间释放了旋风斩！法师施展了闪现法术，及时瞬移走了。面对挥舞的大刀，{user}躺在地上，躲过了所有的攻击。{user}扯住牛头人的腿，把牛头人战士拉到在地。法师开启了一个通往暴风城的传送门，吧牛头人丢到了传送门里面。{user}通过传送门看到牛头人掉进了暴风城街道上，很快就被卫兵抓住了，最后法师关闭了传送门，他们继续上路了。',
            add_tags: ['艾泽拉斯：燃烧平原']
        },
        {
            text: '用木棍招架',
            result: '在燃烧平原，一个牛头人战士向法师发动了冲锋，把法师撞到在地，然后在{user}和法师中间释放了旋风斩！法师施展了闪现法术，及时瞬移走了。面对挥舞的大刀，{user}架起木棍尝试格挡，但是没有用！{user}手里的木棍被一下子砸成了碎片，随后{user}被砍成了两段，身首异处……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1600': {
            title: '黑石山',
            description: '{user}与法师一行人穿过了燃烧平原，终于来到了黑石山，离他们的目的地已经不远了，{user}能感受到手指上的“至尊二戒”开始跳动。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1601': {
            title: '进入黑石山',
            description: '几百年前在艾泽拉斯发生了一次名为“三锤之战”的战争，黑铁矮人的国王为了扭转战局，在燃烧平原召唤恶魔。被他召唤出来的是当年被泰坦放逐的火之领主，拉格纳罗斯。这个火元素恶魔的出现引发了火山喷发，一时间生灵涂炭，最后形成了现在的黑石山。拉格纳罗斯在黑石山的地底深处沉睡，这个地方被称为熔火之心……法师告诉{user}，他们必须穿过地下城，才能到达熔火之心。只有熔火之心中火元素领主附近的熔岩，才能摧毁{user}手上的这枚戒指。法师带着{user}进入了黑石山，向熔火之心进发。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1602': {
            title: '龙蛋',
            description: '{user}与法师来到了一个宽敞的洞穴里，这里密密麻麻的长满了褐色的龙蛋，有一些龙蛋偶尔还会颤动一下，似乎立即就要爆出小龙来。{user}要想办法通过，尽量不要惊动这些龙蛋，他___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '冲过去',
            result: '{user}与法师来到了一个宽敞的洞穴里，这里密密麻麻的长满了白色的龙蛋，有一些龙蛋偶尔还会颤动一下，似乎立即就要爆出小龙来。法师说这些龙蛋快要孵化出小龙了，经过的时候务必小心不要惊动它们……法师刚说完，{user}就大步向前冲，把在场的所有龙蛋都惊动到了，几乎所有的龙蛋都孵化出了小龙，追着{user}跑。就在{user}快要被这些小火龙煮熟的时候，法师一个冰环把所有的小龙冻在原地，然后举起双手施法，引导了一场冰雹雨夹雪，把所有的火龙都砸死了。随后两人腿一软吓瘫在地上好一会，法师数了数，足足有50条小龙尸体。',
            add_tags: ['艾泽拉斯：黑石山'],
            death_flag: true,
            death_reason: '=NAME=与法师来到了一个宽敞的洞穴里，这里密密麻麻的长满了白色的龙蛋，有一些龙蛋偶尔还会颤动一下，似乎立即就要爆出小龙来。法师说这些龙蛋快要孵化出小龙了，经过的时候务必小心不要惊动它们……法师刚说完，=NAME=就大步向前冲，把在场的所有龙蛋都惊动到了，几乎所有的龙蛋都孵化出了小龙，追着=NAME=跑。就在=NAME=快要被这些小火龙煮熟的时候，法师一个冰环把所有的小龙冻在原地，然后举起双手施法，引导了一场冰雹雨夹雪，把所有的火龙都砸死了。随后两人腿一软吓瘫在地上好一会，法师数了数，足足有50条小龙尸体。'
        },
        {
            text: '不要惊动它们',
            result: '{user}与法师来到了一个宽敞的洞穴里，这里密密麻麻的长满了白色的龙蛋，有一些龙蛋偶尔还会颤动一下，似乎立即就要爆出小龙来。法师说这些龙蛋快要孵化出小龙了，经过的时候务必小心不要惊动它们。说完法师拿出一根羽毛作为施法材料，给自己释放了一个漂浮术。法师翻翻背包，发现羽毛用完了，只好拔了一根体毛代替羽毛，给{user}也释放了漂浮术。两人就这样安全地飘过这个洞穴，没有惊动一个龙蛋。',
            add_tags: ['艾泽拉斯：黑石山'],
            death_flag: true,
            death_reason: '=NAME=与法师来到了一个宽敞的洞穴里，这里密密麻麻的长满了白色的龙蛋，有一些龙蛋偶尔还会颤动一下，似乎立即就要爆出小龙来。法师说这些龙蛋快要孵化出小龙了，经过的时候务必小心不要惊动它们。说完法师拿出一根羽毛作为施法材料，给自己释放了一个漂浮术。法师翻翻背包，发现羽毛用完了，只好拔了一根体毛代替羽毛，给=NAME=也释放了漂浮术。两人就这样安全地飘过这个洞穴，没有惊动一个龙蛋。'
        }
            ]
        },
        'dbrs_1603': {
            title: '遭遇：部落队伍',
            description: '{user}和法师在一个矿洞中遭遇了一队部落金团，他们是过来熔火之心采矿的，似乎没有敌意。但是部落的金团跟{user}和法师的队伍语言不通，大家都非常警惕。此时{user}想了个办法来化解这种尴尬，他说：___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '1',
            result: '{user}和法师在一个矿洞中遭遇了一队部落金团，他们是过来熔火之心采矿的，似乎没有敌意。但是部落的金团跟{user}和法师的队伍语言不通，大家都非常警惕。此时{user}想了个办法来化解这种尴尬，他说了一声：1。部落队伍听后放下了戒备。1在这个世界里跨越了种族的语言限制，表示同意和答应，也有“大家是同伴”的意思。',
            add_tags: ['艾泽拉斯：黑石山']
        },
        {
            text: '/你好',
            result: '{user}和法师在一个矿洞中遭遇了一队部落金团，他们是过来熔火之心采矿的，似乎没有敌意。但是部落的金团跟{user}和法师的队伍语言不通，大家都非常警惕。此时{user}想了个办法来化解这种尴尬，他向部落队伍友好地招了招手，部落队伍放松了警惕，继续前进了。',
            add_tags: ['艾泽拉斯：黑石山']
        },
        {
            text: '/跳舞',
            result: '{user}和法师在一个矿洞中遭遇了一队部落金团，他们是过来熔火之心采矿的，似乎没有敌意。但是部落的金团跟{user}和法师的队伍语言不通，大家都非常警惕。此时{user}想了个办法来化解这种尴尬，他开始跳起了舞。部落金团的众人看到{user}，也纷纷跟着跳起了舞。就在黑石山矿井这种严肃的地方，一帮部落的人和人类快乐地蹦起了迪。',
            add_tags: ['艾泽拉斯：黑石山']
        },
        {
            text: '/开火',
            result: '{user}和法师在一个矿洞中遭遇了一队部落金团，他们是过来熔火之心采矿的，似乎没有敌意。但是部落的金团跟{user}和法师的队伍语言不通，大家都非常警惕。此时{user}想了个办法来化解这种尴尬，他把手做成枪的形状指着部落队伍，然后向着他们开枪。部落队伍哪里能忍，他们的术士对着{user}释放了一个灵魂燃烧，把{user}从里到外烧穿了……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '/moon',
            result: '{user}和法师在一个矿洞中遭遇了一队部落金团，他们是过来熔火之心采矿的，似乎没有敌意。但是部落的金团跟{user}和法师的队伍语言不通，大家都非常警惕。此时{user}想了个办法来化解这种尴尬，他把屁股对着部落队伍。部落队伍哪里能忍受这种挑衅，他们的猎人对着{user}的屁股上了一个标记，然后连续释放瞄准射击、奥术射击、爆裂射击……把{user}直接给射穿透了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1604': {
            title: '矿道中的酒吧',
            description: '{user}与法师在黑石山的矿道中前进，他们看到前面的路突然变得灯火通明。他们走过去一看，发现一个招牌上面写着“黑铁酒吧”。他们走了进去，吧主热情地招待了他们。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['艾泽拉斯：黑石山']
        }
            ]
        },
        'dbrs_1605': {
            title: '熔火之心的冒险者',
            description: '{user}和法师终于穿过了地下城，他们来到了熔火之心。他们发现在熔火之心门口，聚集着一群冒险者，{user}数了数，有38人。{user}和法师加入了冒险者们，冒险者争先恐后地问法师要面包和水……',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1606': {
            title: '熔火之心',
            description: '{user}和法师随团队，在熔火之心里与元素生物、恶魔、娜迦战斗。经过6小时的激烈战斗，他们终于来到了拉格纳罗斯沉睡的地方。那里有一潭炙热的熔岩。法师跟{user}说，这里的熔岩是末日熔岩，把戒指丢到这里的熔岩中，就可以摧毁这枚邪恶的戒指。{user}拿出戒指，___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '丢到熔岩里',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1609': {
            title: '又一次保护了世界和平',
            description: '穿过法师的传送门，他们回到暴风城，法师和{user}找了个酒馆喝酒作乐，庆祝他们的死里逃生。酒毕，法师感叹这个世界的和平来之不易，法师感谢{user}的贡献，开了一个传送门给{user}，{user}跳进传送门，回到了他的世界。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1610': {
            title: '玻璃球商人',
            description: '{user}遇到了收购龙珠的商人，他们愿意出高价（10财富）来收购{user}的一星龙珠。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '卖掉',
            result: '你做出了选择。',
            effects: { money: 10 }
        },
        {
            text: '拒绝出售',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1611': {
            title: '玻璃球商人',
            description: '{user}遇到了收购龙珠的商人，他们愿意出高价（10财富）来收购{user}的二星龙珠。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '卖掉',
            result: '你做出了选择。',
            effects: { money: 10 }
        },
        {
            text: '拒绝出售',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1612': {
            title: '玻璃球商人',
            description: '{user}遇到了收购龙珠的商人，他们愿意出高价（10财富）来收购{user}的三星龙珠。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '卖掉',
            result: '你做出了选择。',
            effects: { money: 10 }
        },
        {
            text: '拒绝出售',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1613': {
            title: '玻璃球商人',
            description: '{user}遇到了收购龙珠的商人，他们愿意出高价（10财富）来收购{user}的四星龙珠。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '卖掉',
            result: '你做出了选择。',
            effects: { money: 10 }
        },
        {
            text: '拒绝出售',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1614': {
            title: '玻璃球商人',
            description: '{user}遇到了收购龙珠的商人，他们愿意出高价（15财富）来收购{user}的五星龙珠。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '卖掉',
            result: '你做出了选择。',
            effects: { money: 15 }
        },
        {
            text: '拒绝出售',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1615': {
            title: '玻璃球商人',
            description: '{user}遇到了收购龙珠的商人，他们愿意出高价（15财富）来收购{user}的六星龙珠。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '卖掉',
            result: '你做出了选择。',
            effects: { money: 15 }
        },
        {
            text: '拒绝出售',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1616': {
            title: '玻璃球商人',
            description: '{user}遇到了收购龙珠的商人，他们愿意出高价（20财富）来收购{user}的七星龙珠。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '卖掉',
            result: '你做出了选择。',
            effects: { money: 20 }
        },
        {
            text: '拒绝出售',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1617': {
            title: '高考状元',
            description: '{user}在高考中获得了满分的成绩！一下子{user}变得名声大噪，学弟学妹都来请教{user}心得。大量家长聚集在{user}的家，看风水。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1618': {
            title: '火石科技',
            description: '{user}选择到一家名为火石科技的科研公司就职科学家。这个科研公司有着非常成熟的聚变技术，现在正在研究重聚变技术。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1619': {
            title: '重型运载卡车',
            description: '{user}在火石科技里是一名卡车驾驶员，负责运载石头。今天是他上班的普通的一天，他坐上了重型运载卡车CN-373，启动了引擎。车内的中控台上的导航仪自动开启了，有一个机械的声音响起：“道路千万条，安全第一条，行车不规范，亲人两行泪。”这个声音每天都在提醒{user}注意驾驶安全。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1628': {
            title: '平板电脑',
            description: '{user}从小就喜欢玩平板电脑，他经常___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '上网冲浪',
            result: '你做出了选择。'
        },
        {
            text: '上扣扣',
            result: '你做出了选择。',
            add_tags: ['交网友']
        },
        {
            text: '刷微博',
            result: '你做出了选择。'
        },
        {
            text: '看直播',
            result: '{user}从小就喜欢玩平板电脑，他经常用平板看直播。给主播刷礼物花光了家里的所有钱。',
            set_attributes: { money: 0 }
        },
        {
            text: '刷短视频',
            result: '你做出了选择。'
        },
        {
            text: '玩吃鸡游戏',
            result: '你做出了选择。'
        },
        {
            text: '玩MOBA游戏',
            result: '你做出了选择。'
        },
        {
            text: '玩自走棋',
            result: '你做出了选择。'
        },
        {
            text: '改装平板',
            result: '{user}从小就喜欢玩平板电脑，跟别的小朋友不一样，{user}喜欢拆开平板，改装散热，改芯片，改电路……真是个小天才，后生可畏！',
            add_tags: ['逻辑']
        },
        {
            text: '做平板软件开发',
            result: '{user}从小就喜欢玩平板电脑，跟别的小朋友不一样，{user}经常研究平板软件开发。后生可畏！',
            add_tags: ['逻辑']
        }
            ]
        },
        'dbrs_1629': {
            title: '致远星的水果',
            description: '{user}的舅舅从致远星回来了，带回来一箱好吃的水果。{user}看了看，拿了一个___的，吃了起来',
            priority: 1,
            trigger_conditions: { age_range: [10, 20] },
            options: [
        {
            text: '橡胶果实',
            result: '你做出了选择。',
            add_tags: ['身体协调', '果实能力', '橡皮人']
        },
        {
            text: '花花果实',
            result: '你做出了选择。',
            add_tags: ['果实能力', '花花人']
        },
        {
            text: '人人果实',
            result: '你做出了选择。',
            add_tags: ['果实能力']
        }
            ]
        },
        'dbrs_1630': {
            title: '不平常的病毒',
            description: '{user}经过了无数日夜的研究，他研究出来一种RNA病毒，这种病毒可以加速生物体内的新陈代谢。给测试员摄入后，测试员的新陈代谢速度迅速地增快，全身的皮肤变成白色。这是在快速新陈代谢之下，已死亡的表皮细胞逐渐堆积所造成的。随着病毒在测试员的体内繁殖，病毒已经开始侵蚀大脑部分的细胞，使患者的知能低下，变成了一个只会进食的怪物。 {user}把这种不平常的病毒命名为“Tyrant”。公司给{user}发了很多奖金，奖励{user}的研究成果。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 2 },
            death_flag: true,
            death_reason: '{user}经过了无数日夜的研究，他研究出来一种RNA病毒，'
        }
            ]
        },
        'dbrs_1631': {
            title: '喊救命的猫',
            description: '{user}在街上听过有喊救命的声音，跟随这声音，{user}在一个角落找到一只受伤的猫，它十分的虚弱，又饿又冷。{user}决定___',
            priority: 1,
            trigger_conditions: { age_range: [15, 120], required_tags: ['男性'] },
            options: [
        {
            text: '把它带回家',
            result: '你做出了选择。'
        },
        {
            text: '不理睬',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1632': {
            title: '猫咪',
            description: '{user}把猫带回了家，他准备___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '养它',
            result: '{user}把猫带回了家，开始养猫，猫在{user}的家里吃好睡好，过着无忧无虑的日子。'
        },
        {
            text: '放走它',
            result: '{user}把猫带回了家，猫在{user}家里住了几天，身体康复之后，{user}就把猫送走了。'
        },
        {
            text: '把它放到有毒的密闭容器里',
            result: '{user}把猫带回了家。{user}将猫关在装有少量镭和氰化物的密闭容器里。镭的衰变存在几率，如果镭发生衰变，会触发机关打碎装有氰化物的瓶子，猫就会死；如果镭不发生衰变，猫就存活。根据量子力学理论，由于放射性的镭处于衰变和没有衰变两种状态的叠加，猫就理应处于死猫和活猫的叠加状态。{user}称这只既死又活的猫为“{user}的猫”。'
        }
            ]
        },
        'dbrs_1633': {
            title: '陌生的少女',
            description: '一天清晨，{user}被一个陌生的少女叫醒了。这个神秘的少女称{user}为恩人，并对{user}说着“请跟我恋爱吧”这样的胡言乱语。{user}仔细观察这个女孩，乱糟糟的头发似乎没有打理过，长着2个大耳朵，衣服也没有好好穿，很长很宽松的T恤盖到大腿，衣服在她身上勾画出一道夸张的弧线，勾勒出了他的巨乳。她睁大双眼看着{user}，似乎在等待{user}的反应，看起来不太聪明的样子。她看{user}无动于衷，着急地又问：大恩人，请跟我恋爱吧！我要跟你生很多小孩子，好吗？{user}突然发现，这个猫女就是之前他救回家的小猫咪变的，来报答{user}的救命之恩呢。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '答应了',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        },
        {
            text: '拒绝了',
            result: '一天清晨，{user}被一个陌生的少女叫醒了。这个神秘的少女称{user}为恩人，并对{user}说着“请跟我恋爱吧”这样的胡言乱语。{user}仔细观察这个女孩，乱糟糟的头发似乎没有打理过，长着2个大耳朵，衣服也没有好好穿，很长很宽松的T恤盖到大腿，衣服在她身上勾画出一道夸张的弧线，勾勒出了他的巨乳。她睁大双眼看着{user}，似乎在等待{user}的反应，看起来不太聪明的样子。她看{user}无动于衷，着急地又问：大恩人，请跟我恋爱吧！我要跟你生很多小孩子，好吗？{user}突然发现，这个猫女就是之前他救回家的小猫咪变的，来报答{user}的救命之恩呢。{user}委婉地拒绝了这个猫女。猫女很失望地离开了。'
        }
            ]
        },
        'dbrs_1634': {
            title: '登山失足',
            description: '{user}在登山时失足了，跌入了悬崖。等他清醒过来后发现来到了一个神奇的地方，有一朵小花对他说话。小花说自己是来帮助{user}的，跟着它走，它会带{user}离开这里，回到自己的世界。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '跟他走',
            result: '{user}在登山时失足了，跌入了悬崖。等他清醒过来后发现来到了一个神奇的地方，有一朵小花对他说话。小花说自己是来帮助{user}的，跟着它走，它会带{user}离开这里，回到自己的世界。{user}相信了，向小花走去。小花看到{user}过来了，立即向{user}展开攻击！{user}的红色灵魂在小花的攻击下碎裂了。小花露出邪恶的笑容，说道：“蠢货！在这个世界，不是杀人！就是被杀！”',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '不相信这朵花',
            result: '{user}在登山时失足了，跌入了悬崖。等他清醒过来后发现来到了一个神奇的地方，有一朵小花对他说话。小花说自己是来帮助{user}的，跟着它走，它会带{user}离开这里，回到自己的世界。{user}不相信一朵花说的话，总觉得这朵花有什么不对劲，他选择自己找路离开这里。'
        },
        {
            text: '逃跑',
            result: '{user}在登山时失足了，跌入了悬崖。等他清醒过来后发现来到了一个神奇的地方，有一朵小花对他说话。{user}被这朵会说话的花吓尿了，像无头苍蝇一样，在黑暗的隧道中狂奔。'
        },
        {
            text: '摘花',
            result: '{user}在登山时失足了，跌入了悬崖。等他清醒过来后发现来到了一个神奇的地方，有一朵小花对他说话。{user}伸手想去摘花。小花看到{user}过来了，立即向{user}展开攻击！{user}的红色灵魂在小花的攻击下碎裂了……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1635': {
            title: '地下世界：会说话的羊',
            description: '忽然又来了一只会说话的羊赶走了那朵小花。那只羊对{user}说“多么可怜的孩子啊，让我来指引你吧，我带你离开这。”说完向{user}伸出了羊蹄手。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '跟他走',
            result: '忽然又来了一只会说话的羊赶走了那朵小花。那只羊对{user}说“多么可怜的孩子啊，让我来指引你吧，我带你离开这。”说完向{user}伸出了羊蹄手。{user}选择跟这只羊走。'
        },
        {
            text: '宰了',
            result: '忽然又来了一只会说话的羊赶走了那朵小花。那只羊对{user}说“多么可怜的孩子啊，让我来指引你吧，我带你离开这。”说完向{user}伸出了羊蹄手。{user}猛地抽出插在腰间的匕首，插进了这只羊的胸口，然后反手一个割喉，这只羊就给{user}杀死了。{user}太饿了，生火做了个烤全羊，报餐了一顿。',
            death_flag: true,
            death_reason: '忽然又来了一只会说话的羊赶走了那朵小花。那只羊对=NAME=说“多么可怜的孩子啊，让我来指引你吧，我带你离开这。”说完向=NAME=伸出了羊蹄手。=NAME=猛地抽出插在腰间的匕首，插进了这只羊的胸口，然后反手一个割喉，这只羊就给=NAME=杀死了。=NAME=太饿了，生火做了个烤全羊，报餐了一顿。'
        },
        {
            text: '逃跑',
            result: '前面一朵会说话的花，现在还来一只会说话的羊。{user}快被逼疯了，他逃跑了。'
        }
            ]
        },
        'dbrs_1638': {
            title: '地下世界',
            description: '会说话的羊要带{user}去见这里的国王，他说国王能让{user}回到上面。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '去找国王',
            result: '会说话的羊要带{user}去见这里的国王，他说国王能让{user}回到上面。一路上，羊很详细地跟{user}科普这个世界。没走多远，他们来到了国王面前。'
        },
        {
            text: '靠自己爬上去',
            result: '从哪里跌倒就要从哪里爬起来！{user}决定走到刚才醒来的地方，爬回去。然而，守在一旁的花看到{user}回来，立即上前攻击{user}，{user}一命惊呼！',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1639': {
            title: '地下世界：找到国王',
            description: '在地下迷宫走了很久，{user}找到了这里的国王。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1642': {
            title: '地下世界：战斗',
            description: '{user}的灵魂跟地下国王进行了一场殊死搏斗。国王有一把巨大的三叉戟，还会用火球弹幕向{user}进行攻击。而{user}只有手上那五寸长的匕首。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '战斗！',
            result: '{user}的灵魂跟地下国王进行了一场殊死搏斗。国王有一把巨大的三叉戟，还会用火球弹幕向{user}进行攻击。而{user}只有手上那五寸长的匕首。{user}没有害怕，他巧妙地躲过了弹幕，身手敏捷地躲过了巨大的武器攻击。向国王敏捷地挥动匕首攻击……最终国王倒下了，{user}处决了国王。{user}吸收了国王灵魂，离开了地下世界。'
        },
        {
            text: '逃跑',
            result: '{user}的灵魂跟地下国王进行了一场殊死搏斗。国王有一把巨大的三叉戟，还会用火球弹幕向{user}进行攻击。而{user}只有手上那五寸长的匕首。{user}害怕了，想逃跑，被国王用三叉戟一击杀死，巨大的三叉戟贯穿了{user}。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1637': {
            title: '地下世界：会说话的羊',
            description: '{user}没走多远，又遇到了一只会说话的羊。那只羊对{user}说“多么可怜的孩子啊，让我来指引你吧，我带你离开这。”说完向{user}伸出了羊蹄手。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '跟他走',
            result: '{user}没走多远，又遇到了一只会说话的羊。那只羊对{user}说“多么可怜的孩子啊，让我来指引你吧，我带你离开这。”说完向{user}伸出了羊蹄手。{user}选择跟这只羊走。'
        },
        {
            text: '宰了',
            result: '{user}没走多远，又遇到了一只会说话的羊。那只羊对{user}说“多么可怜的孩子啊，让我来指引你吧，我带你离开这。”说完向{user}伸出了羊蹄手。{user}猛地抽出插在腰间的匕首，插进了这只羊的胸口，然后反手一个割喉，这只羊就给{user}杀死了。{user}太饿了，生火做了个烤全羊，报餐了一顿。',
            death_flag: true,
            death_reason: '=NAME=没走多远，又遇到了一只会说话的羊。那只羊对=NAME=说“多么可怜的孩子啊，让我来指引你吧，我带你离开这。”说完向=NAME=伸出了羊蹄手。=NAME=猛地抽出插在腰间的匕首，插进了这只羊的胸口，然后反手一个割喉，这只羊就给=NAME=杀死了。=NAME=太饿了，生火做了个烤全羊，报餐了一顿。'
        },
        {
            text: '逃跑',
            result: '前面一朵会说话的花，现在还来一只会说话的羊。{user}快被逼疯了，他逃跑了。'
        }
            ]
        },
        'dbrs_1641': {
            title: '地下世界：地下世界国王',
            description: '{user}看到了国王，国王邀请{user}在这里住下。{user}拒绝了。{user}要离开这里，为此，{user}向国王发起了挑战。___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '战斗一触即发！',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1643': {
            title: '服务行业',
            description: '{user}找到了一份___的工作',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '炸鸡快餐店服务员',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1644': {
            title: 'Los Pollos Hermanos',
            description: '{user}工作的炸鸡快餐店名为Los Pollos Hermanos。老板是一名墨西哥黑人。这里的炸鸡好吃又便宜，到了返点这里就会座无虚席。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1645': {
            title: '炸鸡店：员工培训',
            description: '炸鸡快餐店的员工培训开始了，老板亲自做讲师，培训内容是礼仪训练，行为训练，厨房设施的使用。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '参加',
            result: '你做出了选择。'
        },
        {
            text: '请病假',
            result: '炸鸡快餐店的员工培训开始了，老板亲自做讲师，培训内容是礼仪训练，行为训练，厨房设施的使用。{user}不想参加，他向老板请病假。炸鸡店老板看了看{user}，笑笑，批准了。'
        }
            ]
        },
        'dbrs_1646': {
            title: '炸鸡店日常',
            description: '{user}工作的炸鸡店每天都很多客人，员工们忙得擦汗的时间都没，从早上一直忙到晚上。有时候，他们的老板也会来帮忙。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1647': {
            title: '炸鸡店：加班',
            description: '经过一天的繁忙工作，到了深夜，炸鸡店终于到了营业结束的时间，{user}正在收拾店铺。这时候老板找到了{user}，让他加个班，去后门帮忙卸货。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '好的',
            result: '经过一天的繁忙工作，到了深夜，炸鸡店终于到了营业结束的时间。{user}正在收拾店铺，老板找到了{user}，让他加个班，去后门帮忙卸货。'
        },
        {
            text: '拒绝',
            result: '经过一天的繁忙工作，到了深夜，炸鸡店终于到了营业结束的时间。{user}正在收拾店铺，老板找到了{user}，让他加个班，去后门帮忙卸货。{user}找了个理由拒绝加班，老板笑笑说没关系，让{user}下班了。'
        }
            ]
        },
        'dbrs_1648': {
            title: '炸鸡店：搬运工',
            description: '{user}去到后门，看到一辆大卡车正倒车入库。卡车停下后，车厢门打开了，从里面走出来几个人开始搬货，{user}走过去加入他们。{user}发现这几个人腰间都别着一杆枪，___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '他们应该是安保人员',
            result: '你做出了选择。'
        },
        {
            text: '去问问他们为啥有枪',
            result: '{user}去到后门，看到一辆大卡车正倒车入库。卡车停下后，车厢门打开了，从里面走出来几个人开始搬货，{user}走过去加入他们。{user}发现这几个人腰间都别着一杆枪，区区一辆运送鸡肉的卡车，为啥要带枪护送呢？{user}拍了拍其中一个人肩膀，问了他心中的疑问。那个人愣了下，然后他带{user}去了一个地方，把{user}处决了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '装作没看见',
            result: '{user}去到后门，看到一辆大卡车正倒车入库。卡车停下后，车厢门打开了，从里面走出来几个人开始搬货，{user}走过去加入他们。{user}发现这几个人腰间都别着一杆枪，{user}很害怕，装作没看到。'
        }
            ]
        },
        'dbrs_1649': {
            title: '约会',
            description: '{user}在约会，他们去看电影，看的是《___》',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '大圣离去',
            result: '你做出了选择。'
        },
        {
            text: '下水道美人鱼',
            result: '你做出了选择。'
        },
        {
            text: '铁的琴',
            result: '你做出了选择。'
        },
        {
            text: '战斗天使：阿拉蕾',
            result: '你做出了选择。'
        },
        {
            text: '坏天气之子',
            result: '你做出了选择。'
        },
        {
            text: '微时代',
            result: '你做出了选择。'
        },
        {
            text: '流浪星球',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1650': {
            title: '梦想',
            description: '{user}从小就有梦想，它是___',
            priority: 1,
            trigger_conditions: { age_range: [5, 15] },
            options: [
        {
            text: '成为警察',
            result: '你做出了选择。'
        },
        {
            text: '成为医生',
            result: '你做出了选择。'
        },
        {
            text: '发财',
            result: '你做出了选择。'
        },
        {
            text: '有一个精彩的人生',
            result: '{user}有一个简单的梦想，就是完整地体验人生。'
        },
        {
            text: '长命百岁',
            result: '你做出了选择。'
        },
        {
            text: '拯救世界',
            result: '你做出了选择。'
        },
        {
            text: '当一名宇航员',
            result: '你做出了选择。'
        },
        {
            text: '当一名爸爸',
            result: '你做出了选择。'
        },
        {
            text: '当一名妈妈',
            result: '你做出了选择。'
        },
        {
            text: '卖猪肉',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1651': {
            title: '烤鸡店：厨房工作',
            description: '{user}在炸鸡店厨房炸鸡，他去原料箱取鸡肉的时候，看到箱子里有一个透明袋子，里面装着蓝色晶体。他___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '无视了',
            result: '你做出了选择。'
        },
        {
            text: '向老板汇报',
            result: '{user}在炸鸡店厨房炸鸡，他去原料箱取鸡肉的时候，看到箱子里有一个透明袋子，里面装着蓝色晶体。{user}拿着袋子去了老板办公室。老板看到{user}拿着袋子很惊讶，他拿走袋子，跟{user}说这是他另外一个工厂里的东西，装货的人应该是搞混了。{user}相信了，离开了老板办公室。'
        },
        {
            text: '打开包装，尝一口',
            result: '{user}在炸鸡店厨房炸鸡，他去原料箱取鸡肉的时候，看到箱子里有一个透明袋子，里面装着蓝色晶体。{user}打开包装，拿了一块，舔了一下。眼前出现了幻觉，周遭环境都变得模糊，{user}感受到了莫名的快乐。没过多久，这种感觉就消失了，这似乎是某种能致幻的药物。{user}把整包晶体都吞了，快乐的感觉又回来了，巨大的快感冲向{user}，他越来越晕，失去了知觉……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '据为己有',
            result: '{user}在炸鸡店厨房炸鸡，他去原料箱取鸡肉的时候，看到箱子里有一个透明袋子，里面装着蓝色晶体，{user}偷偷把这包东西藏到内裤里。下班的路上，几个黑衣人从{user}身后袭击，他们一顿操作，把{user}藏在内裤里的袋子抢走了。'
        },
        {
            text: '报警',
            result: '{user}在炸鸡店厨房炸鸡，他去原料箱取鸡肉的时候，看到箱子里有一个透明袋子，里面装着蓝色晶体，{user}发现这是毒品，立即打电话报警。电话还没接通，就有一个拿着步枪的黑人朝着{user}扫射，{user}倒在了血泊中……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1653': {
            title: '铁路工',
            description: '有一天{user}在清理铁路垃圾，有一辆火车迎面向他开来。{user}想离开铁轨，发现脚被路轨卡住，他___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '大喊救命',
            result: '有一天{user}在清理铁路垃圾，有一辆火车迎面向他开来。{user}想离开铁轨，发现脚被路轨卡住，他只能大喊救命。火车驾驶员听到了{user}的声音，立即踩了刹车，但火车速度已经太快了，没办法停下来。{user}被火车头撞倒后碾压到了车底下……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '死亡的铁路工人'
        },
        {
            text: '冷静',
            result: '有一天{user}在清理铁路垃圾，有一辆火车迎面向他开来。{user}想离开铁轨，发现脚被路轨卡住，他知道现在绝对不能慌，他冷静下来，仔细观察铁轨。{user}发现是鞋带缠在了铁轨上，他把鞋子脱掉，得以挣脱。'
        },
        {
            text: '使用魔法',
            result: '有一天{user}在清理铁路垃圾，有一辆火车迎面向他开来。{user}想离开铁轨，发现脚被路轨卡住，他脱掉手套，释放出寒冰，把不远处的火车和铁轨冰冻在了一起，救了自己一命。'
        },
        {
            text: '在铁路中央躺下',
            result: '有一天{user}在清理铁路垃圾，有一辆火车迎面向他开来。{user}想离开铁轨，发现脚被路轨卡住，他急中生智，整个人躺在铁路中央。火车驶过铁路，{user}被火车底盘的各种屎尿淋了一身，最后被车尾底盘的某个零件击中，当场死亡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '有一天=NAME=在清理铁路垃圾，有一辆火车迎面向他开来。=NAME=想离开铁轨，发现脚被路轨卡住，他急中生智，整个人躺在铁路中央。火车驶过铁路，=NAME=被火车底盘的各种屎尿淋了一身，最后被车尾底盘的某个零件击中，当场死亡。'
        }
            ]
        },
        'dbrs_1655': {
            title: '示威游行',
            description: '{user}身为一名自由西团员，他开始随团员参加示威游行，大喊自由民主，五大诉求。喊得越大声，游行示威走得越前面的，就会获得越多的报酬，也会获得更多的尊重。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '走在最前面，高举横幅',
            result: '你做出了选择。',
            add_tags: ['自由西团员']
        },
        {
            text: '走在前面，高喊口号',
            result: '你做出了选择。',
            add_tags: ['自由西团员']
        },
        {
            text: '混迹在队伍中',
            result: '你做出了选择。',
            add_tags: ['自由西团员']
        },
        {
            text: '走在最后面',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1656': {
            title: '打砸地铁',
            description: '自由西社团收到新任务，他们要去打砸某地铁站，来抗议政府。{user}拿着___，出发了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '燃烧瓶',
            result: '你做出了选择。',
            add_tags: ['自由西团员']
        },
        {
            text: '锤子',
            result: '你做出了选择。',
            add_tags: ['自由西团员']
        },
        {
            text: '西瓜刀',
            result: '你做出了选择。',
            add_tags: ['自由西团员']
        },
        {
            text: '喷漆',
            result: '自由西社团收到新任务，他们要去打砸某地铁站，来抗议政府。{user}拿着各种颜色的喷漆，在地铁的墙上喷画了一副复杂美丽的涂鸦，画的是一个被掏空脑袋的人头，双眼布满血丝，睁大但无神，嘴巴长大，似乎在高喊着什么。{user}随着感觉用喷漆画出了这个图，他也说不出来自己的情感。大概这是他内心真正的感受。',
            add_tags: ['自由西团员']
        },
        {
            text: '不参与',
            result: '自由西社团收到新任务，他们要去打砸某地铁站，来抗议政府。{user}没有参与活动。'
        }
            ]
        },
        'dbrs_1657': {
            title: '被踢出社团',
            description: '因为{user}经常不参与社团活动，不积极参加社团活动。他被踢出了社团。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1658': {
            title: '混乱制造者',
            description: '社团组织团员们上街打砸，制造混乱。{user}带着___就出发了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '锤子',
            result: '你做出了选择。',
            add_tags: ['自由西团员']
        },
        {
            text: '棍子',
            result: '你做出了选择。',
            add_tags: ['自由西团员']
        },
        {
            text: '西瓜刀',
            result: '社团组织团员们上街打砸，制造混乱。{user}带着西瓜刀上街见人就砍，市民纷纷报警。警察赶到现场抓住了{user}。'
        },
        {
            text: '燃烧瓶',
            result: '你做出了选择。',
            add_tags: ['自由西团员']
        },
        {
            text: '不带东西',
            result: '社团组织团员们上街打砸，制造混乱。{user}也参与了。',
            add_tags: ['自由西团员']
        },
        {
            text: '不参与',
            result: '社团组织团员们上街打砸，制造混乱。{user}没有参加。'
        }
            ]
        },
        'dbrs_1659': {
            title: '自由西',
            description: '有一天，自由西社团的社长找{user}，他意味深长地问{user}知不知道社团名字的意思。{user}回答___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['女性'] },
            options: [
        {
            text: '点点头',
            result: '有一天，自由西社团的社长找{user}，他意味深长地问{user}知不知道社团名字的意思，{user}点点头。'
        },
        {
            text: '哦，知道啊',
            result: '有一天，自由西社团的社长找{user}，他意味深长地问{user}知不知道社团名字的意思，{user}笑笑表示自己知道。'
        },
        {
            text: '不晓得呢',
            result: '有一天，自由西社团的社长找{user}，他意味深长地问{user}知不知道社团名字的意思，{user}歪歪头，表示自己不知道。社长深吸一口香烟，长叹一口气，跟{user}说：“大家为了共通的目标努力很不错，但是过程是痛苦的。如果愿意的话，社员之间可以用身体来互相安慰支持，来度过这个难关。你懂的吧？身体是自由的…”{user}似乎听懂了社长的意思。'
        }
            ]
        },
        'dbrs_1660': {
            title: '为自由献身',
            description: '社长接着问：“那你肯为自由献身么？”{user}回答___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '为什么不呢？',
            result: '社长接着问：“那你肯为自由献身么？”{user}点头答应：“为什么不呢？”于是乎，{user}在社团里又多了一份工作，慰藉男社员。',
            add_tags: ['自由西团员']
        },
        {
            text: '不是很好吧',
            result: '社长接着问：“那你肯为自由献身么？”{user}委婉地拒绝了，称献不献身是个人自由。'
        },
        {
            text: '可以，但没必要',
            result: '社长接着问：“那你肯为自由献身么？”{user}委婉地拒绝了，称献不献身是个人自由。'
        },
        {
            text: '去你的',
            result: '{user}看清了这个自由西社团的真面目，他对着社长骂了一句“QNMD”，离开了社团。'
        }
            ]
        },
        'dbrs_1662': {
            title: '外教',
            description: '{user}的班级来了一位外国英语老师。{user}想跟老师问好，他对着老师说：___',
            priority: 1,
            trigger_conditions: { age_range: [5, 16] },
            options: [
        {
            text: 'are you ok ?',
            result: '你做出了选择。'
        },
        {
            text: 'do you like me ?',
            result: '你做出了选择。'
        },
        {
            text: 'Are you fuking kitting me ?',
            result: '{user}的班级来了一位外国英语老师。{user}想跟老师问好，他走上前去，胡言乱语不知道说了些什么，没人能听懂。'
        },
        {
            text: 'Hey, nigger!',
            result: '你做出了选择。'
        },
        {
            text: 'Hi, Bro',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_1663': {
            title: '自由西',
            description: '{user}在自由西社团里参与活动，除了有现金报酬外，还可以和愿意为自由捐躯的女社员“自由”合体，幸苦之余，享受快乐。{user}对这___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '非常赞同这种行为',
            result: '你做出了选择。'
        },
        {
            text: '嗤之以鼻',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1664': {
            title: '街头卖唱',
            description: '{user}选择去___卖唱。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '地铁站',
            result: '{user}每天都会在地铁站门口唱歌卖艺，等待星探的发掘。但是{user}除了每天获得几个硬币之外，没有更多的收获。'
        },
        {
            text: '住宅区',
            result: '{user}每天都会找一个人多的小区门口，摆摊卖唱。久而久之，小区的住户好像终于忍受不了{user}，从高空丢下一个花盆直接击中{user}的头。{user}被砸死了……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=每天都会找一个人多的小区门口，摆摊卖唱。久而久之，小区的住户好像终于忍受不了=NAME=，从高空丢下一个花盆直接击中=NAME=的头。=NAME=被砸死了……'
        },
        {
            text: '火葬场门口',
            result: '{user}每天都会去当地火葬场门口卖唱，他唱的送葬歌经常引得陌生人留步，流泪满面。'
        }
            ]
        },
        'dbrs_1666': {
            title: '华谊兄贵：第一份工作',
            description: '成为华谊兄贵的员工后没多久，{user}就接到第一份工作，拍___写真集。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '肌肉兄贵',
            result: '你做出了选择。'
        },
        {
            text: '病态美兄贵',
            result: '你做出了选择。'
        },
        {
            text: '想办法离职',
            result: '成为华谊兄贵的员工后没多久，{user}就接到第一份工作，内容是拍肉麻的写真集。{user}接受不了这样的工作，赶紧辞职。'
        }
            ]
        },
        'dbrs_1669': {
            title: 'GV剧本',
            description: '华纳兄贵发给{user}一份文件，是一个电影的剧本。{user}阅读这份剧本，发现自己在里面是一个弱受，百分之八十的戏都是趴在地上被人折磨……{user}___',
            priority: 1,
            trigger_conditions: { age_range: [20, 120] },
            options: [
        {
            text: '出演这个电影',
            result: '华纳兄贵发给{user}一份文件，是一个电影的剧本。{user}阅读这份剧本，发现自己在里面是一个弱受，百分之八十的戏都是趴在地上被人折磨……{user}被这个电影的剧本吸引住了，同意出演这个电影。拍这个戏{user}付出了很多，他被按在地上折磨了足足半年。',
            add_tags: ['菊花残']
        },
        {
            text: '想办法离职',
            result: '{user}对兄贵圈很反感，离开了华纳兄贵。'
        }
            ]
        },
        'dbrs_1670': {
            title: '被录取',
            description: '{user}被滚蛋唱片录取了，成为了滚蛋唱片旗下的一名小歌手。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1671': {
            title: '偶像路线',
            description: '每个歌手偶像都会有自己的形象，{user}希望滚蛋唱片公司给他塑造的形象是___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120], required_tags: ['男性'] },
            options: [
        {
            text: '阳光男孩',
            result: '你做出了选择。'
        },
        {
            text: '坏男孩',
            result: '你做出了选择。'
        },
        {
            text: '宅男',
            result: '你做出了选择。'
        },
        {
            text: '暖男',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1672': {
            title: '祸水',
            description: '这个被{user}丢到湿垃圾桶里的人好像是某个大公司的CEO，他因为这件事把{user}告了。{user}要么陪一大笔钱，要么给这个人一个道歉。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '我不给垃圾人道歉',
            result: '这个被{user}丢到湿垃圾桶里的人好像是某个大公司的CEO，他因为这件事把{user}告了。{user}为此赔了一大笔钱。'
        },
        {
            text: '道歉',
            result: '这个被{user}丢到湿垃圾桶里的人好像是某个大公司的CEO，他因为这件事把{user}告了。{user}立马怂了，给这人跪下来道歉，达成了和解。',
            effects: { money: -3 }
        }
            ]
        },
        'dbrs_1673': {
            title: '下雨天偶遇',
            description: '有一天，下雨了。{user}又逃课去公园凉亭发呆。他在凉亭遇到了一个漂亮的大姐姐。这个大姐姐似乎在避雨，正在边喝啤酒边玩手机。{user}看了一眼他，被他的___吸引了。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '脸',
            result: '你做出了选择。'
        },
        {
            text: '胸部',
            result: '有一天，下雨了。{user}又逃课去公园凉亭发呆。他在凉亭遇到了一个漂亮的大姐姐。这个大姐姐似乎在避雨，正在边喝啤酒边玩手机。{user}被这个大姐姐的胸部吸引了，直勾勾地盯着看。大姐姐察觉到了{user}的视线，他捋了捋衣服，离开了。'
        },
        {
            text: '脚',
            result: '你做出了选择。'
        },
        {
            text: '头发',
            result: '你做出了选择。'
        },
        {
            text: '无视这个人',
            result: '有一天，下雨了。{user}又逃课去公园凉亭发呆。他在凉亭遇到了一个漂亮的大姐姐。这个大姐姐似乎在避雨，正在边喝啤酒边玩手机。{user}无视了这个人。'
        }
            ]
        },
        'dbrs_1674': {
            title: '收集小精灵',
            description: '一个自称宠物小精灵博士的人找到{user}，问{user}要不要收集这个世界上的小精灵。这个人穿着白大褂，长者一头灰色头发，看起来很权威的样子。{user}说：___',
            priority: 1,
            trigger_conditions: { age_range: [10, 20] },
            options: [
        {
            text: '好啊好啊',
            result: '一个自称宠物小精灵博士的人找到{user}，问{user}要不要收集这个世界上的小精灵。这个人穿着白大褂，长者一头灰色头发，看起来很权威的样子。{user}很感兴趣，于是这个博士给{user}送了一麻袋的精灵球。'
        },
        {
            text: '没兴趣啊',
            result: '一个自称宠物小精灵博士的人找到{user}，问{user}要不要收集这个世界上的小精灵。这个人穿着白大褂，长者一头灰色头发，看起来很权威的样子。{user}不感兴趣。'
        }
            ]
        },
        'dbrs_1675': {
            title: '“事件视界望远镜”项目',
            description: '“事件视界望远镜”项目的目的是拍摄黑洞照片，检验广义相对论。通过地球和太空中的望远镜组拍摄照片，获得这上万亿张的图像数据，就可以合成黑洞照片。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1680': {
            title: '项目解散',
            description: '“事件视界望远镜”组织已经花完了所有的经费，没能做出任何成绩来。已经吸引不了更多的投资了，项目组只好解散了。',
            priority: 1,
            trigger_conditions: { age_range: [2000, 2000] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '“事件视界望远镜”组织已经花完了所有的经费，没能做出任何成绩'
        }
            ]
        },
        'dbrs_1682': {
            title: '直升机事故',
            description: '{user}有一天坐直升机上学，直升机发生了故障，坠毁在荒野上，爆炸了。{user}死在了事故中。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1683': {
            title: '上学交通',
            description: '{user}是通过___去学校上学的。',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '骑单车',
            result: '你做出了选择。'
        },
        {
            text: '坐公交车',
            result: '你做出了选择。'
        },
        {
            text: '坐计程车',
            result: '你做出了选择。'
        },
        {
            text: '步行',
            result: '{user}是通过步行去学校上学的，他老是迟到。',
            add_tags: ['强壮']
        },
        {
            text: '跑步',
            result: '你做出了选择。',
            add_tags: ['强壮']
        },
        {
            text: '踩平行车',
            result: '你做出了选择。'
        },
        {
            text: '坐直升机',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1684': {
            title: '新型冠状病毒',
            description: '经过基因改良，{user}研究出了一种新型的冠状病毒，这种新型病毒不会导致死亡。感染这种病毒的个体，呼吸会吐出奇怪的臭味。{user}___',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
            options: [
        {
            text: '立即销毁',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '经过基因改良，{user}研究出了一种新型的冠状病毒，这种新'
        },
        {
            text: '拍照发朋友圈',
            result: '{user}在瘟疫公司上班时拍照玩朋友圈，被上级发现。{user}被拉去小黑屋枪毙了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '经过基因改良，{user}研究出了一种新型的冠状病毒，这种新'
        },
        {
            text: '提交给上级',
            result: '你做出了选择。',
            add_tags: ['新型冠状病毒'],
            death_flag: true,
            death_reason: '经过基因改良，{user}研究出了一种新型的冠状病毒，这种新'
        }
            ]
        },
        'dbrs_1685': {
            title: '蝙蝠卡车',
            description: '瘟疫公司给了{user}一个任务，将一卡车的带着病毒的蝙蝠带到市区放生。{user}没有多问，等到凌晨，他穿上防护服，开着卡车出发了。开到市区内一个没有人的空地，{user}把卡车停好，打开车厢，黑压压的蝙蝠从卡车倾囊而出……',
            priority: 1,
            trigger_conditions: { age_range: [1, 120] },
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