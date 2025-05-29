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
  const realEstateServices = [
    {
      title: "Real Estate Professional Branding & Office Materials",
      description:
        "Complete branding solutions for real estate professionals including office signage, business materials, and professional identification.",
      applications: [
        "Real estate company signs with house icons and branding",
        "Professional realtor nameplates with credentials",
        "Property identification signs and markers",
        "Office door signs and directional displays",
        "Business card holders and desk accessories",
        "Real estate team branding and recognition materials",
      ],
      image: "/images/real-estate-professional-branding.png",
      alt: "Real estate professional branding including Hillcrest Realty sign, Emily Baker Realtor nameplate, and property markers",
    },
    {
      title: "Client Appreciation Gifts & Closing Presents",
      description:
        "Custom laser-engraved gifts that celebrate home purchases and strengthen client relationships for Maryland realtors.",
      applications: [
        "Welcome to Our Home wooden coasters and signs",
        "Home Sweet Home etched wine glasses for new homeowners",
        "Real estate company branded promotional items",
        "Closing day celebration gifts and keepsakes",
        "New home congratulations and housewarming presents",
        "Client referral appreciation gifts and thank you items",
      ],
      image: "/images/real-estate-client-gifts.png",
      alt: "Real estate client gifts including Welcome to Our Home signs and Home Sweet Home etched glassware",
    },
    {
      title: "Property Management & Rental Property Solutions",
      description:
        "Professional signage and identification systems for property management companies and rental properties.",
      applications: [
        "Hotel and rental property room number signs",
        "Welcome signs for vacation rentals and properties",
        "Property amenity identification and branding",
        "Rental property welcome packages and materials",
        "Property management office signage and displays",
        "Tenant information and property rule displays",
      ],
      image: "/images/real-estate-property-management.png",
      alt: "Property management materials including room numbers, welcome signs, and property amenities",
    },
    {
      title: "Housewarming & New Home Celebration Gifts",
      description:
        "Personalized laser-engraved items perfect for celebrating new home purchases and family milestones.",
      applications: [
        "Custom family name signs with establishment dates",
        "Home Sweet Home framed displays and wall art",
        "Personalized serving boards for entertaining",
        "Celebration coasters and entertaining accessories",
        "New home milestone and anniversary gifts",
        "Custom family housewarming gift packages",
      ],
      image: "/images/real-estate-housewarming-gifts.png",
      alt: "Housewarming gifts including The Hamiltons family sign, Home Sweet Home frame, and Bon Appétit serving board",
    },
    {
      title: "Real Estate Office Amenities & Client Entertainment",
      description:
        "Professional office accessories and client entertainment items that enhance the real estate experience.",
      applications: [
        "Custom coffee bar serving trays for office hospitality",
        "Client meeting room accessories and displays",
        "Office kitchen and break room personalization",
        "Client entertainment and hospitality items",
        "Real estate office branding and atmosphere enhancement",
        "Professional meeting and consultation accessories",
      ],
      image: "/images/real-estate-office-amenities.png",
      alt: "Real estate office amenities including Anderson Coffee Bar serving tray for client hospitality",
    },
  ]

  const realEstateTypes = [
    {
      type: "Residential Real Estate Agents",
      services: "Client gifts, property signs, office branding, housewarming presents",
      materials: "Premium wood, etched glass, weather-resistant finishes",
      image: "/images/real-estate-client-gifts.png",
    },
    {
      type: "Commercial Real Estate Brokers",
      services: "Professional signage, office displays, client entertainment, business gifts",
      materials: "Executive finishes, metal nameplates, professional displays",
      image: "/images/real-estate-professional-branding.png",
    },
    {
      type: "Property Management Companies",
      services: "Property signage, room numbers, welcome displays, tenant materials",
      materials: "Durable materials, easy-clean surfaces, weather-resistant options",
      image: "/images/real-estate-property-management.png",
    },
    {
      type: "Real Estate Teams & Brokerages",
      services: "Team branding, office amenities, client appreciation, marketing materials",
      materials: "Consistent branding materials, professional finishes",
      image: "/images/real-estate-office-amenities.png",
    },
    {
      type: "Luxury Real Estate Specialists",
      services: "High-end client gifts, premium office displays, exclusive branding",
      materials: "Premium hardwoods, crystal etching, luxury finishes",
      image: "/images/real-estate-housewarming-gifts.png",
    },
    {
      type: "New Construction & Builders",
      services: "Model home displays, grand opening materials, buyer celebration gifts",
      materials: "Show-ready displays, durable outdoor materials",
      image: "/images/real-estate-professional-branding.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Real Estate Laser Engraving Hagerstown Maryland</h1>
          <p className="text-xl text-blue-100 max-w-4xl">
            Professional laser engraving services for real estate agents, brokers, and property management companies in
            Hagerstown, MD. From custom property signage to client appreciation gifts, we help Maryland, Delaware, and
            Virginia real estate professionals make lasting impressions with precision laser-engraved solutions on wood,
            glass, and all materials that strengthen client relationships and enhance your professional brand.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
              <p className="text-gray-700 mb-6">
                From elegant housewarming gifts to professional office branding, our laser engraving services help real
                estate professionals create memorable experiences that turn clients into lifelong advocates for your
                business.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Client-Focused Design</h4>
                  <p className="text-gray-600 text-sm">Memorable gifts and experiences</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Professional Quality</h4>
                  <p className="text-gray-600 text-sm">Premium materials and finishes</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/real-estate-professional-branding.png"
                  alt="Real estate professional branding including company signs, realtor nameplates, and property markers"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Complete real estate professional branding solutions laser engraved for Maryland realtors
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

      {/* Real Estate Types */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Real Estate Industry Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstateTypes.map((realEstate, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={realEstate.image || "/placeholder.svg"}
                    alt={`${realEstate.type} laser engraving examples`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-hub-blue mb-3">{realEstate.type}</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-gray-900">Services: </span>
                      <span className="text-gray-700 text-sm">{realEstate.services}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Materials: </span>
                      <span className="text-gray-700 text-sm">{realEstate.materials}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h3 className="text-2xl font-bold text-hub-blue mb-8 text-center">
            Popular Real Estate Laser Engraving Items
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Client Gifts</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• "Home Sweet Home" glassware</li>
                <li>• Welcome home coasters</li>
                <li>• Housewarming cutting boards</li>
                <li>• Personalized home décor</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Professional Branding</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Real estate company signs</li>
                <li>• Agent desk nameplates</li>
                <li>• Property identification markers</li>
                <li>• Business card displays</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Property Management</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Room number signs</li>
                <li>• Welcome displays</li>
                <li>• Property amenity markers</li>
                <li>• Tenant information signs</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Office Amenities</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Coffee bar accessories</li>
                <li>• Client entertainment items</li>
                <li>• Meeting room displays</li>
                <li>• Office hospitality materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Why Choose Hub City Laser for Real Estate Engraving?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Client Relationship Focus</h3>
              <p className="text-gray-700">
                Create memorable experiences that strengthen client relationships and generate referrals for your real
                estate business.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Professional Brand Enhancement</h3>
              <p className="text-gray-700">
                Elevate your professional image with custom laser-engraved materials that reflect your commitment to
                excellence.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Closing Day Celebrations</h3>
              <p className="text-gray-700">
                Make closing day special with personalized gifts that celebrate your clients' new home purchase
                milestone.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Marketing Differentiation</h3>
              <p className="text-gray-700">
                Stand out in the competitive real estate market with unique, personalized touches that clients remember.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Quick Turnaround</h3>
              <p className="text-gray-700">
                Fast processing for closing deadlines and client appreciation needs throughout Maryland, Delaware,
                Virginia.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Bulk Order Pricing</h3>
              <p className="text-gray-700">
                Competitive pricing for real estate teams and brokerages ordering multiple items for client gifts and
                office branding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Real Estate Business with Custom Laser Engraving?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today for a personalized consultation on real estate laser engraving services in
            Hagerstown, Maryland. We'll help you create professional signage and memorable client gifts that set your
            real estate business apart in the competitive MD, DE, VA market.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Your Real Estate Laser Engraving Quote
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
