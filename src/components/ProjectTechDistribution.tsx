import React, { useState } from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { PieChart as PieIcon, BarChart2, Compass, Layers, CheckCircle2, Cpu } from 'lucide-react';

interface TechShareItem {
  name: string;
  share: number;
  color: string;
  description: string;
  projectUsage: string;
}

const techShareData: TechShareItem[] = [
  {
    name: 'Python Ecosystem',
    share: 35,
    color: '#06b6d4', // Cyan
    description: 'Pandas, NumPy, data cleaning, feature engineering, and statistical modeling',
    projectUsage: 'Sales Analytics, Price Recommender, ML Workflows',
  },
  {
    name: 'Machine Learning',
    share: 25,
    color: '#10b981', // Emerald
    description: 'Scikit-learn, regression algorithms, pricing elasticity, recommendation logic',
    projectUsage: 'Price Recommendation System, Altitudes Internship',
  },
  {
    name: 'SQL & Querying',
    share: 18,
    color: '#3b82f6', // Cobalt Blue
    description: 'Relational data aggregation, window functions, and transaction filtering',
    projectUsage: 'Retail Dataset Extraction, Historical Baseline Ingestion',
  },
  {
    name: 'EDA & Visualization',
    share: 12,
    color: '#f59e0b', // Amber
    description: 'Matplotlib, Seaborn, Tableau, Pareto distribution, and trend decomposition',
    projectUsage: 'Retail Sales Analysis, Executive Dashboards',
  },
  {
    name: 'Business Analytics & UI/UX',
    share: 10,
    color: '#a855f7', // Purple
    description: 'IBM-certified design heuristics, user personas, and decision frameworks',
    projectUsage: 'ROBOMATICS Internship, Merchant Decision Interfaces',
  },
];

const projectBreakdownData = [
  {
    project: 'Retail Sales Analytics',
    shortName: 'Sales EDA',
    Python: 40,
    MachineLearning: 10,
    SQL: 25,
    EDA_Viz: 20,
    Business_UX: 5,
  },
  {
    project: 'Price Recommender',
    shortName: 'Price Engine',
    Python: 35,
    MachineLearning: 40,
    SQL: 10,
    EDA_Viz: 5,
    Business_UX: 10,
  },
  {
    project: 'ROBOMATICS Internship',
    shortName: 'ROBOMATICS',
    Python: 20,
    MachineLearning: 5,
    SQL: 30,
    EDA_Viz: 25,
    Business_UX: 20,
  },
  {
    project: 'Altitudes ML Internship',
    shortName: 'Altitudes ML',
    Python: 35,
    MachineLearning: 45,
    SQL: 10,
    EDA_Viz: 5,
    Business_UX: 5,
  },
];

const radarData = [
  { domain: 'Python & Pandas', score: 95, fullMark: 100 },
  { domain: 'Machine Learning', score: 88, fullMark: 100 },
  { domain: 'SQL & Database', score: 85, fullMark: 100 },
  { domain: 'EDA & Statistics', score: 92, fullMark: 100 },
  { domain: 'Business Analytics', score: 84, fullMark: 100 },
  { domain: 'UI/UX Design', score: 82, fullMark: 100 },
];

