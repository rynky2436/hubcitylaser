import Link from "next/link"
import Image from "next/image"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#002B5C] text-white py-8 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <Link href="/" className="mb-4" prefetch={false}>
            <Image
              src="/images/ez-engrave-everything-logo.png"
              alt="EZ Engrave Everything Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
              sizes="(max-width: 768px) 150px, 180px"
            />
            <span className="sr-only">EZ Engrave Everything</span>
          </Link>
          <p className="text-[#A5ACAF] text-sm">Precision laser engraving solutions for businesses.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-[#A5ACAF]" prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#A5ACAF]" prefetch={false}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/gifts" className="hover:text-[#A5ACAF]" prefetch={false}>
                Gifts
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-[#A5ACAF]" prefetch={false}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#A5ACAF]" prefetch={false}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Industries</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/medical" className="hover:text-[#A5ACAF]" prefetch={false}>
                Medical
              </Link>
            </li>
            <li>
              <Link href="/professional" className="hover:text-[#A5ACAF]" prefetch={false}>
                Professional
              </Link>
            </li>
            <li>
              <Link href="/restaurants" className="hover:text-[#A5ACAF]" prefetch={false}>
                Restaurants
              </Link>
            </li>
            <li>
              <Link href="/real-estate" className="hover:text-[#A5ACAF]" prefetch={false}>
                Real Estate
              </Link>
            </li>
            <li>
              <Link href="/agriculture" className="hover:text-[#A5ACAF]" prefetch={false}>
                Agriculture
              </Link>
            </li>
            <li>
              <Link href="/retail" className="hover:text-[#A5ACAF]" prefetch={false}>
                Retail
              </Link>
            </li>
            <li>
              <Link href="/industrial" className="hover:text-[#A5ACAF]" prefetch={false}>
                Industrial
              </Link>
            </li>
            <li>
              <Link href="/tech" className="hover:text-[#A5ACAF]" prefetch={false}>
                Tech
              </Link>
            </li>
            <li>
              <Link href="/hospitality" className="hover:text-[#A5ACAF]" prefetch={false}>
                Hospitality
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
          <div className="flex space-x-4">
            <Link href="#" className="text-[#A5ACAF] hover:text-white" prefetch={false}>
              <FacebookIcon className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-[#A5ACAF] hover:text-white" prefetch={false}>
              <InstagramIcon className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-[#A5ACAF] hover:text-white" prefetch={false}>
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <p className="text-[#A5ACAF] text-sm mt-4">
            123 Laser Lane, Engraveville, MD 12345
            <br />
            (123) 456-7890
            <br />
            info@ezengrave.com
          </p>
        </div>
      </div>
      <div className="border-t border-[#A5ACAF] mt-8 pt-6 text-center text-sm text-[#A5ACAF]">
        &copy; {new Date().getFullYear()} EZ Engrave Everything. All rights reserved.
      </div>
    </footer>
  )
}
