import React, { useState, useMemo } from 'react';
import { Calculator, Tag, Sparkles, AlertCircle, CheckCircle2, TrendingUp, Sliders } from 'lucide-react';

interface ProductCategoryConfig {
  name: string;
  defaultCost: number;
  defaultCompetitor: number;
  elasticityFactor: number;
  baseVolume: number;
}

const categories: Record<string, ProductCategoryConfig> = {
  'Wireless Earbuds': {
    name: 'Wireless Earbuds',
    defaultCost: 18,
    defaultCompetitor: 39,
    elasticityFactor: 1.4,
    baseVolume: 650,
  },
  'Smart Fitness Watch': {
    name: 'Smart Fitness Watch',
    defaultCost: 28,
    defaultCompetitor: 62,
    elasticityFactor: 1.2,
    baseVolume: 420,
  },
  'Ergonomic Laptop Stand': {
    name: 'Ergonomic Laptop Stand',
    defaultCost: 12,
    defaultCompetitor: 29,
    elasticityFactor: 1.6,
    baseVolume: 510,
  },
  'Organic Cotton T-Shirt': {
    name: 'Organic Cotton T-Shirt',
    defaultCost: 7,
    defaultCompetitor: 22,
    elasticityFactor: 1.8,
    baseVolume: 890,
  },
};

