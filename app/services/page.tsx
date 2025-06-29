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
      image: "/images/real-estate.png",
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

  const faqItems = [
    {
      question: "What materials can you laser engrave?",
      answer:
        "We can engrave and cut a wide range of materials including wood, metal (stainless steel, aluminum, brass), glass, acrylic, plastic, leather, and more. Contact us with your specific material for confirmation.",
    },
    {
      question: "How do I get a quote for my project?",
      answer:
        "You can request a free quote by filling out our contact form, emailing us your project details, or calling us directly. Please include material, size, quantity, and design specifics.",
    },
    {
      question: "What is the typical turnaround time?",
      answer:
        "Turnaround times vary based on project complexity and current workload, but most standard orders are completed within 3-5 business days. Rush services are available upon request.",
    },
    {
      question: "Can you help with design?",
      answer:
        "Yes, our team can assist with design modifications or create new designs based on your ideas. We work with various file formats including vector (AI, EPS, SVG) and high-resolution raster images.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes, we offer competitive pricing and discounts for bulk orders. Please specify your desired quantity when requesting a quote.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We are located in Hagerstown, Maryland, and proudly serve businesses and individuals throughout Maryland (MD), Delaware (DE), Virginia (VA), the Washington D.C. Metro area, and Northern Virginia.",
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
            <h1 className="text-3xl font-bold text-hub-blue mb-4">
              Professional Laser Engraving on Wood, Metal, Glass & Everything
            </h1>
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
                    <Image src={service.image || "/placeholder.svg"} alt={service.alt} fill className="object-cover" />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <h2 className="text-2xl font-semibold text-hub-blue mb-4">{service.category}</h2>
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
            <h2 className="text-2xl font-bold text-hub-blue mb-6 text-center">
              Materials We Laser Engrave in Hagerstown MD
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/materials-wood-glass.png"
                    alt="Wood laser engraving materials Hagerstown MD"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-hub-blue mb-2">Wood Laser Engraving</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Hardwood</li>
                  <li>Bamboo</li>
                  <li>Plywood</li>
                  <li>MDF</li>
                </ul>
                <Link
                  href="/services/wood-engraving"
                  className="text-hub-blue hover:underline mt-2 inline-block text-sm"
                >
                  Learn more
                </Link>
              </div>
              <div className="text-center">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/materials-metal.png"
                    alt="Metal laser cutting services Maryland"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-hub-blue mb-2">Metal Laser Cutting</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Stainless Steel</li>
                  <li>Aluminum</li>
                  <li>Brass</li>
                  <li>Anodized Metal</li>
                </ul>
                <Link
                  href="/services/metal-cutting"
                  className="text-hub-blue hover:underline mt-2 inline-block text-sm"
                >
                  Learn more
                </Link>
              </div>
              <div className="text-center">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/materials-glass-etching.png"
                    alt="Glass laser etching services Hagerstown"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-hub-blue mb-2">Glass Laser Etching</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Tempered Glass</li>
                  <li>Mirrors</li>
                  <li>Glassware</li>
                  <li>Windows</li>
                </ul>
                <Link
                  href="/services/glass-etching"
                  className="text-hub-blue hover:underline mt-2 inline-block text-sm"
                >
                  Learn more
                </Link>
              </div>
              <div className="text-center">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/materials-restaurant-hospitality.png"
                    alt="Restaurant and hospitality materials laser engraved"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-hub-blue mb-2">Other Materials</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Acrylic</li>
                  <li>Plastic</li>
                  <li>Leather</li>
                  <li>Everything!</li>
                </ul>
                <Link
                  href="/services/acrylic-signs"
                  className="text-hub-blue hover:underline mt-2 inline-block text-sm"
                >
                  Learn more about Acrylic
                </Link>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-hub-blue mb-8 text-center">
              Industry-Specific Laser Engraving Examples
            </h2>
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
                  <h3 className="font-semibold text-hub-blue mb-2">Medical Device Engraving</h3>
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
                  <h3 className="font-semibold text-hub-blue mb-2">Restaurant & Food Service</h3>
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
                  <h3 className="font-semibold text-hub-blue mb-2">Agriculture & Farming</h3>
                  <p className="text-sm text-gray-600">Equipment identification, farm signage, and livestock tags</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
              Frequently Asked Questions About Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-hub-blue mb-2">{item.question}</h3>
                  <p className="text-gray-700 text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-hub-blue text-hub-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Laser Engraving Project in Hagerstown MD?</h2>
            <p className="text-blue-100 mb-6">
              Contact Engrave Everything today to discuss your laser engraving needs and receive a personalized quote
              for wood, metal, glass cutting and engraving services in Maryland, Delaware, and Virginia.
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
