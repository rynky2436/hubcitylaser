import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Tysons Corner, VA",
  heroImage: "/images/tysons-corner-va-scenic.png",
})

export default function TysonsCornerVAPage() {
  return (
    <LongFormLocationPage
      locationName="Tysons Corner, VA"
      heroImage="/images/tysons-corner-va-scenic.png"
      neighborhoods={["Tysons", "Scotts Run", "Boro District"]}
      landmarks={["Tysons Galleria", "Tysons Corner Center", "Boro Park"]}
      localContextNote="We support tech, consulting, and retail teams at Tysons with polished executive gifts, branded event giveaways, and on‑site activations in offices and shopping districts."
    />
  )
}
