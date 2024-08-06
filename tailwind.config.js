/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sorange": "#e9ab53",
        "sred": "#f15e50",
        "owhite": "#fffdfa",
        "gblue": {
          50: "#c5c6ce",
          200: "#5d5f79",
          500: "#00001a",
        }
      }
    },
  },
  plugins: [],
}

