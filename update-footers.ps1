# Script to update footer in all pages
# Run this from the site root directory

Write-Host "Updating footers in all DreamCar site pages..." -ForegroundColor Green

# Define the new footer content
$footerContent = @"
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <img src="../Images/Logo/Dream Car Logo Bianco.png" alt="DreamCar Logo" class="footer-logo">
                    <p class="footer-description">La tua destinazione per servizi automobilistici di eccellenza.</p>
                    
                    <div class="footer-company-info">
                        <h4>Dati Aziendali</h4>
                        <p><strong>DreamCar di [Nome Titolare]</strong></p>
                        <p>📍 Via [Indirizzo], [CAP] [Città] ([Provincia])</p>
                        <p>📧 Email: <a href="mailto:info@dreamcar.it">info@dreamcar.it</a></p>
                        <p>📞 Tel: <a href="tel:+39XXXXXXXXXX">+39 XXX XXX XXXX</a></p>
                        <p>💼 P.IVA: 12345678901</p>
                        <p>🏢 REA: XX-XXXXXX</p>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Link Utili</h3>
                    <ul>
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="servizi.html">Servizi</a></li>
                        <li><a href="chi-siamo.html">Chi Siamo</a></li>
                        <li><a href="preventivo.html">Preventivo</a></li>
                        <li><a href="contatti.html">Contatti</a></li>
                    </ul>

                    <h3 class="mt-3">Informazioni Legali</h3>
                    <ul>
                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="termini-di-servizio.html">Termini di Servizio</a></li>
                        <li><a href="cookie-policy.html">Cookie Policy</a></li>
                        <li><a href="sitemap.html">Sitemap</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Seguici sui Social</h3>
                    <p class="footer-social-description">Resta aggiornato con le nostre novità e promozioni!</p>
                    <div class="social-links">
                        <a href="https://www.facebook.com/dreamcar" target="_blank" rel="noopener noreferrer" title="Facebook" class="social-link">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.instagram.com/dreamcar" target="_blank" rel="noopener noreferrer" title="Instagram" class="social-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/dreamcar" target="_blank" rel="noopener noreferrer" title="LinkedIn" class="social-link">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.youtube.com/@dreamcar" target="_blank" rel="noopener noreferrer" title="YouTube" class="social-link">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://wa.me/39XXXXXXXXXX" target="_blank" rel="noopener noreferrer" title="WhatsApp Business" class="social-link">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://twitter.com/dreamcar" target="_blank" rel="noopener noreferrer" title="Twitter/X" class="social-link">
                            <i class="fab fa-x-twitter"></i>
                        </a>
                    </div>

                    <h3 class="mt-4">Orari di Apertura</h3>
                    <div class="footer-schedule">
                        <p>🕐 Lun - Ven: 08:30 - 12:30 | 14:30 - 19:00</p>
                        <p>🕐 Sabato: 09:00 - 13:00</p>
                        <p>🔒 Domenica: Chiuso</p>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Developer</h3>
                    <ul class="developer-links">
                        <li><a href="mailto:Dwebcoding@gmail.com" title="Contatta via Email"><i class="fas fa-envelope"></i> Email</a></li>
                        <li><a href="https://github.com/Dwebcoding" target="_blank" rel="noopener noreferrer" title="GitHub Profile"><i class="fab fa-github"></i> GitHub</a></li>
                        <li><a href="https://wa.me/393882566019" target="_blank" rel="noopener noreferrer" title="Contatta su WhatsApp"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>
                    </ul>

                    <div class="footer-certifications mt-4">
                        <h4>Certificazioni & Partners</h4>
                        <p class="footer-cert-text">
                            <i class="fas fa-certificate"></i> Officina Autorizzata<br>
                            <i class="fas fa-shield-alt"></i> Garanzia Qualità<br>
                            <i class="fas fa-award"></i> ISO 9001:2015
                        </p>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <p class="copyright">&copy; 2026 DreamCar di [Nome Titolare] - Tutti i diritti riservati.</p>
                    <p class="footer-legal-info">P.IVA: 12345678901 | REA: XX-XXXXXX | Capitale Sociale: € [XXXX],00</p>
                    <p class="developed-by">Engineered & Designed by <a href="https://github.com/Dwebcoding" target="_blank" rel="noopener noreferrer">Dwebcoding</a></p>
                    <p><a href="#" class="cookie-settings-link" onclick="openCookiePreferences(); return false;">⚙️ Gestisci Cookie</a></p>
                </div>
            </div>
        </div>
    </footer>
"@

# List of pages to update
$pagesToUpdate = @(
    "pages\chi-siamo.html",
    "pages\contatti.html",
    "pages\preventivo.html",
    "pages\sitemap.html",
    "pages\privacy-policy.html",
    "pages\cookie-policy.html",
    "pages\termini-di-servizio.html"
)

foreach ($page in $pagesToUpdate) {
    Write-Host "Processing $page..." -ForegroundColor Yellow
    
    if (Test-Path $page) {
        $content = Get-Content $page -Raw -Encoding UTF8
        
        # Use regex to replace the footer section
        $pattern = '(?s)<footer class="footer">.*?</footer>'
        $newContent = $content -replace $pattern, $footerContent
        
        # Save the updated content
        Set-Content -Path $page -Value $newContent -Encoding UTF8 -NoNewline
        
        Write-Host "Updated $page" -ForegroundColor Green
    }
    else {
        Write-Host "File not found: $page" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Footer update complete!" -ForegroundColor Green
Write-Host "Remember to update the placeholder values" -ForegroundColor Cyan
