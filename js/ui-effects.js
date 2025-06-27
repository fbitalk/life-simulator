/**
 * UI特效相关函数
 */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initUIEffects();
});

/**
 * 初始化UI特效
 */
function initUIEffects() {
    // 添加按钮点击特效
    addButtonClickEffects();
    
    // 添加背景动画
    animateBackgroundShapes();
    
    // 添加标签悬浮效果
    addTagHoverEffects();
    
    // 添加选项按钮动画效果
    addOptionButtonEffects();
    
    // 添加下一个事件按钮特效
    addNextEventButtonEffects();
}

/**
 * 添加按钮点击特效
 */
function addButtonClickEffects() {
    // 为所有按钮添加点击涟漪效果
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', createRippleEffect);
    });
}

/**
 * 创建按钮点击涟漪效果
 * @param {Event} event - 点击事件
 */
function createRippleEffect(event) {
    const btn = event.currentTarget;
    
    // 移除已存在的涟漪
    const ripples = btn.querySelectorAll('.ripple');
    ripples.forEach(ripple => {
        ripple.remove();
    });
    
    // 创建新涟漪
    const circle = document.createElement('span');
    const diameter = Math.max(btn.clientWidth, btn.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (btn.getBoundingClientRect().left + radius)}px`;
    circle.style.top = `${event.clientY - (btn.getBoundingClientRect().top + radius)}px`;
    circle.classList.add('ripple');
    
    btn.appendChild(circle);
    
    // 一段时间后清除涟漪
    setTimeout(() => {
        circle.remove();
    }, 600);
}

/**
 * 动画背景形状
 */
function animateBackgroundShapes() {
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach(shape => {
        // 随机设置初始位置
        const randomX = Math.random() * 20 - 10; // -10 到 10 的随机值
        const randomY = Math.random() * 20 - 10; // -10 到 10 的随机值
        
        // 应用随机变换
        shape.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
}

/**
 * 添加标签悬浮效果
 */
function addTagHoverEffects() {
    // 使用事件委托处理动态添加的标签
    document.body.addEventListener('mouseover', function(event) {
        if (event.target.classList.contains('tag')) {
            event.target.classList.add('tag-hover');
        }
    });
    
    document.body.addEventListener('mouseout', function(event) {
        if (event.target.classList.contains('tag')) {
            event.target.classList.remove('tag-hover');
        }
    });
}

/**
 * 添加选项按钮动画效果
 */
function addOptionButtonEffects() {
    // 使用事件委托监听选项按钮的点击
    document.body.addEventListener('click', function(event) {
        // 检查点击的是否是选项按钮
        if (event.target.closest('.option-btn')) {
            const button = event.target.closest('.option-btn');
            
            // 添加选中效果
            button.classList.add('option-selected');
            
            // 获取所有选项按钮
            const allButtons = button.parentElement.querySelectorAll('.option-btn');
            
            // 禁用所有按钮，防止重复点击
            allButtons.forEach(btn => {
                btn.disabled = true;
                if (btn !== button) {
                    btn.classList.add('option-disabled');
                }
            });
            
            // 创建选择特效
            createSelectionEffect(button);
        }
    });
}

/**
 * 创建选择特效
 * @param {HTMLElement} button - 选中的按钮
 */
function createSelectionEffect(button) {
    // 创建闪光效果
    const flash = document.createElement('div');
    flash.className = 'selection-flash';
    button.appendChild(flash);
    
    // 短暂显示后移除
    setTimeout(() => {
        flash.remove();
    }, 700);
    
    // 创建粒子效果
    for (let i = 0; i < 10; i++) {
        createParticle(button);
    }
}

/**
 * 创建粒子效果
 * @param {HTMLElement} parent - 父元素
 */
function createParticle(parent) {
    const colors = ['#667eea', '#764ba2', '#b794f4', '#4299e1'];
    const particle = document.createElement('span');
    particle.className = 'selection-particle';
    
    // 随机位置、大小和颜色
    const size = Math.floor(Math.random() * 10 + 5);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const duration = Math.random() * 1 + 0.5; // 0.5-1.5秒
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.backgroundColor = color;
    particle.style.left = `${left}%`;
    particle.style.top = `${top}%`;
    particle.style.animationDuration = `${duration}s`;
    
    parent.appendChild(particle);
    
    // 动画结束后移除
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

/**
 * 显示加载动画
 */
function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'flex';
    }
}

/**
 * 隐藏加载动画
 */
function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
}

/**
 * 页面过渡效果
 * @param {HTMLElement} fromElement - 要隐藏的元素
 * @param {HTMLElement} toElement - 要显示的元素
 */
function pageTransition(fromElement, toElement) {
    // 添加淡出效果
    fromElement.classList.add('fade-out');
    
    // 等待淡出完成
    setTimeout(() => {
        fromElement.style.display = 'none';
        fromElement.classList.remove('fade-out');
        
        // 显示目标元素并添加淡入效果
        toElement.style.display = 'block';
        toElement.classList.add('fade-in');
        
        // 淡入完成后移除类
        setTimeout(() => {
            toElement.classList.remove('fade-in');
        }, 500);
    }, 500);
}

/**
 * 显示成就解锁动画
 * @param {String} achievementName - 成就名称
 */
function showAchievementUnlocked(achievementName) {
    // 创建成就解锁通知
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-icon">🏆</div>
        <div class="achievement-info">
            <div class="achievement-title">成就解锁！</div>
            <div class="achievement-name">${achievementName}</div>
        </div>
    `;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.classList.add('show');
        
        // 播放音效（如果有）
        playSound('achievement');
    }, 100);
    
    // 一段时间后隐藏
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 5000);
}

