/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'pattern-primary': "url('/src/assets/hyperspace.svg')"
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: []
}
