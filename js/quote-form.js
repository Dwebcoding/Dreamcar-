/**
 * Quote Form Module
 * Gestisce il form di preventivo con tutte le sue interazioni dinamiche
 */
(function() {
    'use strict';

    // Configurazione
    const CONFIG = {
        MIN_YEAR: 1960,
        SELECTORS: {
            form: {
                make: '#make',
                model: '#model',
                year: '#year',
                insuranceCompany: '#insurance-company',
                otherInsuranceGroup: '#other-insurance-company-group',
                otherInsuranceInput: '#other-insurance-company',
                accidentsYes: '#accidents-yes',
                accidentsNo: '#accidents-no',
                accidentsDescriptionGroup: '#previous-accidents-description-group',
                accidentsDescription: '#previous-accidents-description'
            }
        },
        PLACEHOLDERS: {
            make: 'Seleziona Marca',
            model: 'Seleziona Modello'
        }
    };

    /**
     * Utility per creare elementi option
     */
    const createOption = (value, text) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        return option;
    };

    /**
     * Popola una select usando DocumentFragment per performance
     */
    const populateSelect = (select, items, placeholder = '', sort = true) => {
        if (!select) return;

        const fragment = document.createDocumentFragment();
        
        if (placeholder) {
            const placeholderOption = createOption('', placeholder);
            placeholderOption.disabled = true;
            placeholderOption.selected = true;
            fragment.appendChild(placeholderOption);
        }

        const sortedItems = sort ? items.sort((a, b) => a.toString().localeCompare(b.toString(), 'it')) : items;
        sortedItems.forEach(item => fragment.appendChild(createOption(item, item)));

        select.innerHTML = '';
        select.appendChild(fragment);
    };

    /**
     * Inizializza i selettori auto (marca e modello)
     */
    const initCarSelectors = () => {
        const makeSelect = document.querySelector(CONFIG.SELECTORS.form.make);
        const modelSelect = document.querySelector(CONFIG.SELECTORS.form.model);

        if (!makeSelect || !modelSelect) return;

        if (typeof carModels === 'undefined') {
            console.warn('carModels non definito');
            return;
        }

        // Popola marche
        const makes = Object.keys(carModels);
        populateSelect(makeSelect, makes, CONFIG.PLACEHOLDERS.make);

        // Handler per cambio marca
        makeSelect.addEventListener('change', () => {
            const selectedMake = makeSelect.value;
            modelSelect.innerHTML = `<option value="" disabled selected>${CONFIG.PLACEHOLDERS.model}</option>`;

            if (selectedMake && carModels[selectedMake]) {
                populateSelect(modelSelect, carModels[selectedMake], CONFIG.PLACEHOLDERS.model);
                modelSelect.disabled = false;
            } else {
                modelSelect.disabled = true;
            }
        });
    };

    /**
     * Inizializza il selettore anno
     */
    const initYearSelector = () => {
        const yearSelect = document.querySelector(CONFIG.SELECTORS.form.year);
        if (!yearSelect) return;

        const currentYear = new Date().getFullYear();
        const years = Array.from(
            { length: currentYear - CONFIG.MIN_YEAR + 1 },
            (_, i) => currentYear - i
        );

        populateSelect(yearSelect, years, '', false);
    };

    /**
     * Gestisce la visibilità del campo "Altra compagnia assicurativa"
     */
    const initInsuranceCompanyToggle = () => {
        const insuranceSelect = document.querySelector(CONFIG.SELECTORS.form.insuranceCompany);
        const otherGroup = document.querySelector(CONFIG.SELECTORS.form.otherInsuranceGroup);
        const otherInput = document.querySelector(CONFIG.SELECTORS.form.otherInsuranceInput);

        if (!insuranceSelect || !otherGroup || !otherInput) return;

        const toggleOtherField = () => {
            const isOther = insuranceSelect.value === 'Altro';
            otherGroup.style.display = isOther ? 'block' : 'none';
            
            if (isOther) {
                otherInput.setAttribute('required', 'true');
            } else {
                otherInput.removeAttribute('required');
                otherInput.value = '';
            }
        };

        insuranceSelect.addEventListener('change', toggleOtherField);
        toggleOtherField(); // Check iniziale
    };

    /**
     * Gestisce la visibilità della descrizione incidenti precedenti
     */
    const initAccidentsToggle = () => {
        const accidentsYes = document.querySelector(CONFIG.SELECTORS.form.accidentsYes);
        const accidentsNo = document.querySelector(CONFIG.SELECTORS.form.accidentsNo);
        const descriptionGroup = document.querySelector(CONFIG.SELECTORS.form.accidentsDescriptionGroup);
        const descriptionInput = document.querySelector(CONFIG.SELECTORS.form.accidentsDescription);

        if (!accidentsYes || !accidentsNo || !descriptionGroup || !descriptionInput) return;

        const toggleDescription = () => {
            const hasAccidents = accidentsYes.checked;
            descriptionGroup.style.display = hasAccidents ? 'block' : 'none';
            
            if (hasAccidents) {
                descriptionInput.setAttribute('required', 'true');
            } else {
                descriptionInput.removeAttribute('required');
                descriptionInput.value = '';
            }
        };

        accidentsYes.addEventListener('change', toggleDescription);
        accidentsNo.addEventListener('change', toggleDescription);
        toggleDescription(); // Check iniziale
    };

    /**
     * Valida il form prima dell'invio
     */
    const validateForm = (form) => {
        const errors = [];

        const getField = (selector) => form.querySelector(selector);

        // Controlla nome
        const name = getField('#name');
        if (name && !name.value.trim()) {
            errors.push('Il nome è obbligatorio');
        }

        // Controlla cognome
        const surname = getField('#surname');
        if (surname && !surname.value.trim()) {
            errors.push('Il cognome è obbligatorio');
        }

        // Controlla email
        const email = getField('#email');
        if (email && !email.value.trim()) {
            errors.push('L\'email è obbligatoria');
        } else if (email && !email.value.includes('@')) {
            errors.push('Email non valida');
        }

        // Controlla telefono
        const phone = getField('#phone');
        if (phone && !phone.value.trim()) {
            errors.push('Il telefono è obbligatorio');
        }

        // Controlla marca
        const make = getField('#make');
        if (make && !make.value) {
            errors.push('La marca del veicolo è obbligatoria');
        }

        // Controlla modello
        const model = getField('#model');
        if (model && !model.value) {
            errors.push('Il modello del veicolo è obbligatorio');
        }

        // Controlla anno
        const year = getField('#year');
        if (year && !year.value) {
            errors.push('L\'anno del veicolo è obbligatorio');
        }

        // Controlla allestimento
        const trim = getField('#trim');
        if (trim && !trim.value) {
            errors.push('L\'allestimento è obbligatorio');
        }

        // Controlla compagnia assicurativa
        const insurance = getField('#insurance-company');
        if (insurance && !insurance.value) {
            errors.push('La compagnia assicurativa è obbligatoria');
        }

        // Controlla sinistri precedenti
        const accidentsYes = getField('#accidents-yes');
        if (accidentsYes && accidentsYes.checked) {
            const accidentsDesc = getField('#previous-accidents-description');
            if (accidentsDesc && !accidentsDesc.value.trim()) {
                errors.push('La descrizione dei sinistri precedenti è obbligatoria');
            }
        }

        // Controlla descrizione danno
        const description = getField('#description');
        if (description && !description.value.trim()) {
            errors.push('La descrizione del danno è obbligatoria');
        }

        // Controlla privacy
        const privacy = form.querySelector('[name="privacy"]');
        if (privacy && !privacy.checked) {
            errors.push('Devi accettare la privacy policy');
        }

        return errors;
    };

    /**
     * Mostra gli errori di validazione
     */
    const showValidationErrors = (errors) => {
        const errorMessage = 'Per favore completa tutti i campi obbligatori:\n\n' + 
                           errors.map((err, i) => `${i + 1}. ${err}`).join('\n');
        alert(errorMessage);
    };

    /**
     * Gestisce il submit del form
     */
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Valida il form
        const validationErrors = validateForm(form);
        if (validationErrors.length > 0) {
            showValidationErrors(validationErrors);
            return;
        }

        try {
            // Disabilita il bottone durante l'invio
            submitButton.disabled = true;
            submitButton.textContent = '⏳ Invio...';

            // Raccoglie i dati del form
            const getValue = (selector) => form.querySelector(selector)?.value || '';
            const attachmentsInput = form.querySelector('#attachments');
            const attachmentsList = attachmentsInput
                ? Array.from(attachmentsInput.files || []).map((file) => file.name).join(', ')
                : '';

            const formData = {
                name: getValue('#name'),
                surname: getValue('#surname'),
                email: getValue('#email'),
                phone: getValue('#phone'),
                make: getValue('#make'),
                model: getValue('#model'),
                year: getValue('#year'),
                trim: getValue('#trim'),
                insuranceCompany: getValue('#insurance-company'),
                previousAccidents: form.querySelector('[name="previous-accidents"]:checked')?.value || 'no',
                accidentsDescription: getValue('#previous-accidents-description'),
                description: getValue('#description'),
                attachments: attachmentsList
            };

            // Controlla se EmailJS è disponibile
            if (typeof window.EmailSender === 'undefined') {
                throw new Error('Modulo EmailSender non disponibile');
            }

            // Invia il preventivo via email
            await window.EmailSender.sendQuote(formData);

            // Mostra messaggio di successo
            submitButton.textContent = 'Preventivo Inviato!';
            submitButton.style.backgroundColor = '#4CAF50';
            
            // Reset del form
            form.reset();

            // Messaggio utente
            alert('Preventivo inviato con successo! Ti contatteremo presto.');

            // Ripristina il bottone dopo 3 secondi
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
            }, 3000);

        } catch (error) {
            console.error('Errore nell\'invio:', error);
            submitButton.textContent = 'Errore nell\'invio';
            submitButton.style.backgroundColor = '#f44336';

            // Messaggio di errore
            alert('Errore nell\'invio del preventivo. Prova di nuovo o contattaci direttamente.');

            // Ripristina il bottone dopo 3 secondi
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                submitButton.style.backgroundColor = '';
            }, 3000);
        }
    };

    /**
     * Collega il gestore di submit del form
     */
    const initFormSubmit = () => {
        const form = document.querySelector('#repair-quote-form');
        if (form) {
            form.addEventListener('submit', handleFormSubmit);
        }
    };

    /**
     * Inizializza tutte le funzionalità del form
     */
    const init = () => {
        initCarSelectors();
        initYearSelector();
        initInsuranceCompanyToggle();
        initAccidentsToggle();
        initFormSubmit();
    };

    // Inizializza quando il DOM è pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();