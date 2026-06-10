import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code2, Download } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const isMobileMenuOpen = isOpen;
    if (isMobileMenuOpen) {
      setIsOpen(false);
    }

    const performScroll = () => {
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

    if (isMobileMenuOpen) {
      // Delay the scroll slightly to allow the mobile menu close transition
      // to progress, preventing the mobile browser from cancelling the smooth scroll.
      setTimeout(performScroll, 200);
    } else {
      performScroll();
    }
  };

  return (
    <>
      <motion.nav
        id="main-navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0f172a]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 text-[#f5f5f5] font-display font-black text-xl tracking-tighter group hover:opacity-90"
            id="nav-logo"
          >
            <span className="p-1 px-2 rounded-sm bg-[#38bdf8] text-white shadow-lg shadow-[#38bdf8]/20 font-sans text-xs tracking-widest font-black uppercase">
              DEV
            </span>
            <span className="bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent font-display font-black uppercase text-lg tracking-widest">
              PORTFOLIO<span className="text-[#38bdf8]">.</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest transition-all duration-200 relative ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-[#a1a1aa] hover:text-white'
                }`}
                id={`nav-item-btn-${item.id}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#38bdf8] rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <a
              href="/Greeshmitha-Resume.pdf"
              download="Greeshmitha-Resume.pdf"
              className="ml-4 bg-[#38bdf8] px-5 py-2.5 rounded-sm font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#22c55e] text-white shadow-md shadow-[#38bdf8]/15 transition-all duration-300 flex items-center gap-2"
              id="nav-resume-download-shortcut"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#a1a1aa] hover:text-white rounded-lg hover:bg-white/5 transition-all outline-none"
            aria-label="Toggle menu"
            id="mobile-nav-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 bg-[#0f172a] border-b border-white/5 shadow-2xl z-40 md:hidden overflow-hidden backdrop-blur-lg"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {NAV_ITEMS.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-2 font-medium text-lg leading-relaxed ${
                    activeSection === item.id
                      ? 'text-[#38bdf8]'
                      : 'text-[#a1a1aa] hover:text-white'
                  }`}
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                href="/Greeshmitha-Resume.pdf"
                download="Greeshmitha-Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="mt-4 w-full py-3 bg-[#38bdf8] hover:bg-[#22c55e] text-white rounded-sm font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#38bdf8]/20 transition-all flex items-center justify-center gap-2"
                id="mobile-nav-resume-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
