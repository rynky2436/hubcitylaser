import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Professional Laser Engraving & Cutting | Engrave Everything",
  description:
    "Precision laser engraving & cutting services for businesses and personalized gifts across Maryland, Virginia, and Washington D.C., including Hagerstown, Frederick, Bethesda, McLean, and Great Falls. Custom signs, awards, industrial marking, and more. Get a free quote!",
  keywords:
    "laser engraving Hagerstown MD, laser cutting Maryland, custom signs Delaware Virginia, wood metal glass engraving, business signage MD, promotional items Hagerstown, industrial laser cutting, laser engraving Bethesda MD, Potomac MD, Chevy Chase DC, McLean VA, Great Falls VA, Arlington VA, Falls Church VA, Vienna VA, Oakton VA, North Potomac MD, Frederick MD, DC laser engraving, Northern Virginia laser services",
  openGraph: {
    title: "Engrave Everything | Professional Laser Engraving & Cutting",
    description: "Expert laser engraving and cutting on various materials for businesses and personalized items.",
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
    title: "Professional Laser Engraving & Cutting | Engrave Everything",
    description: "Precision laser engraving and cutting services for businesses and personalized gifts.",
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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
              name: "Engrave Everything",
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
              url: "https://engraveeverything.com",
              telephone: "",
              priceRange: "$$",
              description:
                "Professional laser engraving and cutting services on wood, metal, glass for businesses and personalized gifts.",
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
