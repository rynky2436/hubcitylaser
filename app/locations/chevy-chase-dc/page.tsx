import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving Chevy Chase DC",
  description:
    "Engrave Everything delivers custom laser engraving in Chevy Chase DC—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Chevy Chase DC, custom laser signs Chevy Chase, awards Chevy Chase, personalized gifts Chevy Chase, Chevy Chase laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving Chevy Chase DC",
    description:
      "Engrave Everything delivers custom laser engraving in Chevy Chase DC—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving Chevy Chase DC",
    description:
      "Engrave Everything delivers custom laser engraving in Chevy Chase DC—signs, awards, gifts. Request your quote today!",
  },
}

export default function ChevyChaseDCPage() {
  const locationData = {
    locationName: "Chevy Chase, DC",
    locationLandmark: "Chevy Chase Circle",
    zipCodes: ["20015"],
    nearbyLocations: [
      { name: "Friendship Heights, DC", href: "/locations/friendship-heights-dc" }, // Assuming Friendship Heights page
      { name: "Tenleytown, DC", href: "/locations/tenleytown-dc" }, // Assuming Tenleytown page
      { name: "Silver Spring, MD", href: "/locations/silver-spring-md" }, // Assuming Silver Spring page
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
