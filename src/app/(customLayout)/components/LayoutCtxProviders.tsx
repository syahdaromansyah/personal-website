import ThemeCtxProvider from '@/app/contexts/ThemeCtxProvider';
import type { ReactNode } from 'react';

export default function LayoutCtxProviders({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ThemeCtxProvider>{children}</ThemeCtxProvider>;
}
