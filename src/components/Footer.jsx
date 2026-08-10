import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#050505] relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Identity & Subtitle */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center font-mono text-xs text-indigo-300 font-bold">
              NF
            </span>
            <span className="font-heading font-extrabold text-lg md:text-xl text-white tracking-tight uppercase">
              {personalInfo.name}
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-sans">
            {personalInfo.role}
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            {personalInfo.college}
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all hover:scale-110"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all hover:scale-110"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all hover:scale-110"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-zinc-400 hover:text-white transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
          </button>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
        <span>© 2026 Nowrin Fathima. All rights reserved.</span>
        <span>Built with React, Vite & Tailwind CSS</span>
      </div>
    </footer>
  );
};
