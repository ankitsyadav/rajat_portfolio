export function SkillCard({ name, icon, skills }) {
  return (
    <div className="skill-card">
      <div className="skill-card__header">
        <span className="skill-card__icon">{icon}</span>
        <h3 className="skill-card__title">{name}</h3>
      </div>
      <div className="skill-card__list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
