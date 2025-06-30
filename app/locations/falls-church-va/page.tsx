import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving Falls Church VA",
  description:
    "Engrave Everything delivers custom laser engraving in Falls Church VA—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Falls Church VA, custom laser signs Falls Church, awards Falls Church, personalized gifts Falls Church, Falls Church laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving Falls Church VA",
    description:
      "Engrave Everything delivers custom laser engraving in Falls Church VA—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving Falls Church VA",
    description:
      "Engrave Everything delivers custom laser engraving in Falls Church VA—signs, awards, gifts. Request your quote today!",
  },
}

export default function FallsChurchVAPage() {
  const locationData = {
    locationName: "Falls Church, VA",
    locationLandmark: "Eden Center",
    zipCodes: ["22040", "22041", "22042", "22043", "22044", "22046"],
    nearbyLocations: [
      { name: "Arlington, VA", href: "/locations/arlington-va" }, // Assuming Arlington page
      { name: "Annandale, VA", href: "/locations/annandale-va" }, // Assuming Annandale page
      { name: "Vienna, VA", href: "/locations/vienna-va" },
    ],
    image: "/laser-engraving-falls-church-va.png",
  }

  return (
    <LocationTemplate
      title={metadata.title as string}
      description={metadata.description as string}
      keywords={metadata.keywords as string}
      {...locationData}
    />
  )
}
