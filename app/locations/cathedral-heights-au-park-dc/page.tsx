import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Cathedral Heights & AU Park, Washington, D.C.",
  heroImage: "/images/locations/cathedral-heights-au-park-dc.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Cathedral Heights & American University Park, Washington, D.C."
      heroImage="/images/locations/cathedral-heights-au-park-dc.png"
      neighborhoods={["Cathedral Heights", "AU Park", "Tenleytown"]}
      landmarks={["Washington National Cathedral", "American University"]}
      localContextNote="Ideal for university gifting, alumni events, and neighborhood pop‑ups near the Cathedral and AU."
    />
  )
}
