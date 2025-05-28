import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Real Estate Laser Engraving Hagerstown MD | Property Signs & Client Gifts",
  description:
    "Professional laser engraving for real estate professionals in Hagerstown Maryland. Custom property signs, office displays, client gifts laser engraved on wood and glass. Serving MD, DE, VA realtors.",
  keywords:
    "real estate laser engraving Hagerstown MD, property signs Maryland, realtor gifts laser engraved, real estate office signage MD DE VA, custom home signs",
}

export default function RealEstatePage() {
  const services = [
    "Custom property signs and yard displays laser engraved on weather-resistant materials",
    "Real estate office signage and professional branding for Maryland realtors",
    "Agent name plates and desk accessories laser cut for professional presentation",
    "Open house signs and directional markers for property showings in MD DE VA",
    "Promotional items and client gifts including 'Home Sweet Home' glassware",
    "Award plaques for top performing agents and milestone recognition",
    "Welcome signs and housewarming gifts laser engraved on wood and glass",
    "Real estate company branding materials and marketing displays",
  ]

  return (
    <>
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Estate Laser Engraving Hagerstown Maryland</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Professional laser engraving services for real estate agents, brokers, and property management companies in
            Hagerstown, MD. From custom property signage to client appreciation gifts, we help Maryland, Delaware, and
            Virginia real estate professionals make lasting impressions with precision laser-engraved solutions on wood,
            glass, and all materials.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Custom Real Estate Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser specializes in creating professional laser-engraved materials for the real estate
                industry. Located in Hagerstown, Maryland, we serve realtors and real estate companies throughout the
                tri-state area with custom signage, promotional items, and client gifts that help build your brand and
                strengthen client relationships.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Property Signage</h3>
                    <p className="text-gray-600">
                      Weather-resistant yard signs and property displays laser engraved for durability
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Client Appreciation Gifts</h3>
                    <p className="text-gray-600">
                      Custom laser-engraved housewarming gifts and closing celebration items
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-3 h-3 bg-hub-blue rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Branding Materials</h3>
                    <p className="text-gray-600">Professional signage and displays for real estate offices in MD</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/real-estate.png"
                  alt="Real estate laser engraving examples including property signs and client gifts Hagerstown MD"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-hub-blue mb-8 text-center">
              Real Estate Laser Engraving Services for Maryland Professionals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 flex items-start">
                    <span className="w-2 h-2 bg-hub-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {service}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-2xl font-bold text-hub-blue mb-6 text-center">
              Popular Real Estate Laser Engraving Items
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="font-semibold text-hub-blue mb-3">Property Signage</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• "For Sale" yard signs</li>
                  <li>• "Open House" directional signs</li>
                  <li>• Property information displays</li>
                  <li>• Real estate company branding</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-hub-blue mb-3">Client Gifts</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• "Home Sweet Home" glassware</li>
                  <li>• Welcome home coasters</li>
                  <li>• Housewarming cutting boards</li>
                  <li>• Personalized home décor</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-hub-blue mb-3">Office Materials</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Agent desk nameplates</li>
                  <li>• Office door signs</li>
                  <li>• Achievement awards</li>
                  <li>• Business card displays</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-hub-blue mb-4">
              Ready to Enhance Your Real Estate Business with Custom Laser Engraving?
            </h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Contact Hub City Laser today for a personalized consultation on real estate laser engraving services in
              Hagerstown, Maryland. We'll help you create professional signage and memorable client gifts that set your
              real estate business apart in the competitive MD, DE, VA market.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Real Estate Laser Engraving Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
