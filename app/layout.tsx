import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Professional Laser Engraving in Hagerstown, MD | Hub City Laser",
  description:
    "Precision laser engraving and cutting services on wood, metal, glass for businesses in Maryland, Delaware, Virginia. Custom signs, awards, promotional items, industrial marking.",
  keywords:
    "laser engraving Hagerstown MD, laser cutting Maryland, custom signs Delaware Virginia, wood metal glass engraving, business signage MD, promotional items Hagerstown, industrial laser cutting",
  openGraph: {
    title: "Hub City Laser Engraving Hagerstown MD | Professional Laser Services",
    description:
      "Expert laser engraving on wood, metal, glass in Hagerstown MD. Serving Maryland, Delaware, Virginia with custom signs, awards, promotional items.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/materials-wood-glass.png",
        width: 1200,
        height: 630,
        alt: "Hub City Laser Engraving Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Laser Engraving in Hagerstown, MD | Hub City Laser",
    description: "Precision laser engraving and cutting services on wood, metal, glass for businesses in MD, DE, VA.",
    images: ["/images/materials-wood-glass.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="geo.region" content="US-MD" />
        <meta name="geo.placename" content="Hagerstown" />
        <meta name="geo.position" content="39.6417;-77.7200" />
        <meta name="ICBM" content="39.6417, -77.7200" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Hub City Laser Engraving",
              image: "/images/materials-wood-glass.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hagerstown",
                addressRegion: "MD",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 39.6417,
                longitude: -77.72,
              },
              url: "https://hubcitylaser.com",
              telephone: "",
              priceRange: "$$",
              description:
                "Professional laser engraving and cutting services on wood, metal, glass for businesses in Maryland, Delaware, Virginia.",
              sameAs: [],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              servesCuisine: "Laser Engraving Services",
            }),
          }}
        />
      </head>
      <body className="bg-hub-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
