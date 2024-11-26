/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
      boxShadow: {  
        CustomboxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 12px"

      },
    },
  },
  plugins: [],
}
