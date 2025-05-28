import type { Metadata } from "next"
import IndustryTemplate from "../components/IndustryTemplate"

export const metadata: Metadata = {
  title: "Hospitality Laser Engraving Services | Hub City Laser",
  description:
    "Custom laser engraving for hotels, resorts, and hospitality businesses. Room signs, promotional displays, and guest amenities.",
}

export default function HospitalityPage() {
  const services = [
    "Hotel room signs and door numbers",
    "Guest amenity customization and branding",
    "Event signage and promotional displays",
    "Staff name tags and identification badges",
    "Conference room and facility signage",
    "Custom guest gifts and welcome items",
  ]

  return (
    <IndustryTemplate
      title="Hospitality"
      description="Create memorable guest experiences with custom laser-engraved signage, amenities, and promotional materials for hotels, resorts, restaurants, and event venues."
      services={services}
    />
  )
}
