import { Inter, Poppins } from 'next/font/google';

export const interFont = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const poppinsFont = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
});
