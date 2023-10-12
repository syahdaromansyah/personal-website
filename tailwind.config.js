const twDefaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      transitionProperty: {
        custom: `max-height, max-width, border-radius, ${twDefaultTheme.transitionProperty.DEFAULT}`,
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...twDefaultTheme.fontFamily.sans],
        poppins: ['var(--font-poppins)', ...twDefaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
