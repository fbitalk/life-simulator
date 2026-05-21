// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 美术/设计
// 事件数: 8
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
};