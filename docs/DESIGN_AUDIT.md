# ONO Marketing Site – Design & Compliance Audit

Date: 2026-10-24
Status: Comprehensive Pre-Redesign Audit
Author: Antigravity Agent

---

## 1. Compliance, Truthfulness & Legal Violations (AGENTS.md & plan.md)

### 1.1 Fake Testimonials & Customer Claims
- **Issue**: The hero section background currently renders an animated 3D card marquee (`Hero3DMarquee.astro`) containing fabricated customer reviews, names (`Noah Smith`, `Elena Rostova`, `Haruto Sato`, `Tinkal Kumar`, `Devendra`, `Priya Sen`, `Liam O'Connor`, `Chloe Martin`, `Rohan Gupta`), fake follower tags (`@noah`, `@elena`, etc.), verified checkmarks, and country flags.
- **Affected Files**:
  - `src/components/Hero3DMarquee.astro` (entire component must be removed from active layout)
  - `src/pages/index.astro` (renders `Hero3DMarquee`)
- **Required Action**: Remove the hero testimonial marquee. Put any future testimonials behind `siteConfig.flags.showCustomerTestimonials: false` (default off). Replace hero background with subtle grid/radial gradient and clear product visual.

### 1.2 Third-Party Brand Logos & Integration Claims
- **Issue**: `BrandMarquee.astro` currently showcases third-party logos (Shopify, WooCommerce, Razorpay, Google Sheets, Zapier, Make, Stripe, HubSpot). AGENTS.md Addendum states: *"No third-party logos or integration claims. API and webhooks may be mentioned without logos."*
- **Affected Files**:
  - `src/components/BrandMarquee.astro`
  - `src/pages/index.astro`
- **Required Action**: Remove the integration logos marquee. Replace with a single, calm "API and Webhooks" outcome card stating users can connect custom tools via REST API and Webhooks with no third-party logos.

### 1.3 Use of "Official Meta" & Implied Partnership
- **Issue**: AGENTS.md strictly forbids implying partnership or calling Meta/WhatsApp "official partner". The phrase "Official Meta ..." is currently present in 16+ places across the codebase.
- **Affected Files**:
  - `src/pages/index.astro` (lines 26, 111, 127, 331: "Official Meta Cloud API", "official Meta APIs")
  - `src/pages/pricing.astro` (lines 86, 131: "official Meta WhatsApp Cloud API", "View Official Meta Pricing Rates")
  - `src/pages/how-it-works.astro` (lines 42, 44: "official Meta popup", "Official Meta popup dialog")
  - `src/pages/about.astro` (lines 21, 61: "official Meta WhatsApp Cloud API", "official Meta APIs")
  - `src/data/features.ts` (lines 17, 18, 19: "official Meta onboarding", "Official Meta Onboarding")
  - `src/data/faq.ts` (line 10: "official Meta Embedded Signup")
  - `src/components/Hero3DMarquee.astro` (lines 21, 187)
  - `src/components/CtaBand.astro` (line 65)
- **Required Action**: Replace all occurrences with "Built on Meta's WhatsApp Business Platform (Cloud API)" or "Meta Embedded Signup" / "Meta's WhatsApp Cloud API". Never use "Official Meta".

### 1.4 Hardcoded Domains (`flexing.in`) in Mockup Bars & Links
- **Issue**: AGENTS.md Addendum: *"Mock browser bars use the host of PUBLIC_APP_URL, never any other domain."* Currently `flexing.in` is hard-coded in several mock URL bars.
- **Affected Files**:
  - `src/config/site.ts` (lines 23-24, 33)
  - `src/components/DeviceFrame.astro` (default `browserUrl = 'https://app.flexing.in'`)
  - `src/pages/index.astro` (hard-coded `https://app.flexing.in/inbox`, `/campaigns`, `/templates`, `/compliance`)
  - `src/pages/how-it-works.astro` (hard-coded `https://app.flexing.in/inbox`)
  - `src/components/mockups/TemplateMockup.astro` (hard-coded `https://flexing.in/offers`, `https://track.flexing.in`)
- **Required Action**: Dynamically derive the host from `siteConfig.appUrl` (or `new URL(siteConfig.appUrl).host`). Replace hardcoded `flexing.in` links in mockups with generic relative or dynamic URLs.

### 1.5 Free-Mail Support Email (`gmail.com`)
- **Issue**: Support email is currently configured as `tinkal.nitmz@gmail.com`. AGENTS.md Addendum: *"Support email must be a domain address from env (SUPPORT_EMAIL), never a free-mail address."*
- **Affected Files**:
  - `src/config/site.ts` (line 32)
  - `src/data/faq.ts` (lines 35, 48)
  - `README.md`
  - `docs/OPEN_QUESTIONS.md`
- **Required Action**: Set default domain support address `support@flexing.in` (derived from env or site domain), and prompt user for their verified domain address.

