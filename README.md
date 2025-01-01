# In Early Development Version, Currently Unavailable

![Air-Components Logo](./src/assets/air-components-board.png)

<<<<<<< Updated upstream
[![npm version](https://img.shields.io/npm/v/air-components)](https://www.npmjs.com/package/air-components) 
[![npm downloads](https://img.shields.io/npm/dm/air-components)](https://www.npmjs.com/package/air-components) 
[![GitHub issues](https://img.shields.io/github/issues/aircomponents/Components)](https://github.com/aircomponents/Components/issues) 
[![GitHub stars](https://img.shields.io/github/stars/aircomponents/Components)](https://github.com/aircomponents/Components/stargazers) 
[![GitHub forks](https://img.shields.io/github/forks/aircomponents/Components)](https://github.com/aircomponents/Components/network/members) 
[![GitHub license](https://img.shields.io/github/license/aircomponents/Components)](https://github.com/aircomponents/Components/blob/main/LICENSE) 
[![Build Status](https://img.shields.io/github/actions/workflow/status/aircomponents/Components/.github/workflows/publish.yml)](https://github.com/aircomponents/Components/actions) 
[![Contributors](https://img.shields.io/github/contributors/aircomponents/Components)](https://github.com/aircomponents/Components/graphs/contributors) 
[![Code Coverage](https://img.shields.io/codecov/c/github/aircomponents/Components)](https://codecov.io/gh/aircomponents/Components) 
[![Last Commit](https://img.shields.io/github/last-commit/aircomponents/Components)](https://github.com/aircomponents/Components/commits/main) 
[![Open Issues](https://img.shields.io/github/issues-raw/aircomponents/Components)](https://github.com/aircomponents/Components/issues) 
[![Dependabot Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen)](https://github.com/aircomponents/Components/network/updates)

**Air-Components** is a lightweight and modern Web Components library designed to offer simple, efficient, and personalized solutions for UI development. The project is currently in its early stages and not yet ready for production use.
=======
[![Build](https://github.com/aircomponents/components/workflows/Build/badge.svg)](https://github.com/goatui/components/actions?workflow=Build)
[![GitHub license](https://img.shields.io/github/license/aircomponents/components.svg)](/LICENSE)
[![NPM version](https://img.shields.io/npm/v/air-components.svg)](https://www.npmjs.com/package/air-components)
**Air-Components** is a modern Web Components library designed to provide simple, efficient, and personalized component solutions, helping developers build elegant UI interfaces more quickly.
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
  <title>Air-Components Example</title>
  <script type="module" src="node_modules/air-components/dist/air-components/air-components.esm.js"></script>
=======
  <title>Test AirComponents</title>
  <script type="module" src="https://unpkg.com/air-components@0.0.9/dist/aircomponents/aircomponents.esm.js"></script>
>>>>>>> Stashed changes
</head>
<body>
  <air-button size="medium" variant="solid" color="primary">Primary Button</air-button>
  <air-button size="medium" variant="outline" color="primary">Outline Primary</air-button>
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