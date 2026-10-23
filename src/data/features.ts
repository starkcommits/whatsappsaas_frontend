export interface FeatureItem {
  id: string;
  number: number;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  badge?: string;
  keyPoints: string[];
  icon: string; // Identifier for custom SVG icon
}

export const featuresList: FeatureItem[] = [
  {
    id: 'embedded-signup',
    number: 1,
    title: 'Meta Embedded Signup',
    shortDesc: 'Connect your own WhatsApp Business number in a few clicks directly through official Meta onboarding.',
    detailedDesc: 'Use your existing business number or register a new one. With official Meta Embedded Signup, you link your WhatsApp Business account securely without third-party middleman credentials.',
    badge: 'Official Meta Onboarding',
    keyPoints: [
      'Guided popup setup with Meta Business Manager',
      'No complex API configuration or manual token swapping',
      'Keep full ownership of your WhatsApp Business Account (WABA)',
      'Direct carrier-grade connectivity through Meta Cloud API'
    ],
    icon: 'connect'
  },
  {
    id: 'shared-team-inbox',
    number: 2,
    title: 'Shared Team Inbox',
    shortDesc: 'Collaborative team inbox with live conversation updates, member assignment, internal notes, and canned replies.',
    detailedDesc: 'Eliminate missed customer messages. Your entire customer-facing team shares a central inbox where agents can assign conversations, leave internal notes for colleagues, and fire off saved canned replies instantly.',
    badge: 'Live Collaboration',
    keyPoints: [
      'Real-time message updates across active browser tabs',
      'Assign chats to specific agents or reassign in one click',
      'Private internal notes visible only to your teammates',
      'Quick canned responses for frequently asked questions'
    ],
    icon: 'inbox'
  },
  {
    id: 'contacts-and-segments',
    number: 3,
    title: 'Consent-Tagged Contacts & Segments',
    shortDesc: 'Import contacts via CSV with verified consent sources, custom labels, and targeted audience segments.',
    detailedDesc: 'Organize your customer directory cleanly. Import customer lists from CSV spreadsheets, tag them with where and when they gave consent, apply custom labels, and group them into filtered segments for targeted outreach.',
    badge: 'Audience Management',
    keyPoints: [
      'Simple CSV spreadsheet upload with column mapping',
      'Mandatory consent source logging for compliance',
      'Color-coded labels and tags to categorize contacts',
      'Dynamic segments based on tags and opt-in status'
    ],
    icon: 'contacts'
  },
  {
    id: 'template-editor',
    number: 4,
    title: 'Template Builder with Live Preview',
    shortDesc: 'Compose WhatsApp message templates and submit directly to Meta for approval with interactive live preview.',
    detailedDesc: 'Design rich interactive templates including headers, media attachments, body copy with variable placeholders, and quick-reply or call-to-action buttons. Submit directly to Meta and monitor approval status in real time.',
    badge: 'Meta Template Sync',
    keyPoints: [
      'WYSIWYG live chat bubble preview as you type',
      'Support for text, image, document, and video headers',
      'Dynamic {{1}}, {{2}} personalization parameters',
      'Direct one-click submission to Meta with status tracking'
    ],
    icon: 'template'
  },
  {
    id: 'campaign-broadcasts',
    number: 5,
    title: 'Campaign Broadcasts & Live Tracking',
    shortDesc: 'Pick an approved template, select your audience, schedule delivery, and track sent, delivered, read, and replies.',
    detailedDesc: 'Reach segmented audiences reliably. Choose an approved Meta template, filter your consent-verified recipient segment, schedule immediate or timed release, and track end-to-end delivery metrics and incoming replies.',
    badge: 'Targeted Outreach',
    keyPoints: [
      'Schedule campaigns for specific dates and times',
      'Automated rate-limiting respecting WhatsApp throughput',
      'Real-time metrics: Sent, Delivered, Read, Failed, and Inbound Replies',
      'Detailed log of each message delivery status'
    ],
    icon: 'campaign'
  },
  {
    id: 'consent-tracking',
    number: 6,
    title: 'Built-in Consent & STOP Handling',
    shortDesc: 'Opt-in links, QR codes, automated STOP keyword handling, ensuring messages only reach contacts who agreed.',
    detailedDesc: 'Stay compliant and protect your phone number quality rating. Generate shareable opt-in links and QR codes for store counters or websites. If a recipient replies with STOP, our system automatically unsubscribes them from future broadcasts.',
    badge: 'Compliance First',
    keyPoints: [
      'Pre-built click-to-chat opt-in links and printable QR codes',
      'Automated STOP and UNSUBSCRIBE keyword processing',
      'Strict suppression list preventing accidental broadcast to opted-out users',
      'Exportable audit trail showing proof of consent'
    ],
    icon: 'shield-check'
  },
  {
    id: 'whatsapp-flows',
    number: 7,
    title: 'WhatsApp Flows (Native Forms)',
    shortDesc: 'Interactive in-chat native forms for frictionless lead capture, appointment booking, and customer feedback.',
    detailedDesc: 'Gather rich structured customer data directly inside the WhatsApp chat without forcing customers onto external browser pages. Deploy native WhatsApp Flows for lead qualification, scheduling appointments, or surveys.',
    badge: 'Native In-Chat Forms',
    keyPoints: [
      'Zero-redirect customer experience inside WhatsApp',
      'Lead qualification and intake forms',
      'Appointment and service booking forms',
      'Instant responses saved directly to contact records'
    ],
    icon: 'flow'
  },
  {
    id: 'roles-api-webhooks',
    number: 8,
    title: 'Team Roles, REST API & Webhooks',
    shortDesc: 'Granular permissions (Owner, Admin, Agent), developer API keys, and real-time outgoing webhook subscriptions.',
    detailedDesc: 'Integrate WhatsApp messaging into your existing CRM, eCommerce store, or internal systems. Manage granular role access for your staff, generate secure API keys, and receive live webhook events for inbound messages and delivery receipts.',
    badge: 'Developer Friendly',
    keyPoints: [
      'Granular roles: Owner (full control), Admin, and Agent (inbox only)',
      'Modern REST API with Bearer token authentication',
      'Reliable webhook delivery for inbound messages and status updates',
      'Detailed API documentation and event payload logs'
    ],
    icon: 'api'
  },
  {
    id: 'security-and-audit',
    number: 9,
    title: 'Two-Factor Auth, Audit Logs & Data Control',
    shortDesc: 'Two-factor authentication (2FA) for workspace owners, complete audit logging, and one-click data export & deletion.',
    detailedDesc: 'Enterprise-grade safeguards for your business communications. Protect owner accounts with standard TOTP two-factor authentication, monitor team activity via an unalterable audit log, and easily export or delete customer records at any time.',
    badge: 'Security & Privacy',
    keyPoints: [
      'TOTP two-factor authentication (Google Authenticator, etc.)',
      'Comprehensive audit log of logins, assignments, and exports',
      'One-click full CSV export of contact and message history',
      'Privacy-compliant GDPR/DPDP permanent data deletion'
    ],
    icon: 'lock'
  },
  {
    id: 'one-time-pricing-model',
    number: 10,
    title: 'Lifetime License — Zero Markup',
    shortDesc: 'One-time software license with no recurring platform subscription and zero per-message markup.',
    detailedDesc: 'Escape recurring software subscriptions. You pay once for lifetime access to the ONO platform. For message conversations, you pay Meta directly at Meta’s official wholesale rates with zero hidden markups or surcharges from us.',
    badge: 'Fair Transparent Pricing',
    keyPoints: [
      'One-time payment of $50 (₹4,199) for lifetime software access',
      'No recurring monthly or annual platform fees',
      'Direct billing relationship with Meta for conversation costs',
      'Transparent fair-use limits and optional modular add-ons'
    ],
    icon: 'tag'
  }
];
