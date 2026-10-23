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
  billingText: 'Pay once, own it for the life of the platform. No recurring subscriptions.',
  guaranteeText: '7-day money-back guarantee. No questions asked.',
  markupDisclaimer: 'No monthly fee. No markup on WhatsApp messages: you pay Meta directly at their official rates.',
  highlights: [
    'One-time payment — zero monthly or annual subscription fees',
    'Direct Meta API connection — you pay Meta at their exact per-conversation rates',
    'Shared team inbox with assignments, private notes & canned replies',
    'Campaign broadcasts with approved Meta templates & real-time analytics',
    'CSV contact import with consent sources & STOP keyword handling',
    'Interactive WhatsApp Flows (lead capture, booking & feedback forms)',
    'Multi-agent role-based access control (Owner, Admin, Agent)',
    'Full REST API access and outgoing webhook events',
    'Two-factor authentication (2FA) & security audit logs'
  ],
  limits: [
    { label: 'Connected WhatsApp Numbers', value: '1 number', description: 'Meta Embedded Signup with your own phone number' },
    { label: 'Saved Contacts', value: '2,000 contacts', description: 'CSV import with consent tags & custom segments' },
    { label: 'Team Seats', value: '3 team agents', description: 'Owner, Admin, and Agent role permissions' },
    { label: 'Campaign Broadcasts', value: '10,000 messages / mo', description: 'Fair-use monthly outbound template delivery' },
  ],
  addons: [
    {
      title: 'Additional WhatsApp Phone Numbers',
      description: 'Connect extra team phone lines or regional branch numbers to the same workspace.',
      status: 'coming_soon'
    },
    {
      title: 'Additional Contact Packs (+5,000 contacts)',
      description: 'Expand your consent-tracked contact database as your customer list scales.',
      status: 'coming_soon'
    },
    {
      title: 'Extra Team Agent Seats',
      description: 'Add more support reps and sales agents to your shared team inbox.',
      status: 'coming_soon'
    },
    {
      title: 'High-Volume Campaign Expansion',
      description: 'Boost monthly campaign broadcast allowances for large seasonal promotions.',
      status: 'coming_soon'
    }
  ]
};
