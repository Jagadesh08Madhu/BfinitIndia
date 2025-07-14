const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5667ff",
      },
      fontFamily: {
        'cardo': ['Cardo', 'serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'dmsans': ['DM Sans', 'sans-serif'],
        'plus': ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
