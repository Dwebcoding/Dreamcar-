# Guida: Primo Push su GitHub

## Pre-requisiti

1. Account GitHub (se non ce l'hai: github.com/signup)
2. Git installato sul PC
   - Windows: git-scm.com
   - macOS: brew install git
   - Linux: sudo apt install git

## Setup Iniziale Git (Solo Prima Volta)

```bash
git config --global user.name "Tuo Nome"
git config --global user.email "tua-email@example.com"
git config --list
```

## Crea Repository su GitHub

1. Vai su github.com
2. Clicca sul "+" in alto a destra → "New repository"
3. Compila:
   - Repository name: dreamcar-site
   - Description: Sito web moderno per DreamCar
   - Public o Private
   - NON inizializzare con README/gitignore/license
4. Clicca "Create repository"
5. Copia l'URL

## Inizializza Repository Locale

```bash
cd "C:\Users\CAdre\Desktop\PC\Portfolio\DreamCar Site"
git init
git add .
git status
```

## Primo Commit

```bash
git commit -m "Initial commit - DreamCar site v1.0.0

- Setup progetto completo
- Ottimizzazioni JavaScript
- Documentazione completa
- Configurazione GitHub
- Ready for production"
```

## Collega a GitHub

```bash
git remote add origin https://github.com/tuo-username/dreamcar-site.git
git remote -v
```

## Push su GitHub!

```bash
git push -u origin main
```

## Abilita GitHub Pages (Opzionale)

1. GitHub → Settings → Pages
2. Source: Deploy from branch
3. Branch: main, Folder: /
4. Save

Sito live su: https://tuo-username.github.io/dreamcar-site/

## Workflow Futuro

### Dopo Modifiche

```bash
git status
git add .
git commit -m "feat: aggiungi nuova sezione"
git push
```

### Best Practices Commit Messages

```bash
git commit -m "feat: aggiungi nuova sezione testimonials"
git commit -m "fix: correggi scroll header su Safari"
git commit -m "docs: aggiorna README"
git commit -m "style: migliora formattazione codice"
git commit -m "refactor: ottimizza funzione"
git commit -m "perf: migliora performance"
```

## Checklist Completa

Prima del push:
- [ ] Git configurato (nome, email)
- [ ] Repository GitHub creato
- [ ] .gitignore presente
- [ ] README.md compilato
- [ ] Nessun file sensibile
- [ ] Codice testato localmente
- [ ] Nessun console.error

Dopo il push:
- [ ] Repository visibile su GitHub
- [ ] README renderizzato correttamente
- [ ] Tutti i file presenti
- [ ] .gitignore funziona
- [ ] GitHub Pages abilitato (opzionale)
- [ ] Sito live e funzionante
