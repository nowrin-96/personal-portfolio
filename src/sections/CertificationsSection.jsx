import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { certifications } from '../data/certifications';
import { Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          category="CERTIFICATIONS & CREDENTIALS"
          title="Verified industry certifications & badges."
          description="Cloud architecture, AI foundations, containerization, and programming credentials from Oracle, AWS, Cognitive Class, and Anthropic."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group p-6 md:p-8 rounded-3xl bg-[#0E0E12]/80 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#12121A] transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-indigo-300">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {cert.date}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white group-hover:text-indigo-200 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1">
                      Issuer: <span className="text-zinc-200">{cert.issuer}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span className="text-zinc-400">{cert.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
