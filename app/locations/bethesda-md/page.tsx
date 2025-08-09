import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Bethesda, MD",
  heroImage: "/images/locations/bethesda-md.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Bethesda, MD"
      heroImage="/images/locations/bethesda-md.png"
      neighborhoods={["Downtown Bethesda", "Woodmont Triangle", "Battery Park", "Edgemoor", "Chevy Chase West"]}
      landmarks={["Bethesda Row", "NIH Campus vicinity", "Capital Crescent Trail"]}
      localContextNote="Popular for gifts to celebrate new jobs at NIH or Walter Reed, alumni gatherings, and neighborhood events along Bethesda Row."
    />
  )
}
