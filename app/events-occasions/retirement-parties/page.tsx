import EventTemplate from "../../components/EventTemplate"

export default function RetirementPartiesPage() {
  return (
    <EventTemplate
      title="Engraved Retirement Gifts & Awards | Honor Years of Service"
      description="Celebrate a career milestone with custom laser-engraved retirement plaques, awards, and personalized gifts. Perfect for honoring dedication and making the event meaningful."
      keywords="engraved retirement gifts, retirement plaques, custom retirement awards, personalized retirement party favors, desk nameplates, corporate retirement gifts"
      image="/images/events-retirement.png"
      intro="A retirement marks the culmination of years of hard work, dedication, and invaluable contributions. At Hub City Laser, we specialize in creating custom laser-engraved items that truly honor this significant milestone, making the retirement party a memorable and meaningful celebration."
      sections={[
        {
          heading: "Distinguished Retirement Awards",
          content:
            "Recognize a lifetime of achievement with elegant, custom-engraved awards and plaques. Our designs reflect the professionalism and impact of the retiree's career.",
          examples: [
            {
              name: "Engraved Recognition Plaques",
              description:
                "High-quality wooden or acrylic plaques engraved with years of service, achievements, and a heartfelt message.",
              image: "/images/engraved-retirement-plaque.png",
            },
            {
              name: "Crystal & Glass Awards",
              description:
                "Sophisticated crystal or glass awards etched with company logos, names, and dates, perfect for a lasting tribute.",
              image: "/images/retirement-celebration-gift.png",
            },
            {
              name: "Perpetual Plaques",
              description:
                "Multi-plate plaques to commemorate ongoing achievements or a series of retirees within an organization.",
              image: "/images/retirement-perpetual-plaque.png",
            },
          ],
        },
        {
          heading: "Personalized Retirement Gifts",
          content:
            "Offer a unique and personal gift that the retiree will cherish, reflecting their passions and the new chapter ahead.",
          examples: [
            {
              name: "Custom Desk Nameplates",
              description:
                "Elegant desk nameplates in wood, metal, or acrylic, personalized with their name and a special retirement message.",
              image: "/images/retirement-desk-nameplate.png",
            },
            {
              name: "Engraved Drinkware",
              description:
                "Personalized tumblers, wine glasses, or decanters engraved with their name, retirement date, or a custom design.",
              image: "/images/retirement-drinkware.png",
            },
            {
              name: "Custom Cutting Boards",
              description:
                "High-quality wooden cutting boards engraved with a family name, a special recipe, or a retirement message, ideal for home chefs.",
              image: "/images/retirement-cutting-board.png",
            },
          ],
        },
      ]}
      ctaText="Design Your Retirement Tribute"
      ctaLink="/contact"
    />
  )
}
