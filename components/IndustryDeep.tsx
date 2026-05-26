import type { Industry } from "@/content/industries";

export function IndustryDeep({ industry }: { industry: Industry }) {
  return (
    <article className="ind-deep" id={industry.slug}>
      <header className="ind-deep__head">
        <div>
          <div className="num">
            {industry.ix} · {industry.tag}
          </div>
          <h2>{industry.title}</h2>
        </div>
        <p className="lede">{industry.lede}</p>
      </header>

      <div className="rec-grid">
        {industry.recs.map((r) => (
          <div className="rec" key={r.operation}>
            <span className="rec__op">{r.operation}</span>
            <h4>{r.product}</h4>
            <p>{r.notes}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
