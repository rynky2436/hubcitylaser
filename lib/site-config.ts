export type SiteNavItem = { label: string; href: string }

export type SiteConfig = {
  brand: {
    name: string
    logo: string
    alt: string
  }
  contact: {
    phone: string
    email: string
  }
  cta: {
    bookConsultationText: string
    bookConsultationUrl: string
  }
  colors: {
    primary: string
    secondary: string
    background: string
  }
  nav: SiteNavItem[]
}

export const SITE_CONFIG: SiteConfig = {
  brand: {
    name: "Engrave Everything",
    // Use the newly provided logo asset
    logo: "/images/engrave-everything-logo-vintage.png",
    alt: "Engrave Everything ornate logo",
  },
  contact: {
    phone: "240-324-7110",
    email: "info@engraveeverything.us",
  },
  cta: {
    bookConsultationText: "Book Consultation",
    bookConsultationUrl: "https://calendly.com/ryan-mangan/custom-laser-engraving-consultation",
  },
  colors: {
    primary: "#002B5C", // Deep blue
    secondary: "#A5ACAF", // Silver
    background: "#FFFFFF", // White
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/professional" },
    { label: "Services", href: "/services" },
    { label: "Events & Occasions", href: "/events-occasions" },
    { label: "Locations", href: "/areas-we-serve" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
}

// Utilities
export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "")
  return `tel:${digits}`
}
export function mailtoHref(email: string) {
  return `mailto:${email}`
}
