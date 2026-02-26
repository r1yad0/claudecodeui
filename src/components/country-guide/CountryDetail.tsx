import { useState } from 'react';
import type { Country, Guide } from './data/countries';

interface CountryDetailProps {
  country: Country;
  onSelectGuide: (category: 'business' | 'residency' | 'citizenship', guide: Guide) => void;
}

type Tab = 'overview' | 'business' | 'residency' | 'citizenship';

const difficultyColors = {
  Easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Moderate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  Complex: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
};

interface GuideCardProps {
  guide: Guide;
  category: 'business' | 'residency' | 'citizenship';
  onSelect: () => void;
}

function GuideCard({ guide, category, onSelect }: GuideCardProps) {
  const categoryColor = {
    business: 'border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600',
    residency: 'border-emerald-200 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-600',
    citizenship: 'border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600',
  };

  const categoryAccent = {
    business: 'text-blue-600 dark:text-blue-400',
    residency: 'text-emerald-600 dark:text-emerald-400',
    citizenship: 'text-purple-600 dark:text-purple-400',
  };

  return (
    <button
      onClick={onSelect}
      className={`group text-left w-full bg-white dark:bg-slate-800 rounded-xl border-2 ${categoryColor[category]} p-5 hover:shadow-md transition-all duration-200`}
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h4 className={`font-semibold text-slate-900 dark:text-white group-hover:${categoryAccent[category]} transition-colors`}>
          {guide.name}
        </h4>
        <span className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${difficultyColors[guide.difficulty]}`}>
          {guide.difficulty}
        </span>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">{guide.description}</p>
      <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {guide.timeframe}
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {guide.cost}
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          {guide.steps.length} steps
        </div>
      </div>
      <div className={`mt-4 flex items-center gap-1 text-sm font-medium ${categoryAccent[category]}`}>
        View step-by-step guide
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}

export default function CountryDetail({ country, onSelectGuide }: CountryDetailProps) {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const tabs: { id: Tab; label: string; icon: string; count?: number }[] = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'business', label: 'Business Setup', icon: '🏢', count: country.businessTypes.length },
    { id: 'residency', label: 'Residency', icon: '🏠', count: country.residencyOptions.length },
    { id: 'citizenship', label: 'Citizenship', icon: '🛂', count: country.citizenshipPathways.length },
  ];

  return (
    <div className="space-y-8">
      {/* Country hero */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 px-8 py-10">
          <div className="flex items-center gap-6">
            <span className="text-8xl">{country.flag}</span>
            <div>
              <div className="text-sm font-medium text-slate-300 mb-1">{country.region}</div>
              <h2 className="text-4xl font-bold text-white mb-2">{country.name}</h2>
              <p className="text-slate-300 text-lg">{country.tagline}</p>
            </div>
          </div>
        </div>

        {/* Quick facts bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-200 dark:divide-slate-700 border-t border-slate-200 dark:border-slate-700">
          <div className="px-6 py-4">
            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Currency</div>
            <div className="font-medium text-slate-900 dark:text-white text-sm">{country.currency}</div>
          </div>
          <div className="px-6 py-4">
            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Language</div>
            <div className="font-medium text-slate-900 dark:text-white text-sm">{country.language}</div>
          </div>
          <div className="px-6 py-4">
            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Business Types</div>
            <div className="font-medium text-slate-900 dark:text-white text-sm">{country.businessTypes.length} guides</div>
          </div>
          <div className="px-6 py-4">
            <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Pathways</div>
            <div className="font-medium text-slate-900 dark:text-white text-sm">
              {country.residencyOptions.length + country.citizenshipPathways.length} options
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="flex border-b border-slate-200 dark:border-slate-700 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400'
                  : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-300'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
              {tab.count !== undefined && (
                <span className={`px-1.5 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id
                    ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">About</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{country.overview}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Business Climate</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{country.businessClimate}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Key Highlights</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {country.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 bg-slate-50 dark:bg-slate-700/50 rounded-xl p-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick navigation to other tabs */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                {country.businessTypes.length > 0 && (
                  <button
                    onClick={() => setActiveTab('business')}
                    className="flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-xl p-4 transition-colors"
                  >
                    <span className="text-2xl">🏢</span>
                    <div className="text-left">
                      <div className="font-semibold text-sm">{country.businessTypes.length} Business Guide{country.businessTypes.length !== 1 ? 's' : ''}</div>
                      <div className="text-xs opacity-70">Register a business</div>
                    </div>
                  </button>
                )}
                {country.residencyOptions.length > 0 && (
                  <button
                    onClick={() => setActiveTab('residency')}
                    className="flex items-center gap-3 bg-emerald-50 dark:bg-emerald-900/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-xl p-4 transition-colors"
                  >
                    <span className="text-2xl">🏠</span>
                    <div className="text-left">
                      <div className="font-semibold text-sm">{country.residencyOptions.length} Residency Option{country.residencyOptions.length !== 1 ? 's' : ''}</div>
                      <div className="text-xs opacity-70">Live legally</div>
                    </div>
                  </button>
                )}
                {country.citizenshipPathways.length > 0 && (
                  <button
                    onClick={() => setActiveTab('citizenship')}
                    className="flex items-center gap-3 bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-xl p-4 transition-colors"
                  >
                    <span className="text-2xl">🛂</span>
                    <div className="text-left">
                      <div className="font-semibold text-sm">{country.citizenshipPathways.length} Citizenship Pathway{country.citizenshipPathways.length !== 1 ? 's' : ''}</div>
                      <div className="text-xs opacity-70">Become a citizen</div>
                    </div>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Business Tab */}
          {activeTab === 'business' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Choose a business structure to see a complete step-by-step registration guide.
              </p>
              {country.businessTypes.length === 0 ? (
                <p className="text-slate-500 dark:text-slate-400 text-center py-8">No business guides available yet for this country.</p>
              ) : (
                country.businessTypes.map((guide, i) => (
                  <GuideCard
                    key={i}
                    guide={guide}
                    category="business"
                    onSelect={() => onSelectGuide('business', guide)}
                  />
                ))
              )}
            </div>
          )}

          {/* Residency Tab */}
          {activeTab === 'residency' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Choose a residency pathway to see requirements and step-by-step instructions.
              </p>
              {country.residencyOptions.length === 0 ? (
                <p className="text-slate-500 dark:text-slate-400 text-center py-8">No residency guides available yet for this country.</p>
              ) : (
                country.residencyOptions.map((guide, i) => (
                  <GuideCard
                    key={i}
                    guide={guide}
                    category="residency"
                    onSelect={() => onSelectGuide('residency', guide)}
                  />
                ))
              )}
            </div>
          )}

          {/* Citizenship Tab */}
          {activeTab === 'citizenship' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                Explore citizenship pathways available in {country.name}.
              </p>
              {country.citizenshipPathways.length === 0 ? (
                <p className="text-slate-500 dark:text-slate-400 text-center py-8">No citizenship guides available yet for this country.</p>
              ) : (
                country.citizenshipPathways.map((guide, i) => (
                  <GuideCard
                    key={i}
                    guide={guide}
                    category="citizenship"
                    onSelect={() => onSelectGuide('citizenship', guide)}
                  />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
