import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#111827] px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/10 blur-[180px] rounded-full" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Get In Touch
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-12"
        >
          Feel free to connect with me through these platforms.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6"
        >
          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            href={`mailto:${PERSONAL_INFO.email}`}
            className="w-16 h-16 rounded-full bg-[#1F2937] border border-white/10 flex items-center justify-center text-white hover:text-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-300 shadow-lg"
          >
            <Mail className="w-7 h-7" />
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-[#1F2937] border border-white/10 flex items-center justify-center text-white hover:text-[#3B82F6] hover:border-[#3B82F6] transition-all duration-300 shadow-lg"
          >
            <Linkedin className="w-7 h-7" />
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.1, y: -5 }}
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-[#1F2937] border border-white/10 flex items-center justify-center text-white hover:text-[#A855F7] hover:border-[#A855F7] transition-all duration-300 shadow-lg"
          >
            <Github className="w-7 h-7" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

