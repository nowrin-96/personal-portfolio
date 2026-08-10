import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, ShieldCheck, Database, Server, LayoutGrid, 
  Users, RefreshCw, Cpu, CheckCircle2, Lock, ArrowRight, Printer, Download
} from 'lucide-react';
import { projects } from '../data/projects';

export const BenchRotationModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const benchProject = projects.find(p => p.id === 'bench-rotation');

  if (!isOpen || !benchProject) return null;

  // Anonymized Sample Seating Chart Data for visual presentation (Privacy Rule #37 Compliant)
  const sampleColumns = [
    {
      id: "C1",
      name: "Column C1 (Girls - 5 Benches)",
      benches: [
        { name: "C1 B1", seats: ["Student A (Roll #01)", "Student B (Roll #02)", "Student C (Roll #03)"] },
        { name: "C1 B2", seats: ["Student D (Roll #04)", "Student E (Roll #05)", "Student F (Roll #06)"] },
        { name: "C1 B3", seats: ["Student G (Roll #07)", "Student H (Roll #08)", "Student I (Roll #09)"] },
        { name: "C1 B4", seats: ["Student J (Roll #10)", "Student K (Roll #11)"] },
        { name: "C1 B5", seats: ["Student L (Roll #12)", "Student M (Roll #13)"] },
      ]
    },
    {
      id: "C2",
      name: "Column C2 (Boys - 5 Benches)",
      benches: [
        { name: "C2 B1", seats: ["Student N (Roll #14)", "Student O (Roll #15)", "Student P (Roll #16)"] },
        { name: "C2 B2", seats: ["Student Q (Roll #17)", "Student R (Roll #18)", "Student S (Roll #19)"] },
        { name: "C2 B3", seats: ["Student T (Roll #20)", "Student U (Roll #21)", "Student V (Roll #22)"] },
        { name: "C2 B4", seats: ["Student W (Roll #23)", "Student X (Roll #24)", "Student Y (Roll #25)"] },
        { name: "C2 B5", seats: ["Student Z (Roll #26)", "Student AA (Roll #27)", "Student AB (Roll #28)"] },
      ]
    },
    {
      id: "C3",
      name: "Column C3 (Boys - 5 Benches)",
      benches: [
        { name: "C3 B1", seats: ["Student AC (Roll #29)", "Student AD (Roll #30)", "Student AE (Roll #31)"] },
        { name: "C3 B2", seats: ["Student AF (Roll #32)", "Student AG (Roll #33)", "Student AH (Roll #34)"] },
        { name: "C3 B3", seats: ["Student AI (Roll #35)", "Student AJ (Roll #36)", "Student AK (Roll #37)"] },
        { name: "C3 B4", seats: ["Student AL (Roll #38)", "Student AM (Roll #39)", "Student AN (Roll #40)"] },
        { name: "C3 B5", seats: ["Student AO (Roll #41)", "Student AP (Roll #42)", "Student AQ (Roll #43)"] },
      ]
    },
    {
      id: "C4",
      name: "Column C4 (Boys - 5 Benches)",
      benches: [
        { name: "C4 B1", seats: ["Student AR (Roll #44)", "Student AS (Roll #45)", "Student AT (Roll #46)"] },
        { name: "C4 B2", seats: ["Student AU (Roll #47)", "Student AV (Roll #48)", "Student AW (Roll #49)"] },
        { name: "C4 B3", seats: ["Student AX (Roll #50)", "Student AY (Roll #51)", "Student AZ (Roll #52)"] },
        { name: "C4 B4", seats: ["Student BA (Roll #53)", "Student BB (Roll #54)"] },
        { name: "C4 B5", seats: ["Student BC (Roll #55)"] },
      ]
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-[#0A0A0E] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 bg-[#0A0A0E]/95 backdrop-blur-md px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <RefreshCw className="w-5 h-5 animate-spin-slow" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
                    {benchProject.title}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    FLAGSHIP CASE STUDY
                  </span>
                </div>
                <p className="text-xs md:text-sm text-zinc-400">
                  {benchProject.subtitle}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics & Links Bar */}
          <div className="bg-[#121218] px-6 py-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-300">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5">
                <Users className="w-3.5 h-3.5 text-indigo-400" />
                55 Students Enrolled
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5">
                <LayoutGrid className="w-3.5 h-3.5 text-purple-400" />
                20 Benches / 4 Columns
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-300">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Live Production Host
              </span>
            </div>

            <a
              href={benchProject.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-sans font-semibold text-xs transition-all shadow-lg shadow-indigo-600/30"
            >
              <span>View Live Application</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="bg-[#0A0A0E] px-6 pt-3 border-b border-white/5 flex items-center gap-2 overflow-x-auto">
            {['overview', 'algorithm', 'classroom-model', 'architecture', 'chart-preview'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-t-xl text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? 'bg-[#14141C] text-indigo-400 border-t-2 border-indigo-500 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]'
                }`}
              >
                {tab.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8 text-zinc-300 font-sans text-sm leading-relaxed">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-red-400 font-heading font-semibold text-base">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      The Problem
                    </div>
                    <p className="text-zinc-400 text-xs md:text-sm">
                      {benchProject.problem}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-3">
                    <div className="flex items-center gap-2 text-indigo-400 font-heading font-semibold text-base">
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                      The Solution
                    </div>
                    <p className="text-zinc-300 text-xs md:text-sm">
                      {benchProject.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
                    Production Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {benchProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-indigo-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features List */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
                    Core Functionality & Portal Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benchProject.features.map((feat, idx) => {
                      const [title, desc] = feat.split(': ');
                      return (
                        <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                          <span className="text-xs font-semibold text-indigo-300 font-mono block">
                            {title}
                          </span>
                          <span className="text-xs text-zinc-400 block">
                            {desc}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: ALGORITHM */}
            {activeTab === 'algorithm' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-4">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-indigo-400" />
                    <h4 className="text-lg font-bold font-heading text-white">
                      Seating Logic & Pair-Rotation Engine
                    </h4>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-300">
                    The core engine relies on two distinct rotation mechanisms: deterministic daily circular seat shifts and stochastic weekly student shuffling designed to maximize pairing novelty.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                    <h5 className="font-mono text-xs text-purple-400 font-bold uppercase">
                      1. Daily Bench Shift
                    </h5>
                    <p className="text-xs text-zinc-400">
                      Each day at midnight, bench seat indices within each column shift down by exactly 1 position. The student assigned to the final bench in a column wraps back to Bench #1, ensuring equal front-row and back-row learning exposure.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                    <h5 className="font-mono text-xs text-indigo-400 font-bold uppercase">
                      2. Weekly Zero-Repeat Shuffle
                    </h5>
                    <p className="text-xs text-zinc-400">
                      Every week from a configured base date, Mulberry32 PRNG generates candidate arrangements. The arrangement generator evaluates past weekly pairings and selects a layout minimizing repeat benchmates.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: CLASSROOM MODEL */}
            {activeTab === 'classroom-model' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
                  <h4 className="text-base font-bold font-heading text-white">
                    Classroom Spatial Configuration
                  </h4>
                  <p className="text-xs text-zinc-400">
                    The system models a physical classroom containing 20 benches divided across 4 distinct columns, accommodating 55 total students divided by gender rules.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 text-center space-y-1">
                      <span className="text-xl font-bold font-mono text-purple-300">C1</span>
                      <p className="text-xs text-zinc-400 font-mono">Girls Column</p>
                      <p className="text-[11px] text-zinc-500">5 Benches • 13 Seats</p>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-center space-y-1">
                      <span className="text-xl font-bold font-mono text-indigo-300">C2</span>
                      <p className="text-xs text-zinc-400 font-mono">Boys Column</p>
                      <p className="text-[11px] text-zinc-500">5 Benches • 14 Seats</p>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-center space-y-1">
                      <span className="text-xl font-bold font-mono text-indigo-300">C3</span>
                      <p className="text-xs text-zinc-400 font-mono">Boys Column</p>
                      <p className="text-[11px] text-zinc-500">5 Benches • 15 Seats</p>
                    </div>

                    <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/20 text-center space-y-1">
                      <span className="text-xl font-bold font-mono text-indigo-300">C4</span>
                      <p className="text-xs text-zinc-400 font-mono">Boys Column</p>
                      <p className="text-[11px] text-zinc-500">5 Benches • 13 Seats</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: ARCHITECTURE */}
            {activeTab === 'architecture' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase">
                      <Server className="w-4 h-4" />
                      Backend Server
                    </div>
                    <p className="text-xs text-zinc-400">
                      Node.js and Express API server configured with rate limiting via <code className="text-indigo-300">express-rate-limit</code> to protect rotation computation endpoints.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase">
                      <Database className="w-4 h-4" />
                      SQLite Database
                    </div>
                    <p className="text-xs text-zinc-400">
                      High-throughput synchronous SQLite storage accessed via <code className="text-purple-300">better-sqlite3</code> for transactional seat assignments.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                      <ShieldCheck className="w-4 h-4" />
                      Authentication & Security
                    </div>
                    <p className="text-xs text-zinc-400">
                      JWT authentication tokens stored in secure cookies, combined with bcrypt password hashing for admin credential validation.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                      <RefreshCw className="w-4 h-4" />
                      Offline Fallback Engine
                    </div>
                    <p className="text-xs text-zinc-400">
                      Client-side localStorage synchronization guarantees uninterrupted dashboard access even during temporary network dropouts.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 5: CHART PREVIEW (Anonymized Privacy Compliant) */}
            {activeTab === 'chart-preview' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="flex items-center justify-between px-2">
                  <div>
                    <h4 className="text-base font-bold font-heading text-white">
                      Anonymized Seating Chart Preview
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Interactive sample classroom grid displaying anonymized test data (Privacy Rule #37 compliant).
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400">
                    55 Seats Visualized
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {sampleColumns.map((col) => (
                    <div key={col.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                      <div className="pb-2 border-b border-white/5 text-xs font-mono font-bold text-indigo-400 flex items-center justify-between">
                        <span>{col.id}</span>
                        <span className="text-[10px] text-zinc-500 font-normal">{col.benches.length} Benches</span>
                      </div>

                      <div className="space-y-3">
                        {col.benches.map((bench, bIdx) => (
                          <div key={bIdx} className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1.5">
                            <span className="text-[10px] font-mono text-zinc-500 block uppercase">
                              {bench.name}
                            </span>
                            <div className="space-y-1">
                              {bench.seats.map((seat, sIdx) => (
                                <div key={sIdx} className="px-2 py-1 rounded bg-indigo-950/30 border border-indigo-500/20 text-[11px] font-mono text-zinc-300 flex items-center justify-between">
                                  <span>{seat.split(' (')[0]}</span>
                                  <span className="text-[9px] text-indigo-400">{seat.split(' (')[1]?.replace(')', '')}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="bg-[#0A0A0E] px-6 py-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              Developed by Nowrin Fathima • 2026
            </span>
            <div className="flex items-center gap-3 ml-auto">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium text-xs transition-colors"
              >
                Close Case Study
              </button>
              <a
                href={benchProject.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-all shadow-lg shadow-indigo-600/20 flex items-center gap-1.5"
              >
                <span>Explore Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
