# Architettura Tecnica DreamCar

## Panoramica

DreamCar è un sito web full-stack realizzato con tecnologie web standard (HTML5, CSS3, JavaScript ES6+). Il progetto è organizzato per massimizzare manutenibilità e performance.

## Stack Tecnologico

### Frontend

- **HTML5** - Struttura semantica conforme a W3C
- **CSS3** - Styling modulare con media queries responsive
- **JavaScript ES6+** - Logica modulare con pattern IIFE
- **Font Awesome 6.5.1** - Sistema di icone professionale

### Librerie e Dipendenze

- **Google Fonts** - Font Montserrat (header) e Roboto (body)
- **CarQuery API** - Database modelli auto (via script Node.js)
- **Node.js** - Per script di import dati

### Strumenti di Build (Opzionali)

- **npm** - Package manager per dipendenze
- **Node.js 14+** - Runtime per script server-side

## Architettura Modulare JavaScript

Il codice JavaScript è organizzato in moduli IIFE (Immediately Invoked Function Expression) per evitare collisioni di namespace globale.

### Moduli Principali

#### 1. script.js - Animazioni e Navigazione

```javascript
const AppCore = (function() {
  // Private variables
  const header = document.querySelector('.header');
  let lastScrollTop = 0;
  
  // Public API
  return {
    init: function() { /* initialization */ },
    setupScrollListener: function() { /* scroll handling */ }
  };
})();
```

**Funzionalità:**
- Header intelligente (hide/show durante scroll)
- Scroll reveal per sezioni
- Animazioni entrance/exit
- Gestione menu mobile

**Ottimizzazioni:**
- RequestAnimationFrame per scroll performance
- Passive event listeners per scroll
- Debouncing per resize events

#### 2. car-selector.js - Selettore Marca/Modello

```javascript
const CarSelector = (function() {
  const brandSelect = document.getElementById('brand');
  const modelSelect = document.getElementById('model');
  
  function populateModels(brand) {
    const models = carModels[brand];
    const fragment = document.createDocumentFragment();
    models.forEach(model => {
      const option = document.createElement('option');
      option.value = model;
      option.textContent = model;
      fragment.appendChild(option);
    });
    modelSelect.innerHTML = '';
    modelSelect.appendChild(fragment);
  }
  
  return {
    init: function() { /* initialization */ }
  };
})();
```

**Funzionalità:**
- Caricamento dinamico marche da models.expanded.js
- Aggiornamento modelli al cambio marca
- Ottimizzazione DOM con DocumentFragment

#### 3. quote-form.js - Gestione Form Preventivo

```javascript
const QuoteForm = (function() {
  const form = document.getElementById('repair-quote-form');
  
  function handleSubmit(e) {
    e.preventDefault();
    // Validation and submission logic
  }
  
  return {
    init: function() { /* form initialization */ }
  };
})();
```

**Funzionalità:**
- Validazione form lato client
- Campi condizionali (assicurazione, incidenti)
- Invio dati tramite FormData API

#### 4. models.expanded.js - Database Auto

```javascript
const carModels = {
  "Alfa Romeo": [
    "145", "146", "147", "155", "156", "159", "164", "166",
    "Brera", "Giulia", "Giulietta", "Stelvio", "Tonale"
  ],
  "BMW": [ /* ... 120+ modelli */ ],
  // ... 86 marche totali con ~1000+ modelli
};
```

**Contenuto:**
- 86 marche automobilistiche globali
- ~1500+ modelli differenti
- Copertura mercato mondiale (Asia, Europa, America)
- Includebrande storiche, moderne, elettriche e di lusso

## Struttura CSS

### Organizzazione

```
css/style.css
├── Reset e Base
├── Variabili CSS (:root)
├── Layout Principale
│   ├── Container
│   ├── Grid e Flexbox
│   └── Responsive Breakpoints
├── Componenti
│   ├── Header e Navbar
│   ├── Hero Section
│   ├── Form Styles
│   ├── Cards e Service Items
│   └── Footer
└── Animazioni
    ├── Curtain effect
    ├── Fade-in animations
    └── Scroll reveal
```

### Responsive Design

```css
/* Mobile First Approach */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1440px) { /* Large Desktop */ }
```

## Performance Optimizations

### 1. JavaScript Performance

