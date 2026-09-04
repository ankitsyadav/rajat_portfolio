import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { aboutContent } from '../data/portfolio';

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <SectionHeader
          label="About"
          title="What I do."
          subtitle="Building across the full stack — frontend, backend, databases, and production infrastructure."
        />

        <div className="about-layout">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i} className="about-paragraph">{p}</p>
            ))}
          </motion.div>

          <motion.div
            className="about-capabilities"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {aboutContent.capabilities.map((cap) => (
              <div key={cap.label} className="about-cap">
                <span className="about-cap__label">{cap.label}</span>
                <span className="about-cap__items">{cap.items}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
