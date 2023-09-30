/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "background" : "#000"
      },
      fontFamily : {
        "fira" : ["Fira Code"]
      }
    },
  },
  plugins: [],
}

