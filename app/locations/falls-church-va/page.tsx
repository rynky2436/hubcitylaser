import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Falls Church, VA",
  heroImage: "/images/falls-church-va-scenic.png",
})

export default function FallsChurchVAPage() {
  return (
    <LongFormLocationPage
      locationName="Falls Church, VA"
      heroImage="/images/falls-church-va-scenic.png"
      neighborhoods={["The Little City", "Pimmit Hills", "West Falls Church", "Seven Corners"]}
      landmarks={["Eden Center", "Cherry Hill Park", "State Theatre"]}
      localContextNote="We support small businesses near the State Theatre and create custom gifts for families across The Little City. The Eden Center’s dynamic retail scene is ideal for pop‑up activations and live personalization."
    />
  )
}
