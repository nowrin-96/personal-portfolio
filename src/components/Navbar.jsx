import React, { useState, useEffect } from 'react';
import { Menu, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const Navbar = ({ activeSection, onOpenMobileMenu, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'me', label: 'Me' },
    { id: 'works', label: 'Works' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'notes', label: 'Notes' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-2xl shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-heading font-extrabold text-lg md:text-xl tracking-tight text-white focus:outline-none"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-mono text-sm font-bold shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            NF
          </span>
          <span className="tracking-widest uppercase text-sm md:text-base font-semibold group-hover:text-indigo-300 transition-colors">
            {personalInfo.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  isActive
                    ? 'bg-white/10 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-white transition-all hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenMobileMenu}
            aria-label="Open Navigation Menu"
            className="lg:hidden p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
