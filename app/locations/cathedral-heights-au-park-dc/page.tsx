import LocationTemplate, { generateMetadata as generateLocationMetadata } from "../../components/LocationTemplate"
import type { Metadata } from "next"

const locationData = {
  name: "Cathedral Heights & AU Park, DC",
  title: "Laser Engraving in Cathedral Heights & AU Park, DC | Hub City Laser",
  description:
    "Hub City Laser serves the Cathedral Heights and AU Park neighborhoods with professional laser engraving. We offer services for academic institutions, local businesses, and residents.",
  keywords:
    "laser engraving Cathedral Heights, American University merchandise, AU Park laser cutting, laser engraving DC",
  mainImage: "",
  intro:
    "Serving the picturesque neighborhoods of Cathedral Heights and AU Park, Hub City Laser provides high-quality laser engraving for residents, local businesses, and the American University community. We offer precision and a personal touch for every project.",
  services: [
    {
      name: "Academic & University Awards",
      description: "Custom awards and merchandise for American University and other local educational institutions.",
      image: "/images/school-award-plaque.png",
    },
    {
      name: "Local Business Signage",
      description: "Attractive and professional signage for the charming local businesses in the area.",
      image: "/images/retail-traditional-signage.png",
    },
    {
      name: "Personalized Home Goods",
      description: "Custom engraved items to personalize the beautiful homes of Cathedral Heights and AU Park.",
      image: "/images/thanksgiving-decor.png",
    },
  ],
  ctaText: "Get a Quote for Your Project",
  ctaLink: "/contact",
}

export const metadata: Metadata = generateLocationMetadata(locationData)

export default function CathedralHeightsPage() {
  return <LocationTemplate {...locationData} />
}
