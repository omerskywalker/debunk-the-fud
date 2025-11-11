# Design Guidelines: Debunk The FUD

## Design Approach
**Hybrid System Approach**: Drawing from Material Design's motion principles and Linear's clean typography, creating an educational resource that's both authoritative and engaging. The design emphasizes rapid information consumption with smooth, purposeful animations that enhance rather than distract.

## Core Design Principles
1. **Instant Clarity**: Critical content visible immediately, zero layout shift
2. **Progressive Disclosure**: Information reveals smoothly as users scroll
3. **Confident Authority**: Bold typography and clear hierarchy establish trust
4. **Frictionless Reading**: Optimized for quick scanning and comprehension

---

## Typography System

**Primary Font**: Inter (Google Fonts) - clean, highly legible
**Accent Font**: Space Mono (Google Fonts) - for the Satoshi quote, adds technical authenticity

**Hierarchy**:
- Hero Quote: Space Mono, text-sm to text-base, italic, medium weight
- Main Heading: Inter, text-6xl to text-8xl, extra bold (800)
- Subheading: Inter, text-xl to text-2xl, medium weight
- FUD Titles: Inter, text-2xl to text-3xl, bold (700)
- Body Text: Inter, text-base to text-lg, regular weight (400)
- Small Text: Inter, text-sm, regular weight

---

## Layout System

**Spacing Units**: Tailwind primitives of 4, 6, 8, 12, 16, 24
- Card padding: p-6 to p-8
- Section spacing: py-12 to py-24
- Gap between cards: gap-6 to gap-8
- Text spacing: space-y-4

**Container Strategy**:
- Max width: max-w-6xl for content
- Centered: mx-auto
- Side padding: px-4 to px-6

**Grid System**:
- Desktop: 2-column grid for FUD cards (grid-cols-2)
- Tablet: 2-column grid maintained (md:grid-cols-2)
- Mobile: Single column (grid-cols-1)

---

## Component Library

### Hero Section
- Full viewport height hero (min-h-screen) with centered content
- Satoshi quote positioned at top with subtle top border accent
- Main heading "DEBUNK THE FUD" as focal point
- Subheading "in under 5 minutes" beneath
- Smooth gradient background (vertical, subtle)
- Hero image: Abstract Bitcoin/blockchain visualization as background overlay with reduced opacity (20-30%)

### FUD Rebuttal Cards
- Rounded corners (rounded-2xl)
- Soft shadow (shadow-lg)
- Hover state: elevated shadow (shadow-2xl), subtle scale (scale-105)
- Clear visual separation between FUD claim (bold) and rebuttal
- Icon integration: Small checkmark or shield icon next to rebuttals
- Card background: Semi-transparent with backdrop blur

### Navigation (if added)
- Sticky header with blur background
- Minimal, centered logo/title
- Smooth hide/show on scroll

### Footer
- Simple, centered layout
- View counter display
- Links to resources
- Social sharing buttons

---

## Animation Strategy

### Initial Load Sequence (Fix FOUC)
1. **Immediate**: Critical CSS inlined, fonts preloaded
2. **Hero Quote**: Fade in from top (200ms delay)
3. **Main Heading**: Fade + scale in (400ms delay)  
4. **Subheading**: Fade in (600ms delay)
5. **Background**: Crossfade from solid to gradient (800ms)

### Scroll-Triggered Animations
- **FUD Cards**: Fade + slide up as they enter viewport
- **Stagger Effect**: Each card animates 100ms after previous
- **Threshold**: Trigger at 20% visibility

### Interaction Animations
- **Card Hover**: 
  - Transform: scale(1.02) with smooth transition (200ms)
  - Shadow: expand outward (300ms)
- **Text Selection**: Smooth highlight color transition
- **Link Hover**: Underline slide-in effect

### Performance Constraints
- All animations use transform and opacity only (GPU-accelerated)
- Duration: 200-400ms maximum
- Easing: ease-out for entrances, ease-in-out for interactions
- Respect prefers-reduced-motion (disable animations)

---

## Visual Effects

### Background Treatment
- Gradient overlay on hero (45deg angle)
- Subtle grain texture overlay (5% opacity)
- Blur effect on card backgrounds (backdrop-blur-md)

### Depth & Elevation
- Card shadows: 3-tier system (base, hover, active)
- Layering: Clear z-index hierarchy
- Borders: 1px subtle borders on cards

### Micro-interactions
- Button states: Slight brightness shift on hover
- Icon animations: Rotate/scale on card expand
- Text glow: Subtle text-shadow on headings

---

## Accessibility Requirements

- Focus indicators: 2px offset outline
- Keyboard navigation: Full tab order support
- Color contrast: Minimum 4.5:1 for body text, 3:1 for large text
- Animation toggle: Respect prefers-reduced-motion
- Touch targets: Minimum 44×44px for interactive elements
- Screen reader: Semantic HTML with proper ARIA labels

---

## Images

**Hero Background Image**:
- Description: Abstract digital network/blockchain visualization with orange/amber tones suggesting Bitcoin
- Placement: Full hero section background, positioned center
- Treatment: Overlay with 70-80% opacity gradient, subtle blur
- Optimization: WebP format, lazy load below fold

**Card Icons** (optional enhancement):
- Small SVG icons from Heroicons
- Shield icon for rebuttals
- Lightning bolt for speed-related points
- Scale for value points

---

## Performance Optimization Guidelines

### Critical First Paint
1. Inline critical CSS for hero section
2. Preload Inter and Space Mono fonts
3. Use font-display: swap
4. Defer non-critical JavaScript
5. Optimize hero image: compressed WebP with fallback

### Resource Loading
- Preconnect to Google Fonts
- Lazy load below-the-fold cards
- Use CSS containment on card grid
- Implement skeleton loaders for async content

### Technical Specifications
- Initial render budget: <1s for hero
- Total page load: <2s on 3G
- Animation frame rate: 60fps minimum
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1