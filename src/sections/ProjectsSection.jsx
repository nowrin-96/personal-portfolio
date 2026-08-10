import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

export const ProjectsSection = ({ onOpenCaseStudy }) => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Academic App', 'Web / UX'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || (filter === 'Full Stack' && p.isFlagship));

  return (
    <section id="works" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeader
            category="FEATURED WORKS"
            title="Production software & technical case studies."
            description="Serious project builds solving real-world classroom, m-commerce, and academic problems."
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/[0.03] border border-white/[0.08] p-1.5 rounded-2xl backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  filter === cat
                    ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-600/30'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={project.isFlagship ? 'lg:col-span-2' : ''}
            >
              <ProjectCard
                project={project}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
