import { LUCIDE_CATEGORIES } from "./lucide-categories";
import { LUCIDE_ICON_BASE, LUCIDE_INDEX_URL } from "./sources";

export const WEBVIEW_HTML = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style id="theme">:root{/*__DRAWDY_STYLING__*/}</style>
<style>
* { box-sizing: border-box; }
[hidden] { display: none !important; }
html, body { margin: 0; height: 100%; }
body {
    font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
    background: var(--drawdy-background, #fff);
    color: var(--drawdy-foreground, #111);
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
}
header {
    padding: 12px 12px 12px;
    border-bottom: 1px solid var(--drawdy-border, #e5e5e5);
    flex: none;
}
.hint {
    font-size: 11px;
    color: var(--drawdy-muted-foreground, #888);
    margin: 0 0 12px;
    line-height: 1.45;
}
.options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px 12px;
    margin: 0 0 12px;
}
.seg {
    display: inline-flex;
    gap: 2px;
    padding: 2px;
    background: var(--drawdy-surface, #f4f4f4);
    border: 1px solid var(--drawdy-border, #e5e5e5);
    border-radius: var(--drawdy-radius-sm, 6px);
}
.seg button {
    padding: 2px 7px;
    font: inherit;
    font-size: 11px;
    font-weight: 500;
    color: var(--drawdy-muted-foreground, #888);
    background: transparent;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
}
.seg button:hover { color: var(--drawdy-foreground, #111); }
.seg button.active {
    background: var(--drawdy-background, #fff);
    color: var(--drawdy-foreground, #111);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
}
.swatches {
    display: inline-flex;
    align-items: center;
    gap: 8px;
}
.swatch {
    position: relative;
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
    border: 1px solid var(--drawdy-border, #e5e5e5);
    border-radius: 50%;
    background: var(--swatch, transparent);
    cursor: pointer;
    overflow: hidden;
}
.swatch.ink { background: var(--drawdy-foreground, #111); }
.swatch.custom {
    display: inline-block;
    background: conic-gradient(#ff4d4d, #ffab3c, #b3e000, #3cc7ff, #698CF9, #c45cff, #ff4d4d);
}
.swatch.active {
    box-shadow: 0 0 0 2px var(--drawdy-background, #fff), 0 0 0 3.5px var(--drawdy-ring, var(--drawdy-primary, #6366f1));
}
.swatch input {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    opacity: 0;
    cursor: pointer;
}
.check {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    color: var(--drawdy-muted-foreground, #888);
    cursor: pointer;
    user-select: none;
}
.check input {
    margin: 0;
    accent-color: var(--drawdy-primary, #6366f1);
}
#search {
    width: 100%;
    padding: 7px 10px;
    font-size: 13px;
    font-family: inherit;
    color: var(--drawdy-foreground, #111);
    background: var(--drawdy-input, var(--drawdy-surface, #f4f4f4));
    border: 1px solid var(--drawdy-border, #e5e5e5);
    border-radius: var(--drawdy-radius-md, 8px);
    outline: none;
}
#search:focus { border-color: var(--drawdy-ring, var(--drawdy-primary, #6366f1)); }
.chips {
    display: flex;
    gap: 6px;
    margin: 0 0 4px;
    padding: 0 0 4px;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
}
.chips.scrolling { scrollbar-color: var(--drawdy-muted-foreground, #888) transparent; }
.chips::-webkit-scrollbar { height: 4px; }
.chips::-webkit-scrollbar-track { background: transparent; }
.chips::-webkit-scrollbar-thumb { background: transparent; border-radius: 999px; }
.chips.scrolling::-webkit-scrollbar-thumb { background: var(--drawdy-muted-foreground, #888); }
.chip {
    flex: none;
    padding: 3px 9px;
    font: inherit;
    font-size: 11px;
    color: var(--drawdy-muted-foreground, #888);
    background: transparent;
    border: 1px solid var(--drawdy-border, #e5e5e5);
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
}
.chip:hover { color: var(--drawdy-foreground, #111); }
.chip.active {
    color: var(--drawdy-primary-foreground, #fff);
    background: var(--drawdy-primary, #6366f1);
    border-color: transparent;
}
.recent-wrap {
    flex: none;
    padding: 8px 12px;
    border-bottom: 1px solid var(--drawdy-border, #e5e5e5);
}
main {
    flex: 1;
    overflow-y: auto;
    padding: 8px 12px 20px;
}
.section-label {
    font-size: 10px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--drawdy-muted-foreground, #888);
    margin: 0 0 6px;
}
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
    gap: 6px;
}
.tile {
    aspect-ratio: 1;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    appearance: none;
    -webkit-appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: grab;
    user-select: none;
    touch-action: none;
    overflow: hidden;
    background: var(--drawdy-surface, #f4f4f4);
    border: 1px solid var(--drawdy-border, #e5e5e5);
    border-radius: var(--drawdy-radius-md, 8px);
    transition: background 0.08s, border-color 0.08s, transform 0.08s;
}
.tile:hover {
    background: var(--drawdy-surface2, var(--drawdy-surface, #ececec));
    border-color: var(--drawdy-primary, #6366f1);
}
.tile:active { cursor: grabbing; transform: scale(0.94); }
.tile:focus-visible { outline: 2px solid var(--drawdy-ring, #6366f1); outline-offset: 1px; }
.tile.dragging { opacity: 0.35; }
.tile svg { width: 22px; height: 22px; display: block; }
.skeleton {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    background: var(--drawdy-border, #e5e5e5);
    opacity: 0.55;
    animation: pulse 1.1s ease-in-out infinite;
}
@keyframes pulse {
    0%, 100% { opacity: 0.25; }
    50% { opacity: 0.7; }
}
.broken {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px dashed var(--drawdy-border, #e5e5e5);
}
.status {
    font-size: 12px;
    color: var(--drawdy-muted-foreground, #888);
    padding: 20px 0;
    text-align: center;
    line-height: 1.5;
}
.retry {
    margin-top: 10px;
    padding: 5px 12px;
    font: inherit;
    font-size: 12px;
    color: var(--drawdy-primary-foreground, #fff);
    background: var(--drawdy-primary, #6366f1);
    border: 0;
    border-radius: var(--drawdy-radius-md, 8px);
    cursor: pointer;
}
.count {
    font-size: 10px;
    color: var(--drawdy-muted-foreground, #888);
    padding: 10px 0 0;
    text-align: center;
}
.more {
    display: block;
    margin: 8px auto 0;
    padding: 5px 12px;
    font: inherit;
    font-size: 12px;
    color: var(--drawdy-foreground, #111);
    background: var(--drawdy-surface, #f4f4f4);
    border: 1px solid var(--drawdy-border, #e5e5e5);
    border-radius: var(--drawdy-radius-md, 8px);
    cursor: pointer;
}
.more:hover { border-color: var(--drawdy-primary, #6366f1); }
.ghost {
    position: fixed;
    left: 0;
    top: 0;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    z-index: 10;
    background: var(--drawdy-surface, #f4f4f4);
    border: 1px solid var(--drawdy-primary, #6366f1);
    border-radius: var(--drawdy-radius-md, 8px);
    opacity: 0.9;
}
.ghost svg { width: 20px; height: 20px; display: block; }
</style>
</head>
<body>
<header>
    <p class="hint">Drag an icon onto the board, or click to add it at the centre.</p>
    <div class="options">
        <div class="seg" id="sizes" title="Size on the board">
            <button type="button" data-size="32" title="32 px">S</button>
            <button type="button" data-size="64" title="64 px">M</button>
            <button type="button" data-size="128" title="128 px">L</button>
            <button type="button" data-size="256" title="256 px">XL</button>
        </div>
        <div class="seg" id="strokes" title="Stroke">
            <button type="button" data-stroke="1.5">Thin</button>
            <button type="button" data-stroke="2">Regular</button>
            <button type="button" data-stroke="2.75">Bold</button>
        </div>
        <label class="check"><input type="checkbox" id="label" /> Label</label>
        <div class="swatches" id="colors">
            <button type="button" class="swatch ink" data-color="ink" title="Ink" aria-label="Ink"></button>
            <button type="button" class="swatch" data-color="#b3e000" style="--swatch: #b3e000" title="#b3e000" aria-label="#b3e000"></button>
            <button type="button" class="swatch" data-color="#ffab3c" style="--swatch: #ffab3c" title="#ffab3c" aria-label="#ffab3c"></button>
            <button type="button" class="swatch" data-color="#698CF9" style="--swatch: #698CF9" title="#698CF9" aria-label="#698CF9"></button>
            <button type="button" class="swatch" data-color="#ff4d4d" style="--swatch: #ff4d4d" title="#ff4d4d" aria-label="#ff4d4d"></button>
            <label class="swatch custom" id="custom-swatch" title="Custom colour"><input type="color" id="custom-color" value="#000000" aria-label="Custom colour" /></label>
        </div>
    </div>
    <div class="chips" id="chips"></div>
    <input id="search" type="text" placeholder="Search icons (home, arrow…)" autocomplete="off" />
</header>
<div class="recent-wrap" id="recent-wrap" hidden>
    <div class="section-label">Recent</div>
    <div class="grid" id="recent"></div>
</div>
<main id="main">
    <div class="status" id="status" hidden></div>
    <div class="grid" id="results"></div>
    <div class="count" id="count" hidden></div>
    <button class="more" id="more" type="button" hidden>Show more</button>
</main>
<script>
(function () {
    var api = acquireDrawdyApi();

    var LUCIDE_INDEX_URL = "${LUCIDE_INDEX_URL}";
    var LUCIDE_ICON_BASE = "${LUCIDE_ICON_BASE}";
    var CATEGORIES = ${JSON.stringify(LUCIDE_CATEGORIES)};

    var PRESET_COLORS = ["#b3e000", "#ffab3c", "#698CF9", "#ff4d4d"];
    var PAGE_SIZE = 120;
    var SEARCH_DEBOUNCE_MS = 120;
    var RECENT_LIMIT = 12;
    var DRAG_THRESHOLD = 5;

    var query = "";
    var category = null;
    var limit = PAGE_SIZE;
    var shown = [];
    var recent = [];
    var options = { size: 64, color: "ink", stroke: 2, label: false };

    var catalog = null;
    var categoryEntries = {};
    var loadState = "idle";
    var svgCache = new Map();
    var svgPending = new Map();
    var svgFailed = new Set();
    var searchTimer = null;

    var themeStyle = document.getElementById("theme");
    var mainEl = document.getElementById("main");
    var resultsEl = document.getElementById("results");
    var statusEl = document.getElementById("status");
    var countEl = document.getElementById("count");
    var moreEl = document.getElementById("more");
    var recentEl = document.getElementById("recent");
    var recentWrap = document.getElementById("recent-wrap");
    var searchEl = document.getElementById("search");
    var chipsEl = document.getElementById("chips");
    var chipsScrollTimer = null;
    chipsEl.addEventListener("scroll", function () {
        chipsEl.classList.add("scrolling");
        if (chipsScrollTimer !== null) clearTimeout(chipsScrollTimer);
        chipsScrollTimer = setTimeout(function () {
            chipsEl.classList.remove("scrolling");
            chipsScrollTimer = null;
        }, 800);
    });
    chipsEl.addEventListener(
        "wheel",
        function (event) {
            if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
            if (chipsEl.scrollWidth <= chipsEl.clientWidth) return;
            event.preventDefault();
            chipsEl.scrollLeft += event.deltaY;
        },
        { passive: false }
    );
    var sizeButtons = Array.prototype.slice.call(document.querySelectorAll("[data-size]"));
    var strokeButtons = Array.prototype.slice.call(document.querySelectorAll("[data-stroke]"));
    var colorButtons = Array.prototype.slice.call(document.querySelectorAll("[data-color]"));
    var customSwatch = document.getElementById("custom-swatch");
    var customInput = document.getElementById("custom-color");
    var labelInput = document.getElementById("label");

    var observer = new IntersectionObserver(
        function (entries) {
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                if (!entry.isIntersecting) continue;
                observer.unobserve(entry.target);
                fillTile(entry.target);
            }
        },
        { root: mainEl, rootMargin: "160px" }
    );

    function keyOf(icon) {
        return icon.source + ":" + icon.name;
    }

    function request(url, read) {
        return fetch(url).then(function (response) {
            if (!response.ok) throw new Error("HTTP " + response.status);
            return read(response);
        });
    }

    function readText(response) {
        return response.text();
    }

    function readJson(response) {
        return response.json();
    }

    function iconUrl(icon) {
        return LUCIDE_ICON_BASE + encodeURIComponent(icon.name) + ".svg";
    }

    function sanitizeSvg(text) {
        return text
            .replace(/<script[\\s\\S]*?<\\/script>/gi, "")
            .replace(/\\son[a-z]+\\s*=\\s*"[^"]*"/gi, "")
            .replace(/\\son[a-z]+\\s*=\\s*'[^']*'/gi, "");
    }

    function loadSvg(icon) {
        var key = keyOf(icon);
        if (svgCache.has(key)) return Promise.resolve(svgCache.get(key));
        var inflight = svgPending.get(key);
        if (inflight) return inflight;
        if (svgFailed.has(key)) return Promise.reject(new Error("failed earlier"));
        var promise = request(iconUrl(icon), readText)
            .then(function (text) {
                var clean = sanitizeSvg(text);
                svgCache.set(key, clean);
                svgPending.delete(key);
                return clean;
            })
            .catch(function (error) {
                svgPending.delete(key);
                svgFailed.add(key);
                throw error;
            });
        svgPending.set(key, promise);
        return promise;
    }

    function paintSvg(container, svgText) {
        container.innerHTML = svgText;
        var node = container.querySelector("svg");
        if (!node) return;
        node.removeAttribute("width");
        node.removeAttribute("height");
    }

    function fillTile(tile) {
        var icon = tile.iconRef;
        if (!icon) return;
        loadSvg(icon).then(
            function (svgText) {
                if (!tile.isConnected) return;
                paintSvg(tile, svgText);
            },
            function () {
                if (!tile.isConnected) return;
                markFailed(tile);
                updateTileFailures();
            }
        );
    }

    function markFailed(tile) {
        tile.innerHTML = "";
        tile.classList.add("failed");
        var broken = document.createElement("div");
        broken.className = "broken";
        tile.appendChild(broken);
    }

    function showSkeleton(tile) {
        tile.innerHTML = "";
        var skeleton = document.createElement("div");
        skeleton.className = "skeleton";
        tile.appendChild(skeleton);
    }

    function makeGhost(icon) {
        var ghost = document.createElement("div");
        ghost.className = "ghost";
        document.body.appendChild(ghost);
        var cached = svgCache.get(keyOf(icon));
        if (cached) paintSvg(ghost, cached);
        return ghost;
    }

    function moveGhost(ghost, x, y) {
        ghost.style.transform =
            "translate(" + (x - 17) + "px, " + (y - 17) + "px)";
    }

    function useIcon(icon) {
        var ref = {
            source: icon.source,
            name: icon.name,
            title: icon.title,
        };
        var key = keyOf(ref);
        recent = recent.filter(function (entry) {
            return keyOf(entry) !== key;
        });
        recent.unshift(ref);
        if (recent.length > RECENT_LIMIT) recent = recent.slice(0, RECENT_LIMIT);
        renderRecent();
        persist();
    }

    function persist() {
        api.postMessage({ type: "persist", recent: recent, options: options });
    }

    function send(icon, point) {
        loadSvg(icon).then(function (svgText) {
            var payload = {
                source: icon.source,
                name: icon.name,
                title: icon.title,
                svg: svgText,
            };
            if (point) {
                api.postMessage({
                    type: "drop-icon",
                    icon: payload,
                    x: point.x,
                    y: point.y,
                });
            } else {
                api.postMessage({ type: "insert-icon", icon: payload });
            }
            useIcon(icon);
        }, function () {});
    }

    function makeTile(icon, eager) {
        var tile = document.createElement("button");
        tile.type = "button";
        tile.className = "tile";
        tile.title = icon.title;
        tile.setAttribute("aria-label", icon.title);
        tile.iconRef = icon;

        var cached = svgCache.get(keyOf(icon));
        if (cached) {
            paintSvg(tile, cached);
        } else if (svgFailed.has(keyOf(icon))) {
            markFailed(tile);
        } else {
            showSkeleton(tile);
            if (eager) {
                fillTile(tile);
            } else {
                observer.observe(tile);
            }
        }

        var startX = 0;
        var startY = 0;
        var pressing = false;
        var dragging = false;
        var ghost = null;

        tile.addEventListener("pointerdown", function (event) {
            pressing = true;
            dragging = false;
            startX = event.clientX;
            startY = event.clientY;
            tile.setPointerCapture(event.pointerId);
        });

        tile.addEventListener("pointermove", function (event) {
            if (!pressing) return;
            if (!dragging) {
                var dx = event.clientX - startX;
                var dy = event.clientY - startY;
                if (dx * dx + dy * dy < DRAG_THRESHOLD * DRAG_THRESHOLD) return;
                dragging = true;
                tile.classList.add("dragging");
                ghost = makeGhost(icon);
            }
            if (ghost) moveGhost(ghost, event.clientX, event.clientY);
        });

        function endDrag(event) {
            if (tile.hasPointerCapture(event.pointerId)) {
                tile.releasePointerCapture(event.pointerId);
            }
            tile.classList.remove("dragging");
            if (ghost) {
                ghost.remove();
                ghost = null;
            }
        }

        tile.addEventListener("pointerup", function (event) {
            var wasDragging = dragging;
            var x = event.clientX;
            var y = event.clientY;
            endDrag(event);
            if (!pressing) return;
            pressing = false;
            dragging = false;
            if (wasDragging) {
                send(icon, { x: x, y: y });
            } else {
                send(icon, null);
            }
        });

        tile.addEventListener("pointercancel", function (event) {
            endDrag(event);
            pressing = false;
            dragging = false;
        });

        return tile;
    }

    function makeEntry(name, tags) {
        var nameKey = name.toLowerCase();
        return {
            source: "lucide",
            name: name,
            title: name,
            nameKey: nameKey,
            words: nameKey.split("-"),
            search: nameKey + " " + nameKey.replace(/-/g, " ") + " " + tags.join(" ").toLowerCase(),
        };
    }

    function byName(a, b) {
        if (a.nameKey < b.nameKey) return -1;
        return a.nameKey > b.nameKey ? 1 : 0;
    }

    function buildCatalog(data) {
        var names = Object.keys(data).sort();
        var entries = new Map();
        catalog = [];
        for (var i = 0; i < names.length; i++) {
            var tags = Array.isArray(data[names[i]]) ? data[names[i]] : [];
            var entry = makeEntry(names[i], tags);
            catalog.push(entry);
            entries.set(names[i], entry);
        }
        categoryEntries = {};
        for (var c = 0; c < CATEGORIES.length; c++) {
            var icons = CATEGORIES[c].icons;
            var list = [];
            for (var n = 0; n < icons.length; n++) {
                if (entries.has(icons[n])) list.push(entries.get(icons[n]));
            }
            categoryEntries[CATEGORIES[c].id] = list;
        }
    }

    function loadCatalog() {
        if (loadState === "loading" || loadState === "ready") return;
        loadState = "loading";
        renderResults();
        request(LUCIDE_INDEX_URL, readJson)
            .then(function (data) {
                buildCatalog(data);
                loadState = "ready";
                renderResults();
            })
            .catch(function () {
                loadState = "error";
                renderResults();
            });
    }

    function termScore(entry, term) {
        if (entry.search.indexOf(term) === -1) return -1;
        if (entry.nameKey === term) return 0;
        if (entry.nameKey.indexOf(term) === 0) return 1;
        for (var i = 0; i < entry.words.length; i++) {
            if (entry.words[i].indexOf(term) === 0) return 2;
        }
        if (entry.nameKey.indexOf(term) !== -1) return 3;
        return 4;
    }

    function filtered() {
        var all = category === null ? catalog : categoryEntries[category] || [];
        var terms = query.trim().toLowerCase().split(/\\s+/).filter(Boolean);
        if (terms.length === 0) return all;
        var scored = [];
        entries: for (var i = 0; i < all.length; i++) {
            var total = 0;
            for (var t = 0; t < terms.length; t++) {
                var score = termScore(all[i], terms[t]);
                if (score < 0) continue entries;
                total += score;
            }
            scored.push({ entry: all[i], score: total });
        }
        scored.sort(function (a, b) {
            return a.score - b.score || byName(a.entry, b.entry);
        });
        return scored.map(function (item) {
            return item.entry;
        });
    }

    function setStatus(text, onRetry) {
        statusEl.innerHTML = "";
        statusEl.hidden = false;
        var line = document.createElement("div");
        line.textContent = text;
        statusEl.appendChild(line);
        if (onRetry) {
            var button = document.createElement("button");
            button.className = "retry";
            button.type = "button";
            button.textContent = "Retry";
            button.addEventListener("click", onRetry);
            statusEl.appendChild(button);
        }
    }

    function retryList() {
        loadState = "idle";
        loadCatalog();
    }

    function updateTileFailures() {
        if (loadState !== "ready" || shown.length === 0) return;
        if (resultsEl.querySelector(".tile.failed")) {
            setStatus("Some icons didn't load.", retryFailedTiles);
        } else {
            statusEl.hidden = true;
        }
    }

    function retryFailedTiles() {
        svgFailed.clear();
        statusEl.hidden = true;
        var tiles = resultsEl.querySelectorAll(".tile.failed");
        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles[i];
            tile.classList.remove("failed");
            showSkeleton(tile);
            observer.observe(tile);
        }
    }

    function isCustomColor(color) {
        return color !== "ink" && PRESET_COLORS.indexOf(color) === -1;
    }

    function renderOptions() {
        for (var i = 0; i < sizeButtons.length; i++) {
            sizeButtons[i].classList.toggle("active", Number(sizeButtons[i].dataset.size) === options.size);
        }
        for (var s = 0; s < strokeButtons.length; s++) {
            strokeButtons[s].classList.toggle("active", Number(strokeButtons[s].dataset.stroke) === options.stroke);
        }
        for (var c = 0; c < colorButtons.length; c++) {
            colorButtons[c].classList.toggle("active", colorButtons[c].dataset.color === options.color);
        }
        var custom = isCustomColor(options.color);
        customSwatch.classList.toggle("active", custom);
        customSwatch.style.background = custom ? options.color : "";
        if (custom) customInput.value = options.color;
        labelInput.checked = options.label;
    }

    function addChip(id, title) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = "chip";
        chip.textContent = title;
        chip.categoryId = id;
        chip.addEventListener("click", function () {
            selectCategory(id);
        });
        chipsEl.appendChild(chip);
    }

    function renderChips() {
        if (chipsEl.childElementCount === 0) {
            addChip(null, "All");
            for (var c = 0; c < CATEGORIES.length; c++) {
                addChip(CATEGORIES[c].id, CATEGORIES[c].title);
            }
        }
        for (var i = 0; i < chipsEl.children.length; i++) {
            var chip = chipsEl.children[i];
            chip.classList.toggle("active", chip.categoryId === category);
        }
    }

    function renderRecent() {
        recentEl.innerHTML = "";
        if (recent.length === 0) {
            recentWrap.hidden = true;
            return;
        }
        recentWrap.hidden = false;
        for (var i = 0; i < recent.length; i++) {
            recentEl.appendChild(makeTile(recent[i], true));
        }
    }

    function appendTiles(from, to) {
        for (var i = from; i < to; i++) {
            resultsEl.appendChild(makeTile(shown[i], false));
        }
    }

    function renderCount() {
        var visible = Math.min(limit, shown.length);
        var more = shown.length > visible;
        countEl.hidden = !more;
        moreEl.hidden = !more;
        if (more) {
            countEl.textContent = "showing " + visible + " of " + shown.length;
        }
    }

    function renderResults() {
        observer.disconnect();
        resultsEl.innerHTML = "";
        countEl.hidden = true;
        moreEl.hidden = true;
        shown = [];

        if (loadState === "error") {
            setStatus("Could not load the icon list. Check your connection.", retryList);
            return;
        }
        if (loadState !== "ready") {
            setStatus("Loading…", null);
            return;
        }

        shown = filtered();
        if (shown.length === 0) {
            setStatus("No icons match that search.", null);
            return;
        }
        statusEl.hidden = true;
        appendTiles(0, Math.min(limit, shown.length));
        renderCount();
        updateTileFailures();
    }

    function render() {
        renderOptions();
        renderChips();
        renderResults();
    }

    function selectCategory(id) {
        if (category === id) return;
        category = id;
        limit = PAGE_SIZE;
        mainEl.scrollTop = 0;
        renderChips();
        renderResults();
    }

    function applyQuery() {
        query = searchEl.value;
        limit = PAGE_SIZE;
        mainEl.scrollTop = 0;
        renderResults();
    }

    function setOption(key, value) {
        options[key] = value;
        renderOptions();
        persist();
    }

    sizeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            setOption("size", Number(button.dataset.size));
        });
    });

    strokeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            setOption("stroke", Number(button.dataset.stroke));
        });
    });

    colorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            setOption("color", button.dataset.color);
        });
    });

    customInput.addEventListener("input", function () {
        setOption("color", customInput.value);
    });

    labelInput.addEventListener("change", function () {
        setOption("label", labelInput.checked);
    });

    moreEl.addEventListener("click", function () {
        var from = Math.min(limit, shown.length);
        limit += PAGE_SIZE;
        appendTiles(from, Math.min(limit, shown.length));
        renderCount();
        updateTileFailures();
    });

    searchEl.addEventListener("input", function () {
        if (searchTimer !== null) clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
            searchTimer = null;
            applyQuery();
        }, SEARCH_DEBOUNCE_MS);
    });

    searchEl.addEventListener("keydown", function (event) {
        if (event.key !== "Enter" || event.isComposing) return;
        event.preventDefault();
        if (searchTimer !== null) {
            clearTimeout(searchTimer);
            searchTimer = null;
            applyQuery();
        }
        if (shown.length > 0) send(shown[0], null);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
        var active = document.activeElement;
        if (active && (active.tagName === "INPUT" || active.tagName === "TEXTAREA")) return;
        event.preventDefault();
        searchEl.focus();
    });

    api.onMessage(function (raw) {
        if (!raw || typeof raw !== "object") return;
        if (raw.type === "theme") {
            themeStyle.textContent = ":root{" + raw.cssVars + "}";
            return;
        }
        if (raw.type !== "init") return;
        recent = Array.isArray(raw.recent) ? raw.recent : [];
        if (raw.options && typeof raw.options === "object") options = raw.options;
        limit = PAGE_SIZE;
        renderRecent();
        render();
        loadCatalog();
    });

    render();
    api.postMessage({ type: "ready" });

    setTimeout(function () {
        loadCatalog();
    }, 1500);
})();
</script>
</body>
</html>`;
