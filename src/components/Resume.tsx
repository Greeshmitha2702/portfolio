import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Resume() {
  const [downloadState, setDownloadState] = useState<'idle' | 'downloading' | 'completed'>('idle');

  const handleDownloadClick = () => {
    setDownloadState('downloading');
    
    // Simulate a short download animation state change
    setTimeout(() => {
      setDownloadState('completed');
      setTimeout(() => {
        setDownloadState('idle');
      }, 3000);
    }, 1200);
  };

  return (
    <section
      id="resume"
      className="py-24 bg-[#0B1120] relative overflow-hidden px-6"
    >
      {/* Premium Cinematic Background Glows */}
      <div className="absolute right-1/4 top-1/4 w-96 h-96 rounded-full bg-[#38bdf8]/10 filter blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 w-80 h-80 rounded-full bg-[#8B5CF6]/5 filter blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-2 text-xs font-semibold uppercase tracking-widest text-[#38bdf8]"
          >
            <span className="w-8 h-[1px] bg-[#38bdf8]" />
            <span>05 . Credentials</span>
            <span className="w-8 h-[1px] bg-[#38bdf8]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white mb-4"
            id="resume-heading"
          >
            Get My Resume<span className="text-[#38bdf8]">.</span>
          </motion.h2>
          <p className="text-[#94A3B8] text-sm sm:text-base font-sans max-w-xl mx-auto leading-relaxed">
            Interested in working together? Download the print-ready PDF version of my curriculum vitae containing my detailed technical experience, education, and skillset.
          </p>
        </div>

        {/* High-Fidelity Interactive Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="bg-[#1e293b]/40 backdrop-blur-md border border-white/10 rounded-xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl relative group hover:border-white/20 transition-all duration-300"
          id="resume-card-container"
        >
          {/* Top border colored line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#38bdf8] to-[#8B5CF6] rounded-t-xl" />

          {/* Interactive Document Icon Graphic */}
          <div className="relative mx-auto mb-8 w-24 h-28 bg-[#0f172a] border border-white/15 rounded-md flex flex-col justify-between p-4 shadow-xl overflow-hidden group-hover:border-[#38bdf8]/50 transition-all duration-500">
            {/* Folder tab effect in top right */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#1e293b] border-l border-b border-white/15 rounded-bl-md" />
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#38bdf8]/10 group-hover:bg-[#38bdf8]/20 transition-colors" />

            {/* Glowing inner elements */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="w-10 h-2 bg-[#38bdf8]/40 rounded-full" />
              <div className="w-14 h-2 bg-white/20 rounded-full" />
              <div className="w-8 h-2 bg-white/10 rounded-full" />
            </div>
            
            {/* Lucide Doc Icon */}
            <div className="self-end p-1.5 rounded bg-[#38bdf8]/10 text-[#38bdf8] group-hover:bg-[#38bdf8] group-hover:text-slate-950 transition-all duration-300">
              <FileText className="w-5 h-5" />
            </div>
          </div>

          <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
            {PERSONAL_INFO.name}
          </h3>
          <p className="text-[#38bdf8] font-mono text-xs uppercase tracking-widest mb-6">
            {PERSONAL_INFO.title}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <motion.a
              href="/Greeshmitha-Resume.pdf"
              download="Greeshmitha-Resume.pdf"
              onClick={handleDownloadClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-3 px-8 py-4 bg-[#38bdf8] hover:bg-[#0284c7] text-slate-950 font-mono font-black text-xs uppercase tracking-wider rounded-sm shadow-xl shadow-[#38bdf8]/15 hover:shadow-[#38bdf8]/35 transition-all duration-300 w-full sm:w-auto justify-center"
              id="resume-main-download-btn"
            >
              <AnimatePresence mode="wait">
                {downloadState === 'downloading' ? (
                  <motion.span
                    key="downloading"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    Preparing Download...
                  </motion.span>
                ) : downloadState === 'completed' ? (
                  <motion.span
                    key="completed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 text-emerald-800"
                  >
                    <CheckCircle2 className="w-4.5 h-4.5 animate-bounce" />
                    Downloaded!
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
                    Download Resume (PDF)
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.a>

            <span className="text-[#64748B] text-xs font-mono">
              PDF Format • ~79 KB
            </span>
          </div>

          {/* Core Skills Preview highlights */}
          <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-3 gap-2 text-left">
            <div className="text-center sm:text-left">
              <span className="block text-white text-xs font-bold uppercase tracking-wider mb-1 font-mono">Education</span>
              <span className="text-slate-400 text-xs font-sans">B.Tech CSE, GITAM</span>
            </div>
            <div className="text-center">
              <span className="block text-white text-xs font-bold uppercase tracking-wider mb-1 font-mono">Focus</span>
              <span className="text-slate-400 text-xs font-sans">Full Stack & Backend</span>
            </div>
            <div className="text-center sm:text-right">
              <span className="block text-white text-xs font-bold uppercase tracking-wider mb-1 font-mono">Status</span>
              <span className="text-slate-400 text-xs font-sans">Open to Opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
