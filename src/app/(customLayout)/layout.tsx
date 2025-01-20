import type { ReactNode } from 'react';
import ThemeBackground from './_components/ThemeBackground';
import ThemeLayout from './_components/ThemeLayout';
import LayoutCtxProvider from './_ctx-providers/LayoutCtxProvider';

export default function CustomLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <LayoutCtxProvider>
      <ThemeLayout>
        <ThemeBackground />
        {children}
      </ThemeLayout>
    </LayoutCtxProvider>
  );
}
