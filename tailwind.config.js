/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cardo': ['Cardo', 'serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
        'dmsans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}