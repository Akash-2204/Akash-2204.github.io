"use client";
import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

interface ThemeContextState {
  themeName: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
    const listener = (e: MediaQueryListEvent) => {
      setThemeName(e.matches ? 'dark' : 'light');
    };
    darkMediaQuery.addEventListener('change', listener);
    return () => darkMediaQuery.removeEventListener('change', listener);
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };