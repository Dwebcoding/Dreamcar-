# Sistema di Gestione Cookie e Pagine Legali - DreamCar

## 📋 Panoramica

Il sito DreamCar è stato aggiornato per essere **completamente conforme** alle normative italiane ed europee in materia di privacy e protezione dei dati personali:

- ✅ **GDPR** (Regolamento UE 2016/679)
- ✅ **Codice Privacy** (D.Lgs. 196/2003 modificato dal D.Lgs. 101/2018)
- ✅ **Linee Guida del Garante Privacy**
- ✅ **Codice del Consumo** (D.Lgs. 206/2005)

## 🎯 Implementazioni Completate

### 1. Banner Cookie Consent (GDPR Compliant)

#### Funzionalità
- **Banner al primo accesso** con 3 opzioni:
  - ✅ Accetta tutti i cookie
  - ❌ Rifiuta cookie non necessari
  - ⚙️ Personalizza per categoria

- **Modale di personalizzazione** con 4 categorie:
  - 🔧 **Cookie Tecnici Necessari** (sempre attivi, non richiedono consenso)
  - ⚡ **Cookie Funzionali** (richiedono consenso)
  - 📊 **Cookie Analitici** (richiedono consenso)
  - 📢 **Cookie Marketing** (richiedono consenso)

- **Gestione delle preferenze**:
  - Link "Gestisci Cookie" in tutti i footer
  - Preferenze salvate in localStorage
  - Possibilità di modificare in qualsiasi momento

#### File Creati
```
js/cookie-consent.js      - Logica del banner e gestione consensi
css/cookie-consent.css    - Stili completi del banner e modale
```

### 2. Privacy Policy (100% Conforme GDPR)

**File**: `pages/privacy-policy.html`

#### Contenuti Completi
1. **Titolare del Trattamento** - con tutti i dati di contatto
2. **Responsabile della Protezione dei Dati (DPO)**
3. **Tipologie di Dati Raccolti** - dettagliati
4. **Base Giuridica e Finalità** (art. 6 GDPR):
   - Finalità contrattuali (art. 6.1.b)
   - Obblighi di legge (art. 6.1.c)
   - Consenso (art. 6.1.a)
   - Legittimo interesse (art. 6.1.f)
5. **Modalità del Trattamento** - misure di sicurezza
6. **Periodo di Conservazione** - specifico per tipo di dato
7. **Destinatari dei Dati** - completo
8. **Diritti dell'Interessato** (artt. 15-22 GDPR):
   - Accesso, rettifica, cancellazione
   - Portabilità, limitazione, opposizione
   - Revoca consenso, reclamo
9. **Autorità Garante** - contatti completi
10. **Minori** - protezione dati minori di 16 anni

### 3. Cookie Policy (Dettagliata e Conforme)

**File**: `pages/cookie-policy.html`

#### Contenuti Completi
1. **Introduzione normativa** - GDPR, Codice Privacy, Linee Guida
2. **Definizione Cookie** - tipologie per durata e provenienza
3. **Tabelle Cookie Utilizzati**:
   - Cookie tecnici necessari
   - Cookie funzionali
   - Cookie analitici (Google Analytics)
   - Cookie marketing
4. **Gestione Preferenze** - multiple modalità
5. **Conseguenze del Rifiuto**
6. **Cookie di Terze Parti** - con link alle privacy policy
7. **Trasferimento Dati Extra-UE**
8. **Diritti dell'Utente**

**Caratteristiche**:
- ✅ Tabelle complete con nome, scopo, durata
- ✅ Link diretti alle privacy policy di terze parti
- ✅ Pulsante "Gestisci Preferenze Cookie" integrato
- ✅ Informazioni su opt-out Google Analytics

### 4. Termini e Condizioni di Servizio

**File**: `pages/termini-di-servizio.html`

#### Contenuti Completi
1. **Premessa** - dati titolare
2. **Definizioni** - chiari e precisi
3. **Accettazione dei Termini**
4. **Servizi Offerti** - descrizione dettagliata
5. **Preventivi e Contratti**:
   - Procedura richiesta preventivo
   - Conclusione contratto
   - **Diritto di Recesso** (14 giorni - Codice del Consumo)
6. **Obblighi dell'Utente**
7. **Proprietà Intellettuale** - tutela marchi e copyright
8. **Limitazione di Responsabilità**:
   - Disponibilità sito
   - Contenuti e informazioni
   - Link esterni
   - Esclusioni di legge
9. **Prezzi e Pagamenti**
10. **Garanzie e Reclami** - procedura completa
11. **Trattamento Dati Personali** - rimandi a Privacy/Cookie Policy
12. **Modifiche ai Termini**
13. **Forza Maggiore**
14. **Risoluzione Controversie**:
    - Conciliazione bonaria
    - Piattaforma ODR UE
    - Foro competente
