/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#f1ebfc',
          200: '#bd9afc',
          300: '#b087fa',
          400: '#a574fc',
          500: '#8D52F8',
          600: 'rgba(141, 82, 248, 0.8)',
        },
        secondary: {
          400: '#fc822d',
          500: '#fc822d',
          600: 'rgba(255, 145, 69, 0.8)',
        },
        gray: {
          300: '#706e6e',
          400: '#524f4f',
          500: '#333131',
        }
      },
    },
  },
  plugins: [
  ],
}