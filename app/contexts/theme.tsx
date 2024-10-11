"use client";
import { createContext, useEffect, useState, ReactNode, useContext } from 'react';

interface ThemeContextState {
  themeName: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextState | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [themeName, setThemeName] = useState<string>('dark'); // Default to light theme

  useEffect(() => {
    // Only access localStorage and window when in the browser
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('themeName');
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

      if (storedTheme) {
        setThemeName(storedTheme);
      } else {
        setThemeName(darkMediaQuery.matches ? 'dark' : 'light');
      }

      const listener = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('themeName')) {
          setThemeName(e.matches ? 'dark' : 'light');
        }
      };

      darkMediaQuery.addEventListener('change', listener);
      return () => darkMediaQuery.removeEventListener('change', listener);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.setAttribute('data-theme', themeName);
      localStorage.setItem('themeName', themeName);
    }
  }, [themeName]);

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark';
    setThemeName(newTheme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeName', newTheme);
    }
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
