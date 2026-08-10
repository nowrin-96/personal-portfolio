import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Home, Briefcase, ArrowLeft } from 'lucide-react';

export const NotFoundPage = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative z-20 bg-[#050505] text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg w-full text-center space-y-8 p-10 rounded-3xl bg-[#0E0E12] border border-white/10 shadow-2xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto">
          <Radio className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-5xl font-extrabold text-indigo-400 block tracking-widest">
            404
          </span>
          <h2 className="text-3xl font-extrabold font-heading tracking-tight uppercase">
            SIGNAL LOST
          </h2>
          <p className="text-sm text-zinc-400 font-normal leading-relaxed pt-2">
            The page or route you're looking for doesn't exist, has been moved, or is temporarily out of range.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 font-mono text-xs">
          <button
            onClick={onReturnHome}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/25"
          >
            <Home className="w-4 h-4" />
            <span>RETURN HOME</span>
          </button>

          <a
            href="#works"
            onClick={onReturnHome}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium flex items-center justify-center gap-2 transition-all"
          >
            <Briefcase className="w-4 h-4 text-indigo-400" />
            <span>EXPLORE WORKS</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
