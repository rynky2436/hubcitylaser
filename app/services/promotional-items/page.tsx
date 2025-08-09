import type { Metadata } from "next"
import ServiceCategoryTemplate from "../../components/ServiceCategoryTemplate"

export const metadata: Metadata = {
  title: "Promotional Items Laser Engraving | DC, MD & VA",
  description:
    "Custom laser-engraved promotional products & marketing materials in DC, MD & VA. High-quality, personalized items that make an impact. Book a consultation today.",
  keywords:
    "promotional items laser engraving Washington DC, branded merchandise Maryland, marketing materials Virginia, trade show displays, corporate gifts, branded products",
}

export default function PromotionalItemsPage() {
  return (
    <ServiceCategoryTemplate
      title="Promotional Items & Marketing Materials"
      description="Boost your brand visibility with custom laser-engraved promotional items and marketing materials. From branded merchandise to trade show displays, we help you make a lasting impression."
      keywords={(metadata.keywords as string) || ""}
      heroDescription="Boost your brand visibility with custom laser-engraved promotional items and marketing materials. From branded merchandise to trade show displays, we help you make a lasting impression."
      backgroundImage="/images/events-trade-shows.png"
      overviewTitle="Promotional Items - Engrave Everything's Expertise"
      overviewParagraph1="In today's competitive market, effective promotional items are key to enhancing brand visibility and leaving a lasting impression. Engrave Everything specializes in creating custom laser-engraved promotional products and marketing materials that elevate your brand."
      overviewParagraph2="Our precision laser technology ensures your logo and message are perfectly reproduced on a wide array of materials, from corporate gifts to trade show giveaways. We help you craft high-quality, memorable items that resonate with your audience and reinforce your brand's value."
      overviewImage="/images/promotional-items-overview.png"
      overviewImageAlt="Laser-engraved promotional items at a trade show booth including tumblers, pens, and notebooks"
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
          alt: "Laser engraved trade show giveaway items on display",
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
          alt: "Assortment of branded merchandise with laser engraving",
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
          alt: "Laser cut marketing display with engraved signage",
        },
      ]}
      ctaTitle="Ready to Boost Your Brand with Custom Promotional Items?"
      ctaDescription="Contact Engrave Everything today for a personalized consultation and quote on your promotional item and marketing material needs. Let us help you make a lasting impression."
      ctaButtonText="Book Consultation"
      ctaLink="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
      secondaryCtaText="View All Services"
      secondaryCtaLink="/services"
    />
  )
}
