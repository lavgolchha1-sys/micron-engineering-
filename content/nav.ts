// =========================================================
// NAVIGATION
// Edit primary header nav and footer link columns here.
// =========================================================

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  catalog: {
    heading: "Catalog",
    links: [
      { label: "HSS Tools", href: "/products#hss" },
      { label: "Carbide Tipped", href: "/products#carbide-tipped" },
      { label: "Solid Carbide", href: "/products#solid-carbide" },
      { label: "Milling Inserts", href: "/products#milling-inserts" },
      { label: "Turning Inserts", href: "/products#turning-inserts" },
      { label: "Accessories", href: "/products#accessories" },
    ],
  },
  company: {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "Quality", href: "/about#quality" },
      { label: "Contact", href: "/contact" },
      { label: "Request a Quote", href: "/contact" },
    ],
  },
};
