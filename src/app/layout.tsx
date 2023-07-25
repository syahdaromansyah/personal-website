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
      <body>{children}</body>
    </html>
  );
}
