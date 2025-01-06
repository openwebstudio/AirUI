# In Early Development Version, Currently Unavailable

![Air-Components Logo](./src/assets/air-components-board.png)

[中文](https://github.com/SisyphusZheng/Components/blob/main/README_CN.md)

[![npm version](https://img.shields.io/npm/v/air-components)](https://www.npmjs.com/package/air-components)

[![npm downloads](https://img.shields.io/npm/dm/air-components)](https://www.npmjs.com/package/air-components)

[![GitHub license](https://img.shields.io/github/license/aircomponents/Components)](https://github.com/aircomponents/Components/blob/main/LICENSE)

[![Build Status](https://img.shields.io/github/actions/workflow/status/aircomponents/Components/.github/workflows/publish.yml)](https://github.com/aircomponents/Components/actions)

[![Contributors](https://img.shields.io/github/contributors/aircomponents/Components)](https://github.com/aircomponents/Components/graphs/contributors)

[![Code Coverage](https://img.shields.io/codecov/c/github/aircomponents/Components)](https://codecov.io/gh/aircomponents/Components)

[![Last Commit](https://img.shields.io/github/last-commit/aircomponents/Components)](https://github.com/aircomponents/Components/commits/main)

[![Dependabot Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen)](https://github.com/aircomponents/Components/network/updates)

## Project Highlights

- **Modular Architecture**: Focused on creating reusable and flexible components.

- **Modern Design Principles**: Emphasizes minimalist UI design with support for multiple themes and visual styles.
- **Customizable Components**: Easily adapt component styles to meet project-specific requirements using standard CSS.

---

## Installation

Install Air-Components using npm:

```bash
npm install @aircomponents/ui
```

### CDN

```html
  <title>Test AirComponents</title>
  <script type="module" src="https://unpkg.com/@aircomponents/ui@0.0.7/dist/aircomponents/aircomponents.esm.js"></script>
</head>
<body>
  <air-button size="medium" variant="solid" color="primary">Primary Button</air-button>
  <air-button size="medium" variant="outline" color="primary">Outline Primary</air-button>
</body>
</html>
```

```JS
import '@aircomponents/ui';

document.body.innerHTML = `
  <air-button size="medium" variant="solid" color="primary">Primary Button</air-button>
`;
```

### React

```js
import 'air-components';

function App() {
  return (
    <div>
      <air-button size="medium" variant="solid" color="primary">
        Primary Button
      </air-button>
    </div>
  );
}

export default App;
```

### Vue

#### Vue Config

```js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          isCustomElement: tag => tag.startsWith('air-'),
        };
        return options;
      });
  },
};
```

#### USE Vue

```js
<template>
  <div>
    <air-button size="medium" variant="solid" color="primary">
      Primary Button
    </air-button>
  </div>
</template>

<script>
import 'air-components';
export default {
  name: 'App',
};
</script>
```

## Development Notes

### This project is in early development; features and components are actively being built

### Contributions and feedback are welcome. Visit our GitHub repository for more information
