import type { ReactNode } from 'react';
import AppBackground from '../components/AppBackground';

export default function CustomLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <AppBackground>{children}</AppBackground>;
}
