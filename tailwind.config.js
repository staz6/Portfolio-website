/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        linearGradientHeading: 'linear-gradient(90deg, #8750f7 0%, #fff 100%)',
      },
      fontFamily: {
        inter: ['Sora', 'Inter', 'sans-serif'],
      },
      colors: {
        secondary: "#aaa6c3",
        customPurple: 'rgb(36 11 57)',
        customDarkPurple: 'rgb(15 7 21)',
        customYellow: 'rgb(250 204 21 / var(--tw-bg-opacity))',
      },
      boxShadow: {
        CustomboxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',
      },
    },
  },
  plugins: [],
};
