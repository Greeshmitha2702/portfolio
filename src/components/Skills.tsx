import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Cpu,
  Code,
  Paintbrush,
  Sparkles,
  Globe,
  Layers,
  Server,
  Database,
  Share2,
  Zap,
  Box,
  Cloud,
  GitBranch,
  ExternalLink,
  CheckCircle,
  Eye,
  Users,
  Layout,
  Terminal,
} from 'lucide-react';
import { SKILLS_DATA } from '../data';
import { Skill } from '../types';

// Map string icon name to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu: Cpu,
  Code: Code,
  Paintbrush: Paintbrush,
  Sparkles: Sparkles,
  Globe: Globe,
  Layers: Layers,
  Server: Server,
  Database: Database,
  Share2: Share2,
  Zap: Zap,
  Container: Box,
  Cloud: Cloud,
  GitBranch: GitBranch,
  ExternalLink: ExternalLink,
  CheckCircle: CheckCircle,
  Eye: Eye,
  Users: Users,
  Layout: Layout,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'devops' | 'core' | 'database'>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Front-End Development' },
    { id: 'backend', label: 'Back-End & APIs' },
    { id: 'devops', label: 'cloud & DevOps' },
    { id: 'core', label: 'Core Programming' },
    { id: 'database', label: 'Database Management' },
  ];

  const filteredSkills = activeTab === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter(skill => skill.category === activeTab);

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'frontend': return { border: 'group-hover:border-[#8B5CF6]/40', icon: 'text-[#8B5CF6]', bg: 'bg-[#8B5CF6]/5' };
      case 'backend': return { border: 'group-hover:border-[#3B82F6]/40', icon: 'text-[#3B82F6]', bg: 'bg-[#3B82F6]/5' };
      case 'devops': return { border: 'group-hover:border-purple-500/40', icon: 'text-[#A855F7]', bg: 'bg-purple-500/5' };
      case 'core': return { border: 'group-hover:border-green-500/40', icon: 'text-green-400', bg: 'bg-green-500/5' };
      case 'database': return { border: 'group-hover:border-yellow-500/40', icon: 'text-yellow-400', bg: 'bg-yellow-500/5' };
      default: return { border: 'group-hover:border-[#8B5CF6]/40', icon: 'text-[#8B5CF6]', bg: 'bg-[#8B5CF6]/5' };
    }
  };

  return (
    <section
      id="skills"
      className="py-24 bg-[#111827] relative overflow-hidden px-6"
    >
      {/* Background decoration */}
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-[#8B5CF6]/5 filter blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#8B5CF6]"
          >
            <span className="w-8 h-[1px] bg-[#8B5CF6]" />
            <span>02 . Stack</span>
          </motion.div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white mb-0"
              id="skills-heading"
            >
              Engineered Capabilities<span className="text-[#8B5CF6]">.</span>
            </motion.h2>

            {/* Cinematic filter controls */}
            <div className="flex flex-wrap gap-2 overflow-x-auto w-full md:w-auto pb-2 scrollbar-none" id="skills-filter-container">
              {categories.map((catString) => (
                <button
                  key={catString.id}
                  onClick={() => setActiveTab(catString.id as any)}
                  className={`px-4 py-2 text-xs font-mono font-bold uppercase rounded-sm transition-all duration-300 pointer-events-auto whitespace-nowrap border ${
                    activeTab === catString.id
                      ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] shadow-lg shadow-[#8B5CF6]/20'
                      : 'bg-white/5 text-[#94A3B8] border-white/5 hover:text-white hover:bg-white/10 hover:border-white/10'
                  }`}
                  id={`skills-tab-${catString.id}`}
                >
                  {catString.label}
                </button>
              ))}
            </div>
          </div>
        </div>
 
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="skills-grid">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.iconName] || Terminal;
              const theme = getCategoryTheme(skill.category);
 
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className={`group p-6 rounded-sm bg-[#1F2937] border border-white/10 hover:shadow-2xl hover:shadow-[#8B5CF6]/5 transition-all duration-300 relative overflow-hidden ${theme.border}`}
                  id={`skill-card-${index}`}
                >
                  {/* Hover glow background card */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
 
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      {/* Stylized Icon container */}
                      <div className={`p-3 rounded-sm border border-white/5 transition-all duration-300 ${theme.bg}`}>
                        <IconComponent className={`w-6 h-6 ${theme.icon}`} />
                      </div>
                      <div>
                        <h3 className="text-white font-sans font-bold text-base tracking-tight group-hover:text-white transition-colors">
                          {skill.name}
                        </h3>
                        <p className="text-[#94A3B8] font-mono text-[10px] uppercase tracking-widest mt-0.5">
                          {skill.category}
                        </p>
                      </div>
                    </div>

                    {/* Minimal status dot */}
                    <div className="relative flex h-2 w-2">
                       <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-45 ${
                        skill.category === 'frontend' ? 'bg-[#8B5CF6]' : 'bg-[#3B82F6]'
                      }`} />
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${
                        skill.category === 'frontend' ? 'bg-[#8B5CF6]' : 'bg-[#3B82F6]'
                      }`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
