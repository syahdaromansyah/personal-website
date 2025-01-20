import { createContext } from 'react';
import type { ThemeOptions } from '../_types/types';

export const ThemeContext = createContext<{
  theme: ThemeOptions | null;
  changeTheme: () => void;
}>({
  theme: null,
  changeTheme: () => {},
});
