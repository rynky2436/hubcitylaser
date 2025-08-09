import LongFormLocationPage, { generateLocationMetadata } from "@/app/components/location-long-form"

export const metadata = generateLocationMetadata({
  locationName: "Vienna, VA",
  heroImage: "/images/locations/vienna-va.png",
})

export default function Page() {
  return (
    <LongFormLocationPage
      locationName="Vienna, VA"
      heroImage="/images/locations/vienna-va.png"
      neighborhoods={["Town of Vienna", "Wolf Trap", "Maple Avenue Corridor"]}
      landmarks={["Wolf Trap National Park for the Performing Arts"]}
      localContextNote="Great for event gifts and market pop‑ups along Maple Avenue and Wolf Trap events."
    />
  )
}
