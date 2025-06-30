import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Holiday Gifts & Decor | Custom Laser Engraving for Every Season",
  description:
    "Find unique laser-engraved holiday gifts and festive decor for Christmas, Valentine's Day, Mother's/Father's Day, Thanksgiving, and Easter. Personalized items for every celebration.",
  keywords:
    "holiday gifts, engraved decor, personalized Christmas ornaments, Valentine's Day gifts, Mother's Day gifts, Father's Day gifts, Thanksgiving decor, Easter gifts, seasonal laser engraving",
}

export default function HolidayGiftsDecorPage() {
  const holidayCategories = [
    {
      name: "Christmas",
      description: "Custom ornaments, festive decor, and personalized gifts for the holiday season.",
      image: "/images/events-christmas.png",
      link: "/events-occasions/holiday-gifts-decor/christmas",
    },
    {
      name: "Valentine's Day",
      description: "Heartfelt engraved gifts and romantic decor for your loved one.",
      image: "/images/events-valentines-day.png",
      link: "/events-occasions/holiday-gifts-decor/valentines-day",
    },
    {
      name: "Mother's & Father's Day",
      description: "Thoughtful personalized gifts to show appreciation for parents.",
      image: "/images/events-mothers-fathers-day.png",
      link: "/events-occasions/holiday-gifts-decor/mothers-fathers-day",
    },
    {
      name: "Thanksgiving",
      description: "Engraved serving ware, decor, and host gifts for your festive feast.",
      image: "/images/events-thanksgiving.png",
      link: "/events-occasions/holiday-gifts-decor/thanksgiving",
    },
    {
      name: "Easter",
      description: "Charming engraved decor and personalized gifts for spring celebrations.",
      image: "/images/events-easter.png",
      link: "/events-occasions/holiday-gifts-decor/easter",
    },
  ]

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12">
        <Image
          src="/images/events-holiday.png"
          alt="Holiday Gifts & Decor Laser Engraving"
          width={1200}
          height={400}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-lg"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-hub-blue mb-4">Holiday Gifts & Decor</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Make every holiday season extra special with custom laser-engraved gifts and festive decor. From personalized
          ornaments to unique presents for loved ones, Hub City Laser helps you add a touch of magic and personalization
          to your celebrations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hub-blue mb-8 text-center">Explore Holiday Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holidayCategories.map((category, index) => (
            <Link key={index} href={category.link}>
              <Card className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-hub-blue mb-2">{category.name}</h3>
                  <p className="text-gray-700 text-sm">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hub-blue mb-6">Personalize Your Holiday Season</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Whether it's a festive gathering or a heartfelt gift, our custom laser engraving services add a unique touch.
          Contact us to create your perfect holiday items.
        </p>
        <Button asChild className="bg-hub-blue text-hub-white hover:bg-hub-blue/90 px-8 py-3 text-lg">
          <Link href="/contact">Get a Custom Quote</Link>
        </Button>
      </section>
    </main>
  )
}
