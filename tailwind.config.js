const twDefaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'app-linear-gradient':
          'linear-gradient(240deg, rgba(241,245,249,1) 0%, rgba(203,213,255,1) 5%, rgba(226,232,240,1) 10%, rgba(203,213,225,1) 20%, rgba(148,163,184,1) 30%, rgba(100,116,139,1) 40%, rgba(71,85,105,1) 50%, rgba(51,65,85,1) 60%, rgba(30,41,59,1) 70%, rgba(15,23,42,1) 80%, rgba(2,6,23,1) 90%, rgba(24,2,8,1) 95%, rgba(19,2,32,1) 100%)',
        'btn-social-link-fancy':
          'linear-gradient(240deg, rgba(199,210,254,1) 0%, rgba(254,205,211,1) 11.111%, rgba(245,183,191,1) 22.222%, rgba(148,163,184,1) 33.333%, rgba(100,116,139,1) 44.444%, rgba(71,85,105,1) 55.555%, rgba(51,65,85,1) 66.666%, rgba(30,41,59,1) 77.777%, rgba(15,23,42,1) 88.888%, rgba(76,5,25,1) 100%)',
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
