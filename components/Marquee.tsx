import { marqueeTokens } from "@/content/products";

export function Marquee() {
  // Duplicate the array for seamless loop
  const tokens = [...marqueeTokens, ...marqueeTokens];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {tokens.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
