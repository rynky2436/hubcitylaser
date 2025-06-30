import type { Metadata } from "next"
import Link from "next/link"
import ServiceCategoryTemplate from "../../components/ServiceCategoryTemplate"

export const metadata: Metadata = {
  title: "Awards & Recognition Laser Engraving | Washington DC, Maryland & Virginia",
  description:
    "Custom laser-engraved awards, trophies & recognition plaques. Serving DC, MD & VA businesses, schools & organizations. Premium materials, fast turnaround. Request a quote today!",
  keywords:
    "awards laser engraving Washington DC, trophy engraving Maryland, corporate plaques Virginia, employee recognition awards Hagerstown, sports trophies Potomac, academic awards Ashburn",
}

const serviceItems = [
  "Achievement plaques laser engraved on premium materials (wood, acrylic, metal) with intricate designs",
  "Employee recognition awards for MD, DC, VA companies, available for batch production",
  "Sports trophies and athletic awards laser cutting with custom shapes and sizes",
  "Academic awards and graduation recognition with personalized details",
  "Corporate milestone recognition laser engraved plaques for high-volume orders",
]

export default function AwardsRecognitionPage() {
  const expertiseContent = (
    <div className="space-y-6">
      <p className="text-lg">
        Engrave Everything brings unmatched expertise to every award and recognition piece we create. Our specialized
        laser engraving techniques allow us to produce awards that stand out with exceptional detail and personalization
        that recipients will treasure for years to come.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Unmatched Detail & Precision</h3>
          <p>
            Our advanced laser systems can engrave photographic-quality images, intricate logos, and fine text on
            virtually any material. This precision allows us to create truly unique awards that capture the significance
            of the achievement being recognized.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Premium Material Selection</h3>
          <p>
            Choose from crystal, glass, hardwoods, metal, acrylic, and more. Each material is carefully selected for its
            quality and appropriateness for the specific recognition purpose, ensuring your awards make the right
            impression.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Volume Capabilities</h3>
          <p>
            Whether you need a single special recognition piece or hundreds of awards for a large corporate program, our
            production facility can handle orders of any size while maintaining consistent quality across every piece.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Design Assistance</h3>
          <p>
            Our in-house design team can help you create awards that perfectly capture your organization's brand and the
            spirit of the achievement being recognized. We offer complimentary design consultations for all award
            projects.
          </p>
        </div>
      </div>
    </div>
  )

  const locationContent = (
    <div className="space-y-4">
      <p className="text-lg">
        Engrave Everything is the trusted awards and recognition partner for organizations throughout Washington DC,
        Maryland, and Northern Virginia. From our Hagerstown facility, we serve clients across the region including:
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <ul className="space-y-2">
          <li className="font-semibold">Washington DC Area</li>
          <li>Federal Agencies</li>
          <li>Associations & Non-Profits</li>
          <li>Corporate Headquarters</li>
          <li>Educational Institutions</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Maryland</li>
          <li>Hagerstown</li>
          <li>Frederick</li>
          <li>Rockville</li>
          <li>Bethesda</li>
          <li>Potomac</li>
          <li>Baltimore Metro Area</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Virginia</li>
          <li>Arlington</li>
          <li>Alexandria</li>
          <li>Fairfax</li>
          <li>Ashburn</li>
          <li>Reston</li>
          <li>Loudoun County</li>
        </ul>
      </div>

      <p className="mt-4">
        Our local presence means we understand the unique needs of organizations in the DMV area. We offer convenient
        consultations, quick turnaround times, and even rush services when you need awards for an upcoming event.
      </p>

      <p className="font-semibold">
        Need awards delivered? We provide delivery services throughout the region for large orders and delicate items.
      </p>
    </div>
  )

  const additionalContent = (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-[#002B5C]">Award & Recognition Applications</h2>

      <div className="mb-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Corporate Recognition Programs</h3>
          <p className="mb-4">
            Boost employee morale and recognize outstanding achievements with custom laser-engraved awards. Our
            corporate recognition pieces are designed to reflect your company's values and the significance of the
            accomplishment.
          </p>
          <p>Popular corporate awards include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Years of service awards</li>
            <li>Sales achievement recognition</li>
            <li>Leadership awards</li>
            <li>Retirement commemoratives</li>
            <li>Safety milestone recognition</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Sports & Athletic Recognition</h3>
          <p className="mb-4">
            Celebrate athletic achievements with custom trophies and awards that capture the spirit of competition and
            excellence. Our laser engraving capabilities allow for detailed team logos, player information, and
            achievement statistics.
          </p>
          <p>Athletic award options include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Tournament trophies</li>
            <li>MVP and performance awards</li>
            <li>Team recognition plaques</li>
            <li>Coach appreciation gifts</li>
            <li>Championship commemoratives</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg bg-gray-50 p-6">
        <h3 className="mb-4 text-xl font-semibold text-[#002B5C]">Educational & Academic Awards</h3>
        <p className="mb-4">
          Recognize scholastic achievement, graduation milestones, and educational excellence with custom laser-engraved
          awards. We work with schools, universities, and educational organizations throughout the DMV area to create
          meaningful recognition pieces.
        </p>
        <p>
          Learn more about our{" "}
          <Link href="/services" className="font-medium text-[#002B5C] underline">
            complete awards catalog
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-medium text-[#002B5C] underline">
            contact us
          </Link>{" "}
          to discuss your specific recognition program needs.
        </p>
      </div>
    </div>
  )

  return (
    <ServiceCategoryTemplate
      title="Recognition & Awards Laser Engraving"
      description="Celebrate achievements and milestones with custom laser-engraved awards and recognition plaques. We craft high-quality pieces that honor success and inspire excellence."
      heroImage="/images/technology.png"
      imageAlt="Custom laser engraved awards and trophies for Washington DC, Maryland and Virginia organizations"
      serviceItems={serviceItems}
      ctaText="Get Awards & Plaques Quote"
      ctaLink="/contact"
      secondaryCtaText="View All Services"
      secondaryCtaLink="/services"
      expertiseContent={expertiseContent}
      locationContent={locationContent}
      additionalContent={additionalContent}
    />
  )
}
