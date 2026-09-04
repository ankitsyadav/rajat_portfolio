import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { stackCategories } from '../data/portfolio';

const icons = {
  react: <svg viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(0 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)"/></svg>,
  nextjs: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill="#fff"/><text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="800" fill="#000" fontFamily="Inter,sans-serif">N</text></svg>,
  typescript: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6"/><text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff" fontFamily="Inter,sans-serif">TS</text></svg>,
  javascript: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E"/><text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#000" fontFamily="Inter,sans-serif">JS</text></svg>,
  tailwind: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3C9 3 7 5 6 9c2-1 3.5-1 5 0 1.5 1 2.5 2.5 5 4 3 1.5 5 0 6-3-2 1-3.5 1-5 0-1.5-1-2.5-2.5-5-4-3-1.5-5 0-6 3z" fill="#38BDF8"/></svg>,
  html5: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" fill="#E34F26"/><text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="Inter,sans-serif">H</text></svg>,
  nodejs: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l0 10 10 5 10-5V7L12 2z" fill="#339933"/><text x="12" y="15" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" fontFamily="Inter,sans-serif">N</text></svg>,
  api: <svg viewBox="0 0 24 24" fill="none" stroke="#8888a0" strokeWidth="1.5"><path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16"/></svg>,
  lock: <svg viewBox="0 0 24 24" fill="none" stroke="#8888a0" strokeWidth="1.5"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 118 0v4"/></svg>,
  postgresql: <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="4" fill="#336791"/><text x="12" y="16" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Inter,sans-serif">PG</text></svg>,
  prisma: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l8 18H4L12 2z" fill="#2D3748"/><path d="M12 2l8 18H4L12 2z" stroke="#667eea" strokeWidth="0.5"/><text x="12" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="#fff" fontFamily="Inter,sans-serif">P</text></svg>,
  database: <svg viewBox="0 0 24 24" fill="none" stroke="#8888a0" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="6" ry="2"/><path d="M6 5v6M18 5v6M6 11c0 1.1 2.7 2 6 2s6-.9 6-2"/><path d="M6 11v6M18 11v6M6 17c0 1.1 2.7 2 6 2s6-.9 6-2"/></svg>,
  git: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l10 10-10 10L2 12 12 2z" fill="#F05032"/><text x="12" y="15" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="Inter,sans-serif">G</text></svg>,
  vite: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l10 20H2L12 2z" fill="#646CFF"/><text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff" fontFamily="Inter,sans-serif">V</text></svg>,
  vercel: <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l10 18H2L12 3z" fill="#fff"/></svg>,
  play: <svg viewBox="0 0 24 24" fill="none" stroke="#8888a0" strokeWidth="1.5"><polygon points="8 5 19 12 8 19 8 5"/></svg>,
  sparkle: <svg viewBox="0 0 24 24" fill="none" stroke="#8888a0" strokeWidth="1.5"><path d="M12 2l2 7 7 2-7 2-2 7-2-7-7-2 7-2 2-7z"/></svg>,
};

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
              <div className="stack-category__header">
                <h3 className="stack-category__title">{category.title}</h3>
                <span className="stack-category__count">{category.items.length}</span>
              </div>
              <div className="stack-chips">
                {category.items.map((item) => (
                  <span key={item.name} className="stack-chip">
                    <span className="stack-chip__icon" aria-hidden="true">{icons[item.icon] || item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
