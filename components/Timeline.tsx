import { timeline } from "@/content/about";

export function Timeline() {
  return (
    <div className="timeline">
      {timeline.map((t) => (
        <div className="tl-row" key={t.year}>
          <div className="year">{t.year}</div>
          <div>
            <h4>{t.title}</h4>
            <p>{t.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
