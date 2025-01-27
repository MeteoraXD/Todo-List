import React, { useState } from 'react';

import { darkTheme, lightTheme } from '@/styles/colorsCSS/colors.css.ts';
import { ThemeContext } from '@/context/ThemeContext';

export const ThemeProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'light' ? lightTheme : darkTheme}>{children}</div>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;