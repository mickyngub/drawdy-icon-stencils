import assert from "node:assert/strict";
import { test } from "node:test";
import { readState } from "../src/index";

const DEFAULT_OPTIONS = {
    size: 64,
    color: "ink",
    brandColours: true,
    stroke: 2,
    label: false,
};

test("readState falls back to the defaults", () => {
    const empty = { tab: "icons", recent: [], options: DEFAULT_OPTIONS };
    assert.deepEqual(readState(undefined), empty);
    assert.deepEqual(readState({}), empty);
});

test("readState keeps valid values", () => {
    const options = {
        size: 256,
        color: "#698CF9",
        brandColours: false,
        stroke: 1.5,
        label: true,
    };
    const recent = [
        {
            source: "iconify",
            name: "fluent-emoji-flat:rocket",
            title: "Rocket",
        },
        { source: "brand", name: "figma", title: "Figma", hex: "F24E1E" },
    ];
    assert.deepEqual(readState({ tab: "emoji", recent, options }), {
        tab: "emoji",
        recent,
        options,
    });
});

test("readState rejects a bad colour, size, stroke and tab", () => {
    const state = readState({
        tab: "maps",
        options: {
            size: 100,
            color: "red",
            brandColours: "yes",
            stroke: 3,
            label: "true",
        },
    });
    assert.equal(state.tab, "icons");
    assert.deepEqual(state.options, DEFAULT_OPTIONS);
    assert.equal(
        readState({ options: { color: "#12345" } }).options.color,
        "ink"
    );
});

test("readState drops recent icons outside the three Iconify sets", () => {
    const kept = {
        source: "iconify",
        name: "logos:aws-lambda",
        title: "Aws lambda",
    };
    const state = readState({
        recent: [
            { source: "iconify", name: "mdi:home", title: "Home" },
            kept,
            { source: "iconify", name: "logos:AWS", title: "AWS" },
            { source: "iconify", name: "circle-flags", title: "Flags" },
            { source: "font", name: "logos:aws", title: "Aws" },
        ],
    });
    assert.deepEqual(state.recent, [kept]);
});
