import React, { useState, useEffect } from 'react';

const titles = [
  'in one shared team inbox.',
  'with zero message markup.',
  'with verified opt-in consent.',
  'with approved Meta templates.',
  'with interactive WhatsApp Flows.',
];

export default function HeroRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative flex w-full justify-start overflow-hidden text-brand-600 h-[1.35em] select-none text-[1.35rem] sm:text-[1em]">
      {titles.map((title, i) => {
        const isCurrent = i === index;
        const isPrev = i === (index - 1 + titles.length) % titles.length;

        return (
          <span
            key={title}
            data-index={i}
            data-active={isCurrent ? 'true' : 'false'}
            className={`hero-rotator-item absolute left-0 top-0 flex items-center font-bold font-display whitespace-nowrap transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isCurrent
                ? 'opacity-100 translate-y-0 text-brand-600'
                : isPrev
                ? 'opacity-0 -translate-y-full pointer-events-none'
                : 'opacity-0 translate-y-full pointer-events-none'
            }`}
            aria-hidden={!isCurrent}
          >
            {title}
          </span>
        );
      })}
    </span>
  );
}
