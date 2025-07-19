import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface EventTemplateProps {
  title: string
  description: string
  keywords: string
  image: string
  intro: string
  sections: {
    heading: string
    content: string
    examples: {
      name: string
      description: string
      image: string
    }[]
  }[]
  ctaText: string
  ctaLink: string
}

export const generateMetadata = ({ title, description, keywords }: EventTemplateProps): Metadata => {
  return {
    title: title,
    description: description,
    keywords: keywords,
  }
}

export default function EventTemplate({
  title,
  description,
  keywords,
  image,
  intro,
  sections,
  ctaText,
  ctaLink,
}: EventTemplateProps) {
  const pageTitle = title.split("|")[0].trim()
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-12">
        <Image
          src={image || `/placeholder.svg?height=400&width=1200&query=${encodeURIComponent(pageTitle)}`}
          alt={pageTitle}
          width={1200}
          height={400}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-6 shadow-lg"
          sizes="100vw" // Added sizes prop
        />
        <h1 className="text-4xl md:text-5xl font-bold text-hub-blue dark:text-hub-white mb-4">{pageTitle}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">{intro}</p>
      </section>

      {sections.map((section, index) => (
        <section
          key={index}
          className={`py-16 px-8 rounded-lg my-8 ${index % 2 === 0 ? "bg-white" : "bg-slate-50 dark:bg-slate-900"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-hub-blue dark:text-hub-white mb-6 text-center">
            {section.heading}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-center mb-8">
            {section.content}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.examples.map((example, exIndex) => (
              <Card key={exIndex} className="bg-white dark:bg-slate-800 shadow-md rounded-lg overflow-hidden">
                <Image
                  src={
                    example.image || `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(example.name)}`
                  }
                  alt={example.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Added sizes prop
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-hub-blue dark:text-hub-white mb-2">{example.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{example.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}

      <section className="text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-bold text-hub-blue dark:text-hub-white mb-6">
          Ready to Create Something Special?
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Let Hub City Laser help you make your next event truly memorable with custom laser-engraved products.
        </p>
        <Button asChild className="bg-hub-blue text-hub-white hover:bg-hub-blue/90 px-8 py-3 text-lg">
          <Link href={ctaLink} target="_blank" rel="noopener noreferrer">
            {ctaText}
          </Link>
        </Button>
      </section>
    </main>
  )
}
