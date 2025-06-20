# 人生模拟器事件系统完整指南

## 一、事件系统概述

游戏中的事件系统包含以下几种类型：

1. **开局事件** (`STARTING_EVENTS`) - 0岁时的出生事件
2. **标签事件** (`TAG_EVENTS`) - 拥有特定标签时可触发的事件
3. **年龄段事件** (`ageEvents`) - 特定年龄段的普通事件
4. **连续事件** - 通过前置事件触发的特殊事件，不会增加年龄

## 二、优化后的事件系统架构

### 2.1 优先级系统

事件系统使用统一的优先级机制，使用常量定义优先级值：

```javascript
const EVENT_PRIORITIES = {
    DEFAULT: 0,        // 默认优先级
    TAG_PRIORITY: 50,  // 标签优先事件
    STARTING_TAG: 50,  // 开局标签事件
    EXCLUSIVE_EVENT: 80,   // 标签独占事件
    RED_TAG_EVENT: 90,     // 红色标签事件
    RED_EXCLUSIVE_EVENT: 100   // 红色标签独占事件（最高优先级）
};
```

事件触发流程：
1. 检查玩家是否有连续事件，如有则先触发
2. 检查玩家是否有红色标签，如有则获取红色标签事件
3. 如无红色标签事件，则收集所有可用事件（包括标签事件和年龄段事件）
4. 按优先级排序，从最高优先级的事件中随机触发一个

### 2.2 事件收集辅助方法

```javascript
// 收集普通事件
collectEventIfAvailable(eventId, event, player, availableEvents) {
    // 跳过已触发的事件
    if (this.isEventTriggered(eventId)) return;
    
    // 跳过后续事件（它们应该只通过前置事件触发）
    if (this.isContinueEvent(eventId)) return;
    
    // 检查触发条件
    if (this.checkEventConditions(event, eventId, player)) {
        // 设置优先级，默认为0
        const priority = event.priority || EVENT_PRIORITIES.DEFAULT;
        availableEvents.push([eventId, { ...event, priority }]);
    }
}

// 处理加权事件
collectWeightedEvent(eventId, event, player, availableEvents) {
    // 跳过已触发的事件
    if (this.isEventTriggered(eventId)) return;
    
    // 跳过后续事件（它们应该只通过前置事件触发）
    if (this.isContinueEvent(eventId)) return;
    
    // 检查触发条件
    if (this.checkEventConditions(event, eventId, player)) {
        // 计算权重，用于随机选择
        const weight = event.weight || 10;
        // 设置优先级，默认为0
        const priority = event.priority || EVENT_PRIORITIES.DEFAULT;
        
        // 添加事件
        for (let i = 0; i < weight; i++) {
            availableEvents.push([eventId, { ...event, priority }]);
        }
    }
}
```

### 2.3 条件检查辅助方法

```javascript
// 检查年龄范围
checkAgeRange(conditions, playerAge) {
    if (!conditions.age_range) return true;
    return playerAge >= conditions.age_range[0] && playerAge <= conditions.age_range[1];
}

// 检查必需标签
checkRequiredTags(conditions, playerTags) {
    if (!conditions.required_tags || !conditions.required_tags.length) return true;
    return conditions.required_tags.every(tag => playerTags.includes(tag));
}

// 获取缺失的标签（用于调试）
getMissingTags(conditions, playerTags) {
    if (!conditions.required_tags) return [];
    return conditions.required_tags.filter(tag => !playerTags.includes(tag));
}

// 检查排除标签
checkExcludedTags(conditions, playerTags) {
    if (!conditions.excluded_tags || !conditions.excluded_tags.length) return true;
    return !conditions.excluded_tags.some(tag => playerTags.includes(tag));
}

// 检查属性要求
checkAttributes(conditions, player) {
    if (!conditions.min_attributes) return true;
    for (const [attr, minValue] of Object.entries(conditions.min_attributes)) {
        if (player[attr] < minValue) return false;
    }
    return true;
}
```

## 三、标签系统说明

### 3.1 标签定义结构

```javascript
TAG_DEFINITIONS: new Map([
    ["标签名", {
        description: "标签描述",
        exclusive_events: [],  // 独占事件ID数组（高优先级）
        priority_events: [],   // 优先事件ID数组（较高优先级）
        is_red: false        // 是否为红色标签（特殊负面状态）
    }]
])
```

### 3.2 红色标签机制

红色标签是特殊的负面状态标签，具有以下特性：
- 在UI中显示为红色
- 拥有红色标签时，在该标签消失前，如果这个标签的事件满足条件，将最优先被触发
- 红色标签的独占事件具有最高优先级(RED_EXCLUSIVE_EVENT: 100)
- 红色标签的普通事件具有较高优先级(RED_TAG_EVENT: 90)
- 适用于表现特殊的负面状态（如诅咒之子、绝症、通缉犯、恶魔契约等）

