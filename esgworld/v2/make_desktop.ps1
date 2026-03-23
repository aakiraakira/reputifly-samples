$ErrorActionPreference = "Stop"
$files = @("index.html", "about.html", "services.html", "contact.html")
$base_dir = "c:\Users\anony\Downloads\esgworld-sample"

foreach ($f in $files) {
    if (Test-Path -Path "$base_dir\$f") {
        $content = [System.IO.File]::ReadAllText("$base_dir\$f")
        
        $content = $content -replace '(?i)\.footer-grid\s*\{\s*grid-template-columns:\s*1fr\s*1fr;\s*\}', ' '
        $content = $content -replace '(?si)\.mobile-menu-btn\s*\{\s*display:\s*block;\s*\}.*?\.nav-links\.active\s*\{\s*display:\s*flex;\s*\}', ' '
        $content = $content -replace '(?i)\.footer-grid\s*\{\s*grid-template-columns:\s*1fr;\s*text-align:\s*center;\s*\}', ' '
        $content = $content -replace '(?i)\.social-icons\s*\{\s*justify-content:\s*center;\s*\}', ' '
        $content = $content -replace '(?i)\.nav-container\s*\{\s*min-height:\s*100px;\s*\}', ' '
        $content = $content -replace '(?i)\.logo\s+img\s*\{\s*height:\s*90px;\s*\}', ' '
        
        [System.IO.File]::WriteAllText("$base_dir\$f", $content)
    }
}
Write-Output "Mobile header and footer match PC successfully!"
