/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gochihand: ['Gochi Hand', 'cursive'],
        bangers: ['Bangers'],
        bebasNeue: ['Bebas Neue'],
        firaSansHeavy: ['Fira Sans', 'sans-serif'], // adjust the name as needed
        ultra: ['Ultra'],
      },
    },
  },
  plugins: [],
}

