import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Falls Church, VA",
  heroImage: "/images/locations/falls-church-va.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Falls Church, VA"
      heroImage="/images/locations/falls-church-va.png"
      neighborhoods={["City of Falls Church", "Pimmit Hills", "Seven Corners"]}
      landmarks={["State Theatre", "Eden Center"]}
      localContextNote="Popular for corporate recognition and community market pop‑ups across the Little City."
    />
  )
}
