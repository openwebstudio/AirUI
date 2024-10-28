
# Air-Components

![Air-Components Logo](./src/assets/air-components-logo.svg)

**Air-Components** 是一个现代化的 Web Components 组件库，旨在提供简单、高效和个性化的组件解决方案，帮助开发者更快速地构建优雅的 UI 界面。

---

## 项目特性
- **现代设计**：基于简约的 UI 设计原则，提供多种主题和样式选项。
- **轻量化**：组件经过优化，保证加载速度快，兼容性强。
- **高可定制性**：支持自定义样式，方便适应各种项目需求。

## 安装

使用 npm 安装 Air-Components：

```bash
npm install air-components
```

## 使用示例

### 引入组件

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

### 示例代码 (JS + HTML)

```javascript
import { defineCustomElements } from 'air-components/loader';
defineCustomElements();

document.querySelector('air-button').addEventListener('click', () => {
  alert('Button clicked!');
});
```

## 贡献

欢迎对 Air-Components 做出贡献！请提交 Pull Requests 或 Issues，我们会尽快回复。

## License

MIT License © 2024 HanG
