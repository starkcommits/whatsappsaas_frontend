# Open Questions & Decisions Log

Last Updated: 2026-10-24 (Redesign Pass)

---

## 1. Questions for User (Clarification Pending)

### Q_A: Domain Support Email
- **Status**: ANSWERED
- **Confirmed Value**: `support@flexing.in`
- **Files Affected**: `src/config/site.ts`, `src/pages/contact.astro`, `src/components/Footer.astro`, `src/data/faq.ts`, `README.md`.

### Q_B: Full Registered Company Address
- **Status**: ANSWERED
- **Confirmed Value**: `Sector 62, Noida, Uttar Pradesh 201309, India`
- **Files Affected**: `src/components/Footer.astro`, `src/pages/contact.astro`, `src/pages/terms.astro`, `src/pages/privacy.astro`, `src/pages/refund.astro`, `src/pages/shipping-and-delivery.astro`.

### Q_C: Local Django Dashboard Availability for Real Screenshots
- **Status**: ANSWERED
- **Confirmed Value**: Yes, Django running on port 8000; can seed demo data and capture real 2x screenshots.
- **Files Affected**: `src/components/mockups/*`, `src/components/ProductFrame.astro`, `public/screens/`.

---

## 2. Non-Blocking Decisions & Chosen Defaults (per AGENTS.md & plan.md)

### D1: Logo & Symbol System
- **Default Chosen**: Designed original geometric SVG symbol composed of two symmetrical nodes connected with a horizontal communication bridge (O-N-O link) + pure geometric bold wordmark `ONO`. No speech bubbles, checkmarks, phones, or green circles resembling WhatsApp. Removed "WHATSAPP SAAS" tagline.
- **Why**: Strictly complies with plan.md section 3 and AGENTS.md trademark safety rules.
- **Files Affected**: `public/logo.svg`, `public/favicon.svg`, `src/components/Logo.astro`, `src/components/Header.astro`, `src/components/Footer.astro`.

### D2: Integration Marquee Replacement
- **Default Chosen**: Deleted all third-party logos (WooCommerce, Shopify, Razorpay, Zapier, Make, Stripe, HubSpot). Replaced with a single calm, high-contrast "API & Webhooks" card explaining that teams can connect custom workflows via REST API and Webhooks. No third-party logos shown.
- **Why**: Strictly mandated by AGENTS.md Addendum and plan.md section 1.
- **Files Affected**: `src/components/BrandMarquee.astro`, `src/pages/index.astro`.

### D3: Hero Section Layout
- **Default Chosen**: Left-aligned headline, subhead, primary CTA ("Get lifetime access"), secondary CTA ("See how it works"), and 4-point fact strip ("Pay once", "No message markup", "7-day refund", "Consent built in") + small line "Built on Meta's WhatsApp Business Platform (Cloud API)". Right side: layered `ProductFrame` with inbox sample data and two floating chips ("Template approved", "Consent: website form"). Zero testimonial background cards.
- **Why**: Strictly follows plan.md section 5.
- **Files Affected**: `src/pages/index.astro`.

### D4: Approximate INR Price Display
- **Default Chosen**: Displays as "about ₹4,199" (or "about INR 4,199") alongside USD $50, noting that foreign exchange conversion is approximate and one-time.
- **Why**: Clarified by plan.md section 1 so customer expectations match payment gateway settlement.
- **Files Affected**: `src/data/plans.ts`, `src/components/PricingCard.astro`, `src/pages/pricing.astro`.

### D5: Testimonials Component
- **Default Chosen**: Preserved a clean testimonials component behind `siteConfig.flags.showCustomerTestimonials: false` (default off). No fake reviews or names rendered on public pages.
- **Why**: AGENTS.md strictly forbids fake testimonials while plan.md allows keeping the component dormant behind a flag.
- **Files Affected**: `src/config/site.ts`, `src/components/Testimonials.astro`.
