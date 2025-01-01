# In Early Development Version, Currently Unavailable

![Air-Components Logo](./src/assets/air-components-board.png)

[![npm version](https://img.shields.io/npm/v/air-components)](https://www.npmjs.com/package/air-components) 
[![npm downloads](https://img.shields.io/npm/dm/air-components)](https://www.npmjs.com/package/air-components) 
[![GitHub issues](https://img.shields.io/github/issues/SisyphusZheng/air-components)](https://github.com/SisyphusZheng/air-components/issues) 
[![GitHub stars](https://img.shields.io/github/stars/SisyphusZheng/air-components)](https://github.com/SisyphusZheng/air-components/stargazers) 
[![GitHub forks](https://img.shields.io/github/forks/SisyphusZheng/air-components)](https://github.com/SisyphusZheng/air-components/network/members) 
[![GitHub license](https://img.shields.io/github/license/SisyphusZheng/air-components)](./LICENSE) 
[![Build Status](https://img.shields.io/github/actions/workflow/status/SisyphusZheng/air-components/main.yml)](https://github.com/SisyphusZheng/air-components/actions) 
[![Contributors](https://img.shields.io/github/contributors/SisyphusZheng/air-components)](https://github.com/SisyphusZheng/air-components/graphs/contributors) 
[![Code Coverage](https://img.shields.io/codecov/c/github/SisyphusZheng/air-components)](https://codecov.io/gh/SisyphusZheng/air-components) 
[![Last Commit](https://img.shields.io/github/last-commit/SisyphusZheng/air-components)](https://github.com/SisyphusZheng/air-components/commits/main)
[![Open Issues](https://img.shields.io/github/issues-raw/SisyphusZheng/air-components)](https://github.com/SisyphusZheng/air-components/issues)
[![Dependabot Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen)](https://github.com/SisyphusZheng/air-components/network/updates)

**Air-Components** is a lightweight and modern Web Components library designed to offer simple, efficient, and personalized solutions for UI development. The project is currently in its early stages and not yet ready for production use.

---

## Project Highlights

- **Modular Architecture**: Focused on creating reusable and flexible components like `air-button`, `air-card`, and `air-header`.
- **Modern Design Principles**: Emphasizes minimalist UI design with support for multiple themes and visual styles.
- **Customizable Components**: Easily adapt component styles to meet project-specific requirements using standard CSS.

---

## Installation

Install Air-Components using npm:

```bash
npm install air-components


## Usage Example

### Importing Components

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Air-Components Example</title>
  <script type="module" src="node_modules/air-components/dist/air-components/air-components.esm.js"></script>
</head>
<body>
  <air-button>Click Me</air-button>
</body>
</html>

```

### Example Code (JS + HTML)

```javascript
import { defineCustomElements } from 'air-components/loader';
defineCustomElements();

document.querySelector('air-button').addEventListener('click', () => {
  alert('Button clicked!');
});
```

## Development Notes

### This project is in early development; features and components are actively being built

### Contributions and feedback are welcome. Visit our GitHub repository for more information