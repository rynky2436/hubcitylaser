import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Restaurant Laser Services - Hub City Engraving",
  description:
    "Custom menu boards, signage, and promotional materials for restaurants, cafes, and food service businesses.",
}

export default function RestaurantsPage() {
  const services = [
    "Custom menu boards and displays",
    "Restaurant signage and branding",
    "Table numbers and reservation signs",
    "Promotional materials and specials boards",
    "Kitchen equipment labeling",
    "Staff name tags and uniforms",
    "Outdoor dining signage",
    "Food safety and compliance labels",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/restaurant-brewery-items.png"
              alt="Restaurant and brewery laser engraving - custom glassware, menu boards, table numbers, and promotional materials"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">Restaurant Laser Services</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Create an inviting dining atmosphere with custom laser-cut menu boards, signage, and promotional materials
              designed specifically for restaurants and food service establishments. Our durable, easy-to-clean
              materials are perfect for busy restaurant environments.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From elegant fine dining establishments to casual cafes, we help restaurants communicate their brand and
              menu offerings with style and clarity that enhances the customer experience.
            </p>
          </div>

          <Card className="mb-12 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Our Restaurant Services</CardTitle>
              <CardDescription>Custom solutions for food service businesses</CardDescription>
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
                src="/images/restaurant-table-number.png"
                alt="Restaurant table number signage with laser engraved wood design"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/restaurant-brewery-items.png"
                alt="Custom restaurant and brewery items including engraved glassware and promotional materials"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-4">Enhance Your Restaurant's Appeal</h2>
            <p className="text-lg text-gray-700 mb-6">
              Contact us to discuss custom signage solutions for your restaurant
            </p>
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]">
              <Link href="/contact">Get Restaurant Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
