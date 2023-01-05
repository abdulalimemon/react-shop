
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
}
