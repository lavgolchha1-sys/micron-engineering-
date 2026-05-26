# Micron Engineering Industries — Website

A complete, static website for Micron Engineering Industries. No build step. No framework. Hosts anywhere.

## What's here

```
/
├── index.html              Homepage — hero w/ engineering drawing, marquee, catalog rows, stats, process, industries lattice, pull quote, capabilities table, CTA
├── products.html           Full catalog — sticky index + 6 product sections w/ mono spec tables
├── about.html              Page-head + story w/ drop-cap + 6-row timeline + 3-value lattice + dark capabilities w/ QC trace
├── industries.html         6 sectors × 3 op-specific tool recommendations each (border lattices)
├── contact.html            Page-head + RFQ form in paper-2 panel w/ corner ticks + mono contact blocks
├── assets/
│   ├── css/styles.css      Design system + all components (~32 KB)
│   ├── js/main.js          Nav toggle, RFQ form handler, scroll shadow
│   └── img/                (empty — add real photos here, see below)
└── README.md               This file
```

## Design language

A precision-engineering / blueprint aesthetic — designed to feel like a technical document, not a marketing brochure.

| Property | Value | Why |
|---|---|---|
| **Background** | `#F4F1EA` (warm paper) + `#ECE7DC` (paper-2 for cards/bands) | Held, crafted feeling; avoids the cold "B2B SaaS white" look |
| **Display font** | Geist (Google Fonts) | Modern, geometric, technical without being sterile |
| **Mono font** | JetBrains Mono | Used everywhere for labels, specs, eyebrows, tables, footer — the dominant typographic voice |
| **Accent** | `#E84A0F` (signal orange) | Used sparingly for buttons, hover states, callouts — feels like a precision-tool mark or warning |
| **Corners** | `border-radius: 0` everywhere | CAD/blueprint aesthetic |
| **Borders** | Hairline lattices (1px solid `#DFD9CB`) | Catalog rows, industry cells, process steps share a ruled-paper grid |
| **Container** | 1320 px max-width, `clamp(20px, 4vw, 56px)` gutter | Wider than typical to give the lattice grids room to breathe |

### Section number convention

Every major section uses a `§XX / CATEGORY` label (e.g. `§01 / CATALOG`, `§02 / BY THE NUMBERS`) in mono before the eyebrow. This is the strongest single signal of the design language — keep it.

### Voice patterns

- Eyebrows in mono with a 16px hairline prefix
- Microcopy in mono, UPPERCASE, dot-separated (`STANDARD OR CUSTOM · OFF-THE-SHELF OR TO-PRINT`)
- Engineering notation in product specs: `⌀ 12.000 +0/-5µ`, `HELIX 38°`, `≤ 55 HRC`
- Footer in mono with all-caps copyright

## Run locally

It's flat HTML. Open `index.html` in a browser, or for proper relative paths:

```bash
# Python 3 (any platform)
python -m http.server 8000

# Node
npx serve

# Then open
http://localhost:8000
```

## Deploy

Drop the folder on any host:

- **Netlify / Vercel** — drag-and-drop deploy
- **Hostinger / GoDaddy / cPanel** — upload via FTP/file manager
- **GitHub Pages** — push to a repo, enable Pages from `main` branch root

All paths are relative.

## Things you must do before launching

### 1. Verify the claims

I wrote the copy with realistic but **assumed** numbers. Confirm or correct:

| Claim | Where | Action |
|---|---|---|
| Founded **1985** | Throughout | Confirm exact year |
| **12,000 sq ft** facility | Homepage, About | Confirm or update |
| **500+** customers across India | Homepage stat band | Confirm a real number |
| **±5 µm** production tolerance | Throughout | Confirm — adjust if different |
| **3–10 day** standard lead time | Throughout | Confirm |
| **CNC 5-axis** tool & cutter grinders | Homepage, About | Confirm exact equipment |
| **Mitutoyo + Zoller** metrology | Homepage, About | Confirm brands |
| **PVD coating partner** | Homepage, About | Confirm |
| **Salt-bath** heat treatment | About | Confirm |
| **Re-grinding service** offered | Throughout | Confirm |
| **GST & MSME Registered** | Footer | Add registration numbers if you want |
| **`sales@micronengineeringindustries.in`** | All pages | Set up this address or replace with current |
| **A. Sarkar — Head of Production** | Homepage pull quote | Replace with a real name and title (or remove the quote) |

