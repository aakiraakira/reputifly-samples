# Changelog

## [v4] — 2026-04-16
- Standardized all fonts to Poppins (Google Fonts) for consistent, clean typography
- Restructured hero section: text above, building photo below (no longer blocking the building image)
- Changed Lifestyle Pavilion (Block C) section from dark green background to light/bright background for readability
- Updated accordion styles (headers, borders, content) for light background theme
- Location Map section: removed text sidebar, enlarged map image to full width
- Added PDPA consent checkbox to enquiry form (required before submission)
- Added PDPA Notice and Privacy Notice links in footer disclaimers area
- Created dedicated pdpa-notice.html page with full PDPA Notice content
- Created dedicated privacy-notice.html page with full Privacy Notice content
- Added Google Translate widget (BM & CN) in header navigation
- Added CSS to style and clean up Google Translate widget appearance
- Files changed: index.html, pdpa-notice.html (new), privacy-notice.html (new), CHANGELOG.md
- Agent: Claude Opus 4.6

## [v3] — 2026-04-07
- Replaced text logo "P'MAVERAZ" with actual graphic logo image (colorful leaves + calligraphy)
- Added building rendering photo as hero background image with dark overlay
- Simplified navigation from 5 items to 3: Overview, Floor Plans, Location Map
- Replaced SVG masterplan graphic with actual Key Plan image
- Restored "MM2H Tower" text (was "MM2H" in v2)
- Updated Block B Super Deluxe: 826 sqft -> 916 sqft
- Updated Block B Super Family: 1347 sqft -> 1345 sqft, 2 Rooms -> 3 Rooms
- Replaced all 5 SVG floor plan placeholders with actual architectural floor plan images
- Replaced SVG location node map with actual Eco Tourism Zone map image
- Fixed company number: 1005799-1 -> 1005759-T (was incorrect)
- Added 9 image assets: logo.jpg, hero.jpg, keyplan.png, fp-a-studio.png, fp-a-deluxe.png, fp-a-family.png, fp-b-deluxe.png, fp-b-family.png, location-map.png
- Files changed: index.html, CHANGELOG.md, images/*
- Agent: Claude Opus 4.6

## [v2] — 2026-04-06
- Changed page title from "P'Maveraz - Spring Forth Sanctuary" to "P'Maveraz - Residential Suites"
- Updated navigation menu: replaced Masterplan/Floor Plans/Facilities/Location with Overview/Block A/Block B/Block C/Location Map
- Updated hero section: replaced "Spring Forth Sanctuary" with "Zone R" / "Residential Suites" / "FREEHOLD"
- Changed overview section heading from "The Masterplan" to "Overview"
- Updated Block B card text from "MM2H Tower" to "MM2H"
- Restructured floor plans from 5 flat tabs (Studio 1, Deluxe 3 T1/T2, Deluxe 1A, Family 2) to 3 main tabs (Block A, Block B, Block C) with sub-tabs
- Block A sub-tabs: Studio (391 sqft, 1 Room, 1 Bath), Super Deluxe (714 sqft, 2 Rooms, 2 Bath), Super Family (1053 sqft, 3 Rooms, 2 Bath)
- Block B sub-tabs: Super Deluxe (826 sqft, 2 Rooms, 2 Bath), Super Family (1347 sqft, 2 Rooms, 2 Bath)
- Block C tab shows Lifestyle Pavilion with link to facilities section
- Updated JavaScript to handle two-level tab system with data-parent scoping
- Added CSS for sub-content grid display
- Changed location section heading from "Eco Tourism Zone" to "Location Map"
- Updated footer registration dropdown options to: Block A - Studio, Block A - Super Deluxe, Block A - Super Family, Block B - Super Deluxe, Block B - Super Family
- Files changed: index.html, CHANGELOG.md
- Agent: Claude Opus 4.6
