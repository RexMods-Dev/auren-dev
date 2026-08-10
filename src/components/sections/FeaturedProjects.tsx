import { useState } from 'react';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';
import { projects } from '../../data/projects';
import type { Project } from '../../types';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-40 bg-ivory text-onyx px-5 md:px-10 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-charcoal/50 mb-6">
              02 / Our Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Selected Projects
            </h2>
          </div>
          <p className="text-lg md:text-xl font-light text-charcoal/70 max-w-md md:text-right">
            A portfolio shaped by context, material, light and enduring value.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
