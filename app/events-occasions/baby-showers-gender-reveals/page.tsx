import EventTemplate from "../../components/EventTemplate"

export default function BabyShowersGenderRevealsPage() {
  return (
    <EventTemplate
      title="Personalized Baby Shower & Gender Reveal Gifts | Laser Engraving"
      description="Celebrate new arrivals with custom laser-engraved baby shower signs, name blocks, and keepsake gifts. Unique and personalized items for a memorable celebration."
      keywords="personalized baby shower gifts, engraved baby name blocks, gender reveal signs, custom baby keepsakes, laser cut baby decor, unique baby gifts"
      image="/images/events-baby-gender.png"
      intro="Welcome the newest member of the family with unique and heartfelt laser-engraved gifts and decor. Our custom items add a special touch to baby showers and gender reveal parties, creating cherished memories and beautiful keepsakes for parents-to-be."
      sections={[
        {
          heading: "Charming Event Signage",
          content:
            "Set the perfect tone for your baby shower or gender reveal with custom-designed signs that announce the joyous occasion.",
          examples: [
            {
              name: "Gender Reveal Announcement Signs",
              description:
                "Engraved wooden or acrylic signs revealing 'It's a Boy!' or 'It's a Girl!' for a dramatic reveal moment.",
              image: "/images/gender-reveal-sign.png",
            },
            {
              name: "Baby Shower Welcome Signs",
              description:
                "Personalized welcome signs for the baby shower, featuring the baby's name or a sweet message.",
              image: "/images/baby-shower-welcome-sign.png",
            },
            {
              name: "Themed Centerpiece Decor",
              description: "Laser-cut wooden or acrylic centerpieces and table decor matching your baby shower theme.",
              image: "/images/baby-shower-centerpiece.png",
            },
          ],
        },
        {
          heading: "Unique Baby Keepsakes & Gifts",
          content:
            "Give a gift that will be treasured for years to come, celebrating the new arrival with a personal touch.",
          examples: [
            {
              name: "Engraved Baby Name Blocks",
              description:
                "Custom wooden blocks engraved with the baby's name, birth date, weight, and length – a perfect nursery decor item.",
              image: "/images/baby-name-block.png",
            },
            {
              name: "Personalized Keepsake Boxes",
              description:
                "Wooden keepsake boxes engraved with the baby's name and birth details, ideal for storing first memories.",
              image: "/images/baby-keepsake-gift.png",
            },
            {
              name: "Engraved Photo Frames",
              description:
                "Custom photo frames etched with the baby's name and birth information, perfect for their first picture.",
              image: "/images/baby-photo-frame.png",
            },
          ],
        },
      ]}
      ctaText="Create Your Custom Baby Gifts"
      ctaLink="/contact"
    />
  )
}
