/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DFD7BF",
        secondary: "#3F2305",
        third: "#F2EAD3",
        forth: "#F5F5F5",
      }
    },
  },
  plugins: [],
}