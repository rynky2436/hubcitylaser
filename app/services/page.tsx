import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Laser Engraving Services Hagerstown MD | Wood Metal Glass Cutting | Hub City Laser",
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
        "Custom business signs laser engraved on wood, metal, glass",
        "Office door signs and professional nameplates",
        "Directional signage and wayfinding displays",
        "Safety and compliance signs for Maryland businesses",
        "Wayfinding displays laser cut for commercial properties",
      ],
    },
    {
      category: "Recognition & Awards Laser Engraving",
      image: "/images/technology.png",
      alt: "Corporate awards and achievement plaques laser engraved Maryland",
      items: [
        "Achievement plaques laser engraved on premium materials",
        "Employee recognition awards for MD DE VA companies",
        "Sports trophies and athletic awards laser cutting",
        "Academic awards and graduation recognition",
        "Corporate milestone recognition laser engraved plaques",
      ],
    },
    {
      category: "Industrial Identification & Labels",
      image: "/images/industrial.png",
      alt: "Industrial safety signs and equipment tags laser engraved",
      items: [
        "Equipment nameplates laser engraved on metal and plastic",
        "Asset identification tags for industrial applications",
        "Serial number laser engraving for manufacturers",
        "Compliance labels and safety marking",
        "Inventory management tags laser cut for durability",
      ],
    },
    {
      category: "Promotional Items & Marketing Materials",
      image: "/images/retail.png",
      alt: "Retail promotional items and marketing displays laser cut",
      items: [
        "Branded merchandise laser engraved with company logos",
        "Trade show materials and promotional displays",
        "Marketing displays laser cut on various materials",
        "Customer gifts and corporate promotional products",
        "Branded items laser engraved for Maryland businesses",
      ],
    },
    {
      category: "Personalized Gifts & Custom Items",
      image: "/images/hospitality.png",
      alt: "Custom personalized gifts and home items laser engraved",
      items: [
        "Wedding keepsakes laser engraved on wood and metal",
        "Retirement gifts and milestone recognition",
        "Custom home décor laser cut and engraved",
        "Pet accessories and identification tags",
        "Holiday ornaments and seasonal gifts",
      ],
    },
  ]

  return (
    <>
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Laser Engraving Services Hagerstown Maryland</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive laser engraving and cutting services for businesses and individuals in Hagerstown, MD. From
            professional signage to personalized gifts, we deliver precision laser craftsmanship on wood, metal, glass,
            and all materials for every project throughout Maryland, Delaware, and Virginia.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-hub-blue mb-4">
              Professional Laser Engraving on Wood, Metal, Glass & Everything
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hub City Laser provides expert laser engraving and cutting services on all materials. Located in
              Hagerstown, Maryland, we serve businesses throughout the tri-state area with precision laser solutions.
            </p>
          </div>

          <div className="space-y-12 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <Image src={service.image || "/placeholder.svg"} alt={service.alt} fill className="object-cover" />
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

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-hub-blue mb-6 text-center">
              Materials We Laser Engrave in Hagerstown MD
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-hub-blue mb-2">Wood Laser Engraving</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Hardwood</li>
                  <li>Bamboo</li>
                  <li>Plywood</li>
                  <li>MDF</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-hub-blue mb-2">Metal Laser Cutting</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Stainless Steel</li>
                  <li>Aluminum</li>
                  <li>Brass</li>
                  <li>Anodized Metal</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-hub-blue mb-2">Glass Laser Etching</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Tempered Glass</li>
                  <li>Mirrors</li>
                  <li>Glassware</li>
                  <li>Windows</li>
                </ul>
              </div>
              <div className="text-center">
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
              Contact Hub City Laser today to discuss your laser engraving needs and receive a personalized quote for
              wood, metal, glass cutting and engraving services in Maryland, Delaware, and Virginia.
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
