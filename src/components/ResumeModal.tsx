import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, Download } from 'lucide-react';
import { personalInfo, experiences, projects, educationHistory, skillCategories, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `
VINOTH KUMAR MURUGAN
Aspiring Data Scientist / Data Analyst
+91 6379270746 | Tenkasi, Tamil Nadu - 627852 | vinoth.mroffcl@gmail.com | linkedin.com/in/vinoth-murugan-mr0ffcl

OBJECTIVE
${personalInfo.objective}

CORE SKILLS
Programming & Querying: Python (NumPy, Pandas), Java, SQL, Tableau, ML Tools
Design: UI/UX design principles (IBM certified)
Data Analysis & Visualization: EDA, Business Analytics, Sales/Trend Analysis
Soft Skills: Problem solving, analytical thinking, collaboration
Machine Learning: AI/ML fundamentals, predictive modeling, recommendation systems

INTERNSHIP EXPERIENCE
Business Analytics Intern — Data-Driven Decision Making (Jul 2025)
ROBOMATICS, Coimbatore
- Applied business analytics techniques to interpret datasets and support data-driven decision making for business scenarios.
- Practiced structuring raw data into actionable insights using analytical frameworks introduced during training.

Machine Learning Intern (Feb 2024 - Mar 2024)
Altitudes, Coimbatore
- Gained hands-on exposure to core machine learning concepts and workflows as part of an applied internship program.
- Assisted in building and evaluating basic ML models under mentor guidance.

PROJECTS
Sales Analytics on Retail Dataset (Jul 2025)
- Performed end-to-end sales data analysis in Python/Colab, covering data cleaning, exploratory analysis, and trend identification to surface actionable business insights.

Price Recommendation System for Online Sellers (May 2024)
- Built a data-driven price recommendation system for online sellers under the Naan Mudhalvan initiative, deriving pricing insights from historical sales data to support seller decision-making.

EDUCATION
M.Tech, Computer Science & Technology (CST) — Postgraduate (2026 - 2028)
B.Tech, Artificial Intelligence and Data Science (2022 - 2026), Dhanalakshmi Srinivasan College of Engineering, Coimbatore | CGPA: 7.7
Class XII (Computer Science) 79.16%
Class X 73%

CERTIFICATIONS
- UI/UX Design — IBM SkillsBuild

LANGUAGES
- Tamil (Native), English (Professional Working Proficiency)
    `.trim();

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Action Header (Hidden in Print) */}
        <div className="no-print flex items-center justify-between px-6 py-3.5 bg-slate-900 text-white border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-teal-400">DOCUMENT VIEWER</span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-300">Vinoth Kumar Murugan - Official Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs rounded transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 hover:bg-slate-800 rounded-md text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Body */}
        <div className="overflow-y-auto p-8 sm:p-12 print-content bg-white text-slate-900 text-[13px] leading-relaxed font-sans">
          {/* Header Banner styling exact to resume document */}
          <div className="bg-[#1e4a50] text-white p-6 sm:p-7 rounded-sm -mx-8 sm:-mx-12 -mt-8 sm:-mt-12 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-wider uppercase font-sans">
              VINOTH KUMAR MURUGAN
            </h1>
            <p className="text-sm font-medium tracking-wide text-teal-100 italic mt-0.5">
              Aspiring Data Scientist / Data Analyst
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-teal-100/90 mt-2 font-mono">
              <span>{personalInfo.phone}</span>
              <span>|</span>
              <span>{personalInfo.location}</span>
              <span>|</span>
              <a href={`mailto:${personalInfo.email}`} className="underline hover:text-white">
                {personalInfo.email}
              </a>
              <span>|</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                linkedin.com/in/{personalInfo.linkedinHandle}
              </a>
            </div>
          </div>

          {/* Objective */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e4a50] border-b border-[#1e4a50]/40 pb-1 mb-2 font-mono">
              OBJECTIVE
            </h2>
            <p className="text-slate-800 text-justify leading-relaxed">
              {personalInfo.objective}
            </p>
          </section>

          {/* Core Skills */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e4a50] border-b border-[#1e4a50]/40 pb-1 mb-2 font-mono">
              CORE SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-slate-800">
              <div>
                <strong className="font-semibold text-slate-900">Programming & Querying:</strong> Python (NumPy, Pandas), Java, SQL, Tableau, ML Tools
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Design:</strong> UI/UX design principles (IBM certified)
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Data Analysis & Visualization:</strong> EDA, Business Analytics, Sales/Trend Analysis
              </div>
              <div>
                <strong className="font-semibold text-slate-900">Soft Skills:</strong> Problem solving, analytical thinking, collaboration
              </div>
              <div className="sm:col-span-2">
                <strong className="font-semibold text-slate-900">Machine Learning:</strong> AI/ML fundamentals, predictive modeling, recommendation systems
              </div>
            </div>
          </section>

          {/* Internship Experience */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e4a50] border-b border-[#1e4a50]/40 pb-1 mb-2 font-mono">
              INTERNSHIP EXPERIENCE
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-slate-900">
                    Business Analytics Intern — Data-Driven Decision Making
                  </div>
                  <div className="text-xs font-mono text-slate-700">Jul 2025</div>
                </div>
                <div className="text-xs italic text-slate-700 font-medium">
                  ROBOMATICS, Coimbatore
                </div>
                <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-800">
                  <li>Applied business analytics techniques to interpret datasets and support data-driven decision making for business scenarios.</li>
                  <li>Practiced structuring raw data into actionable insights using analytical frameworks introduced during training.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-slate-900">
                    Machine Learning Intern
                  </div>
                  <div className="text-xs font-mono text-slate-700">Feb 2024 - Mar 2024</div>
                </div>
                <div className="text-xs italic text-slate-700 font-medium">
                  Altitudes, Coimbatore
                </div>
                <ul className="list-disc list-inside mt-1.5 space-y-1 text-slate-800">
                  <li>Gained hands-on exposure to core machine learning concepts and workflows as part of an applied internship program.</li>
                  <li>Assisted in building and evaluating basic ML models under mentor guidance.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e4a50] border-b border-[#1e4a50]/40 pb-1 mb-2 font-mono">
              PROJECTS
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-slate-900">
                    Sales Analytics on Retail Dataset
                  </div>
                  <div className="text-xs font-mono text-slate-700">Jul 2025</div>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-slate-800">
                  <li>Performed end-to-end sales data analysis in Python/Colab, covering data cleaning, exploratory analysis, and trend identification to surface actionable business insights.</li>
                </ul>
                <div className="text-xs text-slate-600 mt-1">
                  Notebook: <span className="text-[#1e4a50] underline">Google Colab link</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-bold text-slate-900">
                    Price Recommendation System for Online Sellers
                  </div>
                  <div className="text-xs font-mono text-slate-700">May 2024</div>
                </div>
                <ul className="list-disc list-inside mt-1 space-y-1 text-slate-800">
                  <li>Built a data-driven price recommendation system for online sellers under the Naan Mudhalvan initiative, deriving pricing insights from historical sales data to support seller decision-making.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e4a50] border-b border-[#1e4a50]/40 pb-1 mb-2 font-mono">
              EDUCATION
            </h2>

            <div className="space-y-2.5">
              <div className="flex justify-between items-baseline">
                <div>
                  <strong className="text-slate-900 font-bold">M.Tech, Computer Science & Technology (CST)</strong> — Postgraduate
                </div>
                <div className="text-xs font-mono text-slate-700">2026 - 2028</div>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div>
                    <strong className="text-slate-900 font-bold">B.Tech, Artificial Intelligence and Data Science</strong>
                  </div>
                  <div className="text-xs font-mono text-slate-700">2022 - 2026</div>
                </div>
                <div className="text-xs text-slate-700">
                  Dhanalakshmi Srinivasan College of Engineering, Coimbatore | <strong className="text-slate-900">CGPA: 7.7</strong>
                </div>
              </div>

              <div className="flex justify-between items-baseline text-xs">
                <span>Class XII (Computer Science)</span>
                <span className="font-mono font-semibold">79.16%</span>
              </div>

              <div className="flex justify-between items-baseline text-xs">
                <span>Class X</span>
                <span className="font-mono font-semibold">73%</span>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e4a50] border-b border-[#1e4a50]/40 pb-1 mb-2 font-mono">
              CERTIFICATIONS
            </h2>
            <ul className="list-disc list-inside text-slate-800">
              <li>UI/UX Design — IBM SkillsBuild</li>
            </ul>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e4a50] border-b border-[#1e4a50]/40 pb-1 mb-2 font-mono">
              LANGUAGES
            </h2>
            <ul className="list-disc list-inside text-slate-800">
              <li>Tamil (Native), English (Professional Working Proficiency)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
