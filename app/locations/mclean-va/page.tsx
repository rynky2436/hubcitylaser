import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "McLean, VA",
  heroImage: "/images/mclean-va-scenic.png",
})

export default function McLeanVAPage() {
  return (
    <LongFormLocationPage
      locationName="McLean, VA"
      heroImage="/images/mclean-va-scenic.png"
      neighborhoods={["Langley", "West McLean", "Chesterbrook"]}
      landmarks={["McLean Central Park", "Tysons", "CIA Headquarters vicinity"]}
      localContextNote="From executive gifts for Tysons‑area offices to elegant awards for community organizations, our engraving complements the pace and polish of McLean."
    />
  )
}
