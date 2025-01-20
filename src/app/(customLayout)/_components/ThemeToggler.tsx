'use client';

import useTheme from '@/app/_react-hooks/useTheme';
import type { MouseEventHandler } from 'react';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';

export default function ThemeToggler() {
  const { theme, changeTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  const handleTheme: MouseEventHandler<HTMLButtonElement> = () => changeTheme();

  return (
    <button
      className="flex h-12 w-12 items-center justify-center rounded-full text-2xl transition hover:bg-slate-300 focus:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-900 focus:ring-offset-2 focus:ring-offset-slate-200 active:bg-slate-400 dark:hover:bg-slate-900 dark:focus:bg-slate-900 dark:focus:ring-blue-600 dark:focus:ring-offset-slate-950 dark:active:bg-slate-800"
      type="button"
      onClick={handleTheme}
    >
      {isDarkMode ? (
        <BsSun className="inline-block" />
      ) : (
        <BiMoon className="inline-block" />
      )}
    </button>
  );
}
