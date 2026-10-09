import React, { useState, useEffect } from 'react';
import { CheckCircle2, Search } from 'lucide-react';

const STEPS = [
  { title: 'Processing your claim...', subtitle: 'Parsing message semantics, linguistic cues, and key entities', progress: 32 },
  { title: 'Checking contextual indicators...', subtitle: 'Cross-referencing gazette patterns and accredited advisory rubrics', progress: 68 },
  { title: 'Preparing an explanation...', subtitle: 'Synthesizing evidence limitations and actionable guidance', progress: 95 },
];

export default function VerificationLoading({ onComplete }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < STEPS.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 700);

    const finishTimeout = setTimeout(() => {
      onComplete();
    }, 2300);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(finishTimeout);
    };
  }, [onComplete]);

  const currentStep = STEPS[currentStepIndex];

  return (
    <div className="max-w-xl mx-auto py-12 px-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl border border-zinc-200 p-8 sm:p-10 shadow-xs text-center space-y-6">
        {/* Clean Monochromatic Spinner (NO LOGO BOX) */}
        <div className="relative mx-auto w-14 h-14 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-zinc-200 border-t-zinc-900 animate-spin" />
          <Search className="h-5 w-5 text-zinc-700 absolute" />
        </div>

        {/* Dynamic status message */}
        <div className="space-y-1.5">
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight transition-all duration-200">
            {currentStep.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
            {currentStep.subtitle}
          </p>
        </div>

        {/* Progress bar (Monochromatic zinc) */}
        <div className="space-y-2 max-w-md mx-auto">
          <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden p-0.5 border border-zinc-200">
            <div
              className="h-full bg-zinc-900 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${currentStep.progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-medium text-zinc-400">
            <span>Simulated Heuristic Pipeline</span>
            <span className="font-mono">{currentStep.progress}%</span>
          </div>
        </div>

        {/* Stepper items checklist */}
        <div className="pt-4 border-t border-zinc-100 space-y-2.5 text-left max-w-sm mx-auto">
          {STEPS.map((s, idx) => {
            const isDone = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 text-xs transition-opacity ${
                  isDone ? 'text-zinc-900 font-semibold' : isCurrent ? 'text-zinc-900 font-bold' : 'text-zinc-400 opacity-60'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="h-4 w-4 text-zinc-800 shrink-0" />
                ) : isCurrent ? (
                  <div className="h-4 w-4 rounded-full border-2 border-zinc-900 border-t-transparent animate-spin shrink-0" />
                ) : (
                  <div className="h-4 w-4 rounded-full border border-zinc-300 shrink-0" />
                )}
                <span>{s.title}</span>
              </div>
            );
          })}
        </div>

        <p className="text-[11px] text-zinc-400">
          ScanFwd Sandbox • Heuristic verification test
        </p>
      </div>
    </div>
  );
}
