import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "./components/HeroSection"

export const metadata: Metadata = {
  title: "Laser Engraving Hagerstown MD | Custom Wood Metal Glass Cutting | Engrave Everything",
  description:
    "Expert laser engraving & cutting in Hagerstown MD—wood, metal, glass, acrylic. Custom signs, awards & more. Fast turnaround, top-rated service for MD, DE, VA, DC Metro, Northern VA.",
  keywords:
    "laser engraving Hagerstown Maryland, laser cutting wood metal glass, custom signs MD DE VA, business laser engraving, promotional items Hagerstown, industrial laser cutting Maryland, medical device engraving, restaurant signage, personalized gifts, Washington D.C. Metro laser engraving, Northern VA laser engraving, acrylic signs, custom awards",
  openGraph: {
    title: "Engrave Everything Hagerstown MD | Professional Laser Services",
    description:
      "Expert laser engraving on wood, metal, glass in Hagerstown MD. Serving Maryland, Delaware, Virginia, Washington D.C. Metro, and Northern Virginia.",
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
        title="Professional Laser Engraving Hagerstown MD"
        description="Expert laser engraving & cutting in Hagerstown MD—wood, metal, glass, acrylic. Custom signs, awards & more. Fast turnaround, top-rated service for MD, DE, VA, DC Metro, Northern VA."
        backgroundImage="/images/materials-wood-glass.png"
      />

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-hub-blue mb-4">
              Engrave Everything Laser Engraving Hagerstown Maryland
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Located in Hagerstown, Maryland, Engrave Everything specializes in precision laser engraving and cutting
              services on a wide range of materials for businesses and individuals throughout Maryland, Delaware,
              Virginia, the Washington D.C. Metro area, and Northern Virginia. From custom business signage to
              industrial marking and personalized gifts, we deliver quality laser craftsmanship that represents your
              brand professionally and meets your exact specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/materials-wood-glass.png"
                  alt="Custom laser engraved wood plaque in Hagerstown MD"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-hub-blue mb-3">Wood Laser Engraving</h2>
              <p className="text-gray-700 mb-2">
                Create stunning custom designs on various wood types, perfect for signs, awards, and personalized gifts.
              </p>
              <Link href="/services/wood-engraving" className="text-hub-blue hover:underline text-sm">
                Learn more about wood engraving
              </Link>
            </div>
            <div className="text-center">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/materials-metal.png"
                  alt="Precision metal laser cutting services in Maryland"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-hub-blue mb-3">Metal Laser Cutting & Marking</h2>
              <p className="text-gray-700 mb-2">
                Durable marking and precise cutting on stainless steel, aluminum, and brass for industrial tags, parts,
                and signage.
              </p>
              <Link href="/services/metal-cutting" className="text-hub-blue hover:underline text-sm">
                Learn more about metal services
              </Link>
            </div>
            <div className="text-center">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/materials-glass-etching.png"
                  alt="Elegant glass laser etching services in Hagerstown"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-hub-blue mb-3">Glass Laser Etching</h2>
              <p className="text-gray-700 mb-2">
                Personalize glassware, mirrors, and windows with intricate designs for gifts, restaurants, or home
                decor.
              </p>
              <Link href="/services/glass-etching" className="text-hub-blue hover:underline text-sm">
                Learn more about glass etching
              </Link>
            </div>
            <div className="text-center">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/retail-acrylic-displays.png"
                  alt="Custom acrylic signs and displays laser cut in Hagerstown MD"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-hub-blue mb-3">Acrylic Laser Cutting & Engraving</h2>
              <p className="text-gray-700 mb-2">
                Create vibrant signs, displays, and custom shapes with precision acrylic cutting and engraving.
              </p>
              <Link href="/services/acrylic-signs" className="text-hub-blue hover:underline text-sm">
                Learn more about acrylic services
              </Link>
            </div>
            <div className="text-center">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/materials-restaurant-hospitality.png"
                  alt="Laser engraved plastic tags and labels for industrial use"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-hub-blue mb-3">Plastic Laser Marking</h2>
              <p className="text-gray-700 mb-2">
                Durable and clear marking on various plastics for equipment tags, compliance labels, and product
                identification.
              </p>
              <Link href="/services" className="text-hub-blue hover:underline text-sm">
                View all materials
              </Link>
            </div>
            <div className="text-center">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/images/professional-executive-office.png"
                  alt="Custom leather laser engraving for wallets and accessories"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold text-hub-blue mb-3">Leather Laser Engraving</h2>
              <p className="text-gray-700 mb-2">
                Add personalized touches to leather goods, from wallets to custom patches and promotional items.
              </p>
              <Link href="/services" className="text-hub-blue hover:underline text-sm">
                View all materials
              </Link>
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
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Custom Business Signs</h3>
              <p className="text-gray-600">
                Professional laser engraved signage on wood, metal, glass for MD businesses
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
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Awards & Recognition Plaques</h3>
              <p className="text-gray-600">Laser engraved achievement awards and recognition items Hagerstown MD</p>
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
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Promotional Laser Items</h3>
              <p className="text-gray-600">Branded merchandise and marketing materials laser cut on all materials</p>
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
                />
              </div>
              <h3 className="text-lg font-semibold text-hub-blue mb-2">Personalized Laser Gifts</h3>
              <p className="text-gray-600">Custom laser engraved gifts on wood, metal, glass for special occasions</p>
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

      {/* Project Gallery / Portfolio Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-hub-blue mb-8">Our Recent Laser Engraving Projects</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Explore our portfolio of custom laser-engraved and cut projects, showcasing our precision craftsmanship on
            various materials for diverse industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for project images */}
            <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Placeholder for laser engraved wood sign"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Placeholder for laser cut metal part"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Placeholder for laser etched glass award"
                fill
                className="object-cover"
              />
            </div>
            {/* Add more project placeholders or actual images here */}
          </div>
          <Link href="/contact" className="btn-primary mt-12">
            Browse Our Work
          </Link>
        </div>
      </section>

      {/* Customer Reviews / Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-hub-blue mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic text-gray-700 mb-4">
                "Engrave Everything delivered exceptional quality on our custom metal tags. Fast, professional, and
                exactly what we needed for our industrial equipment."
              </p>
              <p className="font-semibold text-hub-blue">- John D., Manufacturing Manager</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="italic text-gray-700 mb-4">
                "The personalized cutting boards were a huge hit with our real estate clients! The detail was
                incredible, and the service was fantastic."
              </p>
              <p className="font-semibold text-hub-blue">- Sarah P., Real Estate Agent</p>
            </div>
            {/* Add more testimonials here */}
          </div>
          <Link href="/contact" className="btn-secondary mt-12">
            Read More Testimonials
          </Link>
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
            {/* Placeholder for Service Area Map */}
            <div className="mt-8 text-center">
              <h3 className="text-xl font-semibold mb-4">Our Service Area</h3>
              <div className="aspect-video relative rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500">
                {/* Replace with an actual embedded Google Map showing your service area without a specific address marker */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1540000000003!2d-77.7221999!3d39.6417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c92b1f0f0f0f0f%3A0x0f0f0f0f0f0f0f0f!2sHagerstown%2C%20MD!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Service Area Map for Engrave Everything in Hagerstown, MD"
                ></iframe>
              </div>
              <p className="text-sm text-blue-100 mt-2">
                Serving Hagerstown, MD, and surrounding areas including Maryland, Delaware, Virginia, Washington D.C.
                Metro, and Northern Virginia.
              </p>
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
            or Virginia business.
          </p>
          <Link href="/contact" className="btn-secondary">
            Get Free Laser Engraving Quote
          </Link>
        </div>
      </section>
    </>
  )
}
