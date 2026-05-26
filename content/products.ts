// =========================================================
// PRODUCTS — 6 categories
// Used on Homepage (catalog rows) and Products page (deep specs)
// To add a row to a spec table: push to spec.rows.
// To add a category: push a new object to the products array.
// =========================================================

export type ProductTag = string;

export type SpecRow = {
  type: string;
  size?: string;
  grade?: string;
  coating?: string;
  notes?: string;
};

export type Product = {
  slug: string;            // anchor + URL fragment
  num: string;             // "01" – "06"
  short: string;           // mono section label e.g. "§01 / HSS"
  title: string;           // full title for product page
  shortTitle?: string;     // optional shorter title for catalog row
  meta: string;            // mono meta line e.g. "M2 · M35 · GROUND OR COATED"
  catalogDesc: string;     // short row description on homepage
  catalogTags: ProductTag[];    // tags shown in homepage row
  fullDesc: string;        // longer paragraph on product page
  bullets: string[];       // bullet list under fullDesc
  bestFor: string;         // "Best for…" block on product page
  spec: {
    caption: string;       // table caption
    columns: string[];     // table header row
    rows: string[][];      // each row is an array matching columns
  };
};

export const products: Product[] = [
  {
    slug: "hss",
    num: "01",
    short: "§01 / HSS",
    title: "High Speed Steel Tools",
    shortTitle: "HSS Tools",
    meta: "M2 · M35 · GROUND OR COATED",
    catalogDesc:
      "Drills, taps, reamers, and end mills for general-purpose and high-volume jobs. Ground or coated finishes; long-flute options on request.",
    catalogTags: ["⌀ 3–32 mm", "TiN / TiAlN"],
    fullDesc:
      "Workhorse tooling for general-purpose drilling, tapping, reaming, and milling. Available in M2 and M35 (Cobalt) grades, with optional TiN or TiAlN coatings for extended life on tougher materials.",
    bullets: [
      "M2 (HSS) and M35 (5% Co) grades",
      "Bright, steam-treated, TiN, or TiAlN finish",
      "DIN and Indian Standard sizes",
      "Made-to-print specials, including step and form tools",
    ],
    bestFor:
      "Mild steel, low-alloy steel, cast iron, aluminium, brass, plastics. General-purpose machining where carbide is overkill.",
    spec: {
      caption: "STANDARD HSS RANGE",
      columns: ["Tool Type", "Diameter", "Grade", "Coating"],
      rows: [
        ["Twist Drills (Jobber)", "1.0 – 25.0 mm", "M2 / M35", "Bright / TiN"],
        ["Twist Drills (Long Series)", "3.0 – 20.0 mm", "M2 / M35", "Bright / TiN"],
        ["Hand & Machine Taps", "M3 – M30", "M2 / M35", "Bright / TiN"],
        ["Reamers (Hand / Machine)", "3.0 – 32.0 mm", "M2", "Bright"],
        ["End Mills (2 / 4 Flute)", "3.0 – 25.0 mm", "M2 / M35", "TiN / TiAlN"],
        ["Slot Drills (2 Flute)", "3.0 – 25.0 mm", "M2 / M35", "TiN / TiAlN"],
        ["Counter-Sinks / Counter-Bores", "5.0 – 30.0 mm", "M2", "Bright"],
      ],
    },
  },
  {
    slug: "carbide-tipped",
    num: "02",
    short: "§02 / CT",
    title: "Carbide Tipped Tools",
    meta: "BRAZED · K10 · K20 · P30",
    catalogDesc:
      "Brazed-tip drills, reamers, and step tools. Cost-effective performance for cast iron, non-ferrous metals, and abrasive work.",
    catalogTags: ["⌀ 6–50 mm", "Re-tippable"],
    fullDesc:
      "Brazed-carbide tooling that gets you carbide performance at a fraction of solid-carbide cost. Ideal for abrasive materials and operations where tool body stiffness matters more than top-end speed.",
    bullets: [
      "K10, K20, and P30 carbide tips, brazed to HSS or alloy steel bodies",
      "Drills, reamers, counter-bores, step tools, and form tools",
      "Re-tippable — send used tools back for refurbishment",
      "Bespoke geometries against drawing",
    ],
    bestFor:
      "Cast iron, ductile iron, non-ferrous metals, abrasive composites, hardened materials up to 45 HRC. High-volume drilling and reaming.",
    spec: {
      caption: "STANDARD CT RANGE",
      columns: ["Tool Type", "Diameter", "Tip Grade", "Body"],
      rows: [
        ["CT Twist Drills", "6.0 – 50.0 mm", "K10 / K20", "EN-8 / EN-19"],
        ["CT Reamers", "8.0 – 50.0 mm", "K10", "EN-19"],
        ["CT Counter-Bores", "10.0 – 60.0 mm", "K20", "EN-19"],
        ["CT Step Drills", "To drawing", "K10 / K20", "EN-19"],
        ["CT Form Tools", "To drawing", "K10 / P30", "EN-19 / HSS"],
        ["CT Boring Bars", "10.0 – 50.0 mm", "K20 / P30", "EN-19"],
      ],
    },
  },
  {
    slug: "solid-carbide",
    num: "03",
    short: "§03 / SC",
    title: "Solid Carbide Tools",
    meta: "SUBMICRON · AlTiN / TiSiN · ≤ 55 HRC",
    catalogDesc:
      "End mills, drills, and reamers from submicron grade carbide. Coated for hardened steels, stainless, and high-temperature alloys.",
    catalogTags: ["≤ 55 HRC", "Helix 30°–45°"],
    fullDesc:
      "Submicron-grade solid carbide tooling for high-speed machining, hardened materials, and tight-tolerance work. PVD coated for thermal stability and wear resistance.",
    bullets: [
      "Submicron and ultra-fine grain substrates",
      "AlTiN, TiSiN, and DLC coatings",
      "End mills, drills, reamers, ball-nose, corner-radius",
      "For materials up to 55 HRC, plus stainless and titanium",
    ],
    bestFor:
      "Hardened steels (up to 55 HRC), stainless 304/316, titanium alloys, Inconel, mould & die work, finishing passes where surface finish matters.",
    spec: {
      caption: "STANDARD SOLID CARBIDE RANGE",
      columns: ["Tool Type", "Diameter", "Flutes", "Coating"],
      rows: [
        ["SC End Mill (Square)", "1.0 – 25.0 mm", "2 / 4 / 6", "AlTiN"],
        ["SC End Mill (Ball Nose)", "1.0 – 20.0 mm", "2 / 4", "AlTiN / TiSiN"],
        ["SC End Mill (Corner Radius)", "3.0 – 20.0 mm", "4", "AlTiN"],
        ["SC Drills (3xD / 5xD)", "1.5 – 20.0 mm", "2", "AlTiN"],
        ["SC Drills (8xD / 12xD)", "3.0 – 16.0 mm", "2", "AlTiN"],
        ["SC Reamers", "3.0 – 20.0 mm", "6 / 8", "TiN / TiSiN"],
        ["SC Chamfer / Engraving", "3.0 – 12.0 mm", "2 / 4", "AlTiN"],
      ],
    },
  },
  {
    slug: "milling-inserts",
    num: "04",
    short: "§04 / MI",
    title: "Milling Inserts",
    meta: "APKT · SEHT · R390 · PVD / CVD",
    catalogDesc:
      "Indexable inserts for face milling, shoulder milling, and slotting. ISO grades stocked, custom geometries on request.",
    catalogTags: ["PVD / CVD", "P · M · K · N"],
    fullDesc:
      "Indexable milling inserts for face, shoulder, slot, and copy milling. ISO grades stocked across P, M, K, and N material groups. PVD and CVD coated options.",
    bullets: [
      "APKT, SEHT, SEKT, R390, ONMU, ADKT geometries",
      "Compatible with most face mill, end mill, and shell mill bodies",
      "Carbide substrates: K10 to P40 equivalents",
      "Substitutes for major brands available — send the ISO code",
    ],
    bestFor:
      "Face milling steel and cast iron, shoulder milling, slotting, plunge milling, copy milling 3D profiles in dies and moulds.",
    spec: {
      caption: "STOCKED MILLING INSERT SERIES",
      columns: ["Series", "Application", "Mat. Group", "Coating"],
      rows: [
        ["APKT 1604 / 1003", "Shoulder & face", "P · M · K", "PVD"],
        ["SEHT / SEKT 1204", "High-feed face", "P · K", "CVD"],
        ["R390-11T3", "90° shoulder", "P · M", "PVD"],
        ["ONMU 0806", "High-feed copy", "P · K", "PVD / CVD"],
        ["ADKT 1505", "Face, finishing", "P · M · K · N", "PVD"],
        ["RPMT 1204", "Round, profile", "P · K", "PVD"],
      ],
    },
  },
  {
    slug: "turning-inserts",
    num: "05",
    short: "§05 / TI",
    title: "Turning Inserts",
    meta: "CNMG · DNMG · TNMG · VBMT · P · M · K · N",
    catalogDesc:
      "Negative and positive geometries for steel, stainless, cast iron, and aluminium. Wide stocked range with branded equivalents.",
    catalogTags: ["Coated", "P · M · K · N · S"],
    fullDesc:
      "A full range of ISO turning inserts — negative and positive geometries — for external and internal turning, grooving, threading, and parting off. Material-matched grades for steel, stainless, cast iron, and aluminium.",
    bullets: [
      "CNMG, DNMG, TNMG, WNMG, VBMT, CCMT, DCMT, TCMT geometries",
      "Material grades for P (steel), M (stainless), K (cast iron), N (aluminium)",
      "Roughing, semi-finishing, and finishing chipbreakers",
      "Threading and grooving inserts on request",
    ],
    bestFor:
      "Conventional & CNC lathes — turning shafts, bushings, flanges, housings; internal boring; grooving and parting; thread cutting.",
    spec: {
      caption: "STOCKED TURNING INSERT SERIES",
      columns: ["ISO Designation", "Type", "Application", "Group"],
      rows: [
        ["CNMG 120408", "Negative", "Ext. roughing / finishing", "P · M · K"],
        ["DNMG 150608", "Negative", "Ext. turning, profile", "P · M"],
        ["TNMG 160408", "Negative", "General turning", "P · K"],
        ["WNMG 080408", "Negative", "Stable contour", "P · M"],
        ["VBMT 160404", "Positive", "Internal / finishing", "P · M · N"],
        ["CCMT 09T308", "Positive", "Light cuts, small parts", "P · M · N"],
        ["DCMT 11T308", "Positive", "Boring, profile", "P · M · N"],
        ["TCMT 16T308", "Positive", "Internal turning", "P · M · N"],
      ],
    },
  },
  {
    slug: "accessories",
    num: "06",
    short: "§06 / ACC",
    title: "Tooling Accessories",
    meta: "BT · HSK · ER · R8 · CNC / VMC",
    catalogDesc:
      "Tool holders, collets, arbors, sleeves, and CNC/VMC accessories. Built to match your spindle interface.",
    catalogTags: ["CNC / VMC", "In stock"],
    fullDesc:
      "Everything you need to mount, hold, and reach a cut. Tool holders, collets, arbors, sleeves, and CNC/VMC accessories built to match your spindle interface.",
    bullets: [
      "BT 30, BT 40, BT 50, HSK 63A, HSK 100A tool holders",
      "ER 11 to ER 50 collets and collet chucks",
      "Morse taper sleeves, drill sockets, side-lock holders",
      "Boring bar holders and shrink-fit chucks",
    ],
    bestFor:
      "Tooling up new CNC / VMC machines, replacing worn holders, building tool kits for production cells.",
    spec: {
      caption: "ACCESSORIES RANGE",
      columns: ["Type", "Spec / Size", "Interface", "Notes"],
      rows: [
        ["Face Mill Arbors", "22 – 60 mm", "BT 30 / 40 / 50", "Thru-coolant opt."],
        ["ER Collet Chucks", "ER 16 – ER 50", "BT / HSK", "G2.5 / 25k rpm"],
        ["ER Collets", "1 – 32 mm", "ER 11 – ER 50", "DIN 6499"],
        ["Side-Lock End Mill Holders", "6 – 32 mm", "BT 40 / 50", "Weldon flat"],
        ["Morse Taper Sleeves", "MT1 – MT5", "Drilling m/c", "DIN 2185"],
        ["Boring Bar Holders", "16 – 40 mm bore", "BT / HSK", "For SC / CT bars"],
        ["Shrink Fit Chucks", "3 – 25 mm", "BT / HSK", "3° / 4.5° slim"],
      ],
    },
  },
];

// Marquee strip on homepage — edit text loop here
export const marqueeTokens = [
  "±5 µm Tolerance",
  "M2 / M35 HSS",
  "Submicron Carbide",
  "TiN · TiAlN · AlTiN",
  "CNMG · DNMG · APKT",
  "BT · HSK · ER Holders",
  "3–10 Day Lead Time",
  "Re-grind & Re-tip",
  "Drawing-Based Supply",
  "Kolkata, IN",
];
