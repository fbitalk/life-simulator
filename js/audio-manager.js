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
        const audio = new Audio(`assets/sounds/${name}.mp3`);
        audio.volume = this.volume;
        this.sounds[name] = audio;
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
        
        // 重置音效并播放
        const sound = this.sounds[name];
        if (sound) {
            sound.currentTime = 0;
            sound.play().catch(error => {
                console.warn(`无法播放音效 ${name}:`, error);
            });
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
            sound.volume = this.volume;
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