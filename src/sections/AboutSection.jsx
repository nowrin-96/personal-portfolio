import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { personalInfo } from '../data/personalInfo';
import { Award, GraduationCap, Code2, Cloud, Database, Layout } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="me" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          category="ABOUT ME"
          title="Engineering practical solutions with code & intent."
          description="A third-year BCA student dedicated to building high-performance web systems, exploring cloud architecture, and crafting thoughtful interfaces."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-[#0E0E12]/80 border border-white/[0.08] space-y-6"
          >
            <h3 className="text-2xl font-bold font-heading text-white">
              Background & Academic Journey
            </h3>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              I am currently pursuing my <span className="text-white font-semibold">Bachelor of Computer Applications (BCA)</span> at <span className="text-indigo-300 font-semibold">{personalInfo.college}</span>. My focus spans frontend web development, relational database engineering, cloud deployment workflows, and modern UI/UX design systems.
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Rather than theoretical concepts alone, I prioritize building practical projects—such as <span className="text-white">Bench Rotation</span> (an automated classroom seating and rotation platform live in production) and <span className="text-white">Aid4Palestine</span> (an M-Commerce platform deployed on AWS EC2 & S3).
            </p>

            {/* Academic Highlights Grid */}
            <div className="pt-4 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
              {personalInfo.sgpa.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <span className="text-[10px] text-zinc-500 block uppercase">{item.sem}</span>
                  <span className="text-lg font-bold text-white block">{item.sgpa}</span>
                  <span className="text-[9px] text-indigo-400 block font-sans">SGPA</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side Honours & Focus Areas */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Honours Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 md:p-8 rounded-3xl bg-indigo-950/20 border border-indigo-500/20 space-y-4"
            >
              <div className="flex items-center gap-2.5 text-indigo-400 font-heading font-bold text-base">
                <Award className="w-5 h-5" />
                <span>Academic Honours</span>
              </div>

              <ul className="space-y-3 font-sans text-xs md:text-sm text-zinc-300">
                {personalInfo.honours.map((honour, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                    <span>{honour}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Core Competencies Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 md:p-8 rounded-3xl bg-[#0E0E12]/80 border border-white/[0.08] space-y-4"
            >
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Core Domains & Interests
              </h4>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-zinc-300">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>Frontend Dev</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-zinc-300">
                  <Layout className="w-4 h-4 text-purple-400" />
                  <span>UI/UX Prototyping</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-zinc-300">
                  <Cloud className="w-4 h-4 text-blue-400" />
                  <span>AWS & Cloud</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2 text-zinc-300">
                  <Database className="w-4 h-4 text-emerald-400" />
                  <span>Database Systems</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
