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
  title: "Laser Engraving in Frederick, MD | Engrave Everything",
  description:
    "Premium laser engraving for awards, signage, gifts, and industrial marking in Frederick, Maryland. Mobile service available and we ship across the region.",
  keywords: "laser engraving Frederick MD, custom awards Frederick, signage Frederick, industrial marking Frederick",
  // Service-area settings
  areaServed: "Frederick, Maryland",
  serviceAreaBusiness: true,
  serviceAreaNote: "Serving Frederick, MD — mobile service and shipping available.",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function FrederickMDPage() {
  return <LocationTemplate {...locationData} />
}
