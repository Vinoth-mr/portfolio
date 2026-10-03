import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Target, Lightbulb, Compass, Award, Globe, Database, ArrowRight } from 'lucide-react';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const pillars = [
    {
      icon: Database,
      title: 'Exploratory & Diagnostic Analysis',
      desc: 'Going beyond surface statistics. Cleansing transactional noise, handling multi-source variance, and running hypothesis tests to uncover why metrics move.',
    },
    {
      icon: Target,
      title: 'Predictive & Recommendation Systems',
      desc: 'Translating historical data into forward-looking decisions—from algorithmic price elasticity optimization to demand velocity forecasting.',
    },
    {
      icon: Lightbulb,
      title: 'IBM-Certified UI/UX Synthesis',
      desc: 'A rare blend of data science and design thinking. Ensuring analytical findings and dashboards are immediately legible and actionable for non-technical leadership.',
    },
    {
      icon: Compass,
      title: 'Commercial & Cross-Functional Focus',
      desc: 'Grounding analytical work in bottom-line commercial impact: margin protection, customer acquisition velocity, and operational efficiency.',
    },
  ];

  return (
    <section id="about" className="py-20 border-b border-slate-800/80 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2">
            01. Background & Analytical Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Bridging the gap between raw statistical numbers and real-world business execution.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Narrative & Objective (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-base font-semibold text-white">Professional Objective</h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {personalInfo.objective}
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-teal-400" />
                  <span>IBM SkillsBuild UI/UX Design Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-teal-400" />
                  <span>Languages: Tamil (Native), English (Professional)</span>
                </div>
              </div>
            </div>

            {/* Strategic Value Proposition */}
            <div className="p-6 bg-gradient-to-r from-teal-950/20 via-slate-900/60 to-slate-900/60 border border-teal-500/20 rounded-xl">
              <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-1">
                Why Cross-Functional Data Science Matters
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Most data initiatives stall because models remain isolated in research notebooks. Because I am trained in both <strong className="text-white">Applied Machine Learning</strong> and <strong className="text-white">IBM UI/UX Design Principles</strong>, I structure dashboards, reports, and algorithms that operators, merchants, and executives can trust and adopt on day one.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Core Competency Pillars (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 rounded-xl p-5 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-slate-500 mb-0.5">0{idx + 1}</div>
                      <h4 className="text-sm font-semibold text-white mb-1">{p.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
