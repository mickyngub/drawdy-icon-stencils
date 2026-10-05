import assert from "node:assert/strict";
import { test } from "node:test";
import { readState } from "../src/index";

const DEFAULT_OPTIONS = {
    size: 64,
    color: "ink",
    stroke: 2,
    label: false,
};

test("readState falls back to the defaults", () => {
    const empty = { recent: [], options: DEFAULT_OPTIONS };
    assert.deepEqual(readState(undefined), empty);
    assert.deepEqual(readState({}), empty);
});

test("readState keeps valid values", () => {
    const options = {
        size: 256,
        color: "#698CF9",
        stroke: 1.5,
        label: true,
    };
    const recent = [
        { source: "lucide", name: "house", title: "house" },
        { source: "lucide", name: "arrow-right", title: "arrow-right" },
    ];
    assert.deepEqual(readState({ recent, options }), { recent, options });
});

test("readState rejects a bad colour, size and stroke", () => {
    const state = readState({
        options: {
            size: 100,
            color: "red",
            stroke: 3,
            label: "true",
        },
    });
    assert.deepEqual(state.options, DEFAULT_OPTIONS);
    assert.equal(
        readState({ options: { color: "#12345" } }).options.color,
        "ink"
    );
});

test("readState drops recent icons that are not Lucide and keeps the rest", () => {
    const kept = { source: "lucide", name: "house", title: "house" };
    const alsoKept = { source: "lucide", name: "user", title: "user" };
    const state = readState({
        tab: "brands",
        recent: [
            { source: "brand", name: "figma", title: "Figma", hex: "F24E1E" },
            kept,
            {
                source: "iconify",
                name: "fluent-emoji-flat:rocket",
                title: "Rocket",
            },
            { source: "lucide", name: "", title: "empty" },
            alsoKept,
        ],
        options: { ...DEFAULT_OPTIONS, brandColours: false },
    });
    assert.deepEqual(state, {
        recent: [kept, alsoKept],
        options: DEFAULT_OPTIONS,
    });
});