### 1.6 Missing "Sample Data" Captions & Real-Time Claims
- **Issue**: AGENTS.md Addendum: *"Every number, name and chart inside a product visual is SAMPLE DATA and must be captioned 'Sample data'."* Also, claims say "stream in real-time" (must be "live updates") and "preview on iOS and Android" (must be removed).
- **Affected Files**:
  - `src/components/DeviceFrame.astro`
  - `src/components/mockups/InboxMockup.astro`
  - `src/components/mockups/TemplateMockup.astro`
  - `src/components/mockups/CampaignMockup.astro`
  - `src/components/mockups/ConsentMockup.astro`
  - `src/pages/index.astro`
- **Required Action**: Add visible caption "Sample data" to every mock frame, device view, and stat chart. Update copy to "live updates".

---

## 2. Brand Identity & Visual Language Audit

### 2.1 Logo and Wordmark
- **Issue**: Current logo is a circular green chat bubble with `< / >` code brackets taken from the Django vendor asset.
- **Specification (plan.md section 3)**:
  - Must NOT use a speech bubble, phone, checkmark-in-circle, or green circle resembling WhatsApp.
  - Must be an original geometric SVG: ONO wordmark with a symbol of two rings joined by a short bridge (an O-N-O link representing two-way conversation/symmetry).
  - Produce horizontal, stacked, icon-only, and reversed dark variants.
  - Generate favicons (SVG + PNG 32/180/512), apple-touch-icon, and 1200x630 OG image.
  - Remove "WHATSAPP SAAS" tagline.

### 2.2 Color Tokens
- **Issue**: Palette is currently standard Tailwind emerald greens and generic grays.
- **Specification (plan.md section 3)**:
  - `ink-950`: `#07111F`
  - `ink-900`: `#0B1B2E`
  - `ink-700`: `#243447`
  - `ink-500`: `#5B6B7C`
  - `ink-300`: `#B8C2CC`
  - `ink-100`: `#E8ECF0`
  - `ink-50`:  `#F5F7F9`
  - `white`:   `#FFFFFF`
  - `brand-700`: `#0B6B52`
  - `brand-600`: `#0E8A68`
  - `brand-500`: `#12A57D`
  - `brand-100`: `#D9F3EA`
  - `brand-50`:  `#EEF9F5`
  - `signal`:    `#D7F75B` (subtle accent, <2% of page)
  - Semantic: `success` `#12A57D`, `warning` `#F5A524`, `danger` `#E5484D`, `info` `#3B82F6`
- **Dark ink sections**: Exclusively for Product Tour, Consent spotlight, Final CTA, and Footer. Light theme default.

### 2.3 Typography
- **Issue**: Uses system/generic font stack.
- **Specification (plan.md section 3)**:
  - Display: Manrope (700/800) self-hosted via `@fontsource/manrope`
  - Body: Inter self-hosted via `@fontsource/inter`
  - Data / Code: JetBrains Mono self-hosted via `@fontsource/jetbrains-mono`
  - Fluid type scale with `clamp()`, -0.02em tracking for display, 1.6 line height for body.

### 2.4 Banned Words & Copy Tone
- **Issue**: Hyped marketing terms exist across sections.
- **Banned Words**: seamless, supercharge, revolutionary, game-changing, world-class, unlock, empower, leverage, cutting-edge, next-gen, "all-in-one", and exclamation marks (`!`).
- **Required Action**: Rewrite all headlines, bullet points, and intros to be calm, plain-spoken, short, and active.

---

## 3. Structural & Page Audit

### 3.1 Missing Pages
- `/security` (enterprise-grade security & tenancy page: 2FA, audit logs, hashed API keys, encrypted tokens, signature verification, tenant isolation, no false ISO/SOC2 claims).
- `/use-cases` (realistic operational scenarios for D2C, clinics, education, real estate, local services without fake customer stories).

### 3.2 Header & Navigation
- Current header has flat links.
- Needs: Product dropdown (Features, How it works, Security, Use cases), Pricing, About, Contact, Login text button, and single filled primary CTA button ("Get lifetime access"). Mobile drawer with focus trap and ARIA attributes.

### 3.3 Footer
- Needs: 5-column layout, registered company name & address, domain support email, copyright, legal links, and exact Meta non-affiliation disclaimer.

### 3.4 Interactive Components
- Tabbed Product Tour in dark ink section with accessible ARIA tabs (Inbox, Templates, Campaigns, Consent).
- Pricing comparison table ("You pay ONO once" vs "You pay Meta directly per message").
- Steps timeline with clean, non-hyped onboarding flow.
- FAQ accordion with `<details>` / `<summary>` semantic markup.

---

## 4. QA & Performance Targets
- Zero console errors.
- 100% valid links (zero broken internal links or missing anchors).
- WCAG 2.2 AA compliant contrast and 44px tap targets.
- Mobile Lighthouse 95+ on Home and Pricing.
- Screenshots at 1440px, 1024px, 768px, and 390px in `docs/screenshots/after/`.
