import { useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function ThemeProvider({ children }) {
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', 'light');
    html.classList.remove('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark: false, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
}
