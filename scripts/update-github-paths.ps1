# Script per aggiornare tutti i percorsi per GitHub Pages
# Sostituisce i percorsi relativi con percorsi assoluti per la repository Dreamcar-

$basePath = "/Dreamcar-"

# Lista di tutti i file HTML nelle pagine
$pages = Get-ChildItem -Path "../pages" -Filter "*.html"

foreach ($page in $pages) {
    $filePath = $page.FullName
    Write-Host "Aggiornamento $($page.Name)..."
    
    $content = Get-Content $filePath -Raw -Encoding UTF8
    
    # Sostituisci riferimenti CSS
    $content = $content -replace 'href="\.\./css/', "href=`"$basePath/css/"
    
    # Sostituisci riferimenti JS
    $content = $content -replace 'src="\.\./js/', "src=`"$basePath/js/"
    
    # Salva il file
    [System.IO.File]::WriteAllText($filePath, $content, [System.Text.UTF8Encoding]::new($false))
    
    Write-Host "OK - $($page.Name) aggiornato"
}

Write-Host ""
Write-Host "Tutti i percorsi aggiornati per GitHub Pages!"
Write-Host "Base path: $basePath"
