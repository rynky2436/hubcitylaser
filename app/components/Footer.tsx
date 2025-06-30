import Link from "next/link"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-hub-blue text-hub-white py-8 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/images/logo-blk.png"
              alt="Engrave Everything Logo"
              width={180}
              height={45}
              className="h-auto"
            />
            <span className="sr-only">Engrave Everything</span>
          </Link>
          <p className="text-sm text-hub-silver">Precision laser engraving for businesses.</p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <Link className="text-hub-silver hover:underline" href="/">
            Home
          </Link>
          <Link className="text-hub-silver hover:underline" href="/services">
            Services
          </Link>
          <Link className="text-hub-silver hover:underline" href="/industries">
            Industries
          </Link>
          <Link className="text-hub-silver hover:underline" href="/events-occasions">
            Events & Occasions
          </Link>
          <Link className="text-hub-silver hover:underline" href="/gifts">
            Gifts
          </Link>
          <Link className="text-hub-silver hover:underline" href="/blog">
            Blog
          </Link>
          <Link className="text-hub-silver hover:underline" href="/contact">
            Contact
          </Link>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Service Areas</h3>
          <p className="text-hub-silver">Washington DC</p>
          <p className="text-hub-silver">Maryland</p>
          <p className="text-hub-silver">Northern VA</p>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <a href="tel:2403247110" className="flex items-center gap-2 text-hub-silver hover:underline">
            <Phone className="h-5 w-5" />
            (240) 324-7110
          </a>
          <a
            href="mailto:info@engraveeverything.us"
            className="flex items-center gap-2 text-hub-silver hover:underline"
          >
            <Mail className="h-5 w-5" />
            info@engraveeverything.us
          </a>
        </div>
      </div>
      <div className="container mx-auto border-t border-hub-silver mt-8 pt-4 text-center text-sm text-hub-silver">
        &copy; {new Date().getFullYear()} Engrave Everything. All rights reserved.
      </div>
    </footer>
  )
}
