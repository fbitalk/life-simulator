// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 犯罪/执法
// 事件数: 6
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
    '肝硬化': { color: 'red' },
});

export const dbrsCrimeEvents = {
    '交警': {
        events: {
        'dbrs_498': {
            title: '调遣',
            description: '公安局缺人，{user}收到上级的调遣请求。{user}决定___',
            priority: 5,
            trigger_conditions: { age_range: [20, 70], required_tags: ['交警'] },
            options: [
        {
            text: '接受调遣',
            result: '你做出了选择。'
        },
        {
            text: '委婉拒绝',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '古惑仔': {
        events: {
        'dbrs_464': {
            title: '肝硬化',
            description: '{user}因为经常出去和朋友酗酒，落得了肝硬化的毛病。喝酒究竟有什么好？',
            priority: 5,
            trigger_conditions: { age_range: [35, 120], required_tags: ['古惑仔'] },
            options: [
        {
            text: '后悔',
            result: '{user}因为经常出去和朋友酗酒，落得了肝硬化的毛病。{user}非常后悔，但是世界上没有后悔药，这个硬肝将会跟随他一辈子。',
            add_tags: ['肝硬化']
        },
        {
            text: '酗是兄弟之间的润滑剂，没有它不行',
            result: '酗是兄弟之间的润滑剂，{user}因为经常出去和朋友酗酒，落得了肝硬化的毛病。',
            add_tags: ['肝硬化']
        }
            ]
        },
        'dbrs_1329': {
            title: '劈友',
            description: '{user}是个古惑仔，他今天要去“劈友”。上级给{user}发了一把西瓜刀。{user}跟着队友去到现场，发现敌人的人数比自己多很多……{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['古惑仔'] },
            options: [
        {
            text: '进入战斗！',
            result: '你做出了选择。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '逃跑！',
            result: '{user}是个古惑仔，他今天要去“劈友”。上级给{user}发了一把西瓜刀。{user}跟着队友去到现场，发现敌人的人数比自己多很多……{user}走在队伍后面，战斗开始了，他就趁机逃跑了。因为临阵脱逃，{user}没脸见自己的大佬了。',
            add_tags: ['古惑仔：反叛'],
            remove_tags: ['古惑仔']
        },
        {
            text: '报警',
            result: '{user}是个古惑仔，他今天要去“劈友”。上级给{user}发了一把西瓜刀。{user}跟着队友去到现场，发现敌人的人数比自己多很多……{user}拿起电话报警，不久后一辆警车来到现场，停在很远的地方，两个警察下车远远观望这次劈友。等战完了，两个警察才慢吞吞地过来清理现场，把残缺不堪的尸体扛上车运走，{user}的尸体也在里面。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=是个古惑仔，他今天要去“劈友”。上级给=NAME=发了一把西瓜刀。=NAME=跟着队友去到现场，发现敌人的人数比自己多很多……=NAME=拿起电话报警，不久后一辆警车来到现场，停在很远的地方，两个警察下车远远观望这次劈友。等战完了，两个警察才慢吞吞地过来清理现场，把残缺不堪的尸体扛上车运走，=NAME=的尸体也在里面。'
        }
            ]
        },
        'dbrs_1330': {
            title: '朋友借钱',
            description: '一个古惑仔朋友找到{user}，想问{user}拿点钱。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['古惑仔'] },
            options: [
        {
            text: '借给他',
            result: '一个古惑仔朋友找到{user}，想问{user}拿点钱。{user}借给他了。朋友热雷凝眶，握着{user}的手，激动地说，我肯定会还的……我肯定会还的……然后就走了。'
        },
        {
            text: '给他钱',
            result: '一个古惑仔朋友找到{user}，想问{user}拿点钱。{user}给他了。朋友热雷凝眶，握着{user}的手，激动地感谢{user}。'
        },
        {
            text: '拒绝',
            result: '一个古惑仔朋友找到{user}，想问{user}拿点钱。{user}拒绝了，这个朋友骂{user}不仗义，走了。'
        }
            ]
        },
        'dbrs_1328': {
            title: '勒索小朋友',
            description: '{user}是个古惑仔，他想搞点钱去玩，于是找了个___进行勒索。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['古惑仔'] },
            options: [
        {
            text: '小朋友',
            result: '你做出了选择。'
        },
        {
            text: '小萝莉',
            result: '{user}是个古惑仔，他想搞点钱去玩，于是找了个小萝莉，勒索他。谁知道突然跳出来一个壮汉来救小朋友，{user}只能溜了。'
        },
        {
            text: '扣扣会员',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '小偷': {
        events: {
        'dbrs_160': {
            title: '盗窃上瘾',
            description: '尝过上次的甜头后，{user}偷窃上瘾了，{user}决定下个目标是___',
            priority: 5,
            trigger_conditions: { age_range: [8, 120], required_tags: ['小偷'] },
            options: [
        {
            text: '拥挤的地铁中偷手机',
            result: '在地铁中，偷窃上瘾的{user}把魔抓伸向了一位女士口袋，从口袋里偷出了一个手机，说时迟那时快，手机突然响了……最后{user}被管理员抓了，扭送去了派出所，等待{user}的，是漫长的牢狱之苦',
            remove_tags: ['小偷']
        },
        {
            text: '去商场偷东西',
            result: '{user}把商场内的告示“商场内设有摄像头，请勿偷窃商品”中的设看成了没。于是肆无忌惮地偷东西，立马就被抓获了……',
            remove_tags: ['小偷']
        },
        {
            text: '去菜市场偷菜',
            result: '{user}喜欢玩偷菜，于是也想在真实世界里过把瘾。然而真实的世界是冷酷的，当{user}在市场偷菜被菜贩抓到后，{user}被菜贩拖进了小黑屋肢解了，剁成了肉块，稍作处理后，当驴肉出售。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '去牛奶场偷牛',
            result: '{user}去牛奶场偷牛，牛太重搬不动，于是{user}挤了点牛奶装好就灰溜溜地走了。'
        },
        {
            text: '偷电线',
            result: '{user}选择在夜深人静的时候，溜到郊外偷电线。当{user}剪电线的时候被通电了，黑夜中似乎有一颗明星闪耀了1分钟，这是{user}生命绽放的最后光芒。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '偷车',
            result: '{user}喜欢偷车，专门找一些乱停乱放的汽车下手，干了不久，就发家致富，金盘洗手了。',
            add_tags: ['小偷：最后一波'],
            remove_tags: ['小偷']
        },
        {
            text: '内衣',
            result: '{user}经常去一些城中村，老住宅区，偷内衣，男女的内衣都偷。他把偷得的内衣放在家，自己玩过之后洗干净，又摆摊卖出去。'
        },
        {
            text: '小学生',
            result: '{user}偷窃上瘾，他进小学学校偷看学生的书包。{user}从窥探书包里的东西来获得独特的满足感，看完就放回去，啥都不拿。'
        }
            ]
        }
        }
    },
};