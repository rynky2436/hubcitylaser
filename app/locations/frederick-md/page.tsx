import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Frederick, MD",
  heroImage: "/images/locations/frederick-md.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Frederick, MD"
      heroImage="/images/locations/frederick-md.png"
      neighborhoods={["Downtown Frederick", "Baker Park", "Worman's Mill", "Urbana"]}
      landmarks={["Carroll Creek Promenade", "Frederick Fairgrounds"]}
      localContextNote="Serving Frederick with mobile engraving for market pop‑ups and downtown events."
    />
  )
}
