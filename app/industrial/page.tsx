import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"

export const metadata: Metadata = {
  title: "Industrial Laser Engraving Hagerstown MD | Safety Signs Equipment Tags Compliance Labels",
  description:
    "Professional industrial laser engraving services in Hagerstown Maryland. Safety signage, equipment identification, compliance labels, part numbering laser engraved on metal, plastic. Heavy-duty marking for MD, DE, VA manufacturing and industrial facilities.",
  keywords:
    "industrial laser engraving Hagerstown MD, safety signs Maryland, equipment tags laser cutting, compliance labels MD DE VA, manufacturing laser marking, industrial identification systems",
}

export default function IndustrialPage() {
  const industrialServices = [
    {
      title: "Safety Components & Compliance Marking",
      description:
        "Critical safety and compliance marking that meets industrial standards and protects workers in manufacturing environments.",
      applications: [
        "OSHA-compliant safety warning signs and hazard identification",
        "Emergency procedure and evacuation route signage",
        "Personal protective equipment (PPE) requirement displays",
        "Chemical storage and handling safety information",
        "Machine operation safety instructions and warnings",
        "Regulatory compliance and certification marking",
      ],
      image: "/images/industrial-safety-components.png",
      alt: "Industrial safety components and compliance marking laser engraved Hagerstown MD",
    },
    {
      title: "Control Panels & Equipment Interface",
      description:
        "Professional control panel marking and equipment interface solutions that improve operational efficiency and safety.",
      applications: [
        "Control panel button and switch identification",
        "Equipment operation and function labeling",
        "Process control and monitoring system marking",
        "Electrical panel and circuit identification",
        "Instrumentation and gauge identification systems",
        "Maintenance and service access point marking",
      ],
      image: "/images/industrial-control-panels.png",
      alt: "Industrial control panels and equipment interface laser engraved Maryland",
    },
    {
      title: "Equipment Tracking & Asset Management",
      description:
        "Comprehensive equipment tracking systems that support maintenance schedules and asset management programs.",
      applications: [
        "Equipment serial number and model identification",
        "Asset tracking and inventory management systems",
        "Maintenance scheduling and service history tracking",
        "Equipment location and facility mapping systems",
        "Calibration and inspection tracking identification",
        "Warranty and service contract information marking",
      ],
      image: "/images/industrial-equipment-tracking.png",
      alt: "Industrial equipment tracking and asset management laser engraved",
    },
    {
      title: "Part Numbering & Manufacturing Identification",
      description:
        "Precise part numbering and manufacturing identification systems that support quality control and traceability.",
      applications: [
        "Part number identification and specification marking",
        "Manufacturing date and batch tracking systems",
        "Quality control and inspection identification",
        "Assembly sequence and process tracking",
        "Component traceability and supply chain marking",
        "Custom manufacturing and fabrication identification",
      ],
      image: "/images/industrial-part-numbering.png",
      alt: "Industrial part numbering and manufacturing identification laser engraved Maryland",
    },
    {
      title: "Precision Components & Technical Marking",
      description: "High-precision marking for technical components and specialized industrial applications.",
      applications: [
        "Precision measurement and calibration marking",
        "Technical specification and rating identification",
        "Engineering drawing and blueprint reference marking",
        "Component testing and validation identification",
        "Research and development prototype marking",
        "Custom engineering and technical solution identification",
      ],
      image: "/images/industrial-precision-components.png",
      alt: "Industrial precision components and technical marking laser engraved",
    },
    {
      title: "Safety Labeling & Hazard Communication",
      description:
        "Essential safety labeling and hazard communication systems that protect workers and ensure regulatory compliance.",
      applications: [
        "Hazardous material identification and storage marking",
        "Chemical safety data sheet (SDS) reference systems",
        "Emergency contact and response procedure information",
        "First aid and safety equipment location marking",
        "Environmental health and safety compliance signage",
        "Workplace safety training and education materials",
      ],
      image: "/images/industrial-safety-labeling.png",
      alt: "Industrial safety labeling and hazard communication laser engraved Maryland",
    },
    {
      title: "Tracking Systems & Operational Efficiency",
      description:
        "Advanced tracking systems that improve operational efficiency and support lean manufacturing principles.",
      applications: [
        "Production line and workflow tracking systems",
        "Inventory management and material flow identification",
        "Quality assurance and process control tracking",
        "Lean manufacturing and continuous improvement support",
        "Operational efficiency and performance monitoring",
        "Supply chain and logistics tracking systems",
      ],
      image: "/images/industrial-tracking-systems.png",
      alt: "Industrial tracking systems and operational efficiency laser engraved",
    },
    {
      title: "Compliance Marking & Regulatory Standards",
      description:
        "Professional compliance marking that meets industry regulations and supports certification requirements.",
      applications: [
        "Industry-specific regulatory compliance marking",
        "Certification and approval identification systems",
        "International standards and specification marking",
        "Quality management system (QMS) identification",
        "Environmental and sustainability compliance marking",
        "Export and international trade marking requirements",
      ],
      image: "/images/industrial-compliance-marking.png",
      alt: "Industrial compliance marking and regulatory standards laser engraved Maryland",
    },
  ]

  return (
    <>
      <HeroSection
        title="Industrial Laser Engraving Hagerstown Maryland"
        description="Heavy-duty laser engraving solutions for manufacturing, industrial facilities, and equipment manufacturers in Hagerstown, MD. From safety signage to equipment identification tags, we provide durable marking that meets industry standards and regulatory requirements. Serving Maryland, Delaware, and Virginia industrial operations with precision laser engraving on metal, plastic, and specialty materials built for demanding industrial environments."
        backgroundImage="/images/industrial-safety-components.png"
      />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Industrial Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser understands the demanding requirements of industrial environments and the critical
                importance of durable, compliant marking systems. Located in Hagerstown, Maryland, we specialize in
                creating laser-engraved solutions that withstand harsh industrial conditions while meeting safety
                standards and regulatory requirements for manufacturing facilities throughout the tri-state area.
              </p>
              <p className="text-gray-700 mb-6">
                From safety compliance to equipment tracking, our industrial laser engraving services support
                operational efficiency, worker safety, and regulatory compliance in manufacturing environments that
                demand reliability and precision.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Industrial Durability</h4>
                  <p className="text-gray-600 text-sm">Heavy-duty environments</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Safety Compliance</h4>
                  <p className="text-gray-600 text-sm">Regulatory standards</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/industrial-safety-components.png"
                  alt="Industrial safety components and compliance marking laser engraved"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional industrial safety and compliance marking laser engraved for Maryland manufacturing
                facilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Industrial Laser Engraving Services for Maryland Manufacturing
          </h2>
          <div className="space-y-12">
            {industrialServices.map((service, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-4">Industrial Applications:</h4>
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
            Ready to Enhance Your Industrial Operations with Professional Laser Engraving?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today to discuss how we can help create durable safety signage, equipment
            identification, and compliance marking that supports your industrial operations and regulatory requirements
            in Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Industrial Laser Quote
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
