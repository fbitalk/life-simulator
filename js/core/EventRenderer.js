// js/core/EventRenderer.js
import { getAgeGroup, AGE_GROUPS } from '../data/constants.js';
import { getTagType } from '../data/tagUtils.js';

export class EventRenderer {
    constructor() {
        this.onTagEffect = null;
        this.onGoldenEffect = null;
    }

    /**
     * 渲染标签元素到容器中（排序并按颜色分类）
     * 公共方法，被多处调用（游戏界面、游戏结束、详情页）
     */
    renderTags(tags, container) {
        container.innerHTML = '';
        const fragment = document.createDocumentFragment();

        const tagObjects = tags.map(tag => ({
            text: tag,
            type: getTagType(tag),
            random: Math.random()
        }));

        const typeOrder = { 'black': 1, 'purple': 2, 'red': 3, 'pink': 4, 'golden': 5, 'normal': 6 };
        tagObjects.sort((a, b) => {
            if (typeOrder[a.type] !== typeOrder[b.type]) return typeOrder[a.type] - typeOrder[b.type];
            return a.random - b.random;
        });

        tagObjects.forEach(tagObj => {
            const tagEl = document.createElement('div');
            tagEl.className = 'tag';
            if (tagObj.type !== 'normal') tagEl.classList.add(tagObj.type);
            tagEl.textContent = tagObj.text;
            fragment.appendChild(tagEl);
        });

        container.appendChild(fragment);
    }

    /**
     * 显示事件——原 game.js displayEvent 方法（第384-543行）
     * @returns {{autoSkipped: boolean, message?: string}}
     */
    displayEvent(event, playerName, onOptionSelect) {
        if (event.auto_skip) {
            return {
                autoSkipped: true,
                message: event.description
                    ? event.description.replace(/{user}/g, playerName)
                    : "平静无波的一年"
            };
        }

        const eventContainer = document.getElementById('eventContainer');
        eventContainer.innerHTML = '';

        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';

        // 标题容器（固定在顶部）
        const titleContainer = document.createElement('div');
        titleContainer.className = 'event-title-container';
        const title = document.createElement('h2');
        title.className = 'event-title';
        title.textContent = event.title;
        titleContainer.appendChild(title);
        eventCard.appendChild(titleContainer);

        // 可滚动内容区域
        const contentScroll = document.createElement('div');
        contentScroll.className = 'event-content-scroll';

        // 事件描述
        const description = document.createElement('p');
        description.className = 'event-description';
        description.textContent = event.description
            ? event.description.replace(/{user}/g, playerName)
            : "没有描述";
        contentScroll.appendChild(description);

        // 事件选项
        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'event-options';

        const hasOptions = event.options && Array.isArray(event.options) && event.options.length > 0;
        const hasContinueEvent = event.continue_event && typeof event.continue_event === 'string';

        if (hasOptions) {
            event.options.forEach((option, index) => {
                const button = this._createOptionButton(option, index, onOptionSelect);
                optionsContainer.appendChild(button);
            });
        } else {
            // 无选项时显示默认"继续"按钮
            const button = this._createContinueButton(
                hasContinueEvent ? '➡️' : '➡️',
                hasContinueEvent ? "继续" : "继续",
                () => {
                    if (onOptionSelect) {
                        onOptionSelect({ isContinue: true, event }, 0);
                    }
                });
            optionsContainer.appendChild(button);
        }

        contentScroll.appendChild(optionsContainer);
        eventCard.appendChild(contentScroll);
        eventContainer.appendChild(eventCard);

        return { autoSkipped: false };
    }

    /**
     * 创建选项按钮
     */
    _createOptionButton(option, index, onSelect) {
        const button = document.createElement('button');
        button.className = 'option-btn';

        if (option.conditional_results && option.conditional_results.length > 0) {
            button.classList.add('option-conditional');
        }

        const icon = document.createElement('span');
        icon.className = 'option-icon';
        icon.textContent = option.icon || '🔘';

        const content = document.createElement('span');
        content.className = 'option-content';
        content.textContent = option.text;

        button.appendChild(icon);
        button.appendChild(content);

        button.addEventListener('click', () => onSelect(option, index));
        return button;
    }

