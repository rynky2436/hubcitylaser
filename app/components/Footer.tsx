import Link from "next/link"
import Image from "next/image"
import { SITE_CONFIG, telHref, mailtoHref } from "@/lib/site-config"

export default function Footer() {
  const colors = SITE_CONFIG?.colors ?? {
    primary: "#002B5C",
    secondary: "#A5ACAF",
    background: "#FFFFFF",
  }

  return (
    <footer className="mt-16 border-t bg-white" style={{ borderColor: colors.secondary }}>
      <div className="mx-auto w-full max-w-7xl px-4 py-10 grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="col-span-1 flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={SITE_CONFIG.brand.logo || "/placeholder.svg"}
              alt={SITE_CONFIG.brand.alt}
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <span className="text-lg font-semibold" style={{ color: colors.primary }}>
              {SITE_CONFIG.brand.name}
            </span>
          </Link>
          <p className="text-sm text-gray-600">
            Precision laser engraving for individuals and businesses across the region.
          </p>
          <div className="text-sm">
            <a href={telHref(SITE_CONFIG.contact.phone)} className="block hover:underline">
              {SITE_CONFIG.contact.phone}
            </a>
            <a href={mailtoHref(SITE_CONFIG.contact.email)} className="block hover:underline">
              {SITE_CONFIG.contact.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide" style={{ color: colors.primary }}>
            Navigation
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {SITE_CONFIG.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide" style={{ color: colors.primary }}>
            Services
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/services/business-signage" className="hover:underline">
                Business Signage & Displays
              </Link>
            </li>
            <li>
              <Link href="/services/awards-recognition" className="hover:underline">
                Awards & Recognition
              </Link>
            </li>
            <li>
              <Link href="/services/industrial-identification" className="hover:underline">
                Industrial Identification
              </Link>
            </li>
            <li>
              <Link href="/services/personalized-gifts" className="hover:underline">
                Personalized Gifts
              </Link>
            </li>
            <li>
              <Link href="/services/promotional-items" className="hover:underline">
                Promotional Items
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide" style={{ color: colors.primary }}>
            Get in touch
          </h3>
          <p className="mt-3 text-sm text-gray-600">
            Questions about an order or event? We offer mobile/on‑site engraving and ship completed items throughout our
            service area.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={SITE_CONFIG.cta.bookConsultationUrl}
              className="inline-block rounded-md px-4 py-2 text-center text-sm font-medium text-white"
              style={{ backgroundColor: colors.primary }}
            >
              {SITE_CONFIG.cta.bookConsultationText}
            </a>
            <a
              href={mailtoHref(SITE_CONFIG.contact.email)}
              className="inline-block rounded-md border px-4 py-2 text-center text-sm font-medium"
              style={{ borderColor: colors.secondary }}
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-gray-500" style={{ borderColor: colors.secondary }}>
        © {new Date().getFullYear()} {SITE_CONFIG.brand.name}. All rights reserved.
      </div>
    </footer>
  )
}
