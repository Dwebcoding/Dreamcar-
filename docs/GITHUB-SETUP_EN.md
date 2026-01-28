# Guide: First Push to GitHub

## Prerequisites

1. GitHub account (if not: github.com/signup)
2. Git installed on PC
   - Windows: git-scm.com
   - macOS: brew install git
   - Linux: sudo apt install git

## Initial Git Setup (First Time Only)

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
git config --list
```

## Create Repository on GitHub

1. Go to github.com
2. Click "+" in top right → "New repository"
3. Fill in:
   - Repository name: dreamcar-site
   - Description: Modern website for DreamCar
   - Public or Private
   - Do NOT initialize with README/gitignore/license
4. Click "Create repository"
5. Copy the URL

## Initialize Local Repository

```bash
cd "path/to/DreamCar Site"
git init
git add .
git status
```

## First Commit

```bash
git commit -m "Initial commit - DreamCar site v1.0.0

- Complete project setup
- JavaScript optimizations
- Complete documentation
- GitHub configuration
- Ready for production"
```

## Connect to GitHub

```bash
git remote add origin https://github.com/your-username/dreamcar-site.git
git remote -v
```

## Push to GitHub!

```bash
git push -u origin main
```

## Enable GitHub Pages (Optional)

1. GitHub → Settings → Pages
2. Source: Deploy from branch
3. Branch: main, Folder: /
4. Save

Site live at: https://your-username.github.io/dreamcar-site/

## Future Workflow

### After Making Changes

```bash
git status
git add .
git commit -m "feat: add new section"
git push
```

### Best Practices for Commit Messages

```bash
git commit -m "feat: add new testimonials section"
git commit -m "fix: fix header scroll on Safari"
git commit -m "docs: update README"
git commit -m "style: improve code formatting"
git commit -m "refactor: optimize function"
git commit -m "perf: improve performance"
```

## Complete Checklist

Before pushing:
- [ ] Git configured (name, email)
- [ ] GitHub repository created
- [ ] .gitignore present
- [ ] README.md completed
- [ ] No sensitive files
- [ ] Code tested locally
- [ ] No console.error

After pushing:
- [ ] Repository visible on GitHub
- [ ] README rendered correctly
- [ ] All files present
- [ ] .gitignore working
- [ ] GitHub Pages enabled (optional)
- [ ] Site live and working
