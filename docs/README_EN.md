# DreamCar - Auto Repair Shop Website

![DreamCar Logo](../Images/Logo/Dream%20Car%20Logo%20Nero%20Rosso.png)

Modern and responsive website for DreamCar, an automotive repair shop specializing in excellence services. Includes online quote system, fluid animations, and user-friendly interface.

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Modern Animations** - Fluid and professional transition effects
- **Quote System** - Interactive form for quote requests
- **Advanced Car Selector** - Complete global brands and models database
- **Intuitive Navigation** - Mobile hamburger menu and intelligent scrolling
- **Optimized Performance** - Modular and optimized JavaScript
- **SEO Friendly** - Semantic HTML structure
- **86 Auto Brands** - Global automotive market coverage

## Project Structure

```
DreamCar Site/
├── index.html                      # Homepage
│
├── pages/                          # HTML Pages
│   ├── quote.html                 # Quote form
│   ├── services.html              # Services page
│   ├── about.html                 # About us
│   ├── contact.html               # Contact
│   ├── cookie-policy.html         # Cookie policy
│   ├── privacy-policy.html        # Privacy policy
│   ├── terms-of-service.html
│   ├── sitemap.html
│   └── curtain-page.html
│
├── css/
│   └── style.css                  # Main styles
│
├── js/
│   ├── script.js                  # Main script (animations, navigation)
│   ├── car-selector.js            # Brand/model selector
│   ├── quote-form.js              # Quote form management
│   ├── theme.js                   # Theme
│   ├── models.js                  # Car models database (manual)
│   ├── models.expanded.js         # Extended database (86 brands)
│   └── models.generated.js        # Auto-generated database
│
├── scripts/
│   └── import-carquery.js         # CarQuery API import script
│
├── Images/
│   ├── Logo/
│   └── BackGround/
│
├── docs/                          # Documentation
│   ├── README_EN.md              # This file
│   ├── README_IT.md
│   ├── TECHNICAL_EN.md
│   ├── TECHNICAL_IT.md
│   └── [other MD files]
│
├── package.json                   # NPM configuration
├── .gitignore                     # Git ignore file
└── LICENSE                        # MIT License
```

## Installation and Setup

### Prerequisites

- Node.js 14+ (only for import scripts)
- A modern browser
- Local web server (optional, e.g. Live Server for VS Code)

### Basic Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dwebcoding/dreamcar-site.git
   cd dreamcar-site
   ```

2. **Install dependencies** (optional, only for import scripts)
   ```bash
   npm install
   ```

3. **Start the website**
   - Open `index.html` directly in your browser, or
   - Use a local server like Live Server (VS Code) or `http-server`

### Import Car Data (Optional)

To update the database of car brands and models:

```bash
npm run import-cars
```

This script downloads data from the CarQuery API and generates `js/models.generated.js`.

## Available NPM Scripts

```json
{
  "import-cars": "node scripts/import-carquery.js"
}
```

## Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript ES6+** - Modular and optimized logic
- **Font Awesome 6.5.1** - Professional icons
- **Google Fonts** - Montserrat and Roboto
- **CarQuery API** - Car models database

## Key Features

### Animations

- **Curtain Animation** - Curtain effect on site opening
- **Scroll Reveal** - Elements appearing during scroll
- **Intelligent Header** - Hides during downward scroll
- **Mobile Menu** - Animated hamburger menu

### Quote Form

- Dynamic brand/model selection (86 global brands)
- Conditional field for insurance company
- Previous incidents description (if applicable)
- Client-side validation
- User-friendly design

### Performance Optimizations

- **JavaScript Modules** - IIFE pattern to avoid global collisions
- **Event Delegation** - Reduced event listeners
- **RequestAnimationFrame** - Optimized scroll performance
- **DocumentFragment** - Efficient DOM manipulation
- **Passive Event Listeners** - Better scroll performance

## Customization

### Colors

Main colors are defined in `css/style.css`. To customize:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
}
```

### Logo

Replace files in `Images/Logo/`:
- `Dream Car Logo Nero Rosso.png` - Navbar logo
- `Dream Car Logo Bianco.png` - Hero/curtain logo

### Content

Modify HTML files to update:
- Texts and descriptions
- Contact information
- Services offered
- SEO meta tags

## Supported Browsers

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is distributed under the MIT License. See the [LICENSE](../LICENSE) file for more details.

## Contributing

Contributions are welcome! Please:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING_EN.md](CONTRIBUTING_EN.md) for detailed guidelines.

## Contact

DreamCar - [Email](mailto:Dwebcoding@gmail.com) - [GitHub](https://github.com/Dwebcoding) - [WhatsApp](https://wa.me/393882566019)

Project Link: [https://github.com/Dwebcoding/dreamcar-site](https://github.com/Dwebcoding/dreamcar-site)

## Acknowledgments

- [CarQuery API](http://www.carqueryapi.com/) - Car models database
- [Google Fonts](https://fonts.google.com/) - Montserrat and Roboto fonts
- [Font Awesome](https://fontawesome.com/) - Professional icons
- All project contributors

---

If this project has been useful to you, please leave a star on GitHub!
