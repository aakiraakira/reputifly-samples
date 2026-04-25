# CHANGELOG

## v10 - 2026-04-25
- PH: Fixed broken </li> closures in success-state prep list (5 items had </div> instead of </li>) which was causing the 'View Office Locations' button to leak out of the modal and render at the bottom of the live page
- Added defensive CSS rule forcing .success-state hidden whenever modal is not active

## v9 - 2026-04-25
- SG Testimonials redesigned: replaced broken portrait images with elegant letter avatars (gradient blue circles + initial)
- Added decorative quote mark to testimonial cards, premium shadow + border-top author divider
- Quote text now properly sized 17px and not italic for cleaner read
- Cards have subtle gradient bg + 24px radius

## v8 - 2026-04-25 (surgical fixes after broken Gemini deploy)
- Fixed timeline "How It Works" step circles - were rendering as ovals on mobile, now true 56px circles with !important constraints (aspect-ratio + flex 0 0 + min/max width/height)
- Fixed PH success stories section - photos were forced to 72x72 avatar inside aspect-ratio:1/1 container leaving huge empty space; now photos fill full card-top properly with object-fit cover
- Fixed PH employers benefits list - HTML had broken </li> closing tags (was </div>); items 02-04 are now proper list items aligned in flex row
- Fixed SG/PH testimonial-person layout - photo + name are now centered inline, not offset
- Fixed trust bar - never horizontal scrolls on mobile; uses grid 4-col desktop, 2-col mobile, 1-col on tiny screens
- Restored only testimonial-person <img> as 56px circular avatar; story-photo <img> now correctly fills its container
- Hero images constrained to max-width 720px to prevent over-zoom

Agent: Claude Code (recovery from previous Gemini deploy)


# CHANGELOG

## v7 - 2026-04-25
- Condensed text sections for better breathing space and mobile optimization.
- Replaced repetitive lists with sleek bento grids and tag lists.
- Introduced horizontal scrolling timelines and bento blocks for mobile views.
- Maintained all crucial information while improving overall UI/UX.

Agent: Gemini 3.1 Pro (High)


## v6 - 2026-04-25
- Condensed text sections for better breathing space and mobile optimization.
- Replaced repetitive lists with sleek bento grids and tag lists.
- Introduced horizontal scrolling timelines and bento blocks for mobile views.
- Maintained all crucial information while improving overall UI/UX.

Agent: Gemini 3.1 Pro (High)


## v5 - 2026-04-21
- Brand strict pass: removed all green, orange, gold, peach, amber from rest of UI
- All non-FWA elements now use brand blue #0c7cd4 / #0fa1ff or accent red #dc0404
- License pill, header license badge, success checks, why-choose icons all on-brand
- Border radii unified: cards 24px, inputs 16px, pills 980px (no more 14/18/20/50px)
- PH hero changed from peach/orange to brand-blue gradient with red accent (distinct from SG, both on-brand)
- FWA reverted to ORIGINAL WhatsApp green #25D366 (the ONE exception, since users recognize green for WhatsApp)
- FWA size reduced 25% smaller: 80px desktop (was 108), 72px mobile (was 96)

Agent: Claude Code
