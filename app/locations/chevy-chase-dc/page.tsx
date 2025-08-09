import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Chevy Chase, Washington, D.C.",
  heroImage: "/images/chevy-chase-dc-scenic.png",
})

export default function ChevyChaseDCPage() {
  return (
    <LongFormLocationPage
      locationName="Chevy Chase, Washington, D.C."
      heroImage="/images/chevy-chase-dc-scenic.png"
      neighborhoods={["Chevy Chase DC", "Barnaby Woods", "Hawthorne", "Friendship Heights"]}
      landmarks={["Chevy Chase Circle", "Connecticut Avenue retail", "Lafayette Elementary School"]}
      localContextNote="We support neighborhood events along Connecticut Avenue and create thoughtful gifts for teachers, new homeowners, and community celebrations near Chevy Chase Circle."
    />
  )
}
