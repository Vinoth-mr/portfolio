import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090d16] border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div>
            <div className="text-base font-bold text-white tracking-tight">
              VINOTH KUMAR MURUGAN
            </div>
            <p className="text-slate-400 text-xs mt-1">
              Aspiring Data Scientist / Data Analyst · Coimbatore & Tenkasi, India
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-slate-300 font-medium">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-teal-400 transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-teal-400 transition-colors cursor-pointer">
              Resume Document
            </button>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 rounded hover:border-slate-700 hover:text-white transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Vinoth Kumar Murugan. Designed & Engineered with precision.
          </div>

          <div className="flex items-center gap-4">
            <a href={`mailto:${personalInfo.email}`} className="hover:text-teal-400 transition-colors">
              {personalInfo.email}
            </a>
            <span aria-hidden="true">·</span>
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors inline-flex items-center gap-1">
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
