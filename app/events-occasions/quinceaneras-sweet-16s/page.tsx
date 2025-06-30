import EventTemplate from "../../components/EventTemplate"

export default function QuinceanerasSweet16sPage() {
  return (
    <EventTemplate
      title="Custom Quinceañera & Sweet 16 Gifts | Laser Engraved Decor"
      description="Celebrate coming-of-age milestones with personalized laser-engraved party signs, name plaques, custom decor, and keepsake boxes for Quinceañeras and Sweet 16s."
      keywords="quinceanera gifts, sweet 16 gifts, personalized party signs, engraved keepsake boxes, custom quinceanera decor, sweet sixteen favors"
      image="/images/events-quinceaneras.png"
      intro="Quinceañeras and Sweet 16s are cherished traditions, marking a young person's transition into adulthood. Make these coming-of-age celebrations truly special with custom laser-engraved decor, personalized gifts, and unique keepsakes that reflect the honoree's personality and the joy of the occasion."
      sections={[
        {
          heading: "Dazzling Party Decor & Signage",
          content:
            "Create an enchanting atmosphere with custom signs and decor that welcome guests and celebrate the special day.",
          examples: [
            {
              name: "Personalized Welcome Signs",
              description:
                "Elegant wooden or acrylic welcome signs engraved with the honoree's name, event date, and a festive design.",
              image: "/images/quinceanera-sign.png",
            },
            {
              name: "Custom Name Plaques",
              description:
                "Laser-cut or engraved name plaques in various fonts and materials, perfect for a centerpiece or photo booth backdrop.",
              image: "/images/quinceanera-name-plaque.png",
            },
            {
              name: "Themed Table Decor",
              description:
                "Engraved table numbers, place cards, or decorative accents that match the party's theme and color scheme.",
              image: "/images/quinceanera-personalized-decor.png",
            },
          ],
        },
        {
          heading: "Cherished Keepsakes & Gifts",
          content:
            "Provide lasting memories with personalized gifts and favors that guests and the honoree will treasure.",
          examples: [
            {
              name: "Engraved Keepsake Boxes",
              description:
                "Beautiful wooden boxes personalized with the honoree's name, event date, and a special message, ideal for mementos.",
              image: "/images/quinceanera-keepsake-box.png",
            },
            {
              name: "Custom Photo Albums",
              description:
                "Leather or wooden photo albums with engraved covers, perfect for collecting memories from the celebration.",
              image: "/images/quinceanera-photo-album.png",
            },
            {
              name: "Personalized Drinkware Favors",
              description:
                "Engraved tumblers, stemless wine glasses, or shot glasses as unique and memorable party favors for guests.",
              image: "/images/quinceanera-drinkware.png",
            },
          ],
        },
      ]}
      ctaText="Start Designing Your Celebration Items"
      ctaLink="/contact"
    />
  )
}
