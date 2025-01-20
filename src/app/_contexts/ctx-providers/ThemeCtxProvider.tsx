'use client';

import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ThemeOptions } from '../../_types/types';
import { ThemeContext } from '../contexts';

type ThemeStorageValue = ThemeOptions | null;

export default function ThemeCtxProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [theme, setTheme] = useState<ThemeOptions | null>(null);

  const changeTheme = useCallback(() => {
    const htmlElem = document.documentElement;

    switch (theme) {
      case 'dark': {
        htmlElem.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setTheme(() => 'light');

        break;
      }

      case 'light': {
        htmlElem.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        setTheme(() => 'dark');

        break;
      }
    }
  }, [theme]);

  const ctxValue = useMemo(
    () => ({
      theme,
      changeTheme,
    }),
    [changeTheme, theme],
  );

  useInitTheme({ setTheme });

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}

const useInitTheme = ({
  setTheme,
}: Readonly<{
  setTheme: Dispatch<SetStateAction<ThemeOptions | null>>;
}>) => {
  useEffect(() => {
    const htmlElem = document.documentElement;
    const themeValue = localStorage.getItem('theme') as ThemeStorageValue;

    if (
      themeValue === 'dark' ||
      (themeValue === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      htmlElem.classList.add('dark');
      setTheme(() => 'dark');
    } else {
      htmlElem.classList.remove('dark');
      setTheme(() => 'light');
    }
  }, [setTheme]);
};
