import type { Metadata } from "next"
import Link from "next/link"
import ServiceCategoryTemplate from "../../components/ServiceCategoryTemplate"

export const metadata: Metadata = {
  title: "Promotional Items Laser Engraving | DC, MD & VA",
  description:
    "Custom laser-engraved promotional products & marketing materials in DC, MD & VA. High-quality, personalized items that make an impact. Get a quote!",
  keywords:
    "promotional items laser engraving Washington DC, branded merchandise Maryland, marketing materials Virginia, trade show displays Hagerstown, corporate gifts Potomac, branded products Ashburn",
}

export default function PromotionalItemsPage() {
  const serviceItems = [
    "Branded merchandise laser engraved with company logos for consistent brand representation",
    "Trade show materials and promotional displays, designed for impact and reusability",
    "Marketing displays laser cut on various materials, including custom shapes and sizes",
    "Customer gifts and corporate promotional products, available for bulk orders",
    "Branded items laser engraved for Maryland businesses, supporting large-scale campaigns",
  ]

  const expertiseContent = (
    <div className="space-y-6">
      <p className="text-lg">
        Engrave Everything transforms ordinary promotional items into extraordinary brand ambassadors through our
        precision laser engraving services. We help businesses throughout the DMV area create memorable marketing
        materials that make a lasting impression and drive brand recognition.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Brand Consistency</h3>
          <p>
            Our laser engraving ensures your logo and branding elements are reproduced with perfect consistency across
            all promotional items, maintaining your brand standards with exceptional precision on every piece.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Premium Perception</h3>
          <p>
            Laser engraving creates a permanent, high-end finish that elevates the perceived value of promotional items.
            Recipients can feel the difference between laser engraving and standard printing methods, associating that
            quality with your brand.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Versatile Applications</h3>
          <p>
            From metal pens and wooden coasters to acrylic displays and leather portfolios, our laser technology can
            personalize virtually any material, giving you endless options for creative promotional campaigns.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Volume Capabilities</h3>
          <p>
            Whether you need 10 executive gifts or 1,000 conference giveaways, our production facility can handle
            promotional orders of any size while maintaining consistent quality across every item.
          </p>
        </div>
      </div>
    </div>
  )

  const locationContent = (
    <div className="space-y-4">
      <p className="text-lg">
        Engrave Everything provides custom promotional items and marketing materials to businesses and organizations
        throughout Washington DC, Maryland, and Northern Virginia. From our Hagerstown facility, we serve clients across
        the region including:
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <ul className="space-y-2">
          <li className="font-semibold">Washington DC Area</li>
          <li>Corporate Marketing Teams</li>
          <li>Associations & Non-Profits</li>
          <li>Event Planning Companies</li>
          <li>Government Contractors</li>
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
        Our local presence means we understand the business culture and marketing needs of the DMV area. We offer
        convenient consultations, quick turnaround times, and even rush services for time-sensitive marketing campaigns
        and events.
      </p>

      <p className="font-semibold">
        Need promotional items for an upcoming event? We offer rush services and delivery throughout the region to meet
        your deadline.
      </p>
    </div>
  )

  const additionalContent = (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-[#002B5C]">Promotional Item Applications</h2>

      <div className="mb-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Corporate Gifting & Client Appreciation</h3>
          <p className="mb-4">
            Make a lasting impression with premium laser-engraved gifts for clients, partners, and employees. Our custom
            promotional items help strengthen business relationships and express appreciation in a memorable way.
          </p>
          <p>Popular corporate gifts include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Executive pen sets</li>
            <li>Custom drinkware (tumblers, mugs, glassware)</li>
            <li>Leather portfolios and journals</li>
            <li>Wooden desk accessories</li>
            <li>Tech accessories with your logo</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Trade Show & Event Marketing</h3>
          <p className="mb-4">
            Stand out at industry events with custom laser-engraved promotional items and displays. Our trade show
            materials help attract attention to your booth and provide memorable takeaways for potential clients.
          </p>
          <p>Event marketing solutions include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Custom booth signage and displays</li>
            <li>Branded giveaways and swag</li>
            <li>Interactive display elements</li>
            <li>Product demonstration aids</li>
            <li>Business card holders and lead collection tools</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg bg-gray-50 p-6">
        <h3 className="mb-4 text-xl font-semibold text-[#002B5C]">Employee Recognition & Corporate Culture</h3>
        <p className="mb-4">
          Strengthen your company culture with custom promotional items for internal use. From onboarding welcome kits
          to employee appreciation gifts, our laser-engraved items help reinforce your values and build team spirit.
        </p>
        <p>
          Learn more about our{" "}
          <Link href="/services" className="font-medium text-[#002B5C] underline">
            complete promotional catalog
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-medium text-[#002B5C] underline">
            contact us
          </Link>{" "}
          to discuss your specific marketing needs.
        </p>
      </div>
    </div>
  )

  return (
    <ServiceCategoryTemplate
      title="Promotional Items & Marketing Materials"
      description="Boost your brand visibility with custom laser-engraved promotional items and marketing materials. From branded merchandise to trade show displays, we help you make a lasting impression."
      keywords={metadata.keywords as string}
      heroDescription="Boost your brand visibility with custom laser-engraved promotional items and marketing materials. From branded merchandise to trade show displays, we help you make a lasting impression."
      backgroundImage="/images/events-trade-shows.png"
      overviewTitle="Promotional Items - Engrave Everything's Expertise"
      overviewParagraph1="In today's competitive market, effective promotional items are key to enhancing brand visibility and leaving a lasting impression. Engrave Everything specializes in creating custom laser-engraved promotional products and marketing materials that elevate your brand."
      overviewParagraph2="Our precision laser technology ensures your logo and message are perfectly reproduced on a wide array of materials, from corporate gifts to trade show giveaways. We help you craft high-quality, memorable items that resonate with your audience and reinforce your brand's value."
      overviewImage="/images/trade-show-promotional-product.png"
      overviewImageAlt="Laser engraved promotional product for a trade show"
      overviewFeature1Title="Brand Enhancement"
      overviewFeature1Description="Elevate your brand's image with premium, custom-engraved promotional items."
      overviewFeature2Title="Versatile Options"
      overviewFeature2Description="Wide range of materials and products to suit any marketing campaign or event."
      detailedServicesTitle="Specific Applications for Promotional Items"
      detailedServices={[
        {
          title: "Corporate Gifts & Client Appreciation",
          description:
            "Make a lasting impression with premium laser-engraved gifts for clients, partners, and employees.",
          applications: [
            "Executive pen sets",
            "Custom drinkware (tumblers, mugs, glassware)",
            "Leather portfolios and journals",
            "Wooden desk accessories",
            "Tech accessories with your logo",
          ],
          image: "/images/corporate-executive-gift.png",
          alt: "Laser engraved corporate executive gift",
        },
        {
          title: "Trade Show & Event Giveaways",
          description: "Stand out at industry events with custom laser-engraved promotional items and displays.",
          applications: [
            "Custom booth signage and displays",
            "Branded giveaways and swag",
            "Interactive display elements",
            "Product demonstration aids",
            "Business card holders and lead collection tools",
          ],
          image: "/images/trade-show-giveaway.png",
          alt: "Laser engraved trade show giveaway",
        },
        {
          title: "Branded Merchandise",
          description:
            "Reinforce your brand identity with high-quality, custom-engraved merchandise for internal use or resale.",
          applications: [
            "Branded water bottles and coffee mugs",
            "Custom keychains",
            "Engraved notebooks and pens",
            "Apparel with engraved patches",
            "Custom awards and plaques for internal recognition",
          ],
          image: "/images/corporate-branded-gift.png",
          alt: "Laser engraved branded merchandise",
        },
        {
          title: "Marketing Displays & Signage",
          description:
            "Attract attention and convey your message effectively with custom laser-cut and engraved marketing displays.",
          applications: [
            "Point-of-sale displays",
            "Retail product stands",
            "Informational plaques",
            "Custom menu boards",
            "Promotional signs for events",
          ],
          image: "/images/retail-premium-displays.png",
          alt: "Laser cut marketing display",
        },
      ]}
      ctaTitle="Ready to Boost Your Brand with Custom Promotional Items?"
      ctaDescription="Contact Hub City Laser today for a personalized consultation and quote on your promotional item and marketing material needs. Let us help you make a lasting impression."
      ctaButtonText="Schedule a Consultation"
      ctaLink="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
      secondaryCtaText="View All Services"
      secondaryCtaLink="/services"
    />
  )
}
