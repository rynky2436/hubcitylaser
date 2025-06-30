import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#002B5C] text-white py-8 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </Link>
          <p className="text-[#A5ACAF] text-sm">Precision laser engraving solutions for B2B clients.</p>
        </div>
        <nav className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Link href="/medical" className="hover:text-[#A5ACAF]" prefetch={false}>
              Medical
            </Link>
            <Link href="/professional" className="hover:text-[#A5ACAF]" prefetch={false}>
              Professional
            </Link>
            <Link href="/restaurants" className="hover:text-[#A5ACAF]" prefetch={false}>
              Restaurants
            </Link>
            <Link href="/real-estate" className="hover:text-[#A5ACAF]" prefetch={false}>
              Real Estate
            </Link>
            <Link href="/agriculture" className="hover:text-[#A5ACAF]" prefetch={false}>
              Agriculture
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/retail" className="hover:text-[#A5ACAF]" prefetch={false}>
              Retail
            </Link>
            <Link href="/industrial" className="hover:text-[#A5ACAF]" prefetch={false}>
              Industrial
            </Link>
            <Link href="/tech" className="hover:text-[#A5ACAF]" prefetch={false}>
              Tech
            </Link>
            <Link href="/hospitality" className="hover:text-[#A5ACAF]" prefetch={false}>
              Hospitality
            </Link>
            <Link href="/gifts" className="hover:text-[#A5ACAF]" prefetch={false}>
              Gifts
            </Link>
          </div>
        </nav>
        <div className="flex flex-col items-start md:items-end">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-[#A5ACAF] text-sm">123 Laser Lane, Engraveville, MD 12345</p>
          <p className="text-[#A5ACAF] text-sm">info@ezengrave.com</p>
          <p className="text-[#A5ACAF] text-sm">(123) 456-7890</p>
        </div>
      </div>
      <div className="container mx-auto border-t border-[#A5ACAF] mt-8 pt-4 text-center text-sm text-[#A5ACAF]">
        &copy; {new Date().getFullYear()} EZ Engrave Everything. All rights reserved.
      </div>
    </footer>
  )
}
