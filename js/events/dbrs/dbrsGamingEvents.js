// dbrs 事件文件 - 自动生成
// 来源: 豆比人生 - 游戏/娱乐
// 事件数: 25
import { registerTags } from '../../data/tagRegistry.js';

// 本文件涉及的标签注册
registerTags({
    '肝硬化': { color: 'red' },
    '高情商': { color: 'pink' },
});

export const dbrsGamingEvents = {
    '免费玩家': {
        events: {
        'dbrs_1411': {
            title: '贪婪玩约：无限的任务',
            description: '{user}每天都上线做刷任务练级，刷怪跑腿，刷怪跑腿，刷怪跑腿……无限循环。{user}慢慢看着自己的角色越来越强，成就感油然而生。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['免费玩家'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1412': {
            title: '贪婪玩约：攻城大战',
            description: '{user}今天去攻城，几百人同屏战斗，整个屏幕都是刀光剑影、黑血飞溅和魔法光芒。打到激动的时候，{user}还情不自禁地鬼叫出声。{user}挤在人群中，从混乱中被打倒了，成了攻城大战的炮灰。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['免费玩家'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1414': {
            title: '贪婪玩约：失去乐趣',
            description: '{user}又在野外被高级玩家秒杀了，{user}已经数不清自己被这样杀了多少次了。无论{user}花多少时间去打装备、练级，都会有更强的人民币玩家来秒杀{user}。{user}逐渐对这个残酷的江湖失去了乐趣，{user}挥挥泪，删除了《贪婪玩月》。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['免费玩家'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['免费玩家']
        }
            ]
        }
        }
    },
    '游戏陪玩': {
        events: {
        'dbrs_1440': {
            title: '陪宅男',
            description: '{user}应招去到了一个宅男的家，这个宅男要{user}坐在他的电脑前玩GALGAME。宅男坐在{user}旁边，露出猥琐的笑容看着{user}玩GALGAME。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['游戏陪玩', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1441': {
            title: '陪职业玩家',
            description: '{user}应招去到了一个职业电子竞技俱乐部陪玩。在俱乐部里玩的游戏都非常高端，{user}没法参与。{user}只能在里面斟茶倒水，还做起了按摩工。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['游戏陪玩', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1442': {
            title: '陪玩：跑团游戏',
            description: '{user}兼职是陪玩游戏。这一次，他应招去到一个宅男聚会地，和一帮肥宅一起玩DND3.0规则的跑团游戏。因为有女玩家{user}在场，宅男们玩得非常入戏。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['游戏陪玩', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1443': {
            title: '陪玩：手机游戏',
            description: '{user}应招去到一个有WIFI的房间，和3个小学生一起组队“吃鸡”。这3个小学生看起来斯斯文文的，拿起手机启动游戏后，都成了撩妹高手。他们在游戏里狂飙土味情话，熏得{user}头晕。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['游戏陪玩', '女性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
    '爽文上瘾': {
        events: {
        'dbrs_1341': {
            title: '沉迷爽文',
            description: '{user}沉迷爽文，成功戒掉了电子游戏……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爽文上瘾', '电子海洛因'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['电子海洛因']
        }
            ]
        }
        }
    },
    '电子海洛因': {
        events: {
        'dbrs_275': {
            title: '素质游戏',
            description: '{user}玩剁他贰(网络游戏)的时候，被队友喷技术太垃圾，队友骂得很难听，把{user}的每个亲人都说得飞起来一次，{user}___',
            priority: 5,
            trigger_conditions: { age_range: [10, 40], required_tags: ['电子海洛因'] },
            options: [
        {
            text: '不说话静静地继续玩',
            result: '{user}玩网络游戏的时候，有个队友跳出来喷{user}玩得太菜了，{user}完全不予理会，显得非常有逼格。',
            add_tags: ['高情商']
        },
        {
            text: '还嘴',
            result: '{user}玩网络游戏的时候，因为被队友骂了2句，{user}就和这个队友斗起了键盘，好好的网络游戏，变成了网络文字辩论游戏。',
            add_tags: ['好胜']
        },
        {
            text: '秒退',
            result: '{user}玩网络游戏的时候，被队友骂了几句，{user}气不过，秒退了游戏逃避。',
            add_tags: ['逃避']
        },
        {
            text: '打电话报警',
            result: '{user}玩网络游戏的时候，被某个玩家的污言侮辱到了，他抄起电话就打了110。警察来到，听了事情经过后，想了想，还是把{user}扭送回派出所。',
            add_tags: ['监狱时间']
        },
        {
            text: '无视这些喷子',
            result: '{user}玩网络游戏的时候，有个队友跳出来喷{user}玩得太菜了，{user}完全不予理会，显得非常有逼格。'
        }
            ]
        },
        'dbrs_329': {
            title: '电击治疗中心',
            description: '{user}因为沉迷网络游戏，终于被送进了陶教授的电教育机构治疗。机构室内，一排排的比卡丘技师正在一对一治疗病人。{user}看到这些，不寒而栗。',
            priority: 5,
            trigger_conditions: { age_range: [5, 30], required_tags: ['电子海洛因'] },
            options: [
        {
            text: '挣脱逃跑',
            result: '{user}因为沉迷网络游戏，终于被送进了陶教授的电教育机构治疗。{user}在押送的过程中，尝试逃跑，被看守的比卡丘释放十万伏特击中，{user}被电成了黑炭，瞬间死去。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '不幸离世'
        },
        {
            text: '乖乖治疗',
            result: '{user}因为沉迷网络游戏，终于被送进了陶教授的电教育机构治疗。经过了2年的持续电击治疗，他一听到游戏这个词，就想到了比卡丘，再也不敢碰游戏了。',
            effects: { health: -45 },
            add_tags: ['风湿'],
            remove_tags: ['电子海洛因']
        },
        {
            text: '咬舌自尽',
            result: '{user}因为沉迷网络游戏，终于被送进了陶教授的电教育机构治疗。绝望的{user}想要咬舌自尽，咬了之后，除了很痛，并没有其他事情发生……电视都是骗人的啊。最后，经过了2年的持续电击治疗，他一听到游戏这个词，就想到了比卡丘，再也不敢碰游戏了。',
            effects: { health: -65 },
            add_tags: ['风湿'],
            remove_tags: ['电子海洛因'],
            death_flag: true,
            death_reason: '=NAME=因为沉迷网络游戏，终于被送进了陶教授的电教育机构治疗。绝望的=NAME=想要咬舌自尽，咬了之后，除了很痛，并没有其他事情发生……电视都是骗人的啊。最后，经过了2年的持续电击治疗，他一听到游戏这个词，就想到了比卡丘，再也不敢碰游戏了。'
        },
        {
            text: '尝试贿赂院长，逃过治疗',
            result: '{user}因为沉迷网络游戏，终于被送进了陶教授的电教育机构治疗。{user}找到机构高层，给了几个红包，又被放了出来。'
        }
            ]
        },
        'dbrs_446': {
            title: '同事交流',
            description: '有一天，有个女同事问{user}：你为什么玩游戏没事就冲个几百块？有什么意思呢？ {user}回答：“好玩啊！”女同事一脸傲娇地说：“那你还不如每次给我几百块，天天玩我不好吗？”{user}回答：___',
            priority: 5,
            trigger_conditions: { age_range: [20, 55], required_tags: ['电子海洛因', '男性'] },
            options: [
        {
            text: '你他妈能有游戏好玩？',
            result: '你做出了选择。'
        },
        {
            text: '掏几百块出来给女同事',
            result: '{user}被女同事勾搭，{user}恋爱了。',
            add_tags: ['恋爱中']
        },
        {
            text: '根本不想鸟你',
            result: '你做出了选择。'
        },
        {
            text: '你也来玩，我给你几百游戏币',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_449': {
            title: '暴力血腥网游',
            description: '{user}在玩一款暴力血腥的网游。因为虐待猪、脚踢鸭子、杀鸡等一系列恶劣的虐待小动物行为。被动物保护协会的人联名举报，{user}送进了监狱。',
            priority: 5,
            trigger_conditions: { age_range: [15, 45], required_tags: ['电子海洛因', '男性'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['电子海洛因']
        }
            ]
        },
        'dbrs_450': {
            title: '屠龙宝刀',
            description: '{user}在一次通宵玩网络游戏的过程中，打出了游戏中最极品的装备，屠龙宝刀。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [15, 45], required_tags: ['电子海洛因', '男性'] },
            options: [
        {
            text: '立马拿去欺负其他玩家',
            result: '{user}在一次通宵玩网络游戏的过程中，打出了游戏中最极品的装备，屠龙宝刀。{user}装备上宝刀，小人得志，满世界杀人。最后引起了公愤，被杀的玩家纷纷组织起来，人肉到{user}后，玩家们对{user}进行殴打泄愤，致其死亡。',
            add_tags: ['死亡'],
            death_flag: true,
            death_reason: '=NAME=在一次通宵玩网络游戏的过程中，打出了游戏中最极品的装备，屠龙宝刀。=NAME=装备上宝刀，小人得志，满世界杀人。最后引起了公愤，被杀的玩家纷纷组织起来，人肉到=NAME=后，玩家们对=NAME=进行殴打泄愤，致其死亡。'
        },
        {
            text: '丢掉，避免引来杀身之祸',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_463': {
            title: '肝硬化',
            description: '{user}在一次常规体检中，肝功能不正常。详细检验后，查出了肝硬化。',
            priority: 5,
            trigger_conditions: { age_range: [35, 120], required_tags: ['电子海洛因'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['肝硬化'],
            remove_tags: ['电子海洛因']
        }
            ]
        },
        'dbrs_481': {
            title: '近视眼',
            description: '因为经常沉迷吸取电子海洛因，{user}近视了。',
            priority: 5,
            trigger_conditions: { age_range: [18, 35], required_tags: ['电子海洛因'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['近视眼']
        }
            ]
        },
        'dbrs_696': {
            title: '职业玩家',
            description: '{user}经常沉迷一款名叫《反恐精英：开箱》的游戏，他技术挺很好，还小有名气。有一天有个姓王的年轻人找到{user}，邀请他加入到老干妈战队，成为职业玩家。{user}___',
            priority: 5,
            trigger_conditions: { age_range: [15, 120], required_tags: ['电子海洛因'] },
            options: [
        {
            text: '一口答应',
            result: '你做出了选择。'
        },
        {
            text: '拒绝，玩游戏只为开心',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1318': {
            title: '章鱼书院',
            description: '{user}因为沉迷网络游戏，被强行送进了一所名为章鱼书院修身教育专修学校的教育机构。',
            priority: 5,
            trigger_conditions: { age_range: [10, 40], required_tags: ['电子海洛因'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1341': {
            title: '沉迷爽文',
            description: '{user}沉迷爽文，成功戒掉了电子游戏……',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['爽文上瘾', '电子海洛因'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['电子海洛因']
        }
            ]
        }
        }
    },
    '读书世界：VIP': {
        events: {
        'dbrs_1281': {
            title: '读书世界：VIP',
            description: '{user}成为了VIP后，___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['读书世界：VIP'] },
            options: [
        {
            text: '杀新手',
            result: '{user}成为了VIP后就守在新手村门口杀新手，乐此不疲。'
        },
        {
            text: '离开游戏',
            result: '{user}成为了VIP后，随着身体一阵哆嗦。他感觉这个游戏索然无味，于是离开了读书世界。'
        }
            ]
        },
        'dbrs_1282': {
            title: '读书世界：VIP',
            description: '{user}成为了VIP后，能随意在读书世界中穿梭。用上帝视角看着其他玩家用功读书，累计经验升级，这些人看起来多么的渺小。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['读书世界：VIP'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1283': {
            title: '读书世界：VIP',
            description: '{user}没有读过任何书，就去参加了读书世界里的状元考试，{user}用他的VIP特权成为了考试第一名。其他免费玩家即使再努力，也只能屈居第二。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['读书世界：VIP'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。'
        }
            ]
        },
        'dbrs_1284': {
            title: '读书世界：VIP',
            description: '{user}成为VIP后，在游戏中已经成为老大。随着身体一阵哆嗦，他感觉这个游戏索然无味，于是离开了读书世界。',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['读书世界：VIP'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['读书世界：VIP']
        }
            ]
        }
        }
    },
    '赌博': {
        events: {
        'dbrs_253': {
            title: '敏感词',
            description: '{user}和朋友在坐地铁的时候，被突如其来的警察抓进了派出所。原因是他们聊斗地主的时候，说了太多关于炸弹的敏感词。',
            priority: 5,
            trigger_conditions: { age_range: [6, 120], required_tags: ['赌博'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            remove_tags: ['赌博']
        }
            ]
        },
        'dbrs_841': {
            title: '与赌友打牌',
            description: '{user}在和朋友打牌，赌钱娱乐。朋友失误了，出错了牌，正懊悔不已。此时{user}说：___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['赌博'] },
            options: [
        {
            text: '“打的不错”',
            result: '有一天，{user}与朋友打牌时，发生口角，两人厮打成一团。事情闹大后，两人都被抓进了大牢。',
            add_tags: ['监狱时间'],
            remove_tags: ['赌博']
        },
        {
            text: '“谢谢你”',
            result: '有一天，{user}与朋友打牌时，发生口角，两人厮打成一团。事情闹大后，两人都被抓进了大牢。'
        },
        {
            text: '“我很抱歉”',
            result: '你做出了选择。'
        },
        {
            text: '“那真是个失误”',
            result: '你做出了选择。'
        },
        {
            text: '“你将成为我的猎物”',
            result: '{user}在和朋友打牌，赌钱娱乐。朋友失误了，出错了牌，正懊悔不已。此时{user}说：“你将成为我的猎物。”他的朋友脸一红，就开始脱衣服……',
            add_tags: ['恋爱中']
        },
        {
            text: '“打得好，我认输”',
            result: '{user}和朋友聚赌，他输了很多钱。',
            effects: { money: -3 }
        }
            ]
        },
        'dbrs_1348': {
            title: '打麻将',
            description: '{user}和人打麻将时因规则问题大打出手，最后闹到警察局。经民警调解后，不但矛盾解开了，而且两人竟然成为了恋人。',
            priority: 5,
            trigger_conditions: { age_range: [20, 120], required_tags: ['赌博'] },
            options: [
        {
            text: '下一事件',
            result: '你做出了选择。',
            add_tags: ['恋爱中']
        }
            ]
        },
        'dbrs_1449': {
            title: '斗地主',
            description: '{user}在和舍友打牌，赌钱娱乐。舍友失误了，出错了牌，正懊悔不已。此时{user}说：___',
            priority: 5,
            trigger_conditions: { age_range: [1, 120], required_tags: ['赌博'] },
            options: [
        {
            text: '“打的不错”',
            result: '{user}在和舍友打牌，赌钱娱乐。舍友失误了，出错了牌，正懊悔不已。此时{user}说：“打得不错。”舍友听后不适，也回了一句：“打得不错。”'
        },
        {
            text: '“谢谢你”',
            result: '你做出了选择。'
        },
        {
            text: '“我很抱歉”',
            result: '你做出了选择。'
        },
        {
            text: '“那真是个失误”',
            result: '你做出了选择。'
        },
        {
            text: '“你将成为我的猎物”',
            result: '{user}在和舍友打牌，赌钱娱乐。舍友失误了，出错了牌，正懊悔不已。此时{user}说：“你将成为我的猎物。”舍友听后脸一红，就开始脱衣服……'
        },
        {
            text: '“打得好，我认输”',
            result: '你做出了选择。'
        }
            ]
        }
        }
    },
};