// js/main.js
// 游戏入口——ES Module 入口点
import { GameController } from './core/GameController.js';

document.addEventListener('DOMContentLoaded', () => {
    window.game = new GameController();
});
