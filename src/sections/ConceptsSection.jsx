import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { concepts } from '../data/concepts';
import { ShieldAlert, Glasses, Lightbulb, CheckCircle, Sparkles } from 'lucide-react';

export const ConceptsSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          category="INNOVATION & CONCEPTS"
          title="Product concepts & engineering R&D."
          description="Early-stage product designs, hardware safety concepts, and award-selected innovation proposals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.map((concept, idx) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-white/[0.18] transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-semibold">
                    {concept.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {concept.category}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-indigo-400 shrink-0">
                    {concept.id === 'rescue-guard' ? (
                      <ShieldAlert className="w-6 h-6 text-amber-400" />
                    ) : (
                      <Glasses className="w-6 h-6 text-indigo-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      {concept.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-300 mt-0.5">
                      {concept.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-normal">
                  {concept.description}
                </p>

                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold">
                    Key Concept Specifications
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {concept.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Concept Architecture</span>
                <span className="text-amber-400/80 font-semibold">In R&D Phase</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
