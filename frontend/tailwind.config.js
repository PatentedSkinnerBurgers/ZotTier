/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'urbanist': ['"Urbanist"', ...defaultTheme.fontFamily.sans],
        'rubik': ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'zt-light': "#eeeeee"
      },
    },
  },
  plugins: [],
};
