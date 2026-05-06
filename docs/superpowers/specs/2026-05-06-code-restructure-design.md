# 人生模拟器代码激进重构设计文档

**日期:** 2026-05-06
**状态:** 已确认

---

## 一、背景与目标

### 当前问题

- `js/game.js`（1463行）为 God Class，UI 渲染、游戏逻辑、状态管理耦合在单个类中
- `css/style.css`（4266行）仅有 79 处 CSS 变量引用，49 个 @keyframes 存在大量重复模式
- 全局变量架构，脚本加载顺序强耦合，无可测试性
- 无自动化测试，重构风险需通过分批提交 + 手动验证管控

### 重构目标

- 引入 ES Modules，消除全局变量依赖
- 按职责拆分 `game.js` 为 5 个独立模块，每个模块可独立理解和测试
- CSS 建立变量体系，合并重复动画，拆分为 6 个职责清晰的文件
- 保持功能完全不变，验证每个阶段后功能完整性

---

## 二、新目录结构

```
js/
├── core/
│   ├── GameController.js    # 流程编排（初始化、屏幕切换、主循环）
│   ├── PlayerState.js       # 玩家状态（属性计算、标签管理、阈值检查）
│   ├── EventRenderer.js     # DOM 渲染（事件卡片、选项、结果、历史）
│   ├── DeathSystem.js       # 死亡机制（健康检查、风险死亡、老年死亡）
│   └── LifeArchive.js       # 历史记录、墓地、人生回放
├── data/
│   ├── constants.js         # 游戏常量
│   ├── DataManager.js       # localStorage 封装
│   └── events/              # 9 个事件文件，改为 export const
├── ui/
│   ├── ThemeManager.js      # 主题切换
│   ├── MobileAdapter.js     # 移动端适配
│   └── ModalManager.js      # 自定义模态弹窗
├── core/
│   ├── achievements.js      # 成就管理（从 js/ 移入），改为 export
│   └── eventManager.js      # 事件管理器（从 js/ 移入），改为 import 事件文件
├── main.js                  # 入口：import 所有模块，启动游戏

注：原 js/modules/ 目录移除，constants.js 和 DataManager.js 已迁至 data/。

css/
├── base.css                 # CSS 变量、reset、字体
├── layout.css               # 容器、网格、屏幕切换
├── components.css           # 按钮、卡片、标签、模态弹窗
├── animations.css           # 统一动画（合并 49 → ~6 个 keyframes）
├── themes.css               # [data-theme="dark"] 变量覆盖
└── mobile.css               # 移动端响应式
```

---

## 三、模块职责与接口

### 依赖关系

```
main.js (入口)
  └─ GameController (流程编排)
       ├─ PlayerState       (纯数据 + 计算)
       ├─ EventRenderer     (纯 DOM)
       ├─ DeathSystem       (纯逻辑)
       ├─ LifeArchive       (数据持久化)
       ├─ EventManager      (事件匹配)
       ├─ AchievementManager(成就判定)
       ├─ ThemeManager      (主题切换)
       ├─ MobileAdapter     (移动端适配)
       └─ ModalManager      (弹窗)
```

单向依赖，无循环。

### PlayerState

玩家数据的唯一来源，纯内存状态，不碰 DOM 和 localStorage。

```
export class PlayerState {
  get name(), get gender(), get age(), get attributes, get tags
  getAttribute(attr), hasTag(tag), isDead

  initPlayer({name, gender})
  modifyAttributes(effects)
  setAttributes(fixed)
  addTag(tag, type), removeTag(tag)
  incrementAge()
  checkThresholds()  // 返回 [新增, 移除] 对
}
```

### DeathSystem

纯计算，无副作用。

```
export class DeathSystem {
  checkHealth(health)           // → {dead, reason, type} | null
  rollOldAgeDeath(age, health)  // → {dead, reason} | null
  shouldAutoKill(option)        // → boolean
}
```

### EventRenderer

所有 DOM 创建集中在此，接收数据 + 回调，不直接读写玩家状态。

```
export class EventRenderer {
  constructor(containerElement)
  displayEvent(event, playerName, onSelect)
  displayResult(result, playerName, onContinue)
  renderTags(tags, container)
  showGameOver(state, archive, callbacks)
  showLifeHistory(records)
  renderSavedLives(lives, callbacks)
}
```

### GameController

只做编排，预计从 1463 行缩减到 ~200 行。

```
export class GameController {
  constructor()
  startNewLife(name, gender)
  progressToNextYear()
  handleDeath(reason, type)
  switchScreen(screenId)
}
```

### 其他模块

