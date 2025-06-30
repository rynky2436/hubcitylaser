import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving Tysons Corner VA",
  description:
    "Engrave Everything delivers custom laser engraving in Tysons Corner VA—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Tysons Corner VA, custom laser signs Tysons Corner, awards Tysons Corner, personalized gifts Tysons Corner, Tysons Corner laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving Tysons Corner VA",
    description:
      "Engrave Everything delivers custom laser engraving in Tysons Corner VA—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving Tysons Corner VA",
    description:
      "Engrave Everything delivers custom laser engraving in Tysons Corner VA—signs, awards, gifts. Request your quote today!",
  },
}

export default function TysonsCornerVAPage() {
  const locationData = {
    locationName: "Tysons Corner, VA",
    locationLandmark: "Tysons Galleria",
    zipCodes: ["22102", "22182"],
    nearbyLocations: [
      { name: "McLean, VA", href: "/locations/mclean-va" },
      { name: "Vienna, VA", href: "/locations/vienna-va" },
      { name: "Reston, VA", href: "/locations/reston-va" }, // Assuming Reston page
    ],
    image: "/laser-engraving-tysons-corner-va.png",
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
