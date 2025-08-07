import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "./components/HeroSection"

export const metadata: Metadata = {
  title: "Laser Engraving Hagerstown MD | Wood, Metal, Glass Cutting",
  description:
    "Expert laser engraving & cutting in Hagerstown, MD. Custom signs, awards, industrial marking for businesses in MD, DE, VA. Fast turnaround!",
  keywords:
    "laser engraving Hagerstown Maryland, laser cutting wood metal glass, custom signs MD DE VA, business laser engraving, promotional items Hagerstown, industrial laser cutting Maryland, medical device engraving, restaurant signage",
  openGraph: {
    title: "Engrave Everything Hagerstown MD | Professional Services",
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
              Engrave Everything Laser Engraving Hagerstown Maryland
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
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                  sizes="(max-width: 768px) 100vw, 33vw"
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
                  sizes="(max-width: 768px) 100vw, 33vw"
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
            Engrave Everything provides specialized laser engraving and cutting services on wood, metal, glass for
            businesses across all industries in Hagerstown MD and throughout the tri-state area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="bg-hub-white border border-hub-silver rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 group"
                aria-label={`Learn more about ${industry.name} laser engraving services`}
              >
                <div className="aspect-video relative">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={`${industry.name} laser engraving examples - professional services in Hagerstown MD`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  alt="Custom business signs and professional office laser engraving services in Hagerstown MD"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Custom Business Signs</h3>
              <p className="text-gray-600">
                Professional laser engraved signage on wood, metal, glass for MD businesses, ideal for custom logo
                production and batch signage creation.
              </p>
              <Link href="/services#business-signs" className="text-hub-blue hover:underline mt-2 inline-block text-sm">
                Learn more
              </Link>
            </div>
            <div className="text-center">
              <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/technology.png"
                  alt="Awards and recognition plaques laser engraved in Maryland for corporate and academic achievements"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Awards & Recognition Plaques</h3>
              <p className="text-gray-600">
                Laser engraved achievement awards and recognition items for corporate programs and employee appreciation
                in Hagerstown MD.
              </p>
              <Link href="/services#awards" className="text-hub-blue hover:underline mt-2 inline-block text-sm">
                Learn more
              </Link>
            </div>
            <div className="text-center">
              <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/retail.png"
                  alt="Promotional laser items and branded merchandise for Maryland businesses and marketing campaigns"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Promotional Laser Items</h3>
              <p className="text-gray-600">
                Branded merchandise production and marketing materials laser cut on all materials for effective campaign
                support.
              </p>
              <Link href="/services#promotional" className="text-hub-blue hover:underline mt-2 inline-block text-sm">
                Learn more
              </Link>
            </div>
            <div className="text-center">
              <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/real-estate.png"
                  alt="Personalized laser gifts on wood, metal, and glass for special occasions and corporate gifting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Personalized Laser Gifts</h3>
              <p className="text-gray-600">
                Custom laser engraved gifts on wood, metal, glass for special occasions and corporate gifting.
              </p>
              <Link href="/gifts" className="text-hub-blue hover:underline mt-2 inline-block text-sm">
                Learn more
              </Link>
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
              Why Choose Engrave Everything Laser Engraving in Hagerstown Maryland?
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

      {/* NEW: Tri-Layer Acrylic UV Laser Section */}
      <section className="section-padding bg-gradient-to-br from-hub-blue to-blue-800 text-hub-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-600 text-blue-100 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-300 rounded-full mr-2 animate-pulse"></span>
                NEW TECHNOLOGY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Revolutionary UV Laser Tri-Layer Acrylic Engraving
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                We're one of the only engravers in the USA using advanced UV laser technology for tri-layer acrylic engraving, 
                delivering ultra-fine details impossible with traditional CO2 lasers.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Ultra-Fine Detail Resolution</h3>
                    <p className="text-blue-200">UV laser wavelength (355nm) creates microscopic precision impossible with CO2 lasers (10,600nm)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">No Heat-Affected Zone</h3>
                    <p className="text-blue-200">Cold ablation process eliminates melting and edge distortion common with CO2 thermal cutting</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Perfect Layer Contrast</h3>
                    <p className="text-blue-200">Precise power control reveals each layer cleanly without over-penetration or color bleeding</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services/tri-layer-acrylic-engraving" className="btn-secondary">
                  Learn About Our Process
                </Link>
                <Link 
                  href="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
                  className="border-2 border-blue-300 text-blue-100 px-6 py-3 rounded-lg font-semibold hover:bg-blue-300 hover:text-blue-900 transition-colors duration-200 text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request UV Laser Quote
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/tri-layer-acrylic-precision.png"
                  alt="UV laser tri-layer acrylic engraving showing ultra-fine detail precision compared to CO2 laser results"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Technical Specs Overlay */}
              <div className="absolute -bottom-6 -right-6 bg-hub-white text-hub-blue p-6 rounded-xl shadow-xl max-w-xs">
                <h4 className="font-bold text-lg mb-2">UV vs CO2 Comparison</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Wavelength:</span>
                    <span className="font-semibold">355nm vs 10,600nm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Detail Resolution:</span>
                    <span className="font-semibold">50x finer</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Heat Effect:</span>
                    <span className="font-semibold">None vs High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why UV Over CO2 Technical Details */}
          <div className="mt-16 pt-12 border-t border-blue-600">
            <h3 className="text-2xl font-bold text-center mb-8">Why We Choose UV Laser Over CO2 for Tri-Layer Acrylic</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">Photonic Ablation</h4>
                <p className="text-blue-200">
                  UV photons break molecular bonds directly without heat, preventing layer delamination and maintaining crisp edges that CO2's thermal process destroys.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">Microscopic Precision</h4>
                <p className="text-blue-200">
                  355nm wavelength allows for feature sizes down to 10 microns, enabling intricate text, logos, and patterns impossible with CO2's 100+ micron limitations.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3">Material Integrity</h4>
                <p className="text-blue-200">
                  No thermal stress means zero warping, perfect layer adhesion, and consistent results across large production runs that CO2 lasers cannot achieve.
                </p>
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
            Contact Engrave Everything today for a free quote on laser engraving services for your Maryland, Delaware,
            or Virginia business. We handle bulk orders and custom projects with efficiency.
          </p>
          <Link
            href="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
            className="btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Bulk or Custom Project Quote
          </Link>
        </div>
      </section>
    </>
  )
}
