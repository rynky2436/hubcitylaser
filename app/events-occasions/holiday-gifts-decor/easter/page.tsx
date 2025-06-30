import EventTemplate from "../../../components/EventTemplate"

export default function EasterPage() {
  return (
    <EventTemplate
      title="Personalized Easter Gifts & Decor | Laser Engraving"
      description="Celebrate spring with custom laser-engraved Easter basket tags, festive decor, and unique gifts. Perfect for family gatherings and spring celebrations."
      keywords="personalized Easter gifts, engraved Easter decor, custom Easter basket tags, laser cut spring signs, unique Easter presents, religious Easter gifts"
      image="/images/events-easter.png"
      intro="Embrace the joy of spring and new beginnings with custom laser-engraved Easter gifts and decor. Our personalized items add a charming and unique touch to your family gatherings, egg hunts, and spring celebrations, creating lasting memories."
      sections={[
        {
          heading: "Charming Easter Decor",
          content: "Adorn your home with custom-engraved decorations that capture the essence of Easter and spring.",
          examples: [
            {
              name: "Personalized Easter Basket Tags",
              description:
                "Wooden or acrylic tags engraved with names, perfect for customizing Easter baskets for kids and adults.",
              image: "/images/easter-basket-tag.png",
            },
            {
              name: "Engraved Spring Signs",
              description:
                "Custom wooden signs with 'Happy Easter', 'He Is Risen', or spring-themed designs for home display.",
              image: "/images/easter-decor.png",
            },
            {
              name: "Custom Holiday Signs",
              description:
                "Laser-cut and engraved signs featuring Easter bunnies, eggs, or spring flowers for festive home decoration.",
              image: "/images/easter-holiday-sign.png",
            },
          ],
        },
        {
          heading: "Unique Easter Gifts",
          content: "Give a personalized gift that celebrates the spirit of Easter and brings joy to your loved ones.",
          examples: [
            {
              name: "Engraved Keepsake Boxes",
              description:
                "Small wooden boxes personalized with names or Easter designs, ideal for storing small treats or mementos.",
              image: "/images/easter-gift.png",
            },
            {
              name: "Personalized Drinkware",
              description: "Custom-engraved tumblers or mugs with Easter themes, perfect for spring beverages.",
              image: "/images/easter-drinkware.png",
            },
            {
              name: "Custom Photo Frames",
              description:
                "Engraved photo frames to display cherished family photos from Easter gatherings, personalized with the date.",
              image: "/images/easter-photo-frame.png",
            },
          ],
        },
      ]}
      ctaText="Create Your Custom Easter Items"
      ctaLink="/contact"
    />
  )
}
