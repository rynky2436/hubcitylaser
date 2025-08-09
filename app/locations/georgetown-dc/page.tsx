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
  title: "Laser Engraving in Georgetown, DC | Engrave Everything",
  description:
    "Boutique‑quality laser engraving for university merchandise, retail, and historic homes in Georgetown. We travel for on‑site needs and ship citywide.",
  keywords: "laser engraving Georgetown DC, university merchandise, boutique retail engraving DC",
  areaServed: "Washington, D.C.",
  serviceAreaBusiness: true,
  serviceAreaNote:
    "Servicing Washington, D.C. — on‑site service and shipping available. No physical storefront in D.C.",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function GeorgetownPage() {
  return <LocationTemplate {...locationData} />
}
