import { createContext } from 'react';
import type { ThemeValue } from '../types/types';

export const ThemeContext = createContext<{
  theme: ThemeValue | null;
  changeTheme: () => void;
}>({
  theme: 'dark',
  changeTheme: () => {},
});
