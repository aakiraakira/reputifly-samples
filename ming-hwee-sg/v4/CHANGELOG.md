# CHANGELOG

## v4 — 2026-05-28 — Desktop optimisation + 3 polishes (no JSX)
Bundles the earlier desktop work with three client-requested polishes. No JSX/onboarding changes — that's v5.
- **Landline → WhatsApp**: header CTA and footer now use WhatsApp (+65 8011 9456, green glyph); landline removed.
- **Pricing section removed** ("No Hidden Costs" gone; cost Q&A retained in FAQ + schema for GEO).
- **Autofill**: form `autocomplete="on"` + name/email/tel tokens.
- **Desktop split hero** (≥1024px): copy left, image right; mobile stack untouched. Section padding 72→96px on desktop.
- **How It Works — sleek desktop stepper** (≥1024px, SG-scoped): borderless transparent steps, gradient number circles (5px white ring), gradient connecting line through the circle centres. Mobile vertical timeline untouched. PH's shared timeline untouched (scoped to `[aria-labelledby="how-title"]`).
- **Testimonials → double-direction marquee**: two rows of real Google review cards — top scrolls left, bottom scrolls right — with the **Google 4.9 rating badge centred between them**. Pause-on-hover, edge fade masks, `prefers-reduced-motion` stops it, mobile uses smaller cards + faster loop. Cards authored once in HTML (SEO) and cloned once by JS for a seamless loop. Replaces the single-card carousel.
- **Stats count-up**: IntersectionObserver animates 41+ / 1000s / 4.9★ / 3 from 0 when scrolled into view (easeOutCubic, respects reduced-motion). Year value stays auto-derived (currentYear − 1985).
- Files: index.html, assets/sg.css, assets/sg.js, CHANGELOG.md. No `&&`/`||` mangling risk (agentBridge deploy, not raw-page).
- Agent: Claude Opus 4.7

## v3 — 2026-05-17 — FAQ polish
- FAQ answer panels now expand to the full container width (980px) — matched the category-title underline width. Was being capped at 800px by a shared.css selector (`.faq-list { max-width: 800px }`) which made items look indented vs the category H3 above. Override applied only inside `.section-faq` so PH's FAQ keeps its original 800px cap.
- Added bottom padding to the answer `<p>` (28px desktop, 24px tablet, 22px mobile) so the divider beneath each item has breathing room — was sitting right against the last line.
- Tightened responsive sizing: question font 16→15.5→14.5px (desktop→tablet→mobile), answer font 15→14.5→14px, all line-heights kept ≥ 1.7 for readability. Mobile container padding bumped to 18px so the chevron doesn't hug the edge.
- Added `flex: 1 1 auto; min-width: 0` to the question span so long mobile questions wrap cleanly instead of being squished against the chevron.
- Removed bottom border on the last `.faq-item` in each category block so it doesn't double up with the next H3's underline.
- Verified across mobile (390px), tablet (768px) and desktop (1280px). No horizontal overflow introduced. Open/close JS unchanged (scrollHeight calculation absorbs the new padding automatically).
- Agent: Claude Opus 4.7

## v2 — 2026-05-17 — Post-deploy hotfix
- Suppressed legacy `.testimonial-person::before` pseudo-circle (was rendering a blue ghost letter next to my new gradient `.testimonial-avatar` div, creating two C/J/L circles side-by-side). New testimonials use class `testimonial-person-clean` which hides the legacy pseudo. Old PH testimonials still render normally.
- Agent: Claude Opus 4.7

## v1 — 2026-05-17 — Client revision pack ACRP-1778842094889 + FAQ rebuild
**Scope:** All 9 tasks from the client's revision pack (Header → Footer), the 6 follow-up email items, and the FAQ audit doc (20260411). Full pass below.

