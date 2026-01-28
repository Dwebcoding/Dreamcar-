# Guida Deploy - DreamCar

Questa guida spiega come fare il deploy del sito DreamCar su varie piattaforme.

## Checklist Pre-Deployment

Prima di fare il deploy:

- [ ] Testa il sito localmente
- [ ] Verifica che tutte le immagini siano ottimizzate
- [ ] Controlla che non ci siano console errors
- [ ] Testa su più browser
- [ ] Verifica responsività mobile
- [ ] Aggiorna models.generated.js se necessario
- [ ] Committato tutto su Git
- [ ] Versione aggiornata in package.json

## Opzioni di Hosting

### 1. GitHub Pages (Gratuito)

Pros: Gratuito, facile, integrazione Git
Cons: Solo siti pubblici

Setup:
1. Push il codice su GitHub
2. GitHub → Settings → Pages
3. Source: Deploy from branch
4. Branch: main, folder: /
5. Sito disponibile su: https://username.github.io/repo-name/

Custom Domain (Opzionale):
```bash
echo "www.dreamcar.it" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 2. Netlify (Gratuito)

Pros: CI/CD automatico, HTTPS gratis, form handling
Cons: Limite bandwidth (100GB/mese)

Deploy con Git:
1. netlify.com
2. New site from Git
3. Connetti GitHub repository
4. Build command: (lascia vuoto)
5. Publish directory: /
6. Deploy site

### 3. Vercel (Gratuito)

Pros: Super veloce, HTTPS automatico, preview per PR
Cons: Limite di progetti

Deploy con Git:
1. vercel.com
2. Import Git Repository
3. Seleziona il repository
4. Framework Preset: Other
5. Deploy

### 4. Firebase Hosting

Pros: Google infrastructure
Cons: Setup più complesso

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy --only hosting
```

## Configurazioni Post-Deploy

### Analytics - Google Analytics

Aggiungi in <head> di tutte le pagine:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO - robots.txt

Crea robots.txt nella root:
```
User-agent: *
Allow: /
Sitemap: https://www.dreamcar.it/sitemap.xml
```

## Performance

### Ottimizzazione Immagini

```bash
npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant
imagemin Images/**/*.{jpg,png} --out-dir=Images-optimized --plugin=mozjpeg --plugin=pngquant
```

### Minificazione (Opzionale)

CSS:
```bash
npm install -g clean-css-cli
cleancss -o css/style.min.css css/style.css
```

JavaScript:
```bash
npm install -g terser
terser js/script.js -o js/script.min.js
```

Aggiorna HTML:
```html
<link rel="stylesheet" href="css/style.min.css">
<script src="js/script.min.js"></script>
```