- **IIFE Modules** - Evita variabili globali
- **Event Delegation** - Un listener per più elementi
- **RequestAnimationFrame** - Sincronizza con 60fps del browser
- **Passive Listeners** - Miglior scroll performance

```javascript
element.addEventListener('scroll', handler, { passive: true });
```

### 2. DOM Manipulation

- **DocumentFragment** - Batch DOM updates
- **innerText vs innerHTML** - Minimizza reflow

```javascript
const fragment = document.createDocumentFragment();
items.forEach(item => fragment.appendChild(createElement(item)));
container.appendChild(fragment);
```

### 3. Asset Loading

- **CSS in head** - Render-blocking (intenzionale)
- **Scripts in footer** - Non bloccano rendering
- **External fonts** - Preconnect per hint

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### 4. CSS Performance

- **GPU Acceleration** - Transform e opacity per animazioni
- **Will-change** - Hint per ottimizzazioni browser
- **Media Query Consolidation** - Riduce specificity

## Data Flow

### Form Submission Flow

```
Form Submit
    ↓
Validazione Client (quote-form.js)
    ↓
Lettura Dati (CarSelector, FormData)
    ↓
Costruzione Payload
    ↓
Invio (fetch/XMLHttpRequest)
    ↓
Response Handling
    ↓
Success/Error Callback
```

### Auto Selector Flow

```
Page Load
    ↓
CarSelector.init()
    ↓
Carica carModels da models.expanded.js
    ↓
Popola select "Marca"
    ↓
User seleziona marca
    ↓
Evento change triggerato
    ↓
CarSelector popula modelli dinamicamente
```

## Browser Compatibility

### Supportati

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- iOS Safari 14+
- Chrome Mobile 90+

### Features Utilizzate

- ES6 (Arrow functions, template literals, destructuring)
- CSS Grid e Flexbox
- CSS Custom Properties (var)
- Fetch API (con fallback XMLHttpRequest)
- FormData API

### Polyfills (se necessari)

Per browser legacy, considera:
- Babel transpiling per ES6+
- CSS Grid fallbacks
- Fetch polyfill

## Processo di Deploy

### Development

1. Modifica locale
2. Test nel browser
3. DevTools console per errori
4. Live Server per testing

### Production

1. Minimizzazione CSS/JS (opzionale)
2. Ottimizzazione immagini
3. Enable gzip compression
4. Setup HTTPS
5. Deploy su host web

## Sicurezza

### Form Handling

- Validazione lato client (UX)
- Validazione server (sicurezza) - implementare backend
- CSRF protection (se backend presente)
- Input sanitization (se backend presente)

### Headers Sicurezza (server-side)

```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'
```

## Logging e Debug

### Console Methods

```javascript
console.log('Info');      // Informazioni generali
console.warn('Warning');  // Avvertimenti
console.error('Error');   // Errori
console.table(data);      // Tabelle
console.group('Group');   // Raggruppamento
```

### Browser DevTools

- Elements - Ispeziona HTML/CSS
- Console - JavaScript errors e logging
- Performance - Profiling e timing
- Network - Request monitoring

## Testing Manuale

### Checklist

- Form validation (campi vuoti, dati invalidi)
- Selettore marca/modello (tutte le marche)
- Responsiveness (mobile, tablet, desktop)
- Animazioni (smooth e senza stuttering)
- Header intelligente (hide/show corretto)
- Menu mobile (toggle e chiusura)
- Link interni (navigazione corretta)

## Manutenzione Futura

### Database Auto

Per aggiornare il database di marche/modelli:

```bash
npm run import-cars
```

Questo aggiorna `models.generated.js` da CarQuery API.

### Aggiornamenti Librerie

- Google Fonts - Verificare nuove versioni
- Font Awesome - Aggiornamento iconset
- Browser compatibility - Testare periodicamente

## Risoluzione Problemi Comuni

### Scroll reveal non funziona

Verificare:
- JavaScript caricato correttamente
- Scroll listener inizializzato
- CSS transform applicato

### Form non valida

Verificare:
- HTML5 validation attributes
- JavaScript validation logic
- Console per errori

### Animazioni stuttering

Verificare:
- RequestAnimationFrame in uso
- GPU acceleration abilitata
- Performance nel DevTools

---

Per documentazione aggiornata, consultare il README e i commenti nel codice.
