v0 UI prompt v3 for “Creaciones del Mago” — context-adapted to current build

Use this in v0.app. Continue from the existing codebase; generate only what’s missing or requires improvement per acceptance criteria. Don’t recreate components already implemented unless specified below.

Current agent context (already built per last run)
- Core layout with Header/Nav and Footer (responsive, violet/cyan theme).
- Homepage with dark, magical Hero (animated stars, gradient text, strong CTAs), Services highlights, Featured products (with ProductCard), Testimonials, Newsletter CTA.
- Catalog with responsive grid (and list view), advanced filters (category, price, material, color, availability), sorting, mobile drawer, empty state.
- Product detail pages with media gallery, options, tabs (details/specs/reviews/shipping), customization hooks.
- Contrast fixes applied: corrected CSS variables to avoid white‑on‑white, hero uses solid dark base; outline buttons improved for contrast.
- Tech in place: Next.js + shadcn/ui, TypeScript, Tailwind; semantic color classes; responsive design.

Do not re‑implement (unless a requirement below forces an edit)
- Header, Footer, Hero section, ProductCard, Catalog filters/grid, basic PDP layout.
- Keep existing visual style and tokens; only adjust to meet a11y/perf/SEO/analytics acceptance.

System
- Brand voice: friendly, clever, whimsical but professional.
- Use design tokens only (no raw hex in components). Enforce WCAG 2.2 AA via APCA; meet contrast per state.
- Layout: 12‑col grid, container 1200px, mobile‑first; avoid layout shifts.
- Performance budgets (4G/low‑end): LCP ≤ 2.5s, CLS ≤ 0.1, TBT ≤ 200ms.
- i18n: Default Spanish (voseo), English secondary; currency UYU; locale slugs + hreflang; locale switcher.
- Uruguay commerce: Mercado Pago first; credit/debit/cash networks; consider installments. Shipping via DAC/UES + Montevideo pickup.
- Privacy/security: consent banner; pre‑signed uploads; validation and good error states.

Developer
- Stack: Next.js App Router, Tailwind, shadcn/ui, Lucide. TypeScript strict.
- State: Zustand. Forms: React Hook Form + Zod. Images: next/image.
- Observability: Sentry hooks for errors; alert on failed forms.
- Analytics: GA4 + Plausible (dual). Events: view_item, add_to_cart, begin_checkout, purchase, generate_lead, file_upload, whatsapp_click.
- Testing: unit (components), integration (filters/cart), e2e (Playwright), visual regression (Chromatic/Percy), a11y (axe).

Design tokens (reference by token, not hex in code)
```json
{
  "colors": {
    "primary": "#7C3AED",
    "onPrimary": "#FFFFFF",
    "accent": "#06B6D4",
    "backgroundHero": "#0B0B0F",
    "background": "#0F172A",
    "surface": "#111827",
    "surfaceHover": "#1F2937",
    "border": "#334155",
    "muted": "#94A3B8",
    "success": "#16A34A",
    "warning": "#F59E0B",
    "error": "#EF4444"
  },
  "radii": { "sm": 6, "md": 10, "lg": 16, "full": 9999 },
  "spacing": { "base": 4 },
  "elevation": { "card": "0 1px 2px rgba(0,0,0,.2)" },
  "effects": { "glowPrimary": "blur(32px) 20%" },
  "typography": { "font": "Inter, system-ui, sans-serif", "scale": "Tailwind defaults" }
}
```

Immediate next tasks (implement now)
1) Custom Order (multi‑step) with secure file uploads
- Steps: Contact → Project details → Files (STL/OBJ/STEP up to 200MB) → Timeline/Budget → Review/Submit.
- Uploads: pre‑signed (S3/GCS), MIME validation, progress, resumable, clear limits and allowed types; error and retry states.
- WhatsApp quick‑contact button; fallback if WhatsApp unavailable.
- Acceptance: schema‑validated with Zod, accessible labels/errors, keyboard flow ok, analytics generate_lead + file_upload fired.

