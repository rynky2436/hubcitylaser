import type { Metadata } from "next"
import IndustryTemplate from "../components/IndustryTemplate"

export const metadata: Metadata = {
  title: "Technology Industry Laser Engraving | Hub City Laser",
  description:
    "Precision laser engraving for technology companies. Product labels, awards, corporate signage, and promotional materials.",
}

export default function TechPage() {
  const services = [
    "Product labels and serial number engraving",
    "Corporate awards and achievement recognition",
    "Office signage and branding materials",
    "Trade show displays and promotional items",
    "Employee recognition and milestone awards",
    "Custom tech accessories and promotional gifts",
  ]

  return (
    <IndustryTemplate
      title="Technology"
      description="Precision laser engraving solutions for technology companies, startups, and IT services. From product marking to corporate recognition, we deliver quality that matches your innovation."
      services={services}
    />
  )
}
