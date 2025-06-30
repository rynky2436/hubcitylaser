import type { Metadata } from "next"
import LocationTemplate from "../../components/LocationTemplate"

export const metadata: Metadata = {
  title: "Engrave Everything — Laser Engraving Vienna VA",
  description:
    "Engrave Everything delivers custom laser engraving in Vienna VA—signs, awards, gifts. Request your quote today!",
  keywords:
    "laser engraving Vienna VA, custom laser signs Vienna, awards Vienna, personalized gifts Vienna, Vienna laser cutting",
  openGraph: {
    title: "Engrave Everything — Laser Engraving Vienna VA",
    description:
      "Engrave Everything delivers custom laser engraving in Vienna VA—signs, awards, gifts. Request your quote today!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engrave Everything — Laser Engraving Vienna VA",
    description:
      "Engrave Everything delivers custom laser engraving in Vienna VA—signs, awards, gifts. Request your quote today!",
  },
}

export default function ViennaVAPage() {
  const locationData = {
    locationName: "Vienna, VA",
    locationLandmark: "Wolf Trap National Park for the Performing Arts",
    zipCodes: ["22180", "22181", "22182"],
    nearbyLocations: [
      { name: "Oakton, VA", href: "/locations/oakton-va" }, // Assuming Oakton page
      { name: "Merrifield, VA", href: "/locations/merrifield-va" }, // Assuming Merrifield page
      { name: "Fairfax, VA", href: "/locations/fairfax-va" }, // Assuming Fairfax page
    ],
    image: "/placeholder-wchpp.png",
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
