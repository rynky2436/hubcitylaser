import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"

export const metadata: Metadata = {
  title: "Real Estate Laser Engraving Hagerstown MD | Property Signs Client Gifts Office Branding",
  description:
    "Professional real estate laser engraving services in Hagerstown Maryland. Custom property signs, client appreciation gifts, office branding, housewarming gifts laser engraved on wood, metal, glass. Serving MD, DE, VA real estate agents, brokers, property management.",
  keywords:
    "real estate laser engraving Hagerstown MD, property signs Maryland, real estate client gifts, housewarming gifts laser engraved, real estate office branding MD DE VA, property management signage",
}

export default function RealEstatePage() {
  const realEstateServices = [
    {
      title: "Professional Real Estate Branding & Office Signage",
      description:
        "Professional real estate office branding that builds client confidence and showcases your market expertise.",
      applications: [
        "Real estate office reception signs with agent photos and specialties",
        "Agent desk nameplates with contact information and credentials",
        "Property listing displays and market showcase materials",
        "Client consultation room professional signage and branding",
        "Real estate team recognition and achievement displays",
        "Open house and property showing professional materials",
      ],
      image: "/images/real-estate-professional-branding.png",
      alt: "Professional real estate branding and office signage laser engraved Hagerstown MD",
    },
    {
      title: "Client Appreciation & Closing Gifts",
      description:
        "Thoughtful client appreciation gifts that strengthen relationships and encourage referrals in the real estate business.",
      applications: [
        "Personalized closing gifts with property address and date",
        "Custom cutting boards with family name and home coordinates",
        "Engraved picture frames for first home photos",
        "Real estate milestone recognition and anniversary gifts",
        "Client referral appreciation and thank you gifts",
        "Holiday and seasonal client appreciation materials",
      ],
      image: "/images/real-estate-client-gifts.png",
      alt: "Real estate client appreciation gifts laser engraved Maryland",
    },
    {
      title: "Housewarming & New Home Gifts",
      description:
        "Custom housewarming gifts that help new homeowners celebrate their milestone and remember your service.",
      applications: [
        "Personalized welcome signs with family name and address",
        "Custom home coordinates and GPS location keepsakes",
        "Housewarming cutting boards and kitchen accessories",
        "New home blessing and inspirational wall art",
        "Family name displays and home décor items",
        "Garden markers and outdoor home personalization",
      ],
      image: "/images/real-estate-housewarming-gifts.png",
      alt: "Housewarming and new home gifts laser engraved",
    },
    {
      title: "Office Amenities & Property Management",
      description:
        "Professional property management and real estate office organization solutions that improve efficiency.",
      applications: [
        "Property management office organization and identification",
        "Tenant information and building directory displays",
        "Maintenance request and service coordination signage",
        "Property showing and tour guidance materials",
        "Real estate marketing and promotional display systems",
        "Client meeting room and consultation area signage",
      ],
      image: "/images/real-estate-office-amenities.png",
      alt: "Real estate office amenities and property management signage laser engraved",
    },
    {
      title: "Property Management & Building Signage",
      description: "Professional property management signage that enhances property value and tenant satisfaction.",
      applications: [
        "Building entrance and property identification signs",
        "Tenant directory and unit identification displays",
        "Property rules and community guidelines signage",
        "Amenity area identification and usage instructions",
        "Parking and vehicle identification management signs",
        "Emergency contact and property management information",
      ],
      image: "/images/real-estate-property-management.png",
      alt: "Property management and building signage laser engraved Maryland",
    },
  ]

  return (
    <>
      <HeroSection
        title="Real Estate Laser Engraving Hagerstown Maryland"
        description="Professional laser engraving services for real estate agents, brokers, and property management companies in Hagerstown, MD. From custom property signage to client appreciation gifts, we help Maryland, Delaware, and Virginia real estate professionals make lasting impressions with precision laser-engraved solutions on wood, glass, and all materials that strengthen client relationships and enhance your professional brand."
        backgroundImage="/images/real-estate-professional-branding.png"
      />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Real Estate Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser understands that real estate success is built on relationships, trust, and memorable
                experiences. Located in Hagerstown, Maryland, we specialize in creating custom laser-engraved materials
                that help real estate professionals throughout the tri-state area strengthen client relationships,
                enhance their professional image, and create lasting impressions that generate referrals and repeat
                business.
              </p>
              <p className="text-gray-700 mb-6">
                From personalized closing gifts to professional office branding, our laser engraving services support
                every aspect of your real estate business, helping you stand out in a competitive market while showing
                clients that you care about the details that matter.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Client Relationships</h4>
                  <p className="text-gray-600 text-sm">Memorable appreciation gifts</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Professional Image</h4>
                  <p className="text-gray-600 text-sm">Market-leading presentation</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/real-estate-professional-branding.png"
                  alt="Professional real estate branding and office materials laser engraved"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional real estate branding and client relationship materials laser engraved for Maryland real
                estate professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Real Estate Laser Engraving Services for Maryland Professionals
          </h2>
          <div className="space-y-12">
            {realEstateServices.map((service, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-4">Real Estate Applications:</h4>
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
            Ready to Strengthen Your Real Estate Business with Custom Laser Engraving?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today to discuss how we can help create client appreciation gifts, professional
            office materials, and property signage that enhance your real estate business and strengthen client
            relationships in Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Real Estate Laser Quote
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
