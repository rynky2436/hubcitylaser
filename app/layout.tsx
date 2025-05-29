import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Hub City Laser - Precision Laser Services for Every Industry",
    template: "%s | Hub City Laser",
  },
  description:
    "Professional laser cutting, engraving, and marking solutions for medical, industrial, retail, and more. Custom signage, equipment tags, and personalized gifts.",
  keywords: [
    "laser cutting",
    "laser engraving",
    "laser marking",
    "custom signage",
    "equipment tags",
    "personalized gifts",
    "medical laser services",
    "industrial marking",
    "professional signage",
    "precision laser",
  ],
  authors: [{ name: "Hub City Laser" }],
  creator: "Hub City Laser",
  publisher: "Hub City Laser",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hubcitylaser.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hub City Laser - Precision Laser Services for Every Industry",
    description:
      "Professional laser cutting, engraving, and marking solutions for medical, industrial, retail, and more.",
    url: "https://hubcitylaser.com",
    siteName: "Hub City Laser",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hub City Laser - Precision Laser Services",
    description: "Professional laser cutting, engraving, and marking solutions for every industry.",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "business",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
