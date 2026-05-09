const fs = require('fs');

const universalHeaderHtml = (activePage) => `  <!-- ═══ HEADER ═══ -->
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="header-logo" style="display: flex; flex-direction: column; align-items: center; gap: 4px; text-decoration: none;">
        <img src="https://reputifly3.sg-host.com/wp-content/uploads/2026/03/461830294-2007434786343475-4771983523972772082-n-mmdb5itwrxgv.webp" alt="Oriental System Interior" loading="eager">
        <span style="font-size: 10px; color: #c9a96e; font-weight: 600; letter-spacing: 0.05em; line-height: 1;">UEN:198200002G</span>
      </a>
      <nav class="header-nav">
        <a href="index.html"${activePage === 'index' ? ' class="active"' : ''}>Home</a>
        <a href="about.html"${activePage === 'about' ? ' class="active"' : ''}>About</a>
        <a href="services.html"${activePage === 'services' ? ' class="active"' : ''}>Services</a>
        <a href="contact.html"${activePage === 'contact' ? ' class="active"' : ''}>Contact</a>
      </nav>
      <button class="hamburger" onclick="this.classList.toggle('open'); document.getElementById('mobileNav').classList.toggle('open')" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <nav class="mobile-nav" id="mobileNav">
      <a href="index.html"${activePage === 'index' ? ' class="active"' : ''}>Home</a>
      <a href="about.html"${activePage === 'about' ? ' class="active"' : ''}>About</a>
      <a href="services.html"${activePage === 'services' ? ' class="active"' : ''}>Services</a>
      <a href="contact.html"${activePage === 'contact' ? ' class="active"' : ''}>Contact</a>
    </nav>
  </header>`;

const universalHeaderCss = `
/* ===== STANDARDIZED HEADER CSS ===== */
#oriental-optimized-landing .site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10,31,20,0.92) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border-bottom: 1px solid rgba(201,169,110,0.15) !important;
  transition: background 0.3s;
}

#oriental-optimized-landing .header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  height: 72px !important;
}

#oriental-optimized-landing .header-logo img {
  height: 50px !important;
  width: auto;
  display: block;
}

#oriental-optimized-landing .header-nav {
  display: flex !important;
  align-items: center;
  gap: 8px !important;
  position: static !important;
  transform: none !important;
  opacity: 1 !important;
  pointer-events: auto !important;
  background: transparent !important;
  flex-direction: row !important;
  padding: 0 !important;
  border: none !important;
}

#oriental-optimized-landing .header-nav a {
  color: #f0ebe3 !important;
  text-decoration: none;
  font-size: 0.9rem !important;
  font-weight: 500 !important;
  padding: 8px 20px !important;
  border-radius: 100px !important;
  transition: all 0.3s ease;
  border: none !important;
  width: auto !important;
  text-align: left !important;
}

#oriental-optimized-landing .header-nav a:hover {
  color: #c9a96e !important;
  background: rgba(201,169,110,0.08) !important;
}

#oriental-optimized-landing .header-nav a.active {
  background: rgba(201,169,110,0.15) !important;
  color: #c9a96e !important;
}
#oriental-optimized-landing .header-nav a.active::after {
  display: none !important;
}

#oriental-optimized-landing .hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 8px;
}

#oriental-optimized-landing .hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #c9a96e;
  transition: all 0.3s ease;
  border-radius: 0 !important;
}

#oriental-optimized-landing .hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

#oriental-optimized-landing .hamburger.open span:nth-child(2) {
  opacity: 0;
}

#oriental-optimized-landing .hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

#oriental-optimized-landing .mobile-nav {
  display: none;
  background: rgba(10,31,20,0.97) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border-bottom: 1px solid rgba(201,169,110,0.15) !important;
  position: static !important;
  padding: 0 !important;
}

#oriental-optimized-landing .mobile-nav.open {
  display: block !important;
}

#oriental-optimized-landing .mobile-nav a {
  display: block !important;
  padding: 16px 24px !important;
  color: #f0ebe3 !important;
  text-decoration: none !important;
  font-size: 1rem !important;
  font-weight: 500 !important;
  border-bottom: 1px solid rgba(201,169,110,0.15) !important;
  transition: all 0.3s ease;
  text-align: left !important;
}

#oriental-optimized-landing .mobile-nav a:hover,
#oriental-optimized-landing .mobile-nav a.active {
  color: #c9a96e !important;
  background: rgba(201,169,110,0.05) !important;
}

@media (max-width: 900px) {
  #oriental-optimized-landing .header-nav { display: none !important; }
  #oriental-optimized-landing .hamburger { display: flex !important; }
}
/* ===== END STANDARDIZED HEADER CSS ===== */
`;

const files = ['index.html', 'about.html', 'contact.html', 'services.html'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace HTML
  const headerRegex = /(?:<!--[\s\S]*?HEADER[\s\S]*?-->\s*)?<header class="(site-header|osi-header)">[\s\S]*?<\/header>/i;
  const activePage = file.replace('.html', '');
  content = content.replace(headerRegex, universalHeaderHtml(activePage));
  
  // For CSS, we append it before </style>
  if (!content.includes('/* ===== STANDARDIZED HEADER CSS ===== */')) {
    content = content.replace('</style>', universalHeaderCss + '\n</style>');
  }
  
  fs.writeFileSync(file, content);
}
console.log('Done replacement');
