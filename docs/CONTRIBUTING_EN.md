# Contributing Guide

Thank you for your interest in contributing to DreamCar! This guide will help you get started.

## How to Contribute

### Report Bugs

If you find a bug, please create a GitHub Issue with:

1. **Clear title** - Briefly describe the problem
2. **Description** - Explain what happens vs what should happen
3. **Steps to reproduce** - How to reproduce the bug
4. **Screenshots** - If possible, include screenshots
5. **Environment** - Browser, OS, device

### Suggest Improvements

To suggest new features:

1. Create a GitHub Issue with "enhancement" label
2. Describe the use case and added value
3. Provide examples or mockups if useful
4. Stay open to community feedback

### Submit Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/Dwebcoding/dreamcar-site.git
   cd dreamcar-site
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make your changes**
   - Follow style guidelines (see below)
   - Comment complex code
   - Test your changes

4. **Commit with clear messages**
   ```bash
   git commit -m 'Add YourFeature'
   git commit -m 'Fix: resolve XYZ issue'
   ```

5. **Push to branch**
   ```bash
   git push origin feature/YourFeature
   ```

6. **Open a Pull Request**
   - Describe what changes
   - Reference related issues (#123)
   - Explain the "why" behind changes

## Style Guidelines

### JavaScript

- Use `const` by default, `let` if needed
- Use arrow functions `() => {}`
- Template literals: `` `string ${var}` ``
- Avoid `var`
- Comment complex functions

```javascript
// Good
const calculateTotal = (items) => {
  return items.reduce((sum, item) => sum + item.price, 0);
};

// Bad
var total = 0;
for (var i = 0; i < items.length; i++) {
  total += items[i].price;
}
```

### HTML

- Semantic tags (`<header>`, `<main>`, `<article>`, `<section>`, `<footer>`)
- Alt attributes for images
- Proper indentation (2 spaces)
- Accessibility attributes (aria-label, role)

```html
<!-- Good -->
<main>
  <article>
    <h2>Title</h2>
    <p>Content</p>
  </article>
</main>

<!-- Bad -->
<div id="main">
  <div class="article">
    <h2>Title</h2>
    <p>Content</p>
  </div>
</div>
```

### CSS

- Simple and specific selectors
- CSS Variables for colors/spacing
- Mobile-first approach
- BEM naming (optional)

```css
/* Good */
.button {
  background: var(--primary-color);
  padding: 0.75rem 1.5rem;
}

/* Bad */
button {
  background: #3498db;
  padding: 12px 24px;
}
```

## Testing

Before opening PR:

1. **Test in browser**
   - Desktop (Chrome, Firefox, Safari)
   - Mobile (iOS, Android)
   - Tablet

2. **Verify HTML validity**
   - Use W3C Validator
   - No console errors

3. **Performance**
   - DevTools Lighthouse
   - Smooth animations

## Review Process

1. A maintainer will review your PR
2. May request changes
3. Once approved, will be merged
4. Appears in CHANGELOG.md

## Questions?

If you have questions:
- Open a Discussion on GitHub
- Create an Issue with "question" label
- Contact maintainer via email

## Code of Conduct

We are committed to a welcoming and inclusive environment. Every contributor should:

- Be respectful and constructive
- Accept constructive criticism
- Focus on code, not the person
- Report misconduct to maintainers

---

Thank you for contributing to DreamCar!
