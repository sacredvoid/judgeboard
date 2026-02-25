# JudgeBoard Design System

## Direction
Professional bulletin board — the backstage of hackathons. Warm, institutional, trustworthy. Not startup playful, not enterprise cold. Feels like a well-organized career center posting wall.

## Signature
Colored topic pin — a 4px top-edge accent on each card, colored by primary topic. Cards feel pinned to the board, not floating.

## Palette

### Surfaces
- Canvas: `#FAF9F7` (warm off-white)
- Surface: `#FFFEFB` (paper-white cards)
- Surface raised: `#FFFFFF`

### Ink (text hierarchy)
- Primary: `#2C2A25` (warm near-black)
- Secondary: `#6B6660`
- Muted: `#9C9590`
- Faint: `#C8C3BD`

### Borders
- Rule: `#E8E4DF`
- Rule soft: `#F0ECE7`

### Accent
- Primary: `#B45309` (warm amber)
- Hover: `#92400E`
- Light bg: `#FEF3C7`
- Text on light: `#78350F`

### Topic Pin Colors
- AI: `#7C3AED`
- Web3: `#EA580C`
- Health: `#059669`
- Social Impact: `#0284C7`
- Security: `#DC2626`
- Education: `#D97706`
- General: `#A8A29E`

### Semantic
- Positive: `#15803D` / bg `#F0FDF4`
- Caution: `#A16207` / bg `#FEFCE8`

## Depth Strategy
Borders only. No shadows. Warm-toned borders at low contrast. Higher surfaces use border to separate, not color shift.

## Typography
- Family: DM Sans (Google Fonts)
- Weights: 400, 500, 600, 700
- Headlines: Bold, tight tracking (`tracking-tight`)
- Body: Regular weight, relaxed leading
- Labels/metadata: Medium weight, muted ink

## Spacing
- Base unit: 4px
- Component padding: 20px (p-5)
- Section gaps: 20px (gap-5)
- Card grid: 16px gap (gap-4)
- Max container: 1024px (max-w-5xl)

## Border Radius
- Cards: 8px (rounded-lg)
- Buttons/inputs: 6px (rounded-md)
- Badges: 6px (rounded-md)
- Consistent — no mixing sharp and round

## Key Patterns

### Card (HackathonCard)
- Colored top pin (4px, topic color)
- Surface bg, rule border
- Internal separator: `border-t border-rule-soft` before CTA row
- Expired: `opacity-50`

### Badges
- O-1A: amber bg (#FEF3C7), dark amber text (#92400E)
- Unverified: orange bg (#FFF7ED), dark orange text (#9A3412)
- Topics: 10% opacity of pin color as bg, pin color as text

### Filters
- Styled selects in a row (stacked on mobile)
- Surface bg, rule border, accent focus ring
- 44px min height for touch targets

### Hero
- Type-forward, no gradient
- Surface bg with bottom border
- Left-aligned headline, max-w-5xl
