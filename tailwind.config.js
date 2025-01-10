const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/index.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)', // 引用 designTokens.js 中的自定义变量
        secondary: 'var(--color-secondary)',
        danger: 'var(--color-danger)',
        background: 'var(--color-background)',
        border: 'var(--color-border)',
      },
      borderRadius: {
        small: 'var(--border-radius-small)',
        medium: 'var(--border-radius-medium)',
        large: 'var(--border-radius-large)',
      },
      boxShadow: {
        small: 'var(--shadow-small)',
        medium: 'var(--shadow-medium)',
        large: 'var(--shadow-large)',
      },
      spacing: {
        small: 'var(--spacing-small)',
        medium: 'var(--spacing-medium)',
        large: 'var(--spacing-large)',
      },
      fontSize: {
        small: 'var(--font-size-small)',
        medium: 'var(--font-size-medium)',
        large: 'var(--font-size-large)',
        xlarge: 'var(--font-size-xlarge)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}