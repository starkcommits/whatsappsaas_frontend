import React, { useState } from 'react';
import { lifetimePlan } from '../data/plans';
import { siteConfig } from '../config/site';

interface PricingCardProps {
  showFullDetails?: boolean;
  className?: string;
}

export default function PricingCard({
  showFullDetails = true,
  className = '',
}: PricingCardProps) {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const inrAmount = lifetimePlan.priceINR || 4199;
  const inrFormatted = `₹${inrAmount.toLocaleString('en-IN')}`;

  return (
    <div
      className={`bg-white rounded-3xl border border-ink-100 p-8 sm:p-10 shadow-soft-lg relative overflow-hidden ${className}`}
    >
      {/* Top Highlight Badge */}
      <div className="absolute top-0 right-0 bg-brand-600 text-white text-[11px] font-mono font-bold uppercase tracking-wider py-1.5 px-6 rounded-bl-2xl shadow-xs">
        {lifetimePlan.badge}
      </div>

      <div className="max-w-3xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-950 tracking-tight font-display">
              {lifetimePlan.name}
            </h2>
            <p className="text-ink-600 text-sm mt-1.5 leading-relaxed">
              {lifetimePlan.billingText}
            </p>
          </div>

          {/* Accessible Currency Toggle (USD / INR) */}
          <div
            role="radiogroup"
            aria-label="Currency Selection"
            className="inline-flex items-center p-1 rounded-xl bg-ink-100/80 border border-ink-200/80 self-start sm:self-auto shrink-0"
          >
            <button
              type="button"
              role="radio"
              aria-checked={currency === 'USD'}
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 ${
                currency === 'USD'
                  ? 'bg-white text-ink-950 shadow-xs'
                  : 'text-ink-600 hover:text-ink-950'
              }`}
            >
              USD ($)
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={currency === 'INR'}
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 ${
                currency === 'INR'
                  ? 'bg-white text-ink-950 shadow-xs'
                  : 'text-ink-600 hover:text-ink-950'
              }`}
            >
              INR (₹)
            </button>
          </div>
        </div>

        {/* Pricing Figures */}
        <div className="flex flex-wrap items-baseline gap-4 py-5 border-y border-ink-100">
          {currency === 'USD' ? (
            <>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-black text-ink-950 tracking-tight font-display">
                  ${lifetimePlan.priceUSD}
                </span>
                <span className="text-xs text-ink-600 font-mono">USD one-time</span>
              </div>
              <div className="flex items-baseline gap-1.5 bg-brand-50 px-3.5 py-1.5 rounded-xl border border-brand-100">
                <span className="text-xl sm:text-2xl font-bold text-brand-900 font-display">
                  {inrFormatted}
                </span>
                <span className="text-[11px] text-brand-700 font-mono font-medium">(approximate)</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-baseline gap-1.5">
                <span className="text-4xl sm:text-5xl font-black text-ink-950 tracking-tight font-display">
                  {inrFormatted}
                </span>
                <span className="text-xs text-ink-600 font-mono">INR one-time (approx.)</span>
              </div>
              <div className="flex items-baseline gap-1.5 bg-brand-50 px-3.5 py-1.5 rounded-xl border border-brand-100">
                <span className="text-xl sm:text-2xl font-bold text-brand-900 font-display">
                  ${lifetimePlan.priceUSD}
                </span>
                <span className="text-[11px] text-brand-700 font-mono font-medium">USD base price</span>
              </div>
            </>
          )}
        </div>

        {/* Prominent zero-markup callout */}
        <div className="my-6 p-4 rounded-2xl bg-brand-50/60 border border-brand-100 flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-brand-900">
              {lifetimePlan.markupDisclaimer}
            </p>
            <p className="text-xs text-ink-600 mt-1 leading-relaxed">
              Zero middleman fees. You link your own Meta Business Account via embedded signup and pay Meta directly at Meta's rates.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="my-6">
          <a
            href={siteConfig.links.signup}
            className="inline-flex items-center justify-center w-full px-6 py-3.5 text-base font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-soft transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 active:scale-[0.98] select-none"
            data-app-cta="true"
          >
            {currency === 'USD'
              ? `Get lifetime access ($${lifetimePlan.priceUSD})`
              : `Get lifetime access (${inrFormatted})`}
          </a>
          <p className="text-center text-xs text-ink-600 mt-2 font-mono">
            {lifetimePlan.guaranteeText}
          </p>
        </div>

        {showFullDetails && (
          <div className="mt-8 pt-8 border-t border-ink-100 space-y-8">
            {/* Core Plan Highlights */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-600 mb-3 font-mono">
                Included in Lifetime License
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-ink-700">
                {lifetimePlan.highlights.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fair-Use Limits */}
            <div id="limits" className="pt-4 border-t border-ink-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink-600 mb-3 font-mono">
                Fair-Use Workspace Limits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lifetimePlan.limits.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-ink-50 border border-ink-100">
                    <div className="text-xs font-bold text-ink-950">{item.label}</div>
                    <div className="text-base font-bold text-brand-700 font-display mt-0.5">{item.value}</div>
                    {item.description && (
                      <p className="text-[11px] text-ink-600 mt-1">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="pt-4 border-t border-ink-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-ink-600 font-mono">
                  Modular Add-Ons (Optional)
                </h3>
                <span className="text-[10px] font-mono text-ink-600 uppercase">Coming Soon</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {lifetimePlan.addons.map((addon, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl border border-dashed border-ink-200 bg-ink-50/50">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-ink-900">{addon.title}</span>
                      <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-ink-200 text-ink-700">
                        Coming Soon
                      </span>
                    </div>
                    <p className="text-[11px] text-ink-600 mt-1 leading-snug">{addon.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
