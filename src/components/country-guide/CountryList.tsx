import { useState, useMemo } from 'react';
import type { Country } from './data/countries';
import { regions } from './data/countries';

interface CountryListProps {
  countries: Country[];
  onSelectCountry: (country: Country) => void;
}

export default function CountryList({ countries, onSelectCountry }: CountryListProps) {
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  const filtered = useMemo(() => {
    return countries.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.tagline.toLowerCase().includes(search.toLowerCase()) ||
        c.region.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = selectedRegion === 'All' || c.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [countries, search, selectedRegion]);

  const categoryIcons = {
    business: '🏢',
    residency: '🏠',
    citizenship: '🛂',
  };

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Start Your Global Journey
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Explore step-by-step guides for registering a business, obtaining residency, or gaining
          citizenship in countries around the world.
        </p>

        {/* Quick stats */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{countries.length}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {countries.reduce((sum, c) => sum + c.businessTypes.length, 0)}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Business Guides</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {countries.reduce((sum, c) => sum + c.residencyOptions.length + c.citizenshipPathways.length, 0)}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">Residency & Citizenship Pathways</div>
          </div>
        </div>
      </div>

      {/* Search and filter */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search countries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedRegion === region
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Country grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🔍</div>
          <p className="text-slate-500 dark:text-slate-400 text-lg">No countries found matching your search.</p>
          <button
            onClick={() => { setSearch(''); setSelectedRegion('All'); }}
            className="mt-4 text-blue-600 dark:text-blue-400 hover:underline text-sm"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((country) => (
            <button
              key={country.code}
              onClick={() => onSelectCountry(country)}
              className="group text-left bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              {/* Flag and region */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl">{country.flag}</span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-full">
                  {country.region}
                </span>
              </div>

              {/* Country name and tagline */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {country.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{country.tagline}</p>

              {/* Available guide categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {country.businessTypes.length > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full">
                    {categoryIcons.business} {country.businessTypes.length} Business type{country.businessTypes.length !== 1 ? 's' : ''}
                  </span>
                )}
                {country.residencyOptions.length > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-2 py-1 rounded-full">
                    {categoryIcons.residency} {country.residencyOptions.length} Residency option{country.residencyOptions.length !== 1 ? 's' : ''}
                  </span>
                )}
                {country.citizenshipPathways.length > 0 && (
                  <span className="inline-flex items-center gap-1 text-xs bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
                    {categoryIcons.citizenship} {country.citizenshipPathways.length} Citizenship pathway{country.citizenshipPathways.length !== 1 ? 's' : ''}
                  </span>
                )}
              </div>

              {/* Highlights */}
              <div className="space-y-1">
                {country.highlights.slice(0, 2).map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <svg className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                <span className="text-xs text-slate-400 dark:text-slate-500">
                  {country.currency}
                </span>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore guides
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
