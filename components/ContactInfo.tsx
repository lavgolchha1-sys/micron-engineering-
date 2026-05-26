import { site } from "@/content/site";

export function ContactInfo() {
  const [primaryPhone, secondaryPhone] = site.phones;
  const email = site.emails.sales;
  const { factory, office } = site.addresses;

  return (
    <aside className="contact-info">
      <div className="contact-block">
        <h4>Call</h4>
        <p>
          <a href={`tel:${primaryPhone.tel}`}>{primaryPhone.number}</a>
          {secondaryPhone && (
            <>
              <br />
              <a href={`tel:${secondaryPhone.tel}`}>{secondaryPhone.number}</a>
            </>
          )}
        </p>
        <span className="note">{site.hours}</span>
      </div>

      <div className="contact-block">
        <h4>Email</h4>
        <p>
          <a href={`mailto:${email}`}>
            {email.split("@")[0]}@<wbr />
            {email.split("@")[1]}
          </a>
        </p>
        <span className="note">ATTACH DRAWINGS · SPECS · SAMPLE PHOTOS</span>
      </div>

      <div className="contact-block">
        <h4>{factory.label}</h4>
        <address>
          {factory.lines.map((l, i) => (
            <span key={i}>
              {l}
              {i < factory.lines.length - 1 && <br />}
            </span>
          ))}
        </address>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(factory.mapsQuery)}`}
          target="_blank"
          rel="noopener"
          className="map"
        >
          Get directions →
        </a>
      </div>

      <div className="contact-block">
        <h4>{office.label}</h4>
        <address>
          {office.lines.map((l, i) => (
            <span key={i}>
              {l}
              {i < office.lines.length - 1 && <br />}
            </span>
          ))}
        </address>
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(office.mapsQuery)}`}
          target="_blank"
          rel="noopener"
          className="map"
        >
          Get directions →
        </a>
      </div>
    </aside>
  );
}
