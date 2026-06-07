import { useState, useMemo } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/portfolio';

const FEATURED_COUNT = 3;

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = useMemo(
    () => (showAll ? projects : projects.slice(0, FEATURED_COUNT)),
    [showAll]
  );

  return (
    <section className="projects" id="projects">
      <div className="container">
        <SectionHeader
          title="My Projects"
          subtitle="Real-world applications I've built from scratch"
        />

        <div className="projects__grid">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > FEATURED_COUNT && (
          <div className="projects__toggle">
            <button
              className="btn btn--outline btn--lg"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? (
                <>Show Less</>
              ) : (
                <>
                  View All Projects ({projects.length})
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
