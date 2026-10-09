import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 3200);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm animate-in slide-in-from-bottom-4 fade-in duration-150">
      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-950 text-white border border-zinc-800 shadow-lg text-xs sm:text-sm font-medium">
        <CheckCircle2 className="h-4 w-4 text-zinc-300 shrink-0 mt-0.5" />

        <div className="flex-1 leading-snug text-zinc-200">
          {toast.message}
        </div>

        <button
          onClick={onClose}
          className="text-zinc-500 hover:text-white transition-colors p-0.5 ml-1"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
