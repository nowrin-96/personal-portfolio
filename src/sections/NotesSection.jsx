import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { notes } from '../data/notes';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export const NotesSection = ({ onOpenNote }) => {
  return (
    <section id="notes" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          category="DEVELOPER NOTES & FEED"
          title="Technical learnings, experiments & UI notes."
          description="A personal editorial feed documenting web architecture insights, cloud deployment experiences, and interface design thoughts."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notes.map((note, idx) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => onOpenNote(note)}
              className="group p-8 rounded-3xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#12121A] transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                    {note.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    {note.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-indigo-200 transition-colors">
                  {note.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {note.snippet}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-indigo-400 font-semibold group-hover:text-indigo-300">
                <span>Read Note</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
