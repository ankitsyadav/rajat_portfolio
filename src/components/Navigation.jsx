import { useState, useEffect, useMemo } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => ['about', 'skills', 'projects', 'experience', 'credentials', 'contact'], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navItems.map((id) => document.getElementById(id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`} aria-label="Main navigation">
      <div className="nav-container">
        <button
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Rajat Yadav - Back to top"
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">RY</span>
          <span className="logo-bracket"> /&gt;</span>
        </button>

        <div className={`nav-menu ${isMobileOpen ? 'nav-menu--open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item}
              className={`nav-link ${activeSection === item ? 'nav-link--active' : ''}`}
              onClick={() => scrollToSection(item)}
              aria-current={activeSection === item ? 'page' : undefined}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className={`nav-hamburger ${isMobileOpen ? 'nav-hamburger--open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
            aria-controls="nav-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
