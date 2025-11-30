# 人生模拟器事件系统指南

所有事件都以JavaScript对象的形式存在，并存储在 `js/events/` 目录下的相应文件中。一个基本的事件结构如下：
```javascript
"event_id_unique": {
    "title": "事件标题",
    "description": "这里是事件的描述。可以使用 {user} 占位符来代表玩家的名字。",
    "is_continue": false // 可选，标记为连续事件，防止被随机触发
    "priority": 10, // 事件优先级，越高越容易被选中
    "trigger_conditions": {
        // 触发条件，可选
    },
    "options": [
        {
            "text": "选项一的文本",
            "result": "选择这个选项后显示的文本。",
            "effects": {
                // 对玩家属性的影响
            },
            "add_tags": ["新标签"],
            "remove_tags": ["旧标签"],
            "continue_event": "next_event_id" // 可选，连接到下一个事件
        }
    ],
}
    "continue_event": "next_event_without_options", // 可选，无选项时自动连接到下一个事件
    "auto_skip": false, // 可选，设为true时自动跳过此事件
    "allowRepeat": false, // 可选，设为true时允许此事件重复触发
```

*   **`event_id_unique`**: 每个事件的唯一标识符，**不能重复**。
*   **`title`**: 事件的标题。
*   **`description`**: 事件的详细描述。
*   **`priority`**: 事件优先级，越高越容易被选中（默认为0）。
*   **`trigger_conditions`**: 决定事件何时触发的条件（详见下文）。
*   **`options`**: 玩家可以选择的选项数组。
*   **`effects`**: 改变玩家属性，如 `health: -5`, `money: 10`。
*   **`add_tags` / `remove_tags`**: 添加或移除玩家身上的标签。
*   **`continue_event`**: 指向下一个要触发的事件ID。
*   **`auto_skip`**: 如果设为true，事件会自动跳过并进入下一年。
*   **`allowRepeat`**: 如果设为true，即使事件已经触发过，仍可再次触发。
*   **`is_continue`**: 标记为连续事件，防止被随机触发。

---

## 玩家核心属性

玩家具有以下几个核心属性，事件可以读取或修改这些属性。

*   **`health` (健康)**
*   **`money` (金钱)**
*   **`social` (社交)**
*   **`intelligence` (智力)**:
*   **`luck` (幸运)**
*   **`mystery` (神秘)**
*   **`san` (理智)**

默认都是50

属性可以获得标签：
health >= 90("健康");
health <= 30("体弱多病");
money >= 100("富有");
money <= 20("贫困");
intelligence >= 80("聪明");
social >= 80("外向");
luck >= 80("幸运");

所有属性不会在界面展示，只展示标签。

---

## 事件优先级 `priority`

为了更灵活地控制事件的触发，我们引入了 `priority`（优先级）字段。

*   **范围**: 0 到 100。
*   **默认值**: `0`。

在事件生成时，系统会优先从所有满足条件的事件中，选择 `priority` 值最高的事件。如果多个事件优先级相同，则会从中随机选择一个。

**示例**：
这个事件将比默认事件（优先级为0）更容易被触发。

```javascript
"high_priority_event": {
    "title": "一个重要的机会",
    "priority": 75, // 设置高优先级
    "description": "一个千载难逢的机会出现在你面前。",
    // ... 其他设置
}
```

---

## 触发条件详解 `trigger_conditions`

`trigger_conditions` 对象用于精确控制事件的触发时机。如果一个事件没有 `trigger_conditions`，它可能会在任何满足其类型的时刻（如年龄段、标签）被触发。

以下是所有可用的条件字段：

*   **`age_range: [min, max]`**:
    *   描述：限定事件只能在某个年龄范围内触发。
    *   示例：`"age_range": [18, 25]` 表示只在18到25岁之间触发。

*   **`min_attributes: { attribute: value }`**:
    *   描述：要求玩家的某些属性必须达到或超过指定值。
    *   示例：`"min_attributes": { "intelligence": 70, "money": 100 }` 表示智力不低于70且金钱不低于100。

