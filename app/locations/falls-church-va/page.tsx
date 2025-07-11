import type { Metadata } from "next"
import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"

const locationData = {
  locationName: "Falls Church, VA",
  locationLandmark: "Eden Center",
  zipCodes: ["22040", "22041", "22042", "22043", "22044", "22046"],
  nearbyLocations: [
    { name: "Arlington, VA", href: "/locations/arlington-va" },
    { name: "Annandale, VA", href: "/locations/annandale-va" },
    { name: "Vienna, VA", href: "/locations/vienna-va" },
  ],
  image: "/images/falls-church-va-scenic.png",
  title: "Hub City Laser Engraving — Laser Engraving Falls Church VA",
  description:
    "Hub City Laser Engraving delivers custom laser engraving in Falls Church VA—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Falls Church VA, custom laser signs Falls Church, awards Falls Church, personalized gifts Falls Church, Falls Church laser cutting",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function FallsChurchVAPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
