import Link from "next/link";

export type PageHeadMeta = { k: string; v: string };

type PageHeadProps = {
  /** Breadcrumb segments (last one is current page, not a link) */
  crumbs: { label: string; href?: string }[];
  /** Mono section number, e.g. "§ CATALOG · 06 LINES" */
  num: string;
  /** Eyebrow text */
  eyebrow: string;
  h1: string;
  lede: string;
  /** Optional meta strip below the lede */
  meta?: PageHeadMeta[];
};

export function PageHead({ crumbs, num, eyebrow, h1, lede, meta }: PageHeadProps) {
  return (
    <section className="page-head">
      <div className="container">
        <div className="breadcrumb">
          {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                {c.href && !isLast ? (
                  <Link href={c.href}>{c.label}</Link>
                ) : (
                  <span className="here">{c.label}</span>
                )}
                {!isLast && <span className="sep">/</span>}
              </span>
            );
          })}
        </div>
        <div className="ph-num">{num}</div>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{h1}</h1>
        <p className="lede">{lede}</p>
        {meta && meta.length > 0 && (
          <div className="ph-meta">
            {meta.map((m, i) => (
              <span key={i}>
                {m.k}
                <b>{m.v}</b>
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
