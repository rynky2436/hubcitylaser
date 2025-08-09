import type { Metadata } from "next"
import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata: Metadata = generateLocationMetadata({
  locationName: "Bethesda, MD",
  heroImage: "/images/bethesda-md-scenic.png",
})

export default function BethesdaPage() {
  return (
    <LongFormLocationPage
      locationName="Bethesda, MD"
      heroImage="/images/bethesda-md-scenic.png"
      neighborhoods={["Downtown Bethesda", "Wyngate", "Edgemoor", "Woodmont Triangle", "Battery Park"]}
      landmarks={[
        "National Institutes of Health (NIH)",
        "Walter Reed National Military Medical Center",
        "Bethesda Row",
        "Capital Crescent Trail",
      ]}
      localContextNote="Bethesda’s mix of medical institutions, law firms, nonprofits, and boutique retail means our engraving spans executive gifts, clinic equipment tags, office signage, and highly personal presents for families along the Capital Crescent Trail."
    />
  )
}
