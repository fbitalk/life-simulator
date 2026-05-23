// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - Adult年龄段事件（无触发标签）
// 事件数: 12
import { registerTags } from '../../data/tagRegistry.js';

registerTags({
    '中年': { color: 'normal' },
});

// 本文件涉及的标签注册
registerTags({
});

export const dbrsAdultEvents = {
    '中年': {
        events: {
        'dbrs_270': {
            title: '糖尿人生',
            description: '{user}患糖尿病已经十几年，他一直保持___，去改善病情。',
            priority: 2,
            trigger_conditions: { age_range: [50, 60] },
            options: [
        {
            text: '热水泡脚',
            result: '{user}患糖尿病十几年，一直保持热水泡脚，以为这样可以促进血液循环，预防心脑疾病。殊不知脚越来越不好使了，直到没有知觉了。{user}才发现自己的脚不对，软软的一撮就破，里面还有虫在爬。',
            add_tags: ['残废：轮椅']
        },
        {
            text: '喝茶',
            result: '你做出了选择。'
        },
        {
            text: '运动健身',
            result: '你做出了选择。',
            add_tags: ['强壮']
        },
        {
            text: '吃药',
            result: '你做出了选择。'
        },
        {
            text: '多吃水果',
            result: '{user}以为不甜的水果就不含糖，吃了不会对自己的病有什么影响。直到有一天{user}发现自己撒的尿是红色的，去医院一查，糖尿病已经去到晚期。医生告诉他没有多少年命了，世界很大，去看看吧。'
        },
        {
            text: '“糖尿救星”牌药酒',
            result: '{user}轻信无良商家的产品，坚持喝一个叫“糖尿救星”的药酒，终于有一天一醉方休，去了快乐的地方。'
        }
            ]
        },
        'dbrs_443': {
            title: '不再年轻',
            description: '有一次去朋友家玩。14楼，{user}上楼梯走得气喘呼呼的，{user}意识到自己已经不再年轻了。',
            priority: 2,
            trigger_conditions: { age_range: [40, 45] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_557': {
            title: '呼吸道疾病',
            description: '{user}患上了呼吸道疾病。',
            priority: 2,
            trigger_conditions: { age_range: [50, 58] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['呼吸道疾病']
        }
            ]
        },
        'dbrs_606': {
            title: '任性的有钱人',
            description: '申国有一个世界首富发布一则消息：谁吃一斤屎，他就往那个人的银行卡上打10万，无上限。',
            priority: 2,
            trigger_conditions: { age_range: [40, 45] },
            options: [
        {
            text: '我表示要吃到他破产！',
            result: '申国有一个世界首富发布一则消息：谁吃一斤屎，他就往那个人的银行卡上打10万，无上限。为此{user}从下水道里淘了一货车的屎，扬言要吃到这个首富破产。吃了2天后，{user}中毒，送医院抢救无效死亡了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '申国有一个世界首富发布一则消息：谁吃一斤屎，他就往那个人的银行卡上打10万，无上限。为此=NAME=从下水道里淘了一货车的屎，扬言要吃到这个首富破产。吃了2天后，=NAME=中毒，送医院抢救无效死亡了。'
        },
        {
            text: '吃一斤',
            result: '申国有一个世界首富发布一则消息：谁吃一斤屎，他就往那个人的银行卡上打10万，无上限。{user}抱着试试的心态，自己拉了屎自己吃。然而，吃完后并没有钱收到，{user}意识到自己上当了。'
        },
        {
            text: '吃二斤',
            result: '申国有一个世界首富发布一则消息：谁吃一斤屎，他就往那个人的银行卡上打10万，无上限。{user}抱着试试的心态，自己拉了屎自己吃。然而，吃完后并没有钱收到，{user}意识到自己上当了。'
        },
        {
            text: '钱财身外物，沙比才去为钱吃屎',
            result: '申国有一个世界首富发布一则消息：谁吃一斤屎，他就往那个人的银行卡上打10万，无上限。{user}笑笑，认为这一定是诈骗或者炒作。好吧其实诈骗和炒作没什么不同。'
        }
            ]
        },
        'dbrs_607': {
            title: '春游遭遇',
            description: '{user}在春游的时候，在一棵树背后发现一缕银白色的丝带在飘扬。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [35, 45] },
            options: [
        {
            text: '去看看',
            result: '你做出了选择。'
        },
        {
            text: '并不理睬',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_609': {
            title: '第八号当铺',
            description: '{user}心事重重地走夜路，被红色的古老轿子接走了，红轿子把{user}载到了一个古老的东方建筑前，有一个横额写着：第八号当铺。里面的店主走出来，跟{user}说，这里是第8号当铺，无论任何需求，都能够如愿以偿，但必须付出等值的代价。',
            priority: 2,
            trigger_conditions: { age_range: [45, 50] },
            options: [
        {
            text: '我想一夜暴富',
            result: '{user}为了一夜暴富，跟第八号当铺做了交易。他交出了自己健康的心脏，换了一个二手的。',
            effects: { health: -50 }
        },
        {
            text: '长命百岁',
            result: '{user}心事重重地走夜路，被红色的古老轿子接走了，红轿子把{user}载到了一个古老的东方建筑前，有一个横额写着：第八号当铺。里面的店主走出来，跟{user}说，这里是第8号当铺，无论任何需求，都能够如愿以偿，但必须付出等值的代价。{user}说他的愿望是长命百岁，要付出什么代价都没问题。店主听后，挥挥手把{user}的灵魂吸取了，放在了一个瓶子中。现在{user}永远活在了瓶子中，也算是如愿以偿了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '我不需要魔鬼的帮助',
            result: '{user}心事重重地走夜路，被红色的古老轿子接走了，红轿子把{user}载到了一个古老的东方建筑前，有一个横额写着：第八号当铺。里面的店主走出来，跟{user}说，这里是第8号当铺，无论任何需求，都能够如愿以偿，但必须付出等值的代价。{user}嗤之以鼻，表示愿望我靠自己去实现就行，没你们什么事。然后安全离开了这个地方。'
        },
        {
            text: '我想要龙珠',
            result: '{user}心事重重地走夜路，被红色的古老轿子接走了，红轿子把{user}载到了一个古老的东方建筑前，有一个横额写着：第八号当铺。里面的店主走出来，跟{user}说，这里是第8号当铺，无论任何需求，都能够如愿以偿，但必须付出等值的代价。{user}想获得龙珠，无论付出怎么样的代价都无所谓。当铺老板在{user}下体摸了一下，取走了什么东西，然后就给了{user}一个七星龙珠。',
            add_tags: ['七星龙珠']
        }
            ]
        },
        'dbrs_657': {
            title: '吃瓜男子',
            description: '在公交车上，有一名男子在吃瓜子，还把瓜子壳吐到{user}的身上，{user}___',
            priority: 2,
            trigger_conditions: { age_range: [50, 60] },
            options: [
        {
            text: '打死这个脑残',
            result: '在公交车上，有一名男子在吃瓜子，还把瓜子壳吐到{user}的身上，{user}见状一耳光扇过去。这名男子被打后，一直念叨：“我跟你什么仇什么怨……”'
        },
        {
            text: '强迫该男子吃下瓜子壳',
            result: '在公交车上，有一名男子在吃瓜子，还把瓜子壳吐到{user}的身上，{user}怒火中烧，强迫该男子吃下瓜子壳。男子被迫吞下瓜子壳后，食道、气管与颈部动脉被瓜子壳划破，男子不幸身亡。{user}被追究相关刑事责任，关进了大牢。冲动是魔鬼，和睦相处很重要。'
        },
        {
            text: '包容',
            result: '在公交车上，有一名男子在吃瓜子，还把瓜子壳吐到{user}的身上，{user}非常包容，还对该男子笑笑。男子看了{user}一眼，还以为{user}是精神病人，赶紧离他远远的。'
        }
            ]
        },
        'dbrs_658': {
            title: '老年机遇',
            description: '一辆豪车向{user}驶来，{user}似乎看到了一个机遇',
            priority: 2,
            trigger_conditions: { age_range: [55, 60] },
            options: [
        {
            text: '碰瓷，捞一笔',
            result: '一辆豪车向{user}驶来，{user}似乎看到了一个机遇。敢碰就是赢，{user}走上马路，向着豪车撞去，然后轻轻地坐在地上。谁知道豪车根本没看到{user}，直接碾压而过，然后反复倒车碾压半小时。直到{user}变成了一滩血水才罢休，扬长而去。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '还是算了吧',
            result: '一辆豪车在{user}面前停下，车主人让{user}先过马路，{user}说了句谢谢。'
        }
            ]
        },
        'dbrs_653': {
            title: '老年机遇',
            description: '一辆豪车向{user}驶来，{user}似乎看到了一个机遇',
            priority: 2,
            trigger_conditions: { age_range: [55, 60] },
            options: [
        {
            text: '碰瓷，捞一笔',
            result: '一辆豪车向{user}驶来，{user}似乎看到了一个机遇。敢碰就是赢，{user}走上马路，向着豪车撞去，然后轻轻地坐在地上。豪车驾驶员慌忙下车，急急忙忙从口袋里掏出几百万，给了{user}。',
            effects: { money: 6 }
        },
        {
            text: '还是算了吧',
            result: '一辆豪车在{user}面前停下，车主人让{user}先过马路，{user}说了句谢谢。'
        }
            ]
        },
        'dbrs_1339': {
            title: '高速公路',
            description: '有一天，{user}在高速公路上看到一个裸体的女子被捆绑在路边，{user}觉得这是一个___',
            priority: 2,
            trigger_conditions: { age_range: [35, 45] },
            options: [
        {
            text: '犯罪现场',
            result: '有一天，{user}在高速公路上看到一个裸体的女子被捆绑在路边，{user}觉得这是一个犯罪现场。{user}立马拿出电话报警，然后就离开了。'
        },
        {
            text: 'AV现场',
            result: '有一天，{user}在高速公路上看到一个裸体的女子被捆绑在路边，{user}觉得这是一个AV拍摄现场。{user}心里感叹，真专业啊！'
        },
        {
            text: '被遗弃的假人',
            result: '有一天，{user}在高速公路上看到一个裸体的女子被捆绑在路边，{user}觉得这是一个被遗弃的假人。假人没有真人权，竟沦落倒此境地。'
        },
        {
            text: '野生RBQ',
            result: '有一天，{user}在高速公路上看到一个裸体的女子被捆绑在路边，{user}觉得这是一个野生RBQ。{user}刚好想上厕所，于是下车对着这个野生RBQ尿了一泡。'
        }
            ]
        },
        'dbrs_1527': {
            title: '葬礼',
            description: '{user}收到一封信，是一位不太熟悉的远房亲戚寄来的。他们家里有老人去世，将要举办葬礼，请{user}去吊唁。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [35, 45] },
            options: [
        {
            text: '出发参加',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '{user}收到一封信，是一位不太熟悉的远房亲戚寄来的。他们'
        },
        {
            text: '无视',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '{user}收到一封信，是一位不太熟悉的远房亲戚寄来的。他们'
        }
            ]
        },
        'dbrs_1568': {
            title: '垃圾分类',
            description: '某天{user}路过一个垃圾分类地点，突然从干垃圾桶里跳出来一个身穿西装，全身湿透的人，他看着{user}说：“what’s your problem？”{user}___',
            priority: 2,
            trigger_conditions: { age_range: [35, 45] },
            options: [
        {
            text: '把他丢到湿垃圾桶里',
            result: '某天{user}路过一个垃圾分类地点，突然从干垃圾桶里跳出来一个身穿西装，全身湿透的人，他看着{user}说：“what’s your problem？”{user}发现这人全身湿透，赶紧把他丢到湿垃圾桶里去了。'
        },
        {
            text: '无视这个怪人',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
};