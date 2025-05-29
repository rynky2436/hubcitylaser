import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Restaurant Laser Engraving Hagerstown MD | Menu Boards Table Numbers Glassware",
  description:
    "Professional laser engraving for restaurants, cafes, breweries in Hagerstown Maryland. Custom menu boards, table numbers, glassware, promotional signage laser engraved on wood, glass, metal. Serving MD, DE, VA food service businesses.",
  keywords:
    "restaurant laser engraving Hagerstown MD, menu boards Maryland, table numbers laser cutting, brewery glassware etching, cafe signage MD DE VA, food service promotional items, restaurant branding materials",
}

export default function RestaurantsPage() {
  const restaurantServices = [
    {
      title: "Custom Menu Boards & Daily Specials Displays",
      description:
        "Professional laser-engraved menu boards that showcase your culinary offerings with style and durability for Maryland restaurants.",
      applications: [
        "Wooden menu boards with appetizers, entrées, and dessert sections",
        "Daily specials boards with erasable or changeable sections",
        "Wine and beer menu displays for bars and restaurants",
        "Breakfast, lunch, and dinner menu organization boards",
        "Seasonal menu displays for rotating offerings",
        "Outdoor menu boards weather-resistant for patio dining",
      ],
      image: "/images/restaurant-menu-board.png",
      alt: "Custom wooden menu board with appetizers and entrées sections laser engraved for restaurant",
    },
    {
      title: "Table Numbers & Reservation Systems",
      description:
        "Elegant laser-engraved table numbering systems that enhance dining experience and improve service efficiency.",
      applications: [
        "Wooden table numbers for dining room organization",
        "Reserved table signs for special events and parties",
        "VIP and priority seating identification markers",
        "Outdoor dining table numbers weather-resistant",
        "Bar seating and counter service number systems",
        "Event and banquet table identification displays",
      ],
      image: "/images/restaurant-table-numbers.png",
      alt: "Wooden table number 15 laser engraved for restaurant dining room organization",
    },
    {
      title: "Restaurant Branding & Promotional Materials",
      description:
        "Complete restaurant branding solutions including promotional items, staff identification, and customer engagement materials.",
      applications: [
        "Custom restaurant logo coasters and promotional items",
        "Thank you cards and customer appreciation materials",
        "Special offer signs and promotional displays",
        "Staff identification badges and name tags",
        "Loyalty program materials and punch cards",
        "Grand opening and event promotional signage",
      ],
      image: "/images/restaurant-promotional-items.png",
      alt: "Restaurant promotional materials including thank you coasters, special offer signs, and staff identification",
    },
    {
      title: "Glassware Etching & Bar Accessories",
      description:
        "Professional glass etching services for restaurants, bars, and breweries to create branded drinkware and bar accessories.",
      applications: [
        "Custom brewery and restaurant logo glassware etching",
        "Wine glasses with establishment branding",
        "Beer glasses and pint glass customization",
        "Happy hour and promotional glass etching",
        "Special event and anniversary glassware",
        "Bar coasters and drink accessories branding",
      ],
      image: "/images/restaurant-complete-branding.png",
      alt: "Complete restaurant branding package with etched glassware, table numbers, menu covers, and promotional materials",
    },
  ]

  const restaurantTypes = [
    {
      type: "Fine Dining Restaurants",
      services: "Elegant menu boards, table numbers, wine glass etching, VIP signage",
      materials: "Premium hardwoods, etched glass, brushed metal accents",
      image: "/images/restaurant-menu-board.png",
    },
    {
      type: "Casual Dining & Family Restaurants",
      services: "Durable table numbers, promotional signs, kids menu boards, staff badges",
      materials: "Weather-resistant wood, acrylic displays, easy-clean surfaces",
      image: "/images/restaurant-table-numbers.png",
    },
    {
      type: "Bars & Breweries",
      services: "Custom glassware etching, beer menu boards, bar coasters, promotional items",
      materials: "Glass etching, wooden bar accessories, metal tap handles",
      image: "/images/restaurant-complete-branding.png",
    },
    {
      type: "Cafes & Coffee Shops",
      services: "Menu displays, table numbers, loyalty cards, promotional signage",
      materials: "Rustic wood finishes, chalkboard alternatives, modern acrylics",
      image: "/images/restaurant-promotional-items.png",
    },
    {
      type: "Fast Casual & Quick Service",
      services: "Order number systems, promotional displays, staff identification, menu boards",
      materials: "Durable plastics, easy-clean materials, high-visibility displays",
      image: "/images/restaurant-promotional-items.png",
    },
    {
      type: "Event Venues & Catering",
      services: "Event signage, table markers, welcome displays, branded accessories",
      materials: "Elegant finishes, portable displays, weather-resistant options",
      image: "/images/restaurant-complete-branding.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Restaurant Laser Engraving Hagerstown Maryland</h1>
          <p className="text-xl text-blue-100 max-w-4xl">
            Enhance your restaurant's atmosphere and functionality with custom laser-engraved menu boards, table
            numbers, glassware, and promotional materials in Hagerstown, MD. Serving restaurants, cafes, bars, and food
            service businesses throughout Maryland, Delaware, and Virginia with precision laser engraving on wood,
            glass, metal, and all materials that reflect your brand's personality and improve customer experience.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Restaurant Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser specializes in creating custom laser-engraved materials that enhance the dining
                experience and strengthen your restaurant's brand identity. From elegant menu boards to branded
                glassware, we help Maryland restaurants, bars, and food service businesses create memorable impressions
                that keep customers coming back.
              </p>
              <p className="text-gray-700 mb-6">
                Located in Hagerstown, Maryland, we understand the unique needs of the food service industry throughout
                the tri-state area. Our laser engraving services combine durability with style, creating pieces that
                withstand the demands of busy restaurant environments while maintaining their professional appearance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Food-Safe Materials</h4>
                  <p className="text-gray-600 text-sm">Restaurant-grade finishes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Quick Turnaround</h4>
                  <p className="text-gray-600 text-sm">2-3 days for most orders</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/restaurant-complete-branding.png"
                  alt="Complete restaurant branding package with laser engraved menu boards, table numbers, and glassware"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Complete restaurant branding solutions laser engraved for Maryland food service businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Our Services for Restaurants & Food Service
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

      {/* Restaurant Types */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Restaurant Industry Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurantTypes.map((restaurant, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={`${restaurant.type} laser engraving examples`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-hub-blue mb-3">{restaurant.type}</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-gray-900">Services: </span>
                      <span className="text-gray-700 text-sm">{restaurant.services}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Materials: </span>
                      <span className="text-gray-700 text-sm">{restaurant.materials}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Why Choose Hub City Laser for Restaurant Engraving?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Food Service Expertise</h3>
              <p className="text-gray-700">
                We understand restaurant operations and create durable, food-safe materials that enhance your dining
                environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Brand Consistency</h3>
              <p className="text-gray-700">
                Maintain consistent branding across all restaurant materials from menu boards to glassware and
                promotional items.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Durability & Cleanliness</h3>
              <p className="text-gray-700">
                Restaurant-grade materials that withstand frequent cleaning and maintain their appearance in busy food
                service environments.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Custom Solutions</h3>
              <p className="text-gray-700">
                Tailored laser engraving solutions that match your restaurant's unique style, from rustic to modern
                aesthetics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Fast Service</h3>
              <p className="text-gray-700">
                Quick turnaround times to meet restaurant opening deadlines and seasonal menu changes throughout MD, DE,
                VA.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Competitive Pricing</h3>
              <p className="text-gray-700">
                Affordable laser engraving solutions that fit restaurant budgets while delivering professional quality
                results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Our Restaurant Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Restaurant Consultation</h3>
              <p className="text-gray-700 text-sm">
                Discuss your restaurant's brand, atmosphere, and functional needs for laser engraving solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Custom Design</h3>
              <p className="text-gray-700 text-sm">
                Create designs that match your restaurant's aesthetic and enhance the dining experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Material Selection</h3>
              <p className="text-gray-700 text-sm">
                Choose food-safe, durable materials appropriate for restaurant environments
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Quality Production</h3>
              <p className="text-gray-700 text-sm">
                Precision laser engraving with quality control to ensure restaurant-ready results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Restaurant with Custom Laser Engraving?</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today to discuss how we can help create custom menu boards, table numbers, glassware,
            and promotional materials that enhance your restaurant's brand and improve the dining experience in
            Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Restaurant Laser Engraving Quote
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
