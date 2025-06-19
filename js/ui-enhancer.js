// ui-enhancer.js - UI增强和音效系统

/**
 * UI增强器 - 负责处理页面过渡动画、音效和视觉效果
 */
class UIEnhancer {
    constructor() {
        // 音效设置
        this.soundEnabled = this.loadSoundSettings();
        this.sounds = {};
        this.initSounds();
        
        // 主题设置
        this.currentTheme = localStorage.getItem('uiTheme') || 'default';
        
        // 初始化
        this.initUI();
    }
    
    // 初始化UI组件
    initUI() {
        // 添加主题选择器到页面
        this.createThemeSelector();
        
        // 添加音效控制按钮
        this.createSoundControl();
        
        // 应用当前主题
        this.applyTheme(this.currentTheme);
        
        // 添加页面转换动画
        this.addPageTransitions();
    }
    
    // 加载音效设置
    loadSoundSettings() {
        const setting = localStorage.getItem('soundEnabled');
        return setting !== null ? (setting === 'true') : true; // 默认开启
    }
    
    // 保存音效设置
    saveSoundSettings() {
        localStorage.setItem('soundEnabled', this.soundEnabled);
    }
    
    // 初始化音效
    initSounds() {
        const soundFiles = {
            click: 'assets/sounds/click.mp3',
            success: 'assets/sounds/success.mp3',
            error: 'assets/sounds/error.mp3',
            achievement: 'assets/sounds/achievement.mp3',
            transition: 'assets/sounds/transition.mp3',
            gameover: 'assets/sounds/gameover.mp3',
            hover: 'assets/sounds/hover.mp3'
        };
        
        // 预加载音效
        for (const [name, path] of Object.entries(soundFiles)) {
            this.sounds[name] = new Audio(path);
            this.sounds[name].preload = 'auto';
            this.sounds[name].volume = 0.5; // 设置音量为50%
        }
        
        // 调整特定音效的音量
        if (this.sounds.hover) this.sounds.hover.volume = 0.2;
        if (this.sounds.click) this.sounds.click.volume = 0.3;
    }
    
    // 播放音效
    playSound(soundName) {
        if (!this.soundEnabled) return;
        
        const sound = this.sounds[soundName];
        if (sound) {
            // 克隆音频对象以便同时播放多个实例
            const soundClone = sound.cloneNode();
            soundClone.play().catch(e => console.error('音效播放失败:', e));
        }
    }
    
    // 创建主题选择器
    createThemeSelector() {
        const themeSelector = document.createElement('div');
        themeSelector.className = 'theme-selector';
        themeSelector.innerHTML = `
            <div class="theme-toggle" title="切换主题">
                <span class="theme-icon">🎨</span>
            </div>
            <div class="theme-options">
                <div class="theme-option" data-theme="default">默认主题</div>
                <div class="theme-option" data-theme="dark">暗黑模式</div>
                <div class="theme-option" data-theme="light">明亮模式</div>
                <div class="theme-option" data-theme="retro">复古风格</div>
                <div class="theme-option" data-theme="future">未来科技</div>
            </div>
        `;
        
        document.body.appendChild(themeSelector);
        
        // 添加点击事件
        const themeToggle = themeSelector.querySelector('.theme-toggle');
        const themeOptions = themeSelector.querySelector('.theme-options');
        
        themeToggle.addEventListener('click', () => {
            this.playSound('click');
            themeOptions.classList.toggle('show');
        });
        
        // 主题选择
        const options = themeSelector.querySelectorAll('.theme-option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                const theme = option.getAttribute('data-theme');
                this.applyTheme(theme);
                this.playSound('transition');
                themeOptions.classList.remove('show');
                
                // 保存选择
                this.currentTheme = theme;
                localStorage.setItem('uiTheme', theme);
            });
            
