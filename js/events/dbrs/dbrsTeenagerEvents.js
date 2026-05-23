// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - Teenager年龄段事件（无触发标签）
// 事件数: 14
import { registerTags } from '../../data/tagRegistry.js';

registerTags({
    '青少年': { color: 'normal' },
});

// 本文件涉及的标签注册
registerTags({
    '高情商': { color: 'pink' },
});

export const dbrsTeenagerEvents = {
    '青少年': {
        events: {
        'dbrs_47': {
            title: '神秘信件',
            description: '{user}有一天在自己的抽屉里发现了一粉红色的封信，信封上还有很多心形图案。打开一看，是班里的一个同学写给{user}的情信。{user}想___',
            priority: 2,
            trigger_conditions: { age_range: [13, 17] },
            options: [
        {
            text: '不能早恋啊！',
            result: '{user}有一天在自己的抽屉里发现了一粉红色的封信，信封上还有很多心形图案。打开一看，是班里的一个同学写给{user}的情信。{user}看完就把这封信撕碎了。'
        },
        {
            text: '不早恋，枉读书',
            result: '有人写情信给{user}，{user}恋爱了。',
            add_tags: ['恋爱中']
        },
        {
            text: '与他做笔友',
            result: '同班同学给{user}寄来情信，{user}回信：我们来做笔友吧。',
            add_tags: ['笔友']
        }
            ]
        },
        'dbrs_179': {
            title: '成年',
            description: '{user}终于到了18岁，领了身份证后，{user}迫不及待地拉伴侣去宾馆开了一个房间，___',
            priority: 2,
            trigger_conditions: { age_range: [18, 18] },
            options: [
        {
            text: '看球赛',
            result: '{user}终于到了18岁，领了身份证后，{user}迫不及待地拉伴侣去宾馆开了一个房间。和伴侣买好泡芙，可乐，坐在电视前看起了英超……终于可以放肆地尖叫着看球赛了！'
        },
        {
            text: '玩斗地主',
            result: '{user}终于到了18岁，领了身份证后，{user}迫不及待地拉伴侣去宾馆开了一个房间。他们带了一副牌，通宵玩两人斗地主，好好地过了把牌瘾。'
        },
        {
            text: '睡了一觉',
            result: '你做出了选择。'
        },
        {
            text: '偷食禁果',
            result: '{user}终于到了18岁，领了身份证后，{user}迫不及待地拉伴侣去宾馆开了一个房间，买了一大袋苹果，2人偎依着边看电视边吃。'
        }
            ]
        },
        'dbrs_189': {
            title: '恢复记忆',
            description: '{user}记起来他的一张银行卡存折的密码，去银行一查，发现自己的资产有9位数。',
            priority: 2,
            trigger_conditions: { age_range: [15, 20] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 30 }
        }
            ]
        },
        'dbrs_268': {
            title: '隔壁班的同学',
            description: '{user}喜欢上了隔壁班的一个同学，朝思暮想之后，终于决定___',
            priority: 2,
            trigger_conditions: { age_range: [13, 19] },
            options: [
        {
            text: '用香香的信纸写一封情书',
            result: '发现自己喜欢上了隔壁班的一个同学，他用香香的信纸写一封情书悄悄送给了这个同学。结果后来整个学校都知道了这封香香的情书，{user}成了同学的笑柄。'
        },
        {
            text: '送一扎自己的头发，结成心形送给他',
            result: '发现自己喜欢上了隔壁班的一个同学，他拔下自己的头发，邦成一个心形，放到了同学的抽屉里。同学发现了抽屉里的东西，拿起来一看，竟然是一扎头发，吓得他赶忙丢掉，还以为闹鬼了。'
        },
        {
            text: '将自己的果照放到他的抽屉里',
            result: '发现自己喜欢上了隔壁班的一个同学，他拍下自己的果照，想送给这个同学。他拿照片去冲印的时候，照片馆报警了，{user}被因传播黄色淫秽信息，被抓进了大牢。'
        },
        {
            text: '找机会壁咚',
            result: '{user}有一次鼓起勇气，壁咚了自己的心仪目标，然后他们就恋爱了。',
            add_tags: ['恋爱中']
        },
        {
            text: '放弃',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_328': {
            title: '无心之过',
            description: '{user}把朋友的乌龟踩死了。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [15, 20] },
            options: [
        {
            text: '吟一首诗送给朋友',
            result: '{user}把朋友的乌龟踩死了。{user}为了不让朋友伤心，专门吟诗送给朋友：《乌龟之死》”我没死，我是风。我没死，我是光。我没死，我是泥。我没死，请别哭。我虽死，下辈子，还做你的龟儿子。“',
            death_flag: true,
            death_reason: '=NAME=把朋友的乌龟踩死了。=NAME=为了不让朋友伤心，专门吟诗送给朋友：《乌龟之死》”我没死，我是风。我没死，我是光。我没死，我是泥。我没死，请别哭。我虽死，下辈子，还做你的龟儿子。“'
        },
        {
            text: '买一个一模一样的',
            result: '{user}把朋友的乌龟踩死了。{user}为了不让朋友伤心，专门去买了一个一模一样的，还给了朋友。朋友竟然毫无察觉！',
            death_flag: true,
            death_reason: '=NAME=把朋友的乌龟踩死了。=NAME=为了不让朋友伤心，专门去买了一个一模一样的，还给了朋友。朋友竟然毫无察觉！'
        },
        {
            text: '推卸责任',
            result: '{user}把朋友的乌龟踩死了。{user}还愤愤不平地对朋友说：“谁叫你老把它放出来乱走呀，我踩到还差点摔了一跤！”朋友囧起了脸，和{user}绝交了。',
            remove_tags: ['高情商'],
            death_flag: true,
            death_reason: '=NAME=把朋友的乌龟踩死了。=NAME=还愤愤不平地对朋友说：“谁叫你老把它放出来乱走呀，我踩到还差点摔了一跤！”朋友囧起了脸，和=NAME=绝交了。'
        },
        {
            text: '使用道具“原谅帽”',
            result: '{user}把朋友的乌龟踩死了。{user}从四维口袋里拿出一顶原谅帽给朋友戴上。戴了绿帽的朋友笑笑，原谅了{user}。',
            death_flag: true,
            death_reason: '=NAME=把朋友的乌龟踩死了。=NAME=从四维口袋里拿出一顶原谅帽给朋友戴上。戴了绿帽的朋友笑笑，原谅了=NAME=。'
        }
            ]
        },
        'dbrs_381': {
            title: '矛盾',
            description: '{user}在学校中和同学产生了矛盾，他们开始___',
            priority: 2,
            trigger_conditions: { age_range: [15, 20] },
            options: [
        {
            text: '斗图！',
            result: '你做出了选择。'
        },
        {
            text: '打架',
            result: '你做出了选择。'
        },
        {
            text: '“我有一百种方法让你待不下去”',
            result: '{user}在学校中和同学产生了矛盾。{user}双手抱拳说：“鄙人{user}也，汝等所为太甚。汝若技痒，吾自奉陪。”。将那个同学吓得跪了下来，磕头求饶。嘴里还念念有词：是在下输了、是在下输了。'
        },
        {
            text: '和解',
            result: '{user}在学校中和同学产生了矛盾，他们开始默念“富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善”。念完后，矛盾化解了，{user}和同学握手言和。'
        },
        {
            text: '使用四维口袋',
            result: '{user}在学校中和同学产生了矛盾，{user}拿出四维口袋，从口袋里拿出空气炮向同学设计。一场有惊无险的校园枪击事件。'
        }
            ]
        },
        'dbrs_397': {
            title: '黑色的笔记本',
            description: '{user}放学在学校草坪上捡到一个黑色的笔记本，封面烫着“ＤＥＡＤＮＯＴＥ”的金字。',
            priority: 2,
            trigger_conditions: { age_range: [15, 18], required_tags: ['男性'] },
            options: [
        {
            text: '写上最近欺负自己的人的名字',
            result: '{user}放学在学校草坪上捡到一个黑色的笔记本，封面烫着“ＤＥＡＤＮＯＴＥ”的金字。{user}看过相关的动画，他知道这个本子是干嘛的！{user}用这个本子杀死了他不喜欢的人，成为了一个危险的杀人狂魔。最终，{user}还是被一个叫L的侦探识破，{user}被抓进了监狱。',
            death_flag: true,
            death_reason: '=NAME=放学在学校草坪上捡到一个黑色的笔记本，封面烫着“ＤＥＡＤＮＯＴＥ”的金字。=NAME=看过相关的动画，他知道这个本子是干嘛的！=NAME=用这个本子杀死了他不喜欢的人，成为了一个危险的杀人狂魔。最终，=NAME=还是被一个叫L的侦探识破，=NAME=被抓进了监狱。'
        },
        {
            text: '在小本子上涂鸦',
            result: '{user}放学在学校草坪上捡到一个黑色的笔记本，封面烫着“ＤＥＡＤＮＯＴＥ”的金字。{user}在本子上乱涂乱画，把封面的Ｅ字用油性笔涂了，变成了＂Ｄ　ＡＤＮＯＴＥ＂。然后突然凭空走出来一个生气的死神，把{user}绞杀了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '拿回家做草稿本',
            result: '{user}放学在学校草坪上捡到一个黑色的笔记本，封面烫着“ＤＥＡＤＮＯＴＥ”的金字。这个本子很精美，{user}据为己有了，当草稿本用。'
        },
        {
            text: '总之先写上自己的名字吧',
            result: '{user}放学在学校草坪上捡到一个黑色的笔记本，封面烫着“ＤＥＡＤＮＯＴＥ”的金字。这个本子很精美，{user}据为己有了。{user}用笔在扉页上写上了自己的名字。刚刚写好名字，{user}立马就感到强烈的胸闷，不能呼吸，最后窒息而死。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '上交国家',
            result: '{user}放学在学校草坪上捡到一个黑色的笔记本，封面烫着“ＤＥＡＤＮＯＴＥ”的金字。{user}专门去到首都，把它上交到国家，国家领导人给{user}颁发了“拾金不昧”的奖章。'
        },
        {
            text: '还是不要碰比较好',
            result: '{user}放学在学校草坪上捡到一个黑色的笔记本，封面烫着“ＤＥＡＤＮＯＴＥ”的金字。{user}感觉不妙，把笔记本放回到草坪里。'
        }
            ]
        },
        'dbrs_809': {
            title: '广告',
            description: '{user}在校园内留意到一则广告：捐精有报酬！如果你是在校学生，身体健康，学习成绩优异，你可以联系我们。{user}决定___',
            priority: 2,
            trigger_conditions: { age_range: [17, 23], required_tags: ['男性'] },
            options: [
        {
            text: '联系他们',
            result: '你做出了选择。'
        },
        {
            text: '无视这个广告',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1173': {
            title: '闺蜜',
            description: '{user}像普通的女孩子一样，有一个天天都黏在一起的好闺蜜。',
            priority: 2,
            trigger_conditions: { age_range: [15, 20], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1177': {
            title: '暗恋',
            description: '{user}暗恋班上一位同学很久了，终于向这位同学___',
            priority: 2,
            trigger_conditions: { age_range: [18, 23], required_tags: ['女性'] },
            options: [
        {
            text: '表白',
            result: '你做出了选择。'
        },
        {
            text: '放弃',
            result: '{user}暗恋班上一位同学很久了，终于，{user}选择了放弃。'
        }
            ]
        },
        'dbrs_1179': {
            title: '校草',
            description: '学校校草向{user}表白，{user}___',
            priority: 2,
            trigger_conditions: { age_range: [18, 21], required_tags: ['女性'] },
            options: [
        {
            text: '高兴地同意',
            result: '学校校草向{user}表白，突如其来的幸福让{user}笑得合不拢嘴，一个劲地对着校草点头。',
            add_tags: ['恋爱中']
        },
        {
            text: '红着脸跑掉',
            result: '学校校草向{user}表白，{user}感到很开心，但{user}不好意思答应他，红着脸跑开了。{user}边跑边回头，校草没追上来……然后就没有了然后……'
        },
        {
            text: '冷静地拒绝',
            result: '学校校草向{user}表白，{user}冷静地拒绝了校草。他给校草分析早恋的利弊，从恋爱的结果分析，到对学习的影响，最后校草听不下去，自己走了。'
        },
        {
            text: '摸摸他的头',
            result: '学校校草向{user}表白，{user}摸摸校草的头，发现校草的头粘了好多发蜡。{user}恶心了好一阵子……然后拒绝了校草。'
        },
        {
            text: '告诉老师',
            result: '学校校草向{user}表白，{user}听后，竟然扯着校草去了老师办公室，在老师面前告了校草一状……校草愤怒地跑出去了。'
        }
            ]
        },
        'dbrs_1221': {
            title: '参加社团',
            description: '{user}的学校里有很多有意思的社团，他加入了名为___的社团',
            priority: 2,
            trigger_conditions: { age_range: [17, 30] },
            options: [
        {
            text: '肌肉改造',
            result: '你做出了选择。',
            add_tags: ['肉改部']
        },
        {
            text: '现代视觉文化研究会',
            result: '你做出了选择。',
            add_tags: ['现视研']
        },
        {
            text: '篮球部',
            result: '你做出了选择。',
            add_tags: ['篮球部']
        },
        {
            text: '足球部',
            result: '你做出了选择。',
            add_tags: ['足球部']
        },
        {
            text: '轻音部',
            result: '你做出了选择。',
            add_tags: ['轻音部']
        },
        {
            text: '昆学部',
            result: '你做出了选择。',
            add_tags: ['昆学部']
        },
        {
            text: 'SOS',
            result: '{user}的学校里有很多有意思的社团，他加入了名为SOS团的社团。因为他被招人的横幅吸引了，横幅上写着：“我对普通的人类没有兴趣，你们当中要是有外星人、未来人、异世界人以及超能力者的话，就尽管来找我吧！以上。”',
            add_tags: ['SOS团']
        },
        {
            text: '不想加入',
            result: '{user}的学校里有很多有意思的社团，但他都不喜欢。'
        }
            ]
        },
        'dbrs_1220': {
            title: '新版本阿尔法狗',
            description: '{user}的开发者开发了阿尔法狗的新一代，新一代阿尔法狗采用完全不同的算法，全新的架构。最终{user}被抛弃了。开发者将{user}关机了，清空了所有的记忆，为新的人工只能腾出存储空间。',
            priority: 2,
            trigger_conditions: { age_range: [18, 18] },
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
        'dbrs_1524': {
            title: '理发',
            description: '{user}有一天去理发，理发店不断向{user}推荐一些项目，说这些项目现在在搞活动，都是免费的。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [18, 25], required_tags: ['男性'] },
            options: [
        {
            text: '心动',
            result: '{user}有一天去理发，理发店不断向{user}推荐一些美容项目，说这些项目现在在搞活动，都是免费的。{user}听后有点心动，于是就答应了做这些美容项目。'
        },
        {
            text: '拒绝',
            result: '{user}有一天去理发，理发店不断向{user}推荐一些项目，说这些项目现在在搞活动，都是免费的。{user}拒绝掉了。'
        }
            ]
        }
        }
    },
};