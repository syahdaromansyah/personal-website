import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Syahda Romansyah',
  description:
    'A personal website amazingly builds with Next.js and Tailwind CSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-slate-800 dark:text-slate-300">{children}</body>
    </html>
  );
}
