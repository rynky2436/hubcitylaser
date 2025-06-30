import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving McLean VA",
  description:
    "Engrave Everything delivers custom laser engraving in McLean VA—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving McLean VA, custom laser signs McLean, awards McLean, personalized gifts McLean, McLean laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving McLean VA",
    description:
      "Engrave Everything delivers custom laser engraving in McLean VA—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving McLean VA",
    description:
      "Engrave Everything delivers custom laser engraving in McLean VA—signs, awards, gifts. Request your quote today!",
  },
}

export default function McLeanVAPage() {
  const locationData = {
    locationName: "McLean, VA",
    locationLandmark: "McLean Central Park",
    zipCodes: ["22101", "22102"],
    nearbyLocations: [
      { name: "Great Falls, VA", href: "/locations/great-falls-va" },
      { name: "Tysons Corner, VA", href: "/locations/tysons-corner-va" },
      { name: "Falls Church, VA", href: "/locations/falls-church-va" },
    ],
    image: "/laser-engraving-mclean-va.png",
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
