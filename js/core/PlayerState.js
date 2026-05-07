// js/core/PlayerState.js
import { ATTRIBUTES, DEFAULT_ATTRIBUTES, ATTRIBUTE_THRESHOLDS } from '../data/constants.js';

export class PlayerState {
    constructor() {
        this.name = "";
        this.gender = "";
        this.age = 0;
        this.attributes = { ...DEFAULT_ATTRIBUTES };
        this.tags = [];
        this.background = "";
        this.history = [];
    }

    initPlayer({ name, gender }) {
        this.name = name;
        this.gender = gender;
        this.age = 0;
        this.attributes = { ...DEFAULT_ATTRIBUTES };
        this.tags = [];
        this.background = "";
        this.history = [];
    }

    getAttribute(attr) {
        return this.attributes[attr] || 0;
    }

    hasTag(tag) {
        return this.tags.includes(tag);
    }

    get isDead() {
        return this.attributes[ATTRIBUTES.HEALTH] <= 0;
    }

    modifyAttributes(effects) {
        if (!effects) return { dead: false };
        for (const [attr, value] of Object.entries(effects)) {
            this.attributes[attr] = (this.attributes[attr] || 0) + value;
            if (attr === ATTRIBUTES.HEALTH) {
                this.attributes[attr] = Math.max(0, Math.min(100, this.attributes[attr]));
                if (this.attributes[attr] <= 0) {
                    return { dead: true, reason: "突发心脏病而死", type: "health" };
                }
            }
        }
        return { dead: false };
    }

    setAttributes(fixed) {
        if (!fixed) return { dead: false };
        for (const [attr, value] of Object.entries(fixed)) {
            this.attributes[attr] = value;
            if (attr === ATTRIBUTES.HEALTH) {
                this.attributes[attr] = Math.max(0, Math.min(100, this.attributes[attr]));
                if (this.attributes[attr] <= 0) {
                    return { dead: true, reason: "突发心脏病而死", type: "health" };
                }
            }
        }
        return { dead: false };
    }

    addTag(tag) {
        if (!this.tags.includes(tag)) {
            this.tags.push(tag);
            return true;
        }
        return false;
    }

    removeTag(tag) {
        const index = this.tags.indexOf(tag);
        if (index !== -1) {
            this.tags.splice(index, 1);
            return true;
        }
        return false;
    }

    removeTags(tags) {
        this.tags = this.tags.filter(t => !tags.includes(t));
    }

    incrementAge() {
        this.age++;
    }

    checkThresholds() {
        const added = [];
        const removed = [];

        for (const [attr, thresholds] of Object.entries(ATTRIBUTE_THRESHOLDS)) {
            const value = this.attributes[attr] || 0;

            if (thresholds.HIGH) {
                if (value >= thresholds.HIGH.value) {
                    if (!this.tags.includes(thresholds.HIGH.tag)) {
                        this.tags.push(thresholds.HIGH.tag);
                        added.push(thresholds.HIGH.tag);
                    }
                } else if (this.tags.includes(thresholds.HIGH.tag)) {
                    this.tags = this.tags.filter(t => t !== thresholds.HIGH.tag);
                    removed.push(thresholds.HIGH.tag);
                }
            }

            if (thresholds.LOW) {
                if (value <= thresholds.LOW.value) {
                    if (!this.tags.includes(thresholds.LOW.tag)) {
                        this.tags.push(thresholds.LOW.tag);
                        added.push(thresholds.LOW.tag);
                    }
                } else if (this.tags.includes(thresholds.LOW.tag)) {
                    this.tags = this.tags.filter(t => t !== thresholds.LOW.tag);
                    removed.push(thresholds.LOW.tag);
                }
            }
        }

        return { added, removed };
    }

    addHistory(entry) {
        this.history.push(entry);
    }

    getTriggeredEventIds() {
        return this.history.map(e => e.eventId);
    }
}
