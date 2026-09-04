import { useState, useEffect, useCallback } from 'react';

const sections = ['home', 'projects', 'experience', 'stack', 'contact'];

export function Navigation() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 120;
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    } else {
      const scrollY = parseInt(document.body.style.top || '0', 10) * -1;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      if (scrollY > 0) window.scrollTo(0, scrollY);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const handler = (e) => { if (e.matches) setMobileOpen(false); };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const menu = document.querySelector('.mobile-menu');
    if (!menu) return;
    const focusableEls = menu.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableEls[0];
    const lastFocusable = focusableEls[focusableEls.length - 1];
    function handleTab(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) { e.preventDefault(); lastFocusable.focus(); }
        } else {
          if (document.activeElement === lastFocusable) { e.preventDefault(); firstFocusable.focus(); }
        }
      }
      if (e.key === 'Escape') setMobileOpen(false);
    }
    document.addEventListener('keydown', handleTab);
    firstFocusable?.focus();
    return () => document.removeEventListener('keydown', handleTab);
  }, [mobileOpen]);

  const labels = { home: 'Home', projects: 'Projects', experience: 'Experience', stack: 'Stack', contact: 'Contact' };

  return (
    <>
      <nav className={`navigation${scrolled ? ' navigation--scrolled' : ''}`} role="navigation">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Rajat Yadav</span>
          </div>

          <div className="nav-links">
            {sections.map((id) => (
              <button
                key={id}
                className={`nav-link${active === id ? ' nav-link--active' : ''}`}
                onClick={() => scrollTo(id)}
                aria-current={active === id ? 'true' : undefined}
              >
                {labels[id]}
              </button>
            ))}
          </div>

          <button
            className={`nav-hamburger${mobileOpen ? ' nav-hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)} />
          <div className={`mobile-menu${mobileOpen ? ' open' : ''}`} id="mobile-menu">
            <ul className="mobile-menu-links">
              {sections.map((id) => (
                <li key={id} className={active === id ? 'active' : ''}>
                  <button onClick={() => scrollTo(id)}>{labels[id]}</button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

    </>
  );
}
