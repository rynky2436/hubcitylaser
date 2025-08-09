import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Chevy Chase, Washington, D.C.",
  heroImage: "/images/locations/chevy-chase-dc.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Chevy Chase, Washington, D.C."
      heroImage="/images/locations/chevy-chase-dc.png"
      neighborhoods={["Chevy Chase DC", "Friendship Heights"]}
      landmarks={["Connecticut Avenue Corridor", "Chevy Chase Circle"]}
      localContextNote="We support boutique retail activations and neighborhood gatherings throughout Chevy Chase DC."
    />
  )
}
