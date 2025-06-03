import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"

export const metadata: Metadata = {
  title: "Professional Office Laser Engraving Hagerstown MD | Custom Signs Nameplates Awards",
  description:
    "Professional office laser engraving services in Hagerstown Maryland. Custom office signs, nameplates, awards, desk accessories laser engraved on wood, metal, glass. Serving MD, DE, VA law firms, accounting, consulting, corporate offices.",
  keywords:
    "professional office laser engraving Hagerstown MD, custom office signs Maryland, nameplates laser cutting, corporate awards MD DE VA, law firm signage, accounting office signs, consulting firm laser engraving",
}

export default function ProfessionalPage() {
  const professionalServices = [
    {
      title: "Executive Office Signage & Nameplates",
      description:
        "Professional executive office signage that creates impressive first impressions and reinforces your corporate brand.",
      applications: [
        "Executive office door signs with professional titles",
        "Custom nameplates for desks and conference rooms",
        "Reception area company branding and logo displays",
        "Professional directory signs for multi-office buildings",
        "Conference room identification and booking displays",
        "Executive suite wayfinding and navigation signs",
      ],
      image: "/images/professional-executive-office.png",
      alt: "Executive office signs and professional nameplates laser engraved Hagerstown MD",
    },
    {
      title: "Legal Services & Law Firm Signage",
      description:
        "Sophisticated legal office signage that conveys professionalism and builds client confidence in your legal services.",
      applications: [
        "Law firm reception signs with partner names and specialties",
        "Attorney office door signs with credentials and titles",
        "Legal practice area identification and specialization signs",
        "Court room and mediation room professional signage",
        "Client consultation room privacy and identification signs",
        "Legal library and research area organization signs",
      ],
      image: "/images/professional-legal-services.png",
      alt: "Legal services and law firm signage laser engraved Maryland",
    },
    {
      title: "Real Estate Office Branding & Client Materials",
      description:
        "Professional real estate office materials that enhance your brand and support client relationships.",
      applications: [
        "Real estate office reception and branding displays",
        "Agent desk nameplates with contact information",
        "Property listing displays and marketing materials",
        "Client meeting room professional signage",
        "Real estate achievement and sales recognition awards",
        "Open house and property showing professional materials",
      ],
      image: "/images/professional-real-estate.png",
      alt: "Real estate office branding and professional materials laser engraved",
    },
    {
      title: "Hospitality & Service Industry Professional Signage",
      description: "Professional hospitality signage that enhances guest experience and operational efficiency.",
      applications: [
        "Hotel and restaurant management office signs",
        "Guest services and concierge professional displays",
        "Staff identification and department organization signs",
        "Service area and operational facility signage",
        "Guest amenity and facility information displays",
        "Professional hospitality awards and recognition materials",
      ],
      image: "/images/professional-hospitality.png",
      alt: "Hospitality and service industry professional signage laser engraved",
    },
  ]

  return (
    <>
      <HeroSection
        title="Professional Office Laser Engraving Hagerstown Maryland"
        description="Elevate your professional image with custom laser-engraved office signage, awards, and accessories in Hagerstown, MD. Serving law firms, accounting practices, consulting firms, and corporate offices throughout Maryland, Delaware, and Virginia with precision laser engraving on wood, metal, glass, and premium materials."
        backgroundImage="/images/professional.png"
      />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Office Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Engrave Everything specializes in creating sophisticated professional office materials that enhance your
                corporate image and support your business operations. Located in Hagerstown, Maryland, we understand the
                importance of professional presentation in building client confidence and maintaining a polished
                business environment.
              </p>
              <p className="text-gray-700 mb-6">
                From executive office signage to corporate awards, our laser engraving services help professional
                businesses throughout the tri-state area create impressive environments that reflect their expertise and
                commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Professional Quality</h4>
                  <p className="text-gray-600 text-sm">Premium materials and finishes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Corporate Branding</h4>
                  <p className="text-gray-600 text-sm">Consistent brand representation</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/professional.png"
                  alt="Professional executive office signs and corporate branding laser engraved"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional executive office signage and corporate branding materials laser engraved for Maryland
                businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Professional Office Laser Engraving Services
          </h2>
          <div className="space-y-12">
            {professionalServices.map((service, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-4">Professional Applications:</h4>
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
            Ready to Enhance Your Professional Image with Custom Office Signage?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Engrave Everything today to discuss how we can help create professional office signage, awards, and
            accessories that reflect your business excellence and enhance your corporate environment in Hagerstown,
            Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Professional Office Quote
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
