// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 社交/人际
// 事件数: 10
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
});

export const dbrsSocialEvents = {
    'SOS团': {
        events: {
        'dbrs_1242': {
            title: 'SOS团舞',
            description: '{user}被迫学习他们社团的舞蹈。这个名为“SOS团舞”的舞蹈要全社团的人一起做跳宅舞，动作异常羞涩。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['SOS团'] },
            options: [
        {
            text: '跳跳跳',
            result: '你做出了选择。'
        },
        {
            text: '我还是退部吧',
            result: '{user}被迫学习他们社团的舞蹈。这个名为“SOS团舞”的舞蹈要全社团的人一起做跳宅舞，动作异常羞涩。{user}选择了离开……',
            remove_tags: ['SOS团']
        }
            ]
        },
        'dbrs_1243': {
            title: 'SOS团：电影',
            description: '{user}参加的SOS团拍了一个电影名叫《实玖琉的冒险》，{user}负责___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['SOS团'] },
            options: [
        {
            text: '打灯',
            result: '你做出了选择。'
        },
        {
            text: '特效',
            result: '你做出了选择。'
        },
        {
            text: '道具',
            result: '你做出了选择。'
        },
        {
            text: '摄影',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '冲动消费': {
        events: {
        'dbrs_251': {
            title: '大减价活动',
            description: '超市大减价，你选择购买___',
            priority: 5,
            trigger_conditions: { age_range: [18, 120], required_tags: ['冲动消费'] },
            options: [
        {
            text: '无牌奶粉',
            result: '{user}在超市大减价上买回来一罐无牌奶粉，味道不错，吃了对身体似乎也没什么事。',
            add_tags: ['三聚氰胺抗体']
        },
        {
            text: '塑料袋装的白酒',
            result: '{user}在超市大减价上买回来一包熟料袋装的白酒，塑化剂超标，{user}惹上了功能障碍的毛病。',
            add_tags: ['功能障碍']
        },
        {
            text: '可日可乐',
            result: '{user}在超市大减价上买回来一瓶可日可乐，喝起来似乎跟可口可乐味道差不多。',
            add_tags: ['三多一小']
        },
        {
            text: '粤利粤饼干',
            result: '{user}在超市大减价上买回来一包粤利粤饼干，吃了之后感到不适，{user}被紧急送往了医院……',
            add_tags: ['脑残']
        },
        {
            text: '老茶叶',
            result: '{user}在超市大减价上买回来一包老茶叶，打开发现茶叶都发霉了，只好全部倒掉。'
        },
        {
            text: '次品竹席',
            result: '{user}在超市大减价上买回来一张竹席，质量很差。{user}用它睡觉的时候，竹席散架了，无数小竹片插进{user}身体，死了。莫贪小便宜。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在超市大减价上买回来一张竹席，质量很差。=NAME=用它睡觉的时候，竹席散架了，无数小竹片插进=NAME=身体，死了。莫贪小便宜。'
        }
            ]
        },
        'dbrs_257': {
            title: '消费陷阱',
            description: '{user}已经沉迷逛某宝，因为某宝每天都有打折优惠。{user}逐渐成为了一名网购狂人，每天收快递收到手软。',
            priority: 5,
            trigger_conditions: { age_range: [15, 55], required_tags: ['某宝', '冲动消费'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['网购狂人']
        }
            ]
        }
        }
    },
    '某宝': {
        events: {
        'dbrs_140': {
            title: '快递',
            description: '{user}的快递到了，快递员来拍门了。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [10, 120], required_tags: ['某宝'] },
            options: [
        {
            text: '我某宝买的东西到了',
            result: '{user}的快递到了，快递员来拍门了。{user}拿到了某宝买的东西。'
        },
        {
            text: '感觉不对路，假装不在家',
            result: '{user}没有出去拿快递，还以为X宝的卖家没有发货，果断给留了差评。'
        },
        {
            text: '偷偷从窗外溜出去',
            result: '{user}没有出去拿快递，还以为X宝的卖家没有发货，果断给留了差评。'
        }
            ]
        },
        'dbrs_257': {
            title: '消费陷阱',
            description: '{user}已经沉迷逛某宝，因为某宝每天都有打折优惠。{user}逐渐成为了一名网购狂人，每天收快递收到手软。',
            priority: 5,
            trigger_conditions: { age_range: [15, 55], required_tags: ['某宝', '冲动消费'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['网购狂人']
        }
            ]
        },
        'dbrs_1163': {
            title: '买鞋子',
            description: '在某宝上买的鞋子收到了，{user}穿上才发现两双鞋都是反的，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['某宝'] },
            options: [
        {
            text: '左右互换',
            result: '你做出了选择。'
        },
        {
            text: '投诉卖家',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1165': {
            title: '通往天堂的钥匙',
            description: '{user}在某宝上购买了一个名为“通往天堂的钥匙”的奇怪商品。收到货一看，这个全金属的东西一头是手柄，另外一头是一个两脚的插头。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['某宝'] },
            options: [
        {
            text: '按说明书操作',
            result: '{user}在某宝上购买了一个名为“通往天堂的钥匙”的奇怪商品。收到货一看，这个全金属的东西一头是手柄，另外一头是一个两脚的插头。{user}按照说明书操作，紧握手柄，然后插头插入到插座中。{user}立马感受到了申国220V电压的冲击，倒地抽搐，口吐白沫，停止呼吸。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '插电试试',
            result: '{user}在某宝上购买了一个名为“通往天堂的钥匙”的奇怪商品。收到货一看，这个全金属的东西一头是手柄，另外一头是一个两脚的插头。{user}拿起这个东西就插入到插座中。{user}立马感受到了申国220V电压的冲击，倒地抽搐，口吐白沫，停止呼吸。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '立马扔掉',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '现视研': {
        events: {
        'dbrs_1200': {
            title: '校园祭:动画鉴赏',
            description: '在校园祭中，{user}的社团，现视研也占了一个展位，主题是动画鉴赏。团员们聚在一起看《不公平的抽签》，团员们讨论的火热，但这个展位却无人问津。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['现视研'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['校园祭']
        }
            ]
        },
        'dbrs_1244': {
            title: '现视研',
            description: '第一次来到现视研的部室，{user}发现里面应有尽有，各个年代的经典动漫，手办，甚至h本等等……这时候社员们都不在，{user}决定___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['现视研'] },
            options: [
        {
            text: '打开r18本子阅读',
            result: '第一次来到现视研的部室，{user}发现里面应有尽有，各个年代的经典动漫，手办，甚至h本等等……这时候社员们都不在，{user}决定拿一本r18本子阅读。{user}还是第一次看这种绘本，他立马就被里面刺激的画面吸引住了……突然部室的门被踢开了，社员们都走了进来，对着{user}坏笑，原来他们在偷看{user}在没人的情况下会选择看啥。这种奇怪的活动是新人的入社仪式。'
        },
        {
            text: '看电视上的动画',
            result: '你做出了选择。'
        },
        {
            text: '阅读《宇宙翼》',
            result: '你做出了选择。'
        },
        {
            text: '发呆',
            result: '你做出了选择。'
        },
        {
            text: '偷看手办的内裤',
            result: '你做出了选择。'
        },
        {
            text: '坐下来画画',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1488': {
            title: 'COSPLAY比赛',
            description: '现视研参加了学校的COSPLAY比赛，{user}穿着《不公正抽签》里会长角色的衣服上台表演。{user}在舞台表演时，发现台下有一个观众的包包里面藏着针孔摄像机，在拍下流的照片，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['现视研', '女性'] },
            options: [
        {
            text: '揭发他！',
            result: '现视研参加了学校的COSPLAY比赛，{user}穿着《不公正抽签》里会长角色的衣服上台表演。{user}在舞台表演时，发现台下有一个观众的包包里面藏着针孔摄像机，在拍下流的照片，{user}果断地走下舞台，一把夺过这个观众的包包打开，把里面的针孔摄像机公诸于众。被揭发的偷拍者想逃跑，被警卫控制住了。现场观众纷纷鼓掌，并大喊“会长！会长！！”'
        },
        {
            text: '求分享',
            result: '现视研参加了学校的COSPLAY比赛，{user}穿着《不公正抽签》里会长角色的衣服上台表演。{user}在舞台表演时，发现台下有一个观众的包包里面藏着针孔摄像机，在拍下流的照片，COSPLAY比赛后，{user}找到这个偷拍者，要了一份偷拍的照片自己欣赏。'
        },
        {
            text: '无视',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
};