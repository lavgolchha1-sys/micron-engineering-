// =========================================================
// ABOUT — story, timeline, principles, QC trace
// =========================================================

export const aboutStory = {
  hero: {
    num: "§ COMPANY · EST. 1985",
    eyebrow: "Forty years on the same brief",
    h1: "Built on a tool room floor in 1985.",
    lede:
      "What started as a small grinding workshop in Kolkata has grown into one of eastern India's most relied-upon cutting tool manufacturers — without losing what made the early work good.",
    meta: [
      { k: "Founded", v: "1985" },
      { k: "Floor Area", v: "12,000 sq ft" },
      { k: "Customers", v: "500+" },
      { k: "Tolerance", v: "±5 µm" },
    ],
  },

  story: {
    sectionNum: "§01 / STORY",
    eyebrow: "How it began · how it runs",
    h2: "Same answer, same question, four decades on.",
    asideLabel: "Founded 1985 · Kolkata, West Bengal",
    paragraphs: [
      "Micron Engineering Industries was founded in 1985 in Kolkata by a small team of tool makers who had spent years on shop floors before they ran one of their own. The work they took on was specific: precision drills, reamers, and form tools — and the standard they held themselves to was straightforward. Tools had to perform. Every time.",
      "Four decades later, the question buyers ask us hasn't changed. Will this tool hold tolerance? Will the next batch perform like this one? Will you be there when we need a replacement?",
      "Our answer hasn't changed either. We invested in CNC tool & cutter grinders, modern metrology, and PVD coatings as the market needed them — not for show. We added insert tooling, solid carbide, and accessories as our customers' machines got faster. But the core hasn't moved: a small enough operation that someone who knows tools answers the phone, and a quality bench that catches problems before they leave the floor.",
      "We're family-run. We supply across India — to automotive tier suppliers, defence shops, die and mould makers, general engineering job shops. We're not the biggest. We aim to be the one you go back to.",
    ],
  },
};

export type TimelineItem = {
  year: string;       // mono uppercase, e.g. "1985 · FOUNDED"
  title: string;
  body: string;
};

export const timeline: TimelineItem[] = [
  {
    year: "1985 · FOUNDED",
    title: "A grinding workshop in Kolkata",
    body:
      "Started with manual tool & cutter grinders, producing HSS drills, reamers, and form tools for the local engineering industry.",
  },
  {
    year: "1992 · CARBIDE TIPPING",
    title: "Added brazed-carbide capability",
    body:
      "Built our own brazing line to serve the cast iron and abrasive-material market — automotive component machining was taking off in eastern India.",
  },
  {
    year: "2003 · CNC GRINDING",
    title: "First CNC tool & cutter grinder",
    body:
      "Moved from manual to CNC grinding for solid carbide and high-precision HSS — the start of tighter, more consistent tolerances at production volumes.",
  },
  {
    year: "2011 · COATED TOOLING",
    title: "Coated solid carbide line",
    body:
      "Standardised AlTiN-coated solid carbide end mills and drills for hardened steel and stainless work, partnering with a PVD coating house.",
  },
  {
    year: "2017 · INSERTS & ACC.",
    title: "Expanded into indexable tooling",
    body:
      "Added milling and turning inserts plus a full accessories range — tool holders, collets, arbors — to become a single-source supplier for CNC and VMC shops.",
  },
  {
    year: "2024 · TODAY",
    title: "12,000 sq ft, six product lines, 500+ customers",
    body:
      "A modern facility with CNC grinding, in-house metrology, and a re-grinding service that extends the life of our own tools — and our customers'.",
  },
];

export type Principle = {
  num: string;       // "PRINCIPLE / 01"
  h3: string;
  body: string;
};

export const principles: Principle[] = [
  {
    num: "PRINCIPLE / 01",
    h3: "The geometry is right, or it doesn't ship.",
    body:
      "Every batch sample-checked on profile projector and air gauges. If a tool doesn't meet spec, it gets re-ground or scrapped — not sent.",
  },
  {
    num: "PRINCIPLE / 02",
    h3: "The right grade for the job, not the catalog.",
    body:
      "We'd rather recommend a competitor's tool than sell you the wrong substrate. The point is your part, not our invoice.",
  },
  {
    num: "PRINCIPLE / 03",
    h3: "Someone who knows tools answers the phone.",
    body:
      "You'll talk to people who've ground tools or run them — not a call centre. That matters when a quote needs a judgement call.",
  },
];

export const qcProcess = {
  label: "QC PROCESS · BATCH TRACE",
  body:
    "Raw material → incoming inspection → grinding / brazing / heat treatment → in-process gauging → coating (where applicable) → final inspection on profile projector and air gauge → batch sample retained for traceability → packed and dispatched. Every batch is sample-checked against drawing or master tool. We retain samples for six months, so when a customer asks about a specific lot, we can pull it.",
};

// Homepage pull-quote
export const pullQuote = {
  mark: "PROD-LINE QC LOG · BATCH 2024-Q3",
  textBefore: "The third tool out of the box performs ",
  textAccent: "like the first.",
  textAfter: " That's the brief — and it's been the brief since 1985.",
  authorWho: "A. SARKAR",
  authorTitle: "HEAD OF PRODUCTION, MICRON ENGINEERING",
};
