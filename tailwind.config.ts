import type { Config } from 'tailwindcss';
import twDefaultTheme from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-linear-gradient':
          'linear-gradient(240deg, #f8fafc 0%, #e2e8f0 5%, rgba(226,232,240,1) 10%, rgba(203,213,225,1) 20%, rgba(148,163,184,1) 30%, rgba(100,116,139,1) 40%, rgba(71,85,105,1) 50%, rgba(51,65,85,1) 60%, rgba(30,41,59,1) 70%, rgba(15,23,42,1) 80%, rgba(2,6,23,1) 90%, rgba(14,10,40,1) 95%, #4c0519 100%)',
      },
      transitionProperty: {
        custom: `max-height, max-width, border-radius, ${twDefaultTheme.transitionProperty.DEFAULT}`,
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...twDefaultTheme.fontFamily.sans],
        raleway: ['var(--font-raleway)', ...twDefaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
} satisfies Config;
