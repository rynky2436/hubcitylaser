import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  locationName: "Chevy Chase, DC",
  locationLandmark: "Chevy Chase Circle",
  zipCodes: ["20015"],
  nearbyLocations: [
    { name: "Friendship Heights, DC", href: "/locations/friendship-heights-dc" },
    { name: "Tenleytown, DC", href: "/locations/tenleytown-dc" },
    { name: "Bethesda, MD", href: "/locations/bethesda-md" },
  ],
  image: "/images/chevy-chase-dc-scenic.png",
  title: "Hub City Laser Engraving Services in Chevy Chase, DC | Hub City Laser Engraving",
  description:
    "Hub City Laser Engraving provides elegant laser engraving services for the upscale Chevy Chase, DC area. We specialize in luxury retail branding, personalized gifts, and custom home decor.",
  keywords:
    "laser engraving Chevy Chase DC, luxury retail Chevy Chase, personalized gifts Chevy Chase DC, Chevy Chase laser cutting",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function ChevyChasePage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
