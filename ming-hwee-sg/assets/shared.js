/* ============================================================
   MING HWEE EMPLOYMENT - SHARED JAVASCRIPT
   Defensive, vanilla JS, wrapped in IIFE
   ============================================================ */
(function () {
  'use strict';

  // --------------------------------------------------------
  // 1. HEADER SCROLL EFFECT
  // --------------------------------------------------------
  var header = document.querySelector('.site-header');
  if (header) {
    var onHeaderScroll = function () {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onHeaderScroll, { passive: true });
    onHeaderScroll();
  }

  // --------------------------------------------------------
  // 2. UTM PARAMETER CAPTURE
  //    Persist via sessionStorage, populate hidden inputs
  // --------------------------------------------------------
  var UTM_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
    'ref'
  ];

  function captureUTMs() {
    try {
      var params = new URLSearchParams(window.location.search);
      UTM_KEYS.forEach(function (k) {
        var v = params.get(k);
        if (v) {
          try { sessionStorage.setItem(k, v); } catch (e) {}
          document.querySelectorAll('input[name="' + k + '"]').forEach(function (input) {
            input.value = v;
          });
        } else {
          var stored = null;
          try { stored = sessionStorage.getItem(k); } catch (e) {}
          if (stored) {
            document.querySelectorAll('input[name="' + k + '"]').forEach(function (input) {
              input.value = stored;
            });
          }
        }
      });
    } catch (e) {
      // silent fail if URLSearchParams or sessionStorage unavailable
    }
  }

  // --------------------------------------------------------
  // 3. MODAL OPEN / CLOSE
  //    Supports data-open-modal, data-preselect-type,
  //    data-preselect-country, data-preselect-hours
  // --------------------------------------------------------
  var modal = document.querySelector('.modal');

  if (modal) {
    window.openModal = function (preselectType, preselectCountry, preselectHours) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      if (preselectType) {
        var typeSel = modal.querySelector('[name="helperType"], [name="applicantType"]');
        if (typeSel) typeSel.value = preselectType;
      }
      if (preselectCountry) {
        var countrySel = modal.querySelector('[name="preferredCountry"]');
        if (countrySel) countrySel.value = preselectCountry;
      }
      if (preselectHours) {
        var hoursRadio = modal.querySelector('input[name="Hours"][value="' + preselectHours + '"]');
        if (hoursRadio) hoursRadio.checked = true;
      }

      if (window.dataLayer) {
        window.dataLayer.push({ event: 'form_popup_open' });
      }

      // move focus to first focusable input for accessibility
      setTimeout(function () {
        var firstInput = modal.querySelector('input, select, textarea, button:not(.modal-close)');
        if (firstInput) {
          try { firstInput.focus(); } catch (e) {}
        }
      }, 80);
    };

    window.closeModal = function () {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    // Trigger buttons
    document.querySelectorAll('[data-open-modal]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        window.openModal(
          btn.dataset.preselectType,
          btn.dataset.preselectCountry,
          btn.dataset.preselectHours
        );
      });
    });

    // Close buttons
    modal.querySelectorAll('.modal-close').forEach(function (btn) {
      btn.addEventListener('click', window.closeModal);
    });

    // Click backdrop to close
    modal.addEventListener('click', function (e) {
      if (e.target === modal) window.closeModal();
    });

    // Escape key to close
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        window.closeModal();
      }
    });
  }

  // --------------------------------------------------------
  // 4. FORM SUBMIT HANDLER
  //    Validates, disables button, logs, reveals .success-state
  // --------------------------------------------------------
  document.querySelectorAll('form[data-form-type]').forEach(function (form) {
    // Bind error-clear listeners once
    form.querySelectorAll('[required]').forEach(function (f) {
      if (f._mhBound) return;
      f._mhBound = true;
      f.addEventListener('input', function () { f.classList.remove('error'); });
      f.addEventListener('change', function () { f.classList.remove('error'); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Basic required-field validation
      var requiredFields = form.querySelectorAll('[required]');
      var valid = true;

      requiredFields.forEach(function (f) {
        var ok;
        if (f.type === 'radio') {
          ok = Array.prototype.some.call(
            form.querySelectorAll('[name="' + f.name + '"]'),
            function (r) { return r.checked; }
          );
        } else if (f.type === 'checkbox') {
          ok = f.checked;
        } else {
          ok = !!(f.value && f.value.trim());
        }
        if (!ok) {
          valid = false;
          f.classList.add('error');
        } else {
          f.classList.remove('error');
        }
      });

      if (!valid) {
        var firstErr = form.querySelector('.error');
        if (firstErr) {
          try { firstErr.focus(); } catch (e2) {}
        }
        return;
      }

      var submitBtn = form.querySelector('[type="submit"]');
      var original = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }

      var data = {};
      try {
        var fd = new FormData(form);
        fd.forEach(function (value, key) { data[key] = value; });
      } catch (err) {
        // Fallback: collect from named fields
        form.querySelectorAll('[name]').forEach(function (el) {
          if (el.type === 'radio' || el.type === 'checkbox') {
            if (el.checked) data[el.name] = el.value;
          } else {
            data[el.name] = el.value;
          }
        });
      }

      // TODO: Replace with actual fetch() to Ming Hwee backend
      //       when endpoint is provided.
      // Example:
      //   fetch('https://portal.minghwee.com/api/leads', {
      //     method:'POST',
      //     headers:{'Content-Type':'application/json'},
      //     body: JSON.stringify(data)
      //   });
      if (window.console && console.log) {
        console.log('[MH LEAD]', data);
      }

      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'form_submit_success',
          form_type: form.dataset.formType,
          lead_data: {
            type: data.helperType || data.applicantType || null,
            country: data.preferredCountry || null
          }
        });
      }

      setTimeout(function () {
        if (submitBtn) {
          submitBtn.textContent = original;
          submitBtn.disabled = false;
        }
        form.style.display = 'none';
        var parent = form.parentElement;
        var successEl = parent ? parent.querySelector('.success-state') : null;
        if (successEl) successEl.style.display = 'block';
      }, 700);
    });
  });

  // --------------------------------------------------------
  // 5. FAQ ACCORDION
  // --------------------------------------------------------
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      if (!item) return;
      var answer = item.querySelector('.faq-a');
      if (!answer) return;

      var isOpen = item.classList.contains('open');

      // close every open item
      document.querySelectorAll('.faq-item.open').forEach(function (el) {
        el.classList.remove('open');
        var a = el.querySelector('.faq-a');
        if (a) a.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // --------------------------------------------------------
  // 6. TESTIMONIAL CAROUSEL (auto-rotating 7s)
  // --------------------------------------------------------
  var testWrapper = document.querySelector('.testimonials-wrapper');
  if (testWrapper) {
    var slides = testWrapper.querySelectorAll('.testimonial');
    var dots = testWrapper.querySelectorAll('.testimonial-dot');
    var idx = 0;
    var interval = null;

    var show = function (i) {
      slides.forEach(function (s, x) { s.classList.toggle('active', x === i); });
      dots.forEach(function (d, x) { d.classList.toggle('active', x === i); });
      idx = i;
    };

    var start = function () {
      interval = setInterval(function () {
        show((idx + 1) % slides.length);
      }, 7000);
    };

    if (slides.length > 1) {
      show(0);
      start();
      dots.forEach(function (d, i) {
        d.addEventListener('click', function () {
          if (interval) clearInterval(interval);
          show(i);
          start();
        });
      });

      // pause on hover
      testWrapper.addEventListener('mouseenter', function () {
        if (interval) clearInterval(interval);
      });
      testWrapper.addEventListener('mouseleave', start);
    } else if (slides.length === 1) {
      show(0);
    }
  }

  // --------------------------------------------------------
  // 7. FADE-IN ON SCROLL (IntersectionObserver)
  // --------------------------------------------------------
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --------------------------------------------------------
  // 8. DATE INPUT MIN = TODAY
  // --------------------------------------------------------
  document.querySelectorAll('input[type="date"]').forEach(function (d) {
    if (!d.min) {
      try {
        d.min = new Date().toISOString().split('T')[0];
      } catch (e) {}
    }
  });

  // --------------------------------------------------------
  // 9. CTA CLICK TRACKING (data-cta-type)
  // --------------------------------------------------------
  document.querySelectorAll('[data-cta-type]').forEach(function (el) {
    el.addEventListener('click', function () {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'cta_click',
          cta_type: el.dataset.ctaType,
          cta_location: el.dataset.ctaLocation || null
        });
      }
    });
  });

  // --------------------------------------------------------
  // 10. SMOOTH ANCHOR SCROLL (account for fixed header)
  // --------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href || href === '#' || href.length < 2) return;

    a.addEventListener('click', function (e) {
      var target;
      try {
        target = document.querySelector(href);
      } catch (err) {
        return;
      }
      if (!target) return;
      e.preventDefault();
      var offset = header ? header.offsetHeight + 12 : 0;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // --------------------------------------------------------
  // 11. INIT UTMs ON LOAD
  // --------------------------------------------------------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', captureUTMs);
  } else {
    captureUTMs();
  }

  // --------------------------------------------------------
  // 12. EXPOSE A SMALL API FOR PAGE-SPECIFIC SCRIPTS
  // --------------------------------------------------------
  window.MH = window.MH || {};
  window.MH.captureUTMs = captureUTMs;
  window.MH.openModal = window.openModal || function () {};
  window.MH.closeModal = window.closeModal || function () {};

})();
