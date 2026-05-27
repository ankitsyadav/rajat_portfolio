import { SectionHeader } from '../components/SectionHeader';
import { experience, education } from '../data/portfolio';

export function ExperienceSection() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <SectionHeader
          title="My Journey"
          subtitle="Learning path, experience, and education"
        />

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-logo timeline-logo-placeholder">
                    {item.company[0]}
                  </div>
                  <div className="timeline-info">
                    <h3 className="timeline-company">{item.company}</h3>
                    <p className="timeline-role">{item.role}</p>
                    <div className="timeline-meta">
                      <span className="timeline-duration">{item.period}</span>
                      {item.location && <span className="timeline-location">{item.location}</span>}
                    </div>
                  </div>
                </div>
                {item.description && (
                  <p className="timeline-description">{item.description}</p>
                )}
                <ul className="timeline-points">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-logo timeline-logo-placeholder">
                    {edu.institution[0]}
                  </div>
                  <div className="timeline-info">
                    <h3 className="timeline-company">{edu.institution}</h3>
                    <p className="timeline-role">{edu.degree}</p>
                    <div className="timeline-meta">
                      <span className="timeline-duration">{edu.period}</span>
                      {edu.location && <span className="timeline-location">{edu.location}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
