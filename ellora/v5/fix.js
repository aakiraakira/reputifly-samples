const fs = require('fs');

const files = ['index.html', 'about.html', 'contact.html', 'products.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. Header logo size
    // .logo img { height: 45px; ... } -> 65px (Mobile and Desktop header logo!)
    content = content.replace(/\.logo img\s*\{\s*height:\s*45px;/g, '.logo img {\n            height: 65px;');

    if (!content.includes('.footer-logo {')) {
        // 2. Footer logo class & sizing
        content = content.replace(
            /<img src="assets\/images\/Ellora Furnishings Transparent Background.png" alt="Ellora Furnishings"(\s*)style="height: 50px; margin-bottom: 1.5rem; filter: brightness\(0\) invert\(1\);"/g,
            '<img src="assets/images/Ellora Furnishings Transparent Background.png" alt="Ellora Furnishings" class="footer-logo"'
        );

        // 3. Add footer-logo CSS before /* Responsive */
        const cssToAdd = `
        .footer-logo {
            height: 70px;
            margin-bottom: 1.5rem;
            filter: brightness(0) invert(1);
            display: inline-block;
        }
        `;
        content = content.replace(/\/\* Responsive \*\//, cssToAdd + '\n        /* Responsive */');

        // Mobile centering for footer-logo: Find "footer-grid" block in max-width 768px
        const mobileCssToAdd = `
            .footer-logo {
                margin: 0 auto 1.5rem;
                height: 80px;
                display: block;
            }
`;
        content = content.replace(/(\.footer-grid\s*\{\s*grid-template-columns:\s*1fr;\s*text-align:\s*center;\s*gap:\s*2rem;\s*\})/, '$1' + mobileCssToAdd);
    }

    // 4. Update the email icon and text
    content = content.replace(/<\/svg>\s*ellorafurnishings@gmail.com/g, '</svg><span>ellorafurnishings@gmail.com</span>');
    // Align SVG icons to elements right next to them
    content = content.replace(/margin-right:\s*8px;/g, 'margin-right: 4px;');

    // Update phone/location/email emoji in about.html to svg
    content = content.replace(/<p>✉ ellorafurnishings@gmail.com<\/p>/g, '<p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><span>ellorafurnishings@gmail.com</span></p>');
    content = content.replace(/<p>📞 \+65 8977 6860<\/p>/g, '<p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> +65 8977 6860</p>');
    content = content.replace(/<p>📍 2 Yishun Industrial St 1, #02-34, S768159<\/p>/g, '<p><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 4px;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> 2 Yishun Industrial St 1, #02-34, S768159</p>');

    fs.writeFileSync(file, content, 'utf8');
});
console.log('Done script');
