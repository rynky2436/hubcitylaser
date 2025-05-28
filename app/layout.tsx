import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Hub City Laser Engraving Hagerstown MD | Wood Metal Glass Cutting Services",
  description:
    "Professional laser engraving and cutting services in Hagerstown, Maryland serving MD, DE, VA. Custom signs, awards, promotional items on wood, metal, glass. Industrial, medical, restaurant laser engraving.",
  keywords:
    "laser engraving Hagerstown MD, laser cutting Maryland, custom signs Delaware Virginia, wood metal glass engraving, business signage MD, promotional items Hagerstown, industrial laser cutting",
  openGraph: {
    title: "Hub City Laser Engraving Hagerstown MD | Professional Laser Services",
    description:
      "Expert laser engraving on wood, metal, glass in Hagerstown MD. Serving Maryland, Delaware, Virginia with custom signs, awards, promotional items.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
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
      </head>
      <body className="bg-hub-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
