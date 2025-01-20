import { useContext } from 'react';
import { ThemeContext } from '../_contexts/contexts';

const useTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return { theme, changeTheme };
};

export default useTheme;
