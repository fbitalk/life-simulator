// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 冒险/奇遇
// 事件数: 10
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
    '玻璃心': { color: 'red' },
    '长翅膀': { color: 'purple' },
});

export const dbrsAdventureEvents = {
    'furry': {
        events: {
        'dbrs_1016': {
            title: '愧疚之情',
            description: '{user}与自己的主人交换身体已经过了很久很久。{user}每次回到家，看到家里的狗，{user}都会有愧疚之情。{user}决定___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['furry'] },
            options: [
        {
            text: '把主人换回来',
            result: '{user}与自己的主人交换身体已经过了很久很久。{user}每次回到家，看到家里的狗，{user}都会有愧疚之情。{user}决定让狗再舔一下自己的痣，他们又交换了一次身体，{user}回到了狗的身体上。{user}的主人摸摸{user}的头，以示感谢。'
        },
        {
            text: '摸摸主人的狗头',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_861': {
            title: '“=NAME=”的死亡',
            description: '{user}变成自己的主人后，已经过了很长的一段时间。{user}家里那只老得不成样子的土狗似乎大限已到，它虚弱地抬起狗爪，轻轻地碰了一下{user}的脸庞，睁着眼睛，没有了气息。终于去世了。{user}百锦交集。',
            priority: 5,
            trigger_conditions: { age_range: [15, 30], required_tags: ['furry'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['主人死亡'],
            death_flag: true,
            death_reason: '{user}变成自己的主人后，已经过了很长的一段时间。{us'
        }
            ]
        },
        'dbrs_860': {
            title: '音乐课',
            description: '{user}最怕上音乐课了，因为音乐课上要唱歌。而{user}一唱歌就会情不自禁地狗吠，引来大家嘲笑。',
            priority: 5,
            trigger_conditions: { age_range: [10, 17], required_tags: ['furry'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_859': {
            title: '美貌倾城的母狗',
            description: '在大街上有一只灰色毛的野狗，{user}每次路过都会看到它。它是一只美貌倾城的母狗，即使{user}已经成为了人，但是还是被这只母狗的美貌所吸引。有一次{user}再次看到了它，发现它在发情期，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [10, 120], required_tags: ['furry', '男性'] },
            options: [
        {
            text: '上前求爱！',
            result: '在大街上有一只灰色毛的野狗，{user}每次路过都会看到它。它是一只美貌倾城的母狗，即使{user}已经成为了人，但是还是被这只母狗的美貌所吸引。有一次{user}再次看到了它，发现它在发情期，{user}虽然已经化身成人，但是狗性不改，他终于抑制不住自己的furry属性。{user}蹦蹦跳跳冲到野狗跟前，跳起了求爱的舞蹈。母狗似乎对人类没有兴趣，冷冷看了一眼{user}，缓缓转身，背对着{user}。这是狗界最残酷的拒绝方式。被如此对待，{user}仿佛听到了自己的心碎裂的声音。',
            add_tags: ['玻璃心']
        },
        {
            text: '不理睬',
            result: '你做出了选择。'
        },
        {
            text: '买狗食喂它',
            result: '在大街上有一只灰色毛的野狗，{user}每次路过都会看到它。它是一只美貌倾城的母狗，即使{user}已经成为了人，但是还是被这只母狗的美貌所吸引。有一次{user}再次看到了它，发现它在发情期，{user}思考了一下，去买了点肉喂母狗。母狗吃完几块肉，温顺的偎依在{user}身边，然后乖乖地跟随{user}回家了。{user}心里美滋滋地想：“计划通！”'
        }
            ]
        },
        'dbrs_868': {
            title: '狗粮',
            description: '在{user}的家里，放着一大袋狗粮，{user}经常趁没人的时候吃两口。',
            priority: 5,
            trigger_conditions: { age_range: [10, 120], required_tags: ['furry'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_869': {
            title: '宠物母狗',
            description: '自从上次{user}从外面带了只母狗回来后，时光飞逝，{user}已经养了她一年了。{user}和这只母狗感情很好，同吃同睡，形影不离。他们恋爱了。',
            priority: 5,
            trigger_conditions: { age_range: [15, 120], required_tags: ['furry', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        }
            ]
        }
        }
    },
    '与薇尔希相处愉快': {
        events: {
        'dbrs_747': {
            title: '告白',
            description: '{user}和他的朋友薇尔希一直生活在同一屋檐下。薇尔希过上了正常人的生活后，性格开朗了起来，话也多了。突然有一天，薇尔希在{user}身后抓住他的衣服，低着头小声说：“{user}，我喜欢你。”',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['与薇尔希相处愉快'] },
            options: [
        {
            text: '“我也是！”',
            result: '薇尔希和{user}在一起的时候，她再也感受不到恐惧和不安，取而代之的是安心和快乐。终于有一天，薇尔希再也压抑不住自己内心的感情，向{user}告白了。他们2个一下子捅破了那层薄薄的纱，激烈地拥抱在了一起，成为了情侣。'
        },
        {
            text: '“我一直当你是好基友啊”',
            result: '{user}一直把薇尔希当作朋友。有一天，她竟然向{user}告白了，{user}被突如其来的展开吓到了，{user}委婉拒绝后，{user}和薇尔希还是普通的朋友。'
        }
            ]
        }
        }
    },
    '发现卡拉克': {
        events: {
        'dbrs_1543': {
            title: '消失的卡拉克',
            description: '自从发现卡拉克行星后，{user}就展开了对它的研究。他持续对卡拉克进行观测，获得了它的轨道，质量等信息。正在{user}想进一步研究这个星球的时候，这个星球突然消失不见了。{user}持续对卡拉克的太阳观测了一年时间，还是没发现卡拉克。卡拉克就这么消失在了它的太阳系中。{user}不得不放弃研究，他有点沮丧。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['发现卡拉克'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '和薇尔希相处愉快': {
        events: {
        'dbrs_767': {
            title: '求婚',
            description: '{user}与薇尔希相处很愉快，想向薇尔希求婚。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['和薇尔希相处愉快', '男性'] },
            options: [
        {
            text: '说：“做我妻子吧。”',
            result: '某一天，薇尔希在家里打扫。{user}突然从身后抱住了她，轻声说：“做我妻子吧。”薇尔希在{user}的怀内，幸福得颤抖。'
        },
        {
            text: '99朵玫瑰送上，加上求婚的情书',
            result: '{user}专门到花店买了99朵玫瑰，花里夹着一封求婚的情书，悄悄送给薇尔希。薇尔希高兴地答应了。'
        },
        {
            text: '购买钻石戒指，给她戴上',
            result: '{user}花了很多钱买了一对钻石戒指，给薇尔希戴上，并求婚。薇尔希使劲点头。'
        }
            ]
        }
        }
    },
    '鸟人': {
        events: {
        'dbrs_1083': {
            title: '特殊的=NAME=',
            description: '{user}开始不喜欢自己的翅膀，因为这对翅膀走到哪里都会让{user}成为特别的存在，都是大家议论的对象。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['鸟人'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        },
        {
            text: '截掉翅膀',
            result: '{user}开始不喜欢自己的翅膀，因为这对翅膀走到哪里都会让{user}成为特别的存在，都是大家议论的对象。{user}忍受不了这样的人生，他去医院截掉了这对翅膀，选择做一个普通人。但是大家还是记住了{user}是鸟人这个称呼。',
            remove_tags: ['长翅膀']
        }
            ]
        }
        }
    },
};