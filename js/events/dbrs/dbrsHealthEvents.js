// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 健康/疾病
// 事件数: 56
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
    '口臭': { color: 'red' },
    '爱之病': { color: 'red' },
    '癌症': { color: 'red' },
    '精神分裂': { color: 'red' },
    '肝硬化': { color: 'red' },
    '肥胖': { color: 'red' },
});

export const dbrsHealthEvents = {
    '乳癌': {
        events: {
        'dbrs_684': {
            title: '不断增大',
            description: '眼看{user}的胸部逐渐增大，比例已经不协调了。比篮球还大的胸部让{user}的回头率达到了100％。{user}决定___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['乳癌'] },
            options: [
        {
            text: '去医院检查',
            result: '你做出了选择。',
            add_tags: ['乳癌2'],
            remove_tags: ['乳癌']
        },
        {
            text: '拍写真',
            result: '你做出了选择。',
            add_tags: ['乳癌2'],
            remove_tags: ['乳癌']
        },
        {
            text: '喝醋，让胸部减肥',
            result: '你做出了选择。',
            add_tags: ['乳癌2'],
            remove_tags: ['乳癌']
        }
            ]
        },
        'dbrs_766': {
            title: '追求者',
            description: '因为某些原因，{user}的胸脯非常汹涌。某天，一个帅小伙捧着鲜花送给{user}，并要求和{user}交往。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['乳癌', '女性'] },
            options: [
        {
            text: '滚',
            result: '因为某些原因，{user}的胸脯非常汹涌。某天，一个帅小伙捧着鲜花送给{user}，并要求和{user}交往。{user}轰走了这个人。'
        },
        {
            text: '答应',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        },
        {
            text: '性高采烈地答应',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        },
        {
            text: '告诉他这个胸的真相',
            result: '因为某些原因，{user}的胸脯非常汹涌。某天，一个帅小伙捧着鲜花送给{user}，并要求和{user}交往。{user}把自己胸部的真相说了出来，那个追求者听后竟然把花吃掉了，然后尴尬地笑笑，跑了。'
        }
            ]
        }
        }
    },
    '乳癌2': {
        events: {
        'dbrs_685': {
            title: '老酸奶',
            description: '{user}分泌出来的母乳味道酸酸的，有点像老酸奶。他的孩子可爱喝了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['乳癌2'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_686': {
            title: '致命摔跤',
            description: '{user}胸部太大了，很难维持平衡。一次下楼梯不慎跌倒，{user}硕大的胸部撞到楼梯的尖角，像气球一样炸裂开来。送院后因为失血太多，{user}离开了人世。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['乳癌2'] },
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
    '会喷火': {
        events: {
        'dbrs_666': {
            title: '感冒',
            description: '{user}在{age}岁的时候得了感冒，起床时连打10个喷嚏，每打一个喷嚏，火焰都会情不自禁地喷出。{user}和家人死在了熊熊烈火中。',
            priority: 10,
            trigger_conditions: { age_range: [4, 120], required_tags: ['会喷火', '多病'] },
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
    '口腔排便': {
        events: {
        'dbrs_70': {
            title: '异味',
            description: '尽管{user}每天漱口，刷牙，然而他还是有超强的口臭。',
            priority: 5,
            trigger_conditions: { age_range: [4, 120], required_tags: ['口腔排便'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['口臭']
        }
            ]
        },
        'dbrs_72': {
            title: '厕所杂技表演',
            description: '{user} 用口上厕所，惊呆了同班同学们。',
            priority: 5,
            trigger_conditions: { age_range: [4, 19], required_tags: ['口腔排便'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_78': {
            title: '拉肚子',
            description: '{user}在吃饭的时候，突然一阵恶心，土黄土黄的屎汁控制不住从口中喷涌而出。饭桌一瞬间变成了人间炼狱。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['口腔排便'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_185': {
            title: '便秘',
            description: '{user}便秘了,坚固的米田共卡在气管了。{user}噎死在了厕所,头倒在屎坑里泡了不知道多久,尸体才被人发现。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['口腔排便'] },
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
        'dbrs_1106': {
            title: '顽强的生命',
            description: '{user}在他{age}岁大寿时对着众人感叹：我没屁眼能活到{age}真是生命的奇迹啊。迎来全场鼓掌。',
            priority: 5,
            trigger_conditions: { age_range: [60, 120], required_tags: ['口腔排便'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '呼吸道疾病': {
        events: {
        'dbrs_563': {
            title: '决定',
            description: '{user}患有严重的呼吸道疾病，去医院检查，看到自己肺部的透视照片，整个肺都是黑色的。活像一个烧烤店的大腰子。',
            priority: 5,
            trigger_conditions: { age_range: [10, 120], required_tags: ['烟瘾', '呼吸道疾病'] },
            options: [
        {
            text: '赶紧戒烟',
            result: '你做出了选择。',
            add_tags: ['黑肺：阶段1'],
            remove_tags: ['呼吸道疾病']
        },
        {
            text: '不当一回事',
            result: '你做出了选择。',
            add_tags: ['黑肺：阶段1'],
            remove_tags: ['呼吸道疾病']
        },
        {
            text: '戒烟已太迟，破罐破摔，该抽抽',
            result: '你做出了选择。',
            add_tags: ['黑肺：阶段1'],
            remove_tags: ['呼吸道疾病']
        }
            ]
        }
        }
    },
    '多病': {
        events: {
        'dbrs_118': {
            title: '弱不禁风',
            description: '{user}打针的时候，痛得晕了过去。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['多病'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_184': {
            title: '流感病毒',
            description: '{user}从小就体弱多病，每次流感爆发，他都会中招。这次的H5N2他也不例外，病得死去活来，送去医院急救。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['多病'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_556': {
            title: '现代化自然环境',
            description: '{user}脆弱的身体没有承受住当今的现代化自然环境影响，患上了呼吸道疾病。',
            priority: 5,
            trigger_conditions: { age_range: [10, 50], required_tags: ['多病'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['呼吸道疾病']
        }
            ]
        },
        'dbrs_655': {
            title: '精神分裂',
            description: '{user}发现近来他老是精神恍惚，去医院看，医生说有轻微的精神分裂症状，告知{user}注意身体。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['玻璃心', '多病'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['精神分裂']
        }
            ]
        },
        'dbrs_666': {
            title: '感冒',
            description: '{user}在{age}岁的时候得了感冒，起床时连打10个喷嚏，每打一个喷嚏，火焰都会情不自禁地喷出。{user}和家人死在了熊熊烈火中。',
            priority: 10,
            trigger_conditions: { age_range: [4, 120], required_tags: ['会喷火', '多病'] },
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
        'dbrs_1228': {
            title: '肉改部：课外锻炼：跑步',
            description: '{user}放学后，与社员们在高速公路上跑步锻炼。在连续跑了40多公里后，{user}的弱身子终于崩溃了，心肺脾迅速衰竭。{user}死在了高速公路上，成为了第二个“马拉松”。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部', '多病'] },
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
    '尿毒症': {
        events: {
        'dbrs_648': {
            title: '腐蚀之尿',
            description: '{user}发现自己的尿液有非常强的腐蚀性，能把小便池里的陶瓷溶解！{user}___',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['尿毒症'] },
            options: [
        {
            text: '赶紧去医院检查',
            result: '你做出了选择。'
        },
        {
            text: '把自己的尿储存起来',
            result: '{user}发现自己的尿液有非常强的腐蚀性，{user}想用玻璃瓶存起他的尿，不料尿液把玻璃瓶都融化了，泄漏出来的尿液喷溅{user}一身，{user}被溶解成了一滩血水……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '去游泳池撒尿害人',
            result: '{user}发现自己的尿液竟然像硫酸一样，他知道他的尿毒症已经发展到非比寻常的程度了，{user}走去公众游泳池撒尿，害死了整个游泳池里的人，一齐为{user}陪葬。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=发现自己的尿液竟然像硫酸一样，他知道他的尿毒症已经发展到非比寻常的程度了，=NAME=走去公众游泳池撒尿，害死了整个游泳池里的人，一齐为=NAME=陪葬。'
        }
            ]
        }
        }
    },
    '烟瘾': {
        events: {
        'dbrs_563': {
            title: '决定',
            description: '{user}患有严重的呼吸道疾病，去医院检查，看到自己肺部的透视照片，整个肺都是黑色的。活像一个烧烤店的大腰子。',
            priority: 5,
            trigger_conditions: { age_range: [10, 120], required_tags: ['烟瘾', '呼吸道疾病'] },
            options: [
        {
            text: '赶紧戒烟',
            result: '你做出了选择。',
            add_tags: ['黑肺：阶段1'],
            remove_tags: ['呼吸道疾病']
        },
        {
            text: '不当一回事',
            result: '你做出了选择。',
            add_tags: ['黑肺：阶段1'],
            remove_tags: ['呼吸道疾病']
        },
        {
            text: '戒烟已太迟，破罐破摔，该抽抽',
            result: '你做出了选择。',
            add_tags: ['黑肺：阶段1'],
            remove_tags: ['呼吸道疾病']
        }
            ]
        },
        'dbrs_565': {
            title: '严重咳嗽',
            description: '有一天，{user}在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['烟瘾', '黑肺：阶段1'] },
            options: [
        {
            text: '赶紧去医院检查身体',
            result: '有一天，{user}在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。虽然入夜已深，但是{user}还是穿上衣服，走去了医院看病。'
        },
        {
            text: '不予理会',
            result: '有一天，{user}在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。{user}不予理会。晚上睡觉的时候，{user}呼吸越来越困难，并且咳出更多的煤渣了，有一些煤渣卡在气管里出不来，塞死了气管。{user}窒息而死，死相骇人。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '有一天，=NAME=在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。=NAME=不予理会。晚上睡觉的时候，=NAME=呼吸越来越困难，并且咳出更多的煤渣了，有一些煤渣卡在气管里出不来，塞死了气管。=NAME=窒息而死，死相骇人。'
        },
        {
            text: '吃点胃药',
            result: '有一天，{user}在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。{user}还以为是吃错东西了，找了颗胃药吃掉。晚上睡觉的时候，{user}呼吸越来越困难，并且咳出更多的煤渣了，有一些煤渣卡在气管里出不来，塞死了气管。{user}窒息而死，死相骇人。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '有一天，=NAME=在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。=NAME=还以为是吃错东西了，找了颗胃药吃掉。晚上睡觉的时候，=NAME=呼吸越来越困难，并且咳出更多的煤渣了，有一些煤渣卡在气管里出不来，塞死了气管。=NAME=窒息而死，死相骇人。'
        }
            ]
        },
        'dbrs_561': {
            title: '烟瘾',
            description: '{user}经常吸烟，严重的时候甚至每天要吸上2包。脆弱的身体没有承受住{user}的欲望，{user}患上了非常严重的呼吸道疾病。',
            priority: 5,
            trigger_conditions: { age_range: [20, 120], required_tags: ['烟瘾'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['呼吸道疾病']
        }
            ]
        },
        'dbrs_1342': {
            title: '沉迷爽文',
            description: '{user}沉迷爽文，成功戒掉了烟瘾……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爽文上瘾', '烟瘾'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['烟瘾']
        }
            ]
        }
        }
    },
    '爱之病': {
        events: {
        'dbrs_369': {
            title: '爱之病：治疗',
            description: '{user}身患爱之病，做什么都提不起劲，生活了无生趣。医院里的医生给{user}3个方案，让{user}选择出路。',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['爱之病'] },
            options: [
        {
            text: '人道毁灭',
            result: '{user}身患爱之病，做什么都提不起劲，生活了无生趣。{user}向医院申请人道毁灭。'
        },
        {
            text: '化疗',
            result: '{user}身患爱之病，但是没有失去生存的渴望。他选择化疗，与爱(之病)抗争。',
            add_tags: ['爱之病：化疗'],
            remove_tags: ['爱之病']
        },
        {
            text: '多笑',
            result: '{user}身患爱之病，做什么都提不起劲，生活了无生趣。医生建议{user}在剩下来的日子里为所欲为，尽量保持开心。',
            add_tags: ['爱之病：晚期'],
            remove_tags: ['爱之病']
        },
        {
            text: '喝醋',
            result: '{user}身患爱之病，做什么都提不起劲，生活了无生趣。绝望的{user}谁的话都听不进去，打算拼一拼，通过喝醋治疗，死马当活马医。',
            add_tags: ['爱之病：晚期'],
            remove_tags: ['爱之病']
        }
            ]
        },
        'dbrs_748': {
            title: '盲目的爱',
            description: '就算{user}身患绝症，薇尔希也对{user}不离不弃。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爱之病'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_900': {
            title: '电视广告',
            description: '一则电视广告：有救啦！有救啦！！不治之症爱之病现在有救啦！希望国欧贝克力实验室最新研究成果，治疗爱之病的特效药现在免费发放！！抓住你人生的最后一根稻草！！马上拿起电话拨打23333333联系我们',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爱之病'] },
            options: [
        {
            text: '马上联系',
            result: '{user}从电视购物上买回来一盒爱之病特效药，回家一吃发现只是麦芽糖，日了狗了。'
        },
        {
            text: '关电视',
            result: '你做出了选择。'
        },
        {
            text: '举报这个电视广告诈骗',
            result: '{user}举报了一起特大电视购物诈骗案，涉及金额近亿元。警察表扬了{user}，并发放了几百元的奖金给他。'
        }
            ]
        },
        'dbrs_1033': {
            title: '阶梯计划',
            description: '有一个名为“阶梯计划”的太空组织在民间招募志愿者，他们想找一些绝症患者参与“阶梯计划”，牺牲自己登上太空船，然后以光速的百分之一速度进行太空旅行。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爱之病'] },
            options: [
        {
            text: '报名',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '有一个名为“阶梯计划”的太空组织在民间招募志愿者，他们想找一'
        },
        {
            text: '不感兴趣',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '有一个名为“阶梯计划”的太空组织在民间招募志愿者，他们想找一'
        }
            ]
        }
        }
    },
    '爱之病：化疗': {
        events: {
        'dbrs_372': {
            title: '天价医药费',
            description: '{user}身患爱之病，每天都要吃药打针，控制病情。{user}已经身无分文，再也负担不起犹如天文数字一样的医药费。',
            priority: 10,
            trigger_conditions: { age_range: [5, 120], required_tags: ['爱之病：化疗', '贫穷'] },
            options: [
        {
            text: '放弃治疗',
            result: '{user}身患爱之病，{user}已经身无分文，再也负担不起犹如天文数字一样的医药费。{user}最终选择了放弃治疗，让病情急转直下。',
            add_tags: ['爱之病：晚期'],
            remove_tags: ['爱之病：化疗']
        },
        {
            text: '喝醋',
            result: '{user}身患爱之病，{user}已经身无分文，再也负担不起犹如天文数字一样的医药费。{user}最终选择了放弃治疗，买了一箱醋回家狂喝，死马当活马医。',
            add_tags: ['爱之病：晚期'],
            remove_tags: ['爱之病：化疗']
        }
            ]
        },
        'dbrs_371': {
            title: '爱之病：化疗',
            description: '{user}身患爱之病，每天都要吃药打针，控制病情。昂贵的医药费，让{user}倾家荡产。',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['爱之病：化疗'] },
            options: [
        {
            text: '继续坚持',
            result: '你做出了选择。',
            effects: { money: -8 }
        },
        {
            text: '放弃治疗',
            result: '{user}身患爱之病，每天都要吃药打针，控制病情。昂贵的医药费，让{user}倾家荡产。{user}痛苦不堪，放弃了继续化疗。放弃治疗后的{user}病情立马恶化。',
            add_tags: ['爱之病：晚期'],
            remove_tags: ['爱之病：化疗']
        }
            ]
        }
        }
    },
    '爱之病：晚期': {
        events: {
        'dbrs_373': {
            title: '肥皂泡一样脆弱',
            description: '{user}已经是爱之病晚期病人，他就像一个肥皂泡一样脆弱，一碰就会破碎。{user}被一只小蚂蚁咬到了手指，伤口迅速感染，接着以迅雷不及掩耳之势扩散至全身，{user}口吐黑血而死。',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['爱之病：晚期'] },
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
        'dbrs_377': {
            title: '杀人喷嚏',
            description: '{user}和朋友聊天，他的朋友不小心对着{user}打了个喷嚏，喷了{user}一脸。接着{user}的脸立马开始腐烂，{user}捂着脸痛苦地挣扎，没过多久就死了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爱之病：晚期'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '{user}和朋友聊天，他的朋友不小心对着{user}打了个'
        }
            ]
        }
        }
    },
    '爽文上瘾': {
        events: {
        'dbrs_1342': {
            title: '沉迷爽文',
            description: '{user}沉迷爽文，成功戒掉了烟瘾……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爽文上瘾', '烟瘾'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['烟瘾']
        }
            ]
        }
        }
    },
    '玻璃心': {
        events: {
        'dbrs_655': {
            title: '精神分裂',
            description: '{user}发现近来他老是精神恍惚，去医院看，医生说有轻微的精神分裂症状，告知{user}注意身体。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['玻璃心', '多病'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['精神分裂']
        }
            ]
        }
        }
    },
    '痔疮': {
        events: {
        'dbrs_142': {
            title: '站着办公',
            description: '{user}痔疮十分严重，所以不能坐下，上班时都是站着。{user}站着办公的照片被发到网上，引起了对当今白领的亚健康问题的热烈讨论。当有新闻媒体问{user}为什么要站着办公的时候，{user}回答___',
            priority: 5,
            trigger_conditions: { age_range: [20, 55], required_tags: ['痔疮'] },
            options: [
        {
            text: '“请爱护你的腰，站起来办公”',
            result: '你做出了选择。'
        },
        {
            text: '“我是不愿做奴隶的人”',
            result: '你做出了选择。'
        },
        {
            text: '“这是我个人的修仙方法。”',
            result: '你做出了选择。'
        },
        {
            text: '老实交代',
            result: '{user}在{age}岁的时候变成了热议人物，其实就是大家的笑柄。'
        }
            ]
        }
        }
    },
    '癌症': {
        events: {
        'dbrs_678': {
            title: '变丰满',
            description: '{user}的胸部这几天不断在增大，变得挺拔了起来。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['癌症', '女性'] },
            options: [
        {
            text: '好开心啊',
            result: '你做出了选择。',
            add_tags: ['乳癌'],
            remove_tags: ['癌症']
        },
        {
            text: '去医院检查',
            result: '{user}的胸部这几天不断在增大，变得挺拔了起来。{user}去医院检查，医生告诉{user}，他患上了乳癌。'
        }
            ]
        }
        }
    },
    '精神分裂': {
        events: {
        'dbrs_656': {
            title: '精神恍惚',
            description: '{user}患上精神分裂症后，一直精神恍惚，老是在一些莫名其妙的地方醒来。有一次他醒来，看到自己拿着手机，转发了很多心灵鸡汤和谣言。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['精神分裂'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '肉改部': {
        events: {
        'dbrs_1228': {
            title: '肉改部：课外锻炼：跑步',
            description: '{user}放学后，与社员们在高速公路上跑步锻炼。在连续跑了40多公里后，{user}的弱身子终于崩溃了，心肺脾迅速衰竭。{user}死在了高速公路上，成为了第二个“马拉松”。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肉改部', '多病'] },
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
    '肝硬化': {
        events: {
        'dbrs_466': {
            title: '肝硬化',
            description: '{user}得了肝硬化，{user}决定___',
            priority: 5,
            trigger_conditions: { age_range: [200, 200], required_tags: ['肝硬化'] },
            options: [
        {
            text: '要多吃水果',
            result: '你做出了选择。'
        },
        {
            text: '规律地生活',
            result: '你做出了选择。'
        },
        {
            text: '常喝凉茶',
            result: '你做出了选择。'
        },
        {
            text: '多运动',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_465': {
            title: '肝硬化',
            description: '肝硬化是因组织结构紊乱而致肝功能障碍。目前尚无根治办法。心肝宝贝这个成语很深刻。',
            priority: 5,
            trigger_conditions: { age_range: [35, 120], required_tags: ['肝硬化'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肝硬化']
        }
            ]
        },
        'dbrs_490': {
            title: '肝硬化',
            description: '{user}的肝硬化越发严重，{user}决定___',
            priority: 5,
            trigger_conditions: { age_range: [35, 120], required_tags: ['肝硬化'] },
            options: [
        {
            text: '吃更多的水果',
            result: '你做出了选择。',
            add_tags: ['肝硬化：晚期'],
            remove_tags: ['肝硬化']
        },
        {
            text: '更规律地生活',
            result: '你做出了选择。',
            add_tags: ['肝硬化：晚期'],
            remove_tags: ['肝硬化']
        },
        {
            text: '更常喝凉茶',
            result: '你做出了选择。',
            add_tags: ['肝硬化：晚期'],
            remove_tags: ['肝硬化']
        },
        {
            text: '更多运动',
            result: '你做出了选择。',
            add_tags: ['肝硬化：晚期'],
            remove_tags: ['肝硬化']
        }
            ]
        }
        }
    },
    '肝硬化：晚期': {
        events: {
        'dbrs_491': {
            title: '拉血',
            description: '{user}有一天拉便便，发现拉了一厕所血。',
            priority: 5,
            trigger_conditions: { age_range: [35, 120], required_tags: ['肝硬化：晚期', '女性'] },
            options: [
        {
            text: '这次的姨妈量真大',
            result: '{user}有一天拉便便，发现拉了一厕所血。{user}还以为是姨妈来了，不以为然。不出一天，{user}就因内出血过多而死亡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=有一天拉便便，发现拉了一厕所血。=NAME=还以为是姨妈来了，不以为然。不出一天，=NAME=就因内出血过多而死亡。'
        },
        {
            text: '得去医院做全身检查',
            result: '{user}有一天拉便便，发现拉了一厕所血。{user}赶紧去厕所做全身检查，发现是肝硬化引起的消化道吐血，幸好及时抢救，挽回了生命。'
        }
            ]
        },
        'dbrs_492': {
            title: '代谢失衡',
            description: '{user}发现自己有2个星期没小便了。',
            priority: 5,
            trigger_conditions: { age_range: [35, 120], required_tags: ['肝硬化：晚期'] },
            options: [
        {
            text: '就医',
            result: '{user}发现自己有2个星期没小便了。他知道自己的老病肝硬化又复发了，赶紧去医院看病。',
            remove_tags: ['肝硬化：晚期']
        },
        {
            text: '多喝水',
            result: '{user}发现自己有2个星期没小便了。听过便秘的，没听过小便秘。{user}以为自己只是缺少水分，所以保持每天喝水，没过多久，{user}就被发现死在了家里。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '喝5升水，就不信不小便',
            result: '{user}发现自己有2个星期没小便了。听过便秘的，没听过小便秘。{user}想：“我就不信了！”买了5升饮料，喝了个清光。没过多久，{user}就陷入昏迷，身体各个器官衰竭，死亡比小便先来了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=发现自己有2个星期没小便了。听过便秘的，没听过小便秘。=NAME=想：“我就不信了！”买了5升饮料，喝了个清光。没过多久，=NAME=就陷入昏迷，身体各个器官衰竭，死亡比小便先来了。'
        }
            ]
        },
        'dbrs_495': {
            title: '拉血',
            description: '{user}有一天拉便便，发现拉了一厕所血。{user}惊慌失措地奔去医院，幸好及时抢救，挽回了生命。',
            priority: 5,
            trigger_conditions: { age_range: [35, 120], required_tags: ['肝硬化：晚期', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_749': {
            title: '曙光',
            description: '{user}的肝硬化已经到达晚期，基本上是个等死的人了。在绝望的时候，一个神秘的人表示要舍身捐赠自己健康的肝脏给{user}。这也是{user}最后治疗的希望。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肝硬化：晚期', '男性'] },
            options: [
        {
            text: '接受捐赠',
            result: '你做出了选择。'
        },
        {
            text: '委婉拒绝',
            result: '{user}的肝硬化已经到达晚期，基本上是个等死的人了。在绝望的时候，一个神秘的人表示要舍身捐赠自己健康的肝脏给{user}。这也是{user}最后治疗的希望，但{user}委婉拒绝了这个热心的神秘人。{user}对这个神秘人的热心非常感动，但是善良的{user}不愿别人付出生命来拯救自己。'
        }
            ]
        }
        }
    },
    '肥胖': {
        events: {
        'dbrs_614': {
            title: '减肥',
            description: '肥胖给{user}带来诸多的不便，{user}决定改变。{user}来到了一家减肥会所，服务员向他推荐了3种减肥项目',
            priority: 5,
            trigger_conditions: { age_range: [5, 120], required_tags: ['肥胖'] },
            options: [
        {
            text: '1000元',
            result: '肥胖给{user}带来诸多的不便，{user}决定改变。{user}付了1000元参加了一个减肥活动。{user}被丢进了一个神殿，手里还拿着神殿的宝物，后面一堆黑色的怪物在追着{user}，他被迫不停地奔跑，中途还要躲过各种障碍物。最后，体力透支的{user}再也跑不动，成了黑色怪物的盆中餐。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '400000元',
            result: '肥胖给{user}带来诸多的不便，{user}决定改变。{user}付了40万元参加了一个减肥计划。{user}被注射麻醉后，工作人员为{user}进行了换头手术，但是非常不幸，因为技术的原因，{user}没能活下来，死在了手术台上。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '50元',
            result: '肥胖给{user}带来诸多的不便，{user}决定改变。{user}付了50元参加了一个减肥手术。{user}被注射麻醉后，工作人员为{user}进行了抽脂手术，手术非常成功。{user}减肥成功，恢复了正常的体型。',
            remove_tags: ['肥胖']
        }
            ]
        },
        'dbrs_613': {
            title: '肥到漏油',
            description: '{user}肥到漏油，坐过的椅子都蒙上一层油脂。',
            priority: 5,
            trigger_conditions: { age_range: [15, 25], required_tags: ['肥胖'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_624': {
            title: '该死的脂肪',
            description: '大量的脂肪堵塞在了{user}的血管里，导致{user}的血液流通非常差，长期以来，{user}得了心脏病',
            priority: 5,
            trigger_conditions: { age_range: [30, 60], required_tags: ['肥胖'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_628': {
            title: '该死的脂肪',
            description: '{user}非常胖！因为脂肪过多造成了泄漏，脂肪进了肝脏，变成了脂肪肝。',
            priority: 5,
            trigger_conditions: { age_range: [20, 120], required_tags: ['肥胖'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1349': {
            title: '身材影响前途',
            description: '因为{user}太过肥胖，没过多久，就被军队强行退役，回家了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肥胖'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1347': {
            title: '减肥',
            description: '{user}决心减肥，每天不吃晚饭，天天锻炼。他坚持了一年，结果一斤都没瘦下来……{user}借酒消愁，醉倒路边。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肥胖'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1350': {
            title: '身材影响前途',
            description: '因为{user}太过肥胖，没过多久，就被军队强行退役，回家了。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['肥胖'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '脂肪肝': {
        events: {
        'dbrs_638': {
            title: '恶化',
            description: '{user}的肝脏里越来越多脂肪，堵塞了大部分肝脏的血液循环，造成了大面积的肝细胞死亡，恶化成了肝硬化。',
            priority: 5,
            trigger_conditions: { age_range: [36, 120], required_tags: ['脂肪肝'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肝硬化'],
            remove_tags: ['脂肪肝'],
            death_flag: true,
            death_reason: '{user}的肝脏里越来越多脂肪，堵塞了大部分肝脏的血液循环'
        }
            ]
        },
        'dbrs_637': {
            title: '脂肪肝',
            description: '{user}的脂肪肝越来越严重，他开始___',
            priority: 5,
            trigger_conditions: { age_range: [45, 55], required_tags: ['脂肪肝'] },
            options: [
        {
            text: '加强按摩自己身体，为脂肪瘦身',
            result: '你做出了选择。'
        },
        {
            text: '停止暴饮暴食！',
            result: '你做出了选择。'
        },
        {
            text: '做更多运动',
            result: '你做出了选择。'
        },
        {
            text: '更规律生活',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_632': {
            title: '脂肪肝',
            description: '{user}患上了脂肪肝，他开始___',
            priority: 5,
            trigger_conditions: { age_range: [35, 44], required_tags: ['脂肪肝'] },
            options: [
        {
            text: '按摩自己身体，为脂肪瘦身',
            result: '你做出了选择。'
        },
        {
            text: '停止暴饮暴食',
            result: '你做出了选择。'
        },
        {
            text: '多运动',
            result: '你做出了选择。'
        },
        {
            text: '规律生活',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '贫穷': {
        events: {
        'dbrs_372': {
            title: '天价医药费',
            description: '{user}身患爱之病，每天都要吃药打针，控制病情。{user}已经身无分文，再也负担不起犹如天文数字一样的医药费。',
            priority: 10,
            trigger_conditions: { age_range: [5, 120], required_tags: ['爱之病：化疗', '贫穷'] },
            options: [
        {
            text: '放弃治疗',
            result: '{user}身患爱之病，{user}已经身无分文，再也负担不起犹如天文数字一样的医药费。{user}最终选择了放弃治疗，让病情急转直下。',
            add_tags: ['爱之病：晚期'],
            remove_tags: ['爱之病：化疗']
        },
        {
            text: '喝醋',
            result: '{user}身患爱之病，{user}已经身无分文，再也负担不起犹如天文数字一样的医药费。{user}最终选择了放弃治疗，买了一箱醋回家狂喝，死马当活马医。',
            add_tags: ['爱之病：晚期'],
            remove_tags: ['爱之病：化疗']
        }
            ]
        }
        }
    },
    '近视眼': {
        events: {
        'dbrs_483': {
            title: '视力不好',
            description: '到了{age}岁，{user}的视力越来越不好了。有一次{user}炒菜没有戴眼镜，他想找盐却找不到，他拿了一罐上面写着___的调味料倒进了锅里。',
            priority: 5,
            trigger_conditions: { age_range: [55, 120], required_tags: ['近视眼'] },
            options: [
        {
            text: 'NASA',
            result: '到了{age}岁，{user}的视力越来越不好了。有一次{user}炒菜没有戴眼镜，他想找盐却找不到，他拿了一罐上面写着NASA的调味料倒进了锅里。那是一罐高比冲的火箭燃料，{user}吃了之后中毒死亡了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '到了=AGE=岁，=NAME=的视力越来越不好了。有一次=NAME=炒菜没有戴眼镜，他想找盐却找不到，他拿了一罐上面写着NASA的调味料倒进了锅里。那是一罐高比冲的火箭燃料，=NAME=吃了之后中毒死亡了。'
        },
        {
            text: 'NAXX',
            result: '到了{age}岁，{user}的视力越来越不好了。有一次{user}炒菜没有戴眼镜，他想找盐却找不到，他拿了一罐上面写着NAXX的调味料倒进了锅里。那是一罐精炼后晒干的蜘蛛毒粉，{user}吃了之后中毒死亡了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '到了=AGE=岁，=NAME=的视力越来越不好了。有一次=NAME=炒菜没有戴眼镜，他想找盐却找不到，他拿了一罐上面写着NAXX的调味料倒进了锅里。那是一罐精炼后晒干的蜘蛛毒粉，=NAME=吃了之后中毒死亡了。'
        },
        {
            text: 'NAXX',
            result: '到了{age}岁，{user}的视力越来越不好了。有一次{user}炒菜没有戴眼镜，他想找盐却找不到，他拿了一罐上面写着NAXX的调味料倒进了锅里。那是一罐精炼后晒干的蜘蛛毒粉，{user}吃了之后中毒死亡了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '到了=AGE=岁，=NAME=的视力越来越不好了。有一次=NAME=炒菜没有戴眼镜，他想找盐却找不到，他拿了一罐上面写着NAXX的调味料倒进了锅里。那是一罐精炼后晒干的蜘蛛毒粉，=NAME=吃了之后中毒死亡了。'
        },
        {
            text: 'NANA',
            result: '到了{age}岁，{user}的视力越来越不好了。有一次{user}炒菜没有戴眼镜，他想找盐却找不到，他拿了一罐上面写着NANA的调味料倒进了锅里。那是一位名叫NANA的女孩子的烟灰缸，里面都是烟灰。{user}吃了之后，得了癌症。',
            add_tags: ['癌症']
        },
        {
            text: 'Cl2',
            result: '到了{age}岁，{user}的视力越来越不好了。有一次{user}炒菜没有戴眼镜，他想找盐却找不到，他拿了一罐上面写着Cl2的调味料倒进了锅里。那是一罐氯气！{user}打开罐子深吸了一口，然后就倒地身亡了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1006': {
            title: '生活不便',
            description: '{user}的近视眼给生活带来很多不便，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['近视眼'] },
            options: [
        {
            text: '进行视力矫正手术',
            result: '你做出了选择。'
        },
        {
            text: '节制用眼',
            result: '你做出了选择。'
        },
        {
            text: '不觉得不方便',
            result: '{user}戴上了眼镜，他照了照镜子，好像看起来是文化人了。'
        }
            ]
        }
        }
    },
    '风湿': {
        events: {
        'dbrs_768': {
            title: '风湿',
            description: '{user}患风湿。一到阴雨天气，{user}全身上下关节就痛。严重的时候必须卧床一整天，要是强行起床，身体会受严重内伤。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['风湿'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { health: -35 }
        }
            ]
        }
        }
    },
    '黑肺：阶段1': {
        events: {
        'dbrs_565': {
            title: '严重咳嗽',
            description: '有一天，{user}在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['烟瘾', '黑肺：阶段1'] },
            options: [
        {
            text: '赶紧去医院检查身体',
            result: '有一天，{user}在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。虽然入夜已深，但是{user}还是穿上衣服，走去了医院看病。'
        },
        {
            text: '不予理会',
            result: '有一天，{user}在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。{user}不予理会。晚上睡觉的时候，{user}呼吸越来越困难，并且咳出更多的煤渣了，有一些煤渣卡在气管里出不来，塞死了气管。{user}窒息而死，死相骇人。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '有一天，=NAME=在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。=NAME=不予理会。晚上睡觉的时候，=NAME=呼吸越来越困难，并且咳出更多的煤渣了，有一些煤渣卡在气管里出不来，塞死了气管。=NAME=窒息而死，死相骇人。'
        },
        {
            text: '吃点胃药',
            result: '有一天，{user}在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。{user}还以为是吃错东西了，找了颗胃药吃掉。晚上睡觉的时候，{user}呼吸越来越困难，并且咳出更多的煤渣了，有一些煤渣卡在气管里出不来，塞死了气管。{user}窒息而死，死相骇人。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '有一天，=NAME=在一次严重咳嗽后，从口中吐出了一堆煤渣一样的东西。=NAME=还以为是吃错东西了，找了颗胃药吃掉。晚上睡觉的时候，=NAME=呼吸越来越困难，并且咳出更多的煤渣了，有一些煤渣卡在气管里出不来，塞死了气管。=NAME=窒息而死，死相骇人。'
        }
            ]
        },
        'dbrs_564': {
            title: '回头是岸',
            description: '戒烟后，{user}发现自己胸口的难受消失了。肺炎已经康复。',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['黑肺：阶段1'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['黑肺：阶段1']
        }
            ]
        }
        }
    },
    '黑肺：阶段2': {
        events: {
        'dbrs_567': {
            title: '严重黑肺',
            description: '{user}的黑肺病非常严重，鼻子内壁都是黑色的。稍微大力一点呼气，黑色的粉末就会从鼻子飞出。',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['黑肺：阶段2'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_568': {
            title: '严重黑肺',
            description: '{user}的黑肺病恶化了，喷出来的煤渣已经渗血。医生告诉{user}，他的病已经无药可医，好好珍惜剩下的时日。',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['黑肺：阶段2'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['黑肺：阶段3'],
            remove_tags: ['黑肺：阶段2']
        }
            ]
        },
        'dbrs_569': {
            title: '无良厨师',
            description: '为了节约成本，{user}用他平时咳出的黑肺渣，用水匀开，加入各种香精，加热。成了一道猪肺汤。',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['黑肺：阶段2'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['黑肺：阶段3'],
            remove_tags: ['黑肺：阶段2']
        }
            ]
        }
        }
    },
    '黑肺：阶段3': {
        events: {
        'dbrs_570': {
            title: '痛苦的呼吸',
            description: '因为{user}的黑肺病，他的每次呼吸，都要承受着类似万箭穿心的痛苦，活着简直是煎熬。{user}选择___',
            priority: 5,
            trigger_conditions: { age_range: [30, 120], required_tags: ['黑肺：阶段3'] },
            options: [
        {
            text: '人道毁灭',
            result: '你做出了选择。'
        },
        {
            text: '坚持活下去',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
};