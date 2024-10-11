"use client";
import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

interface ThemeContextState {
  themeName: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState<string>(() => {
    return localStorage.getItem('themeName') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const storedTheme = localStorage.getItem('themeName');
    
    if (!storedTheme) {
      setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
    }

    const listener = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('themeName')) {
        setThemeName(e.matches ? 'dark' : 'light');
      }
    };
    
    darkMediaQuery.addEventListener('change', listener);
    return () => darkMediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', themeName);
    localStorage.setItem('themeName', themeName);
  }, [themeName]);

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark';
    setThemeName(newTheme);
    localStorage.setItem('themeName', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
