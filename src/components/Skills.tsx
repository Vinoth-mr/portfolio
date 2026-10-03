import React, { useState } from 'react';
import { skillCategories, certifications } from '../data/portfolioData';
import { Code, BarChart3, BrainCircuit, Palette, Sparkles, Award, Terminal, Check } from 'lucide-react';

const codeSnippets: Record<string, { label: string; lang: string; code: string; note: string }> = {
  sql: {
    label: 'SQL Analytics & Window Functions',
    lang: 'sql',
    note: 'Identifying high-value repeat customers & cumulative monthly growth',
    code: `-- Quarterly Sales Cohort & Moving Average Analysis
WITH monthly_revenue AS (
  SELECT 
    DATE_TRUNC('month', order_date) AS sales_month,
    category,
    SUM(order_amount) AS total_revenue,
    COUNT(DISTINCT customer_id) AS active_customers
  FROM retail_orders
  WHERE status = 'Completed'
  GROUP BY 1, 2
)
SELECT 
  sales_month,
  category,
  total_revenue,
  AVG(total_revenue) OVER (
    PARTITION BY category 
    ORDER BY sales_month 
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
  ) AS rolling_3mo_avg,
  RANK() OVER (PARTITION BY sales_month ORDER BY total_revenue DESC) AS category_rank
FROM monthly_revenue
ORDER BY sales_month DESC, total_revenue DESC;`,
  },
  pandas: {
    label: 'Python / Pandas Feature Engineering',
    lang: 'python',
    note: 'Data cleaning, outlier clipping, and recency/frequency/monetary transformation',
    code: `import pandas as pd
import numpy as np

def build_customer_features(orders_df: pd.DataFrame, snapshot_date: pd.Timestamp) -> pd.DataFrame:
    """Computes RFM (Recency, Frequency, Monetary) metrics for predictive modeling."""
    rfm = orders_df.groupby('customer_id').agg({
        'order_date': lambda x: (snapshot_date - x.max()).days,
        'order_id': 'count',
        'order_total': ['sum', 'mean']
    })
    
    rfm.columns = ['recency_days', 'frequency_orders', 'monetary_sum', 'monetary_avg']
    
    # Cap 99th percentile outliers to stabilize model training
    for col in ['monetary_sum', 'monetary_avg']:
        upper_limit = rfm[col].quantile(0.99)
        rfm[col] = np.clip(rfm[col], 0, upper_limit)
        
    return rfm`,
  },
  ml: {
    label: 'Scikit-Learn Model Cross-Validation',
    lang: 'python',
    note: 'Predictive pricing pipeline with K-Fold evaluation',
    code: `from sklearn.ensemble import GradientBoostingRegressor
from sklearn.model_selection import KFold, cross_val_score
from sklearn.metrics import mean_squared_error, r2_score

# Instantiate pipeline for price recommendation
model = GradientBoostingRegressor(
    n_estimators=150, 
    learning_rate=0.08, 
    max_depth=4, 
    random_state=42
)

# 5-Fold Cross Validation
kf = KFold(n_splits=5, shuffle=True, random_state=42)
rmse_scores = np.sqrt(-cross_val_score(model, X_train, y_train, scoring="neg_mean_squared_error", cv=kf))

print(f"Mean CV RMSE: {rmse_scores.mean():.3f} (+/- {rmse_scores.std():.3f})")
model.fit(X_train, y_train)`,
  },
};

export const Skills: React.FC = () => {
  const [activeSnippetKey, setActiveSnippetKey] = useState<'sql' | 'pandas' | 'ml'>('sql');
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code':
        return Code;
      case 'BarChart3':
        return BarChart3;
      case 'BrainCircuit':
        return BrainCircuit;
      case 'Palette':
        return Palette;
      default:
        return Sparkles;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeSnippetKey].code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="skills" className="py-20 border-b border-slate-800/80 bg-[#0c121e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-teal-400 mb-2">
            04. Technical & Analytical Matrix
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Tools, frameworks, and engineering competencies.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            A comprehensive overview of programming languages, statistical packages, business intelligence platforms, and human-centered design principles.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => {
            const Icon = getIcon(cat.iconName);
            return (
              <div
                key={cat.title}
                className="bg-[#0f172a] border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">{cat.title}</h3>
                  </div>

                  <div className="space-y-3.5">
                    {cat.skills.map((s) => (
                      <div key={s.name} className="border-b border-slate-800/60 pb-2.5 last:border-0 last:pb-0">
                        <div className="flex items-baseline justify-between text-xs">
                          <span className="font-semibold text-slate-200">{s.name}</span>
                          <span className="text-[11px] font-mono text-teal-400">{s.level}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* IBM Certification Card */}
          <div className="bg-gradient-to-br from-slate-900 to-[#101b33] border border-teal-500/30 rounded-xl p-6 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-teal-400/20 text-teal-300">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-teal-400 uppercase">Industry Credential</div>
                  <h3 className="text-base font-bold text-white tracking-tight">IBM SkillsBuild Certified</h3>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="text-white font-semibold">UI/UX Design Principles</div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Earned formal certification demonstrating user research, wireframing, information architecture, and heuristic validation.
                </p>
                <div className="pt-2 text-[11px] text-teal-300 font-mono">
                  Enables data deliverables that non-technical leaders love to use.
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
              <span>Issuer: IBM SkillsBuild</span>
              <span className="text-emerald-400">Verified Credential</span>
            </div>
          </div>
        </div>

        {/* Code Snippets & Query Playground (Interactive Proof of Competence) */}
        <div className="mt-12 bg-[#0b1322] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span className="text-xs font-mono uppercase text-slate-300 font-semibold">
                Hands-on Code & Query Samples
              </span>
            </div>

            {/* Selector Segmented Control */}
            <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 self-start sm:self-auto">
              {(['sql', 'pandas', 'ml'] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setActiveSnippetKey(k)}
                  className={`px-3 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                    activeSnippetKey === k
                      ? 'bg-teal-500 text-slate-950 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {k.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
              <div>
                <h4 className="text-xs font-mono text-teal-300 font-semibold">
                  {codeSnippets[activeSnippetKey].label}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {codeSnippets[activeSnippetKey].note}
                </p>
              </div>

              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs rounded border border-slate-700/80 transition-colors"
              >
                {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Code className="w-3.5 h-3.5 text-teal-400" />}
                <span>{copiedSnippet ? 'Copied to Clipboard' : 'Copy Code'}</span>
              </button>
            </div>

            <pre className="p-4 bg-slate-950 rounded-lg text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed border border-slate-900">
              <code>{codeSnippets[activeSnippetKey].code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
