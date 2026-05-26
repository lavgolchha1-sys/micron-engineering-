// =========================================================
// Engineering drawing — end mill profile with dimension callouts
// Inline SVG (no external file). Kept verbatim from the reference design.
// =========================================================

export function HeroDrawingSvg() {
  return (
    <svg
      viewBox="0 0 540 280"
      role="img"
      aria-label="End mill profile drawing with dimension callouts"
    >
      <defs>
        <marker
          id="arr-r"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 z" fill="#0E0E10" />
        </marker>
        <marker
          id="arr-l"
          viewBox="0 0 10 10"
          refX="1"
          refY="5"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M10,0 L0,5 L10,10 z" fill="#0E0E10" />
        </marker>
        <marker
          id="arr-u"
          viewBox="0 0 10 10"
          refX="5"
          refY="1"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M0,10 L5,0 L10,10 z" fill="#0E0E10" />
        </marker>
        <marker
          id="arr-d"
          viewBox="0 0 10 10"
          refX="5"
          refY="9"
          markerWidth="8"
          markerHeight="8"
          orient="auto"
        >
          <path d="M0,0 L5,10 L10,0 z" fill="#0E0E10" />
        </marker>
      </defs>

      <g stroke="#0E0E10" strokeWidth="1" fill="none">
        {/* Top length dimension */}
        <line x1="60" y1="120" x2="60" y2="60" />
        <line x1="500" y1="120" x2="500" y2="60" />
        <line
          x1="60"
          y1="78"
          x2="500"
          y2="78"
          markerStart="url(#arr-l)"
          markerEnd="url(#arr-r)"
        />

        {/* Tool body */}
        <rect x="60" y="120" width="220" height="40" fill="#ECE7DC" />
        <g stroke="#0E0E10" strokeWidth="0.65" opacity="0.7">
          <line x1="70" y1="120" x2="62" y2="160" />
          <line x1="90" y1="120" x2="82" y2="160" />
          <line x1="110" y1="120" x2="102" y2="160" />
          <line x1="130" y1="120" x2="122" y2="160" />
          <line x1="150" y1="120" x2="142" y2="160" />
          <line x1="170" y1="120" x2="162" y2="160" />
          <line x1="190" y1="120" x2="182" y2="160" />
          <line x1="210" y1="120" x2="202" y2="160" />
          <line x1="230" y1="120" x2="222" y2="160" />
          <line x1="250" y1="120" x2="242" y2="160" />
          <line x1="270" y1="120" x2="262" y2="160" />
        </g>
        <path d="M280 120 L296 128 L296 152 L280 160" fill="#ECE7DC" />
        <rect x="296" y="128" width="204" height="24" fill="#DFD9CB" />

        <line
          x1="40"
          y1="140"
          x2="520"
          y2="140"
          strokeDasharray="6 3 1 3"
          strokeWidth="0.7"
          opacity="0.7"
        />

        <line x1="60" y1="120" x2="20" y2="120" />
        <line x1="60" y1="160" x2="20" y2="160" />
        <line
          x1="36"
          y1="120"
          x2="36"
          y2="160"
          markerStart="url(#arr-u)"
          markerEnd="url(#arr-d)"
        />

        <line x1="500" y1="128" x2="535" y2="128" />
        <line x1="500" y1="152" x2="535" y2="152" />
        <line
          x1="520"
          y1="128"
          x2="520"
          y2="152"
          markerStart="url(#arr-u)"
          markerEnd="url(#arr-d)"
        />

        <line x1="60" y1="180" x2="60" y2="200" />
        <line x1="280" y1="180" x2="280" y2="200" />
        <line
          x1="60"
          y1="192"
          x2="280"
          y2="192"
          markerStart="url(#arr-l)"
          markerEnd="url(#arr-r)"
        />

        <line x1="370" y1="140" x2="420" y2="220" strokeWidth="0.75" />
        <line x1="420" y1="220" x2="470" y2="220" strokeWidth="0.75" />
        <circle cx="370" cy="140" r="2.5" fill="#E84A0F" stroke="none" />
      </g>

      <g fontFamily="JetBrains Mono, monospace" fill="#0E0E10">
        <text x="280" y="72" fontSize="11" textAnchor="middle">
          ⌀ L 75.00 ± 0.05
        </text>
        <text x="170" y="186" fontSize="10.5" textAnchor="middle">
          FL 26.00
        </text>
        <text x="32" y="142" fontSize="10.5" textAnchor="end">
          ⌀ 12.000
          <tspan dy="-3" fontSize="7" fill="#6C6A66">
            {" +0/-5µ"}
          </tspan>
        </text>
        <text x="524" y="142" fontSize="10.5">
          ⌀ 12.00 h6
        </text>
        <text x="478" y="218" fontSize="10" fill="#6C6A66">
          HELIX 38°
        </text>
        <text x="478" y="230" fontSize="10" fill="#E84A0F">
          RAKE +6°
        </text>
      </g>

      <g stroke="#0E0E10" strokeWidth="0.8" fill="none" opacity="0.6">
        <path d="M8 8 L20 8 M8 8 L8 20" />
        <path d="M532 8 L520 8 M532 8 L532 20" />
        <path d="M8 272 L20 272 M8 272 L8 260" />
        <path d="M532 272 L520 272 M532 272 L532 260" />
      </g>
    </svg>
  );
}
