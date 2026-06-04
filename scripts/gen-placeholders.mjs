// Generates labeled SVG placeholder images under /public/images.
// Each placeholder renders its slot name, intended subject, aspect ratio,
// and target pixel size — so the layout reads correctly before real art lands.
// Re-run anytime:  node scripts/gen-placeholders.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");

// Brand palette (matches tailwind.config.ts)
const C = {
  paper: "#F4F1E8",
  paperEdge: "#E8E3D5",
  ink: "#0B1320",
  inkMuted: "#3A4658",
  water: "#0F5E9A",
  rust: "#E0822A",
  leaf: "#1F8A5A",
};

/** @type {{path:string,w:number,h:number,title:string,subject:string,ratio:string,accent:string}[]} */
const slots = [
  // ── Brand / global ─────────────────────────────────────────────
  { path: "brand/og-image", w: 1200, h: 630, title: "OG / Social Share", subject: "Headline + logo over dimmed under-sink photo", ratio: "1.91:1", accent: C.rust },
  { path: "brand/favicon", w: 512, h: 512, title: "Favicon", subject: "WaterLine drop/wrench mark", ratio: "1:1", accent: C.water },
  { path: "brand/apple-touch-icon", w: 180, h: 180, title: "Apple Touch Icon", subject: "Mark, safe padding", ratio: "1:1", accent: C.water },

  // ── Hero ───────────────────────────────────────────────────────
  { path: "hero/hero-under-sink", w: 1080, h: 1350, title: "Hero", subject: "Plumber under sink, phone lighting up on cabinet floor", ratio: "4:5", accent: C.rust },

  // ── Problem · 6 situations (1:1) ──────────────────────────────
  { path: "problem/situation-1-under-sink", w: 800, h: 800, title: "Situation 1", subject: "Under a sink, wet-handed", ratio: "1:1", accent: C.rust },
  { path: "problem/situation-2-on-ladder", w: 800, h: 800, title: "Situation 2", subject: "On a ladder", ratio: "1:1", accent: C.rust },
  { path: "problem/situation-3-driving", w: 800, h: 800, title: "Situation 3", subject: "Driving between jobs", ratio: "1:1", accent: C.rust },
  { path: "problem/situation-4-with-customer", w: 800, h: 800, title: "Situation 4", subject: "Already with a customer", ratio: "1:1", accent: C.rust },
  { path: "problem/situation-5-after-hours-family", w: 800, h: 800, title: "Situation 5", subject: "After hours with family", ratio: "1:1", accent: C.rust },
  { path: "problem/situation-6-two-calls", w: 800, h: 800, title: "Situation 6", subject: "Two calls at once", ratio: "1:1", accent: C.rust },
  { path: "problem/problem-bg-dashboard", w: 1920, h: 1080, title: "Problem BG (optional)", subject: "Voicemail screen on dashboard at dusk", ratio: "16:9", accent: C.ink },

  // ── How it works ──────────────────────────────────────────────
  { path: "how-it-works/reading-rescued-text", w: 1080, h: 1080, title: "How It Works", subject: "Hand reading rescued-call text in van", ratio: "1:1", accent: C.water },

  // ── Offer / guarantee ─────────────────────────────────────────
  { path: "offer/trust-handshake", w: 1080, h: 1350, title: "Offer / Trust", subject: "Handshake on porch, or portrait by truck", ratio: "4:5", accent: C.leaf },

  // ── Final CTA ─────────────────────────────────────────────────
  { path: "cta/van-golden-hour", w: 1920, h: 1080, title: "Final CTA BG", subject: "Branded van at golden hour / answering phone", ratio: "16:9", accent: C.rust },

  // ── Footer (optional) ─────────────────────────────────────────
  { path: "footer/blueprint-texture", w: 2400, h: 1000, title: "Footer Texture (optional)", subject: "Low-contrast blueprint / pipe flat-lay", ratio: "21:9", accent: C.water },

  // ── Testimonials (new section) ────────────────────────────────
  { path: "testimonials/portrait-1", w: 400, h: 400, title: "Testimonial 1", subject: "Real plumber headshot", ratio: "1:1", accent: C.leaf },
  { path: "testimonials/portrait-2", w: 400, h: 400, title: "Testimonial 2", subject: "Real plumber headshot", ratio: "1:1", accent: C.leaf },
  { path: "testimonials/portrait-3", w: 400, h: 400, title: "Testimonial 3", subject: "Real plumber headshot", ratio: "1:1", accent: C.leaf },
  { path: "testimonials/rescued-proof", w: 1200, h: 800, title: "Proof shot (optional)", subject: "Candid in-the-field shot beside a quote", ratio: "3:2", accent: C.water },

  // ── Optional ad / social pack (off-site) ──────────────────────
  { path: "social/ad-story-9x16", w: 1080, h: 1920, title: "Ad · Story", subject: "Under-sink phone-lighting-up hero crop", ratio: "9:16", accent: C.rust },
  { path: "social/ad-square-1x1", w: 1080, h: 1080, title: "Ad · Square", subject: "Hero crop for feed", ratio: "1:1", accent: C.rust },
  { path: "social/ad-portrait-4x5", w: 1080, h: 1350, title: "Ad · Portrait", subject: "Best-performing IG feed crop", ratio: "4:5", accent: C.rust },
  { path: "social/ad-landscape-1.91x1", w: 1200, h: 628, title: "Ad · Landscape", subject: "Google/Meta banner crop", ratio: "1.91:1", accent: C.rust },
];

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function svg({ w, h, title, subject, ratio, accent, base }) {
  const min = Math.min(w, h);
  const s = min / 100; // scale unit
  const compact = min < 256;
  const cx = w / 2;
  const cy = h / 2;
  const pad = Math.max(8, Math.round(min * 0.03));
  const tTitle = Math.round(s * (compact ? 9 : 7));
  const tSub = Math.round(s * 4.4);
  const tMeta = Math.round(s * 4);
  const tTag = Math.round(s * 3.4);
  const font = `font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"`;

  const lines = compact
    ? `
    <text x="${cx}" y="${cy - tTitle * 0.1}" text-anchor="middle" ${font} font-weight="800" font-size="${tTitle}" fill="${C.ink}">${esc(title)}</text>
    <text x="${cx}" y="${cy + tMeta * 1.6}" text-anchor="middle" ${font} font-weight="600" font-size="${tMeta}" fill="${C.inkMuted}">${ratio} · ${w}×${h}</text>`
    : `
    <text x="${cx}" y="${cy - s * 6}" text-anchor="middle" ${font} font-weight="800" font-size="${tTitle}" fill="${C.ink}">${esc(title)}</text>
    <text x="${cx}" y="${cy + s * 1}" text-anchor="middle" ${font} font-weight="500" font-size="${tSub}" fill="${C.inkMuted}">${esc(subject)}</text>
    <text x="${cx}" y="${cy + s * 8}" text-anchor="middle" ${font} font-weight="700" font-size="${tMeta}" fill="${accent}">${ratio} · ${w}×${h}px</text>
    <text x="${cx}" y="${h - pad - tTag}" text-anchor="middle" ${font} font-weight="600" font-size="${tTag}" fill="${C.inkMuted}" opacity="0.75">PLACEHOLDER · replace with ${esc(base)}.webp</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)} placeholder">
  <rect width="${w}" height="${h}" fill="${C.paper}"/>
  <rect x="${pad / 2}" y="${pad / 2}" width="${w - pad}" height="${h - pad}" fill="none" stroke="${C.paperEdge}" stroke-width="${Math.max(1, Math.round(s * 0.6))}"/>
  <rect x="${pad}" y="${pad}" width="${w - pad * 2}" height="${h - pad * 2}" fill="none" stroke="${accent}" stroke-opacity="0.55" stroke-width="${Math.max(1, Math.round(s * 0.5))}" stroke-dasharray="${s * 2.5} ${s * 1.8}"/>
  <rect x="${pad}" y="${pad}" width="${Math.round(s * 14)}" height="${Math.round(s * 2)}" fill="${accent}"/>
  ${lines}
</svg>
`;
}

let count = 0;
for (const slot of slots) {
  const file = join(outDir, `${slot.path}.svg`);
  mkdirSync(dirname(file), { recursive: true });
  const base = slot.path.split("/").pop();
  writeFileSync(file, svg({ ...slot, base }), "utf8");
  count++;
}
console.log(`Wrote ${count} placeholder SVGs to public/images/`);
