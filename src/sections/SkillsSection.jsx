import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { skillCategories } from '../data/skills';
import { Terminal, Code, Cpu, Cloud, Database, Layout } from 'lucide-react';

export const SkillsSection = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'WEB DEVELOPMENT': return <Code className="w-5 h-5 text-indigo-400" />;
      case 'PROGRAMMING LANGUAGES': return <Terminal className="w-5 h-5 text-purple-400" />;
      case 'DATABASES & STORAGE': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'CLOUD & DEVOPS': return <Cloud className="w-5 h-5 text-blue-400" />;
      case 'DESIGN & MOBILE': return <Layout className="w-5 h-5 text-pink-400" />;
      default: return <Cpu className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          category="TECHNICAL SKILLS"
          title="Technologies, tools & engineering capabilities."
          description="Organized technical skillset based on active coursework, production software projects, and cloud training certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-6 md:p-8 rounded-3xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-xs font-mono tracking-widest text-zinc-300 font-bold uppercase">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.04] transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-1">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
