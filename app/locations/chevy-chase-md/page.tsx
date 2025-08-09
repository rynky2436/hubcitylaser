import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Chevy Chase, MD",
  heroImage: "/images/chevy-chase-md-scenic.png",
})

export default function ChevyChaseMDPage() {
  return (
    <LongFormLocationPage
      locationName="Chevy Chase, MD"
      heroImage="/images/chevy-chase-md-scenic.png"
      neighborhoods={["Chevy Chase Village", "Section 3", "Section 5", "Friendship Heights", "Rollingwood"]}
      landmarks={["Chevy Chase Club", "Capital Crescent Trail", "Friendship Heights shops"]}
      localContextNote="Homeowners and boutiques in Chevy Chase, Maryland trust us for wedding and milestone gifts, tasteful home signage, and corporate gifts headed to nearby offices and embassies."
    />
  )
}
