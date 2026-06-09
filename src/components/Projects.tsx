import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight, FolderGit, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'featured'
    ? PROJECTS_DATA.filter(p => p.featured)
    : PROJECTS_DATA;

  return (
    <section
      id="projects"
      className="py-24 bg-[#0B1120] relative overflow-hidden px-6"
    >
      {/* Visual background lights */}
      <div className="absolute right-0 top-1/2 w-96 h-96 rounded-full bg-[#8B5CF6]/5 filter blur-[150px]" />
      <div className="absolute left-10 top-1/4 w-80 h-80 rounded-full bg-[#3B82F6]/5 filter blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white mb-3"
                id="projects-heading"
              >
                Featured Projects
              </motion.h2>
            </div>

            {/* Selector filter */}
            <div className="flex bg-[#111827] p-1 border border-white/10 rounded-sm self-stretch sm:self-auto" id="projects-selector-container">
              <button
                onClick={() => setFilter('all')}
                className={`flex-1 sm:flex-initial px-5 py-2 rounded-sm text-xs font-mono font-bold uppercase transition-all duration-300 pointer-events-auto whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/15'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
                id="projects-tab-all"
              >
                All Works
              </button>
              <button
                onClick={() => setFilter('featured')}
                className={`flex-1 sm:flex-initial px-5 py-2 rounded-sm text-xs font-mono font-bold uppercase transition-all duration-300 pointer-events-auto whitespace-nowrap flex items-center justify-center gap-1.5 ${
                  filter === 'featured'
                    ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/15'
                    : 'text-[#94A3B8] hover:text-white'
                }`}
                id="projects-tab-featured"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Featured
              </button>
            </div>
          </div>
        </div>

        {/* Projects Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group rounded-sm bg-[#1F2937] border border-white/10 overflow-hidden shadow-2xl relative flex flex-col h-full hover:shadow-[#8B5CF6]/5 hover:border-[#8B5CF6]/50 transition-all duration-500"
                id={`project-card-${project.id}`}
              >
                {/* Visual Glass Header/Top Corner glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#8B5CF6]/10 to-transparent pointer-events-none rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Cover Image Block */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1a1a1e]">
                  {/* Glassmorphic Project Badge (e.g. Featured) */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-sm bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white text-[10px] uppercase font-mono font-bold tracking-widest flex items-center gap-1 border border-white/10">
                      <Sparkles className="w-3" />
                      Featured
                    </div>
                  )}

                  <img
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle black overlay to make cards cinematic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937] via-[#1F2937]/30 to-transparent opacity-90 transition-opacity duration-300" />
                </div>

                {/* Project Body details */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Project Title Block */}
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-white font-display font-extrabold text-xl sm:text-2xl tracking-tight group-hover:text-[#8B5CF6] transition-colors duration-300 leading-tight uppercase">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-1.5 rounded-sm bg-white/5 text-white/55 group-hover:text-[#8B5CF6] group-hover:bg-[#8B5CF6]/5 transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Project description */}
                  <p className="text-[#94A3B8] font-sans text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech pill badges tags */}
                  <div className="flex flex-wrap gap-1.5 mb-8" id={`project-${project.id}-tags-grid`}>
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-sm bg-white/5 text-[#f5f5f5]/75 text-[10px] font-mono uppercase tracking-wider border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Operational Web Link Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.githubUrl ? (
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white/90 rounded-sm text-xs font-mono font-bold uppercase transition-all duration-300 border border-white/10 flex items-center justify-center gap-2"
    id={`project-btn-git-${project.id}`}
  >
    <Github className="w-4 h-4" />
    Code Repository
  </a>
) : (
  <div
    className="flex-1 px-4 py-2.5 bg-[#1e293b] text-[#94A3B8] rounded-sm text-xs font-mono font-bold uppercase border border-white/5 flex items-center justify-center gap-2 cursor-not-allowed"
  >
    <Github className="w-4 h-4" />
    Under Progress
  </div>
)}

                    {/* Production live demo button */}
                    {project.liveUrl ? (
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 px-4 py-2.5 bg-[#8B5CF6] hover:bg-[#A855F7] text-white rounded-sm text-xs font-mono font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#8B5CF6]/10 cursor-pointer"
    id={`project-btn-live-${project.id}`}
  >
    <ExternalLink className="w-4 h-4" />
    Launch Demo
  </a>
) : (
  <div
    className="flex-1 px-4 py-2.5 bg-[#1e293b] text-[#94A3B8] rounded-sm text-xs font-mono font-bold uppercase flex items-center justify-center gap-2 cursor-not-allowed border border-white/5"
  >
    <ExternalLink className="w-4 h-4" />
    No Live Demo
  </div>
)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
