# DreamCar Project Structure

```
DreamCar Site/
│
├── index.html                          ← Main homepage
├── pages/                              ← HTML pages folder
│   ├── preventivo.html                 ← Quote form
│   ├── servizi.html                    ← Services page
│   ├── chi-siamo.html                  ← About page
│   ├── contatti.html                   ← Contact page
│   ├── cookie-policy.html              ← Cookie policy
│   ├── privacy-policy.html             ← Privacy policy
│   ├── termini-di-servizio.html        ← Terms of service
│   ├── sitemap.html                    ← Sitemap
│   └── curtain-page.html               ← Curtain animation page
│
├── css/
│   └── style.css                       ← All site styles
│
├── js/
│   ├── script.js                       ← Main script (optimized)
│   ├── car-selector.js                 ← Car selector (optimized)
│   ├── quote-form.js                   ← Quote form (optimized)
│   ├── theme.js                        ← Theme
│   ├── models.js                       ← Models database (manual)
│   ├── models.expanded.js              ← Extended database (86 brands)
│   └── models.generated.js             ← API-generated database
│
├── scripts/
│   └── import-carquery.js              ← API import script (optimized)
│
├── Images/
│   ├── Logo/
│   │   ├── Dream Car Logo Nero Rosso.png
│   │   └── Dream Car Logo Bianco.png
│   └── BackGround/
│       └── [background images]
│
├── docs/                               ← Documentation (NEW)
│   ├── README_IT.md                    ← Italian readme
│   ├── README_EN.md                    ← English readme
│   ├── TECHNICAL_IT.md                 ← Italian technical
│   ├── TECHNICAL_EN.md                 ← English technical
│   ├── DEPLOYMENT_IT.md                ← Italian deployment
│   ├── DEPLOYMENT_EN.md                ← English deployment
│   ├── QUICKSTART_IT.md                ← Italian quick start
│   ├── QUICKSTART_EN.md                ← English quick start
│   ├── GITHUB-SETUP_IT.md              ← Italian GitHub setup
│   ├── GITHUB-SETUP_EN.md              ← English GitHub setup
│   ├── CONTRIBUTING_IT.md              ← Italian contributing
│   ├── CONTRIBUTING_EN.md              ← English contributing
│   ├── OTTIMIZZAZIONI_IT.md            ← Italian optimizations
│   └── OTTIMIZZAZIONI_EN.md            ← English optimizations
│
├── .github/                            ← GitHub configuration
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md               ← Bug issue template
│   │   └── feature_request.md          ← Feature request template
│   └── pull_request_template.md        ← Pull request template
│
├── package.json                        ← npm configuration (updated)
├── package-lock.json                   ← Dependencies lock file
│
├── .gitignore                          ← Git ignore file
├── .editorconfig                       ← Editor configuration
│
├── README.md                           ← Main documentation
├── TECHNICAL.md                        ← Technical documentation
├── DEPLOYMENT.md                       ← Deployment guide
├── CONTRIBUTING.md                     ← Contributing guide
├── QUICKSTART.md                       ← Quick start guide
├── CHANGELOG.md                        ← Change history
├── OTTIMIZZAZIONI.md                   ← Optimizations summary
├── LICENSE                             ← MIT License
├── STRUTTURA.md                        ← This file (Italian)
└── node_modules/                       ← npm dependencies (gitignored)
```

## Logical Organization

### Frontend (Pages)
```
pages/
├── preventivo.html              ← Quote form
├── servizi.html                 ← Services list
├── chi-siamo.html               ← About page
├── contatti.html                ← Contact information
└── ... policy files ...          ← Policy pages
```

### Styling
```
css/
└── style.css                    ← All styles (mobile-first)
```

### JavaScript
```
js/
├── script.js                    ← Animations, navigation, scroll
├── car-selector.js              ← Brand/model selection logic
├── quote-form.js                ← Quote form handling
└── models.*.js                  ← Car database (86 brands)
```

### Documentation
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

## Essential Files

### Minimum required:
- index.html
- pages/*.html
- css/style.css
- js/script.js
- js/models.expanded.js
- Images/Logo/*.png

### For quote form:
- pages/preventivo.html
- js/quote-form.js
- js/models.*.js

### For development:
- package.json
- scripts/import-carquery.js
- docs/README_*.md

## New: pages/ Structure

All HTML files except index.html are now in pages/:

Benefits:
- Better organization
- Logical separation between home and other content
- Scalable structure
- Relative links in pages/ files (../Images/, ../css/, etc.)

Links from index.html now point to:
```html
<a href="pages/servizi.html">Services</a>
<a href="pages/preventivo.html">Quote</a>
```

Links inside pages/ point to:
```html
<a href="../index.html">Home</a>
<a href="servizi.html">Services</a>
<a href="../Images/Logo/logo.png">Logo</a>
```

## New: Bilingual Documentation

All MD files in docs/ have EN and IT versions:

- README_IT.md ← ITALIAN
- README_EN.md ← ENGLISH
- TECHNICAL_IT.md ← ITALIAN
- TECHNICAL_EN.md ← ENGLISH
- ... etc ...

Benefits:
- International accessibility
- Support for Italian and international developers
- Professional image
- Better SEO
