export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  legalName: string;
  address: string;
  supportEmail: string;
  domain: string;
  siteUrl: string;
  appUrl: string;
  appHost: string;
  contactEndpoint?: string;
  metaDisclaimer: string;
  links: {
    signup: string;
    login: string;
  };
  flags?: {
    showCustomerLogos?: boolean;
    showCustomerTestimonials?: boolean;
    foundingOffer?: boolean;
  };
}

const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321';
const appUrl = import.meta.env.PUBLIC_APP_URL || 'http://localhost:8000';

let appHost = 'app.example.com';
try {
  appHost = new URL(appUrl).host;
} catch {
  appHost = 'app.example.com';
}

const defaultDomain = appHost.replace(/^app\./, '');
const supportEmail = import.meta.env.SUPPORT_EMAIL || `support@${defaultDomain}`;

export const siteConfig: SiteConfig = {
  name: 'ONO',
  tagline: 'Calm, reliable WhatsApp operations for growing teams.',
  description: 'Every customer conversation on WhatsApp, in one shared inbox. Connect your business number, send template campaigns to opted-in contacts, and reply together. Pay once. No markup on message fees.',
  legalName: 'ONO India Private Limited',
  address: 'Sector 62, Noida, Uttar Pradesh 201309, India',
  supportEmail,
  domain: defaultDomain,
  siteUrl,
  appUrl,
  appHost,
  contactEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT || '',
  metaDisclaimer: 'ONO is not affiliated with, endorsed by or sponsored by WhatsApp or Meta. WhatsApp is a trademark of Meta Platforms, Inc.',
  links: {
    signup: `${appUrl}/signup/?utm_source=site`,
    login: `${appUrl}/login/`,
  },
  flags: {
    showCustomerLogos: false,
    showCustomerTestimonials: false,
    foundingOffer: false,
  },
};
