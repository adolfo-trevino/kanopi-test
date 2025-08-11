# Kanopi Theme

A modern WordPress theme built with Gutenberg blocks and webpack, based on the [Positivus Landing Page Design](https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design) Figma template.

## Technical Overview

This theme leverages WordPress's block editor (Gutenberg) to create a flexible, component-based landing page experience. The build system uses webpack to process JavaScript and SCSS files, ensuring optimized production assets.

### Key Technical Decisions

**1. Gutenberg Block Architecture**
- **Decision**: Built the entire landing page using custom Gutenberg blocks instead of traditional PHP templates
- **Rationale**: Provides better content editing flexibility, component reusability, and future-proofs the theme for WordPress's block-first direction
- **Implementation**: Each section of the landing page (hero, features, testimonials, etc.) is a custom block with its own JavaScript and CSS

**2. Webpack Build System**
- **Decision**: Implemented webpack for asset compilation and optimization
- **Rationale**: Enables modern JavaScript (ES6+), SCSS preprocessing, code splitting, and asset optimization
- **Benefits**: 
  - Tree shaking for smaller bundle sizes
  - Hot module replacement during development
  - Automatic CSS and JS minification for production
  - Source maps for easier debugging

**3. SCSS Architecture**
- **Decision**: Used SCSS for styling with a modular approach


## Development Workflow

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- WordPress development environment

### Setup Instructions

1. **Clone and Install Dependencies**
   ```bash
   git clone [repository-url]
   cd kanopi-theme
   npm install
   ```

2. **Development Build** - Standard build process for development:
   ```bash
   npm run build
   ```
   This command:
   - Compiles SCSS to CSS
   - Transpiles modern JavaScript
   - Generates source maps
   - Creates development-ready assets in `/build`



## Assumptions

- **Production Readiness**: The webpack build process generates production-ready files with proper optimization and minification
- **WordPress Compatibility**: Built for WordPress 6.0+ with full Gutenberg support
- **Modern Browser Support**: Targets ES6-compatible browsers (IE11+ with polyfills)
- **Performance**: Assumes users want optimized assets with minimal HTTP requests

## Current Limitations & Future Improvements

### With More Time, I Would Implement:

**1. Pixel-Perfect Design Fidelity**
- Implement precise spacing and typography matching the Figma design
- Add responsive breakpoint refinements
- Include custom icon fonts or SVG sprite system

**2. Enhanced WYSIWYG Experience**
- Create more sophisticated block controls in the WordPress editor
- Add live preview functionality within the block editor
- Implement drag-and-drop reordering for layout blocks

**3. Animation & Interaction Layer**
- Add CSS animations and transitions for improved user experience
- Implement scroll-triggered animations using Intersection Observer API
- Include micro-interactions for buttons and form elements

**4. Advanced Features**
- Dynamic content loading for testimonials/case studies
- Contact form integration with validation
- SEO optimization with structured data
- Performance monitoring and analytics integration

## Resources

- [Figma Design Template](https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design)
- [WordPress Block Editor Handbook](https://developer.wordpress.org/block-editor/)
- [Webpack Documentation](https://webpack.js.org/)# kanopi-test
