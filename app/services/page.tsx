import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Laser Engraving Services | Washington DC, Maryland & Virginia",
  description:
    "Professional laser engraving services for businesses and individuals. Custom signs, awards, industrial labels, promotional items, and personalized gifts. Serving DC, MD & VA.",
}

interface Service {
  title: string
  description: string
  image: string
  imageAlt: string
  items: string[]
  slug: string
}

const services: Service[] = [
  {
    title: "Custom Business Signage Solutions",
    description: "Professional signage for your business needs",
    image: "/images/professional.png",
    imageAlt: "Custom laser engraved business signage and office nameplates",
    items: [
      "Office door signs and nameplates",
      "Reception area and lobby signage",
      "Directional and wayfinding displays",
      "ADA-compliant accessibility signage",
      "Safety and compliance signs",
    ],
    slug: "business-signage",
  },
  {
    title: "Recognition & Awards Laser Engraving",
    description: "Celebrate achievements with custom awards",
    image: "/images/technology.png",
    imageAlt: "Custom laser engraved awards and recognition plaques",
    items: [
      "Achievement plaques and recognition awards",
      "Employee service awards",
      "Sports trophies and athletic awards",
      "Academic and graduation recognition",
      "Corporate milestone recognition",
    ],
    slug: "awards-recognition",
  },
  {
    title: "Industrial Identification & Labels",
    description: "Durable marking solutions for industrial applications",
    image: "/images/industrial.png",
    imageAlt: "Durable laser engraved industrial identification tags and equipment labels",
    items: [
      "Equipment nameplates and asset tags",
      "Serial number marking and tracking",
      "Compliance labels and safety marking",
      "Control panel identification",
      "Inventory management tags",
    ],
    slug: "industrial-identification",
  },
  {
    title: "Promotional Items & Marketing Materials",
    description: "Branded merchandise for your marketing needs",
    image: "/images/retail.png",
    imageAlt: "Custom laser engraved promotional products and branded merchandise",
    items: [
      "Branded merchandise and corporate gifts",
      "Trade show materials and displays",
      "Marketing displays and signage",
      "Customer appreciation gifts",
      "Branded items for promotional campaigns",
    ],
    slug: "promotional-items",
  },
  {
    title: "Personalized Gifts & Custom Items",
    description: "Unique gifts for special occasions",
    image: "/images/real-estate.png",
    imageAlt: "Custom laser engraved personalized gifts and keepsakes",
    items: [
      "Wedding keepsakes and anniversary gifts",
      "Retirement and milestone recognition",
      "Custom home décor and housewares",
      "Pet accessories and identification tags",
      "Holiday ornaments and seasonal gifts",
    ],
    slug: "personalized-gifts",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#002B5C]">Our Laser Engraving Services</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-700">
          Engrave Everything provides premium laser engraving services for businesses and individuals throughout
          Washington DC, Maryland, and Virginia. Our precision laser technology allows us to create custom solutions for
          a wide range of applications.
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.imageAlt}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="mb-4 text-3xl font-semibold text-[#002B5C]">{service.title}</h2>
              <p className="mb-6 text-lg text-gray-700">{service.description}</p>
              <ul className="mb-6 space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 text-[#002B5C]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${service.slug}`}
                className="inline-block rounded bg-[#002B5C] px-6 py-3 text-white transition-colors hover:bg-[#001F42]"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-[#002B5C] p-8 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mb-6 text-lg">
          Contact us today to discuss your laser engraving needs and get a personalized quote.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded bg-white px-8 py-3 text-[#002B5C] transition-colors hover:bg-[#A5ACAF]"
        >
          Contact Us Now
        </Link>
      </div>
    </div>
  )
}
