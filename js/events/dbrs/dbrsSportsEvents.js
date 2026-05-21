// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 运动/健身
// 事件数: 23
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
});

export const dbrsSportsEvents = {
    '好胜': {
        events: {
        'dbrs_28': {
            title: '第一',
            description: '{age}岁的时候，{user}的成绩是全校第一。只有一次拿了第二，那时他闷闷不乐地闭关了1个月，疯狂地补习。',
            priority: 5,
            trigger_conditions: { age_range: [4, 19], required_tags: ['好胜'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_41': {
            title: '课堂:体育课',
            description: '在篮球场上，{user}与同学打架了，原因是同学用脚踢赢了{user}，并嘲笑了他。',
            priority: 5,
            trigger_conditions: { age_range: [7, 17], required_tags: ['好胜'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_330': {
            title: '喝奶而死',
            description: '{user}喝母乳的时候太猴急了，第一口没吞下，又吸第二口，最后不慎窒息而死。',
            priority: 5,
            trigger_conditions: { age_range: [3, 3], required_tags: ['好胜'] },
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
        'dbrs_366': {
            title: '斗快打针',
            description: '{user}在医院打点滴时，和旁边那个病人比速度。{user}将点滴速度超频，全身都爆起了青筋。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['好胜'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1313': {
            title: '研究所的训练',
            description: '{user}在研究所的表现不错，从不缺席早操。每天的逗比战士训练都是最早来的，最晚走的。在研究所的驾驶员，成绩最好的就是{user}了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['好胜'] },
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
        'dbrs_54': {
            title: '锻炼的味道',
            description: '{user} 锻炼完，都会闻一下身体的味道，对此乐此不疲。',
            priority: 5,
            trigger_conditions: { age_range: [7, 120], required_tags: ['强壮'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_181': {
            title: '强壮的=NAME=',
            description: '{user}的八块腹肌健硕如石，间隙清晰，{user}引以为豪。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['强壮', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_222': {
            title: '出手相助',
            description: '夜晚{user}走在回家的路上，中途遇到一帮古惑仔正在勒索小朋友。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [18, 35], required_tags: ['强壮'] },
            options: [
        {
            text: '大喝一声试图吓跑他们',
            result: '夜晚{user}走在回家的路上，中途遇到一帮古惑仔正在勒索小朋友。{user}大喝一声试图吓跑他们但是并没有用，{user}只好走了。'
        },
        {
            text: '上前显示自己的麒麟臂吓跑他们',
            result: '夜晚{user}走在回家的路上，中途遇到一帮古惑仔正在勒索小朋友。{user}出手相救，上前显示了自己的麒麟臂，古惑仔被吓得落荒而逃。',
            add_tags: ['出手相助']
        },
        {
            text: '无视',
            result: '夜晚{user}走在回家的路上，中途遇到一帮古惑仔正在勒索小朋友。{user}选择无视……'
        }
            ]
        },
        'dbrs_246': {
            title: '监狱：沟通',
            description: '{user}在监狱里的人际关系出现了问题，大家似乎很害怕与{user}沟通，只要{user}稍微一接近谁，谁就会抱着屁股慌忙逃窜。',
            priority: 5,
            trigger_conditions: { age_range: [20, 55], required_tags: ['强壮', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_312': {
            title: '肌肉交友',
            description: '{user}是一名健身爱好者。一天他遇见了王♂，他们2人都非常欣赏对方的肌肉。',
            priority: 5,
            trigger_conditions: { age_range: [8, 55], required_tags: ['黝黑', '强壮'] },
            options: [
        {
            text: '一起锻炼',
            result: '{user}与王♂是好朋友，他们经常一起锻炼身体。'
        },
        {
            text: '一起来探讨哲学的大事',
            result: '{user}与王♂是好朋友，他们经常一起探讨哲学。'
        }
            ]
        },
        'dbrs_1198': {
            title: '校园祭:肌肉改造',
            description: '{user}的社团肌肉改造部，在校园祭中做了一个小展厅。里面都是社员们在把玩健身器材。{user}也在其中，他在玩___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部', '强壮'] },
            options: [
        {
            text: '椭圆机',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        },
        {
            text: '跑步机',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        },
        {
            text: '哑铃',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        },
        {
            text: '动感单车',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        },
        'dbrs_1229': {
            title: '肉改部：课外锻炼：跑步',
            description: '{user}放学后，与社员们在高速公路上跑步锻炼。{user}是第一个跑完全程300公里的人。{user}坐在终点，看着后面来的社员都是气喘吁吁，优越感满满。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部', '强壮'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肉改部课外锻炼跑步=HIDDEN=']
        }
            ]
        }
        }
    },
    '篮球': {
        events: {
        'dbrs_1267': {
            title: '篮球特长',
            description: '在篮球场上，{user}非常擅长___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['篮球'] },
            options: [
        {
            text: '传球',
            result: '{user}自称“影子”，利用自己在球场上的薄弱的存在感，使用如同幻影般的叫做“Misdirection”的传球技巧，以此来辅佐其它成员得分，是球场上最擅长传球的人。',
            add_tags: ['传球']
        },
        {
            text: '中投',
            result: '你做出了选择。',
            add_tags: ['中投']
        },
        {
            text: '后仰三分',
            result: '你做出了选择。',
            add_tags: ['后仰三分']
        },
        {
            text: '盖帽',
            result: '你做出了选择。',
            add_tags: ['盖帽']
        },
        {
            text: '挡拆',
            result: '你做出了选择。',
            add_tags: ['挡拆']
        }
            ]
        },
        'dbrs_1269': {
            title: '踩场',
            description: '{user}喜欢打篮球，每天下课都会和同学到篮球场上打篮球。有一天他们正在打球，突然来了一群老爷爷老奶奶，在篮球场上跳起了广场舞。{user}无法打球了，他___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['篮球'] },
            options: [
        {
            text: '上前与他们理论',
            result: '{user}喜欢打篮球，每天下课都会和同学到篮球场上打篮球。有一天他们正在打球，突然来了一群老爷爷老奶奶，在篮球场上跳起了广场舞。{user}无法打球了，他上前与他们理论。{user}的声音被淹没在广场舞的音乐中，没有人理睬{user}……'
        },
        {
            text: '在大爷头上灌篮',
            result: '{user}喜欢打篮球，每天下课都会和同学到篮球场上打篮球。有一天他们正在打球，突然来了一群老爷爷老奶奶，在篮球场上跳起了广场舞。{user}无法打球了，他拿起篮球，走到其中一个大爷面前，在大爷头上来了个灌篮。大爷倒地不起……{user}最终以故意伤害他人罪入狱了。'
        },
        {
            text: '默默离开',
            result: '你做出了选择。'
        },
        {
            text: '拍照发朋友圈',
            result: '{user}喜欢打篮球，每天下课都会和同学到篮球场上打篮球。有一天他们正在打球，突然来了一群老爷爷老奶奶，在篮球场上跳起了广场舞。{user}无法打球了，他拍照发朋友圈。这条朋友圈引起轩然大波，网友们分成2派争论了起来，一边是支持老人广场舞的，他们认为年轻一辈就应该尊老爱幼，让出场地给老人跳广场舞，另外一边的人认为篮球场是功能场所，应该优先让打篮球的人使用。'
        },
        {
            text: '加入到广场舞中',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '篮球部': {
        events: {
        'dbrs_1351': {
            title: '篮球运动',
            description: '{user}加入篮球部后，受到社员的影响，{user}开始喜欢上了篮球。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['篮球部'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['篮球']
        }
            ]
        },
        'dbrs_1520': {
            title: '蔡社员',
            description: '篮球部组织了一场篮球比赛，1 VS 1单挑。和{user}对阵的是一位姓蔡的社员。他拿着篮球在{user}面前唱歌跳舞……{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['篮球部'] },
            options: [
        {
            text: '投降',
            result: '你做出了选择。'
        },
        {
            text: '跳得不错啊蔡社员',
            result: '篮球部组织了一场篮球比赛，1 VS 1单挑。和{user}对阵的是一位姓蔡的社员。他拿着篮球在{user}面前唱歌跳舞……{user}边看他跳舞边拍手叫好，还跟着唱了起来：“鸡你太美！”'
        }
            ]
        },
        'dbrs_1627': {
            title: '篮球比赛：胜负之间',
            description: '在一次社团篮球比赛中，{user}的队落后1分，还剩几秒钟就完场了。{user}处于蓝底，无人防守。{user}接到队友的传球！！这是决定胜负的一球，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['篮球部'] },
            options: [
        {
            text: '立定投球',
            result: '在一次社团篮球比赛中，{user}的队落后1分，还剩几秒钟就完场了。{user}处于蓝底，无人防守。{user}接到队友的传球！！这是决定胜负的一球，{user}接到求后立即投球，球在空中划过漂亮的弧度后，准确地穿过了球篮，得分了，绝杀！{user}的一记绝杀让社团获得了胜利。'
        },
        {
            text: '后仰跳投',
            result: '在一次社团篮球比赛中，{user}的队落后1分，还剩几秒钟就完场了。{user}处于蓝底，无人防守。{user}接到队友的传球！！这是决定胜负的一球，{user}接到球，后仰跳投！{user}把球也投歪了，并且闪到了腰，难看地摔倒在地上。{user}的社团输掉了比赛。'
        },
        {
            text: '起跳暴扣',
            result: '在一次社团篮球比赛中，{user}的队落后1分，还剩几秒钟就完场了。{user}处于蓝底，无人防守。{user}接到队友的传球！！这是决定胜负的一球，{user}接到球，跳起来暴扣！{user}得分了！他们赢得了比赛。现场观众都为{user}这一精彩的扣篮喝彩。'
        },
        {
            text: '把球带出三分线再射',
            result: '在一次社团篮球比赛中，{user}的队落后1分，还剩几秒钟就完场了。{user}处于蓝底，无人防守。{user}接到队友的传球！！这是决定胜负的一球，{user}接到球，垃圾朝着三分线外走去，然后投了一个三分！非常遗憾的是球没有进，{user}的装逼让社团输掉了比赛。团员们非常愤怒，投票让{user}滚出了社团。',
            remove_tags: ['篮球部']
        }
            ]
        }
        }
    },
    '肉改部': {
        events: {
        'dbrs_1199': {
            title: '校园祭:肌肉改造',
            description: '{user}的社团肌肉改造部，在校园祭中做了一个小展厅。里面都是社员们在把玩健身器材。{user}因为还没有修炼出好身材，只能在展厅中做打杂角色，打扫展厅，买水，为社员们抹油……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1198': {
            title: '校园祭:肌肉改造',
            description: '{user}的社团肌肉改造部，在校园祭中做了一个小展厅。里面都是社员们在把玩健身器材。{user}也在其中，他在玩___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部', '强壮'] },
            options: [
        {
            text: '椭圆机',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        },
        {
            text: '跑步机',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        },
        {
            text: '哑铃',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        },
        {
            text: '动感单车',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        },
        'dbrs_1230': {
            title: '肉改部：课外锻炼：搬砖',
            description: '{user}放学后，与社员们在一处工地搬砖，锻炼身体的同时还赚了部门经费，大家都干得乐呵呵。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肉改部锻炼']
        }
            ]
        },
        'dbrs_1229': {
            title: '肉改部：课外锻炼：跑步',
            description: '{user}放学后，与社员们在高速公路上跑步锻炼。{user}是第一个跑完全程300公里的人。{user}坐在终点，看着后面来的社员都是气喘吁吁，优越感满满。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部', '强壮'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肉改部课外锻炼跑步=HIDDEN=']
        }
            ]
        },
        'dbrs_1232': {
            title: '肉改部：课外锻炼：格斗训练',
            description: '放学后，{user}跟随社员们一起来到校门口外，寻找校外小混混进行格斗训练。那些经常在校门口逗留的小混混被肉改部打得落花流水，落荒而逃。从此再也没有小混混敢在他们学校门口露面。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肉改部锻炼']
        }
            ]
        },
        'dbrs_1234': {
            title: '肉改部：饮食管理',
            description: '加入肉改部后，{user}一日三餐都要集中与社员们一起吃，每天吃规定的饭菜：早餐一边游泳一边吃20个鸡蛋；中午餐一边跑步一边吃牛奶果汁蛋白粉汤；晚餐一边举重一边吃燕麦氨基酸糖水浸泡法国面包。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肉改部锻炼']
        },
        {
            text: '还是退部吧',
            result: '{user}忍受不了肉改部的非人类饮食规定，选择了退部。',
            remove_tags: ['肉改部']
        }
            ]
        },
        'dbrs_1227': {
            title: '肉改部：课外锻炼：跑步',
            description: '{user}放学后，与社员们在高速公路上跑步锻炼。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肉改部课外锻炼跑步=HIDDEN=']
        }
            ]
        },
        'dbrs_1235': {
            title: '肉改部：锻炼成果',
            description: '{user}在加入肉改部后，日夜不停地锻炼身体，终于如愿以偿地变强了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部', '肉改部锻炼'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['强壮'],
            remove_tags: ['肉改部锻炼']
        }
            ]
        }
        }
    },
    '肉改部锻炼': {
        events: {
        'dbrs_1235': {
            title: '肉改部：锻炼成果',
            description: '{user}在加入肉改部后，日夜不停地锻炼身体，终于如愿以偿地变强了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部', '肉改部锻炼'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['强壮'],
            remove_tags: ['肉改部锻炼']
        }
            ]
        }
        }
    },
    '黝黑': {
        events: {
        'dbrs_312': {
            title: '肌肉交友',
            description: '{user}是一名健身爱好者。一天他遇见了王♂，他们2人都非常欣赏对方的肌肉。',
            priority: 5,
            trigger_conditions: { age_range: [8, 55], required_tags: ['黝黑', '强壮'] },
            options: [
        {
            text: '一起锻炼',
            result: '{user}与王♂是好朋友，他们经常一起锻炼身体。'
        },
        {
            text: '一起来探讨哲学的大事',
            result: '{user}与王♂是好朋友，他们经常一起探讨哲学。'
        }
            ]
        }
        }
    },
};