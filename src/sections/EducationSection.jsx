import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { educationData } from '../data/education';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          category="ACADEMIC BACKGROUND"
          title="Education, academic SGPA & honors."
          description="Consistently rising academic performance at Amal Jyothi College of Engineering with zero active backlogs."
        />

        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-indigo-300 font-mono pl-11">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {/* SGPA & Score Display */}
              {edu.sgpa ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
                      Semester Performance (SGPA Breakdown)
                    </h4>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      {edu.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {edu.sgpa.map((s, sIdx) => (
                      <div key={sIdx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center space-y-1">
                        <span className="text-xs font-mono text-zinc-500 uppercase block">{s.sem}</span>
                        <span className="text-2xl font-bold font-heading text-white block">{s.score}</span>
                        {s.honour && (
                          <span className="text-[10px] text-indigo-300 font-mono block truncate" title={s.honour}>
                            {s.honour}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Honours List */}
                  <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
                    <span className="text-xs font-mono text-indigo-300 font-bold uppercase block flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-indigo-400" />
                      Academic Honours & Dean's Lists
                    </span>
                    <div className="flex flex-wrap gap-3 text-xs text-zinc-300">
                      {edu.honours.map((h, hIdx) => (
                        <span key={hIdx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400">{edu.status}</span>
                  <span className="text-lg font-bold font-heading text-indigo-300">{edu.percentage} Marks</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
