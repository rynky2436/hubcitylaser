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
  title: "Laser Engraving in Chevy Chase, DC | Engrave Everything",
  description:
    "Luxury‑grade laser engraving for gifts, signage, and branding in Chevy Chase, DC. On‑site service available; we also ship throughout D.C.",
  keywords: "laser engraving Chevy Chase DC, custom gifts Chevy Chase, signage DC",
  areaServed: "Washington, D.C.",
  serviceAreaBusiness: true,
  serviceAreaNote:
    "Servicing Washington, D.C. — mobile service and shipping available. We do not list a D.C. street address.",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function ChevyChasePage() {
  return <LocationTemplate {...locationData} />
}
