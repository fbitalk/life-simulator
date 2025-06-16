# 人生模拟器

一个基于网页的人生模拟游戏，让玩家体验不同的人生选择，收集成就标签，书写属于自己的独特人生故事。

## 游戏特点

- 🎲 随机出身背景，每次都有不同的开局
- 🏷️ 丰富的标签系统，展现独特人生
- 📖 基于标签的事件触发机制
- 🔗 连续事件系统，选择影响深远
- ⚠️ 风险与机遇并存的人生抉择
- 🏆 成就系统，记录特殊人生轨迹

## 项目结构

```
life-simulator/
├── index.html         # 游戏主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   ├── game.js        # 游戏核心逻辑
│   ├── achievements.js # 成就系统
│   ├── eventManager.js # 事件管理器
│   ├── events/        # 事件相关
│   │   ├── ageEvents.js  # 年龄相关事件
│   │   ├── startEvents.js # 开始事件
│   │   ├── tagEvents.js   # 标签触发事件
│   │   └── tags.js        # 标签定义
│   └── modules/       # 功能模块
│       ├── constants.js    # 常量定义
│       ├── animations.js   # 动画效果
│       ├── conditionChecker.js # 条件检查
│       ├── eventSystem.js  # 事件系统
│       ├── eventUtils.js   # 事件工具
│       ├── keyboard.js     # 键盘控制
│       ├── moduleLoader.js # 模块加载器
│       ├── player.js       # 玩家对象
│       ├── storageUtils.js # 存储工具
│       ├── tagUtils.js     # 标签工具
│       └── uiUtils.js      # UI工具
```
## 如何运行

1. 直接在浏览器中打开 `index.html` 文件
2. 或者使用本地服务器（如 Live Server）运行项目

## 游戏玩法

1. 在主菜单选择"新的人生"
2. 选择性别并输入姓名
3. 游戏会随机生成你的出身背景
4. 随着年龄增长，你将面临各种事件和选择
5. 每个选择都可能影响你的标签和未来的事件
6. 游戏结束后可查看你的人生总结和获得的成就

## 开发者说明

本项目使用纯HTML、CSS和JavaScript开发，无需任何外部依赖。
事件系统基于标签触发机制，可以通过编辑 `events` 目录下的文件扩展游戏内容。 


# 人生模拟器事件系统完整指南

## 一、事件系统概述

游戏中的事件系统包含以下几种类型：

1. **开局事件** (`STARTING_EVENTS`) - 0岁时的出生事件
2. **开局标签事件** (`STARTING_TAG_EVENTS`) - 特殊开局的后续连续事件
3. **标签事件** (`TAG_EVENTS`) - 拥有特定标签时可触发的事件
4. **年龄段事件** (`ageEvents`) - 特定年龄段的普通事件

## 二、标签系统说明

### 2.1 标签定义结构

```javascript
TAG_DEFINITIONS: new Map([
    ["标签名", {
        description: "标签描述",
        exclusive_events: [],  // 独占事件ID数组（最高优先级）
        priority_events: [],   // 优先事件ID数组（较高优先级）
        is_red: false,        // 是否为红色标签（特殊负面状态）
        is_dynamic: false,    // 是否为动态标签
        prefix: "标签前缀:"   // 动态标签的前缀
    }]
])
```

### 2.2 红色标签机制

红色标签是特殊的负面状态标签，具有以下特性：
- 在UI中显示为红色
- 拥有红色标签时，只能触发该标签的独占事件
- 其他所有事件都会被屏蔽
- 适用于表现特殊的负面状态（如诅咒之子、绝症、通缉犯、恶魔契约等）

```javascript
["诅咒之子", {
    description: "被神秘力量诅咒",
    is_red: true,
    exclusive_events: ["curse_event"],
    priority_events: []
}]
```

### 2.3 动态标签系统

动态标签是带有数值的特殊标签（如"学习成绩:5"、"音乐天赋:3"等）：

```javascript
["学习成绩", {
    description: "学习成绩水平",
    is_dynamic: true,
    prefix: "学习成绩:",
    exclusive_events: [],
    priority_events: ["academic_competition", "scholarship_opportunity"]
}]
```

## 三、添加各类事件的方法

### 3.1 添加普通开局事件

```javascript
// 在 STARTING_EVENTS 中添加
"normal_birth_artist": {
    title: "艺术世家",
    description: "{user}出生在一个充满艺术气息的家庭。",
    weight: 12,  // 权重，影响被选中的概率
    trigger_conditions: {},  // 开局事件通常没有触发条件
    options: [
        {
            text: "继承艺术天赋",
            result: "{user}从小就被艺术熏陶。",
            effects: { 
                money: 60, 
                health: 75, 
                intelligence: 85, 
                social: 80, 
                luck: 70 
            },
            add_tags: ["艺术家庭", "艺术天分"]
        }
    ]
}
```

