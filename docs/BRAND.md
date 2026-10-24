# ONO Brand Design System & Specifications

Version: 2.0 (Enterprise Redesign)
Status: Approved Reference

---

## 1. Brand Strategy & Core Pillars

### 1.1 Brand Identity & Concept
- **Brand Name**: **ONO**
- **Concept**: A palindrome. The name reads identically forwards and backwards, embodying conversation in both directions, visual symmetry, and two entities connected seamlessly through reliable communication.
- **Positioning Statement**: *"Calm, reliable WhatsApp operations for growing teams."*
- **Target Audience**: Small and mid-size businesses, operational managers, customer service leads, and sales teams. India-first, designed for global reliability.

### 1.2 Personality & Tone
- **Tone**: Confident, clear, trustworthy, precise, and understated. Never hyped, pushy, or exaggerated.
- **Voice Guidelines**:
  - Plain-spoken, active verbs, short declarative sentences.
  - Sentence-case headings (e.g., "Every customer conversation on WhatsApp, in one shared inbox", not Title Case shouting).
  - Absolutely zero exclamation marks (`!`).
- **Banned Words & Phrases**:
  - `seamless`
  - `supercharge`
  - `revolutionary`
  - `game-changing`
  - `world-class`
  - `unlock`
  - `empower`
  - `leverage`
  - `cutting-edge`
  - `next-gen`
  - `"all-in-one"`

### 1.3 Core Copy Anchors
- **Hero Headline**: "Every customer conversation on WhatsApp, in one shared inbox."
- **Hero Subhead**: "ONO helps your team connect a business number, send template campaigns to contacts who opted in, and reply together. Pay once. No markup on message fees."
- **Primary CTA**: "Get lifetime access"
- **Secondary CTA**: "See how it works"
- **Meta Platform Disclaimer**: "Built on Meta's WhatsApp Business Platform (Cloud API)."

---

## 2. Visual Identity & Mark

### 2.1 Logo Construction (The O-N-O Geometric Link)
- **Concept**: Two symmetrical circular nodes joined by a balanced horizontal connection bridge—representing two participants in dialog, data flowing reliably between systems, and the literal letterforms of O-N-O.
- **Rules**:
  - **NEVER** use speech bubbles, phone receivers, green checkmark circles, or anything mimicking the WhatsApp trademark.
  - Remove all taglines like "WHATSAPP SAAS". Clean, pure geometric wordmark only.
- **Lockup Variations**:
  1. **Horizontal**: Mark on the left + geometric bold wordmark `ONO` on the right.
  2. **Stacked**: Mark centered above wordmark.
  3. **Symbol Only**: For app icons, favicons, and minimal chrome.
  4. **Reversed (Dark)**: Crisp white mark and wordmark with `brand-500` accents on dark `ink-950` backgrounds.

---

## 3. Design Tokens & Color Palette

### 3.1 Neutral Scale (Ink)
| Token | Hex | Role | Contrast on White |
| :--- | :--- | :--- | :--- |
| `ink-950` | `#07111F` | Deep dark backgrounds (product tour, footer, CTA) | 18.5:1 (AAA) |
| `ink-900` | `#0B1B2E` | Primary headings, dark card surfaces | 16.2:1 (AAA) |
| `ink-700` | `#243447` | Secondary text, dark borders | 9.8:1 (AAA) |
| `ink-500` | `#5B6B7C` | Muted descriptions, metadata, labels | 4.9:1 (AA) |
| `ink-300` | `#B8C2CC` | Placeholder text, disabled borders | 1.8:1 |
| `ink-100` | `#E8ECF0` | Subtle hairline borders, card strokes | 1.2:1 |
| `ink-50`  | `#F5F7F9` | Light section backgrounds, input fills | 1.05:1 |
| `white`   | `#FFFFFF` | Primary page & card backgrounds | N/A |

### 3.2 Primary Brand Scale (Teal Green)
| Token | Hex | Role |
| :--- | :--- | :--- |
| `brand-700` | `#0B6B52` | Button hover states, high-contrast text |
| `brand-600` | `#0E8A68` | Primary button fill, active states |
| `brand-500` | `#12A57D` | Main brand accent, icons, badges |
| `brand-100` | `#D9F3EA` | Badge backgrounds, highlighted rows |
| `brand-50`  | `#EEF9F5` | Subtle tint backgrounds |

### 3.3 Signal Accent
| Token | Hex | Role |
| :--- | :--- | :--- |
| `signal` | `#D7F75B` | Tiny micro-highlights (under 2% of page area; e.g. status dots or chip accents) |

### 3.4 Semantic Status Tokens
- `success`: `#12A57D` (Delivered, Approved, Active)
- `warning`: `#F5A524` (Pending review, Needs attention)
- `danger`:  `#E5484D` (Failed, Opted out, Error)
- `info`:    `#3B82F6` (Webhook payload, API doc)

---

## 4. Typography System

Self-hosted locally using `@fontsource` packages. Zero external requests to Google Fonts or CDNs.

- **Display & Headings**: `Manrope`, weights 700 and 800.
  - Tracking: `-0.02em` (`tracking-tight`)
  - Fluid sizing: `clamp()` rules for clean responsive scaling without sudden jumps.
- **Body & Interface**: `Inter`, weights 400, 500, and 600.
  - Sizing: 17px to 18px on desktop, 1.6 line height for effortless readability.
- **Data, Metrics & Code**: `JetBrains Mono`, weights 500 and 700.
  - Tabular numbers for live stats, timestamps, API endpoints, and payload inspectors.

---

## 5. Layout, Spacing & Depth

- **Spacing Grid**: 8px base rhythm.
- **Section Spacing**: Generous vertical rhythm—96px to 128px on desktop (`py-24` to `py-32`), 64px on mobile (`py-16`).
- **Max Content Width**: 1200px (`max-w-7xl` or `max-w-6xl` constrained container).
- **Corner Radii**:
  - `rounded-xl` (12px): Standard cards, inputs, buttons.
  - `rounded-2xl` (16px): Large product frames, modals, feature callouts.
  - `rounded-full`: Status chips, pill badges.
- **Borders & Shadows**:
  - Hairline 1px borders in `ink-100` on light surfaces; `ink-700/60` on dark surfaces.
  - Subtle, layered natural shadows (`shadow-sm`, `shadow-md` with low opacity `rgba(7, 17, 31, 0.04)`). Never heavy black drop-shadows.
- **Icons**:
  - Consistent 1.5px stroke outline icons (Lucide icon set).
  - Zero emojis in UI chrome, navigation, or buttons.