            // 悬停音效
            option.addEventListener('mouseenter', () => {
                this.playSound('hover');
            });
        });
        
        // 点击其他区域关闭主题选择器
        document.addEventListener('click', (e) => {
            if (!themeSelector.contains(e.target)) {
                themeOptions.classList.remove('show');
            }
        });
    }
    
    // 创建音效控制按钮
    createSoundControl() {
        const soundControl = document.createElement('div');
        soundControl.className = 'sound-control';
        soundControl.innerHTML = `
            <div class="sound-toggle" title="${this.soundEnabled ? '关闭音效' : '开启音效'}">
                <span class="sound-icon">${this.soundEnabled ? '🔊' : '🔇'}</span>
            </div>
        `;
        
        document.body.appendChild(soundControl);
        
        // 添加点击事件
        const soundToggle = soundControl.querySelector('.sound-toggle');
        soundToggle.addEventListener('click', () => {
            this.soundEnabled = !this.soundEnabled;
            this.saveSoundSettings();
            
            // 更新图标
            const soundIcon = soundToggle.querySelector('.sound-icon');
            soundIcon.textContent = this.soundEnabled ? '🔊' : '🔇';
            soundToggle.title = this.soundEnabled ? '关闭音效' : '开启音效';
            
            // 播放测试音效
            if (this.soundEnabled) {
                this.playSound('click');
            }
        });
    }
    
    // 应用主题
    applyTheme(theme) {
        // 移除所有主题类
        document.body.classList.remove('theme-default', 'theme-dark', 'theme-light', 'theme-retro', 'theme-future');
        // 添加新主题类
        document.body.classList.add(`theme-${theme}`);
    }
    
    // 添加页面转换动画
    addPageTransitions() {
        // 获取所有屏幕元素
        const screens = [
            'mainMenu',
            'characterCreation',
            'achievementsScreen',
            'replayScreen',
            'gameScreen',
            'gameoverScreen'
        ];
        
        // 添加观察者以检测显示状态变化
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    const target = mutation.target;
                    if (target.style.display === 'block' && !target.classList.contains('active-screen')) {
                        // 显示页面时添加动画
                        target.classList.add('screen-enter');
                        setTimeout(() => {
                            target.classList.remove('screen-enter');
                            target.classList.add('active-screen');
                        }, 500);
                        
                        // 播放过渡音效
                        this.playSound('transition');
                    } else if (target.style.display === 'none' && target.classList.contains('active-screen')) {
                        target.classList.remove('active-screen');
                    }
                }
            });
        });
        
        // 为每个屏幕添加观察者
        screens.forEach(screenId => {
            const screen = document.getElementById(screenId);
            if (screen) {
                observer.observe(screen, { attributes: true });
            }
        });
        
        // 为按钮添加点击音效
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('click', () => {
                this.playSound('click');
            });
            
            // 悬停音效
            button.addEventListener('mouseenter', () => {
                this.playSound('hover');
            });
        });
        
        // 为标签添加动画
        this.enhanceTagsAnimation();
    }
    
    // 增强标签动画效果
    enhanceTagsAnimation() {
        // 使用MutationObserver监听标签容器的变化
        const tagsObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    // 为新添加的标签添加入场动画
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === 1 && node.classList.contains('tag')) {
                            node.style.animationDelay = `${Math.random() * 0.5}s`;
                            node.classList.add('tag-animate');
                        }
                    });
                }
            });
        });
        
        // 监听所有标签容器
        document.querySelectorAll('.tags-container').forEach(container => {
            tagsObserver.observe(container, { childList: true });
        });
    }
    
    // 事件选择动画
    animateEventChoice(optionElement) {
        if (!optionElement) return;
        
        optionElement.classList.add('option-selected');
        this.playSound('click');
        
        setTimeout(() => {
            optionElement.classList.remove('option-selected');
        }, 300);
    }
    
    // 显示成就解锁动画
    showAchievementUnlocked(achievement) {
        if (!achievement) return;
        
        // 创建成就通知元素
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-notification-content">
                <div class="achievement-notification-icon">🏆</div>
                <div class="achievement-notification-text">
                    <div class="achievement-notification-title">成就解锁!</div>
                    <div class="achievement-notification-name">${achievement.name}</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // 播放成就音效
        this.playSound('achievement');
        
        // 设置自动移除
        setTimeout(() => {
            notification.classList.add('achievement-notification-hide');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }
    
    // 游戏结束动画
    playGameOverAnimation() {
        this.playSound('gameover');
        
        // 添加结束动画到游戏结束屏幕
        const gameoverScreen = document.getElementById('gameoverScreen');
        if (gameoverScreen) {
            gameoverScreen.classList.add('gameover-animation');
            
            // 移除动画类以便下次使用
            setTimeout(() => {
                gameoverScreen.classList.remove('gameover-animation');
            }, 1500);
        }
    }
}

// 创建全局实例
window.uiEnhancer = new UIEnhancer();

// 替换部分原有函数以添加动画和音效
document.addEventListener('DOMContentLoaded', function() {
    // 替换游戏结束函数
    if (typeof window.game !== 'undefined') {
        const originalEndGame = window.game.endGame;
        window.game.endGame = function() {
            // 调用原始函数
            originalEndGame.apply(this, arguments);
            
            // 添加结束动画
            if (window.uiEnhancer) {
                window.uiEnhancer.playGameOverAnimation();
            }
        };
        
        // 替换选择处理函数
        const originalHandleChoice = window.game.handleChoice;
        window.game.handleChoice = function(optionIndex) {
            // 添加选择动画
            if (window.uiEnhancer) {
                const optionElement = document.querySelector(`.option-btn:nth-child(${optionIndex + 1})`);
                window.uiEnhancer.animateEventChoice(optionElement);
            }
            
            // 延迟一点执行原来的函数，让动画效果更明显
            setTimeout(() => {
                originalHandleChoice.apply(this, [optionIndex]);
            }, 150);
        };
    }
    
    // 替换成就解锁函数
    if (typeof achievementManager !== 'undefined') {
        const originalUnlockAchievement = achievementManager.unlockAchievement;
        achievementManager.unlockAchievement = function(achievementId) {
            // 调用原始函数
            const result = originalUnlockAchievement.apply(this, arguments);
            
            // 如果解锁成功且UI增强器存在
            if (result && window.uiEnhancer) {
                const achievement = this.getAchievementById(achievementId);
                window.uiEnhancer.showAchievementUnlocked(achievement);
            }
            
            return result;
        };
    }
}); 