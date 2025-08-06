# Kanopi Theme - Production Deployment Guide

This document explains how to build and deploy the theme for production.

## Development Workflow

1. **Development Build**: During development, use the standard build process:
   ```bash
   npm run build
   ```

2. **Development Server**: For active development with hot reloading:
   ```bash
   npm start
   ```

## Production Deployment

To create a production-ready build that excludes development files:

1. **Create Production Build**:
   ```bash
   npm run build:prod
   ```

2. **Package for Deployment**:
   ```bash
   npm run package
   ```

This creates a `dist/` directory containing only the files needed for production:
- Compiled block assets (JS, CSS)
- PHP files
- Theme files (style.css, theme.json)
- Templates and patterns

## What's Excluded from Production

The following files/directories are excluded from the production package:
- `src/` - Source files (only compiled assets are included)
- `node_modules/` - Development dependencies
- `webpack.config.js` - Build configuration
- `webpack.prod.js` - Production build configuration
- `scripts/` - Packaging scripts
- `.git/` - Version control files
- `package.json` - Development configuration

## Deploying to Production

1. After running `npm run package`, the `dist/` directory contains everything needed for production
2. Upload the contents of `dist/` to your WordPress themes directory
3. The theme will work without any development dependencies

## Customizing the Build

To modify what files are included in the production package, edit `scripts/package.js`.
