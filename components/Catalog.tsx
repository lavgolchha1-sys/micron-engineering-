import Link from "next/link";
import { products } from "@/content/products";

export function Catalog() {
  return (
    <section className="section" id="products">
      <div className="container">
        <header className="section-head">
          <div>
            <div className="section-head__num">§01 / CATALOG</div>
            <span className="eyebrow">What we make</span>
            <h2>Cutting tools for every operation on your floor.</h2>
          </div>
          <Link href="/products" className="section-head__link">
            Full catalog →
          </Link>
        </header>

        <div className="catalog">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products#${p.slug}`}
              className="cat-row"
            >
              <span className="cat-row__num">{p.num}</span>
              <div className="cat-row__title">
                <h3>{p.shortTitle ?? p.title}</h3>
                <span className="meta">{p.meta}</span>
              </div>
              <p className="cat-row__desc">{p.catalogDesc}</p>
              <div className="cat-row__tags">
                {p.catalogTags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="cat-row__arr">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
