# WaterLine — image assets

Placeholder `.svg` files render each slot's name, subject, aspect ratio, and
target size so the layout reads correctly before real art lands. Regenerate
them anytime with:

```bash
node scripts/gen-placeholders.mjs
```

## How to swap in real art

1. Export the final photo at **2× the target px** (retina) as **`.webp`**
   (keep a `.jpg` fallback if you like). Logo/icons stay `.svg`.
2. Save it next to the placeholder using the **same base name** —
   e.g. replace `hero/hero-under-sink.svg` with `hero/hero-under-sink.webp`.
3. Update the `src` extension where the component references it (the slots
   aren't wired into the components yet — ask to do that next).
4. Delete the `.svg` placeholder once the real file is in.

Art direction for every photo: candid documentary, natural light, real wear,
warm-paper highlights + deep-navy shadows, a **rust-orange** prop accent.
Palette — `ink #0B1320 · paper #FBFAF6 · water #0F5E9A · rust #E0822A · leaf #1F8A5A`.

## Manifest

| File | Section | Subject | Ratio | Target px |
|------|---------|---------|-------|-----------|
| `brand/og-image` | `<head>` OpenGraph | Headline + logo over dimmed under-sink photo | 1.91:1 | 1200 × 630 |
| `brand/favicon` | `<head>` | WaterLine drop/wrench mark | 1:1 | 512 × 512 |
| `brand/apple-touch-icon` | `<head>` | Mark, safe padding | 1:1 | 180 × 180 |
| `hero/hero-under-sink` | Hero | Plumber under sink, phone lighting up | 4:5 | 1080 × 1350 |
| `problem/situation-1-under-sink` | Problem grid | Under a sink, wet-handed | 1:1 | 800 × 800 |
| `problem/situation-2-on-ladder` | Problem grid | On a ladder | 1:1 | 800 × 800 |
| `problem/situation-3-driving` | Problem grid | Driving between jobs | 1:1 | 800 × 800 |
| `problem/situation-4-with-customer` | Problem grid | Already with a customer | 1:1 | 800 × 800 |
| `problem/situation-5-after-hours-family` | Problem grid | After hours with family | 1:1 | 800 × 800 |
| `problem/situation-6-two-calls` | Problem grid | Two calls at once | 1:1 | 800 × 800 |
| `problem/problem-bg-dashboard` | Problem dark panel (optional) | Voicemail screen on dashboard at dusk | 16:9 | 1920 × 1080 |
| `how-it-works/reading-rescued-text` | How It Works | Hand reading rescued-call text in van | 1:1 | 1080 × 1080 |
| `offer/trust-handshake` | Offer / Guarantee | Handshake on porch / portrait by truck | 4:5 | 1080 × 1350 |
| `cta/van-golden-hour` | Final CTA background | Branded van at golden hour | 16:9 | 1920 × 1080 |
| `footer/blueprint-texture` | Footer (optional) | Low-contrast blueprint / pipe flat-lay | 21:9 | 2400 × 1000 |
| `testimonials/portrait-1` | Testimonials (new) | Real plumber headshot | 1:1 | 400 × 400 |
| `testimonials/portrait-2` | Testimonials (new) | Real plumber headshot | 1:1 | 400 × 400 |
| `testimonials/portrait-3` | Testimonials (new) | Real plumber headshot | 1:1 | 400 × 400 |
| `testimonials/rescued-proof` | Testimonials (optional) | Candid in-the-field shot beside a quote | 3:2 | 1200 × 800 |
| `social/ad-story-9x16` | Off-site ad pack | Hero crop, Reels/Stories | 9:16 | 1080 × 1920 |
| `social/ad-square-1x1` | Off-site ad pack | Hero crop, feed | 1:1 | 1080 × 1080 |
| `social/ad-portrait-4x5` | Off-site ad pack | Hero crop, IG feed | 4:5 | 1080 × 1350 |
| `social/ad-landscape-1.91x1` | Off-site ad pack | Google/Meta banner | 1.91:1 | 1200 × 628 |

**Priority order:** `hero-under-sink` → `testimonials/portrait-*` →
`brand/og-image` → `problem/situation-*` → `cta/van-golden-hour`.
