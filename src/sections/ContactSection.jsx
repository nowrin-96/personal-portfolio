import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ContactForm } from '../components/ContactForm';
import { personalInfo } from '../data/personalInfo';
import { Mail, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../components/Icons';

export const ContactSection = ({ onOpenResume }) => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Info & Social Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono tracking-widest text-indigo-400 uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                GET IN TOUCH
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-heading text-white uppercase">
                LET'S BUILD <span className="text-gradient-accent">SOMETHING.</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
                Whether you're looking for an intern developer, technical collaborator, or interested in project discussions, my inbox is open.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 font-mono text-xs">
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-4 rounded-2xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#12121A] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">Email</span>
                    <span className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-white/[0.18] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-zinc-300">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">GitHub</span>
                    <span className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                      github.com/nowrin-96
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-white/[0.18] transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-zinc-300">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase">LinkedIn</span>
                    <span className="text-white font-semibold group-hover:text-indigo-300 transition-colors">
                      linkedin.com/in/nowrin-fathima-8b628233a
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Resume Button */}
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="w-full py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-medium text-xs font-mono flex items-center justify-center gap-2 transition-all hover:border-indigo-500/40"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View & Download Curriculum Vitae</span>
              </button>
            </div>
          </motion.div>

          {/* Interactive Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-6 p-8 md:p-10 rounded-3xl bg-[#0E0E12]/90 border border-white/[0.08] shadow-2xl space-y-6"
          >
            <h3 className="text-2xl font-bold font-heading text-white">
              Send a Direct Message
            </h3>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
