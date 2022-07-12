/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fundo': '#18181b',
        'cinzinha': 'rgb(173, 173, 184)',
        'hover-cinzinha': '#464649'
      },
      spacing: {
        '20px': '20px'
      },
      height: {
        '50px': '50px'
      }
    },
  },
  plugins: [],
}
