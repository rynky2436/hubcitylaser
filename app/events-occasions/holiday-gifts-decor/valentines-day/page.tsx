import EventTemplate from "../../../components/EventTemplate"

export default function ValentinesDayPage() {
  return (
    <EventTemplate
      title="Personalized Valentine's Day Gifts | Laser Engraved Love"
      description="Express your love with custom laser-engraved Valentine's Day gifts like personalized frames, drinkware, and romantic decor. Unique and heartfelt presents for your special someone."
      keywords="personalized Valentine's Day gifts, engraved love gifts, custom romantic decor, laser etched frames, unique Valentine's presents, heartfelt gifts"
      image="/images/events-valentines-day.png"
      intro="Celebrate love and affection this Valentine's Day with custom laser-engraved gifts that speak from the heart. Our personalized items are designed to create lasting memories and show your special someone just how much they mean to you."
      sections={[
        {
          heading: "Romantic Engraved Gifts",
          content:
            "Choose a gift that truly expresses your affection, personalized with names, dates, or a special message.",
          examples: [
            {
              name: "Personalized Photo Frames",
              description:
                "Engraved wooden or metal frames to display a cherished photo, customized with names and a romantic date.",
              image: "/images/valentines-day-frame.png",
            },
            {
              name: "Custom Drinkware",
              description:
                "Engraved wine glasses, coffee mugs, or tumblers with a romantic design, initials, or a sweet message.",
              image: "/images/valentines-day-drinkware.png",
            },
            {
              name: "Engraved Love Signs",
              description:
                "Laser-cut wooden or acrylic signs with 'Love', 'Always & Forever', or custom romantic phrases for home decor.",
              image: "/images/valentines-day-love-sign.png",
            },
          ],
        },
        {
          heading: "Unique Valentine's Decor & Keepsakes",
          content: "Set a romantic mood with custom decor or give a keepsake that will be treasured for years.",
          examples: [
            {
              name: "Personalized Candle Holders",
              description:
                "Engraved glass or wooden candle holders, perfect for a romantic dinner or as a decorative accent.",
              image: "/images/valentines-day-candle-holder.png",
            },
            {
              name: "Custom Coasters",
              description:
                "Engraved wooden or slate coasters with a heart design, initials, or a special date, perfect for couples.",
              image: "/images/valentines-day-coaster.png",
            },
            {
              name: "Engraved Keepsake Boxes",
              description:
                "Small wooden boxes personalized with a romantic message, ideal for storing small tokens of affection.",
              image: "/images/valentines-day-gift.png",
            },
          ],
        },
      ]}
      ctaText="Find Your Perfect Valentine's Gift"
      ctaLink="/contact"
    />
  )
}
