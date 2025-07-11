import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  locationName: "Georgetown, DC",
  locationLandmark: "Georgetown University",
  zipCodes: ["20007"],
  nearbyLocations: [
    { name: "Foggy Bottom, DC", href: "/locations/foggy-bottom-dc" },
    { name: "Dupont Circle, DC", href: "/locations/dupont-circle-dc" },
    { name: "Rosslyn, VA", href: "/locations/rosslyn-va" },
  ],
  image: "/images/georgetown-dc-scenic.png",
  title: "Hub City Laser Engraving Services in Georgetown, DC | Hub City Laser Engraving",
  description:
    "Hub City Laser Engraving brings historic craftsmanship and modern precision to Georgetown, DC. We offer laser engraving for university merchandise, boutique retail, and historic preservation projects.",
  keywords:
    "laser engraving Georgetown DC, Georgetown University merchandise, boutique retail Georgetown, Georgetown laser cutting",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function GeorgetownPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