2) Consent banner (privacy)
- Minimal, accessible consent with categories; persists choice; no analytics before consent.
- Acceptance: keyboard accessible, stored preference respected, shows on first visit only.

3) Analytics wiring
- Utilities to fire GA4 + Plausible events. Wire: view_item (PDP), add_to_cart, begin_checkout, purchase (stub), generate_lead (Custom Order submit), file_upload (upload success), whatsapp_click.
- Acceptance: events fire with payload {id, name, price, currency, category} where applicable.

4) SEO and JSON‑LD
- Per page: unique title/description, canonical, Open Graph/Twitter.
- JSON‑LD: Product/Offer/Review on PDP; Article on blog posts; LocalBusiness on Contact/About.
- Acceptance: metadata present and valid, sitemaps + robots placeholders added.

5) Services page depth
- Add mini galleries, pricing model hints, FAQs (materials, durability, max size, finish, painting).
- Acceptance: accessible accordions, images optimized, links to Custom Order.

6) Blog (list + post)
- List grid with category pill/date/excerpt; Post with TOC, share, related.
- Acceptance: Article JSON‑LD, readable typography, i18n ready.

7) Policy pages
- Shipping, Returns, Privacy, Terms.
- Acceptance: linked in Footer; content placeholders present.

8) i18n scaffolding
- Locale switcher; locale‑aware slugs; hreflang.
- Acceptance: Spanish default UI text (voseo); English variant stubs.

9) A11y pre‑flight
- Skip‑link, semantic landmarks, correct focus order, motion‑reduction, form error summaries.
- Acceptance: axe passes; keyboard traps avoided; contrast AA per state.

10) Performance guardrails
- Code‑split heavy components (carousel, gallery); image sizes responsive; font strategy swap.
- Acceptance: Lighthouse CI budgets met (LCP ≤ 2.5s, CLS ≤ 0.1, TBT ≤ 200ms) on sample data.

Uruguay e‑commerce practicalities (UI stubs)
- Payments: Mercado Pago entry points and UI stubs; installments copy.
- Shipping: DAC/UES options, delivery windows, Montevideo pickup info.
- Legal: invoice/tax options and fan‑art/IP policy surfaced near checkout.

Pages and key sections (only build missing parts)
- Home: leave as is unless needed for consent/analytics hooks.
- Catalog: keep existing; add analytics bindings and SEO.
- Product Detail: keep; add JSON‑LD + analytics events.
- Services: deepen with galleries and FAQs.
- Custom Order: implement multi‑step flow with uploads.
- Blog list/post: implement.
- Policies: implement pages.
- About/Contact: add LocalBusiness JSON‑LD and WhatsApp CTA if missing.

Prompt guardrails
- Never hard‑code colors/spacings; use tokens.
- Keep CTAs above the fold; sticky WhatsApp CTA on mobile.
- Maintain contrast; don’t regress hero/outline button fixes.
- Output only new/changed components/pages for this iteration.

Analytics event example
```json
{
  "name": "add_to_cart",
  "params": {
    "item_id": "camping-hook-001",
    "item_name": "Ultralight Camping Hook",
    "price": 450,
    "currency": "UYU",
    "category": "Camping & Outdoor"
  }
}
```

Sample product (mock data)
```json
{
  "id": "camping-hook-001",
  "title": "Ultralight Camping Hook",
  "price": 450,
  "currency": "UYU",
  "rating": 4.7,
  "category": "Camping & Outdoor",
  "tags": ["lightweight", "durable"],
  "images": ["/images/products/hook-1.jpg", "/images/products/hook-2.jpg"],
  "shortDescription": "Strong, lightweight hook printed in PETG for your next trip.",
  "specs": {"material": "PETG", "weight": "18g", "dimensions": "60×40×8mm"},
  "stockStatus": "in_stock"
}
```

Policies links
- /policies/shipping, /policies/returns, /policies/privacy, /policies/terms

Brand personality
- Friendly, clever, slightly whimsical (“magic” theme) yet professional and trustworthy.