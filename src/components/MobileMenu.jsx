import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';
import { personalInfo } from '../data/personalInfo';

export const MobileMenu = ({ isOpen, onClose, navLinks, activeSection, onOpenResume }) => {
  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: 'circle(30px at calc(100% - 40px) 40px)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      opacity: 1,
      clipPath: 'circle(1500px at calc(100% - 40px) 40px)',
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 30
      }
    }
  };

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { y: 20, opacity: 0 },
    open: { y: 0, opacity: 1 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 bg-[#070709]/95 backdrop-blur-2xl flex flex-col justify-between p-6 md:p-12 border-l border-white/10"
        >
          {/* Header Bar inside overlay */}
          <div className="flex items-center justify-between">
            <span className="font-heading font-extrabold text-lg tracking-wider text-white">
              {personalInfo.name}
            </span>
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <motion.div variants={containerVariants} className="my-auto py-8 space-y-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <motion.div key={link.id} variants={itemVariants}>
                  <a
                    href={`#${link.id}`}
                    onClick={onClose}
                    className={`group flex items-center justify-between text-3xl sm:text-4xl font-heading font-bold uppercase tracking-tight py-2 transition-colors ${
                      isActive ? 'text-indigo-400' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-indigo-400" />
                  </a>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Social & Resume */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-indigo-600/90 hover:bg-indigo-600 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
