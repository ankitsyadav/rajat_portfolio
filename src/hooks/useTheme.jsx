import { useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme-preference');
    if (saved) return saved === 'dark';

    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.setAttribute('data-theme', 'dark');
      html.classList.add('dark');
      localStorage.setItem('theme-preference', 'dark');
    } else {
      html.setAttribute('data-theme', 'light');
      html.classList.remove('dark');
      localStorage.setItem('theme-preference', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
