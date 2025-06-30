import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import HeroSection from "../components/HeroSection"

export const metadata: Metadata = {
  title: "Personalized Gifts & Home Items | Engrave Everything",
  description:
    "Custom laser-engraved gifts for weddings, retirements, and special occasions. Cutting boards, tumblers, home décor, pet tags, and personalized items.",
}

export default function GiftsPage() {
  const giftCategories = [
    {
      title: "Wedding Gifts",
      image: "/images/real-estate-housewarming-gifts.png",
      items: [
        "Custom cutting boards",
        "Personalized picture frames",
        "Engraved wine glasses",
        "Wedding date keepsakes",
      ],
    },
    {
      title: "Retirement Gifts",
      image: "/images/professional-executive-office.png",
      items: ["Achievement plaques", "Personalized desk accessories", "Custom photo displays", "Memory books"],
    },
    {
      title: "Home Décor",
      image: "/images/real-estate-client-gifts.png",
      items: ["Custom wall art", "Personalized signs", "Family name displays", "Decorative plaques"],
    },
    {
      title: "Pet Accessories",
      image: "/images/agriculture-tool-marking.png",
      items: ["Custom pet tags", "Personalized food bowls", "Pet memorial plaques", "Collar nameplates"],
    },
  ]

  return (
    <>
      <HeroSection
        title="Personalized Gifts & Home Items"
        description="Create lasting memories with custom laser-engraved gifts perfect for weddings, retirements, special occasions, and everyday home use."
        backgroundImage="/images/real-estate-housewarming-gifts.png"
      />

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue mb-8 text-center">Our Gift Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {giftCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={`${category.title} laser engraved gifts examples`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hub-blue mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-hub-blue rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-hub-blue text-hub-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Popular Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/real-estate-housewarming-gifts.png"
                    alt="Custom cutting boards laser engraved"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4 className="font-semibold mb-2">Cutting Boards</h4>
                <p className="text-blue-100">Custom engraved bamboo and hardwood cutting boards</p>
              </div>
              <div>
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/hospitality-personalized-accessories.png"
                    alt="Personalized tumblers and drinkware laser engraved"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4 className="font-semibold mb-2">Tumblers</h4>
                <p className="text-blue-100">Personalized stainless steel and glass tumblers</p>
              </div>
              <div>
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                  <Image
                    src="/images/agriculture-tool-marking.png"
                    alt="Custom pet tags laser engraved"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4 className="font-semibold mb-2">Pet Tags</h4>
                <p className="text-blue-100">Durable custom pet identification tags</p>
              </div>
            </div>
            <Link href="/contact" className="btn-secondary">
              Order Custom Gifts
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
