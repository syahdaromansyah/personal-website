import type { ReactNode } from 'react';
import LayoutCtxProviders from './components/LayoutCtxProviders';
import ThemeBackground from './components/ThemeBackground';
import ThemeLayout from './components/ThemeLayout';

export default function CustomLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <LayoutCtxProviders>
      <ThemeLayout>
        <ThemeBackground />
        {children}
      </ThemeLayout>
    </LayoutCtxProviders>
  );
}
