# 人生模拟器事件系统指南

所有事件都以JavaScript对象的形式存在，并存储在 `js/events/` 目录下的相应文件中。

## 1. 事件定义结构

现在所有事件文件严格遵循 **标签 (Tag)** 层级结构。每个文件导出一个对象，第一层键是**标签名**，第二层是元数据和`events`集合。

### 标准结构模板

```javascript
// file: js/events/someEvents.js

const categoryEvents = {
    "Tag_Name": {
        // 可选：元数据
        "is_color": true, // 标记为彩色标签 (is_red, is_black, etc.)
        
        // 该标签下的所有事件
        "events": {
            "event_id_unique": {
                "title": "事件标题",
                "description": "事件描述，可以使用 {user} 占位符。",
                
                // 优先级 (默认0)。系统会先选优先级最高的组，然后从组内随机选一个。
                "priority": 10,
                
                // 触发条件
                "trigger_conditions": {
                    "age_range": [18, 25], // 最小年龄, 最大年龄
                    "min_attributes": { "health": 50 },
                    "required_tags": ["SomeTag"],
                    "excluded_tags": ["OtherTag"]
                },
                
                // 选项
                "options": [
                    {
                        "text": "选项文本",
                        "result": "结果描述",
                        "effects": { "money": 10 },
                        "add_tags": ["NewTag"],
                        "remove_tags": ["OldTag"]
                    }
                ]
            }
        }
    }
};
```

---

## 2. 事件选择逻辑

`eventManager.js` 的选择逻辑如下（**不再使用权重 weight**）：

1.  **收集候选**: 遍历玩家当前拥有的**所有标签**（包括性别、年龄段、属性标签等），收集这些标签下的所有事件。
2.  **筛选**: 排除不满足 `trigger_conditions` 的事件，排除 `is_continue: true` 的连续事件，排除已触发且不允许多次触发的事件。
3.  **优先级分组**: 将剩余事件按 `priority` 分组。
4.  **最终选择**: 选取 **最高优先级** 的组，然后从该组中 **纯随机** 选择一个事件。

---

## 3. 事件类型与示例

### 开局事件 (0岁)

**注意**: `startEvents.js` 已废弃。开局事件现在位于 `maleEvents.js` (男性) 和 `femaleEvents.js` (女性) 中。
它们的触发条件通常是 `Required Tag: "男性"/"女性"` 且 `age_range: [0, 0]`。

```javascript
// file: js/events/maleEvents.js
const maleEvents = {
    "男性": {
        "events": {
            "birth_rich": {
                "title": "富裕出生",
                "description": "你出生在一个富裕家庭。",
                "priority": 0,
                "trigger_conditions": { "age_range": [0, 0] },
                "options": [...]
            }
        }
    }
};
```

### 年龄事件

位于 `js/events/ageEvents.js`。第一层键是**年龄段标签** (如 "幼儿", "少年")。

```javascript
// file: js/events/ageEvents.js
const ageEvents = {
    "少年": {
        "events": {
            "school_life": {
                "title": "校园生活",
                "description": "学校里的一天。",
                "trigger_conditions": { "age_range": [7, 12] },
                "options": [...]
            }
        }
    }
};
```

### 属性与普通标签事件

位于 `commonEvents.js`。

```javascript
// file: js/events/commonEvents.js
const commonEvents = {
    "富有": {
        "events": {
            "buy_luxury": {
                "title": "购买奢侈品",
                "trigger_conditions": { "min_attributes": { "money": 200 } },
                "options": [...]
            }
        }
    }
};
```

### 彩色标签事件 (Red, Black, Purple, etc.)

特殊颜色的标签有独立的文件 (`redEvents.js`, `blackEvents.js` 等)，结构相同，但通常带有颜色标记。

**示例：红色事件 (负面)**

```javascript
// file: js/events/redEvents.js
const redEvents = {
    "体弱多病": {
        "is_red": true, // 颜色标记
        "events": {
            "hospital_visit": {
                "title": "再次入院",
                "priority": 20, // 高优先级，容易触发
                "options": [...]
            }
        }
    }
};
```

---

## 4. 高级功能

### 连续事件

*   **定义**: `is_continue: true`。不会被随机选中。
*   **触发**: 必须通过上一个事件选项中的 `continue_event: "next_id"` 触发。

