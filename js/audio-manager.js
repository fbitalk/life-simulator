/**
 * 音效管理器 - 负责处理游戏中的音效播放
 */
class AudioManager {
    constructor() {
        this.sounds = {};
        this.enabled = true;
        this.volume = 0.5;
        
        // 从本地存储加载设置
        this.loadSettings();
        
        // 预加载常用音效
        this.preloadSounds();
    }
    
    /**
     * 从本地存储加载音效设置
     */
    loadSettings() {
        const soundEnabled = localStorage.getItem('soundEnabled');
        const soundVolume = localStorage.getItem('soundVolume');
        
        if (soundEnabled !== null) {
            this.enabled = soundEnabled === 'true';
        }
        
        if (soundVolume !== null) {
            this.volume = parseFloat(soundVolume);
        }
    }
    
    /**
     * 保存音效设置到本地存储
     */
    saveSettings() {
        localStorage.setItem('soundEnabled', this.enabled);
        localStorage.setItem('soundVolume', this.volume);
    }
    
    /**
     * 预加载常用音效
     */
    preloadSounds() {
        const soundFiles = [
            'click',
            'transition',
            'success',
            'error',
            'achievement',
            'levelup',
            'gamestart',
            'gameover'
        ];
        
        soundFiles.forEach(name => {
            this.loadSound(name);
        });
    }
    
    /**
     * 加载单个音效
     * @param {string} name - 音效名称
     */
    loadSound(name) {
        try {
            // 创建备用音效 (仅在浏览器环境中创建音频元素)
            if (typeof Audio !== 'undefined') {
                // 创建音效对象
                const audio = new Audio();
                
                // 设置多个音源以提高兼容性
                // 如果assets/sounds下没有实际音效文件，使用 data URI 的内置基本音效
                audio.innerHTML = `
                    <source src="assets/sounds/${name}.mp3" type="audio/mpeg">
                    <source src="assets/sounds/${name}.wav" type="audio/wav">
                    <source src="assets/sounds/${name}.ogg" type="audio/ogg">
                    <source src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" type="audio/wav">
                `;
                
                // 设置音量
                audio.volume = this.volume;
                
                // 错误处理
                audio.onerror = () => {
                    console.warn(`无法加载音效 ${name}, 使用备用音效`);
                    // 使用内置备用音效
                    this.createFallbackSound(name);
                };
                
                this.sounds[name] = audio;
            } else {
                // 非浏览器环境，创建一个空对象作为替代
                this.sounds[name] = {
                    play: () => Promise.resolve(),
                    volume: this.volume
                };
            }
        } catch (error) {
            console.error(`加载音效失败 ${name}:`, error);
            // 创建一个空的备用对象
            this.sounds[name] = {
                play: () => Promise.resolve(),
                volume: this.volume
            };
        }
    }
    
    /**
     * 创建备用音效
     * @param {string} name - 音效名称
     */
    createFallbackSound(name) {
        // 如果Audio API可用，创建简单的音调作为备用
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            const context = new AudioCtx();
            
            // 创建简单的音调，不同音效有不同频率
            const frequencies = {
                'click': 800,
                'transition': 600,
                'success': 1200,
                'error': 300,
                'achievement': 1500,
                'levelup': 1000,
                'gamestart': 700,
                'gameover': 400
            };
            
            // 为音效创建一个简单的播放函数
            this.sounds[name] = {
                play: () => {
                    if (!this.enabled) return Promise.resolve();
                    
                    try {
                        const oscillator = context.createOscillator();
                        const gainNode = context.createGain();
                        
                        oscillator.type = 'sine';
                        oscillator.frequency.value = frequencies[name] || 800;
                        oscillator.connect(gainNode);
                        gainNode.connect(context.destination);
                        
                        gainNode.gain.value = this.volume;
                        
                        oscillator.start();
                        setTimeout(() => oscillator.stop(), 100);
                        
                        return Promise.resolve();
                    } catch (error) {
                        console.warn(`备用音效播放失败:`, error);
                        return Promise.resolve();
                    }
                },
                volume: this.volume
            };
        } else {
            // 如果连AudioContext都不可用，创建空对象
            this.sounds[name] = {
                play: () => Promise.resolve(),
                volume: this.volume
            };
        }
    }
    
    /**
     * 播放指定音效
     * @param {string} name - 音效名称
     */
    play(name) {
        if (!this.enabled) return;
        
        // 如果音效尚未加载，则加载它
        if (!this.sounds[name]) {
            this.loadSound(name);
        }
        
        // 播放音效
        const sound = this.sounds[name];
        if (sound) {
            // 如果是Audio对象
            if (sound instanceof Audio) {
                // 重置音效并播放
                sound.currentTime = 0;
                sound.play().catch(error => {
                    console.warn(`无法播放音效 ${name}:`, error);
                });
            } else {
                // 如果是我们自定义的备用音效对象
                sound.play().catch(error => {
                    console.warn(`无法播放备用音效 ${name}:`, error);
                });
            }
        }
    }
    
    /**
     * 设置音效开关状态
     * @param {boolean} enabled - 是否启用音效
     */
    setEnabled(enabled) {
        this.enabled = enabled;
        this.saveSettings();
    }
    
    /**
     * 设置音效音量
     * @param {number} volume - 音量值，范围0-1
     */
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
        
        // 更新所有已加载音效的音量
        Object.values(this.sounds).forEach(sound => {
            // 检查是否是Audio对象
            if (sound instanceof Audio) {
                sound.volume = this.volume;
            } else if (sound && typeof sound === 'object') {
                sound.volume = this.volume;
            }
        });
        
        this.saveSettings();
    }
    
    /**
     * 播放按钮点击音效
     */
    playClick() {
        this.play('click');
    }
    
    /**
     * 播放页面过渡音效
     */
    playTransition() {
        this.play('transition');
    }
    
    /**
     * 播放成功操作音效
     */
    playSuccess() {
        this.play('success');
    }
    
    /**
     * 播放错误操作音效
     */
    playError() {
        this.play('error');
    }
    
    /**
     * 播放成就解锁音效
     */
    playAchievement() {
        this.play('achievement');
    }
}

// 创建全局音效管理器实例
const audioManager = new AudioManager(); 