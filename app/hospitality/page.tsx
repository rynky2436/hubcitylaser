import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"

export const metadata: Metadata = {
  title: "Hospitality Laser Engraving Hagerstown MD | Hotel & Restaurant",
  description:
    "Custom hospitality laser engraving in Hagerstown, MD. Hotel signs, restaurant menus, guest amenities for MD, DE, VA. Enhance your brand today!",
  keywords:
    "hospitality laser engraving Hagerstown MD, hotel signs Maryland, guest amenities laser cutting, restaurant materials MD DE VA, event venue signage, bar promotional displays",
}

export default function HospitalityPage() {
  const hospitalityServices = [
    {
      title: "Coffee Service & Beverage Presentation",
      description:
        "Professional coffee service and beverage presentation solutions that enhance guest experience and operational efficiency.",
      applications: [
        "Coffee station organization and beverage service displays",
        "Menu boards for specialty drinks and seasonal offerings",
        "Barista station equipment identification and workflow optimization",
        "Guest self-service coffee and beverage area signage",
        "Promotional displays for featured beverages and specials",
        "Coffee shop and café branding and atmosphere enhancement",
      ],
      image: "/images/hospitality-coffee-service.png",
      alt: "Hospitality coffee service and beverage presentation laser engraved Hagerstown MD",
    },
    {
      title: "Family Branding & Guest Experience",
      description:
        "Family-friendly branding and guest experience solutions that create welcoming environments for all ages.",
      applications: [
        "Family dining area identification and kid-friendly signage",
        "Children's menu displays and activity area organization",
        "Family restroom and changing station identification",
        "Playground and recreational area safety and information signs",
        "Family event and celebration space branding",
        "Multi-generational dining experience enhancement materials",
      ],
      image: "/images/hospitality-family-branding.png",
      alt: "Hospitality family branding and guest experience laser engraved Maryland",
    },
    {
      title: "Menu Boards & Food Service Displays",
      description:
        "Professional menu displays and food service signage that enhance dining experiences and streamline operations.",
      applications: [
        "Restaurant menu boards with daily specials and pricing",
        "Bar and cocktail menu elegant display solutions",
        "Food allergen and dietary restriction information",
        "Buffet and self-service area organization and labeling",
        "Wine list and beverage selection presentation",
        "Catering and event menu display systems",
      ],
      image: "/images/hospitality-menu-boards.png",
      alt: "Hospitality menu boards and food service displays laser engraved",
    },
    {
      title: "Personalized Accessories & Guest Amenities",
      description:
        "Custom personalized accessories and guest amenities that create memorable experiences and encourage return visits.",
      applications: [
        "Personalized guest room amenities and welcome gifts",
        "Custom drinkware and dining accessories for special events",
        "Guest appreciation gifts and loyalty program rewards",
        "Wedding and special occasion personalized items",
        "Corporate event and conference personalized materials",
        "VIP guest experience enhancement and recognition items",
      ],
      image: "/images/hospitality-personalized-accessories.png",
      alt: "Hospitality personalized accessories and guest amenities laser engraved Maryland",
    },
    {
      title: "Restaurant Materials & Dining Enhancement",
      description:
        "Comprehensive restaurant materials and dining enhancement solutions that support exceptional food service.",
      applications: [
        "Table setting accessories and dining presentation enhancement",
        "Server station organization and operational efficiency tools",
        "Kitchen display and order management support systems",
        "Guest feedback and review encouragement materials",
        "Special dietary accommodation and service information",
        "Restaurant atmosphere and ambiance enhancement elements",
      ],
      image: "/images/hospitality-restaurant-materials.png",
      alt: "Hospitality restaurant materials and dining enhancement laser engraved",
    },
  ]

  return (
    <>
      <HeroSection
        title="Hospitality Laser Engraving Hagerstown Maryland"
        description="Create memorable guest experiences with custom laser-engraved signage, amenities, and promotional materials for hotels, restaurants, bars, and event venues in Hagerstown, MD. From elegant room signs to personalized guest amenities, we help Maryland, Delaware, and Virginia hospitality businesses enhance their brand and create lasting impressions with precision laser engraving on wood, glass, metal, and specialty materials that reflect your commitment to exceptional service."
        backgroundImage="/images/hospitality.png"
      />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Hospitality Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Engrave Everything understands that hospitality success is built on creating exceptional guest
                experiences and memorable moments. Located in Hagerstown, Maryland, we specialize in custom laser
                engraving solutions that help hotels, restaurants, bars, and event venues throughout the tri-state area
                enhance their brand, improve guest satisfaction, and create lasting impressions that encourage return
                visits and positive reviews.
              </p>
              <p className="text-gray-700 mb-6">
                From elegant signage to personalized amenities, our laser engraving services support every aspect of the
                hospitality experience, helping businesses create cohesive environments that reflect their commitment to
                exceptional service and attention to detail.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Guest Experience</h4>
                  <p className="text-gray-600 text-sm">Memorable impressions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Brand Enhancement</h4>
                  <p className="text-gray-600 text-sm">Professional presentation</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/hospitality.png"
                  alt="Hospitality menu boards and guest experience materials laser engraved"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional hospitality signage and guest experience materials laser engraved for Maryland hospitality
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
                        sizes="(max-width: 768px) 100vw, 33vw"
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

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Hospitality Business with Custom Laser Engraving?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Engrave Everything today to discuss how we can help create memorable guest experiences, professional
            signage, and personalized amenities that enhance your hospitality business and create lasting impressions in
            Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link
              href="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Hospitality Laser Quote
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
