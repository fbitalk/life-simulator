// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - Child年龄段事件（无触发标签）
// 事件数: 25
import { registerTags } from '../../data/tagRegistry.js';

registerTags({
    '少年': { color: 'normal' },
});

// 本文件涉及的标签注册
registerTags({
    '孤儿': { color: 'red' },
    '洞察': { color: 'purple' },
    '癌症': { color: 'red' },
    '肥胖': { color: 'red' },
    '高情商': { color: 'pink' },
});

export const dbrsChildEvents = {
    '少年': {
        events: {
        'dbrs_37': {
            title: '课堂:英语课',
            description: '你知道“2”用英文怎么说吗?',
            priority: 2,
            trigger_conditions: { age_range: [11, 17] },
            options: [
        {
            text: 'two',
            result: '{user}学习很踏实，成绩也不错。',
            add_tags: ['学习成绩']
        },
        {
            text: 'SB',
            result: '{user}老是想语出惊人。'
        },
        {
            text: 'thick',
            result: '别人做不出来的题目，{user}稍微看了一下，就能把答案准确地写出来。',
            add_tags: ['学习成绩']
        },
        {
            text: 'hungry',
            result: '上英语课的时候，{user}还以为是语文课'
        },
        {
            text: 'mother fucker',
            result: '{user}对现在的教育非常不满，然而并没有什么卵用，只让{user}的成绩一落千丈。'
        }
            ]
        },
        'dbrs_35': {
            title: '课堂:数学课',
            description: '申国的山区，是上坡路比较多还是下坡路比较多？',
            priority: 2,
            trigger_conditions: { age_range: [7, 17] },
            options: [
        {
            text: '什么破题目',
            result: '面对现在的教育体系，{user}非常不满，然而并没有卵用，只会让{user}的成绩越来越差。'
        },
        {
            text: '数学课老是做脑筋急转弯题目真的好吗？',
            result: '面对现在的教育体系，{user}持反对意见，然而并没有卵用，只会让{user}的成绩越来越差。'
        },
        {
            text: '条件不足，此题无解',
            result: '{user}非常聪明，而且很努力。',
            add_tags: ['学习成绩']
        },
        {
            text: '一样多',
            result: '{user}被应试教育毒害了，自己的个性表达被磨平了，自己的思考能力也被磨灭了。'
        }
            ]
        },
        'dbrs_36': {
            title: '课堂:语文课',
            description: '{user}在一次语文考试的作文题上写了一篇___',
            priority: 2,
            trigger_conditions: { age_range: [7, 17] },
            options: [
        {
            text: '议论文《不好好复习全人类灭亡》',
            result: '你做出了选择。',
            add_tags: ['中二病']
        },
        {
            text: '长篇小说《穿越成夏雨荷》',
            result: '你做出了选择。',
            add_tags: ['玛丽苏']
        },
        {
            text: '论文《球状闪电》',
            result: '你做出了选择。',
            add_tags: ['小科学家']
        },
        {
            text: '《我家的点点》',
            result: '你做出了选择。'
        },
        {
            text: '调查报告《你的第一次是在几岁》',
            result: '你做出了选择。'
        },
        {
            text: '论文《论空间下质子形态变化》',
            result: '你做出了选择。',
            add_tags: ['小科学家', '学习成绩']
        },
        {
            text: '论文《当今市场经济学论》',
            result: '你做出了选择。'
        },
        {
            text: '《如何与沙比相处》',
            result: '你做出了选择。',
            add_tags: ['高情商'],
            remove_tags: ['内向']
        },
        {
            text: '《如何区分直男和gay》',
            result: '你做出了选择。',
            add_tags: ['洞察']
        }
            ]
        },
        'dbrs_38': {
            title: '课堂:体育课',
            description: '{user}最擅长的运动是___',
            priority: 2,
            trigger_conditions: { age_range: [7, 17] },
            options: [
        {
            text: '踏步',
            result: '你做出了选择。'
        },
        {
            text: '田径运动',
            result: '你做出了选择。'
        },
        {
            text: '足球',
            result: '你做出了选择。',
            add_tags: ['足球']
        },
        {
            text: '篮球',
            result: '你做出了选择。',
            add_tags: ['篮球']
        },
        {
            text: '其他球类运动',
            result: '你做出了选择。'
        },
        {
            text: '并不擅长运动',
            result: ' 最讨厌上体育课了，满身臭汗。 ',
            add_tags: ['肥胖'],
            remove_tags: ['强壮']
        },
        {
            text: '高尔夫球',
            result: '你做出了选择。'
        },
        {
            text: '攀岩',
            result: '你做出了选择。'
        },
        {
            text: '滑雪',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_49': {
            title: '时间分配',
            description: '学习和恋爱，{user}更看重___',
            priority: 2,
            trigger_conditions: { age_range: [7, 17] },
            options: [
        {
            text: '恋爱至上',
            result: '恋爱中的人就是傻子，所以他们的学习成绩开始落后。'
        },
        {
            text: '学习',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        },
        {
            text: '看心情',
            result: '恋爱中的人就是傻子，所以他们的学习成绩开始落后。'
        }
            ]
        },
        'dbrs_101': {
            title: '遇到奇怪的姐姐',
            description: '在放学的路上，{user}遇上开高级跑车的漂亮大姐姐邀请你上车和她去一个地方。',
            priority: 2,
            trigger_conditions: { age_range: [11, 18] },
            options: [
        {
            text: '不要跟陌生人走',
            result: '{user}拒绝上陌生人的车。'
        },
        {
            text: '上车',
            result: '{user}犹豫了一下，上车了。{user}被带到一个秘密基地'
        }
            ]
        },
        'dbrs_102': {
            title: '研究所',
            description: '{user}发现自己老爸是这个秘密研究所基地)的所长，这里研究巨型机器人来对抗外星人并被老爸要求做其中一台机器的驾驶员。',
            priority: 2,
            trigger_conditions: { age_range: [11, 18] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_104': {
            title: '发现使徒',
            description: '一个使徒的胚胎在某地的火山口被发现，{user}决定___',
            priority: 2,
            trigger_conditions: { age_range: [11, 18] },
            options: [
        {
            text: '立马出击，趁还是胚胎赶紧秒掉。',
            result: '一个使徒的胚胎在某地的火山口被发现，{user}不顾老爸的阻拦，飞身跳进驾驶舱，驾驶机器人出击了。一心想着趁使徒还是胚胎的时候秒杀掉。然而{user}不知道，他驾驶的巨型机器人是新世纪逗比战士，并不是EVA。当巨型机器人到达火山口，逗比巨型机器人根本经受不住火山口的温度，巨型机器人就像巧克力遇热一样融掉了。{user}在里面死得渣都不剩。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '小心行事，必须对使徒胚胎做全面的分析。',
            result: '{user}发现一个使徒的胚胎在某地的火山口，{user}不敢贸然行动。谁知这个使徒代谢非常快，使徒的胚胎很快发育成型，成了一个巨大的怪兽，并不断发育。等{user}驾驶机器人赶到时，这个使徒已经老死了。汗',
            death_flag: true,
            death_reason: '=NAME=发现一个使徒的胚胎在某地的火山口，=NAME=不敢贸然行动。谁知这个使徒代谢非常快，使徒的胚胎很快发育成型，成了一个巨大的怪兽，并不断发育。等=NAME=驾驶机器人赶到时，这个使徒已经老死了。汗'
        },
        {
            text: '放他一马，这个胚胎看起来很无害。',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_103': {
            title: '二腿使徒',
            description: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}登上了巨型机器人，机器人喷射从基地飞出，进入了战斗。这个使徒双腿非常灵活，移动非常迅速。{user}应该___',
            priority: 2,
            trigger_conditions: { age_range: [11, 18] },
            options: [
        {
            text: '投掷高振动粒子跳蛋攻击',
            result: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。{user}驾驶巨大机器人与其对抗，只见{user}从口袋里拿出一个高振动粒子跳蛋向两腿使徒扔去。跳蛋正中使徒的股间，使徒腿一软，被制服了。'
        },
        {
            text: '绳子装上鱼诱，等待使徒上钩活抓',
            result: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。{user}驾驶巨大机器人与其对抗，{user}在一条绳子上装上鱼钩鱼诱，等待使徒上钩活抓。然而使徒不是鱼，无视了{user}，走向城市一顿踩踏后，扬长而去。整个城市伤亡惨重。'
        },
        {
            text: '上前徒手肉搏',
            result: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。{user}驾驶巨大机器人与其对抗，{user}驾驶机器人冲上前去抓住使徒一顿猛揍，两腿使徒没有手不能还击，吃尽了亏。两腿使徒委屈得哭出了声，投降了。'
        }
            ]
        },
        'dbrs_105': {
            title: '狗血二次元',
            description: '{user}一不小心对着另外一个机器人驾驶员袭胸了，然后两人一慌张，脚一绊双双倒地抱在一起。这种狗血淋漓的二次元剧情在{user}的生活中出现了。',
            priority: 2,
            trigger_conditions: { age_range: [11, 18] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_154': {
            title: '天才学生',
            description: '{user}在上物理课的时候突发奇想___',
            priority: 2,
            trigger_conditions: { age_range: [12, 18] },
            options: [
        {
            text: '制造了一颗小型核弹',
            result: '你做出了选择。',
            add_tags: ['癌症']
        },
        {
            text: '制造了人造黑洞',
            result: '{user}在上物理课的时候突发奇想，制造了人造黑洞，因为质量不足导致坍缩不完全，{user}死了',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在上物理课的时候突发奇想，制造了人造黑洞，因为质量不足导致坍缩不完全，=NAME=死了'
        },
        {
            text: '使用正常教学器械制造了一台F1赛车',
            result: '你做出了选择。',
            add_tags: ['小科学家', '学习成绩']
        }
            ]
        },
        'dbrs_263': {
            title: '生日',
            description: '{user} {age} 岁生日到了，{user}想要什么生日礼物？',
            priority: 2,
            trigger_conditions: { age_range: [9, 11] },
            options: [
        {
            text: '电动遥控玩具',
            result: '{user}{age}岁的生日礼物收到了一个电动遥控玩具，从此他就迷上摆弄这类机械模型。',
            add_tags: ['工程师']
        },
        {
            text: '蛋糕就好了',
            result: '{user}{age}岁就是一个懂事的孩子。',
            add_tags: ['高情商']
        },
        {
            text: '游戏机',
            result: '{user}{age}岁生日到了，父母如愿给了{user}一台PSP，从此{user}沉迷在了游戏中，学习荒废。'
        },
        {
            text: 'BB弹枪',
            result: '{user}{age}岁生日到了，父母如愿给了{user}一支仿真BB枪。{user}开心地向着父母射击，他们2个应声倒地……等{user}反应过来，他的父母已经死了。',
            add_tags: ['孤儿'],
            death_flag: true,
            death_reason: '=NAME==AGE=岁生日到了，父母如愿给了=NAME=一支仿真BB枪。=NAME=开心地向着父母射击，他们2个应声倒地……等=NAME=反应过来，他的父母已经死了。'
        },
        {
            text: '只要有很多朋友来庆祝就够了',
            result: '{user}{age}岁生日到了，款待了很多同学来他家庆祝生日，大家都把{user}当好朋友。',
            add_tags: ['高情商']
        },
        {
            text: '二次元手办',
            result: '{user}{age}岁生日的时候，问父母要了几千块，买了一个半裸的模型手办，放在房间里。父母汗颜，但又不敢出声。'
        },
        {
            text: '贪婪玩约',
            result: '{user}{age}岁的生日上，收到了一个电子游戏的礼物，叫《贪婪玩约》。从此他就迷上这款游戏。',
            add_tags: ['电子海洛因']
        }
            ]
        },
        'dbrs_480': {
            title: '怪叔叔',
            description: '一个怪叔叔跟{user}说：“叔叔给你糖吃，跟叔叔去玩好不好？”{user}___',
            priority: 2,
            trigger_conditions: { age_range: [6, 8] },
            options: [
        {
            text: '跟他走',
            result: '你做出了选择。'
        },
        {
            text: '拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_535': {
            title: '成本问题',
            description: '要维持{user}的生命，需要大量的器材，人手。医院已经负载不起，医院院长最后决定结束{user}的生命。',
            priority: 2,
            trigger_conditions: { age_range: [8, 10] },
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
        'dbrs_839': {
            title: '英语课',
            description: '英语课上，老师让{user}站起来回答问题，“how are you？” {user}回答：___',
            priority: 2,
            trigger_conditions: { age_range: [7, 17] },
            options: [
        {
            text: 'f**k off',
            result: '你做出了选择。',
            add_tags: ['勇敢']
        },
        {
            text: '微笑点头',
            result: '英语课上，老师让{user}站起来回答问题，“how are you？” {user}站着傻笑，没听懂的样子。'
        },
        {
            text: 'i’m fine.',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        },
        {
            text: 'delay no more',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_834': {
            title: '治疗胃痛',
            description: '{user}在学校实验室里，因为胃酸过多而难过。{user}在实验室拿了一点___服用，治疗他的胃痛。',
            priority: 2,
            trigger_conditions: { age_range: [10, 17] },
            options: [
        {
            text: '氢氧化镁',
            result: '你做出了选择。'
        },
        {
            text: '氢氧化钠',
            result: '{user}在学校实验室里，因为胃酸过多而难过。{user}在实验室拿了一点氢氧化钠服用，治疗他的胃痛。刚吃下去，{user}就感到喉咙火辣辣的，一股无名火在{user}体内蔓延，{user}痛苦地挣扎着，红黑色的浆水从嘴里呕出来。挣扎了一会儿，{user}夸张地伸展着四肢，死去了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '小苏打',
            result: '你做出了选择。'
        },
        {
            text: '用手术刀打开肚子',
            result: '{user}在学校实验室里，因为胃酸过多而难过。{user}在实验室拿了一把手术刀，把自己的胃打开，然后把胃酸引流出来。{user}咬着牙强忍着痛楚，看到胃酸最后流出来了，欣慰地松了一口气，然后死了……{user}简直是逗比界的佼佼者。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在学校实验室里，因为胃酸过多而难过。=NAME=在实验室拿了一把手术刀，把自己的胃打开，然后把胃酸引流出来。=NAME=咬着牙强忍着痛楚，看到胃酸最后流出来了，欣慰地松了一口气，然后死了……=NAME=简直是逗比界的佼佼者。'
        }
            ]
        },
        'dbrs_875': {
            title: '课堂：物理课',
            description: '高三毕业了，他考上了国内的一所大学，而她则选择了出国。不得不面对的离别。在北京机场，两人深情相拥，依依不舍。他默默注视着载她的飞机越飞越高、越飞越远…忽然，他发现飞机航行方向由西向东，且地磁场磁感线方向由南向北，问：飞机左翼势能高还是右翼势能高？',
            priority: 2,
            trigger_conditions: { age_range: [10, 17] },
            options: [
        {
            text: '不懂',
            result: '{user}近来觉得试卷里的题目越来越玄学了。'
        },
        {
            text: '一样',
            result: '{user}近来觉得试卷里的题目越来越玄学了。'
        },
        {
            text: '左',
            result: '{user}成绩非常好。',
            add_tags: ['学习成绩']
        },
        {
            text: '右',
            result: '蒙的对，便是晴天，蒙的不对，一落千丈。'
        },
        {
            text: '这个得看缘分',
            result: '{user}近来觉得试卷里的题目越来越玄学了。'
        },
        {
            text: '这个男的是注孤生吧',
            result: '{user}不知道势能高不高，但{user}知道这个男主肯定是注孤生。',
            add_tags: ['高情商'],
            remove_tags: ['内向']
        }
            ]
        },
        'dbrs_877': {
            title: '课堂：化学课',
            description: 'GA是什么？',
            priority: 2,
            trigger_conditions: { age_range: [10, 17] },
            options: [
        {
            text: '肛之炼金术师',
            result: '{user}的化学考试试卷，把改卷的老师气得脑中风。'
        },
        {
            text: '炼金术师',
            result: '{user}的化学考试试卷，把改卷的老师气得脑中风。'
        },
        {
            text: '镓元素',
            result: '{user}能把元素周期表倒背如流。',
            add_tags: ['学习成绩']
        },
        {
            text: '金属铝',
            result: '{user}觉得在申国，化学元素周期表就应该用中文符号，不要用那些复杂的英文缩写。{user}还为此发动了游行示威。',
            add_tags: ['愤青']
        },
        {
            text: '时间单位（10亿年）',
            result: '{user}的化学考试试卷，把改卷的老师气得脑中风。'
        }
            ]
        },
        'dbrs_881': {
            title: '家庭暴力',
            description: '{user}的爸妈吵架，吵的很凶，妈妈突然拿起一瓶敌敌畏对爸爸说，我要让你尝尝失去亲人的滋味，说完就往{user}嘴里灌……',
            priority: 2,
            trigger_conditions: { age_range: [10, 10] },
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
        'dbrs_882': {
            title: '数学课：逆否命题',
            description: '将“若你安好，便是晴天”这句话改成逆否命题。',
            priority: 2,
            trigger_conditions: { age_range: [8, 18] },
            options: [
        {
            text: '你不安好，便会下雨',
            result: '每次看到发下来的考试成绩，{user}都会深深怀疑自己的智商。'
        },
        {
            text: '你安不好，便是晴天霹雳',
            result: '每次看到发下来的考试成绩，{user}都会深深怀疑自己的智商。'
        },
        {
            text: '若是晴天，你便安好',
            result: '每次看到发下来的考试成绩，{user}都会深深怀疑自己的智商。'
        },
        {
            text: '若不是晴天，你便安不好',
            result: '每次看到发下来的考试成绩，{user}都会深深怀疑自己的智商。'
        },
        {
            text: '若不是晴天，你便不安好',
            result: '{user}成为了班里数一数二的学习尖子。',
            add_tags: ['学习成绩']
        },
        {
            text: 'WHAT THE F....',
            result: '{user}因为在数学课里说英文，所以被记大过一次。'
        }
            ]
        },
        'dbrs_912': {
            title: '生物课：斑马',
            description: '斑马的花纹是白底黑纹,还是黑底白纹。',
            priority: 2,
            trigger_conditions: { age_range: [7, 17] },
            options: [
        {
            text: '黑底白纹',
            result: '{user}在课堂上使用手机上网查找题目答案，被老师抓住并没收了手机。'
        },
        {
            text: '白底黑纹',
            result: '斑马的花纹是白底黑纹,还是黑底白纹。{user}觉得是白底黑纹。'
        },
        {
            text: '实验得出结论',
            result: '{user}在动物园里抓斑马，被人抓住了。{user}的青葱岁月将在监狱里度过。'
        }
            ]
        },
        'dbrs_1171': {
            title: '纸条',
            description: '一天，{user}在自己的抽屉上看到一张纸条。纸条让{user}晚上去学校附近的公园。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [6, 17], required_tags: ['男性'] },
            options: [
        {
            text: '撕碎纸条',
            result: '你做出了选择。'
        },
        {
            text: '把纸条扔掉',
            result: '你做出了选择。'
        },
        {
            text: '无视',
            result: '你做出了选择。'
        },
        {
            text: '上交老师',
            result: '你做出了选择。'
        },
        {
            text: '应邀',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1352': {
            title: '奇怪的同学',
            description: '{user}在一次放学时，看到一位同学掉了一箱钱在地上，{user}去捡起来，发现整整7万！！{user}___',
            priority: 2,
            trigger_conditions: { age_range: [10, 17] },
            options: [
        {
            text: '据为己有',
            result: '你做出了选择。'
        },
        {
            text: '钱归原主',
            result: '{user}在一次放学时，看到一位同学掉了一百万元在地上！！{user}捡起来，想要还给他，但这位同学跑得很快，一下子就没影了。{user}没办法，只好暂时先把钱收起来。'
        }
            ]
        },
        'dbrs_1622': {
            title: '补习班：量子速读班',
            description: '有同学向{user}推荐补习班。量子速读，是运用HSP高感知力进行量子波动速读，大脑呈现动态的影像，1-5分钟看完一本10万字左右的书籍，并且可以把内容完整复述出来，全面提升阅读兴趣和阅读数量，真正做到读书破万卷，下笔如有神！现在报读，课程全程免费。{user}决定___',
            priority: 2,
            trigger_conditions: { age_range: [10, 16] },
            options: [
        {
            text: '报读',
            result: '你做出了选择。'
        },
        {
            text: '不参加',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1661': {
            title: '课堂：音乐课',
            description: '音乐课堂上，老师组织了一场自由表演，每个同学都可以上去独唱一首歌曲。{user}上去唱了一首《___》',
            priority: 2,
            trigger_conditions: { age_range: [8, 15] },
            options: [
        {
            text: '拔萝卜',
            result: '你做出了选择。'
        },
        {
            text: '世上只有妈妈好',
            result: '你做出了选择。'
        },
        {
            text: '种太阳',
            result: '你做出了选择。'
        },
        {
            text: '老爹去哪儿',
            result: '你做出了选择。'
        },
        {
            text: '不唱',
            result: '音乐课堂上，老师组织了一场自由表演，每个同学都可以上去独唱一首歌曲。同学们都轮流上台唱歌，唯独{user}没有上去。',
            add_tags: ['胆小'],
            remove_tags: ['高情商']
        }
            ]
        }
        }
    },
};