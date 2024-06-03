/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF161F',
        'secondary': '#FBB900',
        'tertiary': '#034EA2'
      }
    },
  },
  plugins: [],
}

