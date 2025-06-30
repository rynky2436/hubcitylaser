import EventTemplate from "../../../components/EventTemplate"

export default function MothersFathersDayPage() {
  return (
    <EventTemplate
      title="Personalized Mother's & Father's Day Gifts | Laser Engraving"
      description="Show appreciation with custom laser-engraved gifts for Mother's Day and Father's Day. Personalized cutting boards, photo frames, and unique items for parents."
      keywords="personalized Mother's Day gifts, engraved Father's Day gifts, custom gifts for parents, laser etched cutting boards, unique parent gifts, photo frames for mom dad"
      image="/images/events-mothers-fathers-day.png"
      intro="Celebrate the incredible parents in your life with custom laser-engraved gifts that truly show your appreciation. From heartfelt keepsakes to practical items, our personalized creations make Mother's Day and Father's Day unforgettable."
      sections={[
        {
          heading: "Thoughtful Mother's Day Gifts",
          content: "Surprise Mom with a unique, personalized gift that celebrates her love and dedication.",
          examples: [
            {
              name: "Engraved Cutting Boards",
              description:
                "Custom wooden cutting boards engraved with a family recipe, a special message, or 'Mom's Kitchen'.",
              image: "/images/mothers-day-gift.png",
            },
            {
              name: "Personalized Jewelry Boxes",
              description:
                "Elegant wooden jewelry boxes engraved with her name or a loving message, perfect for her treasures.",
              image: "/images/mothers-day-jewelry-box.png",
            },
            {
              name: "Custom Engraved Vases",
              description:
                "Beautiful glass vases etched with a floral design, a special date, or a message from the heart.",
              image: "/images/mothers-day-vase.png",
            },
          ],
        },
        {
          heading: "Unique Father's Day Gifts",
          content: "Show Dad how much he means to you with a custom-engraved gift tailored to his interests.",
          examples: [
            {
              name: "Personalized Grilling Tools",
              description: "Engraved wooden handles on grilling tools or a custom BBQ sign for the grill master Dad.",
              image: "/images/fathers-day-gift.png",
            },
            {
              name: "Custom Drinkware for Dad",
              description:
                "Engraved beer mugs, whiskey glasses, or tumblers with his name, a funny quote, or a favorite sports team logo.",
              image: "/images/fathers-day-drinkware.png",
            },
            {
              name: "Engraved Photo Frames",
              description:
                "A classic photo frame engraved with 'Best Dad Ever' or a special message, perfect for a family photo.",
              image: "/images/parents-day-frame.png",
            },
          ],
        },
      ]}
      ctaText="Create Your Custom Parent Gifts"
      ctaLink="/contact"
    />
  )
}
