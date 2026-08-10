import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, Clock, Tag } from 'lucide-react';

export const NoteModal = ({ note, onClose }) => {
  if (!note) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0A0A0E] border border-white/10 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-[#0A0A0E]/95 backdrop-blur-md px-6 py-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
              <BookOpen className="w-4 h-4" />
              <span>DEVELOPER NOTE</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-zinc-300">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                  {note.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {note.readTime}
                </span>
                <span>• {note.date}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold font-heading text-white">
                {note.title}
              </h3>
            </div>

            <div className="prose prose-invert max-w-none text-sm leading-relaxed text-zinc-300 space-y-4 whitespace-pre-line font-sans border-t border-white/5 pt-4">
              {note.content}
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-[#0A0A0E] border-t border-white/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-all"
            >
              Done Reading
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
