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
        if (typeof carModels === 'undefined') {
            console.warn('carModels non definito');
            return;
        }

        const makeSelect = document.querySelector(CONFIG.SELECTORS.form.make);
        const modelSelect = document.querySelector(CONFIG.SELECTORS.form.model);

        if (!makeSelect || !modelSelect) return;

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
     * Inizializza tutte le funzionalità del form
     */
    const init = () => {
        initCarSelectors();
        initYearSelector();
        initInsuranceCompanyToggle();
        initAccidentsToggle();
    };

    // Inizializza quando il DOM è pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();