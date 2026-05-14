# TalentMucho Design System

> **Tagline:** "You've worked too hard to keep doing it alone."
> **URL:** https://www.talentmucho.com

---

## Company Overview

**TalentMucho** is a boutique remote staffing agency + digital services studio. Headquartered in **Torrevieja, Spain** (previously Madrid) with a talent operations base in **Cagayan de Oro City, Philippines**, they serve English-speaking founders, coaches, agencies, and growing businesses globally.

Their unique hybrid model combines:
- **Virtual Assistants** — Philippines-sourced, AI-trained, skills-matched
- **Personal Branding** — content strategy, thought leadership, audience growth
- **Marketing & Strategy** — social media, SEO, brand positioning
- **Websites & Pages** — conversion-focused design on GoHighLevel/custom stacks
- **AI & Tech Training** — Claude AI, automation platforms, productivity systems for teams

**Positioning:** "Most agencies stop at 'here's your VA.' We build around your outcomes."

**Methodology (Educate. Build. Operate.):**
1. **Discovery Call** — learn goals + gaps
2. **Custom Solution** — right mix of talent + services
3. **Build & Launch** — VA, systems, digital assets go live
4. **Optimize & Scale** — long-term partnership

**Pricing range:** ~$300/month (5 hrs/week VA) → $999/month (Ultimate Growth Bundle)

**Social:** WhatsApp (+34 657 752 940), Facebook, Instagram, TikTok, Threads — all @talentmucho

---

## Sources

| Source | Path/URL |
|---|---|
| Landing page codebase (Next.js 15) | `talent-mucho-landing-page-main/` |
| Live website | https://www.talentmucho.com |
| Marketing audit | `talent-mucho-landing-page-main/MARKETING-AUDIT.md` |
| Revamp plan | `talent-mucho-landing-page-main/revamp-plan.md` |

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Confident but not arrogant.** The brand is sure of what it does, but never boastful.
- **Founder-to-founder.** Speaks directly to busy founders and solo operators who are overwhelmed. Uses "you" and "your" liberally.
- **Outcome-first.** Every line leads with the benefit, not the feature. "Your Time Back" not "Time Management."
- **Warm authority.** Knowledgeable and direct, but with genuine care underneath. "Not transactional. Never rushed."
- **No jargon.** Plain language. Straightforward sentences.

### Casing & Formatting
- **Headings:** Title case for h1/h2 section titles. Sentence case for subheads.
- **Eyebrow labels:** ALL-CAPS with wide letter spacing (tracking-[0.25em]). Short — 2–3 words max. E.g. "What We Offer", "How It Works", "Our Philosophy"
- **CTAs:** Outcome-focused, not action-focused. ✓ "Get Your Free VA Match" ✗ "Submit Form"
- **Italic emphasis:** Used deliberately for emotional/key words inline: *Stress*, *human*, *Scalable*
- **Em dashes:** Used for rhythm breaks in headings: "Simple. Strategic. *Scalable.*"

### Specific Copy Examples
- Hero H1: "Your Business Deserves a Team That Uses AI"
- CTA: "Book Your Free Call — Get a Custom Staffing Plan"
- Section quote: "Most agencies stop at 'here's your VA.' We build around your outcomes."
- Testimonial intro: "If you're juggling everything yourself, we're here for you."
- Footer CTA headline: "Scale Without the *Stress.*"
- Philosophy: "Hiring should feel *human*"
- Sub-tagline: "No commitment required · 30-minute session"

### Punctuation & Style
- Curly quotes: `"` and `"`, `'` and `'`
- Middle dot separator: ` · ` (U+00B7)
- Ampersands used in service names: "Marketing & Strategy", "Websites & Pages"
- Numbers written numerically: "10+ Years Experience", "200+ Professionals Placed"
- No emoji in UI (occasional use in testimonials only: ❤️)

### I vs. You
- **You-first.** The business speaks "about you" the client, not "about us."
- Founder/brand presence is implied, not centered. No "I" copy on the site.

---

## VISUAL FOUNDATIONS

### Color System
Warm earth-tone spectrum — cream whites through clay browns to deep charcoal. No bright primaries, no cool grays.

