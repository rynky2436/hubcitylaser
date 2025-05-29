import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Hospitality Laser Engraving Hagerstown MD | Hotel Restaurant Bar Custom Signs",
  description:
    "Professional laser engraving for hotels, restaurants, bars, and hospitality businesses in Hagerstown Maryland. Custom room signs, menu boards, promotional displays, guest amenities laser engraved on wood, glass, metal. Serving MD, DE, VA hospitality industry.",
  keywords:
    "hospitality laser engraving Hagerstown MD, hotel room signs Maryland, restaurant menu boards, bar promotional items MD DE VA, guest amenities laser cutting, hospitality branding materials",
}

export default function HospitalityPage() {
  const hospitalityServices = [
    {
      title: "Custom Property & Family Branding Solutions",
      description:
        "Elegant laser-engraved branding and family name displays that create memorable first impressions for hotels, resorts, and hospitality properties.",
      applications: [
        "Custom family name signs with establishment dates",
        "Hotel and resort property branding displays",
        "Vacation rental welcome signs and property identification",
        "Bed & breakfast family heritage and story displays",
        "Event venue branding and milestone celebrations",
        "Anniversary and special occasion commemorative signs",
      ],
      image: "/images/hospitality-family-branding.png",
      alt: "The Anderson EST. 2022 custom family name sign laser engraved on premium wood for hospitality branding",
    },
    {
      title: "Restaurant & Bar Promotional Materials",
      description:
        "Comprehensive promotional and operational materials that enhance customer experience and streamline restaurant operations.",
      applications: [
        "Thank you coasters and customer appreciation items",
        "Restaurant logo displays and brand identification",
        "Special offer promotional signs and marketing materials",
        "Staff identification badges and operational signage",
        "Bar glassware etching with logos and branding",
        "Customer loyalty program materials and displays",
      ],
      image: "/images/hospitality-restaurant-materials.png",
      alt: "Restaurant promotional materials including thank you coasters, special offer signs, staff badges, and etched bar glassware",
    },
    {
      title: "Menu Boards & Food Service Displays",
      description:
        "Professional menu boards and food service displays that showcase culinary offerings with style and functionality.",
      applications: [
        "Elegant wooden menu boards with appetizers and entrées sections",
        "Daily specials and seasonal menu displays",
        "Wine and beverage menu presentation boards",
        "Breakfast, lunch, and dinner service organization",
        "Chef's special and featured item displays",
        "Dietary restriction and allergen information boards",
      ],
      image: "/images/hospitality-menu-boards.png",
      alt: "Elegant wooden menu board with appetizers and entrées sections in atmospheric restaurant setting",
    },
    {
      title: "Personalized Guest Amenities & Accessories",
      description:
        "Custom laser-engraved guest amenities and personalized accessories that create unique hospitality experiences.",
      applications: [
        "Personalized guest room amenities and welcome items",
        "Custom monogrammed hospitality accessories",
        "VIP guest recognition and special service items",
        "Wedding and event personalization services",
        "Corporate retreat and group event customization",
        "Luxury hospitality branding and guest gifts",
      ],
      image: "/images/hospitality-personalized-accessories.png",
      alt: "Personalized hospitality accessory with W monogram and Celtic knot design laser engraved on premium materials",
    },
    {
      title: "Coffee Service & Hospitality Amenities",
      description:
        "Professional coffee service accessories and hospitality amenities that enhance guest experience and operational efficiency.",
      applications: [
        "Custom coffee bar serving trays with branding",
        "Hotel lobby and guest area coffee service displays",
        "Conference room and meeting space amenities",
        "Breakfast service and continental breakfast displays",
        "Guest hospitality and welcome service accessories",
        "Corporate hospitality and client entertainment items",
      ],
      image: "/images/hospitality-coffee-service.png",
      alt: "Anderson Coffee Bar wooden serving tray with coffee cup icon for hospitality service",
    },
  ]

  const hospitalityTypes = [
    {
      type: "Hotels & Resorts",
      services: "Room signs, guest amenities, lobby displays, property branding, welcome materials",
      materials: "Premium wood finishes, elegant metal accents, luxury presentation materials",
      image: "/images/hospitality-family-branding.png",
    },
    {
      type: "Restaurants & Fine Dining",
      services: "Menu boards, table displays, promotional materials, staff identification, wine presentations",
      materials: "Food-safe wood finishes, elegant presentations, easy-clean surfaces",
      image: "/images/hospitality-menu-boards.png",
    },
    {
      type: "Bars & Breweries",
      services: "Glassware etching, promotional displays, bar accessories, brand materials, special offers",
      materials: "Glass etching, bar-quality wood, promotional displays, branded accessories",
      image: "/images/hospitality-restaurant-materials.png",
    },
    {
      type: "Event Venues & Banquet Halls",
      services: "Event signage, table markers, welcome displays, celebration materials, branded accessories",
      materials: "Event-ready displays, portable signage, celebration finishes, elegant presentations",
      image: "/images/hospitality-personalized-accessories.png",
    },
    {
      type: "Bed & Breakfasts",
      services: "Family heritage displays, guest room personalization, breakfast service, welcome materials",
      materials: "Warm wood finishes, family-friendly presentations, cozy aesthetics",
      image: "/images/hospitality-coffee-service.png",
    },
    {
      type: "Corporate Hospitality",
      services: "Client entertainment, meeting room amenities, corporate gifts, executive service materials",
      materials: "Professional finishes, executive quality, corporate branding materials",
      image: "/images/hospitality-family-branding.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospitality Laser Engraving Hagerstown Maryland</h1>
          <p className="text-xl text-blue-100 max-w-4xl">
            Create memorable guest experiences with custom laser-engraved signage, amenities, and promotional materials
            for hotels, restaurants, bars, and event venues in Hagerstown, MD. From elegant room signs to personalized
            guest amenities, we help Maryland, Delaware, and Virginia hospitality businesses enhance their brand and
            create lasting impressions with precision laser engraving on wood, glass, metal, and specialty materials
            that reflect your commitment to exceptional service.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Hospitality Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser specializes in creating custom laser-engraved materials that enhance the hospitality
                experience and strengthen your brand identity. Located in Hagerstown, Maryland, we understand the
                importance of creating memorable guest experiences that encourage return visits and positive reviews.
              </p>
              <p className="text-gray-700 mb-6">
                From luxury hotels to family restaurants, our laser engraving services help hospitality businesses
                throughout the tri-state area create professional, welcoming environments that reflect their commitment
                to exceptional service and attention to detail.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Guest Experience Focus</h4>
                  <p className="text-gray-600 text-sm">Memorable impressions and service</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Brand Enhancement</h4>
                  <p className="text-gray-600 text-sm">Professional hospitality identity</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/hospitality-menu-boards.png"
                  alt="Elegant hospitality menu board with appetizers and entrées sections in restaurant setting"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional hospitality laser engraving solutions for Maryland hotels, restaurants, and event venues
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Hospitality Laser Engraving Services for Maryland Businesses
          </h2>
          <div className="space-y-12">
            {hospitalityServices.map((service, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-4">Hospitality Applications:</h4>
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

      {/* Hospitality Types */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Hospitality Industry Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalityTypes.map((hospitality, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={hospitality.image || "/placeholder.svg"}
                    alt={`${hospitality.type} laser engraving examples`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-hub-blue mb-3">{hospitality.type}</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-gray-900">Services: </span>
                      <span className="text-gray-700 text-sm">{hospitality.services}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Materials: </span>
                      <span className="text-gray-700 text-sm">{hospitality.materials}</span>
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
            Popular Hospitality Laser Engraving Items
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Guest Room Amenities</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Custom room number signs</li>
                <li>• Welcome displays</li>
                <li>• Guest information boards</li>
                <li>• Personalized amenities</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Restaurant Materials</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Menu boards and displays</li>
                <li>• Table number systems</li>
                <li>• Promotional signage</li>
                <li>• Staff identification</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Bar & Beverage Service</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Glassware etching</li>
                <li>• Bar coasters</li>
                <li>• Promotional displays</li>
                <li>• Beverage menu boards</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Event & Conference</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Event signage</li>
                <li>• Table markers</li>
                <li>• Welcome displays</li>
                <li>• Corporate amenities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Why Choose Hub City Laser for Hospitality Engraving?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Guest Experience Enhancement</h3>
              <p className="text-gray-700">
                Create memorable experiences that encourage positive reviews, return visits, and word-of-mouth
                recommendations.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Brand Consistency</h3>
              <p className="text-gray-700">
                Maintain consistent branding across all hospitality materials from room signs to promotional displays
                and guest amenities.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Durability & Cleanliness</h3>
              <p className="text-gray-700">
                Hospitality-grade materials that withstand frequent cleaning and maintain their appearance in high-use
                environments.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Custom Solutions</h3>
              <p className="text-gray-700">
                Tailored laser engraving solutions that match your hospitality brand's unique style and service
                philosophy.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Quick Service</h3>
              <p className="text-gray-700">
                Fast turnaround times to meet hospitality opening deadlines and seasonal updates throughout MD, DE, VA.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Professional Quality</h3>
              <p className="text-gray-700">
                Premium laser engraving that reflects your commitment to excellence and attention to detail in
                hospitality service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Our Hospitality Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Hospitality Consultation</h3>
              <p className="text-gray-700 text-sm">
                Discuss your hospitality brand, guest experience goals, and operational needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Brand Integration</h3>
              <p className="text-gray-700 text-sm">
                Create designs that enhance your hospitality brand and improve guest experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Material Selection</h3>
              <p className="text-gray-700 text-sm">
                Choose hospitality-appropriate materials that match your service environment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Quality Production</h3>
              <p className="text-gray-700 text-sm">
                Precision laser engraving with quality control for hospitality-ready results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Hospitality Business with Custom Laser Engraving?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today to discuss how we can help create memorable guest experiences with custom
            laser-engraved signage, amenities, and promotional materials that reflect your commitment to exceptional
            hospitality service in Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Hospitality Laser Engraving Quote
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
