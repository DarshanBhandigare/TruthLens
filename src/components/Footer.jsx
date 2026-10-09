import React from 'react';

export default function Footer({ onNavigate, translations }) {
  return (
    <footer className="mt-16 border-t border-zinc-200 bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-zinc-950 tracking-tight">TruthLens</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
              AI
            </span>
            <span className="text-[10px] text-zinc-400">• Prototype</span>
          </div>
          <p className="text-xs text-zinc-500 mt-0.5">"{translations.tagline}"</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-500">
          <button
            onClick={() => onNavigate('overview')}
            className="hover:text-zinc-900 transition-colors"
          >
            {translations.nav.overview}
          </button>
          <button
            onClick={() => onNavigate('verify')}
            className="hover:text-zinc-900 transition-colors"
          >
            {translations.nav.verify}
          </button>
          <button
            onClick={() => onNavigate('recent')}
            className="hover:text-zinc-900 transition-colors"
          >
            {translations.nav.recent}
          </button>
          <button
            onClick={() => onNavigate('howItWorks')}
            className="hover:text-zinc-900 transition-colors"
          >
            {translations.nav.howItWorks}
          </button>
        </div>

        <div className="text-xs text-zinc-400 text-center sm:text-right">
          <p>TruthLens — Hackathon Prototype</p>
          <p className="text-[11px] text-zinc-400 mt-0.5">Multilingual Information Integrity</p>
        </div>
      </div>
    </footer>
  );
}
