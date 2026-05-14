---
name: talentmucho-design
description: Use this skill to generate well-branded interfaces and assets for TalentMucho, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

**Brand:** TalentMucho — "You've worked too hard to keep doing it alone."
**URL:** https://www.talentmucho.com
**Products:** Landing page / marketing website (Next.js)

### Fonts
- Serif display: `Cormorant Garamond`, weight 300 (light) for all headings
- Sans body/UI: `Manrope`, weights 400/500/600/700

### Key colors
| Token | Hex | Use |
|---|---|---|
| beige-50 | #FAF8F5 | Page background |
| beige-100 | #F5F0E8 | Section alt bg |
| clay-500 | #7D6B5A | Primary accent / CTAs |
| clay-600 | #665847 | Hover state |
| espresso-800 | #3D352E | Body text |
| charcoal-900 | #2A2520 | Headings, dark sections |

### Key design patterns
- Italic `<em>` in clay-500 for emotional accent words in headings
- ALL-CAPS eyebrow labels at 0.25em tracking in clay-500
- Warm espresso-tinted shadows (never cool-gray)
- Section backgrounds alternate: beige-50 → beige-100 → charcoal-900
- Diagonal cross-grid CSS pattern on hero and dark CTA sections
- Cards: rounded-2xl (24px) standard, rounded-[40px] bento/service cards
- Buttons: clay-500 pill or rounded-lg; dark bg uses charcoal-900 pill

### Files
- `README.md` — full brand context, visual foundations, content fundamentals
- `colors_and_type.css` — all CSS custom properties + utility classes
- `assets/` — logo, hero images, service images
- `preview/` — design system cards (colors, type, components, brand)
- `ui_kits/landing-page/` — interactive landing page prototype
