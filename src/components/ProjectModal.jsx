import { useEffect } from 'react';

export function ProjectModal({ project, onClose }) {
  const { title, category, overview, problem, solution, techStack, features, demoLink, githubLink } = project;

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close modal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modal__header">
          <span className="modal__category">{category}</span>
          <h2 className="modal__title">{title}</h2>
        </div>

        <div className="modal__body">

          <div className="modal__section">
            <h3 className="modal__section-title">Overview</h3>
            <p className="modal__text">{overview}</p>
          </div>

          <div className="modal__section">
            <h3 className="modal__section-title">Problem</h3>
            <p className="modal__text">{problem}</p>
          </div>

          <div className="modal__section">
            <h3 className="modal__section-title">Solution</h3>
            <p className="modal__text">{solution}</p>
          </div>

          <div className="modal__section">
            <h3 className="modal__section-title">Key Features</h3>
            <ul className="modal__feature-list">
              {features.map((feature, i) => (
                <li key={i}>
                  <span className="feature-dot"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal__section">
            <h3 className="modal__section-title">Tech Stack</h3>
            <div className="modal__tech-tags">
              {techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

        </div>

        <div className="modal__actions">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm">
              Live Demo
            </a>
          )}
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn--secondary btn--sm">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
