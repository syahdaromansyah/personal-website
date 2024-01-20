'use client';

import type { MouseEventHandler } from 'react';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';
import useTheme from '../hooks/use-theme';

export default function ThemeToggler() {
  const { theme, changeTheme } = useTheme();

  const isDarkMode = theme === 'dark';

  const handleTheme: MouseEventHandler<HTMLButtonElement> = () => changeTheme();

  return (
    <button
      className="flex justify-center items-center text-2xl transition focus:outline-none hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-400 focus:ring focus:ring-offset-2 focus:ring-offset-slate-200 focus:ring-slate-900 dark:focus:bg-slate-900 dark:focus:ring-offset-slate-950 dark:focus:ring-blue-600 dark:hover:bg-slate-900 h-12 w-12 rounded-full dark:active:bg-slate-800"
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
