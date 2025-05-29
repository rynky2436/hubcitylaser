import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Hospitality Laser Services - Hub City Laser",
  description: "Hotel signage, room numbers, and guest amenities for hotels, resorts, and hospitality businesses.",
}

export default function HospitalityPage() {
  const services = [
    "Hotel room numbers and door signs",
    "Guest amenity signage",
    "Lobby and directional signage",
    "Restaurant and bar signage",
    "Event space identification",
    "Safety and emergency signage",
    "Custom guest welcome materials",
    "Hospitality branding elements",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200&query=hotel%20room%20signage%20laser%20engraved"
              alt="Hospitality laser services"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">Hospitality Laser Services</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Create memorable guest experiences with elegant, professional signage and amenities designed specifically
              for the hospitality industry. Hub City Laser helps hotels, resorts, and hospitality businesses maintain a
              consistent, upscale appearance throughout their properties.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our durable, attractive signage solutions enhance guest navigation while reinforcing your brand identity
              and commitment to quality service.
            </p>
          </div>

          <Card className="mb-12 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Our Hospitality Services</CardTitle>
              <CardDescription>Elegant signage solutions for hospitality businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#002B5C] rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&query=hotel%20lobby%20directional%20signage"
                alt="Hotel lobby directional signage"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&query=hotel%20guest%20amenity%20signs"
                alt="Hotel guest amenity signs"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-4">Elevate Your Guest Experience</h2>
            <p className="text-lg text-gray-700 mb-6">
              Create a welcoming environment with professional hospitality signage
            </p>
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]">
              <Link href="/contact">Get Hospitality Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
