import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import { heroContent, featuredProject, stats } from '../data/portfolio';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  const cardX = useTransform(springX, [-0.5, 0.5], [8, -8]);
  const cardY = useTransform(springY, [-0.5, 0.5], [8, -8]);

  const handleMouse = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      className="hero"
      id="home"
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
    >
      <div className="container">
        <div className="hero-layout">
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="hero-badge-dot" />
              Open to Opportunities
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              {heroContent.name}
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subtitle">
              {heroContent.title}
            </motion.p>

            <motion.p variants={itemVariants} className="hero-description">
              {heroContent.subtitle}
            </motion.p>

            <motion.p variants={itemVariants} className="hero-roles">
              Open to Full Stack Developer &middot; React Developer &middot; Software Engineer Roles
            </motion.p>

            <motion.div variants={itemVariants} className="hero-tech">
              {heroContent.techStack.map((t, i) => (
                <span key={t} className="hero-tech-item">
                  {t}{i < heroContent.techStack.length - 1 && <span className="hero-tech-sep">•</span>}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="hero-actions">
              <a href="/Rajat_resume.pdf" download="Rajat_Yadav_Full_Stack_Developer_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                Download Resume
              </a>
              <button className="btn btn--secondary" onClick={() => scrollTo('contact')}>
                Contact Me
              </button>
              <button className="btn btn--ghost" onClick={() => scrollTo('projects')}>
                View Projects
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ translateX: cardX, translateY: cardY }}
          >
            <div className="hero-preview__card">
              <div className="hero-preview__image">
                <motion.img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  loading="eager"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="hero-preview__image-shimmer" />
              </div>
              <div className="hero-preview__body">
                <h3 className="hero-preview__title">{featuredProject.title}</h3>
                <div className="hero-preview__tech">
                  {featuredProject.techStack.map((t) => (
                    <span key={t} className="hero-preview__tech-tag">{t}</span>
                  ))}
                </div>
                <div className="hero-preview__impact">
                  {featuredProject.impact.map((item) => (
                    <div key={item.label} className="hero-preview__impact-stat">
                      <span className="hero-preview__impact-value">{item.value}</span>
                      <span className="hero-preview__impact-label">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="hero-preview__actions">
                  <a
                    href={featuredProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--sm"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
