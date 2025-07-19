import type { Metadata } from "next"
import Link from "next/link"
import ServiceCategoryTemplate from "../../components/ServiceCategoryTemplate"

export const metadata: Metadata = {
  title: "Industrial ID & Labels Laser Engraving | DC, MD & VA",
  description:
    "Durable laser-engraved industrial ID, equipment tags & compliance labels in DC, MD & VA. Permanent marking for harsh environments. Get a quote!",
  keywords:
    "industrial identification laser engraving Washington DC, equipment tags Maryland, serial number marking Virginia, compliance labels Hagerstown, asset identification Potomac, manufacturing labels Ashburn",
}

export default function IndustrialIdentificationPage() {
  const serviceItems = [
    "Equipment nameplates laser engraved on metal and plastic for extreme durability",
    "Asset identification tags for industrial applications with precise serial numbering",
    "Serial number laser engraving for manufacturers, ensuring traceability and compliance",
    "Compliance labels and safety marking, resistant to chemicals and abrasion",
    "Inventory management tags laser cut for durability and seamless integration into existing systems",
  ]

  const expertiseContent = (
    <div className="space-y-6">
      <p className="text-lg">
        Engrave Everything specializes in industrial identification solutions that withstand the toughest environments.
        Our laser engraving technology creates permanent markings that remain legible even in harsh conditions, ensuring
        your critical identification and compliance needs are met with precision and durability.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Permanent Marking Solutions</h3>
          <p>
            Our industrial laser engraving creates permanent, non-removable markings that won't fade, chip, or wear
            away—even in harsh manufacturing environments exposed to chemicals, abrasion, heat, or outdoor conditions.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Material Versatility</h3>
          <p>
            We can laser engrave on virtually any industrial material including stainless steel, aluminum, brass,
            anodized metals, industrial plastics, ceramics, and specialized composite materials designed for extreme
            conditions.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Compliance Expertise</h3>
          <p>
            Our team understands industrial compliance requirements across multiple industries. We ensure your
            identification labels meet OSHA, UL, CSA, ISO, and other regulatory standards with precise, permanent
            markings.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Serialization & Tracking</h3>
          <p>
            Our advanced systems can handle sequential numbering, QR codes, barcodes, and other tracking elements with
            100% accuracy—essential for inventory management and product traceability requirements.
          </p>
        </div>
      </div>
    </div>
  )

  const locationContent = (
    <div className="space-y-4">
      <p className="text-lg">
        Engrave Everything provides industrial identification and labeling solutions to manufacturers and industrial
        facilities throughout the Washington DC, Maryland, and Northern Virginia region. From our Hagerstown facility,
        we serve industrial clients in:
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <ul className="space-y-2">
          <li className="font-semibold">Washington DC Area</li>
          <li>Federal Contractors</li>
          <li>Defense Industry</li>
          <li>Research Facilities</li>
          <li>Manufacturing Plants</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Maryland</li>
          <li>Hagerstown Industrial Park</li>
          <li>Frederick Manufacturing</li>
          <li>Baltimore Industrial Area</li>
          <li>Rockville Tech Corridor</li>
          <li>Western Maryland Industries</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Virginia</li>
          <li>Northern Virginia Tech Corridor</li>
          <li>Ashburn Data Centers</li>
          <li>Dulles Technology Park</li>
          <li>Fairfax Manufacturing</li>
          <li>Loudoun County Industries</li>
        </ul>
      </div>

      <p className="mt-4">
        Our central location allows us to provide quick turnaround times for industrial clients throughout the region.
        We understand the time-sensitive nature of manufacturing and can provide rush services when needed to prevent
        production delays.
      </p>

      <p className="font-semibold">
        On-site services available: For large-scale industrial projects, we can bring our portable laser equipment to
        your facility for on-site marking of installed equipment or large components.
      </p>
    </div>
  )

  const additionalContent = (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-[#002B5C]">Industrial Identification Applications</h2>

      <div className="mb-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Equipment & Asset Identification</h3>
          <p className="mb-4">
            Permanently identify and track valuable equipment with durable laser-engraved tags and nameplates. Our
            industrial marking solutions ensure your assets remain properly identified throughout their lifecycle.
          </p>
          <p>Common applications include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Machine nameplates with model and serial information</li>
            <li>Asset tracking tags with barcodes or QR codes</li>
            <li>Equipment specification plates</li>
            <li>Ownership identification</li>
            <li>Calibration and maintenance tracking</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Safety & Compliance Marking</h3>
          <p className="mb-4">
            Meet regulatory requirements with permanent safety labels and compliance markings. Our laser-engraved safety
            identifiers remain legible even in harsh industrial environments.
          </p>
          <p>Safety marking solutions include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>OSHA-compliant warning labels</li>
            <li>Electrical panel identification</li>
            <li>Lockout/tagout information</li>
            <li>Hazardous material identification</li>
            <li>Emergency procedure information</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg bg-gray-50 p-6">
        <h3 className="mb-4 text-xl font-semibold text-[#002B5C]">Component & Part Marking</h3>
        <p className="mb-4">
          Ensure traceability and authenticity with direct part marking on components. Our precision laser systems can
          mark even the smallest parts with serial numbers, lot codes, and other tracking information without damaging
          the material.
        </p>
        <p>
          Learn more about our{" "}
          <Link href="/services" className="font-medium text-[#002B5C] underline">
            industrial marking capabilities
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-medium text-[#002B5C] underline">
            contact us
          </Link>{" "}
          to discuss your specific industrial identification requirements.
        </p>
      </div>
    </div>
  )

  return (
    <ServiceCategoryTemplate
      title="Industrial Identification & Labels"
      description="Ensure traceability and safety with robust industrial identification and labels. Our laser-engraved solutions withstand harsh environments and meet stringent compliance standards."
      keywords={metadata.keywords as string}
      heroDescription="Ensure traceability and safety with robust industrial identification and labels. Our laser-engraved solutions withstand harsh environments and meet stringent compliance standards."
      backgroundImage="/images/industrial.png"
      overviewTitle="Industrial Identification - Engrave Everything's Expertise"
      overviewParagraph1="In industrial environments, clear, durable, and compliant identification is paramount for safety, efficiency, and regulatory adherence. Engrave Everything specializes in providing robust laser-engraved solutions for industrial identification and labeling that withstand the toughest conditions."
      overviewParagraph2="Our precision laser technology creates permanent markings on a wide range of industrial materials, ensuring legibility and durability even when exposed to chemicals, extreme temperatures, or abrasion. From equipment nameplates to safety labels, we deliver solutions that meet your stringent requirements."
      overviewImage="/images/industrial-equipment-tracking.png"
      overviewImageAlt="Laser engraved industrial equipment tag"
      overviewFeature1Title="Extreme Durability"
      overviewFeature1Description="Markings that withstand harsh industrial environments, chemicals, and abrasion."
      overviewFeature2Title="Compliance Focused"
      overviewFeature2Description="Solutions designed to meet industry-specific regulatory and safety standards."
      detailedServicesTitle="Specific Applications for Industrial Identification"
      detailedServices={[
        {
          title: "Equipment Nameplates & Tags",
          description:
            "Permanently identify and track valuable machinery and assets with durable laser-engraved nameplates and tags.",
          applications: [
            "Machine model and serial number plates",
            "Asset tracking tags with barcodes/QR codes",
            "Equipment specification plates",
            "Ownership identification",
            "Calibration and maintenance tracking",
          ],
          image: "/images/industrial-part-numbering.png",
          alt: "Laser engraved industrial nameplate",
        },
        {
          title: "Safety & Warning Labels",
          description:
            "Ensure workplace safety and regulatory compliance with permanent laser-engraved safety and warning labels.",
          applications: [
            "OSHA-compliant warning labels",
            "Electrical panel identification",
            "Lockout/tagout information",
            "Hazardous material identification",
            "Emergency procedure information",
          ],
          image: "/images/industrial-safety-components.png",
          alt: "Laser engraved safety warning label",
        },
        {
          title: "Control Panel & Switch Plates",
          description: "Create clear and durable labels for control panels, switchboards, and electrical components.",
          applications: [
            "Engraved switch plates",
            "Control panel overlays",
            "Circuit breaker labels",
            "Push-button legends",
            "Custom industrial signage",
          ],
          image: "/images/industrial-control-panels.png",
          alt: "Laser engraved control panel label",
        },
        {
          title: "Component & Part Marking",
          description:
            "Ensure traceability and authenticity with direct part marking on components, even the smallest ones.",
          applications: [
            "Serial number marking",
            "Lot code engraving",
            "Date code marking",
            "Brand logos on parts",
            "UID (Unique Identification) marking",
          ],
          image: "/images/industrial-precision-components.png",
          alt: "Laser marked small industrial component",
        },
      ]}
      ctaTitle="Need Durable Industrial Identification?"
      ctaDescription="Contact Hub City Laser today for a personalized consultation and quote on your industrial labeling and identification needs. We ensure precision and longevity."
      ctaButtonText="Schedule a Consultation"
      ctaLink="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
      secondaryCtaText="View All Services"
      secondaryCtaLink="/services"
    />
  )
}
