## [v4] — 2026-04-24 (Redesign polish + mobile fixes + uniform certification logos)
- ABOUT: Removed "Meet Our Team" portrait section entirely; forced "Our Values & Approach" cards into a single horizontal row at desktop (4 columns) with responsive 2-col at <=1100px and 1-col at <=640px
- HOME: Normalized all 12 certification carousel logos — downloaded each source, trimmed white/gray border whitespace with corner-sampling + luminance detection, scaled onto a uniform 600x220 canvas, re-uploaded to /wp-content/uploads/2026/04/ so every logo renders at an identical 162x82 visual footprint inside carousel cards
- HOME: Fixed ISSB logo specifically — bing thumbnail had non-white gray corners which fooled naive trimming; switched to corner-sampled background detection so the navy ISSB circle now fills its card uniformly
- HOME: Subtle CSS polish for the inline-authored intro text (hide empty <div>/<br> runs, restyle <b> headings in the bullet list) — no copy changes
- ALL PAGES: Added floating WhatsApp button (bottom-right, #25D366, 62x62 desktop / 56x56 mobile, pulse + hover tooltip, accessible, replaces wa.me/6512345678 placeholder when real number is supplied)
- ALL PAGES: Mobile optimization pass — no horizontal scroll, scaled hero padding + font sizes for <=768px, stackable hero buttons on <=480px, responsive WhatsApp sizing, carousel items shrink gracefully
- ALL PAGES: Fixed mobile hamburger menu bug — the agent-side HTML minifier was corrupting `&&` into `&` which broke the click handler; rewrote the script to use nested ifs (minifier-safe) and added outside-click-to-close UX
- ALL PAGES: Converted all relative image src values to absolute URLs so WordPress deploys render correctly regardless of page path
- ALL PAGES: Footer credit "Reputifly" now links to https://reputifly.com/web-development with target="_blank" and rel="dofollow noopener"
- NEW TOOLING: Added fix_and_redeploy.py (smart trim + upload + deploy pipeline) and fix_issb.py (per-logo re-trim with corner-sampling algorithm) so per-logo cropping tweaks can be reapplied quickly if any logo needs further adjustment
- Files changed: index.html, about.html, services.html, contact.html, changelog.html, CHANGELOG.md
- Agent: Claude Opus 4.7 (1M context)

## [v3] — 2026-04-06 (Amendment v2 — SG Eco Fund)
- SERVICES: Added "Little Green Steps" SG Eco Fund section below Education Initiatives with logo, write-up, and Google Form registration button
- HOME: Added SG Eco Fund logo to the industry standards certification carousel
- NEW ASSET: images/sg-eco-fund.png (SG Eco Fund logo)
- Files changed: services.html, index.html, images/sg-eco-fund.png (new), CHANGELOG.md
- Agent: Claude Opus 4.6

## [v3] — 2026-04-06 (Revision Round 1)
- Applied client revision feedback across all 4 pages
- HOME: Increased logo size (130px→160px), changed hero image to human/sustainability theme, added brand green (#6BBE53) to headings/nav, added background images to service cards, enlarged carousel items (220x120→280x160), changed CTA background to brand green, fixed Waste Management anchor link
- ABOUT: Removed team member photos, added Dr. Annette S Vincent PhD as third team member, switched to icon placeholders, updated to 3-column grid
- SERVICES: Updated all service descriptions with content from live esgworlds.com, expanded ESG Training to 5 programs, updated Education/Transport/Building sections, fixed waste section anchor ID
- CONTACT: Updated address to 60 Paya Lebar Road #06-28 Paya Lebar Square S(409051), removed phone numbers, updated email to enquiry@esgworlds.com, updated Google Maps to Paya Lebar Square Singapore
- ALL PAGES: Updated footer email to enquiry@esgworlds.com, added scroll-margin-top for anchor navigation, consistent branding applied
- NEW: Added changelog.html page with detailed revision notes
- Files changed: index.html, about.html, services.html, contact.html, changelog.html (new), CHANGELOG.md
- Agent: Claude Opus 4.6

## [v2] — 2026-03-24 (Update 5)
- Replaced 3 placeholder team members with David Leong and Kelvin Tan
- Added team photos as local project files (images/david-leong.jpg, images/kelvin-tan.jpg)
- Updated team grid to centered 2-column layout
- Files changed: about.html, images/david-leong.jpg (new), images/kelvin-tan.jpg (new)
- Agent: Claude Opus 4.6

## [v2] — 2026-03-24 (Update 3)
- Fixed hamburger menu button being cut off/covered at top-right on mobile
- Added proper padding to nav-container (10px 1rem) so hamburger has breathing room
- Increased hamburger button size to 2rem with flex centering for better visibility
- Increased mobile logo from 90px to 110px
- Increased mobile nav-container min-height to 120px
- Files changed: index.html, about.html, services.html, contact.html
- Agent: Claude Opus 4.6

## [v2] — 2026-03-24 (Update 2)
- Fixed hamburger menu button too close to top-right on mobile by adding padding and margin
- Increased hamburger icon size from 1.5rem to 1.8rem for better tap target
- Files changed: index.html, about.html, services.html, contact.html
- Agent: Claude Opus 4.6

## [v2] — 2026-03-24
- Fixed mobile navigation menu items too close to the left edge by adding horizontal padding (1rem 0 → 1rem 2rem)
- Centered footer logo on all pages using flexbox (align-items: center, text-align: center on .footer-about)
- Files changed: index.html, about.html, services.html, contact.html
- Agent: Claude Opus 4.6