### 死亡逻辑

*   **自然老死**: 仅当 **年龄 >= 80** 且 **健康 < 30** 时，在每年结束时进行检定。
*   **属性致死**: 任何时候 **健康 <= 0** 立即死亡。
*   **风险致死**: 选项中包含 `risk: 0.5` (50%几率) 和 `death_flag: true`。

```javascript
"options": [
    {
        "text": "冒险",
        "risk": 0.5,
        "death_reason": "你运气不好，摔死了。", // 风险触发时的死因
        "result": "你成功了！"
    }
]
```

### 带条件的选项

```javascript
"options": [
    {
        "text": "尝试",
        "conditional_results": [
            {
                "conditions": { "min_attributes": { "luck": 80 } },
                "result": "运气爆棚！"
            },
            {
                "conditions": { "default": true },
                "result": "普通结果。"
            }
        ]
    }
]
```
```

---

## 高级功能

### 带条件的选项

同一个选项可以根据玩家的状态产生不同的结果。这通过 `conditional_results` 数组实现。系统会按顺序检查条件，并采用第一个满足条件的结果。

**示例**：

```javascript
"job_interview": {
    "title": "工作面试",
    "description": "你正在参加一个重要职位的面试。",
    "options": [
        {
            "text": "展现你的能力",
            "conditional_results": [
                {
                    "conditions": { "required_tags": ["名校毕业", "实习经历"] },
                    "result": "你的优秀背景和从容不迫的谈吐给面试官留下了深刻印象，你成功获得了这个职位！",
                    "effects": { "money": 50 },
                    "add_tags": ["精英职位"]
                },
                {
                    "conditions": { "required_tags": ["名校毕业"] },
                    "result": "你的学历不错，但缺乏实践经验。面试官让你回去等通知。",
                    "effects": { "social": -5 }
                },
                {
                    "conditions": { "default": true }, // 默认结果，当以上所有条件都不满足时生效
                    "result": "你尽力了，但似乎没有打动面试官。",
                    "effects": { "social": -10 }
                }
            ]
        }
    ]
}
```

---

## 死亡事件

在人生模拟器中，角色可能会因各种原因死亡。你可以通过以下几种方式创建死亡事件：

### 1. 属性致死

当角色的健康值降至0或以下时，系统会自动触发死亡。这可以通过事件选项的effects实现：

```javascript
"dangerous_adventure": {
    "title": "危险的冒险",
    "description": "你接到了一个极具风险但回报丰厚的任务。",
    "options": [
        {
            "text": "接受挑战",
            "conditional_results": [
                {
                    "conditions": { "min_attributes": { "luck": 80 } },
                    "result": "凭借惊人的运气，你成功完成了任务并获得了丰厚的报酬。",
                    "effects": { "money": 100, "social": 20 }
                },
                {
                    "conditions": { "default": true },
                    "result": "你在任务中遭遇了致命危险，生命垂危。",
                    "effects": { "health": -100 } // 健康降至0或以下，角色死亡
                }
            ]
        },
        {
            "text": "婉拒任务",
            "result": "你明智地拒绝了这个危险的任务。",
            "effects": { "social": -5 }
        }
    ]
}
```

### 2. 使用death_flag标记

更直接的方式是在选项结果中使用`death_flag`字段，明确指示这是一个死亡结局：

```javascript
"life_threatening_choice": {
    "title": "生死抉择",
    "description": "你发现自己身处一个危险的境地，必须做出选择。",
    "options": [
        {
            "text": "冒险一搏",
            "result": "你决定冒险，但不幸遭遇了意外。",
            "death_flag": true, // 直接标记为死亡结局
            "death_reason": "意外事故" // 自定义死亡原因
        },
        {
            "text": "寻求帮助",
            "result": "你找到了安全的方法脱离危险。",
            "effects": { "social": 5 }
        }
    ]
}
```

### 3. 条件性死亡

你还可以根据不同条件设置不同的死亡几率：

```javascript
"risky_surgery": {
    "title": "高风险手术",
    "description": "医生告诉你需要进行一次高风险手术。",
    "options": [
        {
            "text": "接受手术",
            "conditional_results": [
                {
                    "conditions": { 
                        "min_attributes": { "health": 50, "luck": 60 } 
                    },
                    "result": "手术非常成功，你完全康复了。",
                    "effects": { "health": 30 }
                },
                {
                    "conditions": { 
                        "min_attributes": { "health": 30 } 
                    },
                    "result": "手术过程艰难，但你最终挺了过来。",
                    "effects": { "health": 10 }
                },
                {
                    "conditions": { "default": true },
                    "result": "你的身体状况太差，没能挺过手术。",
                    "death_flag": true,
                    "death_reason": "手术失败"
                }
            ]
        },
        {
            "text": "拒绝手术",
            "result": "你决定不冒这个风险，但病情可能会持续恶化。",
            "effects": { "health": -20 }
        }
    ]
}
```

### 4. 风险选项死亡

风险选项是一种概率性死亡机制，通过在选项中添加`risk`属性来实现。`risk`的值是一个0到1之间的数字，表示选择此选项时死亡的概率：

```javascript
"dangerous_cliff": {
    "title": "危险的悬崖",
    "description": "你站在悬崖边，下面是翻腾的浪花。有人说悬崖下藏着珍宝。",
    "options": [
        {
            "text": "跳下悬崖寻宝",
            "risk": 0.8, // 80%概率死亡
            "death_reason": "你跳下悬崖，但被巨浪吞没，再也没能浮出水面。", // 自定义死亡描述
            "result": "奇迹般地，你成功跳入水中并找到了宝藏！",
            "effects": { "money": 100 },
            "add_tags": ["冒险家"]
        },
        {
            "text": "从安全的小路下去",
            "result": "你花了更多时间，但安全地到达了悬崖下方。",
            "effects": { "money": 20 }
        },
        {
            "text": "放弃这个危险的想法",
            "result": "你决定珍爱生命，转身离开了悬崖。",
            "add_tags": ["谨慎"]
        }
    ]
}
```

风险选项死亡的特点:
1. 使用`risk`属性定义死亡概率（0-1之间的小数）
2. 可以使用`death_reason`属性自定义死亡描述文本
3. 如果没有提供`death_reason`，系统将使用选项的结果文本作为死亡原因
4. 风险死亡会显示"选项结果或death_reason"作为死因，区别于其他死亡类型

```javascript
// 更复杂的风险选项示例，结合条件判断
"explore_ancient_ruins": {
    "title": "探索古代遗迹",
    "description": "你发现了一处神秘的古代遗迹入口，据说里面充满了危险和宝藏。",
    "options": [
        {
            "text": "独自深入探索",
            "risk": 0.6, // 基础风险60%
            "conditional_results": [
                {
                    "conditions": { "min_attributes": { "luck": 70 } },
                    "result": "凭借惊人的运气，你避开了所有陷阱，发现了价值连城的宝藏！",
                    "effects": { "money": 200, "social": 30 },
                    "add_tags": ["考古发现者"]
                },
                {
                    "conditions": { "default": true },
                    "result": "你勇敢地探索着，最终找到了一些有价值的文物。",
                    "effects": { "money": 50, "health": -20 }
                }
            ],
            "death_reason": "你触发了一个古老的机关，被困在迅速崩塌的遗迹中。" // 当风险触发时显示的死亡描述
        },
        {
            "text": "组织专业团队",
            "risk": 0.1, // 降低风险到10%
            "result": "在专业团队的协助下，你们安全地探索了遗迹并发现了价值不菲的文物。",
            "effects": { "money": 80, "social": 10 },
            "death_reason": "尽管有专业团队，一场突如其来的坍塌还是导致了悲剧。"
        },
        {
            "text": "向当局报告",
            "result": "你向文物部门报告了发现，获得了一笔可观的奖励。",
            "effects": { "money": 30, "social": 5 }
        }
    ]
}
```

使用死亡事件时，请记住：
1. 死亡是玩家角色的终点，会结束当前生命周期
2. 死亡后会显示总结屏幕，展示角色的生平和获得的标签
3. 黑色标签会保留到下一个生命周期
4. 尽量为玩家提供合理的选择，避免没有征兆的突然死亡
5. 确保死亡原因清晰，帮助玩家理解结局
6. 系统会根据不同死亡类型显示不同的死因文本：风险选项死亡显示选项结果，健康值归零显示"突发心脏病而死"，年龄检定死亡显示"自然老死"

---