import React from 'react';
import {
  LayoutDashboard,
  Search,
  History,
  Workflow
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab, recentCount = 0, isMobileOpen, setIsMobileOpen, translations }) {
  const navItems = [
    { id: 'overview', label: translations.nav.overview, icon: LayoutDashboard },
    { id: 'verify', label: translations.nav.verify, icon: Search },
    { id: 'recent', label: translations.nav.recent, icon: History, count: recentCount },
    { id: 'howItWorks', label: translations.nav.howItWorks, icon: Workflow },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    if (setIsMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-zinc-950/40 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar container - monochromatic, humanized */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-white border-r border-zinc-200 flex flex-col justify-between transition-transform duration-200 ease-out lg:translate-x-0 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Typographic Brand Mark (No Logo Icon) */}
          <div className="p-6 border-b border-zinc-100">
            <div className="flex items-baseline gap-2">
              <h1 className="text-xl font-bold tracking-tight text-zinc-950 font-sans">TruthLens</h1>
              <span className="text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 border border-zinc-200">
                AI
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-medium mt-1">Fact Verification Platform</p>
            <p className="text-[11px] text-zinc-400 mt-2 italic">
              "{translations.tagline}"
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            <div className="px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
              Navigation
            </div>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-zinc-900 text-white shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-zinc-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.count !== undefined && item.count > 0 && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        isActive ? 'bg-zinc-800 text-zinc-200' : 'bg-zinc-100 text-zinc-600'
                      }`}
                    >
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Prototype Status Footer (Clean Monochromatic Card) */}
        <div className="p-4 m-4 rounded-xl bg-zinc-50 border border-zinc-200">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-800">
            <span>Prototype Sandbox</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Live Demo
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 mt-1.5 leading-relaxed">
            Frontend demonstration with simulated verification heuristics. No external APIs used.
          </p>
        </div>
      </aside>
    </>
  );
}
