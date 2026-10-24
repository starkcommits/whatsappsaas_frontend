Read AGENTS.md first (including the Addendum). This is a REDESIGN pass on the existing
ONO marketing site (Astro + Tailwind, static). Goal: make it look like a modern,
enterprise-grade software brand: calm, credible, premium and fast. The truthfulness
rules in AGENTS.md override anything below.

## 0. Process
1. Planning mode. Before coding, write docs/DESIGN_AUDIT.md (every problem in the current
   build, with file names) and docs/BRAND.md (the brand system in sections 2-3, filled
   in). Show me the plan, then implement in this order: design tokens, logo and brand
   assets, layout and components, pages, motion, QA.
2. Log doubts in docs/OPEN_QUESTIONS.md with a default, per AGENTS.md. Ask me in chat
   ONLY for: the domain support email, the full registered company address, and whether
   the dashboard is running locally for screenshots.

## 1. Fix first: compliance and truth
- DELETE the testimonial wall in the hero and all fake quotes, names, countries and
  customer stats, including the "Founder @ ONO" quote. Replace with product visuals.
  Keep an optional Testimonials component behind a flag (default off).
- DELETE the integrations marquee (WooCommerce, Razorpay, Google Sheets, Zapier, Make,
  Stripe). Replace with one "API and webhooks" card that says customers can connect
  their own tools using API keys and webhooks, with no logos. Add a code snippet ONLY
  if it matches the real dashboard API; otherwise omit it and log a question.
- Replace every "Official Meta ..." label with "Built on Meta's WhatsApp Business
  Platform (Cloud API)". Remove the hero headline "The WhatsApp Business platform...".
- grep the repo for "flexing" and fix every mock URL bar to use the PUBLIC_APP_URL host.
- Caption every product visual and metric "Sample data". Change "stream in real-time"
  to "live updates". Remove "preview on iOS and Android" unless the dashboard does it.
- The INR price shows as an approximate value from config (for example "about INR 4,199").
- Replace the personal Gmail address everywhere with SUPPORT_EMAIL from env. Footer
  shows the full registered address once provided.

## 2. Brand strategy (answers already decided, do not ask)
- Name: ONO. It is a palindrome, so use that as a visual idea (symmetry, two ends
  connected, conversation in both directions).
- Positioning: "Calm, reliable WhatsApp operations for growing teams."
- Personality: confident, clear, trustworthy, precise. Not hyped or playful.
- Voice: plain-spoken, short sentences, sentence-case headings, active verbs.
  BANNED words: seamless, supercharge, revolutionary, game-changing, world-class,
  unlock, empower, leverage, cutting-edge, next-gen, "all-in-one", exclamation marks.
- Audience: small and mid-size businesses and their operations or sales teams, India-first
  but global.
- Default hero headline: "Every customer conversation on WhatsApp, in one shared inbox."
  Subhead: "ONO helps your team connect a business number, send template campaigns to
  contacts who opted in, and reply together. Pay once. No markup on message fees."
  Primary CTA "Get lifetime access"; secondary "See how it works".

## 3. Visual identity
- Logo: design an original SVG. A geometric ONO wordmark with a symbol made of two
  rings joined by a short bridge (an O-N-O link). It must NOT use a speech bubble,
  phone, checkmark-in-circle, or any green circle that resembles the WhatsApp logo.
  Produce lockups: horizontal, stacked, icon-only, one-color, reversed (for dark).
  Provide favicon (SVG + 32/180/512 PNG), apple-touch-icon and a generated OG image
  1200x630. Remove the "WHATSAPP SAAS" tagline from the logo.
- Color tokens (verify WCAG AA contrast and adjust if needed; define in one file):
  ink-950 #07111F, ink-900 #0B1B2E, ink-700 #243447, ink-500 #5B6B7C, ink-300 #B8C2CC,
  ink-100 #E8ECF0, ink-50 #F5F7F9, white #FFFFFF;
  brand-700 #0B6B52, brand-600 #0E8A68, brand-500 #12A57D, brand-100 #D9F3EA,
  brand-50 #EEF9F5; signal #D7F75B (tiny highlights only, under 2% of the page);
  success #12A57D, warning #F5A524, danger #E5484D, info #3B82F6.
  Light theme by default; dark ink sections only for the product tour, consent
  spotlight, final CTA and footer.
- Typography (self-hosted via @fontsource, no Google requests): display Manrope
  700/800, body Inter, data and code JetBrains Mono. Fluid scale with clamp(); hero
  at most two or three lines; display tracking -0.02em; body 17 to 18px, 1.6 line height.
