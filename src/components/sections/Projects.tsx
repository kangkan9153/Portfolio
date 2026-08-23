import { useState } from 'react';
import { Section } from '../ui/Section';
import { PROJECTS } from '../../data/portfolio';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, ChevronRight } from 'lucide-react';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <Section id="projects" title="Featured Projects" subtitle="A selection of hardware and embedded software projects.">
      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors flex flex-col h-full cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="aspect-[16/9] w-full overflow-hidden border-b border-border relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full border border-border text-xs font-mono-tech font-medium">
                {project.status}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono-tech uppercase tracking-widest text-muted-foreground bg-muted border border-border px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-extrabold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
              
              <div className="flex items-center text-sm font-medium text-primary mt-auto">
                View Details <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-y-auto flex flex-col"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-background/50 hover:bg-background rounded-full transition-colors z-10 backdrop-blur-md"
              >
                <X size={20} />
              </button>
              
              <div className="w-full h-64 sm:h-80 relative shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-foreground bg-background/80 backdrop-blur-md px-3 py-1 rounded-full border border-border/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-2">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-red-500/90 dark:text-red-400">Problem</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-green-600/90 dark:text-green-400">Solution</h3>
                    <p className="text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 bg-muted p-6 rounded-xl border border-border">
                  <div>
                    <h3 className="font-mono-tech font-bold text-sm tracking-wider uppercase mb-4">Core Components</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      {selectedProject.components.map(c => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-mono-tech font-bold text-sm tracking-wider uppercase mb-4">Working Principle</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.principles}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <span className="text-sm text-muted-foreground font-mono-tech block mb-1">Status</span>
                    <span className="font-medium">{selectedProject.status}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg text-sm font-medium transition-colors">
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
