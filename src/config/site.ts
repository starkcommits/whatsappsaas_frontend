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
  contactEndpoint?: string;
  metaDisclaimer: string;
  links: {
    signup: string;
    login: string;
  };
}

const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://flexing.in';
const appUrl = import.meta.env.PUBLIC_APP_URL || 'https://app.flexing.in';

export const siteConfig: SiteConfig = {
  name: 'ONO',
  tagline: 'WhatsApp Business platform for customer conversations & broadcast campaigns',
  description: 'Shared team inbox, template campaigns, contact import with consent tracking, WhatsApp Flows, team roles and API. Pay once, no per-message markup.',
  legalName: 'ONO India Private Limited',
  address: 'Noida, Uttar Pradesh, India',
  supportEmail: 'tinkal.nitmz@gmail.com',
  domain: 'flexing.in',
  siteUrl,
  appUrl,
  contactEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT || '',
  metaDisclaimer: 'ONO is not affiliated with, endorsed by or sponsored by WhatsApp or Meta. WhatsApp is a trademark of Meta Platforms, Inc.',
  links: {
    signup: `${appUrl}/signup/?utm_source=site`,
    login: `${appUrl}/login/`,
  },
};
