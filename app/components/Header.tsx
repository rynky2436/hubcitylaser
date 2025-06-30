"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MenuIcon, ChevronDownIcon, PhoneIcon } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const industries = [
    { name: "Medical", href: "/medical" },
    { name: "Professional", href: "/professional" },
    { name: "Restaurants", href: "/restaurants" },
    { name: "Real Estate", href: "/real-estate" },
    { name: "Agriculture", href: "/agriculture" },
    { name: "Retail", href: "/retail" },
    { name: "Industrial", href: "/industrial" },
    { name: "Tech", href: "/tech" },
    { name: "Hospitality", href: "/hospitality" },
  ]

  const services = [
    { name: "Business Signage", href: "/services/business-signage" },
    { name: "Awards & Recognition", href: "/services/awards-recognition" },
    { name: "Industrial Identification", href: "/services/industrial-identification" },
    { name: "Promotional Items", href: "/services/promotional-items" },
    { name: "Personalized Gifts", href: "/services/personalized-gifts" },
  ]

  return (
    <header className="bg-[#002B5C] text-white py-4 px-6 flex items-center justify-between shadow-md">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image
          src="/images/ez-engrave-everything-logo.png"
          alt="EZ Engrave Everything Logo"
          width={180}
          height={40}
          className="h-10 w-auto"
          priority
          sizes="(max-width: 768px) 150px, 180px"
        />
        <span className="sr-only">EZ Engrave Everything</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="hover:text-[#A5ACAF]" prefetch={false}>
          Home
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-white hover:text-[#A5ACAF] focus:outline-none">
              Industries
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-[#002B5C] shadow-lg">
            {industries.map((industry) => (
              <DropdownMenuItem key={industry.name}>
                <Link href={industry.href} className="block w-full py-2 px-4 hover:bg-gray-100" prefetch={false}>
                  {industry.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-white hover:text-[#A5ACAF] focus:outline-none">
              Services
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white text-[#002B5C] shadow-lg">
            {services.map((service) => (
              <DropdownMenuItem key={service.name}>
                <Link href={service.href} className="block w-full py-2 px-4 hover:bg-gray-100" prefetch={false}>
                  {service.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/gifts" className="hover:text-[#A5ACAF]" prefetch={false}>
          Gifts
        </Link>
        <Link href="/blog" className="hover:text-[#A5ACAF]" prefetch={false}>
          Blog
        </Link>
        <Link href="/contact" className="hover:text-[#A5ACAF]" prefetch={false}>
          Contact
        </Link>
      </nav>

      <Button className="hidden md:flex bg-[#A5ACAF] text-[#002B5C] hover:bg-white hover:text-[#002B5C] font-bold py-2 px-4 rounded-full transition-colors">
        <PhoneIcon className="mr-2 h-4 w-4" />
        Call Now
      </Button>

      {/* Mobile Navigation */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-[#002B5C] text-white w-[250px] sm:w-[300px] p-6">
          <div className="flex flex-col gap-4">
            <Link href="/" className="hover:text-[#A5ACAF]" onClick={() => setIsMobileMenuOpen(false)} prefetch={false}>
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#A5ACAF] focus:outline-none justify-start pl-0"
                >
                  Industries
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-[#002B5C] shadow-lg">
                {industries.map((industry) => (
                  <DropdownMenuItem key={industry.name}>
                    <Link
                      href={industry.href}
                      className="block w-full py-2 px-4 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                      prefetch={false}
                    >
                      {industry.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#A5ACAF] focus:outline-none justify-start pl-0"
                >
                  Services
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-[#002B5C] shadow-lg">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name}>
                    <Link
                      href={service.href}
                      className="block w-full py-2 px-4 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                      prefetch={false}
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/gifts"
              className="hover:text-[#A5ACAF]"
              onClick={() => setIsMobileMenuOpen(false)}
              prefetch={false}
            >
              Gifts
            </Link>
            <Link
              href="/blog"
              className="hover:text-[#A5ACAF]"
              onClick={() => setIsMobileMenuOpen(false)}
              prefetch={false}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#A5ACAF]"
              onClick={() => setIsMobileMenuOpen(false)}
              prefetch={false}
            >
              Contact
            </Link>
            <Button className="bg-[#A5ACAF] text-[#002B5C] hover:bg-white hover:text-[#002B5C] font-bold py-2 px-4 rounded-full transition-colors mt-4">
              <PhoneIcon className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
