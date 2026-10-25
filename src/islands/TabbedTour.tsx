import React, { useState, useRef } from 'react';

interface TabDefinition {
  id: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
}

const tourTabs: TabDefinition[] = [
  {
    id: 'inbox',
    title: 'Shared Team Inbox',
    badge: 'Live Collaboration',
    description: 'Centralize conversations across your team. Multiple agents work the inbox simultaneously with live conversation updates, member assignment, and private internal notes.',
    features: [
      'Live message updates across team members',
      'One-click agent assignment and conversation triage',
      'Private internal notes hidden from customers',
      'Pre-saved canned replies for common questions',
    ],
  },
  {
    id: 'templates',
    title: 'Template Builder',
    badge: 'Meta Sync',
    description: 'Design interactive WhatsApp templates with variables, headers, and quick-reply buttons. Preview in real time and submit directly to Meta for instant approval.',
    features: [
      'Interactive chat preview while typing',
      'Support for text, image, and document headers',
      'Personalization placeholders (e.g. {{1}}, {{2}})',
      'Approval status tracking in your dashboard',
    ],
  },
  {
    id: 'campaigns',
    title: 'Campaign Broadcasts',
    badge: 'Targeted Outreach',
    description: 'Broadcast approved templates to opted-in audiences. Schedule delivery for optimal engagement and track delivery, read receipts, and incoming replies live.',
    features: [
      'Targeted broadcasts to segmented customer lists',
      'Automated rate-limiting matching Meta throughput',
      'Delivery metrics: Sent, Delivered, Read, and Replies',
      'Detailed delivery log per contact',
    ],
  },
  {
    id: 'consent',
    title: 'Consent & Opt-in Ledger',
    badge: 'Built-in Compliance',
    description: 'Ensure messages only go to customers who agreed. Built-in opt-in links, QR codes, automated STOP keyword handling, and full consent audit trails.',
    features: [
      'Click-to-chat opt-in links and QR codes',
      'Automatic unsubscribe when contacts reply STOP',
      'Strict suppression list preventing unwanted delivery',
      'Exportable proof of consent records',
    ],
  },
];

interface TabbedTourProps {
  id?: string;
  className?: string;
  inbox?: React.ReactNode;
  templates?: React.ReactNode;
  campaigns?: React.ReactNode;
  consent?: React.ReactNode;
  inboxSlot?: React.ReactNode;
  templatesSlot?: React.ReactNode;
  campaignsSlot?: React.ReactNode;
  consentSlot?: React.ReactNode;
}

export default function TabbedTour({
  id = 'tour',
  className = '',
  inbox,
  templates,
  campaigns,
  consent,
  inboxSlot,
  templatesSlot,
  campaignsSlot,
  consentSlot,
}: TabbedTourProps) {
  const [activeTab, setActiveTab] = useState('inbox');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const slotMap: Record<string, React.ReactNode> = {
    inbox: inbox || inboxSlot,
    templates: templates || templatesSlot,
    campaigns: campaigns || campaignsSlot,
    consent: consent || consentSlot,
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let targetIndex = -1;
    if (e.key === 'ArrowRight') {
      targetIndex = (index + 1) % tourTabs.length;
    } else if (e.key === 'ArrowLeft') {
      targetIndex = (index - 1 + tourTabs.length) % tourTabs.length;
    } else if (e.key === 'Home') {
      targetIndex = 0;
    } else if (e.key === 'End') {
      targetIndex = tourTabs.length - 1;
    }

    if (targetIndex !== -1) {
      e.preventDefault();
      const nextTab = tourTabs[targetIndex];
      setActiveTab(nextTab.id);
      tabRefs.current[targetIndex]?.focus();
    }
  };

  return (
    <section
      id={id}
      className={`relative py-20 sm:py-28 bg-white text-ink-950 border-y border-zinc-200/80 overflow-hidden ${className}`}
    >
      {/* Subtle background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-35"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-xs font-mono uppercase tracking-wider text-brand-700 font-semibold mb-3 shadow-xs">
            <span>Product Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-ink-950">
            Explore ONO's operational workflow
          </h2>
          <p className="text-ink-500 text-base sm:text-lg mt-3 leading-relaxed max-w-2xl mx-auto">
            Four integrated capabilities designed for calm, transparent WhatsApp customer communication.
          </p>
        </div>

        {/* WAI-ARIA Accessible Segmented Pill Tablist */}
        <div className="flex justify-center mb-12 max-w-4xl mx-auto">
          <div
            role="tablist"
            aria-label="Product Tour Capabilities"
            className="inline-flex p-1.5 rounded-2xl bg-zinc-100/90 border border-zinc-200/80 shadow-xs gap-1.5 flex-wrap justify-center"
          >
            {tourTabs.map((tab, idx) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  ref={(el) => { tabRefs.current[idx] = el; }}
                  role="tab"
                  id={`tour-tab-${tab.id}`}
                  aria-selected={isSelected}
                  aria-controls={`tour-panel-${tab.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setActiveTab(tab.id)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  type="button"
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 select-none cursor-pointer ${
                    isSelected
                      ? 'bg-white text-zinc-950 border border-zinc-200/90 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-950 hover:bg-white/60 border border-transparent'
                  }`}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panels */}
        <div className="max-w-6xl mx-auto">
          {tourTabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <div
                key={tab.id}
                role="tabpanel"
                id={`tour-panel-${tab.id}`}
                aria-labelledby={`tour-tab-${tab.id}`}
                hidden={!isSelected}
                tabIndex={0}
                className={`${
                  isSelected ? 'grid' : 'hidden'
                } grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-2xl`}
              >
                {/* Left Column: Feature Highlights */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/80 px-2.5 py-1 rounded-md font-semibold">
                    {tab.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-ink-950 font-display tracking-tight">
                    {tab.title}
                  </h3>
                  <p className="text-sm sm:text-base text-ink-500 leading-relaxed">
                    {tab.description}
                  </p>
                  <ul className="space-y-2.5 pt-2 text-xs sm:text-sm text-ink-700">
                    {tab.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <div className="size-5 rounded-full bg-brand-50 border border-brand-200/80 flex items-center justify-center text-brand-600 shrink-0">
                          <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="font-medium text-ink-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column: Visual Product Mockup Slot */}
                <div className="lg:col-span-7">
                  {slotMap[tab.id]}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
