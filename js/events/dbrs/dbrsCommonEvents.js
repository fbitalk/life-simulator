// dbrs 事件文件 - 自动生成
// 平凡人——空白开局角色的通用童年事件
// 事件数: 50
import { registerTags } from '../../data/tagRegistry.js';

registerTags({
    '平凡人': { color: 'normal' },
});

export const dbrsCommonEvents = {
    '平凡人': {
        events: {
        'dbrs_common_8': {
            title: '天赋',
            description: '{user}一出生就___',
            priority: 3,
            trigger_conditions: { age_range: [1, 4], required_tags: ['平凡人'] },
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
                add_tags: ['多病'],
                effects: { health: -10 }
            },
            {
                text: '吸烟',
                result: '你做出了选择。',
                add_tags: ['烟瘾'],
                effects: { health: -10 }
            },
            {
                text: '会飙歌',
                result: '你做出了选择。',
                add_tags: ['音乐']
            },
            {
                text: '会素描',
                result: '你做出了选择。',
                add_tags: ['画画']
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
            },
            ]
        },
        'dbrs_common_9': {
            title: '幼儿日常',
            description: '{user}___',
            priority: 3,
            trigger_conditions: { age_range: [1, 4], required_tags: ['平凡人'] },
            options: [
            {
                text: '喜欢看电视',
                result: '你做出了选择。',
                add_tags: ['近视眼'],
                effects: { health: -5 }
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
                add_tags: ['败家'],
                effects: { money: -2 }
            },
            ]
        },
        'dbrs_common_14': {
            title: '学走路',
            description: '{user}___的时候，突然学会了走路。',
            priority: 3,
            trigger_conditions: { age_range: [1, 4], required_tags: ['平凡人'] },
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
                add_tags: ['音乐']
            },
            {
                text: '看手把手教程',
                result: '{user}看了看教走路的教程，就学会了走路。'
            },
            {
                text: '走路还用学？',
                result: '{user}一生下来就会走路，根本不用学',
                add_tags: ['身体协调']
            },
            ]
        },
        'dbrs_common_13': {
            title: '狼来了',
            description: '有一天，有一只人模人样的狼敲门，说是{user}的外婆。{user}独自在家，{user}___',
            priority: 3,
            trigger_conditions: { age_range: [1, 4], required_tags: ['平凡人'] },
            options: [
            {
                text: '打电话报警',
                result: '你做出了选择。',
                add_tags: ['勇敢']
            },
            {
                text: '沏茶，迎客',
                result: '有一天，狼来了。{user}没有一点防范，把狼放了进来，还为它倒好了茶。“我不喝茶，谢谢。”狼说完就向{user}扑了过去，吃了个爽。',
                add_tags: ['死亡']
            },
            {
                text: '摊摊手，说来盘昆特牌吧',
                result: '你做出了选择。',
                add_tags: ['逻辑']
            },
            {
                text: '装作不在家',
                result: '你做出了选择。',
                add_tags: ['胆小']
            },
            {
                text: '隔着门唱起了歌：我不上不上，我不上你的当~',
                result: '你做出了选择。',
                add_tags: ['音乐']
            },
            {
                text: '识破骗局',
                result: '有一天，狼来了。{user}没有开门。他识破了狼的奸计，打电话报警，抓走了这只狼。'
            },
            ]
        },
        'dbrs_common_15': {
            title: '花干骨',
            description: '茅山道长跟{user}爸爸说:这个孩子随异香出生,容易招惹灾祸。\n{user}老爸听后狠下心，把{user}剁了……',
            priority: 3,
            trigger_conditions: { age_range: [1, 4], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。',
                add_tags: ['死亡']
            },
            ]
        },
        'dbrs_common_16': {
            title: '课堂:算术课',
            description: '小华买了1支铅笔、2块橡皮、2个练习本，付了1元钱，售货员找给他5分钱。小华看了看1支铅笔的价钱是8分，请问售货员是否算错账了？',
            priority: 3,
            trigger_conditions: { age_range: [4, 10], required_tags: ['平凡人'] },
            options: [
            {
                text: '条件不足此题无解',
                result: '{user}的智力似乎比平均值低。',
                remove_tags: ['洞察']
            },
            {
                text: '虽不明但觉错',
                result: '{user}总是能在试题中蒙中正确答案'
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
            },
            ]
        },
        'dbrs_common_17': {
            title: '课堂：舞蹈课',
            description: '舞蹈课上播放___的歌的时候，{user}就跳得很起劲。',
            priority: 3,
            trigger_conditions: { age_range: [4, 10], required_tags: ['平凡人'] },
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
                add_tags: ['音乐']
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
            },
            ]
        },
        'dbrs_common_22': {
            title: '课堂:语文课',
            description: '在无聊的语文课上， {user}在书上写着什么，原来他___',
            priority: 3,
            trigger_conditions: { age_range: [4, 10], required_tags: ['平凡人'] },
            options: [
            {
                text: '把孔子涂鸦成了比卡丘',
                result: '你做出了选择。',
                add_tags: ['画画']
            },
            {
                text: '给杜甫加上非主流头发',
                result: '你做出了选择。'
            },
            {
                text: '在划重点',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_37': {
            title: '课堂:英语课',
            description: '你知道“2”用英文怎么说吗?',
            priority: 3,
            trigger_conditions: { age_range: [11, 17], required_tags: ['平凡人'] },
            options: [
            {
                text: 'two',
                result: '{user}学习很踏实，成绩也不错。'
            },
            {
                text: 'SB',
                result: '{user}老是想语出惊人。'
            },
            {
                text: 'thick',
                result: '别人做不出来的题目，{user}稍微看了一下，就能把答案准确地写出来。'
            },
            {
                text: 'hungry',
                result: '上英语课的时候，{user}还以为是语文课'
            },
            {
                text: 'mother fucker',
                result: '{user}对现在的教育非常不满，然而并没有什么卵用，只让{user}的成绩一落千丈。'
            },
            ]
        },
        'dbrs_common_35': {
            title: '课堂:数学课',
            description: '申国的山区，是上坡路比较多还是下坡路比较多？',
            priority: 3,
            trigger_conditions: { age_range: [7, 17], required_tags: ['平凡人'] },
            options: [
            {
                text: '什么破题目',
                result: '面对现在的教育体系，{user}非常不满，然而并没有卵用，只会让{user}的成绩越来越差。'
            },
            {
                text: '数学课老是做脑筋急转弯题目真的好吗？',
                result: '面对现在的教育体系，{user}持反对意见，然而并没有卵用，只会让{user}的成绩越来越差。'
            },
            {
                text: '条件不足，此题无解',
                result: '{user}非常聪明，而且很努力。'
            },
            {
                text: '一样多',
                result: '{user}被应试教育毒害了，自己的个性表达被磨平了，自己的思考能力也被磨灭了。'
            },
            ]
        },
        'dbrs_common_38': {
            title: '课堂:体育课',
            description: '{user}最擅长的运动是___',
            priority: 3,
            trigger_conditions: { age_range: [7, 17], required_tags: ['平凡人'] },
            options: [
            {
                text: '踏步',
                result: '你做出了选择。'
            },
            {
                text: '田径运动',
                result: '你做出了选择。'
            },
            {
                text: '足球',
                result: '你做出了选择。',
                add_tags: ['足球']
            },
            {
                text: '篮球',
                result: '你做出了选择。',
                add_tags: ['篮球']
            },
            {
                text: '其他球类运动',
                result: '你做出了选择。'
            },
            {
                text: '并不擅长运动',
                result: ' 最讨厌上体育课了，满身臭汗。 ',
                add_tags: ['肥胖'],
                remove_tags: ['强壮']
            },
            {
                text: '高尔夫球',
                result: '你做出了选择。'
            },
            {
                text: '攀岩',
                result: '你做出了选择。'
            },
            {
                text: '滑雪',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_47': {
            title: '神秘信件',
            description: '{user}有一天在自己的抽屉里发现了一粉红色的封信，信封上还有很多心形图案。打开一看，是班里的一个同学写给{user}的情信。{user}想___',
            priority: 3,
            trigger_conditions: { age_range: [13, 17], required_tags: ['平凡人'] },
            options: [
            {
                text: '不能早恋啊！',
                result: '{user}有一天在自己的抽屉里发现了一粉红色的封信，信封上还有很多心形图案。打开一看，是班里的一个同学写给{user}的情信。{user}看完就把这封信撕碎了。'
            },
            {
                text: '不早恋，枉读书',
                result: '有人写情信给{user}，{user}恋爱了。'
            },
            {
                text: '与他做笔友',
                result: '同班同学给{user}寄来情信，{user}回信：我们来做笔友吧。',
                add_tags: ['笔友']
            },
            ]
        },
        'dbrs_common_49': {
            title: '时间分配',
            description: '学习和恋爱，{user}更看重___',
            priority: 3,
            trigger_conditions: { age_range: [7, 17], required_tags: ['平凡人'] },
            options: [
            {
                text: '恋爱至上',
                result: '恋爱中的人就是傻子，所以他们的学习成绩开始落后。'
            },
            {
                text: '学习',
                result: '你做出了选择。'
            },
            {
                text: '看心情',
                result: '恋爱中的人就是傻子，所以他们的学习成绩开始落后。'
            },
            ]
        },
        'dbrs_common_75': {
            title: '零食',
            description: '{user} 最爱吃的零食是___',
            priority: 3,
            trigger_conditions: { age_range: [10, 35], required_tags: ['平凡人'] },
            options: [
            {
                text: '辣条',
                result: '{user}喜欢无节制吃辣，所以他的菊花不久后就长出了痔疮。',
                add_tags: ['痔疮']
            },
            {
                text: '爆炸糖',
                result: '{user}吃到了一颗二氧化碳含量超标的爆炸糖，爆炸糖在{user}的口腔中，突然爆炸。{user}的头被爆炸冲击炸得血肉模……',
                add_tags: ['死亡']
            },
            {
                text: '棉花糖',
                result: '你做出了选择。',
                add_tags: ['三多一小']
            },
            {
                text: '自己的臭脚',
                result: '{user}喜欢吃自己脚的死皮。',
                add_tags: ['口臭']
            },
            {
                text: '济公丹',
                result: '你做出了选择。',
                add_tags: ['最爱零食：济公丹']
            },
            {
                text: '大白兔糖',
                result: '你做出了选择。',
                add_tags: ['三多一小']
            },
            {
                text: '牛杂',
                result: '你做出了选择。',
                add_tags: ['最爱零食：牛杂']
            },
            {
                text: '三色冰淇淋',
                result: '你做出了选择。',
                add_tags: ['肥胖']
            },
            {
                text: '五仁月饼',
                result: '你做出了选择。',
                add_tags: ['口臭']
            },
            {
                text: '调味料',
                result: '你做出了选择。',
                add_tags: ['最爱零食：调味料']
            },
            {
                text: '暗物质',
                result: '你做出了选择。',
                add_tags: ['最爱零食：暗物质']
            },
            {
                text: ' 脑残炫彩牛肉面',
                result: '{user}很喜欢吃泡面，特别是某牌的脑残炫彩牛肉面。这种面又辣又酸，吃多了这种面，拉出来的屎都是炫彩的，菊花可承受不了这种美味，长出了痔疮。',
                add_tags: ['痔疮']
            },
            {
                text: ' 山椒',
                result: '{user}很喜欢吃山椒，他无节制地每天都吃一瓶500克装的山椒，终于有一天胃出血，送院抢救无效。',
                add_tags: ['死亡']
            },
            {
                text: '荷兰水',
                result: '你做出了选择。'
            },
            {
                text: '美味风蛇',
                result: '你做出了选择。',
                add_tags: ['最爱零食：美味风蛇']
            },
            {
                text: '转基因薯片',
                result: '{user}最爱吃的零食是转基因薯片，自带烧烤味，好吃又健康。',
                add_tags: ['最爱零食：转基因薯片']
            },
            {
                text: '野味',
                result: '{user}最喜欢吃来路不明的野味了。',
                add_tags: ['口臭']
            },
            ]
        },
        'dbrs_common_92': {
            title: '加菜',
            description: '切菜的时候，{user}突然手一歪，把自己的手指头剁掉了。{user}被送去了医院，被告知手指已经不能接回去了。',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_94': {
            title: '报复老板',
            description: '无辜的{user}站在老板办公室中，被臭骂了一下午。{user}决定报复，___',
            priority: 3,
            trigger_conditions: { age_range: [16, 35], required_tags: ['平凡人'] },
            options: [
            {
                text: '在老板的咖啡机上如厕',
                result: '你做出了选择。'
            },
            {
                text: '污蔑老板性骚扰',
                result: '{user}突然大叫非礼。然而，门外毫无动静。{user}的老板笑笑不说话，起身径直走到{user}面前一把揽住{user}，强吻了起来……'
            },
            {
                text: '把公司电脑硬盘格式化了。',
                result: '公司的数据都被删了，结果{user}和同事连续加班了半年重做。',
                add_tags: ['多病']
            },
            {
                text: '冤冤相报何时了，忘掉仇恨，要包容',
                result: '{user}被老板臭骂后，还想着体谅老板的辛苦。'
            },
            ]
        },
        'dbrs_common_91': {
            title: '被告白',
            description: '{user}变身魔法少女，与魔女战斗时不小心被某个同班同学看到。这个同学迷恋上了{user}。终于在一天，这个同学勇敢地向{user}告白。',
            priority: 3,
            trigger_conditions: { age_range: [1, 30], required_tags: ['平凡人'] },
            options: [
            {
                text: '答应',
                result: '{user}答应了一个勇敢的追求者，他们恋爱了。'
            },
            {
                text: '自己的灵魂已经交给了“抠鼻”，我没资格恋爱，我是孤独的魔法少女',
                result: '{user}变身魔法少女，与魔女战斗时不小心被某个同班同学看到。这个同学迷恋上了{user}，天天缠着{user}告白，{user}不耐烦，拖他进入魔女次元，然后杀掉了他。毁尸灭迹。'
            },
            {
                text: '无视',
                result: '{user}拒绝了一个同班同学的告白。只丢下一句不行，就走了。果然很高冷'
            },
            {
                text: '发卡',
                result: '{user}拒绝了一个同班同学的告白。给了这个同学一张：好同学卡。'
            },
            ]
        },
        'dbrs_common_95': {
            title: '打瞌睡',
            description: '看着眼前的一堆文档，{user}决定小睡了一会儿，在梦中和老板搏斗。{user}醒来时发现他一手血，面前的电脑屏幕已经被打碎。',
            priority: 3,
            trigger_conditions: { age_range: [16, 35], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_101': {
            title: '遇到奇怪的姐姐',
            description: '在放学的路上，{user}遇上开高级跑车的漂亮大姐姐邀请你上车和她去一个地方。',
            priority: 3,
            trigger_conditions: { age_range: [11, 18], required_tags: ['平凡人'] },
            options: [
            {
                text: '不要跟陌生人走',
                result: '{user}拒绝上陌生人的车。'
            },
            {
                text: '上车',
                result: '{user}犹豫了一下，上车了。{user}被带到一个秘密基地'
            },
            ]
        },
        'dbrs_common_102': {
            title: '研究所',
            description: '{user}发现自己老爸是这个秘密研究所基地)的所长，这里研究巨型机器人来对抗外星人并被老爸要求做其中一台机器的驾驶员。',
            priority: 3,
            trigger_conditions: { age_range: [11, 18], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_104': {
            title: '发现使徒',
            description: '一个使徒的胚胎在某地的火山口被发现，{user}决定___',
            priority: 3,
            trigger_conditions: { age_range: [11, 18], required_tags: ['平凡人'] },
            options: [
            {
                text: '立马出击，趁还是胚胎赶紧秒掉。',
                result: '一个使徒的胚胎在某地的火山口被发现，{user}不顾老爸的阻拦，飞身跳进驾驶舱，驾驶机器人出击了。一心想着趁使徒还是胚胎的时候秒杀掉。然而{user}不知道，他驾驶的巨型机器人是新世纪逗比战士，并不是EVA。当巨型机器人到达火山口，逗比巨型机器人根本经受不住火山口的温度，巨型机器人就像巧克力遇热一样融掉了。{user}在里面死得渣都不剩。',
                add_tags: ['死亡']
            },
            {
                text: '小心行事，必须对使徒胚胎做全面的分析。',
                result: '{user}发现一个使徒的胚胎在某地的火山口，{user}不敢贸然行动。谁知这个使徒代谢非常快，使徒的胚胎很快发育成型，成了一个巨大的怪兽，并不断发育。等{user}驾驶机器人赶到时，这个使徒已经老死了。汗'
            },
            {
                text: '放他一马，这个胚胎看起来很无害。',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_103': {
            title: '二腿使徒',
            description: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。各地警报响起。城市和街道暂时沉到了地下躲避灾难。{user}登上了巨型机器人，机器人喷射从基地飞出，进入了战斗。这个使徒双腿非常灵活，移动非常迅速。{user}应该___',
            priority: 3,
            trigger_conditions: { age_range: [11, 18], required_tags: ['平凡人'] },
            options: [
            {
                text: '投掷高振动粒子跳蛋攻击',
                result: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。{user}驾驶巨大机器人与其对抗，只见{user}从口袋里拿出一个高振动粒子跳蛋向两腿使徒扔去。跳蛋正中使徒的股间，使徒腿一软，被制服了。'
            },
            {
                text: '绳子装上鱼诱，等待使徒上钩活抓',
                result: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。{user}驾驶巨大机器人与其对抗，{user}在一条绳子上装上鱼钩鱼诱，等待使徒上钩活抓。然而使徒不是鱼，无视了{user}，走向城市一顿踩踏后，扬长而去。整个城市伤亡惨重。'
            },
            {
                text: '上前徒手肉搏',
                result: '庞大的两腿使徒来袭，这是一个只有2条腿，夹着一个头的丑陋的生物。{user}驾驶巨大机器人与其对抗，{user}驾驶机器人冲上前去抓住使徒一顿猛揍，两腿使徒没有手不能还击，吃尽了亏。两腿使徒委屈得哭出了声，投降了。'
            },
            ]
        },
        'dbrs_common_105': {
            title: '狗血二次元',
            description: '{user}一不小心对着另外一个机器人驾驶员袭胸了，然后两人一慌张，脚一绊双双倒地抱在一起。这种狗血淋漓的二次元剧情在{user}的生活中出现了。',
            priority: 3,
            trigger_conditions: { age_range: [11, 18], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_112': {
            title: '公司日常',
            description: '熟悉了公司的业务后，{user}决定___',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
            },
            ]
        },
        'dbrs_common_119': {
            title: '光泽强迫症',
            description: '长期的抛光使{user}得了职业病，不是肺病。而是看到粗糙的东西就想去把它打磨光滑。',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_120': {
            title: '索尼大法好',
            description: '看到别人家的孩子有PSP玩，{user}考虑是不是也买一个PSP。{user}最后决定___',
            priority: 3,
            trigger_conditions: { age_range: [5, 17], required_tags: ['平凡人'] },
            options: [
            {
                text: '花钱买一个',
                result: '你做出了选择。',
                effects: { money: -1 }
            },
            {
                text: '买买买，为信仰充值。',
                result: '{user}看到别人有PSP，自己也毫不犹豫地去买了一个，正式成为了索尼大法的信徒。',
                effects: { money: -1 }
            },
            {
                text: '不买，好好学习才是王道！',
                result: '{user}并不羡慕别人有PSP，自己有空在练习本上涂涂画画玩也很有趣（泪）。不过没有游戏机，{user}的学习变好了。'
            },
            {
                text: '偷',
                result: '{user}偷了同学的PSP，还洋洋得意唱了起来：“练得一手好摸技，PSP得来全不费功夫”',
                add_tags: ['小偷']
            },
            ]
        },
        'dbrs_common_124': {
            title: '同事偷懒',
            description: '{user}发现前辈同事在上班时间公然打瞌睡，{user}___',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
            },
            ]
        },
        'dbrs_common_132': {
            title: '算错数',
            description: '在算公司账的时候，{user}看错了小数点。公司的利润算少了2个零，{user}被炒掉了，并以做假账的罪名抓捕了。',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_134': {
            title: '工作习惯',
            description: '{user} 焖三杯鸡的时候，喜欢拿一瓶82年的拉菲，喝一口先含在嘴里，然后喷在锅中。',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_135': {
            title: '铁砂掌',
            description: '厨房的锅铲生锈了，为了不影响菜肴的味道，{user}只好用徒手炒油锅。',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_146': {
            title: '薪金制度渣FIT人',
            description: '{user}老爸的公司是科技公司，公司实行的制度___',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
            },
            ]
        },
        'dbrs_common_147': {
            title: '骗子公司',
            description: '{user}老爸的公司是集资骗子公司，公司收了股东的钱，{user}和他的老爸带着钱一溜烟跑路了。',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。',
                effects: { money: 10 }
            },
            ]
        },
        'dbrs_common_151': {
            title: '员工福利',
            description: '{user}计划公司给员工的福利是___',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
            },
            ]
        },
        'dbrs_common_152': {
            title: 'CEO的策划',
            description: '{user}计划未来10年后，公司的发展方向是___',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
            },
            ]
        },
        'dbrs_common_153': {
            title: '老爸公司的人事',
            description: '{user}老爸的公司要招聘一个前台。{user}应聘了20多个人，最后选择了___',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
            },
            ]
        },
        'dbrs_common_154': {
            title: '天才学生',
            description: '{user}在上物理课的时候突发奇想___',
            priority: 3,
            trigger_conditions: { age_range: [12, 18], required_tags: ['平凡人'] },
            options: [
            {
                text: '制造了一颗小型核弹',
                result: '你做出了选择。',
                add_tags: ['癌症']
            },
            {
                text: '制造了人造黑洞',
                result: '{user}在上物理课的时候突发奇想，制造了人造黑洞，因为质量不足导致坍缩不完全，{user}死了',
                add_tags: ['死亡']
            },
            {
                text: '使用正常教学器械制造了一台F1赛车',
                result: '你做出了选择。',
                add_tags: ['小科学家']
            },
            ]
        },
        'dbrs_common_159': {
            title: '美德',
            description: '{user}坐公交车，发现有一个老人抱着小孩没有座位坐。{user}___',
            priority: 3,
            trigger_conditions: { age_range: [8, 40], required_tags: ['平凡人'] },
            options: [
            {
                text: '帮老人抱住小孩',
                result: '{user}想帮老人忙，上前去把老人怀里的小孩揽过来……老人一愣，立马大叫抢小孩啦快报警！{user}跳进黄河也洗不清，被判2年监禁。'
            },
            {
                text: '让座',
                result: '{user}尊老爱幼，是中华人民的美德。'
            },
            {
                text: '并不理睬',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_165': {
            title: '沟通',
            description: '在和客户沟通中语言不通，{user}会___',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
            },
            ]
        },
        'dbrs_common_174': {
            title: '热恋',
            description: '{user} 与伴侣约会。他们___',
            priority: 3,
            trigger_conditions: { age_range: [6, 55], required_tags: ['平凡人'] },
            options: [
            {
                text: '在树上刻上了一个爱心，写上了他们2个的名字',
                result: '{user}和伴侣在外面谈恋爱，他们把名字刻到一颗大树上，再刻上一个大心。他们对视笑笑，两个人的脸慢慢的靠近，两个人似乎都能感受到对方的小鹿乱撞的心跳和仓促的呼吸……突然，一个冰冷的警棍触碰到了{user}，{user}看到一个警察不知道什么时候站在了他们的中间，神情非常严肃地说：“你们破坏树木，罚！”'
            },
            {
                text: '穿上小清新的衣服在河岸漫步',
                result: '你做出了选择。'
            },
            {
                text: '去游乐场玩机动游戏',
                result: '{user}和伴侣去游乐场玩机动游戏，在玩跳楼机的时候，{user}的头发卷进了机器中，机器拉扯的时候，{user}整个脑被拉扯了出来，现场甘液四射。',
                add_tags: ['死亡']
            },
            {
                text: '在家玩电动游戏',
                result: '{user}和伴侣在家玩电动游戏，因为游戏过于暴力，最后发展成情侣真人PK，情侣打架没有胜者，最后2人通通嗝屁。可喜可贺。',
                add_tags: ['死亡']
            },
            {
                text: '在小公园里吹泡泡',
                result: '{user}向天吹出一大群彩色泡泡，然后和伴侣在泡泡里傻笑着转圈圈。'
            },
            ]
        },
        'dbrs_common_175': {
            title: '恋爱与犯错',
            description: '{user}做了对不起伴侣的事情，会___',
            priority: 3,
            trigger_conditions: { age_range: [6, 55], required_tags: ['平凡人'] },
            options: [
            {
                text: '主动承认错误',
                result: '{user}对伴侣非常坦诚，对伴侣很依赖。久而久之，{user}的伴侣觉得{user}好烦，甩了{user}。',
                add_tags: ['玻璃心'],
                remove_tags: ['恋爱']
            },
            {
                text: '卖萌请求原谅',
                result: '你做出了选择。'
            },
            {
                text: '说谎掩盖',
                result: '谎言换来开心的恋爱，{user}与伴侣相处得很融洽。'
            },
            {
                text: '内疚',
                result: '你做出了选择。'
            },
            ]
        },
        'dbrs_common_179': {
            title: '成年',
            description: '{user}终于到了18岁，领了身份证后，{user}迫不及待地拉伴侣去宾馆开了一个房间，___',
            priority: 3,
            trigger_conditions: { age_range: [18, 18], required_tags: ['平凡人'] },
            options: [
            {
                text: '看球赛',
                result: '{user}终于到了18岁，领了身份证后，{user}迫不及待地拉伴侣去宾馆开了一个房间。和伴侣买好泡芙，可乐，坐在电视前看起了英超……终于可以放肆地尖叫着看球赛了！'
            },
            {
                text: '玩斗地主',
                result: '{user}终于到了18岁，领了身份证后，{user}迫不及待地拉伴侣去宾馆开了一个房间。他们带了一副牌，通宵玩两人斗地主，好好地过了把牌瘾。'
            },
            {
                text: '睡了一觉',
                result: '你做出了选择。'
            },
            {
                text: '偷食禁果',
                result: '{user}终于到了18岁，领了身份证后，{user}迫不及待地拉伴侣去宾馆开了一个房间，买了一大袋苹果，2人偎依着边看电视边吃。'
            },
            ]
        },
        'dbrs_common_178': {
            title: '调教学生',
            description: '{user}所教的班上，有一个非常顽皮的学生。{user}决定___',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
            },
            ]
        },
        'dbrs_common_189': {
            title: '恢复记忆',
            description: '{user}记起来他的一张银行卡存折的密码，去银行一查，发现自己的资产有9位数。',
            priority: 3,
            trigger_conditions: { age_range: [15, 20], required_tags: ['平凡人'] },
            options: [
            {
                text: '下一事件',
                result: '你做出了选择。',
                effects: { money: 30 }
            },
            ]
        },
        'dbrs_common_203': {
            title: '遇险',
            description: '{user}路遇一个几百斤重量级的巨型哈士奇，这哈士奇看起来好像饿极了，两只小眼盯着{user}一动不动。{user}并没有慌，他___',
            priority: 3,
            trigger_conditions: { age_range: [5, 15], required_tags: ['平凡人'] },
            options: [
            {
                text: '哈士奇好可爱，我要去摸摸',
                result: '{user}路遇一个几百斤重量级的巨型哈士奇。{user}很喜欢，他伸出手来想摸摸它的头。下一瞬间，{user}的头被哈士奇按住，手被哈士奇咬住撕了下来。哈士奇吧嗒吧嗒地吃着{user}的尸体，骨头都没有吐一根。',
                add_tags: ['死亡']
            },
            {
                text: '为避免被袭击，躺地上装死',
                result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}头脑冷静，思维清晰，想到自己读过的一本野外生存手册教过：在野外遇到危险的大型食肉动物，躺在地上装死是一个很好的保命方法。{user}照做了，躺在地上屏声息气。巨型哈士奇歪了一下狗头，似乎不知道{user}想干嘛，哈士奇跳到{user}身上，胯部贴着{user}的脸，做起了扭腰运动。',
                add_tags: ['被狗日']
            },
            {
                text: '拔腿就跑',
                result: '{user}被吓得尿湿了裤，转身就想跑，可惜脚软了，{user}扑街了。巨型哈士奇奔过来，对着{user}长大了血盆大口，撕碎了{user}的衣物。这时{user}总算站了起来，也不顾寸丝不挂，在大街上逃奔。'
            },
            {
                text: '无视',
                result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}面不改色，并不害怕，继续走自己的路。',
                add_tags: ['洞察']
            },
            {
                text: '喷火',
                result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}喷火吓走了它。'
            },
            {
                text: '隐身逃跑',
                result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}隐身逃跑，但是哈士奇却能追踪{user}的气味，最终{user}还是被哈士奇抓住。哈士奇咬住了{user}的脖子，撕扯了几下后，就断了……'
            },
            {
                text: '使用风火轮逃跑',
                result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}立即骑上风火轮，飞了起来，逃得远远的。'
            },
            {
                text: '飞行逃跑',
                result: '{user}路遇一个几百斤重量级的巨型哈士奇，{user}感到危险在逼近，无奈只能把上衣脱下，展开翅膀，飞了起来逃跑了。'
            },
            {
                text: '与其对话',
                result: '{user}路遇一个几百斤重量级的巨型哈士奇，这哈士奇看起来好像饿极了，两只小眼盯着{user}一动不动。{user}精通狗语，与这只哈士奇唠起了嗑。{user}了解到，哈士奇近来周转不灵，上有老人下有孩子，生活压力巨大，每天都是饿着肚子生活。'
            },
            ]
        },
        'dbrs_common_212': {
            title: '=NAME=参加公务员考试',
            description: '“一带一路”是申国全新的对外开放战略。下列关于“一带一路”说法错误的是：',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
            },
            ]
        },
        'dbrs_common_214': {
            title: '公务员：查水表',
            description: '{user}遇到一家人拒绝开门让他进去查水表。{user}___',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
            options: [
            {
                text: '开罚单，走人',
                result: '{user}遇到一家人拒绝开门让{user}进去查水表。{user}耸耸肩，开了罚单丢在门口就走了。'
            },
            ]
        },
        'dbrs_common_215': {
            title: '公务员：处理问题',
            description: '上级叫{user}去处理某地的居民楼拖欠水费的问题。整栋楼的居民已经累积拖欠5年水费了。{user}去到现场，发现里面住的大多是穷苦的外来打工者。',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
                result: '{user}被指派切断某个居民楼的供水，因为整栋楼的居民已经累积拖欠5年水费了。{user}在自来水管中注入毒药，把整栋楼的人毒死了。'
            },
            ]
        },
        'dbrs_common_216': {
            title: '公务员：升职',
            description: '部门里一个办公室职位有了空缺。上级给了{user}一次升职的机会，只要{user}送点礼。',
            priority: 3,
            trigger_conditions: { age_range: [20, 55], required_tags: ['平凡人'] },
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
            },
            ]
        },
        'dbrs_common_220': {
            title: '神秘快递',
            description: '有一天{user}突然收到一份没有写收货人的神秘快递，{user}一打开里面竟然是一个炸弹，旁边还有一张生日贺卡！',
            priority: 3,
            trigger_conditions: { age_range: [20, 25], required_tags: ['平凡人'] },
            options: [
            {
                text: '报警！',
                result: '有一天{user}突然收到一份没有写收货人的神秘快递，{user}一打开里面竟然是一个炸弹，旁边还有一张生日贺卡！{user}立马报警，警察来了之后发现里面原来只是生日蛋糕……最后{user}因为报假警的罪名被抓捕归案。'
            },
            {
                text: '上面有个按钮，按一下',
                result: '有一天{user}突然收到一份没有写收货人的神秘快递，{user}一打开里面竟然是一个炸弹。上面有个按钮，{user}好奇按了下去。“嘭”的一声，那个炸弹爆炸了，喷出一堆彩带，还有生日快乐4个大字……'
            },
            {
                text: '找个越远越好的地方丢掉',
                result: '有一天{user}突然收到一份没有写收货人的神秘快递，{user}一打开里面竟然是一个炸弹。{user}吓得不轻，赶紧装回去，找了个荒山野岭埋了起来。'
            },
            ]
        },
        'dbrs_common_248': {
            title: '魔法少女：战斗',
            description: '{user}看到一个粉红色头发的学妹夹着双腿，非常难受。你发现她正在被魔女折磨！{user}立马换装，进入魔女结界，突突突，脆弱的魔女被{user}三两下就解决了。然后{user}___',
            priority: 3,
            trigger_conditions: { age_range: [10, 28], required_tags: ['平凡人'] },
            options: [
            {
                text: '转身离开',
                result: '{user}再一次打败了魔女，拯救了一个粉红色头发的学妹。{user}拍拍身上的尘土，转身就走。殊不知，这个魔女再生了，变成了更巨大的魔女，一口咬掉了{user}的头……',
                add_tags: ['死亡']
            },
            {
                text: '去看看这个初中生',
                result: '{user}再一次打败了魔女，拯救了一个粉红色头发的学妹。{user}转身看着学妹，笑了笑说：“现在安全啦。”殊不知，这个魔女再生了，变成了更巨大的魔女，一口咬掉了{user}的头……',
                add_tags: ['死亡']
            },
            {
                text: '装逼',
                result: '{user}再一次打败了魔女，拯救了一个粉红色头发的学妹。{user}智慧若干支火枪在空中花式盘旋，高兴地装起了逼。殊不知，这个魔女再生了，变成了更巨大的魔女，一口咬掉了{user}的头……',
                add_tags: ['死亡']
            },
            {
                text: '鞭尸',
                result: '{user}再一次打败了魔女，拯救了一个粉红色头发的学妹。{user}发现魔女还没消散，谨慎的她抬起了更多火枪，冲魔女尸体集火。5分钟后尸体终于消失了，{user}回头寻找学妹，发现她早已吓跑了，原地只有一泡尿。'
            },
            ]
        },
        }
    },
};