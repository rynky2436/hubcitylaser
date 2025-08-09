"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG, telHref, mailtoHref } from "@/lib/site-config"

export default function Header() {
  const [open, setOpen] = useState(false)

  const colors = SITE_CONFIG?.colors ?? {
    primary: "#002B5C",
    secondary: "#A5ACAF",
    background: "#FFFFFF",
  }

  return (
    <header className="w-full border-b" style={{ borderColor: colors.secondary }}>
      {/* Top contact bar */}
      <div
        className="hidden md:flex items-center justify-between px-4 lg:px-8 py-2 text-sm"
        style={{ backgroundColor: colors.primary, color: "#FFFFFF" }}
      >
        <div className="flex items-center gap-6">
          <a
            href={telHref(SITE_CONFIG.contact.phone)}
            className="flex items-center gap-2 hover:underline"
            aria-label={`Call ${SITE_CONFIG.contact.phone}`}
          >
            <Phone size={16} aria-hidden="true" />
            <span className="font-semibold">{SITE_CONFIG.contact.phone}</span>
          </a>
          <a
            href={mailtoHref(SITE_CONFIG.contact.email)}
            className="hidden sm:flex items-center gap-2 hover:underline"
            aria-label={`Email ${SITE_CONFIG.contact.email}`}
          >
            <Mail size={16} aria-hidden="true" />
            <span>{SITE_CONFIG.contact.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={telHref(SITE_CONFIG.contact.phone)} className="hidden lg:block" aria-label="Call us">
            <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
              <Phone className="mr-2 h-4 w-4" />
              {SITE_CONFIG.contact.phone}
            </Button>
          </a>
          <a href={SITE_CONFIG.cta.bookConsultationUrl} aria-label={SITE_CONFIG.cta.bookConsultationText}>
            <Button className="bg-white/10 border border-white text-white hover:bg-white/20" variant="outline">
              {SITE_CONFIG.cta.bookConsultationText}
            </Button>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-3 bg-white">
        <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
          <Image
            src={SITE_CONFIG.brand.logo || "/placeholder.svg"}
            alt={SITE_CONFIG.brand.alt}
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="text-lg font-semibold" style={{ color: colors.primary }}>
            {SITE_CONFIG.brand.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          {SITE_CONFIG.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm hover:underline text-gray-800">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          style={{ borderColor: "#E5E7EB", color: colors.primary }}
        >
          Menu
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div id="mobile-nav" className="md:hidden border-t bg-white px-4 py-3 space-y-3">
          <div className="flex flex-col">
            {SITE_CONFIG.nav.map((item) => (
              <Link key={item.href} href={item.href} className="py-2 text-base" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <a href={telHref(SITE_CONFIG.contact.phone)} className="w-full">
              <Button className="w-full" style={{ backgroundColor: colors.primary }}>
                <Phone className="mr-2 h-4 w-4" />
                Call {SITE_CONFIG.contact.phone}
              </Button>
            </a>
            <a href={SITE_CONFIG.cta.bookConsultationUrl} className="w-full">
              <Button className="w-full bg-transparent" variant="outline">
                {SITE_CONFIG.cta.bookConsultationText}
              </Button>
            </a>
            <a href={mailtoHref(SITE_CONFIG.contact.email)} className="text-center text-sm underline">
              {SITE_CONFIG.contact.email}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
