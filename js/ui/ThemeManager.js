// js/ui/ThemeManager.js
// 主题切换——从 game.js lines 105-118 和 ui-effects.js 提取
export class ThemeManager {
    constructor(dataManager) {
        this.dataManager = dataManager;
    }

    init() {
        const theme = this.dataManager.getTheme();
        document.documentElement.setAttribute('data-theme', theme);
        this._updateIcon(theme);
    }

    toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        this.dataManager.saveTheme(next);
        this._updateIcon(next);
    }

    _updateIcon(theme) {
        const icon = document.getElementById('themeIcon');
        if (icon) {
            icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        }
    }
}