| Name | Hex | Role |
|---|---|---|
| beige-50 | `#FAF8F5` | Page background |
| beige-100 | `#F5F0E8` | Section alt background |
| beige-200 | `#EBE4D8` | Borders, card outlines |
| beige-300 | `#DED4C4` | Strong borders, grid pattern |
| taupe-400 | `#9C8B7A` | Muted text, secondary labels |
| clay-500 | `#7D6B5A` | **Primary brand accent** — CTAs, icons, links |
| clay-600 | `#665847` | Hover state for clay-500 |
| espresso-700 | `#524639` | Dark body alt |
| espresso-800 | `#3D352E` | Primary body text |
| charcoal-900 | `#2A2520` | Headings, dark section backgrounds |

**Color vibe of imagery:** Warm, slightly desaturated. People photography with natural lighting. Service images are editorial-style on neutral/beige backgrounds.

### Typography
- **Serif display:** Cormorant Garamond — `font-weight: 300` (light) is the default for all headings. Used for all h1/h2/h3, section numbers, large display text.
- **Sans-serif body:** Manrope — used for all body copy, eyebrow labels, buttons, nav, UI elements.
- **Italic in clay-500:** A signature brand move — key emotional words in headings are wrapped in `<em>` with clay-500 color and italic style. E.g. "Scale Without the *Stress.*"
- **No monospace** used in the product UI.

