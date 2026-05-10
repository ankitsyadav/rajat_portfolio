import { SectionHeader } from '../components/SectionHeader';
import { certifications, education } from '../data/portfolio';

export function CredentialsSection() {
  return (
    <section className="credentials" id="credentials">
      <div className="container">
        <SectionHeader
          title="Education & Certifications"
          subtitle="Continuous learning is my passion"
        />

        <div className="credentials__grid">
          <div className="credentials__column">
            <h3 className="credentials__heading">
              <span className="credentials__icon">🎓</span>
              Education
            </h3>
            <div className="credentials__list">
              {education.map((edu) => (
                <div key={edu.id} className="credential-card">
                  <div className="credential-card__header">
                    <h4 className="credential-card__title">{edu.degree}</h4>
                    <span className="credential-card__period">{edu.period}</span>
                  </div>
                  <p className="credential-card__subtitle">{edu.specialization}</p>
                  <p className="credential-card__institution">{edu.institution}</p>
                  <span className="credential-card__location">{edu.location}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="credentials__column">
            <h3 className="credentials__heading">
              <span className="credentials__icon">🏆</span>
              Certifications
            </h3>
            <div className="credentials__list">
              {certifications.map((cert, index) => (
                <div key={index} className="credential-card">
                  <div className="credential-card__header">
                    <h4 className="credential-card__title">{cert.name}</h4>
                    <span className="credential-card__period">{cert.year}</span>
                  </div>
                  <p className="credential-card__institution">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}