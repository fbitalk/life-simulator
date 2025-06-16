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

### 2.4 标签分类

系统中的标签按功能分为以下几类：

- **基础标签** - 基本人口学特征（如"富二代"、"男性"、"女性"、"小学生"）
- **性格标签** - 人物性格特点（如"高情商"、"诚实"、"勇敢"、"胆小"）
- **兴趣标签** - 人物爱好和兴趣（如"编程"、"科幻"、"哲学"、"二次元"）
- **背景标签** - 人物成长经历和背景（如"网吧养大"、"医学奇迹"、"失忆"）
- **能力标签** - 人物特殊能力和技能（如"记忆超群"、"洞察力"、"逻辑思维"）
- **动态标签** - 可随游戏进程变化的数值（如"音乐天赋"、"学习成绩"）
- **红色标签** - 特殊负面状态（如"诅咒之子"、"绝症"、"通缉犯"）
- **物品标签** - 角色拥有的特殊物品（如"神奇道具"、"如意门"）
- **状态标签** - 角色当前状态（如"学霸"、"运动健将"、"为人父母"）

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

### 3.7 添加动态标签的选项

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
```

### 3.8 添加风险事件

风险事件有一定概率导致角色死亡或其他严重后果：

```javascript
"dangerous_adventure": {
    title: "危险冒险",
    description: "{user}面临一个危险的冒险机会...",
    trigger_conditions: { age_range: [18, 40] },
    options: [
        {
            text: "冒险一试",
            result: "{user}勇敢地接受了挑战，成功征服了危险！",
            effects: { health: -10, luck: 10, social: 20 },
            risk: 0.3,  // 30%概率直接死亡
            risk_text: "{user}在冒险中遭遇了意外，不幸离世..."  // 可选的风险事件文本
        },
        {
            text: "保持谨慎",
            result: "{user}选择了更安全的方式。",
            effects: { health: 5 }
        }
    ]
}
```

## 四、事件触发优先级与机制

### 4.1 触发优先级

1. **红色标签独占事件**（最高优先级）
   - 拥有红色标签时，只触发其独占事件
   
2. **普通标签独占事件**（次高优先级）
   - 标签定义中的 `exclusive_events`
   
3. **标签优先事件**（较高优先级）
   - 标签定义中的 `priority_events`
   - 有3倍的权重被选中
   
4. **普通事件**（正常优先级）
   - 满足条件的所有其他事件

### 4.2 事件索引机制

系统在初始化时会建立事件索引，用于快速查找和触发事件：

```javascript
initializeEventIndex() {
    // 清空索引
    this.eventIndex.clear();
    
    // 添加标签事件
    Object.entries(window.TAG_EVENTS).forEach(([id, event]) => {
        this.eventIndex.set(id, event);
    });

    // 添加年龄段事件
    Object.entries(this.ageEvents).forEach(([ageGroup, events]) => {
        Object.entries(events).forEach(([id, event]) => {
            this.eventIndex.set(id, event);
        });
    });

    // 添加开局事件
    Object.entries(window.STARTING_EVENTS).forEach(([id, event]) => {
        this.eventIndex.set(id, event);
    });

    // 添加开局标签事件
    Object.entries(window.STARTING_TAG_EVENTS).forEach(([id, event]) => {
        this.eventIndex.set(id, event);
    });
}
```

### 4.3 后续事件机制

系统会追踪所有后续事件，确保它们只通过前置事件触发：

```javascript
// 收集所有作为后续事件的事件ID
collectContinueEvents() {
    this.eventIndex.forEach((event, id) => {
        // 检查事件本身是否有continue_event属性
        if (event.continue_event) {
            this.continueEventsList.add(event.continue_event);
        }
        
        // 检查事件的选项是否有continue_event属性
        if (event.options && Array.isArray(event.options)) {
            event.options.forEach(option => {
                if (option.continue_event) {
                    this.continueEventsList.add(option.continue_event);
                }
            });
        }
    });
}
```

## 五、特殊机制说明

### 5.1 风险机制

风险机制用于创建有一定死亡概率的选项：

```javascript
options: [
    {
        text: "危险选择",
        result: "这是一个有风险的选择...",
        effects: { health: -20 },
        risk: 0.3,  // 30%概率直接死亡
        risk_text: "不幸的是，{user}没能活下来..."  // 自定义风险文本
    }
]
```

风险机制在内部实现中会进行以下处理：
1. 生成一个0-1之间的随机数
2. 如果随机数小于risk值，则角色死亡
3. 显示自定义风险文本，或使用默认文本

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

### 6.1 基本调试

1. 使用 `console.log` 在事件中输出调试信息
2. 检查 `eventManager.getAvailableEvents()` 查看当前可用事件
3. 确保所有 `continue_event` 引用的事件ID存在
4. 测试条件判断逻辑是否正确
5. 使用浏览器开发者工具查看标签状态

### 6.2 高级调试

1. **事件索引检查**：使用 `console.log(Array.from(eventManager.eventIndex.keys()))` 检查所有已加载的事件
2. **标签事件检查**：使用 `console.log(eventManager.getTagEvents('标签名'))` 检查特定标签的事件
3. **触发条件测试**：
```javascript
const player = {age: 15, tags: ['小学生'], health: 80, intelligence: 70, social: 60, luck: 50};
const event = eventManager.getEvent('event_id');
console.log(eventManager.checkEventConditions(event, 'event_id', player));
```
4. **动态标签测试**：
```javascript
const result = eventManager.updateDynamicTag(
    player,
    "学习成绩:",
    2,
    "测试结果"
);
console.log(result);
```
5. **事件权重分析**：
```javascript
const availableEvents = eventManager.getAvailableEvents(player, 'teenager');
availableEvents.forEach(([id, event]) => {
    console.log(`${id}: weight=${event.weight || 1}`);
});
```

## 七、最佳实践

### 7.1 事件设计

1. **平衡性**：注意属性效果的平衡，避免过强或过弱
2. **连贯性**：事件链要有逻辑连贯性
3. **多样性**：为同一情况提供多种选择
4. **趣味性**：加入幽默元素和意外转折
5. **真实性**：事件要符合年龄特征和生活逻辑
6. **标签管理**：合理使用 `add_tags` 和 `remove_tags`
7. **动态内容**：善用 `dynamic_result` 创建个性化体验

### 7.2 性能优化

1. **避免过多标签**：标签数量过多会影响性能
2. **简化条件判断**：过于复杂的条件判断会导致性能下降
3. **合理使用动态结果**：`dynamic_result` 函数应该尽量简洁
4. **避免无限循环**：确保事件链不会形成循环依赖

## 八、文件结构

- `startEvents.js` - 开局事件和开局标签事件
- `ageEvents.js` - 年龄段事件（幼儿、童年、青少年、成年、中年、老年）
- `tagEvents.js` - 标签触发事件
- `tags.js` - 标签定义
- `eventManager.js` - 事件管理系统
- `achievements.js` - 成就系统

通过以上方法，你可以创建丰富多样的游戏内容，让每次游戏体验都独一无二！

## 九、示例与模板

### 9.1 基础事件模板

```javascript
"event_id": {
    title: "事件标题",
    description: "事件描述，可以包含{user}占位符",
    weight: 10,  // 可选，默认为1
    trigger_conditions: {
        age_range: [min_age, max_age],
        required_tags: ["标签1", "标签2"],
        excluded_tags: ["排除标签"],
        min_attributes: { health: 50, intelligence: 60 }
    },
    options: [
        {
            text: "选项1文本",
            result: "选项1结果",
            effects: { health: 10, intelligence: -5, money: 20 },
            add_tags: ["新标签1"],
            remove_tags: ["移除标签1"]
        },
        {
            text: "选项2文本",
            result: "选项2结果",
            effects: { social: 5, luck: 10 },
            continue_event: "后续事件id"
        }
    ]
}
```

### 9.2 标签事件最佳实践

1. **合理设置触发条件**：确保事件与标签相关
2. **设置恰当的年龄范围**：根据事件内容设置合适的年龄范围
3. **注意标签互斥**：某些标签可能应该互斥（如"学霸"和"学渣"）
4. **注意红色标签使用**：红色标签会屏蔽其他所有事件，请谨慎使用
5. **优先级设置**：为重要事件设置优先级

通过这些最佳实践，你可以创建出逻辑连贯、体验丰富的生活模拟游戏！