// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 美术/设计
// 事件数: 20
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
});

export const dbrsArtEvents = {
    '写作': {
        events: {
        'dbrs_1069': {
            title: '梦想',
            description: '{user}擅长写作，梦想是成为作家，他喜欢___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['写作'] },
            options: [
        {
            text: '原创',
            result: '你做出了选择。',
            add_tags: ['原创'],
            remove_tags: ['写作']
        },
        {
            text: '抄袭',
            result: '你做出了选择。',
            add_tags: ['抄袭'],
            remove_tags: ['写作']
        },
        {
            text: '不喜欢写东西',
            result: '{user}擅长写作，但是他不喜欢。'
        }
            ]
        }
        }
    },
    '原创': {
        events: {
        'dbrs_1070': {
            title: '创作',
            description: '{user}写了一个小说，这小说___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['原创'] },
            options: [
        {
            text: '世界观超大',
            result: '{user}写了一个小说，这小说世界观超大。{user}还不能操控这么大的世界观，整篇小说像流水账，十分乏味。'
        },
        {
            text: '是搞笑短篇',
            result: '{user}写了一个小说，这小说是搞笑短篇。笑是最容易表达与传染的，{user}的搞笑短篇小说受到了大家的欢迎，获得了很多的点击量。',
            add_tags: ['原创：熟悉'],
            remove_tags: ['原创']
        },
        {
            text: '描写社会黑暗面',
            result: '你做出了选择。'
        },
        {
            text: '是爱情小说',
            result: '{user}写了一个小说，这小说是爱情小说。一个没有按照套路的爱情小说，给了读者新鲜的感觉，小说获得了不少的点击量。',
            add_tags: ['原创：熟悉']
        },
        {
            text: '发挥脑洞',
            result: '{user}运用自己的脑洞，写了一个小说，这小说题材新颖，脑洞爆炸，处处出人意料，广受欢迎。',
            add_tags: ['原创：熟悉']
        }
            ]
        }
        }
    },
    '原创：大师': {
        events: {
        'dbrs_1087': {
            title: '小说大师',
            description: '{user}写了一篇名为《___》的小说',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['原创：大师'] },
            options: [
        {
            text: '不平凡的世界',
            result: '你做出了选择。'
        },
        {
            text: '包氏父子',
            result: '{user}把自己的家产全部捐给了慈善组织，让自己沉浸在贫穷的环境中。他在这种环境中写出了一个有意思的中编小说《包氏父子》。',
            set_attributes: { money: 0 }
        },
        {
            text: '呐喊',
            result: '你做出了选择。'
        },
        {
            text: '喝彩',
            result: '你做出了选择。'
        },
        {
            text: '申国人的悠闲生活',
            result: '你做出了选择。'
        },
        {
            text: '丑陋的神国人',
            result: '{user}写了一篇名为《丑陋的申国人》的散文，强烈批判了申国人的“脏、乱、吵”、“窝里斗”以及“不能团结”等……'
        },
        {
            text: '西游记',
            result: '{user}写了一篇名为《西游记》的小说。小说很受欢迎。有很多公司找{user}购买版权，用来改编动画漫画游戏等等……一下子{user}赚得盆满钵满。',
            effects: { money: 7 }
        }
            ]
        },
        'dbrs_1086': {
            title: '无精打采的作家',
            description: '{user}也是一位资深的作家了，但是他近期却不如意。他一直写不出东西来，因为{user}觉得写作拯救不了国人。他决定___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['原创：大师'] },
            options: [
        {
            text: '弃文从医',
            result: '你做出了选择。',
            remove_tags: ['原创：大师']
        },
        {
            text: '坚持写作',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1090': {
            title: '小说大师',
            description: '{user}在{age}岁的时候，又创作了《___》',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['原创：大师'] },
            options: [
        {
            text: '威尼斯商人',
            result: '你做出了选择。'
        },
        {
            text: '战争与和平',
            result: '{user}在{age}岁的时候，又创作了《战争与和平》。这部小说是世界文学史上的一部不朽名著，作品共四卷。作家以申国卫国战争为中心，描写了申国人民奋起抗击侵略者的英勇场景，同时也描写了战争中几个申国资本家的命运。小说围绕着四大马氏家族的生活展开，以四个家庭的主要成员的命运为贯穿始终的情节线索，描绘了申国的社会风尚，展示了广阔的生活画卷。'
        },
        {
            text: '我的叔叔于勒',
            result: '你做出了选择。'
        },
        {
            text: '羊脂球',
            result: '你做出了选择。'
        },
        {
            text: '汤姆历险记',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '原创：熟悉': {
        events: {
        'dbrs_1071': {
            title: '创作',
            description: '{user}写了一本小说，这小说题材是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['原创：熟悉'] },
            options: [
        {
            text: '古装言情',
            result: '{user}写了一本小说，这小说题材是古装言情。因为题材太过普通，反响平平。'
        },
        {
            text: '鬼畜',
            result: '{user}写了一本小说，这小说充满了段子与鬼畜。整个小说不之所云。但是却非常受欢迎……一些读者还把这个小说奉为神作，每天“打卡”。',
            add_tags: ['原创：大师']
        },
        {
            text: '未来科幻',
            result: '{user}写了一本小说，这小说题材是未来科幻。因为申国的科幻圈子实在太小众了，所以小说也没有积累很多的读者。'
        },
        {
            text: '都市生活',
            result: '{user}写了一本小说，这小说题材是都市生活。因为题材太过普通，所以反响平平。'
        },
        {
            text: '狗血',
            result: '{user}写了一本狗血的爱情小说，非常受女性读者欢迎，许多读者还为这个小说写同人。',
            add_tags: ['原创：大师']
        },
        {
            text: '继续发挥自己的脑洞',
            result: '{user}继续创作小说，他继续发挥自己的脑洞。这篇小说打破了现有的小说分类，剧情新颖奇怪，处处触动读者的神经。{user}的这篇小说开创了一个新的小说类型：新鲜脑洞系。',
            add_tags: ['原创：大师']
        }
            ]
        }
        }
    },
    '抄袭': {
        events: {
        'dbrs_1092': {
            title: '借鉴',
            description: '{user}借鉴《___》，写出了一本小说。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['抄袭'] },
            options: [
        {
            text: '蔷薇少女',
            result: '{user}借鉴《蔷薇少女》，写出了一本小说，名叫《人偶少女传奇》。这小说还获了奖，谁知道后来被新闻曝光抄袭，{user}的名声一下子臭了，{user}葬送了自己的写作生涯，只留下一个抄袭的骂名。'
        },
        {
            text: '小时代',
            result: '{user}借鉴《小时代》，写出了一本小说，名叫《撕逼时代》。这小说虽然没有获奖，但是却深受欢迎。读者们大部分都是《小时代》的粉丝，他们却觉得这本《撕逼时代》青出于蓝。',
            add_tags: ['抄袭：熟悉'],
            remove_tags: ['抄袭']
        },
        {
            text: '穿越到明朝做个官',
            result: '{user}借鉴《穿越到明朝做个官》，写出了一本小说，名为《穿越到M78幸运做个超人》。小说大受欢迎。',
            add_tags: ['抄袭：熟悉'],
            remove_tags: ['抄袭']
        }
            ]
        }
        }
    },
    '抄袭：大师': {
        events: {
        'dbrs_1096': {
            title: '修成正果',
            description: '{user}终于在“借鉴”界修成正果，写起东西来如鱼得水。{user}的写作速度非比常人，长篇小说一般一星期就可以写完，中篇小说两天一部，短篇小说更是挥之则来。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['抄袭：大师'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '抄袭：熟悉': {
        events: {
        'dbrs_1095': {
            title: '出版小说',
            description: '{user}运用“借鉴之术”，他发表了一篇名为《___》的小说。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['抄袭：熟悉'] },
            options: [
        {
            text: '盗墓死亡笔记',
            result: '{user}运用“借鉴之术”，他发表了一篇名为《盗墓死亡笔记》的小说。小说大部分情节直接照搬原作著名小说《盗墓记笔记》，与原作不同的是所有盗得的财宝最后都上报给了国家。',
            death_flag: true,
            death_reason: '=NAME=运用“借鉴之术”，他发表了一篇名为《盗墓死亡笔记》的小说。小说大部分情节直接照搬原作著名小说《盗墓记笔记》，与原作不同的是所有盗得的财宝最后都上报给了国家。'
        },
        {
            text: '鬼点灯',
            result: '{user}运用“借鉴之术”，他发表了一篇名为《鬼点灯》的小说。小说大部分情节直接照搬原作著名小说《鬼吹灯》，但是{user}的功力不足，根本写不出原作的严密逻辑，最后这个小说只给{user}留下了骂名，{user}只好不再写作。'
        },
        {
            text: '青精灵',
            result: '{user}运用“借鉴之术”，他发表了一篇名为《青精灵》的小说。小说在原作《蓝精灵》的背景下，叙说{user}自己原创的故事。小说详细展开描述了在社会底层的“绿奴”的悲惨的时代命运。“绿奴”是指喜欢老婆给自己戴绿帽，和做王八的老公的人。小说非常新鲜，大众非常接受这个题材。这个小说一经推出就大卖，仅仅半天就脱销。这是真正意义上的“青出于蓝”，{user}成为申国的小说大师。',
            add_tags: ['抄袭：大师'],
            remove_tags: ['抄袭：熟悉']
        }
            ]
        },
        'dbrs_1094': {
            title: '抄袭的作家',
            description: '{user}逐渐熟悉“借鉴之术”，他发表了一篇名为《___》的小说。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['抄袭：熟悉'] },
            options: [
        {
            text: '三生三世十里桃花',
            result: '{user}逐渐熟悉“借鉴之术”，他又发表了一篇名为《三生三世十里桃花》的小说。这个小说很受欢迎，很快就霸占了网络点击榜单第一位。{user}数钱数到抽筋，即使网络上有一堆人指责{user}抄袭的，但是{user}不在乎。',
            effects: { money: 4 }
        },
        {
            text: '寻找前世之旅',
            result: '{user}逐渐熟悉“借鉴之术”，他又发表了一篇名为《寻找前世之旅》的小说。这个小说很受欢迎，很快就霸占了网络点击榜单第二位。{user}数钱数到抽筋，即使网络上有一堆人指责{user}抄袭的，但是{user}不在乎。',
            effects: { money: 4 }
        },
        {
            text: '锦绣未央',
            result: '{user}逐渐熟悉“借鉴之术”，他又发表了一篇名为《锦绣未央》的小说。这个小说很受欢迎，很快就霸占了网络点击榜单第三位。{user}数钱数到抽筋，即使网络上有一堆人指责{user}抄袭的，但是{user}不在乎。',
            effects: { money: 4 }
        },
        {
            text: '庶女有毒',
            result: '{user}逐渐熟悉“借鉴之术”，他又发表了一篇名为《庶女有毒》的小说。这个小说很受欢迎，很快就霸占了网络点击榜单第四位。{user}数钱数到抽筋，即使网络上有一堆人指责{user}抄袭的，但是{user}不在乎。',
            effects: { money: 4 }
        }
            ]
        }
        }
    },
    '现视研': {
        events: {
        'dbrs_1245': {
            title: '现视研：画手',
            description: '因为{user}会画图，所以他立马成为了社员的讨论目标。社长叫{user}随便画一张来看看。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['现视研', '画画'] },
            options: [
        {
            text: '画一张美少女临摹',
            result: '因为{user}会画图，所以他立马成为了社员的讨论目标。社长叫{user}随便画一张来看看。{user}当场临摹了一个当时很流行的美少女角色。社员们都非常喜欢，对{user}钦佩有加。'
        },
        {
            text: '画一张临摹美少年',
            result: '因为{user}会画图，所以他立马成为了社员的讨论目标。社长叫{user}随便画一张来看看。{user}临摹了某个漫画里的男主角，社员们都对{user}竖起了大拇指。'
        },
        {
            text: '画一个原创角色',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '画画': {
        events: {
        'dbrs_21': {
            title: '课堂:算术课',
            description: '{user}在做400+400=？的时候，画了800个小正方形。',
            priority: 5,
            trigger_conditions: { age_range: [4, 10], required_tags: ['画画'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_23': {
            title: '课堂:舞蹈课',
            description: '舞蹈课上需要表演节目，因为{user}的画画得好，{user}决定负责___',
            priority: 5,
            trigger_conditions: { age_range: [4, 10], required_tags: ['画画'] },
            options: [
        {
            text: '布置舞台的碎花',
            result: '你做出了选择。',
            add_tags: ['画画', '画图能力']
        },
        {
            text: '设计服装',
            result: '你做出了选择。',
            add_tags: ['设计']
        }
            ]
        },
        'dbrs_478': {
            title: '画画之路',
            description: '{user}喜欢画画，他___',
            priority: 5,
            trigger_conditions: { age_range: [8, 16], required_tags: ['画画'] },
            options: [
        {
            text: '每天乱涂',
            result: '你做出了选择。',
            add_tags: ['画图能力']
        },
        {
            text: '并不想画画',
            result: '{user}时不时会涂涂画画，但他其实不喜欢画画。',
            remove_tags: ['画画']
        },
        {
            text: '看相关素描教科书',
            result: '你做出了选择。',
            add_tags: ['画图能力']
        },
        {
            text: '找自己喜欢的画临摹',
            result: '你做出了选择。',
            add_tags: ['画图能力']
        },
        {
            text: '偷懒',
            result: '{user}喜欢画画，但是他懒，没画过什么像样的东西。'
        }
            ]
        },
        'dbrs_515': {
            title: '画画：基础掌握',
            description: '关于三面五调，正确的解释是：',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['画画'] },
            options: [
        {
            text: '是由国家领导人提出的先进思想',
            result: '{user}以为自己天赋爆棚，根本不需要在画画上用功。'
        },
        {
            text: '色彩的关系',
            result: '{user}以为自己天赋爆棚，根本不需要在画画上用功。'
        },
        {
            text: '画面黑、白、灰的关系',
            result: '{user}的画画基础非常扎实，但他不骄傲，仍然保持每天一练。',
            add_tags: ['画图能力']
        },
        {
            text: '画画的工艺顺序',
            result: '{user}以为自己天赋爆棚，根本不需要在画画上用功。'
        }
            ]
        },
        'dbrs_516': {
            title: '画画：风格',
            description: '{user}的画画流派是：___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['画画'] },
            options: [
        {
            text: '写实',
            result: '你做出了选择。'
        },
        {
            text: '超写实',
            result: '你做出了选择。'
        },
        {
            text: '抽象',
            result: '你做出了选择。'
        },
        {
            text: '意识流',
            result: '你做出了选择。'
        },
        {
            text: '野兽派',
            result: '你做出了选择。'
        },
        {
            text: '印象',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_894': {
            title: '擅长画图',
            description: '{user}很擅长画图，他___',
            priority: 5,
            trigger_conditions: { age_range: [15, 70], required_tags: ['画画'] },
            options: [
        {
            text: '想成为专业画家',
            result: '你做出了选择。'
        },
        {
            text: '画图只是爱好',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1245': {
            title: '现视研：画手',
            description: '因为{user}会画图，所以他立马成为了社员的讨论目标。社长叫{user}随便画一张来看看。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['现视研', '画画'] },
            options: [
        {
            text: '画一张美少女临摹',
            result: '因为{user}会画图，所以他立马成为了社员的讨论目标。社长叫{user}随便画一张来看看。{user}当场临摹了一个当时很流行的美少女角色。社员们都非常喜欢，对{user}钦佩有加。'
        },
        {
            text: '画一张临摹美少年',
            result: '因为{user}会画图，所以他立马成为了社员的讨论目标。社长叫{user}随便画一张来看看。{user}临摹了某个漫画里的男主角，社员们都对{user}竖起了大拇指。'
        },
        {
            text: '画一个原创角色',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '脑洞': {
        events: {
        'dbrs_19': {
            title: '课堂:画图课',
            description: '有人画了树、有的画了花、画建筑，{user}画的却是___',
            priority: 5,
            trigger_conditions: { age_range: [4, 10], required_tags: ['脑洞'] },
            options: [
        {
            text: '维纳斯',
            result: '你做出了选择。',
            add_tags: ['画画', '画图能力', '学习成绩'],
            remove_tags: ['脑洞']
        },
        {
            text: '电路图',
            result: '你做出了选择。',
            add_tags: ['工程师', '学习成绩'],
            remove_tags: ['脑洞']
        },
        {
            text: '白纸，名为《曲终人散》',
            result: '你做出了选择。',
            add_tags: ['哲学家', '学习成绩'],
            remove_tags: ['脑洞']
        },
        {
            text: '涂满了黑色，名为《暗物质》',
            result: '你做出了选择。',
            add_tags: ['小科学家', '学习成绩'],
            remove_tags: ['脑洞']
        }
            ]
        },
        'dbrs_31': {
            title: '脑洞大开',
            description: '有一天，{user}走在马路上，突然脑洞大开，___',
            priority: 5,
            trigger_conditions: { age_range: [4, 19], required_tags: ['脑洞'] },
            options: [
        {
            text: '想了串数字，买六合彩',
            result: '{user}中了350选7头奖，变成了暴发户。怀有希望的确是一件好事，梦想总会成真。',
            effects: { money: 10 }
        },
        {
            text: '进入了冥想。',
            result: '你做出了选择。',
            add_tags: ['冥想家']
        }
            ]
        },
        'dbrs_779': {
            title: '脑洞王',
            description: '{user}脑洞超大，在语文考试中的作文题上写了2万字，密密麻麻的写满了整个答题纸。这篇作文是一篇有哭有笑，有重逢有离别，有斗争有妥协……审卷的老师看这作文，有时开怀大笑，有时痛哭流涕。最后给了满分。',
            priority: 5,
            trigger_conditions: { age_range: [5, 17], required_tags: ['脑洞'] },
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