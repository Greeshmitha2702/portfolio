import React from 'react';
import { ChevronUp, Code2, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0B1120] border-t border-white/5 py-12 px-6 relative mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left trademark */}
        <div className="flex items-center gap-2">
          <span className="p-1 px-2 rounded-sm bg-[#8B5CF6] text-white font-sans text-[10px] tracking-widest font-black uppercase">
            DEV
          </span>
          <span className="text-white font-display font-black text-sm tracking-wider uppercase">
            PORTFOLIO<span className="text-[#8B5CF6]">.</span>
          </span>
          <span className="text-white/35 font-mono text-xs">
            / Edition 2026
          </span>
        </div>

        {/* Center note */}
        <div className="text-[#94A3B8] font-sans text-xs flex items-center gap-1.5">
          <span>Created with</span>
          <Heart className="w-3 h-3 text-[#8B5CF6] fill-[#8B5CF6] animate-pulse" />
          <span>using React & Tailwind CSS. © {currentYear} Greeshmitha.</span>
        </div>

        {/* Right Back to Top arrow */}
        <button
          onClick={handleScrollToTop}
          className="p-3 bg-white/5 rounded-sm text-[#94A3B8] hover:text-white hover:bg-[#8B5CF6]/15 border border-white/10 hover:border-[#8B5CF6]/30 transition-all duration-300 flex items-center justify-center gap-2 group text-xs font-mono uppercase tracking-widest font-bold cursor-pointer"
          id="footer-back-to-top-btn"
        >
          <span>Back to Top</span>
          <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
