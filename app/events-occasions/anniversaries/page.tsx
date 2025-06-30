import EventTemplate from "../../components/EventTemplate"

export default function AnniversariesPage() {
  return (
    <EventTemplate
      title="Personalized Anniversary Gifts | Engraved Keepsakes for Milestones"
      description="Commemorate your special day with custom laser-engraved anniversary gifts like personalized drinkware, photo frames, and keepsake boxes. Perfect for milestone celebrations."
      keywords="personalized anniversary gifts, engraved anniversary gifts, milestone anniversary, custom anniversary keepsakes, laser etched glassware, anniversary photo frames"
      image="/images/events-anniversaries.png"
      intro="Anniversaries are a beautiful testament to enduring love and commitment. Celebrate these precious milestones, from the first year to the golden 50th, with custom laser-engraved gifts that capture your unique journey and create lasting memories."
      sections={[
        {
          heading: "Timeless Engraved Gifts",
          content:
            "Mark your special date with elegant, personalized items that reflect the depth of your bond and the years you've shared.",
          examples: [
            {
              name: "Personalized Drinkware Sets",
              description:
                "Engraved wine glasses, champagne flutes, or whiskey decanters with your names, anniversary date, or a special message.",
              image: "/images/anniversary-drinkware.png",
            },
            {
              name: "Custom Photo Frames",
              description:
                "Wooden or metal photo frames engraved with your names, anniversary year, and a heartfelt quote, perfect for a cherished memory.",
              image: "/images/anniversary-photo-frame.png",
            },
            {
              name: "Engraved Keepsake Boxes",
              description:
                "Beautiful wooden boxes personalized with your anniversary details, ideal for storing mementos from your journey together.",
              image: "/images/anniversary-keepsake-box.png",
            },
          ],
        },
        {
          heading: "Milestone Celebration Items",
          content:
            "For those significant anniversaries, choose a gift that truly stands out and symbolizes your enduring love.",
          examples: [
            {
              name: "Etched Crystal Vases",
              description:
                "Elegant crystal vases engraved with a special design or message, perfect for a 25th or 50th anniversary.",
              image: "/images/anniversary-crystal-vase.png",
            },
            {
              name: "Personalized Wall Art",
              description:
                "Custom-engraved wooden or acrylic wall art featuring your wedding vows, a significant date, or a unique design.",
              image: "/images/anniversary-wall-art.png",
            },
            {
              name: "Engraved Cutting Boards",
              description:
                "High-quality cutting boards personalized with your names and anniversary date, a functional and beautiful keepsake.",
              image: "/images/anniversary-cutting-board.png",
            },
          ],
        },
      ]}
      ctaText="Personalize Your Anniversary Gift"
      ctaLink="/contact"
    />
  )
}
