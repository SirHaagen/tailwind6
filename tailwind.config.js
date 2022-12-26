/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}'
  ],
  theme: {
    extend: {
      fontFamily:{
        outfit: 'Outfit'
      },
      colors:{
        danger: '#ff5f40',
        crayola_red: '#ff355e',
        darkblue: {
          100: '#000066',
          200: '#000033'
        }
      },
      borderRadius:{
        x20: '20px'
      },
      width:{
        vw90: '90vw'
      }
    },
  },
  plugins: [],
}
