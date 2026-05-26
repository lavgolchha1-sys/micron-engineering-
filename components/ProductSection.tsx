import type { Product } from "@/content/products";

export function ProductSection({ product }: { product: Product }) {
  const p = product;
  return (
    <article className="prod-section" id={p.slug}>
      <header className="prod-section__head">
        <div>
          <div className="prod-section__num">{p.short}</div>
          <h2>{p.title}</h2>
        </div>
        <span className="meta">{p.meta}</span>
      </header>
      <div className="prod-body">
        <div>
          <p className="desc">{p.fullDesc}</p>
          <ul className="meta-list">
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <div className="best-for">
            <strong>Best for</strong>
            <p>{p.bestFor}</p>
          </div>
        </div>
        <div>
          <table className="spec-table">
            <caption>{p.spec.caption}</caption>
            <thead>
              <tr>
                {p.spec.columns.map((c) => (
                  <th key={c}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {p.spec.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </article>
  );
}
