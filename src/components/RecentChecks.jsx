import React, { useState } from 'react';
import {
  Search,
  Filter,
  Trash2,
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  XCircle,
  HelpCircle,
  Clock,
  Inbox,
  ArrowRight,
  Plus
} from 'lucide-react';

export default function RecentChecks({
  recentChecks,
  onOpenResult,
  onClearHistory,
  onRestoreDefaults,
  onStartNewVerification,
  triggerToast
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Records' },
    { id: 'false', label: 'Likely False' },
    { id: 'misleading', label: 'Partially True' },
    { id: 'true', label: 'Likely True' },
    { id: 'unverified', label: 'Unverified' },
  ];

  const getStatusBadge = (statusType) => {
    switch (statusType) {
      case 'true':
        return {
          icon: CheckCircle,
          label: 'Likely True',
          className: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        };
      case 'false':
        return {
          icon: XCircle,
          label: 'Likely False',
          className: 'bg-rose-50 text-rose-800 border-rose-200',
        };
      case 'misleading':
        return {
          icon: AlertTriangle,
          label: 'Partially True',
          className: 'bg-amber-50 text-amber-800 border-amber-200',
        };
      case 'outdated':
        return {
          icon: Clock,
          label: 'Outdated',
          className: 'bg-orange-50 text-orange-800 border-orange-200',
        };
      default:
        return {
          icon: HelpCircle,
          label: 'Unverified',
          className: 'bg-zinc-100 text-zinc-800 border-zinc-300',
        };
    }
  };

  const filteredChecks = recentChecks.filter((item) => {
    const matchesSearch =
      item.claim.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.verdict && item.verdict.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.contentType && item.contentType.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesFilter =
      selectedFilter === 'all' ||
      item.statusType === selectedFilter ||
      (selectedFilter === 'misleading' && item.verdict?.toLowerCase().includes('misleading'));

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header and Controls */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-zinc-950 tracking-tight">Recent Checks</h2>
              <span className="px-2 py-0.5 rounded font-mono text-xs font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">
                {recentChecks.length} Records
              </span>
            </div>
            <p className="text-sm text-zinc-500 mt-1">
              Verifications saved in your browser local storage.
            </p>
          </div>

          {recentChecks.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm('Clear all demo verification history?')) {
                  onClearHistory();
                  triggerToast('Verification history cleared.');
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-700 hover:bg-rose-50 border border-rose-200 transition-colors self-start sm:self-auto cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>Clear History</span>
            </button>
          )}
        </div>

        {/* Search bar & Filter Pills (Monochromatic) */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search claims by keyword, verdict, or format..."
              className="w-full bg-zinc-50 border border-zinc-200 rounded-lg pl-10 pr-4 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-zinc-900"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            <span className="text-zinc-400 font-semibold flex items-center gap-1 shrink-0">
              <Filter className="h-3 w-3" /> Filter:
            </span>
            {filterOptions.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedFilter === f.id
                    ? 'bg-zinc-900 text-white'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Record List */}
      {filteredChecks.length > 0 ? (
        <div className="space-y-2.5">
          {filteredChecks.map((item) => {
            const badge = getStatusBadge(item.statusType);
            const BadgeIcon = badge.icon;

            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-zinc-200 hover:border-zinc-300 p-4 sm:p-5 shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-semibold border ${badge.className}`}>
                      <BadgeIcon className="h-3 w-3 stroke-[2.2]" />
                      <span>{item.verdict || badge.label}</span>
                    </span>

                    <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 font-medium text-[11px]">
                      {item.contentType || 'Text'}
                    </span>

                    {item.confidence && (
                      <span className="text-[11px] font-mono text-zinc-400">
                        {item.confidence}% confidence
                      </span>
                    )}

                    <span className="text-[11px] text-zinc-400 ml-auto sm:ml-0">
                      • {item.timestamp || item.date || 'Recent'}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors line-clamp-2">
                    "{item.claim}"
                  </p>
                </div>

                <div className="sm:self-center shrink-0">
                  <button
                    onClick={() => onOpenResult(item)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 transition-colors cursor-pointer"
                  >
                    <span>View Result</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-zinc-200 p-12 text-center shadow-xs space-y-4">
          <div className="mx-auto w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400">
            <Inbox className="h-6 w-6 stroke-[1.8]" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-950">No verifications found</h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-sm mx-auto">
              {searchQuery || selectedFilter !== 'all'
                ? 'No claims match your search filter.'
                : 'Your demo verification history is empty.'}
            </p>
          </div>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            {recentChecks.length === 0 ? (
              <button
                onClick={onRestoreDefaults}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reload Demo Records</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedFilter('all');
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <span>Reset Filters</span>
              </button>
            )}

            <button
              onClick={onStartNewVerification}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Verify a New Claim</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
