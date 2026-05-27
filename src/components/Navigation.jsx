import { useState, useEffect, useMemo } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = useMemo(() => ['about', 'skills', 'projects', 'experience', 'credentials', 'contact'], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <>
      <nav className={`navigation ${isScrolled ? 'navigation--scrolled' : ''}`} aria-label="Main navigation">
        <div className="nav-container">
          <button
            className="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="RAJAT YADAV - Back to top"
          >
            <img
              src="https://i.postimg.cc/wBfGkhyw/Whats-App-Image-2026-02-15-at-22-14-05.jpg"
              alt="RAJAT YADAV"
              className="nav-logo-img"
            />
            <span className="logo-text">RAJAT</span>
          </button>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item} className={activeSection === item ? 'active' : ''}>
                <button onClick={() => scrollToSection(item)}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a
              href="/Rajat_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Resume
            </a>
            <button
              className={`nav-hamburger ${isMobileOpen ? 'nav-hamburger--open' : ''}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-menu-overlay ${isMobileOpen ? 'open' : ''}`}
        onClick={() => setIsMobileOpen(false)}
      ></div>
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          {navItems.map((item) => (
            <li key={item} className={activeSection === item ? 'active' : ''}>
              <button onClick={() => scrollToSection(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="/Rajat_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu-cta"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
          Resume
        </a>
      </div>
    </>
  );
}
