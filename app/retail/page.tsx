import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"

export const metadata: Metadata = {
  title: "Retail Laser Engraving Hagerstown MD | Store Displays Product Labels Point-of-Sale Signs",
  description:
    "Professional retail laser engraving services in Hagerstown Maryland. Custom store displays, product labels, point-of-sale signage, promotional materials laser engraved on wood, acrylic, metal. Serving MD, DE, VA retail businesses with attractive display solutions.",
  keywords:
    "retail laser engraving Hagerstown MD, store displays Maryland, product labels laser cutting, point-of-sale signage MD DE VA, retail promotional materials, store branding laser engraved",
}

export default function RetailPage() {
  const retailServices = [
    {
      title: "Acrylic Displays & Modern Store Fixtures",
      description:
        "Contemporary acrylic displays and modern store fixtures that showcase products professionally and attract customer attention.",
      applications: [
        "Product showcase displays with integrated lighting compatibility",
        "Point-of-sale promotional material holders and stands",
        "Modern retail signage with clean, professional aesthetics",
        "Customer information displays and interactive elements",
        "Brand messaging and marketing communication displays",
        "Seasonal and promotional campaign display systems",
      ],
      image: "/images/retail-acrylic-displays.png",
      alt: "Retail acrylic displays and modern store fixtures laser cut Hagerstown MD",
    },
    {
      title: "Complete Retail System Integration",
      description:
        "Comprehensive retail display systems that create cohesive shopping experiences and support sales objectives.",
      applications: [
        "Integrated product display and information systems",
        "Customer journey and shopping experience enhancement",
        "Brand consistency across all retail touchpoints",
        "Sales support and product education materials",
        "Inventory management and product organization displays",
        "Customer service and support information systems",
      ],
      image: "/images/retail-complete-system.png",
      alt: "Complete retail system integration and display solutions laser engraved Maryland",
    },
    {
      title: "Premium Display Solutions & Luxury Retail",
      description:
        "High-end display solutions for premium retail environments that reflect quality and sophistication.",
      applications: [
        "Luxury product presentation and showcase systems",
        "Premium brand messaging and positioning displays",
        "High-quality materials and finishes for upscale retail",
        "Exclusive product launch and feature presentation",
        "VIP customer experience and service enhancement",
        "Boutique and specialty retail atmosphere creation",
      ],
      image: "/images/retail-premium-displays.png",
      alt: "Premium retail displays and luxury store fixtures laser engraved",
    },
    {
      title: "Traditional Signage & Classic Retail Elements",
      description:
        "Traditional retail signage and classic display elements that create timeless shopping environments.",
      applications: [
        "Classic storefront signage and traditional branding",
        "Heritage and established business identity displays",
        "Traditional retail fixtures and display elements",
        "Community-focused and local business signage",
        "Nostalgic and vintage-inspired retail displays",
        "Family business and generational branding materials",
      ],
      image: "/images/retail-traditional-signage.png",
      alt: "Traditional retail signage and classic store displays laser engraved Maryland",
    },
    {
      title: "Wooden Displays & Natural Retail Elements",
      description:
        "Natural wood displays and organic retail elements that create warm, inviting shopping environments.",
      applications: [
        "Natural wood product displays and organic presentation",
        "Eco-friendly and sustainable retail fixture solutions",
        "Rustic and farmhouse-style retail environments",
        "Artisan and handcrafted product showcase systems",
        "Local and regional product highlighting displays",
        "Seasonal and natural theme retail decorations",
      ],
      image: "/images/retail-wooden-displays.png",
      alt: "Wooden retail displays and natural store fixtures laser engraved",
    },
  ]

  return (
    <>
      <HeroSection
        title="Retail Laser Engraving Hagerstown Maryland"
        description="Attract customers and enhance your retail environment with custom laser-engraved displays, signage, and promotional materials in Hagerstown, MD. From point-of-sale signage to product showcases, we help Maryland, Delaware, and Virginia retail businesses create compelling shopping experiences with precision laser engraving on wood, acrylic, metal, and specialty materials that showcase your products and brand professionally."
        backgroundImage="/images/retail.png"
      />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Retail Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Engrave Everything understands that retail success depends on creating compelling shopping experiences
                that attract customers and showcase products effectively. Located in Hagerstown, Maryland, we specialize
                in custom laser engraving solutions that help retail businesses throughout the tri-state area create
                professional displays, clear signage, and attractive promotional materials that drive sales and enhance
                brand recognition.
              </p>
              <p className="text-gray-700 mb-6">
                From modern acrylic displays to traditional wooden fixtures, our laser engraving services support every
                retail environment, helping businesses create cohesive brand experiences that resonate with customers
                and support their shopping journey from browsing to purchase.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Customer Experience</h4>
                  <p className="text-gray-600 text-sm">Enhanced shopping journey</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Brand Consistency</h4>
                  <p className="text-gray-600 text-sm">Professional presentation</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/retail.png"
                  alt="Retail acrylic displays and modern store fixtures laser engraved"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional retail displays and store fixtures laser engraved for Maryland retail businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Retail Laser Engraving Services for Maryland Businesses
          </h2>
          <div className="space-y-12">
            {retailServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold text-hub-blue mb-4">{service.title}</h3>
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
                    <h4 className="font-semibold text-gray-900 mb-4">Retail Applications:</h4>
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

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Retail Environment with Custom Laser Engraving?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Engrave Everything today to discuss how we can help create attractive displays, professional
            signage, and promotional materials that enhance your retail environment and support your sales objectives in
            Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Retail Laser Quote
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
