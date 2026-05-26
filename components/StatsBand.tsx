import { homepageStats } from "@/content/process";

export function StatsBand() {
  return (
    <section className="stat-band">
      <div className="container">
        <header
          className="section-head"
          style={{ borderTop: "none", paddingTop: 0, marginBottom: 64 }}
        >
          <div>
            <div className="section-head__num">§02 / BY THE NUMBERS</div>
            <span className="eyebrow">Forty years, measured</span>
            <h2>Consistency, not just longevity.</h2>
          </div>
        </header>
        <div className="stat-grid">
          {homepageStats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__num">
                {s.num}
                {s.unit && <span className="unit">{s.unit}</span>}
              </div>
              <div className="stat__rule" />
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
