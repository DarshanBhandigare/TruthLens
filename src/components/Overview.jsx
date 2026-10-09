import React from 'react';
import {
  Search,
  Languages,
  CheckCircle2,
  FileCheck2,
  TrendingUp,
  ArrowRight,
  Layers,
  FileText
} from 'lucide-react';
import { SAMPLE_CLAIMS } from '../data/mockData';

export default function Overview({ onSelectSample, onStartVerification, translations, selectedLanguage }) {
  const getLocalizedClaim = (sample) => {
    if (selectedLanguage === 'hi' && sample.claimHi) return sample.claimHi;
    if (selectedLanguage === 'mr' && sample.claimMr) return sample.claimMr;
    return sample.claim;
  };

  const getLocalizedVerdict = (sample) => {
    if (selectedLanguage === 'hi' && sample.verdictHi) return sample.verdictHi;
    if (selectedLanguage === 'mr' && sample.verdictMr) return sample.verdictMr;
    return sample.verdict;
  };

  return (
    <div className="space-y-10 animate-in fade-in duration-200">
      {/* Hero Section: Clean 2-Column Responsive Grid (No Absolute Overlap) */}
      <section className="rounded-2xl bg-white border border-zinc-200/90 p-6 sm:p-10 lg:p-12 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, description, and primary actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-medium border border-zinc-200">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600"></span>
              <span>Multilingual Fact Verification Platform</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              {translations.heroTitle}
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-xl">
              {translations.heroSubtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onStartVerification()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-zinc-900 hover:bg-zinc-800 shadow-sm transition-all active:scale-98 cursor-pointer text-sm sm:text-base"
              >
                <Search className="h-4 w-4" />
                <span>{translations.verifyClaimBtn}</span>
                <ArrowRight className="h-4 w-4 ml-0.5" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('sample-claims-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200/80 border border-zinc-200 transition-all cursor-pointer text-sm sm:text-base"
              >
                <span>{translations.exploreDemoBtn}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Live Demo Card (Dedicated Grid Space - Zero Overlap!) */}
          <div className="lg:col-span-5">
            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Sample Analysis
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-rose-50 text-rose-800 border border-rose-200">
                  Likely False
                </span>
              </div>

              <blockquote className="text-sm font-semibold text-zinc-800 leading-snug">
                "A new government scheme will give every citizen ₹50,000. Apply today!"
              </blockquote>

              <p className="text-xs text-zinc-500 leading-relaxed">
                No official Union Ministry gazette or budget allocation authorizes this unconditional cash grant. Exhibits phishing indicators.
              </p>

              <div className="pt-2 border-t border-zinc-200/80 space-y-1.5">
                <div className="flex justify-between text-[11px] font-medium text-zinc-600">
                  <span>Demo Confidence Indicator</span>
                  <span className="font-semibold text-zinc-900">94%</span>
                </div>
                <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                  <div className="h-full bg-zinc-800 rounded-full w-[94%]" />
                </div>
              </div>

              <button
                onClick={() => onSelectSample(SAMPLE_CLAIMS[0])}
                className="w-full mt-2 text-center text-xs font-semibold text-zinc-900 hover:text-zinc-700 flex items-center justify-center gap-1.5 pt-1 cursor-pointer"
              >
                <span>View complete breakdown</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Compact Feature Cards: Clean Monochromatic Style */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-xs hover:border-zinc-300 transition-colors">
          <div className="h-10 w-10 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center mb-4">
            <Languages className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-zinc-900 mb-1.5">
            {translations.features.multilingual}
          </h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {translations.features.multilingualDesc}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-xs hover:border-zinc-300 transition-colors">
          <div className="h-10 w-10 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center mb-4">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-zinc-900 mb-1.5">
            {translations.features.explainable}
          </h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {translations.features.explainableDesc}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-zinc-200 shadow-xs hover:border-zinc-300 transition-colors">
          <div className="h-10 w-10 rounded-lg bg-zinc-100 border border-zinc-200 text-zinc-800 flex items-center justify-center mb-4">
            <Layers className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-zinc-900 mb-1.5">
            {translations.features.multiFormat}
          </h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {translations.features.multiFormatDesc}
          </p>
        </div>
      </section>

      {/* Illustrative Demo Statistics (Editorial Clean Style) */}
      <section className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-zinc-100 mb-6">
          <div>
            <h2 className="text-lg font-bold text-zinc-950">Demonstration Platform Metrics</h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              {translations.stats.caption}
            </p>
          </div>
          <span className="self-start sm:self-auto text-[11px] font-medium px-2.5 py-1 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
            Sample Sandbox Data
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              {translations.stats.claimsChecked}
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-zinc-950 font-mono">1,284</span>
              <span className="text-xs font-semibold text-zinc-600 flex items-center">
                <TrendingUp className="h-3 w-3 mr-0.5" /> +14%
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">Simulated test verifications</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              {translations.stats.misleadingClaims}
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-zinc-950 font-mono">426</span>
              <span className="text-xs font-semibold text-zinc-600">33.2% ratio</span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">Flagged false or misleading</p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              {translations.stats.languagesSupported}
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-zinc-950 font-mono">8</span>
              <span className="text-xs font-semibold text-zinc-600">Regional Indian</span>
            </div>
            <p className="text-[11px] text-zinc-500 mt-1">EN, HI, MR, BN, TA, TE, GU, KN</p>
          </div>
        </div>
      </section>

      {/* Try a Sample Claim Section */}
      <section id="sample-claims-section" className="space-y-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-zinc-950">{translations.trySample}</h2>
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 font-medium border border-zinc-200">
              Click to Test
            </span>
          </div>
          <p className="text-sm text-zinc-600 mt-1">
            {translations.trySampleDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SAMPLE_CLAIMS.map((sample, idx) => {
            const claimText = getLocalizedClaim(sample);
            const verdictText = getLocalizedVerdict(sample);
            const badgeClasses =
              sample.statusType === 'false'
                ? 'bg-rose-50 text-rose-800 border-rose-200'
                : sample.statusType === 'unverified'
                ? 'bg-zinc-100 text-zinc-800 border-zinc-300'
                : 'bg-amber-50 text-amber-800 border-amber-200';

            return (
              <div
                key={sample.id}
                onClick={() => onSelectSample(sample)}
                className="group bg-white rounded-xl p-5 border border-zinc-200 hover:border-zinc-400 hover:shadow-xs transition-all duration-150 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                      Sample #{idx + 1} • {sample.tag}
                    </span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${badgeClasses}`}>
                      {verdictText}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors line-clamp-3 leading-snug">
                    "{claimText}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-700 font-semibold">
                  <span>Verify this claim</span>
                  <ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
