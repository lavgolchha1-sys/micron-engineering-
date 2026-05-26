// =========================================================
// SITE-WIDE CONFIG
// Edit phone, email, addresses, and brand strings here.
// Used by Header, Footer, Contact, and structured data.
// =========================================================

export const site = {
  brand: {
    name: "Micron Engineering",
    tagline: "PRECISION CUTTING TOOLS · EST. 1985",
    mark: "M",
  },

  // Used in <head> meta tags and structured data
  meta: {
    title: "Micron Engineering Industries — Precision Cutting Tools, Kolkata · Since 1985",
    description:
      "HSS, carbide-tipped, solid carbide, and insert tooling manufactured in Kolkata for four decades. Tools that hold tolerance, order after order.",
    themeColor: "#F4F1EA",
    locale: "en_IN",
    foundedYear: 1985,
  },

  // Phones — first is primary, used in header
  phones: [
    { label: "Sales", number: "+91 98305 66659", tel: "+919830566659" },
    { label: "Office", number: "+91 98301 09511", tel: "+919830109511" },
  ],

  // Emails
  emails: {
    sales: "sales@micronengineeringindustries.in",
  },

  // Addresses — used in footer and contact page
  addresses: {
    factory: {
      label: "Factory",
      lines: ["238 Roy Bahadur Road", "Kolkata 700053", "West Bengal, India"],
      mapsQuery: "238 Roy Bahadur Road Kolkata 700053",
    },
    office: {
      label: "Sales Office",
      lines: ["89 N.S. Road, 3rd Floor", "Kolkata 700001", "West Bengal, India"],
      mapsQuery: "89 N.S. Road Kolkata 700001",
    },
  },

  hours: "MON – SAT · 10:00 – 18:00 IST",

  // RFQ form backend — leave empty to use console.log demo handler
  // Set to a Formspree / Web3Forms / custom URL to wire up real submissions
  contactEndpoint: "",

  // Footer
  copyright: "© 1985–2026 MICRON ENGINEERING INDUSTRIES",
  legal: "MADE IN KOLKATA · GST & MSME REG.",
};

export type Site = typeof site;
