# Deployment Guide - DreamCar

This guide explains how to deploy the DreamCar website to various platforms.

## Pre-Deployment Checklist

Before deploying:

- [ ] Test the site locally
- [ ] Verify all images are optimized
- [ ] Check for console errors
- [ ] Test on multiple browsers
- [ ] Verify mobile responsiveness
- [ ] Update models.generated.js if necessary
- [ ] Commit everything to Git
- [ ] Update version in package.json

## Hosting Options

### 1. GitHub Pages (Free)

Pros: Free, easy, Git integration
Cons: Public repositories only

Setup:
1. Push code to GitHub
2. GitHub → Settings → Pages
3. Source: Deploy from branch
4. Branch: main, folder: /
5. Site available at: https://username.github.io/repo-name/

Custom Domain (Optional):
```bash
echo "www.dreamcar.it" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 2. Netlify (Free)

Pros: Automatic CI/CD, free HTTPS, form handling
Cons: Bandwidth limit (100GB/month)

Deploy with Git:
1. netlify.com
2. New site from Git
3. Connect GitHub repository
4. Build command: (leave empty)
5. Publish directory: /
6. Deploy site

### 3. Vercel (Free)

Pros: Very fast, automatic HTTPS, PR previews
Cons: Project limits

Deploy with Git:
1. vercel.com
2. Import Git Repository
3. Select the repository
4. Framework Preset: Other
5. Deploy

### 4. Firebase Hosting

Pros: Google infrastructure
Cons: More complex setup

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy --only hosting
```

## Post-Deployment Configuration

### Analytics - Google Analytics

Add to <head> of all pages:
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

Create robots.txt in root:
```
User-agent: *
Allow: /
Sitemap: https://www.dreamcar.it/sitemap.xml
```

## Performance

### Image Optimization

```bash
npm install -g imagemin-cli imagemin-mozjpeg imagemin-pngquant
imagemin Images/**/*.{jpg,png} --out-dir=Images-optimized --plugin=mozjpeg --plugin=pngquant
```

### Minification (Optional)

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

Update HTML:
```html
<link rel="stylesheet" href="css/style.min.css">
<script src="js/script.min.js"></script>
```
