import Link from "next/link";
import { industries } from "@/content/industries";

export function IndustryLattice() {
  return (
    <section
      className="section"
      id="industries"
      style={{ paddingTop: 24 }}
    >
      <div className="container">
        <header className="section-head">
          <div>
            <div className="section-head__num">§04 / DEPLOYMENT</div>
            <span className="eyebrow">Where Micron tools run</span>
            <h2>Built for the way India machines.</h2>
          </div>
          <Link href="/industries" className="section-head__link">
            Industries we serve →
          </Link>
        </header>

        <div className="ind-grid">
          {industries.map((ind) => (
            <div className="ind" key={ind.slug}>
              <div className="ind__head">
                <span className="ix">{ind.ix}</span>
                <span>{ind.tag}</span>
              </div>
              <h3 className="ind__title">{ind.title}</h3>
              <p className="ind__desc">{ind.shortDesc}</p>
              <div className="ind__mats">
                {ind.materials.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