    /**
     * 创建继续按钮（用于无选项事件和后续事件）
     */
    _createContinueButton(iconText, label, onClick) {
        const button = document.createElement('button');
        button.className = 'option-btn';

        const icon = document.createElement('span');
        icon.className = 'option-icon';
        icon.textContent = iconText;

        const content = document.createElement('span');
        content.className = 'option-content';
        content.textContent = label;

        button.appendChild(icon);
        button.appendChild(content);
        button.addEventListener('click', onClick);
        return button;
    }

    /**
     * 显示事件结果——原 game.js displayResult 方法（第550-573行）
     */
    displayResult(result, playerName, onNext) {
        const eventContainer = document.getElementById('eventContainer');
        eventContainer.innerHTML = '';

        const resultText = result.result.replace(/{user}/g, playerName);

        // 添加到事件历史
        this.addEventToHistory(resultText);

        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';

        const textP = document.createElement('p');
        textP.textContent = resultText;
        resultCard.appendChild(textP);

        const nextBtn = document.createElement('button');
        nextBtn.className = 'next-event-btn';
        nextBtn.textContent = '→';
        nextBtn.addEventListener('click', onNext);
        resultCard.appendChild(nextBtn);

        eventContainer.appendChild(resultCard);
    }

    /**
     * 添加事件结果到历史显示区域
     */
    addEventToHistory(resultText) {
        const historyContainer = document.getElementById('eventHistory');
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.textContent = resultText;
        historyContainer.appendChild(historyItem);
        historyContainer.scrollTop = historyContainer.scrollHeight;
    }

    /**
     * 显示游戏结束界面——原 game.js showGameOver 方法（第1041-1107行）
     */
    showGameOver(state, archive, callbacks) {
        document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('gameoverScreen').style.display = 'block';

        document.getElementById('finalAge').textContent = `${state.age}岁`;
        document.getElementById('deathReason').textContent = `死因：${state.deathReason}`;

        // 渲染最终标签
        const finalTagsContainer = document.getElementById('finalTags');
        this.renderTags(state.tags, finalTagsContainer);

        // 渲染人生历史
        this._renderHistoryList(state.history, document.getElementById('historyList'));

        // 绑定按钮
        document.getElementById('btnReturnToMenu').onclick = callbacks.onReturnToMenu;
        document.getElementById('btnNewLifeGameOver').onclick = callbacks.onNewLife;
        document.getElementById('btnBurial').onclick = callbacks.onBurial;
    }

    /**
     * 渲染历史列表（公共方法，showGameOver 和 showLifeDetails 共用）
     */
    _renderHistoryList(history, container) {
        container.innerHTML = '';
        if (!history || history.length === 0) {
            container.innerHTML = '<p class="no-history">没有历史记录</p>';
            return;
        }

        const fragment = document.createDocumentFragment();
        history.forEach(entry => {
            const item = document.createElement('div');
            item.className = 'history-item';

            const header = document.createElement('div');
            header.className = 'history-event-header';

            const titleSpan = document.createElement('div');
            titleSpan.className = 'history-event-title';
            titleSpan.textContent = entry.eventTitle;

            const ageSpan = document.createElement('div');
            ageSpan.className = 'history-age';
            ageSpan.textContent = `${entry.age}岁`;

            header.appendChild(titleSpan);
            header.appendChild(ageSpan);

            const resultContent = document.createElement('div');
            resultContent.className = 'history-event-content';
            resultContent.textContent = entry.result;

            item.appendChild(header);
            item.appendChild(resultContent);
            fragment.appendChild(item);
        });
        container.appendChild(fragment);
    }

