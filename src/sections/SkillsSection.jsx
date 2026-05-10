import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';
import { skills } from '../data/portfolio';

export function SkillsSection() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <SectionHeader
          title={skills.title}
          subtitle={skills.subtitle}
        />

        <div className="skills__grid">
          {skills.categories.map((category) => (
            <SkillCard
              key={category.name}
              name={category.name}
              icon={category.icon}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}