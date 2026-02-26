import { useState } from 'react';
import type { Country, Guide, Step } from './data/countries';

interface GuideDetailProps {
  country: Country;
  category: 'business' | 'residency' | 'citizenship';
  guide: Guide;
  onBack: () => void;
}

const categoryConfig = {
  business: {
    label: 'Business Setup',
    icon: '🏢',
    color: 'blue',
    stepBg: 'bg-blue-600',
    stepRing: 'ring-blue-200 dark:ring-blue-800',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
    progressBg: 'bg-blue-600',
  },
  residency: {
    label: 'Residency',
    icon: '🏠',
    color: 'emerald',
    stepBg: 'bg-emerald-600',
    stepRing: 'ring-emerald-200 dark:ring-emerald-800',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
    progressBg: 'bg-emerald-600',
  },
  citizenship: {
    label: 'Citizenship',
    icon: '🛂',
    color: 'purple',
    stepBg: 'bg-purple-600',
    stepRing: 'ring-purple-200 dark:ring-purple-800',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
    progressBg: 'bg-purple-600',
  },
};

const difficultyColors = {
  Easy: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
  Moderate: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  Complex: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
};

function StepCard({ step, index, total, isExpanded, onToggle, config }: {
  step: Step;
  index: number;
  total: number;
  isExpanded: boolean;
  onToggle: () => void;
  config: typeof categoryConfig[keyof typeof categoryConfig];
}) {
  return (
    <div className={`relative border-2 rounded-xl transition-all duration-200 ${
      isExpanded
        ? 'border-slate-300 dark:border-slate-600 shadow-md'
        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
    } bg-white dark:bg-slate-800`}>
      <button
        onClick={onToggle}
        className="w-full text-left p-5 flex items-start gap-4"
      >
        {/* Step number */}
        <div className={`shrink-0 w-9 h-9 rounded-full ${config.stepBg} text-white flex items-center justify-center font-bold text-sm ring-4 ${config.stepRing}`}>
          {index + 1}
        </div>

        {/* Step title */}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-slate-900 dark:text-white text-base leading-snug">
            {step.title}
          </h4>
          {!isExpanded && (
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
              {step.description}
            </p>
          )}
        </div>

        {/* Expand toggle */}
        <div className={`shrink-0 w-6 h-6 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
          <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-5 pb-5 space-y-4 border-t border-slate-100 dark:border-slate-700 pt-4 ml-13">
          <div className="ml-13 pl-0">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{step.description}</p>

            {step.documents && step.documents.length > 0 && (
              <div className="mt-4">
                <h5 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Documents needed
                </h5>
                <ul className="space-y-1.5">
                  {step.documents.map((doc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <svg className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {step.tips && (
              <div className="mt-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 flex gap-2">
                <span className="text-lg shrink-0">💡</span>
                <p className="text-sm text-amber-800 dark:text-amber-200">{step.tips}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Connector line to next step */}
      {index < total - 1 && (
        <div className="absolute left-[2.15rem] -bottom-5 w-0.5 h-5 bg-slate-200 dark:bg-slate-700 z-10" />
      )}
    </div>
  );
}

export default function GuideDetail({ country, category, guide, onBack }: GuideDetailProps) {
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set([0]));
  const config = categoryConfig[category];

  function toggleStep(index: number) {
    setExpandedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  function expandAll() {
    setExpandedSteps(new Set(guide.steps.map((_, i) => i)));
  }

  function collapseAll() {
    setExpandedSteps(new Set());
  }

  const expandedCount = expandedSteps.size;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Guide header */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 px-6 py-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{country.flag}</span>
            <span className={`text-sm font-medium px-2.5 py-1 rounded-full ${config.badge}`}>
              {config.icon} {config.label}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{guide.name}</h2>
          <p className="text-slate-300">{guide.description}</p>
        </div>

        {/* Key info bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100 dark:divide-slate-700 border-t border-slate-100 dark:border-slate-700">
          <div className="px-4 py-3">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Difficulty</div>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColors[guide.difficulty]}`}>
              {guide.difficulty}
            </span>
          </div>
          <div className="px-4 py-3">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Timeframe</div>
            <div className="text-sm font-medium text-slate-900 dark:text-white">{guide.timeframe}</div>
          </div>
          <div className="px-4 py-3">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Estimated Cost</div>
            <div className="text-sm font-medium text-slate-900 dark:text-white">{guide.cost}</div>
          </div>
          <div className="px-4 py-3">
            <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Steps</div>
            <div className="text-sm font-medium text-slate-900 dark:text-white">{guide.steps.length} steps</div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          Requirements Checklist
        </h3>
        <ul className="space-y-2">
          {guide.requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded border-2 border-slate-300 dark:border-slate-600 mt-0.5 shrink-0 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-sm bg-slate-200 dark:bg-slate-600" />
              </div>
              <span className="text-sm text-slate-700 dark:text-slate-300">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Steps */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Step-by-Step Guide
          </h3>
          <div className="flex gap-2">
            <button
              onClick={expandAll}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 px-2 py-1 rounded transition-colors"
            >
              Expand all
            </button>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <button
              onClick={collapseAll}
              className="text-xs text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 px-2 py-1 rounded transition-colors"
            >
              Collapse all
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-2">
            <div
              className={`${config.progressBg} h-2 rounded-full transition-all duration-500`}
              style={{ width: `${(expandedCount / guide.steps.length) * 100}%` }}
            />
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
            {expandedCount}/{guide.steps.length} reviewed
          </span>
        </div>

        <div className="space-y-4">
          {guide.steps.map((step, i) => (
            <StepCard
              key={i}
              step={step}
              index={i}
              total={guide.steps.length}
              isExpanded={expandedSteps.has(i)}
              onToggle={() => toggleStep(i)}
              config={config}
            />
          ))}
        </div>
      </div>

      {/* Disclaimer / Next steps */}
      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
        <div className="flex gap-3">
          <span className="text-2xl shrink-0">⚠️</span>
          <div>
            <h4 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Important Disclaimer</h4>
            <p className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
              This guide provides general educational information only. Requirements, fees, and procedures change
              frequently. Always verify with official government sources and consult a qualified local lawyer,
              immigration attorney, or certified business registration agent before proceeding.
            </p>
          </div>
        </div>
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to {country.name} guides
      </button>
    </div>
  );
}
