import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
    locale: site.meta.locale,
  },
};

export const viewport: Viewport = {
  themeColor: site.meta.themeColor,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Manufacturer",
              name: "Micron Engineering Industries",
              url: "https://www.micronengineeringindustries.in/",
              foundingDate: String(site.meta.foundedYear),
              telephone: site.phones[0].tel,
              address: [
                {
                  "@type": "PostalAddress",
                  streetAddress: site.addresses.factory.lines[0],
                  addressLocality: "Kolkata",
                  postalCode: "700053",
                  addressRegion: "WB",
                  addressCountry: "IN",
                },
              ],
              areaServed: "IN",
              knowsAbout: [
                "HSS Tools",
                "Carbide Tipped Tools",
                "Solid Carbide Tools",
                "Milling Inserts",
                "Turning Inserts",
                "Tooling Accessories",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
