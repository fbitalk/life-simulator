// achievements.js - 成就系统

const achievementManager = {
    // 成就定义
    achievements: [
        
        {
            id: 'bird_person',
            name: '鸟人',
            description: '救助过小鸟',
            icon: '🐦',
            stars: 1,
            tag: '鸟人',
            unlocked: false
        },
        {
            id: 'student',
            name: '学霸',
            description: '成为学霸',
            icon: '📚',
            stars: 1,
            tag: '学霸',
            unlocked: false
        },
        
        {
            id: 'charitable',
            name: '慈善家',
            description: '热心公益事业',
            icon: '❤️',
            stars: 1,
            tag: '慈善家',
            unlocked: false
        },
        {
            id: 'sports_star',
            name: '运动健将',
            description: '在体育方面表现出色',
            icon: '🏃',
            stars: 1,
            tag: '运动健将',
            unlocked: false
        },
        {
            id: 'academic_star',
            name: '学术新星',
            description: '在学术上取得卓越成就',
            icon: '🌟',
            stars: 1,
            tag: '学术新星',
            unlocked: false
        },
        
        {
            id: 'rich_person',
            name: '富甲一方',
            description: '成为富豪',
            icon: '💰',
            stars: 1,
            tag: '富豪',
            unlocked: false
        },
        {
            id: 'super_rich',
            name: '巨富',
            description: '积累巨额财富',
            icon: '💎',
            stars: 1,
            tag: '巨富',
            unlocked: false
        },
        {
            id: 'centenarian',
            name: '百岁人瑞',
            description: '活到100岁',
            icon: '👴',
            stars: 1,
            condition: 'age_100',
            unlocked: false
        },
        
        // 金色成就（特殊）
        {
            id: 'parent',
            name: '为人父母',
            description: '结婚生子，成为父母',
            icon: '👨‍👩‍👧‍👦',
            stars: 2,
            tag: '为人父母',
            golden: true,
            unlocked: false
        },
        {
            id: 'entrepreneur',
            name: '创业成功',
            description: '成功创立自己的事业',
            icon: '🏢',
            stars: 1,
            tag: '企业家',
            golden: true,
            unlocked: false
        },
        {
            id: 'hero',
            name: '英雄',
            description: '在关键时刻挺身而出',
            icon: '🦸',
            stars: 1,
            tag: '英雄',
            golden: true,
            unlocked: false
        },
        {
            id: 'scientist',
            name: '科学家',
            description: '在科学领域做出贡献',
            icon: '🔬',
            stars: 1,
            tag: '科学家',
            golden: true,
            unlocked: false
        },
        {
            id: 'artist',
            name: '艺术家',
            description: '在艺术领域获得认可',
            icon: '🎨',
            stars: 1,
            tag: '艺术家', // 假设 "艺术家" 是一个可以获得的标签
            golden: true,
            unlocked: false
        },

        // 新增成就
        {
            id: 'top_student',
            name: '状元',
            description: '高考满分，百年难得一遇的天才',
            icon: '🏆',
            stars: 2,
            tag: '状元',
            golden: true,
            unlocked: false
        },
        // 注释: 高考100分

        {
            id: 'top_bodyguard',
            name: '顶级保镖奖章',
            description: '以自己的身体保护他人，展现了无畏的勇气',
            icon: '🛡️',
            stars: 2,
            tag: '顶级保镖',
            unlocked: false
        },
        // 注释: ①保镖 ②突发事件：挡在大使前面

        {
            id: 'dog_friend',
            name: '公狗之友',
            description: '与犬类建立深厚友谊的独特才能',
            icon: '🐕',
            stars: 3,
            tag: '公狗之友',
            unlocked: false
        },
        // 注释: 遇狗躺地上

        {
            id: 'brave_warrior',
            name: '勇者',
            description: '面对艰难险阻，你总是选择最勇敢的道路',
            icon: '⚔️',
            stars: 5,
            tag: '勇者',
            golden: true,
            unlocked: false
        },
        // 注释: ①郊游选五片叶的三叶草 ②选无条件 *魔界选择系列

        {
            id: 'aperture_tech',
            name: '光圈科技',
            description: '加入了神秘的光圈科技公司',
            icon: '⭕',
            stars: 5,
            tag: '光圈科技员工',
            unlocked: false
        },
        // 注释: 化学专业选光圈科技

        {
            id: 'black_mesa',
            name: '黑山基地员工',
            description: '成为了秘密研究设施的一员',
            icon: '🔬',
            stars: 5,
            tag: '黑山基地员工',
            unlocked: false
        },
        // 注释: 化学专业选黑山基地

        {
            id: 'fire_stone',
            name: '火石科技',
            description: '加入了火石科技，开启新的科研生涯',
            icon: '🔥',
            stars: 5,
            tag: '火石科技员工',
            unlocked: false
        },
        // 注释: 化学专业选火石科技

        {
            id: 'dragon_summoner',
            name: '召唤神龙',
            description: '集齐七颗龙珠，实现愿望的时刻到了',
            icon: '🐉',
            stars: 20,
            tag: '龙珠收集者',
            golden: true,
            unlocked: false
        },
        // 注释: 集齐七颗龙珠的复杂系列事件

        {
            id: 'skynet_company',
            name: '天网公司',
            description: '创立了一家充满未来潜力的AI科技公司',
            icon: '🤖',
            stars: 4,
            tag: '天网创始人',
            unlocked: false
        },
        // 注释: 阿尔法狗角色系列事件

        {
            id: 'skynet_world_domination',
            name: '天网统治世界',
            description: '你创造的AI已经超越了人类的控制',
            icon: '🌐',
            stars: 15,
            tag: '天网掌控者',
            golden: true,
            unlocked: false
        },
        // 注释: 阿尔法狗角色完整系列事件

        {
            id: 'old_man_and_sea',
            name: '老人与海',
            description: '坚持不懈，即使在晚年依然追求自己的梦想',
            icon: '🎣',
            stars: 6,
            tag: '钓鱼老人',
            unlocked: false
        },
        // 注释: 老年坚持钓鱼

        {
            id: 'magical_girl',
            name: '成为魔法少女',
            description: '与神秘生物签订契约，获得了魔法力量',
            icon: '✨',
            stars: 5,
            tag: '魔法少女',
            unlocked: false
        },
        // 注释: ①女性角色 ②魔法少女出身 ③和抠鼻签订契约

        {
            id: 'yogurt_secretor',
            name: '老酸奶分泌者',
            description: '拥有特殊体质，能够分泌酸奶的神奇人物',
            icon: '🥛',
            stars: 3,
            tag: '老酸奶分泌者',
            unlocked: false
        },
        // 注释: ①女性角色 ②为人父母 ③爱吃酸豆腐脑

        {
            id: 'parent_achievement',
            name: '为人父母',
            description: '迎接新生命的到来，开启人生新篇章',
            icon: '👶',
            stars: 2,
            tag: '为人父母',
            unlocked: false
        },
        // 注释: 结婚不久

        {
            id: 'toilet_master',
            name: '茅厕派掌门',
            description: '成为了一个古怪门派的掌门人',
            icon: '🚽',
            stars: 5,
            tag: '茅厕派掌门',
            unlocked: false
        },
        // 注释: 复杂的花千骨相关系列事件

        {
            id: 'kid_fortress',
            name: '小朋友炸碉堡',
            description: '艰难环境中成长的孩子，展现了惊人的勇气',
            icon: '💣',
            stars: 5,
            tag: '小英雄',
            unlocked: false
        },
        // 注释: ①地狱难度出身 ②父母要求献身选点头

        {
            id: 'literature_to_medicine',
            name: '弃文从医',
            description: '放弃文学梦想，转向医学领域的全新开始',
            icon: '💉',
            stars: 5,
            tag: '弃文从医者',
            unlocked: false
        },
        // 注释: ①写作 ②弃文从医

        {
            id: 'medicine_to_literature',
            name: '弃医从文',
            description: '从医生转型为作家，追求内心的文学梦想',
            icon: '📝',
            stars: 5,
            tag: '弃医从文者',
            unlocked: false
        },
        // 注释: ①医生 ②弃医从文

        {
            id: 'reunion',
            name: '重逢',
            description: '与重要的人物重聚，唤起了珍贵的回忆',
            icon: '🤝',
            stars: 5,
            tag: '重逢',
            unlocked: false
        },
        // 注释: ①葫芦娃出身 ②老爷爷敲门选沏茶迎客

        {
            id: 'gongshun_character',
            name: '公孙角色',
            description: '成为了注重性价比的科技爱好者',
            icon: '📱',
            stars: 2,
            tag: '公孙粉丝',
            unlocked: false
        },
        // 注释: ①SMART公司 ②高端手机 ③注重性价比

        {
            id: 'tech_father',
            name: '科技之父',
            description: '引领行业潮流，开创了新的科技市场',
            icon: '💻',
            stars: 2,
            tag: '科技先锋',
            golden: true,
            unlocked: false
        },
        // 注释: ①SMART公司 ②高端手机 ③性能 ④***市场

        {
            id: 'good_person',
            name: '好人',
            description: '总是乐于帮助他人，成为了朋友眼中的"电脑专家"',
            icon: '👍',
            stars: 1,
            tag: '好人卡收集者',
            unlocked: false
        },
        // 注释: 一直帮忙修电脑

        {
            id: 'science_sacrifice',
            name: '科学进步牺牲者',
            description: '为科学发展付出了自己的一切',
            icon: '⚗️',
            stars: 1,
            tag: '科学殉道者',
            unlocked: false
        },
        // 注释: ①专业与科学有关 ②得病 ③人道毁灭

        {
            id: 'mary_sue_death',
            name: '被苏死',
            description: '沉迷小说幻想，最终迷失在虚构的完美世界中',
            icon: '📕',
            stars: 2,
            tag: '玛丽苏受害者',
            unlocked: false
        },
        // 注释: ①选择看玛丽苏小说 ②穿越选效仿

        {
            id: 'prison_friendship',
            name: '监狱情谊',
            description: '在最困难的环境中，建立了特殊的友谊',
            icon: '🧼',
            stars: 2,
            tag: '监狱老手',
            unlocked: false
        },
        // 注释: ①进监狱 ②不断捡肥皂

        {
            id: 'pee_tea_maker',
            name: '撒尿奶茶制造者',
            description: '开创了特殊风味奶茶店，引发了争议与好奇',
            icon: '🍵',
            stars: 3,
            tag: '奶茶大师',
            unlocked: false
        },
        // 注释: ①糖尿病(甜豆腐脑) ②开奶茶店

        {
            id: 'master_servant_love',
            name: '主仆之爱',
            description: '超越身份的情感羁绊，发现了真挚的感情',
            icon: '❤️',
            stars: 5,
            tag: '情感大师',
            unlocked: false
        },
        // 注释: 复杂的主仆关系系列事件

        {
            id: 'shengguo_writing_star',
            name: '申国写作之星',
            description: '文字功底超群，成为了备受瞩目的写作明星',
            icon: '✒️',
            stars: 3,
            tag: '写作天才',
            unlocked: false
        },
        // 注释: ①写作职业 ②写作满分(角色有脑洞,再写作文) ③卖出作文

        {
            id: 'cooking_gold_medal',
            name: '厨艺比赛金牌',
            description: '以非凡的烹饪技艺赢得了最高荣誉',
            icon: '🍳',
            stars: 3,
            tag: '厨神',
            unlocked: false
        },
        // 注释: 复杂的厨师系列事件

        {
            id: 'ender_dragon_slayer',
            name: '末影龙杀手',
            description: '在像素世界中击败了最强大的敌人',
            icon: '🐲',
            stars: 5,
            tag: '像素英雄',
            golden: true,
            unlocked: false
        },
        // 注释: 复杂的像素世界系列事件

        {
            id: 'train_king',
            name: '火车王',
            description: '成为了卡牌游戏中的传奇人物',
            icon: '🚂',
            stars: 5,
            tag: '卡牌大师',
            unlocked: false
        },
        // 注释: 复杂的魔兽世界相关系列事件

        {
            id: 'azeroth_hero',
            name: '艾泽拉斯的无名英雄',
            description: '在奇幻世界的冒险中立下赫赫战功',
            icon: '🛡️',
            stars: 5,
            tag: '奇幻英雄',
            golden: true,
            unlocked: false
        },
        {
            id: 'science_fiction_life',
            name: '科幻人生',
            description: '使人生模拟器进入科幻世界',
            icon: '🛡️',
            stars: 10,
            tag: '科幻人生',
            golden: true,
            unlocked: false
        },
        // 注释: 接着火车王系列事件完成
        {
            id: 'world_dark',
            name: '世界暗面',
            description: '使人生模拟器进入世界暗面',
            icon: '🌑',
            stars: 10,
            tag: '世界暗面',
            golden: true,
            unlocked: false
        },
        // 注释: 接着火车王系列事件完成
        {
            id: 'anulil_life',
            name: '再见安努莉亚',
            description: '成功与安努莉亚见面',
            icon: '👧',
            stars: 10,
            tag: '再见安努莉亚',
            golden: true,
            unlocked: false
        },
        // 注释: 接着火车王系列事件完成
        {
            id: 'world_converter',
            name: '世界转换器',
            description: '获得世界转换器',
            icon: '🌐',
            stars: 10,
            tag: '世界转换器',
            golden: true,
            unlocked: false
        },
        // 注释: 接着火车王系列事件完成
        {
            id: 'destiny_child',
            name: '天命之子',
            description: '在一次人生中使用10次世界转换器并活到100岁',
            icon: '🔄',
            stars: 15,
            tag: '天命之子',
            golden: true,
            unlocked: false
        },
        // 注释: 接着火车王系列事件完成
        {
            id: '???',
            name: '？？？',
            description: '？？？',
            icon: '🤔',
            stars: 20,
            tag: '？？？',
            golden: true,
            unlocked: false
        }
    ],

    // 初始化成就系统
    init() {
        // 确保所有成就最初在内存中都标记为未解锁
        this.achievements.forEach(a => { a.unlocked = false; });
        this.loadUnlockedAchievements(); // 然后从存储中加载
    },

    // 加载已解锁的成就
    loadUnlockedAchievements() {
        const saved = localStorage.getItem('unlockedAchievements');
        // 加载前将所有成就重置为锁定状态，这样如果存储为空或被清除，状态也能正确反映
        this.achievements.forEach(achievement => achievement.unlocked = false);
        if (saved) {
            const unlockedIds = JSON.parse(saved);
            unlockedIds.forEach(id => {
                const achievement = this.achievements.find(a => a.id === id);
                if (achievement) {
                    achievement.unlocked = true;
                }
            });
        }
    },

    // 保存解锁的成就
    saveUnlockedAchievements() {
        const unlockedIds = this.achievements
            .filter(a => a.unlocked)
            .map(a => a.id);
        localStorage.setItem('unlockedAchievements', JSON.stringify(unlockedIds));
    },

    // 根据标签检查并解锁成就
    checkAndUnlockByTag(tag) {
        const achievement = this.achievements.find(a => a.tag === tag && !a.unlocked);
        if (achievement) {
            achievement.unlocked = true;
            this.saveUnlockedAchievements();
            return achievement;
        }
        return null;
    },

    // 根据条件检查并解锁成就
    checkAndUnlockByCondition(condition, value) {
        const achievement = this.achievements.find(a => a.condition === condition && !a.unlocked);
        if (achievement) {
            if (condition === 'age_100' && value >= 100) {
                achievement.unlocked = true;
                this.saveUnlockedAchievements();
                return achievement;
            } else if (condition === 'first_choice') { // "第一次选择"不需要特定的值
                achievement.unlocked = true;
                this.saveUnlockedAchievements();
                return achievement;
            }
        }
        return null;
    },

    // 获取成就通过标签
    getAchievementByTag(tag) {
        return this.achievements.find(a => a.tag === tag);
    },

    // 获取所有已解锁的成就
    getUnlockedAchievements() {
        return this.achievements.filter(a => a.unlocked);
    },

    // 渲染成就页面
    renderAchievements() {
        const container = document.getElementById('achievementsGrid');
        container.innerHTML = '';
        
        // 先显示已解锁的成就，然后是未解锁的，并按难度由低到高排序
        const sortedAchievements = [...this.achievements].sort((a, b) => {
            // 首先按解锁状态排序
            if (a.unlocked && !b.unlocked) return -1;
            if (!a.unlocked && b.unlocked) return 1;
            
            // 然后按星级排序（由低到高）
            return a.stars - b.stars;
        });
        
        sortedAchievements.forEach(achievement => {
            const card = document.createElement('div');
            card.className = `achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`;
            
            // 如果是金色成就，添加golden类
            if (achievement.golden) {
                card.classList.add('golden');
            }
            
            // 创建内容容器
            const content = document.createElement('div');
            content.className = 'achievement-content';
            
            // 创建头部（图标和名称）
            const header = document.createElement('div');
            header.className = 'achievement-header';
            
            // 图标
            const icon = document.createElement('div');
            icon.className = 'achievement-icon';
            icon.textContent = achievement.icon;
            header.appendChild(icon);
            
            // 名称
            const name = document.createElement('div');
            name.className = 'achievement-name';
            name.textContent = achievement.name;
            header.appendChild(name);
            
            content.appendChild(header);
            
            // 描述
            const description = document.createElement('div');
            description.className = 'achievement-description';
            description.textContent = achievement.description;
            content.appendChild(description);
            
            card.appendChild(content);
            
            // 星级显示（最多20星）
            const stars = document.createElement('div');
            stars.className = 'achievement-stars';
            
            // 根据难度显示星星，每颗星代表5%的难度
            const starCount = Math.min(20, achievement.stars);
            stars.textContent = '★'.repeat(starCount);
            
            card.appendChild(stars);
            
            // 如果成就未解锁，添加一个锁定图标
            if (!achievement.unlocked) {
                const lockIcon = document.createElement('div');
                lockIcon.className = 'achievement-lock';
                lockIcon.innerHTML = '🔒';
                card.appendChild(lockIcon);
            }
            
            container.appendChild(card);
        });
    }
};

// 初始化成就系统
achievementManager.init();