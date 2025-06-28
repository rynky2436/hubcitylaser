import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../../components/HeroSection"

export const metadata: Metadata = {
  title: "Metal Laser Cutting & Engraving Services Hagerstown MD | Industrial Metal Marking",
  description:
    "Precision metal laser cutting and engraving services in Hagerstown, MD. Durable industrial metal marking, equipment tags, serial numbers, and custom metal signs. Working with stainless steel, aluminum, brass, and anodized metals for businesses in MD, DE, VA.",
  keywords:
    "metal laser cutting Hagerstown MD, metal engraving Maryland, industrial metal marking, equipment tags laser, serial number engraving, custom metal signs, stainless steel laser, aluminum laser cutting, brass engraving, anodized metal marking",
}

export default function MetalCuttingPage() {
  const metalServices = [
    {
      title: "Industrial Metal Marking & Identification",
      description: "Durable and precise laser marking for industrial components, equipment, and asset tracking.",
      applications: [
        "Serial numbers and part identification on machinery",
        "Asset tags and inventory labels for industrial equipment",
        "Compliance marking for regulatory standards (e.g., CE, FDA)",
        "Control panel and switch identification",
        "Tool marking for inventory and theft prevention",
      ],
      image: "/images/industrial-part-numbering.png",
      alt: "Industrial laser marking on metal parts and equipment",
    },
    {
      title: "Custom Metal Signs & Plaques",
      description:
        "Create professional and long-lasting metal signs for businesses, offices, and outdoor applications.",
      applications: [
        "Business storefront and lobby signs",
        "Office door signs and nameplates",
        "Directional and wayfinding signage",
        "Commemorative plaques and dedication signs",
        "Safety and warning signs on durable metal",
      ],
      image: "/images/professional.png",
      alt: "Custom laser cut metal sign for a business",
    },
    {
      title: "Metal Component Cutting",
      description: "Precision laser cutting of various metals for custom parts, prototypes, and intricate designs.",
      applications: [
        "Custom metal gaskets and shims",
        "Prototype components for engineering and manufacturing",
        "Decorative metal panels and art pieces",
        "Small batch production of metal parts",
        "Stencils and templates from thin metal sheets",
      ],
      image: "/images/materials-metal.png",
      alt: "Precision laser cutting of metal components",
    },
    {
      title: "Personalized Metal Gifts & Awards",
      description: "Unique and durable personalized gifts and awards crafted from various metals.",
      applications: [
        "Engraved metal tumblers and drinkware",
        "Custom metal keychains and accessories",
        "Corporate awards and recognition plaques",
        "Personalized metal jewelry and keepsakes",
        "Metal business cards with engraved details",
      ],
      image: "/images/hospitality-personalized-accessories.png",
      alt: "Personalized laser engraved metal tumbler",
    },
  ]

  const faqItems = [
    {
      question: "What types of metal can you engrave and cut?",
      answer:
        "We work with a variety of metals including stainless steel, aluminum (anodized and bare), brass, copper, and some coated metals. Our capabilities vary by metal type and thickness.",
    },
    {
      question: "Is the metal marking permanent?",
      answer:
        "Yes, laser marking on metal creates a permanent, high-contrast mark that is resistant to abrasion, chemicals, and high temperatures, making it ideal for industrial applications.",
    },
    {
      question: "Can you cut thick metal?",
      answer:
        "Our laser cutting capabilities are best suited for thinner gauge metals and intricate designs. For very thick metals, we may recommend alternative methods or specialized services.",
    },
    {
      question: "What information can be marked on metal?",
      answer:
        "We can mark text, serial numbers, barcodes, QR codes, logos, graphics, and complex designs. This is ideal for traceability, branding, and identification.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Metal Laser Cutting & Engraving Services Hagerstown MD"
        description="Precision metal laser cutting and engraving services in Hagerstown, MD. Offering durable industrial metal marking, equipment tags, serial numbers, and custom metal signs. Serving businesses throughout Maryland, Delaware, and Virginia."
        backgroundImage="/images/materials-metal.png"
      />

      <section className="section-padding">
        <div className="container-max">
          <h1 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Precision Metal Laser Services in Hagerstown, MD
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            Engrave Everything provides advanced metal laser cutting and engraving services, delivering high-precision
            results for industrial, commercial, and artistic applications. Our state-of-the-art lasers ensure durable
            marking and clean cuts on a variety of metals, meeting the stringent demands of businesses in Maryland,
            Delaware, and Virginia.
          </p>

          <div className="space-y-12">
            {metalServices.map((service, index) => (
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
            Frequently Asked Questions About Metal Laser Services
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
          <h2 className="text-3xl font-bold mb-4">Ready for Precision Metal Laser Engraving or Cutting?</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Engrave Everything today for a personalized quote on custom metal laser services in Hagerstown,
            Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Metal Laser Quote
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
