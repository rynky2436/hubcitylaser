import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Vienna, VA",
  heroImage: "/images/vienna-va-scenic.png",
})

export default function ViennaPage() {
  return (
    <LongFormLocationPage
      locationName="Vienna, VA"
      heroImage="/images/vienna-va-scenic.png"
      neighborhoods={["Vienna Woods", "Merry Oaks", "Nottoway Park area"]}
      landmarks={["Vienna Town Green", "W&OD Trail", "Jammin Java"]}
      localContextNote="Vienna’s community calendar and Town Green concerts are perfect opportunities for personalized gifts and on‑site event engraving. We also ship finished orders across Fairfax County."
    />
  )
}
