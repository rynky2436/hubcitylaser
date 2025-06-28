import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Laser Engraving & Cutting Services | Hagerstown MD | Engrave Everything",
  description:
    "Expert laser engraving & cutting in Hagerstown MD—wood, metal, glass, acrylic. Custom signs, awards, industrial marking & personalized gifts. Fast turnaround, top-rated service for MD, DE, VA, DC Metro, Northern VA.",
  keywords:
    "laser engraving Hagerstown MD, laser cutting Maryland, custom signs Washington D.C. Metro, wood metal glass engraving, business signage Northern VA, promotional items Hagerstown, industrial laser cutting, medical device engraving, restaurant signage, personalized gifts, acrylic signs, custom awards",
  openGraph: {
    title: "Engrave Everything | Professional Laser Services in Hagerstown, MD & DC Metro",
    description:
      "Expert laser engraving on wood, metal, glass in Hagerstown MD. Serving Maryland, Delaware, Virginia, Washington D.C. Metro, and Northern Virginia with custom signs, awards, promotional items, and more.",
    type: "website",
    locale: "en_US",
    url: "https://engraveeverything.com",
    images: [
      {
        url: "https://engraveeverything.com/images/materials-wood-glass.png",
        width: 1200,
        height: 630,
        alt: "Engrave Everything Laser Engraving Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Engraving & Cutting Services | Hagerstown MD | Engrave Everything",
    description:
      "Precision laser engraving and cutting services on wood, metal, glass for businesses in MD, DE, VA, DC Metro, Northern VA.",
    images: ["https://engraveeverything.com/images/materials-wood-glass.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
        {/* Google Analytics - Replace with your actual GA4 Measurement ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Hub City Laser",
              image: "https://engraveeverything.com/images/materials-wood-glass.png",
              url: "https://engraveeverything.com",
              telephone: "+12401234567", // Replace with your actual business phone number
              priceRange: "$$",
              description:
                "Custom laser engraving and cutting services on wood, metal, glass, and acrylic in Hagerstown, MD.",
              areaServed: [
                {
                  "@type": "City",
                  name: "Hagerstown",
                  address: {
                    "@type": "PostalAddress",
                    addressRegion: "MD",
                  },
                },
                {
                  "@type": "State",
                  name: "Maryland",
                },
                {
                  "@type": "State",
                  name: "Delaware",
                },
                {
                  "@type": "State",
                  name: "Virginia",
                },
                {
                  "@type": "City",
                  name: "Washington D.C.",
                },
                {
                  "@type": "State",
                  name: "Northern Virginia",
                },
              ],
              sameAs: [
                // Add your social media links here if available
                // "https://www.facebook.com/yourhubcitylaser",
                // "https://www.instagram.com/yourhubcitylaser",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
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
