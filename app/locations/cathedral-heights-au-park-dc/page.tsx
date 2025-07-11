import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  locationName: "Cathedral Heights & AU Park, DC",
  locationLandmark: "Washington National Cathedral",
  zipCodes: ["20016"],
  nearbyLocations: [
    { name: "Tenleytown, DC", href: "/locations/tenleytown-dc" },
    { name: "Cleveland Park, DC", href: "/locations/woodley-park-cleveland-park-dc" },
    { name: "Friendship Heights, DC", href: "/locations/friendship-heights-dc" },
  ],
  image: "/images/cathedral-heights-au-park-dc-scenic.png",
  title: "Hub City Laser Engraving in Cathedral Heights & AU Park, DC | Hub City Laser Engraving",
  description:
    "Hub City Laser Engraving serves the Cathedral Heights and AU Park neighborhoods with professional laser engraving. We offer services for academic institutions, local businesses, and residents.",
  keywords:
    "laser engraving Cathedral Heights, American University merchandise, AU Park laser cutting, laser engraving DC",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function CathedralHeightsPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
