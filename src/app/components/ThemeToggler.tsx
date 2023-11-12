'use client';

import type { MouseEventHandler } from 'react';
import { useState } from 'react';
import { BiMoon } from 'react-icons/bi';
import { BsSun } from 'react-icons/bs';

export default function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleTheme: MouseEventHandler<HTMLButtonElement> = () => {
    const isDarkMode = document.documentElement.classList.contains('dark');

    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(() => false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(() => true);
    }
  };

  return (
    <button
      className="flex justify-center items-center text-2xl transition focus:outline-none hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-400 focus:ring focus:ring-offset-2 focus:ring-offset-slate-200 focus:ring-slate-900 dark:focus:bg-slate-900 dark:focus:ring-offset-slate-950 dark:focus:ring-blue-600 dark:hover:bg-slate-900 h-12 w-12 rounded-full dark:active:bg-slate-800"
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
