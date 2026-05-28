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
