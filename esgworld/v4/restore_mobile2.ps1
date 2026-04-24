$ErrorActionPreference = "Stop"
$files = @("index.html", "about.html", "services.html", "contact.html")
$base_dir = "c:\Users\anony\Downloads\esgworld-sample"

foreach ($f in $files) {
    if (Test-Path -Path "$base_dir\$f") {
        $content = [System.IO.File]::ReadAllText("$base_dir\$f")
        
        $search_992 = '(?s)@media\s*\(max-width:\s*992px\)\s*\{\s*\.intro-grid,\s*\.bottom-action-area\s*\{\s*grid-template-columns:\s*1fr;\s*\}\s*#hero\s+h1\s*\{\s*font-size:\s*3rem;\s*\}\s*\}'
        $replace_992 = "@media (max-width: 992px) {`r`n            .intro-grid, .bottom-action-area { grid-template-columns: 1fr; }`r`n            .footer-grid { grid-template-columns: 1fr 1fr; }`r`n            #hero h1 { font-size: 3rem; }`r`n        }"
        $content = $content -replace $search_992, $replace_992
        
        $search_768 = '(?s)@media\s*\(max-width:\s*768px\)\s*\{\s*\.newsletter-form\s*\{\s*flex-direction:\s*column;\s*\}\s*#hero\s*\{\s*padding-top:\s*12rem;\s*\}\s*\}'
        $replace_768 = "@media (max-width: 768px) {`r`n            .mobile-menu-btn { display: block; } .nav-links { display: none; position: absolute; top: 100%; left: 0; width: 100%; background: var(--bg-white); flex-direction: column; padding: 1rem 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1); } .nav-links.active { display: flex; } `r`n            .footer-grid { grid-template-columns: 1fr; text-align: center; }`r`n            .social-icons { justify-content: center; }`r`n            .newsletter-form { flex-direction: column; }`r`n            #hero { padding-top: 12rem; }`r`n            .nav-container { min-height: 100px; }`r`n            .logo img { height: 90px; } `r`n        }"
        $content = $content -replace $search_768, $replace_768

        [System.IO.File]::WriteAllText("$base_dir\$f", $content)
    }
}
Write-Output "Restored robust mobile responsiveness to all pages using targeted regex."
