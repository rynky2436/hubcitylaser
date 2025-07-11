import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  locationName: "Potomac, MD",
  locationLandmark: "Great Falls Park (Maryland Side)",
  zipCodes: ["20854"],
  nearbyLocations: [
    { name: "Rockville, MD", href: "/locations/rockville-md" },
    { name: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
    { name: "Bethesda, MD", href: "/locations/bethesda-md" },
  ],
  image: "/images/potomac-md-scenic.png",
  title: "Hub City Laser Engraving Services in Potomac, MD | Hub City Laser Engraving",
  description:
    "Hub City Laser Engraving offers premium laser engraving services to the Potomac, MD community. We specialize in custom gifts, corporate awards, and personalized home decor.",
  keywords: "laser engraving Potomac MD, custom gifts Potomac, corporate awards Potomac MD, Potomac laser cutting",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function PotomacPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
