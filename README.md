# Icon Stencils

Put UI and wireframe line icons on your Drawdy board. One palette holds every [Lucide](https://lucide.dev) icon, grouped by Lucide's own categories (Layout, Arrows, Text formatting, Shapes, Devices and more). Pick a category or search, then drag an icon straight onto the canvas, or click to add it in view, where repeated clicks line up in rows instead of stacking.

## How to use

1. Click the Icon Stencils button on the right of the board to open the palette.
2. Set the options at the top:
   - **S / M / L / XL**: 32, 64, 128 or 256 board units on the icon's long side.
   - **Thin / Regular / Bold**: the stroke width.
   - **Label**: also add the icon's name as text under it.
   - **Colour**: Ink (the board's foreground colour when you place the icon), four of Drawdy's stroke colours, or any colour from the picker.
3. Pick a category in the chip row under the options. **All** shows every icon alphabetically. The rest follow, starting with the ones most used for UI work (Layout, Arrows, Text formatting, Shapes, Accounts & access, Devices, File icons and so on), then every other Lucide category alphabetically. Scroll the row sideways to see them all.
4. Type in the search box, or press `/` to jump to it. The search looks inside the selected category, or through every icon under **All**. Every word you type must match. Exact names come first, then names that start with your word, then names with a word that starts with it, then names that contain it, then tag matches. The palette shows 120 icons at a time; **Show more** adds the next 120. Press Enter to add the first result.
5. Drag a tile out of the palette and let go over the board: the icon lands centred where you let go. Letting go inside the palette places nothing. Click a tile to add the icon in the middle of your view; more clicks without moving the view add icons in a row to the right, wrapping to a new row at the edge of the view, and moving the view starts again from its centre.
6. Each icon lands as an SVG image that keeps its proportions, drawn in the colour and stroke width you picked. A label is a text element in the icon's colour.
7. The last 12 icons you placed show in a **Recent** row above the results. The palette reopens with the options you used last; the category starts at **All** each time.

## Good to know

- No icons are bundled. The icon list and SVGs load from `cdn.jsdelivr.net` at a pinned version (`lucide-static@1.39.0`), one file per icon, as tiles scroll into view. A tile that fails to load shows an empty dashed square, and the palette says "Some icons didn't load." with a Retry button; nothing is retried automatically. If the list cannot load, the palette says so and offers a retry.
- The categories come from Lucide's repository at the same version and are built into the extension, because `lucide-static` does not include them. A category shows only the icons in the loaded list.
- A placed icon is the SVG itself, embedded in the board as a data URL and drawn at 512 px on its long side, so it stays sharp when you zoom in. Scripts and event handlers are stripped from every SVG before it is shown or placed.
- The Recent row and the options are kept in Drawdy's extension storage in this browser, so they are the same on every board you open here.
- The extension sends nothing anywhere. It only downloads the icon list and SVGs from `cdn.jsdelivr.net`.
- Icons are [Lucide](https://lucide.dev) (ISC).

## Licence

This extension's code is [MIT](LICENSE). The icons are not part of this repository; they load from jsDelivr under Lucide's ISC licence. The category list in `src/lucide-categories.ts` is taken from Lucide's repository under the same licence.

## Development

```bash
npm install
npm test
npm run typecheck
npm run dev                       # dev server on :5185; in Drawdy run ⌘K → "Add extension dev server" on a local board
npm run build                     # dist/main.js and dist/mickyngub-icon-stencils.drawdyx
npm run lucide-categories         # after changing LUCIDE_VERSION in src/sources.ts: rebuild src/lucide-categories.ts from Lucide's repository
npm run check-lucide-categories   # fails if src/lucide-categories.ts does not match that Lucide version
npm run preflight                 # before submitting: committed, built, pushed, under Drawdy's limits, above the live version
```

Drawdy builds published versions from this repository's `src/index.ts` itself, so what is pushed is what ships; `dist/` is only for local testing. Bump `driverVersion` in `manifest.json` for every release and add it to `CHANGELOG.md`. `npm test` holds the manifest and listing files to Drawdy's submission rules (a description of at most 500 characters, an icon of at most 256 KB, only `@drawdy/driver-protocol` imported from outside the repository), and also tests the SVG finishing, the category list, the click layout and the saved-state checks.