### 3.2 添加特殊连续开局

特殊开局通常包含多个连续事件：

```javascript
// 步骤1：在 STARTING_EVENTS 中添加特殊开局
"special_alien_birth": {
    title: "外星来客",
    description: "一个神秘的飞船降落在地球，{user}从中走出...",
    weight: 1,  // 很低的权重，因为是特殊事件
    trigger_conditions: {},
    options: [],  // 无选项，直接进入后续事件
    continue_event: "alien_identity_choice",  // 指定后续事件
    effects: { 
        money: 50, 
        health: 100, 
        intelligence: 90, 
        social: 40, 
        luck: 80 
    },
    add_tags: ["外星血统", "神秘身世"]
}

// 步骤2：在 STARTING_TAG_EVENTS 中添加后续事件
"alien_identity_choice": {
    title: "身份选择",
    description: "作为外星来客，{user}需要选择如何融入地球...",
    trigger_conditions: {
        required_tags: ["外星血统"],
        age_range: [0, 0]
    },
    options: [
        {
            text: "隐藏身份",
            result: "{user}决定像普通地球人一样生活。",
            effects: { social: 10 },
            add_tags: ["隐藏身份"],
            continue_event: "alien_power_awakening"
        },
        {
            text: "公开身份",
            result: "{user}向世界公开了自己的外星身份！",
            effects: { social: -20, intelligence: 10 },
            add_tags: ["公开的外星人"]
        }
    ]
}
```

### 3.3 添加条件结果事件

使用 `conditional_results` 实现更复杂的分支逻辑：

```javascript
"complex_choice_event": {
    title: "重大抉择",
    description: "面临一个重要的人生选择...",
    trigger_conditions: { age_range: [25, 35] },
    options: [
        {
            text: "冒险一搏",
            conditional_results: [
                {
                    // 多个条件的组合
                    conditions: {
                        tags: ["企业家", "投资高手"],
                        attributes: { intelligence: 85, luck: 70 },
                        all_required: true  // 所有条件都必须满足
                    },
                    result: "凭借经验和运气，{user}大获成功！",
                    effects: { money: 100, social: 30 },
                    add_tags: ["商业传奇"]
                },
                {
                    // 或条件
                    conditions: {
                        any_of: [
                            { tags: ["幸运星"] },
                            { attributes: { luck: 90 } }
                        ]
                    },
                    result: "运气使然，{user}获得了不错的回报。",
                    effects: { money: 50 }
                },
                {
                    // 排除条件
                    conditions: {
                        not: { tags: ["倒霉蛋", "投资失败"] }
                    },
                    result: "{user}的选择带来了一些收益。",
                    effects: { money: 20 }
                },
                {
                    // 默认结果
                    conditions: { default: true },
                    result: "事情没有按计划进行...",
                    effects: { money: -30 }
                }
            ]
        }
    ]
}
```

### 3.4 添加动态结果事件

使用 `dynamic_result` 函数动态生成结果：

```javascript
"dynamic_event": {
    title: "考试成绩",
    description: "期末考试成绩出来了...",
    trigger_conditions: { 
        age_range: [7, 18],
        required_tags: ["小学生"]
    },
    options: [
        {
            text: "查看成绩",
            result: "默认结果",  // 会被dynamic_result覆盖
            dynamic_result: function(player) {
                // 根据学习成绩标签动态生成结果
                const scoreTag = player.tags.find(tag => tag.startsWith("学习成绩:"));
                if (!scoreTag) return null;
                
                const score = parseInt(scoreTag.split(":")[1]);
                
                if (score >= 5) {
                    return {
                        result: "{user}考了全班第一！",
                        effects: { intelligence: 10, social: 15 },
                        add_tags: ["学霸", "优等生"]
                    };
                } else if (score >= 0) {
                    return {
                        result: "{user}成绩中等，还需努力。",
                        effects: { intelligence: 5 }
                    };
                } else {
                    return {
                        result: "{user}成绩不理想，需要加油了。",
                        effects: { social: -5 },
                        add_tags: ["学渣"]
                    };
                }
            }
        }
    ]
}
```

### 3.5 添加年龄段事件

在相应的年龄段对象中添加事件：

