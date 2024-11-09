/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        highlight: '#ff4057'
      },
      backgroundImage: {
        'pattern-dark': "url('/src/assets/hyperspace_dark.svg')",
        'pattern-light': "url('/src/assets/hyperspace_light.svg')"
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: []
}
