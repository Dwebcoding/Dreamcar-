# 🚀 Quick Start - Modifica Footer Centralizzato

## Come modificare il footer su TUTTE le pagine in 1 minuto

### Apri questo file: `js/footer.js`

Cerca la sezione `FOOTER_CONFIG` e modifica i valori:

```javascript
const FOOTER_CONFIG = {
    // 👤 DATI AZIENDALI - Sostituisci con i dati reali
    companyName: 'DreamCar di [Nome Titolare]',  // ← Inserisci il nome del titolare
    address: 'Via [Indirizzo], [CAP] [Città] ([Provincia])',  // ← Indirizzo completo
    email: 'info@dreamcar.it',
    phone: '+39XXXXXXXXXX',  // ← Formato: +39XXXXXXXXXX
    phoneFormatted: '+39 XXX XXX XXXX',  // ← Formato leggibile
    whatsapp: '39XXXXXXXXXX',  // ← Numero WhatsApp (senza +)
    piva: '12345678901',  // ← Partita IVA reale
    rea: 'XX-XXXXXX',  // ← Numero REA
    capitaleSociale: '[XXXX],00',  // ← Capitale sociale
    
    // 📱 SOCIAL MEDIA - Inserisci i link reali
    socialLinks: {
        facebook: 'https://www.facebook.com/dreamcar',
        instagram: 'https://www.instagram.com/dreamcar',
        whatsapp: '39XXXXXXXXXX'  // ← Stesso del WhatsApp aziendale sopra
    },
    
    // 👨‍💻 DEVELOPER - Dati dello sviluppatore (già configurati)
    developerLinks: {
        email: 'Dwebcoding@gmail.com',
        github: 'https://github.com/Dwebcoding',
        whatsapp: '393882566019'
    },
    
    // 🕐 ORARI - Modifica gli orari di apertura
    schedule: {
        weekdays: 'Lun - Ven: 08:30 - 12:30 | 14:30 - 19:00',
        saturday: 'Sabato: 09:00 - 13:00',
        sunday: 'Domenica: Chiuso'
    }
};
```

### Salva e Fine!

Il footer verrà aggiornato automaticamente su **TUTTE** le pagine del sito:
- ✅ index.html
- ✅ servizi.html
- ✅ chi-siamo.html
- ✅ contatti.html
- ✅ preventivo.html
- ✅ sitemap.html
- ✅ privacy-policy.html
- ✅ cookie-policy.html
- ✅ termini-di-servizio.html

---

## 📚 Documentazione Completa

Per informazioni dettagliate, consulta: **FOOTER_DINAMICO.md**

---

**Sistema Footer Dinamico v1.0** | Creato da Dwebcoding
