import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Potomac, MD",
  heroImage: "/images/potomac-md-scenic.png",
})

export default function PotomacPage() {
  return (
    <LongFormLocationPage
      locationName="Potomac, MD"
      heroImage="/images/potomac-md-scenic.png"
      neighborhoods={["Potomac Village", "Avenel", "River Road corridor"]}
      landmarks={["Great Falls (Maryland side)", "Glenstone Museum"]}
      localContextNote="Homeowners and event planners in Potomac rely on our personalized gifts, tasteful signage, and on‑site engraving for weddings and private gatherings."
    />
  )
}
