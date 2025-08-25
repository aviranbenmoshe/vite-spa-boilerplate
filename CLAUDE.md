# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains two separate SPA implementations:

1. **Gila Cosmetics SPA** (root level) - A vanilla HTML/CSS/JavaScript single page application for a cosmetics business, inspired by Apple's design aesthetic
2. **Vite SPA Boilerplate** (vite-spa-boilerplate/) - A modern Vite-based boilerplate for single page applications

## Architecture

### Gila Cosmetics SPA (Root Level)
- **Pure vanilla implementation** with no build tools or dependencies
- **Single-file architecture**: `index.html`, `styles.css`, `script.js`
- **Apple-inspired design system** using CSS custom properties for theming
- **Component-based CSS** with BEM-like naming conventions
- **Intersection Observer API** for scroll-based animations
- **Mobile-first responsive design** with CSS Grid and Flexbox

### Design System
- **CSS Variables** defined in `:root` for consistent theming
- **Apple-style typography** using SF Pro Display font family
- **Color palette**: Primary (#1d1d1f), Secondary (#f5f5f7), Accent (#007aff), with cosmetics-specific pink (#ff6b9d) and gold (#d4a574) accents
- **12px border radius** and subtle shadows for Apple-like aesthetics

### JavaScript Architecture
- **Event-driven architecture** with DOMContentLoaded initialization
- **Modular functions** for specific features (navigation, animations, form handling)
- **Intersection Observer** for performance-optimized scroll animations
- **Custom notification system** for user feedback

## Common Development Commands

### Gila Cosmetics SPA (Root Level)
```bash
# View the application (direct file opening)
start index.html

# Run with local HTTP server (Python)
python -m http.server 8000
# Then visit http://localhost:8000

# Run with local HTTP server (Node.js - if http-server installed)
npx http-server . -p 8000
```

### Vite SPA Boilerplate (vite-spa-boilerplate/)
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Format code
npm run format
```

## Key Technical Decisions

### CSS Architecture
- **CSS Custom Properties** for theming instead of preprocessors
- **Mobile-first responsive design** with specific breakpoints at 768px and 480px
- **CSS Grid for layouts** and Flexbox for component alignment
- **Performance-optimized animations** using transform and opacity

### JavaScript Patterns
- **No external dependencies** - vanilla JavaScript for maximum compatibility
- **Progressive enhancement** - graceful degradation for older browsers
- **Memory-efficient event handling** with proper cleanup
- **Smooth scrolling implementation** with offset calculations for fixed navigation

### Responsive Strategy
- **Hamburger navigation** for mobile with slide-in menu
- **Fluid typography** using clamp() for responsive font sizing
- **Grid auto-fit** for responsive product and service cards
- **Touch-friendly interactions** with proper hover states

## File Structure Significance

### Root Level (Gila Cosmetics)
- `index.html` - Complete SPA structure with semantic sections
- `styles.css` - All styling with CSS custom properties and responsive design
- `script.js` - All JavaScript functionality including SPA navigation, animations, and interactions

### Vite Boilerplate
- Standard Vite project structure with modern tooling setup
- ESLint and Prettier configuration for code quality
- Modern ES modules support
- after each code change, make sureto commit and push it