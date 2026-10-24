# Production Dependencies & License Ledger

This document tracks all runtime and framework dependencies added to the ONO marketing website, including package sizes, licenses, and performance footprint.

## Core Runtime & Framework Additions

| Package | Version | License | Gzip Bundle Footprint | Purpose & Justification |
| :--- | :--- | :--- | :--- | :--- |
| `@astrojs/react` | `^7.1.1` | MIT | ~1.5 KB | Official Astro integration enabling isolated React island hydration. |
| `react` | `^19.3.1` | MIT | Combined with react-dom | Core library for interactive state (tabs, accordion, pricing toggle, modal drawer). |
| `react-dom` | `^19.3.1` | MIT | 64.6 KB (shared runtime) | DOM rendering and portal engine for interactive islands. Shared across all islands. |
| `@radix-ui/react-tabs` | `^1.2.1` | MIT | Installed, available | Primitives for accessible WAI-ARIA tab navigation. |
| `@radix-ui/react-accordion` | `^1.3.1` | MIT | Installed, available | Primitives for accessible WAI-ARIA accordion. |
| `@radix-ui/react-dialog` | `^1.3.1` | MIT | Installed, available | Primitives for accessible modal dialogs and drawers. |
| `@types/react` | `^19.3.0` | MIT | Dev dependency (0 B in prod) | TypeScript type definitions for React. |
| `@types/react-dom` | `^19.3.0` | MIT | Dev dependency (0 B in prod) | TypeScript type definitions for React DOM. |

---

## Island Bundle Breakdown (Home Page Production Build)

All components are hydrated via Astro's partial hydration directives (`client:visible` and `client:idle`). None block initial static HTML paint.

| Island Component | File | Hydration Trigger | Gzip Size | Headless / Accessibility Architecture |
| :--- | :--- | :--- | :--- | :--- |
| **Shared React Runtime** | `client.*.js` | On first island hydration | 64.60 KB | Shared React 19 runtime chunk reused by all hydrated islands. |
| **HeroSampleConversations** | `src/islands/HeroSampleConversations.tsx` | `client:idle` | 1.03 KB | Subtle animated floating cards with "Sample data" badges. Pure CSS keyframes. |
| **MobileNavDrawer** | `src/islands/MobileNavDrawer.tsx` | `client:idle` | 1.46 KB | Accessible drawer with portal, complete focus trap, and Escape key dismissal. |
| **TabbedTour** | `src/islands/TabbedTour.tsx` | `client:visible` | 2.29 KB | WAI-ARIA tablist/tabs with full arrow key, Home, and End keyboard navigation. |
| **PricingCard** | `src/islands/PricingCard.tsx` | `client:visible` | 2.77 KB | Currency toggle (USD $50 / INR ₹4,199 approximate) with accessible radio group. |
| **FaqAccordion** | `src/islands/FaqAccordion.tsx` | `client:visible` | 0.93 KB | Accessible region with smooth GPU-accelerated CSS grid transition. |
| **Template Editor Script** | `TemplateMockup.*.js` | Native | 2.67 KB | Interactive client preview in template mockup. |

**Total JavaScript on Home (All Islands Hydrated):** **80.42 KB gzipped**  
**Performance Budget:** **90.00 KB gzipped**  
**Remaining Headroom:** **+9.58 KB gzipped (PASSED)**

---

## Component Kit Verification (Zero Unvetted Content)

- **Third-Party Component Kits:** None used. No Shadcn, no pre-packaged commercial UI templates that bundle fake testimonials, customer logos, or unverified star ratings.
- **Strict Compliance:** All mockups are original HTML/CSS implementations grounded in the real Django product structure, explicitly labeled with `"Sample data"`.
