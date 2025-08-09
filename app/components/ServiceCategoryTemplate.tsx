import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/site-config"

type DetailedService = {
  title: string
  description: string
  applications: string[]
  image: string
  alt: string
}

type Props = {
  title: string
  description: string
  keywords?: string
  heroDescription: string
  backgroundImage: string
  overviewTitle: string
  overviewParagraph1: string
  overviewParagraph2?: string
  overviewImage: string
  overviewImageAlt: string
  overviewFeature1Title: string
  overviewFeature1Description: string
  overviewFeature2Title: string
  overviewFeature2Description: string
  detailedServicesTitle: string
  detailedServices: DetailedService[]
  ctaTitle: string
  ctaDescription: string
  ctaButtonText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export default function ServiceCategoryTemplate(props: Props) {
  const primary = SITE_CONFIG.colors.primary

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[280px] w-full sm:h-[360px]">
          <Image
            src={props.backgroundImage || "/placeholder.svg"}
            alt="Category background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div className="relative mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl font-bold sm:text-4xl">{props.title}</h1>
              <p className="mt-3 text-sm sm:text-base">{props.heroDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: primary }}>
              {props.overviewTitle}
            </h2>
            <p className="mt-4 text-gray-700">{props.overviewParagraph1}</p>
            {props.overviewParagraph2 && <p className="mt-4 text-gray-700">{props.overviewParagraph2}</p>}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Feature title={props.overviewFeature1Title} description={props.overviewFeature1Description} />
              <Feature title={props.overviewFeature2Title} description={props.overviewFeature2Description} />
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src={props.overviewImage || "/placeholder.svg"}
              alt={props.overviewImageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detailed services */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold" style={{ color: primary }}>
            {props.detailedServicesTitle}
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {props.detailedServices.map((svc) => (
              <article key={svc.title} className="rounded-lg border bg-white p-6">
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-md">
                  <Image src={svc.image || "/placeholder.svg"} alt={svc.alt} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: primary }}>
                  {svc.title}
                </h3>
                <p className="mt-2 text-gray-700">{svc.description}</p>
                <ul className="mt-4 list-inside list-disc text-gray-700">
                  {svc.applications.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-200">
          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-bold" style={{ color: primary }}>
                {props.ctaTitle}
              </h2>
              <p className="mt-2 text-gray-700">{props.ctaDescription}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:justify-end">
              <a href={props.ctaLink}>
                <Button className="bg-[#002B5C] hover:bg-[#001F43]">{props.ctaButtonText}</Button>
              </a>
              {props.secondaryCtaText && props.secondaryCtaLink && (
                <Link
                  href={props.secondaryCtaLink}
                  className="text-sm font-medium underline"
                  style={{ color: primary }}
                >
                  {props.secondaryCtaText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-md border p-4">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-700">{description}</p>
    </div>
  )
}
