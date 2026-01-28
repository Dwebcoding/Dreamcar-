// Cookie Consent Banner - Conforme GDPR
class CookieConsent {
    constructor() {
        this.consentGiven = localStorage.getItem('cookieConsent');
        this.preferencesSet = localStorage.getItem('cookiePreferences');
        this.init();
    }

    init() {
        if (!this.consentGiven) {
            this.showBanner();
        } else {
            this.loadCookies();
        }
    }

    showBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.className = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <h3>🍪 Informativa sui Cookie</h3>
                    <p>Utilizziamo cookie tecnici necessari per il funzionamento del sito e cookie analitici per migliorare la tua esperienza. 
                    Cliccando su "Accetta tutti" acconsenti all'uso di tutti i cookie. Puoi gestire le tue preferenze cliccando su "Personalizza".</p>
                    <p class="cookie-links">
                        <a href="pages/cookie-policy.html" target="_blank">Cookie Policy</a> | 
                        <a href="pages/privacy-policy.html" target="_blank">Privacy Policy</a>
                    </p>
                </div>
                <div class="cookie-consent-buttons">
                    <button id="cookie-reject" class="cookie-btn cookie-btn-secondary">Rifiuta non necessari</button>
                    <button id="cookie-customize" class="cookie-btn cookie-btn-secondary">Personalizza</button>
                    <button id="cookie-accept" class="cookie-btn cookie-btn-primary">Accetta tutti</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        // Event listeners
        document.getElementById('cookie-accept').addEventListener('click', () => this.acceptAll());
        document.getElementById('cookie-reject').addEventListener('click', () => this.rejectAll());
        document.getElementById('cookie-customize').addEventListener('click', () => this.showPreferences());
    }

    showPreferences() {
        const modal = document.createElement('div');
        modal.id = 'cookie-preferences-modal';
        modal.className = 'cookie-modal';
        modal.innerHTML = `
            <div class="cookie-modal-content">
                <div class="cookie-modal-header">
                    <h2>Preferenze Cookie</h2>
                    <button class="cookie-modal-close" id="close-preferences">&times;</button>
                </div>
                <div class="cookie-modal-body">
                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>Cookie Tecnici Necessari</h3>
                            <label class="cookie-switch">
                                <input type="checkbox" id="cookie-necessary" checked disabled>
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p class="cookie-category-description">
                            Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disattivati. 
                            Vengono utilizzati per salvare le tue preferenze sui cookie e garantire la sicurezza del sito.
                        </p>
                    </div>

                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>Cookie Funzionali</h3>
                            <label class="cookie-switch">
                                <input type="checkbox" id="cookie-functional">
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p class="cookie-category-description">
                            Questi cookie permettono al sito di ricordare le tue scelte (come il tema scuro/chiaro) 
                            e fornire funzionalità avanzate e personalizzate.
                        </p>
                    </div>

                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>Cookie Analitici</h3>
                            <label class="cookie-switch">
                                <input type="checkbox" id="cookie-analytics">
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p class="cookie-category-description">
                            Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo 
                            e fornendo informazioni in forma anonima. Ci permettono di migliorare il nostro servizio.
                        </p>
                    </div>

                    <div class="cookie-category">
                        <div class="cookie-category-header">
                            <h3>Cookie di Marketing</h3>
                            <label class="cookie-switch">
                                <input type="checkbox" id="cookie-marketing">
                                <span class="cookie-slider"></span>
                            </label>
                        </div>
                        <p class="cookie-category-description">
                            Questi cookie vengono utilizzati per mostrare annunci pubblicitari pertinenti e per 
                            tracciare l'efficacia delle campagne pubblicitarie.
                        </p>
                    </div>
                </div>
                <div class="cookie-modal-footer">
                    <button id="save-preferences" class="cookie-btn cookie-btn-primary">Salva Preferenze</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Load saved preferences
        this.loadPreferences();

        // Event listeners
        document.getElementById('close-preferences').addEventListener('click', () => this.closeModal());
        document.getElementById('save-preferences').addEventListener('click', () => this.savePreferences());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeModal();
        });
    }

    loadPreferences() {
        const preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
        
        if (preferences.functional) document.getElementById('cookie-functional').checked = true;
        if (preferences.analytics) document.getElementById('cookie-analytics').checked = true;
        if (preferences.marketing) document.getElementById('cookie-marketing').checked = true;
    }

    savePreferences() {
        const preferences = {
            necessary: true, // Always true
            functional: document.getElementById('cookie-functional').checked,
            analytics: document.getElementById('cookie-analytics').checked,
            marketing: document.getElementById('cookie-marketing').checked
        };

        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        localStorage.setItem('cookieConsent', 'custom');
        
        this.loadCookies(preferences);
        this.closeModal();
        this.removeBanner();
    }

    acceptAll() {
        const preferences = {
            necessary: true,
            functional: true,
            analytics: true,
            marketing: true
        };

        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        localStorage.setItem('cookieConsent', 'all');
        
        this.loadCookies(preferences);
        this.removeBanner();
    }

    rejectAll() {
        const preferences = {
            necessary: true,
            functional: false,
            analytics: false,
            marketing: false
        };

        localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
        localStorage.setItem('cookieConsent', 'necessary');
        
        this.loadCookies(preferences);
        this.removeBanner();
    }

    loadCookies(preferences = null) {
        if (!preferences) {
            preferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
        }

        // Carica solo i cookie per cui è stato dato il consenso
        if (preferences.functional) {
            // Carica cookie funzionali (es: tema)
            console.log('Cookie funzionali abilitati');
        }

        if (preferences.analytics) {
            // Carica cookie analitici (es: Google Analytics)
            console.log('Cookie analitici abilitati');
            // Esempio: this.loadGoogleAnalytics();
        }

        if (preferences.marketing) {
            // Carica cookie di marketing
            console.log('Cookie marketing abilitati');
        }
    }

    removeBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.add('cookie-consent-hidden');
            setTimeout(() => banner.remove(), 300);
        }
    }

    closeModal() {
        const modal = document.getElementById('cookie-preferences-modal');
        if (modal) {
            modal.classList.add('cookie-modal-hidden');
            setTimeout(() => modal.remove(), 300);
        }
    }

    // Metodo pubblico per riaprire le preferenze
    static openPreferences() {
        const consent = new CookieConsent();
        consent.showPreferences();
    }

    // Metodo per resettare le preferenze (utile per sviluppo/debug)
    static resetConsent() {
        localStorage.removeItem('cookieConsent');
        localStorage.removeItem('cookiePreferences');
        window.location.reload();
    }
}

// Inizializza al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    new CookieConsent();
});

// Esponi la funzione per riaprire le preferenze
window.openCookiePreferences = () => CookieConsent.openPreferences();
window.resetCookieConsent = () => CookieConsent.resetConsent();
