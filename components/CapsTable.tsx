import type { CapsRow } from "@/content/process";

type CapsTableProps = {
  /** "§05 / CAPABILITIES" — section number */
  num: string;
  /** Small label above the h2 */
  eyebrow: string;
  /** Section heading */
  h2: string;
  lede: string;
  rows: CapsRow[];
  /** Render on dark ink-900 background (used on About page) */
  dark?: boolean;
  /** HTML id, e.g. "capabilities" or "quality" */
  id?: string;
};

export function CapsTable({
  num,
  eyebrow,
  h2,
  lede,
  rows,
  dark = false,
  id,
}: CapsTableProps) {
  const className = `caps ${dark ? "caps--dark" : ""}`.trim();
  return (
    <section className={className} id={id}>
      <div className="container">
        <div
          className="section-head"
          style={{
            marginBottom: 0,
            borderTop: dark ? "1px solid #2A2A2D" : "none",
            paddingTop: 0,
          }}
        >
          <div>
            <div
              className="section-head__num"
              style={dark ? { color: "var(--ink-400)" } : undefined}
            >
              {num}
            </div>
            <span
              className="eyebrow"
              style={dark ? { color: "var(--ink-400)" } : undefined}
            >
              {eyebrow}
            </span>
          </div>
        </div>
        <div className="caps-grid">
          <div>
            <h2>{h2}</h2>
            <p className="caps__lede">{lede}</p>
          </div>
          <table className="caps-table" aria-label="Manufacturing capabilities">
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <td>{r.label}</td>
                  <td>
                    {r.value}
                    {r.unit && <span className="u">{r.unit}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
