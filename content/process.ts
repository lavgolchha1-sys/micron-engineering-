// =========================================================
// PROCESS — homepage 4-step grid
// =========================================================

export type ProcessStep = {
  step: string;            // "STEP / 01"
  stage: string;           // "SPEC", "GRIND", "QC", "DISPATCH"
  title: string;
  body: string;
  // SVG path/markup rendered inline in <ProcessGrid /> — kept in code for crisp lines
};

export const processSteps: ProcessStep[] = [
  {
    step: "STEP / 01",
    stage: "SPEC",
    title: "Drawing review",
    body:
      "PDF, DWG, STEP, or a worn tool in hand. We confirm geometry, substrate, coating, and tolerance — flagging anything we'd recommend changing for longer tool life.",
  },
  {
    step: "STEP / 02",
    stage: "GRIND",
    title: "CNC tool & cutter grinding",
    body:
      "Profiles cut on 5-axis CNC grinders. Heat treat and brazing in-house; PVD coating with a vetted partner. Every step logged to the part number.",
  },
  {
    step: "STEP / 03",
    stage: "QC",
    title: "Metrology & inspection",
    body:
      "Mitutoyo profile projectors, Zoller presetters, air gauges. Sample inspection on every run; 100% inspection on critical custom work.",
  },
  {
    step: "STEP / 04",
    stage: "DISPATCH",
    title: "Packed, marked, dispatched",
    body:
      "Each tool is etched with part number and date code. Packed against transit damage. Standard ranges ship in 3 days; custom in 10.",
  },
];

// Homepage stats band — 4 stat cells
export type Stat = {
  num: string;       // big number
  unit?: string;     // mono unit, e.g. "+ YRS", "µm", "+", "HRS"
  label: string;     // bottom mono label
};

export const homepageStats: Stat[] = [
  { num: "40", unit: "+ YRS", label: "In Manufacturing" },
  { num: "±5", unit: "µm", label: "Production Tolerance" },
  { num: "500", unit: "+", label: "Customers Pan-India" },
  { num: "<24", unit: "HRS", label: "Custom Quote Turnaround" },
];

// Manufacturing capabilities — used on homepage + about page (dark variant)
export type CapsRow = {
  label: string;     // mono uppercase label (left)
  value: string;     // value (right)
  unit?: string;     // small mono unit appended to value
};

export const capabilities: CapsRow[] = [
  { label: "FLOOR AREA", value: "12,000", unit: "SQ FT" },
  { label: "TOOL & CUTTER GRINDERS", value: "CNC 5-AXIS" },
  { label: "METROLOGY", value: "MITUTOYO + ZOLLER" },
  { label: "COATING", value: "PVD", unit: "PARTNER" },
  { label: "INSPECTION", value: "100", unit: "% AQL" },
  { label: "STANDARD LEAD TIME", value: "3–10", unit: "DAYS" },
  { label: "CUSTOM QUOTE", value: "< 24", unit: "HRS" },
  { label: "RE-GRINDING & RE-TIPPING", value: "IN-HOUSE" },
];

// About-page dark capabilities (different rows from homepage)
export const aboutCapabilities: CapsRow[] = [
  { label: "FLOOR AREA", value: "12,000", unit: "SQ FT" },
  { label: "CNC TOOL & CUTTER GRINDERS", value: "5-AXIS" },
  { label: "BRAZING", value: "IN-HOUSE" },
  { label: "HEAT TREATMENT", value: "SALT BATH" },
  { label: "METROLOGY", value: "MITUTOYO + ZOLLER" },
  { label: "COATING", value: "PVD", unit: "PARTNER" },
  { label: "INSPECTION", value: "100", unit: "% AQL" },
  { label: "PRODUCTION TOLERANCE", value: "±5", unit: "µm" },
];
