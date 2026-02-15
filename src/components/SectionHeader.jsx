export function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
      <div className="section-divider">
        <span className="divider-dot"></span>
        <span className="divider-line"></span>
        <span className="divider-dot"></span>
      </div>
    </div>
  );
}
