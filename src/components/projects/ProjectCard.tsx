import { useRef } from 'react';
import gsap from 'gsap';
import type { Project } from '../../types';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.04,
      duration: 0.8,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.8,
      ease: 'power2.out'
    });
  };

  // Determine layout based on index for asymmetrical design
  const isEven = index % 2 === 0;
  const isFullWidth = index === 2; // Make the 3rd project full width

  return (
    <div 
      ref={containerRef}
      className={cn(
        "group cursor-pointer flex flex-col gap-8 md:gap-16",
        isFullWidth ? "md:flex-col" : (isEven ? "md:flex-row" : "md:flex-row-reverse")
      )}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={cn(
        "relative overflow-hidden",
        isFullWidth ? "w-full aspect-[21/9]" : "w-full md:w-[65%] aspect-[4/3] md:aspect-auto md:h-[600px]"
      )}>
        <img 
          ref={imageRef}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform-gpu"
        />
        <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/10 transition-colors duration-500" />
      </div>

      <div className={cn(
        "flex flex-col justify-center",
        isFullWidth ? "w-full md:flex-row md:justify-between md:items-end" : "w-full md:w-[35%]"
      )}>
        <div className={cn(isFullWidth && "md:w-1/2")}>
          <p className="text-xs uppercase tracking-widest text-champagne mb-4 font-semibold">
            {String(index + 1).padStart(2, '0')} — {project.category}
          </p>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 group-hover:translate-x-2 transition-transform duration-500">
            {project.title}
          </h3>
          <p className="text-charcoal/70 font-light text-lg mb-8 line-clamp-3">
            {project.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4 border-t border-charcoal/10 pt-6 mb-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-charcoal/50 mb-1">Location</p>
              <p className="font-medium">{project.location}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-charcoal/50 mb-1">Year</p>
              <p className="font-medium">{project.year}</p>
            </div>
          </div>
        </div>

        <div className={cn(
          "flex items-center",
          isFullWidth ? "pb-8" : "mt-auto"
        )}>
          <span className="text-xs uppercase tracking-widest font-medium mr-4">View Project</span>
          <ArrowRight className="w-5 h-5 text-champagne transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
        </div>
      </div>
    </div>
  );
}
