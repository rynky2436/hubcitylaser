import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../../components/HeroSection"

export const metadata: Metadata = {
  title: "Acrylic Laser Cutting & Engraving Hagerstown MD | Custom Acrylic Signs & Displays",
  description:
    "Custom acrylic laser cutting and engraving services in Hagerstown, MD. Create vibrant acrylic signs, retail displays, awards, and custom shapes. Precision cutting and etching for businesses in Maryland, Delaware, and Virginia.",
  keywords:
    "acrylic laser cutting Hagerstown MD, acrylic engraving Maryland, custom acrylic signs, retail acrylic displays, acrylic awards, laser cut acrylic shapes, plastic laser cutting, plexiglass engraving, clear acrylic signs",
}

export default function AcrylicSignsPage() {
  const acrylicServices = [
    {
      title: "Custom Acrylic Signs & Lettering",
      description:
        "Modern and vibrant acrylic signs for businesses, offices, and events. Perfect for indoor and outdoor use.",
      applications: [
        "Business lobby signs with 3D acrylic lettering",
        "Office door signs and directional signage",
        "Backlit acrylic signs for enhanced visibility",
        "Custom acrylic logos and branding elements",
        "Event and trade show signage",
      ],
      image: "/images/retail-acrylic-displays.png",
      alt: "Custom laser cut acrylic sign for a business lobby",
    },
    {
      title: "Retail Displays & Product Showcases",
      description: "Attractive acrylic displays designed to highlight products and enhance the retail environment.",
      applications: [
        "Product risers and display stands",
        "Point-of-sale displays and brochure holders",
        "Jewelry and cosmetic display cases",
        "Custom shelving and merchandising units",
        "Interactive displays and signage for retail",
      ],
      image: "/images/retail-premium-displays.png",
      alt: "Acrylic retail display for product showcase",
    },
    {
      title: "Acrylic Awards & Trophies",
      description:
        "Sleek and modern acrylic awards for corporate recognition, academic achievements, and special events.",
      applications: [
        "Corporate recognition awards with engraved logos",
        "Academic achievement trophies and plaques",
        "Sports awards and custom medallions",
        "Employee appreciation awards",
        "Custom-shaped acrylic awards",
      ],
      image: "/images/technology.png",
      alt: "Laser engraved acrylic award trophy",
    },
    {
      title: "Custom Acrylic Shapes & Components",
      description: "Precision laser cutting for intricate acrylic shapes, components, and artistic designs.",
      applications: [
        "Custom stencils and templates from acrylic",
        "Architectural models and prototypes",
        "Art installations and decorative elements",
        "Machine guards and protective covers",
        "Custom light panels and diffusers",
      ],
      image: "/images/materials-restaurant-hospitality.png",
      alt: "Laser cut intricate acrylic shapes for art or components",
    },
  ]

  const faqItems = [
    {
      question: "What types of acrylic can you cut and engrave?",
      answer:
        "We work with cast acrylic, extruded acrylic, and plexiglass in various thicknesses and colors, including clear, frosted, and colored sheets.",
    },
    {
      question: "What is the difference between laser cutting and engraving on acrylic?",
      answer:
        "Laser cutting acrylic produces clean, polished edges, ideal for shapes and signs. Laser engraving creates a frosted, etched effect on the surface, perfect for text, logos, and intricate designs.",
    },
    {
      question: "Can acrylic signs be used outdoors?",
      answer:
        "Yes, acrylic is weather-resistant and UV stable, making it an excellent choice for outdoor signage. We can also provide mounting solutions.",
    },
    {
      question: "How do I provide my design for acrylic projects?",
      answer:
        "We accept designs in vector formats like AI, EPS, SVG, or PDF for cutting, and high-resolution raster images (JPG, PNG) for engraving. Our team can also assist with design if needed.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Acrylic Laser Cutting & Engraving Hagerstown MD"
        description="Custom acrylic laser cutting and engraving services in Hagerstown, MD. Create vibrant acrylic signs, retail displays, awards, and custom shapes with precision. Serving businesses throughout Maryland, Delaware, and Virginia."
        backgroundImage="/images/retail-acrylic-displays.png"
      />

      <section className="section-padding">
        <div className="container-max">
          <h1 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Custom Acrylic Signs & Displays in Hagerstown, MD
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto text-center">
            Engrave Everything specializes in high-quality acrylic laser cutting and engraving, offering versatile
            solutions for modern signage, eye-catching retail displays, and custom components. Our precision technology
            delivers clean cuts and crisp engravings, perfect for enhancing your brand's visibility and product
            presentation in Maryland, Delaware, and Virginia.
          </p>

          <div className="space-y-12">
            {acrylicServices.map((service, index) => (
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
            Frequently Asked Questions About Acrylic Laser Services
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
          <h2 className="text-3xl font-bold mb-4">Ready for Custom Acrylic Laser Cutting or Engraving?</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Engrave Everything today for a personalized quote on custom acrylic signs, displays, and components
            in Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Acrylic Laser Quote
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
