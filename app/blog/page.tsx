import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Hub City Laser Engraving",
  description:
    "Stay updated with laser engraving news & solutions from Engrave Everything. Explore articles on tech, industry applications & B2B best practices. Read our blog!",
}

const blogPosts = [
  {
    slug: "precision-laser-engraving-solutions",
    title: "Precision Laser Engraving Solutions for B2B: UID Tags, Medical Devices & More",
    description:
      "Discover high-performance laser engraving solutions for B2B clients, including UID tags for medical devices, industrial barcoding, and corporate branding.",
    image: "/images/uid-laser-marking.png",
    alt: "Precision UID Corporate Laser Marking Solutions",
  },
  {
    slug: "your-business-deserves-the-right-laser",
    title: "Your Business Deserves the Right Laser—Here’s Why It Matters",
    description:
      "Learn how EZ Engrave Everything's fiber, CO₂, and UV lasers empower diverse industries with precision marking for metals, natural materials, and delicate components.",
    image: "/images/industrial-lasers-benefit-business.png",
    alt: "Why Our Industrial Lasers Benefit Your Business",
  },
]

export default function BlogIndexPage() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-[#002B5C] mb-8 text-center">Our Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group" prefetch={false}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105">
              <div className="relative w-full h-48">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#002B5C] mb-2 group-hover:underline">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
