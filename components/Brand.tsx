import Link from "next/link";
import { site } from "@/content/site";

export function Brand({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`brand ${className}`}
      aria-label={`${site.brand.name} — Home`}
    >
      <span className="brand-mark" aria-hidden="true">
        {site.brand.mark}
      </span>
      <span className="brand-text">
        <strong>{site.brand.name}</strong>
        <small>{site.brand.tagline}</small>
      </span>
    </Link>
  );
}
