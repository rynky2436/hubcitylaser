import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving Woodley Park/Cleveland Park DC",
  description:
    "Engrave Everything delivers custom laser engraving in Woodley Park/Cleveland Park DC—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Woodley Park DC, laser engraving Cleveland Park DC, custom laser signs Woodley Park, awards Cleveland Park, personalized gifts Woodley Park, Cleveland Park laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving Woodley Park/Cleveland Park DC",
    description:
      "Engrave Everything delivers custom laser engraving in Woodley Park/Cleveland Park DC—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving Woodley Park/Cleveland Park DC",
    description:
      "Engrave Everything delivers custom laser engraving in Woodley Park/Cleveland Park DC—signs, awards, gifts. Request your quote today!",
  },
}

export default function WoodleyParkClevelandParkDCPage() {
  const locationData = {
    locationName: "Woodley Park/Cleveland Park, DC",
    locationLandmark: "Smithsonian National Zoo",
    zipCodes: ["20008"],
    nearbyLocations: [
      { name: "Adams Morgan, DC", href: "/locations/adams-morgan-dc" }, // Assuming Adams Morgan page
      { name: "Columbia Heights, DC", href: "/locations/columbia-heights-dc" }, // Assuming Columbia Heights page
      { name: "Forest Hills, DC", href: "/locations/forest-hills-dc" }, // Assuming Forest Hills page
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
