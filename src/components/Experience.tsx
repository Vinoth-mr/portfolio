import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-800/80 bg-[#0c121e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2">
            02. Professional Experience
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Applied industry internships in analytics and machine learning.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Hands-on exposure tackling data ambiguity, modeling workflows, and decision frameworks across Coimbatore tech hubs.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 hover:border-slate-700/80 transition-all shadow-sm"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pb-5 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
                    <span>ROLE 0{index + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {exp.role}{' '}
                    <span className="text-slate-400 font-normal text-base block sm:inline">
                      — {exp.subtitle}
                    </span>
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-2">
                    <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-teal-400" />
                      {exp.company}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {exp.metricHighlight && (
                  <div className="lg:max-w-xs bg-slate-900/90 border border-slate-800 rounded-lg p-3 text-xs">
                    <div className="text-[11px] font-mono text-teal-400 uppercase">Core Impact</div>
                    <div className="text-slate-300 font-medium mt-0.5">{exp.metricHighlight}</div>
                  </div>
                )}
              </div>

              {/* Responsibilities list */}
              <div className="pt-5 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Accomplishments & Responsibilities
                </div>
                <ul className="space-y-2.5">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competencies used (Rendered cleanly with typographic separators, no pill boxes) */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                <span className="font-medium text-slate-300">Competencies Practiced:</span>
                {exp.skills.map((skill, sIdx) => (
                  <React.Fragment key={skill}>
                    <span className="text-teal-300/90">{skill}</span>
                    {sIdx < exp.skills.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
