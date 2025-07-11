import type { Metadata } from "next"
import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"

const locationData = {
  locationName: "Tysons Corner, VA",
  locationLandmark: "Tysons Galleria",
  zipCodes: ["22102", "22182"],
  nearbyLocations: [
    { name: "McLean, VA", href: "/locations/mclean-va" },
    { name: "Vienna, VA", href: "/locations/vienna-va" },
    { name: "Reston, VA", href: "/locations/reston-va" },
  ],
  image: "/images/tysons-corner-va-scenic.png",
  title: "Hub City Laser Engraving — Laser Engraving Tysons Corner VA",
  description:
    "Hub City Laser Engraving delivers custom laser engraving in Tysons Corner VA—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Tysons Corner VA, custom laser signs Tysons Corner, awards Tysons Corner, personalized gifts Tysons Corner, Tysons Corner laser cutting",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function TysonsCornerVAPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
