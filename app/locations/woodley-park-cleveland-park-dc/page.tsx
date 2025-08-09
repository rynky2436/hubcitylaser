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
  title: "Laser Engraving in Woodley Park & Cleveland Park, DC | Engrave Everything",
  description:
    "Custom signage, home décor, and unique gifts for Woodley Park & Cleveland Park. We come to you when needed and ship throughout the District.",
  keywords: "laser engraving Woodley Park, Cleveland Park laser cutting, DC personalized gifts",
  areaServed: "Washington, D.C.",
  serviceAreaBusiness: true,
  serviceAreaNote: "Servicing Washington, D.C. — mobile service and shipping. No D.C. street address listed.",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function WoodleyParkPage() {
  return <LocationTemplate {...locationData} />
}
