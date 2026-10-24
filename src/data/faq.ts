import { siteConfig } from '../config/site';

export interface FAQItem {
  question: string;
  answer: string;
  category?: 'general' | 'pricing' | 'technical';
}

export const homeFAQ: FAQItem[] = [
  {
    question: 'How does connecting our WhatsApp number work?',
    answer: 'You connect directly through Meta Embedded Signup. You can use an existing business number or a fresh phone number. All setup happens inside Meta Business Manager, granting your workspace direct access via Meta Cloud API without any intermediary proxy.',
    category: 'general'
  },
  {
    question: 'What does "Lifetime Access" mean?',
    answer: 'Lifetime Access means you pay a single one-time software license fee ($50 / about INR 4,199) and receive access to the ONO platform for the operational lifetime of the product. There are no recurring monthly or annual platform subscription fees.',
    category: 'pricing'
  },
  {
    question: 'Who pays Meta for WhatsApp message fees?',
    answer: 'You pay Meta directly. ONO does not charge any per-message fees or conversation markups. You add your payment card inside your own Meta Business Manager, and Meta bills you directly at Meta\'s regional rates per conversation.',
    category: 'pricing'
  },
  {
    question: 'Can our whole team reply to customer conversations?',
    answer: 'Yes. The Lifetime plan includes 3 team agent seats. Team members can view all active conversations in the shared inbox, assign conversations to themselves or teammates, leave private internal notes, and send approved template messages or canned replies.',
    category: 'general'
  },
  {
    question: 'How does ONO help us stay compliant with WhatsApp policy?',
    answer: 'Compliance is built directly into the platform: contact CSV imports record a consent source, opt-in links and QR codes are generated automatically, and when a recipient replies with STOP or UNSUBSCRIBE, they are excluded from future broadcast campaigns.',
    category: 'general'
  },
  {
    question: 'Do you offer a refund if it is not right for us?',
    answer: `Yes. We provide a 7-day money-back guarantee. If ONO does not fit your operational workflow, contact our support team at ${siteConfig.supportEmail} within 7 days of purchase for a full refund.`,
    category: 'pricing'
  }
];

export const pricingFAQ: FAQItem[] = [
  {
    question: 'What does "Lifetime Access" mean exactly?',
    answer: 'A one-time payment gives you access to the ONO platform for the operational lifetime of the software. You never pay a monthly or annual subscription fee for the core plan.',
    category: 'pricing'
  },
  {
    question: 'What is your refund and cancellation policy?',
    answer: `We provide a straightforward 7-day money-back guarantee. If you decide ONO is not the right fit for your team, email ${siteConfig.supportEmail} within 7 days of purchase and we will refund your payment in full.`,
    category: 'pricing'
  },
  {
    question: 'What do I need to get started?',
    answer: 'You need two things: (1) A Meta Business Account (which can be created at business.facebook.com), and (2) A phone number that can receive an SMS or voice call verification code and is not currently registered on the consumer WhatsApp mobile app.',
    category: 'general'
  },
  {
    question: 'Who pays Meta for WhatsApp conversation charges, and how much is it?',
    answer: 'You pay Meta directly via your Meta Business Manager billing method. Meta charges per 24-hour conversation category (marketing, utility, authentication, or service). Because ONO adds zero markup, you pay the exact baseline rates established by Meta for your country.',
    category: 'pricing'
  },
  {
    question: 'Can I cancel or delete my account anytime?',
    answer: 'Yes. You retain full ownership of your data. You can export all contact records and conversation histories to CSV at any time, disconnect your WhatsApp number, or request full account deletion via your settings.',
    category: 'general'
  },
  {
    question: 'What happens if I reach the contact or campaign message limits?',
    answer: 'The Lifetime plan includes clear fair-use limits: 1 WhatsApp number, 2,000 saved contacts, 3 team agents, and 10,000 campaign broadcast messages per month. If your business grows beyond these limits, modular add-on packs will be available without recurring subscriptions.',
    category: 'pricing'
  }
];
