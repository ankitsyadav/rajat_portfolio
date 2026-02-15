import { SectionHeader } from '../components/SectionHeader';
import { ExperienceCard } from '../components/ExperienceCard';
import { experience, education } from '../data/portfolio';

export function ExperienceSection() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <SectionHeader
          title="My Journey"
          subtitle="Learning path, experience, and education"
        />

        <div className="experience__wrapper">
          {/* Learning Journey */}
          <div className="experience__column">
            <h3 className="subsection-title">
              <span className="subsection-icon">🚀</span>
              Learning Journey
            </h3>
            <div className="experience__timeline">
              {experience.map((job) => (
                <ExperienceCard
                  key={job.id}
                  role={job.role}
                  company={job.company}
                  period={job.period}
                  description={job.description}
                  highlights={job.highlights}
                  technologies={job.technologies}
                />
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="experience__column">
            <h3 className="subsection-title">
              <span className="subsection-icon">🎓</span>
              Education
            </h3>
            <div className="education__list">
              {education.map((edu) => (
                <div key={edu.id} className="education__item">
                  <div className="education__icon-dot"></div>
                  <div className="education__content">
                    <h4 className="education__degree">{edu.degree}</h4>
                    <p className="education__institution">{edu.institution}</p>
                    <p className="education__period">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
