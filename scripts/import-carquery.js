/**
 * CarQuery API Importer
 * Importa marche e modelli di auto dall'API CarQuery e genera il file models.generated.js
 * 
 * Requisiti:
 *  - Node.js 14+
 *  - npm install node-fetch@2
 * 
 * Esecuzione:
 *  node scripts/import-carquery.js
 */

const fetch = require('node-fetch');
const fs = require('fs').promises;
const path = require('path');

// Configurazione
const CONFIG = {
    API_BASE_URL: 'https://www.carqueryapi.com/api/0.3/',
    OUTPUT_FILE: path.resolve(__dirname, '..', 'js', 'models.generated.js'),
    REQUEST_DELAY: 500, // ms tra richieste per non sovraccaricare l'API
    MAX_RETRIES: 3
};

/**
 * Rimuove il wrapper JSONP dalla risposta
 * @param {string} text - Risposta dell'API in formato JSONP
 * @returns {Object} Oggetto JSON parsato
 */
const parseJSONP = (text) => {
    try {
        return JSON.parse(text.slice(2, -2));
    } catch (error) {
        throw new Error(`Errore parsing JSONP: ${error.message}`);
    }
};

/**
 * Esegue una richiesta con retry automatico
 * @param {string} url - URL da richiedere
 * @param {number} retries - Numero di tentativi rimanenti
 * @returns {Promise<Object>}
 */
const fetchWithRetry = async (url, retries = CONFIG.MAX_RETRIES) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        const text = await response.text();
        return parseJSONP(text);
    } catch (error) {
        if (retries > 0) {
            console.log(`  Tentativo fallito, riprovo... (${retries} rimanenti)`);
            await new Promise(resolve => setTimeout(resolve, CONFIG.REQUEST_DELAY * 2));
            return fetchWithRetry(url, retries - 1);
        }
        throw error;
    }
};

/**
 * Ottiene tutte le marche disponibili
 * @returns {Promise<Array>}
 */
const getMakes = async () => {
    const url = `${CONFIG.API_BASE_URL}?callback=?&cmd=getMakes`;
    const data = await fetchWithRetry(url);
    return data.Makes || [];
};

/**
 * Ottiene i modelli per una specifica marca
 * @param {string} makeId - ID della marca
 * @returns {Promise<Array>}
 */
const getModels = async (makeId) => {
    const url = `${CONFIG.API_BASE_URL}?callback=?&cmd=getModels&make=${makeId}`;
    const data = await fetchWithRetry(url);
    return data.Models || [];
};

/**
 * Genera il file JavaScript con i dati
 * @param {Object} carModels - Oggetto con marca -> array di modelli
 */
const generateFile = async (carModels) => {
    const header = `/*
 * Auto-generated from CarQuery API
 * Generated: ${new Date().toISOString()}
 * Total makes: ${Object.keys(carModels).length}
 * 
 * DO NOT EDIT MANUALLY - Use scripts/import-carquery.js to regenerate
 */\n\n`;

    const content = header + 
        'const carModels = ' + JSON.stringify(carModels, null, 2) + ';\n\n' +
        '// Export per Node.js (se disponibile)\n' +
        'if (typeof module !== "undefined" && module.exports) {\n' +
        '    module.exports = carModels;\n' +
        '}\n';

    await fs.writeFile(CONFIG.OUTPUT_FILE, content, 'utf8');
};

/**
 * Funzione principale
 */
const run = async () => {
    console.log('CarQuery API Importer\n');
    console.log('Scaricamento marche...');

    const makes = await getMakes();
    console.log(`Trovate ${makes.length} marche\n`);

    const carModels = {};
    let processed = 0;

    for (const make of makes) {
        const makeName = make.make_display;
        processed++;
        
        process.stdout.write(`[${processed}/${makes.length}] ${makeName}...`);

        try {
            const models = await getModels(make.make_id);
            
            if (models && models.length > 0) {
                // Rimuovi duplicati e ordina alfabeticamente
                carModels[makeName] = [...new Set(models.map(m => m.model_name))]
                    .sort((a, b) => a.localeCompare(b, 'it'));
                
                console.log(` ${carModels[makeName].length} modelli`);
            } else {
                console.log(' Nessun modello trovato');
            }

            // Pausa per evitare rate limiting
            await new Promise(resolve => setTimeout(resolve, CONFIG.REQUEST_DELAY));
        } catch (error) {
            console.log(` Errore: ${error.message}`);
        }
    }

    console.log('\nGenerazione file...');
    await generateFile(carModels);

    console.log(`File generato: ${CONFIG.OUTPUT_FILE}`);
    console.log(`Marche importate: ${Object.keys(carModels).length}`);
    
    const totalModels = Object.values(carModels).reduce((sum, models) => sum + models.length, 0);
    console.log(`Modelli totali: ${totalModels}\n`);
    console.log('Importazione completata con successo!');
};

// Esecuzione con gestione errori
run().catch(error => {
    console.error('\nErrore fatale:', error.message);
    console.error(error.stack);
    process.exit(1);
});