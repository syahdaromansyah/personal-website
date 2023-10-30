import { interFont, ralewayFont } from '@/lib/next-fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syahda Romansyah',
  description:
    'A personal website amazingly builds with Next.js and Tailwind CSS and hosted on Vercel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} ${ralewayFont.variable} font-inter text-slate-800 dark:text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}