    /**
     * 渲染墓地中保存的人生列表——原 game.js renderSavedLives 方法（第1329-1391行）
     */
    renderSavedLives(lives, onViewDetails) {
        const container = document.getElementById('savedLivesList');
        container.innerHTML = '';

        if (!lives || lives.length === 0) {
            container.innerHTML = '<p class="no-saves">没有保存的人生记录</p>';
            return;
        }

        // 按保存时间降序排序
        const sorted = [...lives].sort((a, b) => new Date(b.savedDate) - new Date(a.savedDate));

        const fragment = document.createDocumentFragment();
        sorted.forEach(life => {
            const card = document.createElement('div');
            card.className = 'saved-life-card';

            const header = document.createElement('div');
            header.className = 'saved-life-header';

            const nameSpan = document.createElement('span');
            nameSpan.className = 'saved-life-name';
            nameSpan.textContent = life.name;

            const ageSpan = document.createElement('span');
            ageSpan.className = 'saved-life-age';
            ageSpan.textContent = `${life.age}岁`;

            header.appendChild(nameSpan);
            header.appendChild(ageSpan);

            const date = document.createElement('div');
            date.className = 'saved-life-date';
            date.textContent = new Date(life.savedDate).toLocaleString();

            const viewButton = document.createElement('button');
            viewButton.className = 'btn';
            viewButton.textContent = '查看详情';

            viewButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                onViewDetails(life);
            });

            card.appendChild(header);
            card.appendChild(date);
            card.appendChild(viewButton);

            // 整个卡片也可点击
            card.addEventListener('click', (e) => {
                if (e.target === viewButton || viewButton.contains(e.target)) return;
                onViewDetails(life);
            });

            fragment.appendChild(card);
        });
        container.appendChild(fragment);
    }

    /**
     * 显示人生详情——原 game.js showLifeDetails 方法（第1393-1463行）
     */
    showLifeDetails(life) {
        document.getElementById('replayScreen').style.display = 'none';
        document.getElementById('lifeDetailsScreen').style.display = 'block';

        document.getElementById('lifeDetailsName').textContent = life.name || '';
        document.getElementById('lifeDetailsGender').textContent = life.gender === 'male' ? '男' : '女';
        document.getElementById('lifeDetailsAge').textContent = `${life.age}岁`;
        document.getElementById('lifeDetailsBackground').textContent = life.background || '普通人家';
        document.getElementById('lifeDetailsDeathReason').textContent = life.deathReason || '';

        // 渲染标签
        const tagsContainer = document.getElementById('lifeDetailsTags');
        tagsContainer.innerHTML = '';
        if (life.tags && life.tags.length > 0) {
            const fragment = document.createDocumentFragment();
            life.tags.forEach(tag => {
                const tagEl = document.createElement('div');
                tagEl.className = 'tag';
                const tagType = getTagType(tag);
                if (tagType !== 'normal') tagEl.classList.add(tagType);
                tagEl.textContent = tag;
                fragment.appendChild(tagEl);
            });
            tagsContainer.appendChild(fragment);
        } else {
            tagsContainer.innerHTML = '<span class="no-tags">无标签</span>';
        }

        // 渲染历史
        this._renderHistoryList(life.history, document.getElementById('lifeDetailsHistoryList'));
    }

    /**
     * 显示金色成就获得特效——原 game.js showGoldenAchievementEffect 方法（第1234-1261行）
     */
    showGoldenAchievementEffect(achievement) {
        const effectContainer = document.getElementById('goldenAchievementEffect');
        if (!effectContainer) return;

        const effect = document.createElement('div');
        effect.className = 'golden-achievement-notification';
        effect.innerHTML = `
            <div class="achievement-icon">🏆</div>
            <div class="achievement-text">获得成就：${achievement}</div>
        `;

        effectContainer.appendChild(effect);

        setTimeout(() => effect.classList.add('show'), 100);

        setTimeout(() => {
            effect.classList.remove('show');
            setTimeout(() => {
                if (effect.parentNode) {
                    effectContainer.removeChild(effect);
                }
            }, 500);
        }, 3000);
    }
}
