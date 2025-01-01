const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/index.html',
    './src/**/*.js',
  ],
  theme: {
    fontFamily: {
      mono: [...defaultTheme.fontFamily.mono],
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      title: ['Dongle', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      height: {
        hero: '4.5rem'
      },
      padding: {
        hero: '4.5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}