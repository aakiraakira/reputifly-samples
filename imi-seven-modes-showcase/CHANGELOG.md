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

## v3 — 2026-05-09 (mobile compaction for iPhone 17 Pro Max)
- Goal: fit the full mode card (image + eyebrow + title + body + temps) inside one mobile viewport without scrolling. Tested target: iPhone 17 Pro Max viewport.
- Changes (all mobile only — desktop unchanged):
  - Hidden the giant italic mode number `01 / 02 / 03 …` on mobile (`.mode__num{ display:none }`) — reclaims ~60–80px vertical
  - Stack circle reduced from `min(280px, 64vw)` → `min(220px, 58vw)` — smaller image, more room below
  - Temp pills (Warm / Hot / Cool) forced to a single row of 3 columns on small mobile (was 2 columns at ≤520px) — tighter padding, smaller font, stays legible
  - Dot pagination pill (bottom of viewport) hidden entirely on mobile — scroll-driven mode change still works
  - Panel padding tightened to 22px, title font tightened to clamp(22px,5.6vw,30px), body line-height 1.55 + smaller margins
  - show__pin grid-template-rows tightened from 40vh → 32vh for the stack column
- Agent: Claude Opus 4.7

