import EventTemplate from "../../components/EventTemplate"

export default function ReligiousCeremoniesPage() {
  return (
    <EventTemplate
      title="Personalized Gifts for Religious Ceremonies | Laser Engraving"
      description="Create meaningful keepsakes for baptisms, confirmations, bar/bat mitzvahs, and other religious ceremonies with custom laser-engraved items and decor."
      keywords="religious ceremony gifts, engraved baptism gifts, bar mitzvah keepsakes, confirmation gifts, personalized faith items, laser engraved crosses"
      image="/images/events-religious.png"
      intro="Religious ceremonies are sacred moments of faith, tradition, and community. Hub City Laser offers custom laser-engraved items that add a deeply personal and spiritual touch to baptisms, confirmations, bar/bat mitzvahs, communions, and other significant religious events, creating cherished keepsakes for families."
      sections={[
        {
          heading: "Sacred Keepsakes & Gifts",
          content:
            "Commemorate spiritual milestones with beautifully crafted, personalized items that reflect faith and devotion.",
          examples: [
            {
              name: "Engraved Keepsake Boxes",
              description:
                "Wooden boxes personalized with names, dates, and religious symbols, perfect for storing cherished mementos.",
              image: "/images/religious-keepsake-box.png",
            },
            {
              name: "Personalized Baptism Gifts",
              description:
                "Engraved crosses, plaques, or photo frames with the child's name and baptism date, a lasting symbol of faith.",
              image: "/images/religious-baptism-gift.png",
            },
            {
              name: "Confirmation & Bar/Bat Mitzvah Plaques",
              description:
                "Custom plaques in wood or acrylic, engraved with the individual's name, date, and a meaningful scripture or message.",
              image: "/images/religious-confirmation-plaque.png",
            },
          ],
        },
        {
          heading: "Custom Ceremony Decor & Favors",
          content:
            "Enhance the ambiance of your religious celebration with custom decor and thoughtful favors for guests.",
          examples: [
            {
              name: "Engraved Altar & Venue Decor",
              description:
                "Laser-cut wooden or acrylic signs with religious verses, names, or symbols for ceremony decoration.",
              image: "/images/religious-altar-decor.png",
            },
            {
              name: "Personalized Candle Holders",
              description:
                "Engraved glass or wooden candle holders, perfect for unity ceremonies or as decorative accents.",
              image: "/images/religious-candle-holder.png",
            },
            {
              name: "Custom Guest Books",
              description:
                "Wooden or leather-bound guest books with engraved covers, allowing guests to leave messages for the honoree.",
              image: "/images/religious-guest-book.png",
            },
          ],
        },
      ]}
      ctaText="Personalize Your Religious Ceremony Items"
      ctaLink="/contact"
    />
  )
}
