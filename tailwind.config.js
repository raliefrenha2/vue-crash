/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['san-serif']
      },
      gridAutoColumns: {
        '70/30': "70% 28%"
      }
    },
  },
  plugins: [],
}