- Shape and depth: 12 and 16px radii, 1px hairline borders in ink-100, soft layered
  shadows (never heavy), subtle grid and radial-gradient backgrounds. 8px spacing
  grid, 12-column layout, 1200px max content width, generous vertical rhythm (96 to
  128px sections on desktop).
- Icons: one consistent outline set (Lucide), 1.5px stroke. No emoji in UI chrome.

## 4. Components (src/components/)
Header (sticky, blur on scroll, Product menu with Features, How it works, Security, Use
cases; Pricing; About; Contact; Login as a text button; "Get lifetime access" as the
only filled button; mobile drawer with focus trap), Footer (five columns, legal entity,
SUPPORT_EMAIL, Meta non-affiliation notice, no "platform model" widget), Button
(primary, secondary, ghost), Badge, Card, SectionHeader (eyebrow, title, intro),
FeatureRow (copy plus visual, alternating), StatCard, ProductFrame (browser frame with
the PUBLIC_APP_URL host and a "Sample data" caption), TabbedTour (ARIA tabs,
keyboard accessible, vanilla JS), Steps timeline, FAQ accordion (details/summary),
CTABand, PricingCard, ComparisonTable (who pays what), Callout.

## 5. Page by page
Home:
1. Hero: left-aligned copy, right a layered ProductFrame (inbox) with two floating
   sample-data chips (for example "Template approved", "Consent: website form"). Subtle
   grid and gradient background. A fact strip below with four items: Pay once, No
   message markup, 7-day refund, Consent built in. A small line: "Built on Meta's
   WhatsApp Business Platform (Cloud API)".
2. "From scattered chats to one workflow": three outcome cards.
3. Product tour in a dark section with tabs: Inbox, Templates, Campaigns, Consent.
4. How it works: four-step timeline linking to /how-it-works.
5. Consent and compliance spotlight: opt-in links, QR codes, STOP handling, consent ledger.
6. Pricing: one card, plus a two-column "You pay ONO once / You pay Meta per message at
   Meta's rates" graphic with a link to Meta's pricing page.
7. Security and control summary linking to /security.
8. Use cases: D2C, clinics, education, real estate, local services, as generic scenarios
   with no customer claims.
9. FAQ and final CTA band.
Features: one section per FEATURES item, alternating layout. Pricing: card, what is
included, fair-use limits and add-ons from plans.ts, who pays what, refund summary, FAQ.
How it works: detailed steps and what you need to start. NEW Security page: only true
facts (two-factor authentication for owners, audit log, hashed API keys, encrypted
access tokens, signature-verified webhooks, tenant isolation, data export and deletion,
consent tracking). State plainly that no compliance certifications are claimed. NEW Use
cases page. Keep About, Contact, legal pages, 404, restyled with the new system.

## 6. Product visuals
- If the dashboard runs locally (ask me), seed the demo workspace and capture REAL
  screenshots with the browser tool into public/screens/ (inbox, templates, campaign
  report, consent tools, contacts, billing), at 2x, cropped cleanly, optimized to AVIF
  and WebP with PNG fallback, descriptive alt text, caption "Sample data".
- Otherwise rebuild the CSS mockups so they match the dashboard's real layout and fix:
  cramped chips and wrapping text, the empty gap in the campaigns section, and the
  tilted-background clutter.

## 7. Motion
Fade-and-rise (12px, 400ms, small stagger) on scroll with IntersectionObserver,
2px hover lift on cards, smooth tab transitions. No parallax libraries, no autoplay
video, no layout shift. Respect prefers-reduced-motion completely.

## 8. Performance, accessibility, SEO
- Mobile Lighthouse 95+ for Home and Pricing, LCP under 2.0s on throttled mobile, CLS 0,
  total JS small (vanilla only), images with srcset and explicit dimensions, preload
  only the display font weights used, font-display swap.
- WCAG 2.2 AA: contrast, visible focus, skip link, landmarks, correct ARIA for tabs and
  accordions, labelled forms with inline errors, 44px touch targets.
- Keep existing SEO (titles, descriptions, canonicals, Open Graph, sitemap, JSON-LD) and
  add the new pages.

## 9. Definition of done
- docs/DESIGN_AUDIT.md and docs/BRAND.md exist, and the site matches BRAND.md.
- grep finds none of: "flexing", "Official Meta", the testimonial names, "Zapier",
  "WooCommerce", "Stripe", "gmail".
- No claim outside the FEATURES list. Every metric is captioned "Sample data".
- Screenshots of every page at 1440, 1024, 768 and 390px in docs/screenshots/after/.
- npm run build, link check, axe or pa11y accessibility run, and Lighthouse scores for
  Home and Pricing are recorded in docs/QA.md with zero console errors.
- Finish with: what changed, how to verify, what is still open.