import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  locationName: "Chevy Chase, MD",
  locationLandmark: "Chevy Chase Circle",
  nearbyLocations: [
    { name: "Bethesda, MD", href: "/locations/bethesda-md" },
    { name: "Potomac, MD", href: "/locations/potomac-md" },
    { name: "Chevy Chase, DC", href: "/locations/chevy-chase-dc" },
  ],
  image: "/images/chevy-chase-md-scenic.png",
  title: "Laser Engraving in Chevy Chase, MD | Engrave Everything",
  description:
    "Luxury‑grade laser engraving for gifts, branding, and custom signage in Chevy Chase, Maryland. We come to you and ship throughout the DMV.",
  keywords: "laser engraving Chevy Chase MD, custom gifts Chevy Chase Maryland, signage Chevy Chase MD",
  // Service-area settings
  areaServed: "Chevy Chase, Maryland",
  serviceAreaBusiness: true,
  serviceAreaNote: "Serving Chevy Chase, MD — mobile service and shipping available.",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function ChevyChaseMDPage() {
  return <LocationTemplate {...locationData} />
}
