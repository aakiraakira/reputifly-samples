## v8 — 2026-04-10
- Removed "Fleet Modernization" timeline item from About page first section (Our Story)
- Files changed: about.html, CHANGELOG.md
- Agent: Claude Sonnet 4.6

## v7 — 2026-04-08
- Replaced hero background with responsive images (portrait 9:16 for mobile, landscape 16:9 for desktop)
- Replaced About Us Snippet photo with responsive portrait/landscape versions
- Overhauled Service Overview: reordered cards to match Services page, replaced all 4 photos with responsive versions
- Updated Inspection & Maintenance and Consulting & Project Management descriptions with client-supplied copy
- Replaced all 4 Services page section photos with responsive portrait/landscape versions
- Removed word "offshore" from Underwater Construction & Engineering text per client request
- Improved Google Maps embed with precise search-query pin marker at 1092 Lower Delta Road
- Created changelog.html page with full version history and timeline layout
- Files changed: index.html, services.html, contact.html, changelog.html, CHANGELOG.md
- Agent: Claude Opus 4.6 (1M context)

### Client notes (not code changes):
- Business hours editability in portal — portal feature request, flagged for Reputifly team

## v6 (override) — 2026-04-07
- Cropped Pile Repair showcase image (img21.jpg) to remove worker and blue machine logo as per client request, using crop reference from PPTX presentation
- Files changed: images/img21.jpg, CHANGELOG.md
- Agent: Claude Opus 4.6 (1M context)

## v6 — 2026-04-07
- Enlarged company logo across all pages (header: 50px → 65px, footer: 45px → 55px)
- Fixed footer copyright encoding (removed garbled `Â` character before ©) across all pages
- Updated floating WhatsApp button number to +65 9001 1619 across all pages (was pointing to wrong number)
- Fixed browser tab titles to "Straits Diving & Engineering Pte Ltd" (added missing & and Pte Ltd) across all pages
- Changed testimonial name from "Kang Lim" / "KL" to "Tan Weng Soon" / "TWS" on Home page
- Lifted service card icons higher (bottom: -24px → 12px) so they are no longer clipped/blocked on Home page
- Fixed Our Values bullet points — replaced garbled Unicode characters with proper bullet (•) and em dash (—) symbols on About page
- Fixed Mission text garbled em dash on About page
- Updated Google Maps embed with more precise coordinates for 1092 Lower Delta Road and proper company name in title on Contact page
- Added `img { image-orientation: from-image; }` CSS to all pages for proper image rotation/orientation display
- Files changed: index.html, about.html, services.html, contact.html, showcase.html, CHANGELOG.md
- Agent: Claude Opus 4.6 (1M context)

### Pending items (awaiting client input):
- Service section photos replacement (client to send new photos)
- Showcase photo crop for Pile Repair & Underwater Works (client to specify which part to crop)
- Home page background, About Us, and Services tab photo replacements (client to send photos)

## v5 (override)  2026-04-01
- Restructured showcase from 9 separate cards to 5 distinct project cards matching the PowerPoint presentation
- Added full lightbox gallery popup: click any card to browse ALL project images with prev/next navigation, thumbnails, swipe support
- All 26 images from the PowerPoint now included (was 9 previously), organized per project
- Projects: Cathodic Protection (5 imgs), Pile Strengthening Johor (5 imgs), Dry Dock + Demolition Malaysia (5 imgs), Quay Wall Mozambique (5 imgs), Pile Repair Singapore (6 imgs)
- Lightbox features: keyboard nav (arrows, Esc), touch swipe on mobile, thumbnail strip, image counter, smooth transitions
- Full mobile optimization: responsive grid, scrollable filters, touch-friendly lightbox, adjusted thumbnail sizes
- Fixed copyright symbol encoding in footer
- Files changed: showcase.html, images/img1-26.jpg (replaced project1-9.jpg), CHANGELOG.md
- Agent: Claude Opus 4.6 (1M context)

## v5  2026-04-01
- Initial v5 deploy with 9 project cards and real images from PowerPoint
