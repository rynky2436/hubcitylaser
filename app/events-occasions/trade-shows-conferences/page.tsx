import EventTemplate from "../../components/EventTemplate"

export default function TradeShowsConferencesPage() {
  return (
    <EventTemplate
      title="Trade Show & Conference Engraving | Branded Displays & Giveaways"
      description="Maximize your impact at trade shows and conferences with custom laser-engraved booth signage, promotional products, and branded giveaways. Enhance visibility and leave a lasting impression."
      keywords="trade show displays, engraved promotional products, conference giveaways, branded booth signage, custom business card holders, laser cut logos"
      image="/images/events-trade-shows.png"
      intro="In the competitive world of trade shows and conferences, making a strong first impression is key. Hub City Laser helps your brand stand out with custom laser-engraved displays, promotional products, and giveaways that capture attention and reinforce your professional image."
      sections={[
        {
          heading: "Eye-Catching Booth Displays",
          content:
            "Attract more visitors to your booth with professional and unique signage that highlights your brand and offerings.",
          examples: [
            {
              name: "Custom Booth Signage",
              description:
                "Laser-cut acrylic or wooden signs with your company logo and tagline, designed to fit your booth aesthetic.",
              image: "/images/trade-show-booth-sign.png",
            },
            {
              name: "Engraved Product Displays",
              description:
                "Custom stands and displays for your products, engraved with descriptions or branding to enhance presentation.",
              image: "/images/trade-show-product-display.png",
            },
            {
              name: "Directional & Informational Signs",
              description:
                "Engraved signs to guide attendees, highlight key features, or provide important information at your exhibit.",
              image: "/images/trade-show-directional-sign.png",
            },
          ],
        },
        {
          heading: "Memorable Promotional Giveaways",
          content:
            "Leave a lasting impression with high-quality, branded items that attendees will keep and use, extending your brand's reach.",
          examples: [
            {
              name: "Personalized Giveaways",
              description:
                "Engraved items like metal keychains, bottle openers, or phone stands with your company logo and contact info.",
              image: "/images/trade-show-giveaway.png",
            },
            {
              name: "Branded Promotional Products",
              description:
                "Custom-engraved coasters, luggage tags, or small tech accessories that serve as useful reminders of your brand.",
              image: "/images/trade-show-promotional-product.png",
            },
            {
              name: "Engraved Notebooks & Pens",
              description:
                "High-quality notebooks and pens with your company logo, perfect for attendees to take notes during sessions.",
              image: "/images/trade-show-notebook-pen.png",
            },
          ],
        },
      ]}
      ctaText="Boost Your Trade Show Presence"
      ctaLink="/contact"
    />
  )
}
