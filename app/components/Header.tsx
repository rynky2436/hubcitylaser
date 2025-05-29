"use client"

import Link from "next/link"
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
      <nav className="container-max">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            Hub City Laser
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-hub-silver transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="hover:text-hub-silver transition-colors">Industries</button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-hub-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {industries.map((industry) => (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="block px-4 py-2 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
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

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="block py-2 hover:text-hub-silver">
              Home
            </Link>
            {industries.map((industry) => (
              <Link key={industry.href} href={industry.href} className="block py-2 hover:text-hub-silver">
                {industry.name}
              </Link>
            ))}
            <Link href="/gifts" className="block py-2 hover:text-hub-silver">
              Gifts
            </Link>
            <Link href="/services" className="block py-2 hover:text-hub-silver">
              Services
            </Link>
            <Link href="/contact" className="block py-2 hover:text-hub-silver">
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
