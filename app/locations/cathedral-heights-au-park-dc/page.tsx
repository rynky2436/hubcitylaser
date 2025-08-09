import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Cathedral Heights & AU Park, Washington, D.C.",
  heroImage: "/images/cathedral-heights-au-park-dc-scenic.png",
})

export default function CathedralHeightsPage() {
  return (
    <LongFormLocationPage
      locationName="Cathedral Heights & AU Park, Washington, D.C."
      heroImage="/images/cathedral-heights-au-park-dc-scenic.png"
      neighborhoods={["Cathedral Heights", "American University Park", "Spring Valley", "Tenleytown"]}
      landmarks={["Washington National Cathedral", "American University", "Cathedral Commons"]}
      localContextNote="From alumni gifts for American University to custom home décor around Cathedral Commons, our mobile setup makes it easy to engrave locally or ship finished items anywhere in the District."
    />
  )
}
