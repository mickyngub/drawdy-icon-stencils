import assert from "node:assert/strict";
import { test } from "node:test";
import { LUCIDE_CATEGORIES } from "../src/lucide-categories";

const LEADING = [
    "layout",
    "arrows",
    "text",
    "shapes",
    "account",
    "devices",
    "files",
    "communication",
    "multimedia",
    "navigation",
    "notifications",
    "charts",
    "design",
    "development",
    "security",
    "connectivity",
    "time",
];

test("the baked categories are not empty", () => {
    assert.ok(LUCIDE_CATEGORIES.length > 0);
});

test("category ids are unique", () => {
    const ids = LUCIDE_CATEGORIES.map((category) => category.id);
    assert.equal(new Set(ids).size, ids.length);
});

test("every icon name is a plain Lucide file name", () => {
    for (const { id, icons } of LUCIDE_CATEGORIES) {
        for (const icon of icons) {
            assert.match(icon, /^[a-z0-9-]+$/, `${id} has the icon ${icon}`);
        }
    }
});

test("the first categories follow the chip order", () => {
    const ids = LUCIDE_CATEGORIES.map((category) => category.id);
    const present = LEADING.filter((id) => ids.includes(id));
    assert.deepEqual(ids.slice(0, present.length), present);
});
