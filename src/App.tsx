import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'resume', 'contact'];
    
    // Configure precise intersection boundaries for sticky headers
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -40% 0px', // triggers early when heading scrolling in
      threshold: 0.15,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="bg-[#0f172a] text-[#f3f4f6] min-h-screen font-sans antialiased overflow-x-hidden selection:bg-[#38bdf8] selection:text-white">
      {/* Background radial soft shading for continuous organic feel */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#38bdf8]/10 via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation bar */}
        <Navbar activeSection={activeSection} />

        {/* Dynamic section stack */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Resume />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
