import React, { useState } from 'react';
import type { FAQItem } from '../data/faq';

interface FaqAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FaqAccordion({
  items,
  className = '',
}: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={`space-y-3.5 max-w-3xl mx-auto ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headerId = `faq-header-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={`faq-${index}`}
            className="bg-white rounded-2xl border border-ink-100 shadow-soft transition-colors duration-150 overflow-hidden"
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center cursor-pointer select-none text-left p-5 sm:p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-2xl transition-colors hover:bg-ink-50/50"
              >
                <span className="text-base sm:text-lg font-bold text-ink-950 font-display transition-colors pr-4 leading-snug">
                  {item.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen
                      ? 'bg-brand-50 text-brand-700 rotate-180'
                      : 'bg-ink-50 text-ink-500'
                  }`}
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            {/* Accessible Expandable Region with CSS Grid Smooth Transition */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-ink-100 text-sm text-ink-600 leading-relaxed">
                  <p className="pt-4">{item.answer}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
