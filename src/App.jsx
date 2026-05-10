import './styles/main.css';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { CredentialsSection } from './sections/CredentialsSection';
import { ContactSection } from './sections/ContactSection';
import { GradientOrbs, FloatingParticles, ScrollProgress } from './components/BackgroundEffects';

function App() {
  return (
    <>
      <GradientOrbs />
      <FloatingParticles />
      <ScrollProgress />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CredentialsSection />
        <ContactSection />
      </main>
      <footer className="footer">
        <div className="container footer__content">
          <p>&copy; {new Date().getFullYear()} Rajat Yadav. Built with React & Vite.</p>
          <p className="footer__tagline">Self-Taught JavaScript & React Developer</p>
        </div>
      </footer>
    </>
  );
}

export default App;