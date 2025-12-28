/**
 * DataManager - 模拟后端数据管理模块
 * 负责所有的持久化数据存取 (localStorage)
 */
class DataManager {
    constructor() {
        this.STORAGE_KEYS = {
            THEME: 'theme',
            PERSISTENT_TAGS: 'persistentBlackTags',
            SAVED_LIVES: 'savedLives',
            ACHIEVEMENTS: 'unlockedAchievements'
        };
    }

    // --- 主题设置 ---
    getTheme() {
        return localStorage.getItem(this.STORAGE_KEYS.THEME) || 'light';
    }

    saveTheme(theme) {
        localStorage.setItem(this.STORAGE_KEYS.THEME, theme);
    }

    // --- 黑色标签 (记忆) ---
    getPersistentTags() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEYS.PERSISTENT_TAGS);
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error("Failed to load persistent tags:", e);
            return [];
        }
    }

    savePersistentTags(tags) {
        localStorage.setItem(this.STORAGE_KEYS.PERSISTENT_TAGS, JSON.stringify(tags));
    }

    clearPersistentTags() {
        localStorage.removeItem(this.STORAGE_KEYS.PERSISTENT_TAGS);
    }

    // --- 人生记录 (墓地) ---
    getSavedLives() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEYS.SAVED_LIVES);
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error("Failed to load saved lives:", e);
            return [];
        }
    }

    saveLife(lifeData) {
        const lives = this.getSavedLives();
        lives.push(lifeData);
        localStorage.setItem(this.STORAGE_KEYS.SAVED_LIVES, JSON.stringify(lives));
        return true;
    }

    // --- 成就 ---
    getUnlockedAchievements() {
        try {
            const saved = localStorage.getItem(this.STORAGE_KEYS.ACHIEVEMENTS);
            return saved ? JSON.parse(saved) : [];
        } catch (e) {
            console.error("Failed to load achievements:", e);
            return [];
        }
    }

    saveUnlockedAchievements(ids) {
        localStorage.setItem(this.STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(ids));
    }

    clearAllData() {
        localStorage.clear();
    }
}

// 导出全局实例
window.dataManager = new DataManager();
