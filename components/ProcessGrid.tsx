import { processSteps } from "@/content/process";

// Distinct SVG icon per stage — kept in code (not data) for crisp inline lines
function StageIcon({ stage }: { stage: string }) {
  switch (stage) {
    case "SPEC":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="6" y="6" width="44" height="44" />
          <line x1="6" y1="16" x2="50" y2="16" />
          <line x1="14" y1="24" x2="32" y2="24" />
          <line x1="14" y1="30" x2="40" y2="30" />
          <line x1="14" y1="36" x2="28" y2="36" />
          <line x1="14" y1="42" x2="34" y2="42" />
          <circle cx="44" cy="36" r="4" fill="#E84A0F" stroke="none" />
        </svg>
      );
    case "GRIND":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="28" cy="28" r="18" />
          <circle cx="28" cy="28" r="6" />
          <line x1="28" y1="4" x2="28" y2="12" />
          <line x1="28" y1="44" x2="28" y2="52" />
          <line x1="4" y1="28" x2="12" y2="28" />
          <line x1="44" y1="28" x2="52" y2="28" />
          <line x1="11" y1="11" x2="17" y2="17" />
          <line x1="39" y1="39" x2="45" y2="45" />
          <line x1="11" y1="45" x2="17" y2="39" />
          <line x1="39" y1="17" x2="45" y2="11" />
        </svg>
      );
    case "QC":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="8" y="14" width="40" height="28" />
          <line x1="8" y1="22" x2="48" y2="22" />
          <line x1="14" y1="14" x2="14" y2="22" />
          <line x1="20" y1="14" x2="20" y2="22" />
          <line x1="26" y1="14" x2="26" y2="22" />
          <line x1="32" y1="14" x2="32" y2="22" />
          <line x1="38" y1="14" x2="38" y2="22" />
          <line x1="44" y1="14" x2="44" y2="22" />
          <path d="M16 34 L24 30 L32 36 L42 28" stroke="#E84A0F" />
        </svg>
      );
    case "DISPATCH":
      return (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="6" y="14" width="32" height="28" />
          <path d="M38 22 L48 22 L52 30 L52 42 L38 42 Z" />
          <circle cx="16" cy="42" r="4" />
          <circle cx="44" cy="42" r="4" />
          <line x1="12" y1="22" x2="32" y2="22" />
          <line x1="12" y1="30" x2="24" y2="30" />
        </svg>
      );
    default:
      return null;
  }
}

export function ProcessGrid() {
  return (
    <section className="section">
      <div className="container">
        <header className="section-head">
          <div>
            <div className="section-head__num">§03 / PROCESS</div>
            <span className="eyebrow">Drawing → Spindle</span>
            <h2>How a Micron tool gets made.</h2>
            <p className="lede">
              Four steps between your drawing landing in our inbox and a
              calibrated tool arriving at your floor. Every batch goes through
              every one of them.
            </p>
          </div>
        </header>

        <div className="process-grid">
          {processSteps.map((s) => (
            <div className="proc" key={s.stage}>
              <div className="proc__num">
                <span>{s.step}</span>
                <span className="stage">{s.stage}</span>
              </div>
              <div className="proc__icon">
                <StageIcon stage={s.stage} />
              </div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
