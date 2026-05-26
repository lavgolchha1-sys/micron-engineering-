import Link from "next/link";
import { site } from "@/content/site";

type CtaBandProps = {
  heading: string;
  /** mono-uppercase subhead, dot-separated */
  sub: string;
  /** Primary CTA — usually "Request a Quote" / "Send a Drawing" */
  primary: { label: string; href: string };
  /** Optional secondary — defaults to a phone call */
  secondary?: { label: string; href: string };
};

export function CtaBand({
  heading,
  sub,
  primary,
  secondary,
}: CtaBandProps) {
  const phone = site.phones[0];
  const sec = secondary ?? {
    label: `Call ${phone.number}`,
    href: `tel:${phone.tel}`,
  };

  return (
    <section className="cta">
      <div className="container">
        <div>
          <h2>{heading}</h2>
          <p>{sub}</p>
        </div>
        <div className="cta-actions">
          <Link href={primary.href} className="btn btn--primary btn--lg">
            {primary.label} <span className="arr">→</span>
          </Link>
          <a href={sec.href} className="btn btn--ghost-dark btn--lg">
            {sec.label}
          </a>
        </div>
      </div>
    </section>
  );
}
