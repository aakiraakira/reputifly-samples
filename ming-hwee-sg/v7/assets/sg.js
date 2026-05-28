/* ==========================================================================
   MingHwee SG Landing Page - Page-specific JS
   Core behavior (modal, forms, FAQ accordion, fade-in on scroll, UTM capture,
   smooth scroll, CTA tracking) lives in shared.js. This file handles
   SG-specific behaviour: year counter, stats count-up, review marquee.
   ========================================================================== */
(function () {
  'use strict';

  // ------------------------------------------------------------------
  // 1. YEAR COUNTER — auto-update "41 years" each calendar year.
  //    Elements with data-year-counter="<foundingYear>" (hero, trust bar).
  // ------------------------------------------------------------------
  function updateYearCounters() {
    var currentYear = new Date().getFullYear();
    var nodes = document.querySelectorAll('[data-year-counter]');
    for (var i = 0; i < nodes.length; i++) {
      var founded = parseInt(nodes[i].getAttribute('data-year-counter'), 10);
      if (!isNaN(founded)) {
        var years = currentYear - founded;
        if (years > 0) nodes[i].textContent = String(years);
      }
    }
  }

  // ------------------------------------------------------------------
  // 2. STATS COUNT-UP — animate numbers 0 -> target when scrolled in.
  //    data-count-to / data-count-year / data-count-suffix /
  //    data-count-prefix / data-count-decimals
  // ------------------------------------------------------------------
  function targetFor(el) {
    var yr = el.getAttribute('data-count-year');
    if (yr) {
      var y = new Date().getFullYear() - parseInt(yr, 10);
      return y > 0 ? y : 0;
    }
    return parseFloat(el.getAttribute('data-count-to')) || 0;
  }

  function animateCount(el) {
    if (el.getAttribute('data-counted') === '1') return;
    el.setAttribute('data-counted', '1');
    var target = targetFor(el);
    var decimals = parseInt(el.getAttribute('data-count-decimals'), 10) || 0;
    var suffix = el.getAttribute('data-count-suffix') || '';
    var prefix = el.getAttribute('data-count-prefix') || '';
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || target === 0) {
      el.textContent = prefix + target.toFixed(decimals) + suffix;
      return;
    }
    var dur = 1300, start = null;
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      var val = (target * eased).toFixed(decimals);
      el.textContent = prefix + val + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(frame);
  }

  function initCountUp() {
    var nums = document.querySelectorAll('.stat-num[data-count-to], .stat-num[data-count-year]');
    if (!nums.length) return;
    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < nums.length; i++) animateCount(nums[i]);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { animateCount(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    for (var j = 0; j < nums.length; j++) io.observe(nums[j]);
  }

  // ------------------------------------------------------------------
  // 3. REVIEW MARQUEE — duplicate each track once so the CSS translateX
  //    (-50%) loop is seamless. Content authored once in HTML for SEO.
  // ------------------------------------------------------------------
  function initMarquee() {
    var tracks = document.querySelectorAll('.review-track[data-marquee]');
    for (var i = 0; i < tracks.length; i++) {
      var t = tracks[i];
      if (t.getAttribute('data-cloned') === '1') continue;
      t.setAttribute('data-cloned', '1');
      t.innerHTML = t.innerHTML + t.innerHTML; // duplicate for seamless loop
    }
  }

  function init() {
    updateYearCounters();
    initCountUp();
    initMarquee();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

/* ==========================================================================
   v5 — TYPEFORM ONBOARDING ENGINE
   One reusable vanilla-JS multi-step ("one question per screen") form engine,
   ported from the React prototypes (intakeQs / momQs / partnership qs /
   PH helper qs). Rendered in the EXISTING site visual language (brand blue
   #0c7cd4, Inter, white cards, pill buttons) — NOT the JSX navy/gold/cream.

   Hard constraints honoured:
   - No Singpass step, no OTP step. Contact (Name + Email + Mobile/WhatsApp)
     is captured as plain fields at the START of each flow instead.
   - Self-contained modal (its own .tf-modal) so the existing .modal + the
     shared.js handlers are never touched. Lead side-effects (console [MH LEAD]
     + dataLayer pushes) mirror shared.js section 4 so leads flow identically.

   Question shape (matches the JSX):
     { id, bk (block/category eyebrow), q, sub, ty (text|email|tel|textarea|
       single|multi|consent), opts, req, showIf(answers), ph }
   ========================================================================== */
(function () {
  'use strict';

  // ----------------------------------------------------------------------
  // FLOW DATA — ported faithfully from the three JSX prototypes.
  // Singpass/OTP removed; contact fields prepended where the prototype had
  // captured contact via Singpass/OTP.
  // ----------------------------------------------------------------------

  // Reusable lead-capture block (replaces every Singpass/OTP contact step).
  function contactQs(opts) {
    opts = opts || {};
    return [
      { id: 'name',  bk: 'About You', q: opts.nameQ || "What's your name?", ty: 'text',  ph: opts.namePh || 'Your full name', req: true },
      { id: 'email', bk: 'About You', q: opts.emailQ || "What's your email address?", sub: opts.emailSub || "We'll send your shortlist and updates here.", ty: 'email', ph: 'you@example.com', req: true },
      { id: 'mobile', bk: 'About You', q: opts.mobileQ || 'Your mobile / WhatsApp number?', sub: opts.mobileSub || "Fastest way for our consultant to reach you.", ty: 'tel', ph: opts.mobilePh || '+65 8123 4567', req: true }
    ];
  }

  // ---- FLOW A: Employer intake (PRIMARY) ----
  // Contact (Name/Email/Mobile) + all 18 intakeQs from MingHwee_Complete_Prototype.jsx.
  var INTAKE_QS = [
    { id: 'first', bk: 'About You', q: 'Is this your first time hiring a domestic helper?', ty: 'single', opts: ['Yes — first time', "No — I've hired before"], req: true },
    { id: 'needs', bk: 'What You Need', q: 'What do you need help with?', sub: 'Select all that apply', ty: 'multi', opts: ['Childcare', 'Eldercare', 'General housework & cooking', 'All of the above'], req: true },
    { id: 'children', bk: 'What You Need', q: 'Tell us about your children', sub: 'How many and what ages?', ty: 'text', ph: 'e.g. 2 children — ages 3 and 7', req: true, showIf: function (a) { return has(a.needs, 'Childcare') || has(a.needs, 'All of the above'); } },
    { id: 'elderly', bk: 'What You Need', q: 'Tell us about the elderly family member(s)', sub: 'Age, mobility, medical conditions?', ty: 'textarea', ph: 'e.g. Mother, 82, wheelchair, mild dementia', req: true, showIf: function (a) { return has(a.needs, 'Eldercare') || has(a.needs, 'All of the above'); } },
    { id: 'hh', bk: 'Your Household', q: 'How many people live in your household?', sub: 'Including yourself', ty: 'single', opts: ['1–2', '3–4', '5–6', '7+'], req: true },
    { id: 'home', bk: 'Your Household', q: 'What type of home do you live in?', ty: 'single', opts: ['HDB 1–3 room', 'HDB 4–5 room', 'HDB Executive', 'Condo / Private Apt', 'Landed'], req: true },
    { id: 'pets', bk: 'Your Household', q: 'Do you have any pets at home?', sub: 'Helps us find someone comfortable with your animals', ty: 'single', opts: ['No pets', 'Yes — I have pets'], req: true },
    { id: 'petD', bk: 'Your Household', q: 'What type of pets and how many?', ty: 'text', ph: 'e.g. 1 Golden Retriever, 2 cats', req: true, showIf: function (a) { return a.pets === 'Yes — I have pets'; } },
    { id: 'lang', bk: 'Your Household', q: 'What languages are spoken at home?', sub: 'Select all that apply', ty: 'multi', opts: ['English', 'Mandarin', 'Malay', 'Hokkien / Teochew', 'Cantonese', 'Tamil', 'Other'], req: true },
    { id: 'nat', bk: 'Preferences', q: 'Preferred helper nationality?', ty: 'single', opts: ['Filipino', 'Indonesian', 'Myanmar', 'No preference — help me decide'], req: true },
    { id: 'xfer', bk: 'Preferences', q: 'Transfer helper or new hire from overseas?', sub: 'Transfer = already in SG (2–3 wks). Overseas = 6–8 wks.', ty: 'single', opts: ['Transfer (faster)', 'New hire from overseas', 'No preference'], req: false },
    { id: 'cook', bk: 'Preferences', q: 'Any cooking requirements?', sub: 'Select all that apply', ty: 'multi', opts: ['Chinese', 'Malay', 'Indian', 'Western', 'Halal kitchen', 'Vegetarian', 'No specific requirement'], req: false },
    { id: 'sal', bk: 'Preferences', q: 'Monthly salary budget?', ty: 'single', opts: ['Below $500', '$500 – $600', '$600 – $700', '$700 – $800', 'Above $800', 'Not sure yet'], req: false },
    { id: 'rest', bk: 'Preferences', q: 'Preferred rest day arrangement?', ty: 'single', opts: ['Weekly day off (e.g. Sunday)', 'Compensation in lieu', 'Flexible — open to discuss'], req: false },
    { id: 'time', bk: 'Timeline', q: 'How soon do you need a helper?', ty: 'single', opts: ['ASAP — within 2 weeks', 'Within 1 month', 'Within 2 months', 'Just exploring for now'], req: true },
    { id: 'notes', bk: 'Almost Done', q: 'Anything else we should know?', sub: 'Special needs, concerns, dealbreakers.', ty: 'textarea', ph: 'e.g. Need someone for night feeds. Prefer non-smoker.', req: false },
    { id: 'src', bk: 'Referral', q: 'How did you hear about Ming Hwee?', ty: 'single', opts: ['Google search', 'Friend / family referral', 'Social media', 'Returning client', 'Staff referral', 'Other'], req: false },
    { id: 'ref', bk: 'Referral', q: 'Who referred you?', sub: 'Enter their name and/or referral code', ty: 'text', ph: 'e.g. Mrs. Tan / Code: MH-TAN-4821', req: false, showIf: function (a) { return a.src === 'Friend / family referral' || a.src === 'Staff referral'; } }
  ];

  // ---- FLOW B: Partnership enquiry (B2B) ----
  // All 16 qs from MingHwee_Partnership_Form_Prototype.jsx, minus the otp step.
  var PARTNER_QS = [
    { id: 'cName', bk: 'About You', q: "What's your name?", ty: 'text', ph: 'Your full name', req: true },
    { id: 'company', bk: 'About You', q: "What's your company name?", ty: 'text', ph: 'Company / organisation name', req: true },
    { id: 'role', bk: 'About You', q: "What's your role?", ty: 'text', ph: 'e.g. Director, Partnerships Manager', req: false },
    { id: 'country', bk: 'About You', q: 'Where is your company based?', ty: 'text', ph: 'e.g. Dubai, UAE', req: true },
    { id: 'email', bk: 'Contact', q: "What's your business email?", ty: 'email', ph: 'you@company.com', req: true },
    { id: 'mobile', bk: 'Contact', q: 'Your mobile / WhatsApp number?', ty: 'tel', ph: 'Include country code, e.g. +971', req: true },
    // (otp step skipped — no SMS backend)
    { id: 'pType', bk: 'Partnership', q: 'What kind of partnership are you exploring?', sub: 'Select the closest fit', ty: 'single', opts: ['Recruitment / manpower sourcing partner', 'Overseas training centre', 'Local service provider (insurance, medical, accommodation)', 'Employer / company hiring at scale', 'Other / not sure yet'], req: true },
    { id: 'direction', bk: 'Partnership', q: "What's the nature of the collaboration?", sub: 'Select all that apply', ty: 'multi', opts: ['You source workers, we place them', 'We source workers, you place them', 'Joint recruitment for a specific market', 'Training & certification collaboration', 'Service provision (insurance, medical, etc.)'], req: true, showIf: function (a) { return contains(a.pType, 'Recruitment') || contains(a.pType, 'training') || contains(a.pType, 'Other') || contains(a.pType, 'service'); } },
    { id: 'industries', bk: 'Workforce Needs', q: 'Which industries or roles are you interested in?', sub: 'Select all that apply', ty: 'multi', opts: ['Domestic helpers', 'Nurses / healthcare', 'Construction / engineering', 'Architecture / design', 'Hospitality / F&B', 'Manufacturing / factory', 'Caregivers / eldercare', 'Other professional roles'], req: true },
    { id: 'sourceCountry', bk: 'Workforce Needs', q: 'Which countries do you want to source workers from?', sub: 'Select all that apply', ty: 'multi', opts: ['Philippines', 'Indonesia', 'Myanmar', 'India', 'Bangladesh', 'Sri Lanka', 'Other'], req: true },
    { id: 'destCountry', bk: 'Workforce Needs', q: 'Where will these workers be deployed?', ty: 'text', ph: 'e.g. UAE, Saudi Arabia, Singapore', req: true },
    { id: 'volume', bk: 'Scale', q: "What's the expected scale of collaboration?", ty: 'single', opts: ['Pilot — under 10 workers', 'Small — 10–50 workers', 'Medium — 50–200 workers', 'Large — 200+ workers', 'Ongoing / long-term programme'], req: false },
    { id: 'licensed', bk: 'Credentials', q: 'Is your organisation licensed / accredited in your country?', ty: 'single', opts: ['Yes — fully licensed', 'In progress', 'Not yet', 'Not applicable'], req: false },
    { id: 'timeline', bk: 'Timeline', q: 'How soon are you looking to start?', ty: 'single', opts: ['Immediately', 'Within 1–3 months', 'Within 6 months', 'Just exploring options'], req: true },
    { id: 'notes', bk: 'Almost Done', q: 'Tell us more about your partnership goals', sub: 'The more detail, the better we can prepare', ty: 'textarea', ph: "e.g. We're a Dubai-based recruitment agency placing healthcare workers in GCC hospitals. We'd like to source qualified Filipino nurses through your network...", req: false }
  ];

  // ---- FLOW C: MOM work-permit form ----
  // All 23 momQs from MingHwee_Complete_Prototype.jsx, minus Singpass auto-fill
  // annotations (the `sp` hints). Every field retained; m23 = consent.
  var MOM_QS = [
    { id: 'm1', bk: 'Your Identity', q: 'Full legal name (as shown on IC)', ty: 'text', ph: 'Full name', req: true },
    { id: 'm2', bk: 'Your Identity', q: 'NRIC / FIN number', ty: 'text', ph: 'e.g. S1234567A', req: true },
    { id: 'm3', bk: 'Your Identity', q: 'Date of birth', ty: 'text', ph: 'DD/MM/YYYY', req: true },
    { id: 'm4', bk: 'Your Identity', q: 'Citizenship status', ty: 'single', opts: ['Singapore Citizen', 'Permanent Resident', 'Employment Pass Holder', 'Other'], req: true },
    { id: 'm5', bk: 'Your Identity', q: 'Passport number', sub: 'Required for non-SC/PR applicants', ty: 'text', ph: 'Passport number', req: true, showIf: function (a) { return a.m4 === 'Employment Pass Holder' || a.m4 === 'Other'; } },
    { id: 'm6', bk: 'Marriage & Spouse', q: 'Marital status', ty: 'single', opts: ['Single', 'Married', 'Divorced / Separated', 'Widowed'], req: true },
    { id: 'm7', bk: 'Marriage & Spouse', q: 'Is your marriage registered in Singapore?', ty: 'single', opts: ['Yes', 'No'], req: true, showIf: function (a) { return a.m6 === 'Married'; } },
    { id: 'm8', bk: 'Marriage & Spouse', q: "Spouse's full legal name", ty: 'text', ph: 'Full name as shown on IC', req: true, showIf: function (a) { return a.m6 === 'Married'; } },
    { id: 'm9', bk: 'Marriage & Spouse', q: "Spouse's NRIC / FIN / Passport number", ty: 'text', ph: 'IC or passport number', req: true, showIf: function (a) { return a.m6 === 'Married'; } },
    { id: 'm10', bk: 'Marriage & Spouse', q: "Spouse's citizenship", ty: 'single', opts: ['Singapore Citizen', 'Permanent Resident', 'Foreigner'], req: true, showIf: function (a) { return a.m6 === 'Married'; } },
    { id: 'm11', bk: 'Marriage & Spouse', q: "Spouse's occupation and company", ty: 'text', ph: 'e.g. Engineer, ABC Pte Ltd', req: false, showIf: function (a) { return a.m6 === 'Married'; } },
    { id: 'm12', bk: 'Address', q: 'Residential address', sub: 'Block, Street, Unit, Postal Code', ty: 'textarea', ph: 'e.g. Blk 123 Ang Mo Kio Ave 4\n#05-678\nSingapore 560123', req: true },
    { id: 'm13', bk: 'Address', q: 'Type of residence', ty: 'single', opts: ['HDB 1–3 room', 'HDB 4–5 room', 'HDB Executive / HUDC', 'Condo / Private Apt', 'Semi-Detached', 'Terrace House', 'Bungalow', 'Shophouse', 'Other'], req: true },
    { id: 'm14', bk: 'Employment', q: 'Your occupation', ty: 'text', ph: 'e.g. Marketing Manager', req: true },
    { id: 'm15', bk: 'Employment', q: 'Company name', ty: 'text', ph: 'e.g. ABC Pte Ltd', req: true },
    { id: 'm16', bk: 'Employment', q: 'Monthly income bracket', ty: 'single', opts: ['Below $2,500', '$2,500–$2,999', '$3,000–$3,499', '$3,500–$3,999', '$4,000–$4,999', '$5,000–$5,999', '$6,000–$7,999', '$8,000–$9,999', '$10,000–$12,499', '$12,500–$14,999', '$15,000–$19,999', '$20,000–$24,999', 'Above $25,000'], req: true },
    { id: 'm17', bk: 'Family Members', q: 'Family members living at the same address', sub: 'Enter each person: Name, Relationship, IC/BC number, Date of birth', ty: 'textarea', ph: '1. Sarah Tan, Daughter, T1234567A, 15/03/2019\n2. James Tan, Son, T2345678B, 08/11/2021\n3. Mdm Lim, Mother-in-law, S3456789C, 22/06/1955', req: true },
    { id: 'm18', bk: 'Card Delivery', q: 'Deliver work permit card to your registered address?', ty: 'single', opts: ['Yes — deliver to my registered address', 'No — deliver to a different address'], req: true },
    { id: 'm19', bk: 'Card Delivery', q: 'Alternative delivery address', ty: 'textarea', ph: 'Full address for card delivery', req: true, showIf: function (a) { return contains(a.m18, 'No'); } },
    { id: 'm20', bk: 'Card Delivery', q: 'Name of person receiving the work permit card', ty: 'text', ph: 'Full name', req: true },
    { id: 'm21', bk: 'Card Delivery', q: "Receiver's mobile number", ty: 'tel', ph: '+65', req: true },
    { id: 'm22', bk: 'Declaration', q: 'Type of application', ty: 'single', opts: ['New maid', 'Replacement maid', 'Additional maid'], req: true },
    { id: 'm23', bk: 'Declaration', q: 'I confirm the information above is accurate and I consent to Ming Hwee processing my data for the MOM work permit application.', ty: 'consent', opts: ['I confirm and consent'], req: true }
  ];

  // ----------------------------------------------------------------------
  // FLOW REGISTRY — each flow = intro screen copy + question array + success
  // copy. Flow A (intake) is keyed both by 'intake' and is the default for
  // every primary CTA.
  // ----------------------------------------------------------------------
  var FLOWS = {
    intake: {
      formType: 'sg_consultation',
      brand: 'Free Consultation · Household Profile',
      label: 'Find Your Helper',
      ctaType: 'tf-intake',
      intro: {
        eyebrow: 'Since 1985',
        title: "Let's find your family's helper",
        body: 'A few quick questions about your household so we can match you with the right helper. Takes about 3 minutes — no obligation.',
        bullets: [
          ['Curated matches', '3–5 candidates hand-picked for you'],
          ['Expert consultation', 'A consultant responds within 2 hours'],
          ['No pressure', 'Free, no-obligation, never any spam']
        ],
        start: "Let's Go"
      },
      questions: contactQs({}).concat(INTAKE_QS),
      success: {
        title: 'We got your profile!',
        msg: 'A Ming Hwee consultant will reach out within 2 hours during business hours (Mon–Fri 9:30am–6:30pm, Sat 10:30am–4:30pm) with your curated shortlist.',
        steps: [
          'Our team reviews your household profile',
          'We hand-pick 3–5 matching candidates',
          'You receive your shortlist within 48 hours'
        ]
      }
    },
    partner: {
      formType: 'sg_partnership',
      brand: 'Ming Hwee Partnerships',
      label: 'Partner With Us',
      ctaType: 'tf-partner',
      intro: {
        eyebrow: 'Partner With Us',
        title: "Let's build something together",
        body: "Whether you're a recruitment agency, training centre, service provider, or employer hiring at scale — tell us about your goals and our partnerships team will be in touch.",
        bullets: [
          ['2 minutes to complete', 'Short, focused questions'],
          ['Secure & private', 'Your details are never shared'],
          ['Fast response', 'Partnerships team replies within 2 business days']
        ],
        start: 'Start Partnership Enquiry'
      },
      questions: PARTNER_QS,
      success: {
        title: 'Thank you — enquiry received!',
        msg: 'Our partnerships team will review your enquiry and respond within 2 business days.',
        steps: [
          'Our partnerships team reviews your enquiry',
          'We assess the fit and prepare next steps',
          'We reach out within 2 business days'
        ]
      }
    },
    mom: {
      formType: 'sg_mom_permit',
      brand: 'MOM Work-Permit Form',
      label: 'MOM Submission',
      ctaType: 'tf-mom',
      intro: {
        eyebrow: 'Work Permit',
        title: 'Start your MOM work-permit form',
        body: "Already chosen a helper? Complete the details MOM needs and our operations team will prepare and submit your work-permit application.",
        bullets: [
          ['Fully managed', 'We prepare and submit to MOM for you'],
          ['Insurance & bond', 'Arranged as part of the process'],
          ['SIP coordinated', "We organise your helper's Settling-In Programme"]
        ],
        start: 'Begin MOM Form'
      },
      questions: MOM_QS,
      success: {
        title: 'MOM form submitted!',
        msg: 'Your details have been received. Our operations team will begin preparing your work-permit application.',
        steps: [
          'Work-permit application prepared and submitted to MOM',
          'Insurance and security bond arranged',
          'SIP registration coordinated for your helper',
          "You'll receive updates via WhatsApp throughout"
        ]
      }
    },
  };

  // Map the existing data-preselect-type values (helper cards + service cards)
  // onto Flow A so the right intake question is pre-answered or tagged.
  // Nationality presets pre-answer the `nat` question; service presets are
  // recorded as a service tag (and bias nationality to "no preference").
  var NATIONALITY_PRESET = { Filipino: 'Filipino', Indonesian: 'Indonesian', Myanmar: 'Myanmar' };
  var SERVICE_PRESET = {
    Placement: 'Domestic Helper Placement',
    'Direct Hire': 'Direct Hiring',
    Renewal: 'Work Permit Renewal',
    Transfer: 'Helper Transfer',
    'Home Leave': 'Home Leave Application',
    Accommodation: 'Temporary Accommodation'
  };

  // ----------------------------------------------------------------------
  // Small helpers (defensive; avoid optional-chaining for old-engine parity)
  // ----------------------------------------------------------------------
  function has(arr, val) { return !!arr && arr.indexOf(val) !== -1; }
  function contains(str, sub) { return typeof str === 'string' && str.toLowerCase().indexOf(sub.toLowerCase()) !== -1; }
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  var SVG_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
  var SVG_ARROW = '&rarr;';

  // ----------------------------------------------------------------------
  // ENGINE
  // ----------------------------------------------------------------------
  var TF = {
    root: null, dotsEl: null, bodyEl: null, backBtn: null, nextBtn: null,
    introEl: null, stageEl: null, navEl: null, successEl: null,
    metaEl: null, brandEl: null,
    flow: null, flowKey: null, step: 0, ans: {}, preset: {}, started: false
  };

  // Build the modal shell once and inject it into <body>.
  function buildShell() {
    if (TF.root) return;

    var root = el('div', 'tf-modal');
    root.id = 'tfModal';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-modal', 'true');
    root.setAttribute('aria-label', 'Onboarding form');

    root.innerHTML =
      '<div class="tf-shell">' +
        '<div class="tf-header">' +
          '<div class="tf-brand">' +
            '<img src="images/logo.png" alt="Ming Hwee">' +
            '<span class="tf-brand-label"></span>' +
          '</div>' +
          '<div class="tf-header-right">' +
            '<span class="tf-meta" aria-live="polite"></span>' +
            '<button class="tf-close" type="button" aria-label="Close form">' +
              '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" width="22" height="22" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div class="tf-progress"><div class="tf-progress-bar"></div></div>' +
        '<div class="tf-dots" aria-hidden="true"></div>' +
        '<div class="tf-scroll">' +
          '<div class="tf-intro"></div>' +
          '<div class="tf-stage"></div>' +
          '<div class="tf-success" role="status"></div>' +
        '</div>' +
        '<div class="tf-nav">' +
          '<button class="tf-back" type="button">&larr; Back</button>' +
          '<button class="tf-next sb sb-blue" type="button">Next &rarr;</button>' +
        '</div>' +
      '</div>';

    document.body.appendChild(root);

    TF.root = root;
    TF.shellEl = root.querySelector('.tf-shell');
    TF.brandEl = root.querySelector('.tf-brand-label');
    TF.metaEl = root.querySelector('.tf-meta');
    TF.progressBar = root.querySelector('.tf-progress-bar');
    TF.dotsEl = root.querySelector('.tf-dots');
    TF.scrollEl = root.querySelector('.tf-scroll');
    TF.introEl = root.querySelector('.tf-intro');
    TF.stageEl = root.querySelector('.tf-stage');
    TF.successEl = root.querySelector('.tf-success');
    TF.navEl = root.querySelector('.tf-nav');
    TF.backBtn = root.querySelector('.tf-back');
    TF.nextBtn = root.querySelector('.tf-next');

    // Close interactions
    root.querySelector('.tf-close').addEventListener('click', closeTF);
    root.addEventListener('click', function (e) { if (e.target === root) closeTF(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('active')) closeTF();
    });

    TF.backBtn.addEventListener('click', function () { prev(); });
    TF.nextBtn.addEventListener('click', function () { next(); });
  }

  // Currently-visible questions (after evaluating showIf against answers).
  function visible() {
    return TF.flow.questions.filter(function (q) {
      return !q.showIf || q.showIf(TF.ans);
    });
  }

  function curQ() { return visible()[TF.step]; }

  function canAdvance() {
    var q = curQ();
    if (!q) return false;
    if (!q.req) return true;
    var v = TF.ans[q.id];
    if (Array.isArray(v)) return v.length > 0;
    if (typeof v === 'string') return v.trim().length > 0;
    return !!v;
  }

  function setVal(id, val) {
    TF.ans[id] = val;
    // Clamp step if a showIf change shortened the visible list behind us.
    var vis = visible();
    if (TF.step > vis.length - 1) TF.step = Math.max(0, vis.length - 1);
  }

  function toggleMulti(id, opt) {
    var cur = TF.ans[id] || [];
    if (cur.indexOf(opt) !== -1) {
      TF.ans[id] = cur.filter(function (x) { return x !== opt; });
    } else {
      TF.ans[id] = cur.concat([opt]);
    }
  }

  // Render the current question screen.
  function renderQuestion() {
    var vis = visible();
    var tot = vis.length;
    var q = vis[TF.step];
    if (!q) return;

    // progress
    TF.metaEl.textContent = TF.flow.label + ' · ' + (TF.step + 1) + '/' + tot;
    TF.progressBar.style.width = ((TF.step) / tot * 100) + '%';
    renderDots(TF.step, tot);

    // Build the question card
    var stage = TF.stageEl;
    stage.innerHTML = '';
    var card = el('div', 'tf-card');

    var eyebrow = el('div', 'tf-eyebrow');
    eyebrow.textContent = q.bk || '';
    card.appendChild(eyebrow);

    var h = el('h2', 'tf-q');
    h.textContent = q.q;
    card.appendChild(h);

    if (q.sub) {
      var sub = el('p', 'tf-sub');
      sub.textContent = q.sub;
      card.appendChild(sub);
    }

    var v = TF.ans[q.id];

    if (q.ty === 'text' || q.ty === 'email' || q.ty === 'tel') {
      var input = el('input', 'tf-input');
      input.type = q.ty === 'email' ? 'email' : (q.ty === 'tel' ? 'tel' : 'text');
      input.value = v || '';
      if (q.ph) input.placeholder = q.ph;
      input.setAttribute('autocomplete', autoToken(q.id, q.ty));
      input.addEventListener('input', function () {
        setVal(q.id, input.value);
        syncNav();
      });
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); if (canAdvance()) next(); }
      });
      card.appendChild(input);
      focusSoon(input);
    } else if (q.ty === 'textarea') {
      var ta = el('textarea', 'tf-textarea');
      ta.rows = 4;
      ta.value = v || '';
      if (q.ph) ta.placeholder = q.ph;
      ta.addEventListener('input', function () { setVal(q.id, ta.value); syncNav(); });
      card.appendChild(ta);
      focusSoon(ta);
    } else if (q.ty === 'single' || q.ty === 'consent') {
      var list = el('div', 'tf-opts');
      q.opts.forEach(function (o, i) {
        var btn = el('button', 'tf-opt');
        btn.type = 'button';
        if (v === o) btn.className = 'tf-opt selected';
        var isConsent = q.ty === 'consent';
        var marker = isConsent ? SVG_CHECK : esc(String.fromCharCode(65 + i));
        btn.innerHTML = '<span class="tf-opt-marker' + (isConsent ? ' tf-opt-marker-check' : '') + '">' + marker + '</span><span class="tf-opt-text">' + esc(o) + '</span>';
        btn.addEventListener('click', function () {
          setVal(q.id, o);
          // visually mark then auto-advance
          var sibs = list.querySelectorAll('.tf-opt');
          for (var s = 0; s < sibs.length; s++) sibs[s].className = 'tf-opt';
          btn.className = 'tf-opt selected';
          syncNav();
          setTimeout(function () { next(); }, 200);
        });
        list.appendChild(btn);
      });
      card.appendChild(list);
    } else if (q.ty === 'multi') {
      var mlist = el('div', 'tf-opts');
      q.opts.forEach(function (o) {
        var btn = el('button', 'tf-opt');
        btn.type = 'button';
        var sel = has(TF.ans[q.id], o);
        if (sel) btn.className = 'tf-opt selected';
        btn.innerHTML = '<span class="tf-opt-marker tf-opt-marker-check">' + SVG_CHECK + '</span><span class="tf-opt-text">' + esc(o) + '</span>';
        btn.addEventListener('click', function () {
          toggleMulti(q.id, o);
          btn.className = has(TF.ans[q.id], o) ? 'tf-opt selected' : 'tf-opt';
          syncNav();
        });
        mlist.appendChild(btn);
      });
      card.appendChild(mlist);
    }

    stage.appendChild(card);
    TF.scrollEl.scrollTop = 0;
    syncNav();
  }

  function renderDots(cur, tot) {
    var max = Math.min(tot, 24);
    TF.dotsEl.innerHTML = '';
    for (var i = 0; i < max; i++) {
      var d = el('span', 'tf-dot' + (i < cur ? ' done' : i === cur ? ' active' : ''));
      TF.dotsEl.appendChild(d);
    }
  }

  // Show/label the Next button. Single-select auto-advances so its Next is
  // hidden (matches the JSX where ty==="single" hides the Next button).
  function syncNav() {
    var vis = visible();
    var tot = vis.length;
    var q = vis[TF.step];
    if (!q) return;

    TF.backBtn.style.visibility = TF.step === 0 ? 'hidden' : 'visible';

    var isSingle = q.ty === 'single' || q.ty === 'consent';
    if (isSingle) {
      TF.nextBtn.style.display = 'none';
    } else {
      TF.nextBtn.style.display = '';
      var last = TF.step === tot - 1;
      var ok = canAdvance();
      var labelTxt = last ? 'Submit ' + SVG_CHECK_INLINE : (!q.req && !filled(q) ? 'Skip ' + SVG_ARROW : 'Next ' + SVG_ARROW);
      TF.nextBtn.innerHTML = labelTxt;
      TF.nextBtn.disabled = q.req && !ok;
      TF.nextBtn.className = 'tf-next sb ' + (TF.nextBtn.disabled ? 'sb-disabled' : 'sb-blue');
    }
  }
  var SVG_CHECK_INLINE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" width="16" height="16" aria-hidden="true" style="vertical-align:-2px"><polyline points="20 6 9 17 4 12"/></svg>';

  function filled(q) {
    var v = TF.ans[q.id];
    if (Array.isArray(v)) return v.length > 0;
    if (typeof v === 'string') return v.trim().length > 0;
    return !!v;
  }

  function next() {
    var vis = visible();
    if (TF.step < vis.length - 1) {
      TF.step++;
      renderQuestion();
    } else {
      submitFlow();
    }
  }

  function prev() {
    if (TF.step > 0) {
      TF.step--;
      renderQuestion();
    }
  }

  function focusSoon(node) {
    setTimeout(function () { try { node.focus(); } catch (e) {} }, 90);
  }

  // Best-effort autocomplete tokens for the contact fields.
  function autoToken(id, ty) {
    if (id === 'name' || id === 'cName' || id === 'm1') return 'name';
    if (ty === 'email' || id === 'email') return 'email';
    if (ty === 'tel' || id === 'mobile' || id === 'm21') return 'tel';
    return 'on';
  }

  // ----------------------------------------------------------------------
  // INTRO SCREEN
  // ----------------------------------------------------------------------
  function renderIntro() {
    var intro = TF.flow.intro;
    TF.metaEl.textContent = '';
    TF.progressBar.style.width = '0%';
    TF.dotsEl.innerHTML = '';
    TF.navEl.style.display = 'none';
    TF.stageEl.style.display = 'none';
    TF.successEl.style.display = 'none';
    TF.introEl.style.display = 'block';

    var bullets = (intro.bullets || []).map(function (b) {
      return '<div class="tf-intro-row"><span class="tf-intro-ico">' + SVG_CHECK + '</span><div><div class="tf-intro-t">' + esc(b[0]) + '</div><div class="tf-intro-s">' + esc(b[1]) + '</div></div></div>';
    }).join('');

    TF.introEl.innerHTML =
      '<div class="tf-intro-inner">' +
        '<div class="tf-intro-eyebrow">' + esc(intro.eyebrow) + '</div>' +
        '<h2 class="tf-intro-title">' + esc(intro.title) + '</h2>' +
        '<p class="tf-intro-body">' + esc(intro.body) + '</p>' +
        '<div class="tf-intro-card">' + bullets + '</div>' +
        '<button class="tf-start sb sb-blue sb-block" type="button">' + esc(intro.start) + ' ' + SVG_ARROW + '</button>' +
        '<p class="tf-intro-trust">No obligation · We never share your details with third parties.</p>' +
      '</div>';

    TF.introEl.querySelector('.tf-start').addEventListener('click', function () {
      TF.started = true;
      TF.introEl.style.display = 'none';
      TF.stageEl.style.display = 'flex'; // flex (not block) so the card stays vertically centered
      TF.navEl.style.display = 'flex';
      renderQuestion();
    });
  }

  // ----------------------------------------------------------------------
  // SUBMIT — mirror shared.js section 4 lead side-effects, then show success.
  // ----------------------------------------------------------------------
  function submitFlow() {
    var flow = TF.flow;

    // Assemble a flat payload: include presets + a readable flow tag.
    var data = { form_type: flow.formType, flow: TF.flowKey };
    var k;
    for (k in TF.ans) {
      if (Object.prototype.hasOwnProperty.call(TF.ans, k)) {
        var val = TF.ans[k];
        data[k] = Array.isArray(val) ? val.join(', ') : val;
      }
    }
    // Merge preset tags (nationality / service) for Flow A.
    if (TF.preset && TF.preset.serviceTag) data.service = TF.preset.serviceTag;
    if (TF.preset && TF.preset.preselectType) data.preselect = TF.preset.preselectType;

    // Pull persisted UTM params (shared.js stores them in sessionStorage).
    try {
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'ref'].forEach(function (key) {
        var stored = null;
        try { stored = sessionStorage.getItem(key); } catch (e) {}
        if (stored && !data[key]) data[key] = stored;
      });
    } catch (e) {}
    data.page_source = 'sg-landing';

    // Side-effects identical to shared.js section 4.
    if (window.console && console.log) console.log('[MH LEAD]', data);
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'form_submit_success',
        form_type: flow.formType,
        lead_data: {
          type: data.nat || data.helperType || data.pType || null,
          flow: TF.flowKey
        }
      });
    }

    showSuccess();
  }

  function showSuccess() {
    var s = TF.flow.success;
    TF.metaEl.textContent = '';
    TF.progressBar.style.width = '100%';
    TF.dotsEl.innerHTML = '';
    TF.navEl.style.display = 'none';
    TF.stageEl.style.display = 'none';
    TF.introEl.style.display = 'none';
    TF.successEl.style.display = 'block';

    var steps = (s.steps || []).map(function (t, i) {
      return '<div class="tf-success-step"><span class="tf-success-num">' + (i + 1) + '</span><span>' + esc(t) + '</span></div>';
    }).join('');

    TF.successEl.innerHTML =
      '<div class="tf-success-inner">' +
        '<div class="tf-success-icon">' + SVG_CHECK + '</div>' +
        '<h2 class="tf-success-title">' + esc(s.title) + '</h2>' +
        '<p class="tf-success-msg">' + esc(s.msg) + '</p>' +
        '<div class="tf-success-card">' + steps + '</div>' +
        '<a href="https://wa.me/6580119456" target="_blank" rel="noopener" class="popup-wa-btn" data-cta-type="tf-success-wa">' +
          '<svg viewBox="0 0 448 512" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6z"/></svg>' +
          'Chat with us on WhatsApp' +
        '</a>' +
        '<button class="tf-success-close sb sb-white sb-block" type="button">Close</button>' +
      '</div>';

    TF.successEl.querySelector('.tf-success-close').addEventListener('click', closeTF);
  }

  // ----------------------------------------------------------------------
  // OPEN / CLOSE
  // ----------------------------------------------------------------------
  function openTF(flowKey, preset) {
    buildShell();
    TF.flowKey = flowKey;
    TF.flow = FLOWS[flowKey] || FLOWS.intake;
    TF.step = 0;
    TF.ans = {};
    TF.preset = preset || {};
    TF.started = false;

    // Apply presets (Flow A): nationality answer or service tag.
    if (TF.preset.natAnswer) TF.ans.nat = TF.preset.natAnswer;

    TF.brandEl.textContent = TF.flow.brand;
    TF.root.classList.add('active');
    document.body.classList.add('tf-open');
    document.body.style.overflow = 'hidden';

    if (window.dataLayer) {
      window.dataLayer.push({ event: 'tf_open', tf_flow: flowKey });
    }

    renderIntro();
  }

  function closeTF() {
    if (!TF.root) return;
    TF.root.classList.remove('active');
    document.body.classList.remove('tf-open');
    document.body.style.overflow = '';
  }

  // Expose
  window.MHForms = {
    open: openTF,
    close: closeTF,
    flows: FLOWS
  };

  // ----------------------------------------------------------------------
  // WIRING — repoint every existing primary CTA to Flow A (intake).
  //
  // shared.js binds [data-open-modal] clicks to window.openModal(...). We
  // OVERRIDE window.openModal here (this file loads after shared.js, and the
  // shared.js handlers call window.openModal at click-time, so the override
  // wins) to open the typeform intake with the right preselect — without
  // touching any HTML or breaking the legacy .modal.
  // ----------------------------------------------------------------------
  function presetFromType(t) {
    if (!t) return {};
    if (NATIONALITY_PRESET[t]) return { preselectType: t, natAnswer: NATIONALITY_PRESET[t] };
    if (SERVICE_PRESET[t]) return { preselectType: t, serviceTag: SERVICE_PRESET[t] };
    return { preselectType: t };
  }

  function wire() {
    buildShell();

    // Override the global modal opener used by shared.js click handlers.
    window.openModal = function (preselectType) {
      openTF('intake', presetFromType(preselectType));
    };

    // Belt-and-suspenders: also bind our own capture-phase handler on each
    // [data-open-modal] so the typeform opens even if shared.js never ran
    // (e.g. legacy .modal missing). We stopImmediatePropagation only when we
    // actually handle it, so shared.js's listener doesn't also fire.
    var openers = document.querySelectorAll('[data-open-modal]');
    for (var i = 0; i < openers.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          openTF('intake', presetFromType(btn.dataset.preselectType));
        }, true); // capture phase — runs before shared.js bubble listener
      })(openers[i]);
    }

    // Explicit flow triggers: [data-tf-flow="partner|mom|helper|intake"].
    var flowBtns = document.querySelectorAll('[data-tf-flow]');
    for (var j = 0; j < flowBtns.length; j++) {
      (function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          var flowKey = btn.getAttribute('data-tf-flow') || 'intake';
          openTF(flowKey, presetFromType(btn.dataset.preselectType));
        });
      })(flowBtns[j]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', wire);
  } else {
    wire();
  }
})();
