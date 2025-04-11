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
      keyframes: {
        'slide-in-right': {
          '0%': {transform: 'translateX(100%)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
        'slide-in-left': {
          '0%': {transform: 'translateX(-100%)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'},
        },
      },

      animation: {
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
      },
      fontFamily: {
        inter: ['Sora', 'Inter', 'sans-serif'],
      },
      colors: {
        secondary: '#aaa6c3',
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
