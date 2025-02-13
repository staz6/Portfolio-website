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
        inter: ['Sora', 'Inter', 'sans-serif'],
      },
      colors: {
        customPurple: 'rgb(36 11 57)',
        customDarkPurple: 'rgb(15 7 21)',
        customYellow: 'rgb(250 204 21 / var(--tw-bg-opacity))'
      },
      boxShadow: {
        CustomboxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',
      },
    },
  },
  plugins: [],
};
