# Footer Dinamico - Documentazione

## 📋 Panoramica

Il footer del sito DreamCar è stato centralizzato in un unico file JavaScript (`js/footer.js`) per facilitare la manutenzione e garantire la coerenza su tutte le pagine.

## 🎯 Vantaggi

✅ **Manutenzione Centralizzata**: Modifica il footer una sola volta in `js/footer.js` invece di aggiornare 9 file HTML  
✅ **Coerenza Garantita**: Stesso footer su tutte le pagine automaticamente  
✅ **Facile Aggiornamento**: Cambia dati aziendali, social links, orari in un unico posto  
✅ **Percorsi Automatici**: Il sistema gestisce automaticamente i percorsi relativi (../ per sottocartelle)

## 📂 Struttura File

```
DreamCar Site/
├── js/
│   └── footer.js          ← FILE PRINCIPALE DA MODIFICARE
├── index.html             ← Footer dinamico
└── pages/
    ├── servizi.html       ← Footer dinamico
    ├── chi-siamo.html     ← Footer dinamico
    ├── contatti.html      ← Footer dinamico
    ├── preventivo.html    ← Footer dinamico
    ├── sitemap.html       ← Footer dinamico
    ├── privacy-policy.html    ← Footer dinamico
    ├── cookie-policy.html     ← Footer dinamico
    └── termini-di-servizio.html ← Footer dinamico
```

## 🔧 Come Modificare il Footer

### 1. Apri `js/footer.js`

Tutto il contenuto del footer è definito nell'oggetto `FOOTER_CONFIG`:

```javascript
const FOOTER_CONFIG = {
    companyName: 'DreamCar di [Nome Titolare]',
    address: 'Via [Indirizzo], [CAP] [Città] ([Provincia])',
    email: 'info@dreamcar.it',
    phone: '+39XXXXXXXXXX',
    phoneFormatted: '+39 XXX XXX XXXX',
    whatsapp: '39XXXXXXXXXX',
    piva: '12345678901',
    rea: 'XX-XXXXXX',
    capitaleSociale: '[XXXX],00',
    
    socialLinks: {
        facebook: 'https://www.facebook.com/dreamcar',
        instagram: 'https://www.instagram.com/dreamcar',
        whatsapp: '39XXXXXXXXXX'
    },
    
    developerLinks: {
        email: 'Dwebcoding@gmail.com',
        github: 'https://github.com/Dwebcoding',
        whatsapp: '393882566019'
    },
    
    schedule: {
        weekdays: 'Lun - Ven: 08:30 - 12:30 | 14:30 - 19:00',
        saturday: 'Sabato: 09:00 - 13:00',
        sunday: 'Domenica: Chiuso'
    }
};
```

### 2. Modifica i Valori

#### Dati Aziendali
```javascript
companyName: 'DreamCar di Mario Rossi',  // ← Cambia il nome
address: 'Via Roma 123, 00100 Roma (RM)',  // ← Cambia indirizzo
email: 'info@dreamcar.it',
phone: '+393331234567',
phoneFormatted: '+39 333 123 4567',
piva: '01234567890',  // ← P.IVA reale
rea: 'RM-123456',     // ← REA reale
```

#### Social Media
```javascript
socialLinks: {
    facebook: 'https://www.facebook.com/tuapagina',
    instagram: 'https://www.instagram.com/tuoaccount',
    whatsapp: '393331234567'  // ← Numero WhatsApp aziendale
}
```

#### Orari
```javascript
schedule: {
    weekdays: 'Lun - Ven: 09:00 - 13:00 | 15:00 - 19:00',
    saturday: 'Sabato: 09:00 - 12:00',
    sunday: 'Domenica: Chiuso'
}
```

### 3. Salva e Ricarica

- Salva `js/footer.js`
- Ricarica qualsiasi pagina del sito
- Il footer sarà aggiornato su TUTTE le pagine automaticamente

## 🎨 Personalizzazioni Avanzate

### Aggiungere/Rimuovere Social Media

Per aggiungere un nuovo social (es. TikTok):

1. Aggiungi alla configurazione:
```javascript
socialLinks: {
    facebook: 'https://www.facebook.com/dreamcar',
    instagram: 'https://www.instagram.com/dreamcar',
    whatsapp: '39XXXXXXXXXX',
    tiktok: 'https://www.tiktok.com/@dreamcar'  // ← Nuovo
}
```

2. Aggiungi il link HTML nella funzione `generateFooterHTML()`:
```javascript
<a href="${config.socialLinks.tiktok}" target="_blank" rel="noopener noreferrer" title="TikTok" class="social-link">
    <i class="fab fa-tiktok"></i>
</a>
```

### Modificare la Struttura HTML

Cerca la funzione `generateFooterHTML()` in `js/footer.js` e modifica l'HTML restituito.

## 🔄 Struttura HTML nelle Pagine

Ogni pagina ora ha un footer minimalista:

```html
<footer class="footer">
    <div class="container" id="dynamic-footer">
        <!-- Footer caricato dinamicamente da js/footer.js -->
    </div>
</footer>

<script src="../js/script.js"></script>
<script src="../js/footer.js"></script>  ← Carica il footer
<script src="../js/cookie-consent.js"></script>
```

## ⚙️ Come Funziona

1. **Caricamento Pagina**: Quando l'utente apre una pagina, `footer.js` viene caricato
2. **Rilevamento Posizione**: Lo script rileva automaticamente se la pagina è in root o in `pages/`
3. **Generazione HTML**: Crea l'HTML del footer con i percorsi corretti
4. **Inserimento DOM**: Inserisce il footer nel container `#dynamic-footer`

## 📱 Responsive & SEO

- ✅ Il footer è completamente responsive (CSS invariato)
- ✅ I link sono indicizzabili dai motori di ricerca
- ✅ Le icone Font Awesome si caricano normalmente
- ✅ Tutti gli eventi (onclick per cookie) funzionano

## 🛠️ Troubleshooting

### Il footer non si carica

1. Verifica che `footer.js` sia incluso:
```html
<script src="../js/footer.js"></script>
```

2. Controlla la console del browser (F12) per errori JavaScript

3. Verifica che esista l'elemento:
```html
<div class="container" id="dynamic-footer">
```

### I percorsi delle immagini sono sbagliati

La funzione `getRelativePath()` gestisce automaticamente i percorsi. Se hai problemi:
- Pagine in root (`index.html`): usa `./Images/...`
- Pagine in `pages/`: usa `../Images/...`

## 📝 Best Practices

1. **Backup Prima di Modificare**: Fai sempre un backup di `footer.js` prima di modifiche importanti
2. **Testa su Tutte le Pagine**: Dopo modifiche, controlla almeno 2-3 pagine diverse
3. **Valida l'HTML**: Assicurati che l'HTML generato sia valido
4. **Mantieni la Configurazione**: Aggiorna solo `FOOTER_CONFIG`, non modificare la logica a meno che necessario

## 🚀 Aggiornamenti Futuri

Per aggiungere nuove pagine al sito:

1. Crea la nuova pagina HTML
2. Includi il footer dinamico:
```html
<footer class="footer">
    <div class="container" id="dynamic-footer"></div>
</footer>
<script src="../js/footer.js"></script>
```
3. Il footer si caricherà automaticamente!

---

**Creato il**: 28 Gennaio 2026  
**Autore**: Dwebcoding  
**Versione Footer Dinamico**: 1.0
