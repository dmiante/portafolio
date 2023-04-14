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
        primary: '#eff0f3',
        secondary: '#ff8e3c',
        headline: '#0d0d0d',
        paragraph: '#2a2a2a',
        logo: '#ff4057'
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
