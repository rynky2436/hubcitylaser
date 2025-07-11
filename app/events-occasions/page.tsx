import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Events & Occasions | Custom Laser Engraving for Special Moments",
  description:
    "Discover custom laser-engraved signage, gifts, awards, and décor tailored for life’s most meaningful events—personal and professional. Quality craftsmanship and fast turnaround for weddings, retirements, corporate events, and more.",
  keywords:
    "laser engraving events, custom event signs, personalized gifts for events, engraved awards, event decor, wedding engraving, corporate event engraving, baby shower gifts, anniversary gifts, graduation gifts, holiday decor",
}

export default function EventsOccasionsPage() {
  const eventCategories = [
    {
      name: "Weddings",
      description: "Custom signs, gifts, and decor for your special day.",
      image: "/images/events-weddings.png",
      link: "/events-occasions/weddings",
    },
    {
      name: "Retirement Parties",
      description: "Honor years of service with engraved plaques and gifts.",
      image: "/images/events-retirement.png",
      link: "/events-occasions/retirement-parties",
    },
    {
      name: "Baby Showers & Gender Reveals",
      description: "Celebrate new life with unique custom items and keepsakes.",
      image: "/images/events-baby-gender.png",
      link: "/events-occasions/baby-showers-gender-reveals",
    },
    {
      name: "Anniversaries",
      description: "Commemorate milestones with personalized gifts and keepsakes.",
      image: "/images/events-anniversaries.png",
      link: "/events-occasions/anniversaries",
    },
    {
      name: "Graduations",
      description: "Celebrate academic achievements with custom awards and gifts.",
      image: "/images/events-graduations.png",
      link: "/events-occasions/graduations",
    },
    {
      name: "Corporate Events",
      description: "Professional awards, branded swag, and signage for business milestones.",
      image: "/images/events-corporate.png",
      link: "/events-occasions/corporate-events",
    },
    {
      name: "Trade Shows & Conferences",
      description: "Boost brand visibility with promotional products and booth signage.",
      image: "/images/events-trade-shows.png",
      link: "/events-occasions/trade-shows-conferences",
    },
    {
      name: "Religious Ceremonies",
      description: "Faith-based personalized items and keepsakes for special occasions.",
      image: "/images/events-religious.png",
      link: "/events-occasions/religious-ceremonies",
    },
    {
      name: "Quinceañeras & Sweet 16s",
      description: "Personalized decor and keepsakes for coming-of-age celebrations.",
      image: "/images/events-quinceaneras.png",
      link: "/events-occasions/quinceaneras-sweet-16s",
    },
    {
      name: "Holiday Gifts & Decor",
      description: "Seasonal gift ideas and themed decor for all major holidays.",
      image: "/images/events-holiday.png",
      link: "/events-occasions/holiday-gifts-decor",
    },
    {
      name: "Pet Memorials & Celebrations",
      description: "Custom tributes and accessories to honor your beloved pets.",
      image: "/images/events-pet-memorials.png",
      link: "/events-occasions/pet-memorials-celebrations",
    },
    {
      name: "School & Sports Events",
      description: "Trophies, medals, and personalized gifts for academic and athletic achievements.",
      image: "/images/events-school-sports.png",
      link: "/events-occasions/school-sports-events",
    },
  ]

  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12">
        <Image
          src="/images/events-occasions.png"
          alt="Events & Occasions Laser Engraving"
          width={1200}
          height={400}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-lg"
          sizes="100vw" // Added sizes prop
        />
        <h1 className="text-4xl md:text-5xl font-bold text-hub-blue mb-4">Events & Occasions</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Hub City Laser, we understand that life is full of meaningful moments, both personal and professional. We
          specialized in providing custom laser-engraved signage, gifts, awards, and décor tailored to make these events
          truly unforgettable. With a wide variety of customizable options, quality craftsmanship, and fast turnaround,
          we help you add that perfect personalized touch.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hub-blue mb-8 text-center">Explore Our Event Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventCategories.map((category, index) => (
            <Link key={index} href={category.link}>
              <Card className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={
                    category.image || `/placeholder.svg?height=250&width=400&query=${encodeURIComponent(category.name)}`
                  }
                  alt={category.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Added sizes prop
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
        <h2 className="text-3xl md:text-4xl font-bold text-hub-blue mb-6">Make Every Moment Memorable</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Whether it's a grand celebration or an intimate gathering, our custom laser engraving services ensure your
          event stands out. Contact us today to discuss your unique needs.
        </p>
        <Button asChild className="bg-hub-blue text-hub-white hover:bg-hub-blue/90 px-8 py-3 text-lg">
          <Link href="/contact">Get a Custom Quote</Link>
        </Button>
      </section>
    </main>
  )
}
