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
  title: "Laser Engraving in Cathedral Heights & AU Park, DC | Engrave Everything",
  description:
    "Professional laser engraving for homes, schools, and local businesses in Cathedral Heights & AU Park. We come to you for on-site needs and ship finished work anywhere in D.C.",
  keywords: "laser engraving Cathedral Heights, AU Park engraving, DC laser cutting, university gifts DC",
  // Service-area SEO
  areaServed: "Washington, D.C.",
  serviceAreaBusiness: true,
  serviceAreaNote:
    "Servicing Washington, D.C. — we travel for projects and ship to all D.C. neighborhoods. No storefront in D.C.",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function CathedralHeightsPage() {
  return <LocationTemplate {...locationData} />
}