*   **`max_attributes: { attribute: value }`**:
    *   描述：要求玩家的某些属性必须低于或等于指定值。
    *   示例：`"max_attributes": { "health": 30 }` 表示健康值不能超过30。

*   **`required_tags: ["tag1", "tag2"]`**:
    *   描述：要求玩家必须拥有所有列出的标签。
    *   示例：`"required_tags": ["学霸", "竞赛金牌"]`。

*   **`excluded_tags: ["tag1", "tag2"]`**:
    *   描述：要求玩家不能拥有任何一个列出的标签。
    *   示例：`"excluded_tags": ["单身"]` 表示玩家不是单身时才能触发。


**组合使用**:
你可以同时使用多个条件，系统会检查所有条件是否都满足。

---

## 特殊事件特性

### 连续事件 `continue_event`

连续事件可以通过两种方式触发：

1. **作为整个事件的属性**：当事件没有选项或选项都已处理完，系统会自动加载`continue_event`指定的下一个事件。
```javascript
"event1": {
    "title": "第一章",
    "description": "故事的开始...",
    "is_continue": true, 
    "continue_event": "event2", // 自动连接到event2
    "options": [] // 没有选项，直接显示"继续"按钮
}
```

2. **作为选项的属性**：选择该选项后，会立即加载`continue_event`指定的下一个事件，而不是进入下一年。
```javascript
"event1": {
    "title": "分支选择",
    "description": "你面临一个重要决定...",
    "is_continue": true, 
    "options": [
        {
            "text": "选择A路线",
            "result": "你选择了A路线",
            "continue_event": "event_a" // 选择后立即触发event_a
        },
        {
            "text": "选择B路线",
            "result": "你选择了B路线",
            "continue_event": "event_b" // 选择后立即触发event_b
        }
    ]
}
```

### 连续事件标记 `is_continue`

为了防止连续事件被随机触发，所有作为连续事件的事件应该添加`is_continue: true`标记。这样系统在随机选择事件时会自动跳过这些事件，它们只能通过前置事件的`continue_event`属性触发。

```javascript
"event2": {
    "title": "第二章",
    "description": "故事继续...",
    "is_continue": true, // 标记为连续事件，防止被随机触发
    "options": [
        {
            "text": "继续阅读",
            "result": "你继续阅读这个故事。"
        }
    ]
}
```

### 自动跳过事件 `auto_skip`

某些事件可能只需要通知玩家，不需要互动。通过设置`auto_skip: true`，系统会自动记录并跳过该事件，直接进入下一年。

```javascript
"quick_notification": {
    "title": "平静的一年",
    "description": "今年没有发生什么特别的事情。",
    "auto_skip": true // 自动记录并跳过
     // ...
}
```

### 可重复事件 `allowRepeat`

默认情况下，每个事件只会触发一次。如果某事件需要允许多次触发，可以设置`allowRepeat: true`。

```javascript
"repeatable_event": {
    "title": "年度体检",
    "description": "到了一年一度体检的时候了。",
    "allowRepeat": true, // 允许每年都可能触发
    "options": [
        // ...
    ]
}
```

---

## 事件类型
### 开局事件

开局事件和普通事件一样，只是只在玩家0岁时触发，用于设定人生的开端。请将开局事件添加到 `js/events/startEvents.js` 文件中。

**示例**：一个普通的出生事件。

```javascript
"normal_birth_ordinary": {
    "title": "平凡的开始",
    "description": "{user}出生在一个普通的工薪家庭，父母勤劳善良。",
    "weight": 5, // 权重，影响随机选中的概率
    "trigger_conditions": {
        "age_range": [0, 0]
    },
    "options": [
        {
            "text": "健康成长",
            "result": "{user}在父母的关爱下开始成长。",
            "effects": { "money": 0, "health": +10, "intelligence": 0, "social": 0, "luck": 0 },
            "add_tags": ["开局:平凡人生"]
        }
    ]
}
```

**特殊开局事件示例**：没有选项，直接连接到下一个事件。

