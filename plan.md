Read AGENTS.md. Build the complete marketing website.

Pages and content
1. Home: hero (headline, subheadline, primary CTA "Get lifetime access", secondary
   "See how it works", an HTML/CSS product mockup of the inbox), a "how it works"
   strip in 4 steps (connect number, import contacts with consent, send template
   campaigns, reply from one shared inbox), feature grid from FEATURES only, a
   deeper section each for Inbox, Templates and Campaigns, and Consent tools,
   a pricing section, FAQ, and a final CTA.
2. Features: one section per FEATURES item with a short benefit-led description.
3. Pricing: a single card "Lifetime Access", USD {PRICE_USD} one-time (show the INR price
   too only if PRICE_INR is set). Show the fair-use limits and add-ons from
   src/data/plans.ts. Prominent line: "No monthly fee. No markup on WhatsApp messages:
   you pay Meta directly at their rates." Include a short "What does Meta charge?"
   explainer that says rates are set by Meta, vary by country and message type, and
   link to Meta's official pricing page. Add a comparison-free FAQ (what lifetime
   means, refunds, what you need to start such as a Meta business account and a phone
   number, can I cancel, who pays Meta).
4. How it works: a longer version with the onboarding steps and what you need.
5. Contact: form with name, email, message and a spam honeypot. Use
   PUBLIC_CONTACT_ENDPOINT, fall back to mailto:SUPPORT_EMAIL. Show company name, address
   and support email.
6. About: short, honest, uses COMPANY_LEGAL_NAME; no invented founder stories.
7. Legal pages (clearly marked DRAFT, pending legal review): Privacy Policy, Terms of
   Service (include what "lifetime" means: the lifetime of the product, not the
   customer; fair-use limits; customer is responsible for having consent from every
   contact; Meta's terms apply), Refund and Cancellation Policy (7-day refund window,
   configurable), Acceptable Use Policy (no spam, no purchased or scraped lists, opt-in
   required, WhatsApp policy compliance), and Shipping and Delivery (digital access
   delivered by email and dashboard immediately after payment).
8. 404 page.

Calls to action
- "Get lifetime access" and "Start" → {PUBLIC_APP_URL}/signup/?utm_source=site
- "Login" → {PUBLIC_APP_URL}/login/
- A small script appends any incoming utm_* parameters to those links.

Plans data
- Put price, limits and add-ons in src/data/plans.ts only, so they can be edited in one
  place. Default limits: 1 WhatsApp number, 2,000 contacts, 3 team agents, 10,000
  campaign messages per month. Add-ons listed as "coming soon".

Design and quality
- Tailwind design tokens in one file (colors, spacing, radius, type scale). Reusable
  components in src/components/ (Header, Footer, Button, Section, FeatureCard,
  PricingCard, FAQ accordion, CTA band, DeviceFrame, Mockup components).
- DeviceFrame accepts an image from public/screens/ and falls back to the CSS
  mockup if the image is missing, so real dashboard screenshots can be dropped in later.
- Responsive from 360px up, sticky header with a mobile menu, visible focus states,
  alt text, sufficient contrast, reduced-motion support, keyboard-accessible FAQ.
- Performance target Lighthouse 90+ on mobile: static HTML, optimized images, no
  render-blocking third-party scripts, self-hosted fonts.
- SEO: unique title and meta description per page, canonical URLs, Open Graph and
  Twitter cards with a generated OG image, sitemap.xml, robots.txt (allow all),
  JSON-LD for Organization and Product/Offer on the pricing page and FAQPage on FAQ.
- Footer: legal links, contact, the Meta non-affiliation statement, copyright with
  COMPANY_LEGAL_NAME.

Deliverables
- README with env vars (.env.example: PUBLIC_APP_URL, PUBLIC_SITE_URL,
  PUBLIC_CONTACT_ENDPOINT), run/build steps, and Cloudflare Pages deploy steps
  (build command, output dir, custom domain, www redirect).
- Use the browser to screenshot every page at 1440px, 768px and 390px into
  docs/screenshots/ and fix any layout bugs you see.
- Run a link checker; no broken internal links; all CTAs resolve to PUBLIC_APP_URL.
Done when: `npm run build` passes, all pages exist, plans.ts drives every price
mention, no claim exists outside the FEATURES list, and screenshots are saved.
Placeholders for unfilled fill-ins must render as an obvious "TODO" build warning
and be listed in docs/OPEN_QUESTIONS.md. Do not invent company details.