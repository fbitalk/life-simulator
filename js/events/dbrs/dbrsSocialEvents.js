// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 社交/人际
// 事件数: 5
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
});

export const dbrsSocialEvents = {
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
};