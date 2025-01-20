'use client';

import useTheme from '@/app/_react-hooks/useTheme';
import type { ReactNode } from 'react';

export default function ThemeLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { theme } = useTheme();

  return theme !== null ? <>{children}</> : null;
}
