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
      className={`py-20 sm:py-28 bg-ink-950 text-white border-y border-ink-900 ${className}`}
      style={{ backgroundColor: '#07111F' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ink-900 border border-ink-800 text-xs font-mono uppercase tracking-wider text-brand-300 font-semibold mb-3">
            <span>Product Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-display text-white">
            Explore ONO's operational workflow
          </h2>
          <p className="text-ink-400 text-base sm:text-lg mt-3 leading-relaxed">
            Four integrated capabilities designed for calm, transparent WhatsApp customer communication.
          </p>
        </div>

        {/* WAI-ARIA Accessible Tablist with Full Keyboard Arrow Navigation */}
        <div
          role="tablist"
          aria-label="Product Tour Capabilities"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto"
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
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 border select-none cursor-pointer ${
                  isSelected
                    ? 'bg-ink-800 text-white border-brand-500 shadow-soft'
                    : 'bg-ink-900/60 text-ink-400 border-ink-800 hover:text-white hover:bg-ink-900'
                }`}
              >
                {tab.title}
              </button>
            );
          })}
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
                } grid-cols-1 lg:grid-cols-12 gap-8 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-2xl`}
              >
                {/* Left Column: Feature Highlights */}
                <div className="lg:col-span-5 space-y-4">
                  <span className="inline-block text-[11px] font-mono uppercase tracking-wider text-brand-300 bg-brand-950/60 border border-brand-800/80 px-2.5 py-1 rounded-md">
                    {tab.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    {tab.title}
                  </h3>
                  <p className="text-sm text-ink-300 leading-relaxed">
                    {tab.description}
                  </p>
                  <ul className="space-y-2 pt-2 text-xs text-ink-300">
                    {tab.features.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-brand-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
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
