# Changelog — Imi Stacking Cards Showcase

## base — 2026-05-08
- Initial sample build
- Pages: index.html (single-page Air Straightener accordion showcase)
- Card-stacking pattern: position:sticky on each .card-wrap with a padding-bottom runway; JS reads the next card's distance and ramps the current card's transform:scale (1 → .9) and filter:brightness (1 → .55) so the active card visibly sinks behind as the next stacks over it
- 6 fixed-height cards cover slides 49-55 (Approach, How To Use, After First Use, First Few Uses, Colour-Treated Hair, Who It's For)
- Equal-height cards, vertical-centred content, sub-middle stacking point (top:18vh)
- Brand: IMI cream pink + Fraunces italic accents + Inter 700 headings
- Bottom progress bar tracks total scroll
- Mobile: equal-height cards (520px), stacked vertical-italic label converts to horizontal label with divider
- Agent: Claude Opus 4.7
