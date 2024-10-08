import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

const colorSchemes = {
  light: {
    background: '#ffffff',
    text: '#000000',
    buttonBackground: '#0080ff',
    buttonText: '#ffffff',
    BottomBackground:"whitesmoke"
  },
  dark: {
    background: '#000000',
    text: '#ffffff',
    buttonBackground: '#0080ff',
    buttonText: '#ffffff',
    BottomBackground:"#312E2E"
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    AsyncStorage.getItem('theme').then((storedTheme) => {
      if (storedTheme) setTheme(storedTheme);
    });
  }, []);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colorScheme: colorSchemes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};
