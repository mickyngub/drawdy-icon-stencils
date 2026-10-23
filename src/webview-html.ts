import { LUCIDE_CATEGORIES } from "./lucide-categories";
import { PANEL_CSS } from "./panel-css";
import { LUCIDE_ICON_BASE, LUCIDE_INDEX_URL } from "./sources";

const FOCUS =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
const SECONDARY = `inline-flex h-7.5 cursor-pointer items-center justify-center gap-1 rounded-lg border border-line bg-subtle px-2.5 text-label text-fg-muted transition-colors hover:bg-hover hover:text-fg active:bg-pressed ${FOCUS}`;
const TILE = `grid aspect-square cursor-grab touch-none place-items-center overflow-hidden rounded-lg bg-subtle p-0 text-fg transition-colors select-none hover:bg-hover active:cursor-grabbing active:bg-pressed data-[dragging=true]:opacity-35 [&_svg]:block [&_svg]:size-6 ${FOCUS}`;
const SKELETON = "size-5 animate-pulse rounded-sm bg-control-subtle";
const BROKEN = "size-5 rounded-sm border border-dashed border-line-strong";
const GHOST =
    "pointer-events-none fixed top-0 left-0 z-10 grid size-[34px] translate-x-(--gx) translate-y-(--gy) place-items-center rounded-lg bg-elevated text-fg opacity-90 shadow-md ring-1 ring-line-strong [&_svg]:block [&_svg]:size-5";
const CHIP = `h-7 shrink-0 cursor-pointer rounded-full border border-line px-3 text-label whitespace-nowrap text-fg-muted transition-colors hover:bg-hover hover:text-fg aria-pressed:border-transparent aria-pressed:bg-accent-subtle aria-pressed:text-accent-text ${FOCUS}`;
const RETRY = `mt-2 ${SECONDARY}`;
const SECTION_LABEL =
    "flex items-center justify-between text-label text-fg-muted";
const GRID = "grid grid-cols-6 gap-1";
const TRACK = "flex h-7 gap-0.5 rounded-lg bg-control-subtle p-0.5";
const SEGMENT = `cursor-pointer truncate rounded-md px-1.5 text-label text-fg-subtle transition-colors hover:text-fg aria-pressed:bg-control aria-pressed:text-fg ${FOCUS}`;
const SWATCH_BASE =
    "relative size-5 shrink-0 cursor-pointer overflow-hidden rounded-full ring-1 ring-black/10 ring-inset";
const SWATCH = `${SWATCH_BASE} aria-pressed:outline-2 aria-pressed:outline-offset-2 aria-pressed:outline-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring`;
const CUSTOM_SWATCH = `${SWATCH_BASE} bg-[conic-gradient(#ff4d4d,#ffab3c,#b3e000,#3cc7ff,#698CF9,#c45cff,#ff4d4d)] has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-ring data-[active=true]:bg-(--swatch) data-[active=true]:bg-none data-[active=true]:outline-2 data-[active=true]:outline-offset-2 data-[active=true]:outline-fg`;

