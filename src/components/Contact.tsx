import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, Send, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMess, setErrorMess] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMess('');

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMess('All fields are required.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form save
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#111827] relative overflow-hidden px-6"
    >
      {/* Glow backgrounds */}
      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#8B5CF6]/5 filter blur-[150px]" />
      <div className="absolute left-0 top-1/4 w-80 h-80 rounded-full bg-[#3B82F6]/5 filter blur-[120px]" />

      <div className="max-w-6xl mx-auto">
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
            <span>06 . Transmission</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-white"
            id="contact-heading"
          >
            Get In Touch<span className="text-[#8B5CF6]">.</span>
          </motion.h2>
        </div>

        {/* Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="contact-container">
          
          {/* Left Column: Social channels list */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 space-y-6"
            id="social-channels-column"
          >
            <div className="p-6 bg-[#1F2937] border border-white/10 rounded-sm">
              <h3 className="text-white text-lg font-display font-bold uppercase tracking-tight mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#8B5CF6]" />
                Let's discuss a project!
              </h3>
              <p className="text-[#a1a1aa] font-sans text-sm leading-relaxed mb-6">
                Have an innovative software build, consulting engagement, or corporate contract position in mind? Submit your enquiry or ping me on corporate secure social channels.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 px-3 py-2.5 rounded-sm bg-green-500/5 border border-green-500/10 text-green-400 text-xs font-mono w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span>Active Status: Available for freelance & contracts</span>
              </div>
            </div>

            {/* Premium Social Cards List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="social-cards-grid">
              {/* Card 1: Email */}
              <motion.a
                whileHover={{ y: -3 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-5 rounded-sm bg-[#1F2937] border border-white/10 hover:border-[#8B5CF6] hover:shadow-xl hover:shadow-[#8B5CF6]/2 flex flex-col justify-between aspect-square group transition-all duration-300"
                id="contact-mail-card"
              >
                <div className="p-3 w-fit rounded-sm bg-[#8B5CF6]/5 text-[#8B5CF6] group-hover:bg-[#8B5CF6]/10 transition-colors border border-white/5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-base uppercase">Direct Email</h4>
                  <p className="text-[#94A3B8] font-mono text-[11px] truncate mt-1">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </motion.a>

              {/* Card 2: LinkedIn */}
              <motion.a
                whileHover={{ y: -3 }}
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-sm bg-[#1F2937] border border-white/10 hover:border-[#3B82F6] hover:shadow-xl hover:shadow-blue-500/2 flex flex-col justify-between aspect-square group transition-all duration-300"
                id="contact-linkedin-card"
              >
                <div className="p-3 w-fit rounded-sm bg-blue-600/5 text-blue-400 group-hover:bg-[#3B82F6]/10 transition-colors border border-white/5">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-base uppercase">LinkedIn Network</h4>
                  <p className="text-[#94A3B8] font-mono text-[11px] truncate mt-1">
                    Connect organically
                  </p>
                </div>
              </motion.a>

              {/* Card 3: GitHub */}
              <motion.a
                whileHover={{ y: -3 }}
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-sm bg-[#1F2937] border border-white/10 hover:border-[#8B5CF6] hover:shadow-xl hover:shadow-gray-500/2 flex flex-col justify-between aspect-square group transition-all duration-300 col-span-1 sm:col-span-2"
                id="contact-github-card"
              >
                <div className="p-3 w-fit rounded-sm bg-white/5 text-white/80 group-hover:bg-white/10 transition-colors border border-white/5">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold text-base uppercase">GitHub Repositories</h4>
                  <p className="text-[#94A3B8] font-mono text-[11px] truncate mt-1">
                    Read the source architectures
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Web Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
            id="message-form-column"
          >
            <div className="p-8 md:p-10 bg-[#1F2937] border border-white/10 rounded-sm shadow-xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  /* Form Submission success message card */
                  <motion.div
                    key="success"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="py-12 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="p-4 rounded-full bg-gradient-to-br from-green-500/15 to-green-500/5 text-green-400 border border-green-500/10">
                      <ShieldCheck className="w-12 h-12 animate-pulse" />
                    </div>
                    <h3 className="text-white text-2xl font-display font-black tracking-tight uppercase">
                      Message Dispatched!
                    </h3>
                    <p className="text-[#94A3B8] font-sans text-sm max-w-sm">
                      Thank you for the message. I have recorded your session, and will respond back within 12 standard business hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-sm text-xs font-mono uppercase tracking-wider font-bold transition-all border border-white/10"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* Message Input Fields Form */
                  <motion.form
                    key="form"
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    <h3 className="text-white text-xl font-display font-extrabold tracking-tight mb-4 uppercase">
                      Direct Messaging Terminal
                    </h3>

                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="form-name" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
                        Full Identity / Corporate Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="form-name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-[#111827]/80 border border-white/10 focus:border-[#8B5CF6] rounded-sm text-white outline-none font-sans text-sm placeholder-white/20 transition-all focus:bg-black/40 focus:ring-1 focus:ring-[#8B5CF6]/25"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="form-email" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
                        Electronic Mail Contact
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="form-email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@enterprise.com"
                        className="w-full px-4 py-3 bg-[#111827]/80 border border-white/10 focus:border-[#8B5CF6] rounded-sm text-white outline-none font-sans text-sm placeholder-white/20 transition-all focus:bg-black/40 focus:ring-1 focus:ring-[#8B5CF6]/25"
                      />
                    </div>

                    {/* Message Body */}
                    <div className="space-y-2">
                      <label htmlFor="form-message" className="block text-xs font-mono font-bold uppercase tracking-wider text-[#94A3B8]">
                        Project Specification / Message Brief
                      </label>
                      <textarea
                        name="message"
                        id="form-message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe the stack requirements, timeline constraints, or position availability..."
                        className="w-full px-4 py-3 bg-[#111827]/80 border border-white/10 focus:border-[#8B5CF6] rounded-sm text-white outline-none font-sans text-sm placeholder-white/20 transition-all focus:bg-black/40 focus:ring-1 focus:ring-[#8B5CF6]/25 resize-none"
                      />
                    </div>

                    {errorMess && (
                      <p className="text-[#8B5CF6] text-xs font-mono font-bold">
                        * {errorMess}
                      </p>
                    )}

                    {/* Submit Button Trigger */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#8B5CF6] hover:bg-[#A855F7] disabled:bg-[#8B5CF6]/40 text-white rounded-sm font-bold uppercase tracking-wider text-xs shadow-lg shadow-[#8B5CF6]/15 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-mono"
                      id="contact-submit-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Dispatching Transmission...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Transmission</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