```javascript
["诅咒之子", {
    description: "被神秘力量诅咒",
    is_red: true,
    exclusive_events: ["curse_event"],
    priority_events: []
}]
```

### 3.3 标签分类

系统中的标签按功能分为以下几类：

- **基础标签** - 基本人口学特征（如"富二代"、"男性"、"女性"、"小学生"）
- **开局标签** - 以"开局:"开头的标签，具有较高优先级(STARTING_TAG: 50)

## 四、添加各类事件的方法

### 4.1 添加普通开局事件

```javascript
// 在 STARTING_EVENTS 中添加
"normal_birth_artist": {
    title: "艺术世家",
    description: "{user}出生在一个充满艺术气息的家庭。",
    weight: 12,  // 权重，影响被选中的概率
    priority: 0, // 优先级，默认为0
    trigger_conditions: {
        age_range: [0, 0]  // 开局事件必须指定年龄范围为0
    },
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
            add_tags: ["艺术家庭", "艺术天分", "开局:艺术世家"]  // 添加开局标签
        }
    ]
}
```

### 4.2 添加连续事件

连续事件无触发要求，只能通过前置事件触发，多个连续事件可以形成事件链：

```javascript
// 步骤1：在任意事件中设置continue_event指向连续事件
"start_event": {
    title: "特殊遭遇",
    description: "{user}遇到了一个神秘人...",
    trigger_conditions: {
        age_range: [18, 30]
    },
    options: [
        {
            text: "跟随他",
            result: "{user}决定跟随神秘人。",
            continue_event: "follow_mysterious_person"  // 指定后续事件
        },
        {
            text: "拒绝",
            result: "{user}婉拒了神秘人的邀请。"
        }
    ]
}

// 步骤2：添加连续事件
"follow_mysterious_person": {
    title: "神秘洞穴",
    description: "神秘人带着{user}来到一个隐蔽的山洞...",
    options: [
        {
            text: "进入洞穴",
            result: "{user}壮着胆子走进洞穴。",
            continue_event: "inside_cave"  // 再次指向下一个连续事件
        },
        {
            text: "逃跑",
            result: "{user}感到不安，转身逃走了。"
        }
    ]
}

// 步骤3：添加连续事件链中的下一个事件
"inside_cave": {
    title: "神奇发现",
    description: "洞穴内部藏着惊人的秘密...",
    options: [
        {
            text: "探索",
            result: "{user}发现了一个古老的宝箱！",
            effects: { money: 100 }
        }
    ]
}
```

### 4.3 添加条件结果事件

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
                    // 基于标签的条件判断
                    conditions: {
                        tags: ["企业家", "投资高手"]
                    },
                    result: "凭借经验和眼光，{user}大获成功！",
                    effects: { money: 100, social: 30 },
                    add_tags: ["商业传奇"]
                },
                {
                    // 或条件 - 任意一个标签即可触发
                    conditions: {
                        any_of: [
                            { tags: ["幸运星"] }
                        ]
                    },
                    result: "运气使然，{user}获得了不错的回报。",
                    effects: { money: 50 }
                },
                {
                    // 排除条件 - 不含有某些标签
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

### 4.4 添加年龄段事件

在相应的年龄段对象中添加事件，可以设置优先级：

```javascript
// 幼儿期事件 (1-5岁)
toddler: {
    "first_day_kindergarten": {
        title: "第一天上幼儿园",
        description: "{user}第一次离开父母去幼儿园...",
        priority: 10,  // 设置优先级，默认为0
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
```

## 五、事件触发流程

整个事件系统的触发流程如下：

1. 游戏开始时，玩家从0岁开始，按照权重随机触发一个开局事件
2. 事件触发后，玩家选择一个选项
3. 系统应用选项效果、添加或移除标签
4. 检查是否有连续事件：
   - 如有，触发连续事件，玩家年龄不增加
   - 如无，进入下一年，玩家年龄+1
5. 进入下一年后：
   - 检查玩家是否有红色标签，如有则优先获取红色标签事件
   - 如没有红色标签或没有满足条件的红色标签事件，则收集所有可用事件
   - 按优先级排序，从最高优先级的事件中随机选择一个触发
   - 如果没有找到可触发的事件，显示"平静的一年"默认事件
6. 重复步骤2-5直到游戏结束

系统使用统一的优先级机制处理所有类型的事件，简化了代码结构并提供了更灵活的事件触发方式。