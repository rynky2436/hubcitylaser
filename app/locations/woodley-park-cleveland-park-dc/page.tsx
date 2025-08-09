import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Woodley Park & Cleveland Park, Washington, D.C.",
  heroImage: "/images/locations/woodley-park-cleveland-park-dc.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Woodley Park & Cleveland Park, Washington, D.C."
      heroImage="/images/locations/woodley-park-cleveland-park-dc.png"
      neighborhoods={["Woodley Park", "Cleveland Park", "Kalorama vicinity"]}
      landmarks={["Smithsonian’s National Zoo", "Rock Creek Park"]}
      localContextNote="Popular for local family gifts and neighborhood retail pop‑ups near the Zoo and Rock Creek Park."
    />
  )
}
