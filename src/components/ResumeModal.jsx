import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle, GraduationCap, Briefcase, Award } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0A0A0E] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="sticky top-0 z-20 bg-[#0A0A0E]/95 backdrop-blur-md px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-white">
                  Curriculum Vitae — {personalInfo.name}
                </h3>
                <p className="text-xs text-zinc-400">Official Candidate Summary</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Printable Style Resume View */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-zinc-300 font-sans text-xs md:text-sm leading-relaxed">
            
            {/* Header Identity */}
            <div className="border-b border-white/10 pb-6 space-y-2">
              <h2 className="text-2xl font-bold font-heading text-white tracking-wide">
                {personalInfo.name}
              </h2>
              <p className="text-indigo-400 font-mono text-xs">
                {personalInfo.role}
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-zinc-400 pt-2 font-mono">
                <span>📍 {personalInfo.location}</span>
                <span>✉️ {personalInfo.email}</span>
                <span>🔗 github.com/nowrin-96</span>
              </div>
            </div>

            {/* Career Objective */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
                Career Objective
              </h4>
              <p className="text-zinc-300 text-xs md:text-sm bg-white/[0.02] p-4 rounded-xl border border-white/5">
                BCA student (3rd Year, Amal Jyothi College of Engineering, Autonomous) with hands-on experience building full-stack web applications, cloud deployment training on AWS, and Oracle AI Foundations Associate certification. Active hackathon contributor (Smart India Hackathon 2025 Internal Winner, NASA Space Apps participant). Maintains a rising academic record (SGPA 7.95–8.54) with zero backlogs.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
                Education
              </h4>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex flex-wrap justify-between font-semibold text-white">
                  <span>Bachelor of Computer Applications (BCA)</span>
                  <span className="font-mono text-xs text-zinc-400">2024 – 2028</span>
                </div>
                <p className="text-xs text-zinc-400">Amal Jyothi College of Engineering (Autonomous) — 3rd Year • Zero Active Backlogs</p>
                <div className="text-xs text-indigo-300 font-mono pt-1">
                  SGPA: Sem 1 (7.95) | Sem 2 (8.43) | Sem 3 (8.21) | Sem 4 (8.54)
                </div>
                <p className="text-[11px] text-zinc-500">
                  Honours: Director's Honours List (Sem 4); Principal's Honours List (Sem 2, Sem 3)
                </p>
              </div>
            </div>

            {/* Flagship Projects */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
                Key Technical Projects
              </h4>
              <div className="space-y-2">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-white block">Bench Rotation (Live Production System)</span>
                  <span className="text-xs text-zinc-400">Full-stack classroom seating & automated rotation system for 55 students across 20 benches. Built with React 19, Express, SQLite (better-sqlite3), JWT, and Mulberry32 PRNG.</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="font-bold text-white block">Aid4Palestine (M-Commerce Platform)</span>
                  <span className="text-xs text-zinc-400">Humanitarian donation platform with PHP backend, MySQL, session authentication, and AWS EC2 / S3 hosting.</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold">
                Certifications & Badges
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300 font-mono">
                <li className="p-2 rounded bg-white/[0.02] border border-white/5">✓ Oracle Cloud AI Associate (2025)</li>
                <li className="p-2 rounded bg-white/[0.02] border border-white/5">✓ AWS Cloud Practitioner Essentials</li>
                <li className="p-2 rounded bg-white/[0.02] border border-white/5">✓ Oracle Java Foundation & Programming</li>
                <li className="p-2 rounded bg-white/[0.02] border border-white/5">✓ Docker Essentials (Cognitive Class)</li>
                <li className="p-2 rounded bg-white/[0.02] border border-white/5">✓ Claude 101 & Code 101 (Anthropic)</li>
              </ul>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="bg-[#0A0A0E] px-6 py-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">
              PDF Resume Format
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs transition-colors"
              >
                Close
              </button>
              <a
                href="mailto:fathimanowrin9605@gmail.com?subject=Resume%20Request%20-%20Nowrin%20Fathima"
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Request Formal PDF</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
