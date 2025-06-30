import type { Metadata } from "next"
import Link from "next/link"
import ServiceCategoryTemplate from "../../components/ServiceCategoryTemplate"

export const metadata: Metadata = {
  title: "Business Signage Laser Engraving | DC, MD & VA",
  description:
    "Premium laser-engraved business signs & nameplates in DC, MD & VA. Fast turnaround, expert precision for professional results. Get a quote today!",
  keywords:
    "business signage laser engraving, custom office signs Washington DC, nameplate engraving Maryland, directional signage Virginia, wayfinding displays Hagerstown, corporate signage Potomac",
}

const serviceItems = [
  "Custom business signs laser engraved on wood, metal, glass with high-resolution logo integration",
  "Office door signs and professional nameplates with various finishes (matte, polished)",
  "Directional signage and wayfinding displays for large commercial properties",
  "Safety and compliance signs for Maryland businesses, meeting industry standards",
  "Wayfinding displays laser cut for commercial properties, including large format options",
]

export default function BusinessSignagePage() {
  const expertiseContent = (
    <div className="space-y-6">
      <p className="text-lg">
        At Engrave Everything, we specialize in creating premium business signage solutions that elevate your brand's
        professional image. Our state-of-the-art laser engraving technology allows us to produce signage with unmatched
        precision and detail that traditional methods simply cannot achieve.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Precision Laser Technology</h3>
          <p>
            Our advanced laser systems can engrave on virtually any material with microscopic precision, creating crisp,
            clear text and intricate logos that maintain their quality even at small sizes—perfect for office nameplates
            and directional signage.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Custom Design Services</h3>
          <p>
            Work with our experienced design team to create signage that perfectly matches your brand guidelines. We can
            work from your existing designs or help develop new concepts that enhance your corporate identity.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Premium Materials</h3>
          <p>
            Choose from a wide selection of high-quality materials including solid wood, brushed metal, acrylic, glass,
            and more. Each material is carefully selected for durability and aesthetic appeal in professional
            environments.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Quick Turnaround</h3>
          <p>
            We understand that business needs are often time-sensitive. Our efficient production process allows us to
            deliver most standard signage orders within 5-7 business days, with rush options available when you need it
            even faster.
          </p>
        </div>
      </div>
    </div>
  )

  const locationContent = (
    <div className="space-y-4">
      <p className="text-lg">
        Engrave Everything is proud to be the premier provider of laser-engraved business signage throughout the
        Washington DC metropolitan area, Maryland, and Northern Virginia. Our centrally located facility in Hagerstown
        allows us to provide quick service to businesses in:
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <ul className="space-y-2">
          <li className="font-semibold">Washington DC</li>
          <li>Georgetown</li>
          <li>Dupont Circle</li>
          <li>Capitol Hill</li>
          <li>Downtown Business District</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Maryland</li>
          <li>Hagerstown</li>
          <li>Frederick</li>
          <li>Rockville</li>
          <li>Bethesda</li>
          <li>Potomac</li>
          <li>Silver Spring</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Virginia</li>
          <li>Arlington</li>
          <li>Alexandria</li>
          <li>Fairfax</li>
          <li>Ashburn</li>
          <li>Tysons Corner</li>
          <li>Reston</li>
        </ul>
      </div>

      <p className="mt-4">
        Whether you're a small business in downtown Hagerstown or a large corporation in Washington DC, we deliver the
        same exceptional quality and service. Our local presence means we understand the unique business environment of
        the DMV area and can provide personalized recommendations for your signage needs.
      </p>

      <p className="font-semibold">
        Need installation services? We offer professional installation for larger signage projects throughout the
        region.
      </p>
    </div>
  )

  const additionalContent = (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-[#002B5C]">Business Signage Applications</h2>

      <div className="mb-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Corporate Office Environments</h3>
          <p className="mb-4">
            Create a cohesive and professional look throughout your office with custom laser-engraved signage. From
            reception area logos to conference room nameplates, our signage solutions help establish your brand identity
            while providing essential wayfinding for employees and visitors.
          </p>
          <p>Popular options include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Reception desk logos and signage</li>
            <li>Office door nameplates with interchangeable inserts</li>
            <li>Conference room identification</li>
            <li>Directional signage systems</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Retail & Commercial Spaces</h3>
          <p className="mb-4">
            Enhance customer experience and reinforce your brand with custom retail signage. Our laser engraving
            capabilities allow for intricate designs and consistent branding across all customer touchpoints.
          </p>
          <p>Retail applications include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Store entrance signage</li>
            <li>Department identifiers</li>
            <li>Product display information</li>
            <li>ADA-compliant accessibility signage</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg bg-gray-50 p-6">
        <h3 className="mb-4 text-xl font-semibold text-[#002B5C]">ADA-Compliant Signage</h3>
        <p className="mb-4">
          Ensure your business meets accessibility requirements with our ADA-compliant signage solutions. We create
          tactile signs with raised text and braille that meet all federal regulations while maintaining your brand's
          aesthetic.
        </p>
        <p>
          Learn more about our{" "}
          <Link href="/services" className="font-medium text-[#002B5C] underline">
            compliance signage options
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-medium text-[#002B5C] underline">
            contact us
          </Link>{" "}
          to discuss your specific ADA signage needs.
        </p>
      </div>
    </div>
  )

  return (
    <ServiceCategoryTemplate
      title="Custom Business Signage Solutions"
      description="Elevate your brand with precision laser-engraved business signs, nameplates, and wayfinding solutions. We create professional signage that reflects your corporate image and guides your clients effectively."
      heroImage="/images/professional.png"
      imageAlt="Custom laser engraved business signage and office nameplates for Washington DC and Maryland businesses"
      serviceItems={serviceItems}
      ctaText="Get Business Signage Quote"
      ctaLink="/contact"
      secondaryCtaText="View All Services"
      secondaryCtaLink="/services"
      expertiseContent={expertiseContent}
      locationContent={locationContent}
      additionalContent={additionalContent}
    />
  )
}
