(function() {
    'use strict';

    const getRuntimeConfig = () => window.DREAMCAR_CONFIG || {};

    const trimTrailingSlash = (value) => String(value || '').trim().replace(/\/+$/, '');

    const buildApiUrl = (path) => {
        const baseUrl = trimTrailingSlash(getRuntimeConfig().apiBaseUrl);
        return baseUrl ? `${baseUrl}${path}` : path;
    };

    const sanitizePayload = (formData) => ({
        name: formData.name || '',
        surname: formData.surname || '',
        email: formData.email || '',
        phone: formData.phone || '',
        make: formData.make || '',
        model: formData.model || '',
        year: formData.year || '',
        trim: formData.trim || '',
        insuranceCompany: formData.insuranceCompany || '',
        previousAccidents: formData.previousAccidents || 'no',
        accidentsDescription: formData.accidentsDescription || '',
        description: formData.description || '',
        attachmentsList: formData.attachmentsList || '',
        attachments: Array.isArray(formData.attachments) ? formData.attachments : []
    });

    const isConfigured = () => true;

    const sendQuote = async (formData) => {
        const response = await fetch(buildApiUrl('/api/quotes'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sanitizePayload(formData))
        });

        if (!response.ok) {
            let message = 'Invio preventivo fallito';

            try {
                const errorPayload = await response.json();
                if (errorPayload && errorPayload.error) {
                    message = errorPayload.error;
                }
            } catch (error) {
                console.error('Risposta errore non valida:', error);
            }

            throw new Error(message);
        }

        return response.json();
    };

    window.EmailSender = {
        sendQuote,
        isConfigured,
        config: {
            get apiBaseUrl() {
                return getRuntimeConfig().apiBaseUrl || '';
            }
        }
    };

    console.log('Email Sender API Module caricato');
})();
