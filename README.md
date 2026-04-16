# Webpack Project

This project demonstrates a comprehensive Webpack configuration for a modern web application with support for multiple technologies and development tools.

## Features

### Core Functionality

- **DevServer**: Automatic page reloading on code changes
- **CSS Processing**: External CSS files with PostCSS support
- **Preprocessors**: LESS and Sass/SCSS compilation
- **TypeScript**: Full TypeScript compilation and type checking
- **Babel**: JavaScript transpilation for modern browsers
- **ESLint**: Code linting with TypeScript support
- **Bundle Analyzer**: Visual analysis of bundle size and content

### Additional Features

- Image optimization and compression
- Font loading and optimization
- CSS extraction and minification
- HTML template processing
- Asset copying and hashing
- Development and production builds

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the development server with hot reloading at `http://localhost:3000`

### Production Build

```bash
npm run build
```

Creates optimized production build in the `dist/` directory

### Bundle Analysis

```bash
npm run analyze
```

Opens a visual bundle analyzer in your browser showing bundle composition and sizes

## Project Structure

```
src/
├── index.ts              # Main TypeScript entry point
├── index.html            # HTML template
├── css/
│   ├── style.css         # Regular CSS
│   ├── style.scss        # Sass/SCSS styles
│   └── example.less      # LESS styles
├── scss/                 # SCSS partials
├── assets/
│   └── img/             # Images
└── ...
```

## Configuration Files

- `webpack.config.cjs` - Main Webpack configuration
- `tsconfig.json` - TypeScript configuration
- `.babelrc.json` - Babel presets and plugins
- `.eslintrc.json` - ESLint rules and configuration
- `postcss.config.cjs` - PostCSS configuration
- `package.json` - Dependencies and scripts

## Usage Examples

### TypeScript

```typescript
// src/index.ts
interface User {
  name: string;
  age: number;
}

const createUser = (name: string, age: number): User => {
  return { name, age };
};
```

### Sass/SCSS

```scss
// src/scss/_variables.scss
$primary-color: #007bff;
$secondary-color: #6c757d;

// src/scss/style.scss
@import "variables";

.button {
  background-color: $primary-color;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
```

### LESS

```less
// src/css/example.less
@primary-color: #007bff;

.button {
  background-color: @primary-color;

  &:hover {
    background-color: darken(@primary-color, 10%);
  }
}
```

### CSS Imports

```css
/* src/css/style.css */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

body {
  font-family: "Inter", sans-serif;
}
```

## Development Workflow

1. **Start Development Server**: `npm run dev`
2. **Make Changes**: Edit TypeScript, CSS, SCSS, LESS, or HTML files
3. **Automatic Reload**: Browser automatically refreshes on changes
4. **Code Checking**: ESLint runs automatically during development
5. **Build for Production**: `npm run build` when ready to deploy
6. **Analyze Bundle**: `npm run analyze` to optimize bundle size

## Deployment

The project is configured for deployment to GitHub Pages with automatic CI/CD through GitHub Actions. The production build outputs optimized files to the `dist/` directory.

## Technologies Used

- **Webpack 5** - Module bundler
- **TypeScript** - Typed JavaScript
- **Babel** - JavaScript transpilation
- **Sass/SCSS** - CSS preprocessor
- **LESS** - CSS preprocessor
- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Bundle Analyzer** - Bundle visualization
- **Image Optimization** - Automatic image compression
- **CSS Minification** - Production CSS optimization
