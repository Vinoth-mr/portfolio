import React from 'react';
import { educationHistory, certifications, personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Globe, CheckCircle2 } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-800/80 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2">
            05. Academic Background & Qualifications
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Academic training, credentials, and language proficiencies.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A solid computational foundation rooted in Artificial Intelligence, Data Science, and Computer Science & Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Education Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-teal-400" />
              <span>Higher Education & Schooling</span>
            </h3>

            <div className="space-y-4">
              {educationHistory.map((edu, idx) => (
                <div
                  key={edu.degree}
                  className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2">
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-teal-400 tabular-nums">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400">
                    <span>{edu.field}</span>
                    {edu.institution && (
                      <>
                        <span aria-hidden="true" className="mx-1.5 text-slate-600">·</span>
                        <span className="text-slate-300">{edu.institution}</span>
                      </>
                    )}
                    {edu.location && (
                      <>
                        <span aria-hidden="true" className="mx-1.5 text-slate-600">·</span>
                        <span>{edu.location}</span>
                      </>
                    )}
                  </div>

                  {edu.score && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Academic Achievement:</span>
                      <span className="font-mono font-bold text-white tabular-nums">
                        {edu.scoreLabel ? `${edu.scoreLabel}: ` : ''}{edu.score}
                      </span>
                    </div>
                  )}

                  {edu.status && (
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Program Status:</span>
                      <span className="font-mono text-emerald-400">{edu.status}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Certifications */}
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-teal-400" />
                <span>Professional Certifications</span>
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-teal-400 uppercase">
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Verified
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mt-1">
                      {cert.title}
                    </h4>

                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-teal-400" />
                <span>Languages</span>
              </h3>

              <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 space-y-3">
                {personalInfo.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between text-xs pb-2 border-b border-slate-800/60 last:border-0 last:pb-0"
                  >
                    <span className="font-semibold text-slate-200">{lang.name}</span>
                    <span className="text-slate-400 font-mono">{lang.fluency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-functional profile callout */}
            <div className="p-5 bg-gradient-to-br from-slate-900 to-[#121c32] border border-slate-800 rounded-xl">
              <div className="text-xs font-semibold text-white mb-1">
                Continuous Learning Ethos
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regularly engaging with cutting-edge data science research, statistical papers, and Kaggle/Colab benchmarking competitions to stay at the vanguard of machine intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
