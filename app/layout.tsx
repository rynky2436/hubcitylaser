import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { SITE_CONFIG } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Engrave Everything | Professional Laser Engraving & Cutting",
  description:
    "Precision laser engraving & cutting for businesses and personalized gifts. We serve Maryland, Virginia, and Washington, D.C. with on-site service and fast shipping.",
  keywords:
    "laser engraving Maryland, laser cutting Virginia, laser engraving Washington DC, custom signs, awards, industrial marking, promotional items, personalized gifts",
  openGraph: {
    title: "Engrave Everything | Professional Laser Engraving & Cutting",
    description:
      "Expert laser engraving and cutting on wood, metal, glass, acrylic, and more. Serving MD, VA, and Washington, D.C.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/materials-wood-glass.png",
        width: 1200,
        height: 630,
        alt: "Engrave Everything — Laser Engraving Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything | Professional Laser Engraving & Cutting",
    description: "Precision laser engraving and cutting services serving MD, VA, and Washington, D.C.",
    images: ["/images/materials-wood-glass.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.brandName,
    url: "https://engraveeverything.us",
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phoneHref,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Maryland" },
      { "@type": "AdministrativeArea", name: "Virginia" },
      { "@type": "AdministrativeArea", name: "Washington, D.C." },
    ],
    logo: "/images/engrave-everything-logo.png",
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {/* Organization-level JSON-LD without a storefront address to avoid misleading NAP for service areas */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
