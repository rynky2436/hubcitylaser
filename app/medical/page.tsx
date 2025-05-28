import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Medical Device Laser Engraving Hagerstown MD | FDA Compliance Labels & Equipment Tags",
  description:
    "Professional medical laser engraving services in Hagerstown Maryland. Medical equipment tags, FDA compliance labels, hospital signage, device marking. Serving MD, DE, VA medical facilities with precision laser engraving on metal, plastic, glass.",
  keywords:
    "medical laser engraving Hagerstown MD, medical device marking Maryland, hospital equipment tags, FDA compliance labels, medical facility signage MD DE VA, surgical instrument engraving, medical nameplate laser cutting",
}

export default function MedicalPage() {
  const detailedServices = [
    {
      title: "Medical Equipment Identification & Asset Tags",
      description:
        "Precision laser engraving for medical equipment identification, asset tracking, and inventory management in Maryland hospitals and clinics.",
      applications: [
        "Hospital equipment asset tags with barcodes and serial numbers",
        "Medical device identification plates laser engraved on stainless steel",
        "Surgical instrument marking for sterilization tracking",
        "Laboratory equipment labels resistant to chemicals and cleaning",
        "Patient monitoring device nameplates and control panels",
        "Diagnostic equipment identification for maintenance scheduling",
      ],
    },
    {
      title: "FDA Compliance & Regulatory Marking",
      description:
        "FDA-compliant laser marking solutions for medical device manufacturers and healthcare facilities throughout MD, DE, VA.",
      applications: [
        "FDA UDI (Unique Device Identification) laser marking on medical devices",
        "Lot number and expiration date marking on medical products",
        "CE marking and regulatory symbols laser engraved on devices",
        "Biocompatible marking solutions for implantable devices",
        "Traceability marking for medical device supply chain compliance",
        "Quality control markings for medical manufacturing",
      ],
    },
    {
      title: "Hospital & Medical Facility Signage",
      description:
        "Professional healthcare signage solutions laser engraved for durability and easy cleaning in medical environments.",
      applications: [
        "Patient room signs and door identification plates",
        "Department wayfinding and directional signage",
        "Biohazard and safety warning signs laser cut on durable materials",
        "Operating room and procedure area identification signs",
        "Medical staff name badges and identification plates",
        "Emergency exit and safety compliance signage",
      ],
    },
    {
      title: "Sterilization-Resistant Marking Solutions",
      description:
        "Specialized laser marking that withstands autoclave sterilization and harsh medical cleaning protocols.",
      applications: [
        "Autoclave-resistant instrument marking for surgical tools",
        "Chemical-resistant labels for laboratory equipment",
        "High-temperature marking for sterilization equipment",
        "Antimicrobial surface marking for infection control",
        "Cleanroom-compatible identification solutions",
        "Gamma sterilization resistant marking for disposable devices",
      ],
    },
  ]

  const materials = [
    {
      material: "Stainless Steel",
      applications: "Surgical instruments, medical equipment housings, nameplates",
      benefits: "Corrosion resistant, autoclave safe, permanent marking",
    },
    {
      material: "Medical Grade Plastics",
      applications: "Device housings, disposable equipment, identification tags",
      benefits: "Biocompatible, chemical resistant, lightweight",
    },
    {
      material: "Titanium",
      applications: "Implantable devices, surgical instruments, precision components",
      benefits: "Biocompatible, lightweight, corrosion resistant",
    },
    {
      material: "Anodized Aluminum",
      applications: "Medical equipment panels, control surfaces, nameplates",
      benefits: "Lightweight, durable, easy to clean",
    },
  ]

  const benefits = [
    {
      title: "FDA Compliance Expertise",
      description:
        "Our laser marking solutions meet FDA requirements for medical device identification and traceability.",
    },
    {
      title: "Sterilization Compatibility",
      description: "Markings withstand autoclave, gamma, and chemical sterilization processes without degradation.",
    },
    {
      title: "Biocompatible Materials",
      description: "We use only medical-grade materials approved for healthcare applications and patient contact.",
    },
    {
      title: "Precision & Accuracy",
      description: "Microscopic precision ensures clear, readable markings on the smallest medical components.",
    },
    {
      title: "Fast Turnaround",
      description: "Quick processing for urgent medical device marking needs in Maryland, Delaware, Virginia.",
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control ensures every marking meets medical industry standards.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Medical Device Laser Engraving Hagerstown Maryland</h1>
          <p className="text-xl text-blue-100 max-w-4xl">
            Professional medical laser engraving and marking services in Hagerstown, MD. Specializing in FDA-compliant
            medical device marking, hospital equipment identification, and healthcare facility signage for Maryland,
            Delaware, and Virginia medical institutions. Precision laser engraving on medical-grade materials with
            sterilization-resistant solutions.
          </p>
        </div>
      </section>

      {/* Overview Section with Image */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-hub-blue mb-6">
                Precision Medical Laser Engraving Services Maryland
              </h2>
              <p className="text-gray-700 mb-6">
                Hub City Laser understands the critical importance of accuracy, compliance, and reliability in medical
                environments. Located in Hagerstown, Maryland, we provide specialized laser engraving services for
                medical device manufacturers, hospitals, clinics, and healthcare facilities throughout the tri-state
                area.
              </p>
              <p className="text-gray-700 mb-6">
                Our medical laser marking solutions meet stringent FDA requirements and industry standards, ensuring
                your medical devices and equipment are properly identified, traceable, and compliant with healthcare
                regulations.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">FDA Compliant</h4>
                  <p className="text-gray-600">UDI marking and regulatory compliance</p>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <h4 className="font-semibold text-hub-blue mb-2">Sterilization Safe</h4>
                  <p className="text-gray-600">Autoclave and chemical resistant</p>
                </div>
              </div>
            </div>
            <div>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/images/medical.png"
                  alt="Medical equipment laser engraving and compliance labels Hagerstown MD"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Medical equipment tags, compliance labels, and facility signage laser engraved in Hagerstown MD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Comprehensive Medical Laser Engraving Services
          </h2>
          <div className="space-y-12">
            {detailedServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold text-hub-blue mb-4">{service.title}</h3>
                    <p className="text-gray-700">{service.description}</p>
                    {/* Placeholder for additional service images */}
                    <div className="mt-4 aspect-video bg-gray-200 rounded flex items-center justify-center text-gray-500">
                      [Service Image Placeholder - {service.title}]
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-gray-900 mb-4">Specific Applications:</h4>
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

      {/* Materials & Specifications */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Medical-Grade Materials & Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-hub-blue mb-3">{material.material}</h3>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium text-gray-900">Applications: </span>
                    <span className="text-gray-700">{material.applications}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Benefits: </span>
                    <span className="text-gray-700">{material.benefits}</span>
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
            Why Choose Hub City Laser for Medical Device Marking?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-hub-blue mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">Our Medical Laser Engraving Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Consultation & Requirements</h3>
              <p className="text-gray-700 text-sm">
                Review medical device specifications, compliance requirements, and marking standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Material Selection</h3>
              <p className="text-gray-700 text-sm">
                Choose appropriate medical-grade materials and marking parameters for your application
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Precision Laser Marking</h3>
              <p className="text-gray-700 text-sm">
                Execute precise laser engraving with quality control and compliance verification
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-hub-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold text-hub-blue mb-2">Quality Assurance</h3>
              <p className="text-gray-700 text-sm">
                Final inspection and documentation to ensure FDA compliance and quality standards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="section-padding bg-hub-blue text-white">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              Serving Medical Facilities Throughout Maryland, Delaware, Virginia
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Hub City Laser provides medical laser engraving services to hospitals, clinics, medical device
              manufacturers, and healthcare facilities throughout the tri-state area from our Hagerstown, Maryland
              location.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Maryland Medical Facilities</h3>
              <ul className="text-blue-100 space-y-1 text-sm">
                <li>Johns Hopkins Hospital System</li>
                <li>University of Maryland Medical Centers</li>
                <li>MedStar Health Network</li>
                <li>Frederick Memorial Hospital</li>
                <li>Washington County Hospital</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Delaware Healthcare</h3>
              <ul className="text-blue-100 space-y-1 text-sm">
                <li>ChristianaCare Health System</li>
                <li>Bayhealth Medical Centers</li>
                <li>Nemours Children's Health</li>
                <li>Delaware medical device manufacturers</li>
                <li>Outpatient clinics and practices</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Virginia Medical Centers</h3>
              <ul className="text-blue-100 space-y-1 text-sm">
                <li>Inova Health System</li>
                <li>Winchester Medical Center</li>
                <li>Northern Virginia hospitals</li>
                <li>Medical device companies</li>
                <li>Specialty medical practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue text-center mb-12">
            Frequently Asked Questions - Medical Laser Engraving
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-hub-blue mb-2">Is your laser marking FDA compliant?</h3>
                <p className="text-gray-700 text-sm">
                  Yes, our laser marking processes and materials meet FDA requirements for medical device
                  identification, including UDI marking standards.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-hub-blue mb-2">Can markings withstand sterilization?</h3>
                <p className="text-gray-700 text-sm">
                  Our markings are designed to withstand autoclave sterilization, gamma sterilization, and chemical
                  cleaning protocols used in medical facilities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-hub-blue mb-2">
                  What materials can you mark for medical applications?
                </h3>
                <p className="text-gray-700 text-sm">
                  We work with medical-grade stainless steel, titanium, medical plastics, and other biocompatible
                  materials approved for healthcare use.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-hub-blue mb-2">How small can medical device markings be?</h3>
                <p className="text-gray-700 text-sm">
                  Our precision laser systems can create markings as small as 0.1mm, perfect for micro medical devices
                  and surgical instruments.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-hub-blue mb-2">Do you provide documentation for compliance?</h3>
                <p className="text-gray-700 text-sm">
                  Yes, we provide complete documentation including material certificates, process parameters, and
                  quality control records for regulatory compliance.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-hub-blue mb-2">What's the turnaround time for medical marking?</h3>
                <p className="text-gray-700 text-sm">
                  Standard turnaround is 3-5 business days, with rush services available for urgent medical device
                  marking needs in MD, DE, VA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-hub-blue mb-4">
            Ready for FDA-Compliant Medical Device Laser Marking?
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
            Contact Hub City Laser today to discuss your medical laser engraving needs. Our experts will help ensure
            your medical devices meet all regulatory requirements while maintaining the highest quality standards.
          </p>
          <div className="space-x-4">
            <Link href="/contact" className="btn-primary">
              Get Medical Laser Marking Quote
            </Link>
            <Link href="/services" className="btn-secondary">
              View All Medical Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