```javascript
"special_toilet_birth": {
    "title": "特殊的降生",
    "description": "在密不通风，烟雾弥漫的黑网吧里，一名少女神色慌张地跑进了厕所，关上了厕所门。隔了没多久，厕所里咚的一声，一个小生命掉进了厕坑里。这位未婚妈妈拉起裤子，洗洗干净身子，走出了厕所……最后这个婴儿被网吧老板发现，收留了。取名为{user}。",
    "weight": 5,
    "trigger_conditions": {
        "age_range": [0, 0]
    },
    "options": [], // 没有选项
    "continue_event": "toilet_birth_aftermath", // 直接连接到下一个事件
    "effects": { "money": -40, "health": -10, "intelligence": 0, "social": -30, "luck": +20 },
    "add_tags": [ "开局:网吧出生"]
}
```

### 年龄标签事件

这类事件根据玩家的年龄标签触发，需要添加到 `js/events/ageEvents.js` 中，并放在对应的年龄段对象里。

类似属性标签，不同的年龄可以获得年龄段标签

**年龄段划分**:
*   `幼儿`: 1-5岁
*   `少年`: 6-12岁
*   `青少年`: 13-18岁
*   `青年`: 19-30岁
*   `中年`: 31-60岁
*   `老年`: 61岁-110岁
*   `超人`: 110岁以上


**示例**：在少年时期发生的事件。

```javascript
// file: js/events/ageEvents.js

"少年": {
    "first_day_at_school": {
        "title": "第一天上学",
        "description": "你背着新书包，第一次走进小学的校门，心情既紧张又兴奋。",
        "trigger_conditions": {
            "age_range": [6, 6] // 只在6岁时触发
        },
        "options": [
            {
                "text": "认识新朋友",
                "result": "你主动和同桌打了招呼，你们很快就成为了好朋友。",
                "effects": { "social": 5 },
                "add_tags": ["新朋友"]
            }
        ]
    }
}
```

### 标签事件

#### 普通标签事件

添加到 `js/events/commonEvents.js`。

**示例**：拥有"学霸"标签后可能触发的事件。

```javascript
// file: js/events/commonEvents.js

"学霸": {
    "description": "成绩优异的学生",
    "events": {
        "national_competition": {
            "title": "全国竞赛",
            "description": "由于你成绩优异，老师推荐你参加全国奥林匹克知识竞赛。",
            "trigger_conditions": {
                "required_tags": ["学霸"], // 需要"学霸"标签
                "min_attributes": { "intelligence": 80 } // 智力至少80
            },
            "options": [
                {
                    "text": "欣然接受挑战",
                    "result": "经过努力，你在竞赛中获得了金牌，为校争光！",
                    "effects": { "social": 10 },
                    "add_tags": ["竞赛金牌"]
                }
            ]
        }
    }
}
```

#### 特殊标签类型

系统支持五种不同类型的标签，每种类型都有不同的颜色和作用：

*   **普通标签**: 普通的状态标签，没有特殊效果。
*   **红色标签 (`is_red: true`)**: 特殊状态标签，通常表示一些特殊状况或疾病。
*   **黑色标签 (`is_black: true`)**: 持久标签，在玩家死亡后仍然保留，可以影响下一世。
*   **紫色标签 (`is_purple: true`)**: 特殊能力标签，可以固定某些属性值不变。
*   **粉色标签 (`is_pink: true`)**: 感情相关标签，与恋爱、婚姻等情感状态相关。
*   **金色标签 (`is_golden: true`)**: 成就标签，获得后会在成就界面点亮相应成就。

**红色标签示例**：

```javascript
// file: js/events/redEvents.js

"体弱多病": {
    "is_red": true,
    "description": "你的身体状况很差，经常生病。",
    "events": {
        "sudden_illness": {
            "title": "突然病倒",
            "description": "你突然感到一阵眩晕，倒在了地上。",
            "trigger_conditions": {
                "required_tags": ["体弱多病"]
            },
            "options": [
                {
                    "text": "紧急送医",
                    "result": "幸好送医及时，你脱离了危险，但还是花了一大笔钱。",
                    "effects": { "health": -10, "money": -20 }
                }
            ]
        }
    }
}
```

