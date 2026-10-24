export interface PlanLimit {
  label: string;
  value: string;
  description?: string;
}

export interface PlanAddon {
  title: string;
  description: string;
  status: 'coming_soon' | 'available';
}

export interface PlanDetails {
  id: string;
  name: string;
  badge: string;
  priceUSD: number;
  priceINR: number | null;
  priceINRFormatted: string;
  billingText: string;
  guaranteeText: string;
  markupDisclaimer: string;
  highlights: string[];
  limits: PlanLimit[];
  addons: PlanAddon[];
}

export const lifetimePlan: PlanDetails = {
  id: 'lifetime-access',
  name: 'Lifetime Access',
  badge: 'One-Time Payment',
  priceUSD: 50,
  priceINR: 4199,
  priceINRFormatted: 'about INR 4,199',
  billingText: 'Pay once for the lifetime of the product. No monthly subscription.',
  guaranteeText: '7-day money-back guarantee.',
  markupDisclaimer: 'No monthly fee. No markup on WhatsApp messages: you pay Meta directly at Meta\'s rates.',
  highlights: [
    'One-time payment: zero monthly or annual subscription fees',
    'Direct Meta Cloud API: pay Meta directly at their rates with zero markup',
    'Shared team inbox with chat assignment, internal notes, and canned replies',
    'Campaign broadcasts with approved Meta templates and live delivery tracking',
    'CSV contact import with consent sources and automated STOP handling',
    'WhatsApp Flows for lead capture, appointments, and feedback',
    'Team roles for owner, admin, and agent seats',
    'Scoped REST API keys and signature-verified webhooks',
    'Two-factor authentication for owners and workspace audit logs'
  ],
  limits: [
    { label: 'Connected WhatsApp Numbers', value: '1 number', description: 'Meta Embedded Signup using your own business phone number' },
    { label: 'Saved Contacts', value: '2,000 contacts', description: 'CSV import with verified opt-in sources and segment tags' },
    { label: 'Team Seats', value: '3 team agents', description: 'Owner, admin, and agent permissions' },
    { label: 'Campaign Broadcasts', value: '10,000 messages / mo', description: 'Fair-use monthly outbound template delivery' },
  ],
  addons: [
    {
      title: 'Additional WhatsApp Phone Numbers',
      description: 'Connect extra business lines or regional branches to your workspace.',
      status: 'coming_soon'
    },
    {
      title: 'Additional Contact Packs (+5,000 contacts)',
      description: 'Expand your consent-tracked contact ledger as your audience grows.',
      status: 'coming_soon'
    },
    {
      title: 'Extra Team Agent Seats',
      description: 'Add more support representatives and sales agents to your shared inbox.',
      status: 'coming_soon'
    },
    {
      title: 'High-Volume Campaign Expansion',
      description: 'Increase monthly campaign broadcast allowances for seasonal campaigns.',
      status: 'coming_soon'
    }
  ]
};
