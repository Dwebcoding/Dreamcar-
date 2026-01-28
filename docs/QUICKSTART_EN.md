# Quick Start Guide - DreamCar

## Fast Setup (5 minutes)

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/dreamcar-site.git
cd dreamcar-site
```

### 2. Install Dependencies (Optional)
Only if you want to use import scripts:
```bash
npm install
```

### 3. Open the Site

**Option A - Direct**
```bash
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

**Option B - Local Server (Recommended)**
```bash
# With Python
python -m http.server 8000

# With Node.js
http-server

# With VS Code - install "Live Server" extension and click "Go Live"
```

Then open: http://localhost:8000

## Essential Structure

```
DreamCar/
├── index.html          ← Start here
├── preventivo.html     ← Quote form
├── css/style.css       ← All styles
├── js/
│   ├── script.js       ← Animations and nav
│   └── quote-form.js   ← Form logic
└── Images/             ← Logos and images
```

## Common Tasks

### Edit Content
1. Open the HTML file
2. Find and edit the text
3. Save and refresh browser

### Change Colors
In css/style.css:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Add Service
In index.html or servizi.html:
```html
<div class="service-item">
    <h3>Service Name</h3>
    <p>Description</p>
</div>
```

## Common Issues

### Selects not populated?
Check that models.js is loaded:
```html
<script src="js/models.expanded.js"></script>
```

### Animations not working?
Check bottom of HTML:
```html
<script src="js/script.js"></script>
```

### Images not showing?
Use relative paths:
```html
<!-- Correct -->
<img src="Images/Logo/logo.png">
<!-- Avoid -->
<img src="/Images/Logo/logo.png">
```

## Deploy in 2 Minutes

### GitHub Pages
```bash
git add .
git commit -m "Initial commit"
git push origin main

# Go to GitHub → Settings → Pages
# Source: main branch → Save
```

### Netlify Drag & Drop
1. Go to app.netlify.com
2. Drag project folder
3. Site is live!

## Complete Documentation

- README.md - Overview and installation
- TECHNICAL.md - Architecture and API
- DEPLOYMENT.md - Deployment guide for all platforms
- CONTRIBUTING.md - How to contribute
