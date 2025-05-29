import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"

export const metadata: Metadata = {
  title: "Restaurant Laser Engraving Hagerstown MD | Menu Boards Table Numbers Glassware",
  description:
    "Professional restaurant laser engraving services in Hagerstown Maryland. Custom menu boards, table numbers, glassware, promotional materials laser engraved on wood, metal, glass. Serving MD, DE, VA restaurants, cafes, bars, food service.",
  keywords:
    "restaurant laser engraving Hagerstown MD, menu boards laser cutting Maryland, table numbers laser engraved, restaurant signage MD DE VA, food service laser engraving, bar glassware engraving, cafe promotional materials",
}

export default function RestaurantsPage() {
  const restaurantServices = [
    {
      title: "Complete Restaurant Branding & Signage",
      description:
        "Comprehensive restaurant branding solutions that create cohesive dining experiences and strengthen your restaurant's identity.",
      applications: [
        "Restaurant entrance signs with logo and branding",
        "Interior wall art and decorative branding elements",
        "Host station and reception area professional signage",
        "Dining room ambiance and atmosphere enhancement",
        "Kitchen and service area operational signage",
        "Outdoor patio and seating area weather-resistant signs",
      ],
      image: "/images/restaurant-complete-branding.png",
      alt: "Complete restaurant branding and signage laser engraved Hagerstown MD",
    },
    {
      title: "Menu Boards & Food Service Displays",
      description:
        "Professional menu displays and food service signage that enhance customer experience and streamline operations.",
      applications: [
        "Daily specials and seasonal menu display boards",
        "Permanent menu boards with pricing and descriptions",
        "Beverage and wine list elegant display solutions",
        "Food allergen and dietary information clear signage",
        "Counter service and ordering process guidance signs",
        "Kitchen display and order management systems",
      ],
      image: "/images/restaurant-menu-board.png",
      alt: "Restaurant menu boards and food service displays laser engraved Maryland",
    },
    {
      title: "Table Numbers & Dining Room Organization",
      description:
        "Elegant table identification and dining room organization solutions that improve service efficiency.",
      applications: [
        "Table number stands with restaurant branding",
        "Reserved seating and VIP table identification",
        "Dining section and area organization signage",
        "Server station and service area identification",
        "Private dining room and event space signage",
        "Outdoor seating and patio table organization",
      ],
      image: "/images/restaurant-table-numbers.png",
      alt: "Restaurant table numbers and dining organization laser engraved",
    },
    {
      title: "Promotional Items & Marketing Materials",
      description:
        "Custom promotional materials and marketing displays that build customer loyalty and drive business growth.",
      applications: [
        "Branded merchandise and customer takeaway items",
        "Special event and promotion announcement displays",
        "Loyalty program and customer appreciation materials",
        "Social media and review encouragement signage",
        "Catering and private event marketing materials",
        "Gift card displays and promotional offer signs",
      ],
      image: "/images/restaurant-promotional-items.png",
      alt: "Restaurant promotional items and marketing materials laser engraved",
    },
  ]

  return (
    <>
      <HeroSection
        title="Restaurant Laser Engraving Hagerstown Maryland"
        description="Enhance your restaurant's atmosphere and functionality with custom laser-engraved menu boards, table numbers, glassware, and promotional materials in Hagerstown, MD. Serving restaurants, cafes, bars, and food service businesses throughout Maryland, Delaware, and Virginia with precision laser engraving on wood, glass, metal, and all materials that reflect your brand's personality and improve customer experience."
        backgroundImage="/images/restaurants.png"
      />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Restaurant Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser understands that restaurants succeed through creating memorable dining experiences.
                Located in Hagerstown, Maryland, we specialize in custom laser engraving solutions that enhance your
                restaurant's atmosphere, improve operational efficiency, and strengthen your brand identity throughout
                every customer touchpoint.
              </p>
              <p className="text-gray-700 mb-6">
                From elegant menu boards to branded promotional materials, our laser engraving services help
                restaurants, cafes, bars, and food service businesses throughout the tri-state area create cohesive
                environments that reflect their unique personality and culinary excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Food-Safe Materials</h4>
                  <p className="text-gray-600 text-sm">Restaurant-grade finishes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Brand Consistency</h4>
                  <p className="text-gray-600 text-sm">Cohesive dining experience</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/restaurants.png"
                  alt="Restaurant complete branding and signage laser engraved"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Complete restaurant branding and signage solutions laser engraved for Maryland food service businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Restaurant Laser Engraving Services for Maryland Food Service
          </h2>
          <div className="space-y-12">
            {restaurantServices.map((service, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-4">Restaurant Applications:</h4>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Restaurant with Custom Laser Engraving?</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today to discuss how we can help create menu boards, signage, and promotional
            materials that enhance your restaurant's atmosphere and support your food service operations in Hagerstown,
            Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Restaurant Laser Quote
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
