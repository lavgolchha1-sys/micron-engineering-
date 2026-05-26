import { principles } from "@/content/about";

export function ValuesGrid() {
  return (
    <div className="values-grid">
      {principles.map((p) => (
        <div className="value" key={p.num}>
          <div className="value__num">{p.num}</div>
          <h3>{p.h3}</h3>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}
