# 🎯 DREAMCAR SITE - QUICK REFERENCE CARD

## 📍 Dove Si Trovano Le Cose

```
Root Directory (index.html solo qui!)
│
├── 📄 README.md ........................ Leggi prima questo
├── 📄 DOCS-INDEX.md ................... Indice documentazione
├── 📄 FINAL_CHECKLIST.md ............ Checklist completamento
├── 📄 PROJECT_SUMMARY.md ............ Riepilogo progetto
├── 📄 MIGRATION_NOTES.md ............ Note su restructuring
├── 📄 GITHUB_SETUP_INSTRUCTIONS.md .. Guide setup GitHub
│
├── 📁 pages/ (Tutte le pagine HTML qui)
│   ├── servizi.html
│   ├── preventivo.html
│   ├── chi-siamo.html
│   └── ... 6 altri file
│
├── 📁 docs/ (Tutta la documentazione qui)
│   ├── DOCS-INDEX.md (Indice)
│   ├── README_IT.md / README_EN.md
│   ├── TECHNICAL_IT.md / TECHNICAL_EN.md
│   ├── DEPLOYMENT_IT.md / DEPLOYMENT_EN.md
│   ├── QUICKSTART_IT.md / QUICKSTART_EN.md
│   └── ... 15 altri file
│
├── 📁 css/
│   └── style.css (Tutti gli stili)
│
├── 📁 js/
│   ├── script.js (Main)
│   ├── models.expanded.js (1500+ auto)
│   └── ... altri 5 file
│
├── 📁 Images/
│   ├── Logo/ (3 file)
│   └── BackGround/ (4 file)
│
└── 📁 scripts/
    └── import-carquery.js
```

---

## 🔗 Link Importanti

### Leggere Per Primo
- 📖 **README.md** → Entry point del progetto
- 📋 **FINAL_CHECKLIST.md** → Cosa è stato fatto
- 📍 **GITHUB_SETUP_INSTRUCTIONS.md** → Come pubblicare su GitHub

### Documentazione Tecnica
- 🛠️ **docs/TECHNICAL_IT.md** → Architettura (Italiano)
- 🛠️ **docs/TECHNICAL_EN.md** → Architecture (English)
- 🚀 **docs/DEPLOYMENT_IT.md** → Hosting guide (Italiano)

### Setup Veloce
- ⚡ **docs/QUICKSTART_IT.md** → 5 minuti setup (Italiano)
- ⚡ **docs/QUICKSTART_EN.md** → 5 minutes setup (English)

### Git Workflow
- 🐙 **docs/GITHUB-SETUP_IT.md** → Workflow Git (Italiano)
- 🐙 **docs/GITHUB-SETUP_EN.md** → Git workflow (English)

---

## ⚡ Comandi Velocissimi

### Visualizzare Struttura
```powershell
cd "C:\Users\CAdre\Desktop\PC\Portfolio\DreamCar Site"
ls
```

### Vedere i Commit
```powershell
git log --oneline
```

### Status Repository
```powershell
git status
```

### Preparare per GitHub (PRIMA DI FARE!)
```powershell
# 1. Crea repository su GitHub (https://github.com/new)
# 2. Poi esegui:

git remote add origin https://github.com/USERNAME/dreamcar-site.git
git branch -M main
git push -u origin main
```

---

## 📊 Snapshot Finale

| Elemento | Valore |
|----------|--------|
| **File HTML** | 9 in pages/ |
| **File CSS** | 1 (style.css) |
| **File JS** | 7 |
| **File Markdown** | 23 (21 in docs/ + 2 root) |
| **Brand Auto** | 86 |
| **Modelli Auto** | 1500+ |
| **Repository Commits** | 4 |
| **Git Status** | Clean ✅ |
| **Emoji** | 0 |
| **Pronto per GitHub** | SÌ ✅ |

---

## ✅ Verifiche Fatte

- [x] 9 HTML in pages/
- [x] 21 MD in docs/
- [x] 10 coppie bilingual (IT+EN)
- [x] Nessun emoji rimasto
- [x] Percorsi relativi corretti
- [x] Link verificati
- [x] Git repository inizializzato
- [x] 4 commit effettuati
- [x] .gitignore configurato
- [x] .github/ templates pronti

---

## 🚀 Prossimo Step

### OGGI - Pubblicare su GitHub

1. **Crea account GitHub** (se non hai già)
   - https://github.com/signup

2. **Crea un nuovo repository**
   - https://github.com/new
   - Nome: `dreamcar-site`
   - Seleziona "Public"
   - NON selezionare "Initialize with README"

