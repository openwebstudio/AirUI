# In Early Development Version, Currently Unavailable

![Air-Components Logo](./src/assets/air-components-board.png)

[![npm version](https://img.shields.io/npm/v/air-components)](https://www.npmjs.com/package/air-components) 
[![npm downloads](https://img.shields.io/npm/dm/air-components)](https://www.npmjs.com/package/air-components) 
[![GitHub license](https://img.shields.io/github/license/aircomponents/Components)](https://github.com/aircomponents/Components/blob/main/LICENSE) 
[![Build Status](https://img.shields.io/github/actions/workflow/status/aircomponents/Components/.github/workflows/publish.yml)](https://github.com/aircomponents/Components/actions) 
[![Contributors](https://img.shields.io/github/contributors/aircomponents/Components)](https://github.com/aircomponents/Components/graphs/contributors) 
[![Code Coverage](https://img.shields.io/codecov/c/github/aircomponents/Components)](https://codecov.io/gh/aircomponents/Components) 
[![Last Commit](https://img.shields.io/github/last-commit/aircomponents/Components)](https://github.com/aircomponents/Components/commits/main) 
[![Dependabot Status](https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen)](https://github.com/aircomponents/Components/network/updates)
---

## 项目亮点

- **模块化架构：**: 专注于创建可复用且灵活的组件  
- **现代设计原则**: 强调极简的用户界面设计，同时支持多种主题和视觉风格。
- **可定制的组件**: 通过标准 CSS，轻松调整组件样式以满足特定项目需求。
---

## 安装

### NPM

使用 npm 安装 AirComponents：

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

### JS

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

#### Vue 设置

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

#### Vue

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