# Mobile Responsive Design — JudgeBoard

**Date:** 2026-02-26
**Target:** 375px minimum (iPhone SE/13 mini)
**Approach:** Targeted responsive fixes to existing components

## Components

### 1. FilterBar
- Each select wrapper gets `w-full` on mobile, auto on `sm:`
- Selects fill available width when stacked vertically

### 2. HackathonCard
- Metadata grid: `grid-cols-1 sm:grid-cols-2` (stack on mobile)
- Card padding: `p-4 sm:p-5`
- Footer: add `flex-wrap` so Apply button wraps below deadline text
- Header badges: wrap under title on very tight layouts

### 3. About Page
- Submit email CTA: `w-full sm:w-auto` with centered text on mobile

### 4. Safe Area / Viewport
- Add `viewport-fit=cover` to viewport meta
- Footer gets safe-area-inset-bottom padding

### 5. Loading Skeleton
- Match card padding and grid changes from HackathonCard

## Constraints
- Tailwind-only changes, no new components or JS logic
- Desktop design unchanged
- All existing accessibility features preserved
