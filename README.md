# In early development version, currently unavailable

![Air-Components Logo](./src/assets/air-components-board.png)

**Air-Components** is a modern Web Components library designed to provide simple, efficient, and personalized component solutions, helping developers build elegant UI interfaces more quickly.

---

## Project Features

- **Modern Design**: Based on minimalist UI design principles, offering various themes and style options.
- **Lightweight**: Components are optimized for fast loading speeds and strong compatibility.
- **High Customizability**: Supports custom styles, making it easy to adapt to various project needs.

## Installation

Install Air-Components using npm:

```bash
npm install air-components

```

## Usage Example

### Importing Components

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project</title>
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
