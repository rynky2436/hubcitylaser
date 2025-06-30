import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving Cathedral Heights/AU Park DC",
  description:
    "Engrave Everything delivers custom laser engraving in Cathedral Heights/AU Park DC—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Cathedral Heights DC, laser engraving AU Park DC, custom laser signs Cathedral Heights, awards AU Park, personalized gifts Cathedral Heights, AU Park laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving Cathedral Heights/AU Park DC",
    description:
      "Engrave Everything delivers custom laser engraving in Cathedral Heights/AU Park DC—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving Cathedral Heights/AU Park DC",
    description:
      "Engrave Everything delivers custom laser engraving in Cathedral Heights/AU Park DC—signs, awards, gifts. Request your quote today!",
  },
}

export default function CathedralHeightsAUParkDCPage() {
  const locationData = {
    locationName: "Cathedral Heights/AU Park, DC",
    locationLandmark: "Washington National Cathedral",
    zipCodes: ["20016"],
    nearbyLocations: [
      { name: "Tenleytown, DC", href: "/locations/tenleytown-dc" },
      { name: "Cleveland Park, DC", href: "/locations/woodley-park-cleveland-park-dc" },
      { name: "Glover Park, DC", href: "/locations/glover-park-dc" },
    ],
    image: "/placeholder.svg?height=1080&width=1920",
  }

  return (
    <LocationTemplate
      title={metadata.title as string}
      description={metadata.description as string}
      keywords={metadata.keywords as string}
      {...locationData}
    />
  )
}
