import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

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

export default function LocationTemplate({
  title,
  description,
  keywords,
  locationName,
  locationLandmark,
  zipCodes,
  nearbyLocations,
  image,
}: LocationTemplateProps) {
  // This metadata will be overridden by the page-specific metadata
  // but is included here for completeness if this were a standalone component.
  const metadata: Metadata = {
    title: title,
    description: description,
    keywords: keywords,
    openGraph: {
      title: title,
      description: description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
    },
  }

  return (
    <div className="bg-hub-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-hub-blue text-hub-white py-20 md:py-32 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Laser Engraving Services in ${locationName}`}
          fill
          className="absolute inset-0 object-cover opacity-20"
          priority
          sizes="100vw"
        />
        <div className="container-max relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {`Engrave Everything — Laser Engraving ${locationName}`}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            {`Engrave Everything delivers custom laser engraving in ${locationName}—signs, awards, gifts. Request your quote today!`}
          </p>
          <Link href="/contact" className="btn-secondary mt-8">
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Introduction and Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hub-blue mb-4">
              {`Precision Laser Engraving & Cutting in ${locationName}`}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {`Engrave Everything is proud to offer unparalleled laser engraving and cutting services right here in ${locationName}. We are dedicated to providing businesses and individuals in the area with exceptional quality, meticulous precision, and outstanding customer service for all their custom engraving needs. Whether you're located near ${locationLandmark} or anywhere in the ${locationName} area, our advanced laser technology is ready to bring your vision to life.`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-hub-blue mb-6">Comprehensive Laser Engraving Capabilities</h3>
              <p className="text-gray-700 mb-4">
                At Engrave Everything, we leverage state-of-the-art laser technology to work with a diverse range of
                materials and achieve various engraving styles. Our expertise ensures your project, big or small, is
                executed with the highest standards of quality and durability.
              </p>

              <h4 className="text-xl font-semibold text-hub-blue mb-3">Material Engraving & Cutting:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Wood</li>
                <li>Metal (stainless steel, aluminum, brass, copper)</li>
                <li>Acrylic & Plastic</li>
                <li>Glass</li>
                <li>Leather</li>
                <li>Stone (marble, granite, slate)</li>
                <li>Rubber</li>
                <li>Fabric & Textiles</li>
                <li>Paper & Cardboard</li>
              </ul>

              <h4 className="text-xl font-semibold text-hub-blue mb-3">Laser Types & Techniques:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>CO₂ Laser Engraving & Cutting (for non-metals like wood, acrylic, glass, leather)</li>
                <li>Fiber Laser Marking (for deep and durable metal marking, annealing, and coloration)</li>
                <li>Diode Laser Engraving (versatile for various materials)</li>
              </ul>

              <h4 className="text-xl font-semibold text-hub-blue mb-3">Engraving Styles:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Deep/Durable Engraving (adjustable depth for lasting marks)</li>
                <li>Surface Etching (precise marking for dyes or coatings)</li>
                <li>Rotary Engraving (perfect for cylindrical items like glassware, tumblers, bottles)</li>
                <li>Coloration & Annealing on Metals (creating vibrant, permanent marks without material removal)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-hub-blue mb-6">Applications for Businesses & Individuals</h3>
              <p className="text-gray-700 mb-4">
                Our laser engraving services cater to a wide array of applications, from enhancing corporate branding to
                creating unique personalized gifts.
              </p>

              <h4 className="text-xl font-semibold text-hub-blue mb-3">Popular Applications:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Corporate Awards, Executive Plaques, & Trophies</li>
                <li>Personalized Gifts (custom glassware, jewelry, leather goods, cutting boards)</li>
                <li>Custom Signs & Nameplates (durable indoor and outdoor signage)</li>
                <li>Event Signage (weddings, galas, business functions, directional signs)</li>
                <li>Industrial & Branding Uses (barcodes, serial plates, part markings, equipment tags)</li>
                <li>Promotional Items & Branded Merchandise</li>
              </ul>

              <h4 className="text-xl font-semibold text-hub-blue mb-3">Custom Design Services:</h4>
              <p className="text-gray-700 mb-4">
                We offer comprehensive custom design support, assisting with vector and illustration preparation to
                ensure your designs are perfectly optimized for laser engraving. We work with common file formats
                including AI, DXF, and SVG.
              </p>

              <h3 className="text-2xl font-semibold text-hub-blue mb-6 mt-8">
                Why Choose Engrave Everything in {locationName}?
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>**Unmatched Craftsmanship:** Our skilled technicians ensure every detail is perfect.</li>
                <li>**Premium Material Quality:** We use only the best materials for durable and stunning results.</li>
                <li>**Exceptional Precision:** Advanced lasers deliver intricate and accurate engravings.</li>
                <li>**Fast Turnaround:** Efficient processes mean your projects are completed promptly.</li>
                <li>
                  **Local Delivery:** We offer convenient local delivery to ZIP codes including {zipCodes.join(", ")}{" "}
                  and surrounding areas.
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hub-blue mb-4">
              {`Get Your Free Engrave Everything Quote for ${locationName} Today!`}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Ready to start your next laser engraving project? Contact us for a personalized quote. We are committed to
              providing top-tier service and results for all your custom needs in {locationName}.
            </p>
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
          </div>

          <div className="mt-12 text-center text-gray-700">
            <p className="mb-2">
              We also proudly serve nearby communities such as{" "}
              {nearbyLocations.map((loc, index) => (
                <span key={loc.href}>
                  <Link href={loc.href} className="text-hub-blue hover:underline">
                    {loc.name}
                  </Link>
                  {index < nearbyLocations.length - 1 ? ", " : "."}
                </span>
              ))}
            </p>
            <p>
              <Link href="/" className="text-hub-blue hover:underline">
                Engrave Everything — Hagerstown laser engraving
              </Link>{" "}
              |{" "}
              <Link href="/areas-we-serve" className="text-hub-blue hover:underline">
                View All Areas We Serve
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
