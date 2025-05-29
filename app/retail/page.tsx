import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Retail Laser Services - Hub City Laser",
  description:
    "Store signage, promotional items, and displays for retail businesses, shops, and commercial establishments.",
}

export default function RetailPage() {
  const services = [
    "Store front signage and branding",
    "Product displays and shelf talkers",
    "Promotional signs and sale banners",
    "Price tags and product labels",
    "Customer service signage",
    "Inventory management tags",
    "Point of sale materials",
    "Custom retail fixtures",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1200&query=retail%20store%20laser%20signage%20displays"
              alt="Retail laser services"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">Retail Laser Services</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Attract customers and boost sales with eye-catching retail signage, displays, and promotional materials.
              Hub City Laser helps retail businesses create compelling visual merchandising that drives customer
              engagement and enhances the shopping experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From storefront signs to in-store displays, our precision laser services help retailers communicate their
              brand message clearly and professionally while maximizing visual impact.
            </p>
          </div>

          <Card className="mb-12 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Our Retail Services</CardTitle>
              <CardDescription>Visual merchandising solutions for retail businesses</CardDescription>
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
                src="/placeholder.svg?height=300&width=500&query=retail%20storefront%20signage"
                alt="Retail storefront signage"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500&query=retail%20product%20display%20signs"
                alt="Retail product display signs"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-4">Enhance Your Retail Environment</h2>
            <p className="text-lg text-gray-700 mb-6">
              Create compelling displays that drive sales and customer engagement
            </p>
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]">
              <Link href="/contact">Get Retail Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
