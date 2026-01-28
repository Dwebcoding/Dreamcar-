# Guida per Contribuire

Grazie per l'interesse nel contribuire a DreamCar! Questa guida ti aiuterà a iniziare.

## Come Contribuire

### Segnalare Bug

Se trovi un bug, per favore crea una GitHub Issue con:

1. **Titolo chiaro** - Descrivi brevemente il problema
2. **Descrizione** - Spiega cosa accade vs cosa dovrebbe accadere
3. **Passi per riprodurre** - Come reprodure il bug
4. **Screenshot** - Se possibile, includi screenshot
5. **Ambiente** - Browser, OS, dispositivo

### Suggerire Miglioramenti

Per suggerire nuove feature:

1. Crea una GitHub Issue con tag "enhancement"
2. Descrivi il caso d'uso e il valore aggiunto
3. Fornisci esempi o mockup se utile
4. Rimani aperto ai feedback della community

### Sottomettere Pull Request

1. **Fork il repository**
   ```bash
   git clone https://github.com/tuousername/dreamcar-site.git
   cd dreamcar-site
   ```

2. **Crea un branch feature**
   ```bash
   git checkout -b feature/TuaFeature
   ```

3. **Fai le tue modifiche**
   - Segui le linee guida di stile (vedi sotto)
   - Commenta il codice complesso
   - Testa le tue modifiche

4. **Commit con messaggi chiari**
   ```bash
   git commit -m 'Aggiungi TuaFeature'
   git commit -m 'Fix: risolvi problema XYZ'
   ```

5. **Push al branch**
   ```bash
   git push origin feature/TuaFeature
   ```

6. **Apri una Pull Request**
   - Descrivi cosa cambia
   - Riferisci issue correlate (#123)
   - Spiega il "perche" dietro le modifiche

## Linee Guida di Stile

### JavaScript

- Usa `const` di default, `let` se necessario
- Usa arrow functions `() => {}`
- Template literals: `` `stringa ${var}` ``
- Evita `var`
- Commenta funzioni complesse

```javascript
// Buono
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// Cattivo
var total = 0;
for (var i = 0; i < items.length; i++) {
  total += items[i].price;
}
```

### HTML

- Tag semantici (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Attributi alt per immagini
- Proper indentation (2 spaces)
- Attributi accessibilità (aria-label, role)

```html
<!-- Buono -->
<main>
  <article>
    <h2>Titolo</h2>
    <p>Contenuto</p>
  </article>
</main>

<!-- Cattivo -->
<div id="main">
  <div class="article">
    <h2>Titolo</h2>
    <p>Contenuto</p>
  </div>
</div>
```

### CSS

- Selettori semplici e specifici
- CSS Variables per colori/spacing
- Mobile-first approach
- BEM naming (opzionale)

```css
/* Buono */
.button {
  background: var(--primary-color);
  padding: 0.75rem 1.5rem;
}

/* Cattivo */
button {
  background: #3498db;
  padding: 12px 24px;
}
```

## Testing

Prima di aprire PR:

1. **Test nel browser**
   - Desktop (Chrome, Firefox, Safari)
   - Mobile (iOS, Android)
   - Tablet

2. **Verifica validità HTML**
   - Usa W3C Validator
   - Niente errori di console

3. **Performance**
   - DevTools Lighthouse
   - Smooth animations

## Processo di Review

1. Un maintainer esaminerà il tuo PR
2. Potrebbe richiedere modifiche
3. Una volta approvato, sarà merged
4. Appare nel CHANGELOG.md

## Domande?

Se hai domande:
- Apri una Discussion su GitHub
- Crea una Issue con tag "question"
- Contatta il maintainer via email

## Codice di Condotta

Siamo impegnati in un ambiente inclusivo e accogliente. Ogni contributor deve:

- Essere rispettoso e costruttivo
- Accettare critiche costruttive
- Focalizzarsi sul codice, non sulla persona
- Segnalare comportamenti scorretti ai maintainer

---

Grazie per il vostro contributo a DreamCar!
