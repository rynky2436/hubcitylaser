import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Retail Laser Engraving Hagerstown MD | Store Displays & Point-of-Sale Signs",
  description:
    "Professional laser engraving for retail businesses in Hagerstown Maryland. Custom store displays, price tags, promotional signage, product labels laser engraved on wood, acrylic, metal. Serving MD, DE, VA retail stores.",
  keywords:
    "retail laser engraving Hagerstown MD, store displays Maryland, point of sale signage, price tags laser cutting, retail promotional items MD DE VA, store branding materials",
}

export default function RetailPage() {
  const retailServices = [
    {
      title: "Custom Store Displays & Product Showcases",
      description:
        "Professional laser-engraved displays and showcases that highlight your products and enhance the retail shopping experience.",
      applications: [
        "Product showcase displays and feature presentations",
        "Seasonal and holiday promotional displays",
        "Brand storytelling and product information displays",
        "Interactive product demonstration stations",
        "Window display elements and eye-catching features",
        "End-cap and aisle display enhancement materials",
      ],
      image: "/images/retail-complete-system.png",
      alt: "Complete retail display system with laser-engraved wooden signs including retail displays, sale signs, and price tags",
    },
    {
      title: "Point-of-Sale Signage & Promotional Materials",
      description:
        "Eye-catching promotional signage and point-of-sale materials that drive customer engagement and increase sales.",
      applications: [
        "New arrival announcements and product launch signage",
        "Sale and special offer promotional displays",
        "Limited time offer and flash sale signage",
        "Customer loyalty program promotional materials",
        "Cross-selling and upselling display materials",
        "Checkout area promotional and informational signs",
      ],
      image: "/images/retail-acrylic-displays.png",
      alt: "Modern acrylic retail displays including new arrival, sale, and special offer signs on glass shelving",
    },
    {
      title: "Product Labels & Pricing Displays",
      description:
        "Professional product labeling and pricing systems that provide clear information while maintaining brand consistency.",
      applications: [
        "Custom price tags with brand colors and fonts",
        "Product information labels and specifications",
        "SKU and inventory management labeling",
        "Size, color, and variant identification tags",
        "Care instruction and product detail labels",
        "Barcode integration and inventory tracking labels",
      ],
      image: "/images/retail-traditional-signage.png",
      alt: "Traditional wooden retail signage including new arrival signs, sale displays, and price tags",
    },
    {
      title: "Store Branding & Directional Signage",
      description:
        "Comprehensive store branding solutions and wayfinding systems that guide customers and reinforce brand identity.",
      applications: [
        "Department identification and category signage",
        "Store directory and wayfinding displays",
        "Brand messaging and company value displays",
        "Customer service and information desk signage",
        "Fitting room and facility directional signs",
        "Store policy and customer information displays",
      ],
      image: "/images/retail-wooden-displays.png",
      alt: "Wooden retail branding displays including laser-engraved signs and promotional materials",
    },
    {
      title: "Premium Display Materials & Luxury Retail",
      description:
        "High-end display materials and luxury retail solutions that create sophisticated shopping environments.",
      applications: [
        "Luxury brand displays and premium product showcases",
        "High-end jewelry and watch display materials",
        "Designer fashion and accessory presentation systems",
        "Exclusive collection and limited edition displays",
        "VIP customer area signage and materials",
        "Premium gift packaging and presentation elements",
      ],
      image: "/images/retail-premium-displays.png",
      alt: "Premium dark acrylic retail displays for luxury retail environments",
    },
  ]

  const retailTypes = [
    {
      type: "Fashion & Apparel Stores",
      services: "Size tags, brand displays, seasonal promotions, fitting room signs",
      materials: "Elegant wood finishes, modern acrylics, fabric-friendly materials",
      image: "/images/retail-traditional-signage.png",
    },
    {
      type: "Electronics & Technology Retail",
      services: "Product specifications, feature highlights, tech demos, warranty info",
      materials: "Modern acrylics, metal finishes, high-tech aesthetics",
      image: "/images/retail-acrylic-displays.png",
    },
    {
      type: "Home & Garden Centers",
      services: "Plant care labels, seasonal displays, tool identification, care instructions",
      materials: "Weather-resistant materials, natural wood finishes",
      image: "/images/retail-wooden-displays.png",
    },
    {
      type: "Jewelry & Luxury Goods",
      services: "Premium displays, security signage, collection showcases, brand storytelling",
      materials: "Luxury finishes, premium acrylics, elegant presentations",
      image: "/images/retail-premium-displays.png",
    },
    {
      type: "Grocery & Food Retail",
      services: "Product labels, nutritional info, organic certifications, price displays",
      materials: "Food-safe materials, easy-clean surfaces, durable finishes",
      image: "/images/retail-complete-system.png",
    },
    {
      type: "Specialty & Boutique Shops",
      services: "Artisan displays, handmade labels, story telling, unique presentations",
      materials: "Custom materials, artistic finishes, brand-specific designs",
      image: "/images/retail-wooden-displays.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Retail Laser Engraving Hagerstown Maryland</h1>
          <p className="text-xl text-blue-100 max-w-4xl">
            Attract customers and enhance your retail environment with custom laser-engraved displays, signage, and
            promotional materials in Hagerstown, MD. From point-of-sale signage to product showcases, we help Maryland,
            Delaware, and Virginia retail businesses create compelling shopping experiences with precision laser
            engraving on wood, acrylic, metal, and specialty materials that showcase your products and brand
            professionally.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Retail Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser specializes in creating custom laser-engraved materials that enhance the retail shopping
                experience and drive sales. Located in Hagerstown, Maryland, we understand the importance of visual
                merchandising and brand consistency in creating successful retail environments.
              </p>
              <p className="text-gray-700 mb-6">
                From traditional wooden displays to modern acrylic signage, our laser engraving services help retail
                businesses throughout the tri-state area create professional, eye-catching displays that attract
                customers and communicate value effectively.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Brand Consistency</h4>
                  <p className="text-gray-600 text-sm">Cohesive visual identity</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Sales Enhancement</h4>
                  <p className="text-gray-600 text-sm">Customer engagement tools</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/retail-acrylic-displays.png"
                  alt="Modern retail displays with laser engraved acrylic signage for store promotions"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional retail displays and promotional signage laser engraved for Maryland retail businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Retail Laser Engraving Services for Maryland Businesses
          </h2>
          <div className="space-y-12">
            {retailServices.map((service, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-4">Retail Applications:</h4>
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

      {/* Retail Types */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Retail Industry Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailTypes.map((retail, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={retail.image || "/placeholder.svg"}
                    alt={`${retail.type} laser engraving examples`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-hub-blue mb-3">{retail.type}</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-gray-900">Services: </span>
                      <span className="text-gray-700 text-sm">{retail.services}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Materials: </span>
                      <span className="text-gray-700 text-sm">{retail.materials}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Retail Display Material Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/retail-wooden-displays.png"
                  alt="Wooden retail displays and signage laser engraved for traditional store aesthetics"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Natural Wood Displays</h3>
              <p className="text-gray-700 text-sm">
                Warm, traditional aesthetic perfect for boutiques, artisan shops, and organic brands
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/retail-acrylic-displays.png"
                  alt="Clear acrylic retail displays for modern store environments"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Clear Acrylic Displays</h3>
              <p className="text-gray-700 text-sm">
                Modern, clean appearance ideal for electronics, fashion, and contemporary retail environments
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/retail-premium-displays.png"
                  alt="Premium dark acrylic displays for luxury retail environments"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Premium Dark Acrylics</h3>
              <p className="text-gray-700 text-sm">
                Sophisticated, luxury appearance perfect for high-end jewelry, designer goods, and premium brands
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                <Image
                  src="/images/retail-complete-system.png"
                  alt="Complete retail display system with various materials and formats"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Mixed Material Systems</h3>
              <p className="text-gray-700 text-sm">
                Combination approaches using wood, acrylic, and metal for comprehensive retail solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Why Choose Hub City Laser for Retail Engraving?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Visual Merchandising Expertise</h3>
              <p className="text-gray-700">
                Understanding of retail environments and customer psychology to create displays that drive sales and
                engagement.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Brand Consistency</h3>
              <p className="text-gray-700">
                Maintain consistent branding across all retail materials from price tags to major displays and
                promotional signage.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Seasonal Flexibility</h3>
              <p className="text-gray-700">
                Quick turnaround for seasonal promotions, holiday displays, and time-sensitive marketing campaigns.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Cost-Effective Solutions</h3>
              <p className="text-gray-700">
                Affordable alternatives to expensive digital displays while maintaining professional appearance and
                flexibility.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Durability & Longevity</h3>
              <p className="text-gray-700">
                High-quality materials and laser engraving that withstand retail environments and frequent handling.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Local Maryland Service</h3>
              <p className="text-gray-700">
                Quick local service for Maryland, Delaware, and Virginia retailers with understanding of regional market
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Retail Environment with Custom Laser Engraving?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today to discuss how we can help create compelling retail displays, promotional
            signage, and point-of-sale materials that attract customers and drive sales in your Hagerstown, Maryland
            retail location.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Retail Laser Engraving Quote
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
