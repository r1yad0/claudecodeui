import { useState } from 'react';
import { countries } from './data/countries';
import CountryList from './CountryList';
import CountryDetail from './CountryDetail';
import GuideDetail from './GuideDetail';
import type { Country, Guide } from './data/countries';

export type View =
  | { type: 'list' }
  | { type: 'country'; country: Country }
  | { type: 'guide'; country: Country; category: 'business' | 'residency' | 'citizenship'; guide: Guide };

export default function CountryGuide() {
  const [view, setView] = useState<View>({ type: 'list' });

  function goToCountry(country: Country) {
    setView({ type: 'country', country });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goToGuide(country: Country, category: 'business' | 'residency' | 'citizenship', guide: Guide) {
    setView({ type: 'guide', country, category, guide });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goBack() {
    if (view.type === 'guide') {
      setView({ type: 'country', country: view.country });
    } else {
      setView({ type: 'list' });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function goHome() {
    setView({ type: 'list' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <button
            onClick={goHome}
            className="flex items-center gap-3 group"
          >
            <div className="text-2xl">🌍</div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Global Business Guide
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                Business, Residency & Citizenship pathways worldwide
              </p>
            </div>
          </button>

          {/* Breadcrumb */}
          {view.type !== 'list' && (
            <nav className="flex items-center gap-2 text-sm">
              <button
                onClick={goHome}
                className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
              >
                Countries
              </button>
              {(view.type === 'country' || view.type === 'guide') && (
                <>
                  <span className="text-slate-400">/</span>
                  <button
                    onClick={() => view.type === 'guide' && goToCountry(view.country)}
                    className={`transition-colors ${
                      view.type === 'guide'
                        ? 'text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'
                        : 'text-slate-900 dark:text-white font-medium'
                    }`}
                  >
                    {view.type === 'country' ? view.country.name : view.country.name}
                  </button>
                </>
              )}
              {view.type === 'guide' && (
                <>
                  <span className="text-slate-400">/</span>
                  <span className="text-slate-900 dark:text-white font-medium truncate max-w-[150px]">
                    {view.guide.name}
                  </span>
                </>
              )}
            </nav>
          )}

          {/* Back button */}
          {view.type !== 'list' && (
            <button
              onClick={goBack}
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view.type === 'list' && (
          <CountryList countries={countries} onSelectCountry={goToCountry} />
        )}
        {view.type === 'country' && (
          <CountryDetail
            country={view.country}
            onSelectGuide={(category, guide) => goToGuide(view.country, category, guide)}
          />
        )}
        {view.type === 'guide' && (
          <GuideDetail
            country={view.country}
            category={view.category}
            guide={view.guide}
            onBack={goBack}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            <strong>Disclaimer:</strong> This guide provides general information only. Laws, fees, and requirements change frequently.
            Always consult a qualified local lawyer, immigration attorney, or business registration agent before taking action.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
            Information updated for general reference — verify current requirements with official government sources.
          </p>
        </div>
      </footer>
    </div>
  );
}
