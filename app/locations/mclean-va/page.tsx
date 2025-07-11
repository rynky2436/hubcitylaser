import type { Metadata } from "next"
import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"

const locationData = {
  locationName: "McLean, VA",
  locationLandmark: "McLean Central Park",
  zipCodes: ["22101", "22102"],
  nearbyLocations: [
    { name: "Great Falls, VA", href: "/locations/great-falls-va" },
    { name: "Tysons Corner, VA", href: "/locations/tysons-corner-va" },
    { name: "Falls Church, VA", href: "/locations/falls-church-va" },
  ],
  image: "/images/mclean-va-scenic.png",
  title: "Hub City Laser Engraving — Laser Engraving McLean VA",
  description:
    "Hub City Laser Engraving delivers custom laser engraving in McLean VA—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving McLean VA, custom laser signs McLean, awards McLean, personalized gifts McLean, McLean laser cutting",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function McLeanVAPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
