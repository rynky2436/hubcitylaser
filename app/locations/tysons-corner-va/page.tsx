import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Tysons Corner, VA",
  heroImage: "/images/locations/tysons-corner-va.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Tysons Corner, VA"
      heroImage="/images/locations/tysons-corner-va.png"
      neighborhoods={["Tysons", "Scotts Run", "Lerner Town Center"]}
      landmarks={["Tysons Corner Center", "Tysons Galleria"]}
      localContextNote="We handle corporate recognition, office signage, and on‑site activations in Tysons."
    />
  )
}
