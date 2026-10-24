import React from 'react';

interface ConversationChip {
  id: string;
  badgeDotColor?: string;
  badgeIcon?: string;
  title: string;
  subtitle: string;
  tag: string;
}

const row1: ConversationChip[] = [
  {
    id: 'conv-1',
    badgeDotColor: 'bg-emerald-500',
    title: 'Aarav Sharma',
    subtitle: '"Booked consultation slot via Flow"',
    tag: 'Sample data',
  },
  {
    id: 'conv-2',
    badgeDotColor: 'bg-brand-500',
    title: 'Zero Message Markup',
    subtitle: 'Direct Meta Cloud API billing',
    tag: 'Direct rates',
  },
  {
    id: 'conv-3',
    badgeDotColor: 'bg-blue-500',
    title: 'Priya S.',
    subtitle: 'Assigned 2 customer conversations',
    tag: 'Sample data',
  },
  {
    id: 'conv-4',
    badgeDotColor: 'bg-emerald-500',
    title: 'Template Approved',
    subtitle: 'consultation_invite_v1 by Meta',
    tag: 'Sample data',
  },
];

const row2: ConversationChip[] = [
  {
    id: 'conv-5',
    badgeDotColor: 'bg-emerald-500',
    title: 'Consent Verified',
    subtitle: 'Opt-in via Website Form • Auto STOP',
    tag: 'Sample data',
  },
  {
    id: 'conv-6',
    badgeDotColor: 'bg-brand-600',
    title: 'Canned Reply Sent',
    subtitle: '#confirm_booking to customer',
    tag: 'Sample data',
  },
  {
    id: 'conv-7',
    badgeDotColor: 'bg-purple-500',
    title: 'WhatsApp Flow Completed',
    subtitle: 'Consultation intake form received',
    tag: 'Sample data',
  },
  {
    id: 'conv-8',
    badgeDotColor: 'bg-slate-700',
    title: 'Two-Factor Auth Active',
    subtitle: 'Workspace owner audit log recorded',
    tag: 'Sample data',
  },
];

export default function HeroSampleConversations() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 select-none z-0"
      aria-hidden="true"
    >
      <div className="flex flex-col gap-3 pt-4">
        {/* Row 1: Forward Marquee */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-3 shrink-0 animate-marquee motion-reduce:[animation-play-state:paused] [--duration:45s]">
            {[...row1, ...row1].map((chip, idx) => (
              <div
                key={`r1-${idx}`}
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/90 border border-ink-200/70 shadow-xs text-xs whitespace-nowrap"
              >
                {chip.badgeDotColor && (
                  <span className={`w-2 h-2 rounded-full ${chip.badgeDotColor} shrink-0`} />
                )}
                <span className="font-semibold text-ink-900">{chip.title}</span>
                <span className="text-ink-500 font-normal">{chip.subtitle}</span>
                <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-ink-100 text-ink-600 font-medium ml-1">
                  {chip.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Reverse Marquee */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-3 shrink-0 animate-marquee marquee-reverse [animation-direction:reverse] motion-reduce:[animation-play-state:paused] [--duration:55s]">
            {[...row2, ...row2].map((chip, idx) => (
              <div
                key={`r2-${idx}`}
                className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-white/90 border border-ink-200/70 shadow-xs text-xs whitespace-nowrap"
              >
                {chip.badgeDotColor && (
                  <span className={`w-2 h-2 rounded-full ${chip.badgeDotColor} shrink-0`} />
                )}
                <span className="font-semibold text-ink-900">{chip.title}</span>
                <span className="text-ink-500 font-normal">{chip.subtitle}</span>
                <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-ink-100 text-ink-600 font-medium ml-1">
                  {chip.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
