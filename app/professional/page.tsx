import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Professional Office Laser Engraving Hagerstown MD | Custom Signs Nameplates Awards",
  description:
    "Professional laser engraving for offices, law firms, accounting practices in Hagerstown Maryland. Custom office signs, executive nameplates, corporate awards laser engraved on wood, metal, glass. Serving MD, DE, VA professional services.",
  keywords:
    "office laser engraving Hagerstown MD, professional nameplates Maryland, law firm signage laser cutting, corporate awards MD DE VA, business office signs, executive desk accessories, professional door signs",
}

export default function ProfessionalPage() {
  const professionalServices = [
    {
      title: "Executive Office Signage & Door Signs",
      description:
        "Premium laser-engraved office signage that projects professionalism and authority for Maryland business leaders.",
      applications: [
        "Executive office door signs with titles and names",
        "Conference room identification and booking displays",
        "Department directory signs for professional buildings",
        "Reception area welcome signs and company branding",
        "Professional building wayfinding and floor directories",
        "ADA-compliant office signage with Braille options",
      ],
    },
    {
      title: "Corporate Awards & Recognition Programs",
      description:
        "Custom laser-engraved awards and recognition items that celebrate achievements and motivate teams across MD, DE, VA.",
      applications: [
        "Employee of the month awards and recognition plaques",
        "Years of service milestone recognition awards",
        "Sales achievement and performance awards",
        "Professional certification and training completion awards",
        "Retirement gifts and career milestone recognition",
        "Corporate anniversary and company milestone awards",
      ],
    },
    {
      title: "Professional Desk Accessories & Nameplates",
      description:
        "Elegant laser-engraved desk accessories that enhance professional image and workspace organization.",
      applications: [
        "Executive desk nameplates with titles and credentials",
        "Business card holders and desk organizers",
        "Professional pen sets and desk accessories",
        "Document holders and file organizers",
        "Meeting room table tents and name displays",
        "Professional bookends and desk decorations",
      ],
    },
    {
      title: "Law Firm & Legal Office Specialties",
      description: "Specialized laser engraving services for law firms and legal professionals throughout Maryland.",
      applications: [
        "Attorney office door signs with bar credentials",
        "Legal practice area signs and specialization displays",
        "Court reporter and paralegal identification signs",
        "Law library organization and case law markers",
        "Client meeting room privacy and identification signs",
        "Legal award ceremonies and bar association recognition",
      ],
    },
  ]

  const industries = [
    {
      industry: "Law Firms & Legal Services",
      services: "Attorney door signs, legal awards, court displays, bar association recognition",
      materials: "Premium wood, brushed metal, glass etching",
    },
    {
      industry: "Accounting & Financial Services",
      services: "CPA office signs, financial advisor nameplates, achievement awards",
      materials: "Professional metal, wood, acrylic displays",
    },
    {
      industry: "Consulting & Business Services",
      services: "Consultant office signage, project awards, client presentation materials",
      materials: "Modern acrylic, metal, wood combinations",
    },
    {
      industry: "Medical & Healthcare Practices",
      services: "Doctor office signs, medical practice displays, patient area signage",
      materials: "Medical-grade materials, easy-clean surfaces",
    },
    {
      industry: "Real Estate & Property Management",
      services: "Realtor office signs, property displays, sales achievement awards",
      materials: "Weather-resistant materials, professional finishes",
    },
    {
      industry: "Insurance & Risk Management",
      services: "Agent office signage, company awards, professional recognition",
      materials: "Durable materials, corporate finishes",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional Office Laser Engraving Hagerstown Maryland
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl">
            Elevate your professional image with custom laser-engraved office signage, awards, and accessories in
            Hagerstown, MD. Serving law firms, accounting practices, consulting firms, and corporate offices throughout
            Maryland, Delaware, and Virginia with precision laser engraving on wood, metal, glass, and premium
            materials.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">Premium Professional Laser Engraving Services</h2>
              <p className="text-gray-700 mb-6">
                Your professional image matters. Hub City Laser specializes in creating sophisticated, high-quality
                laser-engraved materials that reflect the professionalism and success of your business. From executive
                office door signs to corporate awards, we help Maryland professionals make lasting impressions.
              </p>
              <p className="text-gray-700 mb-6">
                Located in Hagerstown, Maryland, we understand the unique needs of professional service providers
                throughout the tri-state area. Our laser engraving services combine traditional craftsmanship with
                modern technology to create pieces that enhance your professional environment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Premium Materials</h4>
                  <p className="text-gray-600 text-sm">Wood, metal, glass, acrylic</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Fast Turnaround</h4>
                  <p className="text-gray-600 text-sm">2-3 business days standard</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/professional.png"
                  alt="Professional office signs and nameplates laser engraved Hagerstown MD"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Executive office signs, nameplates, and awards laser engraved for Maryland professionals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Comprehensive Professional Laser Engraving Services
          </h2>
          <div className="space-y-12">
            {professionalServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold text-hub-blue mb-4">{service.title}</h3>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="aspect-video bg-gray-200 rounded flex items-center justify-center text-gray-500">
                      [Service Image - {service.title}]
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">Professional Applications:</h4>
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

      {/* Industry Specializations */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Professional Industry Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-hub-blue mb-3">{industry.industry}</h3>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium text-gray-900">Services: </span>
                    <span className="text-gray-700 text-sm">{industry.services}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Materials: </span>
                    <span className="text-gray-700 text-sm">{industry.materials}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Showcase */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Premium Materials for Professional Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                [Wood Samples]
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Premium Hardwoods</h3>
              <p className="text-gray-700 text-sm">Walnut, cherry, oak, maple for traditional professional settings</p>
            </div>
            <div className="text-center">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                [Metal Samples]
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Brushed Metals</h3>
              <p className="text-gray-700 text-sm">Stainless steel, aluminum, brass for modern office environments</p>
            </div>
            <div className="text-center">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                [Glass Samples]
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Glass & Crystal</h3>
              <p className="text-gray-700 text-sm">Etched glass, crystal awards for executive recognition</p>
            </div>
            <div className="text-center">
              <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                [Acrylic Samples]
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Premium Acrylics</h3>
              <p className="text-gray-700 text-sm">Clear, colored, and textured acrylics for contemporary designs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Our Professional Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Consultation</h3>
              <p className="text-gray-700 text-sm">Discuss your professional image goals and requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Design</h3>
              <p className="text-gray-700 text-sm">Create custom designs that reflect your brand and professionalism</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Material Selection</h3>
              <p className="text-gray-700 text-sm">Choose premium materials that match your office aesthetic</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Precision Engraving</h3>
              <p className="text-gray-700 text-sm">Execute flawless laser engraving with attention to detail</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                5
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Installation Support</h3>
              <p className="text-gray-700 text-sm">Provide installation guidance and mounting hardware</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold mb-4">Enhance Your Professional Image with Custom Laser Engraving</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today to discuss how we can help elevate your professional environment with custom
            laser-engraved signage, awards, and accessories in Hagerstown, Maryland.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-secondary">
              Get Professional Laser Engraving Quote
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
