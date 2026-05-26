import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import { IndustryDeep } from "@/components/IndustryDeep";
import { CtaBand } from "@/components/CtaBand";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries We Serve | Micron Engineering Industries",
  description:
    "Cutting tools for automotive, aerospace, die & mould, general engineering, pumps and valves, and heavy engineering. Application-specific recommendations.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHead
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
        num="§ DEPLOYMENT · 06 SECTORS"
        eyebrow="Where Micron tools run"
        h1="Built for the way India machines."
        lede="The right tool depends on the material, the operation, and the machine. Here's how we approach the six sectors that account for most of our work — with specific recommendations, not generic claims."
      />

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          {industries.map((ind) => (
            <IndustryDeep key={ind.slug} industry={ind} />
          ))}
        </div>
      </section>

      <CtaBand
        heading="Not sure which tool fits your job?"
        sub="TELL US THE MATERIAL · THE OPERATION · THE MACHINE · WE'LL RECOMMEND A STARTING POINT"
        primary={{ label: "Get a Recommendation", href: "/contact" }}
      />
    </>
  );
}
