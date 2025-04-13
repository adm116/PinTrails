import React, { createContext, useEffect, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import { darkTheme, lightTheme } from '../constants/themes';

const ThemeContext = createContext(lightTheme); // default fallback

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme);
    });
    return () => listener.remove();
  }, []);

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;