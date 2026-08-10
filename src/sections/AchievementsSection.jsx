import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { achievements } from '../data/achievements';
import { Trophy, Rocket, Sparkles, Target, Award } from 'lucide-react';

export const AchievementsSection = () => {
  const getIcon = (tag) => {
    if (tag.includes('Winner')) return <Trophy className="w-5 h-5 text-amber-400" />;
    if (tag.includes('Global')) return <Rocket className="w-5 h-5 text-blue-400" />;
    if (tag.includes('Funded')) return <Sparkles className="w-5 h-5 text-indigo-400" />;
    return <Target className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          category="HACKATHONS & ACHIEVEMENTS"
          title="Competitions, hackathons & funded initiatives."
          description="Demonstrated competitive problem-solving under compressed timelines in national and global tech hackathons."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
                    {ach.tag}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {ach.date}
                  </span>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] shrink-0">
                    {getIcon(ach.tag)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">
                      {ach.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-300 mt-0.5">
                      {ach.subtitle}
                    </p>
                  </div>
                </div>

                {ach.problemStatement && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-zinc-300">
                    <span className="text-zinc-500 block text-[10px] uppercase">Problem Brief</span>
                    <span>"{ach.problemStatement}"</span>
                  </div>
                )}

                {ach.projectTitle && (
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 font-mono text-xs text-zinc-300">
                    <span className="text-zinc-500 block text-[10px] uppercase">Selected Project</span>
                    <span>"{ach.projectTitle}"</span>
                  </div>
                )}

                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                  {ach.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Verified Activity</span>
                <span className="text-indigo-400">AJCE / National</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
