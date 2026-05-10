import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';

export function ProjectsSection() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionHeader
          title="My Projects"
          subtitle="Things I've built with code"
        />

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}