15. **Disposizioni Finali**

## 🎨 Stili e UX

### Design
- **Dark Theme** coerente con il sito
- **Colori brand** (rosso #c8102e)
- **Animazioni smooth**:
  - SlideUp/SlideDown per il banner
  - FadeIn/FadeOut per il modale
- **Responsive** - ottimizzato per mobile, tablet, desktop

### Elementi UI
- **Banner Cookie**: bottom sticky, non invasivo
- **Toggle Switch**: intuitivi e accessibili
- **Tabelle**: leggibili e responsive
- **Box Contatti**: evidenziati nelle pagine legali
- **Link "Gestisci Cookie"**: in tutti i footer

## 📱 Responsive Design

```css
Desktop (>768px):  Layout completo, banner orizzontale
Tablet (≤768px):   Layout adattato, banner verticale
Mobile (≤480px):   Layout ottimizzato, font ridotti
```

## 🔧 Integrazione Tecnica

### File Modificati
Tutti i file HTML del sito sono stati aggiornati con:

```html
<!-- Nel <head> -->
<link rel="stylesheet" href="css/cookie-consent.css">

<!-- Prima di </body> -->
<script src="js/cookie-consent.js"></script>
```

### Pagine Aggiornate
- ✅ index.html
- ✅ pages/servizi.html
- ✅ pages/chi-siamo.html
- ✅ pages/contatti.html
- ✅ pages/preventivo.html
- ✅ pages/sitemap.html
- ✅ pages/curtain-page.html
- ✅ pages/privacy-policy.html
- ✅ pages/cookie-policy.html
- ✅ pages/termini-di-servizio.html

## 🚀 Funzionalità JavaScript

### API Pubblica

```javascript
// Aprire le preferenze cookie
openCookiePreferences();

// Reset consensi (sviluppo/debug)
resetCookieConsent();
```

### LocalStorage
```javascript
cookieConsent: 'all' | 'custom' | 'necessary'
cookiePreferences: {
  necessary: true,
  functional: boolean,
  analytics: boolean,
  marketing: boolean
}
```

## ⚠️ Note Importanti

### Da Personalizzare
Prima di andare in produzione, aggiornare:

1. **Privacy Policy**:
   - Nome completo titolare
   - Indirizzo sede legale completo
   - Email privacy/PEC
   - Numero di telefono

2. **Cookie Policy**:
   - Aggiungere eventuali cookie aggiuntivi
   - Aggiornare lista servizi terze parti

3. **Termini di Servizio**:
   - Nome completo titolare
   - Indirizzo completo
   - Foro competente (città)

### Dati Esempio da Sostituire
```
[Nome Titolare] → Nome reale
[Indirizzo completo] → Indirizzo sede legale
[Numero di telefono] → Numero reale
P.IVA: 12345678901 → P.IVA reale
```

## 📊 Conformità Normativa

### GDPR - Checklist
- ✅ Informativa privacy completa (art. 13-14)
- ✅ Base giuridica per ogni trattamento (art. 6)
- ✅ Diritti dell'interessato (art. 15-22)
- ✅ Conservazione dati limitata (art. 5)
- ✅ Misure di sicurezza (art. 32)
- ✅ Cookie solo con consenso (tranne tecnici)
- ✅ Possibilità di revoca consenso
- ✅ Informazioni Garante Privacy

### Linee Guida Garante Cookie
- ✅ Banner al primo accesso
- ✅ Informativa completa prima del consenso
- ✅ Consenso preventivo (no cookie wall)
- ✅ Consenso granulare per categoria
- ✅ Cookie tecnici senza consenso
- ✅ Prova del consenso (localStorage)
- ✅ Possibilità di modifica preferenze

### Codice del Consumo
- ✅ Diritto di recesso 14 giorni (art. 52)
- ✅ Informazioni precontrattuali
- ✅ Procedura reclami
- ✅ Piattaforma ODR UE

## 🛠️ Manutenzione

### Aggiornamenti Periodici
- Verificare modifiche normative
- Aggiornare date ultimo aggiornamento
- Controllare link privacy policy terze parti
- Testare funzionamento banner cookie

### Test Consigliati
```javascript
// Console del browser
localStorage.clear(); // Reset completo
location.reload();     // Ricarica per vedere banner
```

## 📞 Supporto

Per domande tecniche sull'implementazione:
- GitHub: [@Dwebcoding](https://github.com/Dwebcoding)
- Email: Dwebcoding@gmail.com

## 📄 Licenza

Il codice è proprietario di DreamCar.
L'implementazione tecnica è stata realizzata da Dwebcoding.

---

**Data implementazione**: 28 gennaio 2026
**Versione**: 1.0
**Stato**: ✅ Pronto per produzione (dopo personalizzazione dati)
