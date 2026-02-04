(function() {
    'use strict';

    // CONFIGURAZIONE - DA PERSONALIZZARE
    const EMAILJS_CONFIG = {
        SERVICE_ID: 'service_kw4sq2i', // Es: gmail
        TEMPLATE_ID: 'template_Dreamcar', // Es: template_xxx
        PUBLIC_KEY: 'WmW6GZu0mgbFXIXgw', // Es: abc123xyz
        SHOP_EMAIL: 'd.webcoding@gmail.com' // Email dell'autofficina
    };

    /**
     * Verifica se EmailJS è configurato correttamente
     */
    const isConfigured = () => {
        return !!(EMAILJS_CONFIG.PUBLIC_KEY && 
                  EMAILJS_CONFIG.SERVICE_ID && 
                  EMAILJS_CONFIG.TEMPLATE_ID &&
                  EMAILJS_CONFIG.SHOP_EMAIL);
    };

    /**
     * Formatta i dati del form in un oggetto per l'email
     */
    const formatQuoteData = (formData) => {
        // Limita la lunghezza dei campi lunghi per stare sotto 50KB
        const truncate = (str, maxLength = 500) => {
            return str && str.length > maxLength 
                ? str.substring(0, maxLength) + '...' 
                : str;
        };

        // Prepara il messaggio con gli allegati
        const attachmentInfo = formData.attachments && formData.attachments !== 'Nessun allegato'
            ? `\n\n📎 FILE ALLEGATI:\n${formData.attachments}`
            : '';

        return {
            customer_name: `${formData.name || ''} ${formData.surname || ''}`.trim() || 'N/A',
            customer_email: formData.email || 'N/A',
            customer_phone: formData.phone || 'N/A',
            vehicle_make: formData.make || 'N/A',
            vehicle_model: formData.model || 'N/A',
            vehicle_year: formData.year || 'N/A',
            vehicle_trim: formData.trim || 'N/A',
            insurance_company: formData.insuranceCompany || 'N/A',
            previous_accidents: formData.previousAccidents || 'No',
            accidents_description: truncate(formData.accidentsDescription, 200) || 'N/A',
            damage_description: truncate(formData.description, 500) + attachmentInfo || 'N/A',
            submission_date: new Date().toLocaleDateString('it-IT', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        };
    };

    /**
     * Invia il preventivo via email
     * @param {Object} formData - Dati del form
     * @returns {Promise}
     */
    const sendQuote = async (formData) => {
        // Verifica configurazione
        if (!isConfigured()) {
            console.warn('EmailJS non è configurato. Contatta l\'amministratore.');
            return Promise.reject('EmailJS non configurato');
        }

        // Carica EmailJS se non ancora caricato
        if (typeof emailjs === 'undefined') {
            console.log('Caricamento EmailJS...');
            await loadEmailJS();
        }

        try {
            // Inizializza EmailJS
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

            // Prepara i dati
            const quoteData = formatQuoteData(formData);

            // Aggiunge l'email dell'autofficina come destinatario
            quoteData.to_email = EMAILJS_CONFIG.SHOP_EMAIL;

            console.log('Invio email preventivo...', quoteData);

            // Invia l'email
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                quoteData
            );

            console.log('Email inviata con successo!', response);
            return response;

        } catch (error) {
            console.error('Errore nell\'invio dell\'email:', error);
            throw error;
        }
    };

    /**
     * Carica la libreria EmailJS dinamicamente
     */
    const loadEmailJS = () => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    };

    // Espone l'oggetto globale
    window.EmailSender = {
        sendQuote: sendQuote,
        isConfigured: isConfigured,
        config: EMAILJS_CONFIG
    };

    console.log('Email Sender Module caricato');

})();
