import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Areas We Serve | Engrave Everything Laser Engraving",
  description:
    "Engrave Everything provides professional laser engraving and cutting services across Maryland, Virginia, and Washington D.C. Find a location near you!",
  keywords:
    "laser engraving Maryland, laser engraving Virginia, laser engraving Washington DC, areas we serve, custom laser services",
  openGraph: {
    title: "Areas We Serve | Engrave Everything Laser Engraving",
    description:
      "Engrave Everything provides professional laser engraving and cutting services across Maryland, Virginia, and Washington D.C. Find a location near you!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areas We Serve | Engrave Everything Laser Engraving",
    description:
      "Engrave Everything provides professional laser engraving and cutting services across Maryland, Virginia, and Washington D.C. Find a location near you!",
  },
}

export default function AreasWeServePage() {
  const locations = [
    { name: "Great Falls, VA", href: "/locations/great-falls-va", image: "/placeholder.svg?height=300&width=400" },
    { name: "McLean, VA", href: "/locations/mclean-va", image: "/placeholder.svg?height=300&width=400" },
    { name: "Falls Church, VA", href: "/locations/falls-church-va", image: "/placeholder.svg?height=300&width=400" },
    { name: "Vienna, VA", href: "/locations/vienna-va", image: "/placeholder.svg?height=300&width=400" },
    { name: "Tysons Corner, VA", href: "/locations/tysons-corner-va", image: "/placeholder.svg?height=300&width=400" },
    { name: "Potomac, MD", href: "/locations/potomac-md", image: "/placeholder.svg?height=300&width=400" },
    { name: "Bethesda, MD", href: "/locations/bethesda-md", image: "/placeholder.svg?height=300&width=400" },
    { name: "Chevy Chase, DC", href: "/locations/chevy-chase-dc", image: "/placeholder.svg?height=300&width=400" },
    { name: "Georgetown, DC", href: "/locations/georgetown-dc", image: "/placeholder.svg?height=300&width=400" },
    {
      name: "Cathedral Heights/AU Park, DC",
      href: "/locations/cathedral-heights-au-park-dc",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Woodley Park/Cleveland Park, DC",
      href: "/locations/woodley-park-cleveland-park-dc",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="bg-hub-white text-gray-900">
      <section className="section-padding bg-hub-blue text-hub-white text-center">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Areas We Serve</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Engrave Everything proudly extends its professional laser engraving and cutting services across a wide range
            of communities in Maryland, Virginia, and Washington D.C. Find a location near you to discover how we can
            bring your custom projects to life.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-hub-blue text-center mb-12">Our Service Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="bg-hub-white border border-hub-silver rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="aspect-video relative">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={`Laser Engraving Services in ${location.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hub-blue mb-2 group-hover:text-blue-800">
                    {location.name}
                  </h3>
                  <p className="text-gray-600">
                    Custom laser engraving, cutting, and marking services for businesses and individuals.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-hub-blue mb-4">Don't See Your Location?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Even if your specific city isn't listed, we frequently serve surrounding areas. Contact us today to discuss
            your project and see how we can assist you.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us for a Custom Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
