import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Great Falls, VA",
  heroImage: "/images/locations/great-falls-va.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Great Falls, VA"
      heroImage="/images/locations/great-falls-va.png"
      neighborhoods={["Great Falls Village", "Seneca", "Colvin Run"]}
      landmarks={["Great Falls Park", "Riverbend Park"]}
      localContextNote="Popular for personalized gifts and private event engraving near Great Falls Park."
    />
  )
}
