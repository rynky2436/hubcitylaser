import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Personalized Gifts & Home Items - Hub City Engraving",
  description:
    "Custom gifts for weddings, retirements, cutting boards, tumblers, home décor, and pet tags. Personalized laser engraving services.",
}

export default function GiftsPage() {
  const giftCategories = [
    {
      title: "Wedding & Special Events",
      items: ["Custom wedding favors", "Personalized ceremony signs", "Guest book alternatives", "Anniversary gifts"],
      image: "/images/gifts-watch-engraving.png",
    },
    {
      title: "Retirement & Recognition",
      items: ["Retirement plaques", "Service awards", "Achievement recognition", "Career milestone gifts"],
      image: "/images/corporate-awards.png",
    },
    {
      title: "Home & Kitchen",
      items: ["Custom cutting boards", "Personalized tumblers", "Engraved coasters", "Kitchen utensil sets"],
      image: "/images/gifts-knife-engraving.png",
    },
    {
      title: "Home Décor",
      items: ["Custom wall art", "Personalized signs", "Family name displays", "Decorative plaques"],
      image: "/images/gifts-slate-coasters.png",
    },
    {
      title: "Pet Accessories",
      items: ["Custom pet tags", "Personalized pet bowls", "Pet memorial plaques", "Pet name signs"],
      image: "/images/pet-accessories.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/gifts-slate-coasters.png"
              alt="Personalized laser engraved gifts - slate coasters with custom home and entertaining messages"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <h1 className="text-4xl font-bold text-[#002B5C] mb-8">Personalized Gifts & Home Items</h1>

          <div className="prose prose-lg mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Create meaningful, lasting memories with custom laser-engraved gifts and home items. Hub City Engraving
              specializes in personalized products that celebrate life's special moments, from weddings and retirements
              to everyday home décor that reflects your unique style.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our precision laser engraving transforms ordinary items into treasured keepsakes that recipients will
              cherish for years to come. Every piece is crafted with attention to detail and quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {giftCategories.map((category, index) => (
              <Card key={index} className="border-[#A5ACAF] overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#002B5C]">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#002B5C] rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mb-12 bg-gray-50 border-[#A5ACAF]">
            <CardHeader>
              <CardTitle className="text-[#002B5C]">Custom Design Process</CardTitle>
              <CardDescription>How we bring your personalized gift ideas to life</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#002B5C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="font-semibold text-[#002B5C] mb-2">Consultation</h3>
                  <p className="text-gray-700">Discuss your vision and requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#002B5C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="font-semibold text-[#002B5C] mb-2">Design</h3>
                  <p className="text-gray-700">Create custom artwork and layout</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#002B5C] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="font-semibold text-[#002B5C] mb-2">Creation</h3>
                  <p className="text-gray-700">Precision laser engraving and finishing</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/corporate-awards.png"
                alt="Corporate recognition awards including employee of the month, retirement plaques, and service awards"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/pet-accessories.png"
                alt="Custom pet accessories including engraved collars, ID tags, and personalized pet identification"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <div className="text-center bg-[#002B5C] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to Create Something Special?</h2>
            <p className="text-lg mb-6 text-[#A5ACAF]">
              Contact us to discuss your personalized gift ideas and place your custom order
            </p>
            <Button asChild size="lg" className="bg-[#A5ACAF] text-[#002B5C] hover:bg-white">
              <Link href="/contact">Start Your Custom Order</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
