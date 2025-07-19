import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  locationName: "Frederick, MD",
  locationLandmark: "Carroll Creek Park",
  zipCodes: ["21701", "21702", "21703", "21704"],
  nearbyLocations: [
    { name: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
    { name: "Germantown, MD", href: "/locations/germantown-md" },
    { name: "Hagerstown, MD", href: "/locations/hagerstown-md" },
  ],
  image: "/images/frederick-md-scenic.png",
  title: "Hub City Laser Engraving Services in Frederick, MD | Hub City Laser Engraving",
  description:
    "Hub City Laser Engraving offers comprehensive laser engraving services in Frederick, MD. From custom awards to industrial marking, we provide precision and quality.",
  keywords:
    "laser engraving Frederick MD, custom awards Frederick, industrial marking Frederick, Frederick laser cutting",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function FrederickMDPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
