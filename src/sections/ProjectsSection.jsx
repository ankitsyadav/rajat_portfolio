import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionHeader
          title="Featured Projects"
          subtitle="Real projects I've built to sharpen my frontend skills"
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

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
