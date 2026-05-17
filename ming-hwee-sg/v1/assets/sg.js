/* ==========================================================================
   MingHwee SG Landing Page - Page-specific JS
   Core behavior (modal, forms, FAQ accordion, testimonial carousel,
   fade-in on scroll, UTM capture, smooth scroll, CTA tracking) lives in
   shared.js. This file handles only page-specific behaviour.
   ========================================================================== */
(function () {
  'use strict';

  // ------------------------------------------------------------------
  // YEAR COUNTER — auto-update "41 years" each calendar year.
  // Any element with data-year-counter="<foundingYear>" will show
  // (currentYear - foundingYear) on page load. So 2027 will say 42, etc.
  // ------------------------------------------------------------------
  function updateYearCounters() {
    var now = new Date();
    var currentYear = now.getFullYear();
    var nodes = document.querySelectorAll('[data-year-counter]');
    for (var i = 0; i < nodes.length; i++) {
      var founded = parseInt(nodes[i].getAttribute('data-year-counter'), 10);
      if (!isNaN(founded)) {
        var years = currentYear - founded;
        if (years > 0) nodes[i].textContent = String(years);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateYearCounters);
  } else {
    updateYearCounters();
  }
})();
