# Changelog - DreamCar

Tutte le modifiche significative al progetto saranno documentate in questo file.

Il formato è basato su Keep a Changelog (https://keepachangelog.com/it/1.0.0/),
e questo progetto aderisce al Semantic Versioning (https://semver.org/lang/it/).

## [1.0.0] - 2026-01-28

### Aggiunto
- Sito web completo con design responsive
- Animazione curtain all'apertura
- Menu mobile hamburger
- Form preventivo interattivo
- Selettore dinamico marca/modello auto
- Script di import da CarQuery API
- Documentazione completa (README, CONTRIBUTING)
- Configurazione GitHub (.gitignore, LICENSE)
- Ottimizzazioni performance JavaScript
- Scroll reveal animations
- Header intelligente con scroll behavior
- Pagine: Home, Servizi, Chi Siamo, Preventivo, Contatti
- Pagine legali: Privacy, Cookie Policy, Termini di Servizio
- Sitemap

### Modificato
- Refactoring completo JavaScript con pattern ES6+
- Struttura modulare IIFE per tutti gli script
- JSDoc per documentazione funzioni
- Miglioramento UX form preventivo
- Configurazione package.json ottimizzata

### Ottimizzato
- Performance scroll con requestAnimationFrame
- Manipolazione DOM con DocumentFragment
- Event listeners passivi per scroll
- Riduzione duplicazioni codice
- Validazione lato client migliorata

### Tecnico
- Node.js 14+ come requisito minimo
- Supporto browser moderni (ultimi 2 versioni)
- Integrazione CarQuery API
- Design mobile-first responsive
- Accessibilità migliorata con ARIA

---

## Formato

Tipi di modifiche:
- **Aggiunto** - nuove funzionalità
- **Modificato** - modifiche a funzionalità esistenti
- **Deprecato** - funzionalità che verranno rimosse
- **Rimosso** - funzionalità rimosse
- **Corretto** - bug fix
- **Sicurezza** - vulnerabilità corrette
- **Ottimizzato** - miglioramenti performance
