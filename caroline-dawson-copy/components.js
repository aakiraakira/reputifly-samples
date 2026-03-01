/* --- UNIVERSAL COMPONENT INJECTION --- */

const LOGO_URL = "https://reputifly.com/wp-content/uploads/2026/02/ChatGPT-Image-Feb-14-2026-04_13_18-PM.png";

const HEADER_HTML = `
<nav class="navbar" id="main-nav">
    <div class="nav-container">
        <a href="index.html" class="nav-logo">
            <img src="${LOGO_URL}" alt="Caroline Dawson">
        </a>
        <div class="mobile-toggle" onclick="toggleMobileMenu()">
            <i class="fas fa-bars"></i>
        </div>
        <ul class="nav-links" id="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html" class="nav-cta">Contact</a></li>
        </ul>
    </div>
</nav>
`;

const FOOTER_HTML = `
<div class="footer-content" style="grid-template-columns: 1fr 1fr; align-items: start;">
    <div class="footer-col">
        <a href="index.html" class="footer-logo">
            <img src="${LOGO_URL}" alt="Caroline Dawson">
        </a>
        <p class="footer-desc">
            Empowering organizations worldwide with strategic leadership, executive coaching, and future-forward innovation.
        </p>
        <div class="contact-mini" style="margin-top: 20px; color: var(--text-muted); font-size: 14px;">
            <p style="margin-bottom: 8px;"><i class="fas fa-phone-alt" style="color: var(--accent-gold); width: 20px;"></i> +65 9383 5310</p>
            <p><i class="fas fa-envelope" style="color: var(--accent-gold); width: 20px;"></i> carol@carolinedawson.org</p>
        </div>
        <div class="social-links">
            <a href="http://www.linkedin.com/in/carolinedawson1626" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/carolinedawson1673" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/carolinejosephinedawson" target="_blank"><i class="fab fa-facebook-f"></i></a>
        </div>
    </div>

    <div class="footer-col" style="align-items: flex-end; text-align: right;">
        <span class="footer-heading">Navigation</span>
        <div class="footer-links" style="align-items: flex-end;">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="contact.html">Contact</a>
        </div>
    </div>
</div>

<div class="footer-bottom">
    <div>&copy; ${new Date().getFullYear()} carolinedawson.org. All Rights Reserved.</div>
    <div class="footer-bottom-links">
        <a href="https://reputifly.com/web-development" target="_blank" rel="dofollow" class="reputifly-link">Website Design by Reputifly</a>
    </div>
</div>
`;

// Inject Header
const headerContainer = document.getElementById('universal-header');
if (headerContainer) {
    headerContainer.innerHTML = HEADER_HTML;
}

// Inject Footer
const footerContainer = document.getElementById('universal-footer');
if (footerContainer) {
    footerContainer.innerHTML = FOOTER_HTML;
}

// --- FUNCTIONALITY ---

// 1. Highlight Active Link
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    // Get the href attribute
    const linkHref = link.getAttribute('href');

    // Check if it matches the current path
    // Simple check, might need more robust matching for sub-pages if they existed
    if (linkHref === currentPath) {
        link.classList.add('active');
    }
});

// 2. Scroll Effect for Navbar
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('main-nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// 3. Mobile Menu Toggle
function toggleMobileMenu() {
    const links = document.getElementById('nav-links');
    if (links) {
        links.classList.toggle('active');

        // Change icon
        const icon = document.querySelector('.mobile-toggle i');
        if (links.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
}
