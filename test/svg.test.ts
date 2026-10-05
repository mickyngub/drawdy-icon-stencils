import assert from "node:assert/strict";
import { test } from "node:test";
import type { IconPick } from "../src/shared/messages";
import { finalizeIconSvg, type SvgOptions } from "../src/svg";

const LUCIDE = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18"/></svg>`;
const WIDE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153" stroke="currentColor"><path d="M0 0h256v153H0z"/></svg>`;
const HOSTILE = `<?xml version="1.0"?><!-- note --><svg viewBox="0 0 24 24" onload="alert(1)"><script>alert(2)</script><path onclick='steal()' d="M0 0h24"/></svg>`;

const OPTIONS: SvgOptions = {
    size: 64,
    color: "#ff4d4d",
    stroke: 2,
};

const lucide: IconPick = {
    source: "lucide",
    name: "minus",
    title: "minus",
    svg: LUCIDE,
};

function finish(icon: IconPick, overrides: Partial<SvgOptions> = {}) {
    const result = finalizeIconSvg(icon, { ...OPTIONS, ...overrides });
    assert.ok(result, "finalizeIconSvg returned null");
    return result;
}

const rootTag = (svg: string): string => /^<svg[^>]*>/.exec(svg)?.[0] ?? "";

test("a Lucide icon takes the colour and the stroke width", () => {
    const { svg } = finish(lucide, { stroke: 2.75 });
    assert.ok(!svg.includes("currentColor"));
    assert.match(rootTag(svg), / stroke="#ff4d4d"/);
    assert.match(rootTag(svg), / stroke-width="2.75"/);
});

test("a wide viewBox keeps its aspect on the board and stays crisp", () => {
    const { svg, width, height } = finish({ ...lucide, svg: WIDE });
    assert.equal(width, 64);
    assert.equal(height, 38.25);
    assert.match(rootTag(svg), / width="512"/);
    assert.match(rootTag(svg), / height="306"/);
});

test("an icon without a viewBox is treated as 24 by 24", () => {
    const bare: IconPick = { ...lucide, svg: `<svg><path d="M0 0"/></svg>` };
    const { svg, width, height } = finish(bare, { size: 128 });
    assert.deepEqual([width, height], [128, 128]);
    assert.match(rootTag(svg), / viewBox="0 0 24 24"/);
});

test("scripts, event handlers, comments and the XML declaration are stripped", () => {
    const { svg } = finish({ ...lucide, svg: HOSTILE });
    assert.ok(!/script/i.test(svg));
    assert.ok(!/\son[a-z]+\s*=/i.test(svg));
    assert.ok(!svg.includes("<!--"));
    assert.ok(!svg.includes("<?xml"));
    assert.match(svg, /<path\s+d="M0 0h24"\/>/);
});
