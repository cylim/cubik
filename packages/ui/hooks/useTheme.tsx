'use client';

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useCookies } from 'next-client-cookies';
import { Drawer } from 'vaul';

type Theme = 'light' | 'dark';

// Create a ThemeContext
const ThemeContext = createContext<
  { theme: Theme; toggleTheme: () => void } | undefined
>(undefined);

// Custom hook to manage the theme
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const cookies = useCookies();
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = cookies.get('theme');
    return (storedTheme ?? 'dark') as Theme;
  });

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      cookies.set('theme', newTheme);
      return newTheme;
    });
  };

  // Effect to update the HTML class when the theme changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const htmlElement = document.querySelector('html');
      const themeMetaTag = document.querySelector('meta[name="theme-color"]');
      if (htmlElement) {
        htmlElement.className = theme;
        htmlElement.setAttribute('data-theme', theme);
      }
      if (themeMetaTag) {
        themeMetaTag.setAttribute(
          'content',
          theme === 'light' ? '#ffffff' : '#272727',
        );
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Drawer.Root>{children}</Drawer.Root>
    </ThemeContext.Provider>
  );
}

export { useTheme, ThemeProvider };
