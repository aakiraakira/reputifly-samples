# Changelog — Imi Seven Modes Showcase

## base — 2026-05-08
- Initial sample build
- Pages: index.html (single-page scroll showcase)
- Hero: "Seven modes. One understanding tool."
- 7 mode display crossfades (stack-of-discs visual) with brand-tinted halo + glass spec panel
- Mode-tinted color theme transitions (gold, blue, purple, cream, olive, mint, coral)
- Mode display images served from Reputifly WordPress media (CDN URLs)
- Pointer parallax on the deck, dot navigation, smooth ScrollTrigger transitions
- Mobile: image rotates around vertical axis, glass panel stacks below, dot pill at bottom
- Agent: Claude Opus 4.7

## v2 — 2026-05-08 (re-pitch repalette)
- Switched theme from custom dark to IMI signature pink + beach palette
  - Background: `#fbf2f2` → `#f6eded` → `#f2d2c8` linear gradient with mode-tinted radial halos
  - Glass panel: frosted white (rgba(255,255,255,.55)) replacing dark glass
  - Text: `#0b0a14` deep on light bg
- Re-curated 7 mode accents to live inside IMI's warm palette:
  - 01 IntelliSense: terracotta-pink `#c97a72` (signature)
  - 02 Short Hair: sea-glass blue `#7a9bb8`
  - 03 Long Hair: dusty mauve `#a06b9f`
  - 04 Kids: peach amber `#d9986a`
  - 05 Pets: sand `#9d7f5a`
  - 06 Constant Temp: sage `#6b9876`
  - 07 Hot–Cold: coral `#cf6e7a`
- Mobile rebuild: replaced rotateY 3D displacement with clean opacity crossfade in place
  - Stack pinned top (~280px), panel below, dot pill at bottom of viewport
  - No backdrop-filter on transformed cards, no 3D rotation — kills flicker on iOS Safari
- Title em-dash removed (brand voice rule)
- Agent: Claude Opus 4.7
