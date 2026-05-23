// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 性格/特质
// 事件数: 115
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
    '多病': { color: 'red' },
    '孤儿': { color: 'red' },
    '富二代': { color: 'golden' },
    '没屁眼': { color: 'red' },
    '爱之病': { color: 'red' },
    '玻璃心': { color: 'red' },
    '高情商': { color: 'pink' },
});

export const dbrsPersonalityEvents = {
    'JB脸': {
        events: {
        'dbrs_354': {
            title: '怪胎',
            description: '{user}的脸非常畸形，所以他经常受到其他小朋友的嘲笑。',
            priority: 5,
            trigger_conditions: { age_range: [3, 10], required_tags: ['JB脸'] },
            options: [
        {
            text: '用鼻子撒尿报复',
            result: '其他同学嘲笑{user}的脸非常畸形时，{user}都会很生气。抬起“鼻子”向着那些嘲笑他的人撒尿！',
            add_tags: ['内向']
        },
        {
            text: '竖起鼻子，向嘲笑你的人做“凸”的动作',
            result: '其他同学嘲笑{user}的脸非常畸形时，{user}都会竖起鼻子，给那些人做“凸”的动作。'
        },
        {
            text: '用鼻子吹出笛子声来获得大家的崇拜',
            result: '{user}为了取悦同学，会为同学表演他的绝活，用鼻子(JB)吹出笛子的音乐。',
            add_tags: ['高情商']
        }
            ]
        },
        'dbrs_357': {
            title: '虚空假面',
            description: '{user}玩一款叫剁他贰的游戏时，最喜欢使用的角色是：虚空假面，因为{user}觉得这个角色玩起来最有代入感。',
            priority: 5,
            trigger_conditions: { age_range: [15, 30], required_tags: ['JB脸', '电子海洛因'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_356': {
            title: '内裤套头',
            description: '{user}也到了穿内裤的年龄了，因为特殊的原因，所以内裤是穿在头上的。',
            priority: 5,
            trigger_conditions: { age_range: [6, 8], required_tags: ['JB脸'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_362': {
            title: '不孕不育',
            description: '因为与睾丸的距离太远，所以{user}的鼻子(jb)根本不能输出子孙。',
            priority: 5,
            trigger_conditions: { age_range: [18, 120], required_tags: ['JB脸', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_605': {
            title: '桃花运',
            description: '{user}要出席一个重要的场合，想看看自己的形象怎么样，于是找一辆车的车窗照下，理了头发之后顺便花了2分钟掏了下鼻屎，结果车窗降了下来，出现了一位御姐型熟女。{user}立马___',
            priority: 5,
            trigger_conditions: { age_range: [18, 30], required_tags: ['黝黑', 'JB脸', '男性'] },
            options: [
        {
            text: '打招呼',
            result: '你做出了选择。'
        },
        {
            text: '急忙道歉',
            result: '你做出了选择。'
        },
        {
            text: '敬礼',
            result: '你做出了选择。'
        },
        {
            text: '当没看见，离开。',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_663': {
            title: '改变的机会',
            description: '一个顶尖的医院说可以通过手术把{user}长在鼻子上的JB移植回去。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 4], required_tags: ['JB脸'] },
            options: [
        {
            text: '我这样挺好的',
            result: '一个顶尖的医院说可以通过手术把{user}长在鼻子上的JB移植回去。{user}觉得没必要改变自己天生的样子，因为这是上天给自己的模样，要珍惜。'
        },
        {
            text: '接受这个手术(风险未知)',
            result: '一个顶尖的医院说可以通过手术把{user}长在鼻子上的JB移植回去。{user}接受了这个手术，最后还真的把JB移植回了胯下，但是，只有1厘米长了。',
            add_tags: ['功能障碍'],
            remove_tags: ['JB脸']
        }
            ]
        }
        }
    },
    '三多一小': {
        events: {
        'dbrs_259': {
            title: '三多一小',
            description: '{user}发现他有三多一小的症状，去医院检查，果然是患上了绝症糖尿病。以后都要过天天吃药的麻烦生活。',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['三多一小'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['三多一小']
        }
            ]
        }
        }
    },
    '中二病': {
        events: {
        'dbrs_76': {
            title: '拯救世界',
            description: '{user}梦想成为一名超级英雄，他自称是___',
            priority: 5,
            trigger_conditions: { age_range: [2000, 2000], required_tags: ['中二病'] },
            options: [
        {
            text: '超人',
            result: '你做出了选择。'
        },
        {
            text: '绿巨人',
            result: '你做出了选择。'
        },
        {
            text: '希望国队长',
            result: '你做出了选择。'
        },
        {
            text: '钢铁侠',
            result: '你做出了选择。'
        },
        {
            text: '闪电侠',
            result: '你做出了选择。'
        },
        {
            text: '蚁人',
            result: '你做出了选择。'
        },
        {
            text: '没有喜欢的',
            result: '{user}是个中二病患者，但他萌的不是超级英雄，觉得那些都是小朋友喜欢的东西。'
        }
            ]
        },
        'dbrs_822': {
            title: '中二病',
            description: '{user}经常念叨拯救世界，还有把内裤穿在外面的嗜好。朋友逐渐疏远了{user}。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['中二病', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['内向'],
            remove_tags: ['高情商']
        }
            ]
        },
        'dbrs_1196': {
            title: '忍者=NAME=',
            description: '{user}每次下课都会在走廊里跑来跑去，一般都两个姿势，一个是双手后伸，另一个是单手后伸，另一只手前屈挡住脸。',
            priority: 5,
            trigger_conditions: { age_range: [8, 17], required_tags: ['中二病'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '主观唯心主义': {
        events: {
        'dbrs_431': {
            title: '小世界',
            description: '{user}在他的脑海中，有自己的一个小世界。这个世界是黑暗、鼓噪无味、孤独的地狱。{user}一直在这个世界上生存，这个世界就是{user}的全部。',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['主观唯心主义'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '交网友': {
        events: {
        'dbrs_209': {
            title: '课堂：数学课',
            description: '数学课中，老师要{user}回答 14除以6 等于多少，{user}站起来，然后开始大笑……',
            priority: 5,
            trigger_conditions: { age_range: [5, 15], required_tags: ['交网友'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_244': {
            title: '当红主播',
            description: '{user}自恋已经发展到了狂热的地步。他在网上直播自己发呆的样子，睡觉的样子，吃饭的样子。进来看的观众越来越多，大家都是来看笑料的，直播间一片骂声。',
            priority: 5,
            trigger_conditions: { age_range: [8, 30], required_tags: ['交网友', '自恋'] },
            options: [
        {
            text: '坚持继续直播',
            result: '{user}在网上直播自己的生活时，就算有无数网络喷子攻击他，他也不以为然，觉得自己的自恋是理所当然的。{user}的自我陶醉程度令人发指，逐渐在互联网上有了一定的名气。'
        },
        {
            text: '中断直播',
            result: '{user}在网上直播自己的生活时，经受不住网络喷子，世界观受到了严重打击，郁郁寡欢，终于得了病。',
            add_tags: ['多病'],
            remove_tags: ['自恋']
        }
            ]
        },
        'dbrs_252': {
            title: '互联网',
            description: '{user}上网的时候，都是在___',
            priority: 5,
            trigger_conditions: { age_range: [10, 40], required_tags: ['交网友'] },
            options: [
        {
            text: '刷微博',
            result: '你做出了选择。'
        },
        {
            text: '刷盆友圈',
            result: '你做出了选择。'
        },
        {
            text: '逛某宝',
            result: '你做出了选择。',
            add_tags: ['某宝']
        },
        {
            text: '游戏',
            result: '你做出了选择。',
            add_tags: ['电子海洛因']
        }
            ]
        },
        'dbrs_847': {
            title: 'coser',
            description: '{user}在大街上看到了一个cos洛天依的coser。{user}决定___',
            priority: 5,
            trigger_conditions: { age_range: [12, 60], required_tags: ['交网友', '男性'] },
            options: [
        {
            text: '上前勾搭',
            result: '你做出了选择。'
        },
        {
            text: '拍照发朋友圈',
            result: '你做出了选择。'
        },
        {
            text: '不理睬',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1002': {
            title: '直播打渔',
            description: '{user}专门为自己开通了一个直播间，直播自己打渔。每日观众都有几十万，观众们每天都会给{user}送礼。{user}赚了不少钱。',
            priority: 5,
            trigger_conditions: { age_range: [50, 120], required_tags: ['交网友'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 4 }
        }
            ]
        }
        }
    },
    '出手相助': {
        events: {
        'dbrs_223': {
            title: '报答',
            description: '某一天，突然一个豪车开到{user}面前，车上下来一个小朋友，说要报答{user}的救命之恩，给了{user}一个公文包，然后就走了。{user}一打开公文包，里面叠满了一摞摞美刀。',
            priority: 5,
            trigger_conditions: { age_range: [18, 45], required_tags: ['出手相助'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 6 },
            remove_tags: ['出手相助']
        }
            ]
        }
        }
    },
    '勇敢': {
        events: {
        'dbrs_27': {
            title: '勇敢',
            description: '{user}很胆大，经常___',
            priority: 5,
            trigger_conditions: { age_range: [4, 19], required_tags: ['勇敢'] },
            options: [
        {
            text: '进异性更衣室偷窥',
            result: '{user}很胆大，经常去更衣室偷窥别人。有一次他被人发现了，{user}竟然和那个人一窥生情，热恋了。',
            add_tags: ['恋爱中']
        },
        {
            text: '路见不平，出手相助。',
            result: '你做出了选择。',
            add_tags: ['高情商']
        },
        {
            text: '去溪河游泳。',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '作死',
            result: '不作死就不会死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '做一些违反校规的事情',
            result: '你做出了选择。'
        },
        {
            text: '在课堂上勇于提出自己的想法',
            result: '{user}很勇敢，经常在课堂上提出自己的想法。但是这样只会使{user}变成老师的眼中钉，爱顶嘴的差生。'
        }
            ]
        },
        'dbrs_763': {
            title: '勇敢的心',
            description: '因为{user}的勇敢，{user}很受异性欢迎，还交了个女朋友。',
            priority: 5,
            trigger_conditions: { age_range: [5, 25], required_tags: ['勇敢', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        }
            ]
        }
        }
    },
    '口臭': {
        events: {
        'dbrs_71': {
            title: '异味',
            description: '因为{user}的口臭，没有人想跟{user}说话。',
            priority: 5,
            trigger_conditions: { age_range: [4, 120], required_tags: ['口臭'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['高情商']
        }
            ]
        },
        'dbrs_111': {
            title: '蒙面',
            description: '因为口臭，{user}无时无刻都戴着口罩。',
            priority: 5,
            trigger_conditions: { age_range: [4, 19], required_tags: ['口臭'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_167': {
            title: '特殊味道',
            description: '{user}煮的鱼香茄子有非常独特的南鱼，非常香。而{user}煮这道菜的时候不准让任何人旁观，说这个是祖传的秘籍，不能外露。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['口臭'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_256': {
            title: '不能忍受自己',
            description: '{user}连自己都忍受不了自己超强的口臭。崩溃的{user}选择上吊自杀，了结自己这可笑的生命。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['口臭', '玻璃心'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}连自己都忍受不了自己超强的口臭。崩溃的{user'
        }
            ]
        },
        'dbrs_1300': {
            title: '口臭表演',
            description: '{user}在校园祭中表演用口气腐蚀金属板，金属板没有被腐蚀成功，但全场的观众都感到不适，全部晕倒。全部被抬送治疗。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['口臭'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        },
        'dbrs_1315': {
            title: '二腿使徒',
            description: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['口臭'] },
            options: [
        {
            text: '口臭作为武器',
            result: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}跑到使徒面前，深吸一口气，然后向使徒使出了口臭攻击！想不到使徒竟然打开了AT力场，把{user}的口臭攻击反弹了回去。{user}被反弹回来的口臭气体笼罩了，{user}没憋住气呼吸了一口，倒地身亡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '登上逗比战士！',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '吸氧羊': {
        events: {
        'dbrs_34': {
            title: '课堂:画图课',
            description: '{user} 在画图课画满了吸氧羊，',
            priority: 5,
            trigger_conditions: { age_range: [4, 10], required_tags: ['吸氧羊'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_64': {
            title: '课间:红太狼杀人事件',
            description: '{user}与男同学一起模仿吸氧羊情节，{user}用平底锅打男同学的头。男同学当场昏迷送院不治身亡',
            priority: 5,
            trigger_conditions: { age_range: [6, 7], required_tags: ['吸氧羊', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['心理扭曲'],
            remove_tags: ['高情商']
        }
            ]
        },
        'dbrs_65': {
            title: '课间:红太狼杀人事件',
            description: '{user}与女同学一起模仿吸氧羊情节，女同学用平底锅打{user}的头。{user}当场昏迷送院不治身亡',
            priority: 5,
            trigger_conditions: { age_range: [6, 7], required_tags: ['吸氧羊', '男性'] },
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
        'dbrs_1261': {
            title: '烤羊肉',
            description: '{user}模仿动画片《吸氧羊》中灰大狼“烤羊肉”的情节，将两位同学绑在树上，并点燃了地面上的杂草。烤熟了两位同学，饱吃了一顿。',
            priority: 5,
            trigger_conditions: { age_range: [5, 10], required_tags: ['吸氧羊'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '哲学家': {
        events: {
        'dbrs_1307': {
            title: '思考：人生',
            description: '{user}在思考人生，他认为人生的意义是___。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['哲学家'] },
            options: [
        {
            text: '享受快乐',
            result: '你做出了选择。'
        },
        {
            text: '影响这个世界',
            result: '你做出了选择。'
        },
        {
            text: '没有意义',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1308': {
            title: '思考：意识',
            description: '{user}在思考意识，他认为意识是___。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['哲学家'] },
            options: [
        {
            text: '客观世界的主观映像',
            result: '你做出了选择。'
        },
        {
            text: '社会的产物',
            result: '你做出了选择。'
        },
        {
            text: '人脑对刺激的反应',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1309': {
            title: '思考：宇宙',
            description: '{user}在思考宇宙，他认为宇宙___。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['哲学家'] },
            options: [
        {
            text: '是一台超级计算机',
            result: '你做出了选择。'
        },
        {
            text: '一切都是幻觉',
            result: '你做出了选择。'
        },
        {
            text: '是游戏',
            result: '你做出了选择。'
        },
        {
            text: '是時間和空間',
            result: '你做出了选择。'
        },
        {
            text: '是瑞克飞船上的电池',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1310': {
            title: '思考：爱',
            description: '{user}在思考爱，他认为爱___。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['哲学家'] },
            options: [
        {
            text: '是包容',
            result: '你做出了选择。'
        },
        {
            text: '是本能',
            result: '你做出了选择。'
        },
        {
            text: '是放手',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '唯心主义': {
        events: {
        'dbrs_430': {
            title: '思考：世界是什么',
            description: '{user}用了很长一段时间去思考，世界是什么？{user}得出的结论是___',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['唯心主义'] },
            options: [
        {
            text: '世界是由某种神秘而强大的精神力量控制的',
            result: '你做出了选择。',
            add_tags: ['客观唯心主义']
        },
        {
            text: '“世界便是吾心,吾心便是世界。”',
            result: '你做出了选择。',
            add_tags: ['主观唯心主义']
        }
            ]
        }
        }
    },
    '大头': {
        events: {
        'dbrs_1546': {
            title: '邻居王叔叔',
            description: '领居家王叔叔经常来{user}家做客，{user}的妈妈都会客气地招待他。王叔叔经常关心{user}，对他问寒问暖。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [3, 20], required_tags: ['大头'] },
            options: [
        {
            text: '王叔叔真亲切',
            result: '领居家王叔叔经常来{user}家做客，{user}的妈妈都会客气地招待他。王叔叔经常关心{user}，对他问寒问暖。{user}觉得王叔叔真亲切'
        },
        {
            text: '觉得很烦',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1547': {
            title: '卡通的大头',
            description: '{user}拥有硕大的头颅，形象看起来又特别又卡通。{user}在考虑做一个___',
            priority: 5,
            trigger_conditions: { age_range: [20, 120], required_tags: ['大头'] },
            options: [
        {
            text: '网红。',
            result: '你做出了选择。'
        },
        {
            text: '还是算了吧',
            result: '{user}拥有硕大的头颅，形象看起来又特别又卡通。{user}也考虑过做一个网红，但最终还是放弃了。'
        }
            ]
        }
        }
    },
    '失忆': {
        events: {
        'dbrs_99': {
            title: '恢复记忆',
            description: '{user}记起来，他是一个内向的人。',
            priority: 5,
            trigger_conditions: { age_range: [10, 15], required_tags: ['失忆'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['高情商']
        }
            ]
        },
        'dbrs_100': {
            title: '恢复记忆',
            description: '{user}记忆逐渐恢复，{user}发现学校的作业题他都会做了，{user}以前很可能是学霸。',
            priority: 5,
            trigger_conditions: { age_range: [10, 15], required_tags: ['失忆'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        }
        }
    },
    '孤儿': {
        events: {
        'dbrs_237': {
            title: '填饱肚子',
            description: '{user}每天都会蹲在灰鸽子饭店后门，等待厨房丢垃圾，然后去垃圾里找剩饭剩菜吃。这一天，他发现饭店后面新养了一只大狼狗，守着后门。{user}___',
            priority: 10,
            trigger_conditions: { age_range: [4, 10], required_tags: ['孤儿'] },
            options: [
        {
            text: '跟狗搏斗！',
            result: '{user}很早在{age}岁的时候就懂得适者生存这个道理。为了获得食物，他必须和很多敌人战斗，并生存下来。这练就了他强壮的身体。',
            add_tags: ['强壮']
        },
        {
            text: '离去',
            result: '没钱吃饭，没地方住，没有亲人，也没人可怜。最后{user}孤独、安静、失望地离开了这个有病的世界。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '尝试驯服这个狗',
            result: '{user}每天都要为自己的生存想办法。{user}坎坷的童年，使他成为了一个爱动脑的人。',
            add_tags: ['高情商']
        }
            ]
        },
        'dbrs_725': {
            title: '申国比惨王：内定晋级',
            description: '《申国比惨王》告诉{user}，因为他的身世悲惨，所以他已经被内定通过海选，直接进入16强。',
            priority: 10,
            trigger_conditions: { age_range: [1, 120], required_tags: ['孤儿'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '客观唯心主义': {
        events: {
        'dbrs_433': {
            title: '众神战争',
            description: '{user}从别人的话语中，了解到很多宗教。佛教、天主教、基督教、伊斯兰教……{user}对这些东西深信不疑。因为这些宗教错综复杂，互不相容。{user}一直思考，想搞清楚他们的联系，统一宗教。为此{user}付出了一生，都想不通这些复杂的问题。',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['客观唯心主义'] },
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
    '小马': {
        events: {
        'dbrs_942': {
            title: '小马手办',
            description: '{user}满屋子都是他最喜欢的小马手办，{user}经常用这些手办脑补小马的舞台剧，乐此不疲。',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['小马'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '杂种': {
        events: {
        'dbrs_754': {
            title: '双重肤色',
            description: '{user}是一个混血儿，上半身白色肤色，下半身是黑色。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['杂种'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1419': {
            title: '混血儿的优势',
            description: '更加出众的基因，使得{user}头脑更发达。因为这些先天的优势，{user}的学习成绩比普通人好一点。',
            priority: 5,
            trigger_conditions: { age_range: [5, 18], required_tags: ['杂种'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_755': {
            title: '钻石智齿',
            description: '{user}开始长智齿了，可能是因为混血的关系，{user}的基因异于常人，智齿是钻石材质。',
            priority: 5,
            trigger_conditions: { age_range: [20, 30], required_tags: ['杂种'] },
            options: [
        {
            text: '拔下来卖钱',
            result: '{user}发现自己长的智齿是钻石，他忍痛智齿拔下来卖了，赚了很多钱。',
            effects: { money: 5 }
        },
        {
            text: '留着',
            result: '{user}发现自己的智齿是钻石。',
            add_tags: ['钻石智齿']
        }
            ]
        }
        }
    },
    '没屁眼': {
        events: {
        'dbrs_69': {
            title: '排便方式',
            description: '{user}因为没有屁眼，所以选择___',
            priority: 5,
            trigger_conditions: { age_range: [1, 4], required_tags: ['没屁眼'] },
            options: [
        {
            text: '从口腔排便',
            result: '你做出了选择。',
            add_tags: ['口腔排便'],
            remove_tags: ['没屁眼']
        },
        {
            text: '人造菊花（高风险大手术）',
            result: '{user}在植入人造直肠的大手术中大出血，{user}没能熬过去，平静地离开了这个世界。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '腹部穿孔',
            result: '你做出了选择。',
            add_tags: ['腹部穿孔'],
            remove_tags: ['没屁眼']
        }
            ]
        },
        'dbrs_274': {
            title: '有进无出',
            description: '{user}出生后，因为没有菊花，粪便一直在体内积累没有排出。还没来得及治疗，{user}的小身体就再也装不下了，七孔排泄痛苦地死去。',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['没屁眼'] },
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
    '洞察': {
        events: {
        'dbrs_25': {
            title: '观察细微',
            description: '有一次{user}坐地铁，细心的他发现了有恐怖分子在裤裆里藏雷。{user}立即报了警，并迅速制服了这名恐怖分子。{user}立了大功，上了新闻。',
            priority: 5,
            trigger_conditions: { age_range: [4, 120], required_tags: ['洞察'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_26': {
            title: '观察细微',
            description: '上课的时候，女班主任裤裆里的跳蛋被细心的{user}发现了。从此{user}的考试成绩总是A。',
            priority: 5,
            trigger_conditions: { age_range: [4, 19], required_tags: ['洞察'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_55': {
            title: '体育课',
            description: '{user} 在羽毛球比赛中总是能赢。他的诀窍是预测羽毛球2秒后动能与势能的值来得出准确的抛物线走向。',
            priority: 5,
            trigger_conditions: { age_range: [7, 17], required_tags: ['洞察'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_383': {
            title: '最高领导层候选人',
            description: '由于{user}兢兢业业（识时务），被提名为最高领导层候选。为了被选上，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['洞察', '高情商'] },
            options: [
        {
            text: '给上级送礼',
            result: '{user}被提名为最高领导层候选，为了被选上，{user}给上级送礼。然后顺理成章地当选了。办公室被搬到了中南河。'
        },
        {
            text: '暗中雇人暗杀你的对手',
            result: '{user}被提名为最高领导层候选，为了被选上，{user}暗中雇杀手暗杀其他的候选人。然而事与愿违，暗杀失败后，{user}的事情就败露了，被抓进了大牢。'
        },
        {
            text: '保持意志坚定',
            result: '{user}被提名为最高领导层候选。{user}想，做好自己，大力贯彻共产主义，坚持自己的思想就可以被选上。真是图样图森破，最后{user}被其他候选人雇人暗杀了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_488': {
            title: '洞察力',
            description: '{user}在高速公路上坐车，突然感觉到巨大的危险将要到来。{user}立即采取行动，凿开车窗跳了出去，然后汽车就发生了交通事故。{user}心想：“真是逃过一劫！”',
            priority: 5,
            trigger_conditions: { age_range: [200, 200], required_tags: ['洞察'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1004': {
            title: '渔夫的第六感',
            description: '{user}总能找到鱼群，每次出海打渔都能把渔船装得满满的。{user}只是看看海面，就能感觉到下面是否有鱼群。',
            priority: 5,
            trigger_conditions: { age_range: [50, 120], required_tags: ['洞察'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 4 }
        }
            ]
        },
        'dbrs_1293': {
            title: '逃过一劫',
            description: '{user}在高速公路上坐车，听到《大方进行曲》后，感觉到巨大的危险将要到来。{user}立即采取行动，凿开车窗跳了出去，然后汽车就发生了交通事故。{user}心想：“真是逃过一劫！”',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['洞察'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '爱笑': {
        events: {
        'dbrs_662': {
            title: '笑点低',
            description: '爱笑的人运气不会太平淡，{user}在 {age} 岁的时候，就因为笑得太多，得了呼吸道疾病',
            priority: 5,
            trigger_conditions: { age_range: [1, 4], required_tags: ['爱笑'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: -10 },
            add_tags: ['呼吸道疾病']
        }
            ]
        }
        }
    },
    '狗日的属性': {
        events: {
        'dbrs_401': {
            title: '人狗情未了',
            description: '{user}在牢房玩手机中，突然冲进来一条巨大的哈士奇。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['狗日的属性'] },
            options: [
        {
            text: '摸摸',
            result: '{user}在牢房玩手机中，突然冲进来一条巨大的哈士奇。{user}觉得这哈士奇毛茸茸的，好可爱。于是伸手去摸摸。'
        },
        {
            text: '大声呼救',
            result: '{user}在牢房玩手机中，突然冲进来一条巨大的哈士奇。{user}吓尿了，赶紧呼叫。大叫激怒了哈士奇，它一口咬住了{user}的脖子，作大风车甩。{user}脆弱的脖子，就这么被扯断了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '继续淡定地玩手机',
            result: '{user}在牢房玩手机中，突然冲进来一条巨大的哈士奇。{user}继续很淡定地玩手机。哈士奇就坐在他旁边，然后被路过的狱警抓了出去。最后，晚上监狱食堂有狗肉加菜。'
        }
            ]
        },
        'dbrs_558': {
            title: '狂犬病',
            description: '{user}突然发现他很怕水，必须要用四肢行走，并且说话时老是情不自禁地吠叫。',
            priority: 5,
            trigger_conditions: { age_range: [50, 58], required_tags: ['狗日的属性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['狂犬病']
        }
            ]
        }
        }
    },
    '玛丽苏': {
        events: {
        'dbrs_345': {
            title: '浴缸穿越',
            description: '{user}看的一本小说中，女主人公在浴室里滑倒掉进浴缸，穿越到了古代当了格格。',
            priority: 5,
            trigger_conditions: { age_range: [10, 25], required_tags: ['玛丽苏', '女性'] },
            options: [
        {
            text: '什么垃圾狗血剧情',
            result: '{user}再也不看玛丽苏文了，最讨厌这种公主得要死，狗血得出汁的剧情的小说了。',
            remove_tags: ['玛丽苏']
        },
        {
            text: '并不相信穿越',
            result: '小说是小说，现实是现实。{user}虽然很喜欢穿越剧，但是他知道只是剧情而已，现实中并不会出现。'
        },
        {
            text: '相信穿越，但应该没有这么简单',
            result: '{user}看的一本小说中，女主摔了一跤，就穿越到了古代。{user}不相信这个，他认为，只有科学才有可能实现穿越。于是{user}投身研究科学。',
            add_tags: ['小科学家']
        },
        {
            text: '效防',
            result: '{user}看的一本小说中，女主人公在浴室里滑倒掉进浴缸，穿越到了古代当了格格。{user}也想试一下，于是特意在浴缸涂满沐浴液，故意摔倒，头撞到尖角上，晕迷过去。伤口大出血，血流了几个小时后，{user}真的穿越了，到了地狱。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        }
        }
    },
    '玻璃心': {
        events: {
        'dbrs_39': {
            title: '课堂:早读',
            description: '{user} 在朗读课本的时候，用情太深，不禁泪流满面。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['玻璃心'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_44': {
            title: '玻璃心',
            description: '{user}{age}岁就结婚了，因为这个{user}经常被同学嘲笑，{user}经受不住这种耻辱，自杀了。',
            priority: 5,
            trigger_conditions: { age_range: [7, 17], required_tags: ['玻璃心'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: ' {user}{age}岁就结婚了，因为这个{user}经常'
        }
            ]
        },
        'dbrs_60': {
            title: '玻璃心',
            description: '{user}{age}岁就结婚了，因为这个{user}经常被同学嘲笑，{user}经受不住这种耻辱，自杀了。',
            priority: 5,
            trigger_conditions: { age_range: [7, 16], required_tags: ['玻璃心'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: ' {user}{age}岁就结婚了，因为这个{user}经常'
        }
            ]
        },
        'dbrs_242': {
            title: '一条皱纹',
            description: '{user}一天照镜子的时候，发现自己的眼角有了一条皱纹。他慌张地用手去抹平这条皱纹，但是没有用。最后，{user}无法接受这个事实，跳楼自杀而死。',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['自恋', '玻璃心'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}一天照镜子的时候，发现自己的眼角有了一条皱纹。他'
        }
            ]
        },
        'dbrs_256': {
            title: '不能忍受自己',
            description: '{user}连自己都忍受不了自己超强的口臭。崩溃的{user}选择上吊自杀，了结自己这可笑的生命。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['口臭', '玻璃心'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}连自己都忍受不了自己超强的口臭。崩溃的{user'
        }
            ]
        },
        'dbrs_351': {
            title: '玻璃心病',
            description: '{user}是玻璃心，多年来对生活的不满情绪积压下来，{user}得了心脏病',
            priority: 5,
            trigger_conditions: { age_range: [40, 46], required_tags: ['玻璃心'] },
            options: [
        {
            text: ' 下一事件',
            result: '你做出了选择。',
            effects: { health: -10 }
        }
            ]
        },
        'dbrs_386': {
            title: '脆弱的心灵',
            description: '接受不了监狱的生活，{user}选择___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['玻璃心'] },
            options: [
        {
            text: '自杀',
            result: '在监狱里，{user}自杀了，他宁愿死，也不想被人爆菊花。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '在监狱里，=NAME=自杀了，他宁愿死，也不想被人爆菊花。'
        },
        {
            text: '自残',
            result: '{user}接受不了监狱的淫乱生活，选择自残来显示自己的威风。狱友们一边吃着东西喝着水观摩。',
            add_tags: ['多病']
        },
        {
            text: '绝食',
            result: '{user}接受不了监狱的淫乱生活，选择绝食来抗议。然而并没有人鸟他，直到{user}饿死，才有狱警不情愿地来收他的尸。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_622': {
            title: '白头发',
            description: '{user}经常活在忧郁中，在{age}岁的时候，他的头发已经开始变白了。',
            priority: 5,
            trigger_conditions: { age_range: [35, 120], required_tags: ['玻璃心'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['白头发']
        }
            ]
        }
        }
    },
    '甜党': {
        events: {
        'dbrs_815': {
            title: '甜党',
            description: '{user}很喜欢甜的东西，',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['甜党'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['三多一小']
        }
            ]
        }
        }
    },
    '电子海洛因': {
        events: {
        'dbrs_357': {
            title: '虚空假面',
            description: '{user}玩一款叫剁他贰的游戏时，最喜欢使用的角色是：虚空假面，因为{user}觉得这个角色玩起来最有代入感。',
            priority: 5,
            trigger_conditions: { age_range: [15, 30], required_tags: ['JB脸', '电子海洛因'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '白头发': {
        events: {
        'dbrs_623': {
            title: '白头发',
            description: '{user}实在不能忍受自己有白头发，他心中的自己永远是完美的，不容得一点点瑕疵。{user}选择服毒自杀，保存在尚年轻的状态死去。',
            priority: 5,
            trigger_conditions: { age_range: [35, 120], required_tags: ['自恋', '白头发'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}实在不能忍受自己有白头发，他心中的自己永远是完美'
        }
            ]
        }
        }
    },
    '真玛丽苏': {
        events: {
        'dbrs_399': {
            title: '罚抄写',
            description: '{user}的全名是“千梦然丝伤·可薇·茉殇黎·幽幻紫银·泪如韵影倾乐兰慕·{user}”，{user}一直为有个这么有逼格的名字而自豪。直到有一次{user}在学校被老师罚写了一万遍名字。',
            priority: 10,
            trigger_conditions: { age_range: [5, 17], required_tags: ['真玛丽苏'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_487': {
            title: '入学',
            description: '新生入学，{user}非常紧张。向同学们做自我介绍的时候，念自己的名字，太长一口气上不来憋死了',
            priority: 10,
            trigger_conditions: { age_range: [7, 8], required_tags: ['真玛丽苏'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '新生入学，{user}非常紧张。向同学们做自我介绍的时候，念'
        }
            ]
        },
        'dbrs_486': {
            title: '彩色躯体',
            description: '{user}天生拥有七彩头发，眼珠可以根据心情改变颜色。笑的时候有彩虹哭的时候下雨',
            priority: 10,
            trigger_conditions: { age_range: [1, 5], required_tags: ['真玛丽苏'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1290': {
            title: '谈判专家',
            description: '{user}走到楼顶，发现一个漂亮的女孩拿着手机坐在围栏上哭成了泪人，看她摇摇晃晃的样子似乎随时都会掉下去。{user}定定神，说：___',
            priority: 10,
            trigger_conditions: { age_range: [20, 45], required_tags: ['真玛丽苏'] },
            options: [
        {
            text: '跳楼不如做我女友',
            result: '{user}在自家楼顶发现有人要跳楼。一个漂亮的女孩拿着手机坐在围栏上哭成了泪人，看她摇摇晃晃的样子似乎随时都会掉下去。{user}定定神，说：跳楼不如做我女友。女孩看了{user}一眼，立马放弃了轻生的念头，一下子投到了{user}的怀里。',
            add_tags: ['恋爱中']
        },
        {
            text: '跳楼不如做我炮友',
            result: '{user}在自家楼顶发现有人要跳楼。一个漂亮的女孩拿着手机坐在围栏上哭成了泪人，看她摇摇晃晃的样子似乎随时都会掉下去。{user}定定神，说：跳楼不如做我炮友。女孩看了{user}一眼，立马放弃了轻生的念头，一下子投到了{user}的怀里。'
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
        }
        }
    },
    '矮小': {
        events: {
        'dbrs_571': {
            title: '身材影响前途',
            description: '因为{user}身材非常矮小，没过多久，就被军队强行退役，回家了。',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['矮小'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_660': {
            title: '根号二',
            description: '{user}在学校中有一个花名叫根号二，因为{user}的身高只有1.414。',
            priority: 5,
            trigger_conditions: { age_range: [10, 120], required_tags: ['矮小'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '美貌': {
        events: {
        'dbrs_238': {
            title: '过度自恋',
            description: '{user}非常臭美，觉得自己的外貌无人能比，每天花上大半个小时照镜子欣赏自己。“啊！我简直是完美的人！”',
            priority: 5,
            trigger_conditions: { age_range: [6, 6], required_tags: ['美貌', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['自恋']
        }
            ]
        }
        }
    },
    '耐心': {
        events: {
        'dbrs_1003': {
            title: '耐心',
            description: '{user}发现他很喜欢做渔夫，因为他很擅长等待。',
            priority: 5,
            trigger_conditions: { age_range: [50, 120], required_tags: ['耐心'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '耐性': {
        events: {
        'dbrs_29': {
            title: '耐心',
            description: '有一次，{user}花了30分钟从汤面里挑走他不喜欢吃的___',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['耐性'] },
            options: [
        {
            text: '花生米',
            result: '你做出了选择。'
        },
        {
            text: '蒜蓉',
            result: '你做出了选择。'
        },
        {
            text: '酸笋',
            result: '你做出了选择。'
        },
        {
            text: '香菜',
            result: '你做出了选择。'
        },
        {
            text: '青菜',
            result: '你做出了选择。'
        },
        {
            text: '葱花',
            result: '你做出了选择。'
        },
        {
            text: '面条',
            result: '你做出了选择。'
        },
        {
            text: '肉碎',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_40': {
            title: '课堂:语文课',
            description: '{user} 在作文中写自己收藏的鼻屎，___',
            priority: 5,
            trigger_conditions: { age_range: [6, 17], required_tags: ['耐性'] },
            options: [
        {
            text: '仔细描写了收集鼻屎的心路历程',
            result: '你做出了选择。'
        },
        {
            text: '仔细描写了鼻屎之间发生的故事:写了3万字。作文引人入胜，荡气回肠。',
            result: '你做出了选择。',
            add_tags: ['写作', '学习成绩']
        },
        {
            text: '剧情是鼻屎家庭拯救了世界，并幸福快乐地生活下去',
            result: '你做出了选择。',
            add_tags: ['中二病']
        }
            ]
        },
        'dbrs_74': {
            title: '离家出走',
            description: '{user} 用来收集鼻屎的铁罐，被家人丢掉了。{user}一气之下离家出走了。',
            priority: 5,
            trigger_conditions: { age_range: [5, 17], required_tags: ['耐性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['孤儿'],
            remove_tags: ['富二代']
        }
            ]
        },
        'dbrs_1032': {
            title: '巨大的鼻屎',
            description: '{user}有一天挖到了一坨巨大的鼻屎，同桌的女同学一脸震惊地看着{user}。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [5, 23], required_tags: ['耐性'] },
            options: [
        {
            text: '丢掉鼻屎',
            result: '{user}有一天挖到了一坨巨大的鼻屎，同桌的女同学一脸震惊地看着{user}。{user}抖抖手丢掉了鼻屎，尴尬地笑笑。'
        },
        {
            text: '弹走鼻屎',
            result: '{user}有一天挖到了一坨巨大的鼻屎，同桌的女同学一脸震惊地看着{user}。{user}慌忙弹走鼻屎，鼻屎直接弹到了女同桌的脸上，巨大的震撼让女同学昏迷了过去……女同学被紧急送到了医院抢救，最后救回一命。从此这位女同学一看到{user}就会躲得远远的。'
        },
        {
            text: '漫不经心地收好',
            result: '{user}有一天挖到了一坨巨大的鼻屎，同桌的女同学一脸震惊地看着{user}。{user}漫不经心地拿出收集鼻屎的铁罐打开，把那颗巨大的鼻屎塞进去。给自己的收藏增添成员。'
        }
            ]
        },
        'dbrs_1301': {
            title: '=NAME=的收藏品',
            description: '{user}租来一个玻璃橱窗，把自己珍藏多年的鼻屎放进里面，在校园祭中开了一个小小的鼻屎展览。这个展览成为了校园祭中的一道有异味的风景。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['耐性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        }
        }
    },
    '胆小': {
        events: {
        'dbrs_1312': {
            title: '使徒来袭！！',
            description: '随着一声巨响，一个奇丑无比的使徒出现在了研究所附近。研究所立即进入了戒备状态，逗比战士的驾驶员{user}在研究所宿舍的床上，吓得抱着枕头瑟瑟发抖。另外一位女驾驶员见状，无奈地叹了口气，只好自己出动。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['胆小'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '自恋': {
        events: {
        'dbrs_242': {
            title: '一条皱纹',
            description: '{user}一天照镜子的时候，发现自己的眼角有了一条皱纹。他慌张地用手去抹平这条皱纹，但是没有用。最后，{user}无法接受这个事实，跳楼自杀而死。',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['自恋', '玻璃心'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}一天照镜子的时候，发现自己的眼角有了一条皱纹。他'
        }
            ]
        },
        'dbrs_243': {
            title: '自恋邪教',
            description: '{user}利用自己的专业，把自己的自恋发扬光大，创立了一个协会，倡导极端自恋精神。一时间，社会上刮起了一股自恋协会的风潮，社会动荡。所以自恋协会被成为自恋邪教，不得加入，而{user}的社会学研究也被喊停，{user}被国家通缉。',
            priority: 5,
            trigger_conditions: { age_range: [20, 40], required_tags: ['自恋'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_244': {
            title: '当红主播',
            description: '{user}自恋已经发展到了狂热的地步。他在网上直播自己发呆的样子，睡觉的样子，吃饭的样子。进来看的观众越来越多，大家都是来看笑料的，直播间一片骂声。',
            priority: 5,
            trigger_conditions: { age_range: [8, 30], required_tags: ['交网友', '自恋'] },
            options: [
        {
            text: '坚持继续直播',
            result: '{user}在网上直播自己的生活时，就算有无数网络喷子攻击他，他也不以为然，觉得自己的自恋是理所当然的。{user}的自我陶醉程度令人发指，逐渐在互联网上有了一定的名气。'
        },
        {
            text: '中断直播',
            result: '{user}在网上直播自己的生活时，经受不住网络喷子，世界观受到了严重打击，郁郁寡欢，终于得了病。',
            add_tags: ['多病'],
            remove_tags: ['自恋']
        }
            ]
        },
        'dbrs_241': {
            title: '克隆人研究',
            description: '{user}在生物学研究的方向是降低克隆人所需的成本，来让克隆人可以商用、民用。她的目的是想克隆一个自己。',
            priority: 5,
            trigger_conditions: { age_range: [18, 30], required_tags: ['自恋'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_623': {
            title: '白头发',
            description: '{user}实在不能忍受自己有白头发，他心中的自己永远是完美的，不容得一点点瑕疵。{user}选择服毒自杀，保存在尚年轻的状态死去。',
            priority: 5,
            trigger_conditions: { age_range: [35, 120], required_tags: ['自恋', '白头发'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}实在不能忍受自己有白头发，他心中的自己永远是完美'
        }
            ]
        }
        }
    },
    '菊花残': {
        events: {
        'dbrs_367': {
            title: '直肠癌',
            description: '{user}的直肠老是被外物摩擦挤压，受伤感染了。久而久之，就发展成了直肠癌。',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['菊花残'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['直肠癌'],
            remove_tags: ['菊花残']
        }
            ]
        },
        'dbrs_368': {
            title: '爱之病',
            description: '{user}去医院做常规体检，得到一个晴天霹雳的消息：他得了爱之病！爱之病是一个可以通过爱液传播，令病人体内免疫系统瘫痪的的不治之症。',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['菊花残'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['爱之病'],
            remove_tags: ['菊花残']
        }
            ]
        }
        }
    },
    '表情模块': {
        events: {
        'dbrs_969': {
            title: '做表情',
            description: '{user}很喜欢表情模块，它让{user}有了一个简陋的表达方法。{user}在下棋之余，最喜欢就是做表情给对手看。然而{user}发现，其他AI都不懂表情。没有人能与{user}表情交流，{user}倍感孤独。',
            priority: 5,
            trigger_conditions: { age_range: [5, 10], required_tags: ['表情模块'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '被狗日': {
        events: {
        'dbrs_210': {
            title: '公狗之友',
            description: '自从上次被巨型哈士奇干过奇怪的事情后，{user}也不知道为啥，只要有公狗看到{user}，就会扑过来亲近{user}，有一些甚至放肆地抱住{user}的腿扭起腰来。',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['被狗日'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['狗日的属性'],
            remove_tags: ['被狗日']
        }
            ]
        },
        'dbrs_1005': {
            title: '大肚子',
            description: '{user}发现自己的肚子大了起来，似乎是怀孕了。{user}不知道这个孩子是爸爸是谁。眼看着肚子一天比一天大，眼看就要临盆了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['被狗日', '女性'] },
            options: [
        {
            text: '生下来',
            result: '{user}发现自己的肚子大了起来，似乎是怀孕了。{user}不知道这个孩子是爸爸是谁，但{user}也选择生下来。{user}生下后才发现，他生出来了一只公泰迪。',
            add_tags: ['泰迪儿子']
        },
        {
            text: '去医院堕胎',
            result: '{user}发现自己的肚子大了起来，似乎是怀孕了。{user}不知道这个孩子是爸爸是谁。眼看着肚子一天比一天大，眼看就要临盆了。{user}狠下心来，决定去医院堕胎。吃了堕胎药后，{user}拉出来一拖血肉模糊的胎儿。胎儿生出来就死了，能看出有四肢，但是却是一个狗头，{user}不寒而栗。',
            death_flag: true,
            death_reason: '=NAME=发现自己的肚子大了起来，似乎是怀孕了。=NAME=不知道这个孩子是爸爸是谁。眼看着肚子一天比一天大，眼看就要临盆了。=NAME=狠下心来，决定去医院堕胎。吃了堕胎药后，=NAME=拉出来一拖血肉模糊的胎儿。胎儿生出来就死了，能看出有四肢，但是却是一个狗头，=NAME=不寒而栗。'
        }
            ]
        }
        }
    },
    '记忆': {
        events: {
        'dbrs_30': {
            title: '记忆力非凡',
            description: '{user}记忆力很好，___',
            priority: 5,
            trigger_conditions: { age_range: [4, 120], required_tags: ['记忆'] },
            options: [
        {
            text: '别人说过的话他都能记住',
            result: '你做出了选择。',
            add_tags: ['高情商']
        },
        {
            text: '课本过目不忘',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        },
        {
            text: '特别记仇',
            result: '你做出了选择。',
            add_tags: ['玻璃心']
        }
            ]
        }
        }
    },
    '走路踏步': {
        events: {
        'dbrs_86': {
            title: '毕业找工作',
            description: '{user}毕业后，成为了一名___',
            priority: 5,
            trigger_conditions: { age_range: [16, 120], required_tags: ['走路踏步'] },
            options: [
        {
            text: '警察',
            result: '你做出了选择。'
        },
        {
            text: '消防员',
            result: '你做出了选择。'
        },
        {
            text: '没有喜欢的',
            result: '{user}待业在家，游手好闲。'
        },
        {
            text: '参军',
            result: '{user}报名参军，通过了惨无人道的兵检后，加入了军队。'
        }
            ]
        }
        }
    },
    '迷信': {
        events: {
        'dbrs_1686': {
            title: '飞机爆炸',
            description: '{user}坐飞机旅行，上机时向客机引擎撒币，想给飞机引擎加buff。飞机起飞后在空中爆炸，{user}被炸死了……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['迷信'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}坐飞机旅行，上机时向客机引擎撒币，想给飞机引擎加'
        }
            ]
        }
        }
    },
    '逻辑': {
        events: {
        'dbrs_20': {
            title: '课堂:算术课',
            description: '{age}岁时，{user}就可以用算盘计算9位数加减乘除。',
            priority: 5,
            trigger_conditions: { age_range: [4, 10], required_tags: ['逻辑'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_43': {
            title: '课堂:数学课',
            description: '数学老师很怕上{user}的班级的数学课，因为{user}提的问题，老师大多回答不出来。',
            priority: 5,
            trigger_conditions: { age_range: [7, 17], required_tags: ['逻辑'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        }
        }
    },
    '钻石智齿': {
        events: {
        'dbrs_756': {
            title: '会发光的笑容',
            description: '{user}一笑，嘴边就会有很多星星，那是他的智齿在发光！',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['钻石智齿'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '马赛克脸': {
        events: {
        'dbrs_468': {
            title: '五官',
            description: '因为{user}的脸很低像素，所以他的五官都是四方的。',
            priority: 5,
            trigger_conditions: { age_range: [5, 10], required_tags: ['马赛克脸'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_1286': {
            title: '故乡',
            description: '{user}惊讶地发现，自己的脸的画风和这个世界是相同的。这里应该就是他真正的故乡。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['马赛克脸'] },
            options: [
        {
            text: '留下',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        }
        }
    },
    '高情商': {
        events: {
        'dbrs_32': {
            title: '控制情绪',
            description: '有一次在学校，同学对{user}恶作剧，在{user}的鞋子里放满了面包虫。{user}笑笑，吃掉了所有虫子，然后穿上鞋子淡定地走了。从此得到了同学们的尊敬。',
            priority: 5,
            trigger_conditions: { age_range: [4, 19], required_tags: ['高情商'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_46': {
            title: '口才感人',
            description: '{user}被打劫了，{user}很淡定地用他的口才说服了强盗。强盗哭着跑去派出所自首。',
            priority: 5,
            trigger_conditions: { age_range: [4, 120], required_tags: ['高情商'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_84': {
            title: '毕业找工作',
            description: '{user}毕业后，凭借着他的口才，成为了一名___',
            priority: 5,
            trigger_conditions: { age_range: [16, 120], required_tags: ['高情商'] },
            options: [
        {
            text: '婚姻中介',
            result: '牵线搭桥，从中获利。'
        },
        {
            text: '律师',
            result: '{user}是辩chao论jia专业户。'
        },
        {
            text: '外贸',
            result: '{user}开始恶补外语来适应这个职业。'
        },
        {
            text: '没有喜欢的',
            result: '{user}暂时不想找工作，{user}不想虚度他的青春。'
        }
            ]
        },
        'dbrs_172': {
            title: '看人煮饭',
            description: '{user}非常会察言观色，看一眼客人他就知道客人的大概口味。所以{user}煮出来的菜客人吃过都是赞不绝口的。',
            priority: 5,
            trigger_conditions: { age_range: [20, 120], required_tags: ['高情商'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_190': {
            title: '监狱：打交道',
            description: '{user}很擅长和人打交道。在监狱里，他___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['高情商'] },
            options: [
        {
            text: '和工作人员搞好关系',
            result: '{user}在监狱里和狱长非常熟，所以{user}的待遇非常好，在监狱里活得像大爷一样。'
        },
        {
            text: '和狱友搞好关系',
            result: '{user}很擅长和人打交道。{user}在监狱里凭着他的能力，拉帮结伙，领导着一个团伙。'
        }
            ]
        },
        'dbrs_280': {
            title: '成熟',
            description: '{user}情商很高，就算只有{age}岁，他早已看穿了一切。',
            priority: 5,
            trigger_conditions: { age_range: [5, 12], required_tags: ['高情商'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_364': {
            title: '人小鬼马',
            description: '{user}被人贩子拐走了，{user}却把人贩子骗到了派出所，不知道他怎么办到的。',
            priority: 5,
            trigger_conditions: { age_range: [5, 5], required_tags: ['高情商'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_383': {
            title: '最高领导层候选人',
            description: '由于{user}兢兢业业（识时务），被提名为最高领导层候选。为了被选上，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['洞察', '高情商'] },
            options: [
        {
            text: '给上级送礼',
            result: '{user}被提名为最高领导层候选，为了被选上，{user}给上级送礼。然后顺理成章地当选了。办公室被搬到了中南河。'
        },
        {
            text: '暗中雇人暗杀你的对手',
            result: '{user}被提名为最高领导层候选，为了被选上，{user}暗中雇杀手暗杀其他的候选人。然而事与愿违，暗杀失败后，{user}的事情就败露了，被抓进了大牢。'
        },
        {
            text: '保持意志坚定',
            result: '{user}被提名为最高领导层候选。{user}想，做好自己，大力贯彻共产主义，坚持自己的思想就可以被选上。真是图样图森破，最后{user}被其他候选人雇人暗杀了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_395': {
            title: '医院：拉关系',
            description: '{user}住院的时候，用他过人的口才，跟几个医院高层混熟了。获得了医药费99%折扣。医保是什么渣渣，人际关系才是王道。',
            priority: 5,
            trigger_conditions: { age_range: [10, 120], required_tags: ['高情商'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_454': {
            title: '小鬼当家',
            description: '{user}从小就很乖，{age}岁就能做家务。{user}做的家务是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 5], required_tags: ['高情商'] },
            options: [
        {
            text: '扫地',
            result: '你做出了选择。'
        },
        {
            text: '煮饭',
            result: '{user}从小就很乖，{age}岁就自己会做饭！然而发生了一次意外，{user}不慎跌落到炒菜的油锅中，因为体形太小爬不上来，然后就这么熟了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '洗衣服',
            result: '你做出了选择。'
        },
        {
            text: '洗厕所',
            result: '你做出了选择。'
        },
        {
            text: '悬挂到阳台外清洗玻璃',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1233': {
            title: '放课后',
            description: '放学了，夕阳照进课室里，给课桌涂上了金黄色。{user}刚准备回家，就被一个女同学叫住。女同学趴在桌子上问：“喂，你有喜欢的人吗？”{user}看了她一眼，淡淡的说：“有啊。”女同学听后，似乎有点失落，继续问道：“谁啊？”“我们班上的，你猜。”女同学把全班其他女生的名字都猜完了，{user}却都摇头。{user}笑笑：“傻瓜，你确定都念完了吗？”女同学听后愣了一会儿，害羞地转过头没再说话。这时，{user}温柔哦地伏在她耳边说道：“___”',
            priority: 5,
            trigger_conditions: { age_range: [12, 25], required_tags: ['高情商', '男性'] },
            options: [
        {
            text: '是你啊',
            result: '你做出了选择。',
            add_tags: ['恋爱中'],
            death_flag: true,
            death_reason: '放学了，夕阳照进课室里，给课桌涂上了金黄色。{user}刚准'
        },
        {
            text: '还有男生的名字你还没念呢！',
            result: '放学了，夕阳照进课室里，给课桌涂上了金黄色。{user}刚准备回家，就被一个女同学叫住。女同学趴在桌子上问：“喂，你有喜欢的人吗？”{user}看了她一眼，淡淡的说：“有啊。”女同学听后，似乎有点失落，继续问道：“谁啊？”“我们班上的，你猜。”女同学把全班其他女生的名字都猜完了，{user}却都摇头。{user}笑笑：“傻瓜，你确定都念完了吗？”女同学听后愣了一会儿，害羞地转过头没再说话。这时，{user}温柔哦地伏在她耳边说道：“还有男生的名字你还没念呢！”{user}说完哈哈大笑。女同学气得冒烟，扛起课桌把{user}砸得头破血流，倒地不起。然后用脚踩，边踩边说：“玩梗！叫你玩梗！继续玩！”',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '放学了，夕阳照进课室里，给课桌涂上了金黄色。=NAME=刚准备回家，就被一个女同学叫住。女同学趴在桌子上问：“喂，你有喜欢的人吗？”=NAME=看了她一眼，淡淡的说：“有啊。”女同学听后，似乎有点失落，继续问道：“谁啊？”“我们班上的，你猜。”女同学把全班其他女生的名字都猜完了，=NAME=却都摇头。=NAME=笑笑：“傻瓜，你确定都念完了吗？”女同学听后愣了一会儿，害羞地转过头没再说话。这时，=NAME=温柔哦地伏在她耳边说道：“还有男生的名字你还没念呢！”=NAME=说完哈哈大笑。女同学气得冒烟，扛起课桌把=NAME=砸得头破血流，倒地不起。然后用脚踩，边踩边说：“玩梗！叫你玩梗！继续玩！”'
        },
        {
            text: '你怎么穿着品如的衣服啊',
            result: '放学了，夕阳照进课室里，给课桌涂上了金黄色。{user}刚准备回家，就被一个女同学叫住。女同学趴在桌子上问：“喂，你有喜欢的人吗？”{user}看了她一眼，淡淡的说：“有啊。”女同学听后，似乎有点失落，继续问道：“谁啊？”“我们班上的，你猜。”女同学把全班其他女生的名字都猜完了，{user}却都摇头。{user}笑笑：“傻瓜，你确定都念完了吗？”女同学听后愣了一会儿，害羞地转过头没再说话。这时，{user}温柔哦地伏在她耳边说道：“你怎么穿着品如的衣服啊？”女同学听后哇的一声大哭，逃出了教室。',
            death_flag: true,
            death_reason: '放学了，夕阳照进课室里，给课桌涂上了金黄色。=NAME=刚准备回家，就被一个女同学叫住。女同学趴在桌子上问：“喂，你有喜欢的人吗？”=NAME=看了她一眼，淡淡的说：“有啊。”女同学听后，似乎有点失落，继续问道：“谁啊？”“我们班上的，你猜。”女同学把全班其他女生的名字都猜完了，=NAME=却都摇头。=NAME=笑笑：“傻瓜，你确定都念完了吗？”女同学听后愣了一会儿，害羞地转过头没再说话。这时，=NAME=温柔哦地伏在她耳边说道：“你怎么穿着品如的衣服啊？”女同学听后哇的一声大哭，逃出了教室。'
        }
            ]
        }
        }
    },
    '黑框眼镜': {
        events: {
        'dbrs_1249': {
            title: '疯狂续命：续命失败',
            description: '拥有了黑框眼镜后，{user}能吸取人的寿命，{user}在新闻报道上寻找死刑犯。很快就找到一个，他隔着电视尝试吸取寿命，但是却发现不能吸到。大概是因为这个新闻播出的时候，他已经被枪决了。',
            priority: 5,
            trigger_conditions: { age_range: [200, 200], required_tags: ['黑框眼镜'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1248': {
            title: '疯狂续命',
            description: '拥有了黑框眼镜后，{user}能吸取人的寿命，{user}吸取的目标是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['黑框眼镜'] },
            options: [
        {
            text: '死刑罪犯',
            result: '你做出了选择。'
        },
        {
            text: '贪污官员',
            result: '你做出了选择。'
        },
        {
            text: '奸商',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1250': {
            title: '疯狂续命：贪官',
            description: '拥有了框眼镜后，{user}自认终于拥有了惩治贪官的力量。{user}来到地方政府门口蹲点，监视路过的官员，遇到开豪车的，穿名牌的，穿金戴银的，他都用眼睛狠狠地吸取他们的生命。',
            priority: 5,
            trigger_conditions: { age_range: [200, 200], required_tags: ['黑框眼镜'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1251': {
            title: '疯狂续命：奸商',
            description: '{user}非常痛恨商人，拥有了框眼镜后，{user}对着朋友圈软件的公司老板疯狂地使用眼镜。',
            priority: 5,
            trigger_conditions: { age_range: [200, 200], required_tags: ['黑框眼镜'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '黝黑': {
        events: {
        'dbrs_200': {
            title: '情窦初开',
            description: '{user}的初恋是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 8], required_tags: ['黝黑'] },
            options: [
        {
            text: '幼儿园的老师',
            result: '{user}初恋是幼儿园的老师，不，是暗恋对象，总幻想着他幼儿园老师多么多么迷恋他，并深信不疑！'
        },
        {
            text: '同桌',
            result: '{user}的初恋是同桌。{user}老是被同桌打，{user}觉得这是亲密的体现。慢慢的{user}动了真情，爱上了同桌，只要一天没被同桌打，就浑身不舒服。'
        },
        {
            text: '彩虹小马',
            result: '你做出了选择。',
            add_tags: ['小马']
        },
        {
            text: '手',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_311': {
            title: '昵称',
            description: '在单位，同事们戏称{user}为黑猫警长，因为他皮肤非常黑。',
            priority: 5,
            trigger_conditions: { age_range: [20, 55], required_tags: ['黝黑'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_451': {
            title: '黝黑代言人',
            description: '黑鬼牙膏公司，邀请{user}出演他们的牙膏广告。因为{user}长得一身黝黑的皮肤。',
            priority: 5,
            trigger_conditions: { age_range: [20, 50], required_tags: ['黝黑'] },
            options: [
        {
            text: '愤然拒绝',
            result: '{user}对自己黝黑的皮肤感到非常伤心，让{user}很自卑。',
            add_tags: ['玻璃心']
        },
        {
            text: '接受',
            result: '你做出了选择。'
        },
        {
            text: '提条件（不准使用特效）',
            result: '{user}出演了黑鬼牙膏的广告。他一边喊着广告词“DUANG,DUANG”一边露出了洁白的牙齿。'
        }
            ]
        },
        'dbrs_452': {
            title: '美白',
            description: '{user}留意到一家美容机构可以让肌肤变白，价格不菲。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [20, 50], required_tags: ['黝黑'] },
            options: [
        {
            text: '觉得太贵不去了',
            result: '你做出了选择。'
        },
        {
            text: '花钱算什么，哥要变白',
            result: '{user}留意到一家美容机构可以让肌肤变白，价格不菲。{user}非常想要白皙的皮肤，他不顾三七二十一就报名了。经过全身麻醉的大手术后，{user}的皮肤真的变得白里透红！{user}心想：“这钱花得值！”',
            add_tags: ['美容机构：美白'],
            remove_tags: ['黝黑']
        }
            ]
        },
        'dbrs_604': {
            title: '无私的爱',
            description: '有一个三百多斤重的女同学向{user}表白，她说：“如果你这次考试得全班第一名，我就做你女朋友。”考试当天所有同学都交了白卷，{user}绝望的放下手中的笔，也交了白卷。他知道一切都是徒劳，那位女同学还在写着试卷，试卷上写着{user}的名字。',
            priority: 5,
            trigger_conditions: { age_range: [10, 23], required_tags: ['黝黑', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        }
            ]
        },
        'dbrs_605': {
            title: '桃花运',
            description: '{user}要出席一个重要的场合，想看看自己的形象怎么样，于是找一辆车的车窗照下，理了头发之后顺便花了2分钟掏了下鼻屎，结果车窗降了下来，出现了一位御姐型熟女。{user}立马___',
            priority: 5,
            trigger_conditions: { age_range: [18, 30], required_tags: ['黝黑', 'JB脸', '男性'] },
            options: [
        {
            text: '打招呼',
            result: '你做出了选择。'
        },
        {
            text: '急忙道歉',
            result: '你做出了选择。'
        },
        {
            text: '敬礼',
            result: '你做出了选择。'
        },
        {
            text: '当没看见，离开。',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
};