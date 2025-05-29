import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Professional Laser Services - Hub City Engraving",
  description:
    "Custom signage, nameplates, and professional marking solutions for offices, businesses, and corporate environments.",
}

export default function ProfessionalPage() {
  const services = [
    "Executive nameplates and desk signs",
    "Office door signs and directories",
    "Corporate awards and recognition plaques",
    "Professional business signage",
    "Conference room identification",
    "Employee name badges",
    "Company logos and branding",
    "Professional presentation materials",
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/corporate-awards.png"
              alt="Professional corporate awards - employee recognition, retirement plaques, and service milestone awards"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">Professional Laser Services</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Elevate your professional environment with custom laser-cut and engraved signage, nameplates, and
              corporate materials. Hub City Engraving specializes in creating sophisticated, professional-grade
              solutions that reflect your company's commitment to quality and attention to detail.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From executive offices to corporate lobbies, our precision laser services help create a professional
              atmosphere that impresses clients and motivates employees.
            </p>
          </div>

          <Card className="mb-12 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Our Professional Services</CardTitle>
              <CardDescription>Custom solutions for professional environments</CardDescription>
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
                src="/images/professional-office-awards.png"
                alt="Professional office door signs, executive nameplates, and achievement awards"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/professional-office-signage.png"
                alt="Corporate office signage including manager nameplates and boardroom identification"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-4">Enhance Your Professional Image</h2>
            <p className="text-lg text-gray-700 mb-6">
              Let us help you create a professional environment that reflects your company's values
            </p>
            <Button asChild size="lg" className="bg-[#002B5C] hover:bg-[#A5ACAF] hover:text-[#002B5C]">
              <Link href="/contact">Get Professional Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
