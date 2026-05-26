import Link from "next/link";
import { site } from "@/content/site";
import { footerNav } from "@/content/nav";

export function Footer() {
  const phone = site.phones[0];
  const email = site.emails.sales;
  const factory = site.addresses.factory;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="foot-top">
          <div className="foot-brand">
            <Link href="/" className="brand">
              <span className="brand-mark">{site.brand.mark}</span>
              <span className="brand-text">
                <strong>{site.brand.name}</strong>
                <small>{site.brand.tagline}</small>
              </span>
            </Link>
            <p>
              Manufacturing precision cutting tools in Kolkata for over four
              decades. HSS, carbide, and inserts for India&apos;s machining
              floors.
            </p>
          </div>

          <div className="foot-col">
            <h4>{footerNav.catalog.heading}</h4>
            <ul>
              {footerNav.catalog.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>{footerNav.company.heading}</h4>
            <ul>
              {footerNav.company.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <address className="foot-addr">
              <strong>{factory.label}</strong>
              {factory.lines[0]}
              <br />
              {factory.lines[1]}
              {factory.lines[2] ? `, ${factory.lines[2].split(", ")[0]}` : ""}
            </address>
            <address className="foot-addr">
              <strong>Reach Us</strong>
              <a href={`tel:${phone.tel}`}>{phone.number}</a>
              <br />
              <a href={`mailto:${email}`}>
                {email.split("@")[0]}@<wbr />
                {email.split("@")[1]}
              </a>
            </address>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{site.copyright}</span>
          <span>{site.legal}</span>
        </div>
      </div>
    </footer>
  );
}