export const PriceRecommenderDemo: React.FC = () => {
  const [selectedCatKey, setSelectedCatKey] = useState<string>('Wireless Earbuds');
  const cat = categories[selectedCatKey];

  const [unitCost, setUnitCost] = useState<number>(cat.defaultCost);
  const [competitorPrice, setCompetitorPrice] = useState<number>(cat.defaultCompetitor);
  const [sellerRating, setSellerRating] = useState<number>(4.4);
  const [strategy, setStrategy] = useState<'margin' | 'balanced' | 'penetration'>('balanced');
  const [seasonality, setSeasonality] = useState<number>(1.1); // 1.0 normal, 1.25 peak

  // Whenever category changes, reset defaults sensibly
  const handleCategoryChange = (key: string) => {
    setSelectedCatKey(key);
    const newCat = categories[key];
    setUnitCost(newCat.defaultCost);
    setCompetitorPrice(newCat.defaultCompetitor);
  };

  // Recommender calculation logic based on Naan Mudhalvan pricing algorithm
  const result = useMemo(() => {
    // Strategy multipliers
    let strategyMultiplier = 1.0;
    if (strategy === 'margin') strategyMultiplier = 1.08;
    if (strategy === 'penetration') strategyMultiplier = 0.92;

    // Rating power: higher rating allows price premium above competitor median
    const ratingBonus = (sellerRating - 4.0) * 0.05; // e.g. 4.8 -> +4% pricing power

    // Baseline optimal price calculated from cost-plus floor and competitor market ceiling
    const targetPriceRaw = competitorPrice * (1 + ratingBonus) * strategyMultiplier * (1 + (seasonality - 1) * 0.3);
    // Ensure healthy minimum gross margin of at least 20%
    const minViablePrice = unitCost * 1.25;
    const recommendedPrice = Math.max(minViablePrice, Math.round(targetPriceRaw * 10) / 10);

    const unitMargin = recommendedPrice - unitCost;
    const marginPercent = Math.round((unitMargin / recommendedPrice) * 100);

    // Demand volume model: V = V_base * (P_comp / P_rec)^elasticity * rating_factor * seasonality
    const priceRatio = competitorPrice / recommendedPrice;
    const expectedVolume = Math.round(
      cat.baseVolume * Math.pow(priceRatio, cat.elasticityFactor) * (sellerRating / 4.0) * seasonality
    );

    const projectedRevenue = Math.round(recommendedPrice * expectedVolume);
    const projectedProfit = Math.round(unitMargin * expectedVolume);

    return {
      recommendedPrice,
      unitMargin: Math.round(unitMargin * 10) / 10,
      marginPercent,
      expectedVolume,
      projectedRevenue,
      projectedProfit,
      ratingBonusPercent: Math.round(ratingBonus * 100),
    };
  }, [cat, unitCost, competitorPrice, sellerRating, strategy, seasonality]);

  return (
    <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-800/80 bg-[#131d35] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
            <span>PROJECT SIMULATOR</span>
            <span aria-hidden="true">·</span>
            <span>NAAN MUDHALVAN INITIATIVE</span>
            <span aria-hidden="true">·</span>
            <span>MAY 2024</span>
          </div>
          <h4 className="text-base font-semibold text-white">
            Price Recommendation System for Online Sellers
          </h4>
        </div>
        <div className="text-xs text-slate-400 font-mono self-start sm:self-auto">
          Predictive Pricing Engine
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Parameters (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Category Picker */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">Select Product Category:</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.keys(categories).map((k) => (
                <button
                  key={k}
                  onClick={() => handleCategoryChange(k)}
                  className={`px-2.5 py-2 text-xs rounded-lg border text-left transition-colors truncate ${
                    selectedCatKey === k
                      ? 'bg-teal-500/15 border-teal-500 text-teal-200 font-medium'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Strategy Selector */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-2">Pricing Strategy Objective:</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setStrategy('penetration')}
                className={`px-3 py-2 text-xs rounded-lg border text-center transition-colors ${
                  strategy === 'penetration'
                    ? 'bg-teal-500/20 border-teal-500 text-teal-200 font-medium'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Volume Penetration
                <span className="block text-[10px] text-slate-400 font-normal">Max Conversion</span>
              </button>
              <button
                onClick={() => setStrategy('balanced')}
                className={`px-3 py-2 text-xs rounded-lg border text-center transition-colors ${
                  strategy === 'balanced'
                    ? 'bg-teal-500/20 border-teal-500 text-teal-200 font-medium'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Balanced Optimal
                <span className="block text-[10px] text-teal-400 font-normal">Max Revenue</span>
              </button>
              <button
                onClick={() => setStrategy('margin')}
                className={`px-3 py-2 text-xs rounded-lg border text-center transition-colors ${
                  strategy === 'margin'
                    ? 'bg-teal-500/20 border-teal-500 text-teal-200 font-medium'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                Premium Margin
                <span className="block text-[10px] text-slate-400 font-normal">Max Unit Return</span>
              </button>
            </div>
          </div>

          {/* Parameter Sliders */}
          <div className="space-y-4 bg-slate-900/60 border border-slate-800 rounded-lg p-4">
            {/* Unit Manufacturing Cost */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-slate-300">Unit Acquisition/Cost</span>
                <span className="font-mono text-teal-300 font-bold tabular-nums">${unitCost}</span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="1"
                value={unitCost}
                onChange={(e) => setUnitCost(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>$5 (Low cost)</span>
                <span>$80 (High cost)</span>
              </div>
            </div>

            {/* Competitor Median Price */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-slate-300">Competitor Market Median Price</span>
                <span className="font-mono text-teal-300 font-bold tabular-nums">${competitorPrice}</span>
              </div>
              <input
                type="range"
                min={unitCost + 5}
                max={unitCost * 4}
                step="1"
                value={competitorPrice}
                onChange={(e) => setCompetitorPrice(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>${unitCost + 5}</span>
                <span>${unitCost * 4}</span>
              </div>
            </div>

            {/* Seller Historical Rating */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-slate-300">Seller Trust / Rating</span>
                <span className="font-mono text-teal-300 font-bold tabular-nums">{sellerRating.toFixed(1)} ★</span>
              </div>
              <input
                type="range"
                min="3.0"
                max="5.0"
                step="0.1"
                value={sellerRating}
                onChange={(e) => setSellerRating(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>3.0 (New Seller)</span>
                <span>5.0 (Top Merchant)</span>
              </div>
            </div>

            {/* Demand Seasonality */}
            <div>
              <div className="flex justify-between items-center text-xs mb-1.5">
                <span className="text-slate-300">Market Demand Factor</span>
                <span className="font-mono text-teal-300 font-bold tabular-nums">
                  {seasonality === 0.9 ? 'Off-Season (-10%)' : seasonality === 1.1 ? 'Normal Demand' : 'Holiday Rush (+30%)'}
                </span>
              </div>
              <div className="flex gap-2">
                {[
                  { label: 'Off-Peak', val: 0.9 },
                  { label: 'Normal', val: 1.1 },
                  { label: 'Peak Festival', val: 1.3 },
                ].map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setSeasonality(s.val)}
                    className={`flex-1 py-1.5 text-xs rounded border transition-colors ${
                      seasonality === s.val
                        ? 'bg-slate-800 text-teal-300 border-teal-500 font-medium'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Model Recommendation Engine Output (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          {/* Main Recommended Price Hero Card */}
          <div className="bg-gradient-to-br from-slate-900 to-[#101b33] border border-teal-500/30 rounded-xl p-5 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="text-xs uppercase tracking-wider font-mono text-teal-400 mb-1 flex items-center justify-between">
              <span>MODEL RECOMMENDATION</span>
              <span className="text-emerald-400 text-[10px]">Optimal Pricing Target</span>
            </div>

            <div className="flex items-baseline gap-2 my-2">
              <span className="text-4xl font-extrabold font-mono text-white tabular-nums">
                ${result.recommendedPrice}
              </span>
              <span className="text-xs text-slate-400">/ unit</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-300 mb-4">
              <span>Gross Margin:</span>
              <span className="font-mono font-bold text-teal-300 tabular-nums">
                {result.marginPercent}% (${result.unitMargin}/unit)
              </span>
            </div>

            {/* Output Metric Grid */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800/80">
              <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[11px] text-slate-400">Est. Monthly Volume</div>
                <div className="text-base font-bold font-mono text-white tabular-nums">
                  {result.expectedVolume.toLocaleString()} units
                </div>
              </div>
              <div className="bg-slate-950/70 p-2.5 rounded-lg border border-slate-800">
                <div className="text-[11px] text-slate-400">Projected Net Profit</div>
                <div className="text-base font-bold font-mono text-emerald-400 tabular-nums">
                  ${result.projectedProfit.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="mt-3 text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>
                {result.recommendedPrice < competitorPrice
                  ? `Under-cutting competitor median by $${(competitorPrice - result.recommendedPrice).toFixed(1)} to capture demand.`
                  : result.recommendedPrice > competitorPrice
                  ? `Commanding $${(result.recommendedPrice - competitorPrice).toFixed(1)} premium based on ${sellerRating}★ seller rating.`
                  : 'Priced in parity with market equilibrium.'}
              </span>
            </div>
          </div>

          {/* Feature Importance / Algorithm Weights */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-lg p-4">
            <div className="text-xs font-semibold text-slate-200 mb-2 flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-teal-400" />
              Model Feature Importance (Naan Mudhalvan Pipeline)
            </div>
            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>Competitor Price Distribution</span>
                  <span className="font-mono text-teal-300">38% weight</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-400 rounded-full" style={{ width: '38%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>Historical Sales Velocity & Elasticity</span>
                  <span className="font-mono text-teal-300">26% weight</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-400 rounded-full" style={{ width: '26%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>Seller Rating & Review Sentiment</span>
                  <span className="font-mono text-teal-300">20% weight</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-400 rounded-full" style={{ width: '20%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                  <span>Unit Cost Floor & Seasonality</span>
                  <span className="font-mono text-teal-300">16% weight</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-400 rounded-full" style={{ width: '16%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
