import EventTemplate from "../../../components/EventTemplate"

export default function ChristmasPage() {
  return (
    <EventTemplate
      title="Personalized Christmas Gifts & Decor | Laser Engraving"
      description="Create unique laser-engraved Christmas ornaments, festive decor, and personalized gifts for the holiday season. Add a special touch to your celebrations."
      keywords="personalized Christmas ornaments, engraved Christmas gifts, custom holiday decor, laser cut Christmas signs, festive engraving, unique Christmas presents"
      image="/images/events-christmas.png"
      intro="The most wonderful time of the year calls for truly special touches. Our custom laser-engraved Christmas gifts and decor add warmth, personalization, and lasting memories to your holiday celebrations, making every moment shine."
      sections={[
        {
          heading: "Unique Christmas Decor",
          content:
            "Adorn your home with custom-engraved decorations that capture the spirit of the season and become cherished family heirlooms.",
          examples: [
            {
              name: "Personalized Ornaments",
              description:
                "Wooden, acrylic, or metal ornaments engraved with family names, year, or special messages, perfect for the tree.",
              image: "/images/christmas-ornament.png",
            },
            {
              name: "Engraved Holiday Signs",
              description:
                "Custom wooden signs with festive greetings, family names, or holiday motifs for your mantel or entryway.",
              image: "/images/christmas-decor.png",
            },
            {
              name: "Custom Holiday Signs",
              description:
                "Laser-cut and engraved signs featuring holiday phrases, family names, or festive designs for indoor or outdoor display.",
              image: "/images/christmas-holiday-sign.png",
            },
          ],
        },
        {
          heading: "Thoughtful Christmas Gifts",
          content: "Give the gift of personalization with unique, laser-engraved presents that show how much you care.",
          examples: [
            {
              name: "Engraved Cutting Boards",
              description:
                "High-quality wooden cutting boards engraved with festive designs, family names, or holiday recipes, perfect for the kitchen.",
              image: "/images/christmas-cutting-board.png",
            },
            {
              name: "Personalized Drinkware",
              description:
                "Custom-engraved tumblers, mugs, or wine glasses with holiday themes or recipient's name, ideal for cozy evenings.",
              image: "/images/christmas-drinkware.png",
            },
            {
              name: "Custom Photo Frames",
              description:
                "Engraved photo frames to display cherished holiday memories, personalized with names and the year.",
              image: "/images/christmas-photo-frame.png",
            },
          ],
        },
      ]}
      ctaText="Create Your Custom Christmas Items"
      ctaLink="/contact"
    />
  )
}
