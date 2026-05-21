// dbrs 事件汇总——自动生成
// 导入所有故事线事件文件

import { dbrsBirthEvents } from './dbrsBirthEvents.js';
import { dbrsSchoolEvents } from './dbrsSchoolEvents.js';
import { dbrsLoveEvents } from './dbrsLoveEvents.js';
import { dbrsHealthEvents } from './dbrsHealthEvents.js';
import { dbrsTechEvents } from './dbrsTechEvents.js';
import { dbrsXiuXianEvents } from './dbrsXiuXianEvents.js';
import { dbrsCrimeEvents } from './dbrsCrimeEvents.js';
import { dbrsCareerEvents } from './dbrsCareerEvents.js';
import { dbrsWealthEvents } from './dbrsWealthEvents.js';
import { dbrsMusicEvents } from './dbrsMusicEvents.js';
import { dbrsArtEvents } from './dbrsArtEvents.js';
import { dbrsSportsEvents } from './dbrsSportsEvents.js';
import { dbrsPersonalityEvents } from './dbrsPersonalityEvents.js';
import { dbrsGamingEvents } from './dbrsGamingEvents.js';
import { dbrsSocialEvents } from './dbrsSocialEvents.js';
import { dbrsCommonEvents } from './dbrsCommonEvents.js';

/**
 * 将所有 dbrs 故事线事件注册到 EventManager
 * @param {EventManager} eventManager
 */
export function registerAllDbrsEvents(eventManager) {
    eventManager.registerDbrsEvents(dbrsBirthEvents);
    eventManager.registerDbrsEvents(dbrsSchoolEvents);
    eventManager.registerDbrsEvents(dbrsLoveEvents);
    eventManager.registerDbrsEvents(dbrsHealthEvents);
    eventManager.registerDbrsEvents(dbrsTechEvents);
    eventManager.registerDbrsEvents(dbrsXiuXianEvents);
    eventManager.registerDbrsEvents(dbrsCrimeEvents);
    eventManager.registerDbrsEvents(dbrsCareerEvents);
    eventManager.registerDbrsEvents(dbrsWealthEvents);
    eventManager.registerDbrsEvents(dbrsMusicEvents);
    eventManager.registerDbrsEvents(dbrsArtEvents);
    eventManager.registerDbrsEvents(dbrsSportsEvents);
    eventManager.registerDbrsEvents(dbrsPersonalityEvents);
    eventManager.registerDbrsEvents(dbrsGamingEvents);
    eventManager.registerDbrsEvents(dbrsSocialEvents);
    eventManager.registerDbrsEvents(dbrsCommonEvents);
}