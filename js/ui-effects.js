/**
 * UI效果管理器 - 负责处理UI动画、过渡效果和交互反馈
 */
class UIEffects {
    constructor() {
        this.initEventListeners();
    }
    
    /**
     * 初始化事件监听器
     */
    initEventListeners() {
        // 为按钮添加点击波纹效果
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .btn, .menu-btn, .option-btn')) {
                this.createRippleEffect(e);
            }
        });
        
        // 播放音效
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .btn, .menu-btn, .option-btn')) {
                // 如果存在音效管理器，播放点击音效
                if (typeof audioManager !== 'undefined') {
                    audioManager.playClick();
                }
            }
        });
    }
    
    /**
     * 创建点击波纹效果
     * @param {Event} e - 点击事件
     */
    createRippleEffect(e) {
        const button = e.target.closest('button, .btn, .menu-btn, .option-btn');
        if (!button) return;
        
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.querySelector('.ripple');
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    /**
     * 页面过渡动画
     * @param {HTMLElement} fromElement - 当前页面元素
     * @param {HTMLElement} toElement - 目标页面元素
     * @param {Function} callback - 过渡完成后的回调函数
     */
    pageTransition(fromElement, toElement, callback) {
        // 如果存在音效管理器，播放过渡音效
        if (typeof audioManager !== 'undefined') {
            audioManager.playTransition();
        }
        
        // 添加退出动画类
        fromElement.classList.add('page-exit');
        
        // 300ms后移除当前页面，显示新页面
        setTimeout(() => {
            fromElement.style.display = 'none';
            fromElement.classList.remove('page-exit');
            
            // 准备新页面的进入动画
            toElement.classList.add('page-enter');
            toElement.style.display = 'block';
            
            // 强制重绘
            toElement.offsetHeight;
            
            // 添加进入动画
            toElement.classList.remove('page-enter');
            
            // 执行回调函数
            if (typeof callback === 'function') {
                callback();
            }
        }, 300);
    }
    
    /**
     * 创建粒子奖励效果
     * @param {HTMLElement} targetElement - 目标元素
     * @param {Object} options - 配置选项
     */
    createRewardEffect(targetElement, options = {}) {
        const defaults = {
            particleCount: 30,
            colors: ['gold', '#ffcc00', '#ffeb3b', '#fff9c4'],
            duration: 1000
        };
        
        const settings = { ...defaults, ...options };
        
        // 创建效果容器
        const effectContainer = document.createElement('div');
        effectContainer.classList.add('reward-effect');
        document.body.appendChild(effectContainer);
        
        // 创建粒子
        for (let i = 0; i < settings.particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('reward-particle');
            
            // 随机位置、颜色和大小
            const rect = targetElement.getBoundingClientRect();
            const startX = rect.left + rect.width / 2;
            const startY = rect.top + rect.height / 2;
            
            particle.style.left = `${startX}px`;
            particle.style.top = `${startY}px`;
            particle.style.background = settings.colors[Math.floor(Math.random() * settings.colors.length)];
            particle.style.width = particle.style.height = `${Math.random() * 10 + 5}px`;
            
            // 随机移动方向
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * 100 + 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            // 设置CSS变量用于动画
            particle.style.setProperty('--x', `${x}px`);
            particle.style.setProperty('--y', `${y}px`);
            
            // 设置动画
            particle.style.animation = `moveParticle ${settings.duration}ms ease-out forwards`;
            
            effectContainer.appendChild(particle);
        }
        
        // 动画结束后移除效果
        setTimeout(() => {
            effectContainer.remove();
        }, settings.duration + 100);
    }
    
    /**
     * 为元素添加淡入动画
     * @param {HTMLElement} element - 目标元素
     * @param {number} delay - 延迟时间(毫秒)
     */
    fadeIn(element, delay = 0) {
        element.style.opacity = '0';
        element.style.transition = `opacity 0.5s ease ${delay}ms`;
        
        // 强制重绘
        element.offsetHeight;
        
        element.style.opacity = '1';
    }
    
    /**
     * 为元素添加淡出动画
     * @param {HTMLElement} element - 目标元素
     * @param {Function} callback - 动画完成后的回调函数
     */
    fadeOut(element, callback) {
        element.style.opacity = '1';
        element.style.transition = 'opacity 0.5s ease';
        
        // 强制重绘
        element.offsetHeight;
        
        element.style.opacity = '0';
        
        // 动画结束后执行回调
        setTimeout(() => {
            if (typeof callback === 'function') {
                callback();
            }
        }, 500);
    }
    
    /**
     * 创建成就解锁通知
     * @param {string} achievementName - 成就名称
     * @param {string} iconClass - 图标类名
     */
    showAchievementNotification(achievementName, iconClass) {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.classList.add('achievement-notification');
        
        notification.innerHTML = `
            <div class="achievement-notification-content">
                <div class="achievement-notification-icon"><i class="${iconClass}"></i></div>
                <div class="achievement-notification-title">成就解锁</div>
                <div class="achievement-notification-name">${achievementName}</div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // 播放成就音效
        if (typeof audioManager !== 'undefined') {
            audioManager.playAchievement();
        }
        
        // 5秒后移除通知
        setTimeout(() => {
            notification.classList.add('achievement-notification-hide');
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 5000);
    }
}

// 创建全局UI效果实例
const uiEffects = new UIEffects(); 