- **Hero / trust line**: "Family-Run Since 1983" → "Since 1985"; "2,000+ Families" → "Thousands of Families". H1 now uses an auto-incrementing year counter (`data-year-counter="1985"`) so "41 Years" auto-bumps to 42 on Jan 1 2027 — no future code edits needed.
- **Hero**: Removed "Start Singpass Assessment" CTA (feature not ready). Replaced with WhatsApp CTA.
- **Trust bar**: "43 Years Since 1983" → counter-driven "41 Years Since 1985"; added MOM Licence number 12C6072; "2,000+ Families Served" → "Thousands of Families Served".
- **Why Families Choose Ming Hwee**: Card 3 copy changed to "Post-Placement Check-ins After Deployment" (per client request). Card 4 "Singpass-Powered Digital Onboarding" REPLACED with "Family-Run, Second-Generation Trust" (Singpass dropped entirely). Section now sits on a warm blue/red radial gradient (`section-why-spotlight`) with elevated card shadows to visually stand out.
- **Choose the Right Helper**: Replaced incorrect Myanmar image (was AEA Long-Service Award group photo, no Myanmar helper visible) with a verified Burmese woman portrait (thanaka face paste — uniquely Myanmar).
- **How It Works**: Step 1 "Register via Singpass or Mobile" → "Tell Us About Your Household"; Step 4 "Book Cal.com Video Interview" → "Meet Candidates Live" (Cal.com brand and Singpass mentions removed). Added new step "Pick Your Helper". Bottom CTA now opens the consultation modal instead of routing to Singpass.
- **Full-Service Support Beyond Placement**: Layout rebuilt as a 3-column grid (was 2×3 with an orphan card). Added the missing flagship "Domestic Helper Placement" service card (matches live `minghwee.com` menu); it's styled as a gradient highlight card. Services list now matches the live site: Domestic Helper Placement, Direct Hiring, Work Permit Renewal, Helper Transfer, Home Leave Application, Temporary Accommodation.
- **Testimonials**: Replaced 4 stock testimonials with 5 verified Google reviews (J Chan / Jean / Eugene Q / Lim Cheng / Cheng Bee Teo). Added a Google rating badge above the carousel showing 4.9★ from 23 verified reviews with a deep-link to the Google review page.
- **Four Decades stats**: "43+" → counter-driven "41+" (auto-bumps each year); "2,000+ Families Served" → "1000s Families Served"; "95% First-Match Success" replaced with "4.9★ Google Rating · 23 verified reviews" to mirror the rest of the social proof.
- **Pricing**: Removed Singpass portal CTA; "Get Your Personalized Quote" now opens the consultation modal. "Singpass-powered portal" line replaced with plain "Book a free consultation" language.
- **FAQ — full rebuild**: 8 thin Q&As replaced with **42 questions across 11 categories** (Eligibility → First-Timer Tips). Pulled from the client's FAQ Audit and Rebuild doc; every answer rewritten in answer-first format for Google Featured Snippets / AI Overviews / voice search. Added a sticky category pill nav (Eligibility / Costs / Hiring Process / Replacement / Daily Life / Choosing Right Helper / Work Permits / Home Leave / Transfers / About Ming Hwee / First-Timer Tips).
- **FAQPage JSON-LD schema**: Expanded from 8 to 23 entries — each with answer-first text optimised for AI search engines. Org schema updated: `foundingDate` 1983→1985, `aggregateRating` 4.9 / 23 reviews (real), email `support-sg@minghwee.com`, `openingHoursSpecification` for Mon-Sat hours.
- **Final CTA**: Removed Singpass; replaced with WhatsApp deep-link CTA.
- **Footer — warmed up**: Replaced flat black with a layered dark-navy gradient + warm amber top accent stripe and amber heading colour. Added contact-info icons. Updated service list to match live (6 items). Added new "Hours" column: Mon-Fri 9:30am-6:30pm, Sat 10:30am-4:30pm, Sun & PH Closed. Emails updated to support-sg@minghwee.com and connect@minghwee.com (was generic info@minghwee.com.sg). Added MOM Licence 12C6072 line.
- **Booking modal — JSP-style household profile**: Old 5-field form replaced with a 5-section structured form: (1) Contact, (2) Helper Preferences (nationality, experience, languages, religion/dietary), (3) Household (property type, bedrooms, adults/children/elderly/pets, helper room, existing helper status), (4) Duties (childcare/eldercare/cooking/cleaning/laundry/pets/marketing/driving) + Cooking Style + Rest Day, (5) Timing & Budget. ~25 fields total — captures enough up-front to send a curated shortlist instead of forcing the sales team to fact-find on the call.
- **Reputifly-quirk safety**: All conditional JS rewritten to avoid `&&` / `||` (the deploy pipeline mangles them to bitwise operators). Year-counter uses `if` statements only.

Files changed:
- index.html (complete rewrite — every section touched)
- assets/sg.css (REVISION v2 ADDITIONS block appended: spotlight section, services 3-col, rating badge, initial avatars, FAQ category UI, warm footer overrides, multi-section form)
- assets/sg.js (year-counter logic)
- images/helper-myanmar.jpg (replaced)
- sitemap.json (founding_year added, image list refreshed)
- CHANGELOG.md (this entry)

Agent: Claude Opus 4.7

---

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
