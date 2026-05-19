// Mobile nav drawer
const toggle = document.querySelector('.nav-toggle');
const drawer = document.querySelector('.nav-drawer');
if (toggle && drawer) {
  toggle.addEventListener('click', () => drawer.classList.toggle('open'));
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Sticky mobile CTA after hero
const mobileCta = document.querySelector('.mobile-cta');
const hero = document.querySelector('.hero');
if (mobileCta && hero) {
  const heroObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) mobileCta.classList.add('show');
      else mobileCta.classList.remove('show');
    });
  }, { threshold: 0.2 });
  heroObs.observe(hero);
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
