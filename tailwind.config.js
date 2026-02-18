/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.json',
    './sections/*.liquid',
    './snippets/*.liquid',
    './config/*.json',
    './locales/*.json',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Teko', 'sans-serif'],
        sans: ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
