$ErrorActionPreference = "Stop"

$files = @("index.html", "about.html", "services.html", "contact.html")
$base_dir = "c:\Users\anony\Downloads\esgworld-sample"

foreach ($f in $files) {
    if (Test-Path -Path "$base_dir\$f") {
        $content = [System.IO.File]::ReadAllText("$base_dir\$f")
        
        # 1. Update CSS
        if (-not ($content -match "\.mobile-menu-btn")) {
            $content = $content -replace '(?s)\.nav-links\s*\{\s*display:\s*none;\s*\}', ".mobile-menu-btn { display: block; } .nav-links { display: none; position: absolute; top: 100%; left: 0; width: 100%; background: var(--bg-white); flex-direction: column; padding: 1rem 0; box-shadow: 0 4px 10px rgba(0,0,0,0.1); } .nav-links.active { display: flex; }"
            
            $rep2 = ".mobile-menu-btn { display: none; font-size: 1.5rem; color: var(--primary); cursor: pointer; background: none; border: none; } /* ==========================================================================`n           RESPONSIVE DESIGN"
            $content = $content -replace '(?s)/\*\s*={10,}\s*RESPONSIVE DESIGN', $rep2

            # 2. Add button in HTML
            $content = $content -replace '(?s)</a>\s*<ul class="nav-links">', '</a> <button class="mobile-menu-btn" aria-label="Toggle menu"><i class="fa-solid fa-bars"></i></button> <ul class="nav-links">'

            # 3. Add JS before </body>
            $rep3 = "<script>`n        document.addEventListener('DOMContentLoaded', () => {`n            const btn = document.querySelector('.mobile-menu-btn');`n            const nav = document.querySelector('.nav-links');`n            if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('active'));`n        });`n    </script>`n</body>"
            $content = $content -replace '</body>', $rep3

            [System.IO.File]::WriteAllText("$base_dir\$f", $content)
        }
    }
}
Write-Output "Fixed mobile nav successfully on all pages."
