import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  locationName: "Bethesda, MD",
  locationLandmark: "National Institutes of Health",
  zipCodes: ["20814", "20817"],
  nearbyLocations: [
    { name: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
    { name: "Rockville, MD", href: "/locations/rockville-md" },
    { name: "Silver Spring, MD", href: "/locations/silver-spring-md" },
  ],
  image: "/images/bethesda-md-scenic.png",
  title: "Hub City Laser Engraving Services in Bethesda, MD | Hub City Laser Engraving",
  description:
    "Hub City Laser Engraving is the go-to provider for laser engraving in Bethesda, MD. We offer a wide range of services, including medical device marking, corporate branding, and custom gifts.",
  keywords:
    "laser engraving Bethesda MD, medical device marking Bethesda, corporate branding Bethesda MD, Bethesda laser cutting",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function BethesdaPage() {
  return (
    <LocationTemplate
      title={locationData.title}
      description={locationData.description}
      keywords={locationData.keywords}
      {...locationData}
    />
  )
}
