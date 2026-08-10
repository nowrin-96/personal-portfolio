import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Sparkles, Code2, Cloud, Database, Layout } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const HeroSection = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8 z-10">
        
        {/* Floating Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-indigo-300 tracking-wider uppercase backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>{personalInfo.currentStatus} • Amal Jyothi College of Engineering</span>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight font-heading text-white uppercase"
        >
          NOWRIN <span className="text-gradient-accent">FATHIMA</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-light text-zinc-300 tracking-tight max-w-3xl mx-auto"
        >
          "{personalInfo.tagline}"
        </motion.p>

        {/* Concise Bio */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Floating Technology Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2 font-mono text-xs text-zinc-400"
        >
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            React & JS
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <Cloud className="w-3.5 h-3.5 text-blue-400" />
            AWS & Docker
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <Database className="w-3.5 h-3.5 text-emerald-400" />
            SQLite & MySQL
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <Layout className="w-3.5 h-3.5 text-purple-400" />
            UI/UX & Figma
          </span>
        </motion.div>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="#works"
            className="px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-xl shadow-indigo-600/25 active:scale-95 flex items-center gap-2"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#me"
            className="px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-sm transition-all hover:border-white/20 active:scale-95"
          >
            About Me
          </a>

          <button
            onClick={onOpenResume}
            className="px-7 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-sm transition-all hover:border-indigo-500/40 active:scale-95 flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>Download Resume</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
