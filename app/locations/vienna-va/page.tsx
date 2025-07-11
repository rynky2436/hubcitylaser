import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  locationName: "Vienna, VA",
  locationLandmark: "Vienna Town Green",
  zipCodes: ["22180", "22181", "22182"],
  nearbyLocations: [
    { name: "Oakton, VA", href: "/locations/oakton-va" },
    { name: "Fairfax, VA", href: "/locations/fairfax-va" },
    { name: "Merrifield, VA", href: "/locations/merrifield-va" },
  ],
  image: "/images/vienna-va-scenic.png",
  title: "Hub City Laser Engraving Services in Vienna, VA | Hub City Laser Engraving",
  description:
    "Hub City Laser Engraving provides top-quality laser engraving services for businesses and residents in Vienna, VA. From corporate awards to custom gifts, we deliver precision and excellence.",
  keywords: "laser engraving Vienna VA, custom gifts Vienna, corporate awards Vienna VA, Vienna laser cutting",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function ViennaPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