export const ProjectTechDistribution: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'donut' | 'bar' | 'radar'>('donut');
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);

  return (
    <div className="mt-14 bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header bar styled matching clinical/analytical telemetry */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-[#131d35] border-b border-slate-800/80 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>TECHNICAL DISTRIBUTION TELEMETRY</span>
            <span aria-hidden="true">·</span>
            <span>RECHARTS DATA VISUALIZATION</span>
          </div>
          <h3 className="text-base font-semibold text-white">
            Cross-Project Stack Allocation & Domain Footprint
          </h3>
        </div>

        {/* View Switcher Segmented Control */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setActiveChart('donut')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeChart === 'donut'
                ? 'bg-teal-500 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <PieIcon className="w-3.5 h-3.5" />
            Share Breakdown
          </button>
          <button
            onClick={() => setActiveChart('bar')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeChart === 'bar'
                ? 'bg-teal-500 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            Project Comparison
          </button>
          <button
            onClick={() => setActiveChart('radar')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              activeChart === 'radar'
                ? 'bg-teal-500 text-slate-950 font-semibold'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            Radar Footprint
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6">
        {activeChart === 'donut' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Donut Chart View */}
            <div className="lg:col-span-6 h-[320px] flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload as TechShareItem;
                        return (
                          <div className="bg-[#0b1322] border border-teal-500/50 p-3 rounded-lg shadow-xl text-xs font-mono">
                            <div className="text-white font-bold mb-1 flex items-center gap-2">
                              <span
                                className="w-2.5 h-2.5 rounded-full inline-block"
                                style={{ backgroundColor: data.color }}
                              />
                              {data.name}
                            </div>
                            <div className="text-teal-300 tabular-nums">
                              Share of Workload: {data.share}%
                            </div>
                            <div className="text-slate-400 mt-1 max-w-[220px] font-sans text-[11px]">
                              {data.description}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Pie
                    data={techShareData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={115}
                    paddingAngle={3}
                    dataKey="share"
                    onMouseEnter={(_, index) => setActiveHoverIndex(index)}
                    onMouseLeave={() => setActiveHoverIndex(null)}
                  >
                    {techShareData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="#0f172a"
                        strokeWidth={2}
                        opacity={
                          activeHoverIndex === null || activeHoverIndex === index ? 1 : 0.4
                        }
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Central Donut Readout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">Total</div>
                <div className="text-2xl font-bold font-mono text-white">100%</div>
                <div className="text-[10px] text-teal-400 font-mono">5 Core Pillars</div>
              </div>
            </div>

            {/* Right Column: Interactive Category Breakdown Details */}
            <div className="lg:col-span-6 space-y-3">
              <div className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-2">
                Technology Allocation Breakdown
              </div>
              {techShareData.map((tech, idx) => (
                <div
                  key={tech.name}
                  onMouseEnter={() => setActiveHoverIndex(idx)}
                  onMouseLeave={() => setActiveHoverIndex(null)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    activeHoverIndex === idx
                      ? 'bg-slate-900 border-teal-500/50 shadow-md'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-semibold text-white">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: tech.color }}
                      />
                      <span>{tech.name}</span>
                    </div>
                    <span
                      className="font-mono font-bold tabular-nums"
                      style={{ color: tech.color }}
                    >
                      {tech.share}%
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 mt-1 pl-4.5">
                    {tech.description}
                  </p>

                  <div className="text-[10px] text-slate-500 mt-1 pl-4.5 font-mono">
                    Applied in: <span className="text-slate-300">{tech.projectUsage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeChart === 'bar' && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
              <span>Stack allocation across projects and applied internships (% composition)</span>
              <span className="font-mono text-teal-400">Values normalized to 100% per initiative</span>
            </div>

            <div className="h-[340px] w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={projectBreakdownData}
                  margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
                >
                  <XAxis
                    dataKey="shortName"
                    stroke="#64748b"
                    fontSize={12}
                    tickLine={false}
                    axisLine={{ stroke: '#334155' }}
                  />
                  <YAxis
                    stroke="#64748b"
                    fontSize={11}
                    tickFormatter={(val) => `${val}%`}
                    tickLine={false}
                    axisLine={{ stroke: '#334155' }}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-[#0b1322] border border-teal-500/50 p-3 rounded-lg shadow-xl text-xs font-mono">
                            <div className="text-white font-bold mb-2 pb-1 border-b border-slate-800">
                              {label}
                            </div>
                            {payload.map((p) => (
                              <div
                                key={p.name}
                                className="flex justify-between gap-4 py-0.5"
                                style={{ color: p.color }}
                              >
                                <span>{p.name}:</span>
                                <span className="font-bold tabular-nums">{p.value}%</span>
                              </div>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
                    iconType="circle"
                  />
                  <Bar dataKey="Python" name="Python" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="MachineLearning" name="ML & Modeling" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="SQL" name="SQL & DB" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="EDA_Viz" name="EDA & Viz" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Business_UX" name="Business/UX" fill="#a855f7" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeChart === 'radar' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Radar View */}
            <div className="lg:col-span-7 h-[340px] w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis
                    dataKey="domain"
                    stroke="#94a3b8"
                    fontSize={11}
                    tick={{ fill: '#94a3b8' }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, 100]}
                    stroke="#475569"
                    fontSize={10}
                    tick={{ fill: '#64748b' }}
                  />
                  <Radar
                    name="Proficiency & Project Weight"
                    dataKey="score"
                    stroke="#06b6d4"
                    fill="#06b6d4"
                    fillOpacity={0.35}
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-[#0b1322] border border-teal-500/50 p-2.5 rounded shadow-xl text-xs font-mono">
                            <div className="text-white font-bold">{data.domain}</div>
                            <div className="text-teal-300">
                              Competency Index: <span className="tabular-nums font-bold">{data.score}/100</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Radar Legend and Interpretation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-teal-400">
                Competency Footprint Insights
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg">
                  <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                    Dominant Vector: Python & Pandas (95/100)
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Formed the algorithmic spine for all data preprocessing, outlier detection with IQR, and feature scaling.
                  </p>
                </div>

                <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg">
                  <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Applied Machine Learning (88/100)
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Demonstrated in the Naan Mudhalvan dynamic price recommender with elasticity modeling and cross-validated regressors.
                  </p>
                </div>

                <div className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg">
                  <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    IBM UI/UX Design Certified (82/100)
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Uniquely bridges data science with user adoption through clear visual hierarchies and accessible interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Telemetry Metrics Strip */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <div className="text-[10px] text-slate-500 uppercase">Primary Language</div>
            <div className="text-white font-bold text-sm mt-0.5">Python 3.x</div>
            <div className="text-[10px] text-teal-400">NumPy · Pandas</div>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <div className="text-[10px] text-slate-500 uppercase">ML Algorithms</div>
            <div className="text-white font-bold text-sm mt-0.5">Scikit-Learn</div>
            <div className="text-[10px] text-emerald-400">Regression & Trees</div>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <div className="text-[10px] text-slate-500 uppercase">Querying & Warehousing</div>
            <div className="text-white font-bold text-sm mt-0.5">SQL & Tableau</div>
            <div className="text-[10px] text-blue-400">Window Functions</div>
          </div>

          <div className="bg-slate-950/60 p-3 rounded-lg border border-slate-800">
            <div className="text-[10px] text-slate-500 uppercase">Design System</div>
            <div className="text-white font-bold text-sm mt-0.5">IBM SkillsBuild</div>
            <div className="text-[10px] text-purple-400">UI/UX Principles</div>
          </div>
        </div>
      </div>
    </div>
  );
};
