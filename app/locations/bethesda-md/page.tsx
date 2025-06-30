import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving Bethesda MD",
  description:
    "Engrave Everything delivers custom laser engraving in Bethesda MD—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Bethesda MD, custom laser signs Bethesda, awards Bethesda, personalized gifts Bethesda, Bethesda laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving Bethesda MD",
    description:
      "Engrave Everything delivers custom laser engraving in Bethesda MD—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving Bethesda MD",
    description:
      "Engrave Everything delivers custom laser engraving in Bethesda MD—signs, awards, gifts. Request your quote today!",
  },
}

export default function BethesdaMDPage() {
  const locationData = {
    locationName: "Bethesda, MD",
    locationLandmark: "Bethesda Row",
    zipCodes: ["20814", "20816", "20817"],
    nearbyLocations: [
      { name: "Chevy Chase, DC", href: "/locations/chevy-chase-dc" },
      { name: "Rockville, MD", href: "/locations/rockville-md" },
      { name: "Silver Spring, MD", href: "/locations/silver-spring-md" },
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
