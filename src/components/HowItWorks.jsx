import React from 'react';
import {
  Upload,
  Cpu,
  Database,
  FileCheck,
  Share2,
  ArrowRight,
  Info
} from 'lucide-react';

export default function HowItWorks({ onStartVerification }) {
  const steps = [
    {
      number: '01',
      title: 'Submit Content',
      subtitle: 'Multimodal Ingestion',
      icon: Upload,
      description:
        'Users can submit forwarded WhatsApp text, news headlines, screenshots, PDF circulars, or web URLs across 8 regional Indian languages.',
      futureNote: 'Full architecture plans OCR for vernacular print clippings and audio transcription for voice notes.',
    },
    {
      number: '02',
      title: 'Analyze Claims',
      subtitle: 'Entity & Linguistic Heuristics',
      icon: Cpu,
      description:
        'The engine parses message structure, detects viral exaggeration markers, extracts verifiable entities (ministries, monetary grants, deadlines), and scores urgency.',
      futureNote: 'Production roadmap targets fine-tuned Indic-LLMs with cross-lingual embeddings.',
    },
    {
      number: '03',
      title: 'Verify Against Evidence',
      subtitle: 'Knowledge Retrieval & Grounding',
      icon: Database,
      description:
        'Cross-references assertions against public gazettes, Reserve Bank notifications, PIB Fact Checks, WHO advisories, and authenticated state portals.',
      futureNote: 'Production roadmap includes live vector databases and real-time gazette crawlers.',
    },
    {
      number: '04',
      title: 'Explain Reasoned Verdict',
      subtitle: 'Transparent, Nuanced Breakdown',
      icon: FileCheck,
      description:
        'Avoids blunt binary true/false labels. Provides context plausibility, evidence limits, and concrete items the reader should verify before believing.',
      futureNote: 'Synthesizes plain-language vernacular explanations tailored to everyday citizens.',
    },
    {
      number: '05',
      title: 'Share Responsibly',
      subtitle: 'Stopping the Forward Chain',
      icon: Share2,
      description:
        'Generates 1-click verified summaries that users can easily copy and paste into group chats to halt the spread of misinformation.',
      futureNote: 'Includes WhatsApp bot integration for automated verification within messaging threads.',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-200">
      {/* Intro Header */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold border border-zinc-200">
          <span>Product Architecture & Vision</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight">
          How TruthLens Works
        </h2>
        <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
          From viral forwards to grounded factuality: a 5-step explainable verification framework designed for multilingual communities.
        </p>
      </div>

      {/* 5-Step Process Cards */}
      <div className="space-y-4">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-zinc-200 p-6 shadow-xs hover:border-zinc-300 transition-all flex flex-col sm:flex-row items-start gap-5"
            >
              {/* Step indicator */}
              <div className="flex items-center gap-4 sm:flex-col sm:items-center">
                <div className="h-12 w-12 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-800 flex items-center justify-center shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
                  Step {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950">{step.title}</h3>
                  <span className="text-xs font-medium text-zinc-400">• {step.subtitle}</span>
                </div>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-1.5 text-xs font-medium text-zinc-600 flex items-center gap-1.5 bg-zinc-50 p-2.5 rounded-lg border border-zinc-200">
                  <Info className="h-3.5 w-3.5 shrink-0 text-zinc-500" />
                  <span><strong>Roadmap Note:</strong> {step.futureNote}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Prototype vs Future Production Roadmap Comparison */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-zinc-100 text-zinc-700">
            <Info className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-950">
              Prototype Scope vs. Production Roadmap
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
              Clear distinction between today's frontend prototype and planned backend systems.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50">
                <th className="py-3 px-4 font-bold text-zinc-800">Capability</th>
                <th className="py-3 px-4 font-bold text-zinc-950">Today's Prototype (Hackathon)</th>
                <th className="py-3 px-4 font-bold text-zinc-600">Production Architecture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 text-zinc-600">
              <tr>
                <td className="py-3 px-4 font-semibold text-zinc-900">Inference Engine</td>
                <td className="py-3 px-4 text-zinc-900 font-medium">Predefined benchmark simulation</td>
                <td className="py-3 px-4">Fine-tuned Indic-Llama + Gemini Pro Vision</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-zinc-900">Evidence Ingestion</td>
                <td className="py-3 px-4 text-zinc-900 font-medium">Curated verified public gazette dataset</td>
                <td className="py-3 px-4">Automated web crawlers + PIB / RBI API pipelines</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-zinc-900">Multimodal (Image/Doc)</td>
                <td className="py-3 px-4 text-zinc-900 font-medium">Local browser preview + Simulated heuristics</td>
                <td className="py-3 px-4">OCR, reverse image search, EXIF tampering analysis</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-zinc-900">Languages</td>
                <td className="py-3 px-4 text-zinc-900 font-medium">8 selectable languages; English, Hindi, Marathi active</td>
                <td className="py-3 px-4">22 scheduled Indian languages with dialect adaptation</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-semibold text-zinc-900">Data Storage</td>
                <td className="py-3 px-4 text-zinc-900 font-medium">Browser LocalStorage persistence</td>
                <td className="py-3 px-4">PostgreSQL + Qdrant / Pinecone vector database</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onStartVerification}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors cursor-pointer"
          >
            <span>Verify a Claim</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
