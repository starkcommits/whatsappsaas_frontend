# ONO — Marketing Website

The public marketing website for **ONO** (`flexing.in`), a WhatsApp Business platform featuring a shared team inbox, template-based broadcast campaigns, contact import with verifiable consent tracking, native WhatsApp Flows, team roles, and REST API.

The product dashboard is a separate Django app hosted at `app.flexing.in` (`PUBLIC_APP_URL`). This marketing website contains zero product backend logic and outputs 100% static HTML.

---

## Tech Stack & Architecture

- **Framework**: [Astro](https://astro.build/) (Static Output Mode `output: 'static'`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens in `tailwind.config.mjs`
- **Dependencies**: Zero React, zero heavy JS client runtimes, zero CMS, zero backend database
- **Deployment Target**: Cloudflare Pages
- **Typography & Assets**: Self-hosted / system font stack; zero Google Fonts requests; custom inline SVG icons (zero WhatsApp trademark logos)
- **Analytics & Cookies**: No third-party tracking pixels or analytics scripts (no cookie consent banner required)

---

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Description | Default / Example |
| :--- | :--- | :--- |
| `PUBLIC_SITE_URL` | Canonical root domain for marketing site | `https://flexing.in` |
| `PUBLIC_APP_URL` | Destination URL for user dashboard logins and signups | `https://app.flexing.in` |
| `PUBLIC_CONTACT_ENDPOINT` | Optional webhook/API URL for contact form submissions | *(Empty, defaults to mailto: support email)* |

---

## Local Development & Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (http://localhost:4321)
npm run dev

# 3. Type check & production build (outputs to dist/)
npm run build

# 4. Preview static production build
npm run preview

# 5. Verify all internal links and anchor references
npm run check-links

# 6. Capture responsive page screenshots (1440px, 768px, 390px)
npm run screenshot
```

---

## Cloudflare Pages Deployment Steps

This site is optimized for one-click static deployment on **Cloudflare Pages**:

1. **Connect Repository**:
   - In Cloudflare Dashboard, navigate to **Compute (Workers & Pages)** > **Create application** > **Pages** > **Connect to Git**.
   - Select your repository (`whatsapp_saas_frontend`).

2. **Build Settings**:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `20.x` or higher (e.g. `NODE_VERSION=20.18.0` in Environment Variables)

3. **Environment Variables**:
   Add the following in **Settings > Environment variables** (Production):
   - `PUBLIC_SITE_URL`: `https://flexing.in`
   - `PUBLIC_APP_URL`: `https://app.flexing.in`
   - `PUBLIC_CONTACT_ENDPOINT`: *(optional)*

4. **Custom Domain & WWW Redirect**:
   - Go to **Custom domains** in your Cloudflare Pages project.
   - Add apex domain: `flexing.in`.
   - Add `www.flexing.in` and configure a Cloudflare Redirect Rule (or Bulk Redirect):
     - Source: `https://www.flexing.in/*`
     - Destination: `https://flexing.in/$1`
     - Status: `301 Permanent Redirect`.

---

## Pricing & Plan Configuration

All pricing figures, seat limits, message allowances, and modular add-ons are strictly controlled by a single source of truth in:

```typescript
src/data/plans.ts
```

- **Lifetime License**: $50 USD / ₹4,199 INR one-time payment.
- **Message Markup**: $0.00. Customers pay Meta directly at Meta's wholesale per-conversation rates.

---

## Legal & Compliance Disclaimers

- **Meta Non-Affiliation**:
  > *ONO is not affiliated with, endorsed by or sponsored by WhatsApp or Meta. WhatsApp is a trademark of Meta Platforms, Inc.*
- **Company**: ONO India Private Limited (Noida, Uttar Pradesh, India)
- **Support**: tinkal.nitmz@gmail.com
