import React from "react"
import type { ReactElement } from "react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

interface LocationTemplateProps {
  title: string
  description: string
  keywords: string
  locationName: string
  locationLandmark: string
  zipCodes: string[]
  nearbyLocations: { name: string; href: string }[]
  image: string
}

export function generateMetadata(data: {
  name: string
  title: string
  description: string
  keywords: string
}): Metadata {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
    },
  }
}

export default function LocationTemplate({
  title,
  description,
  keywords,
  locationName,
  locationLandmark,
  zipCodes,
  nearbyLocations,
  image,
}: LocationTemplateProps): ReactElement {
  return (
    <div className="bg-hub-white text-gray-900 dark:bg-slate-900 dark:text-gray-100">
      <section className="section-padding bg-hub-blue text-hub-white text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{`Laser Engraving Services in ${locationName}`}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Hub City Laser Engraving delivers custom laser engraving in {locationName}—signs, awards, and gifts with
            unmatched quality, precision, and dedicated service. We are proud to serve businesses and individuals near{" "}
            {locationLandmark}.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-hub-blue dark:text-hub-white mb-6">
              Your Premier Laser Engraving Partner in {locationName}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              At Hub City Laser Engraving, we combine state-of-the-art laser technology with meticulous craftsmanship to
              produce exceptional results for all your engraving and cutting needs. Whether you're looking for corporate
              awards, personalized gifts, or industrial markings, our team in {locationName} is dedicated to bringing
              your vision to life with precision and speed.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We specialize in a wide array of materials and techniques, ensuring versatility for any project. Our
              commitment to quality and customer satisfaction makes us the trusted choice for laser engraving services
              in the {locationName} area.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Free Quote Today!
            </Link>
          </div>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={
                image ||
                `/placeholder.svg?height=1080&width=1920&query=scenic view of ${encodeURIComponent(locationName) || "/placeholder.svg"}`
              }
              alt={`Laser Engraving in ${locationName}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50 dark:bg-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-hub-blue dark:text-hub-white text-center mb-10">
            Comprehensive Laser Engraving Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-hub-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-hub-blue dark:text-hub-white mb-3">
                Material Engraving & Cutting
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Wood, Metal (stainless steel, aluminum), Acrylic</li>
                <li>Glass, Leather, Stone, Rubber</li>
                <li>Fabric, Paper, Cardboard</li>
              </ul>
            </div>
            <div className="bg-hub-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-hub-blue dark:text-hub-white mb-3">Laser Types & Techniques</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>CO₂ engraving/cutting (non-metals)</li>
                <li>Fiber laser (deep metal marking, annealing, coloration)</li>
                <li>Diode engraving (versatile applications)</li>
                <li>Deep/durable engraving (adjustable depth)</li>
                <li>Surface etching (dye, coatings)</li>
                <li>Rotary engraving for cylindrical items (glassware, tumblers)</li>
              </ul>
            </div>
            <div className="bg-hub-white dark:bg-slate-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-hub-blue dark:text-hub-white mb-3">Popular Applications</h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Corporate awards, executive plaques, trophies</li>
                <li>Personalized gifts (glassware, jewelry, leather goods)</li>
                <li>Custom signs & nameplates (indoor/outdoor)</li>
                <li>Event signage (weddings, galas, business functions)</li>
                <li>Industrial/branding uses (barcodes, serial plates, part markings)</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-hub-blue dark:text-hub-white mb-3">Custom Design Services</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We offer comprehensive design support, including vector/illustration preparation and working with various
              file formats like AI, DXF, and SVG, to ensure your designs are perfectly translated into the final
              product.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hub-blue dark:text-hub-white mb-6">
            Why Choose Hub City Laser Engraving in {locationName}?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Our dedication to superior craftsmanship, use of high-quality materials, and commitment to precision set us
            apart. We pride ourselves on fast turnaround times and offer convenient local delivery to ZIP codes
            including {zipCodes.join(", ")}. Experience the difference of working with a local partner who understands
            your needs.
          </p>
          <Link href="/contact" className="btn-primary">
            Get your free Hub City Laser Engraving quote for {locationName} today!
          </Link>
          {nearbyLocations.length > 0 && (
            <p className="text-md text-gray-600 dark:text-gray-400 mt-8">
              We also serve{" "}
              {nearbyLocations.map((loc, index) => (
                <React.Fragment key={loc.href}>
                  <Link href={loc.href} className="text-hub-blue dark:text-hub-silver hover:underline">
                    {loc.name}
                  </Link>
                  {index < nearbyLocations.length - 1 && ", "}
                </React.Fragment>
              ))}
              .
            </p>
          )}
          <p className="text-md text-gray-600 dark:text-gray-400 mt-4">
            Looking for more? Visit our{" "}
            <Link href="/areas-we-serve" className="text-hub-blue dark:text-hub-silver hover:underline">
              Areas We Serve
            </Link>{" "}
            page or return to the{" "}
            <Link href="/" className="text-hub-blue dark:text-hub-silver hover:underline">
              Hub City Laser Engraving homepage
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
