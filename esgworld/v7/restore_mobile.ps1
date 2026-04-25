$ErrorActionPreference = "Stop"
$files = @("index.html", "about.html", "services.html", "contact.html")
$base_dir = "c:\Users\anony\Downloads\esgworld-sample"

foreach ($f in $files) {
    if (Test-Path -Path "$base_dir\$f") {
        $content = [System.IO.File]::ReadAllText("$base_dir\$f")
        
        $search_992 = "(?s)@media \(max-width: 992px\) \{[^}]*#hero h1 \{ font-size: 3rem; \}[^}]*\}"
        $replace_992 = "@media (max-width: 992px) {
            .intro-grid, .bottom-action-area { grid-template-columns: 1fr; }
            .footer-grid { grid-template-columns: 1fr 1fr; }
            #hero h1 { font-size: 3rem; }
        }"
        $content = $content -replace $search_992, $replace_992
        
        $search_768 = "(?s)@media \(max-width: 768px\) \{[^}]*#hero \{ padding-top: 12rem; \}[^}]*\}"
        $replace_768 = "@media (max-width: 768px) {
            .mobile-menu-btn { display: block; } 
            .nav-links { display: none; position: absolute; top: 100%; left: 0; width: 100%; background: var(--bg-white); flex-direction: column; padding: 1rem 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1); } 
            .nav-links.active { display: flex; } 
            .footer-grid { grid-template-columns: 1fr; text-align: center; }
            .social-icons { justify-content: center; }
            .newsletter-form { flex-direction: column; }
            #hero { padding-top: 12rem; }
            .nav-container { min-height: 100px; }
            .logo img { height: 90px; } 
        }"
        $content = $content -replace $search_768, $replace_768

        [System.IO.File]::WriteAllText("$base_dir\$f", $content)
    }
}
Write-Output "Restored robust mobile responsiveness to all pages."
