import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Industrial Laser Engraving Hagerstown MD | Safety Signs Equipment Tags Compliance",
  description:
    "Heavy-duty laser engraving for industrial applications in Hagerstown Maryland. Safety signs, equipment tags, identification labels, compliance marking laser engraved on metal, plastic. Serving MD, DE, VA manufacturing facilities.",
  keywords:
    "industrial laser engraving Hagerstown MD, safety signs Maryland, equipment tags laser cutting, compliance marking MD DE VA, manufacturing labels, asset tracking industrial",
}

export default function IndustrialPage() {
  const industrialServices = [
    {
      title: "Equipment Asset Tracking & Identification Systems",
      description:
        "Comprehensive asset tracking and equipment identification systems that improve inventory management and operational efficiency in industrial facilities.",
      applications: [
        "Equipment asset tags with barcodes and serial numbers",
        "Machine identification plates and nameplates",
        "Inventory tracking labels for tools and equipment",
        "Maintenance scheduling and service history tags",
        "Quality control and inspection identification",
        "Calibration and certification tracking labels",
      ],
      image: "/images/industrial-equipment-tracking.png",
      alt: "Industrial equipment asset tracking tags with barcodes and serial numbers on precision machinery",
    },
    {
      title: "Industrial Safety Signs & Warning Labels",
      description:
        "OSHA-compliant safety signage and warning labels that protect workers and ensure regulatory compliance in manufacturing environments.",
      applications: [
        "Warning signs for authorized personnel only areas",
        "Caution labels for hazardous equipment and processes",
        "Hard hat area and PPE requirement signage",
        "Emergency procedure and evacuation route signs",
        "Lockout/tagout safety identification labels",
        "Chemical hazard and material safety warnings",
      ],
      image: "/images/industrial-safety-labeling.png",
      alt: "Industrial safety warning labels including authorized personnel only and caution signage",
    },
    {
      title: "Compliance & Regulatory Marking",
      description:
        "Regulatory compliance marking and certification labels that meet industry standards and government requirements.",
      applications: [
        "OSHA compliance and safety regulation marking",
        "ISO certification and quality standard labels",
        "Environmental compliance and emission tags",
        "Pressure vessel and equipment certification marks",
        "Electrical safety and code compliance labels",
        "FDA and industry-specific regulatory marking",
      ],
      image: "/images/industrial-equipment-tracking.png",
      alt: "Regulatory compliance marking and certification labels for industrial equipment",
    },
    {
      title: "Machine Nameplates & Serial Number Engraving",
      description:
        "Permanent machine identification and serial number engraving for manufacturers and industrial equipment.",
      applications: [
        "Machine nameplates with model and serial numbers",
        "Manufacturing date and specification labels",
        "Warranty and service information tags",
        "Custom manufacturer branding and logos",
        "Technical specification and rating plates",
        "Replacement part identification and ordering info",
      ],
      image: "/images/industrial-safety-labeling.png",
      alt: "Machine nameplates and serial number engraving for industrial manufacturing equipment",
    },
    {
      title: "Facility Wayfinding & Operational Signage",
      description:
        "Industrial facility navigation and operational signage that improves workflow and safety in manufacturing environments.",
      applications: [
        "Department and area identification signage",
        "Production line and workflow directional signs",
        "Emergency exit and safety route marking",
        "Restricted access and security area signs",
        "Loading dock and shipping area identification",
        "Utility and infrastructure marking systems",
      ],
      image: "/images/industrial-equipment-tracking.png",
      alt: "Industrial facility wayfinding and operational signage for manufacturing environments",
    },
  ]

  const industrialTypes = [
    {
      type: "Manufacturing Facilities",
      services: "Equipment tags, safety signs, production line marking, quality control labels",
      materials: "Stainless steel, anodized aluminum, industrial plastics, chemical-resistant finishes",
      image: "/images/industrial-equipment-tracking.png",
    },
    {
      type: "Chemical & Petrochemical Plants",
      services: "Hazard warnings, pipe marking, equipment certification, emergency signage",
      materials: "Chemical-resistant materials, explosion-proof ratings, corrosion-resistant metals",
      image: "/images/industrial-safety-labeling.png",
    },
    {
      type: "Power Generation Facilities",
      services: "Equipment identification, safety warnings, regulatory compliance, maintenance tags",
      materials: "High-temperature resistant, electrical safety rated, weatherproof materials",
      image: "/images/industrial-equipment-tracking.png",
    },
    {
      type: "Food Processing Plants",
      services: "Sanitary equipment tags, HACCP compliance, cleaning schedules, safety protocols",
      materials: "Food-grade stainless steel, washable surfaces, FDA-approved materials",
      image: "/images/industrial-safety-labeling.png",
    },
    {
      type: "Pharmaceutical Manufacturing",
      services: "GMP compliance marking, batch tracking, equipment validation, clean room signage",
      materials: "Pharmaceutical-grade materials, cleanroom compatible, validation documentation",
      image: "/images/industrial-equipment-tracking.png",
    },
    {
      type: "Automotive Manufacturing",
      services: "Assembly line marking, quality control, safety compliance, tool identification",
      materials: "Automotive-grade materials, high-durability finishes, production environment rated",
      image: "/images/industrial-safety-labeling.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industrial Laser Engraving Hagerstown Maryland</h1>
          <p className="text-xl text-blue-100 max-w-4xl">
            Heavy-duty laser engraving solutions for manufacturing, industrial facilities, and equipment manufacturers
            in Hagerstown, MD. From safety signage to equipment identification tags, we provide durable marking that
            meets industry standards and regulatory requirements. Serving Maryland, Delaware, and Virginia industrial
            operations with precision laser engraving on metal, plastic, and specialty materials built for demanding
            industrial environments.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Industrial Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser understands the demanding requirements of industrial environments. Located in Hagerstown,
                Maryland, we specialize in creating durable, compliant laser-engraved identification systems, safety
                signage, and tracking solutions that withstand harsh conditions while maintaining readability and
                regulatory compliance.
              </p>
              <p className="text-gray-700 mb-6">
                From precision equipment tracking to OSHA-compliant safety signage, we serve the diverse needs of
                Maryland's industrial community with laser engraving solutions that improve safety, efficiency, and
                regulatory compliance.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">OSHA Compliant</h4>
                  <p className="text-gray-600 text-sm">Safety regulation standards</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Industrial Durability</h4>
                  <p className="text-gray-600 text-sm">Harsh environment rated</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/industrial-equipment-tracking.png"
                  alt="Industrial equipment asset tracking and identification systems laser engraved on machinery"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional industrial equipment tracking and safety signage laser engraved for Maryland manufacturing
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

      {/* Industrial Types */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Industrial Sector Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrialTypes.map((industrial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={industrial.image || "/placeholder.svg"}
                    alt={`${industrial.type} laser engraving examples`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-hub-blue mb-3">{industrial.type}</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-gray-900">Services: </span>
                      <span className="text-gray-700 text-sm">{industrial.services}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Materials: </span>
                      <span className="text-gray-700 text-sm">{industrial.materials}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Industrial Standards & Compliance Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="font-semibold text-hub-blue mb-3">OSHA Compliance</h3>
              <p className="text-gray-700 text-sm">
                Safety signage and warning labels that meet Occupational Safety and Health Administration requirements
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-hub-blue mb-3">ISO Standards</h3>
              <p className="text-gray-700 text-sm">
                Quality management system marking and certification labels for ISO compliance
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-hub-blue mb-3">FDA Regulations</h3>
              <p className="text-gray-700 text-sm">
                Food and pharmaceutical industry marking that meets FDA requirements and guidelines
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-hub-blue mb-3">Industry Specific</h3>
              <p className="text-gray-700 text-sm">
                Specialized marking for automotive, aerospace, chemical, and other regulated industries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Why Choose Hub City Laser for Industrial Engraving?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Industrial Environment Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of manufacturing environments and the demanding conditions industrial equipment faces
                daily.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Regulatory Compliance</h3>
              <p className="text-gray-700">
                Expertise in OSHA, FDA, ISO, and industry-specific regulations ensuring your marking meets all
                requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Extreme Durability</h3>
              <p className="text-gray-700">
                Materials and processes specifically chosen to withstand chemicals, heat, pressure, and industrial
                cleaning.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Asset Protection</h3>
              <p className="text-gray-700">
                Permanent identification systems that improve equipment tracking, maintenance scheduling, and theft
                prevention.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Safety Enhancement</h3>
              <p className="text-gray-700">
                Clear, durable safety signage that protects workers and reduces liability in industrial environments.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Local Industrial Service</h3>
              <p className="text-gray-700">
                Hagerstown, Maryland location provides quick service to manufacturing facilities throughout the
                tri-state industrial corridor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Our Industrial Laser Engraving Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Facility Assessment</h3>
              <p className="text-gray-700 text-sm">
                Evaluate industrial environment requirements and regulatory compliance needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Compliance Review</h3>
              <p className="text-gray-700 text-sm">
                Review applicable safety standards and regulatory requirements for your industry
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Material Selection</h3>
              <p className="text-gray-700 text-sm">
                Choose industrial-grade materials appropriate for your specific environment
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Precision Engraving</h3>
              <p className="text-gray-700 text-sm">
                Execute durable laser marking with quality control for industrial standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Installation Support</h3>
              <p className="text-gray-700 text-sm">Provide installation guidance and compliance documentation</p>
            </div>
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
            identification systems, and compliance marking that meets the demanding requirements of industrial
            operations in Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Industrial Laser Engraving Quote
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
