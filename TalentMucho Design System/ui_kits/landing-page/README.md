# TalentMucho — Landing Page UI Kit

A high-fidelity interactive recreation of the TalentMucho marketing website.

## What's included

| File | Description |
|---|---|
| `index.html` | Full landing page prototype — loads all components |
| `Navbar.jsx` | Sticky header with scroll detection, nav links, CTA pill |
| `Hero.jsx` | Full-screen hero with diagonal grid pattern and floating stat cards |
| `ServicesSection.jsx` | Bento grid with 5 service cards (VA, Branding, Marketing, Web, AI) |
| `ProcessSection.jsx` | Dark 4-step process section |
| `TestimonialsSection.jsx` | 3-column testimonial wall (9 cards) |
| `CTASection.jsx` | Dark CTA section + minimal footer |

## Usage

Open `index.html` directly in a browser. No build step required — uses React + Babel CDN.

## Sections covered

1. **Navbar** — transparent → white on scroll, pill CTA
2. **Hero** — diagonal cross-grid bg, person image, floating stat cards (10+ years, 200+ placed, 98% retention)
3. **Clients** — pill tags + italic quote
4. **Who We Are** — dark section with bordered highlight cards
5. **Services** — 12-col bento grid; VA large, Branding dark, Marketing/Web medium, AI full-width
6. **Process** — dark section, 4 steps with numbered badges and connecting line
7. **Testimonials** — 3-column masonry grid, 9 cards
8. **CTA + Footer** — dark, cross-grid pattern, inverse CTA button

## Design tokens used

All colors, spacing, and type reference `/colors_and_type.css` at the root.

- **Primary font:** Cormorant Garamond (serif) — headings, display
- **Body font:** Manrope — UI, body, buttons
- **Primary accent:** clay-500 `#7D6B5A`
- **Dark bg:** charcoal-900 `#2A2520`
- **Page bg:** beige-50 `#FAF8F5`

## Notes

- Uses `../../assets/` for images (logo, hero)
- No Tailwind — uses inline styles and a small CSS block
- All hover states are JavaScript-driven (onMouseEnter/Leave) for compatibility
- Not production code — cosmetic recreation for design reference
