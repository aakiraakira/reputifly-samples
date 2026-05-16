/* --- UNIVERSAL COMPONENT INJECTION --- */

const LOGO_URL = "assets/logo/cdi-logo.png";

const HEADER_HTML = `
<nav class="navbar" id="main-nav">
    <div class="nav-container">
        <a href="index.html" class="nav-logo">
            <img src="${LOGO_URL}" alt="Caroline Dawson International">
        </a>
        <div class="mobile-toggle" onclick="toggleMobileMenu()">
            <i class="fas fa-bars"></i>
        </div>
        <ul class="nav-links" id="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li class="nav-has-dropdown">
                <a href="courses.html">Courses <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                <ul class="nav-dropdown">
                    <li><a href="courses.html">All Courses</a></li>
                    <li class="nav-dropdown-heading">Strategic Communication</li>
                    <li><a href="course-presentation-masterclass.html">Business Presentation</a></li>
                    <li><a href="course-authority-stage.html">The Authority Stage</a></li>
                    <li><a href="course-writing-for-results.html">Writing for Results</a></li>
                    <li><a href="course-connection-edge.html">The Connection Edge</a></li>
                    <li class="nav-dropdown-heading">Leadership &amp; EQ</li>
                    <li><a href="course-leadership-edge.html">The Leadership Edge</a></li>
                    <li><a href="course-eq-edge.html">The EQ Edge</a></li>
                    <li><a href="course-lead-every-generation.html">Lead Every Generation</a></li>
                    <li><a href="course-negotiate-precision.html">Negotiate with Precision</a></li>
                    <li class="nav-dropdown-heading">Adaptive Thinking</li>
                    <li><a href="course-change-masterclass.html">The Change Masterclass</a></li>
                    <li><a href="course-precision-problem-solving.html">Precision Problem-Solving</a></li>
                    <li><a href="course-decision-shield.html">The Decision Shield</a></li>
                </ul>
            </li>
            <li class="nav-has-dropdown">
                <a href="profiling.html">Profiling <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                <ul class="nav-dropdown">
                    <li><a href="profiling.html">All Profiling</a></li>
                    <li><a href="profiling-mbti.html">MBTI&reg;</a></li>
                    <li><a href="profiling-disc.html">DISC</a></li>
                    <li><a href="profiling-enneagram.html">The Enneagram</a></li>
                    <li><a href="profiling-lumina-spark.html">Lumina Spark</a></li>
                </ul>
            </li>
            <li class="nav-has-dropdown">
                <a href="executive-coaching.html">Coaching <i class="fas fa-chevron-down" style="font-size: 10px; margin-left: 4px;"></i></a>
                <ul class="nav-dropdown">
                    <li><a href="executive-coaching.html">All Coaching</a></li>
                    <li><a href="coaching-leadership-blueprint.html">The Leadership Blueprint</a></li>
                    <li><a href="coaching-decision-advantage.html">The Decision Advantage</a></li>
                    <li><a href="coaching-eq-edge.html">The EQ Edge</a></li>
                </ul>
            </li>
            <li><a href="consultancy.html">Consultancy</a></li>
            <li><a href="keynotes.html">Keynotes</a></li>
            <li><a href="contact.html" class="nav-cta">Contact</a></li>
        </ul>
    </div>
</nav>
`;

const FOOTER_HTML = `
<div class="footer-content">
    <div class="footer-col">
        <a href="index.html" class="footer-logo">
            <img src="${LOGO_URL}" alt="Caroline Dawson International">
        </a>
        <p class="footer-desc">
            Caroline Dawson International (CDI) is your strategic partner for organisational performance through communication and leadership. Practical training trusted by government agencies and global teams.
        </p>
        <div class="contact-mini" style="margin-top: 20px; color: var(--text-muted); font-size: 14px;">
            <p style="margin-bottom: 8px;"><i class="fas fa-phone-alt" style="color: var(--accent-gold); width: 20px;"></i> +65 9383 5310</p>
            <p style="margin-bottom: 8px;"><i class="fas fa-envelope" style="color: var(--accent-gold); width: 20px;"></i> carol@carolinedawson.org</p>
            <p><i class="fas fa-envelope" style="color: var(--accent-gold); width: 20px;"></i> carolinedawson73@yahoo.com.sg</p>
        </div>
        <div class="social-links" style="margin-top: 20px;">
            <a href="http://www.linkedin.com/in/carolinedawson1626" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.instagram.com/carolinedawson1673" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/carolinejosephinedawson" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
        </div>
    </div>

    <div class="footer-col">
        <span class="footer-heading">Explore</span>
        <div class="footer-links">
            <a href="index.html">Home</a>
            <a href="about.html">About Us</a>
            <a href="courses.html">Our Courses</a>
            <a href="profiling.html">Profiling Workshops</a>
            <a href="executive-coaching.html">Executive Coaching</a>
        </div>
    </div>

    <div class="footer-col">
        <span class="footer-heading">Capabilities</span>
        <div class="footer-links">
            <a href="consultancy.html">Workplace Learning</a>
            <a href="keynotes.html">Keynotes</a>
            <a href="contact.html">Contact</a>
            <a href="changelog.html">Changelog</a>
            <a href="assets/lead-magnet/5-communication-breakdowns.pdf" target="_blank">Free Guide</a>
        </div>
    </div>
</div>

<div class="footer-bottom">
    <div>&copy; ${new Date().getFullYear()} Caroline Dawson International Pte Ltd. All Rights Reserved.</div>
    <div class="footer-bottom-links">
        <a href="https://reputifly.com/web-development" target="_blank" rel="dofollow" class="reputifly-link">Website Design by Reputifly</a>
    </div>
</div>
`;

// Inject Favicon (dynamically, since pages don't have <link rel="icon">)
(function() {
    var existing = document.querySelector('link[rel="icon"]');
    if (!existing) {
        var link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        link.href = 'favicon.png';
        document.head.appendChild(link);
    }
})();

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
let currentPath = window.location.pathname.split('/').pop();
if (!currentPath) { currentPath = 'index.html'; }
const navLinks = document.querySelectorAll('.nav-links > li > a');

navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath) {
        link.classList.add('active');
    }
    // Highlight parent on dropdown items
    var parent = link.parentElement;
    if (parent.classList.contains('nav-has-dropdown')) {
        var dropLinks = parent.querySelectorAll('.nav-dropdown a');
        dropLinks.forEach(function(d) {
            if (d.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
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

// 4. Mobile dropdown toggle (tap to expand)
document.addEventListener('click', function(e) {
    if (window.innerWidth > 1024) return;
    var trigger = e.target.closest('.nav-has-dropdown > a');
    if (trigger) {
        e.preventDefault();
        var parent = trigger.parentElement;
        parent.classList.toggle('open');
    }
});

// 5. Global IntersectionObserver fallback (ensures content always becomes visible)
(function() {
    function showAll() {
        document.querySelectorAll('.hidden-section').forEach(function(s) {
            s.classList.add('show-section');
        });
    }
    // Initial: show after short delay regardless of intersection
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(showAll, 200);
        });
    } else {
        setTimeout(showAll, 200);
    }
})();

// 6. Global FAQ toggle binding — DISABLED: each page has its own handler.
// Re-enabling would double-toggle (page handler + global handler = net no change).
