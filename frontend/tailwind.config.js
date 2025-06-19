/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6FFF"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill, minmax(250px,1fr))'
      }
    },
  },
  plugins: [],
}