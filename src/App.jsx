import { useState, useEffect } from 'react';
import './styles/main.css';
import { SubtleBackground } from './components/SubtleBackground';
import { Navigation } from './components/Navigation';
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
  return (
    <>
      <SubtleBackground />
      <ScrollProgress />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation />
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
          <p className="footer__tagline">Full Stack Developer &middot; React &middot; Next.js</p>
        </div>
      </footer>
    </>
  );
}

export default App;
