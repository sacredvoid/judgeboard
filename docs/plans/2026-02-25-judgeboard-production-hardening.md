# JudgeBoard Production Hardening — Design

**Date:** 2026-02-25
**Status:** Approved

## Scope

Take JudgeBoard from 5.5/10 to production-ready. Focus on error handling, accessibility, mobile responsiveness, SEO, and security headers.

## Changes

### 1. Error & Edge Cases
- `app/error.tsx` — error boundary with branded fallback
- `app/not-found.tsx` — custom 404
- `app/loading.tsx` — skeleton cards

### 2. Accessibility
- Labels for all filter dropdowns
- `aria-live="polite"` on result count
- Skip-to-content link
- Descriptive `aria-label` on Apply links
- `prefers-reduced-motion` on transitions

### 3. Mobile Responsive
- Hamburger menu for small screens
- FilterBar vertical stack on mobile
- Padding fix (px-4 sm:px-6)
- 44px minimum touch targets

### 4. SEO
- OG image via `opengraph-image.tsx`
- JSON-LD structured data (Organization + WebSite)
- Canonical URLs

### 5. Security Headers
- X-Frame-Options, X-Content-Type-Options, Referrer-Policy, CSP
- poweredByHeader: false

### 6. Cleanup
- Replace placeholder Google Form links with /about anchor
- Remove unused default assets
- Extract shared date utilities

## Out of Scope
- Analytics, dark mode, runtime schema validation, PWA manifest, per-hackathon detail pages, environment variables
