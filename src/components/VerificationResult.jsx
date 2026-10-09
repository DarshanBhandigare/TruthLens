import React, { useState } from 'react';
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  HelpCircle,
  Clock,
  Copy,
  Check,
  BookmarkPlus,
  RotateCcw,
  ExternalLink,
  Info,
  ChevronRight,
  FileText
} from 'lucide-react';

export default function VerificationResult({
  result,
  selectedLanguage,
  translations,
  onCheckAnother,
  onSaveToRecent,
  triggerToast
}) {
  const [copied, setCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!result) return null;

  // Localized texts if available
  const isHi = selectedLanguage === 'hi';
  const isMr = selectedLanguage === 'mr';

  const localizedClaim = (isHi && result.claimHi) ? result.claimHi : (isMr && result.claimMr) ? result.claimMr : result.claim;
  const localizedVerdict = (isHi && result.verdictHi) ? result.verdictHi : (isMr && result.verdictMr) ? result.verdictMr : result.verdict;
  const localizedHeadline = (isHi && result.headlineHi) ? result.headlineHi : (isMr && result.headlineMr) ? result.headlineMr : result.headline;
  const localizedSummary = (isHi && result.summaryHi) ? result.summaryHi : (isMr && result.summaryMr) ? result.summaryMr : result.summary;

  // Status badge styling
  const getStatusBadgeConfig = (statusType) => {
    switch (statusType) {
      case 'true':
        return {
          icon: CheckCircle,
          label: localizedVerdict || 'Likely True',
          badgeClass: 'bg-emerald-50 text-emerald-900 border-emerald-300',
          textColor: 'text-emerald-800',
          barColor: 'bg-emerald-600',
        };
      case 'false':
        return {
          icon: XCircle,
          label: localizedVerdict || 'Likely False',
          badgeClass: 'bg-rose-50 text-rose-900 border-rose-300',
          textColor: 'text-rose-800',
          barColor: 'bg-rose-600',
        };
      case 'misleading':
        return {
          icon: AlertTriangle,
          label: localizedVerdict || 'Partially True / Misleading',
          badgeClass: 'bg-amber-50 text-amber-900 border-amber-300',
          textColor: 'text-amber-800',
          barColor: 'bg-amber-600',
        };
      case 'outdated':
        return {
          icon: Clock,
          label: localizedVerdict || 'Outdated',
          badgeClass: 'bg-orange-50 text-orange-900 border-orange-300',
          textColor: 'text-orange-800',
          barColor: 'bg-orange-600',
        };
      default:
        return {
          icon: HelpCircle,
          label: localizedVerdict || 'Unverified',
          badgeClass: 'bg-zinc-100 text-zinc-900 border-zinc-300',
          textColor: 'text-zinc-800',
          barColor: 'bg-zinc-600',
        };
    }
  };

  const statusConfig = getStatusBadgeConfig(result.statusType);
  const StatusIcon = statusConfig.icon;

  const handleCopySummary = async () => {
    const textToCopy = `[ScanFwd Fact & Fraud Check]
Claim: "${localizedClaim}"
Verdict: ${statusConfig.label} (${result.confidence}% Demo Confidence)
Summary: ${localizedSummary}

*Simulated demo result — check official sources before forwarding.*`;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      }
      setCopied(true);
      triggerToast('Verification summary copied to clipboard.');
      setTimeout(() => setCopied(false), 2500);
    } catch {
      triggerToast('Summary ready.');
    }
  };

  const handleSave = () => {
    if (onSaveToRecent) {
      onSaveToRecent(result);
    }
    setIsSaved(true);
    triggerToast('Saved claim to Recent Checks.');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Top Header Card: Verdict & Status Badge */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs">
        {/* Transparent Disclaimer Banner */}
        <div className="mb-6 p-3 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs text-zinc-600">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-zinc-400 shrink-0" />
            <span className="font-medium">{translations.results.disclaimer}</span>
          </div>
          <span className="text-[10px] uppercase font-mono font-semibold tracking-wider px-2 py-0.5 rounded bg-white text-zinc-600 border border-zinc-200">
            Sandbox
          </span>
        </div>

        {/* Section A: Claim Summary */}
        <div className="space-y-2 pb-6 border-b border-zinc-100">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Submitted Claim
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">
              {result.tag || 'Text Forward'}
            </span>
          </div>
          <blockquote className="text-lg sm:text-xl font-bold text-zinc-950 border-l-2 border-zinc-900 pl-4 py-1 leading-snug">
            "{localizedClaim}"
          </blockquote>
        </div>

        {/* Section B: Verdict */}
        <div className="mt-6 pt-1 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={`px-4 py-2.5 rounded-lg border flex items-center gap-2.5 ${statusConfig.badgeClass}`}>
                <StatusIcon className="h-5 w-5 stroke-[2.2]" />
                <span className="text-base font-bold tracking-tight">
                  {statusConfig.label}
                </span>
              </div>
            </div>

            {/* Confidence Gauge (Monochromatic) */}
            <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 min-w-56">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-700 mb-1.5">
                <span>{translations.results.confidenceLabel}</span>
                <span className="text-zinc-950 font-bold">{result.confidence}%</span>
              </div>
              <div className="h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-zinc-900 transition-all duration-500"
                  style={{ width: `${result.confidence}%` }}
                />
              </div>
              <p className="text-[10px] text-zinc-400 mt-1 text-right">
                {translations.results.confidenceDisclaimer}
              </p>
            </div>
          </div>

          {/* Headline & Summary */}
          <div className="space-y-1.5 bg-zinc-50 p-5 rounded-xl border border-zinc-200">
            <h3 className="text-base font-bold text-zinc-950">
              {localizedHeadline}
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {localizedSummary}
            </p>
          </div>
        </div>
      </div>

      {/* Section C: Why This Result? (3 Cards) */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-zinc-700" />
          <h3 className="text-base font-bold text-zinc-950">
            {translations.results.whyHeading}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {result.why?.map((item, idx) => {
            const whyTitle = isHi && item.titleHi ? item.titleHi : item.title;
            const whyText = isHi && item.textHi ? item.textHi : item.text;

            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 uppercase tracking-wider mb-1">
                    <span className="h-4 w-4 rounded-full bg-zinc-200 text-zinc-800 flex items-center justify-center text-[10px] font-mono">
                      {idx + 1}
                    </span>
                    <span>{whyTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mt-2">
                    {whyText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section D: What You Should Do */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-zinc-700" />
          <h3 className="text-base font-bold text-zinc-950">
            {translations.results.whatToDoHeading}
          </h3>
        </div>

        <ul className="space-y-2.5">
          {(isHi && result.whatToDoHi ? result.whatToDoHi : result.whatToDo)?.map((step, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 p-3 rounded-lg bg-zinc-50 border border-zinc-200/80 text-xs sm:text-sm text-zinc-700 leading-relaxed"
            >
              <div className="h-4 w-4 rounded-full bg-zinc-200 text-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="h-3 w-3 stroke-[2.5]" />
              </div>
              <span className="font-medium">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Section E: Source Verification (Recommended Sources to Check) */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4 text-zinc-700" />
            <h3 className="text-base font-bold text-zinc-950">
              {translations.results.sourcesHeading}
            </h3>
          </div>
          <span className="text-xs text-zinc-400 font-medium hidden sm:inline">
            Official public portals
          </span>
        </div>

        <p className="text-xs text-zinc-500">
          Verify announcements directly on recognized government and institutional portals:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {result.recommendedSources?.map((src, idx) => (
            <a
              key={idx}
              href={src.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono font-bold text-zinc-600 uppercase tracking-wide">
                    {src.domain}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-zinc-400 group-hover:text-zinc-950 transition-colors" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-zinc-950">
                  {src.name}
                </h4>
                <p className="text-[11px] text-zinc-500 mt-1 line-clamp-2">
                  {src.description}
                </p>
              </div>
              <div className="mt-3 text-[11px] text-zinc-800 font-semibold flex items-center gap-1 group-hover:underline">
                <span>Open authentic portal</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Section F: Working Action Buttons (Monochromatic) */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <button
          onClick={onCheckAnother}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 transition-colors cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          <span>{translations.results.actions.checkAnother}</span>
        </button>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2">
          <button
            onClick={handleCopySummary}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-zinc-700 bg-white hover:bg-zinc-50 border border-zinc-200 transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-zinc-900" />
                <span className="text-zinc-900">Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-zinc-400" />
                <span>{translations.results.actions.copySummary}</span>
              </>
            )}
          </button>

          <button
            onClick={handleSave}
            disabled={isSaved}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              isSaved
                ? 'bg-zinc-100 text-zinc-500 border border-zinc-200 cursor-default'
                : 'bg-zinc-900 text-white hover:bg-zinc-800'
            }`}
          >
            {isSaved ? (
              <>
                <Check className="h-4 w-4" />
                <span>{translations.results.actions.saved}</span>
              </>
            ) : (
              <>
                <BookmarkPlus className="h-4 w-4" />
                <span>{translations.results.actions.saveRecent}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
