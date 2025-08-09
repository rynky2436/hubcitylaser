import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Frederick, MD",
  heroImage: "/images/frederick-md-scenic.png",
})

export default function FrederickMDPage() {
  return (
    <LongFormLocationPage
      locationName="Frederick, MD"
      heroImage="/images/frederick-md-scenic.png"
      neighborhoods={["Downtown Frederick", "Baker Park", "Worman’s Mill", "Ballenger Creek"]}
      landmarks={["Carroll Creek Park", "Hood College", "Frederick Fairgrounds"]}
      localContextNote="From artisan markets along Carroll Creek to university milestones at Hood College, we personalize gifts and produce branded items for Frederick’s vibrant downtown businesses."
    />
  )
}
