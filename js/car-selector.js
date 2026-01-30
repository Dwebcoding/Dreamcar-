/**
 * Car Selector Module
 * Gestisce la selezione di marca, modello e anno per i veicoli
 * @requires carModels - oggetto con la struttura { marca: [modelli] }
 */
(function() {
    'use strict';

    // Configurazione
    const CONFIG = {
        MIN_YEAR: 1960,
        SELECTORS: {
            make: '#make',
            model: '#model',
            year: '#year'
        },
        PLACEHOLDERS: {
            make: 'Seleziona Marca',
            model: 'Seleziona Modello',
            year: 'Seleziona Anno'
        }
    };

    /**
     * Crea un elemento option per le select
     * @param {string} value - Valore dell'opzione
     * @param {string} text - Testo visualizzato
     * @returns {HTMLOptionElement}
     */
    const createOption = (value, text) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        return option;
    };

    /**
     * Popola una select con opzioni
     * @param {HTMLSelectElement} select - Elemento select da popolare
     * @param {Array} items - Array di valori da inserire
     * @param {string} placeholder - Testo placeholder
     */
    const populateSelect = (select, items, placeholder) => {
        const fragment = document.createDocumentFragment();
        fragment.appendChild(createOption('', placeholder));
        fragment.firstChild.disabled = true;
        fragment.firstChild.selected = true;
        
        items.forEach(item => fragment.appendChild(createOption(item, item)));
        select.innerHTML = '';
        select.appendChild(fragment);
    };

    /**
     * Inizializza il selettore di auto
     */
    const initCarSelector = () => {
        // Verifica disponibilità di carModels
        if (typeof carModels === 'undefined') {
            console.warn('carModels non è definito. Attendo caricamento...');
            // Riprova dopo 100ms per permettere il caricamento del file models
            setTimeout(initCarSelector, 100);
            return;
        }

        const makeSelect = document.querySelector(CONFIG.SELECTORS.make);
        const modelSelect = document.querySelector(CONFIG.SELECTORS.model);
        const yearSelect = document.querySelector(CONFIG.SELECTORS.year);

        if (!makeSelect || !modelSelect || !yearSelect) {
            console.warn('Elementi select non trovati');
            return;
        }

        console.log('✓ Database auto caricato:', Object.keys(carModels).length, 'marche');

        // Popola marche
        const makes = Object.keys(carModels).sort((a, b) => a.localeCompare(b, 'it'));
        populateSelect(makeSelect, makes, CONFIG.PLACEHOLDERS.make);

        // Popola anni
        const currentYear = new Date().getFullYear();
        const years = Array.from(
            { length: currentYear - CONFIG.MIN_YEAR + 1 }, 
            (_, i) => currentYear - i
        );
        populateSelect(yearSelect, years, CONFIG.PLACEHOLDERS.year);

        // Handler cambio marca
        makeSelect.addEventListener('change', (e) => {
            const selectedMake = e.target.value;
            
            if (selectedMake && carModels[selectedMake]) {
                const models = [...carModels[selectedMake]].sort((a, b) => a.localeCompare(b, 'it'));
                populateSelect(modelSelect, models, CONFIG.PLACEHOLDERS.model);
                modelSelect.disabled = false;
            } else {
                modelSelect.innerHTML = `<option value="" disabled selected>${CONFIG.PLACEHOLDERS.model}</option>`;
                modelSelect.disabled = true;
            }
        });

        // Imposta stato iniziale
        modelSelect.disabled = true;
    };

    // Inizializza quando il DOM è pronto
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCarSelector);
    } else {
        initCarSelector();
    }
})();