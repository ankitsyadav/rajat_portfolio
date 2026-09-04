import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { experience, education } from '../data/portfolio';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function ExperienceSection() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <SectionHeader
          label="Experience"
          title="Where I've worked."
          subtitle="Shipping production features and driving measurable outcomes."
        />

        <div className="exp-grid">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              className="exp-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="exp-card__header">
                <div className="exp-card__company-row">
                  <div className="exp-card__icon" aria-hidden="true">
                    {item.company[0]}
                  </div>
                  <div className="exp-card__title-group">
                    <h3 className="exp-card__company">{item.company}</h3>
                    <p className="exp-card__role">{item.role}</p>
                  </div>
                </div>
                <div className="exp-card__meta">
                  <span className="exp-card__period">{item.period}</span>
                  {item.location && (
                    <>
                      <span className="exp-card__meta-dot" aria-hidden="true" />
                      <span className="exp-card__location">{item.location}</span>
                    </>
                  )}
                </div>
              </div>

              {item.metrics && item.metrics.length > 0 && (
                <div className="exp-card__metrics">
                  {item.metrics.map((m) => (
                    <div key={m.label} className="exp-card__metric">
                      <span className="exp-card__metric-value">{m.value}</span>
                      <span className="exp-card__metric-label">{m.label}</span>
                    </div>
                  ))}
                </div>
              )}

              <ul className="exp-card__highlights">
                {item.highlights.map((h, i) => (
                  <li key={i} className="exp-card__highlight">{h}</li>
                ))}
              </ul>

              {item.technologies && (
                <div className="exp-card__tech">
                  {item.technologies.map((t, i) => (
                    <span key={i} className="exp-card__tech-tag">{t}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="exp-education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label" style={{ marginBottom: '16px' }}>Education</p>
          <div className="edu-grid">
            {education.map((edu) => (
              <div key={edu.id} className="edu-card">
                <div className="edu-card__header">
                  <div>
                    <h4 className="edu-card__degree">{edu.degree}</h4>
                    {edu.specialization && (
                      <p className="edu-card__specialization">{edu.specialization}</p>
                    )}
                  </div>
                  <span className="edu-card__period">{edu.period}</span>
                </div>
                <p className="edu-card__institution">{edu.institution}</p>
                {edu.location && (
                  <p className="edu-card__location">{edu.location}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
