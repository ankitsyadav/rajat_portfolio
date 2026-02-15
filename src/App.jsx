import './styles/main.css';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
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
