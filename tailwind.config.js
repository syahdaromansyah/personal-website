const twDefaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        dark: 'linear-gradient(240deg, rgba(2,6,23,1) 0%, rgba(24,2,8,1) 50%, rgba(19,2,32,1) 100%)',
        light:
          'linear-gradient(240deg, rgba(241,245,249,1) 0%, rgba(203,213,225,1) 50%, rgba(226,232,240,1) 100%);',
      },
      transitionProperty: {
        custom: `max-height, max-width, border-radius, ${twDefaultTheme.transitionProperty.DEFAULT}`,
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...twDefaultTheme.fontFamily.sans],
        raleway: ['var(--font-raleway)', ...twDefaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
