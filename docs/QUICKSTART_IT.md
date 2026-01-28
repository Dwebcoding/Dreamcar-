# Guida Quick Start - DreamCar

## Setup Rapido (5 minuti)

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/dreamcar-site.git
cd dreamcar-site
```

### 2. Installa Dipendenze (Opzionale)
Solo se vuoi usare gli script di import:
```bash
npm install
```

### 3. Apri il Sito

**Opzione A - Diretto**
```bash
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**Opzione B - Server Locale (Consigliato)**
```bash
# Con Python
python -m http.server 8000

# Con Node.js
http-server

# Con VS Code - installa "Live Server" e clicca "Go Live"
```

Poi apri: http://localhost:8000

## Struttura Essenziale

```
DreamCar/
├── index.html          ← Inizia da qui
├── preventivo.html     ← Form preventivo
├── css/style.css       ← Tutti gli stili
├── js/
│   ├── script.js       ← Animazioni e nav
│   └── quote-form.js   ← Logica form
└── Images/             ← Loghi e immagini
```

## Task Comuni

### Modificare Contenuti
1. Apri file HTML della pagina
2. Cerca il testo da cambiare
3. Salva e ricarica browser

### Cambiare Colori
In css/style.css:
```css
:root {
  --primary-color: #tu-colore;
  --secondary-color: #tu-colore;
}
```

### Aggiungere Servizio
In index.html o servizi.html:
```html
<div class="service-item">
    <h3>Nome Servizio</h3>
    <p>Descrizione</p>
</div>
```

## Problemi Comuni

### Select non popolate?
Verifica che models.js sia caricato:
```html
<script src="js/models.expanded.js"></script>
```

### Animazioni non funzionano?
Verifica in fondo a HTML:
```html
<script src="js/script.js"></script>
```

### Immagini non mostrate?
Usa path relativi:
```html
<!-- Corretto -->
<img src="Images/Logo/logo.png">
<!-- Evita -->
<img src="/Images/Logo/logo.png">
```

## Deploy in 2 Minuti

### GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main

# Vai su GitHub → Settings → Pages
# Source: main branch → Save
```

### Netlify Drag & Drop
1. Vai su app.netlify.com
2. Trascina cartella progetto
3. Sito live!

## Documentazione Completa

- README.md - Overview e installazione
- TECHNICAL.md - Architettura e API
- DEPLOYMENT.md - Guida deploy su tutte le piattaforme
- CONTRIBUTING.md - Come contribuire
