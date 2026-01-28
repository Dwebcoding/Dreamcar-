# Struttura Progetto DreamCar

```
DreamCar Site/
│
├── index.html                          ← Homepage principale
├── pages/                              ← Cartella pagine HTML
│   ├── preventivo.html                 ← Form preventivo
│   ├── servizi.html                    ← Pagina servizi
│   ├── chi-siamo.html                  ← Chi siamo
│   ├── contatti.html                   ← Contatti
│   ├── cookie-policy.html              ← Policy cookies
│   ├── privacy-policy.html             ← Privacy policy
│   ├── termini-di-servizio.html        ← Termini servizio
│   ├── sitemap.html                    ← Sitemap
│   └── curtain-page.html               ← Pagina curtain animation
│
├── css/
│   └── style.css                       ← Tutti gli stili del sito
│
├── js/
│   ├── script.js                       ← Script principale (ottimizzato)
│   ├── car-selector.js                 ← Selettore auto (ottimizzato)
│   ├── quote-form.js                   ← Form preventivo (ottimizzato)
│   ├── theme.js                        ← Tema
│   ├── models.js                       ← Database modelli (manuale)
│   ├── models.expanded.js              ← Database esteso (86 brand)
│   └── models.generated.js             ← Database generato da API
│
├── scripts/
│   └── import-carquery.js              ← Script import API (ottimizzato)
│
├── Images/
│   ├── Logo/
│   │   ├── Dream Car Logo Nero Rosso.png
│   │   └── Dream Car Logo Bianco.png
│   └── BackGround/
│       └── [immagini background]
│
├── docs/                               ← Documentazione (NEW)
│   ├── README_IT.md                    ← Readme italiano
│   ├── README_EN.md                    ← Readme inglese
│   ├── TECHNICAL_IT.md                 ← Tecnica italiano
│   ├── TECHNICAL_EN.md                 ← Tecnica inglese
│   ├── DEPLOYMENT_IT.md                ← Deploy italiano
│   ├── DEPLOYMENT_EN.md                ← Deploy inglese
│   ├── QUICKSTART_IT.md                ← Quick start italiano
│   ├── QUICKSTART_EN.md                ← Quick start inglese
│   ├── GITHUB-SETUP_IT.md              ← GitHub setup italiano
│   ├── GITHUB-SETUP_EN.md              ← GitHub setup inglese
│   ├── CONTRIBUTING_IT.md              ← Contribuire italiano
│   ├── CONTRIBUTING_EN.md              ← Contribuire inglese
│   ├── OTTIMIZZAZIONI_IT.md            ← Ottimizzazioni italiano
│   └── OTTIMIZZAZIONI_EN.md            ← Ottimizzazioni inglese
│
├── .github/                            ← Configurazione GitHub
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md               ← Template issue bug
│   │   └── feature_request.md          ← Template feature request
│   └── pull_request_template.md        ← Template pull request
│
├── package.json                        ← Configurazione npm (aggiornato)
├── package-lock.json                   ← Lock file dipendenze
│
├── .gitignore                          ← File da ignorare in git
├── .editorconfig                       ← Configurazione editor
│
├── README.md                           ← Documentazione principale
├── TECHNICAL.md                        ← Documentazione tecnica
├── DEPLOYMENT.md                       ← Guida deployment
├── CONTRIBUTING.md                     ← Guida contribuzione
├── QUICKSTART.md                       ← Quick start guide
├── CHANGELOG.md                        ← Storia modifiche
├── OTTIMIZZAZIONI.md                   ← Riepilogo ottimizzazioni
├── LICENSE                             ← Licenza MIT
├── STRUTTURA.md                        ← Questo file
└── node_modules/                       ← Dipendenze npm (gitignored)
```

## Organizzazione Logica

### Frontend (Pagine)
```
pages/
├── preventivo.html              ← Form richiesta preventivo
├── servizi.html                 ← Lista completa servizi
├── chi-siamo.html               ← Storia e team
├── contatti.html                ← Informazioni contatto
└── ... policy files ...          ← Policy pages
```

### Styling
```
css/
└── style.css                    ← Tutti gli stili (mobile-first)
```

### JavaScript
```
js/
├── script.js                    ← Animazioni, navigazione, scroll
├── car-selector.js              ← Logica selezione marca/modello
├── quote-form.js                ← Gestione form preventivo
└── models.*.js                  ← Database auto (86 brand)
```

### Documentazione
```
docs/
├── README_IT.md & README_EN.md
├── TECHNICAL_IT.md & TECHNICAL_EN.md
├── DEPLOYMENT_IT.md & DEPLOYMENT_EN.md
├── QUICKSTART_IT.md & QUICKSTART_EN.md
├── GITHUB-SETUP_IT.md & GITHUB-SETUP_EN.md
├── CONTRIBUTING_IT.md & CONTRIBUTING_EN.md
└── OTTIMIZZAZIONI_IT.md & OTTIMIZZAZIONI_EN.md
```

## File Essenziali

### Minimo indispensabile:
- index.html
- pages/*.html
- css/style.css
- js/script.js
- js/models.expanded.js
- Images/Logo/*.png

### Per form preventivo:
- pages/preventivo.html
- js/quote-form.js
- js/models.*.js

### Per sviluppo:
- package.json
- scripts/import-carquery.js
- docs/README_*.md

## Nuovo: Struttura pages/

Tutti i file HTML eccetto index.html sono ora in pages/:

Benefici:
- Organizzazione migliore
- Separazione logica tra home e altri contenuti
- Struttura scalabile
- Link relativi nei file pages/ (../Images/, ../css/, etc.)

Link da index.html ora puntano a:
```html
<a href="pages/servizi.html">Servizi</a>
<a href="pages/preventivo.html">Preventivo</a>
```

Link dentro pages/ puntano a:
```html
<a href="../index.html">Home</a>
<a href="servizi.html">Servizi</a>
<a href="../Images/Logo/logo.png">Logo</a>
```

## Nuovo: Bilingual Documentation

Tutti i file MD in docs/ hanno versioni EN e IT:

- README_IT.md ← ITALIANO
- README_EN.md ← ENGLISH
- TECHNICAL_IT.md ← ITALIANO
- TECHNICAL_EN.md ← ENGLISH
- ... etc ...

Benefici:
- Accessibilità internazionale
- Supporto per sviluppatori italiani e internazionali
- Professional image
- SEO migliore