**紫色标签示例**：

```javascript
// file: js/events/purpleEvents.js

"天选之人": {
    "is_purple": true,
    "description": "你似乎受到了命运的眷顾。",
    // 紫色标签可以有固定属性的效果
    "fixed_attributes": {
        "luck": 80 // 幸运值被永久锁定在80，不受事件影响，直到标签消失。
    },
    "events": {
        "fateful_encounter": {
            "title": "命运的邂逅",
            "description": "你偶然遇到了一位改变你一生的贵人。",
            "trigger_conditions": {
                "required_tags": ["天选之人"],
                "age_range": [18, 30]
            },
            "options": [
                {
                    "text": "把握机会",
                    "result": "这次相遇为你打开了新世界的大门。",
                    "effects": { "social": 20, "money": 50 },
                    "add_tags": ["得遇贵人"]
                }
            ]
        }
    }
}
```

**黑色标签示例**：

```javascript
// file: js/events/blackEvents.js

"轮回之眼": {
    "is_black": true,
    "description": "你的眼眸深处，似乎藏着前世的记忆。",
    "events": {
        "deja_vu": {
            "title": "似曾相识",
            "description": "走在街上，一个场景让你感到无比熟悉。",
            "trigger_conditions": {
                "required_tags": ["轮回之眼"],
                "age_range": [6, 12]
            },
            "options": [
                {
                    "text": "追寻记忆的碎片",
                    "result": "意外找到了儿时遗失的玩具。",
                    "effects": { "intelligence": 5 }
                }
            ]
        }
    }
}
```

**粉色标签示例**：

```javascript
// file: js/events/pinkEvents.js

"初恋": {
    "is_pink": true,
    "description": "你正经历着人生中的第一段恋情。",
    "events": {
        "first_date": {
            "title": "初次约会",
            "description": "你和初恋对象计划了一次正式的约会。",
            "priority": 10,
            "trigger_conditions": {
                "required_tags": ["初恋"],
                "age_range": [14, 18]
            },
            "options": [
                {
                    "text": "带对方去看电影",
                    "result": "你们一起看了一部浪漫电影，气氛很美好。",
                    "effects": { "social": 5, "money": -5 },
                    "add_tags": ["浪漫主义"]
                }
            ]
        }
    }
}
```

**金色标签示例**：

```javascript
// file: js/events/goldEvents.js

"百岁老人": {
    "is_golden": true,
    "description": "健康活过100岁的长寿者",
    "achievement": {
        "id": "centenarian",
        "name": "百岁老人",
        "description": "活到100岁以上",
        "icon": "👴"
    },
    "events": {
        "centennial_celebration": {
            "title": "百岁庆典",
            "description": "今天是你的100岁生日，家人为你举办了盛大的庆祝活动。",
            "priority": 50,
            "trigger_conditions": {
                "required_tags": ["百岁老人"]
            },
            "options": [
                {
                    "text": "分享长寿秘诀",
                    "result": "你向大家分享了自己的长寿秘诀，记者们争相报道。",
                    "effects": { "social": 20, "san": 10 },
                    "add_tags": ["传奇老人"]
                }
            ]
        }
    }
}
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
            "death_desc": "你跳下悬崖，但被巨浪吞没，再也没能浮出水面。", // 自定义死亡描述
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
2. 可以使用`death_desc`属性自定义死亡描述文本
3. 如果没有提供`death_desc`，系统将使用选项的结果文本作为死亡原因
4. 风险死亡会显示"选项结果或death_desc"作为死因，区别于其他死亡类型

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
            "death_desc": "你触发了一个古老的机关，被困在迅速崩塌的遗迹中。" // 当风险触发时显示的死亡描述
        },
        {
            "text": "组织专业团队",
            "risk": 0.1, // 降低风险到10%
            "result": "在专业团队的协助下，你们安全地探索了遗迹并发现了价值不菲的文物。",
            "effects": { "money": 80, "social": 10 },
            "death_desc": "尽管有专业团队，一场突如其来的坍塌还是导致了悲剧。"
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