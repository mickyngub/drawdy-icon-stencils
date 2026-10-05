# Icon Stencils

Put icons, logos, emoji and flags on your Drawdy board. One palette searches Lucide icons, Simple Icons brand logos, full-colour tech and cloud logos, Fluent emoji and round country flags; drag one straight onto the canvas, or click to add it in view, where repeated clicks line up in rows instead of stacking.

## How to use

1. Click the Icon Stencils button (four small outlined shapes) on the right of the board to open the palette.
2. Pick a tab: **Icons** (Lucide), **Brands** (Simple Icons brand logos), **Tech** (full-colour tech, cloud and product logos from SVG Logos, AWS services included), **Emoji** (Fluent Emoji Flat, with category chips to narrow the list and skin-tone variants left out) or **Flags** (Circle Flags, named by country or region).
3. Type in the search box, or press `/` to jump to it. Every word you type must match. Exact names come first, then names that start with your word, then names with a word that starts with it, then names that contain it, then tag and alias matches. The palette shows 120 icons at a time; **Show more** adds the next 120. Press Enter to add the first result.
4. Set the options above the search box:
   - **S / M / L / XL**: 32, 64, 128 or 256 board units on the icon's long side.
   - **Colour**: Ink (the board's foreground colour when you place the icon), four of Drawdy's stroke colours, or any colour from the picker. It colours Lucide icons, and brand logos when **Brand colours** is off.
   - **Brand colours** (Brands tab): keep each logo's own colour, on by default.
   - **Thin / Regular / Bold** (Icons tab): the Lucide stroke width.
   - **Label**: also add the icon's name as text under it.
5. Drag a tile out of the palette and let go over the board: the icon lands centred where you let go. Letting go inside the palette places nothing. Click a tile to add the icon in the middle of your view; more clicks without moving the view add icons in a row to the right, wrapping to a new row at the edge of the view, and moving the view starts again from its centre.
6. Each icon lands as an SVG image that keeps its proportions. Tech logos, emoji and flags keep their own colours. A label is a text element in the icon's colour, or in Ink for full-colour icons.
7. The last 12 icons you placed, from any tab, show in a **Recent** row above the results. The palette reopens on the tab and options you used last.

## Good to know

- Nothing is bundled. Lucide and Simple Icons lists and SVGs load from `cdn.jsdelivr.net` at pinned versions (`lucide-static@1.39.0` and `simple-icons@16.29.0`), one file per icon. Tech, Emoji and Flags load from the Iconify API at `api.iconify.design`. Their icons arrive in batches of a few dozen per request, at most two batches at a time, and an icon a batch cannot draw (a flipped or rotated variant) is fetched on its own. Tiles load as they scroll into view. A tile that fails to load shows an empty dashed square, and the palette says "Some icons didn't load." with a Retry button; nothing is retried automatically. If a list cannot load, the palette says so and offers a retry.
- A placed icon is the SVG itself, embedded in the board as a data URL and drawn at 512 px on its long side, so it stays sharp when you zoom in. Scripts and event handlers are stripped from every SVG before it is shown or placed.
- The Recent row, the last tab and the options are kept in Drawdy's extension storage in this browser, so they are the same on every board you open here.
- The extension sends nothing anywhere. It only downloads icon lists and SVGs from the hosts above.
- Icons are [Lucide](https://lucide.dev) (ISC), [Simple Icons](https://simpleicons.org) (CC0; brand logos are trademarks of their owners), [SVG Logos](https://github.com/gilbarbara/logos) (CC0; logos are trademarks of their owners), [Fluent Emoji](https://github.com/microsoft/fluentui-emoji) (MIT, Microsoft) and [Circle Flags](https://github.com/HatScripts/circle-flags) (MIT, HatScripts).

## Licence

This extension's code is [MIT](LICENSE). The icons are not part of this repository; they load from jsDelivr and the Iconify API under their own licences, listed above.

## Development

```bash
npm install
npm test
npm run typecheck
npm run dev          # dev server on :5185; in Drawdy run ⌘K → "Add extension dev server" on a local board
npm run build        # dist/main.js and dist/mickyngub-icon-stencils.drawdyx
npm run preflight    # before submitting: committed, built, pushed, under Drawdy's limits, above the live version
```

Drawdy builds published versions from this repository's `src/index.ts` itself, so what is pushed is what ships; `dist/` is only for local testing. Bump `driverVersion` in `manifest.json` for every release and add it to `CHANGELOG.md`. `npm test` holds the manifest and listing files to Drawdy's submission rules (a description of at most 500 characters, an icon of at most 256 KB, only `@drawdy/driver-protocol` imported from outside the repository), and also tests the SVG finishing, the Iconify batching, the click layout and the saved-state checks.
