import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckSquare, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-[#111827] relative overflow-hidden px-6"
    >
      {/* Background custom lighting */}
      <div className="absolute left-1/3 top-1/4 w-72 h-72 rounded-full bg-[#8B5CF6]/5 filter blur-[100px]" />

      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#8B5CF6]"
          >
            <span className="w-8 h-[1px] bg-[#8B5CF6]" />
            <span>04 . Career</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white"
            id="experience-heading"
          >
            Milestones of Excellence<span className="text-[#8B5CF6]">.</span>
          </motion.h2>
        </div>

        {/* Timeline representation track */}
        <div className="relative border-l-2 border-[#8B5CF6]/20 pl-6 md:pl-10 ml-4 space-y-12" id="experience-timeline">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
              id={`experience-node-${exp.id}`}
            >
              {/* Timeline Orb Node */}
              <div className="absolute -left-[45px] md:-left-[61px] top-1.5 p-1 bg-[#111827] rounded-full z-10">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#1F2937] border-2 border-[#8B5CF6] flex items-center justify-center transition-colors group-hover:bg-[#8B5CF6]/20 shadow-lg shadow-[#8B5CF6]/20"
                >
                  <Briefcase className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#8B5CF6]" />
                </motion.div>
              </div>

              {/* Card Container */}
              <div className="p-6 md:p-8 bg-[#1F2937] border border-white/10 hover:border-[#8B5CF6]/40 rounded-sm shadow-xl transition-all duration-300 relative overflow-hidden group-hover:translate-x-1 group-hover:shadow-[#8B5CF6]/5">
                {/* Visual glow overlay inside card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#8B5CF6]/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Card Header details */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                  <div>
                    {/* Role title and leadership badge */}
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-white text-xl sm:text-2xl font-display font-black tracking-tight group-hover:text-[#8B5CF6] transition-colors uppercase">
                        {exp.role}
                      </h3>
                      {exp.isLeadership && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-white text-[10px] font-mono font-bold uppercase tracking-widest">
                          <Sparkles className="w-3 h-3 text-[#8B5CF6]" />
                          Leader
                        </span>
                      )}
                    </div>
                    {/* Organization info */}
                    <p className="text-[#f5f5f5]/85 font-sans font-semibold text-sm mt-1 uppercase tracking-wider text-[#8B5CF6]">
                      {exp.organization}
                    </p>
                  </div>

                  {/* Period Calendar pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 text-white/70 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Achievements block list */}
                <ul className="space-y-3.5" id={`experience-achievement-list-${exp.id}`}>
                  {exp.description.map((bullet, bulletIdx) => (
                    <li
                      key={bulletIdx}
                      className="flex items-start gap-3.5 text-sm sm:text-base text-[#94A3B8] leading-relaxed"
                    >
                      <span className="p-1 rounded-sm bg-white/5 text-[#8B5CF6] mt-0.5 shrink-0 flex items-center justify-center">
                        <CheckSquare className="w-3.5 h-3.5" />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
