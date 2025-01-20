import ThemeCtxProvider from '@/app/_contexts/ctx-providers/ThemeCtxProvider';
import type { ReactNode } from 'react';

export default function LayoutCtxProviders({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <ThemeCtxProvider>{children}</ThemeCtxProvider>;
}
