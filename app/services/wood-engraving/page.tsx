import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../../components/HeroSection"

export const metadata: Metadata = {
  title: "Wood Laser Engraving Services Hagerstown MD | Custom Wood Signs & Gifts",
  description:
    "Expert wood laser engraving services in Hagerstown, MD. Custom wood signs, personalized cutting boards, wooden awards, and unique gifts. Precision engraving on hardwood, bamboo, plywood, and MDF for businesses and individuals in MD, DE, VA.",
  keywords:
    "wood laser engraving Hagerstown MD, custom wood signs Maryland, personalized cutting boards, wooden awards, laser engraved gifts, hardwood engraving, bamboo engraving, plywood laser cutting, MDF laser engraving",
}

export default function WoodEngravingPage() {
  const woodServices = [
    {
      title: "Custom Wood Signs & Plaques",
      description:
        "Create bespoke wood signs for businesses, homes, or special events. Durable and beautifully engraved for lasting impressions.",
      applications: [
        "Business storefront signs and interior decor",
        "Personalized home address signs and welcome plaques",
        "Event signage for weddings, anniversaries, and parties",
        "Directional signs for parks, trails, and properties",
        "Memorial plaques and commemorative markers",
      ],
      image: "/images/materials-wood-glass.png",
      alt: "Custom laser engraved wood sign for business or home",
    },
    {
      title: "Personalized Wood Gifts",
      description:
        "Unique and thoughtful gifts for any occasion, custom engraved with names, dates, or special messages.",
      applications: [
        "Personalized cutting boards for weddings and housewarmings",
        "Engraved wooden picture frames and photo albums",
        "Custom wooden coasters and drinkware accessories",
        "Wooden ornaments and seasonal decor",
        "Personalized wooden boxes and keepsake items",
      ],
      image: "/images/real-estate-housewarming-gifts.png",
      alt: "Personalized laser engraved wooden cutting board",
    },
    {
      title: "Wooden Awards & Trophies",
      description: "Elegant wooden awards and trophies for corporate recognition, sports, or academic achievements.",
      applications: [
        "Corporate achievement plaques and employee recognition awards",
        "Sports trophies and athletic awards",
        "Academic awards and graduation recognition",
        "Custom wooden medals and medallions",
        "Retirement gifts and milestone celebration awards",
      ],
      image: "/images/technology.png",
      alt: "Laser engraved wooden award plaque",
    },
    {
      title: "Industrial Wood Marking",
      description: "Durable marking on wood for industrial applications, including part identification and branding.",
      applications: [
        "Tool handles and equipment parts identification",
        "Crate and pallet marking for logistics",
        "Branding for wooden products and packaging",
        "Safety warnings and instructional labels on wood",
        "Inventory tags and asset tracking on wooden items",
      ],
      image: "/images/agriculture-tool-marking.png",
      alt: "Industrial laser marking on wooden tool handle",
    },
  ]

  const faqItems = [
    {
      question: "What types of wood can you engrave?",
      answer:
        "We can engrave a wide variety of wood types, including hardwood (oak, maple, cherry), bamboo, plywood, MDF, and more. The best material depends on your desired outcome.",
    },
    {
      question: "How deep can the laser engrave into wood?",
      answer:
        "The depth of engraving can be controlled precisely, from light surface etching for intricate details to deeper cuts for a more tactile feel. We can adjust based on your project needs.",
    },
    {
      question: "Can you cut wood with a laser?",
      answer:
        "Yes, our lasers can precisely cut various thicknesses of wood, including plywood and MDF, for custom shapes, inlays, and intricate designs.",
    },
    {
      question: "What is the typical turnaround time for wood engraving projects?",
      answer:
        "Turnaround times vary by project complexity and quantity, but we strive for quick completion, typically 3-5 business days for most orders. Rush services are available.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Wood Laser Engraving Services Hagerstown MD"
        description="Expert wood laser engraving services in Hagerstown, MD. Create custom wood signs, personalized cutting boards, wooden awards, and unique gifts with precision and detail. Serving businesses and individuals throughout Maryland, Delaware, and Virginia."
        backgroundImage="/images/materials-wood-glass.png"
      />

      <section className="section-padding">
        <div className="container-max">
          <h1 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Custom Wood Laser Engraving & Cutting in Hagerstown, MD
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            Engrave Everything offers high-quality wood laser engraving and cutting services, transforming ordinary wood
            into personalized masterpieces. Whether you need custom business signs, unique gifts, or intricate wooden
            components, our precision laser technology ensures stunning results on a variety of wood types.
          </p>

          <div className="space-y-12">
            {woodServices.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h2 className="text-xl font-semibold text-hub-blue mb-4">{service.title}</h2>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="aspect-video relative rounded-lg overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h3 className="font-semibold text-gray-900 mb-4">Applications:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Frequently Asked Questions About Wood Laser Engraving
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
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Wood Engraving Project?</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Engrave Everything today for a personalized quote on custom wood laser engraving and cutting
            services in Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Wood Engraving Quote
            </Link>
            <Link href="/services" className="btn-primary bg-white text-hub-blue hover:bg-gray-100">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
