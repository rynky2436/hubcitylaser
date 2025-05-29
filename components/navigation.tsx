"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false)

  const mainNavItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gifts", href: "/gifts" },
    { name: "Contact", href: "/contact" },
  ]

  const industryItems = [
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
    <nav className="bg-[#002B5C] shadow-md border-b border-[#A5ACAF]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/hub-city-logo-light.png"
              alt="Hub City Engraving - Hagerstown, Maryland"
              width={120}
              height={120}
              className="h-16 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-white hover:text-[#A5ACAF] transition-colors">
                {item.name}
              </Link>
            ))}

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-white hover:text-[#A5ACAF] transition-colors"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                <span>Industries</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isIndustriesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-48 bg-white border border-[#A5ACAF] rounded-md shadow-lg z-50"
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <div className="py-2">
                    {industryItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-[#002B5C] hover:bg-gray-50 hover:text-[#A5ACAF] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:text-[#A5ACAF]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[#A5ACAF]">
            <div className="flex flex-col space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-[#A5ACAF] py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Industries Section */}
              <div className="py-2">
                <div className="font-semibold text-white mb-2">Industries</div>
                <div className="pl-4 space-y-2">
                  {industryItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-white hover:text-[#A5ACAF] py-1 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
