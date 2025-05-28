import type { Metadata } from "next"
import IndustryTemplate from "../components/IndustryTemplate"

export const metadata: Metadata = {
  title: "Restaurant Laser Engraving Services | Hub City Laser",
  description:
    "Custom laser engraving for restaurants, cafes, and food service businesses. Menu boards, table numbers, signage, and promotional materials.",
}

export default function RestaurantsPage() {
  const services = [
    "Custom menu boards and daily specials displays",
    "Table numbers and reservation signs",
    "Restaurant branding and promotional signage",
    "Staff name tags and identification badges",
    "Custom coasters and promotional items",
    "Kitchen equipment labels and organization signs",
  ]

  return (
    <IndustryTemplate
      title="Restaurants & Food Service"
      description="Enhance your restaurant's atmosphere and functionality with custom laser-engraved signage, menu displays, and promotional materials that reflect your brand's personality."
      services={services}
    />
  )
}
