# AGENTS.md: Marketing website

## Fill-ins (the owner edits these; do not invent values)
PRODUCT_NAME: ONO
DOMAIN: flexing.in            (site at https://flexing.in, app at https://app.flexing.in)
SUPPORT_EMAIL: support@flexing.in
COMPANY_LEGAL_NAME: ONO India Private Limited
COMPANY_ADDRESS: Sector 62, Noida, Uttar Pradesh 201309, India   (needed for legal pages and Razorpay)
PRICE_USD: 50
PRICE_INR: 4199
LOGO: geometric ONO link mark (two rings connected by a bridge)

## What this is
The public marketing website for {PRODUCT_NAME}, a WhatsApp Business platform:
shared team inbox, template-based campaigns, contact import with consent tracking,
WhatsApp Flows, team roles and an API. The product dashboard is a separate Django
app at app.DOMAIN and is FINISHED. This site never contains product logic.

## Decisions already made (do not ask)
- Astro (static output) + Tailwind. React is allowed ONLY as islands via @astrojs/react for interactive components. Everything else stays .astro.
- Deploy target: Cloudflare Pages. Output must be fully static.
- Self-host fonts (no Google Fonts requests). No analytics or tracking scripts, so no
  cookie banner is needed.
- Design: original, clean, light theme, green primary, mobile-first. Do NOT copy any
  competitor's layout, copy, icons, colors or assets (AiSensy, WATI, WhatsChimp, etc.).
- Pricing: ONE plan, "Lifetime Access", USD 50 one-time. No subscription. No markup on
  WhatsApp message fees: customers pay Meta directly at Meta's rates.
- English only. India-first small-business audience, but the site is global.
- Contact form posts to PUBLIC_CONTACT_ENDPOINT if set, otherwise falls back to mailto.
- All app links use PUBLIC_APP_URL (env). Never hard-code a domain.

## Truthfulness rules (strict)
- Only claim features in the FEATURES list below. Do NOT mention chatbots, AI
  replies, lead scraping, or anything not listed.
- No fake testimonials, customer logos, user counts, ratings, awards or "as seen in".
  Components for these may exist but must be hidden behind a flag, default off.
- No scarcity or countdown unless config says so (FOUNDING_OFFER, default off, with the
  real remaining count from config).
- Do not call the product an "official" WhatsApp or Meta partner. Footer must state:
  "{PRODUCT_NAME} is not affiliated with, endorsed by or sponsored by WhatsApp or Meta.
  WhatsApp is a trademark of Meta Platforms, Inc."
- Do not use the WhatsApp logo. Use generic chat-bubble icons you draw yourself.

## FEATURES (the only claims allowed)
1. Connect your own WhatsApp number in a few clicks (Meta Embedded Signup)
2. Shared team inbox with live updates, assignment, notes and canned replies
3. Contacts: CSV import with consent source, labels, segments
4. Create message templates and submit them to Meta for approval; live preview
5. Campaigns: pick an approved template, choose an audience, schedule, track
   sent / delivered / read / failed / replies
6. Built-in consent tracking: opt-in links and QR codes, STOP handling, messages
   only go to contacts who agreed
7. WhatsApp Flows: forms for lead capture, appointments and feedback
8. Team roles (owner, admin, agent), API keys and webhooks
9. Security: two-factor authentication for owners, audit log, data export and deletion
10. Pricing model: one-time payment, no per-message markup

## How to work
1. Read this file at the start of every task. Plan first, then build. Small commits.
2. Run `npm run build`, a link checker and a type check before saying "done".
3. Finish with: what changed, how to verify, what is still open.

## When you have a question
- If the answer is in this file, do not ask.
- NON-BLOCKING: choose a sensible default, continue, and log it in
  docs/OPEN_QUESTIONS.md as: Q / default chosen / why / files affected.
- BLOCKING (missing legal name, address, email, domain, or a legal/financial claim):
  stop and ask me in chat with options and a recommendation.
- I may answer in chat or write "ANSWER:" under an entry in docs/OPEN_QUESTIONS.md.
  Re-read that file at the start of each task and apply my answers.

## Addendum (design pass)
- Every number, name and chart inside a product visual is SAMPLE DATA and must be captioned "Sample data".
- No third-party logos or integration claims. API and webhooks may be mentioned without logos.
- Never use the word "official" for Meta, and never imply partnership. Say "Built on Meta's WhatsApp Business Platform (Cloud API)".
- Support email must be a domain address from env (SUPPORT_EMAIL), never a free-mail address.
- Mock browser bars use the host of PUBLIC_APP_URL, never any other domain.