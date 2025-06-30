import EventTemplate from "../../components/EventTemplate"

export default function WeddingsPage() {
  return (
    <EventTemplate
      title="Custom Wedding Signs & Gifts | Laser Engraving for Your Special Day"
      description="Elevate your wedding with custom laser-engraved welcome signs, seating charts, unique gifts, and elegant decor. Personalized touches for an unforgettable celebration."
      keywords="custom wedding signs, engraved wedding gifts, laser cut wedding decor, personalized wedding favors, wedding keepsakes, Hagerstown MD wedding engraving"
      image="/images/events-weddings.png"
      intro="Make your wedding day truly unforgettable with custom laser-engraved signs, gifts, and decor. From the moment your guests arrive to the cherished keepsakes they take home, our precision engraving adds a unique and personal touch to every detail of your celebration."
      sections={[
        {
          heading: "Elegant Wedding Signage",
          content:
            "Welcome your guests and guide them through your celebration with beautifully crafted laser-engraved signs. Our custom designs add a sophisticated touch to your wedding aesthetic.",
          examples: [
            {
              name: "Personalized Welcome Signs",
              description:
                "Greet your guests with a custom-engraved wooden or acrylic welcome sign featuring your names and wedding date.",
              image: "/images/wedding-welcome-sign.png",
            },
            {
              name: "Laser Cut Seating Charts",
              description:
                "Guide your guests to their seats with an elegant, laser-cut seating chart that doubles as a beautiful piece of decor.",
              image: "/images/wedding-seating-chart.png",
            },
            {
              name: "Custom Bar & Menu Signs",
              description:
                "Enhance your reception with engraved signs for your bar, dessert table, or custom menu displays.",
              image: "/images/wedding-bar-menu-sign.png",
            },
          ],
        },
        {
          heading: "Unique Wedding Gifts & Favors",
          content:
            "Show your appreciation to your wedding party and guests with personalized gifts that serve as lasting mementos of your special day.",
          examples: [
            {
              name: "Engraved Wedding Party Gifts",
              description:
                "Custom-engraved flasks, cutting boards, or picture frames for bridesmaids, groomsmen, and parents.",
              image: "/images/engraved-wedding-flasks.png",
            },
            {
              name: "Personalized Cake Toppers",
              description:
                "Add a unique touch to your wedding cake with a custom laser-cut cake topper featuring your initials or a special message.",
              image: "/images/wedding-cake-topper.png",
            },
            {
              name: "Custom Wedding Favors",
              description:
                "Small, personalized items like engraved coasters, bottle openers, or keychains as memorable favors for your guests.",
              image: "/images/wedding-favors.png",
            },
          ],
        },
      ]}
      ctaText="Start Designing Your Wedding Engravings"
      ctaLink="/contact"
    />
  )
}
