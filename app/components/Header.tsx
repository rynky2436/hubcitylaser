"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo, useState } from "react"
import { Phone, Mail, MenuIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { SITE_CONFIG, telHref, mailtoHref, NAV_EXPANDED } from "@/lib/site-config"

type NavChild = { label: string; href: string }
type NavItem = { label: string; href: string } | { label: string; children: NavChild[] }

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  const colors = SITE_CONFIG?.colors ?? {
    primary: "#002B5C",
    secondary: "#A5ACAF",
    background: "#FFFFFF",
    textOnPrimary: "#FFFFFF",
  }

  const phone = SITE_CONFIG?.contact?.phone ?? ""
  const email = SITE_CONFIG?.contact?.email ?? ""
  const logo = SITE_CONFIG?.brand?.logo ?? (SITE_CONFIG as any)?.assets?.logo ?? "/placeholder.svg"
  const brandName = SITE_CONFIG?.brand?.name ?? "Hub City Laser"
  const brandAlt = SITE_CONFIG?.brand?.alt ?? "Company logo"

  const nav: NavItem[] = useMemo(() => {
    if (Array.isArray(NAV_EXPANDED) && NAV_EXPANDED.length > 0) {
      return NAV_EXPANDED as unknown as NavItem[]
    }
    return [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ]
  }, [])

  return (
    // Ensure the header sits above the page so dropdowns overlay content
    <header className="relative z-50 w-full border-b" style={{ borderColor: colors.secondary }}>
      {/* Top contact bar */}
      <div className="hidden md:block" style={{ backgroundColor: colors.primary, color: "#FFFFFF" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-2 text-sm">
          <div className="flex items-center gap-6">
            {phone && (
              <a href={telHref(phone)} className="flex items-center gap-2 hover:underline" aria-label={`Call ${phone}`}>
                <Phone size={16} aria-hidden="true" />
                <span className="font-semibold">{phone}</span>
              </a>
            )}
            {email && (
              <a
                href={mailtoHref(email)}
                className="hidden sm:flex items-center gap-2 hover:underline"
                aria-label={`Email ${email}`}
              >
                <Mail size={16} aria-hidden="true" />
                <span>{email}</span>
              </a>
            )}
          </div>
          <div className="flex items-center gap-3">
            {phone && (
              <a href={telHref(phone)} className="hidden lg:block" aria-label="Call us">
                <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                  <Phone className="mr-2 h-4 w-4" />
                  {phone}
                </Button>
              </a>
            )}
            <a
              href={SITE_CONFIG?.cta?.bookConsultationUrl ?? "#"}
              aria-label={SITE_CONFIG?.cta?.bookConsultationText ?? "Book Consultation"}
            >
              <Button className="bg-white/10 border border-white text-white hover:bg-white/20" variant="outline">
                {SITE_CONFIG?.cta?.bookConsultationText ?? "Book Consultation"}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 py-3">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" aria-label="Go to homepage">
            <Image
              src={logo || "/placeholder.svg"}
              alt={brandAlt}
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
              priority
            />
            <span className="text-lg font-semibold tracking-wide" style={{ color: colors.primary }}>
              {brandName}
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center" aria-label="Primary">
            <NavigationMenu>
              <NavigationMenuList className="gap-10 xl:gap-14">
                {nav.map((item) => {
                  const isDropdown = (item as any).children
                  if (!isDropdown) {
                    const link = item as { label: string; href: string }
                    return (
                      <NavigationMenuItem key={link.label}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="inline-flex items-center rounded-md px-3 py-2 text-base font-normal tracking-wide"
                            style={{ color: colors.primary }}
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )
                  }

                  const dd = item as { label: string; children: NavChild[] }
                  return (
                    <NavigationMenuItem key={dd.label}>
                      <NavigationMenuTrigger
                        className="rounded-md px-3 py-2 text-base font-medium tracking-wide"
                        style={{ color: colors.primary, backgroundColor: "transparent" }}
                      >
                        {dd.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[560px] p-4 grid-cols-2 gap-2">
                          {dd.children.map((child) => (
                            <li key={child.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={child.href}
                                  className="block rounded-md px-3 py-2 text-sm hover:bg-gray-50 text-gray-900"
                                >
                                  {child.label}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            style={{ borderColor: "#E5E7EB", color: colors.primary }}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div id="mobile-nav" className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-3">
            <div className="flex flex-col">
              {nav.map((item) => {
                const isDropdown = (item as any).children
                if (!isDropdown) {
                  const link = item as { label: string; href: string }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="py-2 text-base"
                      onClick={() => setMobileOpen(false)}
                      style={{ color: colors.primary }}
                    >
                      {link.label}
                    </Link>
                  )
                }

                const dd = item as { label: string; children: NavChild[] }
                const isIndustries = dd.label === "Industries"
                const isServices = dd.label === "Services"
                const open = isIndustries ? mobileIndustriesOpen : isServices ? mobileServicesOpen : false
                const setOpen = isIndustries ? setMobileIndustriesOpen : isServices ? setMobileServicesOpen : () => {}

                return (
                  <div key={dd.label} className="py-2">
                    <button
                      className="w-full text-left text-base font-medium flex items-center justify-between"
                      onClick={() => setOpen((v: boolean) => !v)}
                      aria-expanded={open}
                      aria-controls={`mobile-${dd.label.toLowerCase()}`}
                      style={{ color: colors.primary }}
                    >
                      {dd.label}
                      <span className="ml-2 text-gray-500">{open ? "−" : "+"}</span>
                    </button>
                    {open && (
                      <div id={`mobile-${dd.label.toLowerCase()}`} className="mt-2 pl-3 flex flex-col gap-1">
                        {dd.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="py-1.5 text-sm text-gray-700"
                            onClick={() => {
                              setMobileOpen(false)
                              setOpen(false as any)
                            }}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="mt-3 flex flex-col gap-2">
              {phone && (
                <a href={telHref(phone)} className="w-full">
                  <Button className="w-full" style={{ backgroundColor: colors.primary, color: "#FFFFFF" }}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call {phone}
                  </Button>
                </a>
              )}
              <a href={SITE_CONFIG?.cta?.bookConsultationUrl ?? "#"} className="w-full">
                <Button className="w-full bg-transparent" variant="outline">
                  {SITE_CONFIG?.cta?.bookConsultationText ?? "Book Consultation"}
                </Button>
              </a>
              {email && (
                <a href={mailtoHref(email)} className="text-center text-sm underline">
                  {email}
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
