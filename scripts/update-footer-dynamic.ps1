# Script per convertire i footer statici in footer dinamici
# Sostituisce il contenuto del footer con un container per il caricamento JS

$pagesFolder = Join-Path $PSScriptRoot "..\pages"
$pages = @(
    "chi-siamo.html",
    "contatti.html",
    "preventivo.html",
    "sitemap.html",
    "privacy-policy.html",
    "cookie-policy.html",
    "termini-di-servizio.html"
)

$newFooterHtml = @"
    <footer class="footer">
        <div class="container" id="dynamic-footer">
            <!-- Footer caricato dinamicamente da js/footer.js -->
        </div>
    </footer>

    <script src="../js/script.js"></script>
    <script src="../js/footer.js"></script>
    <script src="../js/cookie-consent.js"></script>
</body>
</html>
"@

foreach ($page in $pages) {
    $filePath = Join-Path $pagesFolder $page
    
    if (Test-Path $filePath) {
        Write-Host "Aggiornamento di $page..."
        
        # Leggi il contenuto del file
        $content = Get-Content $filePath -Raw -Encoding UTF8
        
        # Pattern per trovare il footer e gli script finali
        $pattern = '(?s)<footer class="footer">.*?</footer>.*?<script src="\.\./js/script\.js"></script>.*?<script src="\.\./js/cookie-consent\.js"></script>.*?</body>.*?</html>'
        
        # Sostituisci con il nuovo footer dinamico
        $updatedContent = $content -replace $pattern, $newFooterHtml
        
        # Salva il file aggiornato
        [System.IO.File]::WriteAllText($filePath, $updatedContent, [System.Text.UTF8Encoding]::new($false))
        
        Write-Host "OK - $page aggiornato con successo"
    } else {
        Write-Host "File non trovato: $page"
    }
}

Write-Host ""
Write-Host "Aggiornamento completato"
Write-Host "Tutte le pagine ora usano il footer dinamico"
Write-Host "Per modificare il footer edita il file js/footer.js"