### Section Backgrounds
Sections strictly alternate between three backgrounds:
1. `beige-50` (#FAF8F5) — lightest, "resting" sections
2. `beige-100` (#F5F0E8) — soft warm alt (hero, services, testimonials)
3. `charcoal-900` (#2A2520) — dark "dramatic" sections (process, who-we-are, footer/CTA)

Dark sections always include:
- Soft radial glow orbs: `bg-clay-500/8` or `bg-espresso-700/15`, blurred 80–120px
- A very subtle diagonal cross-grid pattern at ~3% opacity

### Background Patterns
- **Diagonal cross-grid:** Two `linear-gradient` at +45deg and –45deg, 40–50px grid size, using beige-300 at low opacity. Applied to hero and CTA dark sections with a radial mask fading to transparent at edges.
- **Blur glow orbs:** Absolute-positioned circles, `rounded-full`, very large (400–700px), colors from clay-500 or espresso-700 at 8–15% opacity, filtered with `blur(80–120px)`. Pure decoration — never interactive.
- **No images used as section backgrounds.** All backgrounds are CSS-only.

### Cards
- **Standard card:** White bg, `border-beige-200`, `rounded-2xl` (1.5rem), `shadow-sm`, `hover:shadow-md hover:-translate-y-1`, `transition-all duration-300`
- **Bento/service card:** White bg, `rounded-[2.5rem]` (very rounded), `border-beige-200`, `shadow-sm`, `hover:shadow-elegant hover:-translate-y-1`, `transition-all duration-700`
- **Dark card:** `bg-charcoal-900`, text white, with `bg-clay-500/10` gradient overlay, `hover:border-clay-500/50`
- **Philosophy card:** White bg, `rounded-2xl`, thin clay-500 divider line (`w-8 h-px bg-clay-500`) above heading, large faded numeral in bg

### Buttons
- **btn-primary:** `bg-clay-500`, `text-beige-50`, `rounded-lg` default / `rounded-full` pill variant, `shadow-md`, hover: `bg-clay-600 shadow-lg -translate-y-0.5`
- **btn-dark:** `bg-charcoal-900`, `text-beige-50`, `rounded-full`, hover: `bg-clay-600`
- **btn-secondary:** Transparent, `border-clay-500`, `text-clay-500`, hover: fills clay-500 with white text
- **CTA inverse:** On dark sections, uses `bg-beige-50 text-charcoal-900` with strong shadow, hover: `bg-beige-100`
- **Icon in buttons:** ArrowRight, always animates `translate-x-1` on group hover

### Hover States
- Cards: `hover:-translate-y-1 hover:shadow-md` (300–500ms ease-out)
- Service cards (bento): `hover:-translate-y-1 hover:shadow-elegant` (700ms ease-out)
- Icons within cards: `group-hover:scale-110 group-hover:rotate-3`
- Feature tags: change border + text color to clay on hover
- Pills (clients): `hover:border-clay-500 hover:text-clay-500`
- Social icons in footer: color fill per platform (WhatsApp green, Facebook blue, etc.) + `scale-110`

### Press States
No explicit press state beyond browser default — transitions are hover-only.

### Borders
- Default card border: `1px solid var(--beige-200)` (#EBE4D8)
- Strong border: `1px solid var(--beige-300)` (#DED4C4)
- Dark section border: `1px solid rgb(255 255 255 / 0.1)` or `border-beige-200/10`
- Border on hover (service cards): `hover:border-clay-300` or `hover:border-clay-500/30`

### Shadows
All shadows use `rgb(61 53 46 / ...)` (espresso-800 base) — warm-tinted, never cool gray.
- `shadow-sm`: `0 1px 2px 0 rgb(61 53 46 / 0.05)`
- `shadow-md`: `0 4px 6px / 0 2px 4px` at 7%
- `shadow-lg`: `0 10px 15px / 0 4px 6px` at 8%
- `shadow-elegant`: `0 20px 40px -10px / 0 10px 15px -5px` at 10%/5%
- `shadow-clay`: Clay-500 colored glow shadow for CTA buttons on dark bg

### Corner Radii
- Tags/badges: `rounded-full` (pill)
- Nav buttons: `rounded-full` (pill)
- Standard cards: `rounded-2xl` (24px)
- Large/bento/service cards: `rounded-[2.5rem]` (40px)
- Icon containers in cards: `rounded-2xl` (24px)
- Buttons (default): `rounded-lg` (12px) or `rounded-full`
- Inputs/dropdowns: `rounded-md` (8px)

### Animations
- **fade-in-up:** `opacity: 0 + translateY(20px)` → full, 0.8s ease-out. Used for hero elements.
- **fade-in:** `opacity: 0` → full, 0.6s ease-out.
- **Staggered delays:** 100ms, 200ms, 300ms, 400ms, 500ms via `.animation-delay-*` classes.
- **No bouncy animations.** All easing is `ease-out` — decelerating, professional.
- **Marquee:** Infinite linear horizontal scroll (for client logo marquees).
- On dark section cards: `hover:-translate-y-2 transition-all duration-500` (slightly more dramatic).

### Layout Rules
- **Fixed header:** `fixed top-0 inset-x-0 z-50`. Transparent when at top, becomes `bg-white` after 20px scroll.
- **Max container:** `max-w-6xl mx-auto px-6 md:px-8 lg:px-12`
- **Bento grid:** `grid-cols-12` with `lg:col-span-8/4/6/12` for unequal bento tiles
- **Dark sections sandwich light ones** — charcoal-900 sections used for process, who-we-are, footer

### Use of Transparency & Blur
- **backdrop-blur:** Used on the mobile drawer overlay. Glass panels use `bg-white/40 backdrop-blur-md`.
- **Glow orbs:** Low opacity (8–15%) with `blur(80–120px)` for ambient warmth.
- **Dark section overlays:** `bg-espresso-900/40 backdrop-blur-md` on process step cards.
- **Footer logo:** `brightness-0 invert opacity-90` to render white version.

### Imagery
- **Hero:** Person photo (consultant/professional) with circular warm-gradient backdrop, floating data cards overlaid
- **Services:** Editorial still-life images on neutral/beige surfaces (`service-va.png`, `service-branding.png`, `service-marketing.png`)
- **Website samples:** Portfolio screenshots shown as mockups
- **No illustrations** — brand does not use hand-drawn or abstract illustration
- **No pattern fills or textures** beyond the diagonal cross-grid CSS pattern

---

## ICONOGRAPHY

### Primary Icon System: Lucide React
- **Package:** `lucide-react` (stroke-based, 2px stroke weight)
- **CDN:** `https://unpkg.com/lucide@latest/dist/umd/lucide.js`
- **Style:** Line icons, consistent stroke weight, rounded caps/joins
- **Size:** `w-5 h-5` (20px) in nav, `w-6 h-6` (24px) in body, `w-7 h-7` or `w-8 h-8` in service cards
- **Color:** `text-clay-500` on light bg, `text-white` on dark bg
- **Common icons used:** `CheckCircle`, `ArrowRight`, `ArrowUpRight`, `MapPin`, `UserCheck`, `Cpu`, `Share2`, `LayoutTemplate`, `TrendingUp`, `Zap`, `Brain`, `Clock`, `Layers`, `Users`, `Rocket`, `ShieldCheck`, `Target`, `Briefcase`, `Star`

### Secondary Icon System: @aliimam/icons
- Used in the navigation menu for dropdown items
- Same stroke style as Lucide, visually compatible
- Icons: `Bot`, `Box`, `Calendar1`, `ChartNoAxesColumnIncreasing`, `Globe`, `LayoutGrid`, `PenTool`, `Sparkles`, `AppWindow`, `BookText`, `BriefcaseBusiness`, `Network`

### Social Icons: react-icons
- `FaWhatsapp`, `FaFacebookF`, `FaInstagram`, `FaTiktok` from `react-icons/fa`
- `SiThreads` from `react-icons/si`
- Rendered at `w-4 h-4` (16px) in footer icon circles
- Each has brand-color hover fill

### Icon Usage Rules
- Icons always accompanied by text labels (never icon-only in body)
- Icon containers in service cards: `w-14 h-14 rounded-2xl` with `bg-beige-100 border border-beige-200` (light) or `bg-clay-500` (dark card)
- Hover effect: `group-hover:scale-110 group-hover:rotate-3`
- No emoji used as icons in UI (one ❤️ appears in a testimonial only)
- No PNG icons used in UI — all SVG/font-based

### Assets in `/assets/`
| File | Description |
|---|---|
| `tm-logo.png` | Primary TalentMucho logo (dark version) |
| `og-image.png` | Open Graph / social share image |
| `hero-image.png` | Hero section person photo |
| `hero-person.png` | Alternate hero person photo |
| `service-va.png` | Virtual Assistants service image |
| `service-branding.png` | Personal Branding service image |
| `service-marketing.png` | Marketing & Strategy service image |
| `challenge-visual.png` | Challenge/problem section visual |
| `website-landing-page.png` | Website sample — landing page |
| `website-portfolio.png` | Website sample — portfolio |
| `website-custom-system.png` | Website sample — custom system |

---

## FILE INDEX

```
TalentMucho Design System/
├── README.md                    ← This file — full system overview
├── SKILL.md                     ← Agent skill definition
├── colors_and_type.css          ← All CSS variables, utility classes
├── assets/
│   ├── tm-logo.png              ← Primary logo
│   ├── og-image.png             ← Social share image
│   ├── hero-image.png           ← Hero person photo
│   ├── hero-person.png          ← Alt hero photo
│   ├── service-va.png           ← VA service image
│   ├── service-branding.png     ← Branding service image
│   ├── service-marketing.png    ← Marketing service image
│   ├── challenge-visual.png     ← Challenge section visual
│   ├── website-landing-page.png ← Website sample
│   ├── website-portfolio.png    ← Website sample
│   └── website-custom-system.png← Website sample
├── preview/                     ← Design system cards (Design System tab)
│   ├── colors-base.html
│   ├── colors-semantic.html
│   ├── type-display.html
│   ├── type-body.html
│   ├── type-eyebrow.html
│   ├── spacing-radius.html
│   ├── spacing-shadows.html
│   ├── components-buttons.html
│   ├── components-cards.html
│   ├── components-tags.html
│   ├── components-nav.html
│   ├── brand-logo.html
│   ├── brand-patterns.html
│   └── brand-icons.html
└── ui_kits/
    └── landing-page/
        ├── README.md            ← Kit usage notes
        ├── index.html           ← Interactive landing page prototype
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── ServicesSection.jsx
        ├── ProcessSection.jsx
        ├── TestimonialsSection.jsx
        └── Footer.jsx
```
