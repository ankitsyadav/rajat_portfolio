import { useState, useMemo } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = useMemo(() => {
    const cats = projects.map((p) => p.category);
    return ['All', ...new Set(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionHeader
          title="My Projects"
          subtitle="Things I've built with code"
        />

        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--c-text-muted)' }}>
            No projects match this category.
          </p>
        )}

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
