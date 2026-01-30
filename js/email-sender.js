/**
 * Email Sender Module
 * Invia preventivi via email usando EmailJS
 * 
 * SETUP REQUIRED:
 * 1. Registrati su https://www.emailjs.com (gratis)
 * 2. Crea un Email Service (Gmail o altro provider)
 * 3. Crea un Email Template con le variabili
 * 4. Aggiorna le costanti EMAILJS_* qui sotto
 */

(function() {
    'use strict';

    // ⚙️ CONFIGURAZIONE - DA PERSONALIZZARE
    const EMAILJS_CONFIG = {
        SERVICE_ID: 'gmail', // Es: gmail
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
            accidents_description: formData.accidentsDescription || 'N/A',
            damage_description: formData.description || 'N/A',
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
            console.warn('⚠️ EmailJS non è configurato. Contatta l\'amministratore.');
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
