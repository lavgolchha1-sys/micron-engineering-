import Link from "next/link";
import { products } from "@/content/products";

export function ProductIndex() {
  return (
    <aside className="prod-index" aria-label="Product categories">
      <h4>Categories</h4>
      <ol>
        {products.map((p) => (
          <li key={p.slug}>
            <a href={`#${p.slug}`}>{p.shortTitle ?? p.title}</a>
          </li>
        ))}
      </ol>
      <Link href="/contact" className="btn btn--primary btn--full">
        Request a Quote <span className="arr">→</span>
      </Link>
    </aside>
  );
}
