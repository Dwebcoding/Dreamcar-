/**
 * Footer Component
 * Gestisce il rendering centralizzato del footer su tutte le pagine
 */
(function() {
    'use strict';

    /**
     * Configurazione del footer
     */
    const FOOTER_CONFIG = {
        companyName: 'DreamCar di Bonfanti Marco',
        legalAddress: 'Via Vaccarezza 10, 24040, Osio Sopra (BG)',
        operativeAddress: 'V.le Marconi 1 - 24044 - Dalmine (BG)',
        email: 'Dreamcarsrl.curno@gmail.com',
        phone: '39035500613',
        phoneFormatted: '+39 348 612 7749',
        whatsapp: '393486127749',
        piva: '04604880163',
        
        socialLinks: {
            facebook: 'https://www.facebook.com/p/BonfantiCar-2-100063807321803/',
            instagram: 'https://www.instagram.com/bonfanti_car/',
            whatsapp: '393486127749'
        },
        
        developerLinks: {
            email: 'Dwebcoding@gmail.com',
            github: 'https://github.com/Dwebcoding',
            whatsapp: '393882566019'
        },
        
        schedule: {
            weekdays: 'Lun - Ven: 07:00 - 12:00 | 14:00 - 18:30',
            saturday: 'Sabato: 07:00 - 12:00',
            sunday: 'Domenica: Chiuso'
        }
    };

    /**
     * Determina il percorso relativo in base alla posizione della pagina
     */
    const getRelativePath = () => {
        // GitHub Pages base path
        const basePath = '/Dreamcar-/';
        return basePath;
    };

    /**
     * Genera l'HTML del footer
     */
    const generateFooterHTML = () => {
        const basePath = getRelativePath();
        const config = FOOTER_CONFIG;

        return `
            <div class="footer-content">
                <div class="footer-section">
                    <img src="${basePath}Images/Logo/Dream Car Logo Bianco.png" alt="DreamCar Logo" class="footer-logo">
                    <p class="footer-description">La tua destinazione per servizi automobilistici di eccellenza.</p>
                    
                    <div class="footer-company-info">
                        <h4>Dati Aziendali</h4>
                        <p><strong>${config.companyName}</strong></p>
                        <p><i class="fas fa-building"></i> <strong>Sede Legale:</strong><br><i class="fas fa-map-marker-alt"></i> ${config.legalAddress}</p>
                        <p><i class="fas fa-industry"></i> <strong>Sede Operativa: </strong><br><i class="fas fa-map-marker-alt"></i> ${config.operativeAddress}</p>
                        <p><i class="fas fa-envelope"></i> Email: <a href="mailto:${config.email}">${config.email}</a></p>
                        <p><i class="fas fa-phone"></i> Tel: <a href="tel:${config.phone}">${config.phoneFormatted}</a></p>
                        <p><i class="fas fa-file-invoice"></i> P.IVA: ${config.piva}</p>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Link Utili</h3>
                    <ul>
                        <li><a href="${basePath}index.html">Home</a></li>
                        <li><a href="${basePath}pages/servizi.html">Servizi</a></li>
                        <li><a href="${basePath}pages/chi-siamo.html">Chi Siamo</a></li>
                        <li><a href="${basePath}pages/preventivo.html">Preventivo</a></li>
                        <li><a href="${basePath}pages/contatti.html">Contatti</a></li>
                    </ul>

                    <h3 class="mt-3">Informazioni Legali</h3>
                    <ul>
                        <li><a href="${basePath}pages/privacy-policy.html">Privacy Policy</a></li>
                        <li><a href="${basePath}pages/termini-di-servizio.html">Termini di Servizio</a></li>
                        <li><a href="${basePath}pages/cookie-policy.html">Cookie Policy</a></li>
                        <li><a href="${basePath}pages/sitemap.html">Sitemap</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Seguici sui Social</h3>
                    <p class="footer-social-description">Resta aggiornato con le nostre novità e promozioni!</p>
                    <div class="social-links">
                        <a href="${config.socialLinks.facebook}" target="_blank" rel="noopener noreferrer" title="Facebook" class="social-link">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="${config.socialLinks.instagram}" target="_blank" rel="noopener noreferrer" title="Instagram" class="social-link">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="https://wa.me/${config.socialLinks.whatsapp}" target="_blank" rel="noopener noreferrer" title="WhatsApp Business" class="social-link">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>

                    <h3 class="mt-4">Orari di Apertura</h3>
                    <div class="footer-schedule">
                        <p><i class="fas fa-clock"></i> ${config.schedule.weekdays}</p>
                        <p><i class="fas fa-calendar-alt"></i> ${config.schedule.saturday}</p>
                        <p><i class="fas fa-ban"></i> ${config.schedule.sunday}</p>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Developer</h3>
                    <ul class="developer-links">
                        <li><a href="mailto:${config.developerLinks.email}" title="Contatta via Email"><i class="fas fa-envelope"></i> Email</a></li>
                        <li><a href="${config.developerLinks.github}" target="_blank" rel="noopener noreferrer" title="GitHub Profile"><i class="fab fa-github"></i> GitHub</a></li>
                        <li><a href="https://wa.me/${config.developerLinks.whatsapp}" target="_blank" rel="noopener noreferrer" title="Contatta su WhatsApp"><i class="fab fa-whatsapp"></i> WhatsApp</a></li>
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
                    <p class="copyright">&copy; 2026 ${config.companyName} - Tutti i diritti riservati.</p>
                    <p class="footer-legal-info">P.IVA: ${config.piva}</p>
                    <p class="developed-by">Engineered & Designed by <a href="${config.developerLinks.github}" target="_blank" rel="noopener noreferrer">Dwebcoding</a></p>
                    <p><a href="${basePath}pages/cookie-policy.html" class="cookie-settings-link">⚙️ Gestisci Cookie</a></p>
                </div>
            </div>
        `;
    };

    /**
     * Inizializza il footer
     */
    const initFooter = () => {
        const footerElement = document.getElementById('dynamic-footer');
        
        if (!footerElement) {
            console.warn('Elemento #dynamic-footer non trovato. Il footer non verrà caricato.');
            return;
        }

        footerElement.innerHTML = generateFooterHTML();
    };

    /**
     * Esegue l'inizializzazione quando il DOM è pronto
     */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooter);
    } else {
        initFooter();
    }

    // Espone la configurazione per eventuali modifiche runtime
    window.FooterConfig = FOOTER_CONFIG;

})();