- **LifeArchive**: `recordHistory()`, `savePersistentTags()`, `loadPersistentTags()`, `saveCurrentLife()`, `getSavedLives()`
- **ThemeManager**: `init()`, `toggle()`, `updateIcon()`
- **ModalManager**: `showAlert(message)`, `showConfirm(message)` → `Promise<boolean>`
- **MobileAdapter**: `init()`, `adaptLayout()`

---

## 四、CSS 重构方案

### CSS 变量体系

```css
:root {
  --color-primary: #667eea;
  --color-primary-dark: #5a6fd6;
  --color-bg: #f0f4ff;
  --color-bg-dark: #1a1a2e;
  --color-surface: #ffffff;
  --color-surface-dark: #16213e;
  --color-text: #333333;
  --color-text-dark: #e0e0e0;

  --space-xs: 4px; --space-sm: 8px; --space-md: 16px;
  --space-lg: 24px; --space-xl: 32px;

  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 16px;

  --shadow-card: 0 4px 15px rgba(0,0,0,0.1);
  --shadow-hover: 0 8px 25px rgba(0,0,0,0.15);
  --shadow-modal: 0 20px 60px rgba(0,0,0,0.3);

  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
}
```

### Keyframes 合并（49 → 6）

| 合并后 | 覆盖原类型 |
|--------|-----------|
| `float-x` | 15+ 个水平浮动 |
| `float-y` | 垂直浮动 |
| `fade-in` | 10+ 个淡入 |
| `scale-in` / `scale-pulse` | 8+ 个缩放 |
| `spin` | 6+ 个旋转 |
| `shimmer` / `glow-pulse` | 5+ 个闪光/发光 |

组件通过 CSS 变量控制动画参数（如 `--float-distance: 20px`）。

### 文件内容划分

- **base.css**: CSS 变量、reset、body、字体设置
- **layout.css**: 容器、屏幕级布局、flex/grid 骨架
- **components.css**: 按钮、卡片、标签、输入框、模态弹窗、成就卡片
- **animations.css**: 所有 keyframes + 动画 utility 类
- **themes.css**: `[data-theme="dark"]` 下的变量值覆盖
- **mobile.css**: 所有 `@media (max-width: 768px)` 规则

预期从 4266 行降至 2000-2500 行。

---

## 五、事件数据文件

保持 JS 格式，改为 `export const` 导出：

```javascript
// 之前
const commonEvents = { ... };

// 之后
export const commonEvents = { ... };
```

EventManager 改为 `import` 方式加载。保持 JS 格式的原因：
- 事件中有条件逻辑（conditional_results）
- 保留注释可读性
- 对非开发人员编辑友好（Event Manager 工具）

---

## 六、迁移策略

### 分批 7 阶段

| 阶段 | 内容 | 验证重点 |
|------|------|----------|
| 1 | PlayerState | 角色创建、属性计算、标签阈值 |
| 2 | DeathSystem | 健康死亡、老年死亡概率、风险死亡 |
| 3 | EventRenderer | 事件卡片、选项按钮、结果展示 |
| 4 | LifeArchive + ModalManager + ThemeManager + MobileAdapter | 历史记录、弹窗、主题、移动端 |
| 5 | EventManager + 事件文件 | 事件匹配、标签筛选、优先级 |
| 6 | GameController 组装 | 完整游戏流程端到端 |
| 7 | CSS 拆分 | 所有屏幕视觉一致性 |

每个阶段一个 commit，出问题可精准 revert。

### 验证清单

- 创建新人生（男/女，不同名字）
- 正常游戏循环（至少 5 年）
- 标签获得/消失（属性阈值触发）
- 死亡结局（健康耗尽 + 老年死亡）
- 墓地保存与回放
- 成就解锁
- 主题切换
- 移动端布局（Chrome DevTools 模拟）
- 黑色标签跨轮回继承

---

## 七、移除项

- `window.game` 全局变量 — 由 `main.js` 内部的 `const game = new GameController()` 替代
- `js/modules/` 目录 — constants.js 和 DataManager.js 迁至 `js/data/`
- `js/events/startEvents.js` — 已废弃的空对象，直接删除
- `js/startEvents.js` 引用 — index.html 中的旧脚本标签全部移除，替换为 `<script type="module" src="js/main.js"></script>`

## 八、不变项

以下不做改动：
- 事件内容数据（不改逻辑，只改导出方式）
- Event Manager 工具（tools/event_manager/）
- Electron 配置（main.js、package.json）
- 游戏核心机制（属性系统、标签系统、死亡规则）
- localStorage 数据结构（保持向后兼容）
