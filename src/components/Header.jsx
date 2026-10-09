import React, { useState } from 'react';
import {
  Menu,
  Languages,
  Plus,
  HelpCircle,
  Check,
  ChevronDown
} from 'lucide-react';
import { LANGUAGES } from '../data/mockData';

export default function Header({
  onOpenMobileMenu,
  selectedLanguage,
  setSelectedLanguage,
  onNewVerification,
  translations,
  triggerToast
}) {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [demoNoticeOpen, setDemoNoticeOpen] = useState(false);

  const currentLangObj = LANGUAGES.find((l) => l.code === selectedLanguage) || LANGUAGES[0];

  const handleSelectLanguage = (code) => {
    setSelectedLanguage(code);
    setLangDropdownOpen(false);
    const chosen = LANGUAGES.find((l) => l.code === code);
    if (code === 'en' || code === 'hi' || code === 'mr') {
      triggerToast(`Language switched to ${chosen.name} (${chosen.native})`);
    } else {
      triggerToast(`${chosen.name} selected. Full translation planned for future version.`, 'info');
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile hamburger & simple text brand */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="p-2 rounded-lg text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 lg:hidden focus:outline-hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Clean text branding on mobile (NO LOGO ICON) */}
          <div className="flex items-center gap-2 lg:hidden">
            <span className="font-bold text-zinc-950 tracking-tight text-lg">ScanFwd</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
              AI
            </span>
          </div>

          {/* Clean Monochromatic Demo Mode Badge */}
          <div className="relative">
            <button
              onClick={() => setDemoNoticeOpen(!demoNoticeOpen)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-700 border border-zinc-200 hover:bg-zinc-200/70 transition-colors cursor-pointer"
              title="Click to view prototype notice"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
              <span>Demo Mode</span>
              <HelpCircle className="h-3 w-3 text-zinc-400 ml-0.5" />
            </button>

            {demoNoticeOpen && (
              <div
                className="absolute left-0 mt-2 w-80 p-4 bg-white rounded-xl shadow-lg border border-zinc-200 text-xs text-zinc-600 z-50 animate-in fade-in slide-in-from-top-1"
                onMouseLeave={() => setDemoNoticeOpen(false)}
              >
                <div className="font-semibold text-zinc-900 mb-1">
                  Simulated Hackathon Prototype
                </div>
                <p className="leading-relaxed text-zinc-500">
                  This platform demonstrates the end-to-end verification and explainability workflow. Verifications are generated from predefined heuristics and benchmark cases.
                </p>
                <button
                  onClick={() => setDemoNoticeOpen(false)}
                  className="mt-2 text-xs text-zinc-900 font-semibold hover:underline"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: Language Selector & New Verification Action */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 transition-colors"
              aria-haspopup="true"
              aria-expanded={langDropdownOpen}
            >
              <Languages className="h-4 w-4 text-zinc-500" />
              <span className="font-medium text-zinc-900">{currentLangObj.native}</span>
              <span className="hidden md:inline text-zinc-400 text-xs">({currentLangObj.name})</span>
              <ChevronDown className="h-3.5 w-3.5 text-zinc-400" />
            </button>

            {langDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setLangDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-xl border border-zinc-200 py-1.5 z-50 max-h-80 overflow-y-auto">
                  <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-100">
                    Regional Languages (8)
                  </div>
                  {LANGUAGES.map((lang) => {
                    const isSelected = lang.code === selectedLanguage;
                    const hasFullSupport = ['en', 'hi', 'mr'].includes(lang.code);
                    return (
                      <button
                        key={lang.code}
                        onClick={() => handleSelectLanguage(lang.code)}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm text-left hover:bg-zinc-50 transition-colors ${
                          isSelected ? 'bg-zinc-100 text-zinc-950 font-semibold' : 'text-zinc-700'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="font-medium text-zinc-900">{lang.native}</span>
                          <span className="text-[11px] text-zinc-400">
                            {lang.name} {hasFullSupport ? '• Ready' : '• Preview'}
                          </span>
                        </div>
                        {isSelected && <Check className="h-4 w-4 text-zinc-900" />}
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* New Verification Action Button (Clean Monochromatic) */}
          <button
            onClick={onNewVerification}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            <span>{translations.nav.newVerification}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
