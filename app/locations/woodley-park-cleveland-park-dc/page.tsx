import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  locationName: "Woodley Park & Cleveland Park, DC",
  locationLandmark: "National Zoological Park",
  zipCodes: ["20008"],
  nearbyLocations: [
    { name: "Adams Morgan, DC", href: "/locations/adams-morgan-dc" },
    { name: "Dupont Circle, DC", href: "/locations/dupont-circle-dc" },
    { name: "Columbia Heights, DC", href: "/locations/columbia-heights-dc" },
  ],
  image: "/images/woodley-park-cleveland-park-dc-scenic.png",
  title: "Hub City Laser Engraving in Woodley Park & Cleveland Park, DC | Hub City Laser Engraving",
  description:
    "Hub City Laser Engraving offers expert laser engraving services to the historic Woodley Park and Cleveland Park neighborhoods. We specialize in custom signage, home decor, and unique gifts.",
  keywords: "laser engraving Woodley Park, Cleveland Park laser cutting, custom gifts DC, historic home plaques DC",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function WoodleyParkPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
