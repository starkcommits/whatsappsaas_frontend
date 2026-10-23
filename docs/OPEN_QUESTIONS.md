# Open Questions & Decisions Log

## Answered Fill-Ins (from Chat / AGENTS.md)
- **PRODUCT_NAME**: ONO
- **DOMAIN**: flexing.in (Marketing site: `https://flexing.in`, App: `https://app.flexing.in`)
- **SUPPORT_EMAIL**: tinkal.nitmz@gmail.com
- **COMPANY_LEGAL_NAME**: ONO India Private Limited
- **COMPANY_ADDRESS**: Noida, Uttar Pradesh, India
- **PRICE_USD**: 50
- **PRICE_INR**: 4199
- **LOGO**: Simple text wordmark placeholder ("ONO")

---

## Logged Non-Blocking Decisions

### Q1: Font Selection for Self-Hosting
- **Default Chosen**: Inter (WOFF2 self-hosted) with system font fallbacks (`ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).
- **Why**: Clean modern typography, excellent mobile legibility, zero external HTTP requests to Google Fonts adhering strictly to AGENTS.md.
- **Files Affected**: `src/layouts/Layout.astro`, `src/styles/fonts.css`, `public/fonts/`.

### Q2: Pricing Display Format
- **Default Chosen**: Display both USD ($50) and INR (₹4,199) with clear toggle/display label noting "One-time payment for lifetime access".
- **Why**: Audience is India-first small-business while the platform is global. Both prices are explicitly configured.
- **Files Affected**: `src/data/plans.ts`, `src/components/PricingCard.astro`, `src/pages/pricing.astro`.

### Q3: Contact Form Fallback
- **Default Chosen**: Posts to `PUBLIC_CONTACT_ENDPOINT` if set in environment; otherwise provides seamless direct mailto link to `tinkal.nitmz@gmail.com` with anti-spam honeypot input.
- **Why**: Static Cloudflare Pages site without required backend; works cleanly out of the box.
- **Files Affected**: `src/pages/contact.astro`.
