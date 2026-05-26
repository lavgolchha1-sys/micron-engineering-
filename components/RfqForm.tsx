"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";

const CATEGORIES = [
  "HSS Tools",
  "Carbide Tipped Tools",
  "Solid Carbide Tools",
  "Milling Inserts",
  "Turning Inserts",
  "Tooling Accessories",
  "Custom / Made-to-Print",
  "Re-grinding Service",
];

export function RfqForm() {
  const [submitted, setSubmitted] = useState(false);
  const phone = site.phones[0];
  const endpoint = site.contactEndpoint;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;

    if (!endpoint) {
      // Demo mode: don't navigate, just show success
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const data = Object.fromEntries(new FormData(form).entries());
      // eslint-disable-next-line no-console
      console.log("RFQ submission (demo):", data);
      setSubmitted(true);
      form.reset();
    }
    // If endpoint is set, let the form POST natively
  };

  return (
    <form
      className="rfq"
      id="rfqForm"
      noValidate
      action={endpoint || undefined}
      method={endpoint ? "POST" : undefined}
      onSubmit={onSubmit}
    >
      <span className="rfq-tl" />
      <span className="rfq-tr" />
      <div className="rfq__head">
        <span>RFQ · ENQUIRY FORM</span>
        <span className="pn">FORM · v2.4</span>
      </div>
      <div className="rfq__title">Tell us what you need.</div>
      <div className="rfq__sub">
        THE MORE DETAIL · THE FASTER WE COME BACK WITH A USEFUL NUMBER
      </div>

      <div
        className={`form-success ${submitted ? "is-visible" : ""}`}
        role="status"
        aria-live="polite"
      >
        <strong>Enquiry Received · Ack 24 HRS</strong>
        You&apos;ll hear back from sales within one working day. For urgent
        requests, call {phone.number}.
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="name">
            Name <span className="req">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
          />
        </div>
        <div className="field">
          <label htmlFor="company">
            Company <span className="req">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            autoComplete="organization"
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">
            Email <span className="req">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            placeholder="+91"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="category">
          Product Category <span className="req">*</span>
        </label>
        <select id="category" name="category" required defaultValue="">
          <option value="" disabled>
            Select a category…
          </option>
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="material">Material Being Machined</label>
          <input
            type="text"
            id="material"
            name="material"
            placeholder="e.g. EN-19, SS 304, P20 @ 50 HRC"
          />
        </div>
        <div className="field">
          <label htmlFor="quantity">Quantity / Batch</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            placeholder="e.g. 25 pieces, monthly"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="details">
          Details / Specifications <span className="req">*</span>
        </label>
        <textarea
          id="details"
          name="details"
          required
          placeholder={`Tool type, sizes, geometry, coating, machine, application. Attach a drawing via email if you have one — ${site.emails.sales}`}
        />
      </div>

      <button type="submit" className="btn btn--primary btn--lg btn--full">
        Send Enquiry <span className="arr">→</span>
      </button>

      <p className="form-foot">
        DETAILS STAY WITH US · NO THIRD PARTIES · ACK WITHIN 1 WORKING DAY
      </p>
    </form>
  );
}
