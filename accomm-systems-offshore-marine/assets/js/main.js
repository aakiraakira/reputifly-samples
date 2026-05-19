// Mobile nav drawer
const toggle = document.querySelector('.nav-toggle');
const drawer = document.querySelector('.nav-drawer');
if (toggle && drawer) {
  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    const open = drawer.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    drawer.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

// Reveal on scroll
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Sticky mobile CTA — show after hero exits, hide when footer enters
const mobileCta = document.querySelector('.mobile-cta');
const hero = document.querySelector('.hero, .page-hero');
const footerEl = document.querySelector('footer');

let afterHero = false;
let footerVisible = false;
function updateCta() {
  if (!mobileCta) return;
  if (afterHero && !footerVisible) mobileCta.classList.add('show');
  else mobileCta.classList.remove('show');
}

if (mobileCta && hero) {
  new IntersectionObserver((entries) => {
    entries.forEach(e => { afterHero = !e.isIntersecting; updateCta(); });
  }, { threshold: 0.2 }).observe(hero);
}
if (mobileCta && footerEl) {
  new IntersectionObserver((entries) => {
    entries.forEach(e => { footerVisible = e.isIntersecting; updateCta(); });
  }, { threshold: 0.05 }).observe(footerEl);
}

// Form prevent default submit (sample only)
document.querySelectorAll('form').forEach(f => {
  f.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const btn = f.querySelector('button[type="submit"]');
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = 'Thanks — we will be in touch.';
      btn.disabled = true;
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; f.reset(); }, 3200);
    }
  });
});
