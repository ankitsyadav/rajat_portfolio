import { useState, useEffect } from 'react';
import './styles/main.css';
import { SubtleBackground } from './components/SubtleBackground';
import { Navigation } from './components/Navigation';
import { CommandPalette } from './components/CommandPalette';
import { HeroSection } from './sections/HeroSection';
import { LiveSpendCalculator } from './sections/LiveSpendCalculator';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { StackSection } from './sections/StackSection';
import { GithubStatsWidget } from './sections/GithubStatsWidget';
import { ContactSection } from './sections/ContactSection';

function ScrollProgress() {
  const [width, setWidth] = useState('0%');
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(`${docHeight > 0 ? (scrollTop / docHeight) * 100 : 0}%`);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width }} />;
}

function App() {
  const [showPalette, setShowPalette] = useState(false);

  useEffect(() => {
    function handleKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowPalette(p => !p);
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <>
      <SubtleBackground />
      <ScrollProgress />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation onOpenPalette={() => setShowPalette(true)} />
      <CommandPalette isOpen={showPalette} onClose={() => setShowPalette(false)} />
      <main id="main-content">
        <HeroSection />
        <LiveSpendCalculator />
        <ProjectsSection />
        <ExperienceSection />
        <StackSection />
        <GithubStatsWidget />
        <ContactSection />
      </main>
      <footer className="footer">
        <div className="container">
          <p className="footer__name">Designed &amp; Developed by Rajat Yadav</p>
          <p className="footer__tagline">Frontend Engineer &middot; React &middot; Next.js</p>
        </div>
      </footer>
    </>
  );
}

export default App;
