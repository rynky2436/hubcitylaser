import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Chevy Chase, MD",
  heroImage: "/images/locations/chevy-chase-md.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Chevy Chase, MD"
      heroImage="/images/locations/chevy-chase-md.png"
      neighborhoods={["Village of Chevy Chase", "Somerset", "Chevy Chase Section 3", "Friendship Village"]}
      landmarks={["The Collection at Chevy Chase", "Capital Crescent Trail access"]}
      localContextNote="Great for housewarming gifts, local school events, and retail pop‑ups."
    />
  )
}
