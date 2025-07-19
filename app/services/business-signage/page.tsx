import ServiceCategoryTemplate from "@/app/components/ServiceCategoryTemplate"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Business Signage & Displays | Hub City Laser",
  description:
    "Custom laser-engraved business signs, displays, and promotional items for businesses in Washington DC, Maryland, and Northern Virginia. Enhance your brand with professional signage.",
  keywords:
    "business signage, custom signs, laser engraved signs, office signs, retail displays, promotional items, corporate branding, Washington DC, Maryland, Northern Virginia",
}

export default function BusinessSignagePage() {
  return (
    <ServiceCategoryTemplate
      title="Business Signage & Displays"
      description="Elevate your brand presence with custom laser-engraved business signage and displays from Hub City Laser. We create professional, durable, and eye-catching solutions tailored to your business needs."
      keywords={metadata.keywords as string}
      heroDescription="Make a lasting impression with custom business signage and displays."
      backgroundImage="/images/retail-traditional-signage.png"
      overviewTitle="Business Signage - Engrave Everything's Expertise"
      overviewParagraph1="In the competitive business landscape, effective signage is crucial for brand recognition and customer engagement. Hub City Laser specializes in crafting high-quality, custom laser-engraved signs and displays that reflect your brand's professionalism and unique identity."
      overviewParagraph2="From elegant lobby signs to informative directional signage and captivating retail displays, our precision laser technology ensures every detail is perfect. We work with a variety of materials to match your aesthetic and functional requirements."
      overviewImage="/images/retail-traditional-signage.png"
      overviewImageAlt="Custom laser-engraved business sign in a modern office lobby"
      overviewFeature1Title="Custom Design"
      overviewFeature1Description="Tailored designs to perfectly match your brand's aesthetic and messaging."
      overviewFeature2Title="Durable Materials"
      overviewFeature2Description="High-quality materials ensure longevity and a premium look for your signage."
      detailedServicesTitle="Specific Applications for Business Signage"
      detailedServices={[
        {
          title: "Lobby & Reception Signs",
          description:
            "Create a professional first impression with custom laser-engraved lobby and reception signs featuring your company logo and branding.",
          applications: [
            "Company logos on acrylic, wood, or metal",
            "Dimensional lettering",
            "Backlit signs",
            "Welcome signs",
          ],
          image: "/images/professional-executive-office.png",
          alt: "Laser engraved company logo sign in a reception area",
        },
        {
          title: "Directional & Wayfinding Signs",
          description:
            "Guide your clients and visitors with clear, elegant directional and wayfinding signage for offices, clinics, and commercial spaces.",
          applications: ["Room number plaques", "Restroom signs", "Exit signs", "Floor directories"],
          image: "/images/industrial-safety-labeling.png",
          alt: "Laser engraved directional sign in an office hallway",
        },
        {
          title: "Retail & Product Displays",
          description:
            "Showcase your products effectively with custom laser-cut and engraved retail displays, stands, and point-of-sale materials.",
          applications: [
            "Acrylic product risers",
            "Wooden display stands",
            "Engraved price tags",
            "Promotional signage",
          ],
          image: "/images/retail-acrylic-displays.png",
          alt: "Laser cut acrylic retail product display",
        },
        {
          title: "Compliance & Safety Labels",
          description:
            "Ensure your business meets regulatory requirements with durable, precise laser-engraved compliance and safety labels for equipment and facilities.",
          applications: ["Equipment tags", "Warning labels", "Asset tags", "Serial number plates"],
          image: "/images/industrial-compliance-marking.png",
          alt: "Laser engraved compliance label on industrial equipment",
        },
        {
          title: "Promotional & Event Signage",
          description:
            "Attract attention at events, trade shows, and promotions with custom laser-engraved promotional signs and branded items.",
          applications: ["Trade show booth signs", "Event welcome signs", "Branded giveaways", "Tabletop displays"],
          image: "/images/trade-show-booth-sign.png",
          alt: "Laser engraved promotional sign for a trade show booth",
        },
      ]}
      ctaTitle="Ready to Enhance Your Business with Custom Signage?"
      ctaDescription="Contact Hub City Laser today for a personalized consultation and quote on your business signage and display needs. Let us help you make a lasting impression."
      ctaButtonText="Schedule a Consultation"
      ctaLink="https://calendly.com/ryan-mangan/custom-laser-engraving-consultation"
      secondaryCtaText="View All Services"
      secondaryCtaLink="/services"
    />
  )
}
