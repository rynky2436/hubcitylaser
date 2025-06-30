import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving Georgetown DC",
  description:
    "Engrave Everything delivers custom laser engraving in Georgetown DC—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Georgetown DC, custom laser signs Georgetown, awards Georgetown, personalized gifts Georgetown, Georgetown laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving Georgetown DC",
    description:
      "Engrave Everything delivers custom laser engraving in Georgetown DC—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving Georgetown DC",
    description:
      "Engrave Everything delivers custom laser engraving in Georgetown DC—signs, awards, gifts. Request your quote today!",
  },
}

export default function GeorgetownDCPage() {
  const locationData = {
    locationName: "Georgetown, DC",
    locationLandmark: "Georgetown University",
    zipCodes: ["20007"],
    nearbyLocations: [
      { name: "Foggy Bottom, DC", href: "/locations/foggy-bottom-dc" }, // Assuming Foggy Bottom page
      { name: "Dupont Circle, DC", href: "/locations/dupont-circle-dc" }, // Assuming Dupont Circle page
      { name: "Rosslyn, VA", href: "/locations/rosslyn-va" }, // Assuming Rosslyn page
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
