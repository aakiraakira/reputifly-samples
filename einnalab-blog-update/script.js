
document.addEventListener('click', (e) => {
    const t = e.target;
    if (t.matches('a[href^="#"]')) {
        const id = t.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }
});
