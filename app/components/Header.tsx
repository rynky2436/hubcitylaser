"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const industries = [
    { name: "Medical", href: "/medical" },
    { name: "Professional", href: "/professional" },
    { name: "Restaurants", href: "/restaurants" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Agriculture", href: "/agriculture" },
    { name: "Retail", href: "/retail" },
    { name: "Industrial", href: "/industrial" },
    { name: "Technology", href: "/tech" },
    { name: "Hospitality", href: "/hospitality" },
  ]

  return (
    <header className="bg-hub-blue text-hub-white shadow-lg">
      <nav className="container-max" aria-label="Main Navigation">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3" aria-label="Engrave Everything - Home">
            <div className="relative w-12 h-12 md:w-16 md:h-16">
              <Image
                src="/images/hub-city-logo-light.png"
                alt="Hub City Engraving Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-xl md:text-2xl font-bold">Engrave Everything</div>
              <div className="text-xs md:text-sm text-hub-silver">Engraving</div>
            </div>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-hub-silver transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button
                className="hover:text-hub-silver transition-colors"
                aria-expanded={isMenuOpen}
                aria-haspopup="true"
              >
                Industries
              </button>
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-hub-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                role="menu"
              >
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                    role="menuitem"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/gifts" className="hover:text-hub-silver transition-colors">
              Gifts
            </Link>
            <Link href="/services" className="hover:text-hub-silver transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-hub-silver transition-colors">
              Contact
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4" role="menu">
            <Link href="/" className="block py-2 hover:text-hub-silver" role="menuitem">
              Home
            </Link>
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="block py-2 hover:text-hub-silver"
                role="menuitem"
              >
                {industry.name}
              </Link>
            ))}
            <Link href="/gifts" className="block py-2 hover:text-hub-silver" role="menuitem">
              Gifts
            </Link>
            <Link href="/services" className="block py-2 hover:text-hub-silver" role="menuitem">
              Services
            </Link>
            <Link href="/contact" className="block py-2 hover:text-hub-silver" role="menuitem">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
