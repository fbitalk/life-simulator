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

