import EventTemplate from "../../../components/EventTemplate"

export default function ThanksgivingPage() {
  return (
    <EventTemplate
      title="Personalized Thanksgiving Decor & Gifts | Laser Engraving"
      description="Enhance your Thanksgiving celebration with custom laser-engraved cutting boards, festive decor, and unique host gifts. Perfect for family gatherings and expressing gratitude."
      keywords="personalized Thanksgiving decor, engraved cutting boards, custom host gifts, Thanksgiving table decor, laser etched serving ware, gratitude gifts"
      image="/images/events-thanksgiving.png"
      intro="Thanksgiving is a time for gratitude, family, and delicious food. Add a personal touch to your holiday feast and show appreciation to your hosts with custom laser-engraved decor and gifts that celebrate togetherness and abundance."
      sections={[
        {
          heading: "Festive Thanksgiving Decor",
          content:
            "Set a warm and inviting atmosphere for your Thanksgiving gathering with custom-engraved decorations.",
          examples: [
            {
              name: "Engraved Serving Boards",
              description:
                "Custom wooden cutting boards or charcuterie boards engraved with 'Gather', 'Give Thanks', or a family name, perfect for serving.",
              image: "/images/thanksgiving-cutting-board.png",
            },
            {
              name: "Personalized Table Decor",
              description:
                "Laser-cut wooden place cards, napkin rings, or centerpieces with autumn motifs or guest names.",
              image: "/images/thanksgiving-decor.png",
            },
            {
              name: "Custom Coasters",
              description:
                "Engraved wooden or slate coasters with fall designs or 'Happy Thanksgiving' messages for your guests.",
              image: "/images/thanksgiving-coaster.png",
            },
          ],
        },
        {
          heading: "Thoughtful Host Gifts",
          content: "Show your appreciation to your Thanksgiving host with a unique, personalized gift they'll cherish.",
          examples: [
            {
              name: "Engraved Host Gifts",
              description:
                "Custom-engraved wine bottles, bottle openers, or small wooden signs as a thank-you for their hospitality.",
              image: "/images/thanksgiving-host-gift.png",
            },
            {
              name: "Personalized Pie Dishes",
              description:
                "Glass pie dishes etched with a family name or a special message, perfect for holiday baking.",
              image: "/images/thanksgiving-pie-dish.png",
            },
            {
              name: "Custom Photo Frames",
              description:
                "Engraved photo frames to display a cherished family photo from the gathering, personalized with the date.",
              image: "/images/thanksgiving-photo-frame.png",
            },
          ],
        },
      ]}
      ctaText="Create Your Custom Thanksgiving Items"
      ctaLink="/contact"
    />
  )
}
