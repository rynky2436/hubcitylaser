import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"

export const metadata: Metadata = {
  title: "Laser Engraving Services Hagerstown MD | Wood Metal Glass Cutting | Engrave Everything",
  description:
    "Complete laser engraving and cutting services in Hagerstown Maryland. Custom signs, plaques, nameplates, equipment tags, promotional items on wood, metal, glass. Serving MD, DE, VA businesses.",
  keywords:
    "laser engraving services Hagerstown MD, laser cutting wood metal glass, custom signs Maryland, promotional items laser engraving, equipment tags MD DE VA, business signage Hagerstown",
}

export default function ServicesPage() {
  const services = [
    {
      category: "Custom Business Signage Solutions",
      image: "/images/professional.png",
      alt: "Professional office signs and nameplates laser engraved Hagerstown MD",
      items: [
        "Custom business signs laser engraved on wood, metal, glass with high-resolution logo integration",
        "Office door signs and professional nameplates with various finishes (matte, polished)",
        "Directional signage and wayfinding displays for large commercial properties",
        "Safety and compliance signs for Maryland businesses, meeting industry standards",
        "Wayfinding displays laser cut for commercial properties, including large format options",
      ],
    },
    {
      category: "Recognition & Awards Laser Engraving",
      image: "/images/technology.png",
      alt: "Corporate awards and achievement plaques laser engraved Maryland",
      items: [
        "Achievement plaques laser engraved on premium materials (wood, acrylic, metal) with intricate designs",
        "Employee recognition awards for MD DE VA companies, available for batch production",
        "Sports trophies and athletic awards laser cutting with custom shapes and sizes",
        "Academic awards and graduation recognition with personalized details",
        "Corporate milestone recognition laser engraved plaques for high-volume orders",
      ],
    },
    {
      category: "Industrial Identification & Labels",
      image: "/images/industrial.png",
      alt: "Industrial safety signs and equipment tags laser engraved",
      items: [
        "Equipment nameplates laser engraved on metal and plastic for extreme durability",
        "Asset identification tags for industrial applications with precise serial numbering",
        "Serial number laser engraving for manufacturers, ensuring traceability and compliance",
        "Compliance labels and safety marking, resistant to chemicals and abrasion",
        "Inventory management tags laser cut for durability and seamless integration into existing systems",
      ],
    },
    {
      category: "Promotional Items & Marketing Materials",
      image: "/images/retail.png",
      alt: "Retail promotional items and marketing displays laser cut",
      items: [
        "Branded merchandise laser engraved with company logos for consistent brand representation",
        "Trade show materials and promotional displays, designed for impact and reusability",
        "Marketing displays laser cut on various materials, including custom shapes and sizes",
        "Customer gifts and corporate promotional products, available for bulk orders",
        "Branded items laser engraved for Maryland businesses, supporting large-scale campaigns",
      ],
    },
    {
      category: "Personalized Gifts & Custom Items",
      image: "/images/real-estate.png",
      alt: "Custom personalized gifts and home items laser engraved",
      items: [
        "Wedding keepsakes laser engraved on wood and metal with custom designs",
        "Retirement gifts and milestone recognition, tailored to individual achievements",
        "Custom home décor laser cut and engraved, including intricate patterns",
        "Pet accessories and identification tags, durable and personalized",
        "Holiday ornaments and seasonal gifts, available for batch production for corporate gifting",
      ],
    },
  ]

  return (
    <>
      <HeroSection
        title="Complete Laser Engraving Services Hagerstown Maryland"
        description="Comprehensive laser engraving and cutting services for businesses and individuals in Hagerstown, MD. From professional signage to personalized gifts, we deliver precision laser craftsmanship on wood, metal, glass, and all materials for every project throughout Maryland, Delaware, and Virginia."
        backgroundImage="/images/materials-wood-glass.png"
      />

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hub-blue mb-4">
              Professional Laser Engraving on Wood, Metal, Glass & Everything
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Engrave Everything provides expert laser engraving and cutting services on all materials. Located in
              Hagerstown, Maryland, we serve businesses throughout the tri-state area with precision laser solutions.
            </p>
          </div>

          <div className="space-y-12 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.category.toLowerCase().replace(/\s+/g, "-")}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <h3 className="text-2xl font-semibold text-hub-blue mb-4">{service.category}</h3>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-start">
                        <span className="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* New Section: Technical Capabilities for Businesses */}
          <div className="bg-hub-blue text-hub-white p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Technical Capabilities for Business Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">High-Resolution & Intricate Designs</h4>
                <p className="text-blue-100 text-sm">
                  Our advanced laser systems can engrave complex logos, fine text, and intricate patterns with
                  exceptional precision, ensuring your branding stands out.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Large Format & Custom Sizing</h4>
                <p className="text-blue-100 text-sm">
                  We handle projects of various dimensions, from small components to large signs and panels, providing
                  custom cutting and engraving to your exact specifications.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Diverse Surface Finishes</h4>
                <p className="text-blue-100 text-sm">
                  Achieve the desired aesthetic with options for polished, matte, textured, or deep engravings on a wide
                  range of materials.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Batch Processing & Scalability</h4>
                <p className="text-blue-100 text-sm">
                  Whether you need a few prototypes or thousands of units, our efficient processes are designed to
                  handle batch production and scale with your business needs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Design Integration & File Compatibility</h4>
                <p className="text-blue-100 text-sm">
                  We work seamlessly with your existing designs, supporting various file formats including CAD, vector
                  graphics, and high-resolution images.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Quality Control & Durability</h4>
                <p className="text-blue-100 text-sm">
                  Rigorous quality checks ensure every piece meets your standards, with durable markings designed to
                  withstand industrial environments and frequent use.
                </p>
              </div>
            </div>
          </div>

          {/* Materials Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-hub-blue mb-6 text-center">
              Materials We Laser Engrave in Hagerstown MD
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/materials-wood-glass.png"
                    alt="Wood laser engraving materials Hagerstown MD"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h4 className="font-semibold text-hub-blue mb-2">Wood Laser Engraving</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Hardwood</li>
                  <li>Bamboo</li>
                  <li>Plywood</li>
                  <li>MDF</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/materials-metal.png"
                    alt="Metal laser cutting services Maryland"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h4 className="font-semibold text-hub-blue mb-2">Metal Laser Cutting</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Stainless Steel</li>
                  <li>Aluminum</li>
                  <li>Brass</li>
                  <li>Anodized Metal</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/materials-glass-etching.png"
                    alt="Glass laser etching services Hagerstown"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h4 className="font-semibold text-hub-blue mb-2">Glass Laser Etching</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Tempered Glass</li>
                  <li>Mirrors</li>
                  <li>Glassware</li>
                  <li>Windows</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/materials-restaurant-hospitality.png"
                    alt="Restaurant and hospitality materials laser engraved"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <h4 className="font-semibold text-hub-blue mb-2">Other Materials</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Acrylic</li>
                  <li>Plastic</li>
                  <li>Leather</li>
                  <li>Everything!</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-hub-blue mb-8 text-center">
              Industry-Specific Laser Engraving Examples
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video relative">
                  <Image
                    src="/images/medical.png"
                    alt="Medical equipment laser engraving and compliance labels Hagerstown MD"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-hub-blue mb-2">Medical Device Engraving</h4>
                  <p className="text-sm text-gray-600">
                    Equipment tags, compliance labels, and medical facility signage
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video relative">
                  <Image
                    src="/images/restaurants.png"
                    alt="Restaurant laser engraving menu boards table numbers Maryland"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-hub-blue mb-2">Restaurant & Food Service</h4>
                  <p className="text-sm text-gray-600">
                    Menu boards, table numbers, glassware, and promotional displays
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video relative">
                  <Image
                    src="/images/agriculture.png"
                    alt="Agriculture equipment tags and farm signage laser engraved"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-hub-blue mb-2">Agriculture & Farming</h4>
                  <p className="text-sm text-gray-600">Equipment identification, farm signage, and livestock tags</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-hub-blue text-hub-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Laser Engraving Project in Hagerstown MD?</h3>
            <p className="text-blue-100 mb-6">
              Contact Engrave Everything today to discuss your laser engraving needs and receive a personalized quote
              for wood, metal, glass cutting and engraving services in Maryland, Delaware, and Virginia. We handle
              projects of all sizes, from single custom pieces to large bulk orders.
            </p>
            <Link href="/contact" className="btn-secondary">
              Get Your Free Laser Engraving Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
