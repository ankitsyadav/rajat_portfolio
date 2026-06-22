import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { stackCategories } from '../data/portfolio';

export function StackSection() {
  return (
    <section className="stack" id="stack">
      <div className="container">
        <SectionHeader
          label="Stack"
          title="What I use."
          subtitle="Production-tested tools I work with daily."
        />

        <div className="stack-grid">
          {stackCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              className="stack-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="stack-category__title">{category.title}</h3>
              <div className="stack-items">
                {category.items.map((item) => (
                  <div key={item.name} className="stack-item">
                    <span className="stack-item__icon" aria-hidden="true">{item.icon}</span>
                    <span className="stack-item__name">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
