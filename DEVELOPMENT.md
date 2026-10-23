# Developing Icon Stencils

```bash
npm install
npm test
npm run typecheck
npm run dev                       # Tailwind watcher plus the dev server on :5185; in Drawdy run ⌘K → "Add extension dev server" on a local board
npm run css                       # regenerates src/panel-css.ts from webview/panel.css
npm run build                     # regenerates src/panel-css.ts, then dist/main.js and dist/mickyngub-icon-stencils.drawdyx
npm run lucide-categories         # after changing LUCIDE_VERSION in src/sources.ts: rebuild src/lucide-categories.ts from Lucide's repository
npm run check-lucide-categories   # fails if src/lucide-categories.ts does not match that Lucide version
npm run preflight                 # before submitting: committed, built, pushed, under Drawdy's limits, above the live version
```

Drawdy builds published versions from this repository's `src/index.ts` itself, so what is pushed is what ships; `dist/` is only for local testing. Commit `src/panel-css.ts` after `npm run build`: the panel in `src/webview-html.ts` is styled with Tailwind CSS v4 utilities, and `webview/panel.css` maps Drawdy's theme tokens onto Tailwind colours and radii so the panel follows the board's light and dark themes. Bump `driverVersion` in `manifest.json` for every release and add it to `CHANGELOG.md`. `npm test` holds the manifest and listing files to Drawdy's submission rules (a description of at most 500 characters, an icon of at most 256 KB, only `@drawdy/driver-protocol` imported from outside the repository), and also tests the SVG finishing, the category list, the click layout and the saved-state checks.
