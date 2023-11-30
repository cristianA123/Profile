/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'c_primary': '#00beff',
        'c_secondary': '#3b2b72',
        'c_secondary_hover': '#432d92',
        'c_background': '#1e1446',

      },

    },
  },
  plugins: [],
}