export const WEBVIEW_HTML = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource-variable/google-sans-flex@5.3.2/wght.css" />
<style id="theme">:root{/*__DRAWDY_STYLING__*/}</style>
<style>${PANEL_CSS}</style>
</head>
<body class="flex h-screen flex-col overflow-hidden bg-panel font-sans text-body text-fg antialiased">
<header class="flex flex-none flex-col gap-1.5 px-4 pt-3 pb-1">
    <p class="text-body text-fg-subtle">Drag an icon onto the board, or click to add it.</p>
    <div id="chips" class="-mx-4 flex scroll-pr-8 scroll-pl-4 gap-1.5 overflow-x-auto pr-8 pl-4 [mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-32px),transparent)] [scrollbar-width:none]"></div>
    <div class="grid grid-cols-[4fr_5fr] gap-2">
        <div class="${TRACK}" id="sizes" title="Size on the board" role="group" aria-label="Size on the board">
            <button type="button" class="${SEGMENT} flex-1" data-size="32" title="32 px">S</button>
            <button type="button" class="${SEGMENT} flex-1" data-size="64" title="64 px">M</button>
            <button type="button" class="${SEGMENT} flex-1" data-size="128" title="128 px">L</button>
            <button type="button" class="${SEGMENT} flex-1" data-size="256" title="256 px">XL</button>
        </div>
        <div class="${TRACK}" id="strokes" title="Stroke" role="group" aria-label="Stroke">
            <button type="button" class="${SEGMENT} flex-auto" data-stroke="1.5">Thin</button>
            <button type="button" class="${SEGMENT} flex-auto" data-stroke="2">Regular</button>
            <button type="button" class="${SEGMENT} flex-auto" data-stroke="2.75">Bold</button>
        </div>
    </div>
    <div class="flex min-h-5 items-center justify-between gap-3">
        <div class="flex items-center gap-2" id="colors" role="group" aria-label="Colour">
            <button type="button" class="${SWATCH} bg-fg" data-color="ink" title="Ink" aria-label="Ink"></button>
            <button type="button" class="${SWATCH} bg-[#b3e000]" data-color="#b3e000" title="#b3e000" aria-label="#b3e000"></button>
            <button type="button" class="${SWATCH} bg-[#ffab3c]" data-color="#ffab3c" title="#ffab3c" aria-label="#ffab3c"></button>
            <button type="button" class="${SWATCH} bg-[#698CF9]" data-color="#698CF9" title="#698CF9" aria-label="#698CF9"></button>
            <button type="button" class="${SWATCH} bg-[#ff4d4d]" data-color="#ff4d4d" title="#ff4d4d" aria-label="#ff4d4d"></button>
            <label class="${CUSTOM_SWATCH}" id="custom-swatch" title="Custom colour"><input type="color" id="custom-color" value="#000000" aria-label="Custom colour" class="absolute inset-0 size-full cursor-pointer border-0 p-0 opacity-0" /></label>
        </div>
        <label class="ml-auto inline-flex cursor-pointer items-center gap-2 text-label text-fg-muted select-none"><span class="grid place-items-center"><input type="checkbox" id="label" class="peer col-start-1 row-start-1 m-0 size-4 cursor-pointer appearance-none rounded-sm border border-line-strong transition-colors checked:border-transparent checked:bg-accent-pressed ${FOCUS}" /><svg class="pointer-events-none invisible col-start-1 row-start-1 size-3 text-on-accent peer-checked:visible" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"/></svg></span>Label</label>
    </div>
    <div class="relative">
        <svg class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-fg-subtle" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"/></svg>
        <input id="search" type="text" placeholder="Search icons (home, arrow…)" autocomplete="off" class="h-8 w-full rounded-lg border border-line bg-subtle px-3 pl-9 text-[13px] leading-5 text-fg transition-colors placeholder:text-fg-disabled hover:bg-hover focus:border-line-strong focus:bg-active focus:ring-1 focus:ring-ring focus:outline-none" />
    </div>
</header>
<main id="main" class="min-h-0 flex-1 overflow-y-auto px-4 pt-1 pb-4 [scrollbar-color:var(--color-line-strong)_transparent] [scrollbar-width:thin]">
    <div id="recent-wrap" class="mb-3 flex flex-col gap-2 border-b border-divider pb-3" hidden>
        <div class="${SECTION_LABEL}">Recent</div>
        <div class="${GRID}" id="recent"></div>
    </div>
    <div class="py-5 text-center text-body text-fg-subtle" id="status" hidden></div>
    <div class="${GRID}" id="results"></div>
    <div class="pt-3 text-center text-caption text-fg-subtle" id="count" hidden></div>
    <div class="flex justify-center"><button class="${SECONDARY} mt-2" id="more" type="button" hidden>Show more</button></div>
