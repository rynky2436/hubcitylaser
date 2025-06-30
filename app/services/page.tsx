import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "All Services | Engrave Everything",
  description:
    "Explore our comprehensive laser engraving and cutting services for businesses in Maryland, Delaware, and Virginia. Custom signs, awards, industrial marking, and more.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "business-signs",
      title: "Custom Business Signs",
      description:
        "Professional laser engraved signage on wood, metal, glass for MD businesses, ideal for custom logo production and batch signage creation.",
      image: "/images/professional.png",
      link: "/services/business-signage",
    },
    {
      id: "awards",
      title: "Awards & Recognition Plaques",
      description:
        "Laser engraved achievement awards and recognition items for corporate programs and employee appreciation in Hagerstown MD.",
      image: "/images/technology.png",
      link: "/services/awards-recognition",
    },
    {
      id: "promotional",
      title: "Promotional Laser Items",
      description:
        "Branded merchandise production and marketing materials laser cut on all materials for effective campaign support.",
      image: "/images/retail.png",
      link: "/services/promotional-items",
    },
    {
      id: "industrial-identification",
      title: "Industrial Identification & Labels",
      description:
        "Durable laser-engraved industrial identification, equipment tags & compliance labels. Serving MD, DE, VA manufacturers.",
      image: "/images/industrial.png",
      link: "/services/industrial-identification",
    },
    {
      id: "personalized-gifts",
      title: "Personalized Gifts & Custom Items",
      description: "Custom laser engraved gifts on wood, metal, glass for special occasions and corporate gifting.",
      image: "/images/real-estate.png",
      link: "/services/personalized-gifts",
    },
  ]

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-8 text-center">Our Services</h1>

      <section className="mb-12">
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
          Engrave Everything offers a comprehensive range of precision laser engraving and cutting services tailored for
          businesses and individuals across Maryland, Delaware, and Virginia. From enhancing your brand with custom
          signage to creating memorable personalized gifts, our state-of-the-art technology ensures exceptional quality
          and durability on a wide variety of materials.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#002B5C] mb-2">{service.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <Link href={service.link} className="btn-primary" prefetch={false}>
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="section-padding bg-gray-50 mt-12 rounded-lg">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-hub-blue mb-4">Ready to Start Your Laser Engraving Project?</h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact Engrave Everything today for a free consultation and quote. Our experts are ready to help you bring
            your vision to life with precision and quality.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
