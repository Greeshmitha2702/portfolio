import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Mail, MapPin, Terminal, Award } from 'lucide-react';
import { PERSONAL_INFO, PORTFOLIO_STATS } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#0B1120] relative overflow-hidden px-6"
    >
      {/* Background accents */}
      <div className="absolute right-0 top-1/3 w-64 h-64 rounded-full bg-[#8B5CF6]/5 filter blur-[100px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#8B5CF6]"
          >
            <span className="w-8 h-[1px] bg-[#8B5CF6]" />
            <span>01 . Introduction</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white"
            id="about-heading"
          >
            Crafting Systems & Experience<span className="text-[#8B5CF6]">.</span>
          </motion.h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Mockup Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative group"
            id="about-visual-column"
          >
            {/* Ambient glow behind portrait */}
            <div className="absolute -inset-2 rounded-md bg-gradient-to-tr from-[#8B5CF6]/20 to-[#3B82F6]/20 opacity-0 group-hover:opacity-100 filter blur-xl transition-all duration-700" />

            {/* Simulated Desktop window */}
            <div className="relative rounded-md bg-[#1F2937] border border-white/10 overflow-hidden shadow-2xl transition-all duration-500 group-hover:border-[#8B5CF6]/25 group-hover:translate-y-[-4px]">
              {/* Header */}
              <div className="px-4 py-3 bg-[#111827] border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-750" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/45 uppercase tracking-widest font-bold">
                  <Terminal className="w-3 h-3 text-[#8B5CF6]" />
                  alex_morgan_portrait.sh
                </div>
              </div>

              {/* Workstation photo container */}
              <div className="relative aspect-[4/5] bg-[#1a1a1e] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                  alt="Alex Morgan - Senior Developer portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Visual Glass Blur Card overlaying bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-sm bg-[#0B1120]/85 backdrop-blur-md border border-white/10 text-xs text-white/95">
                  <div className="flex items-center gap-2 font-mono font-bold text-[#8B5CF6] mb-1 uppercase tracking-wider">
                    <Award className="w-3.5 h-3.5" />
                    <span>Focus Area: High Performance</span>
                  </div>
                  <p className="text-[#94A3B8] font-sans">
                    Blending modern WebGL animation engines with type-safe distributed database infrastructures.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Details and Stats Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center" id="about-details-column">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6 text-[#94A3B8] leading-relaxed text-base"
            >
              <h3 className="text-white text-xl font-display font-bold tracking-tight">
                Hey, I'm {PERSONAL_INFO.name}. I build scalable full stack applications and modern digital experiences.
              </h3>
              <p>
                {PERSONAL_INFO.bio}
              </p>
              <p>
                From developing responsive frontend interfaces to designing backend APIs and deploying applications, I focus on creating clean, efficient, and user-centric solutions. I believe strong engineering combines performance, scalability, and intuitive user experience to build products that make a real impact.
              </p>

              {/* Technical Bio Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/85 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-sm bg-white/5 text-[#8B5CF6] border border-white/5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-sm bg-white/5 text-[#8B5CF6] border border-white/5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>{PERSONAL_INFO.email}</span>
                </div>
              </div>
            </motion.div>

            {/* Performance Stats Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 bg-[#1F2937] border border-white/10 rounded-sm p-6 shadow-xl relative"
              id="about-stats-grid"
            >
              {PORTFOLIO_STATS.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#a1a1aa] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