```javascript
// 幼儿期事件 (1-5岁)
toddler: {
    "first_day_kindergarten": {
        title: "第一天上幼儿园",
        description: "{user}第一次离开父母去幼儿园...",
        trigger_conditions: { age_range: [3, 4] },
        options: [
            {
                text: "勇敢面对",
                result: "{user}很快适应了幼儿园生活。",
                effects: { social: 10, intelligence: 5 },
                add_tags: ["独立"]
            },
            {
                text: "哭闹不止",
                result: "{user}哭了一整天，但最终还是适应了。",
                effects: { health: -5, social: 5 }
            }
        ]
    }
}

// 青少年事件 (13-18岁)
teenager: {
    "career_guidance": {
        title: "职业规划",
        description: "学校组织职业规划课程...",
        trigger_conditions: { age_range: [16, 18] },
        options: [
            {
                text: "立志从医",
                result: "{user}决定将来成为医生。",
                effects: { intelligence: 10 },
                add_tags: ["医学志向"]
            },
            {
                text: "创业梦想",
                result: "{user}梦想创办自己的公司。",
                effects: { social: 10 },
                add_tags: ["创业梦想"]
            }
        ]
    }
}
```

### 3.6 添加必定触发的标签事件

通过 `exclusive_events` 确保事件必定触发：

```javascript
// 步骤1：在标签定义中设置独占事件
TAG_DEFINITIONS: new Map([
    ["命运之子", {
        description: "身负特殊使命",
        exclusive_events: ["destiny_calling"],  // 这个事件会优先触发
        priority_events: []
    }]
])

// 步骤2：创建对应的独占事件
TAG_EVENTS: {
    "destiny_calling": {
        title: "命运的召唤",
        description: "预言中的时刻到了...",
        trigger_conditions: {
            required_tags: ["命运之子"],
            age_range: [18, 18]  // 精确在18岁触发
        },
        options: [
            {
                text: "接受命运",
                result: "{user}踏上了命中注定的道路。",
                effects: { health: 20, intelligence: 20, social: 20, luck: 20 },
                add_tags: ["觉醒者"]
            }
        ]
    }
}
```
### 3.6 添加动态标签的选项

```javascript
options: [
    {
        text: "选项文本",
        result: "默认结果",
        dynamic_result: function(player) {
            return eventManager.updateDynamicTag(
                player,
                "学习成绩:",  // 标签前缀
                2,             // 变化值（正数增加，负数减少）
                "{user}的学习成绩提升了。"  // 结果文本
            );
        }
    }
]

## 四、事件触发优先级

1. **红色标签独占事件**（最高优先级）
   - 拥有红色标签时，只触发其独占事件
   
2. **普通标签独占事件**（次高优先级）
   - 标签定义中的 `exclusive_events`
   
3. **标签优先事件**（较高优先级）
   - 标签定义中的 `priority_events`
   - 有3倍的权重被选中
   
4. **普通事件**（正常优先级）
   - 满足条件的所有其他事件

## 五、特殊机制说明

### 5.1 风险机制

```javascript
options: [
    {
        text: "危险选择",
        result: "这是一个有风险的选择...",
        effects: { health: -20 },
        risk: 0.3  // 30%概率直接死亡
    }
]
```

### 5.2 属性限制

- 健康、智力、社交、运气：0-100
- 金钱：0-9999
- 年龄：自然增长

### 5.3 事件链设计建议

1. 开局事件链：开局 → 开局标签事件 → 标签事件
2. 剧情事件链：通过 `continue_event` 连接多个事件
3. 成长事件链：通过年龄段和标签组合触发

### 5.4 成就系统集成

游戏包含成就系统，某些标签可以解锁成就：

```javascript
// 成就定义
achievements: [
    {
        id: 'bird_person',
        name: '鸟人',
        description: '救助过小鸟',
        icon: '🐦',
        stars: 1,
        tag: '鸟人',  // 获得此标签时自动解锁成就
        unlocked: false
    }
]
```

金色成就标签在UI中会有特殊效果：
- 带有金色渐变背景
- 闪烁动画效果
- 获得时有特殊提示

## 六、调试技巧

1. 使用 `console.log` 在事件中输出调试信息
2. 检查 `eventManager.getAvailableEvents()` 查看当前可用事件
3. 确保所有 `continue_event` 引用的事件ID存在
4. 测试条件判断逻辑是否正确
5. 使用浏览器开发者工具查看标签状态

## 七、最佳实践

1. **平衡性**：注意属性效果的平衡，避免过强或过弱
2. **连贯性**：事件链要有逻辑连贯性
3. **多样性**：为同一情况提供多种选择
4. **趣味性**：加入幽默元素和意外转折
5. **真实性**：事件要符合年龄特征和生活逻辑
6. **标签管理**：合理使用 `add_tags` 和 `remove_tags`
7. **动态内容**：善用 `dynamic_result` 创建个性化体验

## 八、文件结构

- `startEvents.js` - 开局事件和开局标签事件
- `ageEvents.js` - 年龄段事件（幼儿、童年、青少年、成年、中年、老年）
- `tagEvents.js` - 标签触发事件
- `tags.js` - 标签定义
- `eventManager.js` - 事件管理系统
- `achievements.js` - 成就系统

通过以上方法，你可以创建丰富多样的游戏内容，让每次游戏体验都独一无二！