The existing site uses `microncal@yahoo.com` and `micronkol238@gmail.com`. **Strongly recommend** creating a branded address at your own domain — Yahoo/Gmail on a B2B industrial site hurts credibility with procurement buyers.

### 2. Add real images (optional but recommended)

The site is currently typography-driven and works without product photos — but real imagery makes it stronger. Add to `assets/img/`:

- `og-image.jpg` — 1200×630 for social sharing (hero shot of tools or floor)
- One photo per product category (HSS drills, carbide tipped, solid carbide, milling inserts, turning inserts, accessories)
- 4–6 factory photos for the About page
- Logos of real customers (with permission)

Don't use stock CNC photos. Use your actual tools and floor.

### 3. RFQ form backend

The form on `contact.html` shows a success message but submits nothing (data goes to console). To make it work:

**Easiest — Formspree:**
1. Sign up at https://formspree.io
2. Get your form endpoint URL
3. In `contact.html`, change the opening `<form>` tag to:
   ```html
   <form class="rfq" id="rfqForm" action="https://formspree.io/f/xxxxxx" method="POST">
   ```
4. In `assets/js/main.js`, remove `e.preventDefault()` or replace the demo handler with a `fetch()` to your endpoint.

**Alternatives:** Web3Forms (free, unlimited), Netlify Forms (free if hosting on Netlify), or your own backend that emails sales.

### 4. Update contact strings

If anything changes, search & replace these:
- `+91 98305 66659` (primary phone)
- `+91 98301 09511` (secondary phone)
- `sales@micronengineeringindustries.in` (email — placeholder)
- `238 Roy Bahadur Road` (factory address)
- `89 N.S. Road, 3rd Floor` (office address)

### 5. SEO essentials

- **Google Business Profile** — claim/update yours
- **Sitemap** — generate `sitemap.xml`, submit to Google Search Console
- **Schema** — `index.html` already has Manufacturer JSON-LD
- **Page titles & descriptions** — already written, tune based on real search traffic

## What I'd add next (in priority order)

1. **Real product photography** — biggest single visual upgrade
2. **Named customer testimonials** — even one real name & quote beats a hundred generic claims (replace the placeholder "A. Sarkar" pull quote)
3. **Downloadable PDF catalogs** per category
4. **News / Insights blog** for SEO
5. **WhatsApp Business chat widget** — most Indian B2B buyers prefer WhatsApp
6. **Hindi / Bengali language toggle** — if you serve regional shops

## Maintenance

- **Edit copy:** open the relevant `.html`, find the text, change it
- **Add a spec row:** find the `<table class="spec-table">` in `products.html`, add a `<tr>`
- **Change accent color:** update `--accent` in `:root` at top of `assets/css/styles.css`
- **Add a section number:** copy a `<div class="section-head__num">§07 / NAME</div>` block — they're just text

## Browser support

Modern evergreen (Chrome, Firefox, Safari, Edge — current and prior major version). Uses CSS Grid, custom properties, `clamp()`, `backdrop-filter`. No IE 11.

## Performance

- ~32 KB CSS, ~2 KB JS
- Two fonts via Google Fonts with `display=swap` (Geist + JetBrains Mono)
- No framework, no build step
- LCP should be sub-1s on a decent connection
- Honors `prefers-reduced-motion`

---

Built around what actually converts B2B industrial buyers: specifics, credibility signals, and frictionless paths to a quote.
