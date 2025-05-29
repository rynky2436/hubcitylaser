import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Real Estate Laser Services - Hub City Engraving",
  description:
    "Property signs, nameplates, and marketing materials for real estate professionals and property management companies.",
}

export default function RealEstatePage() {
  const services = [
    "Property for sale and lease signs",
    "Real estate agent nameplates",
    "Office building directories",
    "Property management signage",
    "Open house and showing signs",
    "Real estate marketing materials",
    "Property identification markers",
    "Custom realtor branding materials",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/real-estate-promotional.png"
              alt="Real estate laser engraving services - custom signage, promotional items, and closing gifts"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">Real Estate Laser Services</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Make a lasting impression in the competitive real estate market with professional, durable signage and
              marketing materials. Hub City Engraving provides weather-resistant signs and custom branding solutions
              that help real estate professionals stand out and attract potential buyers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our precision laser cutting and engraving services ensure your property signs and marketing materials
              maintain their professional appearance through all weather conditions.
            </p>
          </div>

          <Card className="mb-12 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Our Real Estate Services</CardTitle>
              <CardDescription>Professional signage for real estate professionals</CardDescription>
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
                src="/images/real-estate-professional.png"
                alt="Professional real estate nameplates, property signs, and realtor identification materials"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/real-estate-promotional.png"
                alt="Real estate promotional items including welcome signs and closing gifts"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-4">Boost Your Real Estate Marketing</h2>
            <p className="text-lg text-gray-700 mb-6">Get professional signage that helps you close more deals</p>
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]">
              <Link href="/contact">Get Real Estate Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
