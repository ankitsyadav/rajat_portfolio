# Rajat Yadav - Portfolio Website

A production-ready personal portfolio website built with **React + Vite** using pure JavaScript. Showcasing backend development expertise, technical skills, and professional experience.

## 🎯 Features

- **Modern & Clean Design** - Minimal aesthetic with professional developer focus
- **Responsive Design** - Mobile-first approach, fully responsive across all devices
- **Smooth Interactions** - Subtle hover animations and smooth scroll navigation
- **Performance Optimized** - Built with Vite for ultra-fast development and production builds
- **Semantic HTML** - Proper HTML structure with accessibility in mind
- **CSS Modules & Global Styles** - Clean, maintainable styling approach

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Navigation.jsx
│   ├── SectionHeader.jsx
│   └── SubtleBackground.jsx
├── sections/            # Page sections
│   ├── HeroSection.jsx
│   ├── ProjectsSection.jsx
│   ├── ExperienceSection.jsx
│   ├── StackSection.jsx
│   └── ContactSection.jsx
├── data/                # Static portfolio data
│   └── portfolio.js
├── styles/              # Global CSS
│   └── main.css
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Quick Start

### Prerequisites
- Node.js v16+
- npm or yarn

### Installation & Development

```bash
# Navigate to project
cd rajat-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Technologies

- **React 18** - UI with functional components and hooks
- **Vite** - Lightning-fast build tool
- **JavaScript (ES6+)** - Modern JavaScript without TypeScript
- **CSS 3** - Grid, Flexbox, CSS Variables, Animations

## 🎨 Design System

**Color Palette:**
- Accent: #8B5CF6
- Background: #030303 (Elevated: #07070a, Card: #0a0a10)
- Text: #f1f1f6 (Secondary: #8888a0, Muted: #555570)

**Spacing System:** 8px grid (xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 48px, 3xl: 64px)

**Transitions:** Fast: 150ms, Base: 250ms, Slow: 350ms

## 📄 Content Sections

1. **Hero** - Name, title, tagline, tech stack, CTAs, featured project preview
2. **Projects** - Featured project card + project grid with tech stack and links
3. **Experience** - Work history with metrics, highlights, and education
4. **Stack** - Categorized frontend, backend, database, and tools
5. **Contact** - Contact info, roles tags, resume download, LinkedIn/GitHub links

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Build: `npm run build`
2. Deploy the `dist` folder
3. Configure build command: `npm run build`
4. Publish directory: `dist`

### GitHub Pages
1. Update `vite.config.js` with your repo name
2. Build and deploy to `gh-pages` branch

## 🔧 Customization

**Update Portfolio Content:**
Edit `src/data/portfolio.js` to modify:
- Personal information
- Professional summary
- Skills and expertise
- Projects
- Experience and education
- Certifications

**Modify Styling:**
Edit CSS variables in `src/styles/main.css` — update `:root` values for colors, spacing, and transitions.

## 📊 Performance

- Vite Build: ~580ms
- HMR: Instant
- Production Bundle: ~117KB gzipped (JS: 111KB, CSS: 5.5KB)

## ♿ Accessibility

- Semantic HTML
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📮 Contact

**Rajat Yadav**
- Email: rajaty2930@gmail.com
- Phone: +919837837902
- LinkedIn: [linkedin.com/in/rajatydv2930](https://www.linkedin.com/in/rajatydv2930)
- Location: Noida, Uttar Pradesh, India

---

**Built with React + Vite** ⚡
