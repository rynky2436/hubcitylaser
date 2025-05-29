import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"

export const metadata: Metadata = {
  title: "Technology Industry Laser Engraving Hagerstown MD | Server Equipment Labels IT Infrastructure",
  description:
    "Professional laser engraving for technology companies, data centers, and IT services in Hagerstown Maryland. Server identification, equipment labels, safety warnings, model numbers laser engraved on metal. Serving MD, DE, VA tech businesses.",
  keywords:
    "technology laser engraving Hagerstown MD, server identification Maryland, IT equipment labels, data center signage MD DE VA, tech company laser cutting, computer equipment marking",
}

export default function TechPage() {
  const technologyServices = [
    {
      title: "Server & Network Equipment Identification",
      description:
        "Professional server and network equipment identification systems that improve data center organization and IT infrastructure management.",
      applications: [
        "Server rack identification with numbered designations",
        "IP address labeling with configurable address fields",
        "Network equipment identification and asset tracking",
        "Data center infrastructure organization and mapping",
        "Equipment maintenance and service scheduling tags",
        "Cable management and network topology labeling",
      ],
      image: "/images/technology-equipment-identification.png",
      alt: "Technology equipment identification including server tags, IP address labels, and model numbers on metal surfaces",
    },
    {
      title: "IT Infrastructure & Data Center Labeling",
      description:
        "Comprehensive IT infrastructure labeling solutions for data centers, server rooms, and technology facilities.",
      applications: [
        "Server rack identification and organization systems",
        "Equipment caution and safety warning labels",
        "USB and connectivity port identification symbols",
        "Model number and specification identification tags",
        "Data center facility navigation and organization",
        "Equipment access and security identification systems",
      ],
      image: "/images/technology-infrastructure-labeling.png",
      alt: "IT infrastructure labeling including server rack identification, caution warnings, and USB symbols",
    },
    {
      title: "Safety & Compliance Marking for Tech Equipment",
      description:
        "Technology-specific safety and compliance marking that meets industry standards for electronic equipment and laser devices.",
      applications: [
        "Laser radiation safety warnings with hazard symbols",
        "Electronic equipment caution and warning labels",
        "Compliance marking for technology regulations",
        "Safety protocol identification for tech facilities",
        "Equipment operation and maintenance safety signs",
        "Emergency procedure and safety contact information",
      ],
      image: "/images/technology-equipment-identification.png",
      alt: "Technology safety marking including laser radiation warnings and caution labels",
    },
    {
      title: "Product Labels & Manufacturing Identification",
      description:
        "Professional product labeling and manufacturing identification for technology companies and equipment manufacturers.",
      applications: [
        "Model number identification for technology products",
        "Serial number tracking for warranty and support",
        "Manufacturing specification and rating labels",
        "Quality control and testing identification tags",
        "Product certification and compliance marking",
        "Customer support and service information labels",
      ],
      image: "/images/technology-infrastructure-labeling.png",
      alt: "Technology product labeling including model numbers and manufacturing identification",
    },
    {
      title: "Corporate Technology Branding & Awards",
      description:
        "Custom technology company branding materials and corporate recognition programs for tech industry professionals.",
      applications: [
        "Corporate office technology signage and displays",
        "Employee recognition awards for tech achievements",
        "Innovation and patent milestone recognition",
        "Technology conference and trade show materials",
        "Startup and tech company branding displays",
        "Client presentation and demonstration materials",
      ],
      image: "/images/technology-equipment-identification.png",
      alt: "Technology corporate branding and recognition materials for tech companies",
    },
  ]

  const technologyTypes = [
    {
      type: "Data Centers & Cloud Providers",
      services: "Server identification, rack labeling, safety warnings, infrastructure mapping",
      materials: "Industrial metals, high-durability finishes, data center rated materials",
      image: "/images/technology-infrastructure-labeling.png",
    },
    {
      type: "Software & Tech Startups",
      services: "Office branding, employee recognition, corporate awards, presentation materials",
      materials: "Modern finishes, startup aesthetics, professional presentations",
      image: "/images/technology-equipment-identification.png",
    },
    {
      type: "IT Services & Consulting",
      services: "Equipment identification, client materials, service documentation, safety compliance",
      materials: "Professional finishes, client-ready presentations, service documentation",
      image: "/images/technology-infrastructure-labeling.png",
    },
    {
      type: "Electronics Manufacturing",
      services: "Product labels, model numbers, compliance marking, quality control tags",
      materials: "Manufacturing-grade materials, permanent marking, regulatory compliance",
      image: "/images/technology-equipment-identification.png",
    },
    {
      type: "Telecommunications",
      services: "Network equipment labels, infrastructure identification, safety compliance",
      materials: "Telecom-rated materials, weather resistance, permanent identification",
      image: "/images/technology-infrastructure-labeling.png",
    },
    {
      type: "Research & Development",
      services: "Laboratory equipment tags, prototype identification, safety warnings, project tracking",
      materials: "Laboratory-grade materials, chemical resistance, precision marking",
      image: "/images/technology-equipment-identification.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Technology Industry Laser Engraving Hagerstown Maryland"
        description="Precision laser engraving solutions for technology companies, data centers, and IT services in Hagerstown, MD. From server identification to corporate awards, we help Maryland, Delaware, and Virginia technology businesses create professional identification systems, safety compliance marking, and corporate recognition materials with precision laser engraving on metal and specialty materials that match your innovation and technical excellence."
        backgroundImage="/images/technology.png"
      />

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Professional Technology Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser specializes in creating precision laser-engraved materials for the technology industry.
                Located in Hagerstown, Maryland, we understand the unique needs of tech companies, data centers, and IT
                services that require professional identification systems, safety compliance, and corporate branding
                that reflects their technical expertise.
              </p>
              <p className="text-gray-700 mb-6">
                From server rack identification to corporate recognition awards, our laser engraving services help
                technology businesses throughout the tri-state area maintain organized, professional environments that
                support efficient operations and showcase their commitment to innovation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Technical Precision</h4>
                  <p className="text-gray-600 text-sm">Accurate identification systems</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Professional Quality</h4>
                  <p className="text-gray-600 text-sm">Tech industry standards</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/technology.png"
                  alt="Technology infrastructure labeling including server racks and equipment identification"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Professional technology infrastructure labeling and equipment identification laser engraved for Maryland
                tech companies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Technology Laser Engraving Services for Maryland Tech Companies
          </h2>
          <div className="space-y-12">
            {technologyServices.map((service, index) => (
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
                    <h4 className="font-semibold text-gray-900 mb-4">Technology Applications:</h4>
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

      {/* Technology Types */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Technology Industry Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyTypes.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={tech.image || "/placeholder.svg"}
                    alt={`${tech.type} laser engraving examples`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-hub-blue mb-3">{tech.type}</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium text-gray-900">Services: </span>
                      <span className="text-gray-700 text-sm">{tech.services}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Materials: </span>
                      <span className="text-gray-700 text-sm">{tech.materials}</span>
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
            Popular Technology Laser Engraving Items
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Server & Network Equipment</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Server rack identification</li>
                <li>• IP address labeling</li>
                <li>• Network equipment tags</li>
                <li>• Cable management labels</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Safety & Compliance</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Laser radiation warnings</li>
                <li>• Equipment caution labels</li>
                <li>• Safety protocol signs</li>
                <li>• Compliance marking</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Product Identification</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Model number labels</li>
                <li>• Serial number tracking</li>
                <li>• Manufacturing specs</li>
                <li>• Quality control tags</li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-hub-blue mb-3">Corporate Materials</h4>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• Office technology signage</li>
                <li>• Employee recognition</li>
                <li>• Innovation awards</li>
                <li>• Conference materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Why Choose Hub City Laser for Technology Engraving?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Technical Precision</h3>
              <p className="text-gray-700">
                Understanding of technology environments and the precision required for accurate equipment
                identification and organization.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Industry Standards</h3>
              <p className="text-gray-700">
                Compliance with technology industry standards for safety marking, equipment identification, and
                regulatory requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Professional Quality</h3>
              <p className="text-gray-700">
                High-quality laser engraving that reflects the professionalism and technical excellence of your
                technology business.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Scalable Solutions</h3>
              <p className="text-gray-700">
                Flexible solutions that scale from startup needs to enterprise data center requirements throughout MD,
                DE, VA.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Quick Turnaround</h3>
              <p className="text-gray-700">
                Fast processing for technology deployment deadlines and rapid scaling needs in the fast-paced tech
                industry.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-hub-blue mb-3">Innovation Support</h3>
              <p className="text-gray-700">
                Supporting Maryland's growing technology sector with professional laser engraving that matches your
                innovation and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Our Technology Laser Engraving Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Technology Assessment</h3>
              <p className="text-gray-700 text-sm">
                Evaluate your technology infrastructure and identification needs for optimal organization
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">System Design</h3>
              <p className="text-gray-700 text-sm">
                Create identification systems that improve efficiency and support your technology operations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Material Selection</h3>
              <p className="text-gray-700 text-sm">
                Choose technology-appropriate materials that meet industry standards and durability requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Precision Production</h3>
              <p className="text-gray-700 text-sm">
                Execute precise laser engraving with quality control for technology industry standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enhance Your Technology Business with Professional Laser Engraving?
          </h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today to discuss how we can help create professional equipment identification, safety
            compliance marking, and corporate recognition materials that support your technology operations and reflect
            your commitment to innovation in Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Technology Laser Engraving Quote
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
