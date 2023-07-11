/** @type {import('tailwindcss').Config} */
const typography = require('@tailwindcss/typography');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'akronim': ['Akronim', 'cursive'],
        'bungee-hairline': ['Bungee Hairline', 'cursive'],
        'codystar': ['Codystar', 'cursive'],
        'dekko': ['Dekko', 'cursive'],
        'fascinate': ['Fascinate', 'cursive'],
        'kavivanar': ['Kavivanar', 'cursive'],
        'lexend-exa': ['Lexend Exa', 'sans-serif'],
        'paprika': ['Paprika', 'cursive'],
        'poiret-one': ['Poiret One', 'cursive'],
        'train-one': ['Train One', 'cursive'],
      }
    },
  },
  plugins: [
    typography,
  ],
}
