import type { Metadata } from 'next';
import { interFont, ralewayFont } from './_lib/nextFonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syahda Romansyah',
  description:
    'A personal website amazingly builds with Next.js and Tailwind CSS. Hosted on Vercel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body
        className={`${interFont.variable} ${ralewayFont.variable} font-inter text-slate-800 antialiased dark:text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}
