import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "McLean, VA",
  heroImage: "/images/locations/mclean-va.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="McLean, VA"
      heroImage="/images/locations/mclean-va.png"
      neighborhoods={["Langley", "McLean Hamlet", "West McLean"]}
      landmarks={["Tysons Galleria vicinity", "Clemyjontri Park"]}
      localContextNote="Corporate awards and executive gifts are common requests across McLean and Tysons."
    />
  )
}
