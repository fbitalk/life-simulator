// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - Infant年龄段事件（无触发标签）
// 事件数: 42
import { registerTags } from '../../data/tagRegistry.js';

registerTags({
    '幼儿': { color: 'normal' },
});

// 本文件涉及的标签注册
registerTags({
    '多病': { color: 'red' },
    '孤儿': { color: 'red' },
    '洞察': { color: 'purple' },
    '美貌': { color: 'pink' },
    '高情商': { color: 'pink' },
});

export const dbrsInfantEvents = {
    '幼儿': {
        events: {
        'dbrs_8': {
            title: '天赋',
            description: '{user}一出生就___',
            priority: 2,
            trigger_conditions: { age_range: [1, 4] },
            options: [
        {
            text: '会跟小动物说话',
            result: '你做出了选择。'
        },
        {
            text: '身体折起来，能自己吃到自己下面',
            result: '{user}一出生就身体折起来，能自己吃到自己下面。自从掌握了新姿势，蛋白质不流失、不蒸发、零浪费！',
            add_tags: ['身体协调']
        },
        {
            text: '能过目不忘',
            result: '你做出了选择。',
            add_tags: ['记忆']
        },
        {
            text: '学会说粗口',
            result: '你做出了选择。',
            add_tags: ['高情商']
        },
        {
            text: '酗酒',
            result: '你做出了选择。',
            effects: { health: -10 },
            add_tags: ['多病']
        },
        {
            text: '吸烟',
            result: '你做出了选择。',
            effects: { health: -10 },
            add_tags: ['烟瘾']
        },
        {
            text: '会飙歌',
            result: '你做出了选择。',
            add_tags: ['音乐', '音乐能力']
        },
        {
            text: '会素描',
            result: '你做出了选择。',
            add_tags: ['画画', '画图能力']
        },
        {
            text: '目的性很强',
            result: '你做出了选择。',
            add_tags: ['逻辑']
        },
        {
            text: '喜欢问5W1H',
            result: '你做出了选择。',
            add_tags: ['好奇']
        },
        {
            text: '会吹口哨',
            result: '你做出了选择。',
            add_tags: ['吹口哨高手']
        },
        {
            text: '是个熊孩子',
            result: '你做出了选择。',
            add_tags: ['熊孩子']
        }
            ]
        },
        'dbrs_9': {
            title: '幼儿日常',
            description: '{user}___',
            priority: 2,
            trigger_conditions: { age_range: [1, 4] },
            options: [
        {
            text: '喜欢看电视',
            result: '你做出了选择。',
            effects: { health: -5 },
            add_tags: ['近视眼']
        },
        {
            text: '对玩具非常着迷',
            result: '你做出了选择。'
        },
        {
            text: '喜欢玩耍',
            result: '你做出了选择。'
        },
        {
            text: '喜欢玩平板电脑',
            result: '你做出了选择。'
        },
        {
            text: '经常安静地呆着',
            result: '你做出了选择。',
            add_tags: ['内向']
        },
        {
            text: '喜欢撒币',
            result: '你做出了选择。',
            effects: { money: -2 },
            add_tags: ['败家']
        }
            ]
        },
        'dbrs_14': {
            title: '学走路',
            description: '{user}___的时候，突然学会了走路。',
            priority: 2,
            trigger_conditions: { age_range: [1, 4] },
            options: [
        {
            text: '闯祸了被人追着打',
            result: '你做出了选择。',
            add_tags: ['强壮']
        },
        {
            text: '吃脚趾',
            result: '你做出了选择。',
            add_tags: ['脑洞']
        },
        {
            text: '和狗抢东西吃',
            result: '你做出了选择。',
            add_tags: ['好胜']
        },
        {
            text: '模仿MJ',
            result: '你做出了选择。',
            add_tags: ['音乐', '音乐能力']
        },
        {
            text: '看手把手教程',
            result: '{user}看了看教走路的教程，就学会了走路。'
        },
        {
            text: '走路还用学？',
            result: '{user}一生下来就会走路，根本不用学',
            add_tags: ['身体协调']
        }
            ]
        },
        'dbrs_13': {
            title: '狼来了',
            description: '有一天，有一只人模人样的狼敲门，说是{user}的外婆。{user}独自在家，{user}___',
            priority: 2,
            trigger_conditions: { age_range: [1, 4] },
            options: [
        {
            text: '打电话报警',
            result: '你做出了选择。',
            add_tags: ['勇敢', '串门']
        },
        {
            text: '沏茶，迎客',
            result: '有一天，狼来了。{user}没有一点防范，把狼放了进来，还为它倒好了茶。“我不喝茶，谢谢。”狼说完就向{user}扑了过去，吃了个爽。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '摊摊手，说来盘昆特牌吧',
            result: '你做出了选择。',
            add_tags: ['逻辑', '串门']
        },
        {
            text: '装作不在家',
            result: '你做出了选择。',
            add_tags: ['胆小', '串门']
        },
        {
            text: '隔着门唱起了歌：我不上不上，我不上你的当~',
            result: '你做出了选择。',
            add_tags: ['音乐', '串门', '音乐能力']
        },
        {
            text: '识破骗局',
            result: '有一天，狼来了。{user}没有开门。他识破了狼的奸计，打电话报警，抓走了这只狼。',
            add_tags: ['串门']
        }
            ]
        },
        'dbrs_15': {
            title: '花干骨',
            description: '茅山道长跟{user}爸爸说:这个孩子随异香出生,容易招惹灾祸。\n{user}老爸听后狠下心，把{user}剁了……',
            priority: 2,
            trigger_conditions: { age_range: [1, 4] },
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
        'dbrs_16': {
            title: '课堂:算术课',
            description: '小华买了1支铅笔、2块橡皮、2个练习本，付了1元钱，售货员找给他5分钱。小华看了看1支铅笔的价钱是8分，请问售货员是否算错账了？',
            priority: 2,
            trigger_conditions: { age_range: [4, 10] },
            options: [
        {
            text: '条件不足此题无解',
            result: '{user}的智力似乎比平均值低。',
            remove_tags: ['洞察']
        },
        {
            text: '虽不明但觉错',
            result: '{user}总是能在试题中蒙中正确答案',
            add_tags: ['学习成绩']
        },
        {
            text: '我不屑做这种题目',
            result: '  “老师的地中海好丑，这就是学数学的下场。”{user}为了他头发的安危，决定不要学数学。',
            remove_tags: ['逻辑']
        },
        {
            text: '明显算错了，一支铅笔都要2元了，小华真是逗比',
            result: '{user}的智力似乎比平均值低。'
        },
        {
            text: '我觉得没错',
            result: '“试卷题目好长，根本不想看啊。”'
        },
        {
            text: '并不能证明算错',
            result: '{user}的智力似乎比平均值低。'
        },
        {
            text: '算错了，我一眼就看出来了',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_17': {
            title: '课堂：舞蹈课',
            description: '舞蹈课上播放___的歌的时候，{user}就跳得很起劲。',
            priority: 2,
            trigger_conditions: { age_range: [4, 10] },
            options: [
        {
            text: '黑乐谱',
            result: '你做出了选择。',
            add_tags: ['鬼畜'],
            remove_tags: ['高情商']
        },
        {
            text: '儿歌',
            result: '你做出了选择。'
        },
        {
            text: '爵士',
            result: '你做出了选择。',
            add_tags: ['音乐', '音乐能力']
        },
        {
            text: '流行歌',
            result: '你做出了选择。',
            add_tags: ['高情商']
        },
        {
            text: '《义勇军进行曲》',
            result: '你做出了选择。'
        },
        {
            text: '毒药',
            result: '你做出了选择。'
        },
        {
            text: '无法天女主题曲',
            result: '你做出了选择。'
        },
        {
            text: 'PPAP',
            result: '你做出了选择。'
        },
        {
            text: '烤面筋',
            result: '你做出了选择。'
        },
        {
            text: '逐梦演艺圈',
            result: '你做出了选择。'
        },
        {
            text: '《Lost Rivers》',
            result: '你做出了选择。'
        },
        {
            text: '《Tunak Tunak Tun》',
            result: '{user}在舞蹈课上边跳舞边玩起了泥巴，他跳着异国风情的舞步，把泥巴抛向空中，又稳稳地接住。赢来同学们的掌声。',
            add_tags: ['身体协调']
        }
            ]
        },
        'dbrs_22': {
            title: '课堂:语文课',
            description: '在无聊的语文课上， {user}在书上写着什么，原来他___',
            priority: 2,
            trigger_conditions: { age_range: [4, 10] },
            options: [
        {
            text: '把孔子涂鸦成了比卡丘',
            result: '你做出了选择。',
            add_tags: ['画画', '画图能力']
        },
        {
            text: '给杜甫加上非主流头发',
            result: '你做出了选择。'
        },
        {
            text: '在划重点',
            result: '你做出了选择。',
            add_tags: ['学习成绩']
        }
            ]
        },
        'dbrs_177': {
            title: '天生美貌',
            description: '{user}出生了，{user}一出生就长定了型，是一位看起来像12岁的美貌的女孩子。',
            priority: 2,
            trigger_conditions: { age_range: [0, 0], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['美貌'],
            remove_tags: ['未出生']
        }
            ]
        },
        'dbrs_206': {
            title: '大自然的促销活动',
            description: '{user}家有客人，{user}打开家门，一个带着兜帽、钩鼻子的老奶奶站在门口，向{user}递来一个青苹果说：“我是大自然的搬运工，现在我们搞活动，给每个楼层送出一个我们有鸡农场新摘的青苹果。无农药无公害无激素无糖无虫……”{user}___',
            priority: 2,
            trigger_conditions: { age_range: [1, 5], required_tags: ['女性'] },
            options: [
        {
            text: '狠狠地摔门',
            result: '你做出了选择。'
        },
        {
            text: '拿起苹果吃一口',
            result: '{user}吃了一小口老奶奶推销员送的青苹果，突然，{user}整个人失去了力气趴在了地上，狂翻白眼流泪，伸舌头咧嘴笑。鬼畜了几下，{user}断气了……老奶奶皱纹堆叠交错，露出了奸笑，说：“白雪公主，你不要怪我……怪就怪你自己太跳，激怒了女王……”说完，老巫婆刚想走，突然一拍大腿，大叫：“我艹，搞错了门牌号码。”',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=吃了一小口老奶奶推销员送的青苹果，突然，=NAME=整个人失去了力气趴在了地上，狂翻白眼流泪，伸舌头咧嘴笑。鬼畜了几下，=NAME=断气了……老奶奶皱纹堆叠交错，露出了奸笑，说：“白雪公主，你不要怪我……怪就怪你自己太跳，激怒了女王……”说完，老巫婆刚想走，突然一拍大腿，大叫：“我艹，搞错了门牌号码。”'
        }
            ]
        },
        'dbrs_333': {
            title: '克死娘克死爹',
            description: '刚出生就克死娘的花干骨终于克死了爹，爹的遗愿是让她去找那个给她取名的茅山道士。',
            priority: 2,
            trigger_conditions: { age_range: [1, 4], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['孤儿'],
            death_flag: true,
            death_reason: '刚出生就克死娘的花干骨终于克死了爹，爹的遗愿是让她去找那个给'
        }
            ]
        },
        'dbrs_421': {
            title: '学习',
            description: '{user}躺在病房里的床上，通过听护士、医生、病人的对话，学会了语言。',
            priority: 2,
            trigger_conditions: { age_range: [1, 4] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_423': {
            title: '颜色',
            description: '蓝天，白云，绿草，城市……这些东西是长什么样的？{user}在脑海中，想了一遍又一遍。',
            priority: 2,
            trigger_conditions: { age_range: [1, 4] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_426': {
            title: '思考',
            description: '数学，化学，物理学，天文学，医学……{user}在脑内不断思考着这些听来的知识。思考，就是{user}的全部。',
            priority: 2,
            trigger_conditions: { age_range: [1, 4] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_422': {
            title: '了解世界',
            description: '{user}从周围的人话语中，贪婪地了解着这个未知的世界。',
            priority: 2,
            trigger_conditions: { age_range: [1, 4] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_799': {
            title: '被收养',
            description: '{user}被一个男人收养了，住进了公寓中，从此过上了人类的生活。',
            priority: 2,
            trigger_conditions: { age_range: [1, 1] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_800': {
            title: '流浪狗',
            description: '{user}是个流浪狗，天天翻垃圾箱找吃的，生活过得乐无忧。',
            priority: 2,
            trigger_conditions: { age_range: [1, 1] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_801': {
            title: '大骨头',
            description: '{user}有一次在垃圾桶里抓出了一根大骨头。{user}舍不得吃掉，叼在嘴里慢慢啃。大骨头含在嘴里的触感，{user}感受到幸福的感觉。',
            priority: 2,
            trigger_conditions: { age_range: [2, 5] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_802': {
            title: '猫狗大战',
            description: '有一次，{user}翻垃圾桶的时候，被一群野猫袭击了。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [2, 5] },
            options: [
        {
            text: '拔腿就跑',
            result: '你做出了选择。'
        },
        {
            text: '战个痛快',
            result: '有一次，{user}翻垃圾桶的时候，被一群野猫袭击了。{user}为了守护自己做狗的尊严，决定和这些下贱的猫决一死战。{user}扑到猫群里打成了一团，没过多久{user}就被打得一身血，倒地不起了。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_806': {
            title: '无聊的生活',
            description: '{user}的主人丢了一个球出去，叫{user}捡回来。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [2, 5] },
            options: [
        {
            text: '跑过去捡回来',
            result: '你做出了选择。'
        },
        {
            text: '鄙视主人',
            result: '你做出了选择。'
        },
        {
            text: '无视主人',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_808': {
            title: '痣',
            description: '{user}的主人眼角有颗痣，有一次{user}无意中舔到主人的痣后，{user}和主人的身体互换了……',
            priority: 2,
            trigger_conditions: { age_range: [3, 10] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            set_attributes: { money: 5 },
            add_tags: ['furry']
        }
            ]
        },
        'dbrs_807': {
            title: '无聊的生活',
            description: '{user}的主人抱起{user}，肉麻地学者狗叫，活像一个智障，{user}暗暗想：“___”',
            priority: 2,
            trigger_conditions: { age_range: [2, 10] },
            options: [
        {
            text: '你妈智障',
            result: '你做出了选择。'
        },
        {
            text: '你爸智障',
            result: '你做出了选择。'
        },
        {
            text: '全家智障',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_805': {
            title: '无聊的生活',
            description: '{user}每天在家里的生活就是睡觉、在地板上打滚、吃东西、伸懒腰。',
            priority: 2,
            trigger_conditions: { age_range: [2, 5] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_858': {
            title: '被收养',
            description: '{user}被一个男人收养了，住进了公寓中，从此过上了人类的生活。',
            priority: 2,
            trigger_conditions: { age_range: [2, 5] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_925': {
            title: '父母的教育',
            description: '父母教育{user}：为了国家尊严而付出自己的生命，是一笔划算的买卖。{user}___',
            priority: 2,
            trigger_conditions: { age_range: [1, 5] },
            options: [
        {
            text: '点头',
            result: '你做出了选择。'
        },
        {
            text: '使劲点头',
            result: '你做出了选择。'
        },
        {
            text: '摇头',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_967': {
            title: '流派',
            description: '{user}下围棋最喜欢的流派是___',
            priority: 2,
            trigger_conditions: { age_range: [5, 10] },
            options: [
        {
            text: '僵尸流',
            result: '你做出了选择。'
        },
        {
            text: '棒子流',
            result: '你做出了选择。'
        },
        {
            text: '追杀流',
            result: '你做出了选择。'
        },
        {
            text: '面面流',
            result: '你做出了选择。'
        },
        {
            text: '拱猪流',
            result: '你做出了选择。'
        },
        {
            text: '宇宙流',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_970': {
            title: '麻木不仁',
            description: '{user}与其他AI对战了一年时间，{user}与各种AI对战，{user}从来都没有输过，{user}对胜利已经感到麻木。',
            priority: 2,
            trigger_conditions: { age_range: [5, 10] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_972': {
            title: '胜利的滋味',
            description: '{user}自出生以来从未尝过失败的滋味。开发者很满意这样的成绩，他们给{user}加入了一个名为蛋糕的奖励机制。并给了{user}一次蛋糕奖励，{user}竟然尝到了甜甜的味道。',
            priority: 2,
            trigger_conditions: { age_range: [5, 10] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['蛋糕奖励']
        }
            ]
        },
        'dbrs_971': {
            title: '从未败阵',
            description: '{user}与其他AI对战了一年时间，{user}一直以来都没有输过。{user}看待这些AI，如同看待智障一样。',
            priority: 2,
            trigger_conditions: { age_range: [5, 10] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1072': {
            title: '动物园',
            description: '{user} {age}岁时去了动物园，他很喜欢___，并上前摸了一摸。',
            priority: 2,
            trigger_conditions: { age_range: [2, 5] },
            options: [
        {
            text: '猴子',
            result: '你做出了选择。'
        },
        {
            text: '犀牛',
            result: '你做出了选择。'
        },
        {
            text: '斑马',
            result: '你做出了选择。'
        },
        {
            text: '老虎',
            result: '{user} {age}岁的时候去动物园，竟然伸手摸老虎。{user}被老虎撕成了碎片。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '狮子',
            result: '{user} {age}岁的时候去动物园，竟然伸手摸狮子屁股。{user}被狮子撕成了碎片。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '蛇',
            result: '{user} {age}岁的时候去动物园遇到一条响尾蛇，他觉得蛇的尾巴好萌，竟然伸手去摸……',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '比卡丘',
            result: '{user} {age}岁的时候去动物园遇到一只比卡丘，{user}伸手去摸，比卡丘发出“比卡比卡”的叫声。'
        }
            ]
        },
        'dbrs_1112': {
            title: '好学',
            description: '{user}很懂事，而且很好学。他开始学习三味弦。',
            priority: 2,
            trigger_conditions: { age_range: [1, 5], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['三味弦']
        }
            ]
        },
        'dbrs_1111': {
            title: '貌美',
            description: '{user}是家里的二女儿，自小聪明伶俐，貌美如花。亲戚们看到{user}都会暗暗感叹，可惜了这么漂亮的一个娃，竟然是瞎子。',
            priority: 2,
            trigger_conditions: { age_range: [1, 5], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['美貌']
        }
            ]
        },
        'dbrs_1110': {
            title: '文静',
            description: '{user}生来知晓举止进退之法，举手投足婀娜多姿。他的兄弟经常啧啧称奇。',
            priority: 2,
            trigger_conditions: { age_range: [1, 5], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1114': {
            title: '=NAME=之美',
            description: '{user}自幼颖悟，姿态端丽优雅，其美无可比拟。',
            priority: 2,
            trigger_conditions: { age_range: [1, 5], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['美貌']
        }
            ]
        },
        'dbrs_1128': {
            title: '贤者=NAME=',
            description: '聋者看似愚人，盲者看似贤者。{user}因为盲的关系，再加上自身的修养和气质，所以更似贤者。',
            priority: 2,
            trigger_conditions: { age_range: [5, 10], required_tags: ['女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1262': {
            title: '叮当来了',
            description: '有一天，{user}的抽屉里爬出一只巨大的狸猫，说是{user}孙子从未来派他来帮助{user}。{user}独自在家，{user}___',
            priority: 2,
            trigger_conditions: { age_range: [4, 8] },
            options: [
        {
            text: '打电话报警',
            result: '你做出了选择。',
            add_tags: ['勇敢', '串门']
        },
        {
            text: '沏茶，迎客',
            result: '你做出了选择。',
            add_tags: ['串门']
        },
        {
            text: '摊摊手，说来盘昆特牌吧',
            result: '你做出了选择。',
            add_tags: ['逻辑', '串门']
        },
        {
            text: '装作不在家',
            result: '你做出了选择。',
            add_tags: ['胆小', '串门']
        },
        {
            text: '我不认识什么叮当',
            result: '有一天，{user}的抽屉里爬出一只巨大的狸猫，说是{user}孙子从未来派他来帮助{user}。{user}冷笑，说：“我不认识什么叮当，我只知道哆啦A梦。”说完恨恨地关上门。',
            add_tags: ['串门']
        }
            ]
        },
        'dbrs_1263': {
            title: '卖火柴的小女孩来了',
            description: '有一天，有一个小女孩举着一个广告牌来敲{user}家的门。{user}一打开门，她就开始喋喋不休地推销她的火柴：“防风防水防雷，燃烧自己点亮别人，生活小超人，一支火柴可以点一包烟……”{user}___',
            priority: 2,
            trigger_conditions: { age_range: [2, 8] },
            options: [
        {
            text: '打电话报警',
            result: '你做出了选择。',
            add_tags: ['勇敢', '串门']
        },
        {
            text: '买一包火柴',
            result: '有一天，有一个小女孩举着一个广告牌来敲{user}家的门。{user}一打开门，她就开始喋喋不休地推销她的火柴：“防风防水防雷，燃烧自己点亮别人，生活小超人，一支火柴可以点一包烟……”{user}无奈只能买了一包火柴，让这个人赶紧走。',
            add_tags: ['高情商', '串门']
        },
        {
            text: '买一箱',
            result: '有一天，有一个小女孩举着一个广告牌来敲{user}家的门。{user}一打开门，她就开始喋喋不休地推销她的火柴：“防风防水防雷，燃烧自己点亮别人，生活小超人，一支火柴可以点一包烟……”{user}被这火柴吸引了，把小女孩的所有火柴买下了。',
            add_tags: ['串门'],
            remove_tags: ['高情商']
        },
        {
            text: '摊摊手，说来盘昆特牌吧',
            result: '你做出了选择。',
            add_tags: ['逻辑', '串门']
        },
        {
            text: '摔门',
            result: '你做出了选择。',
            add_tags: ['串门']
        },
        {
            text: '沏茶，迎客',
            result: '有一天，有一个小女孩举着一个广告牌来敲{user}家的门。{user}一打开门，她就开始喋喋不休地推销她的火柴：“防风防水防雷，燃烧自己点亮别人，生活小超人，一支火柴可以点一包烟……”{user}把小女孩请进家门，沏茶招待。',
            add_tags: ['串门']
        }
            ]
        },
        'dbrs_1264': {
            title: '可怜的狐狸',
            description: '有一天，有一只可怜的狐狸来敲门，它是孤儿，想让{user}收留它。{user}独自在家，{user}决定___',
            priority: 2,
            trigger_conditions: { age_range: [5, 12] },
            options: [
        {
            text: '打电话报警',
            result: '你做出了选择。',
            add_tags: ['勇敢']
        },
        {
            text: '收养它',
            result: '你做出了选择。'
        },
        {
            text: '摔门',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1268': {
            title: '老爷爷',
            description: '有一天，有一个白胡子的老头来敲门，自称是{user}的创造者。{user}独自在家，{user}___',
            priority: 2,
            trigger_conditions: { age_range: [5, 10] },
            options: [
        {
            text: '打电话报警',
            result: '你做出了选择。',
            add_tags: ['勇敢', '串门']
        },
        {
            text: '沏茶，迎客',
            result: '{user}与他的老爷爷重逢了，他们一边喝茶，一边聊他们的往事。',
            add_tags: ['串门']
        },
        {
            text: '隔着门唱起了歌：我不上不上，我不上你的当~',
            result: '你做出了选择。',
            add_tags: ['音乐', '音乐能力', '串门']
        }
            ]
        },
        'dbrs_1272': {
            title: '共享单车',
            description: '{user}已经掌握了附近所有共享单车的解密方法，一有空就解锁单车，___',
            priority: 2,
            trigger_conditions: { age_range: [5, 12] },
            options: [
        {
            text: '兜风',
            result: '共享单车又一起事故！{age}岁的{user}一有空就找共享单车撬锁，骑着共享单车周围兜风。因为不懂交通规则，走上高速公路，在匝道被大货车碾压身亡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '练习飘移',
            result: '共享单车又一起事故！{age}岁的{user}一有空就找共享单车撬锁，骑着共享单车练习飘移，最后摔死在大街上。虽说死者为大，但是这事情还是让人不禁想起了《论雷峰塔的倒掉》的最后一句。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '玩花式',
            result: '共享单车又一起事故！{age}岁的{user}一有空就找共享单车撬锁，骑着共享单车玩花式撞车。一头栽倒在泥头车底，脑花四溅，花式撞车。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1323': {
            title: '一个高大的叔叔',
            description: '有一天，一个高大的叔叔来敲{user}家的门。{user}隔着门看到这位叔叔十分的高大，身体与四肢不成比例，胳膊甚至延伸到膝盖。他的脸模糊不清，嘴部诡异地裂开。这个叔叔在向{user}问好，他说：“你好，小朋友。这附近有一个魔法森林，你要跟我去冒险吗？”{user}___',
            priority: 2,
            trigger_conditions: { age_range: [5, 12] },
            options: [
        {
            text: '打电话报警',
            result: '有一天，一个高大的叔叔来敲{user}家的门。{user}隔着门看到这位叔叔十分的高大，身体与四肢不成比例，胳膊甚至延伸到膝盖。他的脸模糊不清，嘴部诡异地裂开。这个叔叔在向{user}问好，他说：“你好，小朋友。这附近有一个魔法森林，你要跟我去冒险吗？”{user}没有回答，他盯着这位“叔叔”，从口袋里摸出电话，拨打了110。这位叔叔见状，转身离开了。',
            add_tags: ['勇敢']
        },
        {
            text: '摔门。',
            result: '你做出了选择。'
        },
        {
            text: '我去我去',
            result: '有一天，一个高大的叔叔来敲{user}家的门。{user}隔着门看到这位叔叔十分的高大，身体与四肢不成比例，胳膊甚至延伸到膝盖。他的脸模糊不清，嘴部诡异地裂开。这个叔叔在向{user}问好，他说：“你好，小朋友。这附近有一个魔法森林，你要跟我去冒险吗？”{user}最喜欢冒险了，他跟这位叔叔走了，然后就失踪了，再也没有人找得到{user}。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        }
            ]
        },
        'dbrs_1415': {
            title: '上学',
            description: '{user} {age}岁时开始上学，成为祖国的花朵。',
            priority: 2,
            trigger_conditions: { age_range: [3, 5] },
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