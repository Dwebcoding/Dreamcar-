# DreamCar - Sito Web Officina Auto

![DreamCar Logo](../Images/Logo/Dream%20Car%20Logo%20Nero%20Rosso.png)

Sito web moderno e responsive per DreamCar, officina specializzata in servizi automobilistici di eccellenza. Include sistema di preventivi online, animazioni fluide e interfaccia user-friendly.

## Caratteristiche

- **Design Responsive** - Ottimizzato per desktop, tablet e mobile
- **Animazioni Moderne** - Effetti di transizione fluidi e professionali
- **Sistema Preventivi** - Form interattivo per richieste di preventivo
- **Selettore Auto Avanzato** - Database completo di marche e modelli globali
- **Navigazione Intuitiva** - Menu mobile hamburger e scroll intelligente
- **Performance Ottimizzate** - JavaScript modulare e ottimizzato
- **SEO Friendly** - Struttura HTML semantica
- **86 Marche Auto** - Copertura globale del mercato automobilistico

## Struttura del Progetto

```
DreamCar Site/
├── index.html                      # Homepage
│
├── pages/                          # Pagine HTML
│   ├── preventivo.html            # Form preventivo
│   ├── servizi.html               # Pagina servizi
│   ├── chi-siamo.html             # Chi siamo
│   ├── contatti.html              # Contatti
│   ├── cookie-policy.html         # Policy cookies
│   ├── privacy-policy.html        # Privacy policy
│   ├── termini-di-servizio.html
│   ├── sitemap.html
│   └── curtain-page.html
│
├── css/
│   └── style.css                  # Stili principali
│
├── js/
│   ├── script.js                  # Script principale (animazioni, navigazione)
│   ├── car-selector.js            # Selettore marca/modello
│   ├── quote-form.js              # Gestione form preventivo
│   ├── theme.js                   # Tema
│   ├── models.js                  # Database modelli auto (manuale)
│   ├── models.expanded.js         # Database esteso (86 marche)
│   └── models.generated.js        # Database generato automaticamente
│
├── scripts/
│   └── import-carquery.js         # Script import dati da CarQuery API
│
├── Images/
│   ├── Logo/
│   └── BackGround/
│
├── docs/                          # Documentazione
│   ├── README_IT.md              # Questo file
│   ├── README_EN.md
│   ├── TECHNICAL_IT.md
│   ├── TECHNICAL_EN.md
│   └── [altri file MD]
│
├── package.json                   # Configurazione npm
├── .gitignore                     # File da ignorare in git
└── LICENSE                        # Licenza MIT
```

## Installazione e Setup

### Prerequisiti

- Node.js 14+ (solo per script di import)
- Un browser moderno
- Server web locale (opzionale, es. Live Server per VS Code)

### Setup Base

1. **Clona il repository**
   ```bash
   git clone https://github.com/Dwebcoding/dreamcar-site.git
   cd dreamcar-site
   ```

2. **Installa le dipendenze** (opzionale, solo per script di import)
   ```bash
   npm install
   ```

3. **Avvia il sito**
   - Apri `index.html` direttamente nel browser, oppure
   - Usa un server locale come Live Server (VS Code) o `http-server`

### Import Dati Auto (Opzionale)

Per aggiornare il database di marche e modelli auto:

```bash
npm run import-cars
```

Questo script scarica i dati dall'API CarQuery e genera `js/models.generated.js`.

## Script NPM Disponibili

```json
{
  "import-cars": "node scripts/import-carquery.js"
}
```

## Tecnologie Utilizzate

- **HTML5** - Struttura semantica
- **CSS3** - Styling moderno con Flexbox e Grid
- **JavaScript ES6+** - Logica modulare e ottimizzata
- **Font Awesome 6.5.1** - Icone professionali
- **Google Fonts** - Montserrat e Roboto
- **CarQuery API** - Database modelli auto

## Funzionalità Principali

### Animazioni

- **Curtain Animation** - Effetto tendina all'apertura del sito
- **Scroll Reveal** - Elementi che appaiono durante lo scroll
- **Header Intelligente** - Si nasconde durante lo scroll verso il basso
- **Menu Mobile** - Hamburger menu animato

### Form Preventivo

- Selezione dinamica marca/modello (86 marche globali)
- Campo condizionale per compagnia assicurativa
- Descrizione incidenti precedenti (se applicabile)
- Validazione lato client
- Design user-friendly

### Ottimizzazioni Performance

- **Moduli JavaScript** - IIFE pattern per evitare collisioni globali
- **Event Delegation** - Riduzione listener eventi
- **RequestAnimationFrame** - Scroll performance ottimizzato
- **DocumentFragment** - Manipolazione DOM efficiente
- **Passive Event Listeners** - Migliore performance scroll

## Personalizzazione

### Colori

I colori principali sono definiti in `css/style.css`. Per personalizzare:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Logo

Sostituisci i file in `Images/Logo/`:
- `Dream Car Logo Nero Rosso.png` - Logo navbar
- `Dream Car Logo Bianco.png` - Logo hero/curtain

### Contenuti

Modifica i file HTML per aggiornare:
- Testi e descrizioni
- Informazioni di contatto
- Servizi offerti
- Meta tag SEO

## Browser Supportati

- Chrome (ultimi 2 versioni)
- Firefox (ultimi 2 versioni)
- Safari (ultimi 2 versioni)
- Edge (ultimi 2 versioni)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Licenza

Questo progetto è distribuito sotto licenza MIT. Vedi il file [LICENSE](../LICENSE) per maggiori dettagli.

## Contribuire

Le contribuzioni sono benvenute! Per favore:

1. Fai un fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

Vedi [CONTRIBUTING_IT.md](CONTRIBUTING_IT.md) per linee guida dettagliate.

## Contatti

DreamCar - [Email](mailto:Dwebcoding@gmail.com) - [GitHub](https://github.com/Dwebcoding) - [WhatsApp](https://wa.me/393882566019)

Project Link: [https://github.com/Dwebcoding/dreamcar-site](https://github.com/Dwebcoding/dreamcar-site)

## Ringraziamenti

- [CarQuery API](http://www.carqueryapi.com/) - Database modelli auto
- [Google Fonts](https://fonts.google.com/) - Font Montserrat e Roboto
- [Font Awesome](https://fontawesome.com/) - Icone professionali
- Tutti i contributors del progetto

---

Se questo progetto ti è stato utile, lascia una stella su GitHub!
