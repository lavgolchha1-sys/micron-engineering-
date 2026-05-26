import { pullQuote } from "@/content/about";

export function PullQuote() {
  return (
    <section className="pull">
      <div className="container pull-inner">
        <div className="pull__mark">{pullQuote.mark}</div>
        <blockquote>
          {pullQuote.textBefore}
          <span className="accent">{pullQuote.textAccent}</span>
          {pullQuote.textAfter}
        </blockquote>
        <div className="pull__by">
          <span className="who">{pullQuote.authorWho}</span>
          <span>—</span>
          <span>{pullQuote.authorTitle}</span>
        </div>
      </div>
    </section>
  );
}
