import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-onyx/90 backdrop-blur-sm p-4 md:p-10"
        >
          <motion.div
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-ivory w-full max-w-6xl h-full md:h-auto max-h-full overflow-y-auto relative rounded-sm shadow-2xl flex flex-col md:flex-row"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-10 bg-white/50 hover:bg-white p-2 rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-6 h-6 text-onyx" />
            </button>

            <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col overflow-y-auto">
              <p className="text-xs uppercase tracking-widest text-champagne mb-4 font-semibold">
                {project.category}
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 text-onyx">
                {project.title}
              </h2>
              <p className="text-charcoal/80 font-light text-lg mb-12 leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-y-8 gap-x-4 border-t border-charcoal/10 pt-8 mt-auto">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-charcoal/50 mb-1">Location</p>
                  <p className="font-medium">{project.location}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-charcoal/50 mb-1">Year</p>
                  <p className="font-medium">{project.year}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-charcoal/50 mb-1">Area</p>
                  <p className="font-medium">{project.area || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-charcoal/50 mb-1">Architecture</p>
                  <p className="font-medium">{project.architecture || 'HĀVEN Studio'}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
