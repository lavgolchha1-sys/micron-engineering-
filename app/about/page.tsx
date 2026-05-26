import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import { Timeline } from "@/components/Timeline";
import { ValuesGrid } from "@/components/ValuesGrid";
import { CapsTable } from "@/components/CapsTable";
import { CtaBand } from "@/components/CtaBand";
import { aboutStory, qcProcess } from "@/content/about";
import { aboutCapabilities } from "@/content/process";

export const metadata: Metadata = {
  title:
    "About — Four Decades of Cutting Tools | Micron Engineering Industries",
  description:
    "Founded in Kolkata in 1985. A family-run cutting tool manufacturer serving India's machining floors with HSS, carbide, and insert tooling.",
};

export default function AboutPage() {
  const { hero, story } = aboutStory;
  return (
    <>
      <PageHead
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        num={hero.num}
        eyebrow={hero.eyebrow}
        h1={hero.h1}
        lede={hero.lede}
        meta={hero.meta}
      />

      {/* Story */}
      <section className="section">
        <div className="container">
          <header className="section-head">
            <div>
              <div className="section-head__num">{story.sectionNum}</div>
              <span className="eyebrow">{story.eyebrow}</span>
              <h2>{story.h2}</h2>
            </div>
          </header>

          <div className="story">
            <div>
              <p
                style={{
                  color: "var(--ink-500)",
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {story.asideLabel}
              </p>
            </div>
            <div>
              {story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <header className="section-head">
            <div>
              <div className="section-head__num">§02 / TIMELINE</div>
              <span className="eyebrow">How we got here</span>
              <h2>Forty years, in milestones.</h2>
            </div>
          </header>
          <Timeline />
        </div>
      </section>

      {/* Principles */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <header className="section-head">
            <div>
              <div className="section-head__num">§03 / PRINCIPLES</div>
              <span className="eyebrow">
                Three things we won&apos;t compromise on
              </span>
              <h2>How we run the floor.</h2>
            </div>
          </header>
          <ValuesGrid />
        </div>
      </section>

      {/* Dark capabilities + QC trace */}
      <CapsTable
        id="quality"
        dark
        num="§04 / MANUFACTURING & QUALITY"
        eyebrow="The floor behind the tool"
        h2="A 12,000 sq. ft. floor in Kolkata, equipped for tolerance."
        lede="CNC tool & cutter grinders, brazing stations, heat treatment, coating partners, and a metrology bench that catches drift before it leaves the floor."
        rows={aboutCapabilities}
      />

      {/* The QC trace box is rendered as part of caps section in original; we render it here separately on dark bg */}
      <section
        className="caps caps--dark"
        style={{ paddingTop: 0, paddingBottom: 96 }}
      >
        <div className="container">
          <div
            style={{
              padding: 32,
              border: "1px solid #2A2A2D",
            }}
          >
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 14,
              }}
            >
              {qcProcess.label}
            </div>
            <p
              style={{
                color: "var(--ink-300)",
                maxWidth: "75ch",
                fontSize: 15,
                lineHeight: 1.65,
              }}
            >
              {qcProcess.body}
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        heading="Visit the factory."
        sub="WANT TO SEE THE FLOOR BEFORE YOU COMMIT? · WALK-THROUGHS WELCOMED · BOOK AHEAD"
        primary={{ label: "Schedule a Visit", href: "/contact" }}
      />
    </>
  );
}
