import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Potomac, MD",
  heroImage: "/images/locations/potomac-md.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Potomac, MD"
      heroImage="/images/locations/potomac-md.png"
      neighborhoods={["Avenel", "Falls Road Corridor", "Potomac Village"]}
      landmarks={["C&O Canal—Great Falls Tavern", "Glenstone Museum vicinity"]}
      localContextNote="Popular for housewarming gifts, community events, and private celebrations."
    />
  )
}
