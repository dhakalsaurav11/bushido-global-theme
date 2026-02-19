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
      colors: {
        // The "Concrete" Identity
        brand: {
          bg: '#F5F5F4', // Stone-100 (Warm Grey/Concrete)
          text: '#1C1917', // Stone-900 (Almost Black/Ink)
          accent: '#EA580C', // Orange-600 (Industrial Safety Orange)
          line: '#D6D3D1', // Stone-300 (Divider lines)
        },
      },
      fontFamily: {
        // "Swiss" Style (Clean, Objective)
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Inter', 'sans-serif'], // Removing the "Teko" font
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
