// js/core/LifeArchive.js
// 历史记录、墓地、人生回放——持久化数据管理
import { isBlackTag } from '../data/tagUtils.js';

export class LifeArchive {
    constructor(dataManager) {
        this.dataManager = dataManager;
    }

    recordHistory(player, event, optionIndex, result) {
        player.history.push({
            age: player.age,
            eventId: event.id,
            eventTitle: event.title,
            optionIndex: optionIndex,
            result: result.result.replace(/{user}/g, player.name)
        });
    }

    savePersistentTags(playerTags) {
        const blackTags = playerTags.filter(tag => isBlackTag(tag));
        this.dataManager.savePersistentTags(blackTags);
        return blackTags;
    }

    loadPersistentTags() {
        return this.dataManager.getPersistentTags();
    }

    saveCurrentLife(player, deathReason) {
        const lifeRecord = {
            id: Date.now(),
            name: player.name,
            gender: player.gender,
            age: player.age,
            background: player.background,
            deathReason: deathReason,
            tags: [...player.tags],
            history: [...player.history],
            savedDate: new Date().toISOString()
        };
        this.dataManager.saveLife(lifeRecord);
        return lifeRecord;
    }

    getSavedLives() {
        return this.dataManager.getSavedLives();
    }
}
