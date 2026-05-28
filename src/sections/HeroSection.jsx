import { useState, useEffect } from 'react';
import { heroContent } from '../data/portfolio';

const typingTexts = [
  'React Developer',
  'JavaScript Enthusiast',
  'Frontend Builder',
  'UI Creator'
];

export function HeroSection() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const currentText = typingTexts[index];
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1));
        if (text.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1500); // Reduced from 2000ms
        }
      } else {
        setText(text.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  // Improved image loading with error fallback
  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => {
    console.warn('Hero image failed to load');
    // Could implement fallback image here
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">{heroContent.greeting}</span>
          <h1 className="hero-title" id="hero-title">{heroContent.name}</h1>
          <p className="hero-description">{heroContent.summary}</p>

          <div className="hero-actions" aria-label="Hero section actions">
            <button
              className="btn hero-btn hero-btn-primary"
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
                <path d="M2 12h20M2 12l5-5m-5 5 5 5M22 12l-5-5m5 5-5 5" />
              </svg>
              View My Work
            </button>
            <button
              className="btn hero-btn hero-btn-secondary"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Get In Touch
            </button>
            <a
              href="/Rajat_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn hero-btn hero-btn-secondary"
              aria-label="Download resume"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Resume
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img
              src="/portfolio.png"
              alt="RAJAT YADAV"
              className={`hero-image${imageLoaded ? ' loaded' : ''}`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="hero-tech-strip">
        <div className="container">
          <div className="tech-strip-scroll" role="marquee" aria-roledescription="scrolling">
            {['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Git', 'Vite', 'VS Code'].map((tech) => (
              <span key={tech} className="tech-strip-item">{tech}</span>
            ))}
            {['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Git', 'Vite', 'VS Code'].map((tech) => (
              <span key={`dup-${tech}`} className="tech-strip-item">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
