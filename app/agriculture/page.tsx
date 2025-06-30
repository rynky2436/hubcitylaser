import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"

export const metadata: Metadata = {
  title: "Agriculture Laser Engraving Hagerstown MD | Farm Equipment Tags Livestock ID Safety Labels",
  description:
    "Professional agriculture laser engraving services in Hagerstown Maryland. Farm equipment identification, livestock tags, safety labeling, tool marking laser engraved on metal, plastic. Weather-resistant marking for MD, DE, VA farms and agribusiness.",
  keywords:
    "agriculture laser engraving Hagerstown MD, farm equipment tags Maryland, livestock identification, agricultural safety labels MD DE VA, farm tool marking, equipment tracking agriculture",
}

export default function AgriculturePage() {
  const agricultureServices = [
    {
      title: "Equipment Identification & Asset Tracking",
      description:
        "Durable equipment identification systems that help farms and agricultural operations track valuable assets and maintain organized inventories.",
      applications: [
        "Tractor and heavy equipment identification plates",
        "Farm machinery serial numbers and model identification",
        "Equipment maintenance scheduling and service tracking",
        "Asset inventory management and ownership identification",
        "Implement and attachment identification systems",
        "Mobile equipment GPS and location tracking support",
      ],
      image: "/images/agriculture-equipment-identification.png",
      alt: "Agriculture equipment identification and asset tracking laser engraved Hagerstown MD",
    },
    {
      title: "Farm Signage & Property Identification",
      description:
        "Professional farm signage that clearly identifies your agricultural operation and provides essential information for visitors and workers.",
      applications: [
        "Farm entrance signs with operation name and contact information",
        "Field identification and crop rotation tracking signs",
        "Livestock area and pasture identification signage",
        "Farm safety and visitor guidance directional signs",
        "Property boundary and land use identification markers",
        "Agricultural facility and building identification signs",
      ],
      image: "/images/agriculture-farm-signage.png",
      alt: "Farm signage and property identification laser engraved Maryland",
    },
    {
      title: "Precision Tracking & Field Management",
      description:
        "Advanced tracking systems that support precision agriculture and efficient field management operations.",
      applications: [
        "GPS coordinate markers for precision agriculture mapping",
        "Field section and zone identification for crop management",
        "Irrigation system component identification and maintenance",
        "Soil sampling location markers and tracking systems",
        "Harvest tracking and yield monitoring identification",
        "Precision planting and seeding equipment identification",
      ],
      image: "/images/agriculture-precision-tracking.png",
      alt: "Agriculture precision tracking and field management laser engraved",
    },
    {
      title: "Safety Labeling & Compliance Marking",
      description:
        "Essential safety and compliance marking that protects workers and meets agricultural industry safety standards.",
      applications: [
        "Chemical storage and handling safety warning labels",
        "Equipment operation and safety instruction signage",
        "Hazardous material identification and storage marking",
        "Emergency contact and safety procedure information",
        "Personal protective equipment (PPE) requirement signs",
        "Agricultural compliance and regulatory marking systems",
      ],
      image: "/images/agriculture-safety-labeling.png",
      alt: "Agriculture safety labeling and compliance marking laser engraved Maryland",
    },
    {
      title: "Tool Marking & Equipment Organization",
      description:
        "Comprehensive tool and equipment organization systems that reduce loss and improve operational efficiency.",
      applications: [
        "Hand tool identification and ownership marking",
        "Small equipment and implement identification tags",
        "Tool storage and organization system labeling",
        "Equipment checkout and return tracking systems",
        "Maintenance tool and supply identification marking",
        "Workshop and barn equipment organization signage",
      ],
      image: "/images/agriculture-tool-marking.png",
      alt: "Agriculture tool marking and equipment organization laser engraved",
    },
  ]

  return (
    <>
      <HeroSection
        title="Agriculture Laser Engraving Hagerstown Maryland"
        description="Durable, weather-resistant laser engraving solutions for farms, agricultural equipment manufacturers, and agribusiness in Hagerstown, MD. From farm signage to equipment identification tags, we provide precision laser marking on metal, wood, and plastic materials built to withstand outdoor conditions while maintaining clarity and professionalism. Serving Maryland, Delaware, and Virginia agricultural operations with reliable identification and tracking solutions."
        backgroundImage="/images/agriculture.png"
      />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Agriculture Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Engrave Everything understands the demanding conditions of agricultural operations and the need for
                durable, weather-resistant identification solutions. Located in Hagerstown, Maryland, we specialize in
                creating laser-engraved materials that withstand outdoor environments while providing clear,
                professional identification for farms, equipment, and agricultural businesses throughout the tri-state
                area.
              </p>
              <p className="text-gray-700 mb-6">
                From equipment tracking to safety compliance, our laser engraving services help agricultural operations
                maintain organized, efficient, and safe working environments that support productivity and regulatory
                compliance in the farming industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Weather Resistant</h4>
                  <p className="text-gray-600 text-sm">Outdoor durability guaranteed</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Asset Protection</h4>
                  <p className="text-gray-600 text-sm">Equipment tracking systems</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/agriculture.png"
                  alt="Agriculture farm signage and equipment identification laser engraved"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional farm signage and agricultural equipment identification laser engraved for Maryland farming
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
                        sizes="(max-width: 768px) 100vw, 33vw"
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

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Agricultural Operation with Durable Laser Engraving?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Engrave Everything today to discuss how we can help create weather-resistant equipment
            identification, farm signage, and safety marking that supports your agricultural operations and regulatory
            compliance in Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Agriculture Laser Quote
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
