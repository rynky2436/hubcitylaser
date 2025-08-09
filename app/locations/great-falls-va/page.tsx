import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Great Falls, VA",
  heroImage: "/images/great-falls-va-scenic.png",
})

export default function GreatFallsVAPage() {
  return (
    <LongFormLocationPage
      locationName="Great Falls, VA"
      heroImage="/images/great-falls-va-scenic.png"
      neighborhoods={["Great Falls", "Riverbend", "Seneca"]}
      landmarks={["Great Falls Park", "Riverbend Park"]}
      localContextNote="Residents choose us for refined gifts and estate signage that suit Great Falls’ natural setting. Event venues near the park make elegant backdrops for on‑site engraving."
    />
  )
}
