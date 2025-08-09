import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Georgetown, Washington, D.C.",
  heroImage: "/images/locations/georgetown-dc.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Georgetown, Washington, D.C."
      heroImage="/images/locations/georgetown-dc.png"
      neighborhoods={["Georgetown Waterfront", "East Village", "West Village"]}
      landmarks={["Georgetown University", "C&O Canal", "M Street NW"]}
      localContextNote="Perfect for alumni gifts and retail activations along M Street and Wisconsin Avenue."
    />
  )
}
