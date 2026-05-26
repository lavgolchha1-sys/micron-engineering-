import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import { ProductIndex } from "@/components/ProductIndex";
import { ProductSection } from "@/components/ProductSection";
import { CtaBand } from "@/components/CtaBand";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title:
    "Products — HSS, Carbide & Insert Tooling | Micron Engineering Industries",
  description:
    "Complete catalog: HSS tools, carbide-tipped, solid carbide, milling and turning inserts, tooling accessories. Specs, grades, and applications.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHead
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Products" },
        ]}
        num="§ CATALOG · 06 LINES"
        eyebrow="What we make"
        h1="Tooling for every cut you make."
        lede="Six product families. Hundreds of standard SKUs stocked in Kolkata. A full custom shop for to-print work. Pick a category to see specs, grades, and applications."
        meta={[
          { k: "Lines", v: "06" },
          { k: "Tolerance", v: "±5 µm" },
          { k: "Lead Time", v: "3–10 D" },
          { k: "Re-grinding", v: "In-House" },
        ]}
      />

      <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="container">
          <div className="products-layout">
            <ProductIndex />
            <div>
              {products.map((p) => (
                <ProductSection key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Don't see what you need?"
        sub="WE MAKE TO-PRINT ROUTINELY · DRAWING IN · QUOTE OUT WITHIN 24 HRS"
        primary={{ label: "Send a Drawing", href: "/contact" }}
      />
    </>
  );
}
