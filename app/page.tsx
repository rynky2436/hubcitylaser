import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "./components/HeroSection"

export const metadata: Metadata = {
  title: "Laser Engraving Hagerstown MD | Wood Metal Glass Cutting | Hub City Laser",
  description:
    "Professional laser engraving services in Hagerstown, Maryland. Custom laser cutting on wood, metal, glass for businesses in MD, DE, VA. Signs, awards, promotional items, industrial marking.",
  keywords:
    "laser engraving Hagerstown Maryland, laser cutting wood metal glass, custom signs MD DE VA, business laser engraving, promotional items Hagerstown, industrial laser cutting Maryland, medical device engraving, restaurant signage",
  openGraph: {
    title: "Hub City Laser Engraving Hagerstown MD | Professional Services",
    description: "Expert laser engraving on wood, metal, glass in Hagerstown MD. Serving Maryland, Delaware, Virginia.",
  },
}

export default function HomePage() {
  const industries = [
    {
      name: "Medical Device Engraving",
      href: "/medical",
      description: "Medical equipment laser engraving, compliance labels, hospital signage in MD, DE, VA",
      image: "/images/medical.png",
    },
    {
      name: "Professional Office Signs",
      href: "/professional",
      description: "Custom office signs, nameplates, awards laser engraved on wood, metal, glass",
      image: "/images/professional.png",
    },
    {
      name: "Restaurant Laser Engraving",
      href: "/restaurants",
      description: "Menu boards, table numbers, promotional signage laser cut for Maryland restaurants",
      image: "/images/restaurants.png",
    },
    {
      name: "Real Estate",
      href: "/real-estate",
      description: "Property signs, office displays, and marketing materials",
      image: "/images/real-estate.png",
    },
    {
      name: "Agriculture Equipment Tags",
      href: "/agriculture",
      description: "Farm equipment laser engraving, livestock tags, agricultural signage MD VA DE",
      image: "/images/agriculture.png",
    },
    {
      name: "Retail Store Displays",
      href: "/retail",
      description: "Store displays, product labels, promotional items laser cut on wood metal glass",
      image: "/images/retail.png",
    },
    {
      name: "Industrial Laser Marking",
      href: "/industrial",
      description: "Safety signs, equipment tags, compliance marking laser engraved in Maryland",
      image: "/images/industrial.png",
    },
    {
      name: "Technology Laser Engraving",
      href: "/tech",
      description: "Product labels, corporate awards, tech signage laser cut in Hagerstown MD",
      image: "/images/technology.png",
    },
    {
      name: "Hospitality Custom Signs",
      href: "/hospitality",
      description: "Hotel room signs, guest amenities, promotional displays laser engraved MD DE VA",
      image: "/images/hospitality.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Professional Laser Engraving Hagerstown MD | Wood Metal Glass Cutting Services"
        description="Expert laser engraving and cutting on wood, metal, glass serving Maryland, Delaware, Virginia businesses"
        backgroundImage="/images/materials-wood-glass.png"
      />

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hub-blue mb-4">
              Hub City Laser Engraving Hagerstown Maryland
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Located in Hagerstown, Maryland, we specialize in precision laser engraving and cutting services on wood,
              metal, glass, and all materials for businesses throughout Maryland, Delaware, and Virginia. From custom
              business signage to promotional items, we deliver quality laser craftsmanship that represents your brand
              professionally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/materials-wood-glass.png"
                  alt="Wood and glass laser engraving materials Hagerstown MD"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-hub-blue mb-3">Materials We Laser Engrave</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Wood laser engraving</li>
                <li>Metal laser cutting</li>
                <li>Glass laser etching</li>
                <li>Acrylic laser cutting</li>
                <li>Plastic laser marking</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/materials-metal.png"
                  alt="Metal laser cutting and engraving services Maryland"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-hub-blue mb-3">Service Areas</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Hagerstown, Maryland</li>
                <li>Maryland (MD) statewide</li>
                <li>Delaware (DE) businesses</li>
                <li>Virginia (VA) companies</li>
                <li>Washington County MD</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/materials-glass-etching.png"
                  alt="Glass etching and laser engraving services Hagerstown"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-hub-blue mb-3">Business Solutions</h3>
              <ul className="text-gray-700 space-y-1">
                <li>Custom business signs</li>
                <li>Industrial laser marking</li>
                <li>Promotional laser items</li>
                <li>Awards and plaques</li>
                <li>Equipment identification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl md:text-4xl font-bold text-hub-blue text-center mb-4">
            Laser Engraving Services by Industry - Maryland Delaware Virginia
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Hub City Laser provides specialized laser engraving and cutting services on wood, metal, glass for
            businesses across all industries in Hagerstown MD and throughout the tri-state area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="bg-hub-white border border-hub-silver rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
              >
                <div className="aspect-video relative">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={`${industry.name} laser engraving examples Hagerstown MD`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hub-blue mb-3 group-hover:text-blue-800">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-hub-blue mb-4">
              Comprehensive Laser Engraving Services Hagerstown MD
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              From custom business signage to personalized gifts, we offer complete laser engraving and cutting services
              on wood, metal, glass, and all materials for Maryland, Delaware, and Virginia businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/professional.png"
                  alt="Custom business signs laser engraved Hagerstown MD"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Custom Business Signs</h3>
              <p className="text-gray-600">
                Professional laser engraved signage on wood, metal, glass for MD businesses
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/technology.png"
                  alt="Awards and recognition plaques laser engraved Maryland"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Awards & Recognition Plaques</h3>
              <p className="text-gray-600">Laser engraved achievement awards and recognition items Hagerstown MD</p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/retail.png"
                  alt="Promotional laser items and branded merchandise"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Promotional Laser Items</h3>
              <p className="text-gray-600">Branded merchandise and marketing materials laser cut on all materials</p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/real-estate.png"
                  alt="Personalized laser gifts on wood metal glass"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Personalized Laser Gifts</h3>
              <p className="text-gray-600">Custom laser engraved gifts on wood, metal, glass for special occasions</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="btn-primary">
              View All Laser Engraving Services
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="bg-hub-blue text-hub-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Why Choose Hub City Laser Engraving in Hagerstown Maryland?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Local Hagerstown MD Expertise</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Located in Hagerstown, Maryland serving the tri-state area</li>
                  <li>• Fast turnaround for Maryland, Delaware, Virginia businesses</li>
                  <li>• Personal service from local laser engraving experts</li>
                  <li>• Understanding of regional business needs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Advanced Laser Technology</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• State-of-the-art laser engraving on wood, metal, glass</li>
                  <li>• Precision laser cutting for all materials</li>
                  <li>• High-quality results for business applications</li>
                  <li>• Competitive pricing for MD DE VA region</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-hub-blue text-hub-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Professional Laser Engraving in Hagerstown MD?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact Hub City Laser today for a free quote on laser engraving services for your Maryland, Delaware, or
            Virginia business.
          </p>
          <Link href="/contact" className="btn-secondary">
            Get Free Laser Engraving Quote
          </Link>
        </div>
      </section>
    </>
  )
}
