import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Overview from './components/Overview';
import ClaimInput from './components/ClaimInput';
import VerificationLoading from './components/VerificationLoading';
import VerificationResult from './components/VerificationResult';
import RecentChecks from './components/RecentChecks';
import HowItWorks from './components/HowItWorks';
import Toast from './components/Toast';
import Footer from './components/Footer';

import {
  UI_TRANSLATIONS,
  SAMPLE_CLAIMS,
  INITIAL_RECENT_CHECKS,
  generateSimulatedResult
} from './data/mockData';

const STORAGE_KEY = 'truthlens_recent_checks';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'verify' | 'recent' | 'howItWorks'
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Verification Input state
  const [inputClaim, setInputClaim] = useState('');
  const [contentType, setContentType] = useState('text');
  const [attachedFile, setAttachedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Verification Processing state
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);

  // Toast notifications
  const [toast, setToast] = useState(null);

  // Recent Checks persisted in LocalStorage
  const [recentChecks, setRecentChecks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // LocalStorage unavailable
    }
    return INITIAL_RECENT_CHECKS;
  });

  // Save to LocalStorage on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(recentChecks));
    } catch {
      // ignore
    }
  }, [recentChecks]);

  // Current dictionary translation
  const translations = UI_TRANSLATIONS[selectedLanguage] || UI_TRANSLATIONS.en;

  const triggerToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // User selects one of the 3 sample claims from Overview or pills
  const handleSelectSample = (sample) => {
    let claimText = sample.claim;
    if (selectedLanguage === 'hi' && sample.claimHi) claimText = sample.claimHi;
    if (selectedLanguage === 'mr' && sample.claimMr) claimText = sample.claimMr;

    setInputClaim(claimText);
    setContentType('text');
    setAttachedFile(null);
    setImagePreview(null);
    setVerificationResult(null);
    setActiveTab('verify');
    triggerToast(`Loaded sample claim: "${sample.tag}"`);
  };

  // Start new verification from Header or Overview
  const handleNewVerification = () => {
    setInputClaim('');
    setContentType('text');
    setAttachedFile(null);
    setImagePreview(null);
    setVerificationResult(null);
    setActiveTab('verify');
  };

  // Trigger analysis simulation
  const handleStartAnalysis = () => {
    setIsVerifying(true);
    setVerificationResult(null);
  };

  // Called when VerificationLoading simulation finishes (after ~2.3 seconds)
  const handleLoadingComplete = () => {
    const result = generateSimulatedResult(inputClaim, contentType, selectedLanguage, attachedFile);
    setVerificationResult(result);
    setIsVerifying(false);

    // Automatically record to Recent Checks list
    const newRecord = {
      id: `rc-${Date.now()}`,
      claim: result.claim,
      verdict: result.verdict,
      statusType: result.statusType,
      confidence: result.confidence,
      contentType: contentType.charAt(0).toUpperCase() + contentType.slice(1),
      language: selectedLanguage.toUpperCase(),
      timestamp: 'Just now',
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      resultData: result,
    };

    setRecentChecks((prev) => [newRecord, ...prev]);
  };

  // User resets claim input form
  const handleResetInput = () => {
    setInputClaim('');
    setAttachedFile(null);
    setImagePreview(null);
    setVerificationResult(null);
    triggerToast('Verification input reset.');
  };

  // User clicks "Check Another Claim" from result view
  const handleCheckAnother = () => {
    setVerificationResult(null);
    setInputClaim('');
    setAttachedFile(null);
    setImagePreview(null);
  };

  // User clicks "Save to Recent Checks" button in Result view
  const handleSaveToRecent = (res) => {
    const exists = recentChecks.some((item) => item.claim === res.claim);
    if (!exists) {
      const record = {
        id: `rc-${Date.now()}`,
        claim: res.claim,
        verdict: res.verdict,
        statusType: res.statusType,
        confidence: res.confidence,
        contentType: contentType.charAt(0).toUpperCase() + contentType.slice(1),
        language: selectedLanguage.toUpperCase(),
        timestamp: 'Just now',
        date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        resultData: res,
      };
      setRecentChecks((prev) => [record, ...prev]);
    }
  };

  // User clicks "View Result" from Recent Checks screen
  const handleOpenRecentResult = (recentItem) => {
    let resultToOpen = recentItem.resultData;

    if (!resultToOpen) {
      // Find matching sample
      const matchedSample = SAMPLE_CLAIMS.find((s) => s.id === recentItem.sampleId);
      if (matchedSample) {
        resultToOpen = matchedSample;
      } else {
        resultToOpen = generateSimulatedResult(recentItem.claim, 'text', 'en');
      }
    }

    setVerificationResult(resultToOpen);
    setInputClaim(recentItem.claim);
    setActiveTab('verify');
    triggerToast(`Opened result for: "${recentItem.claim.slice(0, 30)}..."`);
  };

  const handleClearHistory = () => {
    setRecentChecks([]);
  };

  const handleRestoreDefaults = () => {
    setRecentChecks(INITIAL_RECENT_CHECKS);
    triggerToast('Default demo records restored.');
  };

  return (
    <div className="min-h-screen bg-zinc-50/70 text-zinc-950 flex flex-col">
      {/* Sidebar (Desktop fixed, Mobile off-canvas) */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        recentCount={recentChecks.length}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        translations={translations}
      />

      {/* Main Layout Area (shifted right on desktop) */}
      <div className="lg:pl-72 flex flex-col flex-1">
        {/* Top Header */}
        <Header
          onOpenMobileMenu={() => setIsMobileOpen(true)}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          onNewVerification={handleNewVerification}
          translations={translations}
          triggerToast={triggerToast}
        />

        {/* Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <Overview
              onSelectSample={handleSelectSample}
              onStartVerification={handleNewVerification}
              translations={translations}
              selectedLanguage={selectedLanguage}
            />
          )}

          {/* VERIFY TAB */}
          {activeTab === 'verify' && (
            <div>
              {isVerifying ? (
                <VerificationLoading onComplete={handleLoadingComplete} />
              ) : verificationResult ? (
                <VerificationResult
                  result={verificationResult}
                  selectedLanguage={selectedLanguage}
                  translations={translations}
                  onCheckAnother={handleCheckAnother}
                  onSaveToRecent={handleSaveToRecent}
                  triggerToast={triggerToast}
                />
              ) : (
                <ClaimInput
                  inputClaim={inputClaim}
                  setInputClaim={setInputClaim}
                  contentType={contentType}
                  setContentType={setContentType}
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                  onAnalyze={handleStartAnalysis}
                  onReset={handleResetInput}
                  attachedFile={attachedFile}
                  setAttachedFile={setAttachedFile}
                  imagePreview={imagePreview}
                  setImagePreview={setImagePreview}
                  translations={translations}
                  triggerToast={triggerToast}
                />
              )}
            </div>
          )}

          {/* RECENT CHECKS TAB */}
          {activeTab === 'recent' && (
            <RecentChecks
              recentChecks={recentChecks}
              onOpenResult={handleOpenRecentResult}
              onClearHistory={handleClearHistory}
              onRestoreDefaults={handleRestoreDefaults}
              onStartNewVerification={handleNewVerification}
              triggerToast={triggerToast}
            />
          )}

          {/* HOW IT WORKS TAB */}
          {activeTab === 'howItWorks' && (
            <HowItWorks onStartVerification={handleNewVerification} />
          )}
        </main>

        {/* Footer */}
        <Footer onNavigate={setActiveTab} translations={translations} />
      </div>

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
