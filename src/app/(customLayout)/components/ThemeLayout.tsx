'use client';

import useTheme from '@/app/hooks/use-theme';
import type { ReactNode } from 'react';

export default function ThemeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { theme } = useTheme();

  return theme !== null ? <>{children}</> : null;
}
