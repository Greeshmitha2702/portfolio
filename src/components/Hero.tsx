import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#0f172a] overflow-hidden px-6 pt-20"
    >
      {/* Cinematic Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating Orb 1 */}
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-[#38bdf8]/15 filter blur-[80px] md:blur-[120px] mix-blend-screen opacity-70"
        />
        {/* Floating Orb 2 */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-80 md:w-[450px] h-80 md:h-[450px] rounded-full bg-[#38bdf8]/10 filter blur-[100px] md:blur-[150px] mix-blend-screen opacity-65"
        />

        {/* Diagonal Light Mesh Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(ellipse at center, #ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Sleek Theme Rotated Background Block */}
        <div className="absolute right-0 top-0 w-2/3 h-full overflow-hidden opacity-30 pointer-events-none">
          <div className="w-full h-full bg-[#141414] opacity-40 flex items-center justify-center border-l border-white/5">
             <div className="grid grid-cols-6 gap-3 rotate-12 opacity-20">
                <div className="w-24 h-24 bg-[#38bdf8] rounded-sm"></div>
                <div className="w-24 h-24 bg-zinc-800 rounded-sm"></div>
                <div className="w-24 h-24 bg-[#38bdf8] rounded-sm"></div>
                <div className="w-24 h-24 bg-zinc-800 rounded-sm"></div>
                <div className="w-24 h-24 bg-zinc-800 rounded-sm"></div>
                <div className="w-24 h-24 bg-[#38bdf8] rounded-sm"></div>
                <div className="w-24 h-24 bg-[#38bdf8] rounded-sm"></div>
                <div className="w-24 h-24 bg-zinc-800 rounded-sm"></div>
                <div className="w-24 h-24 bg-zinc-800 rounded-sm"></div>
             </div>
          </div>
        </div>

        {/* Bottom dark blend cover, simulating Netflix cinema fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Sleek Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center space-x-3 mb-6"
          id="hero-badge"
        >
        </motion.div>

        {/* Big Premium Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-5xl sm:text-7xl md:text-9xl font-display font-black tracking-tighter mb-6 uppercase text-white"
          id="hero-title"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Dynamic Subtitle/Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl font-mono font-bold text-[#38bdf8] tracking-[0.2em] uppercase mb-4"
          id="hero-role-title"
        >
          {PERSONAL_INFO.title}
        </motion.p>

        {/* Brief Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg max-w-2xl text-[#a1a1aa] font-sans leading-relaxed mb-10"
          id="hero-description"
        >
          {PERSONAL_INFO.subtagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
          id="hero-ctas"
        >
          {/* Main View Work Action / Pure White fill */}
          <button
            onClick={() => handleScrollTo('projects')}
            className="group px-8 py-4 bg-white hover:bg-gray-200 text-black rounded-sm font-bold text-sm tracking-widest uppercase transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 shadow-lg shadow-white/5 hover:-translate-y-0.5 cursor-pointer"
            id="hero-view-projects-btn"
          >
            <span>▶</span> Explore Projects
          </button>

          {/* Secondary Outline Action */}
          <button
            onClick={() => handleScrollTo('about')}
            className="px-8 py-4 bg-zinc-800/60 hover:bg-zinc-700 text-white rounded-sm font-bold text-sm tracking-widest uppercase border border-white/10 hover:border-white/20 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
            id="hero-download-resume-btn"
          >
            ⓘ About Me
          </button>
        </motion.div>

        {/* Quick Social Icons bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 flex gap-6"
          id="hero-socials"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[#a1a1aa] hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 border border-transparent hover:border-white/10"
            aria-label="GitHub profile link"
            id="hero-github-link"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-[#a1a1aa] hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 border border-transparent hover:border-white/10"
            aria-label="LinkedIn profile link"
            id="hero-linkedin-link"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll down indicator arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          onClick={() => handleScrollTo('about')}
          className="absolute bottom-6 cursor-pointer text-[#a1a1aa] hover:text-white"
          id="hero-scroll-indicator"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest font-bold">Scroll Down</span>
            <div className="w-1.5 h-6 rounded-full bg-white/20 relative overflow-hidden">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 left-0 right-0 h-2 bg-[#38bdf8] rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
