// js/core/DeathSystem.js
// 纯计算的死亡判定模块——无副作用、无 DOM 访问、无 localStorage
import { ATTRIBUTES, GAME_CONFIG } from '../data/constants.js';

export class DeathSystem {
    /**
     * 检查生命值是否已降至零或以下。
     * @param {number} health - 当前生命值
     * @returns {{dead: boolean, reason: string, type: string}|null}
     */
    checkHealth(health) {
        if (health <= 0) {
            return { dead: true, reason: "突发心脏病而死", type: "health" };
        }
        return null;
    }

    /**
     * 进行老年死亡检定。仅当年龄 >= 80 且生命值 < 30 时触发。
     * 概率随年龄增长而增加，随生命值和幸运值增加而降低。
     * @param {number} age - 当前年龄
     * @param {number} health - 当前生命值
     * @param {number} luck - 当前幸运值
     * @returns {{dead: boolean, reason: string, type: string}|null}
     */
    rollOldAgeDeath(age, health, luck) {
        if (age < GAME_CONFIG.DEATH_CHECK_AGE || health >= 30) {
            return null;
        }

        // 基础死亡概率 20%
        let probability = 0.2;

        // 年龄越大概率越大（每超过80一岁 +5%）
        probability += (age - 80) * 0.05;

        // 健康越低概率越大（每低于30一点 +2%）
        probability += (30 - health) * 0.02;

        // 幸运值降低概率
        probability -= (luck || 50) / 200;

        if (Math.random() < probability) {
            return { dead: true, reason: "自然老死", type: "age" };
        }
        return null;
    }

    /**
     * 判断选项的风险值是否导致玩家死亡。
     * @param {{risk: number}|undefined} option - 包含风险值的选项对象
     * @returns {boolean} 是否触发死亡
     */
    shouldAutoKill(option) {
        if (!option || option.risk === undefined) return false;
        if (option.risk >= 1) return true;
        return Math.random() < option.risk;
    }
}
