import type { Metadata } from "next";
import { PageHead } from "@/components/PageHead";
import { RfqForm } from "@/components/RfqForm";
import { ContactInfo } from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact & RFQ | Micron Engineering Industries",
  description:
    "Request a quote, send a drawing, or visit our Kolkata factory. Most quotes returned within 24 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageHead
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        num="§ RFQ · DRAWING-BASED SUPPLY"
        eyebrow="Drawing in · quote out"
        h1="Send a drawing. Get a quote."
        lede="Most standard quotes go out within 24 hours. For custom or to-print work, expect a response within two working days — usually faster. We work to PDF, DWG, STEP, or a worn tool in hand."
        meta={[
          { k: "Standard Quote", v: "< 24 HRS" },
          { k: "Lead Time", v: "3–10 D" },
          { k: "MOQ Standard", v: "1 PC" },
          { k: "MOQ Custom", v: "10 PC" },
        ]}
      />

      <section className="section" style={{ paddingTop: 0 }} id="rfq">
        <div className="container">
          <div className="contact-layout">
            <RfqForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
