import Link from "next/link";
import { HeroDrawingSvg } from "./HeroDrawingSvg";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-left">
            <span className="eyebrow">MFR · KOLKATA · IN-WB · EST 1985</span>
            <h1>
              Tools that hold <span className="ru">tolerance</span>.<br />
              <em>Order after order.</em>
            </h1>
            <p className="hero-sub">
              For four decades, Indian machining floors have run Micron tooling
              — HSS, carbide-tipped, solid carbide, and inserts — because the
              third tool out of the box performs like the first.
            </p>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn--primary btn--lg">
                Request a Quote <span className="arr">→</span>
              </Link>
              <Link href="/products" className="btn btn--ghost btn--lg">
                Browse Catalog
              </Link>
            </div>

            <div className="hero-meta">
              <div>
                <span className="k">Founded</span>
                <span className="v">1985</span>
              </div>
              <div>
                <span className="k">Lines</span>
                <span className="v">06</span>
              </div>
              <div>
                <span className="k">Tolerance</span>
                <span className="v">±5 µm</span>
              </div>
              <div>
                <span className="k">Lead Time</span>
                <span className="v">3–10 D</span>
              </div>
            </div>
          </div>

          <div className="hero-drawing">
            <span className="hero-drawing-tl" />
            <span className="hero-drawing-tr" />
            <div className="hero-drawing__head">
              <span>SPEC · DRAWING SAMPLE</span>
              <span className="pn">PN · SC-EM-12·001</span>
            </div>
            <div className="hero-drawing__title">
              Solid Carbide End Mill — 4 Flute
            </div>
            <div className="hero-drawing__sub">
              SUBMICRON GRADE · AlTiN COATED · ≤ 55 HRC
            </div>

            <div className="hero-drawing__svg">
              <HeroDrawingSvg />
            </div>

            <div className="hero-drawing__specs">
              <div className="row">
                <span className="k">Coating</span>
                <span className="v">AlTiN</span>
              </div>
              <div className="row">
                <span className="k">Helix</span>
                <span className="v">38°</span>
              </div>
              <div className="row">
                <span className="k">Hardness</span>
                <span className="v">≤ 55 HRC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
