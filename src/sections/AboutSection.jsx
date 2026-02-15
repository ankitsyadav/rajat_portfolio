import { SectionHeader } from '../components/SectionHeader';
import { aboutContent } from '../data/portfolio';

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <SectionHeader
          title={aboutContent.title}
          subtitle={aboutContent.subtitle}
        />

        <div className="about__content">
          <div className="about__text">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="about__paragraph">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="about__highlights-card">
            <h3 className="about__highlights-title">
              <span className="highlight-icon">⚡</span>
              What Drives Me
            </h3>
            <ul className="about__list">
              {aboutContent.highlights.map((highlight, index) => (
                <li key={index} className="about__list-item">
                  <span className="list-check">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Decorative stats */}
        <div className="about__stats">
          <div className="stat-card">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">6+</span>
            <span className="stat-label">Technologies</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">1000+</span>
            <span className="stat-label">Hours Coding</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">∞</span>
            <span className="stat-label">Passion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
