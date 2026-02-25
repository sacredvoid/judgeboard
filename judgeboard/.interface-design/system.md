# JudgeBoard Design System

## Direction
Dark-hero tech authority. Deep slate header creates drama and contrast. White cards on light canvas feel crisp. Violet brand conveys expertise/judgment. Amber accents create energy and urgency. Feels like a premium professional tool, not a boring directory.

## Signature
Left-side topic bar — a 4px vertical colored accent on each card's left edge. Combined with the dark hero, creates strong visual hierarchy and makes topic scanning instant.

## Palette

### Surfaces
- Canvas: `#FAFAF9` (warm off-white)
- Surface: `#FFFFFF` (pure white cards)
- Surface dim: `#F5F5F4` (footer, callout boxes)
- Hero: `#0F172A` (deep slate — header + hero)
- Hero subtle: `#1E293B` (hero interactive states)

### Ink (text hierarchy)
- Primary: `#1E293B` (slate-800)
- Secondary: `#475569` (slate-600)
- Muted: `#94A3B8` (slate-400)
- Faint: `#CBD5E1` (slate-300)
- Inverse: `#F8FAFC` (white-on-dark)

### Borders
- Rule: `#E2E8F0`
- Rule soft: `#F1F5F9`

### Brand — deep violet
- Primary: `#7C3AED` (Apply buttons, links, badges)
- Hover: `#6D28D9`
- Deep: `#5B21B6`
- Light bg: `#EDE9FE`

### Action — warm amber
- Primary: `#F59E0B` (header CTA, hero accent text)
- Hover: `#D97706`
- Light bg: `#FEF3C7`

### Topic Pin Colors
- AI: `#8B5CF6` (violet-500)
- Web3: `#F97316` (orange-500)
- Health: `#10B981` (emerald-500)
- Social Impact: `#06B6D4` (cyan-500)
- Security: `#EF4444` (red-500)
- Education: `#F59E0B` (amber-500)
- General: `#94A3B8` (slate-400)

### Semantic
- Positive: `#059669` / bg `#ECFDF5`
- Caution: `#D97706` / bg `#FFFBEB`
- O-1A badge: violet on violet-light
- Unverified: orange on orange-light

## Depth Strategy
Light shadow on filter bar (`shadow-sm`). Cards use subtle shadow on hover (`shadow-[0_2px_12px_rgba(0,0,0,0.06)]`). Borders define structure. Dark hero creates the primary depth contrast.

## Typography
- Family: DM Sans
- Weights: 400 (body), 500 (metadata labels), 600 (semibold UI), 700 (bold headlines)
- Headlines: Bold, tight tracking
- Body: Regular, relaxed leading
- Labels: Muted ink, normal weight

## Spacing
- Base: 4px
- Card padding: 20px (p-5)
- Section gaps: 20px (space-y-5)
- Card grid: 16px gap
- Max container: 1152px (max-w-6xl)

## Border Radius
- Cards: 12px (rounded-xl)
- Buttons/inputs: 8px (rounded-lg)
- Badges: 6px (rounded-md)

## Key Patterns

### Dark Hero
- `bg-hero` (#0F172A) spans header + hero section
- White bold headline, amber accent text for emphasis
- O-1A callout uses hero-subtle bg with a violet dot indicator
- Directory section uses negative margin (-mt-4) to overlap hero edge

### Card
- Left topic bar (4px wide, full height)
- Flex layout: bar + content
- Internal separator before CTA footer
- Violet Apply button
- Hover: subtle box shadow appears

### Header
- Dark bg, continuous with hero
- Logo: white + amber "Board"
- Amber CTA button (contrasts against dark)

### OG Image
- Dark slate bg matching hero
- Topic color bar strip across top
- White + amber logo treatment
