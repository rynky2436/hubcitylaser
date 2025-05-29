import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Agriculture Laser Engraving Hagerstown MD | Farm Equipment Tags & Signage",
  description:
    "Professional laser engraving for farms and agricultural businesses in Hagerstown Maryland. Equipment identification tags, farm signage, livestock markers, safety labels laser engraved on metal, wood, plastic. Serving MD, DE, VA agricultural operations.",
  keywords:
    "agriculture laser engraving Hagerstown MD, farm equipment tags Maryland, livestock identification MD DE VA, farm signage laser cutting, agricultural safety labels, equipment serial numbers",
}

export default function AgriculturePage() {
  const agricultureServices = [
    {
      title: "Farm Signage & Property Identification",
      description:
        "Weather-resistant farm signage and property identification systems that withstand outdoor conditions while maintaining professional appearance.",
      applications: [
        "Farm entrance signs with barn icons and property names",
        "Property boundary markers and identification displays",
        "Field identification and crop rotation signage",
        "Farm gate signs and access control displays",
        "Agricultural business branding and promotional signage",
        "Directional signage for farm tours and agritourism",
      ],
      image: "/images/agriculture-farm-signage.png",
      alt: "Farm signage with barn icon and equipment identification tags on yellow tractor",
    },
    {
      title: "Equipment Identification & Asset Tracking",
      description:
        "Comprehensive equipment identification systems for farm machinery, tools, and agricultural assets throughout Maryland farms.",
      applications: [
        "Farm equipment serial number tags and identification plates",
        "Machinery asset tracking with barcodes and numbers",
        "Equipment maintenance scheduling and service tags",
        "Theft prevention and ownership identification markers",
        "Inventory management tags for farm tools and equipment",
        "Equipment notice and operational instruction signs",
      ],
      image: "/images/agriculture-equipment-identification.png",
      alt: "Farm equipment identification including Rosen Farm sign, mower serial number tags, and equipment notices",
    },
    {
      title: "Precision Agriculture & Technology Integration",
      description:
        "Advanced identification systems for modern precision agriculture equipment and technology integration.",
      applications: [
        "GPS and precision equipment identification tags",
        "Sensor and monitoring device asset tracking",
        "Automated equipment identification and barcoding",
        "Technology integration labels and system markers",
        "Precision agriculture equipment serial numbering",
        "Smart farming device identification and tracking",
      ],
      image: "/images/agriculture-precision-tracking.png",
      alt: "Precision equipment tracking tags with barcodes and serial numbers for agricultural technology",
    },
    {
      title: "Tool Identification & Worker Equipment",
      description:
        "Personal tool identification and worker equipment marking systems for farm operations and agricultural teams.",
      applications: [
        "Personal tool identification with worker names",
        "Hand tool ownership marking and identification",
        "Worker equipment assignment and tracking",
        "Tool theft prevention and recovery systems",
        "Equipment checkout and inventory management",
        "Personal protective equipment identification",
      ],
      image: "/images/agriculture-tool-marking.png",
      alt: "Precision tools with A. Miller laser engraved identification for farm worker equipment",
    },
    {
      title: "Safety Labeling & Compliance Marking",
      description:
        "Agricultural safety labeling and compliance marking systems that meet industry standards and regulatory requirements.",
      applications: [
        "Machinery safety warning labels and symbols",
        "Hazardous material identification and warnings",
        "Equipment operation and safety instruction labels",
        "Compliance marking for agricultural regulations",
        "Emergency procedure and contact information signs",
        "Chemical storage and handling safety labels",
      ],
      image: "/images/agriculture-safety-labeling.png",
      alt: "Industrial safety labels with warning symbols and part identification for agricultural equipment",
    },
  ]

  const farmTypes = [
    {
      type: "Crop Farms & Field Operations",
      services: "Field signage, equipment tags, irrigation system markers, harvest tracking",
      materials: "Weather-resistant metals, UV-stable plastics, outdoor-rated finishes",
      image: "/images/agriculture-farm-signage.png",
    },
    {
      type: "Livestock Operations",
      services: "Animal identification, feed system labels, barn signage, health tracking",
      materials: "Food-safe materials, washable surfaces, durable plastics",
      image: "/images/agriculture-equipment-identification.png",
    },
    {
      type: "Dairy Farms",
      services: "Milking equipment tags, cow identification, facility signage, safety labels",
      materials: "Stainless steel, food-grade plastics, sanitizable finishes",
      image: "/images/agriculture-precision-tracking.png",
    },
    {
      type: "Equipment Dealers & Manufacturers",
      services: "Serial number plates, warranty tags, parts identification, safety labeling",
      materials: "Industrial metals, permanent adhesives, tamper-evident materials",
      image: "/images/agriculture-safety-labeling.png",
    },
    {
      type: "Agribusiness & Cooperatives",
      services: "Facility signage, storage identification, transport labels, member displays",
      materials: "Commercial-grade materials, high-visibility finishes",
      image: "/images/agriculture-equipment-identification.png",
    },
    {
      type: "Precision Agriculture Services",
      services: "Technology equipment tags, GPS device marking, sensor identification",
      materials: "Electronic-safe materials, precision marking, weather protection",
      image: "/images/agriculture-tool-marking.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Agriculture Laser Engraving Hagerstown Maryland</h1>
          <p className="text-xl text-blue-100 max-w-4xl">
            Durable, weather-resistant laser engraving solutions for farms, agricultural equipment manufacturers, and
            agribusiness in Hagerstown, MD. From farm signage to equipment identification tags, we provide precision
            laser marking on metal, wood, and plastic materials built to withstand outdoor conditions while maintaining
            clarity and professionalism. Serving Maryland, Delaware, and Virginia agricultural operations with reliable
            identification and tracking solutions.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Agriculture Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser understands the demanding conditions of agricultural environments. Located in Hagerstown,
                Maryland, we specialize in creating durable laser-engraved identification systems, signage, and tracking
                solutions that withstand weather, chemicals, and heavy use while maintaining readability and
                professional appearance.
              </p>
              <p className="text-gray-700 mb-6">
                From traditional family farms to modern precision agriculture operations, we serve the diverse needs of
                Maryland's agricultural community with laser engraving solutions that improve organization, safety, and
                operational efficiency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Weather Resistant</h4>
                  <p className="text-gray-600 text-sm">Outdoor-rated materials and finishes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Durable Marking</h4>
                  <p className="text-gray-600 text-sm">Long-lasting identification systems</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/agriculture-farm-signage.png"
                  alt="Farm signage and equipment identification laser engraved for agricultural operations"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional farm signage and equipment identification laser engraved for Maryland agricultural
                operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Agriculture Laser Engraving Services for Maryland Farms
          </h2>
          <div className="space-y-12">
            {agricultureServices.map((service, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-4">Agricultural Applications:</h4>
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

      {/* Farm Types */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Agricultural Industry Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {farmTypes.map((farm, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={farm.image || "/placeholder.svg"}
                    alt={`${farm.type} laser engraving examples`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-hub-blue mb-3">{farm.type}</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-gray-900">Services: </span>
                      <span className="text-gray-700 text-sm">{farm.services}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Materials: </span>
                      <span className="text-gray-700 text-sm">{farm.materials}</span>
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
            Why Choose Hub City Laser for Agricultural Engraving?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Agricultural Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of farm operations and the demanding conditions agricultural equipment faces daily.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Weather Resistance</h3>
              <p className="text-gray-700">
                Materials and finishes specifically chosen to withstand outdoor conditions, UV exposure, and chemical
                exposure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Asset Protection</h3>
              <p className="text-gray-700">
                Permanent identification systems that help prevent theft and improve equipment recovery and tracking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Compliance Support</h3>
              <p className="text-gray-700">
                Safety labeling and compliance marking that meets agricultural industry standards and regulations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Local Service</h3>
              <p className="text-gray-700">
                Hagerstown, Maryland location provides quick service to farms throughout the tri-state agricultural
                region.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Volume Pricing</h3>
              <p className="text-gray-700">
                Competitive pricing for large equipment fleets and bulk identification needs common in agricultural
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Our Agricultural Laser Engraving Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Farm Assessment</h3>
              <p className="text-gray-700 text-sm">
                Evaluate your agricultural operation's identification and signage needs for optimal solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Material Selection</h3>
              <p className="text-gray-700 text-sm">
                Choose weather-resistant materials appropriate for your specific agricultural environment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Precision Engraving</h3>
              <p className="text-gray-700 text-sm">
                Execute durable laser marking with quality control for agricultural durability standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Installation Support</h3>
              <p className="text-gray-700 text-sm">
                Provide installation guidance and mounting solutions for farm and field applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Improve Your Farm Operations with Professional Laser Engraving?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today to discuss how we can help create durable farm signage, equipment
            identification systems, and safety labeling that withstand the demands of agricultural operations in
            Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Agricultural Laser Engraving Quote
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
