// =========================================================
// INDUSTRIES — 6 sectors
// Used on Homepage (lattice) and Industries page (deep sections)
// To add a recommendation card on the Industries page: push to recs.
// =========================================================

export type Recommendation = {
  operation: string;       // mono uppercase, e.g. "OP · BLOCK DRILLING"
  product: string;         // bold h4
  notes: string;           // 1-2 line description
};

export type Industry = {
  slug: string;
  ix: string;              // "IND-01"
  tag: string;             // "HIGH-CPK", "TOUGH-ALLOY", etc.
  title: string;           // "Automotive & Tier-2"
  shortDesc: string;       // homepage lattice description
  materials: string[];     // mono bullet list on homepage
  lede: string;            // longer paragraph on industries page
  recs: Recommendation[];  // 3 recommendation cards on industries page
};

export const industries: Industry[] = [
  {
    slug: "automotive",
    ix: "IND-01",
    tag: "HIGH-CPK",
    title: "Automotive & Tier-2",
    shortDesc:
      "Engine, transmission, brake, and chassis component machining for tier-1 and tier-2 suppliers across Maharashtra, Tamil Nadu, and the NCR.",
    materials: ["EN8 / EN24", "SG IRON", "20MnCr5", "AL 6061"],
    lede:
      "The tier suppliers we serve run Cpk on every line. They need tools that produce the same part, batch after batch, with predictable wear. We typically supply HSS reamers, carbide-tipped drills, and indexable inserts for the highest-volume operations — and run regular re-grinding to keep total tooling cost down.",
    recs: [
      {
        operation: "OP · BLOCK DRILLING",
        product: "CT twist drills, K20 grade",
        notes:
          "Brazed carbide for cast iron block work. Cost per hole runs roughly 40% lower than solid carbide for this application.",
      },
      {
        operation: "OP · BORE FINISHING",
        product: "HSS / CT machine reamers",
        notes:
          "For close-tolerance bores (H7) in cast iron and steel. Supplied in 0.5 mm increments with custom sizes against drawing.",
      },
      {
        operation: "OP · SHAFT TURNING",
        product: "CNMG 120408 / DNMG 150608",
        notes:
          "P-grade for steel shafts and pins. Stable chipbreakers for production runs.",
      },
    ],
  },
  {
    slug: "aerospace",
    ix: "IND-02",
    tag: "TOUGH-ALLOY",
    title: "Aerospace & Defence",
    shortDesc:
      "Titanium, Inconel, and high-strength steel work. Coated solid carbide and insert tooling for low-MRR, high-precision jobs.",
    materials: ["Ti-6Al-4V", "Inconel 718", "15-5 PH"],
    lede:
      "Titanium, Inconel, and high-strength steel work needs the right substrate and the right coating — and operators who can hold the cut. We supply submicron solid carbide tooling with AlTiN and TiSiN coatings, plus PVD-coated turning inserts in M-grade for stainless and superalloy work.",
    recs: [
      {
        operation: "OP · TITANIUM ROUGHING",
        product: "SC 4-flute end mills, AlTiN coated",
        notes:
          "High helix (38°+) and through-coolant compatible. We can match reference geometries from major brands.",
      },
      {
        operation: "OP · INCONEL FINISHING",
        product: "SC ball-nose, TiSiN coated",
        notes:
          "For mould and contour finishing on nickel alloys. Stable at high cutting temperatures.",
      },
      {
        operation: "OP · STAINLESS TURNING",
        product: "VBMT 160404, M-grade",
        notes:
          "Positive geometry for low-force cuts in 304/316. Crisp chip control on small parts.",
      },
    ],
  },
  {
    slug: "general-engineering",
    ix: "IND-03",
    tag: "WORKHORSE",
    title: "General Engineering",
    shortDesc:
      "Fabrication shops, job work, repair and maintenance. A reliable, in-stock supply for the day-to-day machining grind.",
    materials: ["MS", "SS 304/316", "CI", "Brass"],
    lede:
      "Job shops live and die by availability. You don't know what's walking through the door tomorrow — you need a supplier who can ship a standard 12 mm drill same-week and a custom step tool within 10 days. That's where we live.",
    recs: [
      {
        operation: "OP · DAILY-DRIVER DRILLING",
        product: "HSS jobber drills, M2 / M35",
        notes:
          "Bright and TiN-coated. Full DIN sizes stocked. Restock orders shipped within 48 hours of receipt.",
      },
      {
        operation: "OP · TAPPING",
        product: "HSS machine taps, M3 – M30",
        notes:
          "For through-hole and blind work. Stocked in standard pitches; specials within 5 working days.",
      },
      {
        operation: "OP · MIXED TURNING",
        product: "CCMT / DCMT positive inserts",
        notes:
          "For lathe shops doing small-batch, mixed material work. Light cuts, good chip flow on small parts.",
      },
    ],
  },
  {
    slug: "die-mould",
    ix: "IND-04",
    tag: "HARDENED",
    title: "Die & Mould",
    shortDesc:
      "Hardened steel finishing, mould cavity work, and 3D contouring with stable, high-helix solid carbide.",
    materials: ["P20", "H13", "D2", "NAK80"],
    lede:
      "Mould shops need tools that hold a cutting edge in pre-hardened and hardened tool steels (P20, H13, hardened to 45–55 HRC), and that finish to a surface ready for polishing. Our coated solid carbide range is built for this.",
    recs: [
      {
        operation: "OP · HARD MILLING ≤ 55 HRC",
        product: "SC ball-nose & corner-radius end mills",
        notes:
          "AlTiN / TiSiN coated. 4 and 6 flute options for high-speed semi-finishing and finishing.",
      },
      {
        operation: "OP · POCKET ROUGHING",
        product: "SC 4-flute square end mills, high helix",
        notes:
          "For trochoidal milling and aggressive material removal in hardened steel.",
      },
      {
        operation: "OP · CAVITY ROUGHING",
        product: "ONMU / RPMT round inserts",
        notes:
          "High-feed copy milling for rough cavity work in P20 and H13.",
      },
    ],
  },
  {
    slug: "pumps-valves",
    ix: "IND-05",
    tag: "FLOW-PARTS",
    title: "Pumps, Valves & Hydraulics",
    shortDesc:
      "Cast iron, ductile iron, and stainless body work. Carbide-tipped reamers and turning inserts always in stock.",
    materials: ["CI", "SG IRON", "SS 316L", "Bronze"],
    lede:
      "Pump and valve makers we supply run a mix of cast iron body work and stainless trim machining. We supply carbide-tipped reamers for the big bores, K-grade turning inserts for cast iron, and M-grade inserts for stainless trim work.",
    recs: [
      {
        operation: "OP · BODY BORE REAMING",
        product: "CT reamers, K10 / K20",
        notes:
          "Brazed carbide reamers up to 50 mm for cast iron and ductile iron pump bodies. Re-tippable for long service life.",
      },
      {
        operation: "OP · CAST IRON TURNING",
        product: "CNMG / TNMG, K-grade",
        notes:
          "For housings and flanges. CVD coating for thermal stability on continuous cuts.",
      },
      {
        operation: "OP · STAINLESS TRIM",
        product: "WNMG / DNMG, M-grade",
        notes:
          "For stem and seat machining in stainless trim. Sharp positive geometry for clean cuts.",
      },
    ],
  },
  {
    slug: "heavy-engineering",
    ix: "IND-06",
    tag: "HIGH-MRR",
    title: "Heavy Engineering",
    shortDesc:
      "Large-diameter drilling, boring, and milling. Brazed carbide and indexable solutions for high material-removal jobs.",
    materials: ["EN 8/9", "Alloy steel", "CI castings"],
    lede:
      "For heavy fabrication, structural, and large-equipment work, the tooling has to be stable enough to take a heavy cut and tough enough to outlast the setup. We supply brazed carbide drills up to 50 mm, big indexable face mills, and large boring bars.",
    recs: [
      {
        operation: "OP · LARGE-DIA DRILLING",
        product: "CT twist drills, 25 – 50 mm",
        notes:
          "For mild steel and cast iron plate work. Brazed K20 tips on alloy steel bodies.",
      },
      {
        operation: "OP · FACE MILLING · HIGH-MRR",
        product: "SEHT / ADKT indexable inserts",
        notes:
          "For 80 – 250 mm face mill bodies. Stable in interrupted cuts on cast steel and plate.",
      },
      {
        operation: "OP · BORING LARGE BORES",
        product: "CT bars + indexable boring heads",
        notes:
          "Bores from 16 mm to 400 mm+. CT bars for rigidity, indexable for productivity.",
      },
    ],
  },
];
