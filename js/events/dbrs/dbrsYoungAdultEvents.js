// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - YoungAdult年龄段事件（无触发标签）
// 事件数: 77
import { registerTags } from '../../data/tagRegistry.js';

registerTags({
    '青年': { color: 'normal' },
});

// 本文件涉及的标签注册
registerTags({
    '多病': { color: 'red' },
    '高情商': { color: 'pink' },
});

export const dbrsYoungAdultEvents = {
    '青年': {
        events: {
        'dbrs_92': {
            title: '加菜',
            description: '切菜的时候，{user}突然手一歪，把自己的手指头剁掉了。{user}被送去了医院，被告知手指已经不能接回去了。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_108': {
            title: '流星',
            description: '一天{user}在回家的路上看到了流星，{user}___',
            priority: 2,
            trigger_conditions: { age_range: [25, 30] },
            options: [
        {
            text: '许愿',
            result: '一天{user}在回家的路上看到了流星，他闭上眼睛，双手合十，开始许愿。'
        },
        {
            text: '表示在这个世界上又死了一个人',
            result: '你做出了选择。'
        },
        {
            text: '习以为常',
            result: '你做出了选择。'
        },
        {
            text: '抓拍发盆友圈',
            result: '你做出了选择。',
            add_tags: ['交网友']
        },
        {
            text: '担心自己会有生命危险',
            result: '{user}看到天上有流星，赶忙进地铁躲避。'
        },
        {
            text: '即兴创作',
            result: '一天{user}在回家的路上看到了流星，{user}有感而发，即兴创作了一首《陪人去看流星雨》',
            add_tags: ['音乐能力']
        },
        {
            text: '对流星现象非常感兴趣',
            result: '一天{user}在回家的路上看到了流星。{user}对流星非常好奇，他开始接触学习天文学。'
        },
        {
            text: '即兴创作',
            result: '一天{user}在回家的路上看到了流星，{user}有感而发，即兴创作了一幅《乘着流星》',
            add_tags: ['画图能力']
        }
            ]
        },
        'dbrs_112': {
            title: '公司日常',
            description: '熟悉了公司的业务后，{user}决定___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '自己去开公司',
            result: '你做出了选择。'
        },
        {
            text: '继续干下去',
            result: '{user}选择继续在公司底层努力干活，{user}的老爸心痛孩子，给了他换了一个闲职。'
        },
        {
            text: '要求升职',
            result: '在老爸的公司里，{user}升职了，做了公司的CEO。'
        },
        {
            text: '要求接管老爸的公司',
            result: '“逗比儿子，毛都还没长齐就要坐老爹我的位置？”{user}老爸当着同事的面拒绝了{user}接管公司的要求，{user}一气之下走人了。'
        },
        {
            text: '没有意思，不干了',
            result: '{user}觉得在老爸的公司干活好无聊，还是自由比较快乐。'
        }
            ]
        },
        'dbrs_117': {
            title: '新公司',
            description: '在公司中，大家都对{user}恭恭敬敬，称他为少爷。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_119': {
            title: '光泽强迫症',
            description: '长期的抛光使{user}得了职业病，不是肺病。而是看到粗糙的东西就想去把它打磨光滑。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_125': {
            title: '公司日常',
            description: '熟悉了公司的业务后，{user}决定___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '自己去开公司',
            result: '你做出了选择。'
        },
        {
            text: '继续干下去',
            result: '{user}选择继续在公司底层努力干活，{user}的老爸心痛孩子，给了他换了一个闲职。'
        },
        {
            text: '要求升职',
            result: '在老爸的公司里，{user}升职了，做了公司的CEO。'
        },
        {
            text: '要求接管老爸的公司',
            result: '“逗比儿子，毛都还没长齐就要坐老爹我的位置？”{user}老爸当着同事的面拒绝了{user}接管公司的要求，{user}一气之下走人了。'
        },
        {
            text: '没有意思，不干了',
            result: '{user}觉得在老爸的公司干活好无聊，还是自由比较快乐。'
        }
            ]
        },
        'dbrs_123': {
            title: '母女争霸',
            description: '{user}喜欢上了公司里的一位英俊的男员工，谁知道她妈比她先了一步。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_124': {
            title: '同事偷懒',
            description: '{user}发现前辈同事在上班时间公然打瞌睡，{user}___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '上去叫醒',
            result: '你做出了选择。',
            remove_tags: ['高情商']
        },
        {
            text: '不理睬',
            result: '你做出了选择。'
        },
        {
            text: '装作有问题请教，叫醒他',
            result: '你做出了选择。',
            remove_tags: ['高情商']
        }
            ]
        },
        'dbrs_126': {
            title: '公司日常',
            description: '有一次上级训斥{user}，{user}决定___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '利用老爸的权利折磨这个人',
            result: '你做出了选择。'
        },
        {
            text: '炒掉这人',
            result: '你做出了选择。'
        },
        {
            text: '虚心接受',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_132': {
            title: '算错数',
            description: '在算公司账的时候，{user}看错了小数点。公司的利润算少了2个零，{user}被炒掉了，并以做假账的罪名抓捕了。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_134': {
            title: '工作习惯',
            description: '{user} 焖三杯鸡的时候，喜欢拿一瓶82年的拉菲，喝一口先含在嘴里，然后喷在锅中。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_135': {
            title: '铁砂掌',
            description: '厨房的锅铲生锈了，为了不影响菜肴的味道，{user}只好用徒手炒油锅。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_133': {
            title: '加菜',
            description: '切菜的时候，{user}突然手一歪，把自己的手指头剁掉了。{user}被送去了医院，被告知手指已经不能接回去了。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_144': {
            title: '公司日常',
            description: '熟悉了公司的业务后，{user}决定___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '自己去开公司',
            result: '你做出了选择。'
        },
        {
            text: '继续干下去',
            result: '{user}选择继续在公司底层努力干活，{user}的老爸心痛孩子，给了他换了一个闲职。'
        },
        {
            text: '要求升职',
            result: '在老爸的公司里，{user}升职了，做了公司的CEO。'
        },
        {
            text: '要求接管老爸的公司',
            result: '“逗比儿子，毛都还没长齐就要坐老爹我的位置？”{user}老爸当着同事的面拒绝了{user}接管公司的要求，{user}一气之下走人了。'
        },
        {
            text: '没有意思，不干了',
            result: '{user}觉得在老爸的公司干活好无聊，还是自由比较快乐。'
        }
            ]
        },
        'dbrs_146': {
            title: '薪金制度渣FIT人',
            description: '{user}老爸的公司是科技公司，公司实行的制度___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '固定月薪',
            result: '{user}实行固定月薪，在安逸的环境下，公司中的员工都把心思花在科研中，公司有了非常成功的科研成果。'
        },
        {
            text: '无月薪，提供免费的器材给人使用。',
            result: '{user}用公司的钱都买了一些非常昂贵的科研器材，这些器材非常罕有，吸引了大量科学家，大学生和知识分子来公司做实验，这些人无偿分享了非常多的实验成果给公司。'
        },
        {
            text: '核心员工高薪，普通员工底薪高流动',
            result: '提出核心员工高薪，普通员工底薪高流动这种奸商政策后，员工一个接一个地辞职，也招不到人。到最后无人干活，公司关门大吉，可喜可贺，恭喜发财。'
        },
        {
            text: '低月薪，高奖金',
            result: '{user}决定公司的薪金制度是低月薪，高奖金。在这个制度下，员工们都把心思花在人与人之间的勾心斗角，没有任何突出的科研成果。公司亏损严重，不久就关门大吉了。'
        }
            ]
        },
        'dbrs_147': {
            title: '骗子公司',
            description: '{user}老爸的公司是集资骗子公司，公司收了股东的钱，{user}和他的老爸带着钱一溜烟跑路了。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            effects: { money: 10 }
        }
            ]
        },
        'dbrs_148': {
            title: '薪金制度渣FIT人',
            description: '{user}老爸的公司是B2C公司，公司实行的月薪___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '低月薪，高奖金',
            result: '{user}决定公司的薪金制度是低月薪，高奖金。在这个制度下，公司一直平稳发展。'
        },
        {
            text: '固定月薪',
            result: '{user}决定公司采用固定月薪制度。在这个制度下，公司一直平稳发展。'
        },
        {
            text: '无月薪，提供平台让员工挣钱，并收手续费',
            result: '{user}决定公司只做平台，让员工自己做网店，网店收月租。'
        },
        {
            text: '核心员工高薪，普通员工底薪高流动',
            result: '{user}提出核心员工高薪，普通员工底薪高流动这种奸商政策后，员工一个接一个地辞职，也招不到人。到最后无人干活，公司关门大吉，可喜可贺，恭喜发财。'
        }
            ]
        },
        'dbrs_149': {
            title: '薪金制度渣FIT人',
            description: '{user}老爸的公司是风险投资公司，公司实行的月薪___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '低月薪，高奖金',
            result: '{user}决定公司的薪金制度是低月薪，高奖金。在这个制度下，公司一直平稳发展。'
        },
        {
            text: '固定月薪',
            result: '{user}决定公司采用固定月薪制度。在这个制度下，员工得过且过，共产主义，不久后公司就破产了……'
        },
        {
            text: '无月薪，提供平台让员工挣钱，并收手续费',
            result: '{user}决定公司的薪金制度是无月薪，提供平台让员工挣钱，并收手续费。这个制度激发了员工狂热的工作热情，从此公司的业绩蒸蒸日上。'
        },
        {
            text: '核心员工高薪，普通员工底薪高流动',
            result: '{user}提出核心员工高薪，普通员工底薪高流动这种奸商政策后，员工一个接一个地辞职，也招不到人。到最后无人干活，公司关门大吉，可喜可贺，恭喜发财。'
        }
            ]
        },
        'dbrs_151': {
            title: '员工福利',
            description: '{user}计划公司给员工的福利是___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '并没有福利',
            result: '{user}决定公司并没有福利。'
        },
        {
            text: '不加班，双休',
            result: '你做出了选择。'
        },
        {
            text: '员工慰问品补贴',
            result: '你做出了选择。'
        },
        {
            text: '定时发放经费',
            result: '你做出了选择。'
        },
        {
            text: '开设会所，奢侈的工作场所',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_152': {
            title: 'CEO的策划',
            description: '{user}计划未来10年后，公司的发展方向是___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '打破常规，勇于创新',
            result: '{user}的打破常规，勇于创新的精神领导下，公司业绩蒸蒸日上，富可敌国。',
            effects: { money: 15 }
        },
        {
            text: '借鉴成功，提倡 " 微创新 " ',
            result: '山寨公司是没有前途的，{user}老爸的公司，没过几年，就倒闭了。'
        },
        {
            text: '并不想管理公司，放羊式发展',
            result: '{user}懒得管理公司，交给了下属管理。'
        },
        {
            text: '毁灭式营销',
            result: '在{user}的策划领导下，公司实行毁灭式营销，大捞了一笔钱后，关门大吉了。',
            effects: { money: 15 }
        }
            ]
        },
        'dbrs_153': {
            title: '老爸公司的人事',
            description: '{user}老爸的公司要招聘一个前台。{user}应聘了20多个人，最后选择了___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '女影星',
            result: '{user}招公司前台的标准是：前台一定要漂亮！胸要大！长发披肩！婀娜多姿。'
        },
        {
            text: '面容姣好的心机女',
            result: '面试了众多的人后，{user}决定请其中的一个心机婊。老爸问{user}为啥选她，{user}说：长得漂亮'
        },
        {
            text: '男应届毕业生',
            result: '为了省钱，{user}决定招毕业生做前台，不会说话微笑就行。'
        },
        {
            text: '女应届毕业生',
            result: '为了省钱，{user}决定招毕业生做前台，不会说话微笑就行。'
        },
        {
            text: '中年男人',
            result: '{user}请了个中年男人做公司的前台，他说认为中年男人的形象很适合公司。'
        },
        {
            text: '中年女人',
            result: '{user}请了个中年女人做公司前台，他说：“中年女人做前台比较好，他们不用休产假。”'
        }
            ]
        },
        'dbrs_165': {
            title: '沟通',
            description: '在和客户沟通中语言不通，{user}会___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '玩我画你猜',
            result: '{user}在公司的表现不佳，和客户画来画去的，根本不能沟通。'
        },
        {
            text: '立马查字典',
            result: '{user}边查字典边和客户说外语，虽然这样子看起来很丑，但是很有效。即使一些很难对付的客户，生意都能谈下来。'
        },
        {
            text: '上网找在线翻译',
            result: '{user}边上网找翻译边和客户说外语，虽然这样子看起来很丑，但是很有效。即使一些很难对付的客户，生意都能谈下来。'
        },
        {
            text: '肢体语言',
            result: '{user}用生动的肢体语言来弥补语言障碍，{user}每天的工作就像在做运动。',
            add_tags: ['强壮'],
            remove_tags: ['多病']
        }
            ]
        },
        'dbrs_176': {
            title: '剩下来的人',
            description: '{user}年纪也不小了，{user}却还没成家。{user}被身边的人问得最多的问题是神马时候结婚。',
            priority: 2,
            trigger_conditions: { age_range: [28, 38] },
            options: [
        {
            text: '不急的',
            result: '你做出了选择。'
        },
        {
            text: '单身比较好',
            result: '你做出了选择。'
        },
        {
            text: '立即结婚',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_178': {
            title: '调教学生',
            description: '{user}所教的班上，有一个非常顽皮的学生。{user}决定___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '留堂跟他说教',
            result: '你做出了选择。'
        },
        {
            text: '体罚',
            result: '{user}是一位非常严厉的老师，他的标志性物品就是他随身携带的藤条，一遇到不听话的学生，就会脱下他的裤子，抽出他的藤条鞭打到下课为止。'
        },
        {
            text: '鼓励',
            result: '{user}相信鼓励学生才能教好学生，看到那些傻逼一样加减法都分不清的学生，也会摸摸他们的头说你 天生聪慧 冰雪聪明，请努力一下激发你体内的潜能。'
        }
            ]
        },
        'dbrs_198': {
            title: '人有三急',
            description: '{user}在一个陌生的地方，突然人有三急。附近怎么找都没有厕所。最后，{user}发现了一个无人售卖店，他走进去，把门关好，挂上停止营业的牌子，在里面拉起了屎。一阵斯里哗啦之后，{user}发现商店里面并没有纸巾卖，只有报纸和书这种纸类，{user}看了看，选了___擦干净屁股，跑了。',
            priority: 2,
            trigger_conditions: { age_range: [25, 35] },
            options: [
        {
            text: '《人民日报》',
            result: '你做出了选择。'
        },
        {
            text: '《环球体育》',
            result: '你做出了选择。'
        },
        {
            text: '《法制晚报》',
            result: '你做出了选择。'
        },
        {
            text: '《丑陋的申国人》',
            result: '你做出了选择。'
        },
        {
            text: '《独唱团》',
            result: '你做出了选择。'
        },
        {
            text: '《c++ primer》',
            result: '你做出了选择。'
        },
        {
            text: '《在那只有白魔法的日子里》',
            result: '{user}在一个陌生的地方，突然人有三急。附近怎么找都没有厕所。最后，{user}发现了一个无人售卖店，他走进去，把门关好，挂上停止营业的牌子，在里面拉起了屎。一边拉屎一边还抓起了一本小说叫《在那只有白魔法的日子里》看了起来，看到好笑的地方，{user}忍不住哈哈大笑起来。'
        },
        {
            text: '《临时工》',
            result: '你做出了选择。'
        },
        {
            text: '《如何如傻逼相处》',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_212': {
            title: '=NAME=参加公务员考试',
            description: '“一带一路”是申国全新的对外开放战略。下列关于“一带一路”说法错误的是：',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '指“丝绸之路经济带”和“21世纪海上丝绸之路”',
            result: '{user}没有通过公务员考试。'
        },
        {
            text: '是区域经济合作发展的实体',
            result: '{user}通过公务员考试了。'
        },
        {
            text: '可纳入的国家和地区范围是开放的',
            result: '{user}没有通过公务员考试。'
        },
        {
            text: '吉木木省是“一带一路”圈定的重点省份之一',
            result: '{user}没有通过公务员考试。'
        }
            ]
        },
        'dbrs_211': {
            title: '公务员：安全体检',
            description: '申国《公务员录用体检通用标准（试行）》规定，女性公务员体检须检查淋病、梅毒等性病，并搜集体检者的月经史。{user}对检查表示不满，认为隐私被侵犯。得到的回答是：隐私算啥？为了领导的安全，必须查！',
            priority: 2,
            trigger_conditions: { age_range: [20, 55], required_tags: ['女性'] },
            options: [
        {
            text: '服从组织，检查身体',
            result: '你做出了选择。'
        },
        {
            text: '放弃公务员这个铁饭碗',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_214': {
            title: '公务员：查水表',
            description: '{user}遇到一家人拒绝开门让他进去查水表。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '开罚单，走人',
            result: '{user}遇到一家人拒绝开门让{user}进去查水表。{user}耸耸肩，开了罚单丢在门口就走了。'
        }
            ]
        },
        'dbrs_215': {
            title: '公务员：处理问题',
            description: '上级叫{user}去处理某地的居民楼拖欠水费的问题。整栋楼的居民已经累积拖欠5年水费了。{user}去到现场，发现里面住的大多是穷苦的外来打工者。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '同情',
            result: '上级叫{user}去处理某地的居民楼拖欠水费的问题。整栋楼的居民已经累积拖欠5年水费了。{user}去到现场，发现里面住的大多是穷苦的外来打工者。{user}非常同情他们，于是选择继续让他们拖欠水费。后来，上级知道了这件事，就把{user}辞退了。'
        },
        {
            text: '不交水费就停水，规矩',
            result: '{user}被指派切断某个居民楼的供水，因为整栋楼的居民已经累积拖欠5年水费了。{user}找到总阀门关掉，然后拔掉罗盘。整栋大楼停水了，没过几天居民就忍受不了没水的日子，纷纷出门交水费。'
        },
        {
            text: '太放肆了',
            result: '{user}被指派切断某个居民楼的供水，因为整栋楼的居民已经累积拖欠5年水费了。{user}为了展示一下水利部门不是一个好欺负的部门，放置了一个C4在居民楼的总水管上，把水管炸了。爆炸的冲击波还把这栋居民楼的玻璃窗都震碎了。看到这样，{user}满意地离开了。'
        },
        {
            text: '这种贱民真该死',
            result: '{user}被指派切断某个居民楼的供水，因为整栋楼的居民已经累积拖欠5年水费了。{user}在自来水管中注入毒药，把整栋楼的人毒死了。',
            death_flag: true,
            death_reason: '=NAME=被指派切断某个居民楼的供水，因为整栋楼的居民已经累积拖欠5年水费了。=NAME=在自来水管中注入毒药，把整栋楼的人毒死了。'
        }
            ]
        },
        'dbrs_216': {
            title: '公务员：升职',
            description: '部门里一个办公室职位有了空缺。上级给了{user}一次升职的机会，只要{user}送点礼。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '艹，滚',
            result: '{user}对普遍存在的贪污现象非常憎恨，已经没有动力再留在政府部门，辞职走人了。'
        },
        {
            text: '不理睬',
            result: '部门里一个办公室职位有了空缺。但却轮不到{user}坐上那个位置，那个位置给别的更懂行业竞争的人坐上了。'
        },
        {
            text: '得赶紧准备礼物',
            result: '部门里一个办公室职位有了空缺。{user}给上级低头哈腰地送礼，总算争取到了那个位置。'
        }
            ]
        },
        'dbrs_217': {
            title: '公务员：办公室',
            description: '一杯茶、一包烟、一张报纸过一天',
            priority: 2,
            trigger_conditions: { age_range: [20, 55], required_tags: ['男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_220': {
            title: '神秘快递',
            description: '有一天{user}突然收到一份没有写收货人的神秘快递，{user}一打开里面竟然是一个炸弹，旁边还有一张生日贺卡！',
            priority: 2,
            trigger_conditions: { age_range: [20, 25] },
            options: [
        {
            text: '报警！',
            result: '有一天{user}突然收到一份没有写收货人的神秘快递，{user}一打开里面竟然是一个炸弹，旁边还有一张生日贺卡！{user}立马报警，警察来了之后发现里面原来只是生日蛋糕……最后{user}因为报假警的罪名被抓捕归案。',
            add_tags: ['监狱时间']
        },
        {
            text: '上面有个按钮，按一下',
            result: '有一天{user}突然收到一份没有写收货人的神秘快递，{user}一打开里面竟然是一个炸弹。上面有个按钮，{user}好奇按了下去。“嘭”的一声，那个炸弹爆炸了，喷出一堆彩带，还有生日快乐4个大字……'
        },
        {
            text: '找个越远越好的地方丢掉',
            result: '有一天{user}突然收到一份没有写收货人的神秘快递，{user}一打开里面竟然是一个炸弹。{user}吓得不轻，赶紧装回去，找了个荒山野岭埋了起来。'
        }
            ]
        },
        'dbrs_258': {
            title: '暗恋',
            description: '{user}喜欢上了一个同事，他___',
            priority: 2,
            trigger_conditions: { age_range: [20, 28] },
            options: [
        {
            text: '暗恋',
            result: '{user}喜欢上了一个同事，他不敢接近这个同事，只是远远地留意同事的一举一动。直到这个同事辞职走人了，{user}都没跟他说上一句话。'
        },
        {
            text: '搭话',
            result: '{user}喜欢上了一个同事，他鼓起勇气，上前跟同事搭话，他们有一句没有一句地聊天，很快就熟悉了。接下来发展迅速，他们成了情侣。（喜欢就去追！不要留下后悔！）',
            add_tags: ['恋爱中']
        },
        {
            text: '表白',
            result: '{user}喜欢上了一个同事，他买了一簇鲜花，华丽丽地走到同事面前，向同事表白。同事被{user}这一番举动吓到了，连连摆手说不不不不。'
        },
        {
            text: '控制自己，忘掉他',
            result: '{user}至今还是单身，但是他却觉得无所谓。因为{user}才{age}岁，他认为这个时候就应该拼搏挣钱，而不是去嘻嘻哈哈、谈恋爱、搞朋友。'
        }
            ]
        },
        'dbrs_262': {
            title: '程序员：老板的请求',
            description: '公司的一台电脑坏了，老板叫{user}去修理一下，很明显老板的思维是 程序员==搞电脑的==会修电脑。 {user}___',
            priority: 2,
            trigger_conditions: { age_range: [20, 60] },
            options: [
        {
            text: '跟老板解释程序员是干嘛的',
            result: '在公司里{user}是一位程序员，老板叫{user}修电脑，{user}竟然拒绝！还一大堆道理，说什么程序员只做程序，不会修电脑。老板有点生气，不喜欢{user}，于是找个理由开除了{user}。',
            remove_tags: ['程序员：高级']
        },
        {
            text: '拒绝老板的请求',
            result: '在公司里{user}是一位程序员，老板叫{user}修电脑，{user}竟然拒绝！说什么很忙很忙，天天就坐在电脑前转笔！老板有点生气，于是找个理由开除了{user}。',
            remove_tags: ['程序员：高级']
        },
        {
            text: '去修电脑',
            result: '在公司里{user}是一位程序员，敬业又尽职，听话又能干。是老板的王牌员工。',
            remove_tags: ['=INHERIT=']
        },
        {
            text: '偷偷把电脑弄坏，争取买新的。',
            result: '在公司里{user}是一位程序员，老板叫{user}修电脑，{user}假装去修。实际上是在电脑上搞出更多故障。老板没有办法，只好请专业人事来修理电脑。'
        }
            ]
        },
        'dbrs_261': {
            title: '程序员：老板的请求',
            description: '公司的一台电脑坏了，老板叫{user}去修理一下，很明显老板的思维是 程序员==搞电脑的==会修电脑。 {user}___',
            priority: 2,
            trigger_conditions: { age_range: [20, 60] },
            options: [
        {
            text: '跟老板解释程序员是干嘛的',
            result: '在公司里{user}是一位程序员，老板叫{user}修电脑，{user}竟然拒绝！还一大堆道理，说什么程序员只做程序，不会修电脑。老板有点生气，不喜欢{user}，于是找个理由开除了{user}。'
        },
        {
            text: '拒绝老板的请求',
            result: '在公司里{user}是一位程序员，老板叫{user}修电脑，{user}竟然拒绝！说什么很忙很忙，天天就坐在电脑前转笔！老板有点生气，于是找个理由开除了{user}。',
            remove_tags: ['程序员：码农']
        },
        {
            text: '去修电脑',
            result: '在公司里{user}是一位程序员，敬业又尽职，听话又能干。是老板的王牌员工。'
        },
        {
            text: '偷偷把电脑弄坏，争取买新的。',
            result: '在公司里{user}是一位程序员，老板叫{user}修电脑，{user}假装去修。实际上是在电脑上搞出更多故障。老板没有办法，只好请专业人事来修理电脑。'
        }
            ]
        },
        'dbrs_278': {
            title: '消防员：灭火',
            description: '有天局里收到个报警电话说快来救火！{user}冲到指定地点后发现房间富丽堂皇，中间大床上躺着2个果体兄贵基佬，邀请你帮他们灭火。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '接上高压水枪，进行灭火',
            result: '有天局里收到个报警电话说快来救火！冲到指定地点后发现房间富丽堂皇，中间大床上躺着2个果体兄贵基佬，邀请你帮他们灭火。{user}看到此状，淡定地打开高压水枪，喷向那2个兄贵，帮他们冷却一下情绪。'
        },
        {
            text: '进行灭火',
            result: '有天局里收到个报警电话说快来救火！冲到指定地点后发现房间富丽堂皇，中间大床上躺着2个果体兄贵基佬，邀请你帮他们灭火。{user}好心接受了他们的建议，灭火的过程中，{user}的身体也被传染了，变得火热热的。而那两个兄贵，不但没有灭火，反而越烧越旺。',
            add_tags: ['兄贵']
        },
        {
            text: '拍照发盆友圈',
            result: '有天局里收到个报警电话说快来救火！{user}冲到指定地点后发现房间富丽堂皇，中间大床上躺着2个果体兄贵基佬，邀请你帮他们灭火。果体兄贵看到{user}拿出手机拍照，还在床上摆弄着不同的姿势。'
        }
            ]
        },
        'dbrs_279': {
            title: '消防员：战斗',
            description: '有一名40多岁的中年男人在市中心突然施展魔法，两手各捧一个火球，见人就烧，见车就砸。市中心街道两边燃起熊熊烈火。{user}接到报警后，立马开着消防车出动，___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '停车在安全地方，洒水救火',
            result: '市中心有恐怖主义使用魔法胡乱杀人，大街上严重火灾。消防员{user}出动后，指挥消防车停在安全区域，远距离洒水救火。{user}这种贪生怕死的举动，被新闻记者报道，然后{user}就被上级“临时工”处理掉了……'
        },
        {
            text: '冲进火场，救援生还者',
            result: '市中心有恐怖主义使用魔法胡乱杀人，大街上严重火灾。消防员{user}来到现场，救出一具具烧焦的尸体，无人生还。'
        },
        {
            text: '先开车撞死恐怖分子',
            result: '市中心有恐怖分子使用魔法胡乱杀人，大街上严重火灾。{user}开着消防车来到现场，他看到了这名恐怖分子，踩尽了油门，飞速向这名恐怖分子撞去。恐怖分子沉溺与破坏，根本没注意有一辆车向他撞去，嘭的一声，这名恐怖分子被消防车击毙。{user}勇敢机智的行为受到了表扬，'
        }
            ]
        },
        'dbrs_281': {
            title: '消防员：救援',
            description: '一座10多层的大楼大火，{user}第一事件赶到现场，刚刚接好工具，准备展开救援。突然在楼顶有一个人在呼叫，大楼随时都会崩塌，{user}必须在短时间内选择救援这个人的方法！',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '走楼梯救人！',
            result: '一座10多层的大楼大火，{user}第一事件赶到现场，发现在楼顶有一个生还者在喊救命。{user}立马动身走进大楼去救这个人，当{user}刚走进门口，整个大楼塌了下来……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '将高压水枪接到鞋子上，喷水飞起来，在空中接住这个人。',
            result: '一座10多层的大楼大火，{user}第一事件赶到现场，发现在楼顶有一个生还者在喊救命。{user}见时间紧急，灵机一动将高压水枪系到鞋子上，使用喷水的力飞到了屋顶，把生还者抱在怀里，然后又飞了下来。这个生还者脸红红地偎依在{user}怀里，就这样{user}成功地拥有了另一半。',
            add_tags: ['恋爱中']
        },
        {
            text: '展开云梯救人！',
            result: '一座10多层的大楼大火，{user}第一事件赶到现场，发现在楼顶有一个人在呼叫，{user}登上云梯，然后慢慢地靠近楼顶。云梯太慢了，等{user}靠近生还者，生还者已经全身烧着，挣扎着在痛苦中死去。'
        },
        {
            text: '展开气垫，叫他跳下来',
            result: '一座10多层的大楼大火，{user}第一事件赶到现场，发现在楼顶有一个人在呼叫，大楼随时都会崩塌，{user}在楼底展开气垫，叫这个人跳下来。但无论怎么叫这个人都没有跳，最后烧死在楼顶。'
        }
            ]
        },
        'dbrs_283': {
            title: '参军：特长',
            description: '{user}在兵营里，最擅长的是___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '八百里开外一枪干掉鬼子的机枪手',
            result: '你做出了选择。',
            add_tags: ['神枪手']
        },
        {
            text: '到处留种',
            result: '你做出了选择。',
            add_tags: ['高情商']
        },
        {
            text: '徒手撕一切',
            result: '你做出了选择。',
            add_tags: ['撕裂之手']
        }
            ]
        },
        'dbrs_284': {
            title: '卫国战争',
            description: '万万没想到，在{user}服兵役的期间，竟然开战了。国界边上一股反动势力勾结领国，对国家发动了侵略战争。{user}被派到了前线。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_288': {
            title: '训练意外',
            description: '{user}在训练中，扔手榴弹时没扔出去，落在了训练用的战壕中。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '跑过去把手榴弹抱住',
            result: '{user}在训练中，扔手榴弹时没扔出去，落在了训练用的战壕中，{user}跑过去抱住手榴弹，手榴弹爆炸将{user}炸开了花,{user}的宝贵生命就这样糟蹋在他手上。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '原地扑倒',
            result: '{user}在训练中，扔手榴弹时没扔出去，落在了训练用的战壕中，炸死了在场的所有人。因为没有目击证人，所以{user}只是被当作事故幸存者。',
            death_flag: true,
            death_reason: '=NAME=在训练中，扔手榴弹时没扔出去，落在了训练用的战壕中，炸死了在场的所有人。因为没有目击证人，所以=NAME=只是被当作事故幸存者。'
        },
        {
            text: '大叫：“FIRE IN THE HOLD!”',
            result: '{user}在训练中，扔手榴弹时没扔出去，落在了训练用的战壕中，炸死了在场的所有人。因为没有目击证人，所以{user}只是被当作事故幸存者。',
            death_flag: true,
            death_reason: '=NAME=在训练中，扔手榴弹时没扔出去，落在了训练用的战壕中，炸死了在场的所有人。因为没有目击证人，所以=NAME=只是被当作事故幸存者。'
        }
            ]
        },
        'dbrs_291': {
            title: '军人：办公室',
            description: '{user}到了军区办公室后，整天的工作，就是一杯茶、一包烟、一张报纸过一天。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_292': {
            title: '警察：偷狗车',
            description: '{user}巡逻时，发现有一辆银色面包车，上面载满了狗。心想这一定是偷狗团伙！',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '掏枪，射击车辆',
            result: '{user}巡逻时，发现有一辆银色面包车，上面载满了狗。心想这一定是偷狗团伙！{user}立马掏枪射击汽车，汽车中了机枪，突然爆炸，熊熊燃烧。不管是不是偷狗团伙的车，总之{user}坐牢了。'
        },
        {
            text: '尝试截停车辆',
            result: '{user}巡逻时，发现有一辆银色面包车，上面载满了狗。心想这一定是偷狗团伙！'
        },
        {
            text: '不要多管闲事',
            result: '{user}巡逻时，发现有一辆银色面包车，上面载满了狗。心想这一定是偷狗团伙！{user}没有去管。'
        }
            ]
        },
        'dbrs_295': {
            title: '鲤鱼',
            description: '{user}在湖边散步，看到有一条红鲤鱼跳出了岸边，非常生猛。',
            priority: 2,
            trigger_conditions: { age_range: [20, 30] },
            options: [
        {
            text: '捡回家吃了',
            result: '{user}捡了一条生猛的鲤鱼回家清蒸，吃饭就中毒送院了。{user}第一次知道鲤鱼原来是有毒的。',
            effects: { health: -10 }
        },
        {
            text: '放回水里',
            result: '{user}在湖边散步，看到有一条红鲤鱼跳出了岸边，非常生猛。{user}拿起鱼，放了回去。感觉干了件好事，浑身舒畅。'
        },
        {
            text: '无视',
            result: '你做出了选择。'
        },
        {
            text: '某个奸商放生的吧',
            result: '{user}在湖边散步，看到有一条红鲤鱼跳出了岸边，非常生猛。{user}走过去把它踩死了，因为他知道肯定又是哪个奸商放生的鲤鱼。',
            death_flag: true,
            death_reason: '=NAME=在湖边散步，看到有一条红鲤鱼跳出了岸边，非常生猛。=NAME=走过去把它踩死了，因为他知道肯定又是哪个奸商放生的鲤鱼。'
        },
        {
            text: '投掷精灵球',
            result: '{user}在湖边散步，看到有一条红鲤鱼跳出了岸边，非常生猛。{user}向鲤鱼抛出精灵球，收了这条鲤鱼。',
            add_tags: ['小精灵鲤鱼']
        }
            ]
        },
        'dbrs_389': {
            title: 'SWAT特种部队',
            description: '{user}在警察部门里表现优秀，成绩突出。收到了特种部队SWAT的加入邀请。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '接受',
            result: '{user}在警察部门里表现优秀，成绩突出。受邀成为了一名SWAT。'
        },
        {
            text: '委婉拒绝',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_334': {
            title: '求婚',
            description: '在这一年的冬天，{user}决定向相恋多年的女友求婚了。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55], required_tags: ['男性'] },
            options: [
        {
            text: '在繁华的闹市区当众向女友求婚',
            result: '{user}在繁华的闹市区，当众跪下，向女友求婚。女友惊喜若狂，红着脸在小跳，嘴里不断地答应。然而，不知什么时候，周围流动的人潮不见了，变成了一帮穿着遮头风衣的FFF异教徒。最后，在FFF团员们的祝福声中，{user}与对象被烧成了灰烬。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '召集好朋友准备一场表演，给女朋友一个惊喜，同时求婚',
            result: '{user}召集一帮好朋友，准备一场表演，要给女朋友一个惊喜，同时求婚。表演当天，{user}万万没想到这些朋友中有{user}女朋友曾经暗恋却失散多年的男神，{user}的女朋友十分惊喜，果断的抛弃了你和她男神过上了幸福的生活。',
            remove_tags: ['恋爱']
        },
        {
            text: '写一封《结婚后计划书》给女友',
            result: '{user}有一个相恋多年的女友，{user}想要给女友安全感，于是写了《结婚后计划书》，来向女友求婚。女友看了，勉勉强强答应了结婚……',
            add_tags: ['结婚'],
            remove_tags: ['恋爱']
        },
        {
            text: '200万字的情书',
            result: '{user}有一个相恋多年的女友，{user}决定要将他的爱意，以不同的语气，不同的姿势，配上不同的背景，写成了200万字的情书。{user}的女友非常感动，然后拒绝了{user}……“原来你这段时间不理我就是搞这些没用的东西。”她说。',
            remove_tags: ['恋爱']
        },
        {
            text: '存钱，买钻戒，偷偷放进蛋糕中',
            result: '{user}拿出自己的部分积蓄，购买了女朋友平时一直絮叨很久的那个品牌的钻戒，偷偷地放进了给她准备的蛋糕中。{user}的女朋友并没有发现这枚钻戒，吃完了蛋糕都没发现戒指……不过历经千辛万苦，这枚戒指最终还是交到了她的手中，这个小插曲并没有影响他们的感情，他们结婚了。',
            add_tags: ['结婚'],
            remove_tags: ['恋爱'],
            death_flag: true,
            death_reason: '=NAME=拿出自己的部分积蓄，购买了女朋友平时一直絮叨很久的那个品牌的钻戒，偷偷地放进了给她准备的蛋糕中。=NAME=的女朋友并没有发现这枚钻戒，吃完了蛋糕都没发现戒指……不过历经千辛万苦，这枚戒指最终还是交到了她的手中，这个小插曲并没有影响他们的感情，他们结婚了。'
        }
            ]
        },
        'dbrs_378': {
            title: '彩票',
            description: '彩票站门口的地上，{user}捡到一张彩票。{user}一看，竟然是中了五千万元的彩票。',
            priority: 2,
            trigger_conditions: { age_range: [30, 31] },
            options: [
        {
            text: '私吞',
            result: '{user}捡到一张中了五千万元的彩票。{user}看看四周无人，把彩票私吞了。……“好难吃。”{user}想。'
        },
        {
            text: '交给警察局',
            result: '{user}捡到一张中了五千万元的彩票。{user}拿着彩票，交给了警察叔叔。警察叔叔摸摸{user}的头，说了句多谢。'
        },
        {
            text: '无视',
            result: '{user}捡到一张中了五千万元的彩票。“哪有这么大的蛤蟆随街跳，肯定是骗纸。”{user}想着，把彩票丢了。'
        },
        {
            text: '交给售票站的人',
            result: '{user}捡到一张中了五千万元的彩票。{user}把彩票拿去彩票站，尝试兑奖，竟然真的有钱拿。',
            effects: { money: 10 }
        }
            ]
        },
        'dbrs_392': {
            title: '交警：车祸',
            description: '{user}被上级派往ooxx桥办理一起交通事故。经调查得知粤迪车主酒驾逆向车道行驶与一辆木田相撞，木田车主重伤昏迷不行已送往医院，此时你会？',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '一个人处理不了，向上通报',
            result: '{user}被上级派往ooxx桥办理一起交通事故。现场情况复杂，{user}决定打电话上报，请求支援。交警大队队长在电话里大骂一句，“你这个废物！”然后{user}被炒鱿鱼了。'
        },
        {
            text: '抓捕粤迪车主',
            result: '{user}被上级派往ooxx桥办理一起交通事故。{user}处理得非常妥当，受到了上级的赞赏。'
        },
        {
            text: '抓捕木田车主',
            result: '{user}被上级派往ooxx桥办理一起交通事故。{user}处理失当，导致人员死亡。{user}承受了法律的责任，被交警大队剔除了。还被抓进了大牢。',
            death_flag: true,
            death_reason: '=NAME=被上级派往ooxx桥办理一起交通事故。=NAME=处理失当，导致人员死亡。=NAME=承受了法律的责任，被交警大队剔除了。还被抓进了大牢。'
        },
        {
            text: '接受粤迪车主贿赂并放了他',
            result: '{user}在办理一起交通事故中，收了肇事司机不少的钱，放了肇事司机。',
            effects: { money: 3 }
        }
            ]
        },
        'dbrs_393': {
            title: '交警：梳理交通',
            description: '{user}被派到城中心区，处理一起车祸造成的严重堵车。维持交通秩序。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '用大声公发号施令',
            result: '{user}被派到城中心区，处理一起车祸造成的严重堵车。维持交通秩序。{user}用大声公发号施令，本来混乱的交通反而变得更乱了。{user}还被高处落下的花盘砸到了脑袋，进了医院。',
            effects: { health: -45 }
        },
        {
            text: '站在高处比划手势指挥',
            result: '{user}被派到城中心区，处理一起车祸造成的严重堵车。维持交通秩序。{user}站在一辆车的车顶，比划手势指挥交通。被那辆车的车主拖下来毒打了一顿，进了医院。',
            effects: { health: -35 }
        },
        {
            text: '躺在马路上强行引导汽车',
            result: '{user}被派到城中心区，处理一起车祸造成的严重堵车。维持交通秩序。为了避免车辆胡乱转道，{user}躺在了单实线上，然而有的司机根本没看到{user}，照样跨越实线转道，{user}被无数汽车碾过，与马路融为了一体。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '给堵车的每辆汽车都开一张违法停车的罚单',
            result: '{user}被派到城中心区，处理一起车祸造成的严重堵车。{user}看到这么多车堵在马路中心不动，灵机一动的他，拿出了胡乱停车的罚单，给每一辆车都贴上了。这年的业绩都不用担忧了。'
        }
            ]
        },
        'dbrs_396': {
            title: '警察：调遣',
            description: '交警大队缺人，{user}收到上级的调遣请求。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
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
        },
        'dbrs_394': {
            title: '案件：聚众闹事',
            description: '{user}巡逻中，看到两名中年男子聚众闹事，当街掀路人裙子。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '开枪击毙',
            result: '{user}巡逻中，看到两名中年男子聚众闹事，当街掀路人裙子。{user}掏出警枪，砰砰两枪把人击毙。{user}的果敢行动，受到了市民的赞赏，上级也因此表扬了{user}。'
        },
        {
            text: '上前阻止',
            result: '{user}巡逻中，看到两名中年男子聚众闹事，当街掀路人裙子。{user}走上前阻止，被这2名男子强行脱裤，当街凌辱。',
            add_tags: ['菊花残']
        },
        {
            text: '拍照片发朋友圈',
            result: '{user}巡逻中，看到两名中年男子聚众闹事，当街掀路人裙子。{user}拿起手机拍照，发了一个盆友圈，这个盆友圈在网上受到了热议。{user}也因失职，被警察局扫地出门。',
            add_tags: ['交网友']
        }
            ]
        },
        'dbrs_402': {
            title: '南极勘探',
            description: '{user}参与一次南极勘察，团队发现一个巨大的宇宙飞船残骸，{user}___',
            priority: 2,
            trigger_conditions: { age_range: [20, 40] },
            options: [
        {
            text: '进入内部查看',
            result: '{user}参与一次南极勘察，团队发现一个巨大的宇宙飞船残骸。{user}决定进去看看，拿棍子撬门。飞船门被{user}撬开的同时，触发了警报，防御系统开动高科技的武器把{user}炸成了粉末。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '让队友去查看',
            result: '{user}参与一次南极勘察，团队发现一个巨大的宇宙飞船残骸。{user}让队友进去查看飞船内部，队友进去后，就再也没有出来。{user}赶紧逃跑。'
        },
        {
            text: '逃离',
            result: '{user}参与一次南极勘察，团队发现一个巨大的宇宙飞船残骸。大家感觉此地不宜久留，决定先撤退。等{user}带着更多的人来了，发现残骸已经不见踪影了！'
        },
        {
            text: '拍照发盆友圈',
            result: '{user}参与一次南极勘察，团队发现一个巨大的宇宙飞船残骸，{user}对着残骸拍照，发盆友圈。还没发出去，他的手机就爆炸了。{user}受了重伤，团队赶紧撤退。',
            effects: { health: -55 }
        },
        {
            text: '对着残骸做瓦肯人问候手势',
            result: '{user}参与一次南极勘察，团队发现一个巨大的宇宙飞船残骸，{user}对着残骸做了一个瓦肯人问候手势。从残骸里竟然走出若干个高大的外星人，他们也对着{user}做同样的手势。'
        }
            ]
        },
        'dbrs_412': {
            title: '男友故乡M78',
            description: '{user}的男友问她，想不想跟他去他的故乡，永远幸福快乐地生活下去。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '一口答应',
            result: '再也没有人见过{user}，{user}的朋友们传说：{user}被外星人抓走了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '十动然拒',
            result: '{user}的男友问她，想不想跟他去他的故乡，永远幸福快乐地生活下去。{user}很感动，但是还是拒绝了他。“美男子什么的，做炮友还行，结婚就不要了。”'
        },
        {
            text: '并不想',
            result: '{user}拒绝了外星的男友，他们分手了。',
            remove_tags: ['恋爱']
        }
            ]
        },
        'dbrs_437': {
            title: '火焰之召唤',
            description: '有一天，一群蒙面人闯入了他的房间，其中一个像是领头的人，头上写着FFF3个字母，他问{user}：“你是否愿意加入FFF团，烧遍天下情侣，永不做叛徒。”',
            priority: 2,
            trigger_conditions: { age_range: [30, 40], required_tags: ['男性'] },
            options: [
        {
            text: '”啊？“',
            result: '有一天，一群蒙面人闯入了他的房间，没等{user}反应过来，那帮人留下了一个盒子就走了。{user}打开盒子，里面有一套崭新的制服，汽油，火机，还有写着{user}名字的FFF团员卡。'
        },
        {
            text: '拒绝加入',
            result: '有一天，一群蒙面人闯入了他的房间，要挟{user}加入他们的邪教。{user}勇敢地拒绝了他们。'
        },
        {
            text: '终于找到组织了',
            result: '{user}加入了FFF团'
        },
        {
            text: '我有对象',
            result: '不知好歹的{user}当着FFF团团员面说自己有对象，引起了公愤。团员大喊：“烧死这个现充”同伴们愣了一下，纷纷举起火把，将汽油倒在{user}身上。随着一声“Fire in the hold！”{user}被烧得灰都不剩。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_444': {
            title: '程序员的根基',
            description: '32位系统中，long double* 类型数据占用的内存是___',
            priority: 2,
            trigger_conditions: { age_range: [20, 60] },
            options: [
        {
            text: '4mb',
            result: '{user}的程序基础非常差，导致他写出来的东西经常被同事喷，最后还被老板炒鱿鱼。'
        },
        {
            text: '128kb',
            result: '{user}的程序基础非常差，导致他写出来的东西经常被同事喷，最后还被老板炒鱿鱼。'
        },
        {
            text: '40Bytes',
            result: '{user}的程序基础非常差，导致他写出来的东西经常被同事喷，最后还被老板炒鱿鱼。'
        },
        {
            text: '4Mpbs',
            result: '{user}的程序基础非常差，导致他写出来的东西经常被同事喷，最后还被老板炒鱿鱼。'
        },
        {
            text: 'sizeof(long double)',
            result: '{user}的程序基础非常差，根本不能工作。老板终于忍受不了{user}，炒了他。'
        },
        {
            text: '4Bytes',
            result: '{user}基础非常扎实，程序能力在公司里数一数二。是公司里的主心骨。'
        },
        {
            text: '2Bytes',
            result: '{user}打出的程序效率超差，同事都很怕跟{user}一起做东西。'
        },
        {
            text: '1字节',
            result: '{user}打出的程序效率超差，同事都很怕跟{user}一起做东西。'
        },
        {
            text: '8kb',
            result: '{user}的程序基础非常差，导致他写出来的东西经常被同事喷，最后还被老板炒鱿鱼。'
        },
        {
            text: '两字节',
            result: '{user}的程序基础非常差，根本不能工作。老板终于忍受不了{user}，炒了他。'
        },
        {
            text: '8Bytes',
            result: '{user}打出的程序效率超差，同事都很怕跟{user}一起做东西。'
        },
        {
            text: '8字节',
            result: '{user}打出的程序效率超差，同事都很怕跟{user}一起做东西。'
        },
        {
            text: '8Mpbs',
            result: '{user}的程序基础非常差，根本不能工作。老板终于忍受不了{user}，炒了他。'
        },
        {
            text: '8TB',
            result: '{user}的程序基础非常差，导致他写出来的东西经常被同事喷，最后还被老板炒鱿鱼。'
        },
        {
            text: '80Bytes',
            result: '{user}的程序基础非常差，导致他写出来的东西经常被同事喷，最后还被老板炒鱿鱼。'
        },
        {
            text: '写辞职信',
            result: '{user}根本不会做程序，在同事的一片嘲笑声中，收拾包袱，灰溜溜地走人了。'
        }
            ]
        },
        'dbrs_445': {
            title: '解决错误',
            description: '公司来了一个新手程序，他做的一个模块不能正常工作，弹出内存不可读取错误。{user}受托来解决这个问题。',
            priority: 2,
            trigger_conditions: { age_range: [20, 60] },
            options: [
        {
            text: '断点调试',
            result: '{user}被老板指派去解决一个非常繁琐的问题。{user}不断修改、调试，连续工作48小时后，{user}倒在了工作台上，猝死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=被老板指派去解决一个非常繁琐的问题。=NAME=不断修改、调试，连续工作48小时后，=NAME=倒在了工作台上，猝死了。'
        },
        {
            text: '就别人写的代都是垃圾，重写一次',
            result: '{user}被老板指派去解决一个非常繁琐的问题。{user}看了一眼这个代码，立马关闭了。然后自己花了点时间，重新写了一个新的出来，问题解决。'
        },
        {
            text: '写辞职信',
            result: '{user}被老板指派去收拾别人的烂摊子，{user}很不爽，就辞职了。'
        }
            ]
        },
        'dbrs_459': {
            title: '研究：SCP-173',
            description: '在SCP实验室，{user}准备着手研究SCP-173的___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '新陈代谢',
            result: '在SCP实验室研究了一年，{user}终于发现这个SCP-173是会排泄的！'
        },
        {
            text: '躯体构成',
            result: '经过长时间的观察，仔细的研究，严谨的分析，{user}最后才接受了一个事实——SCP-173躯体内部无任何生命驱动或者器官，躯体由建筑材料构成。'
        }
            ]
        },
        'dbrs_460': {
            title: '危楼',
            description: '{user}在查水表过程中，发现某个旧小区的某大楼有一处非常厉害的裂痕，从地基裂到了楼顶。大楼随时都会倒下。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '疏散群众',
            result: '{user}在查水表过程中，发现某个旧小区的某大楼有一处非常厉害的裂痕，从地基裂到了楼顶。大楼随时都会倒下。{user}赶紧挨门挨户拍门，疏散住户。所有人都半信半疑地出来后，等了半个小时大楼还是没塌下来。住户的耐心没有了，有一个人带头把{user}打趴，然后住户们群涌而上，把{user}揍了一顿，各自回家了。'
        },
        {
            text: '不理会',
            result: '你做出了选择。'
        },
        {
            text: '记录，向上级提交报告',
            result: '{user}在查水表过程中，发现某个旧小区的某大楼有一处非常厉害的裂痕，从地基裂到了楼顶。大楼随时都会倒下。{user}把这一事情记录在报告中，向上级报告。直到过了半年后，大楼真的坍塌了……死了100多人。政府才开始在废墟拉起警戒线，在瓦砾中救人。',
            death_flag: true,
            death_reason: '=NAME=在查水表过程中，发现某个旧小区的某大楼有一处非常厉害的裂痕，从地基裂到了楼顶。大楼随时都会倒下。=NAME=把这一事情记录在报告中，向上级报告。直到过了半年后，大楼真的坍塌了……死了100多人。政府才开始在废墟拉起警戒线，在瓦砾中救人。'
        },
        {
            text: '拍照发盆友圈',
            result: '你做出了选择。',
            add_tags: ['交网友']
        }
            ]
        },
        'dbrs_461': {
            title: '查水表与国际接轨',
            description: '在这一年的10月14日，第46个世界标准日。申国水表业为争取在国际标准上的话语权，大力推动标准化的发展，申国水表标准做了多项修改。就连查水表与国际接轨，{user}现在查水表都必须先用6国语言向住户问好',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_536': {
            title: '选择道路',
            description: '上级让{user}选择工作意向：',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '水利部门',
            result: '你做出了选择。'
        },
        {
            text: '国家新能源发电部门',
            result: '你做出了选择。'
        },
        {
            text: '铁路部门',
            result: '你做出了选择。'
        },
        {
            text: '申国证书证明部门',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_540': {
            title: '比卡丘猎人',
            description: '{user}为国家新能源部门工作，他是一名比卡丘猎人，被分配到一片草坪中，负责捕捉里面的野生的比卡丘。{user}每天的工作就是不断在草坪中跑步，遇到野生的比卡丘出现，就丢精灵球驯服。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_543': {
            title: '新能源技术员',
            description: '{user}成为了新能源部门的技术员。他的工作是将捕抓回来的比卡丘放进笼子，并与发电设备链接。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_545': {
            title: '新能源技术员：工作意外',
            description: '{user}在一次处理比卡丘的过程中，错把针管正负极插反了，比卡丘在笼子里痛苦不堪地挣扎。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '使用仪器杀死比卡丘',
            result: '{user}在一次处理比卡丘的过程中，错把针管正负极插反了，比卡丘在笼子里痛苦不堪地挣扎。{user}立马按下仪器的紧急按钮，一条1米长的尖刺伸进了笼子，插进了比卡丘的头部，迅速结束了它的生命、它的痛苦。这次处理非常果断，避免了部门的一次灾难，{user}受到了上级的表扬。'
        },
        {
            text: '立马把针管拔出来(危险)',
            result: '{user}在一次处理比卡丘的过程中，错把针管正负极插反了，比卡丘在笼子里痛苦不堪地挣扎。{user}立马打开笼子，尝试手动拔出2条针管，针管的电压非常高，烧熔了{user}的手套，然后他的手立马被针管吸附柱，高压电通过他的身体。{user}吐着白沫，软软地瘫在了地上，死了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在一次处理比卡丘的过程中，错把针管正负极插反了，比卡丘在笼子里痛苦不堪地挣扎。=NAME=立马打开笼子，尝试手动拔出2条针管，针管的电压非常高，烧熔了=NAME=的手套，然后他的手立马被针管吸附柱，高压电通过他的身体。=NAME=吐着白沫，软软地瘫在了地上，死了。'
        },
        {
            text: '视而不见，逃避责任',
            result: '{user}在一次处理比卡丘的过程中，错把针管正负极插反了，比卡丘在笼子里痛苦不堪地挣扎。{user}害怕被上级责骂，选择视而不见，想逃避这个责任。正负极反接的这个比卡丘持续地输出相反的能量，对整个新能源系统产生了毁灭性的打击。经过2天后，新能源系统变得不稳定，爆炸起火，部门内的领导、技术员、工人都死于这次事故中，包括{user}。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_544': {
            title: '新能源技术员',
            description: '{user}成为了新能源部门的技术员。他的工作是将捕抓回来的比卡丘放进笼子，并与发电设备链接。{user}需要将两条长约5厘米的针管插进比卡丘的两个脸颊中。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        },
        {
            text: '太残忍了，辞职不干',
            result: '{user}忍受不了新能源部门的虐待动物的做法，辞职不干了。'
        }
            ]
        },
        'dbrs_541': {
            title: '比卡丘猎人',
            description: '{user}每天的工作就是在草坪中寻找野生的比卡丘。有一天，{user}终于在草坪中遭遇到了一只野生的比卡丘！',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '掏出精灵球往它的脑袋砸！',
            result: '{user}每天的工作就是在草坪中寻找野生的比卡丘。有一天，{user}终于在草坪中遭遇到了一只野生的比卡丘！{user}立马掏出精灵球往它的脑袋砸！精灵球狠狠地砸中了野生比卡丘，比卡丘发怒了，从脸颊中射出十万伏特电压的电弧，击穿了{user}身体……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '伸手抚摸它的下巴，尝试驯服',
            result: '{user}每天的工作就是在草坪中寻找野生的比卡丘。有一天，{user}终于在草坪中遭遇到了一只野生的比卡丘！{user}表现得非常专业，伸出手来回抚摸野生比卡丘的下巴。野生比卡丘立马变得温顺，用身体蹭向{user}。驯服后，{user}拿出精灵球，收服了这个比卡丘。'
        },
        {
            text: '戴上鸭嘴帽，假扮成它的主人',
            result: '{user}每天的工作就是在草坪中寻找野生的比卡丘。有一天，{user}终于在草坪中遭遇到了一只野生的比卡丘！{user}学着电视桥段，戴着鸭嘴帽，想假扮比卡丘的主人，诱惑野生的比卡丘进入自己的精灵球。不知道为何，这个野生的比卡丘被激怒了，从脸颊中射出十万伏特电压的电弧，击穿了{user}身体……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_546': {
            title: '新能源饲养员',
            description: '{user}在新能源部门上班，他的工作是比卡丘饲养员，负责喂饱笼子里的比卡丘。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_547': {
            title: '新能源饲养员',
            description: '新能源部门中有4000多只比卡丘，每天需要吃3餐，{user}的饮食模块设计是___',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '在市场上收购食物残渣，搅拌，加工成为饲料',
            result: '新能源部门中有4000多只比卡丘，每天需要吃3餐，{user}参考经典畜牧业，在市场上收购食物残渣，搅拌，加工成为饲料。节省了大量的成本，比卡丘吃着这些烂饭溪水，还非常高兴，发电量不断攀升，天天向上。上级部门非常赏识{user}，决定提升{user}为管理层。'
        },
        {
            text: '批量购买普通的猫粮',
            result: '新能源部门中有4000多只比卡丘，每天需要吃3餐，{user}的饮食模块设计是喂食猫粮。批量购买猫粮，花费了一大笔经费。'
        },
        {
            text: '水果(维生素)、猪肉(蛋白,热量)、米饭(糖)',
            result: '你做出了选择。'
        },
        {
            text: '只喂水',
            result: '新能源部门中有4000多只比卡丘，每天需要吃3餐，{user}只给这些比卡丘喝水，没有食物。比卡丘长期处于饥饿状态，终于集体罢工。它们打翻喂食的水槽，水泼洒了一地，然后往水里输电，电死了它们的饲养员。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '新能源部门中有4000多只比卡丘，每天需要吃3餐，=NAME=只给这些比卡丘喝水，没有食物。比卡丘长期处于饥饿状态，终于集体罢工。它们打翻喂食的水槽，水泼洒了一地，然后往水里输电，电死了它们的饲养员。'
        },
        {
            text: '草、叶子',
            result: '新能源部门中有4000多只比卡丘，每天需要吃3餐，{user}的饮食模块设计是喂草和叶子。然而比卡丘根本就不吃这些……上级对{user}的工作非常不满，炒掉了{user}。'
        }
            ]
        },
        'dbrs_581': {
            title: '打折狂魔',
            description: '有一天，有一个笑容满面的胖子大叔当街摆摊，正在向未成年兜售他的正版游戏，打折兜售，{user}也凑热闹走过去。这个胖子的衬衫上挂着工作证，上面写着姓名是：G fat。所有正版游戏-95%。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [25, 30] },
            options: [
        {
            text: '情不自禁地打开自己的钱包，不买不是人。',
            result: '你做出了选择。',
            add_tags: ['电子海洛因']
        },
        {
            text: '情不自禁打开自己的钱包，每个游戏都购买一次。并打电话向自己的好友宣传这里。',
            result: '你做出了选择。',
            add_tags: ['电子海洛因']
        },
        {
            text: '买买买买买买买买',
            result: '你做出了选择。',
            add_tags: ['电子海洛因']
        },
        {
            text: '高呼G胖万岁，然后买下每一个游戏。',
            result: '你做出了选择。',
            add_tags: ['电子海洛因']
        },
        {
            text: '离开',
            result: '有一天，有一个笑容满面的胖子大叔当街摆摊，正在向未成年兜售他的正版游戏，打折兜售，{user}也凑热闹走过去。这个胖子的衬衫上挂着工作证，上面写着姓名是：G fat。所有正版游戏-95%。{user}想离开，但是G胖似乎对自己的钱包有一股磁力。搜的一声，{user}的钱包就从他的口袋里串出来飞到了G胖的手上，钱包里的银行卡不断地刷卡消费。{user}的手机被“感谢您在 Stream 上的购买！”这样的邮件刷屏。',
            add_tags: ['电子海洛因']
        },
        {
            text: '买了不玩',
            result: '有一天，有一个笑容满面的胖子大叔当街摆摊，正在向未成年兜售他的正版游戏，打折兜售，{user}也凑热闹走过去。这个胖子的衬衫上挂着工作证，上面写着姓名是：G fat。所有正版游戏-95%。{user}忍不住买了一堆打折游戏，疯狂地喜加一后，根本没有去玩过这些游戏。'
        }
            ]
        },
        'dbrs_611': {
            title: '终结者',
            description: '{user}在早上扫大街的时候，突然出现一阵乱风，并凭空出现了电弧，电光火石瞬间，{user}的面前出现了一个裸体的强壮男子。{user}刚刚扫好的树叶飞得满街都是。',
            priority: 2,
            trigger_conditions: { age_range: [20, 55] },
            options: [
        {
            text: '扔下扫把逃命',
            result: '{user}在早上扫大街的时候，突然出现一阵乱风，并凭空出现了电弧，电光火石瞬间，{user}的面前出现了一个裸体的强壮男子。{user}刚刚扫好的树叶飞得满街都是。{user}立马慌了，扔下扫把抱头逃命。'
        },
        {
            text: '过去敲敲他的肩膀',
            result: '{user}在早上扫大街的时候，突然出现一阵乱风，并凭空出现了电弧，电光火石瞬间，{user}的面前出现了一个裸体的强壮男子。{user}刚刚扫好的树叶飞得满街都是。{user}走过去敲了敲这个人的肩膀，刚想说老兄你哪来的。这个男子以迅雷不及掩耳之势，剥光了{user}的衣服，穿在了自己身上，然后默不作声地走了。'
        },
        {
            text: '弄散了垃圾，找他算账',
            result: '{user}在早上扫大街的时候，突然出现一阵乱风，并凭空出现了电弧，电光火石瞬间，{user}的面前出现了一个裸体的强壮男子。{user}刚刚扫好的树叶飞得满街都是。{user}非常生气，走上前用扫把打这个裸体的男子。这个男子被打烦了，转头一个右勾拳把{user}的头打爆了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_726': {
            title: '拍卖会',
            description: '有一位相当有钱的富商在家中病逝。因为他没有近亲或者后代，所以他的家产被拍卖，拍卖会非常大型。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [30, 45] },
            options: [
        {
            text: '好奇，去看看',
            result: '你做出了选择。',
            add_tags: ['拍卖会时间']
        },
        {
            text: '没有兴趣',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_814': {
            title: '豆腐脑口味',
            description: '{user}喜欢吃___的豆腐脑。',
            priority: 2,
            trigger_conditions: { age_range: [20, 50] },
            options: [
        {
            text: '甜',
            result: '你做出了选择。',
            add_tags: ['甜党']
        },
        {
            text: '咸',
            result: '你做出了选择。',
            add_tags: ['咸党']
        },
        {
            text: '酸',
            result: '你做出了选择。'
        },
        {
            text: '辣',
            result: '你做出了选择。',
            add_tags: ['痔疮']
        },
        {
            text: '生',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_878': {
            title: '甲硫醇',
            description: '{user}在饭店厨房里闻到了甲硫醇的味道，还听到“丝丝”的奇怪声音。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [20, 30] },
            options: [
        {
            text: '不理睬',
            result: '饭店的厨房里漏煤气了，{user}却不知道，最后一氧化碳中毒死亡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '饭店的厨房里漏煤气了，=NAME=却不知道，最后一氧化碳中毒死亡。'
        },
        {
            text: '抽根烟压压惊',
            result: '{user}在{age}岁的时候发生了意外事件。饭店的厨房里的煤气爆炸了，{user}被炸出了窗外，从16楼跌落身亡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '赶紧逃跑',
            result: '{user}在饭店的厨房里闻到了甲硫醇的味道，还听到“丝丝”的奇怪声音。{user}心想这肯定是漏煤气了，然后立马跑到了屋外，捡回了一条小命。'
        }
            ]
        },
        'dbrs_1041': {
            title: '升价',
            description: '{user}在一个面馆里吃完了一碗热干面。结账的时候，原价四元的面，老板要收五元。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [25, 60] },
            options: [
        {
            text: '乖乖给钱',
            result: '你做出了选择。',
            death_flag: true,
            death_reason: '{user}在一个面馆里吃完了一碗热干面。结账的时候，原价四'
        },
        {
            text: '把老板打一顿',
            result: '{user}在一个面馆里吃面，吃完一碗热干面后，结账的时候老板要多收一元钱，{user}拒绝给钱。把老板毒打了一顿就走了。',
            death_flag: true,
            death_reason: '{user}在一个面馆里吃完了一碗热干面。结账的时候，原价四'
        },
        {
            text: '砍死老板',
            result: '{user}在一个面馆里吃完了一碗热干面。结账的时候，原价四元的面，老板要收五元。{user}拒绝给钱。两人互不相让，大打出手。冲突中，{user}拿起厨房的刀向老板狂砍，砍死了老板。{user}因为冲动杀人，被判死刑。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在一个面馆里吃完了一碗热干面。结账的时候，原价四元的面，老板要收五元。=NAME=拒绝给钱。两人互不相让，大打出手。冲突中，=NAME=拿起厨房的刀向老板狂砍，砍死了老板。=NAME=因为冲动杀人，被判死刑。'
        },
        {
            text: '拨打12315',
            result: '{user}在一个面馆里吃完了一碗热干面。结账的时候，原价四元的面，老板要收五元。{user}拒绝给钱，并拨通了12315。没过多久，就有相关人员来查办了这家面馆。{user}得意洋洋地走了。',
            death_flag: true,
            death_reason: '=NAME=在一个面馆里吃完了一碗热干面。结账的时候，原价四元的面，老板要收五元。=NAME=拒绝给钱，并拨通了12315。没过多久，就有相关人员来查办了这家面馆。=NAME=得意洋洋地走了。'
        },
        {
            text: '报警',
            result: '{user}在一个面馆里吃完了一碗热干面。结账的时候，原价四元的面，老板要收五元。{user}拒绝给钱，并拨打了110报警。没过多久，就有相关人员来查办了这家面馆。{user}得意洋洋地走了。',
            death_flag: true,
            death_reason: '=NAME=在一个面馆里吃完了一碗热干面。结账的时候，原价四元的面，老板要收五元。=NAME=拒绝给钱，并拨打了110报警。没过多久，就有相关人员来查办了这家面馆。=NAME=得意洋洋地走了。'
        }
            ]
        },
        'dbrs_1289': {
            title: '楼顶的女孩',
            description: '{user}在自家楼顶发现有人要跳楼，{user}决定___',
            priority: 2,
            trigger_conditions: { age_range: [20, 45] },
            options: [
        {
            text: '上楼顶一探究竟',
            result: '你做出了选择。'
        },
        {
            text: '无视就好',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1291': {
            title: '大方进行曲',
            description: '有一次{user}在高速公路的巴士上坐车，车上突然响起了一段大方进行曲。',
            priority: 2,
            trigger_conditions: { age_range: [20, 60] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1514': {
            title: '22路公交车',
            description: '有一天，{user}坐着22路公交车。公交车正在通过一个大桥，突然司机跟一位乘客发生了争执，他们两个人厮打起来。公交车无人操控，处在失控边缘。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [30, 35] },
            options: [
        {
            text: '围观',
            result: '有一天，{user}坐着22路公交车。公交车正在通过一个大桥，突然司机跟一位乘客发生了争执，他们两个人厮打起来。公交车无人操控，处在失控边缘。{user}坐在座位上围观两人斗殴，还呐喊助威。厮打中司机错手打了一圈方向盘，巴士失控撞破了护栏，一头扎进了水流湍急的江水里。公交车沉到了70米深的江底，车上无人生还。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '看戏',
            result: '有一天，{user}坐着22路公交车。公交车正在通过一个大桥，突然司机跟一位乘客发生了争执，他们两个人厮打起来。公交车无人操控，处在失控边缘。{user}坐在座位上看戏，还呐喊助威。厮打中司机错手打了一圈方向盘，巴士失控撞破了护栏，一头扎进了水流湍急的江水里。公交车沉到了70米深的江底，车上无人生还。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '上前操控巴士',
            result: '有一天，{user}坐着22路公交车。公交车正在通过一个大桥，突然司机跟一位乘客发生了争执，他们两个人厮打起来。公交车无人操控，处在失控边缘。{user}立马冲到驾驶位，控制住方向盘，把巴士从失控挽救了回来，并停好在了路边。司机和另外一名乘客等车停好后，下车继续斗殴。'
        },
        {
            text: '把闹事乘客丢下车',
            result: '有一天，{user}坐着22路公交车。公交车正在通过一个大桥，突然司机跟一位乘客发生了争执，他们两个人厮打起来。公交车无人操控，处在失控边缘。{user}按开车门，把那位闹事的乘客丢了出去。公交车恢复正常行驶。'
        },
        {
            text: '砸窗跳车',
            result: '有一天，{user}坐着22路公交车。公交车正在通过一个大桥，突然司机跟一位乘客发生了争执，他们两个人厮打起来。公交车无人操控，处在失控边缘。{user}感觉不妙，抓起车窗边的紧急工具把窗户敲碎，跳车逃生。{user}重重摔在马路上，滚了几圈，手臂膝盖上都是擦伤。{user}刚跳车，公交车就失控掉进了江里，车上无人生还。',
            effects: { health: -10 }
        }
            ]
        },
        'dbrs_1654': {
            title: '集会',
            description: '同学邀请{user}参加一个名为“自由西”的社会性团体，去街头参加游行。参加者都会获得报酬，还能交到很多朋友。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [20, 22] },
            options: [
        {
            text: '决定参加',
            result: '你做出了选择。',
            add_tags: ['自由西团员']
        },
        {
            text: '拒绝参与',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
};