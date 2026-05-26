import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Catalog } from "@/components/Catalog";
import { StatsBand } from "@/components/StatsBand";
import { ProcessGrid } from "@/components/ProcessGrid";
import { IndustryLattice } from "@/components/IndustryLattice";
import { PullQuote } from "@/components/PullQuote";
import { CapsTable } from "@/components/CapsTable";
import { CtaBand } from "@/components/CtaBand";
import { capabilities } from "@/content/process";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Catalog />
      <StatsBand />
      <ProcessGrid />
      <IndustryLattice />
      <PullQuote />
      <CapsTable
        id="capabilities"
        num="§05 / CAPABILITIES"
        eyebrow="What's behind the tool in your hand"
        h2="A 12,000 sq. ft. floor in Kolkata, equipped for tolerance."
        lede="CNC tool & cutter grinders, brazing stations, heat treatment, coating partners, and a metrology bench that catches drift before it leaves the floor."
        rows={capabilities}
      />
      <CtaBand
        heading="Have a drawing? Send it over."
        sub="STANDARD OR CUSTOM · OFF-THE-SHELF OR TO-PRINT · QUOTES OUT IN < 24 HRS"
        primary={{ label: "Request a Quote", href: "/contact" }}
      />
    </>
  );
}
