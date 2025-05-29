import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[#002B5C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/hub-city-logo-light.png"
                alt="Hub City Engraving - Hagerstown, Maryland"
                width={120}
                height={120}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-[#A5ACAF]">
              Precision laser services for every industry. Quality, reliability, and expertise you can trust.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#A5ACAF]">Industries</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/medical" className="hover:text-[#A5ACAF] transition-colors">
                  Medical
                </Link>
              </li>
              <li>
                <Link href="/professional" className="hover:text-[#A5ACAF] transition-colors">
                  Professional
                </Link>
              </li>
              <li>
                <Link href="/restaurants" className="hover:text-[#A5ACAF] transition-colors">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link href="/retail" className="hover:text-[#A5ACAF] transition-colors">
                  Retail
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#A5ACAF]">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:text-[#A5ACAF] transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/gifts" className="hover:text-[#A5ACAF] transition-colors">
                  Personalized Gifts
                </Link>
              </li>
              <li>Laser Cutting</li>
              <li>Laser Engraving</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#A5ACAF]">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-[#A5ACAF] transition-colors">
                  Get Quote
                </Link>
              </li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@hubcityengraving.com</li>
              <li>Hagerstown, Maryland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#A5ACAF] mt-8 pt-8 text-center text-[#A5ACAF]">
          <p>&copy; 2024 Hub City Engraving. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
