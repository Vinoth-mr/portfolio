import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, ArrowRight, Download, Check, Terminal, ExternalLink } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:py-24 border-b border-slate-800/80 overflow-hidden bg-gradient-to-b from-[#0b0f17] via-[#0d1322] to-[#0b0f17]">
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Headline & Value Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-teal-400">
              <span className="font-semibold uppercase tracking-wider">Data Science & Analytics</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400">M.Tech CST Candidate</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">Available for Immediate Opportunities</span>
            </div>

            {/* Display Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
              Turning raw business data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">actionable insights</span> and predictive decisions.
            </h1>

            {/* Subtitle / Objective summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>. Building on a B.Tech in Artificial Intelligence & Data Science and pursuing an M.Tech in Computer Science & Technology. I combine rigorous Python & SQL statistical modeling with IBM-certified human-centered UI/UX principles to deliver clarity to business stakeholders.
            </p>

            {/* Direct Contact & Social Links (Clean, unboxed) */}
            <div className="pt-2 flex flex-wrap items-center gap-y-3 gap-x-5 text-xs text-slate-400">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-teal-300 transition-colors cursor-pointer group"
                title="Click to copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-teal-400" />}
                <span className="font-mono text-slate-300 group-hover:text-teal-300">{personalInfo.email}</span>
                {copiedEmail && <span className="text-emerald-400 font-sans text-[11px]">(copied)</span>}
              </button>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-teal-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span className="font-mono text-slate-300">{personalInfo.phone}</span>
              </a>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Tenkasi, Tamil Nadu</span>
              </div>

              <span aria-hidden="true" className="text-slate-700">·</span>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-slate-300 hover:text-teal-300 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-teal-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-400 text-slate-950 font-semibold text-xs rounded-lg hover:bg-teal-300 transition-colors shadow-sm"
              >
                <span>Explore Interactive Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 border border-slate-700 text-white font-medium text-xs rounded-lg hover:border-teal-500/60 hover:text-teal-300 transition-colors"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>View / Download Resume</span>
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-slate-300 hover:text-white font-medium text-xs transition-colors"
              >
                <span>Hire / Discuss Roles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Density Analytical Showcase & Code Terminal (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Terminal Box */}
            <div className="bg-[#0b1322] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-teal-400" />
                    vinoth_pipeline.py
                  </span>
                </div>
                <span className="text-[11px] font-mono text-teal-400">STATUS: READY</span>
              </div>

              {/* Code / Pipeline Content */}
              <div className="p-4 font-mono text-xs leading-relaxed text-slate-300 space-y-2 bg-[#090e18]">
                <div className="text-slate-500"># Initializing Analytical Pipeline</div>
                <div className="text-teal-300">
                  import <span className="text-white">numpy</span> as <span className="text-white">np</span>
                  <br />
                  import <span className="text-white">pandas</span> as <span className="text-white">pd</span>
                  <br />
                  from <span className="text-white">sklearn.ensemble</span> import <span className="text-white">RandomForestRegressor</span>
                </div>

                <div className="pt-2 text-slate-400">
                  <span className="text-purple-400">def</span> <span className="text-emerald-300">evaluate_decision_matrix</span>(dataset):
                  <div className="pl-4 text-slate-300">
                    cleaned = remove_outliers_iqr(dataset)
                    <br />
                    features = engineer_velocity_metrics(cleaned)
                    <br />
                    model = optimize_pricing_elasticity(features)
                    <br />
                    <span className="text-teal-400">return</span> model.generate_executive_insights()
                  </div>
                </div>

                {/* Simulated execution output */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 space-y-1">
                  <div className="text-emerald-400 flex items-center gap-1.5">
                    <Check className="w-3 h-3" /> 2 Internships (ROBOMATICS & Altitudes) verified
                  </div>
                  <div className="text-teal-300 flex items-center gap-1.5">
                    <Check className="w-3 h-3" /> Naan Mudhalvan Price Optimization Engine deployed
                  </div>
                  <div className="text-slate-400 flex items-center gap-1.5">
                    <Check className="w-3 h-3 text-cyan-400" /> IBM SkillsBuild UI/UX Design Certified
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar (Claim-to-Proof adjacency) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/80 border border-slate-800/80 rounded-lg p-3.5">
                <div className="text-[11px] text-slate-400 font-mono">ACADEMIC EXCELLENCE</div>
                <div className="text-xl font-bold font-mono text-white mt-0.5 tabular-nums">7.7 CGPA</div>
                <div className="text-xs text-slate-400">B.Tech AI & Data Science</div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800/80 rounded-lg p-3.5">
                <div className="text-[11px] text-slate-400 font-mono">POSTGRADUATE PATH</div>
                <div className="text-xl font-bold font-mono text-teal-400 mt-0.5">M.Tech CST</div>
                <div className="text-xs text-slate-400">2026 - 2028 Cohort</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
