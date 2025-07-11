import type { Metadata } from "next"
import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"

const locationData = {
  locationName: "Great Falls, VA",
  locationLandmark: "Great Falls Park",
  zipCodes: ["22066"],
  nearbyLocations: [
    { name: "McLean, VA", href: "/locations/mclean-va" },
    { name: "Reston, VA", href: "/locations/reston-va" },
    { name: "Sterling, VA", href: "/locations/sterling-va" },
  ],
  image: "/images/great-falls-va-scenic.png",
  title: "Hub City Laser Engraving — Laser Engraving Great Falls VA",
  description:
    "Hub City Laser Engraving delivers custom laser engraving in Great Falls VA—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Great Falls VA, custom laser signs Great Falls, awards Great Falls, personalized gifts Great Falls, Great Falls laser cutting",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function GreatFallsVAPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
