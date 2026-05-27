import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { skills } from '../data/portfolio';

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const categories = skills.categories;

  return (
    <section className="skills" id="skills">
      <div className="container">
        <SectionHeader
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <div className="tabbed-skills">
          <div className="tab-buttons">
            {categories.map((cat, index) => (
              <button
                key={cat.name}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <div className="tab-content">
            <div className="skills-grid">
              {categories[activeTab].skills.map((skill, i) => (
                <span
                  key={skill}
                  className="skill-chip"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
