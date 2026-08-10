import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { internships, leadershipActivities } from '../data/experience';
import { Briefcase, Users, Calendar, MapPin, ChevronRight, Award } from 'lucide-react';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          category="EXPERIENCE & LEADERSHIP"
          title="Internships, technical training & leadership."
          description="Hands-on software development experience, peer teaching in AWS cloud infrastructure, and technical workshop participation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Internship Experience Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Internship Experience</span>
            </h3>

            {internships.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono">
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {item.period}
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-bold font-heading text-white">
                    {item.role}
                  </h4>
                  <p className="text-sm font-semibold text-indigo-300 font-mono mt-0.5">
                    {item.company} • {item.location}
                  </p>
                </div>

                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Leadership & Activities Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Leadership & Technical Facilitation</span>
            </h3>

            <div className="space-y-4">
              {leadershipActivities.map((act, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="p-6 rounded-2xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base font-bold font-heading text-white">
                      {act.title}
                    </h4>
                    <span className="text-xs font-mono text-zinc-500">{act.period}</span>
                  </div>

                  <p className="text-xs font-mono text-indigo-300">
                    {act.organization}
                  </p>

                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                    {act.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
