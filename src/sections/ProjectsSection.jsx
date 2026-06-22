import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { projects, featuredProject } from '../data/portfolio';

function FeaturedProjectCard({ project }) {
  return (
    <motion.div
      className="featured-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="featured-card__content">
        <span className="featured-card__label">Featured Project</span>
        <h3 className="featured-card__title">{project.title}</h3>

        <div className="featured-card__sections">
          <div className="featured-card__section">
            <span className="featured-card__section-label">Problem</span>
            <p className="featured-card__section-text">{project.problem}</p>
          </div>
          <div className="featured-card__section">
            <span className="featured-card__section-label">Solution</span>
            <p className="featured-card__section-text">{project.solution}</p>
          </div>
          <div className="featured-card__section">
            <span className="featured-card__section-label">Impact</span>
            <p className="featured-card__section-text">{project.impact}</p>
          </div>
        </div>

        <div className="featured-card__tags">
          {project.techStack.map((t) => (
            <span key={t} className="featured-card__tag">{t}</span>
          ))}
        </div>

        <div className="featured-card__actions">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
          >
            Live Demo <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--sm"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="featured-card__preview">
        <div className="browser-frame">
          <div className="browser-frame__toolbar">
            <div className="browser-frame__dots">
              <span className="browser-frame__dot browser-frame__dot--red" />
              <span className="browser-frame__dot browser-frame__dot--yellow" />
              <span className="browser-frame__dot browser-frame__dot--green" />
            </div>
            <span className="browser-frame__url">mallofamerica.com</span>
          </div>
          <div className="browser-frame__screen">
            <img src={project.image} alt={project.title} loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
            <div className="browser-frame__overlay">
              <div className="browser-frame__badge browser-frame__badge--left">
                {project.title} Interactive Sales Deck
              </div>
              <div className="browser-frame__stats">
                {featuredProject.impact.map((item) => (
                  <div key={item.label} className="browser-frame__stat">
                    <span className="browser-frame__stat-value">{item.value}</span>
                    <span className="browser-frame__stat-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
        ) : (
          <div className="project-card__image-placeholder">{project.title[0]}</div>
        )}
        <span className="project-card__category">{project.category}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          <span className="project-card__meta">{project.timeline}</span>
        </div>

        <div className="project-card__story">
          <div className="project-card__story-block">
            <span className="project-card__story-label">Problem</span>
            <p className="project-card__story-text project-card__story-text--clamp">{project.problem}</p>
          </div>
          <div className="project-card__story-block">
            <span className="project-card__story-label">Solution</span>
            <p className="project-card__story-text project-card__story-text--clamp">{project.solution}</p>
          </div>
          <div className="project-card__story-block">
            <span className="project-card__story-label">Impact</span>
            <span className="project-card__impact-badge">{project.impact.split('.')[0]}.</span>
          </div>
        </div>

        <div className="project-card__tech">
          {project.techStack.slice(0, 5).map((t) => (
            <span key={t} className="project-card__tech-tag">{t}</span>
          ))}
        </div>

        <div className="project-card__actions">
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--xs">
              Live
            </a>
          )}
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--xs">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionHeader
          label="Projects"
          title="What I've built."
          subtitle="Each project ships with measurable impact — from performance gains to business outcomes."
        />

        <div className="projects-featured">
          <FeaturedProjectCard project={featured} />
        </div>

        <div className="projects-grid">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
