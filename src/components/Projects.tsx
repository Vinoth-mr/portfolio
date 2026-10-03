import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { SalesAnalyticsDemo } from './demos/SalesAnalyticsDemo';
import { PriceRecommenderDemo } from './demos/PriceRecommenderDemo';
import { ProjectTechDistribution } from './ProjectTechDistribution';
import { ExternalLink, Sparkles, CheckCircle2, Sliders, BarChart3 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('sales-analytics');

  return (
    <section id="projects" className="py-20 border-b border-slate-800/80 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2">
              03. Featured Technical Projects
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Interactive Case Studies & Analytical Systems
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Explore live interactive prototypes and simulated analytical workflows from my research and applied work.
            </p>
          </div>

          {/* Project Switcher Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setSelectedProjectId('sales-analytics')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                selectedProjectId === 'sales-analytics'
                  ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              1. Sales Analytics (Colab EDA)
            </button>
            <button
              onClick={() => setSelectedProjectId('price-recommendation')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 ${
                selectedProjectId === 'price-recommendation'
                  ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              2. Price Recommender (ML)
            </button>
          </div>
        </div>

        {/* Dynamic Project Details & Interactive Component */}
        {selectedProjectId === 'sales-analytics' ? (
          <div className="space-y-8">
            {/* Overview Card */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
                    <span>RETAIL INTELLIGENCE</span>
                    <span aria-hidden="true">·</span>
                    <span>JULY 2025</span>
                    <span aria-hidden="true">·</span>
                    <span>PYTHON & GOOGLE COLAB</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Sales Analytics on Retail Dataset</h3>
                  <p className="text-sm text-slate-400 mt-1">End-to-end exploratory analysis and revenue trend discovery</p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="https://colab.research.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 border border-slate-700 text-xs font-medium text-teal-300 rounded-lg hover:border-teal-500 transition-colors"
                  >
                    <span>Google Colab Notebook</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                {projects[0].description}
              </p>

              {/* Highlights */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {projects[0].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tools row (Unboxed metadata) */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                <span className="font-medium text-slate-300">Stack & Methodologies:</span>
                {projects[0].tools.map((t, idx) => (
                  <React.Fragment key={t}>
                    <span className="text-teal-300">{t}</span>
                    {idx < projects[0].tools.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Live Interactive Dashboard component */}
            <SalesAnalyticsDemo />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Overview Card */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
                    <span>NAAN MUDHALVAN INITIATIVE</span>
                    <span aria-hidden="true">·</span>
                    <span>MAY 2024</span>
                    <span aria-hidden="true">·</span>
                    <span>MACHINE LEARNING & PRICING</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Price Recommendation System for Online Sellers</h3>
                  <p className="text-sm text-slate-400 mt-1">Data-driven algorithm for optimal e-commerce margin & conversion balancing</p>
                </div>

                <div className="text-xs text-slate-400 font-mono self-start md:self-auto bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                  TN Gov Naan Mudhalvan Project
                </div>
              </div>

              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                {projects[1].description}
              </p>

              {/* Highlights */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {projects[1].highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tools row */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                <span className="font-medium text-slate-300">Stack & Methodologies:</span>
                {projects[1].tools.map((t, idx) => (
                  <React.Fragment key={t}>
                    <span className="text-teal-300">{t}</span>
                    {idx < projects[1].tools.length - 1 && (
                      <span aria-hidden="true" className="text-slate-600">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Live Interactive Pricing Simulator */}
            <PriceRecommenderDemo />
          </div>
        )}

        {/* Cross-Project Recharts Technical Distribution Visualization */}
        <ProjectTechDistribution />
      </div>
    </section>
  );
};
