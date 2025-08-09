import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Georgetown, Washington, D.C.",
  heroImage: "/images/georgetown-dc-scenic.png",
})

export default function GeorgetownPage() {
  return (
    <LongFormLocationPage
      locationName="Georgetown, Washington, D.C."
      heroImage="/images/georgetown-dc-scenic.png"
      neighborhoods={["Georgetown Waterfront", "Hillandale", "Burleith", "Foxhall"]}
      landmarks={["Georgetown University", "M Street & Wisconsin Avenue", "Georgetown Waterfront Park"]}
      localContextNote="We create alumni gifts for Hoyas, retail personalization along M Street, and tasteful home décor for historic residences. Waterfront events are ideal for live engraving activations."
    />
  )
}
