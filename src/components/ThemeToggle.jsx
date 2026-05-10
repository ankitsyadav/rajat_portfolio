import { useTheme } from '../hooks/useThemeHook';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className={`theme-toggle__track ${isDark ? 'theme-toggle__track--dark' : ''}`}>
        <span className="theme-toggle__icon theme-toggle__sun">☀️</span>
        <span className="theme-toggle__icon theme-toggle__moon">🌙</span>
        <span className="theme-toggle__thumb"></span>
      </div>
    </button>
  );
}
