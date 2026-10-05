import { iconifyBatchUrls, iconifySvg } from "./iconify";
import {
    ICONIFY_HOST,
    ICONIFY_PREFIXES,
    LUCIDE_ICON_BASE,
    LUCIDE_INDEX_URL,
    SIMPLE_ICONS_ICON_BASE,
    SIMPLE_ICONS_INDEX_URL,
} from "./sources";

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
    padding: 10px 12px 8px;
    border-bottom: 1px solid var(--drawdy-border, #e5e5e5);
    flex: none;
}
.hint {
    font-size: 11px;
    color: var(--drawdy-muted-foreground, #888);
    margin: 0 0 8px;
    line-height: 1.45;
}
.tabs {
    display: flex;
    gap: 2px;
    padding: 3px;
    margin: 0 0 8px;
    background: var(--drawdy-surface, #f4f4f4);
    border: 1px solid var(--drawdy-border, #e5e5e5);
    border-radius: var(--drawdy-radius-md, 8px);
}
.tab {
    flex: 1;
    min-width: 0;
    padding: 5px 4px;
    font: inherit;
    font-size: 12px;
    font-weight: 500;
    color: var(--drawdy-muted-foreground, #888);
    background: transparent;
    border: 0;
    border-radius: var(--drawdy-radius-sm, 6px);
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.1s, color 0.1s;
}
.tab:hover { color: var(--drawdy-foreground, #111); }
.tab.active {
    background: var(--drawdy-background, #fff);
    color: var(--drawdy-foreground, #111);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
}
.options {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 10px;
    margin: 0 0 8px;
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
    gap: 5px;
}
.swatches.disabled { opacity: 0.35; }
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
.swatch:disabled { cursor: default; }
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
    gap: 4px;
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
    gap: 4px;
    margin: 8px 0 0;
    padding: 0 0 2px;
    overflow-x: auto;
    scrollbar-width: thin;
}
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
.tile.brand { background: #fff; }
.tile.brand:hover { background: #fff; }
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
.ghost.brand { background: #fff; }
</style>
</head>
<body>
<header>
    <p class="hint">Drag an icon onto the board, or click to add it at the centre.</p>
    <div class="tabs" id="tabs">
        <button class="tab" type="button" data-tab="icons">Icons</button>
        <button class="tab" type="button" data-tab="brands">Brands</button>
        <button class="tab" type="button" data-tab="tech">Tech</button>
        <button class="tab" type="button" data-tab="emoji">Emoji</button>
        <button class="tab" type="button" data-tab="flags">Flags</button>
    </div>
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
        <label class="check" id="brand-wrap"><input type="checkbox" id="brand-colours" /> Brand colours</label>
    </div>
    <input id="search" type="text" placeholder="Search icons" autocomplete="off" />
    <div class="chips" id="chips" hidden></div>
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
    var BRAND_INDEX_URL = "${SIMPLE_ICONS_INDEX_URL}";
    var BRAND_ICON_BASE = "${SIMPLE_ICONS_ICON_BASE}";
    var ICONIFY_HOST = "${ICONIFY_HOST}";
    var ICONIFY_PREFIXES = ${JSON.stringify(ICONIFY_PREFIXES)};
    var iconifyBatchUrls = (${iconifyBatchUrls.toString()});
    var iconifySvg = (${iconifySvg.toString()});

    var TABS = ["icons", "brands", "tech", "emoji", "flags"];
    var PLACEHOLDERS = {
        icons: "Search icons (home, arrow…)",
        brands: "Search brands (figma, slack…)",
        tech: "Search tech logos (aws, react…)",
        emoji: "Search emoji (smile, heart…)",
        flags: "Search flags (japan, th…)",
    };
    var EMOJI_CATEGORIES = [
        "Smileys & Emotion",
        "People & Body",
        "Animals & Nature",
        "Food & Drink",
        "Travel & Places",
        "Activities",
        "Objects",
        "Symbols",
        "Flags",
    ];
    var ALL_CATEGORIES = "All";
    var TONE_SUFFIXES = ["-medium-light", "-medium-dark", "-light", "-medium", "-dark"];
    var PRESET_COLORS = ["#b3e000", "#ffab3c", "#698CF9", "#ff4d4d"];
    var PAGE_SIZE = 120;
    var SEARCH_DEBOUNCE_MS = 120;
    var RECENT_LIMIT = 12;
    var DRAG_THRESHOLD = 5;
    var BATCH_DELAY_MS = 30;
    var MAX_BATCHES_IN_FLIGHT = 2;

    var tab = "icons";
    var query = "";
    var category = ALL_CATEGORIES;
    var limit = PAGE_SIZE;
    var shown = [];
    var recent = [];
    var options = { size: 64, color: "ink", brandColours: true, stroke: 2, label: false };

    var catalog = { icons: null, brands: null, tech: null, emoji: null, flags: null };
    var loadState = { icons: "idle", brands: "idle", tech: "idle", emoji: "idle", flags: "idle" };
    var svgCache = new Map();
    var svgPending = new Map();
    var svgFailed = new Set();
    var batchQueue = new Map();
    var batchTimer = null;
    var iconifyJobs = [];
    var iconifyActive = 0;
    var searchTimer = null;
    var regionNames = null;
    try {
        regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    } catch (error) {
        regionNames = null;
    }

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
    var tabButtons = Array.prototype.slice.call(document.querySelectorAll("[data-tab]"));
    var sizeButtons = Array.prototype.slice.call(document.querySelectorAll("[data-size]"));
    var strokeButtons = Array.prototype.slice.call(document.querySelectorAll("[data-stroke]"));
    var colorButtons = Array.prototype.slice.call(document.querySelectorAll("[data-color]"));
    var strokesEl = document.getElementById("strokes");
    var colorsEl = document.getElementById("colors");
    var customSwatch = document.getElementById("custom-swatch");
    var customInput = document.getElementById("custom-color");
    var brandWrap = document.getElementById("brand-wrap");
    var brandInput = document.getElementById("brand-colours");
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
        var base = icon.source === "lucide" ? LUCIDE_ICON_BASE : BRAND_ICON_BASE;
        return base + encodeURIComponent(icon.name) + ".svg";
    }

    function queueIconify(icon) {
        var parts = icon.name.split(":");
        return new Promise(function (resolve, reject) {
            var waiters = batchQueue.get(parts[0]);
            if (!waiters) {
                waiters = [];
                batchQueue.set(parts[0], waiters);
            }
            waiters.push({ name: parts[1], resolve: resolve, reject: reject });
            if (batchTimer !== null) clearTimeout(batchTimer);
            batchTimer = setTimeout(flushIconify, BATCH_DELAY_MS);
        });
    }

    function flushIconify() {
        batchTimer = null;
        var queued = batchQueue;
        batchQueue = new Map();
        queued.forEach(function (waiters, prefix) {
            var names = waiters.map(function (waiter) {
                return waiter.name;
            });
            var offset = 0;
            iconifyBatchUrls(ICONIFY_HOST, prefix, names).forEach(function (batch) {
                var batchWaiters = waiters.slice(offset, offset + batch.names.length);
                offset += batch.names.length;
                queueIconifyJob(function () {
                    return loadIconifyBatch(prefix, batch.url, batchWaiters);
                });
            });
        });
    }

    function queueIconifyJob(job) {
        iconifyJobs.push(job);
        pumpIconifyJobs();
    }

    function pumpIconifyJobs() {
        while (iconifyActive < MAX_BATCHES_IN_FLIGHT && iconifyJobs.length > 0) {
            var job = iconifyJobs.shift();
            iconifyActive++;
            job().then(finishIconifyJob, finishIconifyJob);
        }
    }

    function finishIconifyJob() {
        iconifyActive--;
        pumpIconifyJobs();
    }

    function loadIconifyBatch(prefix, url, waiters) {
        return request(url, readJson).then(
            function (data) {
                waiters.forEach(function (waiter) {
                    var svg = iconifySvg(data, waiter.name);
                    if (svg !== null) {
                        waiter.resolve(svg);
                        return;
                    }
                    queueIconifyJob(function () {
                        return request(ICONIFY_HOST + "/" + prefix + "/" + waiter.name + ".svg", readText).then(
                            waiter.resolve,
                            waiter.reject
                        );
                    });
                });
            },
            function (error) {
                waiters.forEach(function (waiter) {
                    waiter.reject(error);
                });
            }
        );
    }

    function catalogUrl(which) {
        if (which === "icons") return LUCIDE_INDEX_URL;
        if (which === "brands") return BRAND_INDEX_URL;
        return ICONIFY_HOST + "/collection?prefix=" + encodeURIComponent(ICONIFY_PREFIXES[which]);
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
        var fetched =
            icon.source === "iconify"
                ? queueIconify(icon)
                : request(iconUrl(icon), readText);
        var promise = fetched
            .then(function (text) {
                var clean = sanitizeSvg(text);
                svgCache.set(key, clean);
                svgPending.delete(key);
                return clean;
            })
            .catch(function (error) {
                svgPending.delete(key);
                if (icon.source === "iconify") svgFailed.add(key);
                throw error;
            });
        svgPending.set(key, promise);
        return promise;
    }

    function paintSvg(container, icon, svgText) {
        container.innerHTML = svgText;
        var node = container.querySelector("svg");
        if (!node) return;
        node.removeAttribute("width");
        node.removeAttribute("height");
        if (icon.source === "brand" && icon.hex) {
            node.setAttribute("fill", "#" + icon.hex);
        }
    }

    function fillTile(tile) {
        var icon = tile.iconRef;
        if (!icon) return;
        loadSvg(icon).then(
            function (svgText) {
                if (!tile.isConnected) return;
                paintSvg(tile, icon, svgText);
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
        ghost.className = icon.source === "brand" ? "ghost brand" : "ghost";
        document.body.appendChild(ghost);
        var cached = svgCache.get(keyOf(icon));
        if (cached) paintSvg(ghost, icon, cached);
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
        if (icon.hex) ref.hex = icon.hex;
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
        api.postMessage({ type: "persist", tab: tab, recent: recent, options: options });
    }

    function send(icon, point) {
        loadSvg(icon).then(function (svgText) {
            var payload = {
                source: icon.source,
                name: icon.name,
                title: icon.title,
                svg: svgText,
            };
            if (icon.hex) payload.hex = icon.hex;
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
        tile.className = icon.source === "brand" ? "tile brand" : "tile";
        tile.title = icon.title;
        tile.setAttribute("aria-label", icon.title);
        tile.iconRef = icon;

        var cached = svgCache.get(keyOf(icon));
        if (cached) {
            paintSvg(tile, icon, cached);
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

    function prettify(name) {
        var spaced = name.replace(/-/g, " ");
        return spaced.charAt(0).toUpperCase() + spaced.slice(1);
    }

    function flagTitle(name) {
        if (name.length === 2 && regionNames) {
            try {
                var region = regionNames.of(name.toUpperCase());
                if (region) return region;
            } catch (error) {}
        }
        return prettify(name);
    }

    function makeEntry(source, name, short, title, extra) {
        var nameKey = short.toLowerCase();
        var titleKey = title.toLowerCase();
        return {
            source: source,
            name: name,
            title: title,
            nameKey: nameKey,
            titleKey: titleKey,
            words: (nameKey + " " + titleKey).split(/[\\s-]+/),
            search: nameKey + " " + titleKey + " " + extra.toLowerCase(),
        };
    }

    function byTitle(a, b) {
        if (a.titleKey < b.titleKey) return -1;
        return a.titleKey > b.titleKey ? 1 : 0;
    }

    function buildLucide(data) {
        var names = Object.keys(data).sort();
        var out = [];
        for (var i = 0; i < names.length; i++) {
            var name = names[i];
            var tags = Array.isArray(data[name]) ? data[name] : [];
            out.push(makeEntry("lucide", name, name, name, name.replace(/-/g, " ") + " " + tags.join(" ")));
        }
        return out;
    }

    function buildBrands(data) {
        var list = Array.isArray(data) ? data : data && data.icons;
        if (!Array.isArray(list)) return [];
        var out = [];
        for (var i = 0; i < list.length; i++) {
            var entry = list[i];
            if (!entry || typeof entry.title !== "string") continue;
            var slug = typeof entry.slug === "string" ? entry.slug : slugify(entry.title);
            var aliases = [];
            if (entry.aliases && Array.isArray(entry.aliases.aka)) {
                aliases = entry.aliases.aka;
            }
            var brand = makeEntry("brand", slug, slug, entry.title, aliases.join(" "));
            if (typeof entry.hex === "string") brand.hex = entry.hex;
            out.push(brand);
        }
        out.sort(byTitle);
        return out;
    }

    function slugify(title) {
        return title
            .toLowerCase()
            .replace(/\\+/g, "plus")
            .replace(/\\./g, "dot")
            .replace(/&/g, "and")
            .replace(/đ/g, "d")
            .replace(/ħ/g, "h")
            .replace(/ı/g, "i")
            .replace(/ĸ/g, "k")
            .replace(/ŀ/g, "l")
            .replace(/ł/g, "l")
            .replace(/ß/g, "ss")
            .replace(/ŧ/g, "t")
            .normalize("NFD")
            .replace(/[\\u0300-\\u036f]/g, "")
            .replace(/[^a-z0-9]/g, "");
    }

    function collectionNames(data) {
        var seen = new Set();
        var out = [];
        function add(list, group) {
            if (!Array.isArray(list)) return;
            for (var i = 0; i < list.length; i++) {
                var name = list[i];
                if (typeof name !== "string" || seen.has(name)) continue;
                seen.add(name);
                out.push({ name: name, category: group });
            }
        }
        if (!data || typeof data !== "object") return out;
        add(data.uncategorized, null);
        if (data.categories && typeof data.categories === "object") {
            for (var group in data.categories) {
                add(data.categories[group], group);
            }
        }
        return out;
    }

    function isToneVariant(name, names) {
        for (var i = 0; i < TONE_SUFFIXES.length; i++) {
            var suffix = TONE_SUFFIXES[i];
            if (name.length > suffix.length && name.slice(-suffix.length) === suffix) {
                return names.has(name.slice(0, -suffix.length));
            }
        }
        return false;
    }

    function categoryRank(group) {
        var rank = EMOJI_CATEGORIES.indexOf(group);
        return rank === -1 ? EMOJI_CATEGORIES.length : rank;
    }

    function buildIconify(which, data) {
        var prefix = ICONIFY_PREFIXES[which];
        var listed = collectionNames(data);
        var names = new Set(listed.map(function (entry) {
            return entry.name;
        }));
        var out = [];
        for (var i = 0; i < listed.length; i++) {
            var name = listed[i].name;
            if (which === "emoji" && isToneVariant(name, names)) continue;
            var title = which === "flags" ? flagTitle(name) : prettify(name);
            var entry = makeEntry("iconify", prefix + ":" + name, name, title, name.replace(/-/g, " "));
            entry.category = listed[i].category;
            out.push(entry);
        }
        if (which === "emoji") {
            out.sort(function (a, b) {
                var rank = categoryRank(a.category) - categoryRank(b.category);
                if (rank !== 0) return rank;
                if (a.nameKey < b.nameKey) return -1;
                return a.nameKey > b.nameKey ? 1 : 0;
            });
        } else {
            out.sort(byTitle);
        }
        return out;
    }

    function buildCatalog(which, data) {
        if (which === "icons") return buildLucide(data);
        if (which === "brands") return buildBrands(data);
        return buildIconify(which, data);
    }

    function loadCatalog(which) {
        if (loadState[which] === "loading" || loadState[which] === "ready") return;
        loadState[which] = "loading";
        render();
        request(catalogUrl(which), readJson)
            .then(function (data) {
                catalog[which] = buildCatalog(which, data);
                loadState[which] = "ready";
                render();
            })
            .catch(function () {
                loadState[which] = "error";
                render();
            });
    }

    function termScore(entry, term) {
        if (entry.search.indexOf(term) === -1) return -1;
        if (entry.nameKey === term || entry.titleKey === term) return 0;
        if (entry.nameKey.indexOf(term) === 0 || entry.titleKey.indexOf(term) === 0) return 1;
        for (var i = 0; i < entry.words.length; i++) {
            if (entry.words[i].indexOf(term) === 0) return 2;
        }
        if (entry.nameKey.indexOf(term) !== -1 || entry.titleKey.indexOf(term) !== -1) return 3;
        return 4;
    }

    function filtered() {
        var all = catalog[tab] || [];
        if (tab === "emoji" && category !== ALL_CATEGORIES) {
            all = all.filter(function (entry) {
                return entry.category === category;
            });
        }
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
            return a.score - b.score || byTitle(a.entry, b.entry);
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
        loadState[tab] = "idle";
        loadCatalog(tab);
    }

    function updateTileFailures() {
        if (loadState[tab] !== "ready" || shown.length === 0) return;
        if (resultsEl.querySelector(".tile.failed")) {
            setStatus("Some icons didn't load.", retryFailedTiles);
        } else {
            statusEl.hidden = true;
        }
    }

    function retryFailedTiles() {
        var prefix = ICONIFY_PREFIXES[tab];
        if (prefix) {
            var stem = "iconify:" + prefix + ":";
            Array.from(svgFailed).forEach(function (key) {
                if (key.indexOf(stem) === 0) svgFailed.delete(key);
            });
        }
        statusEl.hidden = true;
        var tiles = resultsEl.querySelectorAll(".tile.failed");
        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles[i];
            if (svgFailed.has(keyOf(tile.iconRef))) continue;
            tile.classList.remove("failed");
            showSkeleton(tile);
            observer.observe(tile);
        }
    }

    function renderTabs() {
        for (var i = 0; i < tabButtons.length; i++) {
            var button = tabButtons[i];
            button.className = button.dataset.tab === tab ? "tab active" : "tab";
        }
        searchEl.placeholder = PLACEHOLDERS[tab];
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
        strokesEl.hidden = tab !== "icons";
        colorsEl.hidden = tab !== "icons" && tab !== "brands";
        var colorsOff = tab === "brands" && options.brandColours;
        colorsEl.classList.toggle("disabled", colorsOff);
        for (var c = 0; c < colorButtons.length; c++) {
            colorButtons[c].disabled = colorsOff;
            colorButtons[c].classList.toggle("active", colorButtons[c].dataset.color === options.color);
        }
        var custom = isCustomColor(options.color);
        customInput.disabled = colorsOff;
        customSwatch.classList.toggle("active", custom);
        customSwatch.style.background = custom ? options.color : "";
        if (custom) customInput.value = options.color;
        brandWrap.hidden = tab !== "brands";
        brandInput.checked = options.brandColours;
        labelInput.checked = options.label;
    }

    function renderChips() {
        var ready = tab === "emoji" && loadState.emoji === "ready";
        chipsEl.hidden = !ready;
        if (!ready) return;
        if (chipsEl.childElementCount === 0) {
            var present = new Set(catalog.emoji.map(function (entry) {
                return entry.category;
            }));
            var groups = [ALL_CATEGORIES].concat(EMOJI_CATEGORIES.filter(function (group) {
                return present.has(group);
            }));
            groups.forEach(function (group) {
                var chip = document.createElement("button");
                chip.type = "button";
                chip.className = "chip";
                chip.textContent = group;
                chip.dataset.category = group;
                chip.addEventListener("click", function () {
                    if (category === group) return;
                    category = group;
                    limit = PAGE_SIZE;
                    mainEl.scrollTop = 0;
                    renderChips();
                    renderResults();
                });
                chipsEl.appendChild(chip);
            });
        }
        for (var i = 0; i < chipsEl.children.length; i++) {
            var chip = chipsEl.children[i];
            chip.classList.toggle("active", chip.dataset.category === category);
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

        if (loadState[tab] === "loading") {
            setStatus("Loading…", null);
            return;
        }
        if (loadState[tab] === "error") {
            setStatus("Could not load the icon list. Check your connection.", retryList);
            return;
        }
        if (loadState[tab] !== "ready") {
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
        renderTabs();
        renderOptions();
        renderChips();
        renderResults();
    }

    function selectTab(next) {
        if (tab === next) return;
        tab = next;
        limit = PAGE_SIZE;
        mainEl.scrollTop = 0;
        render();
        loadCatalog(tab);
        persist();
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

    tabButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            selectTab(button.dataset.tab);
        });
    });

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

    brandInput.addEventListener("change", function () {
        setOption("brandColours", brandInput.checked);
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
        tab = TABS.indexOf(raw.tab) === -1 ? "icons" : raw.tab;
        recent = Array.isArray(raw.recent) ? raw.recent : [];
        if (raw.options && typeof raw.options === "object") options = raw.options;
        limit = PAGE_SIZE;
        renderRecent();
        render();
        loadCatalog(tab);
    });

    render();
    api.postMessage({ type: "ready" });

    setTimeout(function () {
        loadCatalog(tab);
    }, 1500);
})();
</script>
</body>
</html>`;
