import React from 'react';
import { ExternalLink, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export const ProjectCard = ({ project, onOpenCaseStudy }) => {
  return (
    <div
      className={`group relative rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-300 flex flex-col justify-between ${
        project.isFlagship
          ? 'bg-gradient-to-b from-[#12121A] to-[#0A0A0E] border-2 border-indigo-500/40 shadow-2xl shadow-indigo-500/10 hover:border-indigo-500/70'
          : 'bg-[#0E0E12]/80 border border-white/[0.08] hover:border-white/[0.18] hover:bg-[#121218]/90'
      }`}
    >
      {/* Background Subtle Accent Glow for Flagship */}
      {project.isFlagship && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      )}

      {/* Top Header & Badges */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono tracking-wider text-indigo-300">
            {project.category}
          </span>

          {project.isFlagship ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-xs font-mono text-indigo-300 font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              FLAGSHIP PROJECT
            </span>
          ) : (
            <span className="text-xs font-mono text-zinc-400">
              {project.year}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-2xl md:text-3xl font-bold font-heading text-white group-hover:text-indigo-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-xs md:text-sm text-indigo-400/90 font-medium mt-1 mb-4">
          {project.subtitle}
        </p>

        {/* Summary */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
          {project.summary}
        </p>

        {/* Key Stats Grid if available */}
        {project.stats && (
          <div className="grid grid-cols-2 gap-2 mb-6 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-zinc-300">
            {Object.entries(project.stats).map(([key, val]) => (
              <div key={key} className="flex flex-col">
                <span className="text-[10px] text-zinc-400 uppercase">{key}</span>
                <span className="font-semibold text-white">{val}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-zinc-400 group-hover:border-white/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live Demo for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all hover:border-white/20"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub Repository for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-zinc-300 hover:text-white transition-all hover:border-white/20"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}
        </div>

        {project.isFlagship && (
          <button
            onClick={() => onOpenCaseStudy(project.id)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs transition-all shadow-lg shadow-indigo-600/25 active:scale-95 ml-auto"
          >
            <span>Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
