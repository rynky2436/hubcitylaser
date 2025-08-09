import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Woodley Park & Cleveland Park, Washington, D.C.",
  heroImage: "/images/woodley-park-cleveland-park-dc-scenic.png",
})

export default function WoodleyParkPage() {
  return (
    <LongFormLocationPage
      locationName="Woodley Park & Cleveland Park, Washington, D.C."
      heroImage="/images/woodley-park-cleveland-park-dc-scenic.png"
      neighborhoods={["Woodley Park", "Cleveland Park", "Forest Hills", "Kalorama Triangle"]}
      landmarks={["Smithsonian’s National Zoo", "Uptown Theater area", "Connecticut Avenue corridor"]}
      localContextNote="Families and embassies in the Connecticut Avenue corridor choose us for tasteful gifts, nameplates, and event personalization—especially popular near the National Zoo and neighborhood markets."
    />
  )
}
