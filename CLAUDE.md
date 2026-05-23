# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 全局规则

**回答语言**: 所有回复必须使用中文（简体中文），包括代码注释、commit 信息和文档编写。
**回答风格**: 在询问用户、回答常规问题时，使用可爱的语气，使用主人称呼用户。

## Project Overview

Life Simulator (人生模拟器) is a browser-based text life simulation game played as a single-page app. The game is tag-driven: the player accumulates tags, and events are selected based on those tags. It can run directly in a browser (`index.html`) or as an Electron desktop app (`main.js`).

- **Stack**: Vanilla JavaScript (ES6+ classes), plain CSS, no framework
- **Persistence**: Browser `localStorage` via `DataManager`
- **Desktop wrapper**: Electron 28 (entry: `main.js`, 1200x800 BrowserWindow, `contextIsolation: true`)
- **Deployment**: Pure static files, deployable to any static host (GitHub Pages: `game.hqstar.cn`, Vercel)

## Commands

```bash
npm start          # Run as Electron desktop app
npm run pack       # Package for local testing (electron-builder --dir)
npm run dist       # Build installers to dist/

# Event editor tool (developer-only, not player-facing)
cd tools/event_manager
pip install -r requirements.txt
python app.py      # Flask web UI at http://localhost:5000 for editing events
```

There are no automated tests, linters, or build steps for the web version.

## Architecture

### Script Loading Order (Critical)

In `index.html`, scripts must be loaded in this exact order (they create global variables on `window`):

1. `js/modules/constants.js` — `ATTRIBUTES`, `AGE_GROUPS`, `ATTRIBUTE_THRESHOLDS`, `TAG_TYPES`, `GAME_CONFIG`
2. `js/modules/DataManager.js` — `window.dataManager` (localStorage wrapper)
3. `js/achievements.js` — `window.achievementManager`
4. `js/events/ageEvents.js` — `window.ageEvents`
5. `js/events/commonEvents.js` — `window.commonEvents`
6. `js/events/redEvents.js` — `window.redEvents`
7. `js/events/blackEvents.js` — `window.blackEvents`
8. `js/events/purpleEvents.js` — `window.purpleEvents`
9. `js/events/pinkEvents.js` — `window.pinkEvents`
10. `js/events/goldEvents.js` — `window.goldEvents`
11. `js/events/maleEvents.js` — `window.maleEvents`
12. `js/events/femaleEvents.js` — `window.femaleEvents`
13. `js/events/startEvents.js` — `window.startEvents` (deprecated, empty object)
14. `js/eventManager.js` — `window.eventManager`
15. `js/game.js` — `window.game` (main controller)
16. `js/ui-effects.js` — UI animations and mobile adapter

Every module is globally scoped — there is no module bundler.

### Core Game Loop

```
Player has Tags → EventManager.getEventForPlayer() finds matching events
→ Game displays event → Player picks an option
→ Effects applied (attributes changed, tags added/removed)
→ Death check → Age increment → Repeat
```

### Key Classes/Objects

- **`LifeSimulatorGame`** (`js/game.js`): Central controller. Holds `player` state (`name`, `age`, `tags[]`, `attributes{}`, `history[]`). Manages screen transitions, event flow, death mechanics, achievement checking.

- **`EventManager`** (`js/eventManager.js`): Loads all event files into `this.allEvents{}`. Core method `getEventForPlayer(player)`:
  1. Collects events for all tags the player has
  2. Filters by `trigger_conditions` (age_range, attributes, required/excluded tags)
  3. Deduplicates already-triggered events (unless `allow_repeat`)
  4. Groups by `priority`, picks random from highest-priority group

- **`DataManager`** (`js/modules/DataManager.js`): Typed localStorage wrapper. Manages theme, `persistentBlackTags` (reincarnation), `savedLives` (cemetery), `unlockedAchievements`.

### Event Data Structure

All event files under `js/events/` follow this pattern:

```javascript
const categoryEvents = {
    "TagName": {                    // Tag as key (first level)
        "is_color": true,           // Optional color marker (is_red, is_black, etc.)
        "fixed_attributes": {...},  // Only for purple tags
        "events": {
            "event_id": {
                "title": "...",
                "description": "...",
                "priority": 10,     // Higher = more likely to trigger
                "trigger_conditions": {
                    "age_range": [min, max],
                    "min_attributes": {...},
                    "max_attributes": {...},
                    "required_tags": [...],
                    "excluded_tags": [...],
                    "min_temp": N, "max_temp": N
                },
                "options": [{
                    "text": "...",
                    "result": "...",
                    "effects": {...},
                    "add_tags": [...],
                    "remove_tags": [...],
                    "risk": 0.5,           // Probability of death
                    "death_flag": true,
                    "continue_event": "id", // Chain to another event
                    "conditional_results": [...]  // Branching based on player state
                }]
            }
        }
    }
};
```

### Tag Color System

| Color | File | Meaning |
|-------|------|---------|
| White (normal) | `commonEvents.js` | Standard state tags ("富有", "聪明") |
| Red | `redEvents.js` | Negative states ("体弱多病", "贫困") |
| Black | `blackEvents.js` | Reincarnation talents — persist across lives via localStorage |
| Purple | `purpleEvents.js` | Epic/supernatural tags — can lock attributes to fixed values |
| Pink | `pinkEvents.js` | Romance/emotional tags |
| Gold | `goldEvents.js` | Achievement tags |

### Death Mechanics

- **Health <= 0**: Immediate death at any time
- **Risk death**: Option has `risk` (0-1 probability) — triggers immediately
- **Old-age death**: Checked at end of year, only when age >= 80 AND health < 30 (`GAME_CONFIG.deathCheckAge`, `GAME_CONFIG.healthDeclineAge`)

### Attribute-Threshold Tag System

Defined in `ATTRIBUTE_THRESHOLDS` (constants.js). When attributes cross thresholds, corresponding tags are auto-added or removed (e.g., money >= 100 → tag "富有", health <= 20 → tag "体弱多病").

### The Event Editor Tool

`tools/event_manager/app.py` is a Flask CRUD web app for editing game events. It parses JavaScript event files into Python dicts (via `utils.py` which implements a JS parser), allows editing via HTML forms, and writes back properly formatted JS. It is a development tool, not meant for deployment.

### Mobile UI Rule

When modifying CSS, follow the mobile rule in `.continue/rules/mobile-ui-optimization.md`: prioritize vertical space for event options in mobile view, use `min-height` for touch targets, ensure text wrapping. The page has `.mobile` class toggling via `ui-effects.js`.