3. **Esegui questi comandi**
   ```powershell
   cd "C:\Users\CAdre\Desktop\PC\Portfolio\DreamCar Site"
   
   git remote add origin https://github.com/USERNAME/dreamcar-site.git
   git branch -M main
   git push -u origin main
   ```
   *(Sostituisci "USERNAME" con il tuo username GitHub)*

4. **Abilita GitHub Pages**
   - Vai al repository su GitHub
   - Settings → Pages
   - Source: "Deploy from a branch"
   - Branch: main / root
   - Save
   - Aspetta 1-2 minuti

5. **Accedi al sito**
   - https://USERNAME.github.io/dreamcar-site

**Fatto! Il sito è online!** 🎉

---

## 📚 Cosa Contiene Ogni Cartella

### 📁 pages/
Le **9 pagine HTML** del sito (NON la homepage):
- `preventivo.html` - Form preventivo
- `servizi.html` - Servizi offerti
- `chi-siamo.html` - Chi siamo
- `contatti.html` - Contatti
- `cookie-policy.html`
- `privacy-policy.html`
- `termini-di-servizio.html`
- `sitemap.html`
- `curtain-page.html`

**Link:** Accedi da `index.html` → link "pages/servizi.html" etc.

### 📁 docs/
La **documentazione completa** (23 file):
- `DOCS-INDEX.md` - Indice di navigazione
- Pari di file bilingual (10):
  - README, TECHNICAL, DEPLOYMENT, QUICKSTART, GITHUB-SETUP, etc.
  - Ogni categoria ha sia versione IT che EN

**Uso:** Leggi il file che ti serve (IT o EN)

### 📁 css/
Stili del sito:
- `style.css` - Tutti gli stili CSS

### 📁 js/
Codice JavaScript:
- `script.js` - Main script
- `models.expanded.js` - 86 brand + 1500+ modelli auto
- `car-selector.js` - Logica selezione auto
- `quote-form.js` - Gestione form
- E altri 3 file

### 📁 Images/
Media assets:
- `Logo/` - 3 file di logo
- `BackGround/` - 4 immagini background

### 📁 scripts/
Build scripts:
- `import-carquery.js` - Script per importare dati auto

### 📁 .github/
Template GitHub:
- Issue templates
- Pull request template

---

## 🎯 Checklist Rapido

Prima di pubblicare su GitHub, verifica:
- [ ] Hai letto README.md
- [ ] Hai creato account GitHub
- [ ] Hai creato repository (dreamcar-site)
- [ ] Hai fatto i 3 git commands
- [ ] Il repository è online su GitHub
- [ ] GitHub Pages è abilitato
- [ ] Sito è raggiungibile a URL

---

## 💡 Pro Tips

1. **Per aggiungere una nuova pagina:**
   - Crea `pages/nuova-pagina.html`
   - Aggiungi link in `index.html` → `pages/nuova-pagina.html`
   - Usa percorsi relativi: `../css/`, `../js/`, etc.

2. **Per aggiungere nuova documentazione:**
   - Crea `docs/NUOVO_ARGOMENTO_IT.md` (Italiano)
   - Crea `docs/NUOVO_ARGOMENTO_EN.md` (English)
   - Aggiorna `docs/DOCS-INDEX.md` con nuovi link

3. **Per fare un commit:**
   ```powershell
   git add .
   git commit -m "descrizione breve"
   git push
   ```

4. **Per creare un branch:**
   ```powershell
   git checkout -b feature/nome-feature
   # Fai le modifiche
   git push origin feature/nome-feature
   ```

---

## ❓ FAQ Rapida

**D: Dove metto una nuova pagina?**
R: In `pages/` cartella, con percorsi relativi `../`

**D: Dove metto la documentazione?**
R: In `docs/` cartella, sia IT che EN

**D: Dove metto le immagini?**
R: In `Images/` con sottocartelle

**D: Come pubblico su GitHub?**
R: Vedi "Prossimo Step" sopra

**D: Come cambio il sito localmente?**
R: Modifica i file, fai `git add .`, `git commit`, `git push`

**D: Che fine ha fatto il file X?**
R: Probabilmente è in `pages/` o `docs/` - controlla MIGRATION_NOTES.md

**D: Posso usare emoji nei file?**
R: NO - Usa Font Awesome icons nei HTML, mantieni i MD senza emoji

---

## 📞 Help

Se sei perso:
1. Leggi **README.md**
2. Leggi **FINAL_CHECKLIST.md**
3. Leggi **GITHUB_SETUP_INSTRUCTIONS.md**
4. Consulta il file rilevante in **docs/**

---

**Creato:** Gennaio 2026  
**Versione:** 1.0.0  
**Status:** ✅ PRONTO PER GITHUB

**Buona fortuna! 🚀**
