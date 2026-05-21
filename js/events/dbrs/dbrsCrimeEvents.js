// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 犯罪/执法
// 事件数: 1
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
});

export const dbrsCrimeEvents = {
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