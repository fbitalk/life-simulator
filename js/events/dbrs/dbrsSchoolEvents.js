// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 学校/教育
// 事件数: 31
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
});

export const dbrsSchoolEvents = {
    '仆人兼学生': {
        events: {
        'dbrs_1126': {
            title: '闲暇时光',
            description: '{user}与仆人除了学琴，闲暇之余还会___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['仆人兼学生', '女性'] },
            options: [
        {
            text: '聊天',
            result: '你做出了选择。'
        },
        {
            text: '下棋',
            result: '你做出了选择。'
        },
        {
            text: '赏花',
            result: '你做出了选择。'
        },
        {
            text: '闻鸟',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1124': {
            title: '严格的=NAME=',
            description: '仆人成为{user}的学生后，经受着非人的对待。{user}以非常严格的方法传授琴法。仆人一弹错，{user}就会___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['仆人兼学生', '女性'] },
            options: [
        {
            text: '给他一脚',
            result: '仆人成为{user}的学生后，经受着非人的对待。{user}以非常严格的方法传授琴法。仆人一弹错，{user}就会用娇小的脚踢他。'
        },
        {
            text: '给他一拳',
            result: '仆人成为{user}的学生后，经受着非人的对待。{user}以非常严格的方法传授琴法。仆人一弹错，{user}就会用小小的拳头打仆人……'
        },
        {
            text: '用琴砸人',
            result: '仆人成为{user}的学生后，经受着非人的对待。{user}以非常严格的方法传授琴法。仆人一弹错，{user}就会叫仆人把琴交出来，{user}拿起琴就砸他的仆人，血肉横飞，仆人却不反抗。'
        }
            ]
        },
        'dbrs_1125': {
            title: '学琴',
            description: '{user}现在除了去琴校上学，就整天和他的仆人待在房间里，教他的仆人学琴。就这样日复一日，年复一年……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['仆人兼学生', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1131': {
            title: '闭眼弹琴',
            description: '{user}发现他的仆人在弹三味弦的时候故意闭上双眼，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [15, 40], required_tags: ['仆人兼学生', '女性'] },
            options: [
        {
            text: '感觉到被歧视',
            result: '{user}发现他的仆人在弹三味弦的时候故意闭上双眼，{user}很生气，感觉仆人在歧视自己是个瞎子。{user}把仆人赶出了门外。无论仆人怎么解释，他都不听。'
        },
        {
            text: '感觉到被同情',
            result: '{user}发现他的仆人在弹三味弦的时候故意闭上双眼，{user}很生气，感觉仆人在可怜自己。{user}强烈的自尊心感到受伤，{user}把仆人赶出了门外。无论仆人怎么解释，他都不听。'
        },
        {
            text: '感觉到被嘲笑',
            result: '{user}发现他的仆人在弹三味弦的时候故意闭上双眼，{user}很生气，觉得仆人在嘲笑自己。{user}把仆人赶出了门外。无论仆人怎么解释，他都不听。'
        },
        {
            text: '感觉到温暖',
            result: '{user}发现他的仆人在弹三味弦的时候故意闭上双眼，{user}竟然感到一丝暖意涌上心头。仆人佐助说：“我闭上双眼弹琴，想体会老师您的一切情绪。”{user}听后，感觉脸火辣辣的。',
            add_tags: ['动之以情']
        }
            ]
        },
        'dbrs_1130': {
            title: '恨铁不成钢',
            description: '{user}教仆人佐助弹一首比较难的曲目，有一个段落佐助怎么弹都弹不好，{user}生气了。{user}狠狠地用指甲抓了一把佐助，佐助痛苦得喊了出来，把{user}吓到了，{user}赶紧问：“佐助你不要紧吧？”仆人佐助立马回答：“没事！学生无能，请老师更用力地打我！！”{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['仆人兼学生', '女性'] },
            options: [
        {
            text: '照做了',
            result: '{user}在体罚自己的仆人的时候，不小心把自己最好的贴身仆人活活打死了……{user}摸着再也不能动弹的尸体，仰天长咆。',
            remove_tags: ['仆人兼学生'],
            death_flag: true,
            death_reason: '=NAME=在体罚自己的仆人的时候，不小心把自己最好的贴身仆人活活打死了……=NAME=摸着再也不能动弹的尸体，仰天长咆。'
        },
        {
            text: '让仆人继续练琴',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1133': {
            title: '意外',
            description: '{user}发现自己怀孕了……别人问{user}孩子的爸爸是谁，{user}打死也不说。{user}这几年来，天天与家里的仆人朝夕相处，家里人猜测，这孩子应该是{user}与仆人佐助的。而仆人佐助也是绝不承认，家里人只好不了了之……',
            priority: 5,
            trigger_conditions: { age_range: [15, 50], required_tags: ['仆人兼学生', '动之以情', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肌肤之亲'],
            remove_tags: ['动之以情']
        }
            ]
        },
        'dbrs_1140': {
            title: '取暖',
            description: '这年的冬天特别的冷，每到晚上，{user}的手脚就会冰冻麻木，隐隐作痛。这时，他的仆人佐助就会过来帮{user}暖手。佐助抓着{user}的手摩擦生热，{user}感觉到了___。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['仆人兼学生', '琴校老师'] },
            options: [
        {
            text: '温暖',
            result: '你做出了选择。'
        },
        {
            text: '比火炉还要温暖的感觉',
            result: '你做出了选择。'
        },
        {
            text: '恶心',
            result: '你做出了选择。'
        },
        {
            text: '快感',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1141': {
            title: '装饰',
            description: '{user}吩咐仆人佐助购买一些___来装饰家里。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['仆人兼学生', '琴校老师'] },
            options: [
        {
            text: '花',
            result: '虽然{user}看不见，但是他喜欢家里布满植物的芳香。{user}吩咐仆人佐助买来许多花来装饰家里。'
        },
        {
            text: '鸟',
            result: '{user}很喜欢听鸟叫，他吩咐仆人佐助买来7，8笼鸟放在家里饲养。'
        }
            ]
        },
        'dbrs_1145': {
            title: '取暖',
            description: '又是一个寒冷的冬天，{user}在晚上经常会被冻醒。这时候，仆人佐助就会走过来，把{user}的两只小脚放进他的衣服里，用身体来为{user}取暖。这时，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['仆人兼学生', '琴校老师'] },
            options: [
        {
            text: '安心地睡去',
            result: '你做出了选择。'
        },
        {
            text: '感觉全身都在发热',
            result: '你做出了选择。'
        },
        {
            text: '感到恶心',
            result: '你做出了选择。'
        },
        {
            text: '把仆人踢开',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '动之以情': {
        events: {
        'dbrs_1133': {
            title: '意外',
            description: '{user}发现自己怀孕了……别人问{user}孩子的爸爸是谁，{user}打死也不说。{user}这几年来，天天与家里的仆人朝夕相处，家里人猜测，这孩子应该是{user}与仆人佐助的。而仆人佐助也是绝不承认，家里人只好不了了之……',
            priority: 5,
            trigger_conditions: { age_range: [15, 50], required_tags: ['仆人兼学生', '动之以情', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肌肤之亲'],
            remove_tags: ['动之以情']
        }
            ]
        }
        }
    },
    '医学专业': {
        events: {
        'dbrs_1450': {
            title: '大学：通宵自习',
            description: '在学校里有一个24小时开放的通宵课室，每天晚上都坐满了医学生在里面自习。{user}也经常在里面通宵背知识点。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['医学专业'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1451': {
            title: '大学：病理课',
            description: '上病理课的时候，{user}在划重点。老师抢过{user}的笔丢出窗外，申请严肃地对{user}说：“难道病人会按照重点来生病吗？这全部都是重点！”',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['医学专业'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1452': {
            title: '大学：医学生聚餐',
            description: '{user}和舍友出外吃饭，大家一边啃羊蝎子，一边在讨论这是哪一节椎管。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['医学专业'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1453': {
            title: '大学：分手',
            description: '{user}成为了医学生后，整天就知道学习，冷落了他的女朋友。他们分手了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['医学专业', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1454': {
            title: '大学：分手',
            description: '{user}成为了医学生后，整天就知道学习，冷落了他的男朋友。他们分手了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['医学专业', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1456': {
            title: '大学：医学生的恋爱时光',
            description: '{user}约会的方式，就是和男朋友大家手拉手一起去上自习。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['医学专业', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '学生': {
        events: {
        'dbrs_1608': {
            title: '暑期工',
            description: '{user}放暑假了，他被调度到国家前线打暑期工。{user}每天的工作就是站岗，岗哨里有一挺机枪，一旦有不明身份的人接近，{user}就可以开枪扫射。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['学生'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '恋爱': {
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
    '昆学部': {
        events: {
        'dbrs_1223': {
            title: '不合群',
            description: '在昆学部社团里，没人跟{user}玩，大家都只是沉浸在自我的世界里。{user}选择了离开。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['昆学部', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['昆学部']
        }
            ]
        },
        'dbrs_1225': {
            title: '昆学研究',
            description: '{user}放学后都会去参加社团活动。与社员们认真研究昆学。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['昆学部'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
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
        },
        'dbrs_1226': {
            title: '废部',
            description: '昆学部因为涉嫌进行淫秽集会被举报了，警方立即介入调查，现场抓获全部社员。部室门被黏上封条，禁止任何人出入。昆学部也被学校废部。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['昆学部'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['监狱时间'],
            remove_tags: ['昆学部']
        }
            ]
        },
        'dbrs_1231': {
            title: '学有所成',
            description: '{user}在昆学部中一直刻苦勤奋地修行，终于学有所成。{user}成功向___表白，摆脱单身。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['昆学部', '男性'] },
            options: [
        {
            text: '一个女权主义者',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        },
        {
            text: '女神',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        },
        {
            text: '富婆',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        }
            ]
        },
        'dbrs_1340': {
            title: '社团研究',
            description: '{user}在昆学部中搞研究。他与另外一位社员自制催情药。按照网上找来的配方调好，制作完成后，他们以身试药，喝完后药性发作……{user}起身想去厕所解决问题，才发现社团教室的门不小心锁上了。{user}与另外一名社员面面相觑……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['昆学部'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['菊花残']
        }
            ]
        }
        }
    },
    '琴校老师': {
        events: {
        'dbrs_1135': {
            title: '生活费',
            description: '{user}从家里搬出来后，是依靠___养活自己。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['琴校老师', '女性'] },
            options: [
        {
            text: '家里给钱',
            result: '你做出了选择。'
        },
        {
            text: '收学费',
            result: '{user}从家里搬出来后，是依靠收学费养活自己。起初，琴校的学徒很多，但是{user}近乎虐待的教学方法，使所有的学生都离开了琴校，学费也大部分被收回。生活费没有来源了，{user}与仆人一直在遭受饥饿与寒冷。{user}的身子一向很弱，经受不住此般折磨。他很快就得病，离开了人世。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1138': {
            title: '调皮的学生',
            description: '有一位学生总是静不下心来弹琴，老是在{user}的课堂中开小差，屡教不改。{user}把他___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['琴校老师'] },
            options: [
        {
            text: '打一顿',
            result: '你做出了选择。'
        },
        {
            text: '不理睬',
            result: '有一位学生总是静不下心来弹琴，老是在{user}的课堂中开小差，屡教不改。{user}从此再不教导这个学生。'
        },
        {
            text: '逐出琴校',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1140': {
            title: '取暖',
            description: '这年的冬天特别的冷，每到晚上，{user}的手脚就会冰冻麻木，隐隐作痛。这时，他的仆人佐助就会过来帮{user}暖手。佐助抓着{user}的手摩擦生热，{user}感觉到了___。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['仆人兼学生', '琴校老师'] },
            options: [
        {
            text: '温暖',
            result: '你做出了选择。'
        },
        {
            text: '比火炉还要温暖的感觉',
            result: '你做出了选择。'
        },
        {
            text: '恶心',
            result: '你做出了选择。'
        },
        {
            text: '快感',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1137': {
            title: '教学方法',
            description: '{user}通过___的方法教导他的学生。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['琴校老师'] },
            options: [
        {
            text: '口述',
            result: '你做出了选择。'
        },
        {
            text: '演示',
            result: '你做出了选择。'
        },
        {
            text: '鞭打',
            result: '你做出了选择。'
        },
        {
            text: '滴蜡',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1141': {
            title: '装饰',
            description: '{user}吩咐仆人佐助购买一些___来装饰家里。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['仆人兼学生', '琴校老师'] },
            options: [
        {
            text: '花',
            result: '虽然{user}看不见，但是他喜欢家里布满植物的芳香。{user}吩咐仆人佐助买来许多花来装饰家里。'
        },
        {
            text: '鸟',
            result: '{user}很喜欢听鸟叫，他吩咐仆人佐助买来7，8笼鸟放在家里饲养。'
        }
            ]
        },
        'dbrs_1145': {
            title: '取暖',
            description: '又是一个寒冷的冬天，{user}在晚上经常会被冻醒。这时候，仆人佐助就会走过来，把{user}的两只小脚放进他的衣服里，用身体来为{user}取暖。这时，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['仆人兼学生', '琴校老师'] },
            options: [
        {
            text: '安心地睡去',
            result: '你做出了选择。'
        },
        {
            text: '感觉全身都在发热',
            result: '你做出了选择。'
        },
        {
            text: '感到恶心',
            result: '你做出了选择。'
        },
        {
            text: '把仆人踢开',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1146': {
            title: '阴险之人',
            description: '在一个月黑风高的晚上，{user}正在熟睡。他的家门被悄悄地打开了，进来一个蒙面人。蒙面人手拿一个水壶，上面装着滚烫的水。蒙面人静悄悄地走到{user}身前，瞄准{user}的脸部，把滚水一股脑全部倒在{user}脸上。{user}被这突如其来的热水烫醒，惨叫起来。仆人佐助闻声赶来，扶起受伤挣扎的{user}。{user}却推开佐助，生怕自己被烫伤的脸被佐助看到。这时蒙面人早已逃之夭夭。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['琴校老师'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '自学：编程': {
        events: {
        'dbrs_1455': {
            title: '自学：编程',
            description: '{user}对编程有兴趣，他开始自学编程，从___开始。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['自学：编程'] },
            options: [
        {
            text: 'php',
            result: '你做出了选择。'
        },
        {
            text: 'cpp',
            result: '你做出了选择。'
        },
        {
            text: 'C',
            result: '你做出了选择。'
        },
        {
            text: 'javascript',
            result: '你做出了选择。'
        },
        {
            text: 'java',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '身体协调': {
        events: {
        'dbrs_33': {
            title: '课堂:体操',
            description: '{user}做广播体操的姿势非常标准，被国家体操协会邀请去做《第一套广播体操》的视频录像',
            priority: 5,
            trigger_conditions: { age_range: [4, 19], required_tags: ['身体协调'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_42': {
            title: '课堂:体育课',
            description: '在课堂上，{user}现场表演了自己的绝技，身体折起来，嘴巴可以吃到自己下面。',
            priority: 5,
            trigger_conditions: { age_range: [7, 17], required_tags: ['身体协调'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_207': {
            title: '表现自己',
            description: '{user}突然想，自己有这么柔软的身体，应该利用起来。去街头卖艺似乎是一个表现自己的好方法。',
            priority: 5,
            trigger_conditions: { age_range: [10, 120], required_tags: ['身体协调'] },
            options: [
        {
            text: '行动',
            result: '{user}凭借着他柔软的身体，{user}能做出各种特技动作，{user}决定街头表演这些来表现自己。'
        },
        {
            text: '放弃',
            result: '{user}有个想法，自己有这么柔软的身体，应该利用起来，可以去街头卖艺。但这种事情有一定的危险，{user}思考再三，还是选择了放弃。'
        }
            ]
        },
        'dbrs_771': {
            title: '增员操',
            description: '{user}以前在学校是广播体操模范。工作后在公司的增员操跳得不错，受到老板的提拔，负责领操。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['身体协调'] },
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