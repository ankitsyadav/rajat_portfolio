export function ExperienceCard({ role, company, period, description, highlights, technologies }) {
  return (
    <div className="experience-card">
      <div className="experience-card__header">
        <h3 className="experience-card__role">{role}</h3>
        <span className="experience-card__company">{company}</span>
      </div>
      <p className="experience-card__period">{period}</p>
      {description && (
        <p className="experience-card__description">{description}</p>
      )}
      <ul className="experience-card__highlights">
        {highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
      <div className="experience-card__technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="exp-tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
