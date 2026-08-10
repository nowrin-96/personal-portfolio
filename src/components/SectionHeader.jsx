import React from 'react';

export const SectionHeader = ({ category, title, description, className = "" }) => {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      {category && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono tracking-widest text-indigo-400 uppercase mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          {category}
        </div>
      )}
      
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-heading">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base md:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
