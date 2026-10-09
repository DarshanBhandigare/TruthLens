import React, { useState, useRef } from 'react';
import {
  MessageSquareText,
  Image as ImageIcon,
  FileText,
  Link2,
  Search,
  Upload,
  X,
  AlertCircle,
  Info,
  CheckCircle,
  RotateCcw,
  Languages,
  ArrowRight
} from 'lucide-react';
import { LANGUAGES, SAMPLE_CLAIMS } from '../data/mockData';

export default function ClaimInput({
  inputClaim,
  setInputClaim,
  contentType,
  setContentType,
  selectedLanguage,
  setSelectedLanguage,
  onAnalyze,
  onReset,
  attachedFile,
  setAttachedFile,
  imagePreview,
  setImagePreview,
  translations,
  triggerToast
}) {
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const contentTypes = [
    { id: 'text', label: translations.input.types.text, icon: MessageSquareText },
    { id: 'image', label: translations.input.types.image, icon: ImageIcon },
    { id: 'document', label: translations.input.types.document, icon: FileText },
    { id: 'link', label: translations.input.types.link, icon: Link2 },
  ];

  const handleContentTypeChange = (type) => {
    setContentType(type);
    setErrorMessage('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (contentType === 'image') {
      if (!file.type.startsWith('image/')) {
        setErrorMessage('Please upload an image file (PNG, JPG, WebP).');
        return;
      }
      setAttachedFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
      setErrorMessage('');
      triggerToast(`Image "${file.name}" loaded for preview.`);
    } else if (contentType === 'document') {
      if (!file.name.match(/\.(pdf|doc|docx|txt)$/i)) {
        setErrorMessage('Please upload a document file (.pdf, .docx, .txt).');
        return;
      }
      setAttachedFile(file);
      setErrorMessage('');
      triggerToast(`Document "${file.name}" attached.`);
    }
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (contentType === 'text' && !inputClaim.trim()) {
      setErrorMessage('Please enter or paste a claim, news headline, or message to verify.');
      return;
    }

    if (contentType === 'image' && !attachedFile && !inputClaim.trim()) {
      setErrorMessage('Please select an image or add context describing the image.');
      return;
    }

    if (contentType === 'document' && !attachedFile && !inputClaim.trim()) {
      setErrorMessage('Please select a document or describe the circular you wish to check.');
      return;
    }

    if (contentType === 'link' && !inputClaim.trim()) {
      setErrorMessage('Please provide a URL or web article link to verify.');
      return;
    }

    setErrorMessage('');
    onAnalyze();
  };

  const loadSample = (sample) => {
    let claimText = sample.claim;
    if (selectedLanguage === 'hi' && sample.claimHi) claimText = sample.claimHi;
    if (selectedLanguage === 'mr' && sample.claimMr) claimText = sample.claimMr;

    setInputClaim(claimText);
    setContentType('text');
    handleRemoveFile();
    setErrorMessage('');
    triggerToast(`Sample loaded: "${sample.tag}"`);
  };

  const handlePasteDemoLink = () => {
    setInputClaim('https://factcheck-portal.sample.org/articles/viral-announcement-claim-2026');
    setErrorMessage('');
    triggerToast('Sample article URL inserted.');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Page Title & Controls */}
      <div className="bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100">
          <div>
            <h2 className="text-2xl font-bold text-zinc-950 tracking-tight">
              {translations.input.title}
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              {translations.input.subtitle}
            </p>
          </div>

          {/* Analysis Language Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-zinc-500 flex items-center gap-1">
              <Languages className="h-3.5 w-3.5 text-zinc-700" />
              {translations.input.selectLanguage}:
            </span>
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="text-xs font-medium bg-zinc-50 text-zinc-800 border border-zinc-200 rounded-lg px-3 py-1.5 focus:outline-zinc-900 cursor-pointer"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.native} ({lang.name})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Content Type Selector Tabs - Monochromatic */}
        <div className="mt-6">
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
            {translations.input.contentType}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {contentTypes.map((tab) => {
              const Icon = tab.icon;
              const isSelected = contentType === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleContentTypeChange(tab.id)}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-zinc-900 text-white shadow-xs'
                      : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Input Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* IMAGE UPLOAD MODE */}
          {contentType === 'image' && (
            <div className="space-y-4">
              <div className="border border-dashed border-zinc-300 hover:border-zinc-500 rounded-xl p-6 text-center bg-zinc-50/60 transition-colors">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="image-file-input"
                />
                {!imagePreview ? (
                  <label
                    htmlFor="image-file-input"
                    className="flex flex-col items-center justify-center cursor-pointer space-y-2"
                  >
                    <div className="h-10 w-10 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center">
                      <Upload className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-zinc-900 hover:underline">
                        Upload screenshot or photo
                      </span>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        PNG, JPG, WebP up to 10MB
                      </p>
                    </div>
                  </label>
                ) : (
                  <div className="relative inline-block max-w-sm">
                    <img
                      src={imagePreview}
                      alt="Uploaded preview"
                      className="max-h-56 rounded-lg object-contain border border-zinc-200 shadow-xs mx-auto"
                    />
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="absolute -top-2 -right-2 p-1.5 bg-zinc-900 text-white rounded-full hover:bg-zinc-700 shadow-sm transition-colors"
                      title="Remove image"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                    <div className="mt-2 text-xs font-medium text-zinc-600 flex items-center justify-center gap-1.5">
                      <CheckCircle className="h-3.5 w-3.5 text-zinc-700" />
                      <span>{attachedFile?.name}</span>
                      <span className="text-zinc-400">({(attachedFile?.size / 1024).toFixed(1)} KB)</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-zinc-100 border border-zinc-200 rounded-lg p-3 text-xs text-zinc-600 flex items-start gap-2">
                <Info className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Prototype Note:</strong> Image preview is loaded locally in your browser. This demonstration simulates content verification using heuristic rules.
                </span>
              </div>
            </div>
          )}

          {/* DOCUMENT UPLOAD MODE */}
          {contentType === 'document' && (
            <div className="space-y-4">
              <div className="border border-dashed border-zinc-300 hover:border-zinc-500 rounded-xl p-6 text-center bg-zinc-50/60 transition-colors">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                  className="hidden"
                  id="doc-file-input"
                />
                {!attachedFile ? (
                  <label
                    htmlFor="doc-file-input"
                    className="flex flex-col items-center justify-center cursor-pointer space-y-2"
                  >
                    <div className="h-10 w-10 rounded-lg bg-zinc-100 text-zinc-700 flex items-center justify-center">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-zinc-900 hover:underline">
                        Upload PDF circular or document
                      </span>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        PDF, DOCX, TXT up to 15MB
                      </p>
                    </div>
                  </label>
                ) : (
                  <div className="inline-flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-200">
                    <div className="p-2 rounded bg-zinc-100 text-zinc-700">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-zinc-900">{attachedFile.name}</p>
                      <p className="text-xs text-zinc-500">{(attachedFile.size / 1024).toFixed(1)} KB</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-1 text-zinc-400 hover:text-zinc-900 rounded hover:bg-zinc-100 ml-2"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-zinc-100 border border-zinc-200 rounded-lg p-3 text-xs text-zinc-600 flex items-start gap-2">
                <Info className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Prototype Note:</strong> File name and metadata are shown locally. No document OCR or backend parsing is executed in this prototype.
                </span>
              </div>
            </div>
          )}

          {/* LINK MODE */}
          {contentType === 'link' && (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="url"
                  value={inputClaim}
                  onChange={(e) => {
                    setInputClaim(e.target.value);
                    if (errorMessage) setErrorMessage('');
                  }}
                  placeholder="https://example.com/news/article-headline"
                  className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-zinc-900"
                />
                <button
                  type="button"
                  onClick={handlePasteDemoLink}
                  className="px-3.5 py-2.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-xs font-semibold text-zinc-700 transition-colors whitespace-nowrap"
                >
                  Paste Sample URL
                </button>
              </div>

              <div className="bg-zinc-100 border border-zinc-200 rounded-lg p-3 text-xs text-zinc-600 flex items-start gap-2">
                <Info className="h-4 w-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Prototype Note:</strong> Demonstrates URL input and result presentation using predefined benchmark responses without live web scraping.
                </span>
              </div>
            </div>
          )}

          {/* TEXTAREA FOR TEXT / CONTEXT */}
          <div>
            <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
              {contentType === 'text'
                ? 'Claim Text or Forwarded Message'
                : 'Additional Context / Headline (Optional)'}
            </label>
            <textarea
              rows={contentType === 'text' ? 5 : 3}
              value={inputClaim}
              onChange={(e) => {
                setInputClaim(e.target.value);
                if (errorMessage) setErrorMessage('');
              }}
              placeholder={translations.input.placeholder}
              className="w-full bg-zinc-50/70 border border-zinc-200 rounded-xl p-4 text-sm text-zinc-900 placeholder:text-zinc-400 focus:bg-white focus:outline-zinc-900 transition-all resize-y"
            />
            <div className="flex items-center justify-between text-xs text-zinc-400 mt-1.5 px-1">
              <span>{inputClaim.length} characters</span>
              {inputClaim && (
                <button
                  type="button"
                  onClick={() => setInputClaim('')}
                  className="text-zinc-500 hover:text-zinc-800 transition-colors"
                >
                  Clear text
                </button>
              )}
            </div>
          </div>

          {/* Error Message Alert */}
          {errorMessage && (
            <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Action Buttons: Clean Monochromatic */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={onReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200 transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>{translations.input.resetBtn}</span>
            </button>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 shadow-xs transition-all active:scale-98 cursor-pointer"
            >
              <Search className="h-4 w-4" />
              <span>{translations.input.analyzeBtn}</span>
              <ArrowRight className="h-4 w-4 ml-0.5" />
            </button>
          </div>
        </form>

        {/* Prototype Transparency Notice */}
        <div className="mt-8 pt-4 border-t border-zinc-100 text-[11px] text-zinc-400 text-center leading-relaxed">
          {translations.input.prototypeNotice}
        </div>
      </div>

      {/* Quick Sample Claims Bar */}
      <div className="bg-white rounded-xl border border-zinc-200 p-5 shadow-xs space-y-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block">
          Quick Load Predefined Demo Claims:
        </span>
        <div className="flex flex-wrap gap-2">
          {SAMPLE_CLAIMS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => loadSample(s)}
              className="text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-950 border border-zinc-200 transition-all cursor-pointer"
            >
              • {s.tag}: <span className="font-semibold truncate max-w-xs inline-block align-bottom">{s.claim.slice(0, 32)}...</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
