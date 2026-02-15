import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = ['about', 'skills', 'projects', 'experience', 'contact'];

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
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`}>
      <div className="nav-container">
        <button className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
            aria-label="Toggle menu"
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
