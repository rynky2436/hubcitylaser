import EventTemplate from "../../components/EventTemplate"

export default function SchoolSportsEventsPage() {
  return (
    <EventTemplate
      title="School & Sports Event Engraving | Trophies, Awards & Gifts"
      description="Celebrate academic and athletic achievements with custom laser-engraved trophies, medals, plaques, and coach gifts for schools and sports teams. Perfect for end-of-year ceremonies and recognition."
      keywords="school awards, sports trophies, engraved medals, coach gifts, team recognition plaques, academic awards, school event signage, personalized sports gifts"
      image="/images/events-school-sports.png"
      intro="From academic triumphs to athletic victories, school and sports events are filled with moments of pride and achievement. Hub City Laser provides custom laser-engraved awards, trophies, and personalized gifts that celebrate hard work, teamwork, and dedication, fostering community spirit."
      sections={[
        {
          heading: "Academic & Athletic Recognition",
          content:
            "Honor students and athletes with custom awards that commemorate their hard-earned success and inspire future endeavors.",
          examples: [
            {
              name: "Engraved Academic Plaques",
              description:
                "Wooden or acrylic plaques personalized for honor roll, perfect attendance, or special academic achievements.",
              image: "/images/school-award-plaque.png",
            },
            {
              name: "Teacher & Staff Appreciation Gifts",
              description:
                "Custom-engraved items like desk organizers, pens, or plaques to thank educators and school staff for their dedication.",
              image: "/images/teacher-appreciation-gift.png",
            },
            {
              name: "School Event Signage",
              description:
                "Laser-cut and engraved signs for school events, graduations, or directional signs around campus.",
              image: "/images/school-event-signage.png",
            },
          ],
        },
        {
          heading: "Team & Coach Appreciation",
          content:
            "Recognize the efforts of sports teams and their coaches with custom trophies, medals, and personalized gifts.",
          examples: [
            {
              name: "Custom Sports Trophies & Medals",
              description:
                "Engraved trophies and medals for championships, MVP awards, or participation, personalized with team names and year.",
              image: "/images/sports-trophy.png",
            },
            {
              name: "Personalized Coach Gifts",
              description:
                "Engraved clipboards, whistles, or plaques with team rosters and a thank-you message for dedicated coaches.",
              image: "/images/coach-gift.png",
            },
            {
              name: "Team Recognition Plaques",
              description:
                "Large wooden or acrylic plaques engraved with team photos, rosters, and season highlights for display.",
              image: "/images/team-recognition-plaque.png",
            },
          ],
        },
      ]}
      ctaText="Design Your School & Sports Awards"
      ctaLink="/contact"
    />
  )
}
