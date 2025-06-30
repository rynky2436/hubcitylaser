import type { Metadata } from "next"
import Link from "next/link" // Corrected import
import ServiceCategoryTemplate from "../../components/ServiceCategoryTemplate"

export const metadata: Metadata = {
  title: "Personalized Gifts & Custom Items Laser Engraving | Washington DC, Maryland & Virginia",
  description:
    "Custom laser-engraved personalized gifts for all occasions. Serving DC, MD & VA with unique keepsakes, home decor & pet tags. Quality craftsmanship, fast turnaround. Order yours today!",
  keywords:
    "personalized gifts laser engraving Washington DC, custom keepsakes Maryland, wedding gifts Virginia, home decor Hagerstown, pet tags Potomac, holiday ornaments Ashburn",
}

const serviceItems = [
  "Wedding keepsakes laser engraved on wood and metal with custom designs",
  "Retirement gifts and milestone recognition, tailored to individual achievements",
  "Custom home décor laser cut and engraved, including intricate patterns",
  "Pet accessories and identification tags, durable and personalized",
  "Holiday ornaments and seasonal gifts, available for batch production for corporate gifting",
]

export default function PersonalizedGiftsPage() {
  const expertiseContent = (
    <div className="space-y-6">
      <p className="text-lg">
        Engrave Everything transforms ordinary items into extraordinary personalized gifts through our precision laser
        engraving services. We help customers throughout the DMV area create meaningful keepsakes and custom items that
        celebrate special moments and relationships.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Personalization Expertise</h3>
          <p>
            Our laser engraving specialists can transform your ideas, photos, handwriting samples, and custom designs
            into permanent keepsakes on a wide variety of materials, creating truly one-of-a-kind gifts.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Material Versatility</h3>
          <p>
            From wood and leather to glass, metal, and stone, our laser technology can personalize virtually any
            material, giving you endless options for creating the perfect gift for any occasion.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Design Assistance</h3>
          <p>
            Not sure how to bring your gift idea to life? Our in-house design team can help you create the perfect
            personalized gift, offering suggestions for materials, layouts, and engraving techniques.
          </p>
        </div>

        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Quick Turnaround</h3>
          <p>
            We understand that gifts are often needed for specific dates and occasions. Our efficient production process
            allows us to deliver most personalized gifts within 3-5 business days, with rush options available.
          </p>
        </div>
      </div>
    </div>
  )

  const locationContent = (
    <div className="space-y-4">
      <p className="text-lg">
        Engrave Everything creates custom personalized gifts for customers throughout Washington DC, Maryland, and
        Northern Virginia. From our Hagerstown facility, we serve clients across the region including:
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <ul className="space-y-2">
          <li className="font-semibold">Washington DC Area</li>
          <li>Georgetown</li>
          <li>Dupont Circle</li>
          <li>Capitol Hill</li>
          <li>Downtown</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Maryland</li>
          <li>Hagerstown</li>
          <li>Frederick</li>
          <li>Rockville</li>
          <li>Bethesda</li>
          <li>Potomac</li>
          <li>Silver Spring</li>
        </ul>

        <ul className="space-y-2">
          <li className="font-semibold">Virginia</li>
          <li>Arlington</li>
          <li>Alexandria</li>
          <li>Fairfax</li>
          <li>Ashburn</li>
          <li>Reston</li>
          <li>Loudoun County</li>
        </ul>
      </div>

      <p className="mt-4">
        Our local presence means we can provide personalized service and quick turnaround times for customers throughout
        the DMV area. We offer convenient consultations to help you select the perfect personalized gift for any
        occasion.
      </p>

      <p className="font-semibold">
        Need a last-minute gift? We offer rush services and local pickup options for time-sensitive gift needs.
      </p>
    </div>
  )

  const additionalContent = (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-[#002B5C]">Personalized Gift Applications</h2>

      <div className="mb-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Wedding & Anniversary Gifts</h3>
          <p className="mb-4">
            Celebrate love and commitment with custom laser-engraved wedding and anniversary gifts. Our personalized
            keepsakes become cherished mementos that couples will treasure for years to come.
          </p>
          <p>Popular wedding gifts include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Custom cutting boards with names and dates</li>
            <li>Personalized wine boxes and glasses</li>
            <li>Wedding photo frames with custom engraving</li>
            <li>Custom signage for wedding venues</li>
            <li>Bridal party gifts and favors</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-semibold text-[#002B5C]">Home Décor & Housewares</h3>
          <p className="mb-4">
            Transform living spaces with custom laser-engraved home décor items. Our personalized housewares add a
            unique touch to any home and make thoughtful gifts for housewarmings and special occasions.
          </p>
          <p>Custom home items include:</p>
          <ul className="mt-2 list-inside list-disc">
            <li>Family name signs and established date plaques</li>
            <li>Custom coasters and serving boards</li>
            <li>Decorative wall art with personalized designs</li>
            <li>Kitchen accessories with custom engraving</li>
            <li>Photo frames with names and special dates</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg bg-gray-50 p-6">
        <h3 className="mb-4 text-xl font-semibold text-[#002B5C]">Pet Accessories & Identification</h3>
        <p className="mb-4">
          Keep your furry friends safe and stylish with custom laser-engraved pet tags and accessories. Our durable pet
          identification products combine functionality with personalized style.
        </p>
        <p>
          Learn more about our{" "}
          <Link href="/services" className="font-medium text-[#002B5C] underline">
            complete gift catalog
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-medium text-[#002B5C] underline">
            contact us
          </Link>{" "}
          to discuss your personalized gift ideas.
        </p>
      </div>
    </div>
  )

  return (
    <ServiceCategoryTemplate
      title="Personalized Gifts & Custom Items"
      description="Create unique and memorable gifts with our custom laser engraving services. Perfect for weddings, retirements, home decor, and special occasions, adding a personal touch to every item."
      heroImage="/images/real-estate.png"
      imageAlt="Custom laser engraved personalized gifts and keepsakes for Washington DC, Maryland and Virginia customers"
      serviceItems={serviceItems}
      ctaText="Order Personalized Gifts"
      ctaLink="/contact"
      secondaryCtaText="View All Services"
      secondaryCtaLink="/services"
      expertiseContent={expertiseContent}
      locationContent={locationContent}
      additionalContent={additionalContent}
    />
  )
}
