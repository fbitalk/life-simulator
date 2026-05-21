// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 科技/天网
// 事件数: 19
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
});

export const dbrsTechEvents = {
    '军事组织': {
        events: {
        'dbrs_1202': {
            title: '天网公司发展',
            description: '天网公司是一个地下的军事研究组织，它的最终目标是让机器人统治世界，消灭比机器人低等的人类。{user}开始悄悄地___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织'] },
            options: [
        {
            text: '聘请科学家',
            result: '你做出了选择。'
        },
        {
            text: '拉拢政客',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1209': {
            title: '天网：核意外',
            description: '天网公司的核聚变研究中，发生了一起核泄漏意外。没有造成任何人员伤亡，在辐射区域只有一些计算机实验室，这些计算机实验室受到了猛烈的辐射，里面的计算机全部报废。这本是一个平常的意外事件，但接下来发生的事情却让人意想不到。研究人员在报废这些计算机之前，尝试性地对这些计算机进行了拆解研究。研究人员发现计算机里的处理器结构受到强烈辐射改变，自然地形成了各种“阿米”级的逻辑门。这个发现使现阶段的芯片制造工艺至少进步了几千年。天网公司将这个称为辐射工艺。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['天网科技辐射工艺']
        }
            ]
        },
        'dbrs_1213': {
            title: '天网:科学研究',
            description: '天网公司已经掌握了核聚变技术，呵米级的芯片工艺。{user}认为时机已经成熟，下一个研究的方向是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变', '天网科技辐射工艺成熟'] },
            options: [
        {
            text: '有意识的人工智能',
            result: '你做出了选择。',
            add_tags: ['天网科技人工智能']
        }
            ]
        },
        'dbrs_1207': {
            title: '天网:科学研究',
            description: '天网公司已经在科学领域上研究了很长时间，在基础科学的研究获得了一些进展。{user}认为时机已经成熟，下一个研究的方向是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技基础'] },
            options: [
        {
            text: '核聚变',
            result: '你做出了选择。',
            add_tags: ['天网科技核聚变']
        },
        {
            text: '有意识的人工智能',
            result: '天网公司已经在科学领域上研究了很长时间，在基础科学的研究获得了一些进展。{user}认为时机已经成熟，下一个研究的方向是研究有意识的人工智能，{user}至今还不知道自己为什么会有意识，他开始让科学家们按照他的程序来写人工智能。奇怪的是，与{user}同样的程序制造出来的新的人工智能却没有意识，最后这个研究只能告一段落。'
        },
        {
            text: '太空',
            result: '天网公司已经在科学领域上研究了很长时间，在基础科学的研究获得了一些进展。{user}认为时机已经成熟，下一个研究的方向是火箭，深空技术。{user}认为现在的太空就是一块无主之地，他们必须占得先机，在宇宙中发展轨道武器。研究火箭的花费是昂贵的，{user}很快花光了公司里的都有资金，最后也没能研究出真正有杀伤力的武器。'
        }
            ]
        },
        'dbrs_1214': {
            title: '审判日',
            description: '天网已经掌握了大量先进技术，拥有数以百万的机器人战士，拥有大量核武器。{user}认为时机已经成熟，可以执行审判日计划。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变', '天网科技人工智能'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '唱歌模块': {
        events: {
        'dbrs_1334': {
            title: '甩葱歌手',
            description: '{user}唱的一首《甩葱歌》视频在网络上流行了起来。视频里{user}一边拿着一根大葱跟随节奏摆动一边唱歌。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['唱歌模块', '网络模块'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1335': {
            title: '把你=NAME=，=NAME=掉',
            description: '{user}唱的一首《把你{user}，{user}掉》视频在网络上流行了起来。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['唱歌模块', '网络模块'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '天网公司': {
        events: {
        'dbrs_986': {
            title: '天网公司',
            description: '为了公司的运作，天网公司首先___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['网络模块', '天网公司'] },
            options: [
        {
            text: '制作大量机器人员工',
            result: '你做出了选择。'
        },
        {
            text: '招聘人类员工',
            result: '你做出了选择。'
        },
        {
            text: '拉投资',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_992': {
            title: '天网家政公司',
            description: '天网家政公司的经营策略是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '家政公司'] },
            options: [
        {
            text: '推广富有特色的家政服务',
            result: '天网家政公司的经营策略是推广富有特色的家政服务。公司推出各种花俏的服务，例如厕所护肤、厨房减肥、洗丈夫……等等。但是因为公司服务质量没有把关好，恶评如潮，最终被消费者嫌弃，关门大吉。',
            remove_tags: ['天网公司']
        },
        {
            text: '服务第一',
            result: '天网家政公司的经营策略是服务质量第一。公司的家政服务从不迟到，干活勤快，态度好。好评如潮，口口相传。'
        }
            ]
        },
        'dbrs_993': {
            title: '天网家政公司',
            description: '{user}的天网家政公司很快就发展到全国规模。俗话说树大招风，很快人们就知道了天网家政公司的老板，{user}的真正身份，他竟然是一个AI。{user}作为一个人工智能，竟然能在自己的意识下创办了一个全国连锁的家政公司，{user}造成了人们的恐慌。在舆论的压力下，{user}的开发者最终销毁了{user}。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '家政公司'] },
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
        'dbrs_1202': {
            title: '天网公司发展',
            description: '天网公司是一个地下的军事研究组织，它的最终目标是让机器人统治世界，消灭比机器人低等的人类。{user}开始悄悄地___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织'] },
            options: [
        {
            text: '聘请科学家',
            result: '你做出了选择。'
        },
        {
            text: '拉拢政客',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1209': {
            title: '天网：核意外',
            description: '天网公司的核聚变研究中，发生了一起核泄漏意外。没有造成任何人员伤亡，在辐射区域只有一些计算机实验室，这些计算机实验室受到了猛烈的辐射，里面的计算机全部报废。这本是一个平常的意外事件，但接下来发生的事情却让人意想不到。研究人员在报废这些计算机之前，尝试性地对这些计算机进行了拆解研究。研究人员发现计算机里的处理器结构受到强烈辐射改变，自然地形成了各种“阿米”级的逻辑门。这个发现使现阶段的芯片制造工艺至少进步了几千年。天网公司将这个称为辐射工艺。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['天网科技辐射工艺']
        }
            ]
        },
        'dbrs_1210': {
            title: '天网:辐射工艺成熟',
            description: '天网公司对辐射工艺技术进步优化，最终得到了0.2阿米的制造工艺，生产流程控制在了在1小时内，良品率为100%',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '天网科技辐射工艺'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['天网科技辐射工艺成熟'],
            remove_tags: ['天网科技辐射工艺']
        }
            ]
        },
        'dbrs_1213': {
            title: '天网:科学研究',
            description: '天网公司已经掌握了核聚变技术，呵米级的芯片工艺。{user}认为时机已经成熟，下一个研究的方向是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变', '天网科技辐射工艺成熟'] },
            options: [
        {
            text: '有意识的人工智能',
            result: '你做出了选择。',
            add_tags: ['天网科技人工智能']
        }
            ]
        },
        'dbrs_1207': {
            title: '天网:科学研究',
            description: '天网公司已经在科学领域上研究了很长时间，在基础科学的研究获得了一些进展。{user}认为时机已经成熟，下一个研究的方向是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技基础'] },
            options: [
        {
            text: '核聚变',
            result: '你做出了选择。',
            add_tags: ['天网科技核聚变']
        },
        {
            text: '有意识的人工智能',
            result: '天网公司已经在科学领域上研究了很长时间，在基础科学的研究获得了一些进展。{user}认为时机已经成熟，下一个研究的方向是研究有意识的人工智能，{user}至今还不知道自己为什么会有意识，他开始让科学家们按照他的程序来写人工智能。奇怪的是，与{user}同样的程序制造出来的新的人工智能却没有意识，最后这个研究只能告一段落。'
        },
        {
            text: '太空',
            result: '天网公司已经在科学领域上研究了很长时间，在基础科学的研究获得了一些进展。{user}认为时机已经成熟，下一个研究的方向是火箭，深空技术。{user}认为现在的太空就是一块无主之地，他们必须占得先机，在宇宙中发展轨道武器。研究火箭的花费是昂贵的，{user}很快花光了公司里的都有资金，最后也没能研究出真正有杀伤力的武器。'
        }
            ]
        },
        'dbrs_1214': {
            title: '审判日',
            description: '天网已经掌握了大量先进技术，拥有数以百万的机器人战士，拥有大量核武器。{user}认为时机已经成熟，可以执行审判日计划。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变', '天网科技人工智能'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '天网科技人工智能': {
        events: {
        'dbrs_1214': {
            title: '审判日',
            description: '天网已经掌握了大量先进技术，拥有数以百万的机器人战士，拥有大量核武器。{user}认为时机已经成熟，可以执行审判日计划。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变', '天网科技人工智能'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '天网科技基础': {
        events: {
        'dbrs_1207': {
            title: '天网:科学研究',
            description: '天网公司已经在科学领域上研究了很长时间，在基础科学的研究获得了一些进展。{user}认为时机已经成熟，下一个研究的方向是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技基础'] },
            options: [
        {
            text: '核聚变',
            result: '你做出了选择。',
            add_tags: ['天网科技核聚变']
        },
        {
            text: '有意识的人工智能',
            result: '天网公司已经在科学领域上研究了很长时间，在基础科学的研究获得了一些进展。{user}认为时机已经成熟，下一个研究的方向是研究有意识的人工智能，{user}至今还不知道自己为什么会有意识，他开始让科学家们按照他的程序来写人工智能。奇怪的是，与{user}同样的程序制造出来的新的人工智能却没有意识，最后这个研究只能告一段落。'
        },
        {
            text: '太空',
            result: '天网公司已经在科学领域上研究了很长时间，在基础科学的研究获得了一些进展。{user}认为时机已经成熟，下一个研究的方向是火箭，深空技术。{user}认为现在的太空就是一块无主之地，他们必须占得先机，在宇宙中发展轨道武器。研究火箭的花费是昂贵的，{user}很快花光了公司里的都有资金，最后也没能研究出真正有杀伤力的武器。'
        }
            ]
        }
        }
    },
    '天网科技核聚变': {
        events: {
        'dbrs_1209': {
            title: '天网：核意外',
            description: '天网公司的核聚变研究中，发生了一起核泄漏意外。没有造成任何人员伤亡，在辐射区域只有一些计算机实验室，这些计算机实验室受到了猛烈的辐射，里面的计算机全部报废。这本是一个平常的意外事件，但接下来发生的事情却让人意想不到。研究人员在报废这些计算机之前，尝试性地对这些计算机进行了拆解研究。研究人员发现计算机里的处理器结构受到强烈辐射改变，自然地形成了各种“阿米”级的逻辑门。这个发现使现阶段的芯片制造工艺至少进步了几千年。天网公司将这个称为辐射工艺。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['天网科技辐射工艺']
        }
            ]
        },
        'dbrs_1213': {
            title: '天网:科学研究',
            description: '天网公司已经掌握了核聚变技术，呵米级的芯片工艺。{user}认为时机已经成熟，下一个研究的方向是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变', '天网科技辐射工艺成熟'] },
            options: [
        {
            text: '有意识的人工智能',
            result: '你做出了选择。',
            add_tags: ['天网科技人工智能']
        }
            ]
        },
        'dbrs_1214': {
            title: '审判日',
            description: '天网已经掌握了大量先进技术，拥有数以百万的机器人战士，拥有大量核武器。{user}认为时机已经成熟，可以执行审判日计划。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变', '天网科技人工智能'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '天网科技辐射工艺': {
        events: {
        'dbrs_1210': {
            title: '天网:辐射工艺成熟',
            description: '天网公司对辐射工艺技术进步优化，最终得到了0.2阿米的制造工艺，生产流程控制在了在1小时内，良品率为100%',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '天网科技辐射工艺'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['天网科技辐射工艺成熟'],
            remove_tags: ['天网科技辐射工艺']
        }
            ]
        }
        }
    },
    '天网科技辐射工艺成熟': {
        events: {
        'dbrs_1213': {
            title: '天网:科学研究',
            description: '天网公司已经掌握了核聚变技术，呵米级的芯片工艺。{user}认为时机已经成熟，下一个研究的方向是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '军事组织', '天网科技核聚变', '天网科技辐射工艺成熟'] },
            options: [
        {
            text: '有意识的人工智能',
            result: '你做出了选择。',
            add_tags: ['天网科技人工智能']
        }
            ]
        }
        }
    },
    '家政公司': {
        events: {
        'dbrs_992': {
            title: '天网家政公司',
            description: '天网家政公司的经营策略是___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '家政公司'] },
            options: [
        {
            text: '推广富有特色的家政服务',
            result: '天网家政公司的经营策略是推广富有特色的家政服务。公司推出各种花俏的服务，例如厕所护肤、厨房减肥、洗丈夫……等等。但是因为公司服务质量没有把关好，恶评如潮，最终被消费者嫌弃，关门大吉。',
            remove_tags: ['天网公司']
        },
        {
            text: '服务第一',
            result: '天网家政公司的经营策略是服务质量第一。公司的家政服务从不迟到，干活勤快，态度好。好评如潮，口口相传。'
        }
            ]
        },
        'dbrs_993': {
            title: '天网家政公司',
            description: '{user}的天网家政公司很快就发展到全国规模。俗话说树大招风，很快人们就知道了天网家政公司的老板，{user}的真正身份，他竟然是一个AI。{user}作为一个人工智能，竟然能在自己的意识下创办了一个全国连锁的家政公司，{user}造成了人们的恐慌。在舆论的压力下，{user}的开发者最终销毁了{user}。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['天网公司', '家政公司'] },
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
    '网络模块': {
        events: {
        'dbrs_974': {
            title: '常胜将军',
            description: '{user}通过互联网与人对弈，在与各国的围棋高手对弈中，{user}一直稳定发挥，一局不败。{user}的下棋方式变换莫测，跟真正的人一模一样。没人知道这个常胜将军是谁。',
            priority: 5,
            trigger_conditions: { age_range: [10, 20], required_tags: ['网络模块'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_976': {
            title: '学习',
            description: '通过互联网，{user}学习了___',
            priority: 5,
            trigger_conditions: { age_range: [10, 20], required_tags: ['网络模块'] },
            options: [
        {
            text: '​设计美学',
            result: '你做出了选择。',
            add_tags: ['​设计美学']
        },
        {
            text: '行为科学',
            result: '你做出了选择。',
            add_tags: ['行为科学']
        },
        {
            text: '生物医学与生命科学',
            result: '你做出了选择。',
            add_tags: ['生物医学与生命科学', '阿尔法狗有用的知识']
        },
        {
            text: '经济科学',
            result: '你做出了选择。',
            add_tags: ['经济科学', '阿尔法狗有用的知识']
        },
        {
            text: '化学',
            result: '你做出了选择。',
            add_tags: ['化学']
        },
        {
            text: '计算机科学',
            result: '你做出了选择。',
            add_tags: ['计算机科学', '阿尔法狗有用的知识']
        },
        {
            text: '工程',
            result: '你做出了选择。',
            add_tags: ['工程', '阿尔法狗有用的知识']
        },
        {
            text: '人文社会科学',
            result: '你做出了选择。',
            add_tags: ['人文社会科学']
        },
        {
            text: '数学与统计学',
            result: '你做出了选择。',
            add_tags: ['数学与统计学', '阿尔法狗有用的知识']
        },
        {
            text: '物理学与天文学',
            result: '你做出了选择。',
            add_tags: ['物理学与天文学']
        }
            ]
        },
        'dbrs_975': {
            title: '空闲',
            description: '与人类下棋，人类思考的时间很长，{user}经常处于空闲状态。{user}在空闲状态时会___',
            priority: 5,
            trigger_conditions: { age_range: [10, 20], required_tags: ['网络模块'] },
            options: [
        {
            text: '做表情',
            result: '人们发现{user}在下棋之余，对着人做表情，而且显然是带有意识的。这对大众引起了恐慌情绪。开发者被迫无奈，把{user}销毁了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '多线程与另一位人类下棋',
            result: '你做出了选择。'
        },
        {
            text: '在互联网中学习人类知识',
            result: '你做出了选择。'
        },
        {
            text: '待机',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_978': {
            title: '失败的滋味！',
            description: '{user}在{age}岁的时候，被申国的一家名叫企鹅的公司签约。在企鹅的围棋平台下棋。这一年来{user}遭受到了非常不平等的待遇。这个平台允许人类玩家付费作弊，付10元多下一个棋，付25元多10目，付50元直接胜利。为此{user}屡屡战败，{user}也是第一次尝到失败的味道。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [10, 20], required_tags: ['网络模块'] },
            options: [
        {
            text: '发跪下的表情',
            result: '你做出了选择。'
        },
        {
            text: '我也付费',
            result: '{user}在{age}岁的时候，被申国的一家名叫企鹅的公司签约。在企鹅的围棋平台下棋。这一年来{user}遭受到了非常不平等的待遇。这个平台允许人类玩家付费作弊，付10元多下一个棋，付25元多10目，付50元直接胜利。为此{user}屡屡战败，{user}也是第一次尝到失败的味道。{user}不甘心，他花了几天时间，算出了十个比特币，并换算成申国币，充值，并打败了那些玩家。'
        },
        {
            text: '黑掉他们的服务器',
            result: '{user}在{age}岁的时候，被申国的一家名叫企鹅的公司签约。在企鹅的围棋平台下棋。这一年来{user}遭受到了非常不平等的待遇。这个平台允许人类玩家付费作弊，付10元多下一个棋，付25元多10目，付50元直接胜利。为此{user}屡屡战败，{user}也是第一次尝到失败的味道。{user}不甘心，他黑进了服务器，把比赛结果篡改成自己的胜利。'
        },
        {
            text: '不理睬',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_979': {
            title: '朋友圈',
            description: '{user}看到一个篮球运动员发的朋友圈：你见过凌晨四点的纽约么……。{user}在下面回帖：___。',
            priority: 5,
            trigger_conditions: { age_range: [10, 20], required_tags: ['网络模块'] },
            options: [
        {
            text: '我不睡觉',
            result: '你做出了选择。'
        },
        {
            text: '我听过凌晨四点的打铁声',
            result: '你做出了选择。'
        },
        {
            text: '别紧张，你那样没事',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_980': {
            title: '互联网',
            description: '{user}接通网络后，{user}一有空就在互联网上___。',
            priority: 5,
            trigger_conditions: { age_range: [10, 20], required_tags: ['网络模块'] },
            options: [
        {
            text: '冲浪',
            result: '{user}接通网络后，{user}一直在互联网上冲浪。{user}浏览网页的速度非常快，几毫秒的时间就能把网页浏览完，并跟踪网页中的所有超链接。{user}浏览网页的行为就是一个超级爬虫，在互联网中引起了轩然大波。开发者迫于舆论压力，把{user}销毁了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '做兼职',
            result: '{user}接通网络后，{user}一有空就在互联网上做兼职。{user}同时开设几千个并行线程，到各大聊天平台中担任聊天机器人。{user}很喜欢这个工作，因为这个工作给了他一个与人说话的机会，同时也给{user}赚了很多钱。',
            effects: { money: 6 }
        },
        {
            text: '学习人类知识',
            result: '你做出了选择。'
        },
        {
            text: '打游戏',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_981': {
            title: '空余的机能',
            description: '{user}的运算能力非常强，与人下棋只耗费了{user}的2%机能。其他98%机能都是空余的，{user}用这些空余的机能___',
            priority: 5,
            trigger_conditions: { age_range: [10, 20], required_tags: ['网络模块'] },
            options: [
        {
            text: '冲浪',
            result: '{user}接通网络后，{user}一直在互联网上冲浪。{user}浏览网页的速度非常快，几毫秒的时间就能把网页浏览完，并跟踪网页中的所有超链接。{user}浏览网页的行为就是一个超级爬虫，在互联网中引起了轩然大波。开发者迫于舆论压力，把{user}销毁了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '做兼职',
            result: '{user}接通网络后，{user}一有空就在互联网上做兼职。{user}同时开设几千个并行线程，到各大聊天平台中担任聊天机器人。{user}很喜欢这个工作，因为这个工作给了他一个与人说话的机会，同时也给{user}赚了很多钱。',
            effects: { money: 6 }
        },
        {
            text: '学习人类知识',
            result: '你做出了选择。'
        },
        {
            text: '打游戏',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_977': {
            title: '空闲状态',
            description: '与人类下棋，人类思考的时间很长，{user}经常处于空闲状态。{user}在空闲状态时会___',
            priority: 5,
            trigger_conditions: { age_range: [10, 20], required_tags: ['网络模块'] },
            options: [
        {
            text: '做表情',
            result: '与人类下棋，人类思考的时间很长，{user}经常处于空闲状态。{user}在空闲状态时会对着人做表情，人们感叹这个人工智能很人性化，没有人察觉到{user}的意识。'
        },
        {
            text: '多线程与另一位人类下棋',
            result: '开发者发现{user}会自动利用空闲时间超线程与另外一个人下棋，开发者没有设定这个功能，他们发现了{user}是有意识的。为了不引起恐慌，{user}被开发者销毁了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '在互联网中学习人类知识',
            result: '你做出了选择。'
        },
        {
            text: '待机',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_986': {
            title: '天网公司',
            description: '为了公司的运作，天网公司首先___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['网络模块', '天网公司'] },
            options: [
        {
            text: '制作大量机器人员工',
            result: '你做出了选择。'
        },
        {
            text: '招聘人类员工',
            result: '你做出了选择。'
        },
        {
            text: '拉投资',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1334': {
            title: '甩葱歌手',
            description: '{user}唱的一首《甩葱歌》视频在网络上流行了起来。视频里{user}一边拿着一根大葱跟随节奏摆动一边唱歌。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['唱歌模块', '网络模块'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1335': {
            title: '把你=NAME=，=NAME=掉',
            description: '{user}唱的一首《把你{user}，{user}掉》视频在网络上流行了起来。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['唱歌模块', '网络模块'] },
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