</main>
<footer class="flex-none border-t border-divider px-4 py-2 text-caption text-fg-subtle">Icons by Lucide, ISC</footer>
<script>
(function () {
    var api = acquireDrawdyApi();

    var LUCIDE_INDEX_URL = "${LUCIDE_INDEX_URL}";
    var LUCIDE_ICON_BASE = "${LUCIDE_ICON_BASE}";
    var CATEGORIES = ${JSON.stringify(LUCIDE_CATEGORIES)};
    var TILE = ${JSON.stringify(TILE)};
    var SKELETON = ${JSON.stringify(SKELETON)};
    var BROKEN = ${JSON.stringify(BROKEN)};
    var GHOST = ${JSON.stringify(GHOST)};
    var CHIP = ${JSON.stringify(CHIP)};
    var RETRY = ${JSON.stringify(RETRY)};

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
        tile.dataset.failed = "true";
        var broken = document.createElement("div");
        broken.className = BROKEN;
        tile.appendChild(broken);
    }

    function showSkeleton(tile) {
        tile.innerHTML = "";
        var skeleton = document.createElement("div");
        skeleton.className = SKELETON;
        tile.appendChild(skeleton);
    }

    function makeGhost(icon) {
        var ghost = document.createElement("div");
        ghost.className = GHOST;
        document.body.appendChild(ghost);
        var cached = svgCache.get(keyOf(icon));
        if (cached) paintSvg(ghost, cached);
        return ghost;
    }

    function moveGhost(ghost, x, y) {
        ghost.style.setProperty("--gx", x - 17 + "px");
        ghost.style.setProperty("--gy", y - 17 + "px");
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
        tile.className = TILE;
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
                tile.dataset.dragging = "true";
                ghost = makeGhost(icon);
            }
            if (ghost) moveGhost(ghost, event.clientX, event.clientY);
        });

        function endDrag(event) {
            if (tile.hasPointerCapture(event.pointerId)) {
                tile.releasePointerCapture(event.pointerId);
            }
            tile.dataset.dragging = "false";
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
            button.className = RETRY;
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
        if (resultsEl.querySelector("[data-failed]")) {
            setStatus("Some icons didn't load.", retryFailedTiles);
        } else {
            statusEl.hidden = true;
        }
    }

    function retryFailedTiles() {
        svgFailed.clear();
        statusEl.hidden = true;
        var tiles = resultsEl.querySelectorAll("[data-failed]");
        for (var i = 0; i < tiles.length; i++) {
            var tile = tiles[i];
            delete tile.dataset.failed;
            showSkeleton(tile);
            observer.observe(tile);
        }
    }

    function isCustomColor(color) {
        return color !== "ink" && PRESET_COLORS.indexOf(color) === -1;
    }

    function renderOptions() {
        for (var i = 0; i < sizeButtons.length; i++) {
            sizeButtons[i].setAttribute("aria-pressed", String(Number(sizeButtons[i].dataset.size) === options.size));
        }
        for (var s = 0; s < strokeButtons.length; s++) {
            strokeButtons[s].setAttribute("aria-pressed", String(Number(strokeButtons[s].dataset.stroke) === options.stroke));
        }
        for (var c = 0; c < colorButtons.length; c++) {
            colorButtons[c].setAttribute("aria-pressed", String(colorButtons[c].dataset.color === options.color));
        }
        var custom = isCustomColor(options.color);
        customSwatch.dataset.active = String(custom);
        if (custom) {
            customSwatch.style.setProperty("--swatch", options.color);
            customInput.value = options.color;
        }
        labelInput.checked = options.label;
    }

    function addChip(id, title) {
        var chip = document.createElement("button");
        chip.type = "button";
        chip.className = CHIP;
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
            var selected = chip.categoryId === category;
            chip.setAttribute("aria-pressed", String(selected));
            if (selected) chip.scrollIntoView({ inline: "nearest", block: "nearest" });
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
