import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving Great Falls VA",
  description:
    "Engrave Everything delivers custom laser engraving in Great Falls VA—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Great Falls VA, custom laser signs Great Falls, awards Great Falls, personalized gifts Great Falls, Great Falls laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving Great Falls VA",
    description:
      "Engrave Everything delivers custom laser engraving in Great Falls VA—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving Great Falls VA",
    description:
      "Engrave Everything delivers custom laser engraving in Great Falls VA—signs, awards, gifts. Request your quote today!",
  },
}

export default function GreatFallsVAPage() {
  const locationData = {
    locationName: "Great Falls, VA",
    locationLandmark: "Great Falls Park",
    zipCodes: ["22066"],
    nearbyLocations: [
      { name: "McLean, VA", href: "/locations/mclean-va" },
      { name: "Reston, VA", href: "/locations/reston-va" },
      { name: "Sterling, VA", href: "/locations/sterling-va" },
    ],
    image: "/laser-engraving-great-falls-va.png",
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
