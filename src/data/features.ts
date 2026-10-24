export interface FeatureItem {
  id: string;
  number: number;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  badge?: string;
  keyPoints: string[];
  icon: string;
}

export const featuresList: FeatureItem[] = [
  {
    id: 'embedded-signup',
    number: 1,
    title: 'Meta Embedded Signup',
    shortDesc: 'Connect your WhatsApp Business number in a few clicks using Meta Embedded Signup.',
    detailedDesc: 'Use your existing business number or register a new one. With Meta Embedded Signup, you link your WhatsApp Business account directly without third-party middleman credentials.',
    badge: 'Direct Onboarding',
    keyPoints: [
      'Guided popup setup with Meta Business Manager',
      'No complex manual token swapping',
      'Keep full ownership of your WhatsApp Business Account (WABA)',
      'Built on Meta\'s WhatsApp Business Platform (Cloud API)'
    ],
    icon: 'connect'
  },
  {
    id: 'shared-team-inbox',
    number: 2,
    title: 'Shared Team Inbox',
    shortDesc: 'Collaborative team inbox with live conversation updates, member assignment, internal notes, and canned replies.',
    detailedDesc: 'Stop missing customer messages. Your customer-facing team shares a central inbox where agents assign conversations, leave internal notes for colleagues, and send saved canned replies.',
    badge: 'Live Collaboration',
    keyPoints: [
      'Live message updates across active browser tabs',
      'Assign chats to specific agents or reassign in one click',
      'Private internal notes visible only to teammates',
      'Canned responses for common questions'
    ],
    icon: 'inbox'
  },
  {
    id: 'contacts-and-segments',
    number: 3,
    title: 'Consent-Tagged Contacts & Segments',
    shortDesc: 'Import contacts via CSV with verified consent sources, custom labels, and targeted audience segments.',
    detailedDesc: 'Organize your customer directory cleanly. Import customer lists from CSV files, record where and when consent was given, apply custom labels, and group contacts into filtered segments.',
    badge: 'Audience Management',
    keyPoints: [
      'CSV spreadsheet upload with column mapping',
      'Mandatory consent source logging for compliance',
      'Custom labels and tags to categorize contacts',
      'Dynamic segments based on tags and opt-in status'
    ],
    icon: 'contacts'
  },
  {
    id: 'template-editor',
    number: 4,
    title: 'Template Builder with Live Preview',
    shortDesc: 'Compose WhatsApp message templates and submit directly to Meta for approval with interactive live preview.',
    detailedDesc: 'Design structured templates including headers, media attachments, body copy with variable placeholders, and quick-reply or call-to-action buttons. Submit directly to Meta and monitor approval status in your dashboard.',
    badge: 'Meta Template Sync',
    keyPoints: [
      'Interactive chat preview as you type',
      'Support for text, image, document, and video headers',
      'Dynamic variable parameters',
      'Direct submission to Meta with status tracking'
    ],
    icon: 'template'
  },
  {
    id: 'campaign-broadcasts',
    number: 5,
    title: 'Campaign Broadcasts & Live Tracking',
    shortDesc: 'Pick an approved template, select your audience, schedule delivery, and track sent, delivered, read, and replies.',
    detailedDesc: 'Reach segmented audiences responsibly. Choose an approved Meta template, filter your consent-verified recipient segment, schedule immediate or timed release, and track delivery metrics and incoming replies.',
    badge: 'Targeted Outreach',
    keyPoints: [
      'Schedule campaigns for specific dates and times',
      'Automated rate-limiting respecting WhatsApp throughput',
      'Live metrics: sent, delivered, read, failed, and inbound replies',
      'Delivery status log for each message'
    ],
    icon: 'campaign'
  },
  {
    id: 'consent-tracking',
    number: 6,
    title: 'Built-in Consent & STOP Handling',
    shortDesc: 'Opt-in links, QR codes, and automated STOP keyword handling so messages only reach contacts who agreed.',
    detailedDesc: 'Stay compliant and maintain phone number quality. Generate opt-in links and QR codes for store counters or websites. If a recipient replies with STOP, the system unsubscribes them from future broadcasts.',
    badge: 'Compliance First',
    keyPoints: [
      'Click-to-chat opt-in links and printable QR codes',
      'Automated STOP and UNSUBSCRIBE keyword processing',
      'Strict suppression list preventing delivery to opted-out contacts',
      'Exportable audit trail showing proof of consent'
    ],
    icon: 'shield-check'
  },
  {
    id: 'whatsapp-flows',
    number: 7,
    title: 'WhatsApp Flows (In-Chat Forms)',
    shortDesc: 'In-chat native forms for lead capture, appointment booking, and customer feedback.',
    detailedDesc: 'Collect structured customer data directly inside the WhatsApp chat without sending customers to external websites. Deploy WhatsApp Flows for lead qualification, appointment booking, or feedback surveys.',
    badge: 'In-Chat Forms',
    keyPoints: [
      'Complete forms directly inside WhatsApp',
      'Lead qualification and intake questionnaires',
      'Appointment and service booking forms',
      'Responses saved directly to contact records'
    ],
    icon: 'flow'
  },
  {
    id: 'roles-api-webhooks',
    number: 8,
    title: 'Team Roles, REST API & Webhooks',
    shortDesc: 'Granular permissions (owner, admin, agent), developer API keys, and outgoing webhook subscriptions.',
    detailedDesc: 'Connect WhatsApp messaging with your existing CRM, store, or internal systems. Manage role permissions for staff, generate scoped API keys, and receive webhook events for inbound messages and delivery receipts.',
    badge: 'Developer Tools',
    keyPoints: [
      'Roles: Owner (full control), Admin, and Agent (inbox only)',
      'REST API with Bearer token authentication',
      'Webhook delivery for inbound messages and status updates',
      'API documentation and event payload logs'
    ],
    icon: 'api'
  },
  {
    id: 'security-and-audit',
    number: 9,
    title: 'Two-Factor Auth, Audit Logs & Data Control',
    shortDesc: 'Two-factor authentication (2FA) for workspace owners, complete audit logging, and data export and deletion.',
    detailedDesc: 'Safeguards for your business communications. Protect owner accounts with standard TOTP two-factor authentication, monitor team actions with an audit log, and export or delete contact records at any time.',
    badge: 'Security & Privacy',
    keyPoints: [
      'TOTP two-factor authentication for owners',
      'Audit log of logins, assignments, and exports',
      'One-click CSV export of contact and message history',
      'Permanent data deletion upon request'
    ],
    icon: 'lock'
  },
  {
    id: 'one-time-pricing-model',
    number: 10,
    title: 'Lifetime License — Zero Markup',
    shortDesc: 'One-time software license with no recurring platform subscription and zero per-message markup.',
    detailedDesc: 'Pay once for lifetime access to the ONO platform. For message conversations, you pay Meta directly at Meta\'s rates with zero hidden markups or surcharges from us.',
    badge: 'Transparent Pricing',
    keyPoints: [
      'One-time payment of $50 (about INR 4,199) for lifetime software access',
      'No recurring monthly or annual platform fees',
      'Direct billing relationship with Meta for conversation costs',
      'Clear fair-use limits and optional modular add-ons'
    ],
    icon: 'tag'
  }
];
