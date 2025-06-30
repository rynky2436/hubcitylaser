import EventTemplate from "../../components/EventTemplate"

export default function GraduationsPage() {
  return (
    <EventTemplate
      title="Custom Graduation Gifts & Awards | Celebrate Academic Achievements"
      description="Commemorate academic success with custom laser-engraved graduation trophies, awards, photo plaques, and personalized gifts. Perfect for students, schools, and universities."
      keywords="custom graduation gifts, engraved graduation awards, personalized diploma frames, class gifts, graduation trophies, academic achievement awards"
      image="/images/events-graduations.png"
      intro="Graduation is a monumental achievement, marking the culmination of hard work and dedication. Celebrate this significant milestone with custom laser-engraved gifts and awards that truly honor the graduate's journey and inspire their future endeavors."
      sections={[
        {
          heading: "Distinguished Graduation Awards",
          content:
            "Recognize academic excellence and outstanding achievements with custom awards that will be cherished for a lifetime.",
          examples: [
            {
              name: "Engraved Graduation Trophies",
              description:
                "Custom trophies in acrylic, crystal, or metal, personalized with the graduate's name, year, and school emblem.",
              image: "/images/graduation-trophy.png",
            },
            {
              name: "Personalized Photo Plaques",
              description:
                "Wooden or acrylic plaques engraved with a graduation photo, name, and a congratulatory message.",
              image: "/images/graduation-photo-plaque.png",
            },
            {
              name: "Engraved Diploma Frames",
              description:
                "High-quality frames with custom-engraved matting to proudly display diplomas and graduation photos.",
              image: "/images/graduation-diploma-frame.png",
            },
          ],
        },
        {
          heading: "Thoughtful Graduation Gifts",
          content:
            "Give a personalized gift that celebrates their success and helps them transition into their next chapter.",
          examples: [
            {
              name: "Custom Class Gifts",
              description:
                "Engraved items for the entire graduating class, such as keychains, pens, or small keepsakes with the class year.",
              image: "/images/graduation-class-gift.png",
            },
            {
              name: "Personalized Desk Accessories",
              description:
                "Engraved pen holders, business card holders, or paperweights, perfect for a new professional or college student.",
              image: "/images/graduation-desk-accessories.png",
            },
            {
              name: "Engraved Drinkware",
              description:
                "Custom tumblers, coffee mugs, or water bottles with the graduate's name, school logo, or a motivational quote.",
              image: "/images/graduation-drinkware.png",
            },
          ],
        },
      ]}
      ctaText="Design Your Graduation Gifts & Awards"
      ctaLink="/contact"
    />
  )
}