/**
 * 播放音效
 * @param {String} soundType - 音效类型
 */
function playSound(soundType) {
    // 根据类型播放不同的音效
    switch (soundType) {
        case 'button':
            // 按钮点击音效
            break;
        case 'achievement':
            // 成就解锁音效
            break;
        case 'event':
            // 事件触发音效
            break;
        case 'result':
            // 结果显示音效
            break;
        default:
            // 默认音效
            break;
    }
    
    // 实际项目中可以使用 Audio API 播放音效
    // const audio = new Audio(`sounds/${soundType}.mp3`);
    // audio.play();
}

/**
 * 添加下一个事件按钮特效
 */
function addNextEventButtonEffects() {
    // 使用事件委托监听下一个事件按钮的点击
    document.body.addEventListener('click', function(event) {
        if (event.target.closest('.next-event-btn')) {
            const button = event.target.closest('.next-event-btn');
            
            // 添加点击特效
            createNextEventButtonEffect(button);
            
            // 添加页面过渡动画
            const resultCard = button.closest('.result-card');
            if (resultCard) {
                resultCard.classList.add('fade-out');
                setTimeout(() => {
                    resultCard.classList.remove('fade-out');
                }, 500);
            }
        }
    });
}

/**
 * 创建下一个事件按钮特效
 * @param {HTMLElement} button - 按钮元素
 */
function createNextEventButtonEffect(button) {
    // 创建闪光波纹效果
    const ripple = document.createElement('div');
    ripple.className = 'next-event-ripple';
    button.appendChild(ripple);
    
    // 短暂显示后移除
    setTimeout(() => {
        ripple.remove();
    }, 800);
    
    // 创建前进箭头动画
    const arrow = document.createElement('span');
    arrow.className = 'next-arrow-animation';
    arrow.innerHTML = '→';
    document.body.appendChild(arrow);
    
    // 获取按钮位置
    const buttonRect = button.getBoundingClientRect();
    arrow.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
    arrow.style.left = `${buttonRect.right - 30}px`;
    
    // 动画结束后移除
    setTimeout(() => {
        arrow.remove();
    }, 800);
} 