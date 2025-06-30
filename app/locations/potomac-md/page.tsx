import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving Potomac MD",
  description:
    "Engrave Everything delivers custom laser engraving in Potomac MD—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Potomac MD, custom laser signs Potomac, awards Potomac, personalized gifts Potomac, Potomac laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving Potomac MD",
    description:
      "Engrave Everything delivers custom laser engraving in Potomac MD—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving Potomac MD",
    description:
      "Engrave Everything delivers custom laser engraving in Potomac MD—signs, awards, gifts. Request your quote today!",
  },
}

export default function PotomacMDPage() {
  const locationData = {
    locationName: "Potomac, MD",
    locationLandmark: "Great Falls Park (Maryland side)",
    zipCodes: ["20854"],
    nearbyLocations: [
      { name: "Rockville, MD", href: "/locations/rockville-md" },
      { name: "Bethesda, MD", href: "/locations/bethesda-md" },
      { name: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
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
