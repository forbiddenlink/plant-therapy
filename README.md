# Plant Therapy

A responsive wellness blog focused on plant care and mental health, built with modern web technologies. This project demonstrates proficiency in Tailwind CSS, responsive design, accessibility, and vanilla JavaScript.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Accessibility](https://img.shields.io/badge/Accessibility-WCAG_2.1-green)

## Features

### User Experience
- **Dark Mode** - System preference detection with manual toggle and localStorage persistence
- **Responsive Design** - Mobile-first approach with seamless tablet and desktop layouts
- **Smooth Animations** - Custom fade-in and slide-up animations for enhanced engagement
- **Smooth Scrolling** - Anchor link navigation with smooth scroll behavior

### Accessibility
- Skip to main content link
- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML5 structure
- High contrast text ratios

### Interactive Elements
- Like button functionality with visual feedback
- Form validation with inline error messages
- Mobile hamburger menu with animation
- Hover effects on cards and images

### SEO Optimized
- Open Graph meta tags for social sharing
- Twitter Card support
- JSON-LD structured data
- Semantic HTML structure
- Descriptive meta tags

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure |
| Tailwind CSS | Utility-first styling |
| Vanilla JavaScript | Interactivity |
| http-server | Development server |

## Project Structure

```
plant-therapy/
├── img/                    # Image assets
│   ├── author_*.jpg       # Author profile images (128x128)
│   ├── post_*.jpg         # Blog post featured images
│   └── logo.png           # Site logo
├── index.html             # Main HTML file
├── favicon.svg            # Site favicon
├── package.json           # Project configuration
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites
- Node.js 14.0.0 or higher
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/plant-therapy.git
   cd plant-therapy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser to the URL shown in the terminal (typically `http://localhost:8080`)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start server and open in browser |
| `npm run serve` | Start server on port 3000 |
| `npm run preview` | Start server with no caching |

## Key Implementation Details

### Tailwind CSS Configuration

Custom theme configuration including:
- Brand colors: primary (#4A7862), secondary (#39574A), accent (#F0F7F4)
- Custom animations: fade-in, slide-up
- Dark mode with class-based toggling

### JavaScript Features

- **Dark Mode Toggle**: Persists preference in localStorage, respects system preference
- **Form Validation**: Client-side validation with inline error messages
- **Like System**: Interactive like buttons with visual feedback
- **Mobile Menu**: Accessible hamburger menu with ARIA support

### Accessibility Compliance

- Skip links for keyboard navigation
- ARIA labels and roles
- Focus management
- Semantic HTML elements
- Color contrast ratios

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome for Android

## Learning Outcomes

This project demonstrates:

1. **Tailwind CSS Mastery** - Utility-first CSS, custom configuration, responsive breakpoints
2. **Responsive Design** - Mobile-first approach, flexible layouts, responsive images
3. **Accessibility** - WCAG compliance, ARIA attributes, keyboard navigation
4. **Modern JavaScript** - ES6+ features, DOM manipulation, event handling
5. **SEO Best Practices** - Meta tags, structured data, semantic HTML
6. **Form UX** - Validation, error handling, success feedback
7. **Dark Mode Implementation** - System preference detection, manual toggle, persistence

## Roadmap

- [ ] Add blog post detail pages
- [ ] Implement backend for form submissions
- [ ] Add search functionality
- [ ] Create user authentication
- [ ] Add comments system

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Material Design Icons](https://fonts.google.com/icons) for SVG icons
- Unsplash for placeholder images

---

Made with care for plants and mental wellness.
