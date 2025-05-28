import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Personalized Gifts & Home Items | Hub City Laser",
  description:
    "Custom laser-engraved gifts for weddings, retirements, and special occasions. Cutting boards, tumblers, home décor, pet tags, and personalized items.",
}

export default function GiftsPage() {
  const giftCategories = [
    {
      title: "Wedding Gifts",
      items: [
        "Custom cutting boards",
        "Personalized picture frames",
        "Engraved wine glasses",
        "Wedding date keepsakes",
      ],
    },
    {
      title: "Retirement Gifts",
      items: ["Achievement plaques", "Personalized desk accessories", "Custom photo displays", "Memory books"],
    },
    {
      title: "Home Décor",
      items: ["Custom wall art", "Personalized signs", "Family name displays", "Decorative plaques"],
    },
    {
      title: "Pet Accessories",
      items: ["Custom pet tags", "Personalized food bowls", "Pet memorial plaques", "Collar nameplates"],
    },
  ]

  return (
    <>
      <section className="bg-hub-blue text-hub-white section-padding">
        <div className="container-max">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Personalized Gifts & Home Items</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Create lasting memories with custom laser-engraved gifts perfect for weddings, retirements, special
            occasions, and everyday home use.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-hub-blue mb-8 text-center">Our Gift Categories</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {giftCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
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
            ))}
          </div>

          <div className="bg-hub-blue text-hub-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Popular Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-2">Cutting Boards</h4>
                <p className="text-blue-100">Custom engraved bamboo and hardwood cutting boards</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tumblers</h4>
                <p className="text-blue-100">Personalized stainless steel and glass tumblers</p>
              </div>
              <div